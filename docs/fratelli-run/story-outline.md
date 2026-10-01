# The Fratelli Run: story bible and outline

Id: `fratelli-run`. A *Goonies* story using the real names (personal use only, as with *The Stopped Clocks*). It never mentions pirates, maps to treasure or gold.

## 1. Premise

Thursday 31 October 1985, Halloween, Astoria, Oregon. At dusk the radio announces that the **Fratellis** (Mama Fratelli and her sons Jake and Francis, the crooks the Goonies sent to jail last summer) have escaped from a prison transport. You live at the Goon Docks, a few doors from Mikey Walsh, and you are wearing a second-hand black overcoat as a private-eye costume. Chunk finds a brass key sewn into its hem. The coat came from the county's auction of the Fratellis' confiscated belongings (lot 12, two dollars). It was Papa Fratelli's overcoat.

The key opens **locker 7** in the old ice house under the Seventh Street Pier. The ice house sits in the pier's footing and can only be reached at **low water**. The locker holds the engraved **plates** Mama used to print fake twenty-dollar bills, which the police never found. Mama sewed the key into the coat so that nobody would think to look. The county then sold the coat.

The Fratellis' plan is to cut open locker 7 with a torch tonight at low tide (9:41 PM), while the town's Halloween bonfire on the river flats and its fireworks cover the noise. Mama brings a boat in at 9:15. They also want the key, which is quieter and faster, so they are hunting the buyer of lot 12.

Everything the player needs to know is explained in the story's own voice: who the Goonies and Fratellis are, what counterfeiting plates are, what the Goon Docks were.

### The mystery and its answers
1. **What does the key open?** Locker 7 in the ice house under the Seventh Street Pier. The tag reads `7 · LOW WATER`.
2. **When can you open it, and where is help?** Tonight's low tide is 9:41 PM (poster in the attic). The bonfire is lit at low tide on the flats at the foot of Seventh Street, and the sheriff's department guards it (radio, Mikey, sergeant). Both are next to the pier.
3. **Who is the "deputy"?** Francis Fratelli in a Halloween deputy uniform. The radio said the escapees stole a white laundry van with a blue stripe, and the "deputy" drives one.

## 2. Canon and consistency rules

- **Astoria** is real: the Columbia River, fog, a hillside town. The Goon Docks is the player's neighbourhood. "Last summer" the Goonies stopped developers from bulldozing it and the Fratellis went to jail (never explained further).
- **Cast:** Mikey (leader, earnest), Data (inventor, gadgets in every pocket), Chunk (big-hearted, always eating), Mouth (fast talker). **Sloth** is the Fratellis' youngest brother, huge and gentle, kept hidden by them for years. The Goonies freed him and he now lives with Chunk's family.
- Brand, Andy and Stef are not in the story.
- Mikey's dad works at the history museum. He is taking the gang to the bonfire at nine. The gang is not allowed out alone tonight, so the player works alone. The gang are at the bonfire in the finale.
- The player is a 14-year-old Goon Docks neighbour, original, no name and no stated gender. They wear the **black overcoat with a worn velvet collar, a brown fedora, red high-tops**, with a small flashlight on a lanyard.
- Tide: high 3:22 PM, **low 9:41 PM**, high 3:47 AM.
- The ice house door is under water until the tide falls. Chest-deep water with a current is dangerous (E04).
- Francis disguises himself as a deputy. Jake and Francis are at the old hideout (a boarded-up restaurant on the waterfront road) in the early evening, collecting a cutting torch, and are at the pier by seven. Mama arrives by boat at 9:15.
- The Lowline is the storm drain running from the head of the Goon Docks to the river outfall under the pier. A second entrance sits behind Chunk's garage; Sloth knows it.
- Nothing graphic. The Fratellis are comic crooks. The worst they do is lock you in a closet or take the key.

## 3. State

