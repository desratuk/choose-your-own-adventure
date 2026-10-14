# The Lantern Archive — story bible

Id: `lantern-archive`. Revision **1**. Original 1980s mystery/fantasy, not based on a franchise. **45 pages: 35 scenes and 10 endings**, five good (exactly one best) and five bad. Original unnamed, gender-neutral seventeen-year-old projectionist. Basic header, fade transition, scoped theme; no engine features. Art is planned in `stories/lantern-archive/references/manifest.json` without reviewed hashes; no images exist yet. No continuity stamp until independent review.

## Premise and emotional contract

Saturday 25 October 1986, Saltbeck, a small northern English town on the River Wend. The Palladian, a picture palace built in 1911 by the magic-lantern showwoman Ada Merriman, shows its last film, *The Brass Moon* (an invented 1958 adventure), before Mr Hale hands the keys to Starlite Video at midnight. The player is its second projectionist; Win Aldous, seventy, has been chief projectionist for forty-four years.

During the first reel, Ada's 1911 projector, the Lantern, strikes its last carbons by itself. Moths made of light pour through a painted-shut hatch into an archive under the stage. There Ada kept film of everything Saltbeck forgot. Tonight the Wicks, four streets by the old candle works emptied in the early 1950s, is passing out of the memory of its last four holders: Win, Abel Quarry and the Pellow twins. Win doesn't know she grew up there. She has carried the key to her mother's door for forty years and can no longer say what it opens.

