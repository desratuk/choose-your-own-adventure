# Choose-your-own-adventure engine

A web choose-your-own-adventure engine with swappable **story packs**. Each story lives in `stories/<id>/` and has its own bible in `docs/<id>/`. Installed stories:

| Story | Id | Status |
|---|---|---|
| *The Stopped Clocks* (Back to the Future) | `stopped-clocks` | Complete and illustrated |
| *The Fratelli Run* (The Goonies) | `fratelli-run` | Written and reviewed; image prompts ready, no illustrations yet |

When more than one story is installed, the front page shows a story picker.

## Working with the user

- **Don't show the user story content.** They want to be surprised when they play. In chat, describe progress in terms of structure: page counts, endings, checker results, UI. Don't quote plot, scene text or ending text unless they ask. If a story decision needs their input, ask it without giving away the plot where possible.
- For a new story, agree the universe, names and premise with the user first. They delegate everything after that. Each story's bible (`docs/<id>/story-outline.md`) is approved and is the source of truth: refine it where needed, but keep the story consistent with it.
- Work on a feature branch. Commit and push at each milestone, and ask before merging into `main`.
- **Never break an existing story.** Shared code changes must leave every installed story looking and playing exactly as before. Verify in the browser.

## Requirements for every story

### Story
- **100% coherent on every possible path.** This is the user's top requirement. The checker and the continuity reviewer enforce it (see "Story change gate").
- Multiple endings, both good and bad, each clearly labelled good or bad on the ending screen and in the endings gallery. One is marked best.
- Family-friendly, in the spirit of the source. Bad endings are failures, not graphic harm.
- Medium length: about 50 pages, with a 15–25 minute playthrough.
- Light, hidden state tracking, so branches can merge back together while the text still reflects what happened.
- **Understandable by someone who has never seen the source material.** Briefly explain any source knowledge the plot depends on, in the story's own voice. Nods to the source are fine as long as following the plot doesn't depend on them.
- The player is an original character, not the franchise hero. They have no name and their gender is never stated.
- **Challenge:**
  - The best ending needs clues the player noticed earlier and connected themselves. Nothing points back at them when they matter.
  - No signposting: no warnings right before a choice, the sensible-sounding option isn't always right, and traps have plausible reasons.
  - Real trade-offs: helpful detours cost the visible meter.
  - Difficulties scale the challenge: Easy is generous, Medium allows about one slip on the best route, and Hard needs a near-perfect run. Ordinary good endings stay reachable for a careful first-time player.
- **Writing quality.** These are mistakes the user caught:
  - Every page sets the scene on arrival: where, roughly when, and who's present.
  - Every jump in time or place has a bridge.
  - Every line of dialogue has a clear speaker. Don't name a character before they're introduced.
  - No vague references, and gestures connect to what's said.
  - No pointless stops: every trip or visit has a story reason.

### Reader and UI
- Works well on mobile. It shouldn't copy a paper book in a browser: the choose-your-own-adventure format is the retro part, but the design must stand out. Each story can have its own header, transition and theme.
- **Difficulty controls undo:** Easy allows unlimited undo, Medium 2 steps, Hard none. A story may also use difficulty to change its starting state.
- Save and resume in browser storage, an endings tracker and gallery, and an author story map at `/?map`.
- Reusable: stories are data. It's Vite + TypeScript with no framework.

## Commands

- `npm run dev`: the dev server. With one story the game opens directly; with several, the story picker appears. `?story=<id>` opens a story and `?map` opens its story map (spoilers).
- `npm run check`: type check, checks that story ids are unique and themes are scoped, and the story checker for every story. **Run this after any story edit.** It must print "OK: every path is coherent" for each story.
- `npm run build`: runs `check`, then builds the static site into `dist/`.
- `npm run prompts`: regenerates `stories/<id>/image-prompts.md`.
- `npm run images`: converts `stories/<id>/art-src/*.png` into the game's `images/*.webp`.
- `npm run story-dump -- <id>`: prints a story as plain text with its logic, for review.

## Story change gate (two layers)

Every change to `stories/*/story.ts` must pass both:
1. **`npm run check`**: the structural checker (reachability, dead ends, flags, meter).
2. **The `story-continuity-reviewer` agent** (`.claude/agents/story-continuity-reviewer.md`), given the story id. It's an LLM review for problems a program can't see:
   - text that assumes one path, or contradicts what's already happened
   - missing scene-setting, unclear speakers, vague references
   - assumed source knowledge
   - prose that disagrees with the meter arithmetic

   When it finds nothing, it stamps `stories/<id>/.continuity-review` with the file's hash.

A Stop hook (`.claude/settings.json` → `scripts/story-review-gate.mjs`) blocks a Claude Code turn from finishing while any story's hash doesn't match its stamp. Fix whatever the reviewer reports and re-run it until it passes. Never stamp by hand. Commit the stamp file along with the story change. Image-prompt-only edits also change the hash and need a (quick) review.

## Layout

- `src/engine/`: the story format (`types.ts`), the runtime (`engine.ts`), the exhaustive checker (`check.ts`) and formatting helpers (`describe.ts`). Knows nothing about any story.
- `src/reader/`: the browser UI.
  - `app.ts`: the game.
  - `chrome.ts`: per-story headers and transitions.
  - `circuits.ts`: the time-circuits header.
  - `picker.ts`: the story picker.
  - `storage.ts`: saves and endings, keyed by story id.
  - `map.ts`: the story map.
- `stories/<id>/`: a story pack.
  - `story.ts`: pages, flags, meter, UI choices and art direction.
  - `theme.css`: colours. Every selector must start with `[data-story='<id>']`; the checker enforces this.
  - `images/`: game WebPs.
  - `art-src/`: originals, ignored by git.
  - `image-prompts.md`: generated prompts.
