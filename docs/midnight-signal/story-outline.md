# The Midnight Signal — story outline

Revision 1. Original family-friendly coastal mystery, Greyhaven, 17–18 October 1986. Unnamed gender-neutral teenage radio volunteer. 46 pages, ten endings (six good, four bad), exactly one best (E10). A complete evidence route reads about 4,600 words: approximately 18–23 minutes at 200–250 words/minute, plus choices. Short safe exits intentionally finish sooner.

## Canon and causal model

Gull Radio occupies the upper floor of the old customs house; the harbour office is downstairs. Mara Vale remains at Gull. Harbour keeper Jo Fen escorts the player on dry covered routes. Petrel is a maintenance launch at the west pier; its three crew (Ellis Ward, Nessa, Kit) are ashore at the repair basin. The early voice identifies a boat, not its physical position. Characters are introduced before naming; no player name or gender is assigned. Player borrows a yellow raincoat at A08, carries a pencil/notebook, never carries the copied cassette (Mara keeps it).

The 00:12 distress call from 18 October is heard late on 17 October, before midnight. The falling red spare spool and extinguished lamp establish an apparent genuinely early signal. Its ultimate physics remains unexplained, explicitly; it is not evidence of a saboteur. The crew's potential accident is preventable: Jo tells them to wait in the upper lobby with the door wedged. No choice puts the player in floodwater. All outcomes keep people alive; bad endings lose useful work through misinformation or an incomplete operation.

A cracked timer coupling pin leaves the sea inlet partly open while the timer indicates closed. Rainwater accumulates behind the closed basin outlet. The outside sea is falling but surges remain possible. Close inlet FIRST, open outlet SECOND. Jo handles machinery. At C05 the remote drive bypasses the timer, drains the basin and rescuers arrive; C06 wrongly widens that partly open inlet before working the outlet, then is immediately stopped manually, costs fifteen, and can be corrected once. On C08 direct arrivals, the rescue team evacuates through the dry upper connection. A survey closure is responsible ordinary success; full verified evidence plus controlled drainage enables targeted repair, test and reopening the next morning.

## Clues and evidence

| Source | Fact/action | Payoff |
|---|---|---|
| A02 | Future call knows red spool/lamp event | Reason to investigate without claiming certain disaster |
| A05 (5) | Preserve separately labelled early call with actual receipt time | `copy`, authenticated original for repair packet |
| A06 (0) | Black = local return, blue = hill aerial; two-tick acknowledgement | D01 blue connection; D03 free correction; `wiring` records visit only, not arbitrary ending gate |
| B01/B07 | Crew ashore, boat moored; three names; stay above landing | Correct location and safety established on all basin routes |
| B03 (5) | Pier two strokes; pump three knocks, confirmed audibly | `code`, observed sound-register evidence |
| B04 (5) | Outside falling, basin rising; close inlet before opening outlet | `tide`, signed paired readings; informs C04 choice |
| C03 (5) | Timer closed, gate open, cracked numbered pin | `pin`, photograph and signed note, Jo leaves pin undisturbed |
| C05 (20) | Verified controlled drain | `drained`, physical successful operation required for targeted repair |
| D02 | Repeater acknowledgement plus inspector readback | Transmission actually leaves building |
| D04/D05 (10) | All four evidence parts + drain + twenty available | Send record, preserve ten holding charge; best ending |

No clue-acquisition flag is used to change the physical drain result. A guessed correct sequence can rescue people. Full reopening needs an authenticated dossier, not just correct guesses. Full-power A07 and pier B05 are plausible fifteen-point errors. Wrong gate C06 also costs fifteen and can recover. C04 does not repeat the correct sequence just before selection.

## Reserve arithmetic and difficulty

Reserve is shared electrical capacity, not elapsed minutes; percentage displayed. Starting Easy 100, Medium 85, Hard 70. Four evidence detours cost 5 each (20 total): copying the call, a powered inspection-line check of the pump sound through the crew’s intercom, a second powered inspection-line check obtaining the crew’s current basin-scale reading alongside the local sea trace, and the inspection photograph. Two basin-passage entry-lock releases cost 10. Correct drain costs 20. Evidence upload costs 10, needs 20 before starting to leave 10 holding power. Clean best total **60**, remaining **40/25/10**. Medium allows exactly one 15-point error; Hard none. The pier detour spends 15 on two entry-lock releases and a powered test of the still-closed viewing gate lock. Passage return uses ordinary inside handles and spends nothing. Ordinary lights and safety radios run on separate batteries. The powered inspection line is switched off between checks; reading paper is free. Optional shelter telephone costs 5 and may trade away best reserve on Hard. Wiring test costs zero (low-level test; same as D03). Travel back and records handling cost zero.

