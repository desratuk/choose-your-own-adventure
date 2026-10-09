# Independent adversarial review

**Final outcome: PASS.** Initial findings and two follow-up regressions were corrected; the final independent review found no material publication blocker and stamped the current story.

Claude Opus 5.5 (`claude-opus-5-5`), xhigh effort, 9 October 2026. Independent first review of the implemented revision 3 working tree, before any corrections recorded below. This report preserves the reviewer’s findings rather than implying that they describe the final version.

# Senior editorial and continuity review: *The Fratelli Run* (`fratelli-run`), current working tree

**I did not stamp it. The gate wasn't run, and `fratelli-run` stays unstamped.** One continuity defect blocks the pass. Two smaller continuity slips and one editorial must-fix also need attention.

## Overall verdict

This is a commissionable manuscript, one or two revisions from approval. The revision is mostly a real improvement:
- It cut the narrator's moral asides from D07, U03, P05 and E11.
- The P03 choices no longer hint at the right answer.
- The sump crossing and the grate are now acted out on the page instead of summarized.
- P01 now matches its illustration: every reader sees the door, so the puzzle is how to reach it safely.
- An early signal can now be corrected at P06.
- E03 has become an honest, limited good ending.

I would still not approve it as it stands. A continuity contradiction remains on a reachable bad ending. The new P05 option also leaves the best ending turning on a choice the text cues the wrong way.

---

## A. Continuity

### A1. Blocking: Francis is in two places when F02 runs out of margin

The defect is on page F02 when `lead ≤ 0`, and it carries into E06.

- **F02 [3], Sloth version:** "The grate drops behind you with a clang. Francis hits the bars and sits down."
- **F02 [4], solo version:** Francis "stays stuck, swearing, until you're out of earshot."
- **F02 expired line** (`story.ts:900`): "Jake has driven the van round while Francis chased you."
- **E06 [0]** then has "Francis said, 'Gotcha'" at the way out.
- **E06 [2]**, with Sloth: "Francis ordered him to come along too."

Francis was last seen sitting behind a closed grate deep in the tunnel. In the Sloth version that is plainly contradicted. Sloth also stays with you on this path, because F02 [5] ("Home now") needs `lead ≥ 1`, so E06 [2] does render.

**Concrete route (Hard, 90):** D01→D03→D04 (flats)→D06 (travel light)→D05→D07 (80)→D08→D05→U01 (70)→U02 right→U04 shelf (60)→U05 together→U06→P01 "Feel along the pilings" (40)→P03 "Signal across the flats now" (30)→P04→P05 "Tell Sloth your escape plan"→P06 signal (25)→P07→P08→F02 (0).

A Medium version also reaches it: garage + depot + police + wade + feel + timed signal arrives at F02 at −5.

This bug predates the revision; the revision-2 review missed it.

**Fix:** change F02's expired line to something like: "At the uphill arch a flashlight sweeps the street: Jake has driven the van round, and behind you Francis has finally wriggled through the grate's rusted corner." That makes both versions agree with E06 without touching E06.

### A2. Minor: on the street route, F02 refers to places you never saw

F02 [6] says "Above the grate, the sump has drained to a puddle … take the uphill passage at the fork". Street-route players (T08→T09→P01…→F02, with `viaLowline=false`) have never seen a sump or a fork. This route is in the outline's own test table ("Direct street route … Hard E09 at 10").

**Fix:** make it conditional, or use neutral wording such as "a dip in the floor has drained to a puddle; you keep to the uphill branch where two tunnels meet."

### A3. Minor: "until you leave town" (D04 [2])

No route leaves town. D05 says "until you choose a way down".

**Fix:** use the same wording as D05.

### What I checked and found clean

