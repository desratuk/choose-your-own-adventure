# Brief: build a second story for the choose-your-own-adventure engine

Paste everything below the line into a new Claude Code session opened in this repository.

---

You're building a **second story pack** for an existing web choose-your-own-adventure engine. The repo already contains a finished, illustrated 52-page story, *The Stopped Clocks* (a *Back to the Future* story, in `stories/stopped-clocks/`). Your story sits alongside it as `stories/<new-id>/`. **The existing story must keep working and look and play exactly as it does now.**

The user is a huge 1980s fan. They haven't picked the universe yet; helping them choose it is your first job.

## Before you start

1. Read `README.md`, `CLAUDE.md`, `LICENSE`, `src/engine/types.ts`, `src/reader/chrome.ts`, `stories/stopped-clocks/story.ts` (skim the structure, not every word), `.claude/agents/story-continuity-reviewer.md` and `scripts/story-review-gate.mjs`. Together these explain the story format, the two-layer consistency gate and the house rules.
2. Run `npm install`, `npm run check` and `npm run dev` to see the current game working. Its spoiler-filled story map is at `/?map`.
3. Create a branch, e.g. `story/<new-id>`. Don't work on `main`. Commit and push at each milestone, and ask before merging into `main`.

## Step 1: choose the universe and premise, with the user

Use the AskUserQuestion tool. The user prefers short, concrete options, one round of questions at a time.

1. **Universe.** Pitch 4–6 options from 1980s film and TV that would make a strong branching adventure. Examples: *Ghostbusters*, *The Goonies*, *Gremlins*, *Indiana Jones*, *Labyrinth*, *The NeverEnding Story*, *Tron*, *WarGames*, *Flight of the Navigator*, *The Last Starfighter*, *Knight Rider*. An **original 80s-style homage** with invented names is also an option. Say in one line what each would play like.
2. **Names.** Ask whether to use the real names or an original homage. Real names are acceptable only for personal, non-commercial use. A homage avoids rights issues if they ever want to share it.
3. **Premise.** Pitch 2–3 premises for the chosen universe as one-line hooks. Keep spoilers to a minimum: the user wants to be surprised when they play, so don't reveal endings or twists.
4. **Recurring mechanic.** Pitch 2–3 options for the story's equivalent of *The Stopped Clocks*' visible countdown. It should be something the header can show and that creates real trade-offs, e.g. a ghost-trap charge meter, a tide or daylight timer, or a hacking trace bar.

The user delegates everything after this. Decide the rest yourself, write it down, and keep going.

## Requirements (the user's, carried over from the first story)

- **Coherent on every path.** This is the top requirement, and `npm run check` must pass. That means no dead ends, no unreachable pages or endings, and no text that assumes something a route never established.
- **Size:** about 50 pages, a 15–25 minute playthrough, and roughly 10 endings, both good and bad. Each ending is clearly labelled good or bad, with one marked best.
- **Tone:** family-friendly, in the spirit of the source. Bad endings are failures, not graphic harm.
- **Accessible to newcomers:** a reader who has never seen the film or show must be able to follow the plot. Explain any source knowledge the plot relies on, briefly and in the story's own voice.
- **Player:** "you" is an original character, not the franchise's hero. Never give them a name or state their gender. Their look can be fixed for the illustrations, shown from behind or over the shoulder.
- **Light hidden state:** use flags so branches can merge back together while the text still reflects what happened.
- **Challenge:** the first story was too easy at first, and we fixed it. Learn from that from the start:
  - The best ending needs clues you noticed earlier and connected yourself. Nothing reminds you of them when they matter.
  - Avoid signposting. Don't warn right before a choice, don't make the "sensible" option obviously correct, and give the traps plausible reasons.
  - Real trade-offs: helpful detours cost the visible resource.
  - Use `difficulties` in `story.ts` so Easy is generous, Medium allows about one slip on the best route, and Hard needs a near-perfect run. Show the real resource values in the prose with placeholders, not hard-coded numbers.
  - Ordinary good endings stay reachable for a careful first-time player.
  - Measure the balance across difficulties, as was done for the first story.
