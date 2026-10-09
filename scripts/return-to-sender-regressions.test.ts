import assert from 'node:assert/strict';
import { test } from 'node:test';
import { choose, getPage, renderText, startState, visibleChoices } from '../src/engine/engine';
import { DIFFICULTIES, type Difficulty } from '../src/engine/types';
import story from '../stories/return-to-sender/story';

// An indexed step uses the original page.choices index, never the filtered list's index.
type Step = string | readonly [target: string, choiceIndex: number];

function walk(route: readonly Step[], difficulty: Difficulty = 'medium') {
  let page = getPage(story, story.start);
  let state = startState(story, difficulty);
  const texts = new Map<string, string>();
  for (const step of route) {
    const target = typeof step === 'string' ? step : step[0];
    const available = visibleChoices(page, state);
    const choices = typeof step === 'string'
      ? available.filter((choice) => choice.to === target)
      : [page.choices?.[step[1]]];
    const context = `${page.id} → ${target} on ${difficulty}`;
    assert.equal(choices.length, 1, `Expected one choice: ${context}`);
    const choice = choices[0];
    assert.ok(choice && available.includes(choice), `Choice must be available: ${context}`);
    assert.equal(choice.to, target, context);
    state = choose(story, state, choice);
    page = getPage(story, target);
    texts.set(page.id, renderText(story, page, state).join('\n'));
  }
  return { page, state, texts, text: texts.get(page.id)! };
}

const opening = ['R02', 'R03', 'R04'];
const hotel = ['S01', 'H01', 'H02', 'H03', 'C01', 'C02'];
const finish = ['C08', 'C09', 'C10', 'E11'];
const solo: Step[] = [...opening, 'R05', 'R04', ...hotel, ['C03', 0], 'C11', 'C04', 'C06', 'C07'];
const team: Step[] = [...opening, 'R05', 'R04', 'F01', 'F04', 'F05', 'F06', 'C01', 'C02', ['C03', 1], 'C11', 'C04', 'C06', 'C07'];
const tunnel: Step[] = [...opening, 'F01', 'F02', 'R04', 'T01', 'T02', 'T03', 'T02', 'T04', ['C01', 1], 'C02'];
const watch: Step[] = [...opening, 'F01', 'F02', 'R04', 'R05', 'R04', ...hotel];
const wrongTube: Step[] = [...solo.slice(0, -2), 'C05', 'C04', 'C06', 'C07'];
const recovery: Step[] = solo.flatMap((step) => step === 'H03' ? ['E05', 'H03'] : [step]);

for (const [name, route, trap] of [['solo', solo, 'none'], ['team', team, 'empty']] as const) {
  test(`RTS: ${name} best ending works on all three difficulties`, () => {
    for (const [difficulty, margin] of [['easy', 40], ['medium', 25], ['hard', 10]] as const) {
      const result = walk([...route, ...finish], difficulty);
      assert.equal(result.page.ending?.best, true);
      assert.equal(result.state.margin, margin);
      assert.equal(result.state.trap, trap);
      assert.equal(result.state.copyRule, true);
      assert.equal(result.state.roster, true);
      assert.match(result.text, /No Night Mail clerk remains in confinement/);
    }
  });
}

for (const [trap, route, roll, release] of [
  ['blockade', [...tunnel, ['C03', 0], 'C11', 'C04', 'C06', 'C07'], /Twenty-nine.*six.*twelve/, /Six names.*Each gets.*acknowledges it and leaves/],
  ['watch', [...watch, ['C03', 2], 'C11', 'C04', 'C06', 'C07'], /Thirty-two.*three.*twelve/, /Three names.*Each gets.*third acknowledgement/],
] as const) {
  test(`RTS: ${trap} captives are counted and released alongside the grid's twelve`, () => {
    const result = walk([...route, ...finish], 'hard');
    assert.equal(result.page.ending?.best, true);
    assert.equal(result.state.margin, 10);
    assert.equal(result.state.trap, trap);
    assert.match(result.texts.get('C11')!, roll);
    assert.match(result.texts.get('C09')!, /Twelve names, twelve acknowledgements/);
    assert.match(result.texts.get('C10')!, release);
    assert.match(result.text, /No Night Mail clerk remains in confinement/);
  });
}