- **Every new conditional:**
  - D05's first-visit and return text use the same condition, and every return route sets one of its four flags.
  - U05 shows the right crossing, U06 the right grate action, and both temporary flags clear on time.
  - The P01, P02 and P03 door, sill, map and `foundDoor` versions all fit.
  - P06's three Sloth outcomes can't overlap.
  - F03's three failure paragraphs cover every case exactly once (the margin always moves in steps of 5, so the ≤19 and ≥20 tests leave no gap).
  - The E10 variants are correct.
  - E03 reads correctly with and without the chart and the phone call.
- **D02's zero cost** matches what the prose says happens.
- **U05:** Sloth waiting on the far side holds up, since the story already has him crossing the grate alone at P05/P06.
- **T06's Francis line** on the side-door route reads as a reveal from the hat on the dashboard, not as an error.
- **Elsewhere:** meter wording, tide and clock times, speaker attribution, the order in which characters are introduced, and the labels on all eleven endings.

---

## B. Adversarial editorial

### Must fix: P05 now cues the losing choice (introduced by this revision)

Before this revision, P05 offered "leave the choice to him" against an obviously exploitative "hold off your brothers". The new "Ask whether Sloth would rather head home now" is a good idea, but it went in next to an existing line that now points the wrong way:

- **D04:** Chunk says "ask him, don't just count on him."
- **D08:** the stop rule, "Stop means stop."
- **P05 [4]:** Sloth covers his ears, breathes fast, and says "**Stop**." "You stop."

Right before the choice, the reader has just watched a terrified friend use the agreed safe word. My judgment is that many kind readers, which is this audience, will offer him the way home, because the text cued exactly that. P06 then confirms their reading ("Home," he says), and E11 quietly becomes impossible. F03 [11] never says what went wrong.

The winning option is set apart mainly by its moral-sounding label ("…then leave the choice to him"). Nothing in the scene shows that Sloth wants to stay. That misses the editors' own test: "an attentive first-time reader can cite the earlier evidence." This isn't an inference. It's a coin toss between two respectful labels, and the story's own cues favour the losing one.

**Minimal remedy, keeping the outline's intent:**
1. In P05 [4], replace the "Stop" exchange with fear that still visibly holds on. For example: "When you touch his sleeve, he lowers one hand and closes it around yours. He looks at the iron door, not the drain."
2. Change the best choice's label so it doesn't carry the moral: "Whisper your plan and wait for his answer."

Offering home then becomes a fair, kind misreading that still ends well, and continuing becomes something the reader can work out.

### Valuable optional polish

1. **The appended Sloth coda** (`slothWaits`, `story.ts:913–916`):
   - It is now the last paragraph of up to nine endings, and it deflates their best closing lines: E10's "Obviously", E09's Mouth fib, E03's thermos.
   - "The promise made in the garage holds: he is free to turn back…" is exactly the kind of narrator certificate this revision cut elsewhere.
   - On E09 it repeats [5] whenever `slothChoice` is set, so Sloth's safe return is reported twice.
   - Suggested fix: replace it with one concrete image, such as "Chunk phones later: Sloth is home, asleep, the chocolate bar still in his pocket" (a callback to D08), and drop it from E09.
2. **F03's failure choreography is cluttered:**
   - Mouth grabs your sleeve at [3], then grabs it again in [9], [10] and [11].
   - [10] puts him "on the other side of the barrier" after he has already reached you.
   - In [11], "Jake sees him too" doesn't say who "him" is.
   - Pruitt has already turned and said "Let the child through" in [7], yet [11] has Mikey still getting him "turning".
   - Suggested fix: cut the sleeve from [3] and keep one clear cause per failure.
3. **P07 [1] tells the timed-signal payoff after the fact.** This is the moment the clue chain pays off, but it arrives in a past-tense flashback after the door is already open ("There was now bare sand…").
   - Move it before [0] and put it in present tense.
   - "Campaign hat" comes before Pruitt's hat is described at F03, so "the sheriff's hat" is clearer for young readers.
