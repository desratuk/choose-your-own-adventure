# The Lantern Archive: continuity review

## Round 1: FINDINGS (no stamp)

- **Reviewer:** independent `story-continuity-reviewer`, Claude Opus 5.5 (`claude-opus-5-5`). Medium reasoning was requested; the run doesn't expose its effort setting, so that part is unverified.
- **Manuscript:** f30b19a, merged in 04c9d76. `stories/lantern-archive/` had no uncommitted changes.
- **Scope:** the whole `npm run -s story-dump -- lantern-archive` output, covering all 45 pages in every listed arrival state and every conditional paragraph; the bible `docs/lantern-archive/story-outline.md`; `CLAUDE.md`; and every `imagePrompt`.
- **Areas the author asked about:** I checked each one.
  - C01: first arrival with and without `toldWin`, and returns from every hub page.
  - `winPlace` from D05 onward.
  - The D05 greetings, against every combination of `knowsRound` and `invitedInPerson`.
  - Ada's five rules against all ten endings.
  - The meter on all three difficulties. Starts are 120/105/95 and the best route costs 95, so it ends at 25/10/0. The Hard E09 zero matches E09 [1].
  - On every route the Palladian closes, the Lantern never lights again and no building reappears.

### Clean areas

- Meter arithmetic and gates match the bible's table. The `{{clock}}` placeholders are used throughout.
- Rules 1, 2, 3 and 5 hold in every ending. E06 restores one part only. E07, E08 and E10 each fail to reach the town for their stated reason, and E09 is the only ending that restores the whole town.
- The C01 first-arrival exposition is correct for both `toldWin` values.
- The `winPlace` variants in F01, F03, F04, F05, F08, E03 and E09 are correct.
- E09 restores memory only. The 1949 map and the cobbles "were always there", the archive goes to the library and the Palladian still closes.

### Findings

1. **A01 [4]: Win is named before she is introduced.** This affects every route. Mr Hale says "If Win wants anything from it" and "She's been up there since five", but Win isn't introduced until A02 [1]. That breaks the project rule against naming a character before introducing them.
   *Fix:* gloss her in A01, e.g. "If Win — Win Aldous, our chief projectionist — wants anything from it…", or have the narration identify her.

2. **A03 [4] contradicts B03 [2] about the hatch.** This affects every route. Win has worked in the box for 44 years, so since 1942, and calls the hatch "painted shut since before her time". Ada's last entry, dated March 1958, says "I have painted the hatch shut", which falls in the middle of Win's career. The bible's "nobody has opened in thirty years" agrees with 1958.
   *Fix:* in A03 [4], replace "since before her time" with something like "painted shut since the spring Ada retired, nearly thirty years ago". Win's "Don't ask me where it goes" can stay.

3. **A04 [0] and A05 [0]: reel timing disagrees with the meter.** This affects the A04→A05 route (`toldWin`). A04 [0] says "*The Brass Moon* begins", so reel one has just started, and Win never turns while a reel is running. In A05 the player tells her, and "when the first cue dot flickers at the end of the reel" she changes over. A reel lasts well over five minutes, but the choice costs five, so the prose contradicts the meter. A03's exit, "Take your place for the first changeover", and A04's "hand near the changeover switch" already suggest the strike comes near the end of reel one.
   *Fix:* make A04 [0] say the first reel is nearly out, e.g. "Reel one of *The Brass Moon* is almost through…". The A04 time reading could become "END OF REEL ONE".

4. **C01 [3] says "Back in the box" on returns from in-box pages.** This affects arrivals from C07 (the slide cabinet under the Lantern) and C08 (the box telephone), with `hubSeen` = true. On those routes the player never left the box. The line is only right after C03, C04 and C06.
   *Fix:* make it location-neutral, e.g. "In the box, Win is at the machines, keeping *The Brass Moon* running reel by reel."

