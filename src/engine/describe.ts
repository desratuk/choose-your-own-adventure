import type { Cond, Effects } from './types';

/** Human-readable conditions and effects, for the story map and review dumps. */
export function describeCond(c: Cond): string {
  if ('all' in c) return c.all.map(describeCond).join(' and ');
  if ('any' in c) return `(${c.any.map(describeCond).join(' or ')})`;
  if ('not' in c) return `not(${describeCond(c.not)})`;
  if ('gte' in c) return `${c.flag} ≥ ${c.gte}`;
  if ('lte' in c) return `${c.flag} ≤ ${c.lte}`;
  return c.is === undefined || c.is === true ? c.flag : `${c.flag} = ${c.is}`;
}

export function describeEffects(e: Effects): string {
  return [
    ...Object.entries(e.set ?? {}).map(([k, v]) => `${k} = ${v}`),
    ...Object.entries(e.add ?? {}).map(([k, v]) => `${k} ${v >= 0 ? '+' : '−'} ${Math.abs(v)}`),
  ].join(', ');
}
