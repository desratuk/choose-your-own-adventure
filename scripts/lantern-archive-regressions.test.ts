import assert from 'node:assert/strict';
import { test } from 'node:test';
import { choose, getPage, renderText, startState, visibleChoices } from '../src/engine/engine';
import { DIFFICULTIES, type Difficulty } from '../src/engine/types';
import story from '../stories/lantern-archive/story';

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

const targets = (result: ReturnType<typeof walk>) => visibleChoices(result.page, result.state).map((choice) => choice.to);

const opening: Step[] = ['A02', 'A03', 'A04', 'A06', 'B01', 'B02', 'B04', 'B05', 'C01'];
const highfield: Step[] = ['C02', 'C03', 'C04', 'C01'];
const field: Step[] = ['C05', 'C06', 'C01'];
const toSplice: Step[] = ['D01', 'D03', ['D04', 0], 'D05', 'F01'];
const showing: Step[] = [['F02', 1], ['F03', 0], 'F05', 'F06'];
const prepared: Step[] = [...opening, ...highfield, ...field, ...toSplice];
const best: Step[] = [...prepared, ...showing, 'E09'];

function replace(route: readonly Step[], target: Step, extra: readonly Step[]): Step[] {
  const index = route.indexOf(target);
  assert.ok(index >= 0);
  return [...route.slice(0, index), ...extra, ...route.slice(index + 1)];
}

test('Lantern Archive: 45 pages, ten labelled endings and exactly one best', () => {
  assert.equal(story.revision, 1);
  assert.equal(story.pages.length, 45);
  assert.equal(story.pages.filter((page) => page.ending?.kind === 'good').length, 5);
  assert.equal(story.pages.filter((page) => page.ending?.kind === 'bad').length, 5);
  assert.deepEqual(story.pages.filter((page) => page.ending?.best).map((page) => page.id), ['E09']);
  assert.deepEqual(story.ui, { header: 'basic', transition: 'fade' });
  assert.equal(story.clock?.format, 'time');
  for (const page of story.pages) {
    assert.ok(page.imagePrompt.trim(), page.id);
    for (const subject of page.cast ?? []) assert.ok(story.art.cast[subject], `${page.id}: ${subject}`);
  }
  assert.equal(new Set(story.pages.map((page) => page.title)).size, story.pages.length);
});

test('Lantern Archive: the complete restoration costs 95 and is exact on Hard', () => {
  for (const [difficulty, start, remaining] of [['easy', 120, 25], ['medium', 105, 10], ['hard', 95, 0]] as const) {
    assert.equal(startState(story, difficulty).lantern, start);
    const result = walk(best, difficulty);
    assert.equal(result.page.ending?.best, true);
    assert.equal(result.state.lantern, remaining);
    assert.equal(result.state.running, false);
    for (const flag of ['knowsRound', 'residentsComing', 'lampGlass'] as const) assert.equal(result.state[flag], true);
    assert.equal(result.state.order, 'true');
    assert.equal(result.state.anchor, 'glass');
    assert.equal(result.state.speed, '16');
    if (remaining === 0) assert.match(result.text, /goes out by itself/);
    else assert.match(result.text, new RegExp(`switch off the Lantern with 0:${String(remaining).padStart(2, '0')}`));
  }
});

test('Lantern Archive: the lamplighter’s order is only offered after reading the pole', () => {
  const phoned = walk([...opening, 'C08', 'C01', ...field, ...toSplice], 'easy');
  assert.equal(phoned.state.knowsRound, false);
  assert.equal(phoned.state.residentsComing, true);
  assert.deepEqual(targets(phoned), ['F02', 'F02', 'E02']);
  assert.doesNotMatch(phoned.text, /Tallow Lane, Wick Street, Dipping Row, Mould Yard/);
  const read = walk(prepared);
  assert.deepEqual(visibleChoices(read.page, read.state).map((choice) => choice.text.split(':')[0].slice(0, 22)),
    ['Splice them as they ca', 'Splice them Tallow Lan', 'Splice them Mould Yard', 'Lace only Tallow Lane,', 'Splice them in shelf o']);
});

test('Lantern Archive: wrong splice orders return a muddle, whatever else is right', () => {
  for (const [index, order] of [[0, 'shelf'], [2, 'reverse']] as const) {
    const result = walk([...prepared, ['F02', index], ['F03', 0], ['F07', 1], 'E03']);
    assert.equal(result.state.order, order);
    assert.equal(result.page.ending?.kind, 'bad');
    assert.match(result.texts.get('F07')!, /None of them leads into the next/);
  }
});

