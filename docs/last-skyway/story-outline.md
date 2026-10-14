# The Last Skyway — story bible and integration handoff

Original family-friendly mountain maintenance adventure, November 1986. Revision 1. 48 pages, 10 endings: 6 good (one best), 4 bad. The unnamed, gender-neutral young apprentice is never assigned a name, age or gender. The player solves practical problems under qualified supervision; there is no combat, sabotage or supernatural mechanism.

Manuscript, theme and routes are complete. Independent continuity round 3 passed; its stamp matches the current manuscript. All 48 Astra scene illustrations and ten reference sheets are reviewed and integrated. The final art record is in `art-review.md`; earlier review-stage notes below are historical. The overall five-story delivery still awaits remaining packs and the final merge to main.

## Cast and geography

- Imani Vale, adult tram engineer: lower workshop and receiving winch throughout. No unexplained trip to the ridge.
- Sol Anwar, nonbinary observatory caretaker: starts at ridge generator, meets player at clock gallery, supervises tests, remains at crossover after D05; completes ridge shutdown. Joins refuge only on overnight E04 after shutdown. E10 redirects to heat plant.
- Mara Quill, adult cabin attendant: starts with the stranded cabin, transfers passengers to refuge before meeting player D01. At D05 accompanies player to refuge; boards only D08. Runs controller, can stop any unsafe movement, returns passengers by bridge on cancellations.
- Fen (cook) and Ellis (telescope technician): the two passengers, named with their roles in A02 before the A03 refusal branch and met physically at D07. Remain off-crop in every illustration. Ellis owns the calibration plate box. Neither appears in art.cast because neither is ever visibly depicted.
- Geography: lower valley station → enclosed climbing service gallery → clock gallery → relay floor → ridge switch room → crossover booth/refuge/service landing. The cabin sits immediately below the crossover, on an independent support-rope brake. Western freight spur terminates in an exposed loading shed. Eastern return line passes behind retaining wall and descends to valley station. Guided crossover hardware is supported by the landing structure; it is not a fork hanging unsupported in a rope span.
- The closed box holds exposed, unprocessed glass plates from last night’s telescope calibration. The dry insulated wrap protects coatings during cooling; it does not process plates. Fogged plates still go to processing for the record.
- The real blue wind ribbon is on the crossover’s outer mast and is directly visible from the cabin. Dispatch holds the ridge observer’s written report, copied crossover anemometer trace and mast/ribbon sketch beside its pressure drum; no physical dispatch ribbon, observation tube or remote-viewing device exists.
- A stationary support rope bears the cabin; a moving haul rope pulls it. The independent roof brake grips the support rope. A governed diesel auxiliary drive is isolated during battery-only control tests. The apprentice never accesses mains wiring or exposed running equipment. A suspension-limit stop requires an unloaded running-gear inspection from a rigged platform stored at the valley depot, using a separate crew; normal cabin indication checks do not replace that inspection. FOUR’s local-mode recovery stops before the marked limit and remains a distinct repairable outcome. Sol and Mara verify physical guide position and insert locking pin before movement.
- Refuge bridge reaches the cabin only at its service landing. F02→E04 reverses the single short movement under local control before bridge use. Lower approach cradle/bridge is a different fixture. Refuge receiving cradle moves a short horizontal distance only; it cannot lower passengers down the mountain.

## Route and clue design

Opening A01–A06 establishes job boundaries, independent brakes, optional refusal, shelter fallback, meter and ten-minute equipment reserve. B01 offers three once-only investigations in any order. B05 access mistake is recoverable. B07–C04 climbs protected route with optional lift mistake. C05 chooses full destination trace or limited continuity. C08 offers a distinct heat-plant good ending. D01–D06 separates physical route choice from electrical contact choice; D03 allows an eight-minute recheck after a wrong physical nomination, or a voluntary refuge ending. D07 protects optional plate-wrap possession. D08 boards only after inspections. F01 tests gust response; F02 asks governor setting without repeating the earlier answer. F03 offers full docking or bridge fallback. F06–F08 distinguishes passenger arrival, honest full handover and equipment/plate outcomes.

