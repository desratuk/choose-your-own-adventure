# The Midnight Signal — continuity review

## Round 1 — FINDINGS (not stamped)

- Reviewed: `stories/midnight-signal/story.ts` at merge `d05f36d`, sha256 `f1529fa36be132a9fa834f3292aeb19dc8a70adb5c876c0ee6efc72c783b913d`.
- Method: `.claude/agents/story-continuity-reviewer.md`. Every page read against every "Possible on arrival" flag set in `npm run -s story-dump -- midnight-signal`, checked against `CLAUDE.md` and `docs/midnight-signal/story-outline.md`.
- Passed without findings: the reserve arithmetic (clean best leaves 40/25/10; Medium survives exactly one 15-point error; the Hard shelter call blocks best), ending labels (E10 best; E02, E03, E05 and E07 bad), the clue chain (A05, B03, B04 and C03 feed D04/D05; A06 is optional because D03 is a free correction), the A02 spool/lamp event, cassette custody, and the unexplained physics in D08/E10.

Paragraph indexes are zero-based, as in the story dump.

### 1. C08 [0]: evacuation is never narrated on direct arrivals and the wording hedges
- **Trigger:** C02 "Ask for manual evacuation" or C04 "Leave the gates…" (`drained=false`), including C06→C04→C08 (`wrong=true`).
- **Defect:** On a direct arrival, the player asks for evacuation and the next sentence says the crew are already safe in the shelter. The rescuers' arrival and the wait in between are covered only by "If the gates were left alone, the rescuers used…", which tells the reader about other routes. That sentence also appears on the C05/C07 route, where the gates were operated. On the C06 route Jo did work the gates, so the "left alone" condition misdescribes what happened.
- **Fix:** Split [0] on `drained`. If not drained: "Jo leaves the levers locked. Twenty minutes later the road rescue team arrives through the covered passage; you stay in the gallery while they bring Ellis, Nessa and Kit along the upper service connection to the brick shelter. Nobody enters the lower chamber." Otherwise: "With the handover complete, the three Petrel crew are safe in the brick shelter."

### 2. A07 [1]: hill repeater, its acknowledgement and "the little tone" assumed without A06
- **Trigger:** A04→A07 with `wiring=false`.
- **Defect:** The text says the repeater's acknowledgement "was already audible on low power" and that "the little tone could have established" it. On this route the player has never heard of the repeater, its two ticks or the tone generator. "Repeater" is defined only in A06, but C10 [2] and D02 [0] rely on it, so a newcomer on a `wiring=false` route never gets a definition.
- **Fix:** In A07, have Mara say: "The hill repeater (a mast that relays our signal across the valley) answers a low-power test tone with two ticks; this proved nothing that tone couldn't." Also add a short definition to C10 [2], e.g. "the hill repeater, the unattended mast that relays Gull's signal beyond the harbour".

### 3. A04 [1]–[2]: gates, basin and workshop mentioned before they are introduced
- **Trigger:** All arrivals. A04 always comes before B01.
- **Defect:** Mara talks about "a remote gate cycle", "the council will close the basin" and "keeping their workshop open". The player knows only that the crew are "checking a pump chamber" (A03). The repair basin, its gates and the workshop first appear in B01 and later.
- **Fix:** In A04 [1], before the costs, have Mara explain: "The pump chamber Petrel's crew are checking sits beside the harbour's old repair basin. Its water gates and the boat workshop below run from this bank." Then "the basin" and "their workshop" refer to something the reader knows.

### 4. C04 choice / C06 [0]: "Open the sea inlet fully" when the inlet is already open
- **Trigger:** All C04 arrivals.
- **Defect:** B10 [3], C01 [0] and C03 [0] all say the inlet is OPEN. Opening it "fully" and C06's "Jo opens the inlet" then changes nothing, yet causes a surge. A careful reader notices the mechanics don't add up.
- **Fix:** Make B10/C01/C03 say "partly open" or "jammed open a hand's width". Alternatively, change the wrong option to "Open the basin outlet first, then close the sea inlet" and rewrite C06 [0]: the outlet opens while the inlet is still open, and the surge drives through the basin. Either fix keeps the B04 rule as the deciding clue.

