# The Last Skyway: continuity review, round 1

- **Verdict: FINDINGS (not stamped).** `stories/last-skyway/.continuity-review` was not written.
- Manuscript reviewed: `stories/last-skyway/story.ts` at commit `b5327f4` (merge of `ecea0a2`), SHA-256 `87cf1aad7d74f47a9a75593622c475dbb450d1b3448946921b89b604f5acae82`.
- Scope: all 48 pages of `npm run -s story-dump -- last-skyway`, read for every arrival route and listed flag combination, against `CLAUDE.md` and `docs/last-skyway/story-outline.md`. Checked per `.claude/agents/story-continuity-reviewer.md`: path assumptions, contradictions, location/time bridges, scene-setting, speakers, newcomer clarity, meter prose, ending labels, purposeful travel, consistent facts. Structural checks were not repeated.
- Reviewer runtime: Claude Code, model `claude-opus-5-5` (verified from the session's system information). Medium reasoning was requested; the reasoning level can't be verified from inside the session.

Paragraph indices are the dump's `[n]` indices.

## Findings

### 1. E07 [0] and [3] contradict F08 [2] on the full-equipment, no-wrap route (high)
- **Route:** `weather`, `governor`, `traced`, `synced`, `logged`, `window ≥ 10`, but `blankets = false` (for example, Easy with B02 and B03 but no B04, the full trace, TWO, the full log). F08 [2] renders the IF branch: the drain-down is finished and the tram goes back into service after a routine morning inspection. The only available choice leads to E07.
- **Problem:** E07 [0] ELSE says "The auxiliary mechanism remains isolated for winter work", and [3] says "The tram needs more work." Both contradict the previous page.
- **Fix:** In E07 [0] ELSE and [3], branch on `synced and weather and governor and traced and logged and window ≥ 10`: the drain-down is done, the tram is ready for its morning inspection, and only the calibration was lost. Keep the current text for the other states. Update the bible's E07 row to match.

### 2. Fen and Ellis are named on routes that never introduce them (high)
They are introduced only at D07 [0]. These pages name them on routes that don't pass D07:
- **E01 [1]** (A03→E01): "Mara, Fen and Ellis are warm…"
- **E10 [1]** (C08→E10): "Fen's soup… a board game Ellis claims to understand."
- **E03 [2]** (D02→D03→E03): "Fen sets soup… Ellis has started moving…"
- **E04 [2] and [3]** when arriving from D04 or D05: "Fen counts…", "Ellis counts…", "Ellis's voice".
- **Fix:** Name both passengers early, for example in Mara's report at A06 [0] ("Fen, the observatory cook, and Ellis, a telescope technician"). Then change D07 [0] from "introduce themselves as Fen and Ellis" to an in-person meeting. Alternatively, use "the cook" and "the telescope technician" on those four pages.

### 3. E02 [1]: the return trip along the service route never happened on B01 and B05 arrivals (high)
- **Route:** B01→E02 (the player is still in the lower dispatch room) and B05→E02 ("Leave the gallery closed").
- **Problem:** "you follow the enclosed service route back to the lower workshop" and "Imani has left the inner door unlatched" describe a return the player never made, and on the B05 route it contradicts the closed gallery.
- **Fix:** Describe the trip back only when the player has actually gone up. No flag currently distinguishes those arrivals, so either add a local `inGallery` flag (set at B07, reset at the ending), or rewrite [1] so it holds from every arrival point, for example "You hand your notebook to Imani at the lower workshop bench; any colleague who came with you returns to their own shutdown post."

### 4. D03 [1] and E06 [1]: the reason the attempt ends contradicts the visible meter (medium)
- **Route:** any D02→D03 arrival, especially Easy and Medium, where RESCUE WINDOW shows up to 1:30. Also any F01→E06 arrival, where it can show up to 1:14.
- **Problem:** D03 says re-planning "would consume the safe preparation window for this attempt", even though nothing has moved yet ("before anyone moves a switch"). Meanwhile, a wrong contact at D06 costs only 8 minutes and can be corrected. E06 says the trial "has used the remaining weather opportunity for another fully checked departure" while the meter still shows over an hour. A careful reader sees the meter disagree with the prose. That breaks CLAUDE.md's rule that prose must agree with the meter.
- **Fix:** Give each ending a cause that doesn't depend on time. D03: a signed destination nomination can be changed only through a fresh two-person route inspection, by rule, and that inspection can't be done in the dark or in snow. E06: the suspension pointer reached its marked limit, which grounds the cabin until its running gear has been inspected from the landing in daylight. Neither cause should claim the window has run out.

### 5. Plate timeline is inconsistent (medium)
- **A03 [2]** calls the plates "unprocessed". **B04 [0]** calls them "warm processed coatings". **D07 [1]** says the glass records "tonight's telescope calibration", but it is still afternoon and the plates are already boxed. **F08 [1] ELSE** says "The empty plate box will come back after processing", but the fogged plates are still in the box.
- **Route:** every route that reaches B04 or D07; F08 ELSE when `blankets = false`.
- **Fix:** Pick one state, for example exposed but unprocessed plates from last night's calibration. Then B04: "keep the exposed coatings from fogging". D07: "last night's telescope calibration". F08: delete the "empty plate box" sentence or change it to "The fogged plates will still go to processing for the record."

### 6. F01 [1]: "The ribbon visible through the booth window" (medium)
- **Route:** every F01 arrival. When `weather = false`, the ribbon has never been introduced. On every route the player is in the cabin, not the booth, so the line of sight is unclear. B02 [1] also leaves unclear how a ribbon "at the exposed crossover" is seen from the valley dispatch room.
- **Fix:** F01: "On the crossover's outer mast, visible from the cabin window, a wind ribbon snaps sideways…". B02 [1]: explain the remote view, for example a periscope, a mirror or a relayed indicator, or describe the dispatch-room ribbon as a matched copy of the one on the crossover mast.

### 7. B01 [1] says the gallery door is unlatched, but B05 locks it (low)
- **Route:** every B01→B05 arrival.
- **Problem:** B01: "The service gallery door is unlatched." B05: a trapped-key lock and latch hold the door, and the B01 choice reads "Release the gallery access lock".
- **Fix:** B01 [1]: "The service gallery door is still locked." Optionally, mention where the key comes from, because B05 [2] says it is "already in your hand".

### 8. F07 [2]: the tea bell rings when the cupboard is opened (low)
- A01 establishes that the bell rings when someone *shuts* the tool cupboard, and E01 and E09 agree.
- **Fix:** "The tea bell rings when Imani shuts the tool cupboard."

### 9. E03 [1]: "Sol leaves the crossover pinned" (low)
- **Route:** D02→D03→E03. Nothing has been selected or pinned. Pinning happens at D05.
- **Fix:** "Sol leaves the crossover unselected and the tram supply isolated."

### 10. D07 [3] and E05 [0]: the cradle lifts, which contradicts the bible (low)
- The bible's geography section says the refuge receiving cradle "moves a short horizontal distance only". D07 says it can "lift the locked cabin a short distance level with the refuge floor", and E05 describes the same lift.
- **Fix:** Use "draw the locked cabin a short way sideways into the refuge bay" in both pages, or correct the bible if a lift is intended.

## Notes (not blocking)
- E04 [1] reads "If anyone has boarded…" on every arrival. It isn't wrong. If finding 2 changes E04 anyway, consider adding a short bridge from the booth to the refuge for D04 and D05 arrivals.
- Meter arithmetic matches the bible: Hard clean docking leaves 16, and E09 is reachable at 40, 32, 24 or 16. The ten-minute reserve in A05, F08 and E09 is consistent.

## Next round
Fix findings 1–10 in `story.ts`, run `npm run check`, then start a fresh reviewer round with this report as prior findings. Stamp only after a clean review.