All charge-spending detours require at least cost+1. Both powered gate choices require at least 21: the cut-out reserves the full twenty-point cycle plus one remaining point before it permits a start, even though an aborted wrong cycle spends only fifteen. At 20 or below C04 offers evacuation only and says so. D05/D06 require >=20. At low charge, manual evacuation, telephone handover and safe endings remain available; no non-ending page expires. Charge never increases. One-use investigation flags bound hub loops. `wrong` prevents repeating C06. Other state: `test`, `pier`, `shelter` prevent repeated optional costs; `wiring` prevents repeated free test; `drained` records actual operation.

## Complete route examples

Best: A01→A02→A03→A04→A05→A04→A06→A04→A08→B01→B02→B03→B02→B04→B02→B07→B08→B10→C01→C02→C03→C02→C04→C05→C07→C08→C09→C10→D01→D02→D04→D05→D08→E10.

Ordinary manual rescue: opening→A08→B01→B02→B07→B08→B10→C01→C02→C08→E06. Telephone handover extends C08→C09→C10→D07→E08. Any missing evidence component blocks D05 but still permits partial D06 with enough reserve. D03→D02 is a zero-cost receiver-check correction. Early handover A03→E01, safe supporting role A08/B02/B07/B09→E04.

## All routes and meter mutations

- **A01 — The Weather Slot** (station): A02 Raise the harbour receiver.
- **A02 — A Voice Ahead** (station): A03 Call the harbour office downstairs.
- **A03 — Ask Someone Living** (station): A04 Work with Jo and Mara; E01 Hand the notes to the adults and go home with the relief driver; E02 Put the unverified call straight on air.
- **A04 — The Reserve Bank** (station): A05 Copy the strange call onto a labelled cassette [cost 5] [gate {"all": [{"not": {"flag": "copy", "is": true}}, {"flag": "charge", "gte": 6}]}]; A06 Trace the receiver and transmitter sockets [gate {"not": {"flag": "wiring", "is": true}}]; A07 Try the transmitter at full power [cost 15] [gate {"all": [{"not": {"flag": "test", "is": true}}, {"flag": "charge", "gte": 6}]}]; A08 Take the stairs to Jo.
- **A05 — Keep the Original** (station): A04 Return to the reserve alcove.
  Arrival sets: {"copy": true}.
- **A06 — Where a Wire Goes** (station): A04 Return to the reserve alcove.
  Arrival sets: {"wiring": true}.
- **A07 — An Impressive Needle** (station): A04 Return to the reserve alcove.
  Arrival sets: {"test": true}.
- **A08 — The Stairs Between** (harbour): B01 Examine the harbour duty desk; E04 Stay with the office relief crew.
- **B01 — Nobody Missing Yet** (harbour): B02 Study the desk before leaving.
- **B02 — The Harbour in Paper** (harbour): B03 Check the harbour sound register [cost 5] [gate {"all": [{"not": {"flag": "code", "is": true}}, {"flag": "charge", "gte": 6}]}]; B04 Compare the two water readings [cost 5] [gate {"all": [{"not": {"flag": "tide", "is": true}}, {"flag": "charge", "gte": 6}]}]; B05 Inspect the boat at the west pier [cost 15] [gate {"all": [{"not": {"flag": "pier", "is": true}}, {"flag": "charge", "gte": 6}]}]; B07 Call the waiting crew together; E04 Leave the investigation with the relief crew.
- **B03 — Three Knocks** (harbour): B02 Return to the harbour desk.
  Arrival sets: {"code": true}.
- **B04 — Two Different Waters** (harbour): B02 Return to the harbour desk.
  Arrival sets: {"tide": true}.
- **B05 — The Boat Is Not the Crew** (harbour): B06 Return to the office with Jo; E03 Insist the rescue service search only the boat.
  Arrival sets: {"pier": true}.
