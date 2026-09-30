# Choose-your-own-adventure: "The Stopped Clocks"

This is a web-based choose-your-own-adventure game themed on *Back to the Future*: Doc Brown recruits the player to solve a time mystery. As of 2026-09-30 **nothing has been implemented**. The design is done and the next step is implementation.

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
- The player is a new Hill Valley teen, not Marty. They have no name and their gender is never stated.

### Reader and UI
- It must work well on mobile. It should **not** copy a paper book in a browser. The choose-your-own-adventure format is the retro part, but the design needs to stand out and be really engaging.
- **Difficulty controls undo:** Easy allows unlimited undo, Medium allows 2 steps, and Hard allows no undo.
- It needs save and resume (browser storage), an endings tracker and gallery, and an author/debug story map.

### Reusability
- It should be a reusable project: the story and theme must be swappable so new variants can be made. The user would use Vue/Nuxt only if a framework is really needed and is happy without one. The plan is Vite + TypeScript with no framework (see §6 of the outline).

### Illustrations
- Every page has an image slot and an image prompt so a separate image model can generate the art later. The style and prompt format are in §5 of the outline. Until the art exists, pages show era-themed placeholders.

## Implementation order (suggested)
1. Engine and story-pack format, plus the exhaustive path/state checker (`npm run check-story`).
2. Write all pages into the story pack and get the checker passing.
3. Reader UI: time-circuit header, era themes, time-travel transition, difficulty/undo, save, endings gallery, story map.
4. Image prompts for every page, and a style-prefix and character-sheet file.
