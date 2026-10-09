# The Fratelli Run: story bible and outline

Story id: `fratelli-run`. Revision: **3**. A personal-use Goonies adventure set on Halloween, Thursday 31 October 1985, in Astoria, Oregon. **45 pages; 11 endings: six bad, five good, one best.** The original unnamed, gender-neutral fourteen-year-old remains the viewpoint character. No pirates or treasure plot.

## Premise and personal arc

A salt-weathered brass key is sewn into the player's two-dollar auction overcoat, formerly Papa Fratelli's. Mama hid it there before her arrest; the county inadvertently sold it. Its tag reads **7 · LOW WATER**. It opens locker seven in the surviving ice house beneath Seventh Street Pier. The locker contains two engraved copper printing matrices for counterfeit twenty-dollar bills. A press is replaceable machinery; the plates make restarting the operation possible.

The escaped Mama, Jake and Francis want the key. Failing that, they have a cutting torch. Mama arrives aboard the *Rosalie* at 9:15. Low water exposes the ice-house door at 9:41, when the bonfire and fireworks on the adjacent flats cover their work. The boat grounds on the falling tide; escape endings use the laundry van, not a boat that inconsistently floats free.

The player begins as the neighbor who hears about Goonies adventures afterwards. Mikey returns the key and makes clear that the player decides, while different people can do different jobs. The arc is learning to ask, listen, delegate and credit others. The best ending makes belonging visible through friends listening to the player's story.

## Ensemble and Sloth

- **Mikey** is the earnest thirteen-year-old organizer. He goes with his father to prepare the public bonfire area and locates Sheriff Pruitt after the nine o'clock shift change. The player chooses whether he arranges help at the flats or at the station.
- **Data** demonstrates the rope launcher in the attic before departure, with an immediate take/decline choice. He explains how to inspect supports and catches, then keeps lookout from the public side of the flats. His light becomes a route marker after an acknowledged signal.
- **Mouth** is the runner at the Lowline entrance throughout the detour phase. He takes map details and the depot's van number, leaves for the bonfire when the player commits to a route (or at nine if the player never returns), then clears the crowd and helps the player through. He passes on the player's last destination.
- **Chunk** goes home to Sloth first. His parents return before eight; if Sloth stays home, Chunk remains until they arrive before joining the bonfire. If Sloth volunteers, Chunk waits at the garage hatch until Sloth calls up that the player arrived, or until nine if the rendezvous fails. He then joins the others at the bonfire. Sloth has a household to return to even while Chunk is at the fire.
- **Sloth**, Mama's youngest son and Jake and Francis's brother, was kept hidden by his family. The Goonies helped him get free; he now lives with Chunk's family. He chooses the grate rendezvous, sets a stop rule and works its catch with the player. Hearing Mama's threat genuinely frightens him. At P05, a shared escape lets him choose to continue; an offer to head home lets him freely leave; asking him to hold off his brothers makes him refuse and go home. These outcomes remain distinct. His later “Sloth stay” is his decision, including in successful routes. His contribution includes local knowledge and choosing to stand with friends. Applause follows his freedom; it does not confer it.

Nobody waits overnight in a drain. No route puts Sloth physically with the player before U05→U06. Street arrivals omit him. F02 sends an accompanying Sloth home on surviving arrivals and clears `slothWith` on the choice to E09. On expired F02 arrivals he remains with the player; Francis explicitly gets through the grate's rusted corner and catches up before the capture recalled in E06. F02 introduces the tunnel dip and junction for street-route arrivals rather than assuming prior knowledge. E04 accounts for Sloth's rescue separately. Optional-companion merged illustrations exclude him; E11 guarantees him.

The garage's stop rule remains binding. P05 shows fear alongside Sloth's voluntary engagement—taking the player's hand and looking toward the door—rather than having him invoke “Stop” immediately before the continuation choice. “Whisper your plan and wait for his answer” is neutrally phrased; offering home remains a respectful ordinary-success route. Homeward updates are concrete and precede endings' closing paragraphs. E09 has its own mutually exclusive return updates and never appends the generic one.

