# The Stopped Clocks: story bible and outline (draft for approval)

## 1. Premise

Tuesday, 12 November 1985, 30 years to the minute after lightning struck the Hill Valley clock tower. At 10:04 PM every clock in Hill Valley stops and the town freezes. Only you and Doc Brown can still move. Doc arrives in his flying time train, because it carries its own time field.

Someone has fixed a **chrono-clamp** to the clock tower's hands. Tearing it off would shatter the timeline. To release it safely, Doc must build a **Temporal Stabilizer** from three parts:

| Part | Era | Why that era |
|---|---|---|
| Flux-field regulator | 1985 | It is in Doc's old garage lab, inside the frozen town. |
| Escapement wheel | 1885 | Doc needs a piece of the tower clock that has never been through a time disturbance, so it has to come from before the clock was first installed. |
| Chrono-cell (power) | 2085 | The stabilizer needs a power source that doesn't exist yet. |

The clamp **sets permanently** when its countdown runs out: 5h45 to 6h30 depending on difficulty (§3a). Time only passes for people inside a time field.

### The mystery and its answers
1. **Who sent you the letter?** That afternoon Western Union delivers a letter to you. It is dated 1885, written in Doc's hand and signed by Doc, and it tells you to be at the courthouse square at 10:03 PM. Present-day Doc has never written it. **Answer:** he writes it after the adventure, from 1885, in every good ending. The loop closes.
2. **Who clamped time, and why?** **Rex Tannen**, from 2085 (Biff's great-great-grandson), owns a failing history museum. He froze 1985 Hill Valley so that in 2085 he could sell tours through the "Frozen Moment": a whole real town frozen in time.
3. **The letter's P.S.** reads *"When you find two, take the spare."* It pays off in 1885.

## 2. Canon and consistency rules

- **Date:** Tue 12 Nov 1985. That is after *Part III* (27 Oct 1985), so the DeLorean has been destroyed and Doc has left in the time train. That is why he comes in the train.
- Clara, Jules, Verne and Einstein are "safe at home", and Doc never says where or when home is.
- Marty is frozen at home in Lyon Estates. He is mentioned but never seen, so none of the plot depends on him.
- The 1885 visit is set in the last week of **August 1885**. The courthouse clock has arrived by rail and is crated at the depot. The festival where it is unveiled is on 5 Sept; Marty arrives on 2 Sept, so he is not in town yet. **Past Doc (the town blacksmith) is in town, and present Doc must never meet him.**
- Frozen people and objects must not be moved. Doc says so the first time it matters.
- Rex can move in the frozen town because he wears a wrist time-field device (silver jumpsuit, blue flash).
- 2085 is the future **in which the freeze was never fixed**. That is why the Frozen Moment attraction exists there. When you fix the freeze, that future goes away.
- The player is a 16-year-old Hill Valley High student who volunteers for the Preservation Society ("Save the clock tower!"). You have no name and your gender is never stated. You own a Walkman, which matters in 2085.

## 3. State

All of these flags are hidden except the deadline. The deadline (`minutes`) is **shown**: the clamp's countdown, in the header. It drops by fixed amounts for travel, by 10 for each optional detour and by 15 for each mistake (§3a). After the 79-minute assembly: 20 or more minutes left means the clamp is released cleanly, 1–19 means it takes a minute of Hill Valley with it (E11), and 0 or less means you are too late (E07).

| Flag | Values | Set by |
|---|---|---|
| `ranLate` | bool | You ignored the letter and then ran to the square after all |
| `hasKeycard` | bool | Chasing the figure (S11) |
| `escapement` | none / `spare` / `original` | 1885 |
| `hasCell` | bool | 2085 |
| `authorityAlerted` | bool | Reporting Rex in 2085 (S38) |
| `tannenKnows` | bool | Rex has captured you in 2085 |
| `minutes` | number | The clamp countdown. Its start depends on difficulty |
| `difficulty` | easy / medium / hard | Set at the start of a run |
| `knowsTA` | bool | Read the 2085 information kiosk (S30k) |

**Coherence guarantee:** an automated checker plays through **every reachable combination of path and state**. It fails the build if any of these is true:
- a page is a dead end, or a page or ending can't be reached
- a choice leads to a page that doesn't exist
- in some state, a page shows no available choices
- a conditional passage refers to a flag that can't be set on some path that reaches it

Any page whose text depends on the past uses conditional passages, so its text always matches what actually happened.

## 3a. Difficulty and time (added after playtesting: the best ending was too easy)
- The clamp's countdown starts at 6h30 (Easy), 6h00 (Medium) or 5h45 (Hard) and is shown in the header.
- Optional detours cost 10 minutes and mistakes cost 15. The best ending needs 20 or more minutes left after the 79-minute assembly. That allows several slips on Easy, one on Medium and none on Hard.
- The best ending needs three clues connected: the letter's P.S. (take the spare wheel), Doc's early remark about "the day it all began" (the safe combination, 5 Nov 1955), and the 2085 information kiosk (S30k). The kiosk reveals that the Temporal Authority is the place to report unlicensed jumps and that Hill Valley's police are Tannen's own security. None of these is flagged when it matters.
- Choices avoid signposting. Traps get plausible reasons: Rex offers a deal, taking the evidence to the police, and offering Tannen the train.

## 4. Scene outline (52 pages: 41 scenes and 11 endings)

### Act 1: The frozen town (1985)
- **S01 Letter.** Afternoon. You take off your Walkman. A Western Union man hands you a letter held "since 1885". → Go to the square (S02) / Ignore it (S03)
- **S03 Home.** It's 10:00 PM. → Run for it (S02, `ranLate`) / Stay in bed (**E01**)
- **S02 The square, 10:03.** A lightning-like flash with no storm, and a steam whistle. The time train lands next to you and everything freezes. → S04
- **S04 Doc.** "That's my handwriting… but I've never written it!" → Look around (S05) / Go straight to the tower (S06)
- **S05 Frozen square.** Red the bum asleep, a pigeon hanging in mid-air, and fresh footprints that shouldn't be there. → S06
- **S06 Tower door.** It is forced open. → S07
- **S07 Clock room.** The clamp is on the hands, marked "T.T.T.", with a display counting down. → Pry it off (S08) / Let Doc look (S09)
- **S08 Prying.** The world creaks like ice. → Keep pulling (**E02**) / Let go (S09)
- **S09 Diagnosis.** Doc explains the clamp, the three parts and the six-hour deadline. → Footsteps below (S10)
- **S10 The figure.** Someone in silver runs down the stairs. → Chase (S11) / Let them go and head to the lab (S13)
- **S11 Chase.** They vanish in a blue flash and drop a keycard: "TANNEN TEMPORAL TOURS – R. TANNEN". `hasKeycard` → S13
- **S13 Doc's lab.** The regulator is in a safe, and Doc has forgotten the combination. → "The day I invented time travel" (S14) / "The day Marty left" (S13x)
- **S13x Jammed safe.** Doc forces it open with a crowbar. Costs 15 minutes → S14
- **S14 Plan.** Doc builds the stabilizer frame and gives you a walkie-talkie. → 1885 (S20) / 2085 (S30)

### Act 2a: 1885
- **S20 Ravine.** The train lands in Shonash Ravine. Doc can't go into town because his past self lives there. → Go alone (S21) / Doc comes in a fake beard (S22)
- **S22 Disguise.** You pass the lit blacksmith shop. → Peek in the window (**E03**) / Hurry on. Doc thinks better of it and goes back to the train (S21)
- **S21 Depot.** The clock crate, guarded by a sleepy stationmaster. → Sneak round the back (S23) / Talk your way in (S24)
- **S24 Riders.** Mad Dog Tannen's gang turn up. → Hide and slip round the back (S23) / Step forward (S27)
- **S27 Tannen.** → Tell him about gold on tomorrow's eastbound train. He rides off (S23) / Talk back (S28)
- **S28 Tied up in the saloon.** → Radio Doc and wait (S29, costs 15) / Offer Tannen the "iron horse" in the ravine (**E04**)
- **S29 Rescue.** Doc uses a smoke bomb. → S23
- **S23 The crate.** It holds two escapement wheels: one mounted and one boxed and labelled SPARE. → Take the mounted one (S25) / Take the spare (S26)
- **S25 / S26 Departure.** Sets `escapement` to `original` or `spare`. → straight on to 2085 (S30), or home to S40 if the cell is already aboard

### Act 2b: 2085
- **S30 Hill Valley 2085.** The courthouse is now the "Frozen Moment" attraction. Doc stays with the train because a traffic drone is already interested in it. → Attraction (S31, costs 10) / Power shop (S32) / [if keycard] Staff door (S33) / Info kiosk (S30k)
- **S30k Information kiosk** (costs 10). `knowsTA`: the Temporal Authority handles unlicensed jumps, and the police are Tannen Temporal Security. → Attraction / Shop / [keycard] Staff door
- **S31 Attraction.** There is an exhibit of *a steam train and two frozen figures*, which is you and Doc. There is also a portrait of the founder, Rex Tannen, in silver. → Shop (S32) / Sneak into the control room (S34) / [if keycard] Staff door (S33)
- **S32 Wilson's Power Plus** (founded by a descendant of Goldie Wilson). → Sell your Walkman, a priceless antique (S35) / Steal a cell (S36)
- **S33 Control room.** Rex's unregistered jump log for 12 Nov 1985. → Take the log to the police (S36: they're Tannen's) / [if `knowsTA`] Take it to the Temporal Authority (S38) / Grab a cell from the rack (S36)
- **S34 Sneaking.** A security bot catches you. → S36
- **S36 Captured.** Rex explains his plan and means to add you to the exhibit. `tannenKnows` → Radio Doc (S37) / Bluff that the Temporal Authority is coming (**E06**)
- **S37 Escape.** The train crashes through the skylight and you grab a cell. `hasCell`, costs an extra 15 → 1885 (S20) if the wheel is still missing, else S40
- **S35 Bought.** `hasCell` → 1885 (S20) if the wheel is still missing, else S40
- **S38 Temporal Authority.** They will arrest Rex on his next jump and give you a cell. `hasCell`, `authorityAlerted` → 1885 (S20) if the wheel is still missing, else S40

### Hub and finale (1985)
- **S40 Back in the frozen square.** You only arrive here once you have both parts, travelling directly between 1885 and 2085, so there's no pointless stop in between. Doc's watch shows how late you are.
  - If `escapement = original`, the clock face is blank and your hands are fading. Without the clock running, Marty could never have got back in 1955. History takes a little while to catch up, which is why 2085 looked normal. → Go back and swap (S26b, costs 15, → S40) / Ignore it (**E05**)
  - Otherwise → Climb the tower (S41)
- **S41 Assembly and the climb** (79 minutes). If 0 or fewer minutes are left → **E07** (the clamp sets during assembly), otherwise → S42
- **S42 Rex.** He waits at the top if `tannenKnows` and arrives if not.
  - If `authorityAlerted`, agents flash in → S44
  - Otherwise → Hand over the stabilizer (**E08**) / Stall him while Doc fits it (S43)
- **S43 Stabilizer fires.** Rex escapes in a blue flash. → 1–19 minutes left: **E11**, 20 or more: **E09**
- **S44 Arrest.** → S45
- **S45 10:05 PM.** The clock ticks. Doc realises he has to write the letter. → 1–19 minutes left: **E11**, 20 or more: **E10**

### Endings
The type below is shown to the player on the ending screen and in the endings gallery.

| # | Title | Type |
|---|---|---|
| E01 | Grounded in Time: you're frozen on the couch, a 2085 exhibit | Bad (early) |
| E02 | Cracked: the moment shatters like glass | Bad |
| E03 | Double Doc: two Docs faint, and the timeline doesn't recover | Bad |
| E04 | Stuck in 1885: Tannen crashes the train into the ravine | Bittersweet |
| E05 | Paradox: you fade like Marty's photo | Bad |
| E06 | Exhibit A: frozen in Rex's museum | Bad |
| E07 | Frozen Forever: the clamp sets as you reach the top | Bad |
| E08 | Tannen Time: Hill Valley becomes a theme park | Bad |
| E09 | Time Keeper: time is restored, Rex is still at large | Good |
| E10 | Right on Time: Rex is arrested and Doc writes the letter, P.S. included | Best |
| E11 | The Missing Minute: time is restored, but every clock in Hill Valley runs a minute slow | Bittersweet/good |

## 5. Illustrations
Each page gets an `image` slot and an `imagePrompt`. Until the art exists, the page shows an era-themed placeholder.

**Style.** The reference is `reference/ChatGPT Image 30 Sept 2026, 14_30_31.png`, used for style only; its content is ignored. The style is a graphic-novel illustration: bold ink linework and cross-hatching over rich painted colour, with cinematic lighting. Night scenes use wet reflections and sodium or neon light. 1885 is warm and dusty, 2085 is cool blue and violet with neon accents. Framing is usually over the shoulder from behind the player, 3:2 landscape, with no text in the image.

**Prompt format.** Every prompt is a shared style prefix, followed by the character sheet for whoever is in the scene, followed by the scene description. The character sheets cover Doc, the player (a distinct 80s teen, not Marty's look), Rex, the time train and the clamp.

## 6. Build plan

- **Stack:** Vite + TypeScript with no UI framework, output as a static site. The engine is independent of any theme.
- **Story packs:** `stories/<id>/` holds `story.ts` (pages, choices, conditions, effects), `theme.css`, `images/` and `meta.ts` (title, eras, endings). Making a new variant means making a new folder.
- **Reader:**
  - The header is modelled on the time-circuit display (DESTINATION / PRESENT / LAST DEPARTED), and it animates when you change era.
  - Each era has its own look: 1885 is sepia and wood, 1985 is neon and chrome, 2085 is holographic.
  - Travelling in time plays a flash-and-fire-trail transition.
  - The layout is designed for mobile first.
- **Features:**
  - Difficulty setting: Easy allows unlimited undo, Medium allows 2 steps, Hard allows none.
  - Auto-save and resume.
  - Endings gallery (for example "4 / 11").
  - Author-only story map at `?map`.
- **Checker:** `npm run check-story` runs the exhaustive path-and-state check in §3.