test('Lantern Archive: only something that was really there holds the Wicks past morning', () => {
  const withSlide = replace(best, 'D01', ['C07', 'C01', 'D01']);
  const painted = walk([...withSlide.slice(0, -5), ['F02', 1], ['F03', 1], 'F05', 'E04'], 'easy');
  assert.equal(painted.state.anchor, 'slide');
  assert.match(painted.text, /only a picture of a place/);
  const empty = walk([...best.slice(0, -5), ['F02', 1], ['F03', 2], 'F05', 'E04'], 'easy');
  assert.equal(empty.state.anchor, 'none');
  assert.match(empty.text, /Nothing that had really been there/);
  const noGlass = walk([...opening, ...highfield, ...toSplice], 'easy');
  assert.equal(noGlass.state.lampGlass, false);
  const gate = walk([...opening, ...highfield, ...toSplice, ['F02', 1]], 'easy');
  assert.deepEqual(targets(gate), ['F03']);
});

test('Lantern Archive: without the Highfield House residents, only Win gets the Wicks back', () => {
  const route: Step[] = [...opening, 'C02', 'C03', 'C01', ...field, 'D01', 'D03', ['D04', 1], 'F01', ['F02', 1], ['F03', 0], 'F05', 'E10'];
  const result = walk(route, 'hard');
  assert.equal(result.state.residentsComing, false);
  assert.equal(result.page.ending?.kind, 'good');
  assert.match(result.text, /there was only Win/);
  assert.doesNotMatch(result.texts.get('F05')!, /Row F, Abel/);
});

test('Lantern Archive: the moths need ten minutes of light after the last frame', () => {
  const before = walk([...prepared, ...showing]);
  const threshold = (lantern: number) => visibleChoices(before.page, { ...before.state, lantern }).map((choice) => choice.to);
  assert.deepEqual(threshold(10), ['E09', 'E07']);
  assert.deepEqual(threshold(9), ['E07', 'E07']);
  const restarted = walk([...prepared, ...showing, ['E07', 2]]);
  assert.equal(restarted.page.ending?.kind, 'good');
  assert.match(restarted.text, /starts again where it stopped/);
  const lowRoute = replace(replace(prepared, 'A06', ['A05', 'A06']), 'C01', ['B06', 'B07', 'C01']);
  const low = walk([...lowRoute, ...showing]);
  assert.equal(low.state.lantern, 5);
  const ran = walk([...lowRoute, ...showing, ['E07', 1]]);
  assert.equal(ran.state.lantern, 0);
  assert.match(ran.text, /It isn’t long enough/);
});

const mistakes: [string, (route: Step[]) => Step[]][] = [
  ['film cleaner', (route) => replace(route, 'C01', ['B06', 'B07', 'C01'])],
  ['stopped changeover', (route) => replace(route, 'D03', ['D02', 'D03'])],
];

for (const [name, insert] of mistakes) {
  test(`Lantern Archive: the ${name} costs ten — Medium best, Hard ordinary`, () => {
    const route = insert([...prepared]);
    const medium = walk([...route, ...showing, 'E09']);
    assert.equal(medium.page.ending?.best, true);
    assert.equal(medium.state.lantern, 0);
    const hard = walk([...route, ['F02', 1], ['F03', 0]], 'hard');
    assert.equal(hard.state.lantern, 15);
    assert.deepEqual(targets(hard), ['F04']);
    const ordinary = walk([...route, ['F02', 1], ['F03', 0], 'F04', ['F05', 0], 'E08'], 'hard');
    assert.equal(ordinary.page.ending?.kind, 'good');
    assert.equal(ordinary.state.lantern, 5);
  });
}

test('Lantern Archive: twenty-four can be corrected once on Medium but not on Hard', () => {
  const medium = walk([...prepared, ['F02', 1], ['F03', 0], 'F04', ['F05', 2], 'F06', 'E09']);
  assert.equal(medium.state.rushed, true);
  assert.equal(medium.page.ending?.best, true);
  assert.match(medium.texts.get('F05')!, /The second time through/);
  const hard = walk([...prepared, ['F02', 1], ['F03', 0], 'F04'], 'hard');
  assert.equal(hard.state.lantern, 20);
  assert.deepEqual(targets(hard), ['F05']);
  const atRun = walk([...prepared, ['F02', 1], ['F03', 0], 'F04', ['F05', 0], 'E08'], 'hard');
  assert.equal(atRun.state.speed, '24');
  assert.match(atRun.text, /at a run/);
});

test('Lantern Archive: the speed decision carries no reminder of the clue', () => {
  const result = walk([...prepared, ['F02', 1], ['F03', 0]], 'hard');
  assert.doesNotMatch(result.text, /silent|soundtrack|walking|sprocket|wavy/i);
  assert.match(result.texts.get('A03')!, /Sixteen for walking/);
  assert.match(walk(opening).texts.get('B05')!, /no wavy line down the side/);
});