## Clues, knowledge and accountability

1. D01's key tag connects to D04's poster: the foot of Seventh Street, low water at **9:41**, bonfire and fireworks. The ice house is tide-locked, not an arbitrary numbered bus locker.
2. D01's radio gives the **white laundry van with a blue stripe**, the **nine o'clock shift change**, and the guarded bonfire. T02's false deputy arrives in that van with a radio that can hear dispatch. His costume stays reference-locked, but the narration no longer announces the moustache is fake before the choice. The van and staffing facts are the fair clues.
3. D04 establishes **two flashes out, one back** and the public shortcut being underwater. P03's hidden wait includes overhearing the torch plan at nine. Signaling too soon at P03→P04 exposes the hiding place without a traversable approach. At P06, any flats-support player can signal after low water, including correcting an early attempt. The failed attempt still costs 10 and the useful acknowledgment costs 5. Choices do not state the full protocol or instruct the reader to wait for dry footing; the timing follows earlier geography and the changing tide.
4. T01's librarian explains the ice house and supplies a chart, reporting the location to dispatch. P01's iron door is visible on every route, as in the installed illustration. The chart identifies the safe stone sill leading from the catwalk to the door; an unprepared player must feel for that access. T05's mistaken depot visit yields a recorded van number and the inland escape direction, which Mouth relays and E09 pays off. It is a costly mistake with useful evidence.
5. U03 costs 15, but the inspection latch teaches a cheaper solo grate solution. Its choice cannot be repeated. The right branch can be inferred from river air without the optional map.
6. Adults receive reports rather than uniformly mocking children. D02 creates a record and brings a patrol to the auction buyers' addresses: the delay and reduced search exposure cancel, for zero net margin cost. T04→E03 is a legitimate limited good ending. With the chart, patrols hold the ice-house approaches and recover the intact stash; without it, Olafsen asks the librarian to trace the key and a later interception makes the Fratellis abandon the plates. All three criminals escape, so further adventuring still offers a materially fuller victory. E08/E09/E10/E11 explicitly report Mama's threat as well as the plates. E10 records the threat and notifies Chunk's parents whether Sloth accompanied the player, went home or stayed home; this does not replace or repeat his homeward update.
7. F03 distinguishes unprepared support, a chase arriving too close, and an uninterrupted pursuit without Sloth's distraction. Failed handoffs happen because Jake reaches the coat before the sheriff can receive the plates, not because small plates cannot fit through a crowd. E10 remains a voluntary sacrifice even for an eligible best-route player.

Source knowledge is explained in dialogue or concrete action: Goonies, Goon Docks, Fratellis, plates, Sloth, ice house, and Lowline. The player has no gendered name or pronouns.

## State and meter

`lead` remains the numeric engine flag; its visible label is **PURSUIT MARGIN**, `format: 'number'`. It measures scene-relative room to act before the search closes, **not minutes, a percentage, or a countdown to low tide**. D05 explains this. Calendar headers establish actual time. Hiding until nine has a fixed exposure/search cost.

| Flag | Values / meaning |
|---|---|
| `lead`, `difficulty`, `running` | Margin; easy/medium/hard; meter shown from D04 |
| `phoned` | D02 report made; auction-address patrol assigned, zero net margin cost |
| `teamPlan` | `flats` or `station`, chosen in D04 |
| `hasRope` | D06 demonstration accepted; never requires a return trip |
| `visitedSloth`, `slothPlan` | Garage visited; Sloth volunteered |
| `slothWith` | Accompaniment begins only at U05→U06; cleared on departure at P05 or F02→E09 |
| `slothChoice` | At P05 the player respects Sloth's choice either to continue or to go home; continued accompaniment separately requires `slothWith` |
| `signal` | `none`, `ready`, `early`, `timed`; flats support can become timed at P06 after either waiting or signaling early |
| `hasMap` | Library chart acquired |
| `visitedPolice`, `visitedDepot`, `visitedHideout`, `visitedCellar` | One-use detours / inspection-shaft discovery |
| `soaked`, `viaLowline`, `foundDoor` | Water exposure; underground approach; safe access to the visible door felt while wading |
| `crossing` | `none`, `rope`, `shelf`, `water`; selects the crossing action rendered at U05, reset to `none` on U06 entry |
| `squeezedGrate` | Distinguishes squeezing from lifting in U06's action; reset on P01 entry |
| `hasPlates` | Set on P07 arrival |

