# Player Two — story bible

Id: `player-two`. Revision **1**. Personal-use *The Last Starfighter* (1984) adventure. **50 pages: 41 scenes and 9 endings**, five good (exactly one best), four bad. Original unnamed, gender-neutral teenage arcade technician. Basic header, fade transition; no new engine features. Art is deferred and there is no continuity stamp until independent review.

## Premise and emotional contract

Summer 1984, Bellwether, a small American town. A makerless Starfighter cabinet arrives at Mica Bell's arcade. Its scores transmit without a telephone connection. Centauri explains that the game recruits for the Star League, an alliance defending inhabited worlds against an enemy armada. The player's service work, rather than a record score, brings an offer of a supervised flight-engineer placement. Alex Rogan is mentioned only as the record holder already deployed elsewhere. He never appears or solves this mission.

The player joins original pilot Tavi Renn aboard a Gunstar, a League spacecraft with separate flight and engineering stations. Grig trains and certifies the player at a League service dock. A raiding detachment threatens Latchpoint, an outpost sheltering supply crews. A relief force is coming, but the outpost must remain habitable until it arrives. The player diagnoses the ship, conserves charge, and chooses how to defend it. Their work can preserve the shelter, supplies, or the whole outpost and a tested defence the relief crews can repeat.

At home, people usually thank the person whose initials light up the game. The technician wants work behind the panel to count too. Mica already values that work; the arc is learning to ask for and occupy a real place on a crew. Tavi begins by rehearsing every manoeuvre aloud, including confident-sounding mistakes. Partnership means the pilot waits for the engineer's ready signal, and the engineer speaks up. No medal, prophecy, chosen-one score or magically intuitive expertise.

## Cast and voices

| Name | Role and voice |
|---|---|
| Player | Original unnamed teenager; gender never stated. Practical, observant, occasionally impatient with decorative green lights. Knowledge of relay contacts, fans, power branches and cabinets transfers through demonstrated training, not instant mastery of alien technology. |
| Mica Bell | Original arcade owner; square glasses, cropped dark hair. Affectionate invoice humour and concrete trust. Calls repairs by the faults customers report. |
| Centauri | Canon recruiter. Salesmanship, extravagant job descriptions, capable of becoming plain when asked what the job really involves. Consent and a route home are real. No actor likeness. |
| Tavi Renn | Original League pilot; blue-grey skin, short white crest, adult woman. Precise manoeuvre calls, theatrical confidence, dry admissions when machinery disagrees. Physically present from A05 through the mission, except explicit workshop/walkway separations; always flying while the player engineers. |
| Grig | Canon navigator/instructor; friendly reptilian alien, warm rumbling humour. Remains at the service dock; later voice only, never secretly aboard. |
| Neve Sorn | Original Latchpoint keeper; amber skin, short rounded horns, middle-aged woman. Counts beds and kettles rather than abstract assets; brisk, hospitable. Stays at the outpost's control room once the Gunstar departs. |
| Odo Pike | Original tug captain, heard only by radio. Patient deadpan, judges events by their effect on freight. Never appears in a scene image. His tug is assisted only on C04. |

Any other people are unnamed ordinary workers or family heard offstage, not additional canon characters. All scene images list only visible subjects. Alex is text-only.

## Setting and rules

