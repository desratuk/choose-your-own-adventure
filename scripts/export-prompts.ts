import { writeFileSync } from 'node:fs';
import { imagePrompt } from '../src/engine/engine';
import { stories } from '../stories';
import { readReferencePlan, referencePath, referencesForPage, validateReferences } from './art-references';

const referencePhase = process.argv.includes('--references');
const plans = stories.map((story) => ({ story, references: readReferencePlan(story) }));
if (!referencePhase) {
  for (const { story, references } of plans) validateReferences(story, references);
}

for (const { story, references } of plans) {
  if (referencePhase) {
    const out = [
      `# Reference art: ${story.title}`, '',
      'Create and visually review these sheets BEFORE exporting or generating scene illustrations. Existing scene sources below are migration/style anchors, not permission to generate new scenes first.', '',
      'Lock faces, silhouettes, clothing colours/stripe order, item dimensions/materials and landmark geometry. Keep state variants separate; a reference never grants possession or adds a companion. Correct anatomy and ambiguous details before approval.', '',
      'Save originals in art-src/references/ (git-ignored). Convert reviewed sheets to references/<id>.webp at quality 88, preserving their resolution. Record the inspected WebP’s SHA-256 as reviewedSha256 in references/manifest.json. A missing or changed sheet blocks scene export.', '',
      ...references.flatMap((reference) => [
        `## ${reference.id}`, '',
        `Subjects: ${reference.subjects.join(', ') || 'landmark (page-specific)'}.`, '',
        `Output: \`${referencePath(story, reference)}\``, '',
        ...(reference.sources?.length ? ['Attach these existing anchors in order:', ...reference.sources.map((source) => `- \`${source}\``), ''] : []),
        '```', reference.prompt, '```', '',
      ]),
    ];
    const file = `stories/${story.id}/reference-prompts.md`;
    writeFileSync(file, out.join('\n'));
    console.log(`Wrote ${file}`);
    continue;
  }
  const out = [
    `# Image prompts: ${story.title}`,
    '',
    `References are reviewed. Attach the listed files to the image model for EVERY page; mentioning their filenames is not enough. Save each scene as \`stories/${story.id}/art-src/<PAGE_ID>.png\`, then run \`npm run images\`. 3:2 landscape.`,
    '',
    ...story.pages.flatMap((p) => [
      `## ${p.id}`, '',
      'Attach these identity references:', '',
      ...referencesForPage(references, p).map((reference) => `- \`${referencePath(story, reference)}\` — reference for ${reference.subjects.join(', ') || reference.id}; use only subjects and props explicitly visible in this scene.`), '',
      '```',
      'The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.',
      imagePrompt(story, p), '```', '',
    ]),
  ];
  const file = `stories/${story.id}/image-prompts.md`;
  writeFileSync(file, out.join('\n'));
  console.log(`Wrote ${file}`);
}
