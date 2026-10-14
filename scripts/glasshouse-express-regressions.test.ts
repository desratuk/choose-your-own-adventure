import assert from 'node:assert/strict';
import { test } from 'node:test';
import { choose, getPage, renderText, startState, visibleChoices } from '../src/engine/engine';
import { DIFFICULTIES, type Difficulty } from '../src/engine/types';
import story from '../stories/glasshouse-express/story';

// Indexed steps refer to the original choices, not the filtered visible list.
type Step = string | readonly [target: string, choiceIndex: number];

function walk(route: readonly Step[], difficulty: Difficulty = 'medium') {
  let page = getPage(story, story.start);
  let state = startState(story, difficulty);
  const texts = new Map([[page.id, renderText(story, page, state).join('\n')]]);
  for (const step of route) {
    const target = typeof step === 'string' ? step : step[0];
    const available = visibleChoices(page, state);
    const matches = typeof step === 'string'
      ? available.filter((choice) => choice.to === target)
      : [page.choices?.[step[1]]];
    const context = `${page.id} → ${target} on ${difficulty}`;
    assert.equal(matches.length, 1, `Expected one choice: ${context}`);
    const choice = matches[0];
    assert.ok(choice && available.includes(choice), `Choice must be available: ${context}`);
    assert.equal(choice.to, target, context);
    state = choose(story, state, choice);
    page = getPage(story, target);
    texts.set(page.id, renderText(story, page, state).join('\n'));
  }
  return { page, state, texts, text: texts.get(page.id)! };
}

const terminus: Step[] = ['A02', 'A03'];
const tapes: Step[] = ['A04', 'A03'];
const vents: Step[] = ['A05', 'A03'];
const toHalt: Step[] = ['A06', 'B01', 'B02', 'B06', 'B07'];
const nan: Step[] = ['B09', 'B07'];
const depot: Step[] = ['B10', 'B07'];
const toCut: Step[] = ['C01', 'C02', 'C03'];
const studio: Step[] = ['C04', 'C03'];
const toTunnel: Step[] = ['D01', 'D02', 'D03'];
const careful: Step[] = [...terminus, ...tapes, ...vents, ...toHalt, 'B08', 'B07', ...nan, ...toCut, ...toTunnel];
const fast: Step[] = [...terminus, ...toHalt, ...toCut, ...toTunnel];
const chill: Step[] = [['D04', 2], 'D06', 'D05', 'F01', 'F02'];
const plain: Step[] = [['D04', 0], 'D05', 'F01', 'F02'];
const bestFinish: Step[] = ['F03', 'F04', 'F06', 'E10'];

function insertBefore(route: readonly Step[], target: string, extra: readonly Step[]): Step[] {
  return route.flatMap((step) => step === target ? [...extra, step] : [step]);
}

function skipVisit(route: readonly Step[], visit: string): Step[] {
  const index = route.indexOf(visit);
  assert.ok(index >= 0, visit);
  // Remove the visit and its return to the hub, preserving the first hub arrival.
  return [...route.slice(0, index), ...route.slice(index + 2)];
}

function targets(result: ReturnType<typeof walk>): string[] {
  return visibleChoices(result.page, result.state).map((choice) => choice.to);
}

test('Glasshouse Express: 44 pages, ten labelled endings and exactly one best ending', () => {
  assert.equal(story.revision, 1);
  assert.equal(story.pages.length, 44);
  assert.equal(story.pages.filter((page) => page.ending?.kind === 'good').length, 5);
  assert.equal(story.pages.filter((page) => page.ending?.kind === 'bad').length, 5);
  assert.deepEqual(story.pages.filter((page) => page.ending?.best).map((page) => page.id), ['E10']);
  assert.deepEqual(story.ui, { header: 'basic', transition: 'fade' });
  assert.equal(story.clock?.flag, 'ember');
  assert.equal(story.clock?.format, 'number');
  for (const page of story.pages) {
    assert.ok(page.imagePrompt.trim(), page.id);
    assert.ok(page.cast?.length, `${page.id} lists its visible cast`);
    for (const subject of page.cast ?? []) assert.ok(story.art.cast[subject], `${page.id}: ${subject}`);
  }
});