- `stories/index.ts`: registers packs; the first one listed is first in the picker.
- `docs/<id>/story-outline.md`: each story's bible.

## Story format notes

- Flags are declared with defaults in `flags`. Conditions and effects may only use declared flags; the checker enforces this.
- `era` is any major setting a story moves between: a time period, a world, a building. A story with one setting has one era.
- A page's optional `time` is the when/where reading the header shows. Pages without one keep the previous reading.
- `ui` (all optional):
  - `header`: `'basic'` (default) or `'time-circuits'`.
  - `transition`, played when a choice changes era: `'none'` (default), `'fade'`, `'eighty-eight'` or `'vhs'`.
  - `eraBadges`: show the destination era on choices.

  New headers or transitions go in `src/reader/chrome.ts`, with the existing behaviour as the default.
- `clock` is the optional visible meter, driven by a numeric flag. `format: 'time'` shows H:MM (the default); `format: 'number'` shows the value plus `unit` (e.g. `%`).
- `difficulties` sets per-difficulty starting effects. `difficultyNotes` overrides the title screen's difficulty descriptions.
- Text placeholders: `{{clock}}` is the formatted meter, and `{{flagName}}` is a flag's value. Never hard-code meter numbers in prose. The checker rejects unknown placeholders.
- Saves from an older version of a story reset if their page no longer exists.

## Illustrations

- Every page has an `imagePrompt`. `art.stylePrefix` and `art.cast` (recurring characters and props) are combined with it by `npm run prompts`.
- **Workflow:** generate at 3:2 (1536×1024), save as `stories/<id>/art-src/<PAGE_ID>.png`, then run `npm run images`. This writes a 1200×800 WebP at quality 75 and needs `cwebp`. Commit only the WebP. Pages without an image show a neutral placeholder.
- **Art guardrails,** learned from the first story. Put these in each story's `stylePrefix`:
  - Only the listed characters appear, and the main companion only when described.
  - No famous props or vehicles unless intended.
  - No real people's likenesses.
  - State the weather, time of day and location.
  - Write "alone (X is not here)" where it matters.
  - Keep each character's clothing word-for-word identical everywhere.
  - Phrase action scenes as non-violent or comic, or the image model's safety filter may refuse them.
- Review every generated image against its page and the rest of the set before converting it.

---

## Story: *The Stopped Clocks* (`stopped-clocks`)

- **Bible:** `docs/stopped-clocks/story-outline.md`.
- **Art reference:** `reference/ChatGPT Image 30 Sept 2026, 14_30_31.png`. Use it for style only; the DeLorean, Twin Pines Mall and the Marty-style player in it are **not** part of the story.
- Themed on *Back to the Future*: Doc Brown recruits the player to solve a time mystery. It uses the real names and characters, which is acceptable only because the project is for personal use (see `LICENSE`).
- The eras are 1985 Hill Valley (the present), 1885 and 2085.
- **Explanations for newcomers:** who Doc and Marty are, the 1955 lightning strike, 88 mph, the flux capacitor, the Tannens, and why Doc lived in 1885.
- **UI:** `header: 'time-circuits'`, `transition: 'eighty-eight'`, `eraBadges: true`. The countdown is the clamp's timer.
- **Clock:** `minutes` starts at Easy 390, Medium 360, Hard 345. The costs:
  - fixed travel, 225 in total
  - assembly (S41), 79
  - optional detours, 10 each: the chase S11, the kiosk S30k, the museum S31
  - mistakes, 15 each: S13x, S29, S26b, and the extra in S37

  After assembly, 20 or more minutes left makes the clean endings possible, 1–19 gives E11, and 0 or less gives E07. Medium allows one slip on the best route and Hard none.
- **Status:** 52 pages, 11 endings, all illustrated.

---

## Story: *The Fratelli Run* (`fratelli-run`)

- **Bible:** `docs/fratelli-run/story-outline.md`.
- Themed on *The Goonies*, with real names (acceptable only because the project is for personal use). It never mentions pirates or treasure: the Fratellis have escaped, and the key sewn into the player's thrift-shop overcoat opens a locker holding their counterfeiting plates.
- The setting is Halloween 1985 in Astoria, Oregon. The settings (`era`) are the Goon Docks, Downtown, Underground and Waterfront.
- **Explanations for newcomers:** who the Goonies and Fratellis are, what counterfeiting plates are, who Sloth is.
- **UI:** the default `basic` header, `transition: 'vhs'` (a videotape tracking glitch, in `src/reader/chrome.ts`) and a theme per setting.
- **Meter:** `lead`, shown as FRATELLI LEAD (H:MM) once `running`. Easy starts at 135, Medium 105, Hard 90. The costs:
  - detours, 10 each: Data (rope), Sloth, library, police station
  - wrong guesses, 15 each: bus depot, old hideout
  - fixed: Lowline 10, waiting for low tide 15 (25 without the library map), final dash 20
  - mistakes, 15 each: the library chase (T03), the wrong fork (U03), wading the sump, squeezing the grate

  The best route costs 75 and the best ending needs 15 left after the dash, so Medium allows one slip and Hard none.
- **Guard rule:** pages that spend `lead` get their choices guarded (`lead >= 1`) and a "Keep running" choice to E06, added in code by `story.ts`. If the checker reports a guard that never applies, add the page to `unguarded`.
- **Clue chain:** the key tag (`7 · LOW WATER`), the poster and radio (low tide 9:41 PM, the bonfire at the foot of Seventh Street, deputies guarding it), and the radio's description of the laundry van that "Deputy Dunmore" arrives in.
- **Status:** 45 pages, 11 endings (7 bad, 4 good, one best). Written and reviewed. Illustrations are not made yet. `npm run prompts` generates the prompts.
