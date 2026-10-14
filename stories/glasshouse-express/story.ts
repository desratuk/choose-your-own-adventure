import type { Cond, Effects, Page, Story } from '../../src/engine/types';

const is = (flag: string, value: string | boolean = true): Cond => ({ flag, is: value });
const not = (cond: Cond): Cond => ({ not: cond });
const all = (...conds: Cond[]): Cond => ({ all: conds });
const ge = (n: number): Cond => ({ flag: 'ember', gte: n });
const le = (n: number): Cond => ({ flag: 'ember', lte: n });
const cost = (n: number): Effects => ({ add: { ember: -n } });
const chillKnown = all(is('ventFreed'), is('tapeHeard'), is('bulbLore'));

const raw: Page[] = [
  // ───────────────────────── Winter Terminus ─────────────────────────
  {
    id: 'A01', title: 'Eleven O’Clock', era: 'terminus', time: 'LONGEST NIGHT · 11 PM',
    cast: ['player', 'engine', 'carriage'],
    imagePrompt: `Clear night of hard frost, eleven o'clock, at Winter Terminus: a small lakeside railway station with iron platform lamps and frost-rimed glass canopy. The player stands alone on the platform (nobody else in frame) looking along the train: the squat green tank engine Marigold at the head, then the glowing Glasshouse Carriage, then two dark unlit glass carriages behind it. Snow on the yard, stars above a frozen lake beyond the fence.`,
    text: [
      `Winter Terminus is the last station at the bottom of Tallowmere, where the tram lines give up and the frozen lake begins. At eleven o’clock on the longest night of the year you are closing the ticket window. You are the station’s apprentice. Frost has grown on the inside of the glass.`,
      `Tallowmere does not wait for its seasons. It makes them. Every year on this night the Glasshouse Express carries the Summer Stock, living summer plants raised under glass here at the Terminus, up through the frozen city to the Conservatory on Cold Hill. Planted in the Conservatory’s great bed and opened to the first sunrise, the stock warms the hill, the hill warms the lake, and spring comes down the tramlines by midweek. Next year’s summer is grown from this year’s seed.`,
      `This year is different. In October the Terminus boiler failed overnight and most of the stock died in its trays. What survived fills one carriage. There is no other seed. If the stock is not in that bed by dawn, Tallowmere’s winter does not end.`,
      `On the platform the train is ready: Marigold, the little green tank engine, breathing steam at the head; the Glasshouse Carriage behind her, lit from inside like a lantern; and behind that the Fern House and the Orchard Car, two more glass carriages, dark and empty. Dov Pellinger, who has driven this train for twenty years, is on the footplate with a thermos.`,
      `The bell from the stationmaster’s office rings three times. That means now.`
    ],
    choices: [{ text: 'Go to the office', to: 'A02' }],
  },
  {
    id: 'A02', title: 'Hesper’s Office', era: 'terminus',
    cast: ['player', 'hesper'],
    imagePrompt: `Clear frosty night, eleven o'clock, inside the small stationmaster's office at Winter Terminus: a coal fire, timetables, a brass desk lamp. Hesper Vane sits at her desk with her strapped left ankle propped on a stool under a red tartan blanket, pointing at a handwritten checklist. The player stands before the desk, seen from behind. Only these two people. Frost patterns on the window; the lit glass carriage glows faintly outside.`,
    text: [
      `Hesper Vane’s office is the warmest room at the Terminus and tonight it smells of liniment. Hesper is the stationmaster and the Keeper of the Stock, and has ridden the Express every longest night for thirty-one years. At nine this evening she slipped on the platform ice. Her left ankle is strapped and propped on a stool under a tartan blanket.`,
      `“Don’t say anything kind,” she says. “The doctor has said it all and I threw him out.” She taps a checklist in her square handwriting. “You’ve done every job on that carriage except the one that matters. Tonight you do that one. You ride as Keeper. Dov drives. You keep the house warm and the stock alive, and you put it in the bed on Cold Hill before the sun comes up.”`,
      `You ask what happens if the sun comes up first.`,
      `“Then it’s a tray of plants on a hill,” Hesper says. “It has to be in the Conservatory bed at this sunrise. Any other sunrise doesn’t count. That is the whole rule and it is older than me.” She counts the rest on her fingers. “Marigold burns coal. The house stove burns ember-bricks, and the locker holds what Dov has counted. Every mile costs bricks; every minute with a door open costs more. At the top, the bed stove takes twenty: ten to light it and ten to feed it until the sun is on the glass. Fewer than twenty and you plant cold, with the house stove under the bed instead. Fewer than ten and the house can’t hold frost off at all.”`,
      `She pushes the checklist across the desk and, after it, the brass thaw-lamp she uses on frozen points. “Well?”`
    ],
    choices: [
      { text: 'Take the Keeper’s run', to: 'A03' },
      { text: 'Say you’re not ready; Dov will have to manage the house as well as the engine', to: 'E01' },
    ],
  },
  {
    id: 'A03', title: 'The Glasshouse Carriage', era: 'terminus',
    onEnter: { set: { running: true } },
    cast: ['player', 'carriage', 'stock', 'lamp'],
    imagePrompt: `Clear frosty night, before midnight, inside the Glasshouse Carriage standing at the Winter Terminus platform: small panes in a white iron frame, warm amber light, slatted staging holding shallow wooden trays of broad dark-green sunwort rosettes with tight copper buds, a small black iron stove at one end with a brick locker beside it, a handwritten checklist pinned above the stove, the brass thaw-lamp hanging by the door. The player, seen from behind, stands among the trays. Alone (Hesper and Dov are not here). Platform doors open to the frosty night on one side.`,
    text: [
      { if: not(is('hubA')),
        text: `The Glasshouse Carriage is a greenhouse on wheels, a long iron frame of small panes on a green wooden body, warm as a kitchen inside. The surviving Summer Stock fills the slatted staging down both sides: shallow trays of sunwort, a broad-leaved rosette plant with copper-coloured buds held tight as fists. A sunwort flower, when it opens, is warm to the touch. Tonight none are open.`,
        else: `Back among the trays, the Glasshouse Carriage is as warm as you left it, and the sunwort buds are as tight.` },
      { if: not(is('hubA')),
        text: `At the far end the iron house stove ticks beside its locker. By Dov’s count, the locker holds {{clock}} bricks. Hesper’s checklist is pinned above the stove. STOVE: lit. LOCKER: counted. PLATFORM DOORS: shut the moment Dov whistles. ROOF VENTS: frozen since November, leave them. TAPES: in the tin. BED STOVE AT THE TOP: twenty bricks or don’t light it. You hang the thaw-lamp on its hook by the door.`,
        else: `The locker is down to {{clock}} bricks by Dov’s count. The platform doors still stand open on the frost, and the stove is working to make up for it.` },
      { if: not(is('hubA')),
        text: `A speaking tube runs forward to the footplate. Dov’s voice comes up it as if from a well: “Platform doors are open for the last trays, so I’m burning to keep the house up. Every quarter hour standing here is bricks, Keeper. Take what you need, and no more.”`,
        else: `“Still burning, Keeper,” Dov says up the speaking tube.` },
      { if: is('tapeHeard'),
        text: `In the keeper’s corner by the stove, Hesper’s cassette recorder sits with its biscuit tin of tapes shut and back in order.`,
        else: `In the keeper’s corner by the stove sit Hesper’s cassette recorder and a biscuit tin of tapes, each labelled with a year.` },
      { if: is('ventFreed'),
        text: `Above you, the ridge vents are shut again, and the hand chain that works them hangs free on its wheel by the stove.`,
        else: `Above you, along the ridge of the roof, the vent handles are white with frost.` }
    ],
    choices: [
      { text: 'Sit with Hesper’s run tapes in the keeper’s corner', to: 'A04', if: not(is('tapeHeard')), set: { hubA: true }, ...cost(5) },
      { text: 'Climb up and thaw the roof vents', to: 'A05', if: not(is('ventFreed')), set: { hubA: true }, ...cost(5) },
      { text: 'Shut the platform doors and signal Dov', to: 'A06' },
    ],
  },
  {
    id: 'A04', title: 'The Run Tapes', era: 'terminus',
    onEnter: { set: { tapeHeard: true } },
    cast: ['player', 'recorder', 'stock'],
    imagePrompt: `Clear frosty night, before midnight, the keeper's corner inside the Glasshouse Carriage at the Terminus platform: the player sits on an upturned crate, seen from behind, pressing a key on Hesper's chunky cream-and-brown portable cassette recorder; an open biscuit tin of labelled cassettes beside it; trays of sunwort on the staging behind, the black house stove glowing. Alone (nobody else in the carriage). Warm amber light, frost on the outer panes.`,
    text: [
      `Hesper talks to her recorder the way other people talk to a dog. Every run has its tape, labelled with the year, in the biscuit tin. You sit on a crate in the keeper’s corner and put in the oldest one. People in Tallowmere still call that year the Long Summer. The lake was warm until October.`,
      `Hesper’s voice is younger and furious with herself. “Fernhallow Tunnel. The house stove door came off its hinge on the incline and I couldn’t get it shut. Couldn’t keep anything in. Frost on the inside of the glass the whole climb, Dov’s father swearing on the footplate, and me holding the door with a scarf. I thought I’d killed the lot. Came out into the cut and stoked like fury all the way to the top.” A pause full of tape hiss. “And at dawn they opened like I have never seen them open. Like being shouted at. Lucky, lucky fool, Hesper Vane.”`,
      `You try a later tape. “Kept the house warm as toast the whole way,” Hesper says, pleased with herself. “A fair season. Nothing to write home about.” Another: “Warm the whole way. Fair.” You put the tapes back in order.`,
      `Down the speaking tube, Dov is humming along to his transistor radio.`
    ],
    choices: [{ text: 'Back to the stove', to: 'A03' }],
  },
  {
    id: 'A05', title: 'The Autovent', era: 'terminus',
    onEnter: { set: { ventFreed: true } },
    cast: ['player', 'carriage', 'lamp'],
    imagePrompt: `Clear frosty night, before midnight, on the ridge of the Glasshouse Carriage roof at the Winter Terminus platform under the station lamps. The player kneels on the roof walkway, seen from behind, holding the brass thaw-lamp's soft blue flame under a frost-whitened brass wax cylinder mounted at the ridge beside a row of closed roof vents; a small oval maker's plate on the cylinder (no legible text). Alone. Stars, snow on the yard, the dark empty carriages behind.`,
    text: [
      `The end ladder takes you onto the carriage roof, where the frost is thick enough to write in. The ridge vents run the length of the glass. Besides the hand chain that opens them from inside, they are worked by an autovent: a brass cylinder the size of a rolling pin, full of wax. In summer the sun warms the wax, the wax swells and pushes a rod, and the roof opens itself. In winter the wax shrinks, a pin drops into a collar, and the whole system locks solid. Frost has done the rest.`,
      `There is a maker’s plate on the cylinder, worn almost smooth: HALLAM & DAUGHTERS · COLD HILL. The Hallams built half the ironwork in this city, including, Hesper says, every pane of the Conservatory.`,
      `You hold the thaw-lamp’s blue flame under the cylinder and wait, and your knees go numb against the roof. It takes most of a quarter of an hour before the wax warms enough to lift the pin, and then it goes with a click you feel through your glove. You lift the collar, turn it a quarter, and the pin stays up. Inside the carriage, the hand chain now runs free on its wheel.`,
      `You shut the vents again, carefully, and climb down. Dov’s voice comes up the tube. “Whatever you’re doing up there, the house felt it.”`
    ],
    choices: [{ text: 'Back to the stove', to: 'A03' }],
  },
  {
    id: 'A06', title: 'Midnight', era: 'terminus', time: 'LONGEST NIGHT · MIDNIGHT',
    cast: ['player', 'carriage', 'stock'],
    imagePrompt: `Clear frosty night at midnight, inside the Glasshouse Carriage as it pulls out of Winter Terminus: the player stands at the end window, seen from behind, one hand on the frame, looking back through the glass at the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled close behind and filling most of the view, with the receding platform lamps, the dark signal cabin and the frozen lake under stars beyond them. Sunwort trays on the staging, the house stove glowing. Alone in the carriage. Frost on the outer panes, a thread of steam drifting past.`,
    text: [
      `You slide the platform doors shut and drop their bars. The last of the station warmth goes with them. You pull the bell cord twice, and far ahead Marigold answers with a whistle that must wake the lake.`,
      `The Express moves. The Terminus lamps slide past the glass, then the signal cabin, then the ice of the lake with the stars lying on it. The trays creak on their staging. You stand at the end window and watch the Fern House and the Orchard Car follow, dark glass on dark glass.`,
      `Tallowmere rises ahead, a city of winter laid out on its hill. Tram wires hang in sleeves of ice. Neon burns pink over Tallow Street in the Lower Town. Halfway up, the chimneys of the Ember Works are the only ones in the city still smoking. At the very top, where the sky begins, the Conservatory’s dome is a black curve against the stars. That is where you are going.`,
      `Dov’s transistor crackles down the speaking tube. A woman’s voice, low and amused: “This is the Tallowmere Night Service, 1480 on your dial, and if you’re up at midnight on the longest night, you know what tonight is. The Express is out of the Terminus. Good luck to them. Here’s something warm.” A synthesiser begins to shimmer. Dov turns it down, but not off.`,
      `“Candlewick Junction in twenty minutes, Keeper,” he says. “Mind the stove.”`
    ],
    choices: [{ text: 'Settle in for Candlewick Junction', to: 'B01', ...cost(10) }],
  },

  // ───────────────────────── Lower Town ─────────────────────────
  {
    id: 'B01', title: 'Candlewick Junction', era: 'town', time: 'LONGEST NIGHT · AFTER MIDNIGHT',
    cast: ['player', 'dov', 'engine'],
    imagePrompt: `Clear frosty night, twenty past midnight, at Candlewick Junction where the lakeside line meets the Lower Town: a red signal lamp on a tall post, a dark unlit signal box, a set of facing points where a siding diverges to the right into a walled cutting, a freshly painted wooden sign on a post (no legible text). Marigold stands stopped with steam drifting; Dov Pellinger in his rust oilskin jacket and railway cap stands at the open door of the Glasshouse Carriage talking up to the player, who is seen from behind in the doorway. Only these two people. Pink neon glow from the town beyond. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.`,
    text: [
      `Twenty minutes along the shore line, the Express stops where it should not. Candlewick Junction is the first signal in the Lower Town, a tall post with a red lamp at the top and a signal box beside it. The box is dark. Beyond the signal, the points are set not for the main line toward the Mere but for a right-hand siding that curves away between high walls.`,
      `Dov climbs down from the footplate, stamps through the snow and opens the carriage door from outside. Cold pours in around his boots. He is a big man with a grey beard, and he looks at the junction the way he looks at a bad fire.`,
      `“Signalman’s gone home and left it red,” Dov says. “Points are set for the loop.” He nods at a wooden sign on a post, freshly painted: EMBER WORKS LOOP · REJOINS MERE LINE. “I’ve never been down it. The Ember Company laid it for their own wagons. Sign says it rejoins, and it would save me walking out there with a lamp.”`,
      `The thaw-lamp hangs by your hand. Beyond the walls, the Ember Works chimneys smoke against the stars.`
    ],
    choices: [
      { text: 'Climb down and throw the points for the Mere line yourself', to: 'B02' },
      { text: 'Take the loop as the points are set', to: 'B03' },
    ],
  },
  {
    id: 'B02', title: 'The Frozen Lever', era: 'town',
    cast: ['player', 'dov', 'lamp'],
    imagePrompt: `Clear frosty night, after midnight, at the foot of the dark signal box steps at Candlewick Junction. The player crouches at a frost-whitened iron ground lever, seen from behind, holding the brass thaw-lamp's blue flame to its pivot; an empty short chain dangles from the lever where a lock pin should hang; a single boot print dusted with dark brick dust in the snow beside it. Dov stands a pace back holding a hand lantern. Only these two people. Stopped green engine and glowing carriage behind. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.`,
    text: [
      `You climb down into the snow with the thaw-lamp and walk back to the ground lever at the foot of the signal box steps. Dov follows with his hand lantern, because he does not like you out here alone. The lever is white with frost and will not move for either of you.`,
      `You hold the blue flame to the pivot and wait. While you wait you look, because Hesper has taught you that waiting is for looking. The lever’s lock pin should hang from a short chain at its side; the chain is there and the pin is gone. Somebody pulled the pin, set the points for the loop by hand, and let the frost do the locking. In the snow beside the lever is a boot print with a dusting of dark grit in it. You rub some between your fingers. Ember-brick dust.`,
      `“Who’d do that?” Dov says, and then answers himself. “Somebody who sells bricks.”`,
      `The frost lets go. You throw the lever over, the blades clank across, and the main line to the Mere lies open. Dov checks them with his lantern and climbs back to the footplate. You pull the carriage door shut behind you and the house begins to warm again.`
    ],
    choices: [{ text: 'On into the Lower Town', to: 'B06' }],
  },
  {
    id: 'B03', title: 'The Ember Works', era: 'town',
    onEnter: { set: { metSallow: true } },
    cast: ['player', 'dov', 'sallow', 'engine'],
    imagePrompt: `Clear frosty night, after midnight, inside the Ember Works siding: high brick walls, tall smoking chimneys, stacks of dark bricks under tarpaulins, and the YARD GATE: a single heavy iron gate between two brick piers, chained shut across the rails ahead. Marigold stands stopped with the glowing Glasshouse Carriage behind her and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind that, trailing back out of frame between the walls. Lucan Sallow in his camel overcoat and crimson scarf walks toward the train carrying a hurricane lantern, smiling. The player and Dov stand together by the open carriage door, the player seen from behind. Only these three people.`,
    text: [
      `Marigold eases through the points and into the loop. High brick walls close in on either side, and then the walls open onto the Ember Works themselves: a yard of chimneys, stacked bricks under tarpaulins and the smell of hot peat. Dov brakes. The loop does not curve away to rejoin anything. It runs straight into the works’ yard gate, a single heavy iron gate between brick piers, chained shut across the rails.`,
      `A lantern comes swinging across the yard. The man carrying it wears a camel overcoat with a fur collar, a crimson scarf, and the smile of someone who has been expecting you. Dov climbs down from the footplate and you open the carriage door, and the man inclines his head.`,
      `“Lucan Sallow, of the Ember Company,” he says. “Mr Pellinger. And this must be Miss Vane’s apprentice. What luck that someone was working late.”`,
      `Behind him the kilns glow. The Ember Company sells warmth by the hundredweight all winter, to every house in Tallowmere, and this winter has been very good for business.`
    ],
    choices: [{ text: 'Hear what he wants', to: 'B04' }],
  },
  {
    id: 'B04', title: 'Sallow’s Offer', era: 'town',
    cast: ['player', 'dov', 'sallow'],
    imagePrompt: `Clear frosty night, after midnight, in the Ember Works yard beside the stopped Glasshouse Carriage: Lucan Sallow gestures expansively with his lantern toward a pallet of dark ember-bricks, while Dov stands with folded arms in his rust oilskin and the player, seen from behind, stands between them at the carriage step. Kilns glowing orange in the background, chained gate across the rails. Only these three people.`,
    text: [
      `Sallow walks you both to the gate as if showing off a garden. “The loop does rejoin the Mere line,” he says, “on the far side of the works. My night men have the key to this yard gate. They can walk your train through the yard on the works’ own rails and put you out at the far gate in ten minutes. And since you’re here,” he pats a pallet of bricks under its tarpaulin, “a full locker, with the Company’s compliments. No one need know you came through at all.”`,
      `Dov says nothing. He has folded his arms, which he does instead of swearing.`,
      `You think about Hesper’s rule and about the city on the hill. A summer is a bad season for a brick company. And the sign at the junction was very freshly painted.`
    ],
    choices: [
      { text: 'Accept the tow through the works', to: 'E02' },
      { text: 'Back the train out to the junction', to: 'B05', ...cost(10) },
    ],
  },
  {
    id: 'B05', title: 'Backing Out', era: 'town',
    cast: ['player', 'dov', 'lamp'],
    imagePrompt: `Clear frosty night, after midnight, back at Candlewick Junction: the player crouches at the frost-whitened iron ground lever by the dark signal box steps, seen from behind, thaw-lamp's blue flame at its pivot; the lever's short chain hangs empty of its pin; a brick-dusted boot print in the snow. Dov holds a hand lantern beside the player. Only these two people. The train stands behind them, the engine now nearest, having reversed out of the walled siding. The train stands reversed: Marigold nearest the lever, then the glowing carriage, then the two dark, empty glass carriages (the Fern House and the Orchard Car) trailing away toward the siding, out of focus.`,
    text: [
      `You tell Sallow no, politely, because Hesper would want politeness. His smile does not change. He wishes you luck and walks back across his yard, and the lantern goes out of sight behind the kilns.`,
      `Reversing a train out of a siding in the dark is slow. You lean from the end window of the Orchard Car with the thaw-lamp held out, pulling the bell cord to tell Dov when the walls are clear, while the house stove burns bricks you can hear going. At the junction you climb down into the snow and go to the ground lever at the foot of the signal box steps to set the points for the Mere line.`,
      `The lever is frozen. While the lamp works on its pivot you notice the short chain where the lock pin should hang. The pin is gone. Somebody pulled it, set the points for the loop by hand, and let the frost lock them. Beside the lever, a boot print holds a dusting of dark grit. Brick dust.`,
      `“Fresh paint on his sign and no pin on the lever,” Dov says over your shoulder, lantern raised. “I’ll remember that.” The frost lets go, the lever goes over, and the blades clank across to the main line.`
    ],
    choices: [{ text: 'On into the Lower Town', to: 'B06' }],
  },
  {
    id: 'B06', title: 'Tallow Street', era: 'town',
    cast: ['player', 'carriage', 'engine'],
    imagePrompt: `Clear frosty night, half past twelve, the Glasshouse Express running down the middle of Tallow Street in the Lower Town like a tram: pink and cyan neon of a roller rink and an all-night café reflected in icy cobbles, iced tram wires overhead, snow heaped at the kerbs, dark trams asleep at a stop, a few unnamed townspeople wrapped in blankets at lit upstairs windows, one child on a bicycle riding alongside. Marigold leads, the glowing glass carriage behind her, and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind that. The player is a small figure seen from behind at the glowing carriage's end window. Wide street view of the whole four-vehicle train.`,
    text: [
      `Past the junction, the line drops into Tallow Street and runs down the middle of it like a tram. This is the Lower Town in the small hours of the longest night. The Glacier Palace roller rink burns pink neon at the corner, the all-night café beside it burns blue, and both colours lie smeared across the icy cobbles. The trams are asleep at their stop with frost on their windows.`,
      `People have waited up. There are faces at the upstairs windows, wrapped in blankets, and some of them wave. A boy on a bicycle rides alongside the carriage for a hundred yards, looking in at the green, until the cold beats him. Nobody in Tallowmere under thirty has seen a long summer. They have all heard about this winter.`,
      `An Ember Company hoarding passes on the gable end of a bakery, painted with a fireplace and a smiling family: SAME PRICE ALL WINTER. Dov sounds the whistle for the Allotment Halt at the top of the street.`
    ],
    choices: [{ text: 'Hold on for the Allotment Halt', to: 'B07' }],
  },
  {
    id: 'B07', title: 'Allotment Halt', era: 'town', time: 'LONGEST NIGHT · ONE O’CLOCK',
    cast: ['player', 'dov', 'engine'],
    imagePrompt: `Clear frosty night, one o'clock, at the Allotment Halt at the top of Tallow Street: a short wooden platform, a tall iron water crane with its leather bag swung over Marigold's tank, a wooden telephone box with a small lamp, and snowy allotment plots with sheds beyond. Dov stands at the engine working the crane; the player stands on the platform seen from behind. Across the lane, one small glasshouse glows warm among dark sheds. Only these two people. Stars, hard frost. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.`,
    text: [
      { if: not(is('hubB')),
        text: `The Allotment Halt is a wooden platform at the top of Tallow Street, where the houses stop and the allotments begin under their snow. Marigold stops here every run to take water. Dov swings the water crane’s leather bag over her tank and lets it run, which takes ten minutes and cannot be hurried.`,
        else: `Back on the Allotment Halt platform, the water is still running into Marigold’s tank and Dov is still watching it.` },
      { if: not(is('hubB')),
        text: `The halt has a line telephone in a wooden box with a lamp over it, connected to the Terminus and nowhere else. Across the lane, among the dark sheds, one small glasshouse is lit from inside and steaming gently at the glass. Down the lane to the left, the tram depot’s lights are on; the night crew will be in the pit.`,
        else: `The telephone box, the lit glasshouse across the lane and the depot lights down the lane are where they were.` },
      { if: not(is('hubB')),
        text: `“Ten minutes, Keeper,” Dov says over the sound of the water. “Then the Mere. Only place we can be held up between here and the ice is the Mere Road crossing, if the last tram’s running late.”`,
        else: `“Nearly full, Keeper,” Dov says over the sound of the water.` }
    ],
    choices: [
      { text: 'Ring the Terminus on the halt telephone', to: 'B08', if: not(is('calledHesper')), set: { hubB: true } },
      { text: 'Cross the lane to the lit glasshouse', to: 'B09', if: all(not(is('bulbLore')), ge(35)), set: { hubB: true }, ...cost(5) },
      { text: 'Walk down to the tram depot about the Mere Road gates', to: 'B10', if: all(not(is('tramsHeld')), ge(35)), set: { hubB: true }, ...cost(5) },
      { text: 'Run for the Mere', to: 'C01', if: is('tramsHeld'), ...cost(5) },
      { text: 'Run for the Mere', to: 'C01', if: not(is('tramsHeld')), ...cost(10) },
    ],
  },
  {
    id: 'B08', title: 'The Halt Telephone', era: 'town',
    onEnter: { set: { calledHesper: true } },
    cast: ['player'],
    imagePrompt: `Clear frosty night, one o'clock, at the Allotment Halt: the player stands inside the open wooden telephone box under its small lamp, seen from behind, holding a heavy black handset to one ear, breath steaming. Snowy platform, the water crane and the stopped train out of focus behind. Alone in frame. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.`,
    text: [
      `The halt telephone is a heavy black handset on a cord like a ship’s rope. You wind the handle and the Terminus answers on the first ring, which means Hesper has been sitting by it.`,
      `“Allotment Halt,” you tell her. “Taking water. The house is warm and the trays are quiet.”`,
      { if: is('metSallow'),
        text: `You tell her about the junction: the loop, the chained gate, Lucan Sallow and his offer of a free locker, and the lock pin missing from the lever when you backed out. There is a long breath on the line. “Sallow,” Hesper says. “He has wanted this run to fail since he learned to add. He bought the Conservatory’s whole brick store off the Council in November, did you know that? Tobias Fenn, the caretaker up there, has nothing to light the bed with. The bed’s bricks are yours.” She is quiet a moment. “You backed out. Good. Don’t stop for anyone in a nice coat again.”`,
        else: `You tell her about the junction: the pin pulled from the lever, the points set for the Ember Works loop, the brick dust in the snow. There is a long breath on the line. “Lucan Sallow,” Hesper says. “The Ember Company’s man. He has wanted this run to fail since he learned to add. He bought the Conservatory’s whole brick store off the Council in November, did you know that? Tobias Fenn, the caretaker up there, has nothing to light the bed with. The bed’s bricks are yours.” She is quiet a moment. “You threw the points. Good. Don’t stop for anyone in a nice coat.”` },
      `“How did you know I’d ring?” you ask.`,
      `“Because I always rang,” she says, “and I was always right to.” The line clicks. Outside the box, Dov is still watching the water run.`
    ],
    choices: [{ text: 'Back to the platform', to: 'B07' }],
  },
  {
    id: 'B09', title: 'Nan Perrow’s Bulbs', era: 'town',
    onEnter: { set: { bulbLore: true } },
    cast: ['player', 'nan'],
    imagePrompt: `Clear frosty night, one o'clock, inside Nan Perrow's small lean-to glasshouse across the lane from the Allotment Halt: a paraffin heater glowing, a warm high shelf of bowls with white hyacinth spikes in bud, and an open trapdoor to a cold cellar with more bowls showing only green tips. Nan Perrow in her lilac padded coat and purple knitted hat holds up two bowls for comparison; the player, seen from behind, stands in the doorway. Only these two people. Condensation on the panes.`,
    text: [
      `You cross the lane and knock on the lit glasshouse, a lean-to of old window frames against a shed, warm inside from a paraffin heater. The woman who opens the door is small, seventy at least, in a lilac padded coat and a purple knitted hat. “Nan Perrow,” she says. “You’re Hesper’s apprentice. Come in before my heat goes out the door, I pay the Ember Company enough for it.”`,
      `Nan forces hyacinths. Bowls of them crowd a high shelf by the heater, white spikes in bud. Below the shelf, a trapdoor stands open on a cold brick cellar, and down there are more bowls showing nothing but green tips.`,
      `“People think warm is what a bulb wants,” Nan says, lifting a bowl from the shelf. “Warm is the last thing it wants. These spent ten weeks in that cellar, cold as a church, and then I brought them up. Now they flower.” She points at a sad bowl at the shelf’s end, all leaf and no spike. “That one I kept warm from the start, to see. Leaves and sulks. A bulb counts the cold. It won’t believe in spring until it has had its winter, and then it wants the warmth all at once.”`,
      `She looks past you at the lit carriage on the halt. “I never got near Hesper’s sunwort. Not a bulb, she says, as if that settles anything.” She puts a hot cup in your hands for one minute exactly, then shoos you out to your train.`
    ],
    choices: [{ text: 'Back across the lane', to: 'B07' }],
  },
  {
    id: 'B10', title: 'The Tram Depot', era: 'town',
    onEnter: { set: { tramsHeld: true } },
    cast: ['player'],
    imagePrompt: `Clear frosty night, one o'clock, inside the Lower Town tram depot down the lane from the Allotment Halt: a high brick shed, a cream-and-green tram standing over an inspection pit with work lamps, two unnamed depot workers in overalls and woolly hats looking up from the pit at the player, who stands at the shed door seen from behind. No other people. Cold blue night outside the open door.`,
    text: [
      `The tram depot is a brick shed at the bottom of the lane, lit by work lamps. A cream-and-green tram stands over the inspection pit, and two of the night crew in overalls and woolly hats look up from under it when you come in on a gust of frost.`,
      `You explain. The line to the Mere crosses the Mere Road on the level, and the last tram of the night runs that road at half past one. If the crossing gates are down against the trams when the Express arrives, Dov will not have to stand at the crossing with the stove burning while a tram grinds across.`,
      `“The last tram can wait five minutes for the Express,” the older of the two says. The younger one rings the crossing keeper on the depot phone, and says with his hand over the mouthpiece: “Funny thing. A gentleman from the Ember Company was in this afternoon asking the inspector to run the last tram late tonight. For the passengers, he said.”`,
      `They promise the gates. You go back up the lane with the cold biting at your ears.`
    ],
    choices: [{ text: 'Back up the lane', to: 'B07' }],
  },

  // ───────────────────────── The Mere ─────────────────────────
  {
    id: 'C01', title: 'Mere Road Crossing', era: 'mere', time: 'LONGEST NIGHT · HALF PAST ONE',
    cast: ['player', 'carriage', 'engine'],
    imagePrompt: `Clear frosty night, half past one, at the Mere Road level crossing on the edge of town where the line leaves the last houses for the frozen lake: white crossing gates with red lamps closed against the road, a small lit crossing keeper's hut, the Glasshouse Express rolling across with Marigold leading, the glowing carriage behind her and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind that. The player is seen from behind at the glowing carriage's end window. Beyond, the dark viaduct begins over the ice. No tram in frame (it is out of shot on every route), no individually named people.`,
    text: [
      `Above the Allotment Halt, the houses give out and the line runs along the edge of the town to the Mere Road crossing. Here the road from the Upper Town comes down to the shore and the railway crosses it on the level, with white gates and red lamps. Beyond the gates, the Mere Viaduct begins its long walk across the ice.`,
      { if: is('tramsHeld'),
        text: `The gates are already down against the road. The last tram of the night waits at the barrier with its lights on and its passengers’ faces at the glass, and the crossing keeper waves you over with his lamp. The Express rolls straight through onto the viaduct without stopping. The depot crew kept their word.`,
        else: `The gates are up for the road, and the last tram of the night is grinding down the hill toward the crossing with every window lit. Dov brakes short of the gates and waits, because the tram has the road. It crosses at walking pace, bell clanging, and the passengers press their faces to the glass to look at the green carriage. Then the keeper swings the gates and waves you through. The house stove burned bricks the whole time you stood there.` },
      `The last lamp of the Lower Town slides behind. Ahead there is nothing but ice.`
    ],
    choices: [{ text: 'Out onto the viaduct', to: 'C02' }],
  },
  {
    id: 'C02', title: 'The Viaduct', era: 'mere',
    cast: ['player', 'stock', 'carriage'],
    imagePrompt: `Clear frosty night, near two o'clock, inside the Glasshouse Carriage crossing the long stone viaduct over the frozen Mere: the player stands among the sunwort trays, seen from behind, wiping a clear patch in the condensation on a pane with a gloved hand; through the fogged glass, moonlit ice stretches away to the distant lit city on its hill and the dark dome of the Conservatory on the summit. The house stove glows at the carriage end. Alone in the carriage. Wind-blown spindrift outside.`,
    text: [
      `The Mere Viaduct is a mile of stone arches across the frozen lake, and the wind owns it. It comes off the ice from the north and finds every gap in the glass. The carriage rocks, the sunwort trays shift on their staging, and you go down the aisle wedging them with folded sacks.`,
      `Inside, the glass has fogged with the breath of the plants. You wipe a patch clear with your glove and look up. Tallowmere climbs its hill in tiers: the Lower Town’s neon, the dark Upper Town, and at the top the Conservatory’s dome, black against the stars. Between here and there lies the whole of Cold Hill. On the far shore ahead, a single red light blinks high in the air.`,
      `The stove ticks. The buds in the trays are as tight as they were at the Terminus. Nothing is supposed to happen yet.`,
      `“Beacon Cut in five minutes,” Dov says down the tube. “I have to collect the hill token there. Nobody goes up the hill line without it.”`
    ],
    choices: [{ text: 'Hold on for Beacon Cut', to: 'C03' }],
  },
  {
    id: 'C03', title: 'Beacon Cut', era: 'mere', time: 'LONGEST NIGHT · TWO O’CLOCK',
    cast: ['player', 'dov', 'engine'],
    imagePrompt: `Clear frosty night, two o'clock, at Beacon Cut on the far shore of the frozen Mere: the line in a shallow rock cutting, a small token hut with a lamp beside the rails, and above the cutting a tall steel radio mast with a blinking red lamp at its top and a lit studio cabin at its base reached by an iron stair. Marigold stands stopped; Dov walks to the hut with a lantern; the player stands at the open carriage door, seen from behind. Only these two people. Stars, snow on the rocks. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.`,
    text: [
      { if: not(is('hubC')),
        text: `Beacon Cut is where the viaduct lands on the far shore and the line enters a shallow cutting in the rock. From here to the summit it is a single line, and only one train may be on it at a time. The proof is the hill token, a brass ring kept in a hut beside the rails, and Dov must sign for it in the hut’s book before he may go a yard further. He stamps off through the snow with his lantern.`,
        else: `Back in the carriage at Beacon Cut, Dov is still at the token hut, signing the book by lantern light.` },
      { if: not(is('hubC')),
        text: `Above the cutting stands the red light you saw from the viaduct: a steel radio mast, with a lit cabin at its foot and an iron stair zigzagging up the rock to it. This is where the Tallowmere Night Service comes from. Dov’s transistor is playing it down the speaking tube now, the same low, amused voice: “Two o’clock, and I can see them from my window. Marigold’s just gone into Beacon Cut. Tobias Fenn, up at the Conservatory, if you’re awake, you’ve got about three hours. I’ll keep talking.”`,
        else: `The mast’s red light blinks over the cutting, and the Night Service murmurs on down the speaking tube.` },
      { if: not(is('hubC')),
        text: `Inside the carriage, the wind off the Mere has left every pane fogged. You can see the trays only as green shadows. The vent chain hangs by the stove.`,
        else: `The panes are fogged again with the breath of the plants. The trays are green shadows behind them.` }
    ],
    choices: [
      { text: 'Climb the stair to the studio while Dov signs for the token', to: 'C04', if: all(not(is('wordSent')), ge(25)), set: { hubC: true }, ...cost(5) },
      { text: 'Open the roof vents to clear the fogged glass', to: 'C05', if: all(is('ventFreed'), not(is('earlyVents')), ge(30)), set: { hubC: true }, ...cost(10) },
      { text: 'Take the token and go for Fernhallow', to: 'D01', if: ge(15), ...cost(10) },
    ],
  },
  {
    id: 'C04', title: 'The Night Service', era: 'mere',
    onEnter: { set: { wordSent: true } },
    cast: ['player', 'cassia'],
    imagePrompt: `Clear frosty night, two o'clock, inside the small radio studio cabin at the foot of the Beacon Cut mast: egg-crate foam on the walls, a mixing desk with glowing meters, twin turntables, a cassette deck, a desk microphone on a boom, a window looking down on the stopped lit train in the cutting below. Cassia Flint in her shiny teal puffer jacket with big silver headphones round her neck holds a telephone receiver and grins at the player, who stands just inside the door seen from behind. Only these two people. Seen from above, the train in the cutting is the whole four-vehicle Express: Marigold, the glowing carriage and the two dark, empty glass carriages coupled behind.`,
    text: [
      `The iron stair is slick and the wind at the top tries to take your scarf. The studio is one small room of egg-crate foam and warm valves, with a mixing desk, two turntables and a window that looks straight down into the cutting at your own train. The woman at the desk has big silver headphones round her neck, a shiny teal puffer jacket, and the voice from Dov’s radio. “Cassia Flint,” she says, sliding a fader up. “Night Service. You’re on in thirty seconds, so tell me quickly what you need.”`,
      `You tell her the Conservatory’s caretaker, Mr Fenn, needs to know the Express is coming and be at his gates. Cassia is already dialling. “Tobias Fenn sleeps like a stone and keeps his phone in the kitchen. I’ll ring until he answers.” She leans to the microphone and tells the city that the Keeper of the Stock is standing in her studio, and that the house is warm.`,
      { if: is('metSallow'),
        text: `While a record plays you tell her about the junction: the loop, the chained gate, Lucan Sallow offering a free locker of bricks at one in the morning, and the lock pin gone from the lever. Cassia’s eyebrows go up. “He offered you bricks? Tonight? Oh, I am saying that.” When the record ends, she does, slowly and clearly, so that nobody in Tallowmere with a radio on can miss it.`,
        else: `While a record plays you tell her about the junction: the pin pulled from the lever, the points set for the Ember Works loop, the brick dust in the snow. Cassia’s eyebrows go up. “That I will say more than once.” When the record ends, she does, slowly and clearly, so that nobody in Tallowmere with a radio on can miss it.` },
      `Somebody picks up at the other end of her phone. “Tobias, it’s Cassia at the Night Service. Put your boots on,” she says, and hangs up before he can argue. “He’ll be at the gates. He’ll complain, but he’ll be there.” From the window you see Dov’s lantern still at the token hut, and you take the stair down two at a time.`
    ],
    choices: [{ text: 'Back down to the train', to: 'C03' }],
  },
  {
    id: 'C05', title: 'Fogged Glass', era: 'mere',
    onEnter: { set: { earlyVents: true } },
    cast: ['player', 'carriage', 'stock'],
    imagePrompt: `Clear frosty night, two o'clock, inside the Glasshouse Carriage stopped at Beacon Cut: the player hauls on the vent hand chain by the stove, seen from behind, while the ridge vents stand open overhead and warm vapour streams out into the starry night; the panes have cleared to show sunwort trays sharply and the rock cutting outside. Alone in the carriage. Hard frost outside, the stove glowing.`,
    text: [
      `You haul on the vent chain and the ridge opens along the whole length of the roof. The effect is immediate. The fog lifts off the glass as the warm air rushes out, and for the first time since the viaduct you can see the trays clearly: every rosette, every copper bud, the sacks you wedged them with. You can also see your breath. The house goes cold faster than you would have believed, and the leaves begin to close in on themselves.`,
      `You shut the vents again after a few minutes and feed the house stove from the locker until it roars. Dov is still at the hut with his lantern and the token book, and knows nothing about it except what the locker will tell him later. Slowly the warmth creeps most of the way back, and the glass fogs again as it comes. The buds are exactly as tight as they were. All the chill has done is cost you.`
    ],
    choices: [{ text: 'Back to the stove', to: 'C03' }],
  },

  // ───────────────────────── Cold Hill ─────────────────────────
  {
    id: 'D01', title: 'Fernhallow Halt', era: 'hill', time: 'LONGEST NIGHT · THREE O’CLOCK',
    cast: ['player', 'dov', 'engine'],
    imagePrompt: `Clear frosty night, three o'clock, at Fernhallow Halt at the foot of Cold Hill: a tiny wooden shelter with one oil lamp, a grit bin, and the rails climbing steeply ahead into a stone-arched tunnel mouth in the hillside, the rails glassy with ice shining in the engine's headlamp. Dov kneels at Marigold's frozen sander pipe with a lantern; the player stands beside him seen from behind, holding the thaw-lamp. Only these two people. Stars, snowy pines above the tunnel. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.`,
    text: [
      `An hour above the Mere, the line reaches Fernhallow Halt, the last stop before the summit. It is a wooden shelter with one oil lamp and a grit bin, and above it the rails climb straight into the hillside through the stone mouth of Fernhallow Tunnel. The incline begins here. In the engine’s headlamp the rails shine like glass, because they are coated with it.`,
      `Dov is down on his knees at Marigold’s wheels with his lantern. “Sanders are frozen,” he says. “Ice in the pipes. Without sand on the rail, she’ll spin on that grade and we’ll sit here going nowhere with the stove eating bricks.” He gets up, slowly, and looks at the tunnel. “I’ve taken a run at it before, years ago, with my father driving. Hit the incline fast and let her weight carry her into the tunnel. It worked, once.”`,
      `The grit bin by the shelter is full. There is a bucket hanging on it. From the tunnel mouth to the top of the incline is a mile of dark.`
    ],
    choices: [
      { text: 'Walk ahead with a bucket of grit and sand the rails by hand', to: 'D02', ...cost(5) },
      { text: 'Let Dov take a run at the incline', to: 'D07' },
    ],
  },
  {
    id: 'D07', title: 'The Slide', era: 'hill',
    onEnter: { set: { slid: true } },
    cast: ['player', 'dov', 'engine'],
    imagePrompt: `Clear frosty night, after three, at Fernhallow Halt: Marigold stopped back at the foot of the iced incline with steam billowing after a failed run, her driving wheels standing on bare glassy ice with a bright polished stretch of rail gleaming above her, no grit on the rails, the tunnel mouth dark above. Dov stands beside the engine with his cap pushed back, lantern lowered; the player stands at the carriage step, seen from behind. Only these two people. Nothing derailed, nobody hurt. Snowy pines, stars. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.`,
    text: [
      `Dov backs Marigold down to the far end of the halt, opens her up, and the Express hits the incline at a speed that rattles every pane in the carriage. For a hundred yards it works. Then the wheels find the ice, and the exhaust goes from a bark to a scream, and the whole train hangs on the grade with its wheels spinning and going nowhere, and then, slowly and with great dignity, slides backwards down the hill to exactly where it started.`,
      `Nobody is hurt. Nothing leaves the rails. Dov climbs down and looks at the stretch of rail his wheels have been spinning on, and holds the lantern close. “Polished it,” he says. “Like a mirror.” He straightens. “Grit will still bite above that, but someone’s got to lay it thick, by hand, the whole way to the tunnel, and I’ll have to creep. The house will be burning the whole time.” He does not say it was his idea. He does not have to.`,
      `The gritting crew come up from the Upper Town every morning with their handcart. Every morning, at half past seven.`
    ],
    choices: [
      { text: 'Lay the grit thick by hand, two buckets, the whole way up', to: 'D02', if: ge(20), ...cost(15) },
      { text: 'Wait for the gritting crew', to: 'E04' },
    ],
  },
  {
    id: 'D02', title: 'Sanding the Incline', era: 'hill',
    cast: ['player', 'engine', 'lamp'],
    imagePrompt: `Clear frosty night, after three, on the steep incline above Fernhallow Halt: the player stands aside on the snowy ballast just below the dark stone tunnel mouth, seen from behind, holding the brass thaw-lamp raised; no bucket in frame. Marigold creeps up the grade toward the player with her headlamp blazing, the glowing glass carriage behind her. Alone on the track; Dov is on the footplate, not visible. Pines heavy with snow. The two dark, empty glass carriages (the Fern House and the Orchard Car) are coupled behind the glowing carriage, lower on the grade and mostly out of frame.`,
    text: [
      { if: is('slid'),
        text: `You fill two buckets at the grit bin and go up the incline on foot, with the thaw-lamp hooked on one of them for light, laying the grit thick over the stretch Marigold’s wheels have polished and thinner above it. It is the coldest you have been all night, and it takes most of an hour. Behind you Marigold creeps up at walking pace, her headlamp throwing your shadow a hundred feet up the rails, and on the polished stretch her wheels slip and catch, slip and catch, with a shriek that goes through your teeth. Behind her the house stove burns the whole way.`,
        else: `You fill the bucket at the grit bin and go up the incline on foot, with the thaw-lamp in one hand for light and a fistful of grit thrown ahead of each step. It is the coldest you have been all night. Behind you Marigold creeps up at walking pace, her headlamp throwing your shadow a hundred feet up the rails, and every so often her wheels slip and catch on the grit with a shriek that goes through your teeth.` },
      `The tunnel mouth grows until it fills the hill. There is a date carved in the keystone, older than the city’s trams. At the mouth the rails are dry; the tunnel has kept the ice out. You throw the last of the grit, step aside onto the ballast, and let the engine come past you slowly enough to grab the carriage rail and swing up to the door.`,
      `Inside, the house is warm, and your hands take five minutes to believe it.`
    ],
    choices: [{ text: 'Shut the door and go to the stove', to: 'D03' }],
  },
  {
    id: 'D03', title: 'The Tunnel Mouth', era: 'hill',
    cast: ['player', 'stock', 'carriage'],
    imagePrompt: `Clear frosty deep night, inside the Glasshouse Carriage paused at the dark stone mouth of Fernhallow Tunnel: the player stands by the house stove with one hand near the vent chain and the brick locker open beside it, seen from behind; sunwort trays with tight copper buds on the staging; through the end panes the tunnel's black arch and the frosted rock face in the headlamp glow. Alone in the carriage. Stove glowing.`,
    text: [
      `Marigold holds at the tunnel mouth while Dov checks his gauges for the climb. Through the end panes the tunnel is a black arch with frost on its stones. From here it is a mile of tunnel, then the summit cut, then the Conservatory. The house is warm. The locker stands open beside the stove with its chalked count rubbed to a smudge. The vent chain hangs on its wheel.`,
      `Dov’s voice comes down the tube. “Climbing now, Keeper. Tunnel’s the coldest mile in the city. Whatever you want the house doing, do it before we’re in the dark.”`,
      `The trays wait. The copper buds are tight as they have been all night.`
    ],
    choices: [
      { text: 'Keep the stove as it is and ride the tunnel', to: 'D04' },
      { text: 'Stoke the stove high before the tunnel', to: 'D04', if: ge(20), set: { stoked: true }, ...cost(10) },
      { text: 'Open the roof vents for the tunnel, and stoke for the top', to: 'D04', if: all(chillKnown, ge(20)), set: { chilled: true }, ...cost(10) },
    ],
  },
  {
    id: 'D04', title: 'Fernhallow Tunnel', era: 'hill',
    cast: ['player'],
    imagePrompt: `Inside the Glasshouse Carriage deep in Fernhallow Tunnel at night: pitch-black sooty stone arch sliding past the end panes, water glistening on the tunnel wall, the only light the dim red glow of the house stove behind the player. The player stands at the end window, seen from behind, one gloved hand on the frame, a dark silhouette against the wet stone; staging edges in deep shadow with no plants, vents, frost or condensation discernible. Alone in the carriage. No weather (enclosed tunnel).`,
    text: [
      `The tunnel takes the train like a throat. The stove’s glow is the only light; the panes show nothing but wet black stone sliding past a foot away, and water drips from the roof onto the glass. Marigold’s exhaust slams back off the walls. You cannot see the sky and you cannot hear the wind, and the climb goes on and on.`,
      { if: is('chilled'),
        text: `With the ridge vents open, the house empties of warmth as if someone had pulled a plug. In five minutes your breath hangs in front of you; in ten, frost ferns grow on the inside of the panes, and the only warm thing in the carriage is the stove at your back. Down the aisle, the sunwort rosettes draw in, leaf by leaf, until every tray is a row of dark fists around a copper knuckle. You walk the aisle with the thaw-lamp and look at every one. None has blackened. None has opened. They have simply stopped, as if listening.` },
      { if: is('stoked'),
        text: `With the stove roaring, the house is hotter than it has been since the Terminus. Condensation streams down the panes and drips off the staging. Halfway through the tunnel you notice the leaves have gone soft at the edges, slumping over the rims of their trays in the wet heat, and you open the stove door and damp it down. The buds stay tight. The leaves do not quite recover before the far end.` },
      { if: all(not(is('chilled')), not(is('stoked'))),
        text: `The stove holds the house steady, warm as a kitchen. Water from the roof runs down the outside of the glass. The trays ride the climb without a tremor, their leaves broad and their buds tight, and you walk the aisle once by the stove’s glow to be sure and then sit on the crate by the stove to wait for the far end.` },
      `A grey circle grows ahead. The air changes. Marigold hauls the Express out of the tunnel and into the summit cut.`
    ],
    choices: [
      { text: 'Close the vents at the portal and stoke for the top', to: 'D06', if: is('chilled') },
      { text: 'On up the cut', to: 'D05', if: not(is('chilled')) },
    ],
  },
  {
    id: 'D06', title: 'Stoking for the Top', era: 'hill',
    cast: ['player', 'stock', 'carriage'],
    imagePrompt: `Clear frosty deep night, inside the Glasshouse Carriage just out of the tunnel and climbing the summit cut: the player kneels at the open house stove feeding dark ember-bricks into a roaring fire, seen from behind, the vent chain pulled taut and tied off on its hook; frost ferns melting on the inside of the panes; sunwort trays with tightly drawn-in dark rosettes on the staging. Alone in the carriage. Stars and snowy rock walls outside.`,
    text: [
      `The instant the carriage clears the portal you haul the vent chain and the ridge closes along the roof. Then you open the locker and feed the stove, brick after brick, until it roars like Marigold herself. Dov hears it through the tube. “That’s a lot of bricks at once, Keeper. I hope you know what you’re about.” You tell him you hope so too.`,
      `The frost ferns on the inside of the glass go grey, then wet, then run down the panes in streams. The house claws its way back toward warm, and it takes the whole of the cut. The sunwort stays drawn in, every rosette a dark fist, and when you touch a leaf it is cold and firm and alive. The buds have not moved.`,
      `You shut the locker on what is left and sit down on the crate with your back against the hot iron, shivering, to wait for the top.`
    ],
    choices: [{ text: 'On up the cut', to: 'D05' }],
  },
  {
    id: 'D05', title: 'The Summit Cut', era: 'hill', time: 'LONGEST NIGHT · THE SUMMIT',
    cast: ['player', 'carriage', 'engine', 'conservatory'],
    imagePrompt: `Clear frosty deep night with no dawn glow yet, the Glasshouse Express emerging from the summit cut onto the top of Cold Hill: Marigold leading the glowing glass carriage and, coupled behind it, the two dark, empty glass carriages (the Fern House and the Orchard Car) along a shelf of track above the whole city, Tallowmere's lights spread far below in tiers down to the moonlit frozen Mere with the tiny red mast light on its far shore; ahead on the summit, the great dark glass dome of the Conservatory with its white iron ribs and lantern cupola. The player is a small figure seen from behind at the carriage window. Stars; the eastern sky still fully dark. Only the player visible.`,
    text: [
      `The summit cut opens out, and all of Tallowmere lies below you at once. The Lower Town’s neon is a smear of pink at the bottom. The Upper Town climbs above it in dark terraces, and beyond everything the Mere lies white under the moon, with the mast’s red light blinking on its shore like a pulse. The sky in the east is still as black as the sky in the west.`,
      { if: is('stoked'),
        text: `In the trays the leaves have stiffened again after the heat of the tunnel, though a few at the edges stay crumpled, like paper that has been wet. The buds are tight.`,
        else: `In the trays the buds are tight. The leaves are firm.` },
      `Ahead, on the very top of the hill, stands the Conservatory. It is a dome of glass the size of a cathedral, ribbed in white iron, with a lantern cupola at its crown and a ring of tall iron shutters round its eastern face, all of them closed. There is no light in it. Marigold’s whistle goes out across the whole city, and from the footplate Dov says, quietly, “Nearly there, Keeper. Nearly there.”`
    ],
    choices: [{ text: 'Into the Conservatory yard', to: 'F01' }],
  },

  // ───────────────────────── The Conservatory ─────────────────────────
  {
    id: 'F01', title: 'Cold Hill Gates', era: 'conservatory', time: 'LONGEST NIGHT · BEFORE DAWN',
    cast: ['player', 'dov', 'fenn', 'conservatory'],
    imagePrompt: `Clear frosty night before dawn at the Conservatory yard on the summit of Cold Hill: tall iron gates in a stone wall standing open onto a snowy forecourt with a frozen fountain, the great dark glass dome rising behind with its ring of closed eastern shutters. Tobias Fenn, a tall thin old man in a long brown waxed coat over striped pyjamas, unlaced boots and a brown knitted cap, holds up a hurricane lantern just inside the open gates. Marigold stands stopped just inside the gates, short of the fountain, with the glowing carriage behind her still on the gate line and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind it, trailing back outside the gates and out of frame; Dov stands by the engine; the player walks toward Fenn, seen from behind. Only these three people. Stars.`,
    text: [
      `The line runs up to the tall iron gates of the Conservatory yard, a snowy forecourt with a frozen fountain in the middle and the dome rising over everything like a second sky.`,
      { if: is('wordSent'),
        text: `The gates are open and a lantern is waiting inside them. Tobias Fenn, the Conservatory’s caretaker, is a tall thin old man in a long brown waxed coat buttoned over striped pyjamas, boots unlaced, a knitted cap pulled down over his ears. “Cassia Flint said three hours,” he says, as if this were your fault. “I’ve been standing at this gate for two of them. I wasn’t going to miss it getting dressed.” He has the dome’s side door propped open and a path swept to it through the snow. Marigold runs in through the open gates and stops with her buffers almost touching the fountain’s rim.`,
        else: `The gates are shut and the dome is dark. You pull the bell chain beside the gate and hear it clang somewhere inside the caretaker’s cottage, and then nothing, and then nothing, while the house stove burns behind you. At last a lantern comes bobbing across the yard. Tobias Fenn, the Conservatory’s caretaker, is a tall thin old man in a long brown waxed coat buttoned over striped pyjamas, boots unlaced, a knitted cap pulled on crooked. “Nobody rang,” he says, unlocking the gates and swinging them wide so that Dov can draw Marigold in to the fountain. “Nobody ever rings. Hesper just appears.” You tell him Hesper is at the Terminus with her ankle strapped. He looks at you, and at the lit carriage, and says, “Well. Come on, then,” and goes to unlock the dome.` },
      `Dov climbs down from the footplate, stretches until his back cracks, and comes to the carriage. “Trays,” he says. “Then I’ll see to the fire.”`
    ],
    choices: [{ text: 'Carry the stock in', to: 'F02' }],
  },
  {
    id: 'F02', title: 'Under the Dome', era: 'conservatory',
    cast: ['player', 'dov', 'fenn', 'conservatory'],
    imagePrompt: `Before dawn, inside the great Conservatory on Cold Hill, lit by lanterns: a vast cold space under white iron ribs and dark glass, a circular raised stone planting bed in the centre with a small iron stove door in its base, the tall iron eastern shutters standing closed in a curved row. The player and Dov carry a shallow wooden tray between them toward the bed, seen edge-on so its contents are hidden, the player seen from behind; Tobias Fenn in his brown waxed coat over striped pyjamas stands at the bed with a lantern. Only these three people. Breath steaming; frost on the inner glass.`,
    text: [
      `Inside, the Conservatory is as cold as the hill. Your breath goes up into a dark so high the lantern light does not reach the top of it. In the centre of the floor is the Great Bed, a round stone basin as wide as the carriage is long, with the little iron door of the bed stove set in its base. Round the eastern face, the dawn shutters stand in a closed curve, tall iron louvres three times your height.`,
      `You and Dov carry the trays in two at a time while Fenn holds his lantern and tells you where to set them. You tip the sunwort out into the bed and firm the soil round each rosette with your hands, as Hesper has shown you a hundred times on the Terminus staging. The soil is cold enough to hurt.`,
      { if: is('wordSent'),
        text: `“They bought my whole brick store off the Council in November,” Fenn says, kneeling stiffly at the stove door. “Ember Company. But they didn’t look in the back of the boiler house.” He has half a hod of old bricks laid in the stove already, with kindling under them. “Not enough to light the bed on its own. Enough to help.”`,
        else: `“I should tell you,” Fenn says, kneeling stiffly at the stove door, “that the Ember Company bought my whole brick store off the Council in November. Every brick. I’ve nothing to light this with but what you’ve brought.” The bed stove stands cold and empty.` },
      `The last tray is in. Through the glass above the shutters the stars are still hard and bright.`
    ],
    choices: [{ text: 'See to the bed stove', to: 'F03' }],
  },
  {
    id: 'F03', title: 'The Bed Stove', era: 'conservatory',
    cast: ['player', 'dov', 'fenn', 'conservatory'],
    imagePrompt: `Before dawn inside the Conservatory on Cold Hill, lantern light: close view at the base of the round stone Great Bed, the small iron stove door standing open and dark, a hod of ember-bricks on the floor beside it. The player kneels at the stove door, seen from behind; Fenn crouches at the other side holding a lantern; Dov stands behind with folded arms. The framing stops at the bed's stone rim; no plants visible. Only these three people. Closed iron shutters in the background.`,
    text: [
      `The bed stove is a small iron firebox under the stone, with flues that run round the bed in the stonework. Lit, it warms the soil from below, and the sunwort wakes in warm soil the way bread rises in a warm kitchen. You kneel at its door with the hod from the carriage beside you. Hesper’s rule stands in your head in her own voice: ten to light it, ten to feed it until the sun is on the glass. Fewer than that, and plant cold with the house stove under the bed instead.`,
      `Dov has carried the house stove’s coals in a bucket and set them by the bed, for the cold way, if you choose it. Fenn holds the lantern and says nothing, which from Fenn is a courtesy.`,
      `Above you, through the dark glass, the stars have not moved. It feels as if they never will.`
    ],
    choices: [
      { text: 'Light the bed stove with ten bricks from the locker', to: 'F04', if: all(not(is('wordSent')), ge(20)), ...cost(10) },
      { text: 'Light the bed stove on Fenn’s half hod, with five of your own', to: 'F04', if: all(is('wordSent'), ge(15)), ...cost(5) },
      { text: 'Plant cold, and bank the house stove’s coals under the bed', to: 'E06', if: ge(10) },
      { text: 'Plant cold, and bank the house stove’s coals under the bed', to: 'E03', if: le(9) },
    ],
  },
  {
    id: 'F04', title: 'The Dawn Shutters', era: 'conservatory', time: 'LONGEST NIGHT · FIRST GREY',
    cast: ['player', 'dov', 'fenn', 'conservatory', 'lamp'],
    imagePrompt: `First grey before sunrise inside the Conservatory on Cold Hill: the tall curved row of iron dawn shutters on the eastern face, frost-rimed, with a heavy chain hanging from a large frost-whitened brass wax cylinder mounted high on the ribs where the shutters' gear meets the dome. The player stands below looking up, seen from behind, thaw-lamp in hand; Dov and Fenn stand either side, Fenn pointing up at the cylinder with his lantern. The planted Great Bed glows faintly from its lit stove behind them. Only these three people. Palest grey in the glass above the shutters.`,
    text: [
      `The bed stove catches, and in half an hour the stone is warm to the touch, and the soil above it, and the air just over the soil. The rosettes in the bed stay closed, but they lift a little, the way a sleeper turns toward a window. Over the eastern shutters the glass has turned from black to the first dirty grey.`,
      `“Shutters,” Fenn says, and goes to the chain. It hangs from high on the ribs, where the gear that swings all the louvres at once is mounted beside a brass cylinder the size of a man’s leg: a wax autovent like the one on the carriage roof, made by Hallam & Daughters, who built the dome. In summer the sun warms the wax and the shutters open by themselves. Tonight the cylinder is white with frost. Fenn hauls on the chain and nothing moves. Dov hauls with him and nothing moves. “They have never stuck on the night,” Fenn says, breathing hard. “Not in forty years.”`,
      `There are side louvres, narrow ones low in the walls, that open by hand; they let in light from the sides and along the floor, never straight onto the bed until the sun is high. The chain hangs above you. The grey in the glass is getting lighter by the minute, and all three of you can see it.`
    ],
    choices: [
      { text: 'Haul on the shutter chain, all three of you together', to: 'E05' },
      { text: 'Open the side louvres by hand', to: 'F05' },
      { text: 'Warm the cylinder with the thaw-lamp and wait', to: 'F06', if: is('ventFreed') },
    ],
  },
  {
    id: 'F05', title: 'Half Light', era: 'conservatory',
    cast: ['player', 'dov', 'fenn', 'conservatory'],
    imagePrompt: `Sunrise inside the Conservatory on Cold Hill: low golden light slanting in through narrow open side louvres near the floor, lighting the stone floor and the lower glass but leaving the round Great Bed in the centre in deep cool shadow under the still-closed tall eastern shutters. The player, Dov and Fenn stand at the bed's rim looking down into the shadowed bed, the player seen from behind; the bed's contents are lost in shadow, no leaf shapes readable. Only these three people.`,
    text: [
      `You and Fenn go round the walls throwing the side louvres open one by one while Dov keeps the bed stove fed. They are narrow and low, and each one lets in a blade of grey. By the time the last is open, the grey has turned to gold: the sun is up over the Mere, and the light comes in along the floor in long low stripes, lighting the stone and the lower panes and the three of you to the knees.`,
      `The Great Bed sits in the middle of it, in shadow. The tall shutters above it stay shut, and the light that should pour down onto the sunwort from the east slides past on either side. The soil is warm. The rosettes have lifted. But what reaches them is the light off the floor, thin and second-hand, and it will be the middle of the morning before the sun is high enough to clear the shutters’ top and find the bed directly.`,
      `Fenn stands at the rim with his lantern, which he no longer needs, and does not put it down.`
    ],
    choices: [
      { text: 'Wait with the bed', to: 'E08', if: is('chilled') },
      { text: 'Wait with the bed', to: 'E07', if: not(is('chilled')) },
    ],
  },
  {
    id: 'F06', title: 'First Light', era: 'conservatory',
    cast: ['player', 'dov', 'fenn', 'conservatory', 'lamp'],
    imagePrompt: `Sunrise inside the Conservatory on Cold Hill: the tall iron eastern shutters swinging wide open all together, full golden sunrise flooding straight across the round Great Bed, which is seen from behind and above as a blazing disc of light with its contents burnt out to glare (no plant detail), dust shining in the beams. The player stands on a wooden stepladder near the dome ribs, seen from behind, lowering the brass thaw-lamp from the now frost-free brass cylinder; Dov holds the ladder, Fenn stands at the bed's rim shielding his eyes. Only these three people.`,
    text: [
      `You fetch Fenn’s stepladder, climb as high as the ribs will let you, and hold the thaw-lamp’s blue flame under the great brass cylinder. Then you wait. It is the longest quarter of an hour of the night. The grey in the glass goes to pearl, and pearl to pink. Dov holds the ladder and says nothing. Fenn says a great deal, under his breath, and none of it to you.`,
      `The pin lets go with a crack like a knuckle. You lift the collar, turn it a quarter, and call down. Fenn hauls once on the chain and the whole eastern face of the Conservatory swings open together, twelve iron shutters turning on their pivots with a groan that goes down through the stone.`,
      `The sun comes up over the Mere and straight in. It crosses the floor in one stride, climbs the rim of the Great Bed, and lies down full on the sunwort. Every rosette is lit at once.`
    ],
    choices: [
      { text: 'Watch the bed', to: 'E10', if: is('chilled') },
      { text: 'Watch the bed', to: 'E09', if: not(is('chilled')) },
    ],
  },

  // ───────────────────────── Endings ─────────────────────────
  {
    id: 'E01', title: 'The Waiting Room', era: 'terminus', time: 'LONGEST NIGHT · 5 AM',
    ending: { kind: 'bad' },
    cast: ['player', 'hesper'],
    imagePrompt: `Clear frosty night, five in the morning and still fully dark, inside the stationmaster's office at Winter Terminus: Hesper Vane sits with her strapped ankle on its stool, head bowed, one hand on a small transistor radio on the desk; the player sits on a hard chair across from her, seen from behind, hands clasped. The platform outside the window is empty and dark, with no train. Only these two people. Coal fire low.`,
    text: [
      `Hesper does not argue. She looks at you over her glasses, nods once, and reaches for the telephone to tell Dov. The Express leaves at midnight with Dov doing two jobs: firing Marigold from the footplate and running back along the platform at every stop to feed the house stove. You watch its lights go out along the shore from the office window.`,
      `At five in the morning the two of you sit with Hesper’s transistor on the desk, listening to the Night Service. Cassia Flint, the woman whose voice runs the small hours, is kind about it. The Express reached Fernhallow Halt at the foot of Cold Hill at three with the engine’s sanders frozen and ice on the incline, and one man cannot walk ahead laying grit by hand and keep two fires alive behind him. Dov tried it in turns. Each time he came back, the house was colder and the engine’s pressure lower, and at half past four he stopped trying and banked both fires to wait for the morning gritting crew. The stock is alive, Cassia says, but it is sitting at the bottom of the hill, and it will not be in the bed on Cold Hill before the sun.`,
      `“Any other sunrise doesn’t count,” Hesper says to the radio, very quietly. She does not say anything to you, which is worse. Outside, the frost keeps growing on the inside of the glass, and the longest night goes on being the longest night for another year.`
    ],
  },
  {
    id: 'E02', title: 'The Ember Yard', era: 'town', time: 'MORNING · THE EMBER WORKS',
    ending: { kind: 'bad' },
    cast: ['player', 'dov', 'sallow', 'engine', 'carriage'],
    imagePrompt: `Grey winter morning in the Ember Works yard: the whole Glasshouse Express (Marigold, the glowing glass carriage, and the two dark, empty glass carriages, the Fern House and the Orchard Car, coupled behind) standing on the works' internal rails before the FAR GATE, a pair of tall iron double doors set in the works' outer wall under a brick arch with an unlit lamp above, chained shut; this is a different, taller gate from the single yard gate between brick piers seen at B03, which is out of frame behind the train. Pale daylight on the smoking chimneys and stacked bricks under tarpaulins. Lucan Sallow in his camel overcoat spreads his gloved hands apologetically; Dov stands rigid with folded arms; the player, seen from behind, stands at the carriage step. Only these three people. Snow trodden grey.`,
    text: [
      `Sallow’s night men are quick and cheerful. They walk the Express through the works on the Company’s own rails, between the kilns, with lanterns swinging, while Sallow himself rides on the carriage step and talks to you about the weather. The far gate, when you reach it on the Mere side of the works, is a pair of tall iron doors set in the outer wall under a brick arch with a lamp over it. They are chained too, and the man with their key is the day foreman, who is asleep across the city.`,
      `“How very stupid of me,” Sallow says, and he means you to hear that he does not mean it. His men melt away. Dov tries the chain, and the wall, and finally his own voice, and none of them give. The loop runs back the way you came, to the single yard gate you entered by, which someone has chained again behind you.`,
      `You keep the house warm all night with Company bricks, which burn well. That is the worst of it. At eight in the morning the day foreman arrives with the far gate’s key and a great many apologies, and the sun has been up over the Mere for half an hour. Dov takes the Express on up to Cold Hill anyway, because somebody should, and the Conservatory’s caretaker plants the stock in the Great Bed in broad daylight, and it sits there green and closed and does nothing at all.`,
      `By noon the Ember Company has announced that in view of the hardship, prices will be held all winter. The winter, it turns out, is going to be long.`
    ],
  },
  {
    id: 'E03', title: 'Black Glass', era: 'conservatory', time: 'SUNRISE · COLD HILL',
    ending: { kind: 'bad' },
    cast: ['player', 'dov', 'fenn', 'stock', 'conservatory'],
    imagePrompt: `Sunrise inside the Conservatory on Cold Hill: side louvres open, thin low gold light across the floor; the round Great Bed with its sunwort rosettes gone dark and glassy with frost, a dead bucket of grey coals at its base. The player kneels at the bed's rim, seen from behind, one gloved hand on the stone; Dov and Fenn stand behind in silence. Only these three people. Breath steaming.`,
    text: [
      `There are too few bricks left in the locker to light the bed, and too few to keep the house stove alive under the bed until sunrise. You do what can be done. Dov banks the last of the house stove’s coals in a bucket under the stone, and Fenn throws the side louvres open by hand, and the three of you stand at the rim of the Great Bed in the cold and watch the glass go grey.`,
      `The coals die before the sun comes. By the time the first thin light slides across the floor, the soil has frozen round each rosette, and the sunwort leaves have gone dark and glassy, the way a lettuce goes in a hard frost. The copper buds never open. When you touch one, it is colder than the stone.`,
      `“It was the bricks,” Fenn says, which is true, and does not help. Dov says nothing at all. You ring Hesper from the Conservatory’s telephone and tell her yourself, because that, too, is the Keeper’s job. Tallowmere’s winter goes on, and there is no seed for next year’s summer, and everybody in the city will spend the spring learning what that means.`
    ],
  },
  {
    id: 'E04', title: 'The Slide', era: 'hill', time: 'MORNING · FERNHALLOW HALT',
    ending: { kind: 'bad' },
    cast: ['player', 'dov', 'engine', 'carriage'],
    imagePrompt: `Grey winter morning at Fernhallow Halt at the foot of Cold Hill: the whole Glasshouse Express (Marigold, the glowing glass carriage, and the two dark, empty glass carriages, the Fern House and the Orchard Car, coupled behind) standing back at the halt below the iced incline and the tunnel mouth, Marigold's wheels standing on bare glassy ice with no grit laid, a pair of unnamed gritting workers with shovels and a loaded handcart just arriving along the line and not yet at work. Dov leans against the engine in his cap; the player stands at the carriage door, seen from behind. Nobody hurt, nothing derailed. Pale daylight on snowy pines.`,
    text: [
      `You wait. You and Dov sit on the footplate step at Fernhallow Halt with the house stove banked low behind you to make the bricks last, keeping the stock alive, and watch the tunnel mouth, and listen to Marigold tick as she cools. “It worked once,” Dov says, somewhere around five. “Once.”`,
      `The gritting crew arrive with their handcart at half past seven, as they do every morning, and the sun arrives with them. They lay the incline thick from the halt to the tunnel in twenty minutes, because they do it every day, and they do not ask why the Express is still at the bottom of the hill, because they have a radio.`,
      `The Express climbs the incline at nine o’clock on a bed of fresh grit, with the stock green and warm and closed in its trays, and reaches the Conservatory in time for nothing. The caretaker plants it anyway. The sun shines on it all day. It is a tray of plants on a hill.`
    ],
  },
  {
    id: 'E05', title: 'Falling Glass', era: 'conservatory', time: 'SUNRISE · COLD HILL',
    ending: { kind: 'bad' },
    cast: ['player', 'dov', 'fenn', 'conservatory'],
    imagePrompt: `Sunrise inside the Conservatory on Cold Hill: the tall iron eastern shutters sagging half open and askew on broken gearing, a run of upper panes gone and cold morning mist pouring in through the gap, frost silvering the round Great Bed and its darkened sunwort below. The player, Dov and Fenn stand well back across the floor, unharmed, looking up; the player seen from behind. Only these three people. Golden light through the ruined opening.`,
    text: [
      `Three of you on the chain is enough. That is the trouble. The frozen gear does not turn; it shears, with a bang like a gun, and the chain comes down in a heap at your feet, and the twelve shutters, no longer held by anything, swing half open under their own weight and stop, crooked. A run of panes above them goes with the shock. Fenn pulls you both back by the collars, and the glass comes down where none of you is standing, in a long bright crash that goes on for some time.`,
      `Then the cold comes in. It pours through the broken roof like water through a sluice, and the warm air you have spent all night keeping rises straight out through the hole into the dawn. The sun comes up over the Mere and shines in through the gap, bright and useless, onto a bed that is frosting white while you watch.`,
      `“Forty years,” Fenn says, with his hand on your shoulder, “and I should have known better than to haul it.” He means it as a kindness. The sunwort goes dark by the time the sun is clear of the hill, and the Hallams’ grandchildren will spend the spring reglazing a dome over an empty bed, and the winter does not end.`
    ],
  },
  {
    id: 'E06', title: 'Thaw', era: 'conservatory', time: 'SUNRISE · COLD HILL',
    ending: { kind: 'good' },
    cast: ['player', 'dov', 'fenn', 'stock', 'conservatory'],
    imagePrompt: `Sunrise inside the Conservatory on Cold Hill: side louvres open, low gold light along the floor; the round Great Bed in soft shadow with a glowing bucket of coals set under its stone base. Close on the soil at the rim: a scattering of copper sunwort buds just beginning to split and show a thread of warm orange among mostly closed buds, leaves out of focus and cropped so no leaf shape is readable. The player, Dov and Fenn crouch at the bed's rim, the player seen from behind. Only these three people. Tall eastern shutters closed behind.`,
    text: [
      `You do it the cold way, the house stove under the bed. Dov sets the bucket of the house stove’s coals under the stone and feeds it from the locker a brick at a time, and Fenn goes round the walls throwing the side louvres open. The bed never gets properly warm. The soil above the coals is merely less cold than the soil at the rim. When the sun comes up over the Mere it comes in low through the louvres and lies along the floor, and the bed sits in its own shadow under the closed shutters.`,
      { if: is('chilled'),
        text: `And yet the sunwort moves. Perhaps it is the long cold of the tunnel, perhaps it is only stubbornness, but as the floor warms, a scattering of the copper buds split and show a thread of orange, and the air over the bed, when you hold your hand in it, is faintly, definitely warmer than the air beside it. Fenn says he has never seen them open at all in a cold bed.`,
        else: `And yet the sunwort moves. As the floor warms, a scattering of the copper buds split and show a thread of orange, and the air over the bed, when you hold your hand in it, is faintly, definitely warmer than the air beside it. It is not a bloom. It is a promise of one.` },
      `What it makes is a thaw. By Thursday the ice on the Mere is grey and talking to itself, the Lower Town gutters run, and people walk Tallow Street with their coats unbuttoned as if that were a kind of summer. It lasts three weeks. In that time Hesper, on crutches, takes cuttings from every plant that opened and raises them under glass against next year. She says it will be enough. She does not say it will be easy. You are her Keeper now, and the cuttings are yours to raise.`
    ],
  },
  {
    id: 'E07', title: 'A Thin Summer', era: 'conservatory', time: 'MID-MORNING · COLD HILL',
    ending: { kind: 'good' },
    cast: ['player', 'dov', 'fenn', 'stock', 'conservatory'],
    imagePrompt: `Mid-morning inside the Conservatory on Cold Hill: high sun now clearing the top of the still-closed eastern shutters and falling on the round Great Bed, where about half the sunwort buds have opened into warm orange cup flowers among green leaves, the rest still closed. The player, Dov and Fenn stand at the rim in bright light, the player seen from behind. Only these three people. Open side louvres along the walls.`,
    text: [
      `The sun does not find the Great Bed directly until the middle of the morning, when it climbs clear of the closed shutters’ top and falls on the warm soil at last. By then the stove has been fed the last of its ten bricks and the stone has begun to cool. The sunwort opens anyway, because it was warm and then it was light; but it opens the way people get up on a dark morning, slowly and not all of them. Half the bed blooms, a field of warm orange cups you can feel on your face from the rim. The other half lifts its leaves and keeps its buds.`,
      `It is a summer. Dov says so, and Fenn, who does not say things, says so too. By Tuesday the Mere is open water, and by the week after the Lower Town has put its tables out on Tallow Street. It is a short one. The lake is cold again by August, and the seed Hesper gathers from the half that opened is enough for next year, and not much more than enough.`,
      { if: is('wordSent'),
        text: `Cassia Flint tells the city about it from her studio at Beacon Cut, which has not gone off the air all night, and plays something warm. When the trams run again she comes up to the Conservatory on the first one, headphones round her neck, to see the thing she has been describing.`,
        else: `You ring Hesper from the Conservatory telephone before you leave the bed. She listens to the whole account without interrupting, which she has never done before, and then says, “Thin. All right. Thin we can work with,” and tells you to bring the trays home.` },
      `At the Terminus, Hesper has already chalked next year’s date on the locker door.`
    ],
  },
  {
    id: 'E08', title: 'Late Bloom', era: 'conservatory', time: 'NOON · COLD HILL',
    ending: { kind: 'good' },
    cast: ['player', 'dov', 'fenn', 'stock', 'conservatory'],
    imagePrompt: `Noon inside the Conservatory on Cold Hill: strong high sunlight pouring down onto the round Great Bed, now wholly in flower, dense warm orange sunwort cups glowing among dark leaves, visible heat shimmer above the bed; the tall eastern shutters still closed behind, side louvres open. The player, Dov and Fenn stand at the rim in their usual clothes, Fenn dabbing his brow with his knitted cap, the player seen from behind. Only these three people.`,
    text: [
      `Nothing happens for a long time. The sun comes in along the floor and climbs the walls, and the Great Bed sits in the shadow of the closed shutters with its soil warm and its rosettes drawn in tight as fists, and Fenn feeds the bed stove its last brick, and you begin to think the cold of the tunnel has cost you the lot.`,
      `Then, at the middle of the morning, the sun clears the shutters’ top and falls on the bed, and the sunwort opens as if it had been waiting for exactly that and nothing else. Not slowly. Row by row, from the east rim across, the dark fists unclench into broad orange cups, and the heat comes off them in a wave you can see shaking the air. By noon every plant in the bed is open. Fenn has to step back from the rim, mopping his face with his cap.`,
      `It is a true summer, and a late one. The Mere does not open until Thursday, and then all at once, with a crack people hear in the Lower Town. The lake stays warm into September. Hesper gathers seed from every plant in the bed and says, on crutches, that she wants to hear exactly what you did in that tunnel and why, and then that she would like it on tape.`,
      { if: is('wordSent'),
        text: `Cassia Flint, who has kept the Night Service on the air until daylight, says it first and says it best: “They waited for the sun. All the way to noon. And then they didn’t wait at all.”`,
        else: `Dov drives you home down the hill at a crawl with every window of the Glasshouse Carriage open, which has never been done before, and the city stands in the street to feel the warm air come past.` }
    ],
  },
  {
    id: 'E09', title: 'An Ordinary Summer', era: 'conservatory', time: 'SUNRISE · COLD HILL',
    ending: { kind: 'good' },
    cast: ['player', 'dov', 'fenn', 'stock', 'conservatory'],
    imagePrompt: `Sunrise inside the Conservatory on Cold Hill: the tall eastern shutters standing wide open, full golden light across the round Great Bed, where most of the sunwort has opened into warm orange cups while a scattering of copper buds remain closed; the player, Dov and Fenn stand at the rim bathed in light, the player seen from behind. Only these three people. Frozen Mere glittering far below through the open shutters.`,
    text: [
      `Under the full light the sunwort opens the way it is supposed to, which is to say politely. Over a quarter of an hour the copper buds loosen and part and turn into broad orange cups, most of them, and the warmth comes up off the bed in a slow, steady breath you can feel on your face from the rim. A few plants keep their buds shut and only lift their leaves. Fenn counts them and says it is about usual.`,
      { if: is('tapeHeard'),
        text: `“A fair season,” Dov says, and you hear Hesper’s voice on an old tape saying the same words.`,
        else: `“A fair season,” Dov says, the way he might say it of a fire that has drawn properly.` },
      `It is exactly that. By Tuesday the Mere is open and the trams are running without ice on their wires, and by the week after the Lower Town has its tables out on Tallow Street. The lake stays warm until the end of August. The seed Hesper gathers is enough for next year, with a margin, which is the most anyone has had since the boiler failed.`,
      { if: is('wordSent'),
        text: `By breakfast the whole city has heard, from Cassia Flint’s studio at Beacon Cut, that the Keeper found the lock pin pulled at Candlewick Junction and brick dust in the snow. The Ember Company issues a statement about vandals. Nobody buys it, and by the end of the week nobody is buying much else from them either.`,
        else: `You ring Hesper from the Conservatory telephone while the sun is still on the bed. She asks about the shutters, and the stove, and the trays, and finally about you, and says, “Fair. Good. Fair is what we needed,” and that you may keep the thaw-lamp.` },
      `At the Terminus, when you get home, there is a new cassette in the biscuit tin with this year’s date on it and nothing recorded yet. Hesper says it is yours.`
    ],
  },
  {
    id: 'E10', title: 'The Glasshouse Express', era: 'conservatory', time: 'SUNRISE · COLD HILL',
    ending: { kind: 'good', best: true },
    cast: ['player', 'dov', 'fenn', 'stock', 'conservatory'],
    imagePrompt: `Sunrise inside the Conservatory on Cold Hill: the tall eastern shutters flung wide, blazing golden light pouring across the round Great Bed where every sunwort plant has burst fully open into large warm orange cup flowers at once, heat shimmer rising, frost on the dome's inner glass turning to running water and steam. The player stands at the rim with arms slightly raised in the light, seen from behind; Dov sits down on the stone rim beside them, Fenn stands with his knitted cap in his hand. Only these three people. The whole city and frozen Mere visible far below through the open shutters.`,
    text: [
      `The sun lies on the bed, and for a breath nothing happens, and then the sunwort opens all at once, like being shouted at. Every dark fist in the Great Bed unclenches into a broad orange cup in the same instant, and the heat comes off them in a single wave that hits the three of you at the rim like an opened oven door. Frost on the inner glass of the dome, a hundred feet up, turns to water and runs. Fenn takes his cap off. Dov sits down on the stone.`,
      `You know what you are looking at, because you have heard it described. This is what Hesper saw in the Long Summer, when the stove door came off its hinge in Fernhallow Tunnel and she thought she had killed the lot. Not luck. The sunwort counted the cold, as a bulb counts it, and would not believe in summer until it had had its winter, and then wanted the warmth all at once. You gave it the tunnel cold and the cut hot and the sun on time, through shutters you knew how to open because you had knelt on a frozen roof at the Terminus and learned the Hallams’ lock by hand.`,
      `By the time you ring Hesper from the Conservatory telephone, the ice on the Mere is already groaning. The lake is open by Tuesday morning. The Lower Town has its tables out on Tallow Street by Wednesday, and the lake is still warm in October, when the first frost comes late and gentle and finds the Terminus staging crowded with next year’s stock, raised from a harvest of seed so large that Hesper has to borrow the Orchard Car to hold it.`,
      { if: is('wordSent'),
        text: `Cassia Flint tells the city about the bloom from her studio as it happens, with her window open to the warm wind, and about the lock pin pulled at Candlewick Junction and the brick dust in the snow. The Ember Company holds its prices all summer, to a city that has no further use for them.`,
        else: `Dov drives you home down the hill at noon with every window of the Glasshouse Carriage open, and the warm air comes past the people standing in Tallow Street like something they had forgotten and now remember.` },
      `Hesper is on the platform at the Terminus when the Express comes in, on crutches, without her blanket. She does not say anything kind. She hands you the recorder and a new cassette with this year’s date on it. “Keeper. From the beginning. Leave nothing out.”`
    ],
  },
];

