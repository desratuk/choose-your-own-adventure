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
