// Story pack format. Everything a story needs lives in data so the engine,
// reader and checker stay theme-agnostic.

export type Value = boolean | number | string;
export type State = Record<string, Value>;

export type Cond =
  | { flag: string; is?: Value } // equality, default `true`
  | { flag: string; gte: number }
  | { flag: string; lte: number }
  | { all: Cond[] }
  | { any: Cond[] }
  | { not: Cond };

export interface Effects {
  set?: Record<string, Value>;
  add?: Record<string, number>;
}

/** A paragraph. Conditional paragraphs show `text` when `if` holds, otherwise `else` (if any). */
export type Passage = string | { if: Cond; text: string; else?: string };

export interface Choice extends Effects {
  text: string;
  to: string;
  if?: Cond;
}

export interface Ending {
  kind: 'good' | 'bad';
  best?: boolean;
}

export interface Page {
  id: string;
  title: string;
  era: string;
  /** Time-circuit reading on arrival. Pages without one keep the previous reading. */
  time?: string;
  text: Passage[];
  choices?: Choice[];
  onEnter?: Effects;
  ending?: Ending;
  /** Keys into `art.cast` for characters/objects visible in the illustration. */
  cast?: string[];
  imagePrompt: string;
}

export interface FlagDef {
  default: Value;
  /** Allowed values for string flags. */
  values?: string[];
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  blurb: string;
  start: string;
  eras: Record<string, { label: string }>;
  flags: Record<string, FlagDef>;
  /** Optional visible countdown driven by a numeric flag. */
  clock?: {
    flag: string;
    label: string;
    visibleWhen: Cond;
    /** Non-ending pages where the clock may legitimately be at or below zero. */
    allowExpiredOn: string[];
  };
  art: { stylePrefix: string; cast: Record<string, string> };
  pages: Page[];
}