### 5. C04 [2]–[3]: return from C06 contradicts the log and the gate history
- **Trigger:** C06→C04 (`wrong=true`).
- **Defect:** C06 ends with the failed sequence logged and "You turn to a fresh line". C04 then says "You put your pencil on the first line of the log" and offers an alternative "if you do not want to operate the gates", although the gates have just been operated.
- **Fix:** Change [2] to "the next line of the log". Add a conditional to [3] when `wrong`: "The failed attempt is already recorded above. You can propose a corrected sequence, or stop operating the gates."

### 6. A08 [0]: "matching" coats are different colours
- **Trigger:** All arrivals.
- **Defect:** Jo wears a rust-orange coat and hands the player a "matching plain yellow loan raincoat".
- **Fix:** Drop "matching": "a plain yellow loan raincoat from the office hook".

### 7. D01 [0], D02 [2], D04 [3]: "the evidence tape" / "the tape" when no copy exists; vague "it"
- **Trigger:** `copy=false` (A05 skipped).
- **Defect:** There is no evidence cassette. The call exists only on the logger, which A05 calls continuously running and C08 says is looping over the section, yet D02 has Mara "leave the tape stopped". In D04 [3], "the people it might have trapped" points at "the tape".
- **Fix:** Make the tape references conditional on `copy`, or use "the report"/"the record" throughout. In D04 [3], write "…and the people tomorrow's message warned about are already safe."

### 8. E01 [1], E02 [1]: "upper lobby" never introduced on these routes
- **Trigger:** A03→E01 and A03→E02.
- **Defect:** The upper lobby, and Jo's instruction to wait there, first appear in B01. On these routes the player last heard that the crew were "checking a pump chamber" with no instruction about where to wait.
- **Fix:** E01: "Jo had told the crew to wait in the upper lobby above the pump chamber, away from the rising water, and they were brought out safely." E02: "Jo keeps the Petrel crew waiting in the upper lobby above the flooding chamber…"

### 9. D08 [2]: comparing against a sealed copy
- **Trigger:** All arrivals (only from D05).
- **Defect:** D05 [1] seals the copy with the evidence as an authenticated record. D08 then has Mara compare the new tape with the "sealed earlier copy", which would mean playing the sealed tape.
- **Fix:** "Mara compares the new message with the earlier call on the logger before it loops. They do not match." Or: "…with her transcript of the sealed copy."

### 10. E04 [0]: "the service shelter" on arrivals that never reached it
- **Trigger:** A08, B02 or B07 → E04, where B08 is unvisited.
- **Defect:** "the harbour office, or the service shelter once the relief worker reaches it" names a place this player has never seen. The either/or also reads as if the narrator is covering several routes at once.
- **Fix:** Use a `shelter` condition (true only via B09): if shelter, "Jo leaves you in the brick shelter until the relief worker arrives"; otherwise, "Jo leaves you at the harbour office desk with the relief worker".

## Verdict

FINDINGS: 10. Not stamped. Re-run the reviewer after fixes and `npm run check`.

## Round 2 — FINDINGS (not stamped)

- Reviewed: `stories/midnight-signal/story.ts` from fix commit `e4a1fae` on integration `50d33d0`, sha256 `c1db3825e489ba9b14e4a659793e8e3e85e4570bef6915e653831c91c4ba28b3` (verified).
- Reviewer: Claude Opus 5.5 (`claude-opus-5-5`), run as review sub-agent. The model is verified from the runtime; the medium reasoning setting was requested but cannot be independently verified from inside the session.
- Method: `.claude/agents/story-continuity-reviewer.md`. Read the whole story dump, all 46 pages, against every "Possible on arrival" flag set. Checked against `CLAUDE.md`, the bible and its round-1 response. Checked the reader's choice rendering in `src/engine/engine.ts` (`visibleChoices` hides any choice whose condition fails). Scanned the image briefs for mechanical and route validity. `npm run check` was not re-run here; this worktree has no `node_modules`, so the dump was produced with the main checkout's `tsx`.

### Round-1 findings: verification