4. **Too much scheduling exposition** across D04 [2], the tail of D06 [3], D07 [7] and D05's Mouth timetable. It reads like the outline's companion ledger. Keep D08's version, which matters to the story, and cut the others to a line of dialogue each.
5. **D01 [1]:** "Their friends call themselves the Goonies" suggests to a newcomer that Chunk and Mouth aren't Goonies. "They and their friends…" fixes it.

### Taste (not defects)

- E03's art prompt still asks for a "doubtful slump" on what is now a good ending.
- E11 hands out cider twice in quick succession.

### Challenge and fairness

- The changes didn't remove too much challenge. On Hard, a single early signal still rules out E11 even after correcting it. The no-rope and solo routes keep their ordinary good endings.
- The early signal at P03 is now fairly set up: a boot scrapes directly overhead, and Mouth's "When it isn't a river" warned about the flats. That is inference, not instruction.
- E10 is the only option when the run isn't coordinated, but the story earns it.
- I found no ending that makes the player do something they didn't choose.

---

## What works especially well

- **The key mystery:** the tag "7 · LOW WATER" plus the poster's "LOW TIDE, 9:41" lets readers deduce where the key goes. The tide works as a real, physical deadline.
- **P03's overheard argument** now gives the plan through character comedy ("I am not carrying those cylinders down a wet ladder").
- **The crossings** are real action now. The rope's "pull hard twice" pays off Data's "Test the hook".
- **The fake deputy** is fair: a laundry van, a police radio, and "patrols tied up until nine".
- **Competent adults:** Olafsen's clipped report and the competent official ending (E03) let grown-ups do their job.
- **Sloth's dignity** at its best: "the footsteps overhead belong to people who used to decide where he was allowed to go."
- **The comedy:** Mark Two and the lamp, MAMA'S. HANDS OFF, Jake blaming Francis "for inventing mud", Mouth's "Obviously".
- **E11's last image** pays off the opening line exactly: cold, muddy shoes, friends listening.

Fix A1 (one line), A2, A3 and the P05 cue, then run a fresh continuity review. I would expect it to pass. I made no edits and no git changes.

## Implementation response — 9 October 2026

The writer addressed the findings after this independent first review. This section records implementation, not reviewer approval; the findings above remain unchanged.

- **A1:** F02's expired passage explicitly places Jake at the arch and describes Francis wriggling through the grate's rusted corner and catching up during the uphill climb. It renders after either the Sloth-held grate or the solo squeeze, before E06 recalls both brothers at the capture. A new Hard regression traces the review's accompanied route to zero margin and E06; the existing expired street route also checks the catch-up.
- **A2:** F02 now distinguishes a remembered sump/fork from a newly encountered floor dip/junction on street arrivals. The direct street route retains its ordinary success and unchanged budget.
- **A3:** D04 now says Mouth waits until the player chooses a way down. No route is described as leaving town.
- **P05 editorial must-fix:** the garage stop rule remains. At the pier, Sloth takes the player's hand and looks toward the door while afraid; he does not use the agreed stop word. The continuation action is “Whisper your plan and wait for his answer.” The respectful home option and his rear-guard refusal remain distinct, with unchanged outcome gates.
- **Optional polish:** the timed signal is dramatized before the ice-house door opens; “campaign hat” is replaced by Mikey fetching the sheriff. F03 has a single sleeve-grab in each outcome, with no unexplained barrier crossing, vague “him,” or repeated sheriff turn. Scheduling prose is shortened while retaining all departure/location commitments. D01 includes Chunk and Mouth explicitly among the Goonies. E11's duplicated cider handout is removed.
- **Ending updates:** the generic Sloth-home coda is a concrete report about reaching the hatch and a place at Chunk's family table. It precedes the last unconditional closing paragraph, and is removed from E09, whose existing chosen-return update and new rendezvous/refusal update are mutually exclusive. No captive-player phone call or untracked chocolate possession is assumed. E03's doubtful image pose is retained because the pictured handover precedes knowledge of its limited good result.