| Observation | Acquisition / cost | Later application | Best gate |
|---|---|---|---|
| Gust packets: three gusts followed by long lull; ribbon tail points east, sheltered line behind east wall | B02 / 4 | D02 eastern physical route; F01 intermittent movement | `weather` |
| TWO reapplies brake between pulls; FOUR holds release and suits empty trolley, not loaded cabin | B03 / 4 | F02 TWO; FOUR causes local conservative recovery and linkage inspection | `governor` and `synced` |
| 1982 sleeve changed contacts: NORTH→west freight, SOUTH→east return | C06 / 4 | D04 SOUTH; NORTH caught by physical inspection, costs 8 to correct | `traced` |
| Dry correctly sized insulated plate wrap | B04 / 4 | D07 fitted only if acquired; F08 plate outcome | `blankets` |
| Ten minutes after docking needed to drain exposed auxiliary circuit | A05 / no cost | Final full handover and reserve at F08 | `window >= 10` |
| Complete actual settings and test limits, rather than arrival-only report | F06→F07 / no extra cost | Enables safe equipment closeout | `logged` |

The final selectors remain physically available without clues: a player can guess a safe setting and achieve an ordinary good rescue. Guessing cannot substitute for recorded evidence needed for best equipment certification. C07 never establishes destination knowledge. D06 correction does not silently grant the earlier full trace. F03 safe local override after FOUR never changes `synced` to true.

## Meter budgets and difficulty

RESCUE WINDOW is working minutes until safe preparation closes, displayed H:MM. It is a conservative dispatch estimate rather than exact real-world wall time. All numbered journey/work costs are charged at the corresponding choice; local linking scenes are included in that work allowance. Endings may describe later safe shutdown, shelter or recovery outside the working window. No meter restoration, loops that repeat rewards, or unbounded counters.

| Complete best route work | Minutes |
|---|---:|
| Weather, governor, wrap | 12 |
| Lower gallery climb B07→B08 | 8 |
| Stairs C01→C02 | 6 |
| Full contact trace C05→C06 | 4 |
| Relay to crossover C08→D01 | 6 |
| Locked crossover to refuge D05→D07 | 8 |
| Boarding checks/start D08→F01 | 8 |
| First lull movement F01→F02 | 6 |
| Second movement / sheltered descent F02→F03 | 6 |
| Full docking F03→F04 | 6 |
| **Total before equipment reserve** | **70** |

| Difficulty | Start | Clean docking remainder | One 8-minute mistake | Two mistakes |
|---|---:|---:|---:|---:|
| Easy | 110 | 40 | 32; best possible | 24; best possible |
| Medium | 94 | 24 | 16; best possible | 8; ordinary only |
| Hard | 86 | 16 | 8; ordinary only | 0 nominal; bridge/shelter before expired work |

Eight-minute recoveries: forced gallery latch B06; lift C03 is 14 versus stairs 6; wrong contact D06; wrong physical destination followed by the D03 eastern-approach recheck. Medium tolerates one, Hard none for best. Optional investigations do not repeat (`weather`, `governor`, `blankets` gate their own visits). All positive-cost non-ending choices require more minutes than they consume. Every work checkpoint has a no-cost safe ending or bridge alternative. No non-ending page permits expired meter.

The equipment closeout needs all three observed clues, TWO, full log and >=10 after docking. Best additionally needs the wrap so the calibration survives. The ten-minute reserve is used for drain-down in the ending narrative, after the run's active meter stops; it is not charged twice.

## Endings

| ID | Kind | Result |
|---|---|---|
| E01 | Good | Decline assignment; support lower workshop while professionals organise refuge |
| E02 | Bad | Abort before cabin attempt completed; safe people, stranded cabin/plates/calendar unresolved |
| E03 | Bad | After nominating dead-end freight spur, decline the offered eastern-route recheck; no cabin movement, refuge night |
| E04 | Bad | Close movement permit or cancel boarding/first movement; overnight instead of valley arrival |
| E05 | Good | Deliberately secure cabin in refuge receiving cradle; people sheltered, next crew can work under roof |
| E06 | Bad | Continuous crossing reaches suspension limit; inspection with rigged platform required, Mara stops within landing reach, refuge night |
| E07 | Good | Both people reach valley; bridge fallback or uncertified mechanism needs winter work. A fully certified no-wrap docking retains completed drain-down/morning inspection, but loses calibration. Plate result reflects wrap |
| E08 | Good | Both people and calibration reach valley intact; auxiliary mechanism still needs winter inspection |
| E09 | **Best good** | Both people, calibration and tram preserved; verified record and reserve allow full drain-down |
| E10 | Good | Choose useful heat-plant job: refuge, seedlings and pipes protected, tram recovery deferred |

“Bad” means the accepted rescue failed to deliver, never injury or punishment for using a safety interlock. E05/E10 are deliberate completed alternative work; E02/E04 are stopped/incomplete attempts.

## State and arrival invariants

