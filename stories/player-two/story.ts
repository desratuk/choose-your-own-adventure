import type { Cond, Effects, Page, Story } from '../../src/engine/types';

const is = (flag: string, value: string | boolean = true): Cond => ({ flag, is: value });
const not = (cond: Cond): Cond => ({ not: cond });
const all = (...conds: Cond[]): Cond => ({ all: conds });
const ge = (n: number): Cond => ({ flag: 'charge', gte: n });
const le = (n: number): Cond => ({ flag: 'charge', lte: n });
const cost = (n: number): Effects => ({ add: { charge: -n } });
const patchKnown = all(is('latchTest'), is('echoRecord'), is('feederTraced'));
const freightSafe = all(is('tugHelp'), is('storesSecured'));

const raw: Page[] = [
  {
    id: 'A01', title: 'No Maker’s Mark', era: 'earth', time: 'SUMMER 1984 · DUSK',
    cast: ['player', 'mica', 'cabinet'],
    imagePrompt: `Dry summer dusk inside Bellwether's small arcade. Mica holds a delivery docket beside the unmarked Starfighter cabinet while the player kneels at its lower service door. Amber window light, quiet comic anticipation. Only these two people; no recruiter or pilot.`,
    text: [
      `The new cabinet arrives at Bellwether’s arcade just as Mica Bell is counting the till. Outside, the last bus exhales at the corner. Inside, six games compete to make the noise of something expensive falling downstairs. It is a perfectly normal summer evening in 1984 until you look at the delivery slip.`,
      `No manufacturer. No return address. Just STARFIGHTER and Mica’s signature, which gets larger when she is annoyed.`,
      `You do the arcade’s repairs after school and through the holidays. You’re old enough to be trusted with its keys and young enough that customers still ask when the repair person is coming. Mica pays you anyway. Sometimes in advance, which is how you know she’s worried.`,
      `“The driver said it finds its own players,” Mica says, pushing her square glasses up. “I asked whether it found its own insurance.”`,
      `The screen shows a field of stars. A little spacecraft circles a bright border. You reach past the controls for the service latch. The cabinet clicks before you touch it.`
    ],
    choices: [{ text: 'Open the service door', to: 'A02' }],
  },
  {
    id: 'A02', title: 'Behind the Picture', era: 'earth',
    cast: ['player', 'mica', 'cabinet'],
    imagePrompt: `Dry summer evening inside the arcade. Close over the player's shoulder into the Starfighter cabinet's open low service compartment: relay block, counter and tidy cable loom. Mica crouches nearby with a desk lamp. No exposed high-voltage screen parts, no other people.`,
    text: [
      `On the arcade floor, Mica holds a lamp while you open the low-voltage service compartment. The screen’s dangerous parts stay sealed higher up. Down here are contacts, a coin counter and a relay block, arranged almost like the pinball table you repaired last week.`,
      `The attract picture jumps whenever the speaker clicks. You lift the little service latch. The spacecraft freezes, but the counter behind the panel keeps ticking. Holding the picture doesn’t stop the workings. You clean the loose speaker contact and lower the latch; the game moves smoothly again.`,
      `Then a second counter advances. It is labelled SCORES SENT. Its thin lead ends at a sealed silver wafer. There is no telephone wire. Mica called the phone company when the crate arrived; they could find no line, account or destination. The local radio repair shop couldn’t trace it either.`,
      `“Maybe it sends them to the tax office,” Mica says.`,
      `A voice behind you sounds personally wounded. “Madam, I recruit for a considerably more hopeful institution.” You bump your head on the cabinet’s wooden lip.`
    ],
    choices: [{ text: 'Come out from under the cabinet', to: 'A03' }],
  },
  {
    id: 'A03', title: 'The Salesman', era: 'earth',
    cast: ['player', 'mica', 'centauri', 'cabinet'],
    imagePrompt: `Dry summer evening in the arcade, warm neon light. Centauri flourishes a plain calling card toward the player and sceptical Mica beside the now-closed Starfighter cabinet. Comic salesman tableau, no vehicles, no other characters.`,
    text: [
      `You crawl out onto the arcade carpet. Beside Mica stands a silver-haired stranger in a maroon coat, carrying a hat as though he expects someone to applaud it. He introduces himself as Centauri. Mica takes his card and immediately looks at the back for an address.`,
      `“The game is a test,” Centauri tells you. “Its scores travel to the Star League. An alliance of worlds. We defend the places inside that bright border against an armada that would prefer to own them.” He points to the screen. “Rather more ships than fit in a game, unfortunately.”`,
      `You tell him your highest score barely lasts through supper.`,
      `“Our record holder, Alex Rogan, is already deployed elsewhere,” Centauri says. “I came about the service report. You stopped the picture without stopping the machine. Then you fixed the fault instead of hitting the cabinet.”`,
      `“Hitting it costs extra,” Mica says.`,
      `Centauri puts the hat against his chest. “We have pilots. We need people who can tell them why the light is green and nothing works.”`
    ],
    choices: [{ text: 'Ask what the actual job would be', to: 'A04' }],
  },
  {
    id: 'A04', title: 'A Job Description', era: 'earth',
    cast: ['player', 'mica', 'centauri'],
    imagePrompt: `Dry summer evening inside the arcade by its counter and wall telephone. Player, Mica and Centauri study a small illuminated route card. Closed game cabinet outside the crop, no spacecraft or extra people.`,
    text: [
      `At the arcade counter, Centauri stops smiling long enough to answer properly. A flight engineer keeps a League ship’s power, cooling and instruments working. You would travel with a qualified pilot to a service dock, try a supervised placement and choose whether to take an assignment. The League will bring you home if you decline.`,
      `“And if something really goes wrong?” you ask.`,
      `“There are recovery crews,” Centauri says. “There is also a war. I cannot honestly make the second part sound like the first.”`,
      `Through the window, Bellwether’s water tower has become a dark thumb against the sunset. You have spent all summer saving for a bus ticket out of town without deciding where the bus ought to go.`,
      `Mica sets your wages on the counter. “These are for work already done,” she says. “They aren’t a vote.” She pulls the telephone toward you. Centauri waits while you think.`
    ],
    choices: [
      { text: 'Call home, then try the placement', to: 'A05' },
      { text: 'Keep your job here in Bellwether', to: 'E01' },
    ],
  },
  {
    id: 'A05', title: 'The Other Seat', era: 'earth', time: 'SUMMER 1984 · NIGHT',
    onEnter: { set: { running: true } },
    cast: ['player', 'tavi', 'gunstar'],
    imagePrompt: `Clear dry summer night at the empty Bellwether fairground. Tavi stands on the Gunstar's lowered boarding step and offers the player a hand. Only player and Tavi; Centauri and Mica are outside the frame. Intentional Gunstar spacecraft, no other famous vehicle.`,
    text: [
      `After a very strange telephone conversation, Mica agrees to be your family’s contact. Centauri leaves her a working League receiver and promises a report from the dock. Then the three of you walk to the empty fairground. The shape beside the ticket booth is much too large to be a car.`,
      `A blue-grey woman with a short white crest opens its boarding hatch. “Tavi Renn. Pilot,” she says. “Gunstar. Ship. Steps. Mind the third.”`,
      `Inside the Gunstar, a League defence spacecraft, two seats face different panels. Tavi takes the flight controls. Your station has power switches, circuit diagrams and a restraint that makes a determined attempt to fold you in half. Tavi adjusts it without laughing.`,
      `JUMP CHARGE reads {{clock}}. Tavi explains that this stored bank powers jumps between distant places and heavy service equipment. Ordinary engines and life support have their own supply. Tonight’s allocation has to last until the assignment ends; the dock’s chargers are reserved for the relief fleet.`,
      `Centauri closes the hatch from outside after you both give permission. Tavi rests her hand beside the flight lever. “I fly when you say ready.” You check the cooling indicator before answering.`
    ],
    choices: [{ text: 'Give Tavi the ready signal', to: 'A06', ...cost(10) }],
  },
  {
    id: 'A06', title: 'Bellwether Falls Away', era: 'transit', time: 'DEPARTURE NIGHT · FIRST HOP',
    cast: ['player', 'tavi'],
    imagePrompt: `Night inside the enclosed Gunstar cockpit, no weather in space. Player at side engineering panel, Tavi at flight controls, a small blue planet receding beyond the canopy. Warm instrument light, wonder, no other characters or ships visible.`,
    text: [
      `The fairground drops beneath the canopy. For a few seconds you can still pick out the ticket booth, the dark baseball diamond and the lit square of Mica’s shop. Then clouds become a pale seam around an entire world.`,
      `Tavi calls the jump. You brace for a great kick, but the stars simply draw together like the mouth of a bag and open somewhere else. The bank settles at {{clock}}. Your stomach arrives slightly later.`,
      `Ahead hangs a service dock, its long arms bright with work lamps. The distant ships moving away from it belong to the relief fleet. Tavi asks you to read the cooling pressure aloud. You find the gauge, check its units and do.`,
      `“Good,” Tavi says. “You didn’t guess.”`,
      `You try to think of a reply that suits your first sight of another part of the galaxy. What comes out is, “Your left speaker rattles.”`,
      `“I know,” Tavi says. “I have been calling it engine music.” She requests a berth.`
    ],
    choices: [{ text: 'Help Tavi dock the Gunstar', to: 'B01' }],
  },
  {
    id: 'B01', title: 'Grig’s Workshop', era: 'league', time: 'SERVICE DOCK · SHIPBOARD NIGHT',
    cast: ['player', 'tavi', 'grig'],
    imagePrompt: `Enclosed League service-dock workshop during shipboard night, no weather. Grig greets the player and Tavi beside a bench of training relay blocks. Warm overhead work lights, no crowd or unlisted machines.`,
    text: [
      `Tavi brings the ship into a lit berth and walks you through a sealed boarding tube to the workshop. A broad reptilian alien looks up from a relay block, grins and sets down three screwdrivers at once.`,
      `“Grig,” he says. “Navigator, instructor, and apparently keeper of all the screwdrivers.” He offers you the handle of one. “Centauri says you can repair anything. I have reduced that to a reasonable first lesson.”`,
      `The dock is busy sending ships to other threatened stations. Grig will train you here and stay to ready the next crew. Tavi has flown freight escorts before; this Gunstar’s service controls are new to both of you.`,
      `Grig shows you a diagram in plain translated labels, then makes you find each part in the actual ship. The load is what uses power; the instrument is what tells you about it. They need not fail together. You know that much from games that flash INSERT COIN with their coin slot jammed.`,
      `Tavi labels her rattling speaker ENGINE MUSIC. Grig silently puts a screwdriver across the label.`
    ],
    choices: [{ text: 'Take your place at the training bench', to: 'B02' }],
  },
  {
    id: 'B02', title: 'Before the Assignment', era: 'league',
    cast: ['player', 'grig'],
    imagePrompt: `Enclosed League workshop in steady night-shift lamplight, no weather. Player and Grig at a bench with a two-bank power diagram and closed portable test cases. Tavi is not in this crop; optional equipment omitted.`,
    text: [
      { if: { any: [is('latchTest'), is('sleeve'), is('heardTavi')] },
        text: `Back at Grig’s bench, you put your notes beside the simulator switch. Tavi has returned to the berth to finish the flight checks. Grig waits while you decide whether to do more preparation.`,
        else: `At the workshop bench, Grig connects the portable training rig to the Gunstar’s service cable. Tavi goes back to the berth for flight checks. Every powered exercise will draw from your allocated jump bank.` },
      `Grig shows you the split-field divider. “Two banks work together. It needs at least {{splitMinimum}}% before you start. Half that reserve drives the operation; the other half must stay charged to hold the separation. Below that, use the ordinary single-feed controls.” He has you point to both banks before he closes the cover.`,
      `Grig shows you the coupling release too. Every powered operation must leave some charge to open it again; the controls reject a draw that would empty the bank. The dock can lend test equipment, but cannot replace charge spent using it. Your reading is {{clock}}. Through the berth window, Tavi is trying to open a food packet with her elbows.`,
      `Grig puts his hand on the simulator. “When you are ready, I shall break something on purpose. It is one of the privileges of teaching.”`
    ],
    choices: [
      { text: 'Test the output adapter under load', to: 'B03', if: all(not(is('latchTest')), ge(6)), ...cost(5) },
      { text: 'Practise fitting a connector sleeve', to: 'B04', if: all(not(is('sleeve')), ge(6)), ...cost(5) },
      { text: 'Go through the cockpit layout over supper with Tavi', to: 'B05', if: all(not(is('heardTavi')), ge(6)), ...cost(5) },
      { text: 'Begin Grig’s simulator check', to: 'B06' },
    ],
  },
  {
    id: 'B03', title: 'A Picture That Lies', era: 'league',
    onEnter: { set: { latchTest: true } },
    cast: ['player', 'grig', 'adapter'],
    imagePrompt: `Enclosed League workshop in night-shift light, no weather. Player measures the portable output adapter while Grig turns a small test fan; a separate round display holds a still pattern. Only these two people. Tavi is not here.`,
    text: [
      `At the next workshop bench, you connect the Gunstar’s output adapter between a test fan and a round display. Grig puts a strip of paper near the fan. The paper flutters. The display turns.`,
      `You lift the adapter’s silver latch. The display holds its last picture; the paper keeps fluttering. Like the arcade service latch, it separates what the machine does from what the picture says.`,
      `You check the pins one at a time. The outer pair carries power. The inner pair carries the picture. A raised rib keeps the two plugs apart, but you copy the pin positions rather than trusting the shape. This particular adapter has a replaceable output lead.`,
      `Grig holds up the paper. “The fan does not know it has become a still life.”`,
      `The sustained test brings your bank to {{clock}}. You return the fan, put the measured pin assignment in your engineering notebook and leave the adapter in its fixed socket aboard the Gunstar. It has been there all along; now you know what is inside it.`
    ],
    choices: [{ text: 'Return to the training bench', to: 'B02' }],
  },
  {
    id: 'B04', title: 'A Sleeve That Fits', era: 'league',
    onEnter: { set: { sleeve: true } },
    cast: ['player', 'grig'],
    imagePrompt: `Enclosed League workshop, artificial night-shift light and no weather. Grig holds a loose practice connector while the player fits a short insulated sleeve around its support. Only two people, no pilot, no spacecraft exterior.`,
    text: [
      `In the workshop’s fitting bay, Grig gives you a practice connector and a short insulated sleeve. Under load, the connector trembles against its support. Pulling on the plug makes the tremble worse.`,
      `You work the sleeve around the support instead. The contact settles without a restart. Grig makes you repeat it from the other side, where you cannot see your hands.`,
      `“Ships,” Grig says, “are designed by people who assume engineers have spare elbows.”`,
      `The powered exercise draws charge, leaving {{clock}}. Grig puts the tested sleeve in your ship’s tool drawer. It can steady a connector without the careful bracing you would otherwise have to improvise. You return the practice block and shake life back into your fingers.`,
      `Through the berth window, Tavi gives you a questioning thumbs-up. You return it. Grig checks that the training supply is disconnected before letting you move on.`
    ],
    choices: [{ text: 'Return to the training bench', to: 'B02' }],
  },
  {
    id: 'B05', title: 'Supper in the Cockpit', era: 'league',
    onEnter: { set: { heardTavi: true } },
    cast: ['player', 'tavi'],
    imagePrompt: `Gunstar cockpit inside the enclosed League berth during shipboard night, no weather. Tavi and the player eat from plain food packets beside lit practice controls. Grig is not here. Gentle comedy, optional tools out of frame.`,
    text: [
      `You cross the boarding tube to the Gunstar. Tavi gives you the food packet she has defeated. It tastes faintly of pears and very strongly of packaging. Together you run through the cockpit switches with the ship’s service systems awake. The extra practice brings the bank to {{clock}}.`,
      `“I used to fly deliveries,” Tavi says. “First solo trip, I announced every manoeuvre to an empty hold. The cargo was plumbing. Very attentive.”`,
      `You admit that at the arcade you sometimes let customers thank the high-score champion for fixing their game. Explaining takes longer than the repair.`,
      `Tavi chews for a while. “Tell me when I do that.”`,
      `She finds a crumb floating near her collar, catches it and looks offended by its attempt to escape. Then she points to the two headsets. “One flight channel. Two people who get to say wait.”`,
      `You finish supper, stow the wrappers and return through the tube to Grig. Tavi stays to finish the flight checks.`
    ],
    choices: [{ text: 'Rejoin Grig at the bench', to: 'B02' }],
  },
  {
    id: 'B06', title: 'All the Lights Are Green', era: 'league',
    cast: ['player', 'grig'],
    imagePrompt: `Enclosed League workshop at artificial night, no weather. Grig stands back from a compact simulator while the player studies a green indicator and a motionless fan behind a guard. Quiet practical puzzle, only these two people.`,
    text: [
      `Grig brings you to the workshop simulator. It has a cooling fan, a speaker branch and one large green READY lamp. None of it is connected to flight hardware; the exercise runs from the dock’s own teaching supply.`,
      `Grig flips his concealed fault switch. The lamp stays green. The fan stops. From the speaker comes the clicking sound of a relay pulling in and dropping out.`,
      `You trace the visible leads. The lamp has a separate supply. The fan and speaker share a branch. At the arcade you would find the part dragging that branch down before returning a game to the floor. Here, the controls are labelled ISOLATE SPEAKER, RESET RACK and CERTIFY READY.`,
      `Grig folds his hands. “I am now an impatient customer.” He considers the part. “My ship was working perfectly before I brought it in.”`
    ],
    choices: [
      { text: 'Isolate the speaker branch and check the fan', to: 'B07', set: { localAction: 'isolate' } },
      { text: 'Reset the whole rack from the ship’s service supply', to: 'B08', if: ge(11), ...cost(10) },
      { text: 'Certify the rack using its ready lamp', to: 'E02' },
    ],
  },
  {
    id: 'B07', title: 'Say What You Measured', era: 'league',
    cast: ['player', 'grig'],
    imagePrompt: `Enclosed League workshop, night-shift lighting and no weather. Player holds a probe at the simulator's fan branch while Grig checks a plain worksheet. No action-dependent switches or optional tools visible; Tavi is not here.`,
    text: [
      { if: is('localAction', 'isolate'), text: `At the workshop simulator, you open the speaker isolator. The clicking stops and the fan begins to turn. You check the airflow with your hand outside the guard, then read the current to Grig.` },
      { if: is('localAction', 'reset'), text: `Back at the simulator after the restart, you disconnect the speaker branch and test the fan directly. This time the airflow stays steady. You tell Grig both what failed and what the recovery cost.` },
      `Grig signs the placement sheet. “An instrument can be quite truthful about the wrong thing,” he says. “The green lamp was telling you it had electricity. A very modest achievement.”`,
      `You write SPEAKER BRANCH beside the fault, instead of BROKEN. Grig makes a pleased noise deep in his throat.`,
      `Tavi calls from the berth over the bench intercom. “Do I have an engineer?”`,
      `Grig pushes the talk switch toward you. You take it. “Yes. And leave your left speaker off until we can fix its mount.”`,
      `“I shall miss the music,” Tavi replies. Her voice is much clearer without it.`
    ],
    choices: [{ text: 'Collect the assignment with Tavi', to: 'B09' }],
  },
  {
    id: 'B08', title: 'Everything at Once', era: 'league',
    onEnter: { set: { localAction: 'reset' } },
    cast: ['player', 'grig'],
    imagePrompt: `Enclosed League workshop at artificial night, no weather. Simulator indicator lights relight in a comic jumble while Grig catches a fluttering worksheet and player waits beside controls. No sparks, injury or damage to a real ship.`,
    text: [
      `At Grig’s simulator, you connect the Gunstar’s service cable and reset the whole rack. The lights go out and return in a magnificent procession. The fan turns once. The speaker clicks. The fan stops.`,
      `The fault has survived the ceremony. Your ship’s bank is down to {{clock}}.`,
      `Grig disconnects the high-load restart lead. “An excellent demonstration of restarting,” he says. “Shall we try repairing?”`,
      `You want to argue that resetting often works. Instead, you look again at the shared branch. The speaker draws current without making useful sound; the fan cannot get enough to start. You identify the speaker isolator and tell Grig what you intend to test.`,
      `He hands you the low-power probe. The simulator has already cost enough. Checking the isolated branch will use the teaching supply.`
    ],
    choices: [{ text: 'Isolate the speaker and test again', to: 'B07' }],
  },
  {
    id: 'B09', title: 'Latchpoint Calling', era: 'league',
    onEnter: { set: { localAction: 'none' } },
    cast: ['player', 'tavi', 'grig'],
    imagePrompt: `Enclosed Gunstar berth during shipboard night, no weather. Grig stands at the boarding hatch with player and Tavi inside, reviewing a simple illuminated outpost diagram. Nobody else visible, no optional equipment in frame.`,
    text: [
      `Grig walks you back to the Gunstar, where Tavi switches off her rattling speaker and shows you a new assignment on the flight display. Latchpoint, a shelter and supply outpost in a freight corridor, has reported an approaching enemy tender and its unmanned scouts.`,
      `“The tender directs the scouts,” Grig explains. “They find targets through survey echoes. The armada sends these detachments ahead to empty the places our supply crews need.”`,
      `The relief fleet cannot get there before the detachment. Your job is to help the outpost hold until it arrives. Latchpoint has shelters and evacuation boats; defending its machinery would let its people keep their home as well.`,
      `Grig checks your bank: {{clock}}. The flight plan has three remaining jumps, including a short deployment above the outpost. Service work along the way will draw from the same bank.`,
      `Tavi sets a hand on each seat back. “We can request recovery if the allocation won’t carry us. Otherwise, we have a job.” Grig stays on the dock as you fasten your restraint.`
    ],
    choices: [
      { text: 'Depart for the freight corridor', to: 'C01', ...cost(15) },
    ],
  },
  {
    id: 'C01', title: 'The Freight Corridor', era: 'transit', time: 'LATER THAT NIGHT · FREIGHT CORRIDOR',
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Gunstar cockpit at shipboard night, no weather in vacuum outside. Tavi flies while the player checks a gauge; sparse navigation lamps stretch across the dark canopy view. Grig is not here.`,
    text: [
      `Tavi takes the Gunstar clear of the dock. Grig’s workshop shrinks behind you, and the second jump folds its lights away. When the canopy clears, a line of freight beacons stretches into blackness. Your bank reads {{clock}}.`,
      `You check the cooling after the jump and report it steady. Tavi eases the ship along the beacons under ordinary thrust. One lamp ahead blinks, pauses, and blinks again. Somewhere below it a tug’s engine glows like a cigarette end.`,
      `A voice comes over the radio. “Passing League ship, this is tug captain Odo Pike. I have a load of empty crates that would like to continue being cargo. Their mooring disagrees.”`,
      `Another channel carries an automatic survey buoy’s stored traffic. It has recorded the enemy detachment crossing the corridor. Tavi puts both signals on your panel. Latchpoint lies one hop farther on.`,
      `“Your service budget,” Tavi says. “My flying.” She waits for your decision.`
    ],
    choices: [{ text: 'Check the corridor chart', to: 'C02' }],
  },
  {
    id: 'C02', title: 'Two Signals', era: 'transit',
    cast: ['player', 'tavi'],
    imagePrompt: `Inside the enclosed Gunstar cockpit during the same shipboard night, no weather outside. Player studies a navigation chart while Tavi holds the ship steady. Chart marks are abstract, no optional tug or buoy shown, Grig is not here.`,
    text: [
      `In the Gunstar’s cockpit, Tavi holds beside the corridor’s main beacon. The next jump coordinates lead to Latchpoint. Ordinary thrusters can take you out to either local signal and back, but close listening and tractor work need the jump bank.`,
      { if: is('echoRecord'), text: `The buoy’s recorded reply is stored in your engineering panel. You mark that stop complete.` },
      { if: is('tugHelp'), text: `Odo reports his tug under way. You mark the mooring clear on the chart.` },
      `Your bank reads {{clock}}. Tavi loosens one hand from the controls and flexes her fingers. She has been gripping them as though the corridor might shake itself loose.`,
      `“They never put this part in recruiting games,” she says. “Deciding which radio to answer.”`
    ],
    choices: [
      { text: 'Take a close recording from the survey buoy', to: 'C03', if: all(not(is('echoRecord')), ge(6)), ...cost(5) },
      { text: 'Help the tug clear its mooring', to: 'C04', if: all(not(is('tugHelp')), ge(6)), ...cost(5) },
      { text: 'Jump to Latchpoint’s approach beacon', to: 'C05', ...cost(10) },
    ],
  },
  {
    id: 'C03', title: 'The Space Between', era: 'transit',
    onEnter: { set: { echoRecord: true } },
    cast: ['player', 'tavi'],
    imagePrompt: `Gunstar's enclosed cockpit at shipboard night, weatherless space beyond. Close on the player's hand beside a recorded trace with bright peaks and dark gaps; Tavi visible at the flight controls. No readable diagram annotations, no Grig.`,
    text: [
      `Tavi brings the Gunstar close to the survey buoy. You power the narrow receiver and copy its stored traffic while she holds position. The bank settles at {{clock}}.`,
      `On your panel the detachment’s signal makes a bright peak, then a dark interval. The peak is the tender’s outgoing pulse. A small returned echo sits in the darkness after it. Each time that echo changes, the recorded scouts turn. During the bright peak, they keep their old course.`,
      `You slow the recording until the sequence is unmistakable. The delay of the echo gives its distance; a later reply puts a target farther away. The dark reply also carries a pattern particular to this tender. You save the whole pattern, including the empty space around it. An ordinary radar picture would lose that detail.`,
      `“Looks like nothing happening,” Tavi says.`,
      `“That’s the part they’re listening to,” you say.`,
      `The buoy resumes its patient blinking. You switch off the narrow receiver, and Tavi brings you back to the main beacon under ordinary thrust.`
    ],
    choices: [{ text: 'Return to the corridor chart', to: 'C02' }],
  },
  {
    id: 'C04', title: 'Empty Crates', era: 'transit',
    onEnter: { set: { tugHelp: true } },
    cast: ['gunstar', 'tug'],
    imagePrompt: `Weatherless freight corridor during shipboard night. Exterior view of Gunstar using a soft tractor-light cone to lift a rack of empty crates clear of a bent mooring beside a small cargo tug. No visible people; gentle non-violent salvage, no weapons or explosions.`,
    text: [
      `Tavi takes you down the beacon line to Odo’s tug. A bent mooring arm has trapped its rack of empty crates. The tug itself is sound; pulling harder would twist the rack into its engine housing.`,
      `You ask Odo to slacken his tow cable. Tavi holds the Gunstar square while you use its tractor to lift the rack’s weight off the catch. The mooring springs free with a movement you feel through the control grip. Your bank reads {{clock}}.`,
      `“Beautiful,” Odo says over the radio. “A rescue with no additional paperwork about dents.”`,
      `He is heading to Latchpoint for stores before the alarm closes the freight lanes. With his rack free, he can take a full load if someone at the outpost has it lashed and ready. He cannot do both ends of the job from his cab.`,
      `You release the tractor. Odo takes the slow freight lane toward Latchpoint; Tavi returns to the main beacon. The empty crates no longer look quite so unimportant.`
    ],
    choices: [{ text: 'Return to the corridor chart', to: 'C02' }],
  },
  {
    id: 'C05', title: 'An Obstacle on the Screen', era: 'transit', time: 'LATCHPOINT · APPROACH',
    cast: ['player', 'tavi'],
    imagePrompt: `Inside enclosed Gunstar cockpit later in shipboard night, weatherless vacuum outside. Wheel-shaped Latchpoint visible at a distance; player watches an instrument while Tavi holds controls. No extra people, no named outpost staff yet visible.`,
    text: [
      `The hop from the corridor leaves {{clock}} in the bank. Ahead, Latchpoint turns slowly against a large dark rock: a wheel of lit windows, folded shield vanes and a thin survey mast.`,
      `“Latchpoint keeper Neve Sorn,” says a woman over the radio. “Berth two is clear. Our kettle isn’t. Give us a moment on that.”`,
      `Tavi begins the approach. A broad stripe appears across the navigation screen, and the automatic controller plots a long dogleg around it. Through the canopy, the corresponding space looks empty. The stripe brightens whenever the outpost’s survey lamp flashes.`,
      `Your receiver-gain knob is at its highest stop. Mica’s radio used to fill with a buzz whenever the neighbouring diner switched on its sign; turning the volume down did nothing, but reducing the input did.`,
      `Tavi holds position. “Take the plotted approach, or give me a reading I can fly on.”`
    ],
    choices: [
      { text: 'Reduce receiver gain and compare the readings', to: 'C06' },
      { text: 'Follow the automatic dogleg', to: 'C07', if: ge(11), ...cost(10) },
    ],
  },
  {
    id: 'C06', title: 'Clear Air on a Vacuum Map', era: 'transit',
    cast: ['player', 'tavi'],
    imagePrompt: `Weatherless night-side approach to Latchpoint seen from the enclosed Gunstar cockpit. Tavi at controls and player at receiver knob, docking lamps aligned ahead. No other characters, no optional objects.`,
    text: [
      `In the cockpit above Latchpoint, you lower the receiver gain a little at a time. The broad stripe shrinks, while the rock and the outpost keep their sharp edges. You compare two scans and report the difference to Tavi.`,
      `It was the outpost’s own transmitter flooding the receiver. With the input trimmed, the straight approach is clear.`,
      `Tavi asks Neve to confirm berth two again, then flies the marked line under ordinary thrust. The Gunstar’s feet meet the docking cradle with a soft knock.`,
      `“Engineer’s approach,” Tavi says as she shuts down the flight controls. You tell her she still did the landing. “Yes,” she says. “I was going to mention that.”`,
      `A sealed boarding tube reaches the hatch. Beyond its little window, an amber-skinned woman with rounded horns is holding two mugs by their handles. She has apparently resolved the kettle problem.`
    ],
    choices: [{ text: 'Open the hatch after the pressure light settles', to: 'D01' }],
  },
  {
    id: 'C07', title: 'The Long Approach', era: 'transit',
    cast: ['player', 'tavi'],
    imagePrompt: `Inside enclosed Gunstar cockpit at shipboard night, weatherless space. Tavi flies a wide curve around the distant Latchpoint wheel while player studies fading interference. Calm non-violent manoeuvre; only two people.`,
    text: [
      `Tavi accepts the controller’s dogleg. The Gunstar curves far around Latchpoint under thrust, spending charge on the automatic collision field all the way. The bank reaches {{clock}}.`,
      `As the angle changes, the stripe disappears without passing either side of the canopy. You compare it with the survey lamp and find the rhythm matches. The receiver was overloaded by the outpost’s own transmitter. There was no solid obstacle.`,
      `You lower the gain and tell Tavi. She cancels the field and asks Neve for a fresh approach.`,
      `“A scenic route,” Tavi says. “I am told these are popular.”`,
      `This time she lands under ordinary thrust with the collision field off. Berth two catches the Gunstar; a sealed tube extends to the hatch. At its far end, an amber-skinned woman with rounded horns waits with two mugs. You make a note about the receiver before unfastening your restraint.`
    ],
    choices: [{ text: 'Open the hatch after the pressure light settles', to: 'D01' }],
  },
  {
    id: 'D01', title: 'Neve’s Kettle', era: 'outpost', time: 'LATCHPOINT · BEFORE THE RAID',
    onEnter: { set: { station: 'outpost' } },
    cast: ['player', 'tavi', 'neve'],
    imagePrompt: `Enclosed Latchpoint boarding hall during shipboard night, no weather. Neve offers mugs to the player and Tavi beside a small kettle and a window onto the docked Gunstar. Warm domestic light amid industrial walls, no other people.`,
    text: [
      `You and Tavi step through the boarding tube into Latchpoint’s warm little entry hall. The woman hands you a mug. “Neve Sorn. We spoke on the approach. Don’t put that on the floor; the floor is a cupboard.”`,
      `The drink smells of oranges and hot metal. Through an open door you can see bunks folded against the wall, each with a different photograph tucked above it. This is a freight station, but people have made room for ordinary lives between the cargo racks.`,
      `Neve shows you the raid plot. The tender is bringing its scouts along the open freight lane. The outpost’s shield has a shuddering cooling connection; its reserve cannot hold a continuous attack without a ship supporting it.`,
      `“Everyone has a place on an evacuation boat,” Neve says. “I’d like them to have a place to come back to.”`,
      `Tavi puts her mug down on a labelled shelf. “We’ll look at your machinery.” You finish your drink before following. Neve approves of that more than the speech.`
    ],
    choices: [{ text: 'Follow Neve to the service gantry', to: 'D02' }],
  },
  {
    id: 'D02', title: 'The Service Gantry', era: 'outpost',
    cast: ['player'],
    imagePrompt: `Enclosed Latchpoint service gantry during shipboard night, no weather. Player studies two closed cable cupboards and a freight-winch control. Close composition excludes both ends of gantry and all optional equipment; Tavi and Neve are outside the crop.`,
    text: [
      { if: { any: [is('feederTraced'), is('storesSecured')] },
        text: `Back on Latchpoint’s enclosed service gantry, you check the time against Neve’s raid plot. Tavi waits beside the cooling cradle at the far end; Neve has gone to the control room to prepare the evacuation boats.`,
        else: `Neve leads you and Tavi along an enclosed gantry above the freight bay. She shows you the cooling cradle, then goes to the control room. Her voice stays with you through a wall intercom. Tavi checks the cradle’s pressure while you look along the cable cupboards.` },
      `A faded maintenance plan has been altered so often that two lines end in a drawing of a kettle. The sockets at the cooling cradle have clear labels; the older cable runs behind the wall do not. A tracing probe can sort them out, using the Gunstar’s portable service supply.`,
      `Below the gantry, freight packs await the loading winch. Their lashings need setting before a tug can lift them in a hurry.`,
      { if: is('tugHelp'), text: `Odo calls on the freight channel: his tug has reached the outer waiting mark, with the freed rack ready for a load.` },
      `Your remote charge reading is {{clock}}. Tavi raises a hand beside the cradle to show where she is waiting.`
    ],
    choices: [
      { text: 'Trace the old cable runs', to: 'D03', if: all(not(is('feederTraced')), ge(6)), ...cost(5) },
      { text: 'Winch and lash the freight for collection', to: 'D04', if: all(not(is('storesSecured')), ge(6)), ...cost(5) },
      { text: 'Join Tavi at the cooling cradle', to: 'D05' },
    ],
  },
  {
    id: 'D03', title: 'Under the Paint', era: 'outpost',
    onEnter: { set: { feederTraced: true } },
    cast: ['player'],
    imagePrompt: `Enclosed Latchpoint cable cupboard during shipboard night, no weather. Player alone (Tavi and Neve are not here), using a tracing probe beside a grey diagnostic socket and separate heavy shield cable. Neat service work, face hidden, no loose optional possessions.`,
    text: [
      `Inside the gantry’s cable cupboard, you are alone with several generations of paint. You clip on the probe and follow its tone along the old runs. Tavi remains at the cooling cradle; Neve answers from the control-room intercom when you ask her to move a switch.`,
      `The grey diagnostic socket goes to the survey mast. The heavy cable beneath it feeds the shield. Their routes cross on the faded plan, but they do not join in the wall. You scrape a thumb-sized patch of paint away to make certain.`,
      `A separate pair from the grey socket operates the shield vanes’ remote handwheel. You test that briefly too; Neve confirms one vane moves, then returns it to its stop. You mark the socket’s two functions on a fresh sketch.`,
      `The probe and vane test bring the bank to {{clock}}. You send the sketch to the Gunstar’s panel and close the cupboard. From the intercom Neve asks whether you found the kettle.`,
      `“Only on the drawing,” you say. “Good,” Neve replies. “That one never boils.”`
    ],
    choices: [{ text: 'Return to the gantry', to: 'D02' }],
  },
  {
    id: 'D04', title: 'What Goes in the Crates', era: 'outpost',
    onEnter: { set: { storesSecured: true } },
    cast: ['player'],
    imagePrompt: `Enclosed Latchpoint freight bay during shipboard night, no weather. Player alone (Tavi and Neve are not here), securing plain freight packs beneath a powered overhead winch. Packs show blankets and a sealed kettle-sized box, no optional tug in view.`,
    text: [
      `You take the short ladder from the gantry into Latchpoint’s freight bay. Tavi stays with the cooling cradle. Neve guides you over the intercom through loads whose official descriptions are remarkably unhelpful.`,
      `“Domestic thermal units,” she says, “means kettles. Personal insulation means blankets. Do those first.”`,
      `The normal winch supply is isolated while the shield is being serviced. You connect the Gunstar’s portable lead, raise each pack just far enough to seat its straps, then secure it in the loading rack. The bank reads {{clock}} when you disconnect.`,
      { if: is('tugHelp'), text: `Odo confirms over the radio that he can collect the ready rack on Neve’s release signal. The people, the pilot and the freight now have different jobs instead of one person trying to do all three.`,
        else: `Neve logs the rack as ready. The regular freighter is still delayed in the corridor; the evacuation boats have room for people, not these loads. A ready rack gives a cargo crew something it can collect if one gets through.` },
      `You climb back to the gantry with an imprint of the strap buckle in your palm.`
    ],
    choices: [{ text: 'Return to the gantry', to: 'D02' }],
  },
  {
    id: 'D05', title: 'The Shudder', era: 'outpost',
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Latchpoint cooling cradle during shipboard night, no weather. Player and Tavi inspect a vibrating supported connector with a pressure gauge behind its guard. No sleeve or optional tools shown, Neve is not here.`,
    text: [
      `At the far end of the gantry, Tavi has the cooling cradle open. A thick connector trembles in a hanging carrier. Its contact light flickers each time the carrier knocks against its stop.`,
      `You recognise the shape from the dock’s equipment diagrams. The plug is seated, but the carrier is taking the cable’s weight at an angle. Each vibration pulls on the contact. There is a sound handhold beneath the carrier, outside the cooled pipework.`,
      `“I can hold the cover,” Tavi says. “You have the better angle on the socket.”`,
      `Neve calls from the control room: the first scouts have entered the outer survey range. You set your notebook where it cannot fall through the gantry. The repair is small enough to do with two hands, which makes you miss home sharply for a moment.`
    ],
    choices: [
      { text: 'Brace the carrier and settle the cable’s weight', to: 'D06', set: { localAction: 'brace' } },
      { text: 'Fit the connector sleeve from the ship’s tool drawer', to: 'D06', if: is('sleeve'), set: { localAction: 'sleeve' } },
      { text: 'Pull the plug and reseat the whole connector', to: 'D07', if: ge(11), ...cost(10) },
    ],
  },
  {
    id: 'D06', title: 'The Steady Note', era: 'outpost',
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Latchpoint service gantry in artificial night light, no weather. Player and Tavi close the cooling cradle's cover beside a steady pressure gauge. Connector and optional sleeve hidden behind cover; Neve is not here.`,
    text: [
      { if: is('localAction', 'brace'), text: `At the cooling cradle, you brace the carrier from below while Tavi holds the cover clear. With the weight off the socket, you seat the cable squarely and tighten the carrier’s existing clamp. When you ease your hand away, the contact stays steady.` },
      { if: is('localAction', 'sleeve'), text: `You go back through the boarding tube for the sleeve in the Gunstar’s tool drawer, then return to Tavi at the cooling cradle. She holds the cover while you fit the sleeve around the carrier. The cable settles squarely and the contact light steadies. The sleeve stays fitted here.` },
      { if: is('localAction', 'pull'), text: `With the cooling loop restarted, you and Tavi return to the carrier’s original problem. She holds the cover; you take the weight from below, settle the cable squarely and tighten the clamp. This time the connection stays steady when you let go.` },
      `You stand together on the enclosed gantry and listen. The shudder has become an even hum. Neve reports steady flow from the control room.`,
      `Tavi lifts the notebook you left beside the cradle and hands it back. “Ready?” she asks.`,
      `You check the gauge one more time. “Ready.” She closes the cover only after you take your hands away.`,
      `The shield can now accept a supporting feed. Across the window, a small light moves against the fixed stars. Neve calls you both to the control room.`
    ],
    choices: [{ text: 'Join Neve for the defence assignment', to: 'D08' }],
  },
  {
    id: 'D07', title: 'The Quiet After the Click', era: 'outpost',
    onEnter: { set: { localAction: 'pull' } },
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Latchpoint cooling cradle at shipboard night, no weather. Player holds disconnected plug while Tavi watches a closed safety shutter and dim indicator. Quiet comic setback, no steam, sparks or injury; no optional sleeve in view.`,
    text: [
      `At the cooling cradle, you pull the plug. The carrier jumps against its stop and the thermal interlock shuts. The flickering contact becomes a perfectly steady absence of contact.`,
      `“That,” Tavi says after a moment, “is quieter.”`,
      `You refit the plug, but the cooling loop now needs a powered restart. Neve reads the recovery sequence from the control room while you draw a restart pulse from the Gunstar. The bank falls to {{clock}}.`,
      `Cold-flow lamps return one by one. Tavi keeps the cover clear and makes no further comment. The hanging carrier still pulls sideways on the cable; reseating the plug has not fixed its support.`,
      `You put a hand under the carrier and take its weight. The tremble stops at once. Now you can square the cable and tighten the clamp without disconnecting anything.`
    ],
    choices: [{ text: 'Finish the support repair with Tavi', to: 'D06' }],
  },
  {
    id: 'D08', title: 'A Place to Come Back To', era: 'outpost',
    onEnter: { set: { localAction: 'none' } },
    cast: ['player', 'tavi', 'neve'],
    imagePrompt: `Enclosed Latchpoint control room during shipboard night, no weather. Neve, player and Tavi look through a broad window at shield vanes and distant tiny scout lights. Calm decision scene, no weapons, explosions or extra people.`,
    text: [
      `You and Tavi walk from the gantry into Neve’s control room. Her evacuation board has a place marked for every person, including the three of you. The scouts are tiny moving lights beyond the glass. Their tender remains farther back, following the freight lane.`,
      `“The boats can leave behind the rock,” Neve says. “The station cannot.” She checks the shield flow you repaired and draws a firm line through COOLING on her pad.`,
      `The Gunstar can make a short hop above the shield and connect to the outpost’s remote service link. From there Tavi can hold it in position while you support the defence. Staying in the dock would let you run emergency lights and shepherd the boats, but the sheltered berth cannot project the field the outpost needs.`,
      `Your bank reads {{clock}}. Neve is already back at the evacuation board, checking her places rather than watching your face.`,
      `Tavi opens the door toward the boarding tube. You pick up your notebook.`
    ],
    choices: [
      { text: 'Return to the ship and deploy above the shield', to: 'D09', if: ge(11), ...cost(10) },
      { text: 'Keep the Gunstar in the berth to support evacuation', to: 'E03' },
      { text: 'Report that the deployment hop is out of reach', to: 'F09', if: le(10) },
    ],
  },
  {
    id: 'D09', title: 'Above the Wheel', era: 'defence', time: 'LATCHPOINT · DEFENCE ORBIT',
    onEnter: { set: { station: 'defence' } },
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Gunstar cockpit at shipboard night, weatherless space. Latchpoint's wheel beneath the canopy, player at engineering panel and Tavi holding flight controls. Sparse distant scout lights, non-violent suspense. Neve and Grig are not here.`,
    text: [
      `You and Tavi return through the boarding tube, close the hatch and take your seats. Neve stays in her control room. At your signal Tavi lifts from the cradle and makes the short deployment hop above Latchpoint.`,
      `The wheel fills the lower canopy. The bank settles at {{clock}}. Your repaired cooling connection reports a steady flow over the remote service link.`,
      `Tavi rolls the Gunstar level with the survey mast. She could chase the approaching lights; instead she holds the position that keeps your connection clear. It takes more small corrections than you expected.`,
      `“Flight holding,” Tavi says.`,
      `You open the engineering panel. Power, instruments, the actual load behind both. You put a hand on the switch cover and answer, “Engineering has the link.”`,
      `Neve’s voice comes through from the outpost. “The people are ready. Tell me what you need the station to do.”`
    ],
    choices: [{ text: 'Set up the defence', to: 'F01' }],
  },
  {
    id: 'F01', title: 'The Engineer’s Panel', era: 'defence',
    cast: ['player', 'tavi'],
    imagePrompt: `Inside enclosed Gunstar cockpit during defence orbit, weatherless night-side space outside. Player considers closed switch covers at the engineering station; Tavi holds position. Only two people, optional notes and hardware out of frame. Remote lights, no violent action.`,
    text: [
      `Above Latchpoint, your panel receives the outpost’s service controls. The main feeder, a grey diagnostic socket and the bright decoy channel sit beside the Gunstar’s output adapter. Tavi keeps the ship level; Neve waits on the radio from the control room.`,
      `The main feeder can put the Gunstar behind the habitation shield. Its rated shunt dumps excess load into the freight and navigation equipment outside the shelter ring. Neve has cleared those sections of people.`,
      `The decoy channel would make the Gunstar look like a much larger target. Tavi has room to lead a pursuit away from the wheel. Beyond the first scouts, the tender keeps coming.`,
      { if: is('feederTraced'), text: `The remote handwheel is also on your panel, with the travel stops you checked. Moving the shield vanes under attack would put their bearings under a load the station was never built to carry.` },
      `Your bank reads {{clock}}. The first scout passes the far edge of the canopy. Tavi moves one flight lever a fraction and keeps the survey mast centred.`
    ],
    choices: [
      { text: 'Feed the habitation shield through the main cable', to: 'F06', if: ge(6), ...cost(5) },
      { text: 'Put the grey socket on the adapter’s output', to: 'F02', if: all(patchKnown, ge(6)) },
      { text: 'Light the decoy and lead the scouts away', to: 'F08', if: ge(6), ...cost(5) },
      { text: 'Work the shield vanes with the remote handwheel', to: 'E08', if: all(is('feederTraced'), ge(11)), ...cost(10) },
      { text: 'Use the recovery channel', to: 'F09', if: le(5) },
    ],
  },
  {
    id: 'F02', title: 'A Different Picture', era: 'defence',
    cast: ['player', 'tavi', 'adapter'],
    imagePrompt: `Enclosed Gunstar cockpit above night-side Latchpoint, no weather. Close over player's shoulder at fixed output adapter with silver latch and separated plugs; Tavi at flight controls beyond. No Grig or Neve, no discharge or victory yet.`,
    text: [
      `In the engineering seat above Latchpoint, you open the output adapter and use your measured pin assignment to connect its signal lead to the grey socket over the service link. You leave the heavy power feeder alone.`,
      `You load the recorded tender reply, preserving its pattern but adding a delay. On the range display, the delayed echo sits in empty space beyond the outpost. The real shield continues to draw power beneath it.`,
      `Tavi looks across. “You’re moving the picture.”`,
      `“The picture,” you confirm. “Keep us here.”`,
      `Neve reads the shield’s flow from her own instruments. Steady. You lift the adapter’s latch and hold the prepared reply without sending it. The divider’s two bank lamps sit beside the commit switch.`,
      `For a moment the cockpit sounds like the arcade after closing: fans, a relay, someone waiting for you to finish. Then a scout light crosses the canopy and the resemblance ends.`
    ],
    choices: [{ text: 'Watch the trace at the commit switch', to: 'F03' }],
  },
  {
    id: 'F03', title: 'Bright, Then Dark', era: 'defence',
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Gunstar cockpit during night-side defence orbit, weatherless vacuum. Player's hand poised beside commit switch while an abstract signal trace alternates brightness; Tavi faces canopy. Neutral pre-action image, no characters pointing at a correct choice.`,
    text: [
      { if: is('pulseTried'), text: `Back at the commit switch in the Gunstar’s engineering panel, you hold the prepared reply again. Tavi has restored the same position above Latchpoint. The false echo is still available; the first attempt has reduced your bank to {{clock}}.`,
        else: `At the Gunstar’s engineering panel, you watch the live trace pass the held reply. Tavi counts small course corrections under her breath. The divider shows {{clock}} in the bank.` },
      `The trace swells into a bright peak, then goes dark. Beyond the canopy, the scouts spread across the wheel’s far rim. Neve’s voice comes from the outpost: “Control room standing by.”`,
      `You have one hand beside the commit switch and the other resting against the panel to keep it steady. The main shield cable remains connected beside the adapter.`,
      `Bright. Dark. Tavi stops counting aloud.`
    ],
    choices: [
      { text: 'Close the switch during the bright peak', to: 'F04', if: all(not(is('pulseTried')), ge(11)), ...cost(10) },
      { text: 'Close the switch in the dark interval', to: 'F05', if: ge(20), ...cost(10) },
      { text: 'Use the main shield cable instead', to: 'F06', if: ge(6), ...cost(5) },
      { text: 'Call for recovery', to: 'F09', if: le(5) },
    ],
  },
  {
    id: 'F04', title: 'Nobody Listening', era: 'defence',
    onEnter: { set: { pulseTried: true } },
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Gunstar cockpit above night-side outpost, no weather. Player releases switch while Tavi gently corrects course; signal display fades. Quiet non-violent failed test, no explosion or visible damage. Neve and Grig are not here.`,
    text: [
      `You close the switch at the bright peak. Above Latchpoint, the survey mast sends your prepared reply into the tender’s outgoing pulse. The return trace vanishes beneath it. The scouts hold their course.`,
      `The divider has spent its operating pulse without holding the separation. You release the switch. Your bank reads {{clock}}.`,
      `Tavi brings the Gunstar back across the mast after a small sideways drift. “Still with you,” she says.`,
      `From the control room, Neve reports that the real shield is still powered. You clear the unsuccessful transmission from the adapter, leaving the recorded reply intact. The circuitry has locked out a second send on that bright peak; the other interval remains available if the divider has its reserve.`,
      `You flex the hand that was holding the switch. Tavi waits until you put it back beside the panel.`
    ],
    choices: [{ text: 'Return to the controls', to: 'F03' }],
  },
  {
    id: 'F05', title: 'The Wheel That Isn’t There', era: 'defence',
    onEnter: { set: { running: false } },
    cast: ['gunstar', 'outpost'],
    imagePrompt: `Weatherless space at shipboard night above Latchpoint. Gunstar holds beside intact outpost wheel while tiny unmanned scout lights curve peacefully toward empty space beyond the rock. Soft survey ripples, non-violent misdirection, no explosions or visible people.`,
    text: [
      `You close the switch in the dark interval. The divider draws its operating pulse and holds the two feeds apart. On the Gunstar’s panel, the outpost’s real power readings continue beneath a false position.`,
      `Outside, the first scout turns. Then the second. The whole little formation curves past the wheel toward an empty patch of space. Their ranging flashes find nothing there, so they circle and try again.`,
      `Tavi laughs once, too loudly. You keep your hand on the switch. The remaining {{clock}} holds the separation while the tender repeats its orders.`,
      `Neve speaks from the control room. “My windows are still here. So are the blankets. So is the kettle.” Her voice catches on that last inventory item.`,
      `You ask her to record the mast’s input and output together. The relief crews will need the complete working pattern, not a claim that you made the enemy miss. She starts the recorder while Tavi holds you beside the mast.`,
      `On the long-range channel, the relief fleet finally answers.`
    ],
    choices: [{ text: 'Hold the separation until relief takes over', to: 'F10' }],
  },
  {
    id: 'F06', title: 'Power Where It Counts', era: 'defence',
    onEnter: { set: { running: false } },
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Gunstar cockpit in night-side defence orbit, no weather. Player holds a broad power lever while Tavi braces at flight controls; outpost habitat windows glow beyond canopy. Non-violent protective light, no explosions, casualties or optional freight.`,
    text: [
      `Above Latchpoint, you close the adapter cover and put the Gunstar’s supporting feed through the main shield cable. Tavi holds the ship across the mast while you bring the load up by hand.`,
      `The habitation shield brightens. Its shunt sends the excess into the empty outer equipment bays. One by one the navigation aerials go dark. Inside the shelter ring, every window stays lit.`,
      { if: freightSafe, text: `Neve releases the rack you lashed. Odo’s freed tug takes it behind the rock before the freight platform shuts down. His radio report is a calm list of load straps holding.` ,
        else: `Neve seals the freight platform before its lights go out. The stores remain outside the protected ring. You keep the power on the rooms with people in them.` },
      `The operating pulse leaves {{clock}} in the bank. The connection settles onto the Gunstar’s ordinary generator; there will be no more jumps until you dock and recharge.`,
      `Tavi asks for another fraction of shield over the upper windows. You give it to her. The relief fleet’s signal arrives while you are both too busy to cheer.`
    ],
    choices: [{ text: 'Keep the habitat covered until relief arrives', to: 'F07' }],
  },
  {
    id: 'F07', title: 'The Rooms with Lights', era: 'outpost', time: 'LATCHPOINT · AFTER RELIEF',
    cast: ['player', 'tavi', 'neve'],
    imagePrompt: `Enclosed Latchpoint control room after relief during shipboard night, no weather. Player, Tavi and Neve share a tired pause beside lit habitat windows and dark exterior equipment. Tight interior crop excludes optional freight and tug.`,
    text: [
      `The relief ships take position between Latchpoint and the tender, driving the raiding detachment back out of the lane. Tavi brings the Gunstar down on ordinary engines. You disconnect the support feed only when Neve confirms that relief power is holding the shield.`,
      `Back in the control room, Neve pours three fresh mugs. The navigation board behind her is dark. The rooms beyond the door are full of people putting their photographs back above their bunks.`,
      { if: freightSafe, text: `Odo calls from behind the rock. The whole freight rack is safe, lashings intact. Neve draws a line through the stores she had begun listing as lost.`,
        else: `Neve starts a replacement list for the freight stores. The shunt has spoiled the loads outside the shelter ring, along with the navigation gear. Relief has brought food and blankets, but the familiar things will take longer to replace.` },
      `Tavi sits on what looks like a stool. Neve tells her it is another cupboard, but she may stay. You sit on the floor beside it and discover how tired your hands are.`
    ],
    choices: [
      { text: 'Help Neve make the repair list', to: 'E06', if: not(freightSafe) },
      { text: 'Help bring the saved freight home', to: 'E07', if: freightSafe },
    ],
  },
  {
    id: 'F08', title: 'The Ones That Follow', era: 'defence',
    onEnter: { set: { running: false } },
    cast: ['gunstar', 'outpost'],
    imagePrompt: `Weatherless night-side space near Latchpoint. Gunstar shines a soft decoy halo and leads tiny unmanned scout lights away; outpost and distant tender remain far behind. Non-violent manoeuvre, no weapons, impacts, fire or people visible.`,
    text: [
      `You light the decoy, and Tavi turns the Gunstar away from Latchpoint on ordinary thrust. The scouts follow the bright false target. For a few seconds, the empty space opening around the outpost looks like success.`,
      `Then Neve calls from the control room. The tender has kept its own course. It is closing on the wheel while the Gunstar’s remote link stretches out of range.`,
      `Your bank reads {{clock}}, but the missed position is now the problem. Tavi turns back; the tender is already between your ship and the mast. Neve orders the evacuation boats to leave behind the rock.`,
      `You switch off the decoy and help Tavi cover the boats’ escape instead. The scouts lose their false target and return to their controller. The outpost’s windows go dark in neat rows as Neve closes the sections.`,
      `She reaches the last boat. Over the radio, she counts every name before answering Tavi’s call.`
    ],
    choices: [{ text: 'Escort the boats to the relief ships', to: 'E05' }],
  },
  {
    id: 'F09', title: 'The Recovery Channel', era: 'defence', time: 'MISSION SUSPENDED',
    onEnter: { set: { running: false } },
    cast: ['player', 'tavi'],
    imagePrompt: `Close interior view of the enclosed Gunstar cockpit at shipboard night, no weather visible. Player speaks into headset beside Tavi; only seats and a quiet gauge in frame. Windows cropped out so location is not implied. Grig and Neve are not here.`,
    text: [
      { if: is('station', 'outpost'), text: `You tell Neve that the Gunstar cannot power its deployment hop, then return with Tavi through the boarding tube to the ship. Neve stays to launch the evacuation boats. From the docked cockpit you call Grig at the League service dock.` },
      { if: is('station', 'defence'), text: `In defence orbit above Latchpoint, you tell Tavi that the remaining bank cannot power a useful intervention. She brings the Gunstar behind the rock under ordinary thrust while you call Grig at the League service dock. Neve begins the evacuation.` },
      `The reading is {{clock}}. Radios, air and ordinary thrust are still working; the high-load assignment is over. Grig records your position and dispatches a recovery tug.`,
      `“Stay on the working systems,” Grig says over the radio. “We know where you are.”`,
      `Tavi checks the separate life-support supply and moves her seat so you can see its gauge too. Neither of you has to pretend the smaller green light means the mission can continue.`
    ],
    choices: [{ text: 'Wait for the recovery crew', to: 'E04' }],
  },
  {
    id: 'F10', title: 'Write Down What Worked', era: 'outpost', time: 'LATCHPOINT · AFTER RELIEF',
    cast: ['player', 'tavi', 'neve'],
    imagePrompt: `Enclosed Latchpoint control room after relief during shipboard night, no weather. Player writes beside Neve's recorder while Tavi rests against a cupboard; intact outpost lights visible through window. No optional tug or stores handling shown.`,
    text: [
      `When the relief ships arrive, the scouts are still searching empty space. The tender withdraws before the newcomers close the lane. You hold the divided feed until Neve has relief power, then release the switch. Tavi lands at berth two under ordinary thrust.`,
      `You walk back through the tube to the control room. Neve has recorded both sides of the adapter’s signal, with the tender’s pattern intact. You add your wiring sketch and the timing you actually used. The relief engineers can repeat the defence if this detachment returns; they will not have to guess from a triumphant radio report.`,
      `The outpost’s navigation gear, freight stores and shelter are all working. Neve hands Tavi a roll of labels. “Since you like naming things,” she says, pointing to the cupboards.`,
      { if: is('heardTavi'), text: `Tavi labels the chair CHAIR, sits down and looks at you. “Plumbing never told me when to wait,” she says. You tell her that might have been her problem.` ,
        else: `Tavi tests a chair before sitting. “I am beginning to understand your trade,” she tells you. “Ask the object what it does, even if someone has put a very confident label on it.”` },
      `You put your notebook down beside the recorder. This time, somebody else makes the tea.`
    ],
    choices: [{ text: 'Send the completion report home', to: 'E09' }],
  },
  {
    id: 'E01', title: 'The Shop Light', era: 'earth', time: 'SUMMER 1984 · LATER THAT EVENING',
    ending: { kind: 'good' },
    cast: ['player', 'mica'],
    imagePrompt: `Dry summer night inside Bellwether arcade. Player and Mica repair an ordinary coin return at a workbench under a warm lamp. Only those two people; Centauri and Tavi are not here, Starfighter cabinet out of frame.`,
    text: [
      `At the arcade counter, you tell Centauri you are staying in Bellwether. He looks disappointed, then puts his hat on. “An actual answer,” he says. “I get fewer of those than you might think.”`,
      `He arranges to collect the Starfighter cabinet in the morning and leaves Mica his number for the repair invoice. Outside, his footsteps fade toward the fairground.`,
      `You stay to help Mica close. The last customer says the coin return on another game is sticking. You find a button in it, a small green one with thread still hanging through its holes.`,
      `Mica puts the button in the lost-property jar. “Someone will need that,” she says. Then she adds your name to next week’s paid repair hours, leaving space for the day you wanted off.`,
      `For now, you have somewhere to go in the morning. When you switch off the big arcade lights, the little lamp above your workbench stays on until you have put the tools away.`
    ],
  },
  {
    id: 'E02', title: 'Back to the Bench', era: 'league', time: 'SERVICE DOCK · END OF PLACEMENT',
    ending: { kind: 'bad' },
    cast: ['player', 'grig'],
    imagePrompt: `Enclosed League workshop during shipboard night, no weather. Grig gently turns the simulator's motionless fan by hand while player holds a blank placement sheet. Only two people; no public humiliation or danger.`,
    text: [
      `At the workshop simulator, you press CERTIFY READY beneath the green lamp. Grig looks at the motionless fan, then at the certification. He does not raise his voice.`,
      `“You have certified the light,” he says. “The fan was the job.”`,
      `He cancels the flight placement. Tavi comes in from the berth when he calls her, and listens while you explain what you chose. She will take a qualified dock engineer on the assignment.`,
      `Grig arranges a passenger berth home on the next Earth-bound supply flight. There is no charge for returning you and no story about how close you came to a record. He gives you a practice diagram to take away.`,
      `Two days later, in Mica’s arcade, you remove an ALL FIXED card from a game whose left button you haven’t tested. You test it. It sticks. You take the panel off again. The diagram from Grig is pinned above the bench; the application date on its back is still several months away.`
    ],
  },
  {
    id: 'E03', title: 'Empty Berth', era: 'outpost', time: 'LATCHPOINT · EVACUATION',
    ending: { kind: 'bad' },
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed docked Gunstar cockpit during shipboard night, weatherless space beyond. Player and Tavi watch Latchpoint's boarding tube retract and its hall lights dim. Quiet evacuation, no people outside, no violence or damage shown.`,
    text: [
      `In Neve’s control room, you choose to keep the Gunstar in its berth. Tavi returns with you through the boarding tube. You use the ship’s ordinary generator to keep the evacuation lights on while Neve sends each boat around the protected side of the rock.`,
      `The repaired cooling works, but without a supporting ship above the shield it cannot carry the defence. When the tender closes, Neve seals the last empty sections and boards the final boat.`,
      `You watch the boarding tube retract. The Gunstar follows the boats on ordinary thrust, leaving a dark wheel behind. You kept the escape orderly; the outpost you accepted the job to defend is lost.`,
      `The relief ships arrive too late to hold Latchpoint. They collect the boats and your ship, and Neve checks every name against her board. Later, aboard a relief transport, she puts the board away. It still has a place for everyone. None of those places is home tonight.`
    ],
  },
  {
    id: 'E04', title: 'Towline', era: 'league', time: 'NEXT SHIPBOARD MORNING · RECOVERY DOCK',
    ending: { kind: 'bad' },
    cast: ['player', 'tavi', 'grig'],
    imagePrompt: `Enclosed recovery-dock workshop next shipboard morning, no weather. Grig, player and Tavi examine a small charge log under plain work lights. Only these three, no optional equipment or celebratory crowd.`,
    text: [
      `The recovery crew reaches the Gunstar and connects an external power cradle. You and Tavi ride home with your jump controls locked out. There is no final clever hop, only a tug doing the work it was built for.`,
      `By the next shipboard morning you are back at the League dock. Grig meets you in the workshop. Latchpoint’s people have escaped in the evacuation boats, but the relief fleet arrived after the outpost was abandoned. The tender has forced another shelter out of the freight corridor.`,
      `You spread the charge log on Grig’s bench. Each draw looked manageable when you authorised it. Added together, the entries took away the operation you went there to do.`,
      `Tavi puts her flight log beside yours. “Both seats,” she says when you begin explaining it alone.`,
      `Grig assigns you to dock work while the flight placement is reviewed. Your first job is checking a charger’s cutoff. You wait until its test load actually stops before writing anything on the label.`
    ],
  },
  {
    id: 'E05', title: 'A Painted Target', era: 'defence', time: 'LATER THAT NIGHT · RELIEF RENDEZVOUS',
    ending: { kind: 'bad' },
    cast: ['player', 'tavi'],
    imagePrompt: `Enclosed Gunstar cockpit later in shipboard night, no weather. Player and Tavi watch small evacuation boats rendezvous with distant relief lights. Quiet exhausted mood, no weapons, explosions or extra people.`,
    text: [
      `Tavi escorts the evacuation boats along the sheltered side of the rock until the relief ships meet them. You keep each boat on the service display. Neve’s is last. Every cabin answers.`,
      `Behind you, Latchpoint is dark. The scouts followed the bright thing you offered them; their controller continued to the place it wanted. The decoy worked at exactly the wrong scale.`,
      `A relief ship takes the boats into its hangar and gives the Gunstar a recovery berth. Its external supply takes over before you switch off your flight systems.`,
      `Tavi starts to call the manoeuvre a successful evacuation, then stops. “It was,” you tell her. “It wasn’t the defence.”`,
      `You write both sentences in the report. Later, Neve brings you a list of the people who reached the hangar. She thanks you for the escort. She has brought no photographs from the walls.`
    ],
  },
  {
    id: 'E06', title: 'Still Standing', era: 'outpost', time: 'LATCHPOINT · NEXT SHIPBOARD MORNING',
    ending: { kind: 'good' },
    cast: ['player', 'tavi', 'neve'],
    imagePrompt: `Enclosed Latchpoint entry hall next shipboard morning, no weather. Neve, player and Tavi mark a repair list beside newly delivered plain supplies. Warm light, intact inhabited rooms, no optional tug or saved old freight.`,
    text: [
      `By the next shipboard morning, relief crews have brought power and replacement stores into Latchpoint. You and Tavi meet Neve in the entry hall with the repair list. The outpost has lost its navigation array and freight stock, but it is still a working shelter.`,
      `People slept in their own bunks. That keeps interrupting your list: someone brings a mug, someone offers a spare pencil, someone wants you to know which window belonged to them.`,
      { if: is('tugHelp'), text: `Odo helped carry replacement stores in once the lane was clear. The original freight had not been lashed for his lift when the platform failed. You put replacement straps first on the new list.` },
      { if: all(is('storesSecured'), not(is('tugHelp'))), text: `Your lashed rack could not leave before the platform failed; the regular tug was still delayed in the corridor. Its straps survived better than the goods. You salvage them for the replacement loads.` },
      `The relief crews recharge the Gunstar before your later flight home. Mica has your report when you walk into the arcade. She reads “habitation shield maintained” twice, then points to your usual stool.`,
      `“The stool’s still yours,” Mica says. You sit down and start telling her about Tavi. For once, the repair takes longer to describe than it took to do.`
    ],
  },
  {
    id: 'E07', title: 'Freight Home', era: 'outpost', time: 'LATCHPOINT · NEXT SHIPBOARD MORNING',
    ending: { kind: 'good' },
    cast: ['player', 'tavi', 'neve'],
    imagePrompt: `Enclosed Latchpoint freight bay next shipboard morning, no weather. Player, Tavi and Neve unpack intact strapped freight packs from a plain rack. Warm domestic supplies, no Odo or extra people visible.`,
    text: [
      `By the next shipboard morning, Odo has brought the saved rack back to Latchpoint. You, Tavi and Neve take the ladder into the freight bay to unload it. The navigation array needs rebuilding, but the shelter and its stores have survived.`,
      `You release the same straps you set before the raid. Blankets come out smelling of their own cupboard. Neve finds a kettle in its protective box and gives it a small, private nod.`,
      `“Delivery complete,” Odo reports over the freight radio. “I would like my empty crates back. They are my most cooperative passengers.”`,
      `Tavi promises not to recruit them. The next convoy will navigate with relief escorts until the array is replaced. In the meantime, nobody at Latchpoint has to leave for want of supplies.`,
      `After the relief crews recharge the Gunstar, Tavi flies you home to Bellwether. Mica lets you finish the entire story before asking whether space cargo uses better straps. You draw Odo’s rack on the back of her invoice. She turns it over to check that you have still billed for the cabinet repair.`
    ],
  },
  {
    id: 'E08', title: 'The Long Repair', era: 'outpost', time: 'LATCHPOINT · AFTER RELIEF',
    ending: { kind: 'good' },
    cast: ['player', 'tavi', 'neve'],
    imagePrompt: `Enclosed Latchpoint control room after relief during shipboard night, no weather. Player, Tavi and Neve inspect a small diagram of bent shield-vane bearings beside a window onto the intact shelter. Quiet repair planning, no destruction in progress.`,
    text: [
      `Above Latchpoint, you connect the mapped handwheel circuit and drive the shield vanes by remote control. Tavi calls the scouts’ changing angle. You turn the vanes to meet it, a little at a time. The load comes through your control grip like a stubborn arcade lever.`,
      `The operating draw leaves {{clock}} in the bank. Bearings seize at the ends of their travel, but you keep enough shield facing the detachment for the relief ships to arrive. They drive the tender back while you lock the surviving vanes in place.`,
      `Tavi lands under ordinary thrust. In the outpost control room, Neve adds up the damage. The shelter stands; its freight and navigation gear have stayed behind the moving shield. The shield mechanism itself will need a long rebuild, with a relief ship guarding the station meanwhile.`,
      `You give the repair crew your traced cable plan. They can begin without stripping every painted cupboard. Tavi puts a finger on the little drawing of a kettle you copied in the margin.`,
      `“Structural?” Tavi asks. “Essential,” Neve replies. She goes to fill it. You stay to help draw the first replacement bearing, while the relief crew recharges the Gunstar for your eventual trip home.`
    ],
  },
  {
    id: 'E09', title: 'Player Two', era: 'earth', time: 'BELLWETHER · THREE DAYS LATER',
    ending: { kind: 'good', best: true },
    cast: ['player', 'mica', 'tavi', 'cabinet'],
    imagePrompt: `Dry summer morning three days later in Bellwether arcade. Player kneels beside closed service door of Starfighter cabinet; Mica holds repair invoice while Tavi waits at the game controls. Same established clothes, warm daylight, only these three people, no Centauri or Grig.`,
    text: [
      `The relief crew recharges the Gunstar at Latchpoint. You send Mica the completion report, sleep through a whole shipboard morning, then let Tavi fly you home. Three days after the cabinet arrived, you unlock the arcade’s side door in ordinary summer sunlight.`,
      `Mica is already there. She has spoken to your family and read the report twice: all Latchpoint’s rooms, stores and machinery intact. The relief engineers have your wiring and timing record ready for the next detachment. The armada is still out there, but this little part of its job has become harder.`,
      `Tavi follows you inside, having landed at the fairground. She stops at Starfighter. “This is it?”`,
      `You show her the service latch. Mica gives her the same look she gives customers who lean on repaired controls. Tavi takes her hand away.`,
      { if: is('heardTavi'), text: `“I told them whose work it was,” Tavi says. You remember the food packets and the promise in the cockpit. “I saw,” you tell her.` ,
        else: `Tavi points to the two signatures on the completion report. Hers names the pilot. Yours names the flight engineer. Mica sets it beside the paid repair invoice.` },
      `There is another League placement available after you have talked it through at home. For now, Tavi puts a coin in the game. You close the service door, sit on the stool beside her and put your notebook on your knee.`,
      `“Ready?” Tavi asks. You listen to the fan before answering.`
    ],
  },
];

