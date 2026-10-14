# The Glasshouse Express — story bible

Id: `glasshouse-express`. Revision **1**. Original 1980s-flavoured fantasy adventure, personal use. **44 pages: 34 scenes and 10 endings**, five good (exactly one best), five bad. Original unnamed, gender-neutral teenage station apprentice. Basic header, fade transition, scoped five-setting theme; no new engine features. Art is deferred (reference-first, assigned to an Astra art agent) and there is no continuity stamp until independent review.

## Premise and emotional contract

Tallowmere is a city that makes its seasons. Every year on the longest night the Glasshouse Express, a little green tank engine called Marigold pulling a greenhouse on wheels, carries the Summer Stock from Winter Terminus at the frozen lake shore up through the city to the Conservatory on Cold Hill. Planted in the Conservatory’s Great Bed and opened to the first sunrise, the stock (an invented plant, **sunwort**, whose open flowers are warm to the touch) warms the hill, the hill warms the lake, and spring follows within the week. Next year’s summer is grown from this year’s seed.

This year the Terminus boiler failed in October and most of the stock died. What survived fills one carriage: the last warm season. Hesper Vane, stationmaster and Keeper of the Stock for thirty-one years, has broken her ankle on the platform ice. The apprentice rides as Keeper, with driver Dov Pellinger on the footplate, a house stove, a locker of ember-bricks and one sunrise. If the bed is not blooming at this dawn, the winter does not end.

The flavour is 1980s without being Earth 1985: an invented city with neon over Tallow Street, trams in iced wires, a late-night radio station on a steel mast, a chunky cassette recorder, puffer jackets and leg warmers. The Ember Company, which sells pressed ember-bricks to the whole city all winter, has a quiet interest in the run failing; its agent Lucan Sallow is a smiling obstacle, never a physical threat.

The arc is the apprentice becoming the Keeper: noticing instead of obeying. Hesper’s checklist says keep the house warm and leave the frozen vents alone; the best outcome comes from understanding why the one great summer in living memory followed an accident that froze the carriage, and from having the nerve and the means to repeat it on purpose.

## Cast and voices

| Name | Role and voice |
|---|---|
| Player | Original unnamed teenager, gender never stated; the station’s apprentice. Practical, observant, taught by Hesper that “waiting is for looking”. Carries the brass thaw-lamp. |
| Hesper Vane | Original Keeper of the Stock and stationmaster, seventies, strapped left ankle. Dry, exact, affectionate by omission. Present only at the Terminus (A02, E01) and by halt telephone (B08) and Conservatory telephone in epilogues. Never appears mid-route in an image. |
| Dov Pellinger | Original driver, big man in his fifties, twenty years on the Express; his father drove it before him. Calm, slow, kind; folds his arms instead of swearing. On the footplate throughout; speaks through the carriage speaking tube on the move and in person at every stop. |
| Nan Perrow | Original allotment gardener, seventies, forces hyacinths in a lean-to across the lane from the Allotment Halt. Brisk and amused. B09 only. |
| Cassia Flint | Original presenter of the Tallowmere Night Service (1480 on the dial), twenties, broadcasting from the Beacon Cut mast. Heard on Dov’s transistor from A06; met only in C04. |
| Tobias Fenn | Original Conservatory caretaker, seventies, roused in his coat over striped pyjamas. Grumbling and devoted. Conservatory pages only. |
| Lucan Sallow | Original Ember Company agent, forties, camel coat and crimson scarf. Salesman’s charm; sabotage is deniable (a pulled lock pin, a fresh sign, a chained gate, free bricks). B03, B04, E02 only. Named to the player by Hesper on routes that never meet him. |

Any other people are unnamed: townsfolk at windows, a boy on a bicycle, a crossing keeper, two depot workers, the gritting crew. Only visible subjects are listed in image casts; radio and telephone voices are never drawn.

## Setting and rules