for (const [missing, route, margin] of [
  ['copyRule', solo.map((step) => step === 'R05' ? 'R06' : step), 25],
  ['roster', solo.filter((step) => step !== 'C11'), 30],
] as const) {
  test(`RTS: spare capacity cannot replace missing ${missing}`, () => {
    const pending = walk([...route, 'C08']);
    assert.equal(pending.state[missing], false);
    assert.equal(pending.state.margin, margin);
    assert.deepEqual(visibleChoices(pending.page, pending.state).map((choice) => choice.to), ['E10']);
    const result = walk([...route, 'C08', 'E10']);
    assert.equal(result.page.ending?.kind, 'good');
    assert.equal(result.page.ending?.best, undefined);
  });
}

test('RTS: complete evidence with a reserve gap gives partial success, not a discharge', () => {
  const route: Step[] = [...recovery.slice(0, -2), 'C05', 'C04', 'C06', 'C07', 'C08'];
  const pending = walk(route);
  assert.equal(pending.state.copyRule, true);
  assert.equal(pending.state.roster, true);
  assert.equal(pending.state.margin, 5);
  assert.match(pending.text, /keep it closed safely/);
  assert.deepEqual(visibleChoices(pending.page, pending.state).map((choice) => choice.to), ['E10']);
  assert.equal(walk([...route, 'E10']).page.ending?.kind, 'good');
});

test('RTS: a used trap cannot catch another group', () => {
  const blocked = walk(tunnel, 'hard');
  assert.equal(blocked.state.trap, 'blockade');
  assert.ok(!visibleChoices(blocked.page, blocked.state).includes(blocked.page.choices![2]));
  for (const route of [[...tunnel, ['C03', 0], 'C04'], [...watch, ['C03', 2], 'C04']] as const) {
    const assembly = walk(route, 'hard');
    assert.ok(!visibleChoices(assembly.page, assembly.state).some((choice) => choice.to === 'E08'));
  }
});

test('RTS: Slimer adds a relationship callback but is not required for full release', () => {
  const without = walk([...solo, ...finish], 'hard');
  const visit = watch.flatMap((step) => step === 'F02' ? ['F02', 'F03'] : [step]);
  const withSlimer = walk([...visit, ['C03', 2], 'C11', 'C04', 'C06', 'C07', ...finish]);
  assert.equal(without.state.heardSlimer, false);
  assert.doesNotMatch(without.texts.get('C09')!, /recognise the three beats/);
  assert.equal(withSlimer.state.heardSlimer, true);
  assert.equal(withSlimer.state.margin, 20);
  assert.equal(withSlimer.page.ending?.best, true);
  assert.match(withSlimer.texts.get('C09')!, /recognise the three beats/);
});

test('RTS: DOWN costs ten once, then still permits Medium full release', () => {
  const before = walk(solo.slice(0, -2));
  const after = walk([...solo.slice(0, -2), 'C05', 'C04']);
  assert.equal(Number(before.state.margin) - Number(after.state.margin), 10);
  assert.equal(after.state.triedDown, true);
  assert.ok(!visibleChoices(after.page, after.state).some((choice) => choice.to === 'C05'));
  const result = walk([...wrongTube, ...finish]);
  assert.equal(result.page.ending?.best, true);
  assert.equal(result.state.margin, 15);
});

test('RTS: a Hard wrong turn can end in ordinary success with five headroom', () => {
  const result = walk([...wrongTube, 'E10'], 'hard');
  assert.equal(result.state.margin, 5);
  assert.equal(result.page.ending?.kind, 'good');
  assert.equal(result.page.ending?.best, undefined);
});

test('RTS: apologising after the manager setback preserves the best route', () => {
  const result = walk([...recovery, ...finish]);
  assert.equal(result.state.margin, 15);
  assert.equal(result.page.ending?.best, true);
});

