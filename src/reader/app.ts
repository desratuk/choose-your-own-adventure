import { choose, evaluate, getPage, renderText, startState, visibleChoices } from '../engine/engine';
import type { Choice, Page, Story } from '../engine/types';
import { pageHeader, playTransition, previewDestination, titleHeader } from './chrome';
import { imageFor } from './images';
import { formatText, esc } from './text';
import {
  UNDO_LIMIT,
  loadEndings,
  loadRun,
  recordEnding,
  saveRun,
  type Difficulty,
  type Run,
  type Snapshot,
} from './storage';

const DIFFICULTIES: { id: Difficulty; name: string; note: string }[] = [
  { id: 'easy', name: 'Easy', note: 'Undo as many choices as you like.' },
  { id: 'medium', name: 'Medium', note: 'Undo up to your last two choices.' },
  { id: 'hard', name: 'Hard', note: 'No undo. Every choice is final.' },
];

/** Sync the browser's theme colour (mobile address bar) with the current era's background. */
function syncThemeColor() {
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  if (bg) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg);
}

/** `chooseAnother` is set when other stories exist; it returns to the story picker. */
export function startReader(root: HTMLElement, story: Story, chooseAnother?: () => void) {
  const difficulties = DIFFICULTIES.map((d) => ({ ...d, note: story.difficultyNotes?.[d.id] ?? d.note }));
  let run: Run | null = loadRun(story.id);
  // A save from an older version of the story may point at a page that no longer exists.
  if (run && !story.pages.some((p) => p.id === run!.current.pageId)) run = null;
  let busy = false;

  const endings = story.pages.filter((p) => p.ending);

  function firstSnapshot(difficulty: Difficulty): Snapshot {
    const page = getPage(story, story.start);
    return { pageId: page.id, state: startState(story, difficulty), era: page.era, time: page.time ?? '', lastDeparted: null };
  }

  // ── Title screen ────────────────────────────────────────────
  function showTitle() {
    delete root.dataset.era;
    document.documentElement.dataset.era = getPage(story, story.start).era;
    syncThemeColor();
    const found = loadEndings(story.id).length;
    const startPage = getPage(story, story.start);
    window.scrollTo(0, 0);
    root.innerHTML = `
      <div class="title-screen">
        ${titleHeader(story, startPage.time)}
        <div class="title-body">
          <h1 class="title-mark">${esc(story.title)}</h1>
          <p class="title-sub">${esc(story.subtitle)}</p>
          <p class="title-blurb">${esc(story.blurb)}</p>
          ${run ? `<button class="btn primary" data-act="continue">Continue your adventure</button>` : ''}
          <fieldset class="difficulty">
            <legend>${run ? 'Or start again' : 'Choose a difficulty'}</legend>
            ${difficulties.map(
              (d, i) => `
              <label class="diff">
                <input type="radio" name="difficulty" value="${d.id}" ${i === 1 ? 'checked' : ''} />
                <span><strong>${d.name}</strong> ${d.note}</span>
              </label>`,
            ).join('')}
          </fieldset>
          <button class="btn ${run ? '' : 'primary'}" data-act="new">Start a new adventure</button>
          <button class="btn ghost" data-act="endings">Endings found: ${found} of ${endings.length}</button>
          ${chooseAnother ? `<button class="btn ghost" data-act="stories">Choose another story</button>` : ''}
        </div>
      </div>`;
    root.querySelector('[data-act="stories"]')?.addEventListener('click', () => chooseAnother!());
    root.querySelector('[data-act="continue"]')?.addEventListener('click', () => showPage());
    root.querySelector('[data-act="new"]')!.addEventListener('click', () => {
      const difficulty = (root.querySelector('input[name="difficulty"]:checked') as HTMLInputElement).value as Difficulty;
      run = { difficulty, current: firstSnapshot(difficulty), history: [] };
      saveRun(story.id, run);
      showPage();
    });
    root.querySelector('[data-act="endings"]')!.addEventListener('click', showEndings);
  }

  // ── Endings gallery ─────────────────────────────────────────
  function showEndings() {
    const found = new Set(loadEndings(story.id));
    const dialog = document.createElement('dialog');
    dialog.className = 'sheet';
    dialog.innerHTML = `
      <h2>Endings found: ${found.size} of ${endings.length}</h2>
      <ul class="gallery">
        ${endings
          .map((p) => {
            if (!found.has(p.id)) return `<li class="locked"><span class="thumb"></span><span>Not found yet</span></li>`;
            const img = imageFor(story.id, p.id);
            return `<li class="${p.ending!.kind}">
              <span class="thumb" data-era="${p.era}">${img ? `<img src="${img}" alt="" />` : ''}</span>
              <span><strong>${esc(p.title)}</strong><em>${endingLabel(p)}</em></span>
            </li>`;
          })
          .join('')}
      </ul>
      <button class="btn" data-act="close">Close</button>`;
    document.body.append(dialog);
    dialog.querySelector('[data-act="close"]')!.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => dialog.remove());
    dialog.showModal();
  }

  // ── Menu ────────────────────────────────────────────────────
  function showMenu() {
    const dialog = document.createElement('dialog');
    dialog.className = 'sheet';
    const diff = difficulties.find((d) => d.id === run!.difficulty)!;
    dialog.innerHTML = `
      <h2>Paused</h2>
      <p class="muted">Difficulty: <strong>${diff.name}</strong>. ${diff.note} Your progress saves automatically.</p>
      <button class="btn primary" data-act="resume">Keep playing</button>
      <button class="btn" data-act="endings">Endings found: ${loadEndings(story.id).length} of ${endings.length}</button>
      <button class="btn" data-act="title">Back to the title screen</button>
      <button class="btn danger" data-act="restart">Restart from the beginning</button>`;
    document.body.append(dialog);
    const on = (act: string, fn: () => void) =>
      dialog.querySelector(`[data-act="${act}"]`)!.addEventListener('click', () => {
        dialog.close();
        fn();
      });
    on('resume', () => {});
    on('endings', showEndings);
    on('title', showTitle);
    on('restart', () => {
      run = { difficulty: run!.difficulty, current: firstSnapshot(run!.difficulty), history: [] };
      saveRun(story.id, run);
      showPage();
    });
    dialog.addEventListener('close', () => dialog.remove());
    dialog.showModal();
  }

  // ── Page ────────────────────────────────────────────────────
  function showPage() {
    const snap = run!.current;
    const page = getPage(story, snap.pageId);
    root.dataset.era = page.era;
    document.documentElement.dataset.era = page.era;
    syncThemeColor();
    if (page.ending) recordEnding(story.id, page.id);

    const paragraphs = renderText(story, page, snap.state).map((t) => `<p>${formatText(t)}</p>`).join('');
    const choices = visibleChoices(page, snap.state);
    const clock = story.clock && evaluate(story.clock.visibleWhen, snap.state) ? story.clock : null;
    const undoLeft = Math.min(run!.history.length, UNDO_LIMIT[run!.difficulty]);
    const img = imageFor(story.id, page.id);

    window.scrollTo(0, 0);
    root.innerHTML = `
      <div class="reader">
        <div class="side">
          <header class="dash">
            ${pageHeader(story, snap, clock ? (snap.state[clock.flag] as number) : null)}
          </header>
          <figure class="art" data-era="${page.era}">
            ${img ? `<img src="${img}" alt="" />` : placeholder(page)}
          </figure>
        </div>
        <main class="page" id="page">
          <article class="story">
            <h1 class="page-title" tabindex="-1">${esc(page.title)}</h1>
            ${paragraphs}
            ${page.ending ? endingCard(page) : choiceList(page, choices, snap.era)}
          </article>
        </main>
        <nav class="bar">
          ${
            UNDO_LIMIT[run!.difficulty] > 0
              ? `<button class="btn small" data-act="undo" ${undoLeft ? '' : 'disabled'}>Undo${
                  run!.difficulty === 'medium' ? ` (${undoLeft} left)` : ''
                }</button>`
              : `<span class="muted small">Hard mode: no undo</span>`
          }
          <button class="btn small" data-act="menu">Menu</button>
        </nav>
      </div>`;

    root.querySelectorAll<HTMLButtonElement>('.choice').forEach((btn, i) => {
      const choice = choices[i];
      const target = getPage(story, choice.to);
      if (target.era !== snap.era) {
        const preview = () => previewDestination(story, root, target.time ?? null);
        const clear = () => previewDestination(story, root, null);
        btn.addEventListener('pointerenter', preview);
        btn.addEventListener('focus', preview);
        btn.addEventListener('pointerleave', clear);
        btn.addEventListener('blur', clear);
      }
      btn.addEventListener('click', () => pick(choice));
    });
    root.querySelector('[data-act="undo"]')?.addEventListener('click', undo);
    root.querySelector('[data-act="menu"]')!.addEventListener('click', showMenu);
    root.querySelector('[data-act="again"]')?.addEventListener('click', () => {
      run = null;
      saveRun(story.id, null);
      showTitle();
    });
    root.querySelector('[data-act="gallery"]')?.addEventListener('click', showEndings);
  }

  async function pick(choice: Choice) {
    if (busy) return;
    busy = true;
    const prev = run!.current;
    const target = getPage(story, choice.to);
    const travelling = target.era !== prev.era;
    const time = target.time ?? prev.time;
    const next: Snapshot = {
      pageId: target.id,
      state: choose(story, prev.state, choice),
      era: target.era,
      time,
      lastDeparted: travelling ? prev.time : prev.lastDeparted,
    };
    run!.history = [...run!.history, prev].slice(-Math.min(UNDO_LIMIT[run!.difficulty], 500));
    run!.current = next;
    saveRun(story.id, run);
    if (travelling) await playTransition(story, root, time);
    busy = false;
    showPage();
    root.querySelector<HTMLElement>('.page-title')?.focus({ preventScroll: true });
  }

  function undo() {
    if (!run!.history.length) return;
    run!.current = run!.history[run!.history.length - 1];
    run!.history = run!.history.slice(0, -1);
    saveRun(story.id, run);
    showPage();
  }

  function choiceList(_page: Page, choices: Choice[], era: string) {
    return `<div class="choices">${choices
      .map((c) => {
        const target = getPage(story, c.to);
        const travel = target.era !== era;
        return `<button class="choice${travel ? ' travel' : ''}">
          ${travel && story.ui?.eraBadges ? `<span class="to-era">${esc(target.era)}</span>` : ''}
          <span>${esc(c.text)}</span>
        </button>`;
      })
      .join('')}</div>`;
  }

  function endingCard(page: Page) {
    const found = loadEndings(story.id).length;
    return `
      <section class="ending-card ${page.ending!.kind}${page.ending!.best ? ' best' : ''}">
        <p class="stamp">${endingLabel(page)}</p>
        <p class="the-end">The end</p>
        <p class="muted">You’ve found ${found} of ${endings.length} endings.</p>
        <button class="btn primary" data-act="again">Play again</button>
        <button class="btn" data-act="gallery">See your endings</button>
      </section>`;
  }

  if (run) showPage();
  else showTitle();
}

function endingLabel(page: Page) {
  if (page.ending!.best) return 'Best ending';
  return page.ending!.kind === 'good' ? 'Good ending' : 'Bad ending';
}

function placeholder(page: Page) {
  // Drawn stand-in until real art lands in stories/<id>/images/<PAGE_ID>.webp
  return `<div class="placeholder" role="img" aria-label="Illustration to come">
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect x="6" y="6" width="108" height="78" rx="6" />
      <circle class="hand" cx="84" cy="30" r="9" />
      <path d="M14 76 L44 42 L62 62 L76 50 L106 76" />
    </svg>
    <span>${esc(page.title)}</span>
  </div>`;
}
