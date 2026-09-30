# The Stopped Clocks

A choose-your-own-adventure game for the web, themed on *Back to the Future*. At 10:04 PM every clock in Hill Valley stops and the whole town freezes. Only you and Doc Brown can still move, and you have a few hours and three eras (1885, 1985 and 2085) to find out who did it.

- **52 illustrated pages** with **11 endings**, each clearly labelled good or bad.
- **A story you never need to have seen the films to follow.**
- **A coherent story on every path:** a checker plays all ~146,000 possible playthroughs before every build.
- **A reader styled on the DeLorean's time-circuit display,** with a different look for each era and a time-travel animation.
- **A visible countdown.** Detours and mistakes cost time.
- **Three difficulty levels** that set how much time you start with and how many choices you can undo (Easy: unlimited, Medium: 2, Hard: none).
- **Built for phones.** Progress saves in the browser, and an endings gallery tracks which endings you've found.

> Unofficial, non-commercial fan project. It is not affiliated with or endorsed by the owners of *Back to the Future*. See [Licence](#licence).

## Running it

Requires Node 20.19+ or 22.12+ (use nvm to switch).

```bash
npm install
npm run dev
```

Open http://localhost:5173.

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server. |
| `npm run check` | Runs the type check plus the story coherence checker. Run it after every story edit. |
| `npm run build` | Runs `check`, then builds a static site into `dist/`, which can be hosted anywhere (GitHub Pages, Netlify and so on). |
| `npm run prompts` | Regenerates the image-generation prompts for each page. |
| `npm run images` | Converts new or updated illustrations to the WebP files the game uses. |
| `npm run story-dump -- <id>` | Prints a story as plain text with its branching logic, for review. |

**Author tools (contain spoilers):**
- `/?map` shows the whole story as a map, with the checker's report, each page's logic, and "play from here".
- `?story=<id>` loads a different story pack.

## How it fits together

```
src/engine/     Story format, runtime and exhaustive checker. Knows nothing about any particular story.
src/reader/     Browser UI: the game, time circuits, save/undo, endings gallery, story map.
stories/<id>/   A story pack:
  story.ts            pages, choices, flags, clock and art direction
  theme.css           era colours, scoped to this story
  images/             <PAGE_ID>.webp illustrations used by the game
  art-src/            full-size originals (not committed)
  image-prompts.md    generated prompts, one per page
docs/           Story bible and design outline
```

It's plain TypeScript and Vite with no UI framework. Stories are data, so a new variant with a different story, theme or art is a new folder in `stories/`, registered in `stories/index.ts`.

### Story format, briefly

Each page has:
- text paragraphs, some of which show only under certain conditions
- choices, which can be conditional and can change hidden flags
- optionally an ending, labelled good or bad

Flags are declared up front with defaults. A story can also define:
- a visible clock
- different starting values for each difficulty
- `{{clock}}` placeholders, so the prose always shows the real time left

## Keeping the story consistent

Every story change has to pass two checks:

1. **Structural checker** (`npm run check`). It explores every reachable combination of page and state, across every difficulty. It fails on:
   - dead ends and unreachable pages or endings
   - choices that are never available and text that never shows
   - unknown flags or placeholders
   - the clock running out anywhere it shouldn't
   - states from which no ending can be reached
2. **Continuity review.** A Claude Code agent (`.claude/agents/story-continuity-reviewer.md`) reads the story along every route, looking for problems a program can't see:
   - text that assumes a particular path, or contradicts earlier events
   - missing scene-setting, unclear speakers or vague references
   - reliance on knowledge of the films
   - prose that disagrees with the clock

   When a story passes, the agent records it by stamping `stories/<id>/.continuity-review`. A Stop hook in `.claude/settings.json` stops a Claude Code session from finishing while a story has changed without a passing review.

## Illustrations

Each page has an image prompt in `stories/<id>/image-prompts.md`. Every prompt combines a shared style description, descriptions of the recurring characters and props, and that page's scene.

To add or replace an image:
1. Generate it at 3:2 (for example 1536×1024).
2. Save it as `stories/<id>/art-src/<PAGE_ID>.png`.
3. Run `npm run images`. This needs `cwebp`, which you can install with `brew install webp`.

The game picks up `images/<PAGE_ID>.webp` automatically. Pages without an image show a drawn placeholder.

## Licence

The engine, reader and tooling are available under the [MIT License](LICENSE), so you're welcome to build your own games with them. The *Back to the Future* story pack (`stories/stopped-clocks/`), the story outline and the art references are **not** licensed. *Back to the Future* and its characters belong to their respective owners, and this project isn't affiliated with or endorsed by them. See [LICENSE](LICENSE) for the details, including third-party font licences.
