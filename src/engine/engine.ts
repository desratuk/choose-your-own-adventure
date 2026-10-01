import type { Choice, Cond, Difficulty, Effects, Page, Passage, State, Story } from './types';

const pageIndex = new WeakMap<Story, Map<string, Page>>();

export function getPage(story: Story, id: string): Page {
  let index = pageIndex.get(story);
  if (!index) {
    index = new Map(story.pages.map((p) => [p.id, p]));
    pageIndex.set(story, index);
  }
  const page = index.get(id);
  if (!page) throw new Error(`Unknown page "${id}" in story "${story.id}"`);
  return page;
}

export function evaluate(cond: Cond, state: State): boolean {
  if ('all' in cond) return cond.all.every((c) => evaluate(c, state));
  if ('any' in cond) return cond.any.some((c) => evaluate(c, state));
  if ('not' in cond) return !evaluate(cond.not, state);
  const value = state[cond.flag];
  if ('gte' in cond) return (value as number) >= cond.gte;
  if ('lte' in cond) return (value as number) <= cond.lte;
  return value === (cond.is ?? true);
}

export function applyEffects(state: State, effects: Effects | undefined): State {
  if (!effects || (!effects.set && !effects.add)) return state;
  const next = { ...state, ...effects.set };
  for (const [flag, n] of Object.entries(effects.add ?? {})) next[flag] = (next[flag] as number) + n;
  return next;
}

export function initialState(story: Story): State {
  return Object.fromEntries(Object.entries(story.flags).map(([k, def]) => [k, def.default]));
}

/** State on arriving at the story's first page, for the chosen difficulty. */
export function startState(story: Story, difficulty: Difficulty = 'medium'): State {
  const base = applyEffects(initialState(story), story.difficulties?.[difficulty]);
  return applyEffects(base, getPage(story, story.start).onEnter);
}

export function formatClock(minutes: number): string {
  const m = Math.max(0, minutes);
  return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
}

/** The story's meter value as shown to the player: H:MM for time meters, otherwise the number plus unit. */
export function formatMeter(story: Story, value: number): string {
  if (story.clock?.format === 'number') return `${Math.max(0, value)}${story.clock.unit ?? ''}`;
  return formatClock(value);
}

/** Placeholders used in a piece of text: {{clock}} (the formatted meter) or {{flagName}}. */
export const placeholders = (text: string) => [...text.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]);

function interpolate(story: Story, text: string, state: State): string {
  return text.replace(/\{\{(\w+)\}\}/g, (_, name: string) =>
    name === 'clock' && story.clock ? formatMeter(story, state[story.clock.flag] as number) : String(state[name]),
  );
}

export function visibleChoices(page: Page, state: State): Choice[] {
  return (page.choices ?? []).filter((c) => !c.if || evaluate(c.if, state));
}

/** Apply a choice: its own effects, then the target page's onEnter effects. */
export function choose(story: Story, state: State, choice: Choice): State {
  return applyEffects(applyEffects(state, choice), getPage(story, choice.to).onEnter);
}

export function passageText(passage: Passage, state: State): string | null {
  if (typeof passage === 'string') return passage;
  if (evaluate(passage.if, state)) return passage.text;
  return passage.else ?? null;
}

export function renderText(story: Story, page: Page, state: State): string[] {
  return page.text
    .map((p) => passageText(p, state))
    .filter((t): t is string => t !== null)
    .map((t) => interpolate(story, t, state));
}

export function imagePrompt(story: Story, page: Page): string {
  const cast = (page.cast ?? []).map((k) => story.art.cast[k]);
  return [story.art.stylePrefix, ...cast, page.imagePrompt].join('\n\n');
}
