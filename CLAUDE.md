# Choose-your-own-adventure: "The Stopped Clocks"

This is a web-based choose-your-own-adventure game themed on *Back to the Future*: Doc Brown recruits the player to solve a time mystery. The engine, checker, full story and reader are built. The illustrations are still to come.

## Working with the user

- **Do not show the user story content.** They want to be surprised when they play. In chat, describe progress in terms of structure (page counts, endings reached, checker results, UI). Don't quote plot, scene text or ending text unless they ask. If a story decision needs their input, ask it without giving away the plot where possible.
- The user has delegated all story decisions. Treat `docs/story-outline.md` as approved. Refine it where needed, but keep everything consistent with it.
- Ask before pushing or publishing anything. There is no remote yet.

## Documents

- `docs/story-outline.md`: the story bible. It covers the premise, the mystery and its answers, canon rules, state flags, all 51 pages (S01–S45 and E01–E11) with their choices, the endings, the illustration style and the build plan. **It is the source of truth for the story.**
- `reference/ChatGPT Image 30 Sept 2026, 14_30_31.png`: the art-style reference. Use it for style only and ignore its content. The DeLorean, Twin Pines Mall and the Marty-style player shown in it are **not** part of the story.

## Requirements (from the user)

### Story
- **The story must be 100% coherent on every possible path. This is the user's top requirement.** An automated checker enforces it (see the build section).
- The game has multiple endings, both good and bad. The outline has 11. The ending screen and the endings gallery must make it clear whether each ending is good or bad.
- It is family-friendly, with a tone like the films: no graphic deaths. Bad endings are things like paradoxes, being frozen, being stranded, or Tannen winning.
- It is medium length: about 50 pages, with a 15–25 minute playthrough.
- It uses light, hidden state tracking so branches can merge back together and the text can still reflect what happened.
- **The deadline is visible:** Doc's watch in the header shows how much time is left.
- It uses real *Back to the Future* names and characters. This is acceptable only because the project is for personal use.
- The present is 1985 Hill Valley. The past is 1885 and the future is 2085, one century either side.
- **The story must make sense to someone who has never seen a Back to the Future film.** Explain any film knowledge the plot depends on (who Doc and Marty are, the 1955 lightning strike, 88 mph, the flux capacitor, the Tannens, why Doc lived in 1885) briefly and in the story's own voice. Nods to the films are fine as long as understanding the plot doesn't depend on them.
- The player is a new Hill Valley teen, not Marty. They have no name and their gender is never stated.

### Reader and UI
- It must work well on mobile. It should **not** copy a paper book in a browser. The choose-your-own-adventure format is the retro part, but the design needs to stand out and be really engaging.
- **Difficulty controls undo:** Easy allows unlimited undo, Medium allows 2 steps, and Hard allows no undo.
- It needs save and resume (browser storage), an endings tracker and gallery, and an author/debug story map.

### Reusability
- It should be a reusable project: the story and theme must be swappable so new variants can be made. The user would use Vue/Nuxt only if a framework is really needed and is happy without one. The plan is Vite + TypeScript with no framework (see §6 of the outline).

### Illustrations
- Every page has an image slot and an image prompt so a separate image model can generate the art later. The style and prompt format are in §5 of the outline. Until the art exists, pages show era-themed placeholders.

## Commands

- `npm run dev`: start the dev server. The game is at `/`, and the author story map is at `/?map` (it contains spoilers).
- `npm run check`: runs the type check plus the story checker. **Run this after any story edit.** It must print "OK: every path is coherent".
- `npm run build`: runs `check`, then builds the static site into `dist/`.
- `npm run prompts`: regenerates `stories/<id>/image-prompts.md` from the story data.

## Story change gate (two layers)

Every change to `stories/*/story.ts` must pass both of these:
1. **`npm run check`**: the structural checker (reachability, dead ends, flags, clock).
2. **The `story-continuity-reviewer` agent** (`.claude/agents/story-continuity-reviewer.md`), an LLM review for problems a program can't see:
   - text that assumes one path, or contradicts what's already happened
   - missing scene-setting or transitions
   - unclear speakers, or assumed film knowledge
   - prose that disagrees with the clock arithmetic

   It works from `npm run story-dump -- <id>`, which shows every page with its routes in and the flag values possible on arrival. When it finds nothing, it stamps `stories/<id>/.continuity-review` with the file's hash.

A Stop hook (`.claude/settings.json` → `scripts/story-review-gate.mjs`) blocks a Claude Code turn from finishing while any story's hash doesn't match its stamp. Fix whatever the reviewer reports and re-run it until it passes. Never stamp by hand. Commit the stamp file along with the story change.

## Layout

- `src/engine/`: the story format (`types.ts`), the runtime (`engine.ts`) and the exhaustive checker (`check.ts`). These know nothing about any particular story.
- `src/reader/`: the browser UI: the game, time circuits, storage, and the story map.
- `stories/<id>/`: a story pack. `story.ts` holds all the pages, flags, clock and art direction. `theme.css` holds the era colours, scoped by `data-story`. Illustrations go in `images/`. Register each pack in `stories/index.ts`; `?story=<id>` selects one.
- **Illustrations:** save each one as `stories/<id>/images/<PAGE_ID>.webp` (or `.png`/`.jpg`) and the reader picks it up automatically. Pages without an image show a drawn placeholder.

## Story format notes

- Flags are declared with defaults in `flags`. Conditions and effects may only use declared flags; the checker enforces this.
- A page's `time` sets the time-circuit reading. Pages without a `time` keep the previous one.
- Clock (deadline) values in the prose must match `minutes` arithmetic. At the hub with both parts, the remaining time is always 100 − 20 × `delays`, and assembly (S41) costs 79.

## Status and next steps
- Done: engine, checker, all 51 pages, reader UI (time circuits, era themes, time-travel animation, difficulty-based undo, save/resume, endings gallery), story map, image prompts.
- Next: generate the illustrations from `image-prompts.md`, then playtest on a phone.
