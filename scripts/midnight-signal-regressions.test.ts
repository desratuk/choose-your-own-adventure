import assert from 'node:assert/strict';
import { test } from 'node:test';
import { choose, getPage, renderText, startState, visibleChoices } from '../src/engine/engine';
import type { Difficulty } from '../src/engine/types';
import story from '../stories/midnight-signal/story';

function walk(route: string[], difficulty: Difficulty = 'medium') {
  let page = getPage(story, story.start);
  let state = startState(story, difficulty);
  for (const target of route) {
    const choice = visibleChoices(page, state).find(c => c.to === target);
    assert.ok(choice, `${page.id} → ${target} unavailable on ${difficulty}`);
    state = choose(story, state, choice);
    page = getPage(story, target);
  }
  return { page, state, choices: visibleChoices(page, state), text: renderText(story, page, state).join('\n') };
}
const opening = ['A02', 'A03', 'A04'];
const records = ['A05', 'A04', 'A06', 'A04', 'A08', 'B01', 'B02', 'B03', 'B02', 'B04', 'B02'];
const basin = ['B07', 'B08', 'B10', 'C01', 'C02', 'C03', 'C02', 'C04'];
const rescue = ['C05', 'C07', 'C08', 'C09', 'C10', 'D01', 'D02', 'D04'];
const careful = [...opening, ...records, ...basin, ...rescue];
const best = ['D05', 'D08', 'E10'];

test('Midnight Signal: original revision, 46 pages, 10 endings and one best', () => {
  assert.equal(story.revision, 1);
  assert.equal(story.pages.length, 46);
  assert.equal(story.pages.filter(p => p.ending).length, 10);
  assert.deepEqual(story.pages.filter(p => p.ending?.best).map(p => p.id), ['E10']);
  for (const p of story.pages) assert.ok(p.imagePrompt.length > 60, p.id);
});

test('Midnight Signal: complete route spends sixty and preserves the ten-point holding reserve', () => {
  for (const [difficulty, remaining] of [['easy',40],['medium',25],['hard',10]] as const) {
    const r = walk([...careful, ...best], difficulty);
    assert.equal(r.page.ending?.best, true);
    assert.equal(r.state.charge, remaining);
    assert.equal(r.state.drained, true);
  }
});

test('Midnight Signal: each authenticated evidence component is required even with ample charge', () => {
  for (const [visit, hub] of [['A05','A04'],['B03','B02'],['B04','B02'],['C03','C02']]) {
    const route = [...careful];
    const index = route.indexOf(visit);
    assert.equal(route[index + 1], hub);
    route.splice(index, 2);
    const r = walk(route, 'easy');
    assert.ok(!r.choices.some(c => c.to === 'D05'), visit);
    assert.ok(r.choices.some(c => c.to === 'D06'), visit);
  }
});

test('Midnight Signal: medium permits one fifteen-point error, hard does not', () => {
  for (const mistake of ['A07', 'B05', 'C06']) {
    const route = [...careful];
    const index = route.indexOf(mistake === 'A07' ? 'A08' : mistake === 'B05' ? 'B07' : 'C05');
    route.splice(index, 0, ...(mistake === 'A07' ? ['A07','A04'] : mistake === 'B05' ? ['B05','B06','B02'] : ['C06','C04']));
    assert.equal(walk([...route,...best]).state.charge, 10, mistake);
    const hard = walk(route, 'hard');
    assert.ok(!hard.choices.some(c => c.to === 'D05'), mistake);
    assert.ok(hard.choices.some(c => c.to === 'D07'), mistake);
  }
});

test('Midnight Signal: incomplete and manual rescues remain genuine good endings', () => {
  const fast = [...opening,'A08','B01','B02','B07','B08','B10','C01','C02'];
  for (const difficulty of ['easy','medium','hard'] as const) {
    const manual = walk([...fast,'C08','E06'], difficulty);
    assert.equal(manual.state.drained, false);
    assert.equal(manual.page.ending?.kind, 'good');
    const phone = walk([...fast,'C08','C09','C10','D07','E08'], difficulty);
    assert.equal(phone.page.ending?.kind, 'good');
    assert.match(phone.text, /closed pending a survey/);
  }
});

