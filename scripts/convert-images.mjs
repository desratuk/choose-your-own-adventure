#!/usr/bin/env node
// Converts full-size illustrations in stories/<id>/art-src/*.png|jpg into the game's
// stories/<id>/images/<PAGE_ID>.webp (1200x800, quality 75). Needs `cwebp` (brew install webp).
// Only converts files that are new or newer than their WebP, unless --all is passed.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, parse } from 'node:path';

const all = process.argv.includes('--all');
const root = join(import.meta.dirname, '..', 'stories');
let converted = 0;
for (const story of readdirSync(root)) {
  const src = join(root, story, 'art-src');
  if (!existsSync(src)) continue;
  const out = join(root, story, 'images');
  mkdirSync(out, { recursive: true });
  for (const file of readdirSync(src)) {
    const { name, ext } = parse(file);
    if (!/^\.(png|jpe?g)$/i.test(ext)) continue;
    const from = join(src, file);
    const to = join(out, `${name}.webp`);
    if (!all && existsSync(to) && statSync(to).mtimeMs >= statSync(from).mtimeMs) continue;
    execFileSync('cwebp', ['-quiet', '-q', '75', '-resize', '1200', '800', from, '-o', to]);
    console.log(`${story}: ${name}.webp`);
    converted++;
  }
}
console.log(`Converted ${converted} image(s).`);