- **Winter Terminus** (`terminus`): lakeside station, office, platform, yard; the Fern House and Orchard Car ride empty behind the Glasshouse Carriage. Eleven o’clock to midnight.
- **Lower Town** (`town`): Candlewick Junction (dark signal box, ground lever, the Ember Works loop), the Ember Works siding (walled, chained gate), Tallow Street (the line runs down the street like a tram), the Allotment Halt (mandatory water stop: crane, line telephone to the Terminus only, Nan’s glasshouse, tram depot).
- **The Mere** (`mere`): the Mere Road level crossing, the mile-long viaduct over the frozen lake, Beacon Cut on the far shore where Dov must sign for the single-line hill token, and the radio mast and studio above the cutting.
- **Cold Hill Incline** (`hill`): Fernhallow Halt (iced incline, grit bin, frozen engine sanders), Fernhallow Tunnel (a mile, the coldest stretch), the summit cut.
- **The Conservatory** (`conservatory`): gates, frozen fountain, the dome, the Great Bed with its bed stove, twelve tall eastern dawn shutters worked by a chain and a Hallam wax autovent, narrow hand-opened side louvres.
- **The rule of the night:** the stock must be in the Conservatory bed at *this* sunrise; any other sunrise does not count (A02, repeated in failures as “a tray of plants on a hill”).
- **Fuel:** Marigold burns coal; the house stove and the bed stove burn ember-bricks from the carriage locker. Every leg, every open door, every stop costs bricks. There is no refill: the Ember Company bought the Conservatory’s brick store in November (B08, F02). Sallow’s free bricks are the only offer and it is a trap.
- **The bed stove rule** (A02, F03): twenty bricks or don’t light it, ten to light and ten to feed until the sun is on the glass. With fewer, “plant cold”: bank the house stove’s coals under the bed. With fewer than ten the house cannot hold frost off at all.
- **Hallam locks:** Hallam & Daughters built the carriage autovent and the Conservatory shutters. A wax cylinder opens vents in summer heat; in winter its pin drops into a collar and locks. A quarter of an hour of the thaw-lamp lifts the pin; lift the collar, turn a quarter, the pin stays up (A05, F06). Hauling on a frozen chain shears the gear (E05).
- **Botany:** Nan’s bulbs (B09) teach vernalisation in plain words: a bulb counts the cold and will not believe in spring until it has had its winter, then wants warmth all at once. Hesper’s oldest tape (A04) records that the Long Summer followed a stove-door accident that froze the carriage through Fernhallow Tunnel, after which she stoked hard up the cut. Hesper calls it luck. The story never states the conclusion until E10.
- **Sunwort states:** closed copper buds throughout the journey; drawn-in “fists” after the tunnel chill; slumped, papery leaf edges after over-stoking; a thread of orange, half open, or fully open in the endings; dark glassy leaves when frosted. Nobody is hurt anywhere; failures are a lost season, never injury.

## State

| Flag | Meaning |
|---|---|
| `ember` | Visible EMBER BRICKS meter, format number, no unit. Defaults to 80; difficulties set 100/90/80. |
| `running` | Meter shown from A03 (first entry to the carriage) until every ending, where it is false. |
| `tapeHeard` | A04: the Long Summer tape and the “warm as toast, fair season” tapes. One-use, costs 5. |
| `ventFreed` | A05: the carriage autovent thawed; vents now work from the floor, and the Hallam lock is learned by hand. One-use, costs 5. Enables the C05 trap, the D03 chill and the F04 cylinder option. |
| `metSallow` | B03: took the loop and met Sallow. Changes what the player can report at B08 and C04. |
| `calledHesper` | B08: free one-use halt telephone call; Hesper names Sallow if unmet and explains the bought-up Conservatory bricks. |
| `bulbLore` | B09: Nan’s hyacinths. One-use, costs 5. |
| `tramsHeld` | B10: depot holds the Mere Road gates; costs 5 and makes the Mere leg cost 5 instead of 10. |
| `wordSent` | C04: Cassia rings Fenn and broadcasts; costs 5. Fenn waits at open gates with half a hod, so lighting the bed costs 5 instead of 10. Endings add the broadcast and (always, since every continuing route saw the pulled pin or met Sallow) the Ember Company’s exposure. |
| `earlyVents` | C05: vents opened on the Mere to clear fogged glass; a ten-brick slip with no plant effect. One-use. |
| `slid` | D07: Dov’s run at the incline failed; D02 renders the two-bucket sanding. |
| `stoked` | D03: stove run high through the tunnel; ten-brick slip; D04/D05 show slumped leaves. Mutually exclusive with `chilled`. |
| `chilled` | D03: vents open through the tunnel, then closed and stoked up the cut (D06). Costs 10. Requires all three clue flags and at least 20 bricks. |
| `hubA`, `hubB`, `hubC` | Set by leaving a hub for a side visit; the hub shows a short return paragraph instead of repeating its scene-setting. No story meaning. |

No flag grows without bound; every paid visit is one-use; the checker reports 29,401 page/state combinations and 24,575 distinct playthroughs.

## Meter arithmetic

Starts: **Easy 100, Medium 90, Hard 80** bricks. Costs sit on choices. Optional visits are gated so that the remaining mandatory route stays affordable, so the meter never reaches zero on a non-ending page and `allowExpiredOn` is empty; overspending instead funnels into cold planting (E06) or, below ten bricks, Black Glass (E03).

