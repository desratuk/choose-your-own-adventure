# Choose your adventure

A web engine for illustrated choose-your-own-adventure stories, with swappable story packs. With more than one story installed, the front page lets you pick which to play.

## Stories

### The Stopped Clocks

A *Back to the Future* adventure. At 10:04 PM every clock in Hill Valley stops and the whole town freezes. Only you and Doc Brown can still move, and you have a few hours and three eras (1885, 1985 and 2085) to find out who did it.

- **52 illustrated pages** with **11 endings**, each clearly labelled good or bad.
- **A story you never need to have seen the films to follow.**
- **A coherent story on every path:** a checker plays all ~146,000 possible playthroughs before every build.
- **A reader styled on the DeLorean's time-circuit display,** with a different look for each era and a time-travel animation.
- **A visible countdown.** Detours and mistakes cost time.
- **Three difficulty levels** that set how much time you start with and how many choices you can undo (Easy: unlimited, Medium: 2, Hard: none).
- **Built for phones.** Progress saves in the browser, and an endings gallery tracks which endings you've found.

> Unofficial, non-commercial fan project. It is not affiliated with or endorsed by the owners of *Back to the Future*. See [Licence](#licence).

### The Fratelli Run

A *Goonies* adventure. It's Halloween in Astoria, Oregon, and the Fratellis have escaped from custody. The key sewn into your thrift-shop overcoat opens something they want badly, and you have a few hours and the tide to work out where it belongs.

- **45 pages** with **11 endings** (7 bad, 4 good, one best), each clearly labelled.
- **No need to have seen the film.**
- **A visible head start on the Fratellis,** spent by detours and wrong turns. A tide table, a bonfire poster and a radio bulletin hold the clues.
- **A VHS tracking-glitch transition** between the Goon Docks, downtown, the tunnels and the waterfront.

> Unofficial, non-commercial fan project. It is not affiliated with or endorsed by the owners of *The Goonies*. See [Licence](#licence).

### Return to Sender

A *Ghostbusters* adventure. You're a bicycle courier with one last job on a rainy Friday night: a brass pneumatic-mail canister that has been haunting a stamp shop, addressed to the Ghostbusters' firehouse. The Ghostbusters are out, and the ghosts aren't. The canister draws ghosts into the firehouse's containment grid, and the grid can only hold so much.

- **42 pages** with **11 endings** (7 bad, 4 good, one best), each clearly labelled.
- **No need to have seen the film.**
- **A visible grid-load meter** that rises as detours and mistakes pile ghosts onto the grid. A stamp-shop map, a brass plate and a hotel plaque hold the clues.
- **A slime transition** between Lower Manhattan, the firehouse, Park Row and the tunnels.

> Unofficial, non-commercial fan project. It is not affiliated with or endorsed by the owners of *Ghostbusters*. See [Licence](#licence).

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
| `npm run check` | Runs the type check, checks that story ids are unique and themes are scoped, and runs the coherence checker for every story. Run it after every story edit. |
| `npm run build` | Runs `check`, then builds a static site into `dist/`, which can be hosted anywhere (GitHub Pages, Netlify and so on). |
| `npm run prompts` | Regenerates the image-generation prompts for each page. |
| `npm run images` | Converts new or updated illustrations to the WebP files the game uses. |
| `npm run story-dump -- <id>` | Prints a story as plain text with its branching logic, for review. |

- `?story=<id>` opens a specific story, skipping the picker.
- **Author tool (contains spoilers):** `?story=<id>&map` shows the whole story as a map, with the checker's report, each page's logic, and "play from here". With only one story installed, `/?map` works too.

## How it fits together

```
src/engine/     Story format, runtime and exhaustive checker. Knows nothing about any particular story.
src/reader/     Browser UI: story picker, the game, per-story headers and transitions,
                save/undo, endings gallery, story map.
stories/<id>/   A story pack:
  story.ts            pages, choices, flags, meter, UI choices and art direction
  theme.css           colours; every selector scoped to [data-story='<id>']
  images/             <PAGE_ID>.webp illustrations used by the game
  art-src/            full-size originals (not committed)
  image-prompts.md    generated prompts, one per page
docs/<id>/      Each story's bible and design outline
```

It's plain TypeScript and Vite with no UI framework. Stories are data, and each one keeps its own saves, endings, images and theme, keyed by its id.

### Story format, briefly

Each page has:
- text paragraphs, some of which show only under certain conditions
- choices, which can be conditional and can change hidden flags
- optionally an ending, labelled good or bad

Flags are declared up front with defaults. A story can also define:
- **eras:** the major settings it moves between (time periods, worlds, places), or just one.
- **a visible meter:** a countdown shown as H:MM, or a number with a unit such as `%`. A number meter can also rise toward a limit (`risesFrom`), like a load.
- **different starting values per difficulty,** and its own difficulty descriptions.
- **placeholders:** `{{clock}}` in the prose always shows the meter's real value.
- **presentation (`ui`):**
  - a header: `basic` (default) or `time-circuits`
  - a transition between settings: `none` (default), `fade`, `eighty-eight`, `vhs` or `slime`
  - optional destination badges on choices

## Adding a story

1. Create `stories/<id>/story.ts`, using a lowercase id with hyphens. Copy the shape of an existing pack.
2. Add `stories/<id>/theme.css` with every selector starting `[data-story='<id>']`.
3. Register it in `stories/index.ts`.
4. Write its bible in `docs/<id>/story-outline.md`.
5. Run `npm run check` until every story passes, then get a continuity review.
6. Need a new header or transition? Add it in `src/reader/chrome.ts`, with existing behaviour as the default, so other stories are unaffected.

`docs/prompts/second-story-brief.md` is a ready-made brief for a Claude Code agent to create a new story.

## Keeping stories consistent

Every story change has to pass two checks:

1. **Structural checker** (`npm run check`). It explores every reachable combination of page and state, across every difficulty. It fails on:
   - dead ends and unreachable pages or endings
   - choices that are never available and text that never shows
   - unknown flags or placeholders
   - the meter running out anywhere it shouldn't
   - states from which no ending can be reached
2. **Continuity review.** A Claude Code agent (`.claude/agents/story-continuity-reviewer.md`) reads the story along every route, looking for problems a program can't see:
   - text that assumes a particular path, or contradicts earlier events
   - missing scene-setting, unclear speakers or vague references
   - reliance on knowledge of the source material
   - prose that disagrees with the meter

   When a story passes, the agent records it by stamping `stories/<id>/.continuity-review`. A Stop hook in `.claude/settings.json` stops a Claude Code session from finishing while a story has changed without a passing review.

## Illustrations

Each page has an image prompt in `stories/<id>/image-prompts.md`. Every prompt combines a shared style description, descriptions of the recurring characters and props, and that page's scene.

To add or replace an image:
1. Generate it at 3:2 (for example 1536×1024).
2. Save it as `stories/<id>/art-src/<PAGE_ID>.png`.
3. Run `npm run images`. This needs `cwebp`, which you can install with `brew install webp`.

The game picks up `images/<PAGE_ID>.webp` automatically. Pages without an image show a drawn placeholder.

## Licence

The engine, reader and tooling are available under the [MIT License](LICENSE), so you're welcome to build your own games with them. The *Back to the Future* and *Goonies* story packs (`stories/stopped-clocks/`, `stories/fratelli-run/`), their bibles (`docs/stopped-clocks/`, `docs/fratelli-run/`) and the art references are **not** licensed. *Back to the Future* and *The Goonies* and their characters belong to their respective owners, and this project isn't affiliated with or endorsed by them. See [LICENSE](LICENSE) for the details, including third-party font licences.
