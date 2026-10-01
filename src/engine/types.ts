// Story pack format. Everything a story needs lives in data so the engine,
// reader and checker stay theme-agnostic.

export type Value = boolean | number | string;
export type Difficulty = 'easy' | 'medium' | 'hard';
export const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard'];
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

/**
 * A paragraph. Conditional paragraphs show `text` when `if` holds, otherwise `else` (if any).
 * `{{clock}}` renders the story clock as H:MM; `{{flag}}` renders a flag's value.
 */
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
  /** Which of the story's major settings (eras, worlds, locations…) this page is in. Drives theming and transitions. */
  era: string;
  /** Optional when/where reading shown by the header on arrival. Pages without one keep the previous reading. */
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
  /** The story's major settings. A story with a single setting just has one. */
  eras: Record<string, { label: string }>;
  flags: Record<string, FlagDef>;
  /** Effects applied to the initial state for each difficulty (e.g. more or less time). */
  difficulties?: Partial<Record<Difficulty, Effects>>;
  /** Overrides for the difficulty descriptions on the title screen (defaults describe undo only). */
  difficultyNotes?: Partial<Record<Difficulty, string>>;
  /** Reader presentation. Everything is optional; defaults suit any story. */
  ui?: StoryUI;
  /**
   * Optional visible meter driven by a numeric flag: a countdown, a charge level, a trace…
   * Despite the name it need not be a clock; set `format` to 'number' for plain values.
   */
  clock?: {
    flag: string;
    label: string;
    /** 'time' shows H:MM (the default); 'number' shows the value with an optional unit, e.g. "72%". */
    format?: 'time' | 'number';
    unit?: string;
    visibleWhen: Cond;
    /** Non-ending pages where the clock may legitimately be at or below zero. */
    allowExpiredOn: string[];
  };
  art: { stylePrefix: string; cast: Record<string, string> };
  pages: Page[];
}

export interface StoryUI {
  /**
   * 'basic' (default): setting name, optional time reading and the meter.
   * 'time-circuits': the Back to the Future dashboard (expects times like "NOV 12 1985 10:04 PM").
   */
  header?: 'basic' | 'time-circuits';
  /** Played when a choice moves to a different era/setting. 'none' (default), 'fade', or 'eighty-eight' (88 mph time jump). */
  transition?: 'none' | 'fade' | 'eighty-eight';
  /** Show a badge with the destination's era id on choices that change setting. */
  eraBadges?: boolean;
}