| Action | Cost | Gate |
|---|---:|---|
| A03→A04 run tapes | 5 | one-use |
| A03→A05 thaw the autovent | 5 | one-use |
| A06→B01 Terminus to Candlewick Junction | 10 | |
| B04→B05 back out of the Ember Works | 10 | |
| B07→B09 Nan Perrow | 5 | ≥35, one-use |
| B07→B10 tram depot | 5 | ≥35, one-use |
| B07→C01 run for the Mere | 5 with `tramsHeld`, else 10 | |
| C03→C04 Night Service studio | 5 | ≥25, one-use |
| C03→C05 vents on the Mere (slip) | 10 | `ventFreed`, ≥30, one-use |
| C03→D01 token and Fernhallow | 10 | ≥15 |
| D01→D02 sand the incline by hand | 5 | |
| D07→D02 two-bucket sanding after the slide (slip) | 15 | ≥20 |
| D03→D04 stove as it is | 0 | |
| D03→D04 stoke high (slip) | 10 | ≥20 |
| D03→D04 chill the tunnel, stoke the cut | 10 | all three clues, ≥20 |
| F03→F04 light the bed stove | 10 | ≥20, not `wordSent` |
| F03→F04 light on Fenn’s half hod | 5 | ≥15, `wordSent` |
| F03→E06 plant cold | 0 | ≥10 |
| F03→E03 plant cold, house stove fails | 0 | ≤9 |

**Mandatory:** legs 10 + 10 + 10, sanding 5, bed stove 10 = **45**. **Best:** 45 + three clue visits 15 + chill 10 = **70**, with the bed-stove gate requiring 20 before lighting and leaving 10. Hard is exact (80 → 10), Medium allows one ten-brick slip, Easy two. The depot visit and the studio visit are each net zero (5 spent, 5 saved) and are not required for best. Slips are the Ember Works loop (10), vents on the Mere (10), the run at the incline (10 more than careful sanding) and over-stoking (10). An unobstructed thin route costs 45 and leaves 55/45/35.

## Evidence / clue map

| Page | What the reader can learn | Later role |
|---|---|---|
| A02 | The rule of the night; the bed-stove arithmetic; plant cold if short. | Fair gates at F03; failure framing. |
| A03 | Checklist says the vents are frozen, leave them; the tapes are in the tin; the locker count. | Sets up both optional Terminus visits without endorsing either. |
| A04 | The Long Summer followed an accidental freeze through the tunnel and furious stoking up the cut; warm-all-the-way years were “fair”. Hesper calls it luck. | `tapeHeard`; the “when” of the chill. |
| A05 | Hallam autovent mechanics: warm the wax a quarter of an hour, lift and turn the collar; Hallam built the Conservatory. | `ventFreed`; makes the chill physically possible and teaches the shutter fix. |
| B02/B05 | Lock pin pulled, brick dust: deliberate sabotage. | Reportable to Hesper and Cassia; exposure in good endings with `wordSent`. |
| B09 | A bulb counts the cold and wants its warmth all at once afterwards; coddled bulbs give leaves and sulks. Nan was never allowed near the sunwort. | `bulbLore`; the “why” of the chill. |
| B08 | Fenn has no bricks; Hesper names Sallow. | Motivates keeping twenty for the bed. |
| C03/C05 | Fogged glass and a free vent chain tempt an early opening; it only costs. | Timing is the player’s, and a wrong time is recoverable. |
| D03 | Present-tense tunnel mouth, stove, locker and chain, no reminders. | Player chooses the chill unprompted. |
| F04 | Frozen cylinder and chain described as they are; three actions offered. | Player applies A05 or forces it. |

No character recalls the clue chain at either decisive choice. The chill choice appears only when the player has the means and both pieces of reasoning; the cylinder choice appears only with the hands-on experience. Spare bricks cannot substitute for either.

## Page and route table

| Section | Routes |
|---|---|
| Terminus | A01 ticket window → A02 Hesper’s office → E01 refusal OR A03 carriage hub. A04 tapes and A05 autovent return to A03. A03 → A06 departure → B01. |
| Lower Town | B01 junction → B02 throw the points → B06, OR B03 the loop → B04 Sallow’s offer → E02 tow OR B05 back out → B06 Tallow Street → B07 Allotment Halt hub. B08 telephone (free), B09 Nan, B10 depot return to B07. B07 → C01. |
| The Mere | C01 crossing (tram variants) → C02 viaduct → C03 Beacon Cut hub. C04 studio and C05 fogged glass return to C03. C03 → D01. |
| Cold Hill | D01 Fernhallow Halt → D02 sanding OR D07 the slide → D02 (15) OR E04 wait. D02 → D03 tunnel mouth → D04 tunnel (three renderings) → D06 stoking (chilled only) → D05 summit cut → F01. |
| Conservatory | F01 gates (Fenn ready or roused) → F02 planting → F03 bed stove: light → F04, or plant cold → E06 (≥10) / E03 (≤9). F04 shutters: haul → E05; side louvres → F05 → E07 / E08 (chilled); warm the cylinder (`ventFreed`) → F06 → E09 / E10 (chilled). |

