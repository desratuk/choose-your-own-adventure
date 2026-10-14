import type { Cond, Effects, Page, Story } from '../../src/engine/types';

const is = (flag: string, value: string | boolean = true): Cond => ({ flag, is: value });
const not = (cond: Cond): Cond => ({ not: cond });
const all = (...conds: Cond[]): Cond => ({ all: conds });
const any = (...conds: Cond[]): Cond => ({ any: conds });
const ge = (n: number): Cond => ({ flag: 'lantern', gte: n });
const le = (n: number): Cond => ({ flag: 'lantern', lte: n });
const cost = (n: number): Effects => ({ add: { lantern: -n } });
const fullReel = any(is('order', 'true'), is('order', 'shelf'), is('order', 'reverse'));
const muddled = any(is('order', 'shelf'), is('order', 'reverse'));
const stalls = is('winPlace', 'stalls');
const residents = is('residentsComing');

const raw: Page[] = [
  {
    id: 'A01', title: 'The Last Queue', era: 'palace', time: 'SAT 25 OCT 1986 · EVENING',
    cast: ['player', 'dot', 'hale'],
    imagePrompt: `Wet October evening, 1986, inside the crowded foyer of the Palladian picture palace: red carpet, gilded plaster, a sweet kiosk. Dot stands at the kiosk with her tray; Mr Hale comes down the curving stair in his velvet jacket; the player tears tickets at the door, seen from behind. A Starlite Video poster pasted over a coming-attractions frame, no legible words. Queue of anonymous townsfolk in damp coats in the background, faces soft. No other named characters.`,
    text: [
      `The Palladian’s foyer smells of popcorn, floor polish and rain-soaked coats. It is Saturday the twenty-fifth of October 1986, a wet evening in Saltbeck. The queue for the last show at the town’s old picture palace runs out of the glass doors and down the steps.`,
      `You are seventeen and the Palladian’s second projectionist, which on most nights means you also tear tickets until the box needs you. Tonight you tear them slowly. Everybody wants to tell you what they saw here first.`,
      `At the kiosk, Dot Pryor, the usherette, is selling the last choc ices from her tray in her red-and-gold uniform. “Last night, last tray,” she tells each customer, as if it were a weather warning.`,
      `Mr Hale, the owner, comes down the stairs in a bottle-green velvet jacket he usually saves for Christmas. He bought the Palladian in 1959. At midnight he hands the keys to Starlite Video, whose poster is already pasted over the coming-attractions frame. “They’ll rent you three films for the price of one ticket,” he says, without bitterness. “Then you watch them on a television the size of a bread bin.”`,
      `He lowers his voice. “The scrap man comes for the old Lantern on Monday. If Win wants anything from it, tonight’s the night.” He takes the ticket book from you. “Up you go. She’s been up there since five.”`
    ],
    choices: [{ text: 'Climb to the projection box', to: 'A02' }],
  },
  {
    id: 'A02', title: 'Last House', era: 'palace', time: 'FINAL NIGHT · BEFORE THE SHOW',
    cast: ['player', 'win'],
    imagePrompt: `Evening inside a long, warm 1980s cinema projection box, no weather visible. Two large grey modern projectors stand side by side at small square port windows; a dust-sheeted shape waits in the far corner. Win threads film on the nearer projector and holds up an old iron key on a loop of string, frowning at it, while the player watches over her shoulder, seen from behind. Only these two people.`,
    text: [
      `The projection box is a long, warm room above the back of the circle, humming with fans. Two big projectors, number one and number two, stand side by side at their little square windows onto the auditorium. In the far corner, under a dust sheet, is a third machine nobody uses.`,
      `Win Aldous, the chief projectionist, has worked here for forty-four years. She is seventy, tall, with a long silver plait and half-moon glasses on a cord. Tonight’s film is *The Brass Moon*, a 1958 adventure the regulars voted for. Its six reels wait in their cans.`,
      `“Changeovers,” Win says, though you’ve done hundreds with her. She threads the first reel on number one and the second on number two. “Watch the top right corner of the picture. First little dot: start the other machine’s motor. Second dot, eight seconds later: change over.” She taps the switch between them. “Do it right and nobody downstairs ever knows we exist.”`,
      `She pats her cardigan pocket and brings out an old iron key on a loop of string. She frowns at it. “Forty years I’ve carried this,” she says. “Tonight I can’t think what it opens.” She puts it away a little too quickly.`,
      `Then she nods at the dust sheet. “Come on. Before the scrap man gets her, you should meet the Lantern properly.”`
    ],
    choices: [{ text: 'Help Win lift the dust sheet', to: 'A03' }],
  },
  {
    id: 'A03', title: 'Sixteen for Walking', era: 'palace',
    cast: ['player', 'win', 'lantern'],
    imagePrompt: `Evening in the cinema projection box, warm work lamps, no weather. The dust sheet lies pulled back from the Lantern. Win rests one hand on its speed lever and holds up a short strip of modern film to the lamp so a wavy soundtrack line shows along one edge; the player leans in, seen from behind. A small square iron hatch is set flush in the floor beside the Lantern, closed and painted over. The Lantern is cold and unlit. Only these two people.`,
    text: [
      `Under the sheet is a black-japanned projector older than anything else in the building, all brass fittings and rivets, with a tall chimneyed lamphouse and a ruby-glass peephole. A crank handle sticks out of its side. Beside the lamphouse, a brass gauge is engraved in hours and minutes, and its pointer rests at the top.`,
      `“Ada Merriman’s Lantern,” Win says. “She built the Palladian in 1911. Before that she toured magic-lantern shows: painted glass slides, lit up big on a sheet.” She shows you a narrow slot in front of the lamp. “That’s the gate. A glass slide goes in there. Her painted ones are still in the cabinet underneath.”`,
      `Win lifts a lever beside the crank, marked 16 at one end and 24 at the other. “Old silent pictures were cranked by hand, slower: about sixteen frames a second. Sixteen for walking. When sound came in, everything went to twenty-four. Twenty-four for talking.” She unrolls a strip of the feature and shows you the wavy line printed down one edge, between the pictures and the sprocket holes. “That’s the soundtrack. Silent film doesn’t need one, so its pictures run the whole width.”`,
      `She gives you the sums every projectionist learns: thirty-five-millimetre film runs ninety feet a minute at twenty-four, sixty at sixteen. “Run a silent picture at sound speed and Grandad sprints to the shops,” Win says. “Run it right and he walks there the way he did.”`,
      `The gauge, she explains, measures the carbons: two rods that make the lamp’s light by burning. Ada left one last pair in the Lantern with a note saying they weren’t for ordinary use. Win never struck them. She nods at a small iron hatch in the floor beside it, painted shut since before her time. “Ada’s coal hatch. Don’t ask me where it goes.”`,
      `Below, the house lights begin to fade.`
    ],
    choices: [{ text: 'Take your place for the first changeover', to: 'A04' }],
  },
  {
    id: 'A04', title: 'The Lantern Strikes', era: 'palace', time: 'FINAL NIGHT · REEL ONE',
    onEnter: { set: { running: true } },
    cast: ['player', 'win', 'lantern', 'moths'],
    imagePrompt: `Night inside the dim projection box during the film, no weather. In the foreground the Lantern's lamphouse glows white through its ruby peephole and a stream of small pale-gold light-moths drifts from its chimney down into the now OPEN floor hatch beside it. The player, seen from behind, holds up one hand with a single glowing moth on it. In the background Win stands at the far projector with her back turned, watching the port. Only these two people.`,
    text: [
      `*The Brass Moon* begins. Through the port glass, eight hundred faces turn silver in the light from number one. Win stands at its side with her hand near the changeover switch, watching the picture as she has for forty-four years.`,
      `Behind you, something clicks. The Lantern’s lamphouse glows red through its ruby peephole, then white. With a crackle like frying bacon, Ada’s carbons strike by themselves. The brass pointer twitches and starts to creep down the gauge. It reads {{clock}}.`,
      `Out of the lamphouse chimney drift moths, dozens of them, made of pale gold light. One lands on the back of your hand. For a moment you are somewhere else: a steep cobbled lane climbing to a chapel, gas lamps hissing, the smell of warm wax, and a girl with a long dark plait sitting on a doorstep marked 4. Then the moth lifts off, and you are back in the box.`,
      `The moths stream toward Ada’s hatch. It isn’t painted shut any more. It stands open on darkness, and they pour down into it like sand through an hourglass.`,
      `Win hasn’t turned round. She never takes her eyes off the screen while a reel is running.`
    ],
    choices: [
      { text: 'Tell Win what just happened', to: 'A05', ...cost(5) },
      { text: 'Follow the moths down the hatch', to: 'A06', ...cost(5) },
      { text: 'Shut the hatch: a projection box is no place for loose flames', to: 'E01' },
    ],
  },
  {
    id: 'A05', title: 'What Win Can’t See', era: 'palace',
    onEnter: { set: { toldWin: true } },
    cast: ['player', 'win', 'lantern', 'moths'],
    imagePrompt: `Night inside the dim projection box during the film, no weather. Win has turned from her projector; one pale-gold light-moth brushes her cheek and she stands very still, a hand at her cardigan pocket. The player stands at her shoulder, seen from behind. The lit Lantern glows in the corner, its floor hatch open. Only these two people.`,
    text: [
      `You stand at Win’s shoulder and tell her, quietly, everything: the carbons, the moths, the lane and the girl on the doorstep. Her eyes never leave the corner of the screen. When the first cue dot flickers at the end of the reel, she starts number two’s motor. At the second, she changes over without a sound.`,
      `Only then does she turn. A last moth is circling the Lantern’s chimney. It brushes her cheek, and she goes very still.`,
      `“A lane with a chapel at the top,” she says. “I’ve never seen it in my life.” Her hand has gone to her pocket, to the iron key. “Then why do I want to cry?”`,
      `She looks at the open hatch, then at the brass gauge, its pointer now at {{clock}}. “Ada didn’t leave notes about things that didn’t matter.” She turns back to number one to thread the next reel. “Go and look. I’ve a show to run. Come and tell me what you find.”`
    ],
    choices: [{ text: 'Go down through the hatch', to: 'A06', ...cost(5) }],
  },
  {
    id: 'A06', title: 'Ada’s Stair', era: 'archive', time: 'FINAL NIGHT · INSIDE THE WALLS',
    cast: ['player', 'moths'],
    imagePrompt: `Night, enclosed and dry: a narrow iron spiral stair winding down inside a thick old brick wall, lit mainly by a trail of small pale-gold light-moths and a torch beam. The player descends, seen from behind and above. Old dust on the treads with one line of small, very old footprints. At the bottom, a wooden door stands ajar beneath curly gold lettering too small to read. Nobody else.`,
    text: [
      `You take the box torch from its hook and lower yourself through the hatch. An iron spiral stair winds down inside the thick back wall of the Palladian, past the circle, past the stalls, past the muffled booming of *The Brass Moon*’s soundtrack. The moths light the way better than the torch does.`,
      `The treads are thick with old dust. In it is one line of small footprints, very old, going down and coming back up.`,
      `At the bottom, below the level of the stage, a door stands ajar. Over it, someone has painted in curly gold letters: THE LANTERN ARCHIVE. KEEP THE LIGHT.`
    ],
    choices: [{ text: 'Go through the door', to: 'B01', ...cost(5) }],
  },
  {
    id: 'B01', title: 'Under the Stage', era: 'archive', time: 'FINAL NIGHT · UNDER THE STAGE',
    cast: ['player', 'moths'],
    imagePrompt: `Night, enclosed and dry: a long arched brick vault beneath a theatre stage, shelves along both walls packed with round film cans bearing small paper labels (no legible words). Pale-gold light-moths drift down the vault toward one far shelf. In the centre, a wooden desk with a small hand-cranked film viewer, a brass splicing block, a little bottle, a glass-fronted case and a fat leather book. The player stands at the desk with a torch, seen from behind. Nobody else.`,
    text: [
      `Beyond the door is a long brick vault under the stage, arched like a railway tunnel. You can feel the film’s music through the ceiling. Shelves run the length of both walls, packed with round film cans, each with a paper label in the same looping handwriting.`,
      `You read a few by torchlight. THE BELL FOUNDRY WHISTLE. THE FROST FAIR, 1895. THE HOLLOW END TRAM. MRS GAUNT’S PARROT. You have lived in Saltbeck all your life and never heard of any of them. The cans stand in alphabetical order, the way a librarian would shelve them.`,
      `The moths drift down the vault and settle, one by one, on a shelf near the far end.`,
      `Between the shelves stands a desk: a little hand-cranked film viewer, a brass splicing block, a bottle of film cleaner, a glass-fronted case and a fat leather book. On its cover, in gold: A. MERRIMAN, KEEPER.`
    ],
    choices: [{ text: 'Open the leather book', to: 'B02', ...cost(5) }],
  },
  {
    id: 'B02', title: 'Ada’s Log', era: 'archive',
    cast: ['player'],
    imagePrompt: `Night in the enclosed brick archive vault, dry. Close over the player's shoulder at the desk: an open leather logbook of handwritten pages in looping ink (unreadable at this distance), lit by a torch and the glow of a few pale-gold moths. A small brass splicing block and hand viewer at the edge of frame. Nobody else.`,
    text: [
      `The first pages are dated 1911. Ada Merriman wrote the way she must have talked: briskly, to someone she expected to keep up. Near the front she has set out her rules.`,
      `*One. When a town lets go of something it once knew, a place, a sound, a custom, the moths bring its last pictures down here, onto film. Each can has a card. On it I write the names of those who still hold it. As they let go, their names fade.*`,
      `*Two. When the last who hold a thing are letting it go, the Lantern lights itself. I have left it one pair of carbons. They will burn once, for one return, and never again. Watch the gauge.*`,
      `*Three. Shown through the Lantern onto the Palladian’s screen, a reel comes back to everyone watching who once knew it. Show only part of a place, and only that part comes back. Show it out of its own order, and it comes back as a muddle nobody can walk through.*`,
      `*Four. Light it through something that was really there, not a picture of it, or it will be gone again by morning. The gate takes glass.*`,
      `*Five. If two or more who held it are watching together, the moths can carry it out from them to everyone who ever knew it. They need the lamp to keep the screen lit for ten minutes after the last frame.*`,
      `Many more pages follow the rules, in the same hand.`
    ],
    choices: [
      { text: 'Read Ada’s last entry', to: 'B03', ...cost(5) },
      { text: 'Go to the shelf where the moths are settling', to: 'B04' },
    ],
  },
  {
    id: 'B03', title: 'Ada’s Last Entry', era: 'archive',
    onEnter: { set: { readAda: true } },
    cast: ['player'],
    imagePrompt: `Night in the enclosed brick archive vault, dry. The player, seen from behind, sits at the desk with the leather logbook open near its end; at the bottom of a handwritten page is a tiny ink drawing of a moth. A single pale-gold light-moth rests on the desk edge. Nobody else.`,
    text: [
      `The last entry is dated March 1958, in shakier handwriting.`,
      `*I’m told I must stop climbing stairs, so this is for whoever keeps the light after me. Nobody in the stalls ever turns round to look at the little window at the back. That is how you know you’ve done it right. People think it a small job, standing in the dark so other people can see. It isn’t small. It’s the whole job.*`,
      `*I have painted the hatch shut so nobody wanders down by accident. The Lantern will open it when it needs you.*`,
      `Underneath, she has drawn a tiny moth. You close the book feeling as though someone has just put a hand on your shoulder.`
    ],
    choices: [{ text: 'Go to the shelf where the moths are settling', to: 'B04' }],
  },
  {
    id: 'B04', title: 'Four Small Cans', era: 'archive',
    cast: ['player', 'moths', 'rolls'],
    imagePrompt: `Night in the enclosed brick archive vault, dry. At the end of a long shelf, four small round film cans with paper labels (no legible words) sit open; short rolls of film glow faintly inside as pale-gold light-moths crawl over them. The player, seen from behind, holds a small handwritten card in torchlight. Nobody else.`,
    text: [
      `The moths have gathered on four small cans at the end of a shelf. Their labels are in Ada’s hand: THE WICKS — DIPPING ROW. THE WICKS — MOULD YARD. THE WICKS — TALLOW LANE. THE WICKS — WICK STREET. Alphabetical, like everything else. Each is marked 225 FT.`,
      `Tucked behind them is a card. Ada wrote it in 1952: *The Wicks. Four streets by the candle works, emptied when the works closed. Held by:* Then come forty names in two columns. All but four have faded to pale smudges. The four that remain are faint: W. ALDOUS. A. QUARRY. I. PELLOW. M. PELLOW.`,
      `W. Aldous. Win.`,
      `You open the cans. Inside each is a short roll of film, warm to the touch. The moths crawl over the rolls, and where they walk, the pictures brighten for a moment and then fade again.`
    ],
    choices: [{ text: 'Look at the rolls on Ada’s viewer', to: 'B05', ...cost(5) }],
  },
  {
    id: 'B05', title: 'On Ada’s Viewer', era: 'archive',
    cast: ['player', 'rolls'],
    imagePrompt: `Night in the enclosed brick archive vault, dry. Close over the player's shoulder at Ada's desk: a little hand-cranked film viewer with a small glowing screen showing a cobbled yard, works gates and a tall square brick chimney with a white band near its top, in silvery black and white. Black-and-white film frames running edge to edge across the strip with no soundtrack line. Three small open film cans beside it. Nobody else.`,
    text: [
      `You thread each roll through the little viewer on Ada’s desk and crank.`,
      `TALLOW LANE: terraced houses climbing steeply to a chapel, gas lamps along the kerb, and the girl with the long dark plait on the doorstep of number 4. She tilts her head exactly the way Win does when she’s listening for a fault in a projector. This roll is the least faded of the four.`,
      `WICK STREET: a long, level street of shops and washing lines, and a young lamplighter with a long brass-hooked pole, reaching up to light each lamp in turn.`,
      `DIPPING ROW: a row of low sheds where women dip long strings in vats of wax and hang the candles up in rows to set. Children dodge between them.`,
      `MOULD YARD: a cobbled yard, the gates of a candle works, and above them a tall square brick chimney with a band of white brick near the top. You know that chimney. It stands alone in a field behind the bus depot on Ferry Road, with nothing round it. You have cycled past it a thousand times.`,
      `The pictures fill the film from one row of sprocket holes to the other; there’s no wavy line down the side. Specks of dust drift across every frame, and the light at the edges is going pale.`
    ],
    choices: [
      { text: 'Clean the dust off with Ada’s film cleaner', to: 'B06', ...cost(5) },
      { text: 'Pack the rolls into their cans and carry them up to the box', to: 'C01', ...cost(5) },
    ],
  },
  {
    id: 'B06', title: 'The Cleaner', era: 'archive',
    onEnter: { set: { cleaned: true } },
    cast: ['player', 'rolls'],
    imagePrompt: `Night in the enclosed brick archive vault, dry. The player, seen from behind and to one side, holds a short length of film in one hand and a white cotton cloth smeared with fine gold powder in the other; a small bottle of cleaner stands open on the desk beside the hand viewer. The leather logbook lies open nearby. Nobody else.`,
    text: [
      `Dust on film turns into dancing grit on a big screen, and Win would never let a dirty print out of the box. You dampen your lint-free cloth with Ada’s cleaner and draw a few feet of WICK STREET through it.`,
      `The dust comes off. So does the picture. The cloth is smeared with fine gold powder, and on the film the lamplighter is fading out of his own street.`,
      `You snatch up the log and leaf through it. Near the back, under *Accidents*, Ada has written: *If the pictures lift, lay the roll in the moth case and wait. They’ll put back what they can. Don’t hurry them.*`
    ],
    choices: [{ text: 'Lay all four rolls in the glass moth case', to: 'B07', ...cost(5) }],
  },
  {
    id: 'B07', title: 'The Moth Case', era: 'archive',
    cast: ['player', 'moths', 'rolls'],
    imagePrompt: `Night in the enclosed brick archive vault, dry. A tall glass-fronted wooden case with velvet trays holds four short film rolls; pale-gold light-moths have folded themselves inside through a crack and rest on one roll, wings slowly open. The player, seen from behind, waits beside it. Nobody else.`,
    text: [
      `The glass-fronted case beside the desk has velvet trays inside, shaped for film rolls. You lay the four rolls in them and close the door. The moths fold themselves in through a crack in the glass and settle on WICK STREET, wings opening and shutting.`,
      `You can’t see the Lantern’s gauge from here, but you can feel the minutes going. At last you take WICK STREET out and crank it through the viewer. The lamplighter is back, lighting his lamps. The dust is still there. You decide you can live with dust.`
    ],
    choices: [{ text: 'Carry the rolls up to the box', to: 'C01', ...cost(5) }],
  },
  {
    id: 'C01', title: 'The Box Between Reels', era: 'palace', time: 'FINAL NIGHT · DURING THE FEATURE',
    cast: ['player', 'win', 'lantern', 'rolls'],
    imagePrompt: `Night inside the projection box during the film, no weather. The lit Lantern glows in its corner with four small round film cans stacked beside it on a bench. Win stands at a modern projector by the port, glancing round at the player, who stands by the cans, seen from behind. A heavy black telephone hangs on the wall by the door; a low wooden cabinet sits under the Lantern. No loose glass or slides visible. Only these two people.`,
    text: [
      { if: not(is('hubSeen')),
        text: `You climb back up through the hatch with the four cans stacked in your arms. In the box, *The Brass Moon* is still running on number two, and number one stands threaded for the next reel.` },
      { if: all(not(is('hubSeen')), is('toldWin')),
        text: `Win turns at once. “Well?” You tell her about the archive and show her the card. She reads her own name and is quiet for a long moment. “Aldous is me. But I’ve never lived in any Wicks.”` },
      { if: all(not(is('hubSeen')), not(is('toldWin'))),
        text: `Win turns round, sees the open hatch, the burning Lantern and the cans in your arms, and takes off her glasses. “You’d better tell me,” she says. You tell her everything, as fast as you can, and show her the card. She reads her own name and is quiet for a long moment. “Aldous is me. But I’ve never lived in any Wicks.”` },
      { if: is('hubSeen'),
        text: `Back in the box, Win is at the machines, keeping *The Brass Moon* running reel by reel. The four cans wait beside the Lantern.` },
      { if: not(is('hubSeen')),
        text: `She taps the other names. “Abel Quarry swept the stalls here when I started. The Pellow twins came to every Thursday matinee for thirty years. All three live up at Highfield House now, the care home on Kiln Hill.” She frowns. “Isn’t that odd? I always thought they were from nowhere in particular. Like me.”` },
      { if: not(is('hubSeen')),
        text: `The Lantern’s gauge stands at {{clock}}. Under it is Ada’s slide cabinet, and on the wall by the door is the box telephone. And if Mould Yard’s chimney is the one on Ferry Road, whatever is left of the Wicks lies in the field behind the bus depot.`,
        else: `The Lantern’s gauge stands at {{clock}}.` },
      { if: all(is('hubSeen'), is('lampGlass')), text: `The lamp glass from Depot Field lies wrapped in its cloth on the bench.` },
      { if: all(is('hubSeen'), is('slide')), text: `Ada’s painted slide leans against the gauge.` },
      { if: all(is('hubSeen'), is('residentsComing')), text: `Mrs Ferris is bringing Abel and the Pellow twins down from Highfield House in the minibus.` },
    ],
    choices: [
      { text: 'Cycle up Kiln Hill to Highfield House', to: 'C02', if: all(not(is('knowsRound')), ge(16)), set: { hubSeen: true }, ...cost(10) },
      { text: 'Ring Highfield House from the box telephone', to: 'C08', if: all(not(is('residentsComing')), ge(6)), set: { hubSeen: true }, ...cost(5) },
      { text: 'Cycle down Ferry Road to the field behind the bus depot', to: 'C05', if: all(not(is('lampGlass')), ge(11)), set: { hubSeen: true }, ...cost(5) },
      { text: 'Look through Ada’s slide cabinet', to: 'C07', if: all(not(is('slide')), ge(6)), set: { hubSeen: true }, ...cost(5) },
      { text: 'Get the Lantern ready', to: 'D01', set: { hubSeen: true } },
    ],
  },
  {
    id: 'C02', title: 'Kiln Hill', era: 'town', time: 'FINAL NIGHT · KILN HILL',
    cast: ['player', 'abel', 'pellows', 'pole'],
    imagePrompt: `Rainy October night, indoors in the lounge of Highfield House, a Victorian villa turned care home: a standard lamp, armchairs, patterned carpet, cold cups of cocoa. Abel sits in his armchair beneath a long wooden pole with a brass hook resting on two wall brackets; the Pellow twins sit side by side on a settee. The player stands in the doorway, seen from behind, rain on their shoulders. No other people.`,
    text: [
      `You run down the back stairs, unchain your bicycle from the drainpipe behind the Palladian and pedal up Kiln Hill through thin rain. Highfield House is a big old villa at the top, turned into a care home. Most of its windows are dark.`,
      { if: is('residentsComing'),
        text: `The night manager, Mrs Ferris, opens the door with a biro behind her ear and recognises your voice from the telephone. “They’re still finding their good cardigans,” she says. “Come in.”`,
        else: `The night manager, Mrs Ferris, opens the door with a biro behind her ear. When you tell her whose names are on the card, she sighs. “You’d better come in. Those three won’t settle tonight. Nobody can say why.”` },
      `In the lounge, under a standard lamp, three residents sit up in their day clothes with cups of cocoa going cold. The old man with the white beard is Abel Quarry. The two identical women in their seventies, one in a lilac cardigan and one in sage green, are Ivy and May Pellow.`,
      `“Something’s going,” Ivy says, before you have explained anything. “Like a word on the tip of your tongue.” “Only a bigger word,” says May.`,
      `On the wall above Abel’s chair, resting on two brackets, is a long wooden pole with a brass hook at one end.`
    ],
    choices: [{ text: 'Ask Abel about the pole', to: 'C03', ...cost(5) }],
  },
  {
    id: 'C03', title: 'The Lamplighter’s Pole', era: 'town',
    onEnter: { set: { knowsRound: true } },
    cast: ['player', 'abel', 'pellows', 'pole'],
    imagePrompt: `Rainy October night, indoors in the Highfield House lounge under a standard lamp. The player, seen from behind, holds the long wooden lamplighter's pole across both hands, showing a small brass plate near its grip stamped with four letters too small to read. Abel leans forward from his armchair, one thumb on the plate. The Pellow twins sit on the settee holding hands, looking at a small handwritten card on the coffee table. No other people.`,
    text: [
      `Abel lets you lift it down. It’s taller than you are, worn smooth where hands held it. Near the grip is a small brass plate, stamped with four letters in a row: T · W · D · M.`,
      `“I carried that every night for thirty years,” Abel says. “Lit the lamps with it. I know I did. But where?” His thumb moves along the letters, one, two, three, four, the way someone counts stairs in the dark.`,
      `You show them Ada’s card. The twins find their own names and hold hands without seeming to notice. “Pellow,” says May. “We were the Pellows of —” She stops. Nobody can finish it.`,
      { if: is('residentsComing'),
        text: `Mrs Ferris comes in with their coats over her arm. “Minibus is warming up,” she says. “Say goodnight to your pole, Abel.”`,
        else: `Mrs Ferris has come to stand in the doorway, watching her residents with a worried face.` },
    ],
    choices: [
      { text: 'Ask Mrs Ferris to bring all three to the Palladian’s last night', to: 'C04', if: all(not(is('residentsComing')), ge(6)), ...cost(5) },
      { text: 'Hang the pole back up and cycle back to the Palladian', to: 'C01' },
    ],
  },
  {
    id: 'C04', title: 'Coats and Cocoa', era: 'town',
    onEnter: { set: { residentsComing: true, invitedInPerson: true } },
    cast: ['player', 'abel', 'pellows'],
    imagePrompt: `Rainy October night in the hallway of Highfield House, warm lamplight. Abel buttons a plain raincoat over his cardigan while the Pellow twins, in their cardigans, search a coat stand for a missing glove. The player, seen from behind, holds the front door open on the rain. The long lamplighter's pole is NOT here. No other people.`,
    text: [
      `Mrs Ferris looks at the three of them, wide awake and miserable, and makes up her mind. “They’ll not sleep anyway. I’ll bring the minibus round.”`,
      `Ivy and May argue cheerfully about scarves. Abel asks whether the Palladian still has the plaster lyres over the side boxes. You tell him it does. “Good,” he says. “I swept round those.”`,
      `You help with coats and the hunt for May’s other glove, then ride back down the hill ahead of them, freewheeling through the rain.`
    ],
    choices: [{ text: 'Ride back to the Palladian', to: 'C01' }],
  },
  {
    id: 'C05', title: 'Depot Field', era: 'town', time: 'FINAL NIGHT · FERRY ROAD',
    cast: ['player'],
    imagePrompt: `Rainy October night behind a town bus depot: a chain-link fence with a bent-back gap and a small sign (no legible words), parked double-decker buses dark beyond. A wide field of brambles and long wet grass under an orange town-glow sky, with one tall square brick chimney with a white band near its top standing alone in the middle. Lines of old kerbstones and cobbles show through the grass, climbing the slope. The player pushes a bicycle through the gap, seen from behind. Nobody else.`,
    text: [
      `You freewheel down Ferry Road past the dark bus depot, its double-deckers parked in rows. Behind it, a chain-link fence carries a sign: DEPOT FIELD. NO TIPPING. There’s a gap where the wire has been bent back, probably by children.`,
      `The field beyond is brambles and long wet grass. In the middle, black against the orange glow of the town, stands the square brick chimney with its band of white near the top. Nothing else. On every map you have ever seen, this is just a field.`,
      `But when you push into the grass, your boots ring on stone. Cobbles. Under the turf run long, straight lines of kerbstones, climbing the slope away from the chimney, as neat as the lines on a ruled page. Streets. Somebody’s streets.`,
      `Up the slope, at the top of the longest line, something tall and thin leans out of the brambles. A few moths are circling it.`
    ],
    choices: [{ text: 'Climb toward it through the brambles', to: 'C06', ...cost(5) }],
  },
  {
    id: 'C06', title: 'The Last Lamp', era: 'town',
    onEnter: { set: { lampGlass: true } },
    cast: ['player', 'lampglass'],
    imagePrompt: `Rainy October night at the top of the overgrown field. A tilted cast-iron gas lamp post rises from brambles, its four-sided lantern head with three cracked panes and one empty frame. The player, seen from behind, holds a whole palm-sized square of clouded glass with a tiny etched flame in one corner, half wrapped in a white cotton cloth. A rusty enamel street sign lies half buried at the post's foot, its letters unreadable. A few pale-gold light-moths drift away toward the distant town lights. Nobody else.`,
    text: [
      `It’s a cast-iron lamp post, tilted like a tired person, its lantern head still on top. Three of its four small glass panes are cracked. The fourth is whole, no bigger than your palm, clouded by decades of weather, with a little flame etched in one corner.`,
      `At its foot, half buried, lies an enamel street sign: TALLOW L—. The rest is rust.`,
      `The lantern’s catch is stiff but not stuck. You ease the whole pane out of its frame and wrap it in the lint-free cloth from your pocket.`,
      `The moths drift away from the empty frame, toward the lights of town. You follow them back to your bicycle.`
    ],
    choices: [{ text: 'Ride back to the Palladian', to: 'C01' }],
  },
  {
    id: 'C07', title: 'Ada’s Slides', era: 'palace',
    onEnter: { set: { slide: true } },
    cast: ['player', 'lantern', 'slide'],
    imagePrompt: `Night inside the projection box during the film, no weather. The player kneels at the open wooden cabinet beneath the lit Lantern, seen from behind, holding up one palm-sized hand-painted glass slide framed in card toward the lamphouse glow: a bright painted steep terraced lane with gas lamps and a small chapel at the top. Racks of other slides in the cabinet. Win is not in this crop.`,
    text: [
      `The cabinet under the Lantern is full of flat wooden boxes. Inside, in grooved racks, are Ada’s glass slides, each a palm-sized square framed in card.`,
      `She painted them by hand, in colours as bright as boiled sweets: THE PALLADIAN, OPENING NIGHT, with a crowd in hats; THE RIVER WEND IN FLOOD; and one labelled TALLOW LANE, 1911. It’s the lane from the moth’s picture: steep terraces, gas lamps and the chapel at the top, all painted in tiny, careful brushstrokes.`,
      `You hold it up to the Lantern’s glow. It’s beautiful. Ada must have known that lane well to paint it like this.`,
      `You take it out of the rack and stand it beside the gauge, which reads {{clock}}.`
    ],
    choices: [{ text: 'Close the cabinet', to: 'C01' }],
  },
  {
    id: 'C08', title: 'The Box Telephone', era: 'palace',
    onEnter: { set: { residentsComing: true } },
    cast: ['player'],
    imagePrompt: `Night inside the projection box during the film, no weather. The player, seen from behind, stands at a heavy black wall telephone by the door with the receiver to their ear. In the soft background, the lit Lantern glows in its corner beside four small round film cans. Win is not in this crop. Nobody else.`,
    text: [
      `The box telephone is a heavy black thing on the wall, meant for ringing the manager’s office. You get an outside line and ask Directory Enquiries for Highfield House.`,
      { if: is('knowsRound'),
        text: `Mrs Ferris answers on the second ring. “Oh, it’s you again,” she says. “They’re still up. All three.”`,
        else: `A woman answers: Mrs Ferris, the night manager. When you mention Abel Quarry and the Pellow twins, she sighs. “Those three won’t settle tonight. Nobody can say why.”` },
      `You ask whether they could come down to the Palladian’s last night. There’s a muffled conversation away from the receiver, and then Mrs Ferris is back. “They say yes. I’ll bring them in the minibus. Don’t let anybody sit in their seats.”`,
      `You promise. Then you ring down to the kiosk and ask Dot to keep three seats free in the stalls.`
    ],
    choices: [{ text: 'Hang up', to: 'C01' }],
  },
  {
    id: 'D01', title: 'The White Screen', era: 'palace', time: 'FINAL NIGHT · CHANGEOVER',
    cast: ['player', 'win', 'lantern', 'moths'],
    imagePrompt: `Night inside the projection box during the film, no weather. Win stands frozen at a modern projector with her hand resting on a switch, not looking at the port but at a few pale-gold light-moths circling the lit Lantern; her face is blank and lost. The player, seen from behind, turns toward her. Through the port glass, a distant bright cinema screen. Only these two people.`,
    text: [
      `You turn to the Lantern to get it ready. Then you notice the silence where Win’s voice should be counting.`,
      `She is standing at number one with her hand on the changeover switch, but she isn’t watching the screen. She’s watching the moths circling the Lantern, and her face is blank, like someone who has lost her way in her own kitchen.`,
      `In the top right corner of the picture, the first cue dot flicks on and off. The reel on number one is nearly out. Number two stands threaded and silent.`,
      `“Win?” She doesn’t hear you.`
    ],
    choices: [
      { text: 'Start number two’s motor and take the changeover yourself', to: 'D03', set: { changeover: 'clean' } },
      { text: 'Stop number one before the film runs out of the gate', to: 'D02', if: ge(11), set: { changeover: 'restart' }, ...cost(10) },
    ],
  },
  {
    id: 'D02', title: 'House Lights', era: 'palace',
    cast: ['player', 'win'],
    imagePrompt: `Night inside the projection box, no weather. The house lights are up in the auditorium beyond the port glass, a soft blur of seated audience. Win and the player, seen from behind, work together at a modern projector, threading film by a work lamp. A brass speaking-tube mouthpiece on the wall. Only these two people in the box.`,
    text: [
      `Number one clatters to a stop with the tail of the reel flapping. The screen goes black, and then the house lights come up, because Win’s elbow has caught the dimmer as she startles back to herself.`,
      `Eight hundred people sit blinking. A slow handclap starts somewhere in the circle. Dot’s voice comes up the speaking tube: “Everything all right up there, loves?”`,
      `It takes you and Win together to run number two up from its start mark, dim the lights again and find the place where *The Brass Moon* left off. By the time the picture steadies, the Lantern’s gauge has dropped to {{clock}}.`
    ],
    choices: [{ text: 'Ask Win what happened', to: 'D03' }],
  },
  {
    id: 'D03', title: 'Win’s Hands', era: 'palace',
    cast: ['player', 'win', 'lantern'],
    imagePrompt: `Night inside the projection box during the film, no weather. Win sits on a low wooden rewind bench turning an old iron key on a loop of string over in her hands. The player, seen from behind, crouches beside her. The lit Lantern glows behind them. Only these two people.`,
    text: [
      { if: is('changeover', 'clean'),
        text: `You hit number two’s motor on the first dot, and on the second you throw the changeover. The picture jumps from one machine to the other without a flicker. Downstairs, nobody knows you exist. Win blinks, sees number two running, and sits down on the rewind bench.`,
        else: `Win sits down on the rewind bench and looks at her hands.` },
      `“I’ve done ten thousand changeovers,” she says. “I was trying to remember my mother’s front door. It’s gone. I can see the key, but not the door.” She takes the iron key out of her pocket and turns it over. “It’s the Wicks, isn’t it? I’m losing it, and I didn’t even know I had it.”`,
      `You tell her what Ada’s log says: that the Wicks comes back to the people who knew it, watching. You’ll have to stop the feature at the end of a reel and ask Mr Hale to let you show it.`,
      `“Watching,” Win says. “Forty-four years, and I’ve never once sat downstairs.”`
    ],
    choices: [
      { text: 'Ask Win to watch from the stalls tonight', to: 'D04', if: ge(16), set: { winPlace: 'stalls', changeover: 'none' }, ...cost(5) },
      { text: 'Ask Win to stay at the port beside you', to: 'D04', if: ge(16), set: { winPlace: 'box', changeover: 'none' }, ...cost(5) },
      { text: 'Check the Lantern’s gauge', to: 'F09', if: le(15), set: { changeover: 'none' } },
    ],
  },
  {
    id: 'D04', title: 'Mr Hale’s Office', era: 'palace', time: 'FINAL NIGHT · THE OFFICE',
    cast: ['player', 'hale'],
    imagePrompt: `Night in a cramped cinema manager's office off the foyer: a green safe, a 1979 wall calendar, a teapot, cloth bank bags and stacks of coins on the desk. Mr Hale in his velvet jacket stands up from the desk, buttoning it. The player stands in the doorway, seen from behind. Nobody else.`,
    text: [
      `Mr Hale’s office is a cupboard-sized room off the foyer, with a safe, a calendar from 1979 and a pot of tea gone the colour of a conker. He is counting the last night’s takings into bank bags when you knock.`,
      `You tell him as plainly as you can. You expect him to laugh. Instead he puts the money down.`,
      `“Ada Merriman ran the Saturday shows when I was a boy,” he says. “She’d stop the film halfway through and show us one of her painted slides, and tell us about some street or other. We used to groan.” He looks at the ceiling, toward the box. “She told me once that the Palladian had a cellar full of things the town forgot. I thought she was teasing.”`,
      `He stands and buttons his velvet jacket. “At the end of this reel I’ll go out front and say a few words. A short subject from the Palladian’s own archive. Then it’s your show.”`
    ],
    choices: [
      { text: 'Go to meet the minibus at the front doors', to: 'D05', if: residents },
      { text: 'Run back up to the box', to: 'F01', if: not(residents) },
    ],
  },
  {
    id: 'D05', title: 'Row F', era: 'palace',
    cast: ['player', 'dot', 'abel', 'pellows'],
    imagePrompt: `Rainy night seen through the glass doors of the Palladian's red-and-gold foyer: a small white minibus at the kerb outside. Inside, Dot in her usherette uniform offers her arm to Abel; the Pellow twins follow arm in arm in their cardigans. The player holds a door open, seen from behind. Win is not in this crop. No other people.`,
    text: [
      `The Highfield House minibus is pulling up outside the glass doors as you reach the foyer. Mrs Ferris helps Abel down the step; Ivy and May come after him, arm in arm. Dot Pryor takes their coats as if they were royalty and offers Abel her arm.`,
      { if: is('invitedInPerson'),
        text: `“Our projectionist,” Abel tells Dot, nodding at you, and Ivy waves.`,
        else: `You’ve never met them, but May knows your voice at once. “You’ll be the one who rang,” she says, and Ivy shakes your hand.` },
      { if: stalls,
        text: `Win comes down the circle stairs, still in her box cardigan. She looks at the three of them, and they look at her. “Have we met?” Ivy asks kindly. “I don’t think so,” Win says. They were neighbours for thirty-five years. None of them knows it.`,
        else: `Up at the little window at the back, Win is waiting by the port. The three of them don’t look up at it. Nobody ever does.` },
      { if: stalls,
        text: `Dot leads them down the aisle by torchlight to the empty seats in Row F, and Win sits down beside them.`,
        else: `Dot leads them down the aisle by torchlight to the empty seats in Row F.` },
    ],
    choices: [{ text: 'Run back up to the box', to: 'F01' }],
  },
  {
    id: 'F01', title: 'Ada’s Splicing Block', era: 'palace', time: 'FINAL NIGHT · THE LANTERN',
    cast: ['player', 'lantern', 'rolls'],
    imagePrompt: `Night inside the projection box, no weather. The player, seen from behind, stands at a bench beside the lit Lantern with a small brass splicing block and four short film rolls laid out next to four small round cans. A big modern projector stands threaded nearby, its lamp housing glowing hot. Win is not in this crop. Nobody else.`,
    text: [
      `Back in the box, *The Brass Moon* is running out the last minutes of its reel on number two. The Lantern’s gauge reads {{clock}}.`,
      { if: stalls,
        text: `Win’s place at the machines is empty; she is downstairs in the stalls. You’re on your own up here.`,
        else: `Win stands at the port with her hands folded, watching you work.` },
      `Ada’s splicing block is a little brass clamp with a blade. Join the four rolls end to end, and the Lantern can show them straight through. The cans stand where you left them, in the order they came off Ada’s shelf: Dipping Row, Mould Yard, Tallow Lane, Wick Street.`,
      `Number two, its powerful modern lamp hot and bright, will be free as soon as this reel ends. Next to it, the Lantern’s carbon light looks small and yellow.`
    ],
    choices: [
      { text: 'Splice them as they came off the shelf: Dipping Row, Mould Yard, Tallow Lane, Wick Street', to: 'F02', if: ge(21), set: { order: 'shelf' }, ...cost(10) },
      { text: 'Splice them Tallow Lane, Wick Street, Dipping Row, Mould Yard', to: 'F02', if: all(is('knowsRound'), ge(21)), set: { order: 'true' }, ...cost(10) },
      { text: 'Splice them Mould Yard, Dipping Row, Wick Street, Tallow Lane', to: 'F02', if: all(is('knowsRound'), ge(21)), set: { order: 'reverse' }, ...cost(10) },
      { text: 'Lace only Tallow Lane, the clearest roll', to: 'F02', set: { order: 'single' }, ...cost(5) },
      { text: 'Splice them in shelf order and show them on number two, where the light is stronger', to: 'E02' },
    ],
  },
  {
    id: 'F02', title: 'The Gate', era: 'palace',
    cast: ['player', 'lantern'],
    imagePrompt: `Night inside the projection box, no weather. Close view of the lit Lantern: film laced through its sprockets and gate, and a narrow empty brass slot open in front of the glowing lamphouse. The player's hands, seen from behind, rest on the machine; nothing is in the slot yet. Nobody else.`,
    text: [
      `You lace the film through the Lantern: over the top sprocket, down through the picture gate behind the lens, round the lower sprocket and onto the take-up reel. Ada’s machine is simple, the way a bicycle is simple.`,
      `Then you open the slide gate in front of the lamp, a narrow slot of blackened brass made to hold one palm-sized square of glass in the light.`,
      { if: is('lampGlass'), text: `The lamp glass from Depot Field lies wrapped in its cloth on the bench.` },
      { if: is('slide'), text: `Ada’s painted TALLOW LANE slide stands beside the gauge.` },
    ],
    choices: [
      { text: 'Slide the lamp glass into the gate', to: 'F03', if: is('lampGlass'), set: { anchor: 'glass' } },
      { text: 'Slide Ada’s painted slide into the gate', to: 'F03', if: is('slide'), set: { anchor: 'slide' } },
      { text: 'Leave the gate empty', to: 'F03', set: { anchor: 'none' } },
    ],
  },
  {
    id: 'F03', title: 'The Speed Lever', era: 'palace', time: 'FINAL NIGHT · THE SHORT SUBJECT',
    cast: ['player', 'lantern', 'hale'],
    imagePrompt: `Night, seen from inside the projection box through the open port glass beside the lit Lantern: far below, in the half-lit red-and-gold auditorium, Mr Hale in his velvet jacket stands alone in front of the closed stage curtain addressing an audience shown only as soft rows of heads. The player's hand, seen from behind, rests on the Lantern's brass speed lever. Nobody else in the box.`,
    text: [
      `Through the port you watch *The Brass Moon* reach the end of its reel. You close number two’s shutter. The screen goes dark and the house lights come up halfway. Mr Hale walks out in front of the curtain in his green velvet jacket.`,
      `“Ladies and gentlemen. Before we finish, a short subject from the Palladian’s own archive. Our projectionist’s choice.” He walks off, and the lights go down.`,
      { if: all(residents, stalls), text: `In the dimness you can just make out Win’s silver plait in Row F, between the three white heads from Highfield House.` },
      { if: all(residents, not(stalls)), text: `In the dimness you can just make out three white heads in Row F. Beside you, Win leans toward the port.` },
      { if: all(not(residents), stalls), text: `In the dimness you can just make out Win’s silver plait, alone in Row F.` },
      { if: all(not(residents), not(stalls)), text: `Beside you, Win leans toward the port.` },
      `You open the Lantern’s port shutter. The gauge reads {{clock}}. Your hand finds the speed lever beside the crank.`
    ],
    choices: [
      { text: 'Set the lever to twenty-four', to: 'F04', if: fullReel, set: { speed: '24' }, ...cost(5) },
      { text: 'Set the lever to sixteen', to: 'F07', if: all(muddled, ge(16)), set: { speed: '16' }, ...cost(15) },
      { text: 'Set the lever to sixteen', to: 'F05', if: all(is('order', 'true'), ge(16)), set: { speed: '16' }, ...cost(15) },
      { text: 'Set the lever to twenty-four', to: 'F08', if: is('order', 'single'), set: { speed: '24' }, ...cost(5) },
      { text: 'Set the lever to sixteen', to: 'F08', if: is('order', 'single'), set: { speed: '16' }, ...cost(5) },
    ],
  },
  {
    id: 'F04', title: 'Running Away', era: 'screen', time: 'FINAL NIGHT · THE SCREEN',
    cast: ['player', 'lantern'],
    imagePrompt: `Night, seen from the projection box over the player's shoulder past the lit Lantern and through the port: on the distant cinema screen, a silvery black-and-white old street scene smeared with motion blur, figures streaking like clockwork toys. Soft rows of audience heads below. Nobody else in the box.`,
    text: [
      `The Lantern’s light reaches the screen, and the Wicks appears. Then it runs. People scurry along the pavements like clockwork toys. Washing lines jerk. A cart whips past and is gone before you can see what it carried. Somebody in the circle laughs, and then lots of people do.`,
      { if: residents, text: `In Row F, nobody is laughing. Ivy Pellow has half risen from her seat, as if to catch a bus she has already missed.` },
      { if: stalls,
        text: `Win sits quite still in Row F, her head tilted as if she is listening for a fault.`,
        else: `“Too quick,” Win whispers beside you. “Nobody walked like that.”` },
      `The film is pouring onto the take-up reel at ninety feet a minute. The gauge reads {{clock}}.`
    ],
    choices: [
      { text: 'Let it run to the end', to: 'F05', if: is('order', 'true'), ...cost(5) },
      { text: 'Let it run to the end', to: 'F07', if: muddled, ...cost(5) },
      { text: 'Stop the Lantern, rewind and start again at sixteen', to: 'F05', if: all(is('order', 'true'), ge(21)), set: { speed: '16', rushed: true }, ...cost(20) },
      { text: 'Stop the Lantern, rewind and start again at sixteen', to: 'F07', if: all(muddled, ge(21)), set: { speed: '16', rushed: true }, ...cost(20) },
    ],
  },
  {
    id: 'F05', title: 'The Wicks', era: 'screen',
    cast: ['player', 'lantern'],
    imagePrompt: `Night, seen from the projection box over the player's shoulder past the lit Lantern and through the open port: on the distant cinema screen, a silvery black-and-white steep cobbled lane of terraced houses climbing to a small chapel, gas lamps along the kerb. Soft rows of audience heads below; no individual faces. Nobody else in the box.`,
    text: [
      { if: all(is('speed', '16'), is('rushed')), text: `The second time through, at sixteen frames a second, the Wicks walks onto the screen at its own pace.` },
      { if: all(is('speed', '16'), not(is('rushed'))), text: `At sixteen frames a second, the Wicks walks onto the screen at its own pace.` },
      { if: is('speed', '24'), text: `The Wicks goes past at twenty-four frames a second, like a view from a fast train.` },
      `Tallow Lane comes first, climbing to its chapel, the lamps coming on one by one. Then along Wick Street, with its shop blinds and washing lines; down Dipping Row between the wax sheds; and out into Mould Yard under the square chimney. It’s one walk from top to bottom, the way somebody once walked it every night with a pole.`,
      { if: is('anchor', 'glass'), text: `The Lantern’s light passes through the old lamp glass, and the picture has a warmth to it, a softness at the edges, like light through a window on a winter afternoon.` },
      { if: is('anchor', 'slide'), text: `Ada’s painted lane hangs faintly over the picture, like a reflection in a shop window, its colours too bright for the grey street underneath.` },
      { if: is('anchor', 'none'), text: `The picture is sharp and silver and somehow thin, like a photograph of a photograph.` },
      { if: residents, text: `In Row F, Abel Quarry is on his feet. “Tallow Lane!” he says, loud enough for the circle to hear. “That’s my first lamp!” Ivy and May are pointing at the screen and talking over each other.` },
      { if: all(stalls, is('speed', '16')), text: `In Row F, Win sits very straight, with her hand pressed over her mouth.` },
      { if: all(not(stalls), is('speed', '16')), text: `Beside you, Win has taken the key out of her pocket. “Four Tallow Lane,” she says. “Mam’s door. It was green.” She is crying and smiling at the same time.` },
      { if: all(stalls, is('speed', '24')), text: `In Row F, Win leans forward, as if she nearly knows what she’s looking at.` },
      { if: all(not(stalls), is('speed', '24')), text: `Beside you, Win has taken the key out of her pocket and is staring at it, as if she nearly knows.` },
      `On the screen, the girl with the plait gets up from her doorstep and walks out of the picture.`
    ],
    choices: [
      { text: 'Watch the last frame go through the gate', to: 'F06', if: all(is('anchor', 'glass'), is('speed', '16'), residents) },
      { text: 'Watch the last frame go through the gate', to: 'E10', if: all(is('anchor', 'glass'), is('speed', '16'), not(residents)) },
      { text: 'Watch the last frame go through the gate', to: 'E08', if: all(is('anchor', 'glass'), is('speed', '24')) },
      { text: 'Watch the last frame go through the gate', to: 'E04', if: not(is('anchor', 'glass')) },
    ],
  },
  {
    id: 'F06', title: 'Ten Minutes of Light', era: 'screen',
    cast: ['player', 'lantern', 'moths'],
    imagePrompt: `Night, seen from the projection box over the player's shoulder past the lit Lantern and through the port: the distant cinema screen is blank warm white, and hundreds of small pale-gold light-moths pour off it, swirling over soft dark rows of audience heads and rising toward a plaster dome. Nobody else in the box.`,
    text: [
      `The last frame of Mould Yard slides through the gate, the tail of the film flaps on the take-up reel, and the screen goes white: only the Lantern’s light, warm through the lamp glass.`,
      `Then the moths come out of it. Hundreds of them pour off the white screen and over the stalls, circling Row F, rising past the circle toward the dome and slipping out through every crack in the old building, into the town.`,
      `The gauge reads {{clock}}. Mr Hale’s voice comes up the speaking tube. “Lovely. Lights up, and let’s give them the end of *The Brass Moon*, shall we?” Below, people are already beginning to shift in their seats and look round for the lights.`
    ],
    choices: [
      { text: 'Keep the Lantern’s white light on the screen', to: 'E09', if: ge(10), ...cost(10) },
      { text: 'Keep the Lantern’s white light on the screen', to: 'E07', if: le(9), set: { lantern: 0 } },
      { text: 'Bring up the house lights and restart the feature', to: 'E07' },
    ],
  },
  {
    id: 'F07', title: 'Wrong Turnings', era: 'screen',
    cast: ['player', 'lantern'],
    imagePrompt: `Night, seen from the projection box over the player's shoulder past the lit Lantern and through the port: on the distant cinema screen, a silvery black-and-white cobbled yard with works gates and a tall square chimney, its edges jumping as if the picture had just cut from somewhere else. Soft rows of audience heads below. Nobody else in the box.`,
    text: [
      { if: all(is('speed', '16'), is('rushed')), text: `The second time through, at sixteen frames a second, the Wicks walks onto the screen at its own pace.` },
      { if: all(is('speed', '16'), not(is('rushed'))), text: `At sixteen frames a second, the Wicks walks onto the screen at its own pace.` },
      { if: is('speed', '24'), text: `The Wicks goes past at twenty-four frames a second, like a view from a fast train.` },
      { if: is('order', 'shelf'),
        text: `Dipping Row comes first: wax sheds and children. Then, with a jump, Mould Yard, its gates opening onto nothing. Then Tallow Lane, starting halfway up, so the chapel arrives out of nowhere. Then Wick Street, with the lamplighter lighting lamps along a street that leads nowhere you’ve seen.`,
        else: `Mould Yard comes first, chimney and works gate. Then Dipping Row, then Wick Street, then Tallow Lane climbing to its chapel last of all. At every join, the lamplighter finishes one street and steps into the far end of the next, as if he had walked through a wall.` },
      `Each street is clear. None of them leads into the next.`,
      { if: residents, text: `In Row F, Abel half rises from his seat, then sits down again. “That’s not — where’s the —” May shakes her head. “You can’t get there from there.”` },
      { if: not(stalls), text: `Beside you, Win frowns at the screen as if at a map held upside down.` },
    ],
    choices: [{ text: 'Watch it to the end', to: 'E03' }],
  },
  {
    id: 'F08', title: 'Tallow Lane Alone', era: 'screen',
    cast: ['player', 'lantern'],
    imagePrompt: `Night, seen from the projection box over the player's shoulder past the lit Lantern and through the port: on the distant cinema screen, a silvery black-and-white steep cobbled lane of terraced houses climbing to a small chapel, gas lamps along the kerb. Soft rows of audience heads below; no individual faces. Nobody else in the box.`,
    text: [
      { if: is('speed', '16'),
        text: `At sixteen frames a second, Tallow Lane walks onto the screen at its own pace.`,
        else: `At twenty-four frames a second, Tallow Lane goes by at a trot.` },
      `Only Tallow Lane: the steep terraces, the gas lamps, the chapel at the top and the girl with the plait on the step of number 4. Then the tail of the roll flaps on the take-up reel, and it’s over: a few minutes of a place that had four streets.`,
      { if: is('anchor', 'glass'), text: `The Lantern’s light passes through the old lamp glass, and the picture has a warmth to it, a softness at the edges, like light through a window on a winter afternoon.` },
      { if: is('anchor', 'slide'), text: `Ada’s painted lane hangs faintly over the picture, like a reflection in a shop window, its colours too bright for the grey street underneath.` },
      { if: is('anchor', 'none'), text: `The picture is sharp and silver and somehow thin, like a photograph of a photograph.` },
      { if: residents, text: `In Row F, the Pellow twins have stood up. “Tallow Lane!” says Ivy. “We had Sunday school in that chapel,” says May. Then, puzzled: “Weren’t there more streets than that?”` },
      { if: stalls,
        text: `Win sits in Row F with the iron key held against her chest.`,
        else: `Beside you, Win holds the iron key against her chest.` },
    ],
    choices: [
      { text: 'Close the Lantern’s port', to: 'E06', if: is('anchor', 'glass') },
      { text: 'Close the Lantern’s port', to: 'E04', if: not(is('anchor', 'glass')) },
    ],
  },
  {
    id: 'F09', title: 'Guttering', era: 'palace',
    cast: ['player', 'win', 'lantern'],
    imagePrompt: `Night inside the projection box, no weather. The Lantern's lamphouse glows a weak dull orange; its brass gauge needle is near the bottom. Win stands beside the player, seen from behind, and rests her hand over the player's hand on the crank. Four small round film cans wait on the bench, unopened. Only these two people.`,
    text: [
      `You look at the Lantern’s gauge, and your stomach drops. The pointer is nearly at the bottom: {{clock}}. The carbons have burned down to stubs, and their light has turned the colour of weak tea.`,
      `You work it out with Win’s sums. Fetching Mr Hale, splicing and showing even one roll would take longer than the carbons have left.`,
      `Win puts her hand over yours on the crank.`
    ],
    choices: [{ text: 'Watch the Lantern go out', to: 'E05', set: { lantern: 0 } }],
  },

  // ── Endings ────────────────────────────────────────────────
  {
    id: 'E01', title: 'A Trick of the Light', era: 'palace', ending: { kind: 'bad' },
    cast: ['player', 'win', 'lantern'],
    imagePrompt: `Just after midnight inside the projection box, no weather. The Lantern stands cold and dark in its corner, its floor hatch bolted shut. Win, in her cardigan, sets an old iron key on a loop of string down on a wooden rewind bench and turns away toward the door. The player, seen from behind, watches. Only these two people.`,
    text: [
      `You let the hatch fall shut and shoot its bolt. A projection box is no place for open flames and loose film, and the Lantern is burning by itself in a room full of both.`,
      `There’s no way to put it out. Its carbons burn on behind you through every reel of *The Brass Moon* while you and Win do the changeovers. Some time during the last reel the Lantern goes dark, and the moths stop circling.`,
      `At midnight Mr Hale hands the keys to Starlite Video. Win puts on her coat, finds the iron key in her pocket, frowns at it and leaves it on the rewind bench. “Can’t think what it opens,” she says. “Can’t think why I kept it.”`,
      `On Monday the scrap man takes the Lantern. Behind the bus depot, the chimney stands alone in its field. Nobody in Saltbeck can tell you why it’s there.`
    ],
  },
  {
    id: 'E02', title: 'Too Bright', era: 'palace', ending: { kind: 'bad' },
    cast: ['player', 'lantern'],
    imagePrompt: `Night inside the projection box, no weather. The player, seen from behind, holds a length of completely clear, blank film up to a work lamp beside a big modern projector; a faint drift of gold dust hangs in the air. The Lantern still glows in the corner. Win is not in this crop. Nobody else.`,
    text: [
      `You splice the rolls in shelf order and lace them on number two as soon as the feature’s reel runs out. Its modern lamp is ten times brighter than the Lantern. If anything can show a faded film, this can.`,
      `You open the shutter. For a moment, Dipping Row blazes up on the screen, sharper than anything the Lantern could manage. Then the picture lifts off the film as fine gold dust and blows away, frame by frame, and the screen shows only white.`,
      `When you rewind it, the film is as clear as a window from end to end. Ada’s log had said a reel must be shown through the Lantern. Behind you, its carbons burn on to nothing.`,
      { if: residents, text: `In Row F, three old people from Highfield House sit politely through a minute of blank screen and then ask Dot when the proper film is starting again.` },
      `*The Brass Moon* finishes, and at midnight Mr Hale hands over the keys. Win leaves her iron key on the rewind bench. Nobody in Saltbeck will remember the Wicks again.`
    ],
  },
  {
    id: 'E03', title: 'A Muddle of Streets', era: 'palace', ending: { kind: 'bad' },
    cast: ['player', 'win'],
    imagePrompt: `Late night inside the projection box after the show, no weather. The Lantern is dark. Win sits on the rewind bench with an old iron key on a loop of string in her lap, frowning as she traces invisible lines on her palm with a finger. The player, seen from behind, sits beside her. Only these two people.`,
    text: [
      `When the last splice clatters through the gate, the screen goes white, and the moths pour off it over the stalls. They circle for a moment, then scatter, bumping into one another like moths round a porch light, and drift away into the dark corners of the auditorium.`,
      { if: stalls,
        text: `Win climbs back up to the box when the house lights come on and sits down on the rewind bench. “I remember it,” she says slowly. “I think. There’s a chapel, and a yard with a chimney, and our door. Only I can’t get from one to the other. Every time I try to walk home, I end up somewhere else.”`,
        else: `Win sits down on the rewind bench beside you. “I remember it,” she says slowly. “I think. There’s a chapel, and a yard with a chimney, and our door. Only I can’t get from one to the other. Every time I try to walk home, I end up somewhere else.”` },
      { if: residents, text: `The Pellow twins argue all the way to the minibus about which street the chapel was on. Abel says nothing at all.` },
      `By morning, Win says it’s like a dream she can’t put in order. By the end of the week she has stopped trying. The Wicks came back as a muddle nobody could walk through, just as Ada warned, and the Lantern will never light again.`
    ],
  },
  {
    id: 'E04', title: 'By Morning', era: 'town', ending: { kind: 'bad' },
    cast: ['win'],
    imagePrompt: `Grey Sunday morning after rain, indoors at a small kitchen table by a window in a terraced house. Win, in her cardigan, sits alone with a cup of tea, looking in bewilderment at an open notebook filled with her own handwriting; an old iron key on a loop of string lies beside it. Nobody else.`,
    text: [
      { if: is('order', 'single'),
        text: `For one night, Tallow Lane comes back. Win goes home and sits up until three in the morning, writing down everything she can remember: the chapel, the lamps, her mother’s green door.`,
        else: `For one night, the Wicks comes back. Win goes home and sits up until three in the morning, writing down everything she can remember: the chapel, the lamps, the wax sheds, her mother’s green door.` },
      `She telephones you at breakfast. “I’ve a notebook here in my own handwriting,” she says, “all about a place called the Wicks. I’ve no idea what any of it means.”`,
      { if: is('anchor', 'slide'),
        text: `Ada’s painted lane had never been there. It was only a picture of a place, and her log had said a picture would not hold.`,
        else: `Nothing that had really been there lit the picture, and by morning the Wicks had gone back into the dark, just as Ada’s log said it would.` },
      { if: residents, text: `Up at Highfield House, Mrs Ferris finds a scrap of paper on the breakfast table with TALLOW LANE written on it in May Pellow’s handwriting. Neither twin can say why.` },
      `The Lantern will never light again.`
    ],
  },
  {
    id: 'E05', title: 'Cold Lamp', era: 'palace', ending: { kind: 'bad' },
    cast: ['player', 'win', 'lantern', 'moths'],
    imagePrompt: `Night inside the projection box, no weather. The Lantern is dark and cold. A few dim pale-gold light-moths rest on four small closed round film cans on the bench, their glow fading. Win and the player, seen from behind, stand together looking at the dark machine. Only these two people.`,
    text: [
      `The carbons burn down to nothing. The light in the lamphouse goes orange, then red, then out, and the last moths settle on the four cans and fold their wings.`,
      `Win stays beside you until the Lantern is cold to the touch.`,
      `*The Brass Moon* finishes to warm applause. At midnight Mr Hale hands the keys to Starlite Video. On Monday the scrap man takes the Lantern, and Win’s iron key goes into a drawer with the batteries and the string.`,
      `A week later you crank the rolls through Ada’s viewer one more time. The pictures are still there, faint and grey: a lane, a street, a row of sheds, a yard. Nobody you show them to has any idea where they are.`
    ],
  },
  {
    id: 'E06', title: 'One Street', era: 'town', ending: { kind: 'good' },
    cast: ['win'],
    imagePrompt: `Bright cold November morning outside a modern terraced house in Saltbeck. Win, in her cardigan, hangs an old iron key on a loop of string from a small nail beside her own front door, smiling quietly. Nobody else.`,
    text: [
      `Tallow Lane stays.`,
      `Win remembers number 4, the green door and her mother’s voice calling her in when the lamps came on. She remembers the chapel at the top of the lane and the lamplighter coming up it every evening with his pole.`,
      { if: residents, text: `Up at Highfield House, the Pellow twins remember Sunday school in the chapel, and Abel remembers lighting the first lamps of his round every night for thirty years.` },
      `When you closed the Lantern’s port, the few moths on the screen went out with the light. The rest of the Wicks is gone. Win knows there were other streets below the lane, but when she tries to walk down into them, there’s nothing there. Four streets went into Ada’s archive, and one came back.`,
      `At midnight Mr Hale hands over the keys. Win’s iron key opens nothing now, because the door has gone, but she knows whose door it was. She hangs it on a nail beside her own front door.`
    ],
  },
  {
    id: 'E07', title: 'The House Remembers', era: 'town', ending: { kind: 'good' },
    cast: ['win', 'abel', 'pellows'],
    imagePrompt: `Dry winter Sunday afternoon in the overgrown field behind the bus depot, the tall square brick chimney behind them. Win, Abel and the Pellow twins, in their usual clothes, stand together on a line of old kerbstones while Win points uphill and Abel nods. The long lamplighter's pole is not here. Nobody else.`,
    text: [
      { if: le(0),
        text: `You keep the white light on the screen as long as the carbons last. It isn’t long enough. The lamp sputters out with moths still circling the dome, and the ones nearest the doors fade into the dark.`,
        else: `You bring up the house lights. The moths still circling the dome flicker and fade like sparks in daylight, and *The Brass Moon* starts again where it stopped.` },
      `The ones who were watching remember. Win remembers. So do Abel Quarry and Ivy and May Pellow: the lamps, the wax sheds, the chimney, every door. They find each other at the end of the show and talk until Mrs Ferris has to drive them home.`,
      `Nobody else in Saltbeck remembers anything. The moths never reached them. So the four of them start telling it the slow way. On Sunday afternoons they walk Depot Field with anyone who will come, and Win draws a map for the library from memory.`,
      `People are polite about it. Some are more than polite. It isn’t the same as remembering, but it’s a start.`
    ],
  },
  {
    id: 'E08', title: 'At a Run', era: 'town', ending: { kind: 'good' },
    cast: ['win'],
    imagePrompt: `Dry, bright November morning in the overgrown field behind the bus depot, with the tall square brick chimney rising behind. Win, in her cardigan, stands on a line of old cobbles pointing uphill, her face thoughtful. Nobody else.`,
    text: [
      `The Wicks comes back, but at a run.`,
      `Win remembers the chapel at the top of Tallow Lane, the wax sheds and the chimney, and the order you walked them in. She remembers a green door. She can’t remember her mother’s face on the step, only that someone was always there.`,
      { if: residents, text: `Up at Highfield House, Abel remembers his round, but not the people he said goodnight to along it. Ivy and May remember being children somewhere with a chapel, very quickly.` },
      `The moths that came off the screen were thin and quick, and they were gone before they reached the doors. It’s like a place seen from a bus window: real, and gone before you can look properly. But it’s real. Win takes you to Depot Field on the Monday and walks you down it street by street, pointing at the places where things stood.`,
      `“That’s ours,” she says. “Whatever else, that’s ours again.”`
    ],
  },
  {
    id: 'E09', title: 'Keep the Light', era: 'town', ending: { kind: 'good', best: true },
    cast: ['player', 'win', 'abel', 'pellows'],
    imagePrompt: `Dry, bright spring morning in the field behind the bus depot, the tall square brick chimney rising behind a new plain wooden sign on the fence (no legible words). Win, Abel and the Pellow twins, in their usual clothes, walk slowly up a line of old cobbles together, Win holding an old iron key on a loop of string. The player, seen from behind, walks a step behind them. The long lamplighter's pole is not here. Nobody else.`,
    text: [
      `You keep the white light on the screen. Mr Hale goes quiet on the speaking tube. Downstairs, nobody moves. For ten minutes, eight hundred people sit in the dark looking at an empty white screen while the moths go out through the dome and the doors into Saltbeck.`,
      { if: le(0),
        text: `The carbons burn down to their last half-inch as the final moth leaves, and the Lantern goes out by itself, as if it had been waiting.`,
        else: `When the last moth has gone, you switch off the Lantern with {{clock}} still showing on its gauge. Ada wrote that it would never light again. That’s all right. It has done its job.` },
      `All over town, people who once knew the Wicks remember it. In the depot canteen a bus driver puts down his tea and says, “My gran lived on Dipping Row.” A librarian locking up remembers the 1949 street map in the reference room and goes back to look. Four streets are marked behind the bus depot. They were always there. Nobody had noticed.`,
      { if: stalls,
        text: `When you get down to Row F, Win is laughing between Abel and the Pellow twins. “Four Tallow Lane,” she tells them. “Green door. Mam used to shout me in when the lamps came on.” “I remember you,” Abel says. “You used to try and swing on my pole.”`,
        else: `Win runs down the circle stairs to Row F, and you follow. “Four Tallow Lane,” she tells Abel and the Pellow twins. “Green door. Mam used to shout me in when the lamps came on.” “I remember you,” Abel says. “You used to try and swing on my pole.”` },
      `The Palladian still closes. At midnight Mr Hale hands the keys to Starlite Video. But on Monday the scrap man finds the Lantern already gone: Mr Hale has given it, with Ada’s log and every can in the archive, to the town library. The Lantern will never light again, so the other reels will never go home, but they will be kept in the cool and the dark. Ada would have called that the next best thing.`,
      `In the spring, the council puts a new sign on the fence behind the bus depot: THE WICKS. On the first fine Sunday, Win, Abel and the twins walk the round from the top of Tallow Lane down to the chimney, Abel stopping wherever a lamp once stood. You walk a step behind them. Nobody turns round to look at you. That’s how you know you did it right.`,
      { if: is('readAda'), text: `It isn’t a small job, Ada wrote. It’s the whole job.` },
    ],
  },
  {
    id: 'E10', title: 'Win’s Street', era: 'town', ending: { kind: 'good' },
    cast: ['win'],
    imagePrompt: `Dry, cold winter afternoon in a small sitting room in a terraced house. Win, in her cardigan, sits at a table under a window, drawing a careful hand map of four streets on a large sheet of paper; an old iron key on a loop of string lies on the corner of the sheet. Nobody else.`,
    text: [
      `The Wicks comes back to Win: all of it. Tallow Lane and its chapel, Wick Street, Dipping Row, Mould Yard, the green door of number 4 and her mother on the step.`,
      `Nobody else who knew it was watching. The moths circle her once, then drift back to the Lantern’s chimney and fade. Ada’s fifth rule needed two who held it, watching together, and there was only Win.`,
      `She spends the winter writing it down and drawing it, street by street. In January she visits Highfield House and tells Abel Quarry and the Pellow twins about a lamplighter and two little girls at Sunday school. They listen politely. “What a lovely story,” says Ivy.`,
      `It isn’t a story. Win knows exactly what her key opened now. She keeps it on her own key ring, where she can feel it.`
    ],
  },
];

