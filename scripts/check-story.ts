import { existsSync, readFileSync } from 'node:fs';
import { checkStory } from '../src/engine/check';
import { stories } from '../stories';

let failed = false;

// Stories must not be able to clash: saves, endings, images and themes are all keyed by story id.
const ids = stories.map((s) => s.id);
for (const id of new Set(ids.filter((id, i) => ids.indexOf(id) !== i))) {
  console.log(`ERROR: two story packs share the id "${id}"; their saves and endings would overwrite each other`);
  failed = true;
}
for (const story of stories) {
  if (!/^[a-z0-9-]+$/.test(story.id)) {
    console.log(`ERROR: story id "${story.id}" must be lowercase letters, digits and hyphens`);
    failed = true;
  }
  // Every rule in a pack's theme.css must be scoped to that story, or it would restyle other stories.
  const theme = `stories/${story.id}/theme.css`;
  if (!existsSync(theme)) continue;
  const css = readFileSync(theme, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  for (const [, selectors] of css.matchAll(/([^{}]+)\{[^{}]*\}/g)) {
    for (const sel of selectors.split(',').map((x) => x.trim()).filter(Boolean)) {
      if (!sel.startsWith(`[data-story='${story.id}']`) && !sel.startsWith(`[data-story="${story.id}"]`)) {
        console.log(`ERROR: ${theme}: selector "${sel}" is not scoped to [data-story='${story.id}']`);
        failed = true;
      }
    }
  }
}

for (const story of stories) {
  const { errors, warnings, stats } = checkStory(story);
  console.log(`\n${story.title} (${story.id})`);
  console.log(
    `  ${stats.pages} pages, ${stats.endingsReached}/${stats.endings} endings reachable, ` +
      `${stats.states} page/state combinations, ${stats.paths ?? 'cyclic'} distinct playthroughs`,
  );
  for (const w of warnings) console.log(`  warning: ${w}`);
  for (const e of errors.slice(0, 20)) console.log(`  ERROR: ${e}`);
  if (errors.length > 20) console.log(`  …and ${errors.length - 20} more errors`);
  if (errors.length) failed = true;
  else console.log('  OK: every path is coherent');
}
process.exit(failed ? 1 : 0);
