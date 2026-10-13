import assert from 'node:assert/strict';
import { test } from 'node:test';
import { choose, getPage, renderText, startState, visibleChoices } from '../src/engine/engine';
import { DIFFICULTIES, type Difficulty } from '../src/engine/types';
import story from '../stories/player-two/story';

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

const opening: Step[] = ['A02', 'A03', 'A04', 'A05', 'A06', 'B01', 'B02'];
const training: Step[] = ['B06', 'B07', 'B09', 'C01', 'C02'];
const arrival: Step[] = ['C05', 'C06', 'D01', 'D02'];
const deploy: Step[] = ['D05', ['D06', 0], 'D08', 'D09', 'F01'];
const careful: Step[] = [...opening, 'B03', 'B02', ...training, 'C03', 'C02', ...arrival, 'D03', 'D02', ...deploy];
const fast: Step[] = [...opening, ...training, ...arrival, ...deploy];
const best: Step[] = ['F02', 'F03', 'F05', 'F10', 'E09'];
const ordinary: Step[] = ['F06', 'F07', 'E06'];
const beforeTiming: Step[] = [...careful, 'F02', 'F03'];

function insertBefore(route: readonly Step[], target: string, extra: readonly Step[]): Step[] {
  return route.flatMap((step) => step === target ? [...extra, step] : [step]);
}

function skipVisit(route: readonly Step[], visit: string): Step[] {
  const index = route.indexOf(visit);
  assert.ok(index >= 0);
  // Remove the visit and its return to the hub, preserving the first hub arrival.
  return [...route.slice(0, index), ...route.slice(index + 2)];
}

test('Player Two: 50 pages, nine labelled endings and exactly one best ending', () => {
  assert.equal(story.revision, 1);
  assert.equal(story.pages.length, 50);
  assert.equal(story.pages.filter((page) => page.ending?.kind === 'good').length, 5);
  assert.equal(story.pages.filter((page) => page.ending?.kind === 'bad').length, 4);
  assert.deepEqual(story.pages.filter((page) => page.ending?.best).map((page) => page.id), ['E09']);
  assert.deepEqual(story.ui, { header: 'basic', transition: 'fade' });
  assert.equal(story.clock?.format, 'number');
  assert.equal(story.clock?.unit, '%');
  for (const page of story.pages) {
    assert.ok(page.imagePrompt, page.id);
    for (const subject of page.cast ?? []) assert.ok(story.art.cast[subject], `${page.id}: ${subject}`);
  }
});

test('Player Two: the complete defence spends 70 and preserves the split reserve on every difficulty', () => {
  for (const [difficulty, start, remaining] of [['easy', 100, 30], ['medium', 90, 20], ['hard', 80, 10]] as const) {
    assert.equal(startState(story, difficulty).charge, start);
    const result = walk([...careful, ...best], difficulty);
    assert.equal(result.page.ending?.best, true);
    assert.equal(result.state.charge, remaining);
    assert.equal(result.state.running, false);
    assert.equal(result.state.latchTest, true);
    assert.equal(result.state.echoRecord, true);
    assert.equal(result.state.feederTraced, true);
    assert.equal(result.state.heardTavi, false);
    assert.equal(result.state.tugHelp, false);
    assert.equal(result.state.storesSecured, false);
    assert.match(result.texts.get('F05')!, new RegExp(`remaining ${remaining}%`));
    assert.match(result.texts.get('B02')!, /at least 20% before you start/);
    assert.match(result.text, /relief crew recharges the Gunstar/i);
  }
});

test('Player Two: each measured clue is necessary; generous charge cannot replace one', () => {
  for (const [visit, flag] of [['B03', 'latchTest'], ['C03', 'echoRecord'], ['D03', 'feederTraced']] as const) {
    const route = skipVisit(careful, visit);
    const result = walk(route, 'easy');
    assert.equal(result.state[flag], false);
    assert.equal(result.state.charge, 45);
    const targets = visibleChoices(result.page, result.state).map((choice) => choice.to);
    assert.ok(!targets.includes('F02'), visit);
    assert.ok(targets.includes('F06'), visit);
    assert.equal(walk([...route, ...ordinary], 'easy').page.ending?.kind, 'good');
  }
  const plain = walk(fast);
  assert.ok(!visibleChoices(plain.page, plain.state).some((choice) => choice.to === 'F02'));
});

