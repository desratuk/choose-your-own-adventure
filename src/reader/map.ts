import { checkStory } from '../engine/check';
import { getPage, imagePrompt } from '../engine/engine';
import { describeCond as cond, describeEffects as effects } from '../engine/describe';
import type { Page, Story } from '../engine/types';
import { saveRun } from './storage';
import { esc } from './text';

// Author view (?map): every page laid out by depth from the start, links between them,
// the checker's report, and each page's logic. Contains spoilers by design.

const W = 132;
const H = 46;
const GX = 64;
const GY = 18;

export function startMap(root: HTMLElement, story: Story) {
  const report = checkStory(story);

  // Depth = shortest distance from the start page.
  const depth = new Map<string, number>([[story.start, 0]]);
  const queue = [story.start];
  while (queue.length) {
    const id = queue.shift()!;
    for (const c of getPage(story, id).choices ?? []) {
      if (!depth.has(c.to)) {
        depth.set(c.to, depth.get(id)! + 1);
        queue.push(c.to);
      }
    }
  }
  const columns: Page[][] = [];
  for (const p of story.pages) (columns[depth.get(p.id) ?? columns.length] ??= []).push(p);
  const pos = new Map<string, { x: number; y: number }>();
  columns.forEach((col, ci) => col.forEach((p, ri) => pos.set(p.id, { x: 20 + ci * (W + GX), y: 20 + ri * (H + GY) })));
  const width = 40 + columns.length * (W + GX);
  const height = 40 + Math.max(...columns.map((c) => c.length)) * (H + GY);

  const edges = story.pages.flatMap((p) =>
    (p.choices ?? []).map((c) => {
      const a = pos.get(p.id)!;
      const b = pos.get(c.to)!;
      const x1 = a.x + W;
      const y1 = a.y + H / 2;
      const x2 = b.x;
      const y2 = b.y + H / 2;
      const back = x2 <= x1;
      const d = back
        ? `M${x1},${y1} C${x1 + 60},${y1 - 80} ${x2 - 60},${y2 - 80} ${x2},${y2}`
        : `M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`;
      return `<path d="${d}" class="${c.if ? 'cond' : ''}${back ? ' back' : ''}" />`;
    }),
  );
  const nodes = story.pages.map((p) => {
    const { x, y } = pos.get(p.id)!;
    const cls = p.ending ? `ending ${p.ending.kind}` : '';
    return `<g class="node ${cls}" data-era="${p.era}" data-id="${p.id}" tabindex="0" transform="translate(${x},${y})">
      <rect width="${W}" height="${H}" rx="6" />
      <text x="10" y="18" class="id">${p.id}</text>
      <text x="10" y="35">${esc(p.title.length > 18 ? p.title.slice(0, 17) + '…' : p.title)}</text>
    </g>`;
  });

  const { stats } = report;
  root.innerHTML = `
    <div class="map">
      <header class="map-head">
        <h1>${esc(story.title)}: story map</h1>
        <p>${stats.pages} pages, ${stats.endingsReached} of ${stats.endings} endings reachable, ${stats.states.toLocaleString()} page/state combinations, ${
          stats.paths?.toLocaleString() ?? 'cyclic'
        } playthroughs.
        ${report.errors.length ? `<strong class="bad">${report.errors.length} errors</strong>` : '<strong class="good">Checker: every path is coherent.</strong>'}
        Dashed links are conditional. <a href="?${story.id !== 'stopped-clocks' ? `story=${story.id}` : ''}">Back to the game</a></p>
        ${report.errors.length || report.warnings.length ? `<ul class="issues">${[...report.errors, ...report.warnings].slice(0, 50).map((e) => `<li>${esc(e)}</li>`).join('')}</ul>` : ''}
      </header>
      <div class="map-body">
        <div class="map-canvas"><svg width="${width}" height="${height}">${edges.join('')}${nodes.join('')}</svg></div>
        <aside class="map-detail"><p class="muted">Select a page to see its logic.</p></aside>
      </div>
    </div>`;

  const detail = root.querySelector('.map-detail')!;
  const select = (id: string) => {
    const page = getPage(story, id);
    root.querySelectorAll('.node').forEach((n) => n.classList.toggle('selected', (n as SVGElement).dataset.id === id));
    detail.innerHTML = `
      <h2>${page.id}: ${esc(page.title)}</h2>
      <p class="muted">Era ${page.era}${page.time ? `, ${page.time}` : ''}${page.ending ? `, ${page.ending.best ? 'best' : page.ending.kind} ending` : ''}</p>
      ${page.onEnter ? `<p><strong>On enter:</strong> ${effects(page.onEnter)}</p>` : ''}
      ${page.choices ? `<h3>Choices</h3><ol>${page.choices.map((c) => `<li><a href="#" data-go="${c.to}">${c.to}</a> ${esc(c.text)}${c.if ? `<br><code>if ${cond(c.if)}</code>` : ''}${c.set || c.add ? `<br><code>${effects(c)}</code>` : ''}</li>`).join('')}</ol>` : ''}
      <h3>Text</h3>
      ${page.text.map((t) => (typeof t === 'string' ? `<p>${esc(t)}</p>` : `<p><code>if ${cond(t.if)}</code><br>${esc(t.text)}${t.else ? `<br><code>else</code><br>${esc(t.else)}` : ''}</p>`)).join('')}
      <h3>Image prompt</h3><pre>${esc(imagePrompt(story, page))}</pre>
      ${report.samples[id] ? `<button class="btn" data-play>Play from here (easy mode)</button>` : ''}`;
    detail.querySelectorAll<HTMLAnchorElement>('[data-go]').forEach((a) =>
      a.addEventListener('click', (e) => {
        e.preventDefault();
        select(a.dataset.go!);
      }),
    );
    detail.querySelector('[data-play]')?.addEventListener('click', () => {
      saveRun(story.id, {
        difficulty: 'easy',
        current: { pageId: id, state: report.samples[id], era: page.era, time: page.time ?? '', lastDeparted: null },
        history: [],
      });
      location.href = location.pathname + (story.id !== 'stopped-clocks' ? `?story=${story.id}` : '');
    });
  };
  root.querySelectorAll<SVGGElement>('.node').forEach((n) => {
    n.addEventListener('click', () => select(n.dataset.id!));
    n.addEventListener('keydown', (e) => e.key === 'Enter' && select(n.dataset.id!));
  });
}

