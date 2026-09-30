import { choose, evaluate, getPage, initialState, startState, visibleChoices } from './engine';
import type { Cond, Effects, State, Story, Value } from './types';

export interface CheckReport {
  errors: string[];
  warnings: string[];
  stats: {
    pages: number;
    endings: number;
    endingsReached: number;
    states: number;
    /** Distinct playthroughs from start to an ending, or null if the state graph has a cycle. */
    paths: number | null;
  };
  /** One reachable state per page, for the story map's "play from here". */
  samples: Record<string, State>;
  /** Every value each flag can have on arriving at each page. */
  arrivals: Record<string, Record<string, Value[]>>;
}

const MAX_STATES = 200_000;

const key = (pageId: string, state: State) => pageId + '|' + JSON.stringify(state);

export function checkStory(story: Story): CheckReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  checkStatic(story, errors);

  const stats = { pages: story.pages.length, endings: 0, endingsReached: 0, states: 0, paths: null as number | null };
  const samples: Record<string, State> = {};
  const arrivals: Record<string, Record<string, Value[]>> = {};
  if (errors.length) return { errors, warnings, stats, samples, arrivals };

  // Exhaustive walk over (page, state).
  const nodes = new Map<string, { pageId: string; state: State; next: string[] }>();
  const choiceSeen = new Set<string>();
  const passageSeen = new Set<string>();
  const queue: string[] = [];
  const add = (pageId: string, state: State) => {
    const k = key(pageId, state);
    if (!nodes.has(k)) {
      nodes.set(k, { pageId, state, next: [] });
      queue.push(k);
    }
    return k;
  };
  add(story.start, startState(story));

  while (queue.length) {
    if (nodes.size > MAX_STATES) {
      errors.push(`State space exceeds ${MAX_STATES}; a flag is probably growing without bound.`);
      break;
    }
    const node = nodes.get(queue.shift()!)!;
    const page = getPage(story, node.pageId);
    samples[page.id] ??= node.state;
    const seen = (arrivals[page.id] ??= {});
    for (const [flag, value] of Object.entries(node.state)) {
      const values = (seen[flag] ??= []);
      if (!values.includes(value)) values.push(value);
    }

    page.text.forEach((p, i) => {
      if (typeof p !== 'string') passageSeen.add(`${page.id}#${i}:${evaluate(p.if, node.state)}`);
    });

    if (story.clock && !page.ending && !story.clock.allowExpiredOn.includes(page.id)) {
      const left = node.state[story.clock.flag] as number;
      if (left <= 0) errors.push(`Clock expired on non-ending page ${page.id} (${fmt(node.state)})`);
    }

    if (page.ending) continue;
    const choices = visibleChoices(page, node.state);
    if (!choices.length) errors.push(`Dead end: no choices on ${page.id} with ${fmt(node.state)}`);
    for (const choice of choices) {
      choiceSeen.add(`${page.id}#${page.choices!.indexOf(choice)}`);
      node.next.push(add(choice.to, choose(story, node.state, choice)));
    }
  }
  stats.states = nodes.size;

  // Coverage.
  const reachedPages = new Set([...nodes.values()].map((n) => n.pageId));
  for (const page of story.pages) {
    if (page.ending) stats.endings++;
    if (!reachedPages.has(page.id)) {
      errors.push(`${page.ending ? 'Ending' : 'Page'} ${page.id} is unreachable`);
      continue;
    }
    if (page.ending) stats.endingsReached++;
    page.choices?.forEach((c, i) => {
      if (!choiceSeen.has(`${page.id}#${i}`)) errors.push(`Choice "${c.text}" on ${page.id} is never available`);
    });
    page.text.forEach((p, i) => {
      if (typeof p === 'string') return;
      const shown = passageSeen.has(`${page.id}#${i}:true`);
      const hidden = passageSeen.has(`${page.id}#${i}:false`);
      if (!shown) errors.push(`Conditional passage ${page.id}#${i} never shows ("${p.text.slice(0, 40)}…")`);
      if (!hidden) warnings.push(`Conditional passage ${page.id}#${i} is always shown; its condition is redundant`);
    });
  }

  // Every reachable state must be able to reach an ending.
  const canFinish = new Set<string>();
  let changed = true;
  while (changed) {
    changed = false;
    for (const [k, n] of nodes) {
      if (canFinish.has(k)) continue;
      if (getPage(story, n.pageId).ending || n.next.some((x) => canFinish.has(x))) {
        canFinish.add(k);
        changed = true;
      }
    }
  }
  for (const [k, n] of nodes) {
    if (!canFinish.has(k)) errors.push(`Trapped: ${n.pageId} with ${fmt(n.state)} can never reach an ending`);
  }

  stats.paths = countPaths(nodes, key(story.start, startState(story)));
  return { errors, warnings, stats, samples, arrivals };
}

