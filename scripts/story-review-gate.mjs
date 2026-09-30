#!/usr/bin/env node
// Continuity-review gate for story packs.
//
//   node scripts/story-review-gate.mjs            Check: exit 2 (blocking, for the Claude Code Stop hook)
//                                                if any story.ts changed since its last passed review.
//   node scripts/story-review-gate.mjs --stamp ID Record that story ID passed review. Only the
//                                                story-continuity-reviewer agent should run this.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..', 'stories');
const hash = (id) => createHash('sha256').update(readFileSync(join(root, id, 'story.ts'))).digest('hex');
const stampFile = (id) => join(root, id, '.continuity-review');

const [flag, id] = process.argv.slice(2);
if (flag === '--stamp') {
  if (!id || !existsSync(join(root, id, 'story.ts'))) {
    console.error('Usage: --stamp <story-id>');
    process.exit(1);
  }
  writeFileSync(stampFile(id), hash(id) + '\n');
  console.log(`Recorded passed continuity review for ${id}.`);
  process.exit(0);
}

const stale = readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(root, d.name, 'story.ts')))
  .map((d) => d.name)
  .filter((s) => !existsSync(stampFile(s)) || readFileSync(stampFile(s), 'utf8').trim() !== hash(s));

// When the hook has already blocked this stop once (e.g. a review is running in the background),
// let the turn end rather than loop forever. It will block again on the next turn.
let input = {};
try {
  input = process.stdin.isTTY ? {} : JSON.parse(readFileSync(0, 'utf8') || '{}');
} catch {}

if (stale.length && !input.stop_hook_active) {
  console.error(
    `Story changed without a continuity review: ${stale.join(', ')}.\n` +
      `Before finishing: run \`npm run check\`, then launch the story-continuity-reviewer agent for each story listed. ` +
      `Fix every issue it reports and re-run it until it passes; it records the pass itself. ` +
      `Don't quote story text to the user when summarising.`,
  );
  process.exit(2);
}
