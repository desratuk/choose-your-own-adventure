# Blind reader playtests

Six independent agent first plays found coherent adventures and several useful corrections, including a repeated fairness concern in *Return to Sender*. The corrections now preserve meaningful investigation while making its consequences clearer. These are simulated narrative reads, not human audience research or measured enjoyment.

The first plays used commit `fef0da135155bdcfa55fb305c820bdd5beeafd13` on 9 October 2026. [The evidence file](blind-reader-playtests.json) preserves each reader's original report, route, available choices, pre-choice understanding, prediction and reaction, plus the reviewed source hashes. Reports describe the text that reader actually encountered; corrections described below came afterwards.

## Method and limits

Each reader started without conversation history and read only the supplied scene interface, without consulting source, story outlines, previous reviews, hidden flags or ending requirements. A temporary interface called the actual engine's starting-state, choice and rendering functions, revealing one current scene at a time. It included the visible meter and choices but excluded illustrations and browser presentation. Each decision required a recorded prediction before the next scene appeared. The session stopped at the first ending, with no undo or restart; that is stricter than the normal Medium undo allowance.

Three GPT-6-Astra readers at xhigh effort read attentively as interested adventurers. Three fresh GPT-6.1-Sol readers at xhigh favored momentum over exhaustive investigation. Preferences and models varied together; this is not a controlled comparison between models. All models have franchise knowledge from training, so their comments about newcomer clarity concern facts established in the text, not authentic franchise-naive human reactions.

Across the six sessions, the readers visited 125 scenes and made 119 selections, including 69 choices with more than one available option. They reached one best ending and five ordinary good endings. That small, deliberately varied set is useful route evidence, not an estimate of audience success rates.

## First play results

| Story and reading preference | Scenes | Choices with alternatives | First ending | Main observation |
|---|---:|---:|---|---|
| Stopped Clocks, attentive | 25 | 14 | Time Keeper, good | Rescue, stewardship and Red's payoff worked; reporting to the corporate police produced an understandable recoverable complication. |
| Stopped Clocks, momentum | 23 | 13 | Time Keeper, good | Skipped investigation but achieved a satisfying rescue; noticed that the active clamp countdown persisted afterwards. |
| Fratelli Run, attentive | 23 | 14 | The Whole Town Watching, best | Made an early signal mistake, understood it, corrected it and still reached best. Sloth's participation and the belonging arc paid off. |
| Fratelli Run, momentum | 20 | 11 | Fire Night, good | Friends rescued the protagonist and the criminals were arrested, but evidence was lost. The forced sacrifice and missing Sloth-warning callback needed scrutiny. |
| Return to Sender, attentive | 18 | 9 | The Next Delivery, good | Followed Hollis, checked the roll and retained ample capacity; the late requirement for separate service was insufficiently grounded. |
| Return to Sender, momentum | 16 | 8 | The Work Between You, good | Trusted the team and delegated attendance; similarly expected the remaining clerks could be served after the return. |

The two Stopped Clocks routes differed substantially: one pursued the suspect and encountered capture and rescue, while the other traded the Walkman for power. Both accepted saving the town without catching Rex as a legitimate resolution. The two Fratelli readers independently mistimed the first signal and understood the consequence. Both also noticed the premature “ice house” label. Return to Sender's two different approaches exposed the same late explanation problem.

## Corrections made

### Stopped Clocks

S43 and S44 now stop displaying the clamp countdown once the device releases. The numeric time remaining is preserved, so ordinary, best and missing-minute thresholds are unchanged.

The independent continuity pass also found two older inconsistencies. S26b no longer forces an 11:10 PM reading that contradicts the shorter repair itinerary; it retains the existing circuit reading like neighboring 1885 scenes. E08 explicitly moves its museum epilogue back to 2085 before describing the following spring.

No additional family-reunion paragraph or consolidation of transition scenes was made. The family is already restored with the town, and the tower, Red, cassette and letter carry the ending's specific emotional work. One reader found the late transitions slightly slow; the other found them coherent and purposeful. That evidence does not justify removing their distinct scene beats.

The evidence-versus-power fork in S33 remains a commitment between courses of action. One reader would have preferred collecting both objects before deciding where to take the evidence. The resulting complication was understandable and recoverable on the observed route; adding an alarm warning or another branch would change the challenge on the strength of a preference, rather than repair a demonstrated contradiction.

### Fratelli Run

- P06 calls the entrance the iron door, which every arriving reader knows, rather than introducing “ice house” in a choice.
- U05 explains how the existing grate frame supports the rope, making the solo action physically legible.
- F03 explicitly offers throwing the plates into the bonfire. The consequence is no longer softened into “toward the fire.”
- E10 records the warning about Mama's threat to Sloth and notification of Chunk's parents, including routes that never recruited Sloth. The separate homeward update still appears exactly once when applicable.

The intact-evidence condition remains. The faster reader's preparation earned rescue and arrests, but did not interrupt Jake's pursuit long enough for the handoff. F03 already describes Jake holding the coat while Francis prevents a turn, with the sheriff still out of reach. Sloth's freely chosen participation provides that interruption on the coordinated route. Adding a new last-second route to intact evidence would diminish earlier choices; the correction instead makes the offered sacrifice honest. The existing solo station escape also remains an ordinary good alternative.