Flags are finite or monotone decreasing within bounded routes. Temporary action flags clear immediately after their last relevant scene to avoid multiplying later states. P02's retreat costs margin and eventually ends the run; U03 cannot loop. Guard generation protects every cost destination where expiration is reachable. Only E06 is available there at `lead <= 0`. Guaranteed-positive exceptions: D02, D05, D07, T01, T03, T04, T05, T06, T08, U01. Nonterminal expired destinations are listed in `clock.allowExpiredOn`.

| Action | Margin cost |
|---|---:|
| Initial police call | 0 net: reporting delay offset by the patrol restricting the search |
| Learn and take Data's launcher, in attic | 5 |
| Garage, library, police station | 10 each |
| Bus depot, old hideout | 15 each |
| Library chase | 15 |
| Lowline approach | 10 |
| Wrong fork / inspection shaft | 15 |
| Sump: launcher / shelf / wade | 0 / 10 / 15 |
| Grate: Sloth teamwork / rope or known latch / unaided catch / squeeze | 0 / 5 / 10 / 15 |
| Street approach: Marine Drive + boatyard | 20 + 15 |
| Hide and wait: charted/tested access / feel for access | 10 / 20 |
| Retreat from dangerous wading | 10 |
| Premature light signal | 10 |
| Timed signal and acknowledgment | 5 |
| Dash to bonfire / return via tunnels | 20 / 25 |

Starts: **Easy 135, Medium 105, Hard 90**. Clean best route costs **70**: rope 5 + garage 10 + Lowline 10 + search/wait 20 + timed signal 5 + dash 20. Library 10 saves 10 at the pier, so the map is optional and budget-neutral. An initial phone call does not change this budget. Best requires **20 remaining**, `teamPlan=flats`, `signal=timed`, `slothChoice=true`, `slothWith=true`, and the coordinated handoff at F03. Hard has no spare margin on that route; Medium permits one 15-point mistake; Easy permits three. A corrected premature signal costs 80 overall: Medium reaches E11 with 25, while Hard reaches the crowd with 10 and can take E10. A no-rope shelf crossing costs five more than the launcher itinerary, leaving ordinary good endings available on Hard.

Without rope, Sloth, map or detours, the careful solo Lowline route costs 70 to E10 (margin 20 on Hard), or 75 to E09 (15 on Hard). The street route costs 75 to E10 or 80 to E09. E08 and E07 remain available whenever P08 is reached alive. More margin alone cannot buy E11.

## Page map

All original IDs remain; no nodes added or removed.

