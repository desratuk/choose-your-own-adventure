# Return to Sender: story bible and outline

Id: `return-to-sender`. Revision **2**. Personal-use Ghostbusters fiction, set in Manhattan on Friday 15 November 1985, with a Monday epilogue. **46 pages: 36 playable scenes and 10 endings** (4 bad, 6 good, one of the good endings best). E05 is now a recovery scene, not an ending. All original IDs remain; C08–C11 are new.

## Premise and dramatic contract

The player is an unnamed, gender-neutral seventeen-year-old bicycle courier for Quickfoot. Dolores offers one final paid job: carry an intact brass pneumatic-mail carrier from Pell’s stamp shop to the Ghostbusters at fourteen North Moore Street. Its closure notice has been undelivered since 1898. The intended historical recipient is the night shift at Station Nine, beneath the Sedgewick Hotel.

The commissioned handover is legitimate and safe. Janine accepts responsibility and signs in E02; the player receives the agreed pay. Continuing the investigation is voluntary. Egon’s original test was credible but incomplete: it measured the object at rest. Moving the carrier activates a network-wide call which makes already-captured postal ghosts try to return to duty. The player reports the new evidence in R03; the professionals update their diagnosis, isolate the postal section, arrange reserve cooling and protect neighbouring occupants. They do not knowingly create an automatic capture emergency or blame the courier for obeying instructions.

Ordinary success can mean safe custody, informed containment, or delivering to the staff who are physically present. The best ending requires verified service to every member of the shift, including the twelve already in the grid and any clerks the player trapped. No one is released merely by being close to the tag.

The player’s useful skills are address tracing, checking a building’s previous use, handling loading-door catches, reading route diagrams, preserving paperwork, matching names to recipients and obtaining acknowledgements. The team operates dangerous machinery; the courier performs every final delivery. Slimer stays at the firehouse. His optional scene teaches attention to absent people through quiet companionship, and his later response is conditional on that meeting. He is not a door key or a rewarded mascot.

## Rules of this fiction

- The brass carrier contains an intact **closure notice**, dated 15 November 1898: Station Nine’s staff are released from duty and may go home. The seal’s soot is gradually cleaned or loosened; R02 gives the company, station number and date, not the whole solution.
- The **tag is only a receiver** reporting containment-grid strain. It captures, transports, invites and exempts nobody. Removing it does not break the network’s call.
- **Twelve postal clerks are already in the grid** at the start, captured on separate jobs that week. Other grid occupants are never released by this story’s successful procedure. Further street encounters do not capture anyone.
- There are **47 Night Mail staff including supervisor Ambrose Tull**: 12 in the grid and 35 outside it. Six may be caught at T04, or three at C02; those uses are mutually exclusive.
- A **portable trap** catches one local group when its pedal is pressed, then shuts. It cannot be used again in the field. A full trap is carried to the firehouse and docked to a supervised service chamber for release. There is no automatic transfer to the grid.
- Station Nine’s **UP bank receives** carriers into its tray. **DOWN recirculates returns** and physically draws the carrier toward it. The old network’s routine opens at the nightly 11:20 bell. Both route diagrams and witnesses can establish the information; the final choice does not repeat an instruction from Tull.
- Delivery of the original releases the staff who hear it at the desk. Tull stays while the station acknowledgement remains unsigned. The original receipt may be closed before the absent staff receive separate service, producing an ordinary good ending with unfinished release work.
- The historical procedure permits **dated, certified copies bearing each absent recipient’s full name**. The player must have copied the procedure and verified the complete shift roll to execute this safely tonight. Janine certifies the copies; Egon and Winston operate the service hatch; the player reads each notice and obtains acknowledgement.
- A controlled grid discharge needs **10 points of headroom**. Reaching 100% load trips protective breakers on the isolated postal section: its twelve ghosts escape, while the main vault stays shut. Recapture consumes the remaining opportunity. E06 distinguishes an undelivered original from exhaustion after the original has already released the present staff.
- Nobody is hurt. Clerks are humane, comic and eerie. They can answer, work and react; Tull is their named spokesperson. Ghostbusters lore needed to understand a route is explained on that route.

## Evidence distribution and meaningful alternatives

