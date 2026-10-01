# Return to Sender: story bible and outline

Id: `return-to-sender`. A *Ghostbusters* story using the real names (personal use only, as with the other stories). Set in Manhattan on Friday 15 November 1985.

## 1. Premise

You are a 17-year-old bicycle courier for Quickfoot Couriers in Tribeca. Your last job of the night is to take a brass **pneumatic-mail canister** from Pell & Sons, a stamp shop on Staple Street, to the Ghostbusters' firehouse at 14 North Moore Street. Mr. Pell found it jammed in a dead tube when a cellar wall fell. Since he moved it, ghosts have been drifting through his shop.

The Ghostbusters are out on jobs until late. Egon Spengler sent a **tag** to stick on the canister. Anything ghostly that comes near the canister is pulled straight into the **containment grid** in the firehouse basement. The tag's dial shows the strain on the grid (**GRID LOAD**, 0–100%). At 100% the grid fails and everything in it gets out.

### The mystery and its answers
1. **What is the canister?** A carrier from the Pneumatic Mail Company's tube network (1897–1953), last used on 15 November 1898. Its plate reads `THE PNEUMATIC MAIL CO. · ST. 9 · 11:20 UP`.
2. **Where does it go?** Station 9 was the Park Row Annex (Pell's wall map). The Annex was pulled down and the Sedgewick Hotel was built on the site (Pell; the lobby plaque). Its cellar still holds the old Station 9 tube room.
3. **When and how?** The 11:20 up-run, put into the tube marked UP. The ghost clerks of the **Night Mail** stand in line at 11:20 every night waiting for it.
4. **Why are the clerks haunting the borough?** On 15 November 1898 the Company closed Station 9 and sent the clerks a notice: "You are released from duty. Go home." The canister carrying it stuck in a pipe in Staple Street and never arrived. The clerks have waited 87 years for their last mail. Moving the canister stirred them up. The notice is what is inside it.

## 2. Canon and consistency rules

- The Ghostbusters are explained in the story's own voice (R01): the four, proton packs, traps and the grid. Peter Venkman, Ray Stantz, Egon Spengler, Winston Zeddemore and Janine Melnitz (receptionist). **Slimer** is a green ghost who lives at the firehouse and eats; the grid ignores him.
- Dana, Louis, Gozer, Walter Peck and the Stay Puft Marshmallow Man do not appear.
- **Tag rule:** anything that gets close to the canister is pulled into the grid, which costs load. Clerks at the 11:20 gathering are waiting for the canister, not hunting it, so the tag does not take them.
- **Trap rule:** Winston's spare trap catches ghosts before the grid does, so ghosts caught in it do not add load. It holds one batch, so it can be used once.
- **Times:** R01 7:10 PM. The 11:20 bell is fixed. Pages before it show only the part of the evening they are in, because detours change the arrival time.
- The Night Mail: grey vests, sleeve garters, green eyeshades, leather satchels. They are polite and never violent. **Ambrose Tull** is the night clerk of Station 9 and the only one who speaks.
- The hotel is the **Sedgewick**, Park Row. Night manager **Mr. Voss**, who hates the Ghostbusters after last year. Bellhop **Ernie**.
- The player is an original 17-year-old with no name and no stated gender: dented silver helmet, mustard-yellow nylon windbreaker with a reflective stripe, jeans, orange high-top sneakers and a black messenger bag.
- Bike: locked outside the firehouse (F01) or the hotel (S01), or left in Pell's back room (T01).

## 3. State

| Flag | Values | Meaning |
|---|---|---|
| `margin` | number | **Hidden headroom.** The meter shows `100 - margin` as GRID LOAD (%), a rising meter via `clock.risesFrom`. At 0 the grid fails (E06) |
| `difficulty` | easy / medium / hard | starting `margin` |
| `running` | bool | The tag is on the canister, so the meter shows |
| `visitedFirehouse`, `visitedDiner`, `visitedPost`, `visitedEngine` | bool | Hub options already used |
| `hasTrap` | bool | Carrying Winston's spare trap |
| `trapSet` | bool | Trap set in the doorway, so it is spent |
| `slimerPlan` | bool | Slimer will meet you in the Sedgewick cellar |
| `slimerWith` | bool | Slimer opened the bronze door |
| `knowsChute` | bool | Mr. Hollis told you about the coal chute |
| `route` | none / lobby / chute / tunnel | How you reached the cellar |

**Guard rule.** Every page that spends `margin` gets its choices guarded (`margin >= 1`) and a "Keep running" choice to E06, added in code by `story.ts`.

## 3a. Meter and difficulty

Load starts at Easy 20%, Medium 35% and Hard 50% (`margin` 80, 65 and 50). Costs, in load points:

| Item | Cost |
|---|---|
| First incident on Staple Street (R03) | 5 |
| Firehouse (gets the trap, and Slimer's offer) | 10 |
| Diner (the coal-chute tip) | 5 |
| Ride to Park Row | 10 |
| Lobby route (Voss) | 10 |
| Pell's cellar tunnel, then the blockade | 10 + 10 |
| Wrong fork (T03) | 10 |
| Post office, Engine 9 (wrong guesses) | 10 each |
| Waiting at the firehouse | 15 |
| Forcing the bronze door (no Slimer) | 10 |
| Waiting for 11:20 without the trap | 10 |
| The DOWN tube (C05) | 10 |
| Delivery | 5 |

Best route: Staple Street 5, firehouse 10 (trap and Slimer), diner 5, ride 10, coal chute 0, door 0 (Slimer), wait 0 (trap), delivery 5 = **35**. The best ending needs 15 left after delivery, so Hard allows no slips, Medium one and Easy three. With no detours the cost is 50, which is exactly Medium's budget.

## 4. Clue chain (none is flagged when it matters)

1. **The plate** (R02): `ST. 9 · 11:20 UP`.
2. **Pell's map** (R02): Station 9 is the Park Row Annex. Pell: a hotel stands over it now. The lobby plaque (H01) and the door (C01) confirm it.
3. **Hour and direction.** The plate says 11:20 and UP. Nothing in the tube room says when to act. The DOWN bank is the loud, tempting one.

Decoys: `ST.` as a post-office station (Church Street, 315) or a fire station (Engine 9).

## 5. Page map (42 pages: 31 scenes, 11 endings)

### Lower Manhattan (era `streets`)
- **R01 Last Job of the Night** (Quickfoot). The Ghostbusters and the grid are explained. → R02 / go home (**E01**)
- **R02 Pell & Sons.** The canister, the tag, the plate, the map. Sets `running`. → R03
- **R03 The Cold Spot** (5). The first clerks and the first reading. → R04
- **R04 Staple Street Corner** (hub). F01, R07, R05, R06, S01, T01
- **R05 Church Street Station** (10). Post-office decoy. → drop it in the night slot (**E04**) / back
- **R06 Engine Company 9** (10). Fire-station decoy. → R04
- **R07 The Blue Plate Diner** (5). Mr. Hollis. → ask about the Sedgewick (R08) / back
- **R08 The Napkin.** `knowsChute`. → R04

### Firehouse (era `firehouse`)
- **F01 14 North Moore Street** (10). Janine and Slimer. → hand it over (**E02**) / borrow gear (F02) / wait (F04) / leave
- **F02 Winston's Spare.** `hasTrap`. → ask Slimer (F03) / leave
- **F03 Slimer.** `slimerPlan`. → R04
- **F04 The Long Wait** (15). → F05
- **F05 Back from the Job.** The four return at 11:05. → give it to Egon (**E07**) / ask them to hear you out (F06)
- **F06 Eleven Minutes** (hotel). You explain; the ride; the bronze door. → **E09**

### Park Row (era `hotel`)
- **S01 Park Row** (10). → lobby (H01) / coal chute (H04, with `knowsChute`)
- **H01 The Lobby.** The plaque. Voss. → H02
- **H02 The Night Manager** (10). → tell him the truth (H03) / run for the staff door (**E05**)
- **H03 The Back Stairs.** Ernie, and the bell at 11:20. `route = lobby`. → C01
- **H04 The Coal Chute.** `route = chute`. → C01

### Underground (era `under`)
- **T01 Pell's Cellar** (10). → T02
- **T02 The Tube Gallery.** Left is wide and lit, right follows the tubes. → T03 / T04
- **T03 The Sorting Room** (10). Dead end. → T02
- **T04 The Blockade.** → push through (10, C01, `route = tunnel`) / back out (5, T05)
- **T05 Back Up the Stairs.** → R04
- **C01 The Hotel Cellar.** The bronze door. → Slimer opens it (C02) / force it (10, C02)
- **C02 Station 9.** The tube room, before 11:20. → drop it in now (**E03**) / wait (10) / wait with the trap (free, C03)
- **C03 The Wait.** → C04
- **C04 Eleven-Twenty.** The Night Mail and Mr. Tull. → UP (C06) / DOWN (C05) / spring the trap (**E08**)
- **C05 The Down Tube** (10). → C04
- **C06 The Up Tube** (5). → C07
- **C07 The Notice.** → 15 or more left **E11**, 1–14 **E10**

### Endings

| # | Title | Type |
|---|---|---|
| E01 | Clocked Out: you turn the job down | Bad |
| E02 | Safe Keeping: Janine locks it in the closet | Bad |
| E03 | Wrong Hour: the canister goes up the tube too early | Bad |
| E04 | Postage Due: you mail it | Bad |
| E05 | Please Leave the Premises | Bad |
| E06 | Overload: the grid fails | Bad |
| E07 | Total Containment: Egon seals it in the grid | Bad |
| E08 | A Full Trap: the Night Mail is caught | Good |
| E09 | The Whole Team: the Ghostbusters deliver it with you | Good |
| E10 | Cutting It Fine: delivered, but the grid is nearly full | Good |
| E11 | The Mail Goes Through | Best |

## 6. Art direction

- **Style:** bright 1980s animated-film illustration with bold ink outlines and saturated colour, cinematic, 3:2. Rainy Manhattan night.
- **Palettes:** the streets are steel-blue and sodium-orange, the firehouse is brick red and warm lamp yellow, the hotel is gold and burgundy, and underground is ectoplasm green on dark brick.
- **Cast sheets:** the player, Dolores, Mr. Pell, Mr. Hollis, Janine, Peter, Ray, Egon, Winston, Slimer, Mr. Voss, Ernie, Mr. Tull, the clerks, the canister and the trap. Each is word-for-word the same everywhere.
- **Guardrails:** only the listed characters, no cars or famous logos, weather and time of day stated, "alone (X is not here)" where it matters, and no violence.

## 7. Presentation

`header: 'basic'`, a new transition **`slime`** (green ooze drops over the page and drains away) and a rising **GRID LOAD** meter with a segmented bar. Both are opt-in in shared code (`clock.risesFrom` and `ui.transition: 'slime'`). A theme per setting in `theme.css`.