- D01 porch/key → D02 call / D03 attic / E01 ignore.
- D02 → D03. D03 stakes and agency → D04.
- D04 assigns flats/station plan → D06. D06 takes/declines launcher before leaving → D05.
- D05 Mouth's hub → D07 garage, T01 library, T04 police, T05 depot, T06 hideout, U01 Lowline, T08 streets. No Data-return option.
- D07 → D08 volunteer / D05 family support. D08 rendezvous and stop rule → D05.
- T01 chart/report → T02 false deputy → E02 surrender / T03 chase / D05 side exit. T03 → D05.
- T04 report → E03 surrender key / D05 keep it. T05 van number → D05.
- T06 torch sighting → T07 cellar escape → U02. T08 gate → E05 / T09 boatyard → P01.
- U01 → U02 fork → U03 inspection shaft once → U02, or U04 sump.
- U04 crossing → U05 grate. U05 applicable opening method → U06 outfall → P01.
- P01 → P02 wade / P03 hidden wait / E05 deck. P02 → E04 dive / P01 retreat.
- P03 wait/overheard plan → P05 ready, or P04 premature signal → P05.
- P05 Mama arrives and threatens Sloth; continued accompaniment, freely chosen homeward departure, or rear-guard refusal → P06.
- P06 low water → P07 timed acknowledgment with flats support (including a corrected early attempt), or silent entry. P07 plates → P08.
- P08 → F01 flats / F02 tunnels / E08 destruction / E07 bargain.
- F01 → F03 crowd → E11 coordinated handoff when eligible / E10 release plates for safety. F02 → E09.
- Reachable expiration at guarded pages → E06.

## Endings and values

| ID | Ending | Type / consequence |
|---|---|---|
| E01 | Trick or Treat | Bad: ignoring key lets Fratellis recover it; statements follow |
| E02 | A Helpful Deputy | Bad: false deputy takes key; librarian reports theft |
| E03 | The Evidence Drawer | Good: official investigation secures plates; chart produces earlier intervention, all three criminals escape |
| E04 | High Water | Bad: river rescue, key lost, late search evaded; Sloth accounted for |
| E05 | Caught on the Pier | Bad: shed confinement; friends and sheriff help after crooks leave |
| E06 | No Room Left | Bad: exhausted margin, retrospective capture, key/plates taken; no location teleport |
| E07 | Just Asking Nicely | Bad: Mama gets plates and leaves town; Sloth can still refuse her |
| E08 | Gone with the Tide | Good: plates destroyed, crooks escape, loss reported; prevention without evidence |
| E09 | Chain of Evidence | Good: intact plates delivered, later roadblock arrests; slow victory, missed fireworks |
| E10 | Fire Night | Good: release plates to get safe, all three arrested, engraving ruined in fire |
| E11 | The Whole Town Watching | Best: coordinated handoff, intact evidence, all arrested, Sloth and ensemble credited |

## Focused regression examples

Twenty-eight persisted tests in `scripts/fratelli-run-regressions.test.ts` use the real engine's starting states, visible choices, effects and rendered passages. They cover all three difficulties, best-ending gates, signal correction, official reports, ordinary good endings, companion departure, selected-action rendering, temporary-state clearing, both bonfire-sacrifice arrivals, the threat report across E10 companion states, detour payoffs and expiration. Both solo and accompanied expired F02 arrivals verify Francis's catch-up before E06. The street-plus-garage Hard route costs 90 and correctly expires; its Medium variant remains viable.

| Route / distinguishing choices | Expected result |
|---|---|
| D01→D03→D04 flats→D06 take launcher→D05→D07→D08→D05→U01→U02 right→U04 launcher→U05 teamwork→U06→P01 search→P03 wait→P05 shared plan→P06 signal→P07→P08 flats→F01→F03 coordinated handoff | E11; Hard 20, Medium 35, Easy 65 |
| Same, with T01→T02 side exit→D05 before Lowline | E11 on Hard, still 20: map cost/save neutral |
| Same, with U02→U03→U02 wrong fork | E11 on Medium at 20; Hard reaches F03 at 5 with E11 unavailable |
| No rope, no Sloth, no map; shelf and unaided catch; no timed signal | Hard E10 at 20, or E09 via F02 at 15 |
| Prepared route, but P03→P04 early signal and no correction | Medium E10 at 30; no coordinated handoff |
| Same early signal, corrected at P06 | Medium E11 at 25; Hard E10 at 10 |
| Initial police call, then clean best | Hard E11 at 20; protective patrol and report record established |
| Key surrendered at T04, with/without chart | E03 good; plates secured, criminals escape; chart avoids the near-miss interception |
| Prepared route, but ask Sloth to stay behind at P05 | Sloth refuses; Medium E10 at 35, no companion or E11 |
| Prepared route, offer Sloth home at P05 | He freely leaves; Medium E10 at 35, `slothChoice=true`, `slothWith=false`, no E11 |
| Prepared shared-plan route, then F02→E09 | Medium E09 at 30; Sloth goes home, final accompaniment false |
| Prepared route, then P08 destruction / bargain | E08 / E07 at 55 on Medium; Sloth's choice retained |
| Street route after arranging unused Sloth rendezvous | Medium E09 at 15; Hard F02 at 0 permits only E06; no Sloth in scene |
| Direct street route, no optional detours | Hard E09 at 10 |
| Depot then solo Lowline, shelf, catch, tunnel return | Medium E09 at 15; van number paid off |
| Wrong fork without equipment, then known inspection latch and tunnel return | Hard E09 at 5 |
| Hard initial phone + launcher + garage + library chase + police + depot + hideout + inspection shaft | U03 expires at -5; only E06 |