No new flags, routes, page IDs, meter costs, image prompts, artwork or stamps were introduced in this response. All 27 focused regressions pass. A fresh `npm run check` passes all three stories; Fratelli has 1,216,291 page/state combinations with all endings reachable. `git diff --check` passes. Independent acceptance review still follows these corrections.

## Independent acceptance re-review

Claude Opus 5.5, xhigh effort, 9 October 2026. The reviewer confirmed the prior corrections but withheld the pass for two newly identified line-level issues.

**Not stamped. fratelli-run did not pass.** I didn't run the gate, and I edited nothing. All four findings from the first review are properly fixed. But the writer's new placement of the Sloth-home paragraph created one regression, and it blocks the pass. There is also one small staging slip.

## Prior findings: all fixed on every affected route

- **A1 (Francis in two places at F02):** fixed. F02's expired line now has Jake bring the van round and Francis "finally" wriggle through the grate's rusted corner and catch up. That follows on from both earlier versions: Francis sitting behind the closed grate with Sloth, and Francis stuck on a bar when you're alone. E06 ("Gotcha", "Francis ordered him to come along too") now agrees. Sloth correctly stays with you on that route, because his "Home now" line only appears while margin remains.
- **A2 (street route at F02):** fixed. Players who never went underground now meet the floor dip and the tunnel junction for the first time, and are told nothing they shouldn't already know. Every route passes the Lowline arch at D05, so "the Goon Docks arch" means something to every reader.
- **A3 (D04, "until you leave town"):** fixed. D04 now says "until you choose a way down".
- **P05 cue:** fixed fairly. Sloth now takes your hand and looks at the ice-house door, which shows he wants to go on without saying so. He no longer says "Stop" right before the choice. The best option is labelled neutrally, and the three Sloth outcomes at P06 can't overlap.
- **Optional polish:** all done. The timed signal now plays in present tense before the door opens. F03 has one sleeve-grab per outcome, a clear "Jake spots the sheriff", and a single sheriff turn. E11's cider appears once. E09's two Sloth updates exclude each other.

I also checked:
- **D02's zero cost:** no new contradictions follow from it in D03, T04 or E03.
- **E03 as a good ending:** it reads correctly with or without the chart and with or without the phone call.
- **The new action flags:** the crossing shows correctly at U05 and the grate action at U06.
- **P01–P03 sill and door:** the variants are consistent, including after retreating from P02.
- **E10:** the variants read correctly whether or not the handoff was coordinated.
- **Artwork:** every changed page's illustration still fits every route into it.

## Remaining continuity defects

**1. Blocks the pass (regression): E10, paragraphs [5]→[6].** The Sloth-home paragraph is now inserted before E10's last unconditional paragraph. That puts it between the sheriff paragraph and "For now **he** gives you a hot dog…". So "he" now seems to mean Chunk or Sloth, not the sheriff. The reader sees:

> Afterward, Chunk tells you Sloth got home through the garage hatch. Chunk's parents had a place waiting at the kitchen table.
> For now he gives you a hot dog while Data examines the torn seam.

