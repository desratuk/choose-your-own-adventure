# The Glasshouse Express — independent continuity review

## Round 1 — FINDINGS (no stamp)

Reviewer: independent continuity reviewer, Claude Opus 5.5, medium reasoning. Base: `90ce4a8` (manuscript from `43394ec`). Inputs: the full `story-dump` (44 pages, every arrival state), `docs/glasshouse-express/story-outline.md`, project `CLAUDE.md`, and every `imagePrompt` in `stories/glasshouse-express/story.ts`. Structure, reachability and the meter floor were already verified by `npm run check`; this pass covers meaning only.

Checked and found sound: brick arithmetic and gates (best 70; F03 gates match A02's twenty/ten rule, E03 always 5); clue gating of the D03 chill and F06 cylinder; no reminders at decisive choices; plant-state continuity (chill fists, stoked slump, D05/D06 rendering); Sallow knowledge on met/unmet routes (B08, C04, B10 unnamed); hub returns at A03 and B07; ending labels and season ladder (E07 August, E09 end of August, E08 September, E10 October); E10's recall of A04/B09/A05, all guaranteed on arrival.

### 1. Rule of the night contradicts the good endings
- **Page:** A01 [2] ("If this bed fails to bloom at dawn, Tallowmere’s winter does not end"). Bible line 9 says the same.
- **Trigger:** any route to E06, E07 or E08.
- **Defect:** E07 and E08 bloom at mid-morning or noon and E06 only splits a few buds, yet all three end winter. A02 states the real rule ("in the Conservatory bed at this sunrise"), and E02/E04 fail on that rule. A01's wording makes the late-bloom endings look like contradictions.
- **Fix:** A01 [2]: "If the stock is not in that bed by dawn, Tallowmere’s winter does not end." Make the same change to bible line 9.

### 2. Dov is in two places at Beacon Cut
- **Pages:** C03 [0] ELSE, C04 [3], C05 [1].
- **Trigger:** C04 then return to C03; C05 then return; C05 then C04.
- **Defect:** C04 ends with "you see Dov’s lantern coming back from the token hut", but the C03 return says "Dov is still at the token hut, signing the book". C05 has Dov speak down the speaking tube and stoke ("He stokes, and the stove roars") while C03 says he is at the hut. The house stove is the player's, and the tube runs to the footplate. Then C05 says "by the time he is back from the token hut", yet a later C04 choice still reads "while Dov signs for the token".
- **Fix:** Keep Dov at the hut for the whole hub. C04 [3]: "Dov’s lantern is still at the token hut; you take the stair down two at a time." C05 [1]: the player feeds the house stove to recover. Drop Dov's tube line and "by the time he is back"; either cut the remark or have him say it at D01.

### 3. Fenn's timing contradicts the clock
- **Page:** F01 [1] IF wordSent ("Cassia Flint said you’d be an hour… You’ve been forty minutes").
- **Trigger:** `wordSent`.
- **Defect:** Cassia rings Fenn at about two (C03/C04 TWO O’CLOCK; on air she said "about three hours"). D01 is THREE O’CLOCK, then comes sanding ("most of an hour" after a slide), the tunnel and the cut. Arrival cannot be forty minutes after her call, and "an hour" also contradicts her broadcast.
- **Fix:** Drop the numbers or make them agree, for example: "Cassia Flint said you’d be three hours. I’ve been standing here for two of them."

### 4. Fenn says he never thought of hauling a chain he hauled
- **Page:** E05 [2] ("Forty years… and I never once thought of hauling it").
- **Trigger:** all routes to E05.
- **Defect:** In F04 [1], Fenn hauls the chain first, then with Dov. Now he claims he never thought of it.
- **Fix:** "Forty years, and I never once had to haul it", or "Forty years, and I should have known better than to haul it."

### 5. Thaw assumes bricks are short
- **Page:** E06 [0] ("You do it the cold way, as Hesper said to when the bricks are short").
- **Trigger:** F03 → E06 with ember ≥ 20, or ≥ 15 with `wordSent` (arrival ember reaches 65).
- **Defect:** On those routes the player could light the bed and chose cold planting anyway. The prose says bricks were short.
- **Fix:** Neutral wording: "You do it the cold way, the house stove under the bed."

### 6. The refusal ending's failure doesn't follow
- **Page:** E01 [1].
- **Trigger:** A02 → E01.
- **Defect:** At two o'clock the Express is at Beacon Cut, the same time as the player's own run (C03 TWO O’CLOCK). Cassia still declares it "will not be in the bed on Cold Hill before the sun", and gives only a cold house as the cause. Sunrise is about five hours away, and elsewhere the story shows cold stock surviving and arriving. The reader can't see why the run is lost.
- **Fix:** Give a concrete delay that sunrise can't absorb. For example, Dov cannot sand the Fernhallow incline and feed both fires alone, so the Express is stuck at the halt; or move the broadcast later (about five o'clock, Express still at Fernhallow Halt) and update the 2 AM header and the E01 image to match.