test('Midnight Signal: black socket does not transmit, and a test can be corrected without charge', () => {
  const before = careful.slice(0, careful.indexOf('D02'));
  const correct = walk([...before,'D02','D04']);
  const retry = walk([...before,'D03','D02','D04']);
  assert.deepEqual(retry.state, correct.state);
  assert.equal(walk([...before,'D03','E07']).page.ending?.kind, 'bad');
});

test('Midnight Signal: repeated drain mistake is unavailable and safety exits survive low reserve', () => {
  const route = [...opening,'A07','A04','A08','B01','B02','B05','B06','B02','B07','B08','B10','C01','C02','C04','C06','C04'];
  const r = walk(route, 'hard');
  assert.equal(r.state.charge, 15);
  assert.deepEqual(r.choices.map(c => c.to), ['C08']);
  assert.equal(walk([...route,'C08','E06'],'hard').page.ending?.kind, 'good');
});

test('Midnight Signal: evacuation is narrated on direct and corrected-gate arrivals, not replayed after rescue', () => {
  const toControls = [...opening,'A08','B01','B02','B07','B08','B10','C01','C02'];
  for (const route of [[...toControls,'C08'], [...toControls,'C04','C06','C04','C08']]) {
    const result = walk(route);
    assert.equal(result.state.drained, false);
    assert.match(result.text, /After a wait, the road rescue team arrives/);
    assert.match(result.text, /all three are safe/);
    assert.doesNotMatch(result.text, /If the gates were left alone/);
  }
  const completed = walk([...toControls,'C04','C05','C07','C08']);
  assert.match(completed.text, /With the handover complete/);
  assert.doesNotMatch(completed.text, /After a wait/);
  const corrected = walk([...toControls,'C04','C06','C04']);
  assert.match(corrected.text, /failed attempt is already recorded/);
  assert.doesNotMatch(corrected.text, /first line of the log/);
});

test('Midnight Signal: early supporting exits stay in the visited location', () => {
  for (const route of [[...opening,'A08','E04'], [...opening,'A08','B01','B02','E04']]) {
    const result = walk(route);
    assert.match(result.text, /harbour office desk/);
    assert.doesNotMatch(result.text, /shelter/);
  }
  const sheltered = walk([...opening,'A08','B01','B02','B07','B08','B09','E04']);
  assert.match(sheltered.text, /waits with you in the dry brick shelter until the relief worker arrives/);
  assert.doesNotMatch(sheltered.text, /harbour office desk/);
});

test('Midnight Signal: skipped wiring and copied-call detours do not create knowledge or a cassette', () => {
  assert.match(walk([...opening,'A07']).text, /repeater is a mast that relays/);
  const route = [...opening,'A08','B01','B02','B07','B08','B10','C01','C02','C08','C09','C10'];
  assert.match(walk(route).text, /unattended mast that relays/);
  for (const tail of [['D01'],['D01','D02'],['D01','D02','D04']]) {
    const result = walk([...route,...tail]);
    assert.equal(result.state.copy, false);
    assert.doesNotMatch(result.text, /evidence tape|leaves the tape stopped|The tape waits/);
  }
  assert.match(walk([...careful,'D05','D08']).text, /transcript of the sealed earlier copy/);
});

