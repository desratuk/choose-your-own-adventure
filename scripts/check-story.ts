import { checkStory } from '../src/engine/check';
import { stories } from '../stories';

let failed = false;
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
