import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { stories } from '../stories';
import { readReferencePlan, referencesForPage, validateReferences } from './art-references';

for (const story of stories) {
  test(`${story.id}: every page has a game WebP illustration`, () => {
    const files = story.pages.map((page) => `stories/${story.id}/images/${page.id}.webp`);
    assert.deepEqual(files.filter((file) => !existsSync(file)), [], 'Missing scene illustrations');
    for (const file of files) {
      const image = readFileSync(file);
      assert.equal(image.toString('ascii', 0, 4), 'RIFF', file);
      assert.equal(image.toString('ascii', 8, 12), 'WEBP', file);
      assert.ok(image.length > 12, `Empty WebP: ${file}`);
    }
  });
}

test('all installed stories have reviewed sheets covering every recurring subject', () => {
  for (const story of stories) validateReferences(story, readReferencePlan(story));
});

test('missing, unreviewed and replaced sheets block export', () => {
  const story = stories[0];
  const references = readReferencePlan(story);
  assert.throws(() => validateReferences(story, references, '/missing-art-reference-test-root'), /Missing/);
  assert.throws(() => validateReferences(story, references.map((r) => ({ ...r, reviewedSha256: undefined }))), /Unreviewed/);
  assert.throws(() => validateReferences(story, references.map((r) => ({ ...r, reviewedSha256: 'changed' }))), /changed reference/);
});

test('new recurring subjects and invalid page mappings cannot silently bypass references', () => {
  const story = stories[0];
  const references = readReferencePlan(story);
  const extra = { ...story, art: { ...story.art, cast: { ...story.art.cast, newProp: 'A recurring prop' } } };
  assert.throws(() => validateReferences(extra, references), /missing reference coverage for newProp/);
  assert.throws(() => validateReferences(story, references.map((r) => ({ ...r, pages: ['MISSING'] }))), /unknown page/);
  assert.throws(() => validateReferences(story, [...references, references[0]]), /duplicate reference/);
});

test('scene references follow actual cast, including optional companions and landmarks', () => {
  const goonies = stories.find((story) => story.id === 'fratelli-run')!;
  const refs = readReferencePlan(goonies);
  const slothPages = goonies.pages.filter((page) => referencesForPage(refs, page).some((r) => r.id === 'sloth-v2')).map((page) => page.id);
  assert.deepEqual(slothPages, ['D07', 'D08', 'E11']);
  const future = stories.find((story) => story.id === 'stopped-clocks')!;
  for (const id of ['S01', 'S02', 'S03', 'E01']) {
    const page = future.pages.find((page) => page.id === id)!;
    assert.ok(!page.cast?.includes('bracelet'));
    assert.match(page.imagePrompt, /wrists are bare/i);
    assert.ok(referencesForPage(readReferencePlan(future), page).some((r) => r.id === 'clock-tower'));
  }
  const ghost = stories.find((story) => story.id === 'return-to-sender')!;
  for (const id of ['C01', 'C02', 'C03', 'C04']) {
    const page = ghost.pages.find((page) => page.id === id)!;
    assert.ok(!page.cast?.includes('slimer'));
    assert.ok(!page.cast?.includes('trap'));
    assert.ok(referencesForPage(readReferencePlan(ghost), page).some((r) => r.id === 'courier-kit'));
  }
});