test('Glasshouse Express: the full run spends 70 and keeps ten bricks on every difficulty', () => {
  for (const [difficulty, start, remaining] of [['easy', 100, 30], ['medium', 90, 20], ['hard', 80, 10]] as const) {
    assert.equal(startState(story, difficulty).ember, start);
    assert.equal(startState(story, difficulty).running, false);
    const result = walk([...careful, ...chill, ...bestFinish], difficulty);
    assert.equal(result.page.ending?.best, true);
    assert.equal(result.state.ember, remaining);
    assert.equal(result.state.running, false);
    assert.equal(result.state.chilled, true);
    assert.equal(result.state.stoked, false);
    assert.equal(result.state.wordSent, false);
    assert.match(result.texts.get('A03')!, new RegExp(`${start - 10} bricks`));
    assert.match(result.texts.get('D04')!, /frost ferns grow on the inside of the panes/);
    assert.match(result.text, /counted the cold, as a bulb counts it/);
    assert.doesNotMatch(result.text, /Cassia Flint tells the city/);
  }
});

test('Glasshouse Express: the tunnel chill needs all three clues; spare bricks cannot replace one', () => {
  for (const [visit, flag] of [['A04', 'tapeHeard'], ['A05', 'ventFreed'], ['B09', 'bulbLore']] as const) {
    const route = skipVisit(careful, visit);
    const result = walk(route, 'easy');
    assert.equal(result.state[flag], false);
    assert.equal(result.state.ember, 55);
    assert.ok(!visibleChoices(result.page, result.state).some((choice) => choice.set?.chilled), visit);
    assert.deepEqual(targets(result), ['D04', 'D04']);
  }
  const all = walk(careful, 'hard');
  assert.equal(all.state.ember, 30);
  assert.equal(visibleChoices(all.page, all.state).length, 3);
});

test('Glasshouse Express: the tunnel page never names the clues or the right moment', () => {
  const result = walk(careful, 'hard');
  assert.doesNotMatch(result.text, /tape|Hesper’s voice|bulb|Nan|remember|Long Summer|count the cold/i);
  const choices = visibleChoices(result.page, result.state).map((choice) => choice.text);
  assert.deepEqual(choices, [
    'Keep the stove as it is and ride the tunnel',
    'Stoke the stove high before the tunnel',
    'Open the roof vents for the tunnel, and stoke for the top',
  ]);
  const shutters = walk([...careful, ...chill, 'F03', 'F04'], 'hard');
  assert.doesNotMatch(shutters.text, /autovent on the carriage|you freed|remember/i);
  assert.deepEqual(targets(shutters), ['E05', 'F05', 'F06']);
});

test('Glasshouse Express: the shutters cylinder option exists only with the freed autovent', () => {
  const noVents = skipVisit(careful, 'A05');
  const result = walk([...noVents, ...plain, 'F03', 'F04'], 'easy');
  assert.equal(result.state.ventFreed, false);
  assert.deepEqual(targets(result), ['E05', 'F05']);
  assert.equal(walk([...noVents, ...plain, 'F03', 'F04', 'F05', 'E07'], 'easy').page.ending?.kind, 'good');
  assert.equal(walk([...noVents, ...plain, 'F03', 'F04', 'E05'], 'easy').page.ending?.kind, 'bad');
});

for (const [name, route] of [
  ['the Ember Works siding', careful.map((step) => step === 'B02' ? 'B03' : step).flatMap((step): Step[] => step === 'B03' ? ['B03', 'B04', 'B05'] : [step])],
  ['opening the vents on the Mere', insertBefore(careful, 'D01', ['C05', 'C03'])],
  ['the run at the incline', careful.flatMap((step): Step[] => step === 'D01' ? ['D01', 'D07'] : [step])],
] as const) {
  test(`Glasshouse Express: ${name} costs ten, recoverable for Medium best and Hard ordinary`, () => {
    const medium = walk([...route, ...chill, ...bestFinish]);
    assert.equal(medium.page.ending?.best, true);
    assert.equal(medium.state.ember, 10);
    const hard = walk([...route, ...chill, 'F03'], 'hard');
    assert.equal(hard.state.ember, 10);
    assert.deepEqual(targets(hard), ['E06']);
    assert.equal(walk([...route, ...chill, 'F03', 'E06'], 'hard').page.ending?.kind, 'good');
    assert.equal(walk([...route, ...plain, ...bestFinish.slice(0, -1), 'E09'], 'hard').state.ember, 10);
  });
}