Current Medium samples: clean best **4,197 prose words + 435 offered-choice words / 22 visits**; optional map route **4,751 + 514 / 25**; wrong-fork recovery **4,443 + 444 / 24**; ordinary solo bonfire route **3,138 + 303 / 19**. Counts use actual engine rendering. The 15–25-minute target remains an intention, not a timed-playtest result; the fuller library route may exceed it when readers deliberate and inspect art. D05 return visits now show a short arrival and only the relevant equipment/messages instead of repeating the full setup and meter explanation.

## Illustration changes

Existing character costumes, faces and key/plate geometry remain locked in `art.cast` and the approved reference sheets. The catch and shelf are local environmental details, not inventory items.

**These 14 scene images were regenerated and reviewed:**

| Pages | Reason |
|---|---|
| D05 | Mouth now present and keeping watch at the hub |
| D06 | Launcher on bench before optional acceptance, not already strapped on |
| D08 | Sloth chooses route; no player receiving chocolate as a lever for help |
| T04 | Sergeant holds key/report with two hands, receivers in cradles |
| T06 | Laundry van visible outside the yard through the doorway, never indoors |
| U02 | Remove optional map from merged arrival |
| U03 | Useful inspection catch replaces purely disappointed dead end |
| U04 | Show viable maintenance shelf/handrail crossing |
| U05 | Show catch/crossbar; framing excludes optional Sloth |
| P06 | Player waits to choose signal or entry, not already running |
| E04 | Rescue precedes bonfire; remove premature bonfire glow |
| E06 | Later porch aftermath replaces street-only capture |
| E10 | Warped plates, not a literal puddle of melted copper |
| E11 | Guaranteed Sloth with Chunk, ensemble on ground, Mama included in cast |

P02 and E02 prompt changes clarify cropping/companion absence without changing the event. T01 adds its already-visible key to cast; D04 removes Mouth from cast because the illustration crops him out. These do not themselves require new compositions. Preserve the deputy disguise reference; its prose introduction no longer telegraphs falseness.

The revision-2 independent continuity review passed. All fourteen installed WebPs were visually checked then; a complete browser best-route playthrough reached E11 with every image loaded and no horizontal overflow. Original PNGs and replacement backups remain in ignored `art-src/`.

Revision 3 preserves the illustrated staging and all image prompts. The P01 text now respects its visibly exposed door; the map and search concern safe access. U05/U06 describe the selected action before arrival at the unchanged illustrated location. E03 still opens with the key entering an evidence envelope at the desk; its doubtful pose is appropriate before the later official recovery is reported. E10 remains valid after either a forced or a voluntary evidence sacrifice. The first independent revision-3 review identified the F02 catch-up/geography defects, D04 destination wording and the P05 safe-word cue; all were corrected, along with valuable choreography and ending-polish findings. A fresh acceptance review is still required; the older stamp is not approval of these changes.