test('Player Two: final timing remains a player choice without a repeated clue explanation', () => {
  const result = walk(beforeTiming, 'hard');
  assert.equal(result.state.charge, 20);
  assert.match(result.texts.get('C03')!, /During the bright peak, they keep their old course/);
  assert.match(result.texts.get('C03')!, /That’s the part they’re listening to/);
  assert.doesNotMatch(result.text, /listening|remember|buoy|\bcorrect\b|safe interval/);
  const targets = visibleChoices(result.page, result.state).map((choice) => choice.to);
  assert.deepEqual(targets, ['F04', 'F05', 'F06']);
});

for (const [name, route] of [
  ['simulator restart', insertBefore(careful, 'B07', ['B08'])],
  ['automatic dogleg', careful.map((step) => step === 'C06' ? 'C07' : step)],
  ['pulled connector', careful.flatMap((step): Step[] => Array.isArray(step) && step[0] === 'D06' ? ['D07', 'D06'] : [step])],
] as const) {
  test(`Player Two: ${name} costs ten, recoverable for Medium best and Hard ordinary`, () => {
    const medium = walk([...route, ...best]);
    assert.equal(medium.page.ending?.best, true);
    assert.equal(medium.state.charge, 10);
    const hard = walk([...route, 'F02', 'F03'], 'hard');
    assert.equal(hard.state.charge, 10);
    assert.ok(!visibleChoices(hard.page, hard.state).some((choice) => choice.to === 'F05'));
    const ordinaryResult = walk([...route, 'F02', 'F03', ...ordinary], 'hard');
    assert.equal(ordinaryResult.page.ending?.kind, 'good');
    assert.equal(ordinaryResult.state.charge, 5);
  });
}

test('Player Two: bright timing can be corrected once without a hidden best-ending exclusion', () => {
  const recovery = [...beforeTiming, 'F04', 'F03'];
  for (const [difficulty, remaining] of [['easy', 20], ['medium', 10]] as const) {
    const pending = walk(recovery, difficulty);
    assert.equal(pending.state.pulseTried, true);
    assert.ok(!visibleChoices(pending.page, pending.state).some((choice) => choice.to === 'F04'));
    const result = walk([...recovery, 'F05', 'F10', 'E09'], difficulty);
    assert.equal(result.page.ending?.best, true);
    assert.equal(result.state.charge, remaining);
  }
  const hard = walk([...recovery, ...ordinary], 'hard');
  assert.equal(hard.page.ending?.kind, 'good');
  assert.equal(hard.state.charge, 5);
});

test('Player Two: Easy absorbs two ten-point errors; Medium must accept an ordinary defence', () => {
  const twoErrors = insertBefore(careful.map((step) => step === 'C06' ? 'C07' : step), 'B07', ['B08']);
  const easy = walk([...twoErrors, ...best], 'easy');
  assert.equal(easy.state.charge, 10);
  const medium = walk([...twoErrors, 'F02', 'F03']);
  assert.equal(medium.state.charge, 10);
  assert.ok(!visibleChoices(medium.page, medium.state).some((choice) => choice.to === 'F05'));
  assert.equal(walk([...twoErrors, ...ordinary]).page.ending?.kind, 'good');
});

test('Player Two: split-field threshold is exactly the taught value for every difficulty', () => {
  for (const difficulty of DIFFICULTIES) {
    const result = walk(beforeTiming, difficulty);
    const minimum = Number(result.state.splitMinimum);
    const below = { ...result.state, charge: minimum - 1 };
    const exact = { ...result.state, charge: minimum };
    assert.ok(!visibleChoices(result.page, below).some((choice) => choice.to === 'F05'));
    const action = visibleChoices(result.page, exact).find((choice) => choice.to === 'F05');
    assert.ok(action);
    const after = choose(story, exact, action);
    assert.equal(after.charge, 10);
    assert.equal(after.running, false);
  }
});

