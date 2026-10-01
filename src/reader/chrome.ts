// Per-story presentation: the header above the illustration, and the transition played when a
// choice moves to a different era/setting. Stories pick these in `story.ui`; defaults suit any story.
import { formatMeter } from '../engine/engine';
import type { Story } from '../engine/types';
import { circuits, clockReadout } from './circuits';
import { esc } from './text';
import type { Snapshot } from './storage';

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const headerKind = (story: Story) => story.ui?.header ?? 'basic';

function meter(story: Story, value: number) {
  const c = story.clock!;
  if (headerKind(story) === 'time-circuits') {
    return clockReadout(c.label, formatMeter(story, value), (c.format ?? 'time') === 'time' && value <= 30);
  }
  const bar =
    c.risesFrom === undefined
      ? ''
      : `<span class="meter-bar"><i style="width:${Math.min(100, Math.max(0, ((c.risesFrom - value) / c.risesFrom) * 100))}%"></i></span>`;
  return `<div class="meter${bar ? ' rising' : ''}" role="status" aria-label="${esc(c.label)} ${esc(formatMeter(story, value))}">
    <span class="meter-label">${esc(c.label)}</span><span class="meter-value">${esc(formatMeter(story, value))}</span>${bar}
  </div>`;
}

/** Header shown above the illustration on story pages. */
export function pageHeader(story: Story, snap: Snapshot, meterValue: number | null): string {
  const m = meterValue === null ? '' : meter(story, meterValue);
  if (headerKind(story) === 'time-circuits') {
    return circuits({ destination: null, present: snap.time, last: snap.lastDeparted }) + m;
  }
  const era = story.eras[snap.era]?.label ?? '';
  return `<div class="basic-dash">
      <span class="bd-era">${esc(era)}</span>${snap.time ? `<span class="bd-time">${esc(snap.time)}</span>` : ''}
    </div>${m}`;
}

/** Decoration above the title on the story's title screen. */
export function titleHeader(story: Story, startTime: string | undefined): string {
  if (headerKind(story) === 'time-circuits') return circuits({ destination: startTime ?? null, present: null, last: null });
  return '';
}

/** Preview where a setting-changing choice leads (time circuits light the destination row). */
export function previewDestination(story: Story, root: HTMLElement, time: string | null) {
  if (headerKind(story) !== 'time-circuits') return;
  const row = root.querySelector('.tc-row.destination');
  if (row) row.outerHTML = circuits({ destination: time, present: null, last: null, only: 'destination' });
}

/** Play the story's transition into a different era/setting. Resolves when the next page may render. */
export async function playTransition(story: Story, root: HTMLElement, destinationTime: string) {
  const kind = story.ui?.transition ?? 'none';
  if (kind === 'none') return;
  previewDestination(story, root, destinationTime);
  if (reducedMotion()) return;
  if (kind === 'fade') return fade();
  if (kind === 'vhs') return vhs();
  if (kind === 'slime') return slime();
  return eightyEight();
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fade() {
  const overlay = document.createElement('div');
  overlay.className = 'fade-out';
  document.body.append(overlay);
  await wait(450);
  overlay.classList.add('out');
  setTimeout(() => overlay.remove(), 500);
}

// Ghostbusters: green ooze drops over the page, then drains away.
async function slime() {
  const overlay = document.createElement('div');
  overlay.className = 'slime';
  overlay.innerHTML = `<div class="slime-wall"></div><div class="slime-blob b1"></div><div class="slime-blob b2"></div><div class="slime-blob b3"></div>`;
  document.body.append(overlay);
  await wait(650);
  overlay.classList.add('out');
  setTimeout(() => overlay.remove(), 600);
}

// Videotape tracking glitch: noise bars and a rolling tear, a PLAY label, then the picture settles.
async function vhs() {
  const overlay = document.createElement('div');
  overlay.className = 'vhs';
  overlay.innerHTML = `<div class="vhs-noise"></div><div class="vhs-tear"></div><div class="vhs-osd"><span>&#9654;</span> PLAY</div>`;
  document.body.append(overlay);
  await wait(650);
  overlay.classList.add('out');
  setTimeout(() => overlay.remove(), 400);
}

// Back to the Future: speedometer climbs to 88 mph, then a flash and fire trails.
async function eightyEight() {
  const overlay = document.createElement('div');
  overlay.className = 'warp';
  overlay.innerHTML = `
    <div class="speedo"><span class="seg7"><i>88</i><b>0</b></span><small>mph</small></div>
    <div class="trail one"></div><div class="trail two"></div>
    <div class="flash"></div>`;
  document.body.append(overlay);
  const readout = overlay.querySelector('b')!;
  const start = performance.now();
  // Timer-driven rather than requestAnimationFrame so the jump still completes in a background tab.
  await new Promise<void>((done) => {
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / 1100);
      readout.textContent = String(Math.round(88 * t * t));
      if (t < 1) setTimeout(tick, 16);
      else done();
    };
    tick();
  });
  overlay.classList.add('boom');
  await wait(700);
  overlay.classList.add('out');
  setTimeout(() => overlay.remove(), 600);
}