- `running` begins A05, ends on every ending. `window` never increases.
- `enteredGallery` becomes true only at B07; E02 uses it to distinguish a local dispatch-room abort from an explicit return along the enclosed gallery. It is historical, not a possession or current-location flag.
- `weather`, `governor`, `traced` describe completed observed work only. They persist across route merges.
- `blankets` is historical packing flag. Folded wrap stays in bag B04–D07; at D07 it is fitted to the plate box and remains there. Prose and images never put a second wrap in the bag.
- `corrected` records NORTH recovery, not new test knowledge.
- `moved` begins F02; only its E04 arrival needs a reverse-to-landing paragraph. It is never confused with predeparture cancellations.
- `synced` records TWO on actual run. FOUR uses slower local control at F03 but still requires equipment inspection.
- `docked` distinguishes F04 arrivals; `bridge` distinguishes F05→E07. F08 is reached only via full dock, so no bridge arrival prose there.
- `logged` starts only via F07. Complete equipment outcome requires true verified history, not just a signature.
- Story text never assumes any optional B01 visit. Optional details render conditionally. Every page's scene crops route-variable equipment/companions out; no prompt says “if present”.

## Full route adjacency

Conditions and costs are authoritative in story.ts; regression tests execute actual visible choices rather than bypassing conditions.

| Page | Destinations / cost or ending |
|---|---|
| A01 · A Machine That Owes You Tea | A02 |
| A02 · The Car Between Stations | A03 |
| A03 · The Job You Can Accept | A04, E01 |
| A04 · Two Ropes and One Cabin | A05 |
| A05 · A Window in Pencil | A06 |
| A06 · Three People on the Line | B01 |
| B01 · Before the Gallery | B02 (−4 min), B03 (−4 min), B04 (−4 min), B05, E02 |
| B02 · The Tail of the Ribbon | B01 |
| B03 · The Patient Flywheel | B01 |
| B04 · Something Soft for the Glass | B01 |
| B05 · A Door with a Memory | B07, B06 (−8 min), E02 |
| B06 · The Latch Wins | B07 |
| B07 · Under the Mountain’s Sleeve | B08 (−8 min), E02 |
| B08 · The Caretaker’s Landing | C01 |
| C01 · Sixteen Steps or a Lift | C02 (−6 min), C03 (−14 min), E02 |
| C02 · The Ordinary Way Up | C04 |
| C03 · The Express to Where You Were | C04 |
| C04 · The Drawing and the Machine | C05 |
| C05 · Which Question to Ask | C06 (−4 min), C07, E02 |
| C06 · Under the New Sleeve | C08 |
| C07 · A Tick in the Box | C08 |
| C08 · Two Useful Jobs | D01 (−6 min), E10, E02 |
| D01 · The Person at the Other End | D02 |
| D02 · The Two Sides of the Wall | D04, D03 |
| D03 · A Fine View of Tomorrow | D04 (−8 min), E03 |
| D04 · A Word on a Switch | D05, D06 (−8 min), E04 |
| D05 · The Pin and the Promise | D07 (−8 min), E04 |
| D06 · The Tongue Tells the Truth | D05 |
| D07 · The Bridge to the Biscuit Tin | D08, E05 |
| D08 · The Cabin Is Not a Workshop | F01 (−8 min), E04 |
| F01 · Across the Exposed Piece | F02 (−6 min), E06, E04 |
| F02 · The Space After the Third | F03 (−6 min), F03 (−6 min), E04 |
| F03 · Behind the Wall | F04 (−6 min), F05 |
| F04 · The Last Length of Rope | F06 |
| F05 · The Bridge Is Also an Arrival | E07 |
| F06 · People Before Equipment | F07, F08 |
| F07 · The Work Nobody Can See | F08 |
| F08 · What Came Home | E09, E08, E07 |
| E01 · An Apprentice at the Other End | GOOD |
| E02 · The Window You Kept | BAD |
| E04 · The Night Above the Cloud | BAD |
| E05 · A Better Place to Wait | GOOD |
| E06 · The Lever Comes Back | BAD |
| E07 · Everybody Down | GOOD |
| E08 · The Pictures in the Box | GOOD |
| E09 · The Last Skyway | BEST GOOD |
| E10 · The Warm Side of the Mountain | GOOD |
| E03 · The Spur Permit | BAD |

## Artwork handoff — pending Astra production

Read CLAUDE.md and imagegen skill before production. All imagery must use GPT-6-Astra and built-in image_gen; manuscript author did not generate any image. `references/manifest.json` has nine planned reference boards covering all four visible cast, recurring architecture, tram/crossover/bridge/cradle geometry, costume and prop variants. Every page maps to at least one scenery/prop sheet plus its visible cast. `reference-prompts.md` is a restricted reference-phase export of these owned briefs. No reference is generated or approved, and `reviewedSha256` fields are deliberately absent.