Representative careful best itinerary: A01 A02 A03 A04 A03 A05 A03 A06 B01 B02 B06 B07 B08 B07 B09 B07 B10 B07 C01 C02 C03 C04 C03 D01 D02 D03 D04 D06 D05 F01 F02 F03 F04 F06 E10 (35 visits, about 6,200 rendered words including short hub returns; 25–30 minutes at 200–250 words a minute). Fast thin itinerary: A01 A02 A03 A06 B01 B02 B06 B07 C01 C02 C03 D01 D02 D03 D04 D05 F01 F02 F03 F04 F05 E07 (22 visits, about 4,200 words; 17–21 minutes). These are reading estimates, not timed audience evidence; the fullest route with every optional stop runs toward the top of the target.

## Endings

| ID | Title | Label and consequence |
|---|---|---|
| E01 | The Waiting Room | Bad: the apprentice refuses; Dov runs both fires alone, the house goes cold on the hill line; heard on the Night Service from Hesper’s office. |
| E02 | The Ember Yard | Bad: Sallow’s tow ends at a second chained gate; the stock is planted in daylight and does nothing; the Ember Company holds its prices. |
| E03 | Black Glass | Bad: fewer than ten bricks at the bed; the coals die before sunrise and the stock frosts. |
| E04 | The Slide | Bad: waiting for the morning gritting crew after the failed run; arrival after sunrise. |
| E05 | Falling Glass | Bad: hauling the frozen chain shears the gear; panes fall where nobody stands; cold floods the bed. |
| E06 | Thaw | Good: cold planting under banked coals; a scattering of buds split; three weeks of thaw and cuttings for next year. Chilled variant notes the cold bed opening more than Fenn expected. |
| E07 | A Thin Summer | Good: lit bed, side louvres; half the bed blooms mid-morning; a short summer, seed just enough. |
| E08 | Late Bloom | Good: lit bed, side louvres, chilled stock; nothing until mid-morning, then every plant opens by noon; a true but late summer. |
| E09 | An Ordinary Summer | Good: lit bed, full light, not chilled; a fair season, seed with a margin; Hesper gives the apprentice their own tape. |
| E10 | The Glasshouse Express | Good / **BEST**: lit bed, full light, chilled; the whole bed opens at once as in the Long Summer; the lake is warm into October; the apprentice is Keeper and records the run from the beginning. |

## Art plan and validation boundary

One fixed clothing description per person in `art.cast`, supplied globally; scene prompts never paraphrase wardrobe. The player is seen from behind, face hidden. Hesper is only ever seated with her strapped left ankle propped; Fenn is always in his coat over pyjamas; Cassia, Nan and Sallow appear only in their own locations. Radio and telephone voices are never drawn. Prompts state location, weather and light; the night is clear and frosty with stars, wind only on the Mere, tunnels enclosed. Merged pages crop to what is valid on every route: D04 and D05 keep the vents and most of the plant state out of frame or describe only what all three stove choices share; F01 to F04 show Fenn and Dov on every route; endings describe the specific plant state. Marigold is an invented tank engine; no famous train.

`references/manifest.json` plans 18 reference sheets with generation briefs, subject and page mappings and **no hashes**: `player-hesper`, `dov`, `lower-town-cast`, `fenn`, `marigold`, `glasshouse-carriage`, `carriage-interior`, `sunwort` (state board), `keeper-props`, `winter-terminus`, `candlewick-junction`, `ember-works`, `tallow-street-and-halt`, `lower-town-interiors`, `mere-and-beacon`, `fernhallow-incline`, `conservatory-exterior`, `conservatory-interior`. Every `art.cast` subject is covered and every page attaches at least one identity sheet and one landmark or interior board. `npm run prompts -- --references` has been exported to `reference-prompts.md`; scene prompt export and `npm run test:art` are blocked until the sheets exist and are reviewed, by design.

Regression tests (`scripts/glasshouse-express-regressions.test.ts`) cover page and ending counts, the exact 70-brick best route on every difficulty, each clue gate, the unsignposted tunnel and shutter pages, the three ten-brick slips, over-stoking, two-slip tolerance, the thin route, the net-zero depot and studio visits, the Sallow route variants, the bed-stove gate, ending distinctions and an exhaustive state walk. Run `npm run check` and `npm run test:story`. Independent continuity review and its stamp are owned by the parent thread.