| Source | Useful evidence or help |
|---|---|
| R02, Pell | Antique carrier, ST. 9, 1898 date, broken pipe and service passage; damaged survey does not identify the destination |
| R03, street encounter and phone | Live evidence changes the diagnosis; twelve captives, receiver-only tag, legitimate handover still available |
| R05, post office | Park Row/Sedgewick address; receiving/return diagram; certified individual-copy procedure |
| R06, Engine Nine | Building inspection plan; destination; witnessed 11:20 bell; loading-door catch sketch |
| R07–R08, diner | Destination and bell; staff-closure seal; remembered absent colleague; service stair beside coal chute |
| F01–F03, firehouse | Intake evidence, paid handover, authorised single-use trap, discharge reserve, Slimer’s attention to missing staff |
| F04–F06, team | Active evidence collation, survey, seal inspection, source-accessible equipment explanation, supported delivery |
| T01, pipe route | Actual dispatch card with 11:20 time and receiving/return diagram |
| T03, records | Alternative source of the certified-copy procedure; useful investigation, not a wrong-room punishment |
| H01–H03, hotel | Old site confirmed by plaque; managed access; bell corroborated |
| C02–C03, room and supervisor | Routing diagram; informed containment/release distinction before commitment; 47-person attendance book and missing twelve |
| C11, optional roll | Full names and verified distribution; requires spending time rather than assuming Tull’s attendance is enough |
| C07–C10, final service | Player chooses whether to close the original or keep it open, then applies evidence and serves every absent recipient |

R05, R06, R07, F01 and T01 are not arbitrary wrong destinations. Each earns its place with evidence, help or a legitimate resolution. R04 hides completed visits. The direct hotel option requires an identified address; following the physical pipe can independently reach the destination.

## State and costs

| Flag | Values / role |
|---|---|
| `margin` | Hidden numerical headroom; displayed load is `100 - margin` |
| `difficulty` | easy / medium / hard |
| `running` | Meter visible after collection; false at every ending |
| `visitedFirehouse/Post/Engine/Diner/Tunnel/Sorting` | Six booleans; one-use visits, no repeat-cost farming |
| `knowsSite` | Hotel address learned from post office, Engine Nine, diner or team survey |
| `knowsChute` | R08 service-stair directions |
| `copyRule` | R05 or T03 procedure copied |
| `heardSlimer` | F03 relationship scene; affects later prose, not a mandatory best-ending key |
| `roster` | C11 full roll verified |
| `team` | F06 onward, team present until returns are narrated |
| `triedDown` | C05 used; prevents repeated return-loop attempts |
| `followup` | C08 attempted; distinguishes original delivery from later service and failure |
| `trap` | none / empty / blockade (six) / watch (three) / final (35, terminal) |
| `route` | none / lobby / chute / tunnel / team; lobby also marks E05’s hotel-to-firehouse handover |

The trap flag records how the loan was used. C10 discharges and returns it in prose; terminal E11 retains that history rather than introducing another equipment-state system.

Starting headroom is **80 / 65 / 50** on Easy / Medium / Hard, displaying **20% / 35% / 50%** load.

| Action | Headroom spent |
|---|---:|
| First incident R03 | 5 |
| Each optional visit R05, R06, R07, F01 | 5 |
| Slimer conversation F03 | 5 |
| Active team wait F04 | 5 |
| Team journey F06 or bicycle ride S01 | 5 |
| Reception negotiation H02 | 5 |
| Pipe route T01 | 5 |
| Records search T03 | 5 |
| T04 negotiate through | 10 |
| T04 use empty trap | 0; six captives, no later field catch |
| T04 retreat to T05 | 5 |
| C02 hold mechanism alone, arriving C03 | 5 |
| C02 team steadies mechanism | 0 |
| C02 catch three early arrivals | 0; trap spent |
| C11 verify roll | 5 |
| C05 wrong return circuit | 10, once |
| E05 rushed hotel access | 10; recovery available |
| C06 original delivery | 5 |
| C08 return to serve absent staff | 5 |
| C09–C10 controlled discharge and completion | 0; require at least 10 headroom entering C09 |

A direct solo postal/lobby completion costs **40**. A researched team completion costs **40**. A records/tunnel route using the trap at the blockade also costs **40**. All must retain 10 for controlled discharge: Hard has no spare on those routes; Medium has 15, allowing one 10-point mistake and a 5-point detour; Easy has 30. Extra time does not substitute for either evidence flag.

At C08, `copyRule && roster && margin >= 10` permits C09. Positive margin with missing evidence or insufficient discharge reserve leads to a qualified good ending, not an invented successful release. Zero or negative margin goes only to E06.

Cost-bearing arrival pages receive positive-margin choice guards and an E06 fallback. Exhaustive analysis proves R03, R05, R06, R07, F01, F03, T01, T03 and T05 cannot expire; they are explicitly excluded from generated unreachable guards. All other costly arrivals allow expired readings only while routing the player to E06. No unbounded state or replay loop exists.

## Page map