const pages = raw.map((page): Page => page.ending
  ? { ...page, onEnter: { ...page.onEnter, set: { ...page.onEnter?.set, running: false } } }
  : page);

const story: Story = {
  id: 'glasshouse-express', revision: 1,
  title: 'The Glasshouse Express', subtitle: 'A midnight railway through the city of winter',
  blurb: 'Tallowmere makes its seasons, and this year only one carriage of summer survived. You are the station’s apprentice. Tonight you ride as Keeper, up through the frozen city to Cold Hill, with a stove, a locker of ember-bricks and one sunrise to get it right.',
  start: 'A01',
  eras: {
    terminus: { label: 'Winter Terminus' },
    town: { label: 'Lower Town' },
    mere: { label: 'The Mere' },
    hill: { label: 'Cold Hill Incline' },
    conservatory: { label: 'The Conservatory' },
  },
  flags: {
    ember: { default: 80 },
    running: { default: false },
    tapeHeard: { default: false },
    ventFreed: { default: false },
    metSallow: { default: false },
    calledHesper: { default: false },
    bulbLore: { default: false },
    tramsHeld: { default: false },
    wordSent: { default: false },
    earlyVents: { default: false },
    slid: { default: false },
    stoked: { default: false },
    chilled: { default: false },
    hubA: { default: false },
    hubB: { default: false },
    hubC: { default: false },
  },
  ui: { header: 'basic', transition: 'fade' },
  difficulties: {
    easy: { set: { ember: 100 } },
    medium: { set: { ember: 90 } },
    hard: { set: { ember: 80 } },
  },
  difficultyNotes: {
    easy: 'A full locker of ember-bricks, room for every stop and two mistakes, and unlimited undo.',
    medium: 'A smaller locker. The full run can absorb one mistake; undo your last 2 choices.',
    hard: 'Bricks for the full run and nothing spare. No undo.',
  },
  // Best: legs 10 + 10 + 10 (the Mere leg is 5 after the five-brick depot visit), sanding 5, bed stove 10 = 45 mandatory;
  // three clue visits 15; the tunnel chill 10 = 70. The bed stove needs 20 before lighting and leaves 10:
  // Hard exact, Medium one 10-brick slip, Easy two. The studio visit (5) halves the bed cost, so it is net zero too.
  clock: {
    flag: 'ember', label: 'EMBER BRICKS', format: 'number', unit: '',
    visibleWhen: is('running'), allowExpiredOn: [],
  },
  art: {
    stylePrefix: `Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.`,
    cast: {
      player: `THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.`,
      hesper: `HESPER VANE: an original woman in her seventies, pale freckled skin, white hair in a short plait, round tortoiseshell glasses, in a bottle-green station jumper, a grey wool skirt and thick grey socks, her LEFT ankle strapped in white bandage and propped on a stool under a red tartan blanket. Sharp, dry, affectionate. Never standing in any scene except on crutches in the epilogue if listed.`,
      dov: `DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.`,
      nan: `NAN PERROW: an original small woman in her seventies, warm olive skin, silver hair under a purple knitted hat, a padded lilac coat over a floral apron, green wellington boots and brown fingerless mittens. Brisk and amused.`,
      cassia: `CASSIA FLINT: an original woman in her twenties, deep brown skin, short bleached-blonde curls, big silver headphones worn round her neck, a shiny teal puffer jacket over a black turtleneck, black leggings with acid-yellow leg warmers and white high-top sneakers. Quick grin, always near a microphone.`,
      fenn: `TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.`,
      sallow: `LUCAN SALLOW: an original man in his forties, pale skin, sleek black hair, a neat black moustache, a camel overcoat with a fur collar, a crimson silk scarf, black leather gloves and polished black shoes, carrying a hurricane lantern. A warm salesman's smile that never reaches the eyes. No villain costume.`,
      engine: `MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.`,
      carriage: `THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.`,
      stock: `SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.`,
      lamp: `THE THAW-LAMP: a brass hand lamp with a bulbous spirit reservoir, a wooden side grip, and a flared brass nozzle inside a wire guard, throwing a small soft blue flame. Palm-and-a-half tall; used to thaw frozen locks, levers and wax cylinders.`,
      recorder: `HESPER'S RECORDER: a chunky cream-and-brown portable cassette recorder with a carrying handle, a row of piano-key buttons and a round speaker grille, beside a round blue floral-patterned biscuit tin holding labelled cassettes (labels unreadable).`,
      conservatory: `THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.`,
    },
  },
  pages,
};

export default story;
