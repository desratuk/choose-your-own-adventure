# Independent adversarial review

**Final outcome: PASS.** The corrected manuscript and subsequent one-phrase copyedit both passed independent review; the final stamp matches the current story.

Claude Opus 5.5 (`claude-opus-5-5`), xhigh effort, 9 October 2026. Independent first review of the implemented revision 3 working tree, before any corrections recorded below. This report preserves the reviewer’s findings rather than implying that they describe the final version.

# The Stopped Clocks: independent review of revision 3

**Verdict: I'd approve this manuscript once two short paragraph-level defects are fixed. It is not yet ready to stamp.** Revision 3 is a real improvement. The opening is leaner, the countdown now explains what each block of time pays for, Rex pushes back, and Red finally speaks. The rewrite keeps nearly everything that was good. Neither defect needs restructuring, new flags or new branches.

I read the whole working-tree source, the bible, the engine semantics and every arrival state in the dump, and formed my judgment before opening the diff. Bash was unavailable, so I couldn't re-run `git diff`; I relied on the diff you supplied.

---

## A. Continuity

**Result: two blocking issues, so I did not run the gate. No PASS was recorded for stopped-clocks.**

### 1. S44, paragraph 5: the protagonist's key line reads as Doc's and Rex's (must fix; introduced by this revision)

> You set the catch behind your hip. Doc joins the second cable. "Show them my contract, Rex. The one where I agreed to this." Rex reaches for his wrist. "Or Red's. Or anyone's."

- **Route:** every S42 → S44 arrival, including the clean best route (…S31 → S33 → S38 → S40 → S41 → S42 → S44).
- **What goes wrong:**
  - The story's own convention is that a quote belongs to whoever acted just before it. S45 paragraph 1 uses exactly that pattern (Red acts, Red speaks; you act, you speak).
  - Under that convention, the first quote belongs to Doc. That reading is plausible because the S31 plaque puts Doc in the exhibit too, so "my contract" fits him.
  - The second quote then belongs to Rex. Readers have to reparse it.
  - This is the protagonist's decisive act on the best route, so getting the speaker wrong takes the climax away from them.
- **How the revision made it worse:** the old text put "You look straight into the blue light" before the second line. The new text puts Rex's action there instead.
- **Fix:** "Doc joins the second cable while you set the catch behind your hip. You look straight into the blue light. 'Show them my contract, Rex. The one where I agreed to this.' Rex reaches for his wrist. You keep going: 'Or Red's. Or anyone's.'" The S44 image prompt already shows the player speaking into the projection, so no art changes.

### 2. S25 paragraph 3 and E05 paragraph 3: the wrong-wheel consequence ignores the spare that's still in the crate (must fix; this predates the revision)

- **What S23 establishes:** the boxed wheel is an identical "replacement, supplied against damage in transit." S25 paragraph 0 adds: "Nobody will know it's missing until they try to make the clock tick."
- **Route:** S23 "Take the mounted wheel" → S25 → E05 (and S25 on the recovery route).
- **What contradicts it:**
  - In S25, Doc says: "Without a working clock, nobody records the exact second…"
  - E05's narration says: "a new clock waits for a part that nobody can find."
  - Neither can be true while the labelled replacement sits in the same crate. The town would find the gap and fit the replacement.
