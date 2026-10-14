import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { choose, getPage, renderText, startState, visibleChoices } from '../src/engine/engine';
import { checkStory } from '../src/engine/check';
import { DIFFICULTIES, type Difficulty } from '../src/engine/types';
import { referencesForPage, type ArtReference } from './art-references';
import story from '../stories/last-skyway/story';

type Step = string | readonly [target: string, index: number];
function walk(route: readonly Step[], difficulty: Difficulty = 'medium') {
  let page = getPage(story, story.start);
  let state = startState(story, difficulty);
  const texts = new Map([[page.id, renderText(story, page, state).join('\n')]]);
  let words = texts.get(page.id)!.split(/\s+/).length;
  for (const step of route) {
    const target = typeof step === 'string' ? step : step[0];
    const visible = visibleChoices(page, state);
    const matches = typeof step === 'string' ? visible.filter((c) => c.to === target) : [page.choices?.[step[1]]];
    assert.equal(matches.length, 1, `${page.id} → ${target} (${difficulty})`);
    const choice = matches[0];
    assert.ok(choice && visible.includes(choice), `${page.id} → ${target} must be available (${difficulty})`);
    assert.equal(choice.to, target);
    state = choose(story, state, choice);
    page = getPage(story, target);
    const text = renderText(story, page, state).join('\n');
    texts.set(page.id, text);
    words += text.split(/\s+/).length;
  }
  return { page, state, texts, words, text: texts.get(page.id)! };
}
const opening: Step[] = ['A02', 'A03', 'A04', 'A05', 'A06', 'B01'];
const prep: Step[] = ['B02', 'B01', 'B03', 'B01', 'B04', 'B01', 'B05', 'B07', 'B08', 'C01'];
const ridge: Step[] = ['C02', 'C04', 'C05', 'C06', 'C08', 'D01', 'D02', 'D04', 'D05', 'D07', 'D08', 'F01'];
const finish: Step[] = ['F02', ['F03', 0], 'F04', 'F06', 'F07', 'F08'];
const careful = [...opening, ...prep, ...ridge];
const complete = [...careful, ...finish];
function insertBefore(route: readonly Step[], target: string, extra: Step[]) {
  return route.flatMap((step) => step === target ? [...extra, step] : [step]);
}
function omitVisit(route: readonly Step[], id: string) {
  const index = route.indexOf(id);
  assert.ok(index >= 0);
  return [...route.slice(0, index), ...route.slice(index + 2)];
}

test('Last Skyway: revision one, 48 pages, ten distinct endings, one best, route-valid art plan', () => {
  assert.equal(story.revision, 1);
  assert.equal(story.pages.length, 48);
  assert.equal(story.pages.filter((p) => p.ending?.kind === 'good').length, 6);
  assert.equal(story.pages.filter((p) => p.ending?.kind === 'bad').length, 4);
  assert.deepEqual(story.pages.filter((p) => p.ending?.best).map((p) => p.id), ['E09']);
  const plan: ArtReference[] = JSON.parse(readFileSync(new URL('../stories/last-skyway/references/manifest.json', import.meta.url), 'utf8'));
  for (const subject of Object.keys(story.art.cast)) assert.ok(plan.some((r) => r.subjects.includes(subject)), subject);
  for (const page of story.pages) {
    assert.ok(page.imagePrompt.trim(), page.id);
    assert.ok(referencesForPage(plan, page).some((r) => r.pages?.includes(page.id)), `${page.id}: explicit scenery/prop coverage`);
    assert.doesNotMatch(page.imagePrompt, /if present|if acquired|when present/i);
  }
  for (const reference of plan) {
    for (const id of reference.pages ?? []) assert.ok(story.pages.some((p) => p.id === id), id);
  }
});

