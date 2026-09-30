import { checkStory } from '../src/engine/check';
import { describeCond, describeEffects } from '../src/engine/describe';
import { stories } from '../stories';

// Prints a story as plain text for continuity review: every page, how you can arrive there,
// which flag values are possible on arrival, and all text/choices with their conditions.
// Usage: npm run -s story-dump -- <story-id>
const id = process.argv[2] ?? stories[0].id;
const story = stories.find((s) => s.id === id);
if (!story) throw new Error(`No story "${id}". Known: ${stories.map((s) => s.id).join(', ')}`);

const { arrivals, errors } = checkStory(story);
if (errors.length) console.log(`NOTE: the structural checker reports ${errors.length} errors; run npm run check.\n`);

const incoming = new Map<string, string[]>();
for (const p of story.pages)
  for (const c of p.choices ?? []) {
    const list = incoming.get(c.to) ?? [];
    list.push(`${p.id} "${c.text}"${c.if ? ` [if ${describeCond(c.if)}]` : ''}`);
    incoming.set(c.to, list);
  }

const out: string[] = [`# ${story.title} (${story.id})`, '', story.blurb, '', '## Flags (defaults)'];
for (const [f, d] of Object.entries(story.flags)) out.push(`- ${f} = ${d.default}${d.values ? ` (one of ${d.values.join(', ')})` : ''}`);
if (story.clock)
  out.push('', `## Visible clock`, `Flag "${story.clock.flag}" in minutes, shown as "${story.clock.label}" when ${describeCond(story.clock.visibleWhen)}.`);

for (const p of story.pages) {
  out.push('', `## ${p.id}: ${p.title}`, `Era ${p.era}${p.time ? `, time-circuit reading ${p.time}` : ' (keeps previous time reading)'}${p.ending ? `, ENDING (${p.ending.best ? 'best' : p.ending.kind})` : ''}`);
  out.push(`Arrives from: ${p.id === story.start ? 'START' : (incoming.get(p.id) ?? ['(nothing)']).join('; ')}`);
  const varying = Object.entries(arrivals[p.id] ?? {}).filter(([, v]) => v.length > 1);
  const fixed = Object.entries(arrivals[p.id] ?? {}).filter(([, v]) => v.length === 1);
  out.push(`Possible on arrival: ${varying.map(([f, v]) => `${f} ∈ {${v.join(', ')}}`).join('; ') || '(no variation)'}`);
  out.push(`Always on arrival: ${fixed.map(([f, v]) => `${f} = ${v[0]}`).join('; ')}`);
  if (p.onEnter) out.push(`On enter: ${describeEffects(p.onEnter)}`);
  out.push('Text:');
  p.text.forEach((t, i) => {
    if (typeof t === 'string') out.push(`  [${i}] ${t}`);
    else out.push(`  [${i}] IF ${describeCond(t.if)}: ${t.text}${t.else ? `\n      ELSE: ${t.else}` : ''}`);
  });
  if (p.choices) {
    out.push('Choices:');
    for (const c of p.choices)
      out.push(`  -> ${c.to}: "${c.text}"${c.if ? ` [if ${describeCond(c.if)}]` : ''}${c.set || c.add ? ` {${describeEffects(c)}}` : ''}`);
  }
}
console.log(out.join('\n'));