test('Glasshouse Express: stoking high is a ten-brick slip that leaves wilted leaves and no chill', () => {
  const route = [...careful, ['D04', 1] as const, 'D05', 'F01', 'F02', 'F03'];
  const result = walk(route, 'hard');
  assert.equal(result.state.stoked, true);
  assert.equal(result.state.chilled, false);
  assert.equal(result.state.ember, 20);
  assert.match(result.texts.get('D04')!, /leaves have gone soft at the edges/);
  assert.match(result.texts.get('D05')!, /a few at the edges stay crumpled/);
  assert.deepEqual(targets(result), ['F04', 'E06']);
  const medium = walk([...careful, ['D04', 1] as const, 'D05', 'F01', 'F02', 'F03', 'F04', 'F06', 'E09']);
  assert.equal(medium.page.ending?.kind, 'good');
  assert.equal(medium.page.ending?.best, undefined);
  assert.equal(medium.state.ember, 20);
});

test('Glasshouse Express: Easy absorbs two slips; Medium must plant cold after two', () => {
  const twoSlips = insertBefore(careful, 'D01', ['C05', 'C03']).flatMap((step): Step[] => step === 'D01' ? ['D01', 'D07'] : [step]);
  const easy = walk([...twoSlips, ...chill, ...bestFinish], 'easy');
  assert.equal(easy.page.ending?.best, true);
  assert.equal(easy.state.ember, 10);
  const medium = walk([...twoSlips, ...chill, 'F03']);
  assert.equal(medium.state.ember, 10);
  assert.deepEqual(targets(medium), ['E06']);
  assert.match(walk([...twoSlips, ...chill, 'F03', 'E06']).text, /long cold of the tunnel/);
});

test('Glasshouse Express: the fast route needs no clues, spends 45 and earns the thin summer', () => {
  for (const [difficulty, remaining] of [['easy', 55], ['medium', 45], ['hard', 35]] as const) {
    const result = walk([...fast, ...plain, 'F03', 'F04', 'F05', 'E07'], difficulty);
    assert.equal(result.page.ending?.kind, 'good');
    assert.equal(result.page.ending?.best, undefined);
    assert.equal(result.state.ember, remaining);
    assert.equal(result.state.tapeHeard, false);
    assert.equal(result.state.ventFreed, false);
    assert.equal(result.state.bulbLore, false);
    assert.match(result.text, /Half the bed blooms/);
    assert.match(result.text, /You ring Hesper from the Conservatory telephone/);
  }
});

test('Glasshouse Express: the depot and the studio each cost five and save five later', () => {
  const held = walk([...terminus, ...toHalt, ...depot, 'C01'], 'hard');
  const unheld = walk([...terminus, ...toHalt, 'C01'], 'hard');
  assert.equal(held.state.ember, unheld.state.ember);
  assert.equal(held.state.ember, 60);
  assert.match(held.text, /depot crew kept their word/);
  assert.match(unheld.text, /burned bricks the whole time you stood there/);
  const sent = walk([...fast.slice(0, -3), ...studio, ...toTunnel, ...plain, 'F03'], 'hard');
  const unsent = walk([...fast, ...plain, 'F03'], 'hard');
  assert.equal(sent.state.wordSent, true);
  assert.match(sent.texts.get('F01')!, /Cassia Flint said you’d be an hour/);
  assert.match(unsent.texts.get('F01')!, /Nobody rang/);
  assert.match(sent.texts.get('F02')!, /half a hod/);
  assert.match(unsent.texts.get('F02')!, /nothing to light this with/);
  const sentLit = visibleChoices(sent.page, sent.state).find((choice) => choice.to === 'F04')!;
  const unsentLit = visibleChoices(unsent.page, unsent.state).find((choice) => choice.to === 'F04')!;
  assert.equal(choose(story, sent.state, sentLit).ember, choose(story, unsent.state, unsentLit).ember);
});