test('Last Skyway: complete route costs 70 and preserves equipment reserve on each difficulty', () => {
  for (const [difficulty, start, left] of [['easy', 110, 40], ['medium', 94, 24], ['hard', 86, 16]] as const) {
    const result = walk([...complete, 'E09'], difficulty);
    assert.equal(startState(story, difficulty).window, start);
    assert.equal(result.state.window, left);
    assert.equal(result.state.running, false);
    assert.equal(result.page.ending?.best, true);
    assert.equal(result.state.docked, true);
    for (const flag of ['weather', 'governor', 'blankets', 'traced', 'synced', 'logged']) assert.equal(result.state[flag], true, flag);
    assert.match(result.text, /Both passengers are home/);
    // Substantive route: about 20–25 minutes at 240–290 words/minute, plus decisions.
    assert.ok(result.words >= 4000 && result.words <= 6500, `${result.words} words`);
  }
});

test('Last Skyway: each observed clue matters even with ample time and correctly guessed controls', () => {
  for (const flag of ['weather', 'governor', 'traced'] as const) {
    const route = flag === 'weather' ? omitVisit(complete, 'B02')
      : flag === 'governor' ? omitVisit(complete, 'B03')
      : complete.map((step) => step === 'C06' ? 'C07' : step);
    const result = walk(route, 'easy');
    assert.equal(result.state[flag], false);
    assert.ok(Number(result.state.window) >= 40);
    assert.ok(!visibleChoices(result.page, result.state).some((c) => c.to === 'E09'), flag);
    assert.equal(walk([...route, 'E08'], 'easy').page.ending?.kind, 'good');
    assert.match(result.text, /full winter inspection/);
  }
});

test('Last Skyway: Medium tolerates each single recovery; Hard requires clean work', () => {
  const latch = insertBefore(complete, 'B07', ['B06']);
  const lift = complete.map((step) => step === 'C02' ? 'C03' : step);
  const contact = insertBefore(complete, 'D05', ['D06']);
  for (const route of [latch, lift, contact]) {
    const medium = walk([...route, 'E09']);
    assert.equal(medium.state.window, 16);
    const hard = walk([...route, 'E08'], 'hard');
    assert.equal(hard.state.window, 8);
    assert.equal(hard.page.ending?.best, undefined);
    assert.match(hard.texts.get('F08')!, /full winter inspection/);
  }
  const twice = insertBefore(lift, 'B07', ['B06']);
  assert.equal(walk([...twice, 'E08']).state.window, 8);
  const thrice = insertBefore(twice, 'D05', ['D06']);
  assert.equal(walk([...thrice, 'E09'], 'easy').state.window, 16);
  // Hard cannot pay full docking after two recoveries; bridge still gives a good ending.
  const bridgeRoute = twice.slice(0, twice.indexOf('F04'));
  const bridge = walk([...bridgeRoute, 'F05', 'E07'], 'hard');
  assert.equal(bridge.state.window, 6);
  assert.equal(bridge.page.ending?.kind, 'good');
  assert.match(bridge.text, /approach-cradle inspection card/);
});

test('Last Skyway: missing wrap changes possession, plate outcome and ending, never passenger safety', () => {
  const route = omitVisit(complete, 'B04');
  const result = walk([...route, 'E07']);
  assert.equal(result.state.blankets, false);
  assert.match(result.texts.get('D07')!, /dry refuge blanket/);
  assert.doesNotMatch(result.texts.get('D07')!, /take the cream insulated wrap from your bag/);
  assert.match(result.texts.get('F08')!, /coatings fogged/);
  assert.match(result.text, /glass survived/);
  const wrapped = walk([...complete, 'E09']);
  assert.match(wrapped.texts.get('D07')!, /wrap stays on the box/);
  assert.doesNotMatch(wrapped.texts.get('F08')!, /coatings fogged/);
});

test('Last Skyway: wrong governor is safely overridden but cannot be certified away', () => {
  const route = complete.map((step): Step => Array.isArray(step) ? ['F03', 1] : step);
  const result = walk([...route, 'E08']);
  assert.equal(result.state.synced, false);
  assert.match(result.texts.get('F03')!, /conservative local mode/);
  assert.match(result.texts.get('F08')!, /full winter inspection/);
  assert.equal(result.page.ending?.kind, 'good');
  const arrivalOnly = complete.filter((step) => step !== 'F07');
  assert.equal(walk([...arrivalOnly, 'E08']).state.logged, false);
});