- **B06 — A Better Address** (harbour): B02 Reconsider the desk records.
- **B07 — Keep the Door Open** (harbour): B08 Take the covered basin passage with Jo [cost 10] [gate {"flag": "charge", "gte": 11}]; E04 Remain with the office relief team.
- **B08 — Under the Quay** (basin): B10 Continue to the gallery door; B09 Check in from the shelter telephone first [cost 5] [gate {"all": [{"not": {"flag": "shelter", "is": true}}, {"flag": "charge", "gte": 6}]}].
- **B09 — A Place to Wait** (basin): B10 Join Jo at the gallery door; E04 Wait here for the rescue crew.
  Arrival sets: {"shelter": true}.
- **B10 — Before the Handle** (basin): C01 Read the control gallery with Jo.
- **C01 — What the Future Left Out** (basin): C02 Examine the gate controls.
- **C02 — A Handle and a Record** (basin): C03 Document the timer coupling [cost 5] [gate {"all": [{"not": {"flag": "pin", "is": true}}, {"flag": "charge", "gte": 6}]}]; C04 Choose the gate operation; C08 Ask for manual evacuation.
- **C03 — The Crack in Monday** (basin): C02 Return to the controls.
  Arrival sets: {"pin": true}.
- **C04 — Which Water First** (basin): C05 Close the sea inlet, then open the basin outlet [cost 20] [gate {"flag": "charge", "gte": 21}]; C06 Open the sea inlet fully, then work the outlet [cost 15] [gate {"all": [{"flag": "charge", "gte": 21}, {"not": {"flag": "wrong", "is": true}}]}]; C08 Leave the gates and arrange manual evacuation.
- **C05 — A Line Begins to Fall** (basin): C07 Help with the handover.
- **C06 — The Wrong Direction** (basin): C04 Return to the operation choice; E05 Leave the outlet closed and call the job finished.
- **C07 — Three Across** (basin): C08 Decide what to preserve.
- **C08 — People Before Paper** (basin): C09 Return to Gull with Jo; E06 Finish with the rescue team.
- **C09 — The Safe Way Back** (harbour): C10 Lay out the record at the studio desk.
- **C10 — What Is Actually Here** (station): D01 Prepare a repeater transmission; D07 Let Jo make the telephone report.
- **D01 — The Needle Is Listening** (station): D02 Patch the lead to the blue socket; D03 Patch the lead to the black socket.
- **D02 — The Far End Answers** (station): D04 Check the evidence and reserve.
- **D03 — A Room Talking to Itself** (station): D02 Move the lead to the blue socket; E07 Play the evidence into the black socket and close the desk.
- **D04 — A Packet With No Inventions** (station): D05 Send and preserve the complete repair record [cost 10] [gate {"all": [{"all": [{"flag": "copy", "is": true}, {"flag": "code", "is": true}, {"flag": "tide", "is": true}, {"flag": "pin", "is": true}, {"flag": "drained", "is": true}]}, {"flag": "charge", "gte": 20}]}]; D06 Send a truthful partial report [cost 10] [gate {"flag": "charge", "gte": 20}]; D07 Use the telephone report.
- **D05 — Read Back the Evidence** (station): D08 Listen to midnight arrive.
- **D06 — An Honest Incomplete Report** (station): E09 Leave the next shift a clear record.
- **D07 — The Ordinary Telephone** (station): E08 Help the relief team finish the night.
- **D08 — The Message That Changed** (station): E10 Welcome the morning shift.
- **E01 — The Responsible Handover** (station): good ending.
- **E02 — Everyone Calls at Once** (station): bad ending.
- **E03 — Searching the Name** (harbour): bad ending.
- **E04 — A Useful Pair of Hands** (harbour): good ending.
- **E05 — A Closed File, an Open Problem** (basin): bad ending.
- **E06 — Three Is the Important Number** (basin): good ending.
- **E07 — Only Gull Heard Gull** (station): bad ending.
- **E08 — A Morning Survey** (station): good ending.
- **E09 — Received, With Gaps** (station): good ending.
- **E10 — Tomorrow, Repaired** (station): good ending / BEST.

## Presentation and illustration contract