test('Glasshouse Express: the siding route carries Sallow into the halt call and the studio', () => {
  const siding: Step[] = [...terminus, 'A06', 'B01', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B07', ...toCut, ...studio];
  const result = walk(siding, 'easy');
  assert.equal(result.state.metSallow, true);
  assert.match(result.texts.get('B08')!, /his offer of a free locker/);
  assert.match(result.texts.get('C04')!, /He offered you bricks\? Tonight\?/);
  const direct = walk([...terminus, ...toHalt, 'B08', 'B07', ...toCut, ...studio], 'easy');
  assert.equal(direct.state.metSallow, false);
  assert.match(direct.texts.get('B08')!, /“Lucan Sallow,” Hesper says. “The Ember Company’s man/);
  assert.match(direct.texts.get('C04')!, /That I will say more than once/);
  assert.doesNotMatch(direct.texts.get('B01')!, /Sallow/);
  assert.doesNotMatch(direct.texts.get('B02')!, /Sallow/);
});

test('Glasshouse Express: the bed stove gate is exactly twenty, or fifteen with Fenn’s half hod', () => {
  for (const difficulty of DIFFICULTIES) {
    const own = walk([...careful, ...chill, 'F03'], difficulty);
    assert.ok(!visibleChoices(own.page, { ...own.state, ember: 19 }).some((choice) => choice.to === 'F04'));
    const exact = visibleChoices(own.page, { ...own.state, ember: 20 }).find((choice) => choice.to === 'F04');
    assert.ok(exact);
    assert.equal(choose(story, { ...own.state, ember: 20 }, exact).ember, 10);
    const helped = { ...own.state, wordSent: true };
    assert.ok(!visibleChoices(own.page, { ...helped, ember: 14 }).some((choice) => choice.to === 'F04'));
    const hod = visibleChoices(own.page, { ...helped, ember: 15 }).find((choice) => choice.to === 'F04');
    assert.ok(hod);
    assert.equal(choose(story, { ...helped, ember: 15 }, hod).ember, 10);
    assert.deepEqual(visibleChoices(own.page, { ...own.state, ember: 9 }).map((choice) => choice.to), ['E03']);
    assert.deepEqual(visibleChoices(own.page, { ...own.state, ember: 10 }).map((choice) => choice.to), ['E06']);
  }
});

test('Glasshouse Express: half light distinguishes the chilled bed; full light distinguishes best', () => {
  const chilledHalf = walk([...careful, ...chill, 'F03', 'F04', 'F05', 'E08'], 'easy');
  assert.equal(chilledHalf.page.ending?.kind, 'good');
  assert.match(chilledHalf.text, /By noon every plant in the bed is open/);
  const plainHalf = walk([...careful, ...plain, 'F03', 'F04', 'F05', 'E07'], 'easy');
  assert.equal(plainHalf.page.ending?.kind, 'good');
  const plainFull = walk([...careful, ...plain, 'F03', 'F04', 'F06', 'E09'], 'easy');
  assert.equal(plainFull.page.ending?.best, undefined);
  assert.match(plainFull.text, /A fair season/);
  for (const result of [chilledHalf, plainHalf, plainFull]) assert.equal(result.state.running, false);
});

test('Glasshouse Express: refusal, the works tow, the wait for the gritters and forced shutters are distinct failures', () => {
  const refused = walk(['A02', 'E01']);
  assert.equal(refused.page.ending?.kind, 'bad');
  assert.equal(refused.state.running, false);
  assert.match(refused.text, /Dov doing two jobs/);
  const towed = walk([...terminus, 'A06', 'B01', 'B03', 'B04', 'E02']);
  assert.equal(towed.page.ending?.kind, 'bad');
  assert.match(towed.text, /chained/);
  const gritters = walk([...fast.slice(0, -2), 'D07', 'E04'], 'hard');
  assert.equal(gritters.page.ending?.kind, 'bad');
  assert.match(gritters.text, /tray of plants on a hill/);
  const forced = walk([...careful, ...chill, 'F03', 'F04', 'E05'], 'hard');
  assert.equal(forced.page.ending?.kind, 'bad');
  assert.match(forced.text, /none of you is standing/);
  const siding = careful.flatMap((step): Step[] => step === 'B02' ? ['B03', 'B04', 'B05'] : [step]);
  const overspent = insertBefore(siding, 'D01', ['C05', 'C03', 'C04', 'C03']);
  const frozen = walk([...overspent, ...plain, 'F03'], 'hard');
  assert.equal(frozen.state.ember, 5);
  assert.deepEqual(targets(frozen), ['E03']);
  const blackGlass = walk([...overspent, ...plain, 'F03', 'E03'], 'hard');
  assert.equal(blackGlass.page.ending?.kind, 'bad');
  assert.match(blackGlass.text, /too few bricks left in the locker/);
});

test('Glasshouse Express: the frozen-vent trap at Beacon Cut is offered once and only with freed vents', () => {
  const freed = walk([...terminus, ...vents, ...toHalt, ...toCut], 'easy');
  assert.ok(targets(freed).includes('C05'));
  const after = walk([...terminus, ...vents, ...toHalt, ...toCut, 'C05', 'C03'], 'easy');
  assert.ok(!targets(after).includes('C05'));
  assert.equal(after.state.earlyVents, true);
  assert.match(after.texts.get('C05')!, /All the chill has done is cost you/);
  const frozenVents = walk([...terminus, ...toHalt, ...toCut], 'easy');
  assert.ok(!targets(frozenVents).includes('C05'));
});

test('Glasshouse Express: exhaustive reachable states keep bricks positive, clue gates honest and endings labelled', () => {
  const queue = DIFFICULTIES.map((difficulty) => ({ id: story.start, state: startState(story, difficulty) }));
  const seen = new Set<string>();
  const endings = new Set<string>();
  for (let index = 0; index < queue.length; index++) {
    const { id, state } = queue[index];
    const key = `${id}|${JSON.stringify(state)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    assert.ok(Number(state.ember) > 0 && Number(state.ember) <= 100, key);
    const page = getPage(story, id);
    if (page.ending) {
      endings.add(id);
      assert.equal(state.running, false, key);
      if (page.ending.best) {
        assert.equal(state.chilled && state.ventFreed && state.tapeHeard && state.bulbLore, true, key);
        assert.ok(Number(state.ember) >= 10, key);
      }
      if (id === 'E03') assert.ok(Number(state.ember) < 10, key);
      if (['E06', 'E07', 'E08', 'E09', 'E10'].includes(id)) assert.ok(Number(state.ember) >= 10, key);
      continue;
    }
    const choices = visibleChoices(page, state);
    assert.ok(choices.length, key);
    for (const [flag, visit] of [['tapeHeard', 'A04'], ['ventFreed', 'A05'], ['calledHesper', 'B08'], ['bulbLore', 'B09'], ['tramsHeld', 'B10'], ['wordSent', 'C04'], ['earlyVents', 'C05']] as const) {
      if (state[flag]) assert.ok(!choices.some((choice) => choice.to === visit), `${key}: repeat ${visit}`);
    }
    if (id === 'D03') {
      const chill = choices.some((choice) => choice.set?.chilled);
      assert.equal(chill, Boolean(state.ventFreed && state.tapeHeard && state.bulbLore && Number(state.ember) >= 20), key);
    }
    if (id === 'F04') assert.equal(choices.some((choice) => choice.to === 'F06'), Boolean(state.ventFreed), key);
    if (id === 'F05') assert.deepEqual(choices.map((choice) => choice.to), [state.chilled ? 'E08' : 'E07'], key);
    if (id === 'F06') assert.deepEqual(choices.map((choice) => choice.to), [state.chilled ? 'E10' : 'E09'], key);
    for (const choice of choices) queue.push({ id: choice.to, state: choose(story, state, choice) });
  }
  assert.equal(endings.size, 10);
});
