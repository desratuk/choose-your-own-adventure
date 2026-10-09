# The Stopped Clocks — story bible

## Premise and editorial intent

On 12 November 1985, a century-old letter puts an unnamed, gender-neutral sixteen-year-old Preservation Society volunteer beside Doc Brown's arriving time train. At 10:04 PM Hill Valley freezes. A future museum owner, Rex Tannen, is using a chrono-clamp on the clock tower to turn the town into a permanent commercial exhibit.

The player helps Doc build a stabilizer from a 1985 regulator, an unused 1885 clock wheel and a 2085 power cell. The central conflict is preservation for the people who live somewhere versus preservation that prevents them living. The player supplies mechanical patience, local knowledge and the decisive action at the clock; Doc supplies time-travel expertise.

The familiar letter/train/clock framework supports a new museum investigation, not a film recap. Ordinary success saves the town. The best route also exposes and catches Rex by connecting separately acquired evidence and knowledge. A hurried success leaves the town with a permanent missing minute.

## Fixed continuity

- Present: Tuesday 12 November 1985. The 1955 lightning strike stopped the clock at 10:04. Knowing that exact second enabled Doc and Marty to send Marty home from 1955. Marty is frozen offstage in 1985.
- Doc has a flying time train, not a DeLorean. His family is safe at home; its date/location is unspecified.
- The letter is dated 1885. Doc writes it after every successful outcome and leaves it with Western Union. Its P.S. is **“Leave the past something to work with.”** It is a thematic clue, not an explicit spare-wheel instruction.
- The player owns a Walkman and a personally recorded summer cassette. On the shop route they trade the machine but keep the tape.
- Only after S04 does the player wear a chrono-field bracelet. It protects them and carried objects. Frozen people must not be touched.
- The 1885 visit begins on 28 August, before the new courthouse clock is unveiled. Doc's younger self is the blacksmith; meeting him changes history.
- Doc offers a concealed back-lane escort, not permission to meet himself. The player may instead choose to approach the blacksmith despite that separation.
- Taking the installed clock wheel is detected immediately on returning to Doc in S25. Doc insists on repair; he never knowingly installs it. Repair occurs in 1885 before departing. No original-wheel arrival at the finale exists.
- The 2085 museum contains a scan of the real frozen town, including the possible future failure of the player and Doc. It is not the actual 1985 square physically moved to 2085.
- Rex falsely claims the residents donated their moments. His public live interview channel is demonstrated in S31. This fact has a concrete climax payoff.
- The Authority gets a warrant from the stolen jump log but cannot pinpoint Rex inside his private field from the log alone. A live public broadcast reaching 2085 provides an entry point.
- Rex's cuffed arrest, not simply having alerted the Authority, controls arrest-specific aftermath. Use `rexCaught` for those distinctions.
- A static illustration must match every arrival state: notably S41 depicts assembly before success/failure diverges; S44 depicts the broadcast before optional officers arrive.

## Decisions, clues and consequences

### 1985 opening — S01–S14

S01 establishes the volunteer, tower, cassette and letter in a compact opening. S03 allows second thoughts or the early failure E01. The train arrives at S02; Doc and the bracelet are introduced at S04.

S05's optional observation establishes someone else is moving. S07 offers interference with the clamp; S08 allows backing out or the fracture ending E02. S09 explains the three required parts and starts the visible countdown. Chasing Rex through S10–S11 costs ten minutes and obtains his staff keycard.

At S13 Doc knows his safe combination and retrieves the regulator. The lab also establishes the setting catch that holds clock hands while gears run. There is no amnesia/date quiz and no S13x. S14 installs the regulator and lets the player choose era order.

### 1885 — S20–S29, S26b

The player chooses to go alone or take Doc's concealed escort. Calling at the blacksmith's window creates E03; keeping Doc concealed reaches the depot.

At the depot, stealth or a conversation leads to the same crate through different encounters. Protecting the stationmaster can succeed through a bluff, or lead to the saloon. A radio rescue is a recoverable fifteen-minute complication; offering the time train causes E04.

The crate presents a certified, installed wheel and an untested boxed replacement. The latter preserves the clock's history. Doc tests it on return; it works.

Taking the original reaches S25. Doc spots removal marks, identifies the danger and sends the player back. S26b costs fifteen minutes and restores history before S26. Refusing to repair reaches E05 in the ravine, not in 1985.

S26 fits the spare and departs for 2085 or, if the cell is already aboard, 1985.

### 2085 — S30–S38

The plaza offers the museum, shop, kiosk and (with the keycard) staff door.

- S30k costs ten minutes: the Temporal Authority handles unlicensed time travel; local security belongs to Tannen.
- S31 costs ten minutes: the player sees their possible failure, the falsification of residents' consent and Rex's live interview demonstration. This enables the live-interview choice in the finale.
- S33 requires the keycard. The jump log proves the clamp's origin. Exporting it to the Authority requires the kiosk knowledge; taking it to local police or stealing a rack cell leads to capture.
- S32–S35 offers a legitimate trade: the Walkman for a cell, keeping the personal cassette.
- S34/S36/S37 turn infiltration or theft into a recoverable capture/rescue, with a fifteen-minute penalty. A bluff instead leads to E06.
- S38 provides a loaned cell, a warrant and the Authority's live-channel constraint. No automatic rescue is promised.

