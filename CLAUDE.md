# Choose-your-own-adventure engine

A web choose-your-own-adventure engine with swappable **story packs**. Each story lives in `stories/<id>/` and has its own bible in `docs/<id>/`. Installed stories:

| Story | Id | Status |
|---|---|---|
| *The Stopped Clocks* (Back to the Future) | `stopped-clocks` | Complete and illustrated |
| *The Fratelli Run* (The Goonies) | `fratelli-run` | Complete and illustrated |
| *Return to Sender* (Ghostbusters) | `return-to-sender` | Complete and illustrated |
| *Player Two* (The Last Starfighter) | `player-two` | Complete and illustrated |
| *The Last Skyway* (original) | `last-skyway` | Complete and illustrated |
| *The Midnight Signal* (original) | `midnight-signal` | Complete and illustrated |
| *The Lantern Archive* (original) | `lantern-archive` | Complete and illustrated |
| *The Glasshouse Express* (original) | `glasshouse-express` | Complete and illustrated |

When more than one story is installed, the front page shows a story picker.

## Working with the user

- **Spoilers are welcome in chat.** The user has read all three stories; discuss plot, choices and endings directly when reviewing or revising them.
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
- `npm run prompts -- --references`: exports the reference-art briefs before scene generation.
- `npm run prompts`: regenerates scene prompts only after all reference sheets pass the review gate.
- `npm run test:art`: checks reference coverage, review hashes, per-page WebP coverage and key continuity regressions.
- `npm run test:story`: focused editorial route regressions, including clue gates and companion state.
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
  - `references/manifest.json`: reference inventory, generation briefs, subject/page mappings and reviewed WebP hashes.
  - `references/*.webp`: tracked, approved character, costume, prop and landmark sheets; never game scenes.
  - `reference-prompts.md`: generated first-phase reference briefs.
  - `image-prompts.md`: generated prompts.
- `stories/index.ts`: registers packs; the first one listed is first in the picker.
- `docs/<id>/story-outline.md`: each story's bible.

## Story format notes

- Flags are declared with defaults in `flags`. Conditions and effects may only use declared flags; the checker enforces this.
- `era` is any major setting a story moves between: a time period, a world, a building. A story with one setting has one era.
- A page's optional `time` is the when/where reading the header shows. Pages without one keep the previous reading.
- `ui` (all optional):
  - `header`: `'basic'` (default) or `'time-circuits'`.
  - `transition`, played when a choice changes era: `'none'` (default), `'fade'`, `'eighty-eight'`, `'vhs'` or `'slime'`.
  - `eraBadges`: show the destination era on choices.

  New headers or transitions go in `src/reader/chrome.ts`, with the existing behaviour as the default.
- `clock` is the optional visible meter, driven by a numeric flag. `format: 'time'` shows H:MM (the default); `format: 'number'` shows the value plus `unit` (e.g. `%`).
- `difficulties` sets per-difficulty starting effects. `difficultyNotes` overrides the title screen's difficulty descriptions.
- Text placeholders: `{{clock}}` is the formatted meter, and `{{flagName}}` is a flag's value. Never hard-code meter numbers in prose. The checker rejects unknown placeholders.
- Bump a story's `revision` when changed routes or flags make existing progress incompatible. The reader then offers a new run with an explanation, retains collected endings, and leaves the old save untouched until the player starts again. Missing-page saves also cannot resume.

## Illustrations

