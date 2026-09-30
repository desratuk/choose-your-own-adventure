import type { Difficulty, State } from '../engine/types';

export type { Difficulty };

/** How many choices a player can step back through. */
export const UNDO_LIMIT: Record<Difficulty, number> = { easy: Infinity, medium: 2, hard: 0 };

export interface Snapshot {
  pageId: string;
  state: State;
  era: string;
  time: string;
  lastDeparted: string | null;
}

export interface Run {
  difficulty: Difficulty;
  current: Snapshot;
  history: Snapshot[];
}

// Storage can be unavailable (private mode, blocked site data); the game still works without it.
function read<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

export const loadRun = (storyId: string) => read<Run>(`cyoa:${storyId}:run`);
export const saveRun = (storyId: string, run: Run | null) => write(`cyoa:${storyId}:run`, run);
export const loadEndings = (storyId: string) => read<string[]>(`cyoa:${storyId}:endings`) ?? [];
export function recordEnding(storyId: string, pageId: string) {
  const found = loadEndings(storyId);
  if (!found.includes(pageId)) write(`cyoa:${storyId}:endings`, [...found, pageId]);
}