Every cell-acquisition route goes to 1885 if the wheel is missing, otherwise to S40. Era order changes context, not arbitrary extra travel.

### Finale — S40–S45

S40 returns to the same frozen moment with both parts. S41 spends seventy minutes assembling/calibrating the stabilizer together. If the countdown expires, E07 occurs in the train cab.

S42 places the player at the clock's setting catch while Doc connects the device and Rex intervenes. Three approaches:
1. Trade the stabilizer for escape: E08.
2. Turn Rex toward the people in the square and operate the catch: S43. The player saves Hill Valley; Rex escapes. E09 or E11.
3. With museum knowledge, offer Rex a live interview: S44. The player exposes his false consent claim on air and operates the catch. Without the Authority he escapes under public scrutiny (E09/E11). With the Authority the live link allows arrest, setting `rexCaught`, then S45 and E10/E11.

The best route requires museum knowledge, the keycard/log, independent-authority knowledge, the actual broadcast decision and sufficient time. Alerting the Authority but choosing S43 is an ordinary rescue, not an unexplained arrest.

## State and balance

The story data declares the definitive flags and effects. Important facts:
- `escapement`: none/original/spare; original is confined to the 1885 error branch.
- `hasKeycard`, `knowsTA`, `sawExhibit`, `authorityAlerted`: independent investigation discoveries.
- `rexCaught`: set only after the broadcast actually enables arrest.
- `visited1885`, `visited2085`, `lastEra`: bridge era order.
- `swapped`: acknowledges the repaired wheel mistake.
- `caughtAt`, `tannenKnows`, `metTannen`, `fooledTannen`, `rescued`: arrival-specific encounters.

Countdown starts at Easy 390, Medium 360, Hard 345 minutes. It measures protected field time, not a continuously advancing date in the frozen square.

| Cost | Minutes |
|---|---:|
| Lab/frame preparation, S14 | 45 |
| Each era arrival, S20 and S30 | 20 each |
| Each acquired part's return/preparation, S26 and S35/S38/S37 base | 70 each |
| Assembly/calibration, S41 | 70 |
| Chase, kiosk, museum | 10 each |
| Saloon rescue, wheel repair, future rescue surcharge | 15 each |

Core costs total 295. Full best-route investigation adds 30: Hard leaves exactly 20, Medium 35, Easy 65. Medium permits one fifteen-minute recovery while retaining the best ending. Below twenty after assembly, success becomes E11; zero or less fails at S41.

## Endings

| ID | Outcome | Label |
|---|---|---|
| E01 | Decline the letter; freeze at home | Bad |
| E02 | Force the clamp and fracture time | Bad |
| E03 | Reveal Doc to his younger self | Bad |
| E04 | Lose the train and remain in 1885 | Bad, with a gentle epilogue |
| E05 | Refuse to restore the original wheel; fade in 1885 | Bad |
| E06 | Become Rex's exhibit | Bad |
| E07 | Countdown expires during assembly | Bad |
| E08 | Accept Rex's bargain | Bad |
| E09 | Save Hill Valley; Rex escapes | Good |
| E10 | Save Hill Valley and earn Rex's arrest through the broadcast | Best |
| E11 | Save Hill Valley, but its clocks permanently lose a minute | Good, bittersweet |

51 pages, eleven endings. Save revision 2 deliberately cannot resume an older in-progress story; collected endings remain.

## Validation and illustrations

After story edits: run `npm run check`, focused editorial regression tests, the independent continuity reviewer and the story gate. Check both era orders, repair before/after 2085, broadcast with/without the Authority, and Authority without broadcast. Verify best-route margins on every difficulty.

The revision passes the exhaustive checker, persisted editorial regressions and independent continuity review. A complete Medium best-route browser playthrough reaches E10 with all scene images loaded. Legacy-save handling, fresh saves, reload, Undo and mobile opening layouts have also been checked.

The approved reference inventory remains the authority for faces, costume stripes, clock architecture and machinery. The setting catch has its own reviewed reference for S42–S44. Changed illustrations: S03 (bare wrists before acquisition, generic posters), S22 (rear yard), S25/S26 (optional cell entirely cropped out), E05 (1885 ravine), S41 (assembly, valid even when the timer expires), S42–S44 (same setting catch and player-led climax), E09 (no premature keys), E11 (no contradictory watch comparison). E10's following-week daytime presentation now matches its existing image. Preserve other images where their composition still matches.

All eleven changed illustrations have been generated from the approved references, visually reviewed and installed as 1200×800 WebPs. Sources and pre-rewrite backups remain in ignored `art-src/`; exported prompts are in `image-prompts.md`.