test('Player Two: the fast route needs no optional clues and spends 50', () => {
  for (const [difficulty, remaining] of [['easy', 50], ['medium', 40], ['hard', 30]] as const) {
    const result = walk([...fast, ...ordinary], difficulty);
    assert.equal(result.page.ending?.kind, 'good');
    assert.equal(result.page.ending?.best, undefined);
    assert.equal(result.state.charge, remaining);
    assert.equal(result.state.latchTest, false);
    assert.equal(result.state.echoRecord, false);
    assert.equal(result.state.feederTraced, false);
    assert.match(result.text, /lost its navigation array and freight stock/);
  }
});

test('Player Two: freight support needs both the freed tug and local loading work', () => {
  for (const tug of [false, true]) for (const stores of [false, true]) {
    let route = [...fast];
    if (tug) route = insertBefore(route, 'C05', ['C04', 'C02']);
    if (stores) route = insertBefore(route, 'D05', ['D04', 'D02']);
    const ending = tug && stores ? 'E07' : 'E06';
    const result = walk([...route, 'F06', 'F07', ending], 'hard');
    assert.equal(result.state.charge, 30 - (tug ? 5 : 0) - (stores ? 5 : 0));
    assert.equal(result.state.tugHelp, tug);
    assert.equal(result.state.storesSecured, stores);
    assert.equal(result.page.ending?.kind, 'good');
    if (tug && stores) assert.match(result.texts.get('F06')!, /Odo’s freed tug takes it behind the rock/);
    else assert.doesNotMatch(result.texts.get('F06')!, /Odo’s freed tug/);
  }
});

test('Player Two: the sleeve and conversation cost charge but are not best-ending keys', () => {
  const supper = insertBefore(careful, 'B03', ['B05', 'B02']);
  const sleeve = insertBefore(careful, 'B03', ['B04', 'B02']).map((step): Step =>
    Array.isArray(step) && step[0] === 'D06' ? ['D06', 1] : step);
  const withSupper = walk([...supper, ...best]);
  assert.equal(withSupper.state.charge, 15);
  assert.match(withSupper.texts.get('F10')!, /Plumbing never told me when to wait/);
  const fitted = walk([...sleeve, ...best]);
  assert.equal(fitted.state.charge, 15);
  assert.match(fitted.texts.get('D06')!, /go back through the boarding tube for the sleeve/);
  assert.match(fitted.texts.get('D06')!, /sleeve stays fitted here/);
  assert.doesNotMatch(walk(careful).texts.get('D06')!, /sleeve stays/);
});

test('Player Two: selected local repairs render once and their transient state is cleared', () => {
  const isolated = walk(careful);
  assert.match(isolated.texts.get('B07')!, /you open the speaker isolator/);
  assert.doesNotMatch(isolated.texts.get('B07')!, /after the restart/);
  const reset = walk(insertBefore(careful, 'B07', ['B08']));
  assert.match(reset.texts.get('B07')!, /after the restart/);
  assert.doesNotMatch(reset.texts.get('B07')!, /you open the speaker isolator/);
  const pulled = walk(careful.flatMap((step): Step[] => Array.isArray(step) && step[0] === 'D06' ? ['D07', 'D06'] : [step]));
  assert.match(pulled.texts.get('D06')!, /cooling loop restarted/);
  for (const result of [isolated, reset, pulled]) assert.equal(result.state.localAction, 'none');
});

test('Player Two: tracing earns a distinct ordinary handwheel victory without other clues', () => {
  const route = insertBefore(fast, 'D05', ['D03', 'D02']);
  const result = walk([...route, 'E08'], 'hard');
  assert.equal(result.state.latchTest, false);
  assert.equal(result.state.echoRecord, false);
  assert.equal(result.state.feederTraced, true);
  assert.equal(result.state.charge, 20);
  assert.equal(result.page.ending?.kind, 'good');
  assert.equal(result.page.ending?.best, undefined);
  assert.match(result.text, /shield mechanism itself will need a long rebuild/);
  assert.ok(!visibleChoices(walk(fast).page, walk(fast).state).some((choice) => choice.to === 'E08'));
});