Generate reference sheets first, visually inspect full size, convert to WebP at quality 88 without resizing, then record actual reviewed WebP SHA-256 values. Lock approved details into cast/scene prompts, attach each page’s actual listed reference files to every individual scene call, generate each scene at 1536×1024, and visually review against every arrival route and approved sheets. No reused scene stand-ins. Convert scene art to 1200×800 WebP at quality 75 only after review. Parent/Astra can use `referencesForPage` from scripts/art-references.ts to resolve attachments. The standard scene exporter must remain blocked until approved references exist.

Critical merged scenes: B01 hides optional wrap; D07 shows closed box without optional wrap; D08 crops passengers/box and does not show state-specific cargo; F01–F05 crop optional box and passengers; F03 shows neutral settled pointer after either control outcome; F08 and E07 hide plate-box outcome; E08 guarantees fitted wrap. Phone voices never cause physical cast presence. E02 depicts player alone in lower workshop after ending the assignment, with no travel history implied; prose distinguishes local and gallery-return arrivals. E04 hides other refuge occupants; its F02 arrival reverses to landing first. No art production should invent visible Fen/Ellis identity, open plate box, a descending refuge winch, exterior exposed apprentice work, or a second strap on the player's one-strap bag.

## Review and verification handoff

Run `npm run check`, `npx tsx --test scripts/last-skyway-regressions.test.ts`, `npm run test:story`, and `npm run build`. At the local verification checkpoint, the shared editorial test assumed all non-Player Two packs had revision 3; this new pack is correctly revision 1. Parent has since fixed that assertion on the integration branch. Art gate is expected to fail until Astra reference production/review; it must not be silenced with fake hashes. Parent must run independent `.claude/agents/story-continuity-reviewer.md` for `last-skyway`, fix actual findings, and allow only the reviewer to stamp after a genuine pass. No manuscript author continuity stamp.

Runtime recorded by this implementation: T3 Code, Codex harness, **gpt-6.1-sol, medium reasoning**, supplied by runtime instructions. Provider identity beyond Codex harness was not independently queried. Requested imagery model is GPT-6-Astra; no imagery run was launched and no requested/actual art-model match is claimed.

## Verified manuscript milestone

- `npm run check`: PASS for all five installed stories. Last Skyway: 48 pages; 10/10 endings; 6,877 reachable page/state combinations; 11,019 playthroughs; no warnings/errors.
- `npm run typecheck`: PASS, including new regression file.
- `npx tsx --test scripts/last-skyway-regressions.test.ts`: PASS, 8/8 tests. Includes exhaustive reachable-state invariants, independent clue omissions, actual successful route budgets, each Medium/Hard recovery, wrap transfer, wrong governor outcome, bridge fallback and pre/post-movement cancellation.
- `npm run test:story`: 90/91 PASS. Sole failure is known `scripts/editorial-regressions.test.ts:26`, revision assertion `last-skyway: 1 !== 3`; left to parent as instructed.
- `npm run build`: PASS, including fresh all-story checker and Vite output.
- `npm run test:art`: 3/4 PASS; installed-story reference check fails on missing `stories/last-skyway/references/apprentice.webp`, expected until Astra production. No approved hashes or scene images supplied.
- T3 collaborative browser smoke: title/difficulty screen renders with scoped warm lower-station theme; start opens A01; no horizontal overflow at 1280px; author map reports the same 48 pages, ten reachable endings and 6,877 states. This was a manuscript smoke check, not final illustrated/mobile visual QA.
- Executed complete route: 36 page visits, 5,553 rendered prose words, Medium remainder 24 minutes. Approximate reading target is 20–25 minutes plus individual decision pace; no human timed playtest has been claimed.

Implementation and art-plan milestone commit: `ecea0a26418e03bf256c72734392f475cab99114`. Independent continuity review remains REQUIRED; no pass or stamp claimed. Final regression/handoff commit follows it. Parent should integrate the commits, arrange reviewer findings/fixes, then Astra references/scenes, art gate and final browser QA before calling the fully illustrated story complete.

## Parent integration update

Parent confirms manuscript `ecea0a2` merged and independently verified: 48 pages, ten endings, 6,877 states, 11,019 playthroughs, zero checker errors/warnings. Independent Opus continuity round 1 and Astra reference production are underway from that exact manuscript. Astra owns all 48 scene images; no imagery work is assigned to this author. No `story.ts` change occurred after `ecea0a2`, and no self-stamp exists. Parent also confirms the shared revision assertion is fixed on its integration branch; the failure recorded above describes this isolated worktree’s verification checkpoint.