- Bellwether: dry summer evening, 1984; arcade, public telephone, fairground. Home epilogues bridge explicitly to later days.
- League service dock: enclosed workshop light during the same departure night; space outside has no weather. A06 is the first hop there; B01 introduces Grig.
- Freight corridor: same mission, later shipboard night. C01 is the second hop. A third hop at C02→C05 takes the Gunstar to Latchpoint's approach. C06/C07 then dock under ordinary thrust.
- Latchpoint: a wheel-shaped shelter and freight outpost attached to a rock, with a survey mast and separate shield vanes. Enclosed scenes have no weather; exterior scenes are vacuum. Neve introduces herself by radio before meeting the player.
- Defence orbit: D08→D09 uses a fourth short hop to get above the shield before the raiders arrive. Ordinary manoeuvring uses conventional engines; it is not another free jump.
- All four hops use the SAME Gunstar's bank. It begins at its dispatch allocation, differing by difficulty. There is no refill during the mission. Life support, radios and ordinary thrusters use separate power. Return passages and rescue happen later with explicit dock recharging or a recovery tug; no free mission hop is implied.
- JUMP CHARGE also powers portable tests, tractor work and high-load shield interventions. Every helpful optional detour after boarding spends it; Earth opening scenes are required, apart from the legitimate refusal, and contain no free optional investigations.
- The armada's local detachment has unmanned scouts directed by a tender. No biological enemy is shown being harmed. Holding off this detachment does not defeat the entire armada. The relief force, not the player, secures the larger corridor.
- Scouts acquire targets from returned survey pulses, not eyesight. Their tender samples the reply during the dark interval after its transmitted pulse. C03 provides a recorded signature proving which interval belongs to this detachment; the ship's ordinary radar display alone cannot supply that record.
- A diagnostic latch can hold a false output while the equipment behind it continues working. The arcade demonstrates the principle. B03 tests and records the Gunstar adapter's pin assignment. D03 physically traces the outpost's grey diagnostic socket to the survey mast, separately from the shield power feeder. These are three distinct facts, not three passwords.
- Best: put the survey mast's identified grey socket on the adapter's isolated output and close the switch in the dark interval, using the recorded enemy reply. The scouts receive a false empty-space position while the real shield keeps running. The unchanged outpost equipment records both sides of the successful signal, so the relief engineers can repeat the defence if the detachment returns.
- Ordinary shunt defence holds the habitation shield but burns out the exposed freight/navigation equipment. Optional tug assistance PLUS securing stores preserves the freight through that operation. A feeder-tracing route may instead use the remote handwheel to rotate shield vanes, saving the outpost while accepting a long repair. A bright decoy pulls only scouts away, leaving the tender free to force evacuation; this is a plausible incomplete tactical plan, not a punishment for cowardice.
- Nobody is graphically hurt. Failure means lost placement, a disabled assignment or an evacuated/lost outpost. Safe refusal is good. Waiting in the berth after accepting the mission fails the defence but permits orderly evacuation.

## State

| Flag | Meaning |
|---|---|
| `charge` | Visible numeric JUMP CHARGE, format number, unit %. Defaults to 90. |
| `difficulty` | easy / medium / hard |
| `running` | Meter active from A05 until the selected resolution, false in every ending. |
| `returnedFromDock` | B09 refusal returns home by a League passenger flight; E01 does not replay the Earth invitation. |
| `splitMinimum` | Fixed taught threshold, 20; interpolated in prose rather than hard-coded current readings. |
| `latchTest` | B03 adapter pin assignment measured and recorded; one-use visit. |
| `sleeve` | B04 insulated connector sleeve issued; remains with the ship if fitted. One-use visit. |
| `heardTavi` | B05 optional personal conversation; later callback, never a best gate. |
| `echoRecord` | C03 detachment reply recorded; one-use visit. |
| `tugHelp` | C04 Odo's tug freed; one-use visit and later freight support. |
| `feederTraced` | D03 grey socket-to-mast route established; one-use visit and alternative local-control success. |
| `storesSecured` | D04 freight secured for Odo; one-use visit. |
| `localAction` | none / isolate / reset / sleeve / brace / pull. Renders chosen simulator/repair action; reset at B09 and D08 so it cannot leak into later prose. |
| `pulseTried` | First bright-interval attempt failed; hides repeat mistake. Dark-interval retry remains possible. |
| `station` | outpost / defence. Recovery scene accounts for whether the Gunstar is docked or deployed. Defaults to outpost; no recovery can be required earlier. |

Tavi's presence is fixed rather than a recruitable flag. Grig and Neve are distinguished as radio speakers outside their own locations. Optional possessions stay out of merged illustrations. No numeric variable grows unbounded and no paid visit can be repeated.

## Meter arithmetic

Starts: **Easy 100%, Medium 90%, Hard 80%**. The meter measures stored charge, not elapsed minutes. The four hops cost **10 + 15 + 10 + 10 = 45**. Three required best-route investigations cost **5 + 5 + 5 = 15**. The final split-field operation costs **10**, and may start only with at least **20**, retaining ten for the field's second bank. Thus best costs **70** and ends at **30 / 20 / 10**. Medium permits one ten-point recovery, Hard none. Easy permits two ten-point recoveries. These are thresholds for the strongest resolution, not for surviving the story.

| Action | Cost |
|---|---:|
| A05→A06, Earth to League | 10 |
| B02→B03, live isolated-output test | 5 |
| B02→B04, connector-sleeve exercise and issue | 5 |
| B02→B05, meal and extra cockpit familiarisation with Tavi | 5 |
| B06→B08, full-rack restart mistake | 10 |
| B09→C01, League to freight corridor | 15 |
| C02→C03, approach/listen/return at survey buoy | 5 |
| C02→C04, tractor detour to free tug | 5 |
| C02→C05, hop to Latchpoint approach | 10 |
| C05→C07, following automatic dogleg | 10 |
| D02→D03, powered feeder tracing | 5 |
| D02→D04, freight winch work | 5 |
| D05→D07, pulled connector and thermal recovery | 10 |
| D08→D09, deployment hop | 10 |
| F03→F04, bright-interval mistake | 10 |
| F03→F05, split-field operation | 10; requires 20 before spending |
| F01/F03→F06, ordinary shield shunt | 5 |
| F01→F08, bright decoy attempt | 5 |
| F01→E08, remote handwheel defence | 10 |