test('Player Two: refusal, washout, berth failure and decoy failure have distinct consequences', () => {
  const declined = walk(['A02', 'A03', 'A04', 'E01']);
  assert.equal(declined.page.ending?.kind, 'good');
  assert.equal(declined.state.charge, 90);
  const washed = walk([...opening, 'B06', 'E02']);
  assert.equal(washed.page.ending?.kind, 'bad');
  assert.match(washed.text, /qualified dock engineer/);
  const berth = walk([...fast.slice(0, -2), 'E03']);
  assert.equal(berth.page.ending?.kind, 'bad');
  assert.match(berth.text, /follows the boats on ordinary thrust/);
  const decoy = walk([...fast, 'F08', 'E05']);
  assert.equal(decoy.page.ending?.kind, 'bad');
  assert.match(decoy.text, /external supply takes over/);
  for (const result of [declined, washed, berth, decoy]) assert.equal(result.state.running, false);
});

test('Player Two: depleted outpost and deployed recoveries keep pilot and remote instructors in place', () => {
  let extra = insertBefore(careful, 'B03', ['B04', 'B02', 'B05', 'B02']);
  extra = insertBefore(extra, 'C05', ['C04', 'C02']);
  const deployed = walk([...extra, 'F09', 'E04'], 'hard');
  assert.equal(deployed.state.charge, 5);
  assert.match(deployed.texts.get('F09')!, /defence orbit above Latchpoint/);
  assert.match(deployed.texts.get('F09')!, /Grig at the League service dock/);
  const loaded = insertBefore(extra, 'D05', ['D04', 'D02']);
  const docked = walk([...loaded.slice(0, -2), 'F09', 'E04'], 'hard');
  assert.equal(docked.state.charge, 10);
  assert.match(docked.texts.get('F09')!, /return with Tavi through the boarding tube/);
  assert.doesNotMatch(docked.texts.get('F09')!, /defence orbit above Latchpoint/);
  assert.match(docked.text, /external power cradle/);
});

test('Player Two: exhaustive reachable states preserve charge, clue gates, local state and ending visibility', () => {
  const queue = DIFFICULTIES.map((difficulty) => ({ id: story.start, state: startState(story, difficulty) }));
  const seen = new Set<string>();
  const endings = new Set<string>();
  for (let index = 0; index < queue.length; index++) {
    const { id, state } = queue[index];
    const key = `${id}|${JSON.stringify(state)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    assert.ok(Number(state.charge) > 0 && Number(state.charge) <= 100, key);
    const page = getPage(story, id);
    if (['B09', 'D08', 'D09', 'F01'].includes(id)) assert.equal(state.localAction, 'none', key);
    if (page.ending) {
      endings.add(id);
      assert.equal(state.running, false, key);
      if (page.ending.best) {
        assert.equal(state.latchTest && state.echoRecord && state.feederTraced, true, key);
        assert.ok(Number(state.charge) >= 10, key);
      }
      continue;
    }
    const choices = visibleChoices(page, state);
    assert.ok(choices.length, key);
    for (const [flag, visit] of [['latchTest', 'B03'], ['sleeve', 'B04'], ['heardTavi', 'B05'], ['echoRecord', 'C03'], ['tugHelp', 'C04'], ['feederTraced', 'D03'], ['storesSecured', 'D04']] as const) {
      if (state[flag]) assert.ok(!choices.some((choice) => choice.to === visit), `${key}: repeat ${visit}`);
    }
    if (id === 'F01') {
      const patch = choices.some((choice) => choice.to === 'F02');
      assert.equal(patch, Boolean(state.latchTest && state.echoRecord && state.feederTraced && Number(state.charge) >= 6), key);
    }
    if (id === 'F03') assert.equal(choices.some((choice) => choice.to === 'F05'), Number(state.charge) >= Number(state.splitMinimum), key);
    if (id === 'F07') assert.deepEqual(choices.map((choice) => choice.to), [state.tugHelp && state.storesSecured ? 'E07' : 'E06'], key);
    for (const choice of choices) queue.push({ id: choice.to, state: choose(story, state, choice) });
  }
  assert.equal(endings.size, 9);
});