| Flag | Values | Meaning |
|---|---|---|
| `lead` | number | **Shown** as "FRATELLI LEAD" (H:MM) once `running`. Spent by detours and mistakes. When it hits 0 the Fratellis catch you (E06) |
| `difficulty` | easy / medium / hard | starting `lead` |
| `running` | bool | You've left HQ, so the meter shows |
| `phoned` | bool | Called the police first |
| `hasRope` | bool | Data's rope launcher |
| `visitedSloth`, `slothPlan` | bool | Asked Sloth; he agreed to meet you at the grate |
| `slothWith` | bool | He is with you (only when you go down the Lowline) |
| `hasMap` | bool | The library chart |
| `visitedPolice`, `visitedDepot`, `visitedHideout` | bool | Hub options already used |
| `soaked` | bool | Waded through water |
| `hasPlates` | bool | Opened locker 7 |

**Guard rule.** Every page that spends `lead` can end with the lead at or below 0. On those pages the choices need `lead >= 1`, and a generated "Keep running" choice goes to E06. The story builds this in code (`finalize` in `story.ts`), so the checker never sees an expired meter on a page that can continue.

## 3a. Meter and difficulty

| Item | Cost |
|---|---|
| Detours: Data (rope), Sloth, library, police station | 10 each |
| Wrong guesses: bus depot, old hideout | 15 each |
| Chased by "Deputy" (T03) | 15 |
| Lowline fixed cost | 10 |
| Wrong fork (U03), wading the sump, squeezing the grate | 15 each |
| Street route (Marine Drive and boatyard) | 20 + 15 |
| Waiting for low tide: with the map | 15 |
| Waiting for low tide: no map (you search the pilings) | 25 |
| Retreating from the water (P02) | 10 |
| Dash across the flats (F01) | 20 |
| Long way back through the tunnels (F02) | 25 |