- **Writing quality.** These are mistakes the user caught in the first story. Avoid all of them:
  - Every page sets the scene on arrival: where you are, roughly when, and who's present. The opening page fully establishes the setting, the date and who you are.
  - Every jump in time or place has a bridge. Characters are where the last page left them.
  - Every line of dialogue has a clear speaker, especially your own lines. Don't name a character before they've been introduced.
  - No vague references ("up there", "it"), and gestures must connect to what's said.
  - No pointless stops: every trip or visit needs a story reason.

## Engine and reader: already multi-story

The reader already supports several stories, so you shouldn't need to change shared code:
- **Story picker:** the front page shows a picker once there are two stories. Each story keeps its own saves, endings, images and theme, keyed by its id.
- **Presentation:** set it in `story.ui`:
  - `header`: `'basic'` (default) or `'time-circuits'`
  - `transition` between eras: `'none'`, `'fade'` or `'eighty-eight'`
  - `eraBadges`
- **Meter:** `clock` can show time (H:MM) or a number with a unit, such as `%`.
- **Difficulty:** `difficulties` and `difficultyNotes` let you tune each level and describe it on the title screen.
- **Eras:** these are just major settings. A story with no time travel can have one era, or several locations.
- **Checks:** `npm run check` checks every story, rejects duplicate ids, and rejects theme rules not scoped to `[data-story='<id>']`.
- **Reviewer:** the continuity reviewer and the Stop hook work for any story id.

If your story deserves its own header or transition (do give it one memorable 80s touch), add it in `src/reader/chrome.ts` as a new option, keeping the existing options and defaults unchanged. After any shared-code change:
- `npm run check` passes for every story.
- *The Stopped Clocks* still plays identically. Check it in the browser at phone and desktop sizes: header, 88 mph transition, endings gallery, undo, resume.
- `npm run build` succeeds.

Put your story bible in `docs/<new-id>/story-outline.md`, and add a section for your story at the end of `CLAUDE.md` like the existing one.

## Workflow

1. Agree the universe, names, premise and mechanic with the user (step 1).
2. Write the story bible: premise, mystery or goal, canon rules, flags, every page and its choices, endings, clue chain, resource budget and art direction. Don't show the user story content in chat; describe progress structurally (page counts, endings, checker results).
3. Write `stories/<new-id>/story.ts`, register it in `stories/index.ts`, and make `npm run check` pass.
4. Run the continuity reviewer and fix everything it reports until it passes. It records the pass itself. Commit the stamp file along with the story.
5. Build the theme, header and transition, and test on phone and desktop sizes.
6. Write image prompts (`npm run prompts`) using the art guardrails below.
7. When the user supplies images, check each one against its page and the rest of the set before converting with `npm run images`.

## Art direction lessons from the first story

- Give the story a **shared style description** and short descriptions of each recurring character and prop, and include these in every prompt.
- Image models fill gaps with franchise clichés. **Write explicit guardrails into the shared style description:**
  - only the listed characters appear
  - no famous props or vehicles unless intended
  - no real people's likenesses
  - weather and time of day stated
  - location stated
- State **who is absent** where it matters: "alone (X is not here)".
- Phrase action scenes as non-violent or comic. The image model's safety filter refused a rescue scene that included a knife.
- Keep each character's clothing word-for-word identical everywhere: the prompts, the story text and the character descriptions.
- Images are 3:2 (1536×1024). Originals go in `stories/<id>/art-src/`, which git ignores, and the game uses 1200×800 WebP files in `images/`.

## Done means

- Both stories pass `npm run check`, and the new story's continuity review has passed and been stamped.
- *The Stopped Clocks* plays exactly as before.
- The new story is playable from the story picker, works well on a phone, and has its own header, transition and theme.
- Image prompts exist for every page.
- The README's Stories section and `CLAUDE.md` include the new story.
- The work is committed on the branch, and you've asked the user before merging it to `main`.