- Every page has an `imagePrompt`. `art.stylePrefix` and `art.cast` (recurring characters and props) are combined with it by `npm run prompts`.
- **Reference-first workflow (required, including small batches):**
  1. Read the whole story and its arrival states. Inventory recurring characters, clothing, objects and landmarks in `references/manifest.json`. Include anything the model would otherwise invent repeatedly: faces, asymmetry, stripe order/colours, satchel straps/buckles, key geometry, prop scale and clock-tower architecture. Every `art.cast` subject needs coverage; map recurring scenery and props not in the cast to explicit page IDs. Separate costume, era, assembly and possession variants.
  2. Run `npm run prompts -- --references`. Generate the reference sheets FIRST, using approved existing art only as identity/style anchors. Keep full-size originals in ignored `art-src/references/`. Inspect faces, hands, clothing and object geometry at full size; correct ambiguity before continuing. Convert approved boards with `cwebp -q 88` without resizing into tracked `references/<id>.webp`. Only after visual review, record each WebP’s `shasum -a 256` as `reviewedSha256` in the manifest. Never update a hash just to silence the gate.
  3. Lock the reviewed design details in `art.cast` and the relevant scene prompts. List only subjects actually visible at that moment. A reference sheet does not establish possession, introduce a companion or imply completed assembly. For merged paths, choose an illustration valid on EVERY route (omit optional companions/props, or crop them out); never ask for “Sloth if present” in a single static image. Different variants require explicit separate assets and wiring.
  4. Run `npm run prompts`; it blocks missing, changed or unreviewed sheets and uncovered cast. Attach each page’s listed reference files to every generation/edit call, not just their names. Generate scenes at 3:2 (1536×1024), saving `art-src/<PAGE_ID>.png`. Preserve approved anatomy and unrelated details during corrections; retain old originals in `art-src/corrections/`.
  5. Review every result against all arrival paths and the reference boards: cast, knowledge, location/time, possession, costume, object state/shape/scale, duplicate people, hands and legs. Check both full-size details and cross-scene contact sheets. Only then run `npm run images` for 1200×800 quality-75 game WebPs. Commit game WebPs and reference WebPs, never `art-src/`. Run `npm run test:art`, the story change gate when applicable, and verify loaded images in the browser. Pages without an image show a neutral placeholder.
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

- **Bible:** `docs/stopped-clocks/story-outline.md`. Consult its route and meter tables before changing this story.
- Personal-use Back to the Future adventure: an original teen preservation volunteer and Doc investigate a frozen town across 1985, 1885 and 2085. Keep the approved premise, newcomer explanations and train (not DeLorean).
- The player's local knowledge and mechanical work drive the climax. The museum visit establishes Rex's public live channel; the independent Authority can follow that channel only after receiving the jump-log evidence.
- `authorityAlerted` is not an arrest. S44 sets `rexExposed`; only the broadcast/arrest route sets `rexCaught`. Finale prose distinguishes alerting, public exposure and arrest.
- Doc knows his safe combination and detects removal of the original wheel immediately in 1885. Repair occurs there before era departure.
- Letter P.S.: “Leave the past something to work with.” Preserve the letter loop and exact wording.
- **Meter:** starts 390/360/345 on Easy/Medium/Hard. Core travel/preparation 225, assembly 70; chase/kiosk/museum 10 each; recoverable mistakes 15 each. Best needs all investigation, the broadcast choice, arrest and at least 20 remaining. S09 establishes crushing damage below twenty and permanent freezing at zero. Medium permits one recovery; Hard none.
- **UI:** time-circuits header, eighty-eight transition, era badges. Save revision 3.
- **Status:** 51 pages, eleven endings. Art follows the approved reference sheets; S41's assembly image must remain valid on timer-expired arrivals.

---

## Story: *The Fratelli Run* (`fratelli-run`)

- **Bible:** `docs/fratelli-run/story-outline.md`. Consult its route, signal and margin tables before editing.
- Personal-use Goonies story: an unnamed fourteen-year-old finds a key in an auction overcoat. Halloween 1985, Astoria; escaped Fratellis seek counterfeit printing plates. No pirates or treasure.
- The ensemble has distinct jobs. The player assigns support at the flats or station; Data offers the launcher before departure; Mouth relays discoveries; Mikey finds help.
- Sloth chooses whether to join, sets a stop rule and can refuse to hold off his family. Never treat him as an acquired tool. He accompanies the player only after the Lowline grate, never on a street arrival. Honor departure at P05 and F02.
- **Meter:** `lead` is PURSUIT MARGIN, a number, NOT elapsed minutes. Starts 135/105/90. The clean best route costs 70 and requires 20 remaining, flats support, a correctly timed signal, Sloth's freely chosen continued accompaniment and the coordinated handoff. Medium allows one 15-point slip; Hard none. An early signal can be corrected at P06; this ten-point mistake still allows best on Medium, ordinary good on Hard. The first police call costs zero net margin because patrol protection offsets the delay. Ordinary solo and street victories remain possible.
- Clues: key tag and tide poster, radio van/shift facts, flash acknowledgement, map, inspection catch, depot van number. Mistaken detours can yield useful information. The locker door is visible on all routes; `foundDoor` records safe access.
- Local action flags: `crossing` renders the selected U04 crossing at U05 and resets at U06; `squeezedGrate` renders at U06 and resets at P01. `slothChoice` includes respecting his decision to go home; `slothWith` separately records continued accompaniment.
- **UI:** basic header, VHS transition, scoped setting themes. Revision 3. 45 pages, eleven endings (six bad, five good, one best).
- Static illustrations omit optional companions; only D07, D08 and E11 guarantee Sloth visibly present.