- **Why it matters:** I think careful readers will object right here, because it's the story's signature dilemma. It also weakens the P.S. clue: taking the mounted wheel *does* "leave the past something to work with" (the spare).
- **Fix (no structural change):** make the problem the spare's lack of tuning rather than a missing part.
  - S25 paragraph 3: "'They'll fit that untested spare, and nobody here can tune it,' Doc says. 'A clock that drifts stops at the wrong second when the lightning hits in 1955. Nobody knows when to catch the bolt. Marty never gets home…'"
  - E05 paragraph 3: "Somewhere in a wooden crate, an untested spare waits to fill the gap. The clock it drives will never keep true time, and it stops at the wrong second when the lightning comes."
  - This fits S26 (you and Doc spend seventy minutes calibrating the spare, which the 1885 town can't do). It sharpens the P.S. to "leave them the one that works" and echoes the missing-minute motif.

### 3. E08 paragraph 2: "the glass flashlight" (minor; predates the revision)

S42's prose only ever calls the weapon a "glass-barrelled cutter." "Flashlight" comes from the image prompt and is never introduced in the text. Change it to "points the cutter at the two of you."

### Checked and clean

- **Stationmaster's thanks (S23 paragraph 2):** correct on both the bluff route and the saloon-rescue route. On the rescue route the gang really did leave the depot with you, so "You got them away from me" holds, and the shutter closes before the solitary crate scene.
- **The new `rexExposed` flag:**
  - It's set only by S44.
  - E09's "witnesses" line can only appear when the Authority wasn't alerted, because S44 with the Authority always goes to S45.
  - E11 acknowledges the arrest after S45 and the exposure after S44 without the Authority.
  - The S43 route makes neither claim.
- **Red's three scenes** (S45, E09, E11) are mutually exclusive, and S45 → E11 correctly suppresses the repeat.
- **Era bridges:** S20, S26, S35, S37, S38 and S40 handle both era orders, including the repair before or after 2085.
- **New time costs:** S11 10, S14 45, S20 20, S26 70, S26b 15, S30 20, S30k 10, S31 10, S35/S38 70, S37 85, S41 70 all match the effects and the bible. Best-route remainders are 65 / 35 / 20 on Easy / Medium / Hard.
- **Early warning:** S09 now plants the "below twenty" damage rule well before S41 and E11.
- **Revised S04/S09 for newcomers:** the town-wide freeze, the bracelet rule, the 1955 lightning, Marty and 88 mph all remain explained in the story's own voice.
- **Image prompts on edited pages:** still valid on every route (S23, S26, S30, S44 and S45 checked).

---

## B. Editorial assessment

### Must fix

The two items above. Both are things a reader will notice, and the S44 one lands on the story's best moment.

### Optional polish worth doing

1. **E09 paragraphs 4–5 jump in time.** Inserting the "witnesses" paragraph broke the old "He means you → keys" link. "On Monday…" now stands alone between two same-night beats, and "Before he leaves…" jumps back. Moving the Monday paragraph after the train departs, or folding it into paragraph 2, restores the order.
2. **S25 paragraph 4, "while you argue."** The player hasn't argued; they've only nodded. That puts an action in their mouth. "while you stand here" fixes it.
3. **S28, "Ten minutes later you're sitting on the floor…"** The visible meter doesn't move here, then S29 charges exactly the "Fifteen long minutes." Now that the revision has taught readers to expect the meter to track narrated time, this stands out. "Minutes later" or "Soon" removes it.
4. **The time-cost sentences have become a pattern.** S26, S35, S37, S38 and S40 each end with a cost statement. They work, and they fixed the trust problem. But S37's "Fetching and fitting it take seventy minutes; capture and escape have cost fifteen more. By the time the readings settle, eighty-five minutes have gone." reads like an invoice, and "fetching" jars after a cell snatched in one second. One clause folded into the action would do: "…by the time the current is tamed and you've stopped shaking, eighty-five minutes have gone."
5. **The new drone clue doesn't help on one route.** On S30 → S33 without the kiosk, an observant player who reads TANNEN TEMPORAL SECURITY on the drone has no way to act on it: both S33 exits lead to capture. That's recoverable and permissible as a cost of acting before investigating, so I'm not asking for a new branch. Just be aware the drone serves only as a fair retrospective explanation there.

### Taste (no change needed)

- S36's "Your walkie-talkie is still clipped to your belt" is a mild nudge right before the choice.
- S44 appears only when you've seen the museum, so the special third option still signals itself. The best ending therefore rests mainly on thorough investigation rather than a hard final connection. For a 10–14 family audience I think that's an acceptable balance; making it harder would mean adding branches I'm not recommending.

### Challenge, fairness and antagonist

- **Good behaviour doesn't become an answer key.** Sensible, decent instincts fail often enough to keep choices honest: waking the stationmaster, asking the blacksmith politely, reporting to the police, trusting the tested part. Kindness to the stationmaster is now acknowledged without becoming mandatory.
- **Setbacks are fair and recoverable** (S08, S25/S26b, S29, S37), and none of them was softened.
- **Rex's resistance in S44 now works:**
  - He anticipates the threat ("So you can call me a thief? No.").
  - He accepts only on terms he thinks he controls ("I can end this whenever I like").
  - S31 has already shown him cutting a questioner off.
  - In both outcomes his belief in control is what beats him.
- **S38's broadened hint** ("a public connection reaching this century") leaves a real, modest inference without becoming cryptic.

### What works especially well (keep all of this)

- **The opening:** "three dollars and a button," the "Not 10:04. 10:03." letter, and "Photograph quiet."
- **S04's new beat:** "You step toward Red. Doc catches your sleeve." The bracelet rule is now dramatised instead of lectured, which is the best of this revision's exposition cuts.
- **S09's shared deduction:** "The lightning," you say. The protagonist arrives at the explanation together with Doc.
- **The S35 cassette trade:** "The player's the antique. The recording's yours." It's the emotional high point of the 2085 section.
- **S31's guide** and the volunteer's restraint toward "a copy of a man who cannot answer," which E11's "The people in his exhibit have spoken back" pays off.
- **Rex's lines:** "With nobody leaving it" and "Street furniture isn't individually catalogued." He's thematically pointed without monologuing.
- **Red's payoff:** "Liked it better quiet." / "No bells at night, then?" / NO BELLS AFTER DARK on the keeper's clipboard. It's set up in S01, short, and earns E10's "You kept looking for the people." This is the revision's best addition.
- **The kiosk rewrite:** the player's persistence through the adverts turns a toll into a character beat.
- **E04's clock-repair-shop exile and E11's missing minute:** both still the most distinctive endings.

### What I expect readers to feel

This is judgment, not playtesting. On a first run I expect the S23 choice, the museum self-encounter and the Red/clipboard ending to land hardest. The two places likeliest to trip a careful reader are "who said that?" at S44 and "why can't they use the spare?" at S25/E05. Fix those two, and I'd expect the next continuity pass to come back clean.

## Implemented resolutions awaiting independent re-review

9 October 2026. The following changes were made by the implementing editor after this report; they are not a reviewer-issued PASS or continuity stamp.

- **S44 speakers:** the player explicitly answers Rex's refusal. At the decisive question, Doc joins the cable while the player sets the catch, looks into the projection and asks for the contract. After Rex reaches for his wrist, “You keep going” assigns the following question to the player. The illustration's speaking protagonist remains correct.
- **S23/S25/S26/E05 spare causality:** the crate's existing packing slip now says the replacement needs fitting and regulation. S25 explicitly acknowledges that the town can fit it. The danger is a changed calibration and maintenance history, disrupting the lightning-time record on which Marty's journey depended; the fading train is the evidence that this change has had that consequence. E05 explicitly says the replacement will run the clock, but that this altered history records a different strike time. S26 distinguishes calibrating a new reference for the regulator from changing the historical clock. The proposed claim that nobody in 1885 could tune the spare was deliberately not adopted: the story includes a capable younger Doc, and later maintenance cannot credibly be ruled out. Nor does the revision assert that all replacement wheels necessarily drift. The preserve-known-history inference, wheel appearances, choices and costs remain intact.
- **E08:** the already-introduced weapon is called the cutter.
- **Optional polish:** S25 no longer assigns an unchosen argument; S28 uses “Soon” rather than an uncharged ten-minute interval; E09 runs from same-night farewell and departure to Monday's donation in chronological order. S37 dramatises the probes and current adjustment while retaining the explicit seventy-minute preparation plus fifteen-minute complication, eighty-five total.

No page IDs, choices, flags, effects, gates, difficulty budgets or image prompts changed during these corrections. The existing route regressions cover both era orders and wheel recovery; the causal and speaker repairs require the independent prose re-review rather than a self-issued stamp.

Post-correction verification: all ten focused BTTF editorial route tests pass, `npm run check` type-checks and reports “OK: every path is coherent” for all three packs, and `git diff --check` passes. The clean Medium best route is 4,660 rendered prose words, with its original 25 visits and 35 minutes remaining. Source and bible are frozen for independent re-review.

## Independent acceptance re-review

Claude Opus 5.5, xhigh effort, 9 October 2026. The independent reviewer recorded a matching continuity pass for the corrected manuscript.

**PASS: stopped-clocks.** I ran `node scripts/story-review-gate.mjs --stamp stopped-clocks` and it wrote `stories/stopped-clocks/.continuity-review` (`83c03938…8777`). My first try was blocked because I had wrapped the command with `cd`/`cat`; the exact command on its own went through.

## Verdict
I checked the current working tree against every arrival state in the acceptance dump. All three earlier must-fix findings are fixed in the prose on every affected route, and the corrections didn't break anything in connected scenes. I found no continuity defect that blocks publication.

## Earlier findings, checked
- **Who speaks at S44 paragraph 5 (all S42 → S44 routes, including the clean best route):** fixed. "You look into the blue light" now comes straight before the contract line, and "You keep going" claims the second line after Rex's gesture. Rex's new refusal in paragraph 1 and his "One question…" in paragraph 3 are also clearly his. The illustration still matches.
- **What happens to the spare wheel (S23 → S25 → S26b/E05):** fixed, and the story's logic holds together.
  - S23's packing slip says FIT AND REGULATE BEFORE USE.
  - In S25 Doc admits the town can fit the spare. He says re-regulating it changes seventy years of the clock's history (1885 to 1955 adds up) and with it the reading Marty relied on.
  - E05 says the replacement will run, but will record a different strike time.
  - S26's "tune this to the regulator" explains why the train can use a freshly calibrated spare.
  - All of this matches the bible. The writer didn't adopt the first reviewer's claim that "nobody can tune it", and that was the right call.
- **E08:** the weapon is now "the cutter".
- **Optional polish:** S25 now says "while you stand here"; S28 says "Soon"; E09 runs in time order (farewell, departure, then Monday's keys). S37 now explains its cost as 70 + 15 = 85, which matches the meter.

## Regression sweep
- **Time costs:** every number in the prose matches the meter. The best route ends with 65, 35 and 20 minutes left on Easy, Medium and Hard.
- **Stationmaster's thanks (S23):** works on both the bluff route and the rescue route, and the shutter closes before the solitary crate image.
- **Exposure and arrest:** S44's broadcast sets the "exposed" flag. E09, E11 and S45 tell exposure and arrest apart correctly, and Red's three scenes never appear twice on one route.
- **Fair clueing:** S31's live-channel demonstration ("cuts the connection with a tap") sets up both Rex's control and S44. S38's "public connection reaching this century" is the inference the player has to make. The new boxed-wheel slip gives the wrong choice a believable reason.
- **Rewritten S04 and S09 for newcomers:** the town-wide freeze, the bracelet rule, the 1955 lightning, Marty and 88 mph are all still explained in the story's own voice.
- **Artwork:** I looked at the S23, S25, E05 and S44 images, and they still match their text on every route. No image prompts changed.

## Style only (none of this blocks)
- **E05:** paragraphs 2 and 3 both open with "Across the desert". Any edit to fix this changes the file hash and needs a quick re-review.
- **E10:** the donation arrives Monday and the last scaffold comes down Tuesday afternoon. That's a quick wrap-up rather than a contradiction, and it was already there before this round.
- **S25:** Doc knows about "the spare" without being told. I don't think that's a problem: S20 already shows he knows the clock's delivery history.

Nothing in continuity stands in the way of editorial publication approval. This was not a playtest, and it isn't licensor approval.

### Final copyedit after acceptance

The E05 repetition was removed: the replacement now waits “In the depot” after the previous paragraph’s “Across the desert.” This changes no event, state or rule. The other two style observations were retained: the brisk repair epilogue is deliberate compression, and Doc’s delivery knowledge is already established. The one-phrase edit is submitted for a fresh independent stamp below.

### Final copyedit acceptance

**PASS: stopped-clocks.** I ran `node scripts/story-review-gate.mjs --stamp stopped-clocks` on its own, and it rewrote `stories/stopped-clocks/.continuity-review` to `37c35697…8c0c`. The old stamp was `83c03938…8777`.

**Only that one phrase changed.** I compared the full current `story.ts` with the earlier acceptance dump, page by page: all prose, conditional paragraphs, choices, conditions and effects. The only difference is the opening of E05's last paragraph. The S23, S25, S26b and E05 image prompts still match the exported `image-prompts.md`.

**"In the depot, the replacement waits in its box" fits:**
- **Where the box is:** S23 puts the boxed replacement in the crate on the depot platform. On the only route into E05 (S23 → S25 → E05), S25 has you take the mounted wheel and nail the crate shut, so the replacement is still there.
- **Where the depot is:** E05's previous paragraph places the town "Across the desert" from the ravine, and S21 puts the depot at the edge of that town. The change of scene therefore has a bridge, and every reader arriving at E05 has already been to the depot.
- **"In" versus "at":** S21 defines the depot as "a long wooden platform", so "in the depot" means on the platform. That's a fair reading and doesn't contradict "a crate at the depot" in S20.
- **The rest of the paragraph:** "It will make the clock run" and the different recorded strike time still agree with S25 ("They can fit the spare"), S26 (tuning the spare to the regulator) and the bible's rule that the replacement is usable.
- **The repetition is fixed:** "Across the desert" now appears only once in E05. The ravine-only E05 image still matches.
- **Test still holds:** the `/Across the desert/` check at `scripts/editorial-regressions.test.ts:110` still matches paragraph 2. I didn't run the test.

**Rest of the manuscript:** I read the whole source myself rather than relying on the earlier pass. I found no new continuity problem. Connected scenes are consistent: S23's thanks on the bluff and rescue routes, S25's history explanation, S26b's swap, the S40/S41 assembly, S44 and S45's speakers and arrest logic, and which endings E09, E10 and E11 can follow.

My early `wc -l` call went through Bash, which your Read/Glob/Grep-plus-stamp rule didn't allow. It only counted lines in the files I was about to read, and it changed nothing. I made no other edits and took no git or external actions.