const pages = raw.map((page): Page => page.ending
  ? { ...page, onEnter: { ...page.onEnter, set: { ...page.onEnter?.set, running: false } } }
  : page);

const story: Story = {
  id: 'player-two', revision: 1,
  title: 'Player Two', subtitle: 'A Last Starfighter adventure',
  blurb: 'The new game at your small-town arcade sends its scores somewhere nobody can trace. You keep its circuits working. Beyond the stars, a pilot and an outpost are going to need that more than a high score.',
  start: 'A01',
  eras: {
    earth: { label: 'Bellwether · 1984' },
    league: { label: 'League Service Dock' },
    transit: { label: 'Freight Corridor' },
    outpost: { label: 'Latchpoint' },
    defence: { label: 'Gunstar' },
  },
  flags: {
    charge: { default: 90 },
    difficulty: { default: 'medium', values: ['easy', 'medium', 'hard'] },
    running: { default: false },
    splitMinimum: { default: 20 },
    latchTest: { default: false },
    sleeve: { default: false },
    heardTavi: { default: false },
    echoRecord: { default: false },
    tugHelp: { default: false },
    feederTraced: { default: false },
    storesSecured: { default: false },
    localAction: { default: 'none', values: ['none', 'isolate', 'reset', 'sleeve', 'brace', 'pull'] },
    pulseTried: { default: false },
    station: { default: 'outpost', values: ['outpost', 'defence'] },
  },
  ui: { header: 'basic', transition: 'fade' },
  difficulties: {
    easy: { set: { difficulty: 'easy', charge: 100 } },
    medium: { set: { difficulty: 'medium', charge: 90 } },
    hard: { set: { difficulty: 'hard', charge: 80 } },
  },
  difficultyNotes: {
    easy: 'A full jump bank, room for extra service work, and unlimited undo.',
    medium: 'A smaller allocation. A careful defence can absorb one recovery; undo your last 2 choices.',
    hard: 'A tight allocation for the complete defence. No undo.',
  },
  // Best: hops 45 + three measured investigations 15 + split pulse 10 = 70.
  // The split starts with at least 20 and retains 10: Hard exact, Medium one 10-point recovery.
  clock: {
    flag: 'charge', label: 'JUMP CHARGE', format: 'number', unit: '%',
    visibleWhen: is('running'), allowExpiredOn: [],
  },
  art: {
    stylePrefix: `Warm 1980s space-adventure illustration, clean ink outlines, painted saturated colour, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly with a comic edge. Only the listed characters appear; Tavi appears only when listed and described, Grig and Neve never appear merely because their voices are on a radio. No real people's likenesses. No famous props or vehicles except the deliberately listed Starfighter cabinet and Gunstar. No text or captions. Every scene specifies location, weather and time or shipboard lighting; space is a weatherless vacuum, interiors enclosed. Never put unsuited characters in vacuum. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts do not substitute alternate outfits. Action is non-violent machinery, protective light, comic mistakes and remote unmanned scout lights, never injury, gunfire or exploding occupied ships. Earth is dry summer 1984, never rain or snow. Optional tools, cargo and radio companions are absent unless explicitly listed for that scene.`,
    cast: {
      player: `THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with face hidden, in a teal short-sleeved work shirt, faded blue jeans and cream canvas sneakers. A plain graphite engineering notebook is present only after the League training begins and only when requested in the scene. Cockpit restraint belongs to the seat, not a new costume.`,
      mica: `MICA BELL: an original middle-aged woman with warm brown skin, square black glasses and closely cropped dark hair, in a rust-red cardigan, a cream T-shirt and navy trousers. Dry smile, practical posture.`,
      centauri: `CENTAURI: an invented silver-haired older face, long narrow nose and lively brows, in a maroon frock coat, a pale gold waistcoat, grey trousers and brown shoes, carrying a plain brown felt hat. A theatrical recruiter, no likeness of any actor.`,
      tavi: `TAVI RENN: an original adult alien woman with blue-grey skin, a short upright white crest, a broad nose and expressive dark eyes, in a charcoal flight suit with narrow orange seams and soft black boots. Two ordinary arms and hands. Warm, concentrated, occasionally rueful.`,
      grig: `GRIG: a friendly broad reptilian alien with mottled ochre skin, a rounded ridged head, deep-set kind eyes and a wide expressive mouth, in a tan flight suit with dark brown cuffs and dark brown boots. No actor likeness.`,
      neve: `NEVE SORN: an original middle-aged alien woman with amber skin, two short rounded horns, dark close-cropped curls and copper round spectacles, in an olive work coat, cream trousers and brown lace-up shoes. Brisk and hospitable.`,
      cabinet: `STARFIGHTER CABINET: a tall black arcade cabinet with a deep hood over a curved screen, two plain hand controls, a low rectangular service door and blue star-line side panels. No maker's mark, familiar real-world company logo or legible score text. Service compartment contains small low-voltage relay block, mechanical counters and a sealed silver wafer; screen electronics remain separately enclosed.`,
      gunstar: `GUNSTAR: an intentional League spacecraft, compact broad silver-grey hull with short paired side booms, dark inset engine mouths, a clear forward canopy and a low side boarding hatch. This service configuration has two cockpit stations: forward flight seat and offset engineering seat. Always the same hull and seat layout; no unrelated famous spaceship.`,
      adapter: `OUTPUT ADAPTER: a fixed palm-sized rectangular graphite block in the Gunstar's engineering panel, silver lift latch across its top, two inner signal pins separated by a raised rib from two outer power pins. In workshop tests it is connected by a service lead; aboard it remains fixed in its socket.`,
      outpost: `LATCHPOINT: a wheel-shaped silver-grey shelter attached by three short braces to one dark irregular rock, warm rectangular habitation windows around its ring, a thin survey mast above and six broad folding shield vanes around the rim. Freight platform below the ring; never a planet or a city.`,
      tug: `ODO'S TUG: a small squat ochre cargo craft with a blunt enclosed cab, one orange engine glow and a plain rectangular rack of empty grey crates on a tow cable. No visible captain or other occupants.`,
    },
  },
  pages,
};

export default story;
