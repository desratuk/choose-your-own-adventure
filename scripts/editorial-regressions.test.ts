import assert from 'node:assert/strict';
import { test } from 'node:test';
import { choose, getPage, renderText, startState, visibleChoices } from '../src/engine/engine';
import type { Difficulty, Story } from '../src/engine/types';
import { stories } from '../stories';

function walk(story: Story, route: string[], difficulty: Difficulty = 'medium') {
  let page = getPage(story, story.start);
  let state = startState(story, difficulty);
  for (const target of route) {
    const choices = visibleChoices(page, state).filter((choice) => choice.to === target);
    assert.equal(choices.length, 1, `${story.id}: expected one available ${page.id} → ${target} on ${difficulty}`);
    state = choose(story, state, choices[0]);
    page = getPage(story, target);
  }
  return { page, state, text: renderText(story, page, state).join('\n') };
}

const future = stories.find((story) => story.id === 'stopped-clocks')!;
const opening = ['S02', 'S04', 'S06', 'S07', 'S09', 'S10', 'S11', 'S13', 'S14'];
const past = ['S20', 'S21', 'S23', 'S26'];
const investigation = ['S30', 'S30k', 'S31', 'S33', 'S38'];
const finish = ['S40', 'S41', 'S42', 'S44', 'S45'];

test('rewritten adventures mark their in-progress saves as revision 2', () => {
  for (const story of stories) assert.equal(story.revision, 2, story.id);
});

test('BTTF: the full investigation earns the best ending in either era order', () => {
  for (const route of [[...past, ...investigation], [...investigation, ...past]]) {
    const result = walk(future, [...opening, ...route, ...finish, 'E10']);
    assert.equal(result.page.ending?.best, true);
    assert.equal(result.state.rexCaught, true);
    assert.equal(result.state.minutes, 35);
  }
});

test('BTTF: best-route timing is generous on Easy and exact on Hard', () => {
  for (const [difficulty, remaining] of [['easy', 65], ['medium', 35], ['hard', 20]] as const) {
    const result = walk(future, [...opening, ...past, ...investigation, ...finish, 'E10'], difficulty);
    assert.equal(result.state.minutes, remaining);
  }
});

test('BTTF: the wheel mistake is repaired in 1885, before either departure order', () => {
  const repair = ['S20', 'S21', 'S23', 'S25', 'S26b', 'S26'];
  for (const route of [[...repair, ...investigation], [...investigation, ...repair]]) {
    const result = walk(future, [...opening, ...route, ...finish, 'E10']);
    assert.equal(result.state.swapped, true);
    assert.equal(result.state.escapement, 'spare');
    assert.equal(result.state.minutes, 20);
  }
  const hard = walk(future, [...opening, ...repair, ...investigation, ...finish, 'E11'], 'hard');
  assert.equal(hard.state.minutes, 5);
  assert.equal(hard.page.ending?.best, undefined);
});

test('BTTF: asking the Authority without opening the broadcast does not arrest Rex', () => {
  const result = walk(future, [...opening, ...past, ...investigation, 'S40', 'S41', 'S42', 'S43', 'E09']);
  assert.equal(result.state.authorityAlerted, true);
  assert.equal(result.state.rexCaught, false);
  assert.match(result.text, /Rex Tannen is still out there/);
});

test('BTTF: a broadcast without the Authority exposes Rex but cannot earn an arrest', () => {
  const result = walk(future, [...opening, ...past, 'S30', 'S31', 'S32', 'S35', 'S40', 'S41', 'S42', 'S44', 'E09']);
  assert.equal(result.state.authorityAlerted, false);
  assert.equal(result.state.rexCaught, false);
  assert.equal(result.page.ending?.best, undefined);
});

test('BTTF: missed museum knowledge cannot unlock the live-interview plan', () => {
  const result = walk(future, [...opening, ...past, 'S30', 'S30k', 'S33', 'S38', 'S40', 'S41', 'S42']);
  assert.equal(result.state.sawExhibit, false);
  assert.ok(!visibleChoices(result.page, result.state).some((choice) => choice.to === 'S44'));
});

test('BTTF: a late escape still restores the square even when the Authority was alerted', () => {
  const recovery = ['S20', 'S21', 'S24', 'S27', 'S28', 'S29', 'S23', 'S25', 'S26b', 'S26'];
  const result = walk(future, [...opening, ...recovery, ...investigation, 'S40', 'S41', 'S42', 'S43', 'E11']);
  assert.equal(result.state.authorityAlerted, true);
  assert.equal(result.state.rexCaught, false);
  assert.match(result.text, /Hill Valley starts again/);
  assert.match(result.text, /write it in 1885/);
});

test('BTTF: refusing to repair the wheel ends in the ravine, not a never-visited present', () => {
  const result = walk(future, [...opening, 'S20', 'S21', 'S23', 'S25', 'E05']);
  assert.equal(result.page.era, '1885');
  assert.equal(result.state.visited2085, false);
  assert.match(result.text, /Across the desert/);
});

test('BTTF: exhausted assembly does not claim a completed seventy-minute build', () => {
  const recovery = ['S20', 'S21', 'S24', 'S27', 'S28', 'S29', 'S23', 'S25', 'S26b', 'S26'];
  const result = walk(future, [...opening, ...recovery, ...investigation, 'S40', 'S41'], 'hard');
  assert.ok(Number(result.state.minutes) <= 0);
  assert.deepEqual(visibleChoices(result.page, result.state).map((choice) => choice.to), ['E07']);
  assert.doesNotMatch(result.text, /seventy minutes/i);
});