Regression/handoff commit ready for integration: `02cbe8f16be5fd909ae0384a48d723c0f48bf85a`. The following documentation-only commit records this parent update. Remaining production work belongs to the parent/reviewer/Astra: resolve independent continuity findings if any, approved references and individual scene production/review, final art gate and illustrated browser QA.

## Independent continuity round 1 — fixes for all ten findings

Source report: parent commit `96050c1`, `docs/last-skyway/continuity-review.md`. These are author fixes, not a reviewer pass. A NEW independent review is required; no self-stamp.

1. E07 now retains the same equipment-certification condition as F08. A complete equipment/no-wrap run reports completed drain-down and routine morning inspection, while acknowledging lost calibration. Bridge and uncertified runs retain winter-work text. The unconditional “tram needs more work” claim is removed.
2. A02 introduces Fen and Ellis with their jobs, before A03→E01. D07 is an in-person meeting, not first introduction. Early E03/E04/E10 references therefore have valid antecedents. E04 explicitly bridges booth/cabin arrivals through the protected link to the refuge.
3. `enteredGallery` distinguishes B01/B05 local E02 arrivals from B07-and-later gallery returns. Both paths explicitly reach the workshop bench without inventing a mountain journey or an unlatched gallery door.
4. D03 offers a real recovery: recheck the eastern approach from enclosed observation windows, return to the physical plan and nominate east, costing eight minutes. It no longer claims time has run out or invents a one-nomination rule. E03 is the voluntary stop instead. E06 reaches the actual suspension limit and requires the rigged-platform running-gear inspection established at A04; it does not claim the weather allowance expired. The crew must come from the valley after the front; a positive meter does not certify mechanically grounded equipment.
5. Plates are exposed/unprocessed throughout, from last night’s calibration. B04, D07 and F08 timeline/processing statements agree. D07/E08 prompts keep the unprocessed plates unseen inside the closed box.
6. B02 uses a written ridge observer report and sketch; F01 introduces the actual outer-mast ribbon, directly visible from the cabin, including when B02 was skipped. No invented dispatch viewing hardware.
7. B01 says door locked and supplies the trapped-lock key on a hook; B05 explicitly takes that key from the hook.
8. F07 rings tea bell when cupboard shuts, consistent with A01/E01/E09.
9. E03 leaves crossover unselected, never pinned before D05.
10. D07/E05 specify short horizontal sideways draw into refuge bay, doorway level throughout; no vertical lift. Bible and E05 scene prompt agree.

Art owner update: **art.cast and stylePrefix are unchanged**. Scene prompts changed only at B02 (written log/sketch; remove physical tube/ribbon), D03 (still cloudy; nomination unresolved, no forced snow closure), D07 and E08 (closed box of exposed/unprocessed plates from last night), F01 (actual outer-mast ribbon visible through cabin window), E02 (no assumed return journey), and E05 (horizontal cradle). Machinery-reference and scene production remain with Astra; parent/Astra must apply these clarifications to reference-manifest briefs in their branch. This author deliberately did not modify the manifest or generated reference briefs while that work is owned elsewhere.

Focused regressions now cover all three no-wrap equipment-certified difficulties, uncertified E07, A03→E01 names, pre-D07 E04 arrivals, local/gallery E02, D03 recovery and voluntary stop, E06 positive-margin inspection grounding, plate timeline, observation geography, latch/key, bell and horizontal cradle. Full route still costs 70; D03 adds another optional eight-minute recovery. Counts remain 48 pages and ten endings; checker statistics below supersede the earlier manuscript checkpoint after fresh verification.


Round-1 fix verification: `npm run check` PASS for all installed packs, with Last Skyway 48 pages, 10/10 reachable endings, 7,401 page/state combinations, 19,795 playthroughs, zero errors/warnings. Focused regressions: 13/13 PASS. Full `npm run test:story`: 95/96 PASS in this isolated worktree; only the pre-existing shared revision assertion fails (`last-skyway: 1 !== 3`). Parent reports that assertion already fixed on integration branch; no out-of-scope shared edit made here. No scene art generated and no continuity stamp written. Prose-only clarifications also explicitly bridge D03→E03 into the refuge and identify the pressure drum as separate from the ridge observer’s copied gust trace.

## Independent continuity round 2 — arrival illustration correction

Round 2 confirmed all ten earlier findings resolved and found one D07 arrival mismatch. The no-wrap paragraph now narrates Ellis folding the refuge blanket around the box during this scene, rather than asserting it was already covered before arrival. Both routes therefore begin with the same bare, closed box shown by the unchanged D07 prompt; wrapping follows in the text. No route, flag, meter, cast, reference or scene-prompt change. A fresh independent review remains required.
