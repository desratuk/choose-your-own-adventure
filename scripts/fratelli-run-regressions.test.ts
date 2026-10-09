import assert from 'node:assert/strict';
import { test } from 'node:test';
import { choose, getPage, renderText, startState, visibleChoices } from '../src/engine/engine';
import type { Difficulty } from '../src/engine/types';
import story from '../stories/fratelli-run/story';

type Route = (string | [target: string, textIncludes: string])[];

function walk(route: Route, difficulty: Difficulty = 'medium') {
  let page = getPage(story, story.start);
  let state = startState(story, difficulty);
  for (const step of route) {
    const [target, selector] = typeof step === 'string' ? [step] : step;
    const choices = visibleChoices(page, state).filter(
      (choice) => choice.to === target && (!selector || choice.text.includes(selector)),
    );
    assert.equal(choices.length, 1, `${page.id} → ${target} (${selector ?? 'any text'}) on ${difficulty}`);
    state = choose(story, state, choices[0]);
    page = getPage(story, target);
  }
  return { page, state, text: renderText(story, page, state).join('\n') };
}

function ending(route: Route, id: string, margin: number, difficulty: Difficulty = 'medium') {
  const result = walk([...route, id], difficulty);
  assert.ok(result.page.ending, id);
  assert.equal(result.state.lead, margin);
  return result;
}

function noBest(route: Route, difficulty: Difficulty = 'medium') {
  const result = walk(route, difficulty);
  assert.equal(result.page.id, 'F03');
  assert.ok(!visibleChoices(result.page, result.state).some((choice) => choice.to === 'E11'));
  return result;
}

const opening = (plan: 'flats' | 'station' = 'flats', rope = true): Route => [
  'D03', 'D04', ['D06', plan === 'flats' ? 'public' : 'station'],
  ['D05', rope ? 'demonstration' : 'Travel light'],
];
const garage: Route = ['D07', 'D08', 'D05'];
const library: Route = ['T01', 'T02', 'D05'];
const drain: Route = ['U01', 'U02', 'U04', ['U05', 'Fire'], ['U06', 'Lift the catch'], 'P01'];
const wrongDrain: Route = ['U01', 'U02', 'U03', 'U02', 'U04', ['U05', 'Fire'], ['U06', 'Lift the catch'], 'P01'];
const soloDrain: Route = ['U01', 'U02', 'U04', ['U05', 'handrail'], ['U06', 'shoulder'], 'P01'];
const wait = (map = false): Route => [['P03', map ? 'Settle' : 'Feel']];
const locker = (sloth = true, timed = true): Route => [
  ['P05', 'Keep the light'], ['P06', sloth ? 'Tell Sloth' : 'Stay hidden'],
  ['P07', timed ? 'Send two' : 'Use the noise'], 'P08',
];
const crowd: Route = ['F01', 'F03'];
const prepared: Route = [...opening(), ...garage, ...drain, ...wait()];
const best: Route = [...prepared, ...locker(), ...crowd];
const solo: Route = [...opening('station', false), ...soloDrain, ...wait(), ...locker(false, false)];
const street: Route = ['T08', 'T09', 'P01', ...wait(), ...locker(false, false)];

for (const [difficulty, margin] of [['easy', 65], ['medium', 35], ['hard', 20]] as const) {
  test(`Goonies: coordinated best ending on ${difficulty} keeps ${margin} margin`, () => {
    const { page, state } = ending(best, 'E11', margin, difficulty);
    assert.equal(page.ending?.best, true);
    assert.equal(state.teamPlan, 'flats');
    assert.equal(state.signal, 'timed');
    assert.equal(state.slothChoice, true);
    assert.equal(state.slothWith, true);
  });
}

test('Goonies: library chart is budget-neutral on the Hard best route', () => {
  const route = [...opening(), ...garage, ...library, ...drain, ...wait(true), ...locker(), ...crowd];
  const { state } = ending(route, 'E11', 20, 'hard');
  assert.equal(state.hasMap, true);
});

test('Goonies: Medium permits the wrong-fork mistake on the best route', () => {
  const route = [...opening(), ...garage, ...wrongDrain, ...wait(), ...locker(), ...crowd];
  assert.equal(ending(route, 'E11', 20).state.visitedCellar, true);
});

test('Goonies: the same wrong fork costs Hard the best ending, not all good outcomes', () => {
  const route = [...opening(), ...garage, ...wrongDrain, ...wait(), ...locker(), ...crowd];
  assert.equal(noBest(route, 'hard').state.lead, 5);
  assert.equal(ending(route, 'E10', 5, 'hard').page.ending?.kind, 'good');
});

test('Goonies: a careful solo route without equipment reaches the bonfire on Hard', () => {
  const route = [...solo, ...crowd];
  noBest(route, 'hard');
  const { state, page } = ending(route, 'E10', 20, 'hard');
  assert.equal(page.ending?.kind, 'good');
  for (const flag of ['hasRope', 'hasMap', 'slothWith']) assert.equal(state[flag], false);
});