test('Last Skyway: early and late cancellations preserve locations and movement history', () => {
  assert.equal(walk(['A02', 'A03', 'E01']).state.running, false);
  assert.match(walk([...opening, 'E02']).text, /cross the lower dispatch room to the workshop bench/);
  const beforeCabin = careful.slice(0, careful.indexOf('D08'));
  assert.match(walk([...beforeCabin, 'E05']).text, /short|level|receiving cradle/);
  const beforeHeat = careful.slice(0, careful.indexOf('D01'));
  assert.match(walk([...beforeHeat, 'E10']).text, /seedlings/);
  const beforeRoute = careful.slice(0, careful.indexOf('D04'));
  assert.match(walk([...beforeRoute, 'D03', 'E03']).text, /cabin never moved/);
  const early = walk([...careful, 'E04']);
  assert.equal(early.state.moved, false);
  assert.doesNotMatch(early.text, /reverses the first short movement/);
  const late = walk([...careful, 'F02', 'E04']);
  assert.equal(late.state.moved, true);
  assert.match(late.text, /reverses the first short movement/);
  assert.match(late.text, /bridge can now be secured/);
  const surge = walk([...careful, 'E06']);
  assert.match(surge.text, /remains within reach of the boarding bridge/);
});

test('Last Skyway: every reachable state preserves budgets, complete certification and finishing routes', () => {
  const report = checkStory(story);
  assert.deepEqual(report.errors, []);
  assert.equal(report.stats.endingsReached, 10);
  const queue = DIFFICULTIES.map((d) => ({ id: story.start, state: startState(story, d) }));
  const seen = new Set<string>();
  for (let i = 0; i < queue.length; i++) {
    const { id, state } = queue[i];
    const key = id + JSON.stringify(state);
    if (seen.has(key)) continue;
    seen.add(key);
    const page = getPage(story, id);
    assert.ok(Number(state.window) > 0, key);
    if (page.ending) {
      assert.equal(state.running, false, key);
      if (page.ending.best) {
        for (const flag of ['weather', 'governor', 'traced', 'blankets', 'synced', 'logged', 'docked']) assert.equal(state[flag], true, key);
        assert.ok(Number(state.window) >= 10, key);
        assert.equal(state.bridge, false, key);
      }
      continue;
    }
    for (const c of visibleChoices(page, state)) {
      const next = choose(story, state, c);
      assert.ok(Number(next.window) <= Number(state.window), key);
      queue.push({ id: c.to, state: next });
    }
  }
});


test('Last Skyway review: equipment certification survives the no-wrap E07 outcome', () => {
  const noWrap = omitVisit(complete, 'B04');
  for (const difficulty of DIFFICULTIES) {
    const result = walk([...noWrap, 'E07'], difficulty);
    assert.equal(result.state.blankets, false);
    assert.match(result.texts.get('F08')!, /finish the auxiliary drain-down/);
    assert.match(result.text, /auxiliary drain-down is complete/);
    assert.match(result.text, /routine morning inspection/);
    assert.match(result.text, /coatings fogged/);
    assert.doesNotMatch(result.text, /winter work|tram needs more work/);
  }
  const limited = walk([...omitVisit(noWrap, 'B02'), 'E07']);
  assert.match(limited.text, /isolated for winter work/);
  assert.doesNotMatch(limited.text, /drain-down is complete/);
});

test('Last Skyway review: names are introduced before A03 refusal and every early refuge ending', () => {
  const declined = walk(['A02', 'A03', 'E01']);
  assert.match(declined.texts.get('A02')!, /Fen, the observatory cook, and Ellis, a telescope technician/);
  assert.ok(!declined.texts.has('A06'));
  assert.match(declined.text, /Mara, Fen and Ellis/);
  const beforeContact = careful.slice(0, careful.indexOf('D05'));
  for (const route of [beforeContact, [...beforeContact, 'D05']]) {
    const result = walk([...route, 'E04']);
    assert.ok(!result.texts.has('D07'));
    assert.match(result.texts.get('A02')!, /Fen, the observatory cook/);
    assert.match(result.text, /follow Mara through the enclosed link into the refuge/);
  }
  assert.match(walk(careful).texts.get('D07')!, /meet Fen, the cook, and Ellis, the telescope technician, in person/);
});