test('Lantern Archive: one roll alone saves one street', () => {
  const result = walk([...prepared, ['F02', 3], ['F03', 0], ['F08', 4], ['E06', 0]], 'hard');
  assert.equal(result.state.order, 'single');
  assert.equal(result.page.ending?.kind, 'good');
  assert.match(result.text, /one came back/);
  const unlit = walk([...prepared, ['F02', 3], ['F03', 2], ['F08', 3], ['E04', 1]], 'hard');
  assert.equal(unlit.page.ending?.kind, 'bad');
});

test('Lantern Archive: refusal, the modern lamp and a cold Lantern are distinct failures', () => {
  const shut = walk(['A02', 'A03', 'A04', 'E01']);
  assert.equal(shut.page.ending?.kind, 'bad');
  assert.equal(shut.state.running, false);
  assert.match(shut.text, /Nobody in Saltbeck can tell you why/);
  const bright = walk([...prepared, 'E02']);
  assert.equal(bright.page.ending?.kind, 'bad');
  assert.match(bright.text, /clear as a window/);
  let wasteful: Step[] = replace(opening, 'A06', ['A05', 'A06']);
  wasteful = replace(wasteful, 'B04', ['B03', 'B04']);
  wasteful = replace(wasteful, 'C01', ['B06', 'B07', 'C01']);
  const cold = walk([...wasteful, ...highfield, ...field, 'C07', 'C01', 'D01', 'D02', 'D03', 'F09', 'E05'], 'hard');
  assert.equal(cold.page.ending?.kind, 'bad');
  assert.equal(cold.state.lantern, 0);
  assert.match(cold.texts.get('F09')!, /0:05/);
});

test('Lantern Archive: hub arrival text, local changeover and Win’s seat render correctly', () => {
  const first = walk(opening);
  assert.match(first.text, /You’d better tell me/);
  assert.doesNotMatch(first.text, /Back in the box/);
  const told = walk(replace(opening, 'A06', ['A05', 'A06']));
  assert.match(told.text, /Win turns at once/);
  assert.doesNotMatch(told.text, /You’d better tell me/);
  const back = walk([...opening, ...field]);
  assert.match(back.text, /Back in the box/);
  assert.match(back.text, /lamp glass from Depot Field/);
  assert.doesNotMatch(back.text, /She taps the other names/);
  const clean = walk([...prepared]);
  assert.match(clean.texts.get('D03')!, /without a flicker/);
  assert.equal(clean.state.changeover, 'none');
  assert.match(clean.texts.get('D05')!, /Win sits down beside them/);
  const box = walk([...opening, ...highfield, ...field, 'D01', 'D03', ['D04', 1], 'D05', 'F01']);
  assert.match(box.texts.get('D05')!, /Nobody ever does/);
  assert.match(box.text, /Win stands at the port/);
});

test('Lantern Archive: exhaustive states keep the Lantern lit, gates honest and endings reachable', () => {
  const queue = DIFFICULTIES.map((difficulty) => ({ id: story.start, state: startState(story, difficulty) }));
  const seen = new Set<string>();
  const endings = new Set<string>();
  for (let index = 0; index < queue.length; index++) {
    const { id, state } = queue[index];
    const key = `${id}|${JSON.stringify(state)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const page = getPage(story, id);
    if (page.ending) {
      endings.add(id);
      assert.equal(state.running, false, key);
      if (page.ending.best) {
        assert.equal(state.knowsRound && state.residentsComing && state.lampGlass, true, key);
        assert.equal(state.order === 'true' && state.anchor === 'glass' && state.speed === '16', true, key);
      }
      continue;
    }
    assert.ok(Number(state.lantern) > 0, key);
    if (id.startsWith('F') || id === 'D04' || id === 'D05') assert.equal(state.changeover, 'none', key);
    const choices = visibleChoices(page, state);
    assert.ok(choices.length, key);
    for (const [flag, visit] of [['knowsRound', 'C02'], ['residentsComing', 'C08'], ['lampGlass', 'C05'], ['slide', 'C07']] as const) {
      if (state[flag]) assert.ok(!choices.some((choice) => choice.to === visit), `${key}: repeat ${visit}`);
    }
    if (id === 'F01') {
      const trueOrder = choices.some((choice) => choice.text.startsWith('Splice them Tallow Lane'));
      assert.equal(trueOrder, Boolean(state.knowsRound) && Number(state.lantern) >= 21, key);
    }
    if (id === 'F06') assert.equal(choices.some((choice) => choice.to === 'E09'), Number(state.lantern) >= 10, key);
    for (const choice of choices) queue.push({ id: choice.to, state: choose(story, state, choice) });
  }
  assert.equal(endings.size, 10);
});