function countPaths(nodes: Map<string, { next: string[] }>, start: string): number | null {
  const memo = new Map<string, number>();
  const onStack = new Set<string>();
  const visit = (k: string): number | null => {
    if (memo.has(k)) return memo.get(k)!;
    if (onStack.has(k)) return null;
    const next = nodes.get(k)!.next;
    if (!next.length) return 1;
    onStack.add(k);
    let total = 0;
    for (const n of next) {
      const c = visit(n);
      if (c === null) return null;
      total += c;
    }
    onStack.delete(k);
    memo.set(k, total);
    return total;
  };
  return visit(start);
}

function checkStatic(story: Story, errors: string[]) {
  const ids = new Set<string>();
  for (const page of story.pages) {
    if (ids.has(page.id)) errors.push(`Duplicate page id ${page.id}`);
    ids.add(page.id);
  }
  if (!ids.has(story.start)) errors.push(`Start page ${story.start} does not exist`);

  const defaults = initialState(story);
  const checkFlag = (where: string, flag: string, value?: Value) => {
    const def = story.flags[flag];
    if (!def) return errors.push(`${where}: unknown flag "${flag}"`);
    if (value === undefined) return;
    if (typeof value !== typeof defaults[flag]) errors.push(`${where}: "${flag}" expects a ${typeof defaults[flag]}`);
    if (def.values && !def.values.includes(value as string)) errors.push(`${where}: "${value}" is not a valid value of "${flag}"`);
  };
  const checkCond = (where: string, cond: Cond) => {
    if ('all' in cond) return cond.all.forEach((c) => checkCond(where, c));
    if ('any' in cond) return cond.any.forEach((c) => checkCond(where, c));
    if ('not' in cond) return checkCond(where, cond.not);
    if ('gte' in cond || 'lte' in cond) return checkFlag(where, cond.flag, 0);
    checkFlag(where, cond.flag, cond.is ?? true);
  };
  const checkEffects = (where: string, effects?: Effects) => {
    for (const [f, v] of Object.entries(effects?.set ?? {})) checkFlag(where, f, v);
    for (const f of Object.keys(effects?.add ?? {})) checkFlag(where, f, 0);
  };

  for (const [flag, def] of Object.entries(story.flags)) {
    if (def.values && !def.values.includes(def.default as string)) errors.push(`Flag ${flag}: default not in values`);
  }
  if (story.clock) {
    checkFlag('clock', story.clock.flag, 0);
    checkCond('clock', story.clock.visibleWhen);
  }

  for (const page of story.pages) {
    const at = `Page ${page.id}`;
    if (!story.eras[page.era]) errors.push(`${at}: unknown era "${page.era}"`);
    if (!page.imagePrompt.trim()) errors.push(`${at}: missing imagePrompt`);
    for (const c of page.cast ?? []) if (!story.art.cast[c]) errors.push(`${at}: unknown cast "${c}"`);
    checkEffects(at, page.onEnter);
    page.text.forEach((p) => typeof p !== 'string' && checkCond(at, p.if));
    if (page.ending && page.choices?.length) errors.push(`${at}: endings cannot have choices`);
    if (!page.ending && !page.choices?.length) errors.push(`${at}: has no choices and is not an ending`);
    for (const c of page.choices ?? []) {
      if (!ids.has(c.to)) errors.push(`${at}: choice "${c.text}" goes to missing page ${c.to}`);
      if (c.if) checkCond(at, c.if);
      checkEffects(at, c);
    }
  }
}

function fmt(state: State): string {
  return JSON.stringify(state);
}