- **R01** job offer → R02 or E01.
- **R02** collection → R03 new evidence → **R04** finite investigation hub.
- **R05** post office → R04 or E04. **R06** Engine Nine → R04. **R07** diner → R08 or R04; **R08** service entrance → R04.
- **F01** reception → E02 / F02 / F04 / R04. **F02** equipment → F03 / R04 / F04. **F03** Slimer → R04 / F04.
- **F04** working wait → **F05** professional diagnosis → E07 or **F06** supported journey → C01.
- **S01** hotel arrival → H01 or known H04. **H01** lobby → **H02** manager → H03 or E05.
- **E05** recoverable setback → H03 apology, known H04 service stair, or E02 handover (explicit bicycle retrieval and ride).
- **H03** escorted stairs / **H04** service stair → C01.
- **T01** pipe entry → **T02** gallery → optional **T03** records → T02, or **T04** blockade.
- **T04** negotiate or trap → C01; retreat → **T05** → R04.
- **C01** cellar and loading-door catch → **C02** room and informed waiting decision → E03 or **C03** supervisor.
- **C03** → optional **C11** verified roll → C04, or straight to **C04** final act.
- **C04** receipt bank → C06; return bank → **C05** → C04 once; unused trap → E08.
- **C06** carrier received → **C07** notice read and acknowledgement decision.
- **C07** close receipt → E09 (team) / E10 (solo), or keep open → **C08** return and evidence check.
- **C08** complete evidence plus reserve → **C09** grid’s twelve → **C10** carried group and Tull’s final acknowledgement → E11.
- **C08** incomplete service, with positive reserve → E09 / E10; exhaustion → E06.

## Endings and capture accounting

| ID | Title | Kind / result |
|---|---|---|
| E01 | Clocked Out | Bad: unplayed mystery; legitimate refusal, no fabricated blame |
| E02 | Signed For | Good: commissioned handover accepted, safe custody, release file open |
| E03 | Left at the Desk | Bad: courier leaves without recipient acknowledgement; competent team subsequently delivers locally, missing staff still require release |
| E04 | Tomorrow’s Mail | Bad: knowingly chooses delayed lost-mail tracing; parcel quarantined, staff confined |
| E06 | The Reserve Gives Out | Bad: postal-section escape and recapture; main vault protected; earlier delivered notice is not undone |
| E07 | A Case Kept Open | Good: informed professional isolation, all 47 confined, explicit release work outstanding |
| E08 | A Full Trap | Good: remaining 35 trapped; original grid twelve still captive; public disturbance resolved, nobody declared free |
| E09 | The Work Between You | Good: player delivered with team support; grid twelve and any watch-trap three remain explicitly assigned to release work |
| E10 | The Next Delivery | Good: solo delivery; absent grid twelve and any trap cargo separately recorded; concrete follow-up |
| E11 | Everybody Off the Clock | Best: original, grid and trap recipients all acknowledged; no Night Mail clerk remains captive |

C11 counts **35 present + 12 grid**, **29 present + 6 trap + 12 grid**, or **32 present + 3 trap + 12 grid**. Tull is included in the present total. All final containment, partial delivery, emergency and early-abandonment paths explicitly account for carried captives or unused equipment. C09 releases only the named twelve; C10 handles the separate trap cargo before closing Tull’s original receipt.

## Focused regression routes

Route notation names page IDs, with an action where one destination has multiple choices. Persisted tests in `scripts/return-to-sender-regressions.test.ts` execute these cases through the real engine.