### 7. Hallam references assume A05
- **Pages:** F04 [1] ("a Hallam autovent, grown large"); E05 [2] ("the Hallams’ grandchildren will spend the spring reglazing").
- **Trigger:** `ventFreed = false` (A05 skipped).
- **Defect:** Only A05 introduces Hallam & Daughters, their autovent and their dome. Without it, "Hallam" is an unexplained name and "grown large" points back at a cylinder the reader never saw.
- **Fix:** F04 [1]: "a brass cylinder the size of a man’s leg: a wax autovent like the carriage’s, made by Hallam & Daughters, who built the dome." E05 can then stay.

### 8. Sunrise time disagrees between bad endings
- **Pages:** E02 [2] (at eight "the sun has been up… for an hour", so sunrise at 7:00); E04 [1] (the crew arrive at half past seven "and the sun arrives with them").
- **Trigger:** both endings.
- **Defect:** Sunrise on the same morning is given as 7:00 in one ending and 7:30 in the other.
- **Fix:** Pick one time. For example, in E02 change "for an hour" to "for half an hour".

### 9. C01 image only fits `tramsHeld`
- **Page:** C01 `imagePrompt` (a lit tram "waiting at the barrier" while the Express rolls across).
- **Trigger:** `tramsHeld = false`. In C01 [1] ELSE the tram crosses first and has gone before the Express is waved through.
- **Defect:** The one static image contradicts the default route's text.
- **Fix:** Use a composition valid on both routes: the Express crossing between the white gates with red lamps, the keeper's lamp raised and no tram in frame. Alternatively, supply two wired variants.

### 10. Grit appears before anyone lays it
- **Pages:** D07 and E04 `imagePrompt` ("driving wheels sunk in a scatter of thrown grit").
- **Trigger:** all routes to D07 and E04.
- **Defect:** The sanders are frozen (D01) and nothing has been laid yet. D07 shows polished, mirror-like ice, and in E04 the crew are only arriving.
- **Fix:** Show the wheels on glassy, polished rail with no grit. In E04 the crew's barrow is full and the shovels are clean.

**Verdict:** FINDINGS. 10 issues; no `.continuity-review` stamp recorded. Re-review after fixes.

## Round 2 — FINDINGS (no stamp)

Reviewer: independent continuity reviewer, Claude Opus 5.5 (`claude-opus-5-5`); medium reasoning was requested, but the effort level can't be seen from inside the run. Base: `a7192f1`. Manuscript: `stories/glasshouse-express/story.ts` from `19768a4` (unchanged since). Inputs: the full `story-dump` (44 pages, every arrival state), the bible including the round-1 response table, project `CLAUDE.md`, all 44 `imagePrompt`s and `stylePrefix`, and the round-1 diff (`54b6b3c..19768a4`).

All ten round-1 fixes hold and introduce no new contradictions: A01's planting rule; Dov at the hut through C03/C04/C05; Fenn's three hours and two at the gate (consistent with C03 at two, D01 at three and the sanding time); E05's "should have known better"; E06's neutral cold way; E01's five o'clock broadcast with a concrete cause; F04's introduction of Hallam & Daughters; sunrise at 7:30 in E02 and E04; C01 with no tram; and bare ice in D07/E04. The art-owner locks also hold: Sallow has no hat, D02 has no bucket, D04 is stove-only, F02/F03/F05/F06 hide the plants, E06 is cropped to buds, Fenn wears his coat in E08, Dov is seated in E10, and B01 shows facing points. Brick arithmetic, gates, clue gating, plant-state rendering and ending labels are unchanged and sound.