---

## Story: *Return to Sender* (`return-to-sender`)

- **Bible:** `docs/return-to-sender/story-outline.md`. Consult its evidence, capture-accounting and route tables before editing.
- Personal-use Ghostbusters story, rainy Manhattan, Friday 15 November 1985. An unnamed seventeen-year-old courier carries an undelivered 1898 closure notice from Pell's stamp shop to the firehouse, then may trace Station Nine beneath the Sedgewick.
- Declining the job and the commissioned handover are legitimate good endings. Further investigation is voluntary. The professionals revise an incomplete initial diagnosis when the courier reports new evidence; they are not negligent villains.
- The tag ONLY reports grid load. It never captures or transports ghosts. Twelve postal clerks were already in the grid; 35 including Tull remain outside. The total shift is 47.
- A portable trap catches one group: six at the blockade, three while waiting, OR the final assembled staff. Full traps remain separate from the grid and are explicitly handed over or discharged.
- Slimer remains at the firehouse. His optional empty-chair scene is relationship, not an item-for-help exchange or mandatory best-ending flag.
- Clue distribution: address/time/entrance from distinct investigations, copy procedure from post office or records room, full roster from the optional roll or a costlier hotel relay at C08. The player performs the final deliveries while the team operates machinery.
- Best requires the copy procedure, verified roll and at least ten headroom at C09; R03 teaches the corresponding 90% maximum load before branching. If the roll was missed, C08 offers Ernie's complete forty-seven-name relay only with the procedure and at least twenty headroom; it costs ten and preserves the discharge reserve. C09 releases only the named twelve, including Edwin Vale; C10 accounts for trap cargo and returns to Tull. Ordinary success may leave named release work outstanding. Engine Nine's stamped inspection plan permits H01→H03 access without H02's negotiation cost.
- **Meter:** rising GRID LOAD = 100 minus `margin`. Starts at 20/35/50% on Easy/Medium/Hard. Clean solo, team and trap-assisted records routes cost 40 headroom; Medium leaves 15 beyond the ten-point discharge reserve, Hard none. The DOWN loop and rushed lobby access each cost ten and are recoverable.
- **UI:** basic header, slime transition, scoped themes. Revision 3. 46 pages, ten endings (three bad, seven good, one best); E05 is a recovery scene, not an ending. Old ending records remain stored but only current endings count.
- Merged illustrations crop optional team/trap presence. Approved sheets lock faces, wardrobe, courier satchel, canister, trap, paperwork, storage case and service hatch.

---

## Story: *Player Two* (`player-two`)

- **Bible:** `docs/player-two/story-outline.md`. Consult its clue map, route and meter tables before editing.
- Personal-use Last Starfighter story, summer 1984, the town of Bellwether. An unnamed teenage arcade technician becomes flight engineer to the original pilot Tavi Renn and helps defend the Latchpoint outpost. Original cast: Mica Bell (arcade owner), Tavi Renn, Neve Sorn (outpost keeper), Odo Pike (radio-only tug captain). Centauri and Grig appear; Alex stays offscreen.
- The player is an engineer, not a chosen-one gamer. The climax is decided by diagnosis and the choice of patch and dark transmission interval, not by aim.
- Best-ending clue chain: arcade display isolation, measured adapter pins, recorded enemy reply timing, traced outpost socket.
- **Meter:** JUMP CHARGE, a number shown as %. Starts 100/90/80 on Easy/Medium/Hard. Best costs 70 (45 hops, 15 investigations, 10 final operation). Medium permits one ten-point recovery.
- **UI:** basic header, fade transition, scoped theme. Revision 1. 50 pages, nine endings (four bad, four good, one best). Arcade header and starfield transition are not yet built.