const pages = raw.map((page): Page => page.ending
  ? { ...page, onEnter: { ...page.onEnter, set: { ...page.onEnter?.set, running: false } } }
  : page);

const story: Story = {
  id: 'lantern-archive', revision: 1,
  title: 'The Lantern Archive', subtitle: 'A picture-palace mystery',
  blurb: 'On the last night of Saltbeck’s old picture palace, an ancient projector lights itself and moths made of light pour into a hatch nobody has opened in thirty years. Somewhere below the stage, a whole neighbourhood is being forgotten.',
  start: 'A01',
  eras: {
    palace: { label: 'The Palladian' },
    archive: { label: 'The Lantern Archive' },
    town: { label: 'Saltbeck' },
    screen: { label: 'On the Screen' },
  },
  flags: {
    lantern: { default: 105 },
    difficulty: { default: 'medium', values: ['easy', 'medium', 'hard'] },
    running: { default: false },
    toldWin: { default: false },
    readAda: { default: false },
    cleaned: { default: false },
    hubSeen: { default: false },
    knowsRound: { default: false },
    residentsComing: { default: false },
    invitedInPerson: { default: false },
    lampGlass: { default: false },
    slide: { default: false },
    changeover: { default: 'none', values: ['none', 'clean', 'restart'] },
    winPlace: { default: 'box', values: ['box', 'stalls'] },
    order: { default: 'none', values: ['none', 'true', 'shelf', 'reverse', 'single'] },
    anchor: { default: 'none', values: ['none', 'glass', 'slide'] },
    speed: { default: 'none', values: ['none', '16', '24'] },
    rushed: { default: false },
  },
  ui: { header: 'basic', transition: 'fade' },
  difficulties: {
    easy: { set: { difficulty: 'easy', lantern: 120 } },
    medium: { set: { difficulty: 'medium', lantern: 105 } },
    hard: { set: { difficulty: 'hard', lantern: 95 } },
  },
  difficultyNotes: {
    easy: 'Long carbons, time for a wrong turning or two, and unlimited undo.',
    medium: 'The best ending survives one wasted ten minutes. Undo your last 2 choices.',
    hard: 'Just enough carbon for a perfect night. No undo.',
  },
  // Best: archive 25 + Highfield House 15 + invitation 5 + Depot Field 10 + Hale 5
  // + splice 10 + showing at sixteen 15 + ten minutes of light 10 = 95. Hard exact.
  clock: {
    flag: 'lantern', label: 'LANTERN', format: 'time',
    visibleWhen: is('running'), allowExpiredOn: [],
  },
  art: {
    stylePrefix: `Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces, 3:2 landscape. Family-friendly, bittersweet and wondrous. Northern English town of Saltbeck, October 1986, unless a scene states otherwise. Only the listed characters appear; Win, Dot, Mr Hale, Abel and the Pellow twins appear only when listed. Crowds are anonymous soft shapes with no distinct faces. No real people's likenesses, no famous films, posters, logos, brand names or legible text. Every scene states location, time of day and weather or that it is indoors. Keep each character's clothing word-for-word identical to the cast description. The player's face is never shown. Pale-gold light-moths are small, gentle and luminous, never insects in close-up and never frightening. Film shown on screens is silvery black and white. Nothing violent or dangerous; mishaps are gentle and comic.`,
    cast: {
      player: `THE PLAYER: an unnamed, gender-neutral seventeen-year-old projectionist, always seen from behind or over the shoulder with the face hidden, with short sandy-brown hair, in a navy wool crew-neck jumper with the sleeves pushed up, charcoal work trousers and black lace-up boots. No bag, badge or name tag.`,
      win: `WIN ALDOUS: a tall, upright seventy-year-old woman with pale skin, a long single silver plait over one shoulder and half-moon glasses on a black cord, in a mustard-yellow cardigan over a white blouse, a brown tweed skirt and brown brogues.`,
      dot: `DOT PRYOR: a cheerful, round-faced usherette in her fifties with warm brown skin and short curly black hair, in a red usherette jacket with gold piping and brass buttons, a black skirt and black flat shoes; a sweet tray hangs from a strap round her neck.`,
      hale: `MR HALE: a stout sixty-one-year-old man with light-brown skin, a bald head and a neat grey moustache, in a bottle-green velvet dinner jacket, a white shirt, a black bow tie and black trousers.`,
      abel: `ABEL QUARRY: a thin ninety-year-old man with pale weathered skin and a short white beard, in a brown cable-knit cardigan over a checked flannel shirt, grey trousers and brown leather shoes.`,
      pellows: `IVY AND MAY PELLOW: identical seventy-four-year-old twin sisters with pale skin and short permed white hair. Ivy wears a lilac cardigan; May wears a sage-green cardigan; both wear grey pleated skirts and black shoes.`,
      lantern: `THE LANTERN: Ada Merriman's 1911 projector, a waist-high black-japanned machine with brass fittings and rivets, a tall chimneyed lamphouse with a small round ruby-glass peephole, a narrow brass slide gate in front of the lamp, a side crank handle, a short brass speed lever beside the crank, and a round brass gauge on the lamphouse side with a single pointer. Lit, the lamphouse glows warm white.`,
      moths: `LIGHT-MOTHS: small, gentle moths made of pale-gold light, softly glowing, with faint film-frame patterns on their wings.`,
      rolls: `THE WICKS ROLLS: four small, flat round tin film cans, each with a small cream paper label in brown looping ink (no legible words), holding short rolls of black-and-white 35mm film.`,
      pole: `ABEL'S POLE: a long, smooth, worn wooden lamplighter's pole taller than an adult, with a curved brass hook at the top and a small rectangular brass plate near the grip.`,
      lampglass: `THE LAMP GLASS: a palm-sized square pane of clouded old glass with a tiny etched flame in one corner.`,
      slide: `ADA'S SLIDE: a palm-sized square glass magic-lantern slide framed in brown card, hand-painted in bright colours with a steep terraced lane, gas lamps and a small chapel at the top.`,
    },
  },
  pages,
};

export default story;
