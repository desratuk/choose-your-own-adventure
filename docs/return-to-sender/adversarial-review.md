# Independent adversarial review

**Final outcome: PASS.** All eight findings were corrected; the independent acceptance review below found no remaining material editorial blocker and recorded the continuity stamp.

Claude Opus 5.5 (`claude-opus-5-5`), xhigh effort, 9 October 2026. Independent first review of the implemented revision 3 working tree, before the corrections recorded below. This report preserves the reviewer’s findings rather than implying that they describe the final version.

## Return to Sender: independent review (current working tree)

**Verdict:** I'd approve this for publication after one short line-level continuity pass. It doesn't need another developmental revision. The revision fixed what the earlier editorial review asked for. The 90% reserve rule is now taught to everyone at R03, the C07 choice no longer hands over the solution, E01 is a fair good ending, and the Vale thread gives the "forty-seven" a face. But several of the new edits introduced small continuity breaks, and one older line now contradicts the C07 fix. **I did not run the stamp.**

---

### A. Continuity: FAIL (gate not run)

**Must fix (reachable, a careful reader would notice):**

1. **H03 [0]: the story shows the plan for the player even when they declined to.** This conditional is new. It depends on `visitedEngine` (the player went to Engine Nine), not on how they reached H03.
   - Route (Medium): R04→R06→R04→R05→R04→S01→H01, choose **"Present the address and ask for cellar access"**, then H02, then "Give him Janine's number…", then H03.
   - H03 renders: "Voss checks **Gallo's inspection reference** and Janine's number…"
   - The player turned down "Show Voss the inspection plan" one page earlier, and has just paid 5 for the negotiation that the plan would have skipped. The same thing happens on H02→E05→"Apologise…"→H03.
   - Fix without adding a flag: write one sentence that's true on every route into H03, e.g. "Voss checks your paperwork, writes the cellar route into his incident book and nods to Ernie." Or add a `showedPlan` flag set only by H01's plan choice.

2. **C08 [0] contradicts C08 [6] and puts the hidden solution back.** C08 [0] says you "take responsibility for getting the **remaining copies** served."
   - Route: R04→R06→R04→S01→H01(plan)→H03→C01→C02→C03→C11→C04→C06→C07→"Leave the receipt open…"→C08.
   - Without `copyRule` (the player never copied the procedure), [0] presents copies as the plan, and then [6] says: "You have the letter, but **no authority for separate copies**."
   - The edit to the C07 choice was meant to stop telling every player about named copies. This older line now does it instead.
   - Fix: make it conditional. Keep the current wording `IF copyRule`; otherwise use something like "…and promise Tull that the twelve in the grid will hear it somehow."

3. **C08 [10]: Voss is named on routes where the player never met him.** "Voss says the desk will stay open."
   - On S01→H04 (the coal-chute entrance) the night manager is never named. Tunnel routes never enter the lobby at all.
   - "The desk" is also unclear: hotel reception or Tull's desk?
   - Fix: "'The Sedgewick's night manager is keeping the cellar door open for us,' Peter reports. 'He'd like to know if we validate parking.'"

4. **C06 [3]: the receiver can't be under the player's thumb.** The line "the glass cover trembles **under your thumb**" is new.
   - The receiver is taped to the carrier (R02 [3], the canister cast entry).
   - In [2] Tull lifts the carrier out of the tray, and in [4] his fingers rest on its seal. The C06 illustration shows Tull lifting the "canister with its receiver dial."
   - Fix: "…the dial's glass trembles on the carrier in Tull's hands."