### 1. Sallow says the yard gate can't be opened, then his men take the train through it
- **Pages:** B04 [0] ("The day foreman has the key to this yard gate, and the day foreman is asleep. But my night men can walk your train through the yard…"); E02 [1] ("to the single yard gate you entered by, which someone has chained again behind you"); E02 [2] ("arrives with both keys").
- **Trigger:** B03 → B04 → E02 (every tow route). The B04 line also renders on B04 → B05.
- **Defect:** The round-1 canon pass made it explicit that the train stops in front of the chained yard gate (B03 [0]) and later passes through it ("entered by… chained again"). Sallow has just said the only key holder is the absent foreman, so nobody could have opened it. The reader can't tell how the night men got the train through, so the trap reads as a plot hole rather than a con.
- **Fix:** B04 [0]: "My night men have the key to this yard gate. They can walk your train through the yard on the works’ own rails and put you out at the far gate in ten minutes." Leave the foreman to be revealed at the far gate in E02 [0], as now. In E02 [2], change "with both keys" to "with the far gate’s key". If both gates should stay foreman-only, add to E02 [0] that the night men unlocked the yard gate and took that key away with them.

### 2. The Slide says the locker is nearly empty when it may be nearly full
- **Page:** E04 [0] ("There is nothing else in the locker for it… keeping the stock alive on the last of the bricks").
- **Trigger:** D07 → E04 with ember ≥ 20 (arrival ember reaches 70). On these routes D07 offered the two-bucket sanding and the player chose to wait.
- **Defect:** The prose says waiting was forced and the bricks were almost gone, yet the meter can show dozens left. This is the same kind of error as round-1 finding 5 (E06).
- **Fix:** Use neutral wording, e.g. "You wait. You and Dov sit on the footplate step at Fernhallow Halt with the house stove banked low behind you to make the bricks last, keeping the stock alive, and watch the tunnel mouth…" Alternatively, put the current sentence behind `IF ember < 20`.

### 3. The train is inside the Conservatory yard before the shut gates are unlocked
- **Page:** F01 [0] ("The line ends in the Conservatory yard, a snowy forecourt behind tall iron gates… Marigold stops with her buffers almost touching the fountain’s rim") and F01 [1] ELSE ("The gates are shut… You pull the bell chain beside the gate… ‘Nobody rang,’ he says, unlocking the gates").
- **Trigger:** `wordSent = false`.
- **Defect:** [0] places the engine inside the gated forecourt at the fountain. [1] ELSE then has the gates shut, with the crew ringing outside them and Fenn unlocking them. The train can't have got past gates that are still locked. The F01 image (gates open, Fenn at the gates, Dov by the engine) doesn't settle which side the train is on.
- **Fix:** [0]: "The line runs up to the tall iron gates of the Conservatory yard, a snowy forecourt with a frozen fountain in the middle and the dome rising over everything like a second sky." wordSent [1]: add "…and Marigold runs in and stops with her buffers almost touching the fountain’s rim." ELSE [1]: after "unlocking the gates", add "Dov draws Marigold in to the fountain." In the imagePrompt, put the stopped engine just inside the open gates.

### 4. The style rule removes the two empty carriages from shots where they must be visible
- **Pages:** A06 `imagePrompt` above all; also the wide exterior shots B06, C01 and D05.
- **Trigger:** every route. The `stylePrefix` rule "the empty dark carriages are absent unless explicitly listed for that scene" applies, and none of these prompts lists them.
- **Defect:** In A06 [1] the player stands at the end window and watches "the Fern House and the Orchard Car follow, dark glass on dark glass". The prompt has the player looking back through that window, with the carriages forced out of frame, so the image contradicts the paragraph. The carriages stay coupled all night (B05 runs from the Orchard Car's end window). The broadside views in B06, C01 and D05 would therefore show a two-vehicle train, unlike A01's four.
- **Fix:** A06: add "the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled close behind, filling the view through the end window". B06, C01 and D05: either list "two dark empty glass carriages coupled behind" or frame the shot so the rear of the train is out of view (for example, cut at the Glasshouse Carriage's end window).

**Verdict:** FINDINGS. 4 issues; no `.continuity-review` stamp recorded. Re-review after fixes.