Existing basic header and VHS transition; fully scoped petrol-blue, amber and sea-glass theme. Every page has a different route-valid environmental illustration brief. This pack deliberately uses atmospheric first-person object/architecture compositions with no visible people, preserving the unnamed player's identity and avoiding optional-companion contradictions. Optional evidence is omitted on merged pages; C03 may show the guaranteed new photograph, D05/D08/E10 the guaranteed sealed complete record. The cassette remains at Gull; the boat remains empty at the pier. No scene implies repair before E10.

Reference inventory must cover radio hardware/room, ordinary paper props and red spool, harbour office/tide apparatus, pier/launch, basin passage/shelter, and gate hardware/upper lobby. Sheets approved visually and hashed before scene export. Each of 46 final scenes generated separately with its mapped reference files attached and individually inspected; no placeholders or duplicated stand-ins. Unreviewed refs have no reviewedSha256. Independent continuity stamp is required and is not written by this implementation owner.

## Validation and ownership

Owned: stories/midnight-signal/, docs/midnight-signal/, scripts/midnight-signal-regressions.test.ts and minimal stories/index.ts registration. Parent integrates main and shared documentation/revision assertion. Known shared editorial test assumes non-Player-Two revision 3; new story correctly remains revision 1. Run npm run check, focused regression, npm run test:story, npm run test:art after reference approval, build and browser image QA when art is complete. No main merge or push by this owner.

Runtime verified through T3: provider codex, model gpt-6-astra. Runtime instruction reports medium reasoning; model catalog also exposes medium as current for Astra. This is manuscript/illustration implementation, not an independent continuity pass.

## Round 1 continuity response

All ten findings in continuity-review.md addressed; this response is not a reviewer pass. C08 now narrates the rescue team's arrival and evacuation on undrained paths and uses a completed-handover paragraph after C07. A07 and C10 define the repeater independently of the optional wiring test. A04 introduces the repair basin, gates and workshop before their budgets. Initial inlet position is explicitly partly open; C06 widens it while the outlet remains shut, then Jo manually closes it. C04 uses the next log line and acknowledges a prior failed attempt via `wrong`. The player's loan coat is yellow, not described as matching Jo's rust-orange coat. D01/D02/D04 refer to the report rather than assuming a copied cassette; D08 compares against Mara's transcript without unsealing the evidence. Early endings introduce the upper lobby spatially. E04 branches on `shelter`, narrates supervised waiting, and merges at the customs-house return.

C04's static illustration now omits readable log/gate state so it remains valid after the wrong-gate recovery; D04 omits tape transport/cassette to remain valid without a copied call. The six approved reference designs and hashes remain unchanged.

## Round 2 continuity response

All three findings addressed for new independent review; no pass asserted. A04/C02 explain the existing safety cut-out and the full-cycle starting reserve. Both C04 powered sequences now share the >=21 starting threshold. Low-charge C04 arrivals (including after an aborted operation) explicitly have evacuation as their only remaining choice. C05 distinguishes first operation from recovery: after C06 the inlet stays shut and only the outlet rod moves. Its waterline illustration shows only the resulting falling water, valid on both routes. E09 labels only the verified blue hill-repeater socket, in prose and its regenerated scene brief. The approved reference sheets remain valid and unchanged.

## Round 3 continuity response

All three findings addressed for new independent review; no pass asserted. A04 now names the full shared-bank scope: station recording/tests, harbour remote controls, powered inspection line, and passage entry locks. B03 spends five verifying the registered pump sound through the existing desk handset and upper-lobby intercom; B04 spends five obtaining Ellis’s current basin-scale reading over that same line while reading the local sea trace. Neither paper inspection nor ordinary lamps consume reserve. B08 spends ten releasing two entry locks; B05 spends fifteen releasing two pier-passage locks and testing the viewing-gate lock without opening it. Inside mechanical handles permit free return and safe egress, so no return-path draw is implied. All route budgets and gates remain unchanged.

Existing handset and door/gate designs suffice. Lock mechanisms are concealed in existing frames and the distant water-level scale is not illustrated. B03/B04/B05/B08 briefs explicitly preserve those crops; art.cast and all six approved reference sheets/hashes remain unchanged. The relief team consistently brings the generator. E07 keeps Jo on the existing inspector call rather than inventing a callback.