All ten are resolved.
1. C08 [0] now branches on `drained`. The undrained text narrates locking the levers, the wait, the rescuers' arrival and the evacuation, and it is valid after C02, C04 and C06→C04. The drained text follows C07 cleanly.
2. A07 [1] defines the repeater, its two ticks and the low-power tone. C10 [2] defines the repeater again for routes that skipped A06 and A07.
3. A04 [1] introduces the pump chamber, repair basin, water gates and workshop before the costs.
4. B10 [3], C01 [0] and C03 [0] all give the inlet as partly open, and C06 [0] widens it while the outlet stays shut. The C04 and C06 briefs agree. See new finding 2 for the state after C06.
5. C04 [2] now uses "the next line". [3] acknowledges the failed attempt when `wrong` is set.
6. A08 [0] no longer calls the yellow coat "matching".
7. D01 [0], D02 [2] and D04 [3] are route-neutral, and D04 [3] has a clear referent.
8. E01 [1] and E02 [1] introduce the upper lobby spatially.
9. D08 [2] compares against Mara's transcript, which A02 [1] establishes.
10. E04 [0] branches on `shelter`; the ELSE branch names only the harbour office.

Also passed: the reserve arithmetic (clean best costs 60 and leaves 40/25/10; Medium survives exactly one fifteen-point error, including C06 recovery: 55→40→20→10 at D05; Hard shelter blocks best), D04/D05 gating against the bible, ending labels and outcomes, cassette custody, the timeline (late 17 October to 00:12 on the 18th to morning), speaker clarity, introductions, and the clue chain with no back-pointing at C04.

### 1. C04 [3] (with C02 [0] and A04 [1]): stated gate-cycle cost disagrees with the hidden-choice threshold
- **Trigger:** C04 reached with charge 16–20. For example, Hard with A05+A07+B03+B04+B08+B09+C03 arrives at 20, and Medium with A07+B05+A05+B03+B04+B08+B09+C03 arrives at 20; in both cases `wrong=false`. Also C06→C04 with charge ≤20 (`wrong=true`; C06 arrivals include 20, 15, 10 and 5).
- **Defect:** A04 [1] and C02 [0] say a complete gate cycle costs twenty, and the gauge can read 20. But C05 requires `charge ≥ 21`, and the reader hides unmet choices. With `wrong=false`, the player sees only the wrong sequence (C06) and evacuation, although the prose says they can afford the correct cycle. With `wrong=true`, C04 [3] says "You can propose a corrected sequence" while only evacuation is shown.
- **Fix:** In C02 [0], state the cut-out: "…for twenty reserve points; its safety cut-out won't start a cycle that would leave the bank empty." In C04 [3], add a `charge < 21` branch for both `wrong` states, e.g. "The bank no longer covers a full cycle with its safety margin. Evacuation is the remaining choice." Also consider hiding C06 when C05 is unaffordable, so the only gate option offered is never the wrong one. Otherwise, at 20 the wrong order is the only gate operation available.

### 2. C05 [0]: after C06, the inlet is already shut by hand, but C05 closes it again
- **Trigger:** C06→C04→C05 (`wrong=true`).
- **Defect:** C06 [0] says Jo "shuts the inlet by its manual wheel", and E05 [0] confirms "the inlet has been shut manually". C05 [0] then has Jo "closing the inlet before opening the outlet" and says "They move this time". On this route the inlet rod should not move. "The manual remote drive" also contradicts C02's "remote drive" and the manual stop wheel, which reads as if Jo used the manual mechanism.
- **Fix:** Make C05 [0] conditional on `wrong`. If wrong: "Jo checks that the inlet is still locked shut from the manual wheel, then runs the remote drive to open the outlet. You read the outlet rod aloud as it moves; the drive has bypassed the faulty timer coupling." Otherwise keep the current text, changing "the manual remote drive" to "the remote drive" in both branches.

### 3. E09 [2] and its image brief: labels for both socket destinations when the black socket's destination was never learned
- **Trigger:** `wiring=false` and D01→D02 directly (blue chosen first, D03 not visited), then D04→D06→E09.
- **Defect:** "You write the two patch-socket destinations on fresh labels" assumes the player knows where the black socket goes. That is established only in A06 [0] or D03 [0]. On this route the player has learned only that blue reaches the hill repeater. The brief at story.ts:1377 also asks for "freshly labelled black and blue sockets".
- **Fix:** Write a statement valid on every route: "You write HILL REPEATER on a fresh label above the blue socket before your shift ends." Change the brief to "freshly labelled blue socket".

## Round 2 verdict

FINDINGS: 3. Not stamped. After fixing these, run `npm run check` and the reviewer again.

## Round 3 — FINDINGS (not stamped)

