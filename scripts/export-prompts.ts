import { writeFileSync } from 'node:fs';
import { imagePrompt } from '../src/engine/engine';
import { stories } from '../stories';

// Writes stories/<id>/image-prompts.md: one full prompt per page, ready to paste into an image model.
// Save each generated image as stories/<id>/images/<PAGE_ID>.(webp|png|jpg) and the reader picks it up.
for (const story of stories) {
  const out = [
    `# Image prompts: ${story.title}`,
    '',
    `Save each image as \`stories/${story.id}/images/<PAGE_ID>.webp\` (or .png/.jpg). 3:2 landscape, no text in the image.`,
    '',
    ...story.pages.flatMap((p) => [`## ${p.id}`, '', '```', imagePrompt(story, p), '```', '']),
  ];
  const file = `stories/${story.id}/image-prompts.md`;
  writeFileSync(file, out.join('\n'));
  console.log(`Wrote ${file}`);
}