test('Midnight Signal: every reachable gate choice agrees with the full-cycle safety cut-out', () => {
  const observed = new Set<string>();
  for (const difficulty of ['easy','medium','hard'] as const) {
    const pending = [{ page: getPage(story, story.start), state: startState(story, difficulty) }];
    const seen = new Set<string>();
    while (pending.length) {
      const { page, state } = pending.pop()!;
      const key = `${page.id}:${JSON.stringify(state)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const choices = visibleChoices(page, state);
      if (page.id === 'C04') {
        observed.add(`${state.charge}/${state.wrong}`);
        const text = renderText(story, page, state).join('\n');
        if (Number(state.charge) <= 20) {
          assert.deepEqual(choices.map(c => c.to), ['C08'], key);
          assert.match(text, /Evacuation is the remaining choice/, key);
          assert.doesNotMatch(text, /You can propose a corrected sequence|Jo waits for your proposal/, key);
        } else {
          assert.ok(choices.some(c => c.to === 'C05'), key);
          assert.equal(choices.some(c => c.to === 'C06'), !state.wrong, key);
          assert.doesNotMatch(text, /Evacuation is the remaining choice/, key);
        }
      }
      for (const choice of choices) pending.push({ page: getPage(story, choice.to), state: choose(story, state, choice) });
    }
  }
  assert.ok(observed.has('20/false'));
  assert.ok(observed.has('20/true'));
  assert.ok(observed.has('10/true'));
});

test('Midnight Signal: recovery keeps the manually closed inlet shut and moves only the outlet', () => {
  const beforeDrain = careful.slice(0, careful.indexOf('C05'));
  const first = walk([...beforeDrain,'C05']);
  assert.match(first.text, /closing the inlet before opening the outlet/);
  const retry = walk([...beforeDrain,'C06','C04','C05']);
  assert.match(retry.text, /inlet rod stays at shut/);
  assert.doesNotMatch(retry.text, /closing the inlet before|They move this time|manual remote drive/);
  assert.equal(retry.state.charge, Number(first.state.charge) - 15);
});

test('Midnight Signal: blue-first partial handover labels only the destination actually verified', () => {
  const route = [...opening,'A08','B01','B02','B07','B08','B10','C01','C02','C08','C09','C10','D01','D02','D04','D06','E09'];
  const result = walk(route);
  assert.equal(result.state.wiring, false);
  assert.match(result.text, /HILL REPEATER on a fresh label above the blue socket/);
  assert.doesNotMatch(result.text, /two patch-socket destinations/);
  assert.match(result.page.imagePrompt, /ONLY the blue socket, black socket unlabelled/);
});

test('Midnight Signal: charged harbour investigations perform powered verification, with free paper and battery lights', () => {
  const desk = [...opening,'A08','B01','B02'];
  const arrival = walk(desk);
  assert.match(walk(opening).text, /powered inspection telephone line and the service-passage entry locks/);
  assert.match(walk(opening).text, /reading paper records costs nothing/);
  assert.match(walk(opening).text, /Ordinary lights and safety radios have separate batteries/);
  const sound = walk([...desk,'B03']);
  assert.equal(sound.state.charge, Number(arrival.state.charge) - 5);
  assert.match(sound.text, /powered inspection line at the desk handset/);
  assert.match(sound.text, /upper lobby intercom/);
  assert.match(sound.text, /switches the line off/);
  const tide = walk([...desk,'B04']);
  assert.equal(tide.state.charge, Number(arrival.state.charge) - 5);
  assert.match(tide.text, /Ellis reads the fixed water-level scale from the dry upper lobby/);
  assert.match(tide.text, /Jo switches the line off/);
  const basinArrival = walk([...desk,'B07','B08']);
  assert.equal(basinArrival.state.charge, Number(arrival.state.charge) - 10);
  assert.match(basinArrival.text, /two powered entry locks/);
  assert.match(basinArrival.text, /return without another powered release/);
  const pier = walk([...desk,'B05']);
  assert.equal(pier.state.charge, Number(arrival.state.charge) - 15);
  assert.match(pier.text, /lock without opening the gate/);
  assert.doesNotMatch(pier.text, /passage lights/);
  assert.equal(walk([...desk,'B05','B06','B02']).state.charge, pier.state.charge);
});

test('Midnight Signal: rescue routes use the relief generator and the failed transmission keeps its live call', () => {
  const beforeDrain = careful.slice(0, careful.indexOf('C05'));
  for (const tail of [['C08'],['C06','C04','C08'],['C05','C07','C08']]) {
    const result = walk([...beforeDrain,...tail]);
    assert.match(result.text, /relief team's portable generator/);
    assert.doesNotMatch(result.text, /road crew's/);
  }
  const beforeSocket = careful.slice(0, careful.indexOf('D02'));
  assert.match(walk([...beforeSocket,'D03']).text, /Jo stays on the line/);
  const ending = walk([...beforeSocket,'D03','E07']);
  assert.match(ending.text, /Jo, still on the line, relays/);
  assert.doesNotMatch(ending.text, /call arrives|rings back/);
});