- Reviewed: `stories/midnight-signal/story.ts` from fix commit `4639043` on integration `7998933`, sha256 `fad60b7f6272a46ee8c0756248c5e1fa5779c50b004b36fe418806f256aa9807` (verified).
- Reviewer: Claude Opus 5.5 (`claude-opus-5-5`), run as review sub-agent. The model is verified from the runtime; the medium reasoning setting was requested but cannot be independently verified from inside the session.
- Method: `.claude/agents/story-continuity-reviewer.md`. Read the whole story dump, all 46 pages, against every "Possible on arrival" flag set and every conditional rendering. Checked against `CLAUDE.md`, the bible, and its round-1 and round-2 responses. Checked all 46 image briefs against every merged arrival. This worktree has no `node_modules`, so the dump was produced with the main checkout's `tsx`. `npm run check` was not re-run here; the author reports a pass.

### Round-2 findings: verification

All three are resolved, and the round-1 fixes remain intact.
1. A04 [1] and C02 [0] state the cut-out (full twenty-point cycle plus one point). Both C04 powered options require 21 or more. C04 [3]–[5] split exhaustively on `charge ≥ 21` / `≤ 20` and on `wrong`, and the low-charge branch says that evacuation is the only choice. At 21 or more, neither option is hinted at. C06 [2] is consistent with both outcomes.
2. With `wrong` set, C05 [0] keeps the inlet shut and moves only the outlet. The "manual remote drive" wording is gone. The C05 waterline brief is valid on both routes.
3. E09 [2] and its brief label only the blue socket as HILL REPEATER, which is valid when `wiring=false` and D03 was skipped.

Also passed: the reserve arithmetic (clean best 60, leaving 40/25/10; Medium survives exactly one fifteen-point error, including C06 recovery 55→40→20→10; Hard with the shelter call blocks best), the D04/D05 gates, ending labels, cassette custody, the timeline, speakers, introductions and the clue chain.

### 1. B03, B04, B08 (and B05 [1]): reserve drops with no powered action, against A04's own power rule
- **Trigger:** Any route taking B02→B03 (−5), B02→B04 (−5) or B07→B08 (−10).
- **Defect:** A04 [0] says the bank feeds only "the station's portable test socket and the harbour's remote controls", and that "ordinary lights … have separate batteries". On every other paid page the prose names what drew the charge: A05 the powered bench, A07 the transmitter, B09 the powered line, C03 the inspection lamp, D05 the transmission. B03 has the player open a paper register and copy entries, and the visible RESERVE BANK still falls by five. B04 reads a paper drum and a pencil record. B08 is a walk along a passage. None of the three names any equipment on the bank. B05 [1] blames "the passage lights", which A04 [0] has just said run on separate batteries. In a story that tells the player "the reassuring thing about a meter is that it tells the truth", these drops look like bookkeeping errors.
- **Fix:** Name the draw in each page, and widen A04 [0] to cover it. In A04 [0], write "…the station's portable test socket and the harbour's remote controls, gauges and passage door interlocks." Then:
  - B03 [2]: "Jo switches on the remote listening line to the pump house; through its speaker the pump gives its uneven little announcement…"
  - B04 [1]: "Jo powers the remote basin gauge, and you take a fresh pair of readings…"
  - B08 [0]: "Jo releases the powered flood door at each junction before waving you forward."
  - B05 [1]: replace "The passage lights and gate check" with "The passage door interlocks and the powered viewing-gate lock".

### 2. C08 [2]: the generator is credited to the "road crew"; everywhere else the relief team brings it
- **Trigger:** All C08 arrivals.
- **Defect:** C08 [2] says "The road crew's portable generator can power the station later." The only group arriving by road is the road rescue team (B07 [2], C08 [0]). A04 [1], D05 [1], D06 [2], D07 [2] and E09 [0] all have the relief team bring the generator. The reader is given two different owners, and "road crew" is never defined.
- **Fix:** Change it to "The relief team's portable generator can power the station later…"

### 3. E07 [0]: the inspector "calls later" although Jo is still holding the line
- **Trigger:** D01→D03→E07 (every E07 arrival).
- **Defect:** D03 [0] and [2] have Jo on the telephone with the inspector, who "waits" on the line. E07 [2] repeats that someone "was still waiting at the far end". But E07 [0] says "The inspector's telephone call arrives a little later". That implies the line had closed and the inspector rang back, which contradicts both D03 and E07 [2].
- **Fix:** In E07 [0], write: "Jo, still on the line, relays the inspector's answer: no report was received."

## Round 3 verdict

FINDINGS: 3. Not stamped. After fixing these, run `npm run check` and the reviewer again.