Costs live on choices. A nonterminal expenditure needs more charge than it consumes; the split operation has its stronger reserve gate. Optional visits simply cease to be affordable. The deployment checkpoint and final controls offer recovery if no continuation can be powered. Earlier mandatory hops cannot exhaust the bank even after all available detours and the simulator error; exhaustive checks establish this, so there are no unreachable early recovery options. Grig teaches that the coupling needs residual charge to open again, explaining why even ordinary operations cannot empty the bank. Consequently the meter never becomes negative and `allowExpiredOn` is empty. Recovery uses the radio and separate life-support supply, not a nonexistent final jump. An unobstructed ordinary shunt route costs **50**, leaving **50 / 40 / 30** even without any clue visits. Helpful detours cost real reserve: sleeve and conversation are each five; tug plus stores cost ten and earn a distinct ordinary ending.

## Evidence / clue map

| Page | What the reader can learn | Later role |
|---|---|---|
| A02 | A game can hold its displayed picture while its underlying counters keep running; service observations, not a score, matter. | Establishes a familiar model without an alien solution. |
| A03–A05 | Scores are a test; League and armada; flight engineer operates systems beside an original pilot. | Newcomer contract and role. |
| B02 | Split-bank reserve requirement taught before paid investigation. | Fair final charge threshold. |
| B03 | Tests the Gunstar adapter; output latch is electrically separate from the load, pin assignment recorded. | `latchTest`, needed to connect the later patch. |
| B06–B07 | A green indicator can remain powered while another branch fails. | Hands-on diagnosis, ordinary repair choices. |
| C03 | Recorded tender reply comes in the dark interval, not the bright transmitted pulse. | `echoRecord`, needed to construct the patch and choose timing without a late reminder. |
| D03 | Grey diagnostic socket goes to the survey mast; shield power goes by a different feed. | `feederTraced`; best patch or ordinary remote control. |
| F01–F03 | Present-tense sockets and bright/dark traces, without replaying clue explanations or endorsing a solution. | Player chooses the patch and independently selects the dark interval. |

No companion recalls the clue chain at the decisive choice. The qualified patch appears only with the measured information needed to make that wiring feasible. It does not automatically select timing. Spare charge cannot substitute for missing observations. The mistake is recoverable once; no irrevocable hidden “ever made an error” best-ending exclusion.

## Page and route table

| Section | Routes |
|---|---|
| Earth | A01 cabinet delivery → A02 repair → A03 recruiter → A04 invitation → E01 refusal OR A05 pilot/ship → A06 first hop → B01. |
| Training | B01 introduction → B02 finite workbench hub. B03 adapter, B04 sleeve, B05 conversation return to B02. B06 simulator → B07 isolated repair OR B08 restart → B07 OR E02 false sign-off. B07 → B09 dispatch, with the promised optional passage home to E01 before accepting the assignment. |
| Transit | B09 → C01 hop → C02 finite corridor hub. C03 buoy and C04 tug return to C02. C02 → C05 hop/approach → C06 receiver trim OR C07 automatic dogleg → D01 dock. |
| Outpost | D01 Neve → D02 finite gantry hub. D03 tracing and D04 freight return to D02. D05 cooling fault → D06 brace/sleeve OR D07 pulled-plug recovery → D06. D06 → D08 defence assignment → D09 deployment OR E03 berth failure. |
| Defence | D09 → F01. Main cable → F06 shunt → F07 aftermath → E06/E07. Measured adapter-to-grey-socket patch → F02 patch → F03 timing. Bright → F04 recovery → F03; dark with reserve → F05 split → F10 debrief → E09. Bright decoy → F08 → E05. Known feeder remote handwheel → E08. |
| Recovery | D08/F01/F03 can reach F09 when essential charge is unavailable → E04. F09 bridges location using `station`. |

Representative careful best itinerary: A01 A02 A03 A04 A05 A06 B01 B02 B03 B02 B06 B07 B09 C01 C02 C03 C02 C05 C06 D01 D02 D03 D02 D05 D06 D08 D09 F01 F02 F03 F05 F10 E09. Fast ordinary itinerary skips B03, C03 and D03, then F01 F06 F07 E06. Normal full routes target 15–25 minutes; early refusal and washout deliberately finish sooner. The final rendered careful route has 33 page visits, 4,618 prose words and 350 offered-choice words; the fast route has 25 visits, 3,600 prose words and 252 offered-choice words. At an illustrative 200–250 words/minute, those totals suggest about 20–25 and 15–19 minutes before deliberation. These are reading estimates, not timed audience evidence; slower careful readers may exceed the target.