5. **D05 [1] ELSE: the phone greeting is wrong on mixed routes.** This affects `residentsComing` with `invitedInPerson` = false and `knowsRound` = true, which happens in two orders:
   - C02→C03 without inviting, then C08
   - C08 first, then C02/C03 (C04 is hidden once `residentsComing` is set)

   On both, the player has met all three at Highfield House, yet the text says "You've never met them". On every phone route, May also "knows your voice at once" although she never spoke on the phone. Mrs Ferris spoke to the player in C08, and the residents were "away from the receiver".
   *Fix:* key the greeting on `knowsRound` instead of `invitedInPerson`. If the player met them, use the C04 greeting or a variant such as "'The projectionist with the card,' Abel tells Dot." Otherwise use something like "'You'll be the one who rang Mrs Ferris,' May says, and Ivy shakes your hand."

6. **D05 [2] (Win in the stalls) contradicts C01 [4].** This affects `winPlace` = stalls with `residentsComing`. In C01, Win identifies all three: "Abel Quarry swept the stalls here when I started. The Pellow twins came to every Thursday matinee for thirty years." In D05, Ivy asks "Have we met?" and Win answers "I don't think so". The intended point, that they don't know they were neighbours, is undercut by her denying acquaintance with a former colleague.
   *Fix:* let them recognise one another as Palladian faces only, e.g. "'Mr Quarry. You swept these stalls when I started,' Win says. 'Did I?' says Abel politely." Keep "They were neighbours for thirty-five years. None of them knows it."

7. **D05 [3] and F03 [2]/[4]: "the empty seats in Row F" is only set up on the phone route.** The last show is crowded (A01's queue, A04's "eight hundred faces"), but only C08 [3] reserves seats ("ask Dot to keep three seats free in the stalls"). Three cases are affected:
   - On the C04 in-person route, nobody reserves seats, yet D05 [3] uses "the empty seats in Row F".
   - With `winPlace` = stalls and residents, Win "sits down beside them", which needs a fourth seat.
   - With `winPlace` = stalls and no residents, F03 [4] places Win "alone in Row F", a row never established.

   *Fix:* establish Row F as kept free on every route. For example, D04 [3] could add Hale saying "Dot's kept Row F empty for the staff all night; use it." Or A01 could show Dot roping off Row F for staff on the last night. Then C08 [3] can ask Dot to put the three guests in Row F.

8. **D05 [2] ELSE: the port is seen from the foyer.** This affects `winPlace` = box with `residentsComing`. [0]–[2] happen at the glass doors and in the foyer, and the group only enters the auditorium in [3]. Yet [2] ELSE describes the little port window at the back and says "The three of them don't look up at it." The projection port is visible only from inside the auditorium.
   *Fix:* move that sentence after the group enters, e.g. make [3] ELSE "Dot leads them down the aisle by torchlight to the empty seats in Row F. Up at the little window at the back, Win is waiting by the port. None of them looks up at it. Nobody ever does."

9. **E03 [3] contradicts Ada's rule 4 when there was no real anchor.** This affects E03 with `anchor` = none or slide. Rule 4 (B02 [4]): without something that was really there, "it will be gone again by morning". E03 [3] says "By morning, Win says it's like a dream she can't put in order. By the end of the week she has stopped trying." On those states the memory should already be gone by morning. As written it lasts longer than E04's single anchorless night.
   *Fix:* make [3] depend on the anchor. With glass, keep the current text. Otherwise use something like "By morning even the muddle has gone: nothing real lit it, just as Ada warned. The Lantern will never light again."

10. **E05 [3]: the player uses Ada's viewer a week after the handover.** This affects every E05 route. Ada's viewer sits in the archive under the stage (B01 [3], B05 [0]). E05 [2] has the keys handed to Starlite Video at midnight, but [3] has the player "a week later" cranking the rolls through Ada's viewer, which leaves the player in a building they can no longer enter.
    *Fix:* set it before midnight ("Before Mr Hale locks up, you crank the rolls through Ada's viewer one last time…"), or say the player took the cans and viewer home with Hale's blessing.

11. **E08 imagePrompt has the wrong month.** This affects every E08 route. The text sets the scene "on the Monday", which is Monday 27 October 1986, two days after the show. The prompt says "Dry, bright November morning".
    *Fix:* change it to "Dry, bright late-October Monday morning".

### Verdict

**FINDINGS: 11.** No stamp has been recorded. Fix these, run `npm run check`, then start a fresh independent round 2.