The fantasy has firm, stated rules (Ada's log, B02), and nothing is solved by a wish. The player recovers the Wicks with projectionist's craft and evidence: a lamplighter's tally plate, glass from the last lamp post, the right people in the house, the correct film speed and enough carbon. The Palladian still closes on every route, and the Lantern never lights again.

Arc: the projectionist's work is invisible by design ("Do it right and nobody downstairs ever knows we exist"). The story makes that invisibility honourable rather than lonely. Ada's optional last entry: "It isn't small. It's the whole job." Win, who has never once watched from the stalls, can choose to sit downstairs. Win, Abel and the twins were neighbours for thirty-five years and meet as strangers in the foyer. In the best ending they walk the round together again, and nobody turns round to look at the projectionist, which is how you know you did it right.

## Cast and voices

| Name | Role and voice |
|---|---|
| Player | Unnamed, gender never stated, seventeen, second projectionist. Practical, careful, used to working unseen. Knows changeovers, threading, cleaning and splicing; learns the Lantern from Win in A03. |
| Win Aldous | Chief projectionist, 70, long silver plait, half-moon glasses. Dry, exact, proud of invisible craft. Grew up at 4 Tallow Lane (green door). Present in the box from A02 until D03; then in the box or the stalls by the player's choice (`winPlace`). |
| Dot Pryor | Usherette and kiosk, 50s. Warm, theatrical ("Last night, last tray"). Foyer and speaking tube; seats the residents in D05. |
| Mr Hale | Owner since 1959, 61, bottle-green velvet jacket. Resigned, kind. Saw Ada's Saturday shows as a boy; grants the interruption in D04 and announces in F03. Not from the Wicks. |
| Abel Quarry | 90, retired lamplighter at Highfield House care home. Lit the Wicks for thirty years; keeps his pole on the wall. His thumb knows the round; his memory doesn't. |
| Ivy and May Pellow | Identical twins, 74, Highfield House. Lilac (Ivy) and sage (May) cardigans. Finish each other's sentences until they can't. |
| Mrs Ferris | Night manager at Highfield House. Text only, never illustrated; drives the minibus. |
| Ada Merriman | Founder and Keeper, 1880s–1958. Appears only through her log, labels, slides and footprints. |

## Setting and rules

Eras: `palace` (foyer, box, office), `archive` (stair and vault), `town` (Kiln Hill, Depot Field, epilogues), `screen` (what the Lantern projects). All scenes are one rainy night except epilogues, which bridge to later days explicitly.

Projection facts taught in A02–A03 and used later:
- Changeovers: first cue dot starts the other motor; the second, eight seconds later, changes over.
- Silent film was cranked at about **16** frames a second, sound film runs at **24**. A soundtrack is a wavy stripe beside the pictures; silent film uses the whole width.
- 35mm runs **90 ft/min at 24** and **60 ft/min at 16**.
- The Lantern has a slide gate for palm-sized glass in front of the lamp, a 16/24 speed lever and a carbon gauge in hours and minutes.

Ada's rules (B02), the canon for every outcome:
1. Forgotten things come to the archive as film; each can has a card naming those who still hold it, and names fade as they let go.
2. When the last holders are letting go, the Lantern lights itself. Its last carbons burn once, for one return.
3. Shown through the Lantern onto the Palladian's screen, a reel returns to everyone watching who once knew it. A part returns only that part; out of order, it returns as a muddle nobody can walk through.
4. Light it through something that was really there, not a picture of it, or it is gone by morning. The gate takes glass.
5. If two or more holders watch together, the moths carry it from them to everyone who ever knew it, but only if the lamp keeps the screen lit for ten minutes after the last frame.

Ada's card (B04) lists forty 1952 names; only W. Aldous, A. Quarry, I. Pellow and M. Pellow remain. That is why the general audience cannot restore the Wicks and why Highfield House matters. The memory rule restores memory only. Physical evidence (the 1949 map, cobbles, chimney) was always there and simply went unnoticed. No buildings reappear, and the Palladian is not saved.

## State

| Flag | Meaning |
|---|---|
| `lantern` | Visible LANTERN meter, minutes of carbon, format time. 120/105/95 by difficulty. |
| `difficulty` | easy / medium / hard |
| `running` | Meter shown from A04 (strike) until every ending. |
| `toldWin` | A05 optional: Win hears first; changes C01 arrival. |
| `readAda` | B03 optional last entry; E09 callback. Never a gate. |
| `cleaned` | B06 cleaner mistake taken. |
| `hubSeen` | C01 first-arrival exposition shown once; set by every C01 exit. |
| `knowsRound` | C03 tally plate T·W·D·M read; unlocks the two lamplighter-order splices. |
| `residentsComing` | Abel and the Pellows invited (C04 in person or C08 by phone). |
| `invitedInPerson` | C04 rather than C08; D05 greeting text. |
| `lampGlass` | C06 pane from the last Tallow Lane lamp. |
| `slide` | C07 Ada's painted Tallow Lane slide (decoy anchor). |
| `changeover` | none / clean / restart. D01 local action rendered in D03, reset on leaving D03. |
| `winPlace` | box / stalls, chosen at D03. |
| `order` | none / true / shelf / reverse / single, chosen at F01. |
| `anchor` | none / glass / slide, chosen at F02. |
| `speed` | none / 16 / 24, chosen at F03 (F04 can change 24→16). |
| `rushed` | F04 rerun taken; F05/F07 text. |

## Meter arithmetic

LANTERN is carbon time, H:MM. Starts **Easy 2:00 (120), Medium 1:45 (105), Hard 1:35 (95)**. Costs live on choices. The meter never reaches zero on a non-ending page, and `allowExpiredOn` is empty. Only E05, E07 (guttering branch) and Hard E09 reach 0:00.

| Action | Cost |
|---|---:|
| A04→A05 tell Win (optional) | 5 |
| A04/A05→A06 down the hatch | 5 |
| A06→B01 into the vault | 5 |
| B01→B02 read the rules | 5 |
| B02→B03 Ada's last entry (optional) | 5 |
| B04→B05 view the rolls | 5 |
| B05→C01 carry the rolls up | 5 |
| B05→B06→B07→C01 cleaner mistake and moth-case recovery | 15 (10 extra) |
| C01→C02 Kiln Hill, C02→C03 the pole | 10 + 5 |
| C03→C04 invite in person | 5 |
| C01→C08 phone invitation | 5 |
| C01→C05 Depot Field, C05→C06 the lamp | 5 + 5 |
| C01→C07 Ada's slides (decoy) | 5 |
| D01→D02 stop number one (mistake) | 10 |
| D03→D04 fetch Mr Hale | 5 |
| F01 full splice / single roll | 10 / 5 |
| F03 full reel at 16 (900 ft ÷ 60) | 15 |
| F03→F04 at 24, F04 let it run (900 ft ÷ 90 total) | 5 + 5 |
| F04 stop, rewind, rerun at 16 | 20 (10 extra) |
| F03 single roll either speed | 5 |
| F06 keep the white light ten minutes | 10 |

**Best costs 95**: archive 25, Highfield House 15 plus invitation 5, Depot Field 10, Hale 5, splice 10, showing 15 and the ten minutes 10. It ends at **25 / 10 / 0** on Easy/Medium/Hard. Medium allows exactly one ten-minute slip (a mistake, or two optional five-minute detours); Easy allows two plus a detour; Hard allows none. The 16-speed showing is offered only with at least 16 left, the 24 path needs at least 11 after a full splice (gated at 21), and the rerun needs 21.

Safety gates: hub visits require their whole chain to stay above zero. D01's mistake needs 11. D03 offers the Hale route only with at least 16 (enough for Hale, a single-roll splice and its showing). Otherwise only "Check the Lantern's gauge" → F09 → E05. The 24-speed choice is a real trade-off: on low carbon it is the only full-reel option, and it yields the ordinary E08.

## Clue map

| Page | What the player can notice | Later use |
|---|---|---|
| A02 | Cue-dot changeover drill. | D01 crisis: take the changeover (free) or stop the machine (−10). |
| A03 | 16 for silent, 24 for sound; soundtrack stripe; feet per minute; slide gate; Ada's slides in the cabinet. | F03 speed choice (unhinted); F02 gate; C07 decoy. |
| B02 | Ada's five rules. | Order, real-thing anchor, two holders, ten minutes of light. |
| B04 | Shelf order is alphabetical; four names on the card. | F01 decoy order; Highfield House lead (Win names them in C01). |
| B05 | Full-width frames with **no wavy line**; Tallow Lane least faded; Mould Yard chimney = the Ferry Road chimney. | Silent speed; single-roll fallback; Depot Field lead. |
| C03 | Pole plate **T · W · D · M**. | Only source of the true splice order; F01 lists streets by name with no reminder. |
| C06 | Whole pane from the lamp at the top of Tallow Lane; TALLOW L— sign. | The only anchor that was really there. |
| C07 | Ada's beautiful painted lane. | Plausible decoy; a picture, not the place (E04). |

At F01–F03 no one recalls the clues. The true order appears only after reading the plate, but appears alongside its reverse and the shelf order. The speed lever is always a free choice. Generous carbon cannot replace a clue.

## Page and route table

| Section | Routes |
|---|---|
| Opening (palace) | A01 foyer → A02 box → A03 Lantern lesson → A04 strike: E01 shut the hatch, A05 tell Win → A06, or A06 directly. |
| Archive | A06 stair → B01 vault → B02 rules → B03 optional last entry → B04 Wicks cans → B05 viewer → C01, or B06 cleaner → B07 moth case → C01. |
| Investigation hub | C01 box hub, once per visit: C02 Kiln Hill → C03 pole → C04 invite or back; C08 phone invite; C05 Depot Field → C06 lamp; C07 slides. All return to C01. "Get the Lantern ready" → D01. |
| Climax | D01 changeover crisis → D03 (or D02 → D03). D03 Win's seat → D04 Hale → D05 Row F if residents are coming → F01; low carbon → F09 → E05. |
| Showing | F01 order (shelf / true / reverse / single / number two → E02) → F02 anchor → F03 speed. Full reel at 24 → F04 (let run, or rerun at 16). True order → F05; shelf/reverse → F07 → E03; single → F08 → E06 (glass) / E04. |
| Outcome | F05: no glass → E04; glass+24 → E08; glass+16 without residents → E10; glass+16 with residents → F06. F06: keep the light with ≥10 → E09; with <10 → E07 (gutters); restart feature → E07. |

Representative best itinerary (27 visits): A01 A02 A03 A04 A06 B01 B02 B04 B05 C01 C02 C03 C04 C01 C05 C06 C01 D01 D03 D04 D05 F01 F02 F03 F05 F06 E09. Its rendered prose runs to about **4,260 words**, about 17–21 minutes at 200–250 wpm, before deliberation. A short ordinary route (field only, single roll, E06) is 21 visits and about 3,240 words, about 13–16 minutes; careful players who take optional scenes, the phone or a mistake land in the 15–25 minute band. These are reading estimates from a self-read harness, not timed audience tests.

## Endings

| ID | Title | Label and consequence |
|---|---|---|
| E01 | A Trick of the Light | Bad: hatch bolted at the strike; Lantern burns out unused; Win abandons the key. |
| E02 | Too Bright | Bad: modern lamp on number two lifts the moth-made pictures; clear film. |
| E03 | A Muddle of Streets | Bad: shelf or reverse order; the holders remember pieces they cannot connect; lost within a week. |
| E04 | By Morning | Bad: no real anchor (painted slide or empty gate), any order that is not a muddle; one night of memory, a notebook nobody understands. |
| E05 | Cold Lamp | Bad: not enough carbon left to show even one roll. |
| E06 | One Street | Good: single Tallow Lane roll with the lamp glass; Tallow Lane returns, three streets are lost; Win knows whose door the key was for. |
| E07 | The House Remembers | Good: full restoration for those watching, but the moths don't reach the town (lights up early, or carbon below ten). Holders teach it the slow way. |
| E08 | At a Run | Good: full order and glass at 24 without rerun; real but hurried memory. |
| E09 | Keep the Light | Good / **BEST**: true order, lamp glass, residents present, 16, ten minutes of white light. The whole town remembers; the archive goes to the library; the Palladian still closes. |
| E10 | Win's Street | Good: everything right but no second holder watching; Win alone has the Wicks back. |

## Art plan

`references/manifest.json` plans 15 sheets: player-win, palladian-staff, highfield-residents, lantern-projector, light-moths, wicks-cans, lamplighter-pole, anchors, and landmark sheets projection-box, palladian-house, archive-vault, depot-field, highfield-house, wicks-streets and win-home. Every `art.cast` subject is covered, and every page resolves at least one reference. No `reviewedSha256` values are recorded and no WebPs exist, so `npm run test:art` and `npm run prompts` correctly block this pack until the reference-first workflow is run.

Image rules: the player is never seen from the front. Merged pages omit optional people and props: Win is cropped out of C07, C08, D05 and E02, and kept outside the crop in F01–F08, because she may be in the stalls or at the port. The pole stays at Highfield House, and the anchors appear only on their own pages. Screen pages F04, F05, F07 and F08 show the screen small, distant and indistinct, so they neither show nor rule out the painted-slide overlay. Locked details from the approved player-win board and the art review: Win's single plait over her LEFT shoulder, Abel's RED-AND-CREAM checked shirt and Dot's SIX brass buttons. E01 shows Win still in her cardigan before she fetches her coat. E09 shows the four walking DOWN from the top of the field toward the chimney. E06 and E08 are late October. Screen pages show silvery black-and-white film seen from the box, valid for every speed and anchor. Mrs Ferris is never drawn. Win's own front door is plain blue; the green door belongs only to 4 Tallow Lane.

## Validation

- `npm run check`: all stories OK; Lantern Archive 45 pages, 10/10 endings.
- `npx tsx --test scripts/lantern-archive-regressions.test.ts`: route, gate, meter and exhaustive-state regressions.
- `npm run test:story`: all tests pass after the parent's shared revision-test fix.
- `npm run test:art`: fails for this pack until reference sheets are generated, reviewed and hashed.
- Independent continuity review and art generation are pending with the parent thread.

## Round 1 author response

The independent review is recorded in `docs/lantern-archive/continuity-review.md` (owned by the reviewer). All eleven findings were fixed with the smallest coherent change:

1. A01: narration introduces Win Aldous right after Mr Hale's line. A02 no longer re-introduces her.
2. A03: the hatch has been "painted shut since the spring Ada retired, nearly thirty years ago", which matches the 1958 entry.
3. A04: the page opens "Twenty minutes later", with reel one nearly through. The time reading is END OF REEL ONE.
4. C01: the return paragraph now reads "In the box, Win is at the machines…", which is valid after C07 and C08.
5. D05: the greeting depends on `knowsRound`. Players who visited Highfield House get Abel's line; phone-only players get "the one who rang Mrs Ferris".
6. D05 (stalls): Win recognises Abel as the man who swept these stalls, and he doesn't remember. They were neighbours, and none of them knows it.
7. Row F: A01 has Dot rope off Row F for the staff on every route. C08 asks Dot to save the three places there.
8. D05 (box): the port sentence now comes after the group enters the auditorium.
9. E03: anchorless muddles are gone by morning. Only the lamp-glass muddle lingers for a week.
10. E05: the last look through Ada's viewer happens before Mr Hale locks up, with Win, before the midnight handover.
11. E08 (and, by the same logic, E06): the images are late October.

Art-owner fixes in the same commit:
- The cast locks listed above.
- E01 and E09 image corrections.
- Added `cast` entries so references attach: moths on B02, B03 and C06; the Lantern on C08 and E03; rolls on C08, F09 and E05.
- Win outside the crop on F01–F08, and distant, indistinct screens on F04, F05, F07 and F08.

No reference or raster files changed. Regressions now also cover the mixed visit-and-phone greeting, the phone-only greeting, Win's stalls recognition, Row F, the anchorless E03 and the order of events in E05. A new independent round is required; no stamp has been recorded.

## Round 2 author response

The single round-2 finding is fixed: D05 now has its own header reading, `FINAL NIGHT · THE FOYER`, instead of inheriting D04's `THE OFFICE`. F01 already sets `THE LANTERN` on returning to the box. No other changes. A fresh independent round is required; no stamp has been recorded.