Best route: rope 10, Sloth 10, Lowline 10, wait 15 (the library costs 10 and saves 10, so it's neutral), dash 20 = **75**.

At the end of the dash, 15 or more leads to E11 (best) and 1–14 to E10 (good, close call). The start values (Easy 135, Medium 105, Hard 90) allow 3, 1 and 0 slips. Hard needs rope, Sloth and no mistakes.

## 4. Clue chain (none is flagged when it matters)

1. **Key tag `7 · LOW WATER`** (D01) plus Mouth's remark that nobody has used the Seventh Street Pier since the storm (D03). The pier's ice house is the only tide-locked place. The bus depot lockers are the decoy.
2. **Tide and bonfire.** The poster says low tide is 9:41 PM at the foot of Seventh Street. The radio says deputies guard the bonfire after the 9 PM shift change. Mikey says everyone is going at nine. Together: arrive at the pier at low water (wait, don't wade) and run toward the fire, where the sheriff and the town are.
3. **The laundry van.** The radio names it in D01. A "deputy" in T02 arrives in one.

## 5. Page map (45 pages: 34 scenes, 11 endings)

### Goon Docks (era `docks`)
- **D01 Two Dollars at the Auction** (porch, 5:20 PM). The coat, the radio, the key. → Mikey's attic (D03) / Call the police (D02) / Hide the key at home (**E01**)
- **D02 Busy Signal.** The line is jammed with prank calls. 10 → D03
- **D03 Headquarters** (attic). Who's who, the auction slip, what the plates are, why the Fratellis want the coat. → D04
- **D04 What the Key Is** (attic). Data on the key, Mouth's bonfire poster, Mikey's dad's rules. Sets `running`. → D05
- **D05 The Plan** (hub, head of the Lowline). Detours and routes: D06, D07, T01, T04, T05, T06, U01, T08
- **D06 Data's Workshop** (10). `hasRope` → D05
- **D07 Chunk's Garage** (10). Meet Sloth. → Ask him to meet you at the grate (D08) / Leave him (D05, `visitedSloth`)
- **D08 Sloth's Answer.** He knows the second drain. `visitedSloth`, `slothPlan` → D05

### Downtown (era `town`)
- **T01 The Library** (10). Mrs. Tilden, the chart. `hasMap`. She phones the sheriff and leaves a message. → T02
- **T02 The Library Steps.** "Deputy Dunmore" with a laundry van. → Hand over the key (**E02**) / "I'll take it myself" (T03) / Slip out the side door (D05)
- **T03 The Alley** (15). Francis drops the act and you lose him. → D05
- **T04 Duane Street** (10). The sergeant. → Leave the key as evidence (**E03**) / Keep it and go (D05, `visitedPolice`)
- **T05 The Bus Depot** (15). The key doesn't fit. `visitedDepot` → D05
- **T06 The Old Hideout** (15). Jake and Francis, a cutting torch. `visitedHideout` → T07
- **T07 The Cellar Trapdoor.** Escape into the old tunnels. → U02
- **T08 Marine Drive** (20). Street route. Francis at the gate. → Boatyard (T09) / Bluster through (**E05**)
- **T09 The Boatyard** (15). Slip under the pier. → P01

### Underground (era `under`)
- **U01 The Lowline.** Arrival (the choice that enters costs 10). If `slothPlan`, he's expected at the grate. → U02
- **U02 The Fork.** Salt air on the right, cellar damp on the left. The map confirms. → Right (U04) / Left (U03)
- **U03 Dead End** (15). → U02
- **U04 The Sump.** A flooded dip. → Use the rope launcher, if `hasRope` (U05) / Wade (U05, 15, `soaked`)
- **U05 The Grate.** If `slothPlan`, he's waiting and lifts it (`slothWith`). Otherwise squeeze through (15). → U06
- **U06 The Outfall.** The end of the tunnel opens onto the catwalk. → P01

### Waterfront (era `pier`)
- **P01 Under the Pier.** The tide is high, Francis walks above. → Wade now (P02) / Wait among the pilings (P03: 15 with the map, a search at 25 without) / Climb to the deck (**E05**)
- **P02 Chest-Deep.** → Dive for the door (**E04**) / Back out (P01, 10, `soaked`)
- **P03 Waiting.** The long wait. → P04
- **P04 Voices Overhead.** Jake and Francis explain their plan. → P05
- **P05 The Boat Comes In** (9:15). Mama arrives. → P06
- **P06 Low Water** (9:41). The bonfire is lit, the door appears. → P07
- **P07 Locker Seven.** The plates, `hasPlates`. → P08
- **P08 Company.** Jake and Francis come down. Mama calls from the boat. → Run across the flats (F01) / Back into the tunnel (F02) / Throw the plates into the channel (**E08**) / Hand them over (**E07**)

### Finale
- **F01 Across the Flats** (20). → F03
- **F02 The Long Way** (25). → Continue (**E09**)
- **F03 The Crowd.** Everyone thinks the Fratellis are in costume. The gang, the sheriff. 15 or more leads left → **E11**, 1–14 → **E10**

### Endings

| # | Title | Type |
|---|---|---|
| E01 | Trick or Treat: the Fratellis ring your doorbell | Bad |
| E02 | A Helpful Deputy: you hand the key to Francis | Bad |
| E03 | The Evidence Drawer: the key sits in a drawer | Bad |
| E04 | High Water: you dive for the door | Bad |
| E05 | Caught on the Pier | Bad |
| E06 | Out of Lead: the Fratellis catch up | Bad |
| E07 | Just Asking Nicely: you hand Mama the plates | Bad |
| E08 | Gone with the Tide: the plates sink, the Fratellis sail off | Good |
| E09 | Chain of Evidence: the police wait at the ice house | Good |
| E10 | Fire Night: a close call at the bonfire, the plates are lost | Good |
| E11 | The Whole Town Watching: arrest, plates saved, Sloth cheered | Best |

## 6. Art direction

- **Style:** warm 1980s adventure-film illustration with clean ink outlines and painted colour, cinematic, 3:2. Pacific Northwest in October: drizzle, fog, wet streets. No pirates, skulls, treasure maps, gold or ships' wheels.
- **Palettes:** Goon Docks is dusky blue and amber. Downtown is streetlight orange. Underground is green-grey with torch yellow. Waterfront is indigo with bonfire orange.
- **Cast sheets:** the player, Mikey, Data, Chunk, Mouth, Sloth, Mama, Jake, Francis, the key, the plates. Each is word-for-word the same everywhere.
- **Guardrails:** only the listed characters, no famous props, no real likenesses, weather and time of day stated, "alone (X is not here)" where it matters, action scenes phrased as comic.

## 7. Presentation

`header: 'basic'`, a new transition **`vhs`** (an 80s videotape tracking glitch with a PLAY ▶ label), and a theme per era in `theme.css`.
