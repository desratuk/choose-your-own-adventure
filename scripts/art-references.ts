import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Page, Story } from '../src/engine/types';

export interface ArtReference {
  id: string;
  subjects: string[];
  pages?: string[];
  sources?: string[];
  prompt: string;
  reviewedSha256?: string;
}

export function readReferencePlan(story: Story, root = process.cwd()): ArtReference[] {
  const file = join(root, 'stories', story.id, 'references', 'manifest.json');
  if (!existsSync(file)) throw new Error(`${story.id}: create references/manifest.json before generating art.`);
  return JSON.parse(readFileSync(file, 'utf8'));
}

export function referencePath(story: Story, reference: ArtReference): string {
  return `stories/${story.id}/references/${reference.id}.webp`;
}

// Preflight every pack before writing any scene prompts. A replaced sheet loses its approval.
export function validateReferences(story: Story, references: ArtReference[], root = process.cwd()): void {
  const subjects = new Set(Object.keys(story.art.cast));
  const pages = new Set(story.pages.map((page) => page.id));
  const ids = new Set<string>();
  for (const reference of references) {
    if (ids.has(reference.id)) throw new Error(`${story.id}: duplicate reference ${reference.id}.`);
    ids.add(reference.id);
    for (const subject of reference.subjects) {
      if (!subjects.has(subject)) throw new Error(`${story.id}/${reference.id}: unknown subject ${subject}.`);
    }
    for (const page of reference.pages ?? []) {
      if (!pages.has(page)) throw new Error(`${story.id}/${reference.id}: unknown page ${page}.`);
    }
    const file = referencePath(story, reference);
    if (!existsSync(join(root, file))) throw new Error(`Missing ${file}. Run npm run prompts -- --references and create/review the sheets first.`);
    const hash = createHash('sha256').update(readFileSync(join(root, file))).digest('hex');
    if (reference.reviewedSha256 !== hash) throw new Error(`Unreviewed or changed reference: ${file}. Inspect it before recording its SHA-256 in the manifest.`);
  }
  for (const subject of subjects) {
    if (!references.some((reference) => reference.subjects.includes(subject))) {
      throw new Error(`${story.id}: missing reference coverage for ${subject}.`);
    }
  }
}

export function referencesForPage(references: ArtReference[], page: Page): ArtReference[] {
  return references.filter((reference) => reference.subjects.some((subject) => page.cast?.includes(subject)) || reference.pages?.includes(page.id));
}