---

## Story: *The Last Skyway* (`last-skyway`)

- **Bible:** `docs/last-skyway/story-outline.md`. Consult its route, meter and arrival invariants before editing.
- Original mountain maintenance adventure, November 1986. An unnamed apprentice helps qualified staff rescue stranded observatory passengers. Machinery and supervised diagnosis drive the choices.
- The wind ribbon is on the crossover mast, visible from the cabin. Valley dispatch uses the ridge observer's written report, copied anemometer trace and mast sketch. The refuge cradle travels horizontally. The closed plate box contains last night's exposed, unprocessed plates.
- **Meter:** RESCUE WINDOW, working minutes displayed H:MM; starts 110/94/86. The complete best route costs 70 and leaves 40/24/16. Eight-minute recoveries allow one Medium slip; Hard needs the clean route for best. Consult the bible for certification and handover requirements.
- **Status:** revision 1, 48 pages, ten endings (six good including one best, four bad). Independent continuity review passed; all 48 Astra illustrations and ten reference sheets are reviewed and integrated.

---

## Story: *The Midnight Signal* (`midnight-signal`)

- **Bible:** `docs/midnight-signal/story-outline.md`. Consult its causal model, evidence chain, reserve arithmetic and route table before editing.
- Original coastal radio mystery, Greyhaven, 17–18 October 1986. An unnamed teenage volunteer investigates a distress call apparently arriving from tomorrow and helps protect a harbour crew.
- **Meter:** shared electrical RESERVE, a percentage rather than elapsed minutes; starts 100/85/70. The clean best route costs 60, leaving 40/25/10. The evidence upload needs twenty before starting and leaves ten holding power. Medium allows one fifteen-point error; Hard none. The optional shelter call costs five.
- **Status:** revision 1, 46 pages, ten endings (six good including one best, four bad). Independent continuity review passed; all 46 Astra illustrations and six reference sheets are reviewed and integrated.

---

## Story: *The Lantern Archive* (`lantern-archive`)

- **Bible:** `docs/lantern-archive/story-outline.md`. Consult Ada's five rules, the arrival-state table and meter arithmetic before editing.
- Original mystery in Saltbeck, 25 October 1986. An unnamed seventeen-year-old projectionist helps restore memories of the Wicks on the Palladian's last night. Memory returns; physical buildings do not. The cinema still closes and the Lantern never lights again.
- **Meter:** LANTERN carbon time, displayed H:MM, starts 120/105/95. Best costs 95 and ends with 25/10/0 on Easy/Medium/Hard. Medium allows one ten-minute mistake; Hard requires the clean route. Zero is valid only at designated endings.
- Win's box/stalls location and the residents' invitation route affect later prose. Static illustrations omit optional companions and anchors; Win's present blue door is distinct from the old green Tallow Lane door.
- **Status:** revision 1, 45 pages, ten endings (five good including one best, five bad). Independent continuity round 3 passed; all 45 Astra illustrations and fifteen reference sheets are reviewed and integrated.

---

## Story: *The Glasshouse Express* (`glasshouse-express`)

- **Bible:** `docs/glasshouse-express/story-outline.md`. Consult the seasonal rules, plant-state variants, clue map and meter arithmetic before editing.
- Original fantasy in Tallowmere on the longest night. An unnamed teenage apprentice carries the last sunwort stock aboard a greenhouse train. The Keeper's recordings, Hallam vent mechanism and Nan's bulbs establish the best-ending reasoning.
- **Meter:** EMBER BRICKS, a fuel count, starts 100/90/80. The best route costs 70 and leaves 30/20/10; Medium permits one ten-brick slip and Hard none. Marigold burns coal separately. The depot and radio visits each spend five and save five later.
- Hesper stays at the Terminus; radio and telephone voices do not add visible cast. Shared tunnel and summit images omit plant-state details that differ after chilling or over-stoking.
- **Status:** revision 1, 44 pages, ten endings (five good including one best, five bad). Independent continuity review passed; all 18 reference sheets and 44 Astra scene illustrations are approved. Mobile best-route and combined image coverage checks pass.