## Endings

| ID | Title | Label and consequence |
|---|---|---|
| E01 | The Shop Light | Good: decline on Earth or after training, then continue valued repair work at home. The latter has an explicit two-evening passenger-flight bridge. |
| E02 | Back to the Bench | Bad: falsely certify the simulator; placement withdrawn, paid passage home, chance to apply later. |
| E03 | Empty Berth | Bad: remain docked; outpost evacuated and lost, crew safe. |
| E04 | Towline | Bad: assignment suspended for insufficient charge; ship recovered, outpost lost, no implied unpowered jump. |
| E05 | A Painted Target | Bad: decoy distracts scouts but leaves tender free to force outpost evacuation. |
| E06 | Still Standing | Good: habitat saved by shunt, freight/navigation equipment lost; relief secures station. |
| E07 | Freight Home | Good: shunt plus `tugHelp && storesSecured` saves stores as well as shelter; navigation equipment needs replacement. |
| E08 | The Long Repair | Good: mapped remote handwheel saves shield by sacrificing vane machinery; shelter survives, repairs extensive. |
| E09 | Player Two | Good / **BEST**: split-field trick keeps the whole outpost intact, records the working defence for relief engineers; real engineer partnership. |

## Art plan and validation boundary

Use one fixed clothing description per person in `art.cast`, supplied globally without paraphrased wardrobe in scene prompts. Player is seen from behind, face hidden; same workshop outfit throughout, with cockpit harness as installed seat equipment. Ground and dock environments support that outfit; no unprotected vacuum excursions. Name only visible cast; radio voices, Grig after departure, optional equipment and helpers stay outside merged image crops. Prompts state location, light/time and weather or enclosed/no-weather conditions. Comic machinery mishaps and remote lights replace violent combat imagery. Gunstar and Starfighter cabinet are intentional franchise props; no other famous vehicle or real likeness. Every page has an imagePrompt. No images, references, exported prompts or art-source directories in this writing phase.

Regression tests exercise complete clue gates, timing recovery, each difficulty's exact best reserve, ordinary victory, pilot/radio separation, local action reset and optional freight support. Run `npm run check`, `npm run test:story`, `npm run test:art`, and manually read rendered careful/fast itineraries. The existing wildcard story test command already discovers `scripts/player-two-regressions.test.ts`; it needs no package change. Parent thread owns independent continuity review and its stamp.


## Writing-phase validation — 13 October 2026

- `npm run check`: TypeScript passed. All four stories printed **OK: every path is coherent**, with every ending reachable. Existing packs retain 11/11, 11/11 and 10/10 endings. Player Two reaches **9/9 endings**, **20,151 page/state combinations**, **34,250 distinct playthroughs**.
- `npx tsx --test scripts/player-two-regressions.test.ts`: **19/19 pass**. The existing `test:story` wildcard discovers the file without any package-script change.
- `npm run test:story`: **82/83 pass**. The sole failure is the pre-existing all-stories revision-3 assertion at `scripts/editorial-regressions.test.ts:26`, which rejects this required revision-1 pack. The user explicitly instructed the writer to **leave that shared test unchanged and report the failure**. All other existing tests and all new tests pass. No other story was revised.
- `npm run test:art`: **3/4 pass**. The only failure is `player-two: create references/manifest.json before generating art.` References and images are expressly deferred; no gate was bypassed and no reference, prompt export or art-source directory was created.
- `npx tsx /tmp/player-two-read.ts`: a temporary read-through harness rendered the actual Medium careful and fast routes through the engine, including visible choices and charge. The writer read both from start to ending. It measured the word counts above; it is not an independent blind-reader or timed audience test.
- Self-read corrections: afternoon cabinet arrival allows the local tracing attempts before dusk; Grig explicitly issues the notebook; optional live exercises are distinguished from the mandatory dock-powered simulator; hub exposition does not repeat after completed visits; speaker shutdown happens before its audible payoff; the removable adapter is explicitly returned to the ship; the ordinary defence does not assume an opened adapter; the promised post-training refusal is playable. Neve does not know a private earlier naming joke she never heard.
- `git diff --check`: clean. Only the new bible, new pack, new regression test and last-place registration are changed. Shared revision test remains untouched.

Independent continuity review is **pending with the parent thread**. The writer has not created or changed `.continuity-review`. No known unresolved path contradiction remained in the two self-read routes; the main review focus is newcomer comprehension of the signal/power split and the upper end of the careful-route length. This is an implementation handoff, not an independent editorial clearance.