test('Goonies: a careful solo route can preserve evidence at the station on Hard', () => {
  const { state, page } = ending([...solo, 'F02'], 'E09', 15, 'hard');
  assert.equal(page.ending?.kind, 'good');
  assert.equal(state.hasPlates, true);
  assert.equal(state.teamPlan, 'station');
});

test('Goonies: an early signal prevents best despite ample surviving margin', () => {
  const route: Route = [...prepared, 'P04', 'P05', ['P06', 'Tell Sloth'], ['P07', 'Use the noise'], 'P08', ...crowd];
  assert.equal(noBest(route).state.signal, 'early');
  ending(route, 'E10', 30);
});

test('Goonies: Sloth refuses the rear-guard job and leaves before the climax', () => {
  const route: Route = [...prepared, ['P05', 'Keep the light'], ['P06', 'Ask Sloth'], ['P07', 'Send two'], 'P08'];
  const arrival = walk(route);
  assert.equal(arrival.state.slothWith, false);
  assert.equal(arrival.state.slothChoice, false);
  assert.ok(!arrival.page.cast?.includes('sloth'));
  noBest([...route, ...crowd]);
  ending([...route, ...crowd], 'E10', 35);
});

test('Goonies: tunnel return clears Sloth accompaniment before the station', () => {
  const route = [...prepared, ...locker(), 'F02'];
  assert.equal(walk(route).state.slothWith, true);
  const { state, page } = ending(route, 'E09', 30);
  assert.equal(state.slothWith, false);
  assert.equal(state.slothChoice, true);
  assert.ok(!page.cast?.includes('sloth'));
});

test('Goonies: destroying the plates remains a distinct good outcome with Sloth', () => {
  const { state, page } = ending([...prepared, ...locker()], 'E08', 55);
  assert.equal(page.ending?.kind, 'good');
  assert.equal(page.ending?.best, undefined);
  assert.equal(state.slothWith, true);
});

test('Goonies: accepting Mama’s bargain loses the plates but retains Sloth’s refusal', () => {
  const { state, page, text } = ending([...prepared, ...locker()], 'E07', 55);
  assert.equal(page.ending?.kind, 'bad');
  assert.equal(state.slothWith, true);
  assert.match(text, /Sloth stay/);
});

test('Goonies: street bypass after arranging Sloth exhausts Hard at the tunnel return', () => {
  const route = [...opening('station', false), ...garage, ...street, 'F02'];
  const { page, state } = walk(route, 'hard');
  assert.equal(state.lead, 0);
  assert.equal(state.slothWith, false);
  assert.deepEqual(visibleChoices(page, state).map((choice) => choice.to), ['E06']);
  ending(route, 'E06', 0, 'hard');
});

test('Goonies: street bypass never recruits waiting Sloth and remains viable on Medium', () => {
  const route = [...opening('station', false), ...garage, ...street];
  const arrival = walk(route);
  assert.equal(arrival.state.slothPlan, true);
  assert.equal(arrival.state.slothWith, false);
  assert.ok(!arrival.page.cast?.includes('sloth'));
  const { state, page } = ending([...route, 'F02'], 'E09', 15);
  assert.equal(state.slothWith, false);
  assert.ok(!page.cast?.includes('sloth'));
});

test('Goonies: direct street route preserves evidence on Hard without optional detours', () => {
  const { state, page } = ending([...opening('station', false), ...street, 'F02'], 'E09', 10, 'hard');
  assert.equal(page.ending?.kind, 'good');
  assert.equal(state.viaLowline, false);
});

test('Goonies: accumulated town detours exhaust margin at the hideout', () => {
  const route: Route = ['D02', ...opening(), ...garage, 'T01', 'T02', 'T03', 'D05', 'T04', 'D05', 'T05', 'D05', 'T06'];
  const { page, state } = walk(route, 'hard');
  assert.equal(state.lead, 0);
  assert.deepEqual(visibleChoices(page, state).map((choice) => choice.to), ['E06']);
  ending(route, 'E06', 0, 'hard');
});

test('Goonies: the depot mistake supplies evidence used after the tunnel return', () => {
  const route = [...opening('station', false), 'T05', 'D05', ...soloDrain, ...wait(), ...locker(false, false), 'F02'];
  const { state, text } = ending(route, 'E09', 15);
  assert.equal(state.visitedDepot, true);
  assert.match(text, /number from the depot/);
});

test('Goonies: the wrong fork unlocks a cheaper latch solution and a Hard recovery', () => {
  const toGrate: Route = [...opening('station', false), 'U01', 'U02', 'U03', 'U02', 'U04', ['U05', 'handrail']];
  const known = walk([...toGrate, ['U06', 'inspection']], 'hard');
  const squeeze = walk([...toGrate, ['U06', 'Squeeze']], 'hard');
  assert.equal(Number(known.state.lead) - Number(squeeze.state.lead), 10);
  const route: Route = [...toGrate, ['U06', 'inspection'], 'P01', ...wait(), ...locker(false, false), 'F02'];
  assert.equal(ending(route, 'E09', 5, 'hard').state.visitedCellar, true);
});