- **When it happens:** every E10 arrival where Sloth agreed to the rendezvous but isn't with you at the end. That covers offering him home, asking him to hold off his brothers, and the street route after arranging to meet him.
- **Exact route (Medium, matching the outline's own "offer Sloth home" test, E10 at 35):** D01→D03→D04 flats→D06 take launcher→D05→D07→D08→D05→U01→U02 right→U04 launcher→U05 "Lift the catch while Sloth takes the weight"→U06→P01 "Feel along the pilings…"→P03 "Keep watching from the crossbeam"→P05 "Ask whether Sloth would rather head home now"→P06 "Signal across the flats…"→P07→P08 flats→F01→F03→E10.
- **Fix:** change it to "For now **the sheriff** gives you a hot dog…". That reads correctly whether or not the Sloth paragraph appears. I checked every other ending that gets this paragraph: none of them has a pronoun that loses its subject.

**2. Minor: P05, paragraph [4] then [6], whenever Sloth is with you.** In [4], Sloth "closes [his hand] around yours". Then [6] says "Your own hands are shaking. You stop hiding them in your pockets." One of your hands is already out, held by Sloth. This line is new in this revision and sits on the best-ending route.
- **Exact route:** the clean best route through U05 with Sloth→U06→P01→P03 "Keep watching from the crossbeam"→P05.
- **Fix:** a version that works with or without Sloth, e.g. "Your own hands are shaking. You stop pretending they aren't."

## Publication status

Issue 1 alone stops editorial approval. Both fixes are one-line text changes, with no change to flags, routes or the margin. After them I'd expect the story to pass a fresh review, and nothing else stands in the way of approval.

## Taste and copyedit (not continuity, not blocking)

- **Straight apostrophes:** E03 [6] "don't" (new in this revision), U05 [5] "doesn't" and E08 [3] "doesn't" use straight apostrophes in an otherwise curly-quoted manuscript.
- **D05 repeats:** on a third or later visit to D05, the depot and chart hand-offs repeat word for word. They read as a recap, not a contradiction.
- **E03's art prompt:** it still asks for a "doubtful slump" on what is now a good ending.

### Response to acceptance findings

E10 now names “the sheriff” as the person offering the hot dog, so inserting the Sloth-home update cannot change the pronoun’s apparent subject. P05 now says “Your own hands are shaking. You stop pretending they aren’t,” which works both with a hand held and on solo arrivals. The three straight-apostrophe contractions identified at U05, E03 and E08 now use the manuscript’s curly apostrophes. No event, choice, state, meter, illustration or companion rule changed. D05’s occasional recap and E03’s uncertain handover pose remain intentional; the latter occurs before the outcome is known. A final independent re-review follows.

## Final independent acceptance

Claude Opus 5.5, xhigh effort, 9 October 2026. The independent reviewer recorded the matching final continuity stamp.

PASS: fratelli-run

I checked the five-line delta against the full current `story.ts`, the outline and the fresh arrival dump, reading each page under every arrival state listed in the dump.

**The two slips the second review flagged are fixed:**
- **E10, ending paragraph:** "For now the sheriff gives you a hot dog…" now names its subject, so it reads correctly whether or not the Sloth-home paragraph appears just before it. That paragraph appears on routes where you offered him home, where he refused the rear-guard job, or where you took the street route. The next "You thank him for not letting go" clearly means Mouth, who has had your sleeve on every route into F03 and E10.
- **P05:** "Your own hands are shaking. You stop pretending they aren't." works when Sloth is holding one of your hands. It also works on solo arrivals, and it follows naturally from a soaked player pressing their hands under their arms at P03.
- **Apostrophes:** U05, E03 and E08 now use curly apostrophes. Nothing else in the reader-facing text has a straight apostrophe or quotation mark. The only one left is in E04's image prompt, which readers never see.

**Elsewhere I found no new problems:**
- The Sloth-home paragraph on E02–E08 and E10 never overlaps the scenes where Sloth is present.
- E09's two Sloth updates can't both appear.
- F02's expired catch-up agrees with E06, and the P01 through P06 variants all fit their routes.
- F03's failure paragraphs never overlap or leave a gap.
- The ending labels match the bible.

As instructed, I treated E03's uncertain pose and D05's recap as deliberate.

**Not blocking:** on the Sloth route, U05 says "Alone, you could work from the lower gap," but that gap is only described on the solo route. It still reads as the gap that opens when the grate rises, so I didn't count it as a defect.

No material publication blocker remains for fratelli-run. The stamp is recorded in `stories/fratelli-run/.continuity-review`, and I made no other edits or git changes. I tried to regenerate the dump to confirm it matches the current source, but the permission was denied. I compared the source and dump text by hand on the changed pages and the pages around them instead.