5. **C02 [6]: the text describes choices that don't match what's offered.** "You can hold the wheel… or use an empty trap…" This line is older, but still wrong.
   - With no trap (any solo route that skipped F02, including the bible's route 1), it suggests a trap the player doesn't have.
   - With the six-clerk blockade capture, it contradicts [5] "already full."
   - On team routes, the "hold" choice is hidden.
   - "The wheel" has no clear referent in this room; the last wheel mentioned was the door wheel in C01.
   - Fix: keep the arrivals line unconditional, and add `IF trap=empty`: "The empty trap on your strap could stop their circling."

**Minor, but still reportable:**

6. **E03 [0] vs [5]: what the slip says doesn't match.**
   - [0]: you "mark the parcel **left at destination**". [5]: you "cross out **DELIVERED** and write LEFT FOR COLLECTION… You wish you had written it before leaving."
   - C02's choice says "mark the delivery complete." Fix [0] to "mark it delivered."

7. **F01 [5]: Peter is named before he's introduced.** "before **Peter** saw the invoice" is new. Peter isn't introduced until F05 or C08, and the joke relies on knowing the films. Fix: "before our Dr. Venkman saw the invoice," or cut the name.

8. **E04 (and E09) never account for an unused trap.**
   - Route: R04→F01→F02→R04→R05→E04. Winston's loaned trap disappears.
   - The bible says early-abandonment and partial-delivery paths "explicitly account for… unused equipment." E02, E06, E07 and E10 all do; E09 skips it when the trap is unused.
   - Fix: one conditional clause on each page.

**Checked and correct:**
- **Roll and capture counts:** C11 adds up on every route (29+6+12, 32+3+12, 35+12). E07 and E08 both give 35, E06 gives 12, and Vale is in the grid twelve on every route.
- **Meter:** all four Hard best routes spend exactly 40, including the R05+R06 route using the plan. The C08 gate matches R03's "90% or less" rule.
- **Bicycle and travel bridges:** the bike is where the story says on every route (Pell's, the hotel railing, the firehouse), and E02's ride back after leaving the hotel works.
- **Introductions:** Ernie (C10), Slimer (C09, E02) and the team (C08 on solo routes) are each introduced on routes where the player hadn't met them.
- **Ending labels:** every ending reads as its label says, on every route into it.

---

### B. Editorial assessment

**Must fix:** only C08 [0] above. It is both a continuity break and a fairness leak.

**Worth doing (optional polish):**

- **Show the trap capture on the page once.** The player's one use of the franchise's best-known equipment always happens offstage: "The trap's doors close around the six clerks" (C01 [2]) and "Your trap has shut around the three early arrivals" (C03 [1]). Only the E08 ending shows the pedal. Two sentences of light, wind and flapping satchels at the T04 or C02 capture would add more franchise pleasure per word than anything else, without adding danger or new branches.
- **The three clerks in R03 are never sent off.** The cut R04 line used to dismiss them, but it showed on every hub visit. Now they're left tapping in the street. Add one line at the end of R03: "When you hang up, the three clerks have drifted off into the rain."
- **Trim R03 [6].** "Above ninety, the release hatch stays shut" repeats "ninety percent load or less." R03 is already four paragraphs of phone call. Losing that sentence keeps the rule and lightens the page.
- **The team timeline is too tight.** F06 shows 11:15 PM, and C04 is 11:20. In five minutes the team rides to Park Row, gets past Voss, goes down to the cellar, waits for the shift, and (with C11) reads all 47 names aloud with spelling. Move F04/F05/F06 to about 10:25, 10:30 and 10:45, and update F04 [3] to match.
- **F04 [1]** says "every address you have found," but someone who went straight from F01 to F04 has found none. Use "everything you have found."
- **C10 [4]–[5]:** phoning the hotel and then going back in person repeats a beat. Either one alone works.

**Taste (not defects):**
- Taken page by page, the polite or careful choice almost always pays: R08 is free, plus C11, accepting the H02 escort over rushing, and C02's options over E03. I accept this, because Hard's exact 40-point budget turns the real puzzle into *which* acts of care you can afford. T04's trap shortcut also shows that the less noble but efficient option can still reach the best ending.
- Nobody ever fires a proton beam. That's a deliberate quiet-story choice, not a mistake.

**Fairness and inference:** the best ending now needs connections the player makes themselves:
- The copy procedure from R05 or T03.
- The need for full names, hinted at by Pell, Janine, F02's discharge form and Slimer's twelve boxes.
- Choosing a neutral-sounding "leave the receipt open" at C07.
- Remembering R03's rule that the return trip costs load.

The UP/DOWN choice at C04 is a fair observation test, since C02 describes both mouths. Setbacks can be recovered from (E05, C05, T05), and failing at C08 gives a proportionate E06 with what you already achieved intact. None of this needs the bible to understand.

### What works especially well

- **The meter design is elegant.** Each detour pays for itself only if you use what it gives you:
  - The Engine Nine plan skips the H02 negotiation.
  - The diner's coal-chute directions skip it too.
  - The borrowed trap turns the C02 or T04 wait into a free catch.

  Every Hard best route comes to exactly 40, so careful thinking matters more than grinding.
- **The Vale thread** (R03 watch → C11 name → C09 first acknowledgement → E11 "a tiny watch with no hands") gives the release an emotional anchor. Tull's "I rather hoped they had" and "I think… I'll walk" land.
- **The endings now close on concrete images instead of morals:** Ray pinning the file, the case list's numbered edge, LEFT FOR COLLECTION, the brake cable finally fixed and the wait for an elderly man at the crossing.
- **The comedy is specific and earned:** REQUEST FOR FORM, "validate parking," "a haunting in my left shoe," "That's also us."
- **The professionals are competent and gracious.** Egon's "That wasn't in your instructions" fixes the earlier blame problem in one line.

**Gate outcome:** not stamped, because of items 1–8. After those line fixes, a quick re-review of H03, C02, C06, C08, E03, E04, E09 and F01 should be enough to pass.

## Implementation response — continuity follow-up

All eight reported issues have been addressed, with no new flags, pages, choices, costs or ending classifications:

1. **H03:** replaced the `visitedEngine` prose branch with a generic paperwork/telephone-number check valid after plan access, normal negotiation or apology. The plan still earns its existing five-point shortcut; owning it no longer implies showing it.
2. **C08 opening:** now promises to find a way for absent staff to hear the original; it does not announce a copy plan before the procedure gate.
3. **C08 hotel call:** identifies “the Sedgewick’s night manager” and specifies keeping the cellar door open, covering routes that never met Voss and removing the ambiguous “desk.”
4. **C06:** the dial remains on the carrier in Tull’s hands after receipt.
5. **C02:** introduces the pressure-control handwheel near the doorway as a separate mechanism; describes the courier steadying it only without the team and the unused trap only when present.
6. **E03:** the initial action now marks the parcel delivered, matching both the selected choice and the later correction of that entry.
7. **F01:** Janine introduces Dr. Venkman by his comic role as the firehouse’s invoice expert, rather than assuming the reader knows “Peter.”
8. **E04/E09:** each conditionally returns an unused loan trap to the appropriate firehouse custodian.

Accepted optional polish: conditional C01/C03 arrivals now show the pedal, light and capture; R03 dismisses its three clerks before the hub; its redundant above-ninety sentence is removed while the universal reserve/breaker/travel rule remains; F04/F05/F06 move to 10:25/10:30/10:45 with an explicit hotel arrival by eleven; F04 uses “everything you have found.” The team scene prompts contain no exact time, and inspection of their installed F04/F05/F06 images found no displayed clock conflicting with those changes. Root’s revised E01 prompt and image were preserved.

**Not adopted:** deleting either C10’s phone call or its physical return. They perform different actions: the call coordinates access and tells Tull the absent recipients have been served; the return supplies the still-missing witnessed countersignature and allows his departure. No proton-beam set piece or additional pitfall was added; those were correctly identified as matters of taste rather than defects.

This is an implementation response, not a reviewer’s clearance or continuity stamp. The corrected source and bible are frozen for independent follow-up.

Validation after these corrections: focused Return to Sender regressions **23/23 pass**; `npm run check` passes typechecking and all three exhaustive story checks; `git diff --check` is clean. Return to Sender remains **46 pages / 10 endings / 80,101 reachable page-state combinations / 500,712 paths**. Source hash submitted for follow-up: `1617e206be4e737976647a455e3ad8c84c2567f0d9984491f62ca55e9a5a67d3`.

## Independent acceptance re-review

Claude Opus 5.5, xhigh effort, 9 October 2026. The independent reviewer, not the implementing editor, recorded the continuity stamp.

**PASS: return-to-sender.** I read the whole manuscript against every reachable arrival state in the acceptance dump, and the gate stamp is recorded.

**Verdict:** The revision is continuity-clean, and nothing material blocks editorial publication approval. This isn't a playtest and isn't licensor approval.

### The eight prior issues, checked in the current prose
1. **H03 [0]** now says "Voss checks your paperwork and Janine's number…". That's true after the plan shortcut, after H02's negotiation and after the E05 apology. On the plan route Janine's number is already in the player's papers (R03 [6], H02 [4]), and Voss and Ernie are already introduced in H01.
2. **C08 [0]** now only promises "to find a way for the absent staff to hear it". It no longer clashes with [6] when the player never copied the procedure, and it doesn't reveal the copy solution.
3. **C08 [10]** now calls him "the Sedgewick's night manager" and refers to "the cellar door", so it works on tunnel and coal-chute routes where Voss is never met. It also sets up the return in C10.
4. **C06 [3]:** the dial now sits on the carrier in Tull's hands. That matches [2], [4] and the installed image, which I viewed.
5. **C02:** the handwheel is introduced in [1], separate from C01's door wheel. Holding it appears only on solo routes, and the trap is offered only when the player carries an empty one. The prose now matches the choices in every trap/team combination, and "the wheel" in C04 [4] now has a clear referent.
6. **E03:** "mark it delivered" now agrees with [5] crossing out DELIVERED.
7. **F01 [5]:** "our invoice expert, Dr. Venkman" introduces him in his own scene and pays off in E09.
8. **E04 [2] and E09 [5]:** an unused trap is now returned, to the right owner, on every route that can carry one.

### Accepted polish, checked for regressions
- **Trap captures shown on the page (C01 [2], C03 [1]):** consistent with F02's instructions and E08's light. C03 has Tull greet the courier before the capture happens. That reads as a deliberate beat, not a sequencing error.
- **R03 [7]:** the three clerks leave before R04, whose image shows the corner empty.
- **R03 [6] trim:** the 90% rule still matches the C08 gate, and the display caps at 100%.
- **F04/F05/F06 retimed to 10:25/10:30/10:45, "By eleven":** these agree with every other time in the story (the 11:20 bell and nothing else). The F04/F05/F06 images show no conflicting clock. E01's new image matches its ending.

### Taste only (no change needed)
- On routes that pass through R08 or F05, C02 [2] says the whole seal is "now" readable, even though it was already cleaned earlier. That's redundant but not contradictory.
- C01 [6] calls the drawing "Gallo's sketch", though the courier drew it from his explanation.