1. **Hard solo best, margin 10:** R01 R02 R03 R04 R05 R04 S01 H01 H02 H03 C01 C02 C03(hold) C11 C04 C06 C07 C08 C09 C10 E11.
2. **Hard team best, margin 10:** R01 R02 R03 R04 R05 R04 F01 F04 F05 F06 C01 C02 C03(team) C11 C04 C06 C07 C08 C09 C10 E11.
3. **Hard six-captive best, margin 10:** R01 R02 R03 R04 F01 F02 R04 T01 T02 T03 T02 T04 C01(trap) C02 C03(hold) C11 C04 C06 C07 C08 C09 C10 E11.
4. **Hard three-captive best, margin 10:** R01 R02 R03 R04 F01 F02 R04 R05 R04 S01 H01 H02 H03 C01 C02 C03(trap) C11 C04 C06 C07 C08 C09 C10 E11.
5. Add F03 after F02 in route 4 on **Medium**: E11 at margin 20 with the Slimer callbacks.
6. Add C05 C04 before C06 in route 1 on **Medium**: E11 at margin 15. On **Hard**, choose E10 at C07: ordinary success, margin 5.
7. Add E05 before H03 in route 1 on **Medium**: recover and reach E11 at margin 15.
8. Replace R05 with R06 in route 1 on **Medium**: C08 → E10 at margin 25 because the copy procedure is absent.
9. Skip C11 in route 1 on **Medium**: C08 → E10 at margin 30 because the verified roll is absent.
10. R01 R02 R03 R04 F01 E02 on **Medium**: safe commissioned handover, margin 55.
11. R01 R02 R03 R04 F01 F04 F05 E07 on **Medium**: professional isolation, margin 50.
12. R01 R02 R03 R04 F01 F04 F05 F06 C01 C02 C03(team) C04 E08 on **Medium**: informed full-trap ending, margin 45.
13. Route 2 stopping at C07 → E09 on **Hard**: qualified team success, margin 15.
14. Route 3 stopping at C02 → E03 on **Medium**: all six carried captives explicitly handed over, margin 45.
15. Route 1 plus C05 on **Hard**, attempting C08 rather than stopping at E10: E06 at margin 0; prose preserves the already-delivered original.
16. Route 1 plus E05 and C05 on **Medium**: C08 → E10 at margin 5; no controlled discharge offered.
17. E05 → E02 must show retrieval of the hotel-parked bike and ride to North Moore; direct F01 → E02 must not show that bridge.

Complete tested routes contain roughly **3,700–4,600 rendered words**, supporting approximately **18–25 minutes** with decisions. Early handover/containment endings intentionally finish sooner. Timing is an estimate, not a timed player study.

## Illustrations

Preserve all approved character, costume, canister, receiver-dial, bag and trap designs. The rewrite adds no new recurring characters.

**Regenerated existing pages (17):**

- F03: quiet empty-chair conversation replaces comic loop.
- F04: active notes/phone work replaces passive waiting and swatting.
- T03: a few clerks in a records room, not a hundred-clerk capture.
- T04: exactly six at the obstruction; no five-row blockade.
- C03: Tull at the attendance desk; optional trap/team cropped out.
- C04: neutral framing between two pipe mouths; cropped small group, no crowd pointing out the correct tube.
- C06: cropped receipt-tray delivery, compatible with all attendance counts.
- C07: Tull remains to hold the acknowledgement; only other clerks fade.
- E02: competent signed handover and storage case.
- E03: sealed carrier visibly on desk, outside receiving tray.
- E04: quarantined pending mail, not massive sorting chaos.
- E05: unrestrained recovery at reception.
- E06: isolated postal-section failure, not main-vault explosion.
- E07: deliberate isolation and case paperwork.
- E09: courier/team working handoff; Ray does not perform delivery.
- E10: quiet late-night receipt and unresolved case record.
- E11: quiet Monday desk/empty-chair payoff; no standing ovation.

**New images:** C08 (certifying paperwork), C09 (controlled service hatch), C10 (checking final column at intake), C11 (verified roll with Tull).

All twenty-one changed or new scenes have been generated with the approved references, visually reviewed and installed as 1200×800 WebPs. Source PNGs and pre-rewrite backups remain in ignored `art-src/`; exported scene prompts are in `image-prompts.md`.

R08 only needs prompt wording corrected to crop the off-frame ghosts; its existing counter composition remains usable. E08’s existing trap-capture composition remains valid. Other retained scenes preserve their existing composition; named visible recurring props were added to cast lists where necessary.

**New approved references:** the firehouse’s isolated postal section and controlled service hatch (E06/C09; dock described in C10), the plain shielded carrier-storage case (E02/E07), and postal paperwork (the courier book, notice, certified copy and attendance ledger). These are ordinary equipment and stationery, not replacements for the approved portable trap or receiver. Their reviewed WebPs and hashes are recorded in `references/manifest.json` before scene generation.

Merged illustrations exclude optional companions and optional carried equipment. In particular C01–C07 do not depict a team or trap that may not be present; the smaller cropped clerk groups fit every remaining count.

## Validation

- Final `npm run check`: type check plus all three exhaustive story checks passed without warnings; Return to Sender reached all 10 endings over 71,110 page/state combinations and 417,419 paths.
- Twenty persisted regression tests pass, including both E02 arrivals, every reachable expired arrival, and zero-versus-low-reserve prose. Independent continuity review passes after corrections to reserve wording and the player's outstanding countersignature.
- A complete Medium solo-best browser playthrough reaches E11 with 25 headroom, including C08–C11. All scene images load without placeholders or horizontal overflow. Legacy-save handling, preserved ending records, fresh saves, reload, Undo and mobile opening layouts have also been checked.