test('RTS: the commissioned handover is good and has no hotel-return bridge', () => {
  const result = walk([...opening, 'F01', 'E02']);
  assert.equal(result.state.margin, 55);
  assert.equal(result.page.ending?.kind, 'good');
  assert.doesNotMatch(result.text, /unlock your bicycle from the entrance railing/);
});

test('RTS: hotel withdrawal retrieves the bicycle before the safe handover', () => {
  const result = walk([...opening, 'R05', 'R04', 'S01', 'H01', 'H02', 'E05', 'E02']);
  assert.equal(result.state.margin, 35);
  assert.equal(result.page.ending?.kind, 'good');
  assert.match(result.text, /unlock your bicycle from the entrance railing/);
  assert.match(result.text, /ride back to North Moore/);
});

test('RTS: informed professional isolation is a valid good ending', () => {
  const result = walk([...opening, 'F01', 'F04', 'F05', 'E07']);
  assert.equal(result.state.margin, 50);
  assert.equal(result.page.ending?.kind, 'good');
  assert.equal(result.page.ending?.best, undefined);
});

test('RTS: final containment leaves thirty-five in the trap and twelve in the grid', () => {
  const result = walk([...opening, 'F01', 'F04', 'F05', 'F06', 'C01', 'C02', ['C03', 1], 'C04', 'E08']);
  assert.equal(result.state.margin, 45);
  assert.equal(result.state.trap, 'final');
  assert.equal(result.page.ending?.kind, 'good');
  assert.equal(result.page.ending?.best, undefined);
  assert.match(result.text, /thirty-five clerks/);
  assert.match(result.text, /twelve postal clerks already in the grid/);
  assert.match(result.text, /All forty-seven clerks remain confined/);
});

test('RTS: the player may close the team delivery without claiming full release', () => {
  const result = walk([...team, 'E09'], 'hard');
  assert.equal(result.state.margin, 15);
  assert.equal(result.state.trap, 'empty');
  assert.equal(result.page.ending?.kind, 'good');
  assert.equal(result.page.ending?.best, undefined);
  assert.match(result.text, /twelve clerks in the grid have not received/);
});

test('RTS: abandoning the desk delivery still accounts for six carried captives', () => {
  const result = walk([...tunnel, 'E03']);
  assert.equal(result.state.margin, 45);
  assert.equal(result.state.trap, 'blockade');
  assert.equal(result.page.ending?.kind, 'bad');
  assert.match(result.text, /six clerks inside are recorded alongside the twelve in the grid/i);
});

test('RTS: exhaustion after the original delivery does not undo its released staff', () => {
  const expired = walk([...wrongTube, 'C08'], 'hard');
  assert.equal(expired.state.margin, 0);
  assert.doesNotMatch(expired.text, /keep it closed safely/);
  assert.deepEqual(visibleChoices(expired.page, expired.state).map((choice) => choice.to), ['E06']);
  const result = walk([...wrongTube, 'C08', 'E06'], 'hard');
  assert.equal(result.page.ending?.kind, 'bad');
  assert.match(result.text, /already released the staff in the tube room/);
});

test('RTS: every reachable expired arrival permits only the emergency ending', () => {
  const queue = DIFFICULTIES.map((difficulty) => ({ id: story.start, state: startState(story, difficulty) }));
  const seen = new Set<string>();
  const expiredPages = new Set<string>();
  for (let index = 0; index < queue.length; index++) {
    const { id, state } = queue[index];
    const key = `${id}|${JSON.stringify(state)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const page = getPage(story, id);
    if (page.ending) continue;
    const choices = visibleChoices(page, state);
    if (Number(state.margin) <= 0) {
      expiredPages.add(id);
      assert.deepEqual(choices.map((choice) => choice.to), ['E06'], key);
    }
    for (const choice of choices) queue.push({ id: choice.to, state: choose(story, state, choice) });
  }
  assert.deepEqual([...expiredPages].sort(), [...story.clock!.allowExpiredOn].sort());
});