### Return to Sender

The first correction clarified the team's professional judgment about unverified separate service, but a fresh, source-blind read of the same fixed diner itinerary still found the prerequisite too late. That objection was accepted; merely defending the gate at the ending was insufficient.

R03 now establishes an earlier incident: Ray offered to send the captured clerks home, and they asked who authorised it and for the company's instructions for absent staff. This gives procedural research an intelligible purpose before the investigation hub. It does not reveal certified copies, their required format or the roll solution. E10 now describes unfinished service without suddenly asserting a document requirement the reader never learned.

The missing-roll concern exposed a separate causal problem: Tull is still at his desk, so the names are retrievable. C08 now offers a telephone relay through the hotel's bellhop, Ernie, when the player knows the copy procedure and has at least twenty headroom. The relay verifies all forty-seven names and their cohorts, including any carried captives; it costs ten headroom and sets the existing verified-roll flag. C09 still begins with at least ten headroom available for discharge.

Checking the roll earlier costs five, so it remains worthwhile. On the representative solo route, early verification reaches best with twenty-five headroom; late verification reaches it with twenty. Hard's corresponding late arrival has only fifteen and cannot afford both relay and discharge. Ordinary success remains a choice when the relay is affordable. No new flag, page, ending, artwork or save revision was needed.

Other local corrections remove R04's speculation about an address already identified, attribute the name requirement to matching captives rather than the collective notice, and move certification into C09 so both verification methods receive it once. The continuity reviewer then caught and corrected E09's claim that a voluntarily postponed delivery was impossible, plus missing downstairs-and-back transitions for C10's full-trap releases.

## What the evidence supports

The central emotional beats survived reading without the outlines: the preservation volunteer knowing Red, the Goonies listening, Sloth choosing participation, Hollis setting a place, Tull's relief and the courier keeping unfinished deliveries on record. Optional visits generally had visible in-world reasons. The tested signal mistake was consequential and recoverable; ordinary endings were not automatically rejected for being less than best.

Accessible rescue paths remain clearer than the fullest victories. That is appropriate to the intended family adventure. These runs do not support adding more failures or making sensible choices arbitrarily dangerous. They also do not establish that every pitfall is fair: none of the six readers reached a bad ending, and many branches were not selected.

No reader established a need to expand the stories. Preferences about short transition scenes were mixed. Agent processing time is not reading time, and this pass supplies no new human duration estimate. The earlier [route-length audit](editorial-route-audit.md) remains a record of its measured source versions rather than a timed audience study.

The additional fixed-itinerary reader accepted the final grounding correction on reread and found no concrete defect remaining on that route. That is a targeted editorial check after a revision, not a seventh independent first play or a fresh decision sample.

## Validation and delivery

All 64 story regressions and four art/reference tests pass. New coverage checks countdown visibility without changing remaining time, E10's threat callback across five companion arrivals, late roster verification across all four trap states, discharge reserve boundaries and voluntary deferral.

TypeScript and the Vite production bundle pass. The exhaustive checker reaches all 32 endings:

| Story | Endings reached | Page and state combinations | Distinct paths |
|---|---:|---:|---:|
| Stopped Clocks | 11 of 11 | 240,019 | 88,647 |
| Fratelli Run | 11 of 11 | 1,216,291 | 3,489,499 |
| Return to Sender | 10 of 10 | 82,597 | 519,622 |

During the initial restricted session, `npm run check` completed type checking but its `tsx` wrapper could not create an IPC socket. The same structural script ran successfully as `node --import tsx scripts/check-story.ts`; tests used the same direct loader, and the production bundle used Vite's normal Node entry point. After full permissions were restored, the normal `npm run build`, `npm run test:story`, `npm run test:art` and `npm run story-gate` all passed. No project command was changed to accommodate the environment.

Independent GPT-6-Astra reviewers at xhigh followed the repository's complete story-continuity procedure and reviewed corrections before stamping. Their original findings and final acceptance records are preserved in the evidence file. The latest story hashes and stamps are checked together before delivery.

Browser verification and Git writes were initially blocked by session permissions. After full access was restored, a local preview and the feature branch `editorial/blind-reader-playtests` were created successfully.

Three complete Medium browser replays then verified the revised stories: the original momentum route to Stopped Clocks E09, the momentum route to Fratelli Run E10, and a Return to Sender solo route that deliberately skips the roll and recovers through Ernie to E11. These are implementation checks, not additional blind reads. They confirmed the countdown disappearing after rescue, the Sloth-threat callback, the early procedural clue, both choices at the late relay, and its grid-load increase from 70% to 80%. Every encountered scene image loaded, all three endings survived reload, and desktop (1280×900) and mobile (390×844) captures were inspected without finding layout defects or horizontal overflow. No JavaScript exceptions occurred. The initial picker requested an absent favicon; this unrelated 404 did not affect the replays.

The final browser and standard-command results are recorded separately in the evidence file, preserving the original restricted-session results and all six first-play reports. The reviewed story sources remained unchanged during this delivery verification.