test('Last Skyway review: dispatch aborts stay local and actual gallery arrivals retrace their route', () => {
  for (const route of [opening, [...opening, 'B05']]) {
    const result = walk([...route, 'E02']);
    assert.equal(result.state.enteredGallery, false);
    assert.match(result.text, /cross the lower dispatch room/);
    assert.doesNotMatch(result.text, /retrace the enclosed service gallery|door unlatched/);
  }
  for (const route of [[...opening, 'B05', 'B07'], careful.slice(0, careful.indexOf('D01'))]) {
    const result = walk([...route, 'E02']);
    assert.equal(result.state.enteredGallery, true);
    assert.match(result.text, /retrace the enclosed service gallery to the lower workshop/);
    assert.doesNotMatch(result.text, /cross the lower dispatch room/);
  }
});

test('Last Skyway review: wrong physical route can recover; limit stop grounds equipment with time still left', () => {
  const beforeNomination = complete.slice(0, complete.indexOf('D04'));
  const corrected = [...beforeNomination, 'D03', ...complete.slice(complete.indexOf('D04'))];
  assert.equal(walk([...corrected, 'E09']).state.window, 16);
  assert.equal(walk([...corrected, 'E08'], 'hard').state.window, 8);
  const declined = walk([...beforeNomination, 'D03', 'E03'], 'easy');
  assert.ok(Number(declined.state.window) >= 60);
  assert.match(declined.texts.get('D03')!, /recheck the eastern approach/);
  assert.doesNotMatch(declined.texts.get('D03')!, /would consume the safe preparation window/);
  assert.match(declined.text, /protected link into the refuge/);
  assert.match(declined.text, /crossover unselected/);
  assert.doesNotMatch(declined.text, /crossover pinned/);
  const stopped = walk([...careful, 'E06'], 'easy');
  assert.ok(Number(stopped.state.window) >= 50);
  assert.match(stopped.text, /pointer to the marked limit/);
  assert.match(stopped.text, /out of service until its unloaded running gear can be inspected/);
  assert.doesNotMatch(stopped.text, /used the remaining weather opportunity/);
  assert.match(stopped.texts.get('A04')!, /rigged platform/);
});

test('Last Skyway review: plates, weather observation, latch, bell and horizontal cradle stay consistent', () => {
  const result = walk([...complete, 'E09']);
  assert.match(result.texts.get('B04')!, /exposed, unprocessed coatings/);
  assert.match(result.texts.get('D07')!, /last night’s telescope calibration/);
  assert.match(result.texts.get('B02')!, /reading a report from the ridge/);
  assert.match(result.texts.get('F01')!, /outer mast, visible directly from the cabin window/);
  assert.match(result.texts.get('B01')!, /door is still locked/);
  assert.match(result.texts.get('B05')!, /key you took from the dispatch hook/);
  assert.match(result.texts.get('F07')!, /bell rings when Imani shuts/);
  const noWrap = walk([...omitVisit(complete, 'B04'), 'E07']);
  assert.match(noWrap.texts.get('F08')!, /fogged plates will still go to processing/);
  assert.doesNotMatch(noWrap.texts.get('F08')!, /empty plate box/);
  const cradle = walk([...careful.slice(0, careful.indexOf('D08')), 'E05']);
  assert.match(cradle.texts.get('D07')!, /short way sideways/);
  assert.match(cradle.text, /draw it horizontally/);
  assert.match(cradle.text, /doorway stays level/);
  assert.match(getPage(story, 'B02').imagePrompt, /No physical ribbon, observation tube/);
  assert.match(getPage(story, 'F01').imagePrompt, /outer crossover mast carries one blue wind ribbon/);
  assert.match(getPage(story, 'E05').imagePrompt, /no vertical lift/);
});
