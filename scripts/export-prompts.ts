import { writeFileSync } from 'node:fs';
import { imagePrompt } from '../src/engine/engine';
import { stories } from '../stories';

// Writes stories/<id>/image-prompts.md: one full prompt per page, ready to paste into an image model.
// Save each generated image as stories/<id>/art-src/<PAGE_ID>.png, then run `npm run images` to make the game's WebP.
for (const story of stories) {
  const out = [
    `# Image prompts: ${story.title}`,
    '',
    `Save each image as \`stories/${story.id}/art-src/<PAGE_ID>.png\`, then run \`npm run images\` to create the game's WebP copy in \`images/\`. 3:2 landscape, no text in the image.`,
    '',
    ...story.pages.flatMap((p) => [`## ${p.id}`, '', '```', imagePrompt(story, p), '```', '']),
  ];
  const file = `stories/${story.id}/image-prompts.md`;
  writeFileSync(file, out.join('\n'));
  console.log(`Wrote ${file}`);
}
