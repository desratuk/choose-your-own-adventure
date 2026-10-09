import type { Cond, Effects, Page, Story } from '../../src/engine/types';

const is = (flag: string, value: string | boolean = true): Cond => ({ flag, is: value });
const all = (...conds: Cond[]): Cond => ({ all: conds });
const ge = (n: number): Cond => ({ flag: 'margin', gte: n });
const le = (n: number): Cond => ({ flag: 'margin', lte: n });

const raw: Page[] = [
  {
    "id": "R01",
    "title": "Last Job of the Night",
    "era": "streets",
    "cast": [
      "player",
      "dolores"
    ],
    "imagePrompt": "A cramped dispatch office above a bagel shop on a rainy night: a city map on the wall, a CB radio and a dirty coffee machine on a cluttered desk. Dolores, phone in one hand, holds out a yellow job slip to the player, who is seen from behind in the silver helmet, mustard-yellow windbreaker and messenger bag, dripping on the mat. Rain streaks the window.",
    "text": [
      "At ten past seven on a wet Friday in November, you bring your bicycle up the steps of Quickfoot Couriers and discover that your socks have become part of your shoes. You’re seventeen. You’ve carried contracts, film reels and one birthday cake through Lower Manhattan today. The cake tipped better than the lawyers.",
      "Dolores Vance, your dispatcher, covers the telephone with her hand. “One more. Pell’s stamp shop to fourteen North Moore. Double time.” She watches you look at the rain. “You can say no.”",
      "Fourteen North Moore is the Ghostbusters’ firehouse. They’re the people New York calls when something walks through a wall that ought to have used a door. Four people, a lot of electrical equipment, and a receptionist who knows your invoice numbers by heart.",
      "“Janine says it’s a sealed brass parcel,” Dolores continues. “Their scientist checked it at Pell’s this afternoon. Cold to the touch, safe to carry. Don’t open it. Don’t stick it in a sorting machine. Get a signature.”",
      "That last part is your job. Plenty of adults think a courier is a pair of legs with a bag. You know how much can go wrong in the distance between an address and the person who actually needs what you’re carrying.",
      "Dolores puts a yellow slip beside the radio. Rain clicks on your dented silver helmet. One more job would buy a new rear brake cable. You picture the signature, the ride home, the moment you can finally peel your socks off. Your hand is already on the slip."
    ],
    "choices": [
      {
        "text": "Take the slip and ride to Pell’s",
        "to": "R02"
      },
      {
        "text": "Clock out for the night",
        "to": "E01"
      }
    ],
    "time": "FRI NOV 15 · 7:10 PM"
  },
  {
    "id": "R02",
    "title": "Pell & Sons",
    "era": "streets",
    "cast": [
      "player",
      "pell",
      "canister"
    ],
    "imagePrompt": "Inside a narrow old stamp shop at night: glass cases of tiny framed stamps and a big yellowed engraved map on the wall behind the counter. Mr. Pell, in his cardigan and half-moon glasses, holds out a brass canister with a round dial tag taped to its side. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, stands at the counter. Rain on the shop window.",
    "text": [
      "At twenty-five to eight, Mr. Pell locks the stamp-shop door behind you. He is a stooped man in a brown cardigan, wearing two pairs of glasses: one on his nose and one he’s looking for.",
      "On the counter lies a brass cylinder the size of a thermos. Grey felt rings cushion its ends. THE PNEUMATIC MAIL CO. is stamped into a plate, with ST. 9 beneath. A paper seal around the lid bears a date: 15 NOV 1898. The rest is under a hard crust of soot.",
      "“Eighty-seven years,” says Pell. “Even for the post, that’s unusual.” He found it behind a fallen cellar wall. Old mail travelled through pipes in carriers like this, pushed by air. Since he pulled it free, someone has been sorting his stock through the glass.",
      "A round dial is taped beside the plate. GRID LOAD, it says: {{clock}}. “Dr. Spengler’s receiver,” Pell explains. “It reports the strain on their ghost-storage machinery. He wanted a reading beside the parcel as well as at his end. It doesn’t do anything to ghosts. He was quite firm about that.”",
      "Pell’s wall map is an old tube survey, its lower corner eaten by damp. Station Nine is somewhere beyond the missing fold. A service passage still follows the pipe out of his cellar.",
      "He signs your collection slip and helps settle the carrier upright in your bag. “North Moore Street. Janine’s expecting it.” Then, embarrassed: “If anyone asks for it on the way, please get their name.”"
    ],
    "choices": [
      {
        "text": "Carry the parcel out to your bicycle",
        "to": "R03"
      }
    ],
    "time": "FRI NOV 15 · 7:35 PM",
    "onEnter": {
      "set": {
        "running": true
      }
    }
  },
  {
    "id": "R03",
    "title": "The Cold Spot",
    "era": "streets",
    "cast": [
      "player",
      "clerks"
    ],
    "imagePrompt": "A narrow wet cobbled lane at night between old brick warehouses. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, straddles a bicycle with a messenger bag across the back. Three pale see-through ghost clerks in grey vests, sleeve garters and green eyeshades stand in a line across the street, pointing at the bag. A flickering streetlamp and falling rain. No flashlight or Ghostbusters.",
    "text": [
      "Twenty yards along Staple Street, three grey figures step out of a warehouse wall. They wear sleeve garters, green eyeshades and leather satchels. Their shoes stop an inch above the wet cobbles.",
      "The foremost clerk gestures at your bag. You lift your delivery slip. He looks at the empty signature box, pats every pocket, and turns helplessly to his colleagues. None has a pen that stays solid.",
      "All three begin tapping their heels in precisely the same rhythm. Inside your bag the brass carrier answers. The pay phone rings in its empty booth. The dial climbs to {{clock}}; the ringing stops before you reach it.",
      "You wheel the bike to the pay phone on the corner and call the firehouse. Janine Melnitz answers before the second ring. When you describe the tapping, she stops chewing.",
      "“Twelve postal ghosts came in from separate jobs this week,” she says. “They’ve just started doing that inside our containment grid. That’s the electrical vault downstairs. One of them wound a stopped pocket watch through three intake interviews. Eleven-twenty, every time.”",
      "Janine phones Egon at his current job and calls the booth back. The disturbed tube network is calling the twelve captives to work. Their attempts to leave are straining the grid; the dial only reports the strain. “Egon thought we had one haunted object,” she says. “Apparently we have a conversation.”",
      "“One equipment rule for your notes,” Janine adds. “A controlled release needs ten points of spare capacity. That means ninety percent load or less when we open the hatch. At a hundred, the protective breakers cut out. And keep checking the dial: getting here uses time too.” You write 90 beside her number before the rain can wash the ink away.",
      "“The delivery offer stands,” Janine says. “I can take responsibility for it here. If you find an address or a name on your way, write it down. We need facts more than we need another full box.” When you hang up, the three clerks have drifted off into the rain."
    ],
    "choices": [
      {
        "text": "Check your options under the corner awning",
        "to": "R04"
      }
    ],
    "onEnter": {
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "R04",
    "title": "Staple Street Corner",
    "era": "streets",
    "cast": [
      "player"
    ],
    "imagePrompt": "A rainy Tribeca street corner at night under the awning of a shuttered dry cleaner. The player, seen from behind in the silver helmet and mustard-yellow windbreaker with the messenger bag, stands with a bicycle and looks out at the wet street, where a sodium streetlamp glows orange. Alone, nobody else is here.",
    "text": [
      "Under the dry cleaner’s awning on Staple Street, you check the parcel straps and shake rain from your sleeves. Your bicycle leans against the window beside a sign promising SAME-DAY SERVICE.",
      "The original address is still North Moore Street. But ST. 9 could also be an old postal station, and the fire crews keep records of buildings the city has forgotten. Across the street, the Blue Plate Diner has a late-shift mail carrier’s cap hanging above the counter. Pell’s pipe offers a more direct, less comfortable lead.",
      {
        "if": {
          "flag": "knowsSite",
          "is": true
        },
        "text": "Your notes now put Station Nine beneath the Sedgewick Hotel on Park Row. You know the building from your rounds."
      },
      {
        "if": {
          "flag": "copyRule",
          "is": true
        },
        "text": "The delivery procedure you copied is tucked safely inside your job book."
      },
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "The borrowed ghost trap is shut and unused, strapped behind your messenger bag."
      },
      "The receiver reads {{clock}}. Each stop gives the captive clerks more time to pull against the grid. You can spend that time finding out what they need, or put the job into the Ghostbusters’ hands."
    ],
    "choices": [
      {
        "text": "Make the commissioned delivery to the firehouse",
        "to": "F01",
        "if": {
          "not": {
            "flag": "visitedFirehouse",
            "is": true
          }
        }
      },
      {
        "text": "Return to the firehouse and work with the team",
        "to": "F04",
        "if": {
          "flag": "visitedFirehouse",
          "is": true
        }
      },
      {
        "text": "Ask at the post office about obsolete mail",
        "to": "R05",
        "if": {
          "not": {
            "flag": "visitedPost",
            "is": true
          }
        }
      },
      {
        "text": "Ask Engine Nine for its old building records",
        "to": "R06",
        "if": {
          "not": {
            "flag": "visitedEngine",
            "is": true
          }
        }
      },
      {
        "text": "Try the retired mail carrier at the diner",
        "to": "R07",
        "if": {
          "not": {
            "flag": "visitedDiner",
            "is": true
          }
        }
      },
      {
        "text": "Take the parcel to the Sedgewick",
        "to": "S01",
        "if": {
          "flag": "knowsSite",
          "is": true
        }
      },
      {
        "text": "Follow the old pipe from Pell’s cellar",
        "to": "T01",
        "if": {
          "not": {
            "flag": "visitedTunnel",
            "is": true
          }
        }
      }
    ],
    "time": "FRI NOV 15 · EVENING"
  },
  {
    "id": "R05",
    "title": "Church Street Station",
    "era": "streets",
    "cast": [
      "player",
      "clerks",
      "canister"
    ],
    "imagePrompt": "The brightly lit lobby of a neighborhood post office at night: a high ceiling, a long counter and a brass night-drop slot under a wall clock. A sleepy clerk in a blue postal sweater with half a sandwich in his hand looks at a brass canister on the counter. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, stands in front of the counter. Two pale grey ghost clerks peek out of the sorting-room wall behind him.",
    "text": [
      "The Church Street post office is still open, though the man behind the counter has built a small fort out of CLOSED signs. He studies the brass carrier over a sandwich. Two ghost clerks peer out of the sorting-room wall. He shifts his sandwich away from them without comment.",
      "“Obsolete address,” he says. “Takes longer.” You put your bike-lock key on the counter so you won’t leave without the parcel. Waiting while someone checks the back room is a large part of courier work.",
      "He returns with a route book. Station Nine was the Park Row Annex; the Sedgewick Hotel now stands above it. A little drawing shows incoming mail rising through the UP bank into a receipt tray. DOWN sends undelivered items around the return circuit.",
      "On the facing page, a supervisor has underlined a rule: a closure notice may be served to absent staff by a dated, certified copy bearing each recipient’s full name. The station’s receipt stays open until all copies are acknowledged. You copy the wording into your job book.",
      "“Can’t sign for someone else’s last day,” the postal worker says. “Even management had to admit that.”",
      "The dial has reached {{clock}} during the search. Beneath the counter is a night-drop slot. The worker offers an official alternative: take a lost-mail receipt now, and let the depot trace the carrier tomorrow. It is a legitimate service. It is also tomorrow."
    ],
    "choices": [
      {
        "text": "Keep the original and your copied instructions",
        "to": "R04"
      },
      {
        "text": "Accept a lost-mail receipt and surrender the carrier for tomorrow’s tracing",
        "to": "E04"
      }
    ],
    "onEnter": {
      "set": {
        "visitedPost": true,
        "knowsSite": true,
        "copyRule": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "R06",
    "title": "Engine Company 9",
    "era": "streets",
    "cast": [
      "player",
      "canister"
    ],
    "imagePrompt": "A red-brick city fire station at night with its big doors open and a gleaming red fire engine inside. A broad, mustached firefighter lieutenant in a navy uniform, interrupted in the middle of a card game, studies a brass canister held by the player, who is seen from behind in the silver helmet and mustard-yellow windbreaker. A second firefighter at the card table looks on. Rain outside.",
    "text": [
      "Engine Nine’s doors stand open on Great Jones Street. You wheel your bike past a gleaming fire engine and interrupt a card game. A mustached lieutenant studies the carrier, then the address slip.",
      "“Not one of ours,” says Lieutenant Gallo. “But if there’s a brass pipe involved, we’ll have a drawing. We have drawings of pipes that were removed before my grandfather was born.”",
      "He brings out the fire-inspection plans. Station Nine’s surviving tube chamber is under the Sedgewick on Park Row. An old closure date is written beside it: November 1898. On a recent inspection, someone has added BELL SOUNDS 11:20 P.M.; NO LIVE AIR SUPPLY FOUND.",
      "Gallo puts your finger on a small latch beside the chamber’s wheel. “Couriers know loading doors, right? This works the same way. Take the weight off the catch before you turn it. Don’t wrench a hundred-year-old fitting.” You sketch it.",
      "Gallo stamps the copy with his inspection reference and marks the hotel’s authorised cellar route. “Show the manager this. Saves him arguing with a hundred years of building plans.” The trip and search bring the dial to {{clock}}. Gallo holds the door while you turn the bike. “Tell the other firehouse we’d like our city back before breakfast.”"
    ],
    "choices": [
      {
        "text": "Ride back with the inspection notes",
        "to": "R04"
      }
    ],
    "onEnter": {
      "set": {
        "visitedEngine": true,
        "knowsSite": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "R07",
    "title": "The Blue Plate Diner",
    "era": "streets",
    "cast": [
      "player",
      "hollis",
      "clerks"
    ],
    "imagePrompt": "A small fogged-up diner at night with a counter, ten stools and a glass pie case. A lean elderly man in a navy cap and grey raincoat sits at the counter with a coffee mug and smiles at the player, who is seen from behind in the silver helmet and mustard-yellow windbreaker on the next stool. Two pale ghost clerks peer wistfully out of the pie case. Rain on the window.",
    "text": [
      "The diner opposite Pell’s is all fogged windows and chrome stools. You lean your bicycle against the glass and sit beside a lean elderly man in a navy cap. Behind the pie case, two transparent clerks study the cherry filling as though it might contain an address.",
      "“They never order,” says the man. “They look. That’s different.” His name is Mr. Hollis. He carried the mail around here for forty years.",
      "You put the canister on the counter. Hollis turns it by its felt ring. “Station Nine. The Sedgewick basement. We used to hear their bell on the late collection, eleven-twenty sharp. Kept ringing after the machinery was pulled out.”",
      "One of the ghosts lays a transparent hand on the empty stool beside him. Hollis doesn’t flinch. He moves his cup off the place setting.",
      "“A shift is people,” he tells you. “When I retired they gave me a clock. I’d rather they’d remembered the fellow who covered my route when my wife was ill.”",
      "The receiver creeps up to {{clock}}. You could leave with the address. Hollis has also noticed the soot on the seal, and is reaching for a damp napkin."
    ],
    "choices": [
      {
        "text": "Let Hollis clean the seal and finish his thought",
        "to": "R08"
      },
      {
        "text": "Thank him and take the address",
        "to": "R04"
      }
    ],
    "onEnter": {
      "set": {
        "visitedDiner": true,
        "knowsSite": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "R08",
    "title": "The Napkin",
    "era": "streets",
    "cast": [
      "player",
      "hollis"
    ],
    "imagePrompt": "Tight view of the diner counter on a rainy Manhattan night. Mr. Hollis draws a map on a napkin with a pencil stub while the player leans over it. Only Hollis and player are in frame; pie case and its ghost clerks are outside the crop. Preserve the established napkin-counter composition.",
    "text": [
      "At the diner counter, Hollis rubs the soot with a corner of his napkin. Underneath appears CLOSURE — NOTICE TO ALL STAFF. He stops before the paper seal softens. Whatever is inside has stayed shut since 1898.",
      "“The hotel uses a service stair beside its old coal chute,” Hollis says. “I delivered there until last spring. Street hatch sticks, but the stair is sound.” He turns the napkin over and draws the Ann Street entrance. “Lift before you pull. Ring the kitchen bell when you’ve opened it so they know someone’s below.”",
      "You draw a small square beside his sketch: the courier’s mark for a checked entrance. Hollis watches you do it and nods.",
      "The ghost by the pie case has gone back to staring at the empty stool. Your bag is beneath it. You wait until the ghost looks away, then reach down slowly for the strap.",
      "Outside, your saddle is wet again. You wipe it with your sleeve and fold the napkin inside your job book. There is now a way into the building that won’t involve explaining an antique postal emergency over the lobby carpet."
    ],
    "choices": [
      {
        "text": "Return to the corner with the service entrance marked",
        "to": "R04"
      }
    ],
    "onEnter": {
      "set": {
        "knowsChute": true
      }
    }
  },
  {
    "id": "F01",
    "title": "14 North Moore Street",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "slimer"
    ],
    "imagePrompt": "The front office of an old brick firehouse at night: a cluttered reception desk, a hand-lettered sign, a brass pole in the ceiling. Janine, red curly hair and huge glasses, a carton of chow mein in one hand, holds out the other hand for the canister. A squat round bright-green ghost with a huge mouth floats behind her with a hot dog. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, stands at the desk.",
    "text": [
      "You lock your bike outside fourteen North Moore and enter a warm office smelling of printer ribbon and noodles. Janine Melnitz, red-haired and wearing enormous glasses, holds out her hand for the job slip. A round green ghost floats behind her with a hot dog.",
      "“Slimer,” Janine says. “Lives here. Eats here. Makes no financial contribution.” Slimer gives you a friendly, mustard-coloured wave.",
      "Janine compares your receiver with the panel behind her desk. Both read {{clock}}. “Good. The instrument works. Less good: the twelve downstairs still think they’re on duty.” She shows you their intake photographs: grey vests, eyeshades, each caught separately while disturbing an occupied building.",
      "The team’s original test found a cold object and one clerk. The network began calling the captives when the parcel left Pell’s pipe. Janine has cleared the neighbouring basement; a reserve generator rattles in the yard. She puts down a telephone receiver, and it rings again before her hand leaves it.",
      "“I can sign for this,” she says. “We’ll keep the carrier shielded and contain the wandering clerks until we understand it. Your job will be done. Or I can give you equipment and a contact number if you want to trace the address. Egon says a delivered notice may settle this with fewer prisoners.”",
      "She slides the slip back. Hazard pay is already entered. “I put that in before our invoice expert, Dr. Venkman, saw it,” she says. “You’re welcome.”"
    ],
    "choices": [
      {
        "text": "Have Janine sign and leave the emergency with the professionals",
        "to": "E02"
      },
      {
        "text": "Ask for equipment before continuing the investigation",
        "to": "F02"
      },
      {
        "text": "Stay and help the team work it out",
        "to": "F04"
      },
      {
        "text": "Continue tracing the address with what you have",
        "to": "R04"
      }
    ],
    "time": "FRI NOV 15 · EVENING",
    "onEnter": {
      "set": {
        "visitedFirehouse": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "F02",
    "title": "Winston’s Spare",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "trap",
      "slimer"
    ],
    "imagePrompt": "A long concrete engine bay inside a firehouse with a brass pole, an empty parking space and a tall steel equipment shelf. Janine hands a flat grey box with two hinged doors, a pedal on a cord and hazard stripes to the player, who is seen from behind in the silver helmet and mustard-yellow windbreaker. The trap is closed. Slimer floats in from the kitchen with mustard on his face.",
    "text": [
      "Janine takes you into the firehouse engine bay and lifts a flat grey box from the equipment shelf. It has two hinged doors and a pedal on a cord. Slimer edges away from it, holding his hot dog with both hands.",
      "“Winston’s spare trap,” Janine says. “He authorised the loan. Lay it flat, get living feet clear, then press once. It catches the ghosts in the light and shuts. One batch. After that, leave it shut and bring it back.”",
      "She demonstrates the pedal with the power disconnected, then makes you repeat the steps. The closed trap keeps its ghosts inside; its cargo comes home with you.",
      "“It can clear a crowded passage,” she says. “Or keep the next gathering from becoming a panic. If you spend it early, you won’t have it later.”",
      "On the intake desk you notice a discharge form, with a line for each ghost’s name. “The service hatch can separate a group from the grid,” Janine says. “Provided we know who belongs in it. We have other tenants downstairs.”",
      "You strap the closed trap behind your bag. Slimer puts his hot dog on the shelf where it stood, considers this, and takes it back."
    ],
    "choices": [
      {
        "text": "Stay a moment with Slimer",
        "to": "F03"
      },
      {
        "text": "Head out with the trap",
        "to": "R04"
      },
      {
        "text": "Stay to work with the returning team",
        "to": "F04"
      }
    ],
    "onEnter": {
      "set": {
        "trap": "empty"
      }
    }
  },
  {
    "id": "F03",
    "title": "The Empty Chair",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "slimer"
    ],
    "imagePrompt": "Warm firehouse engine bay on a rainy 1985 night. Player sits beside an empty wooden chair with an unfinished hot dog on its seat. Slimer quietly touches the chair leg with a tiny hand, listening toward the floor. Janine watches from her desk in the background. No trap or canister visible; all equipment cropped out. A small, still moment, no cheering.",
    "text": [
      "In the warm engine bay, Slimer puts his unfinished hot dog on a chair. Then he pulls a second chair beside it. Janine opens her mouth, thinks better of it, and stays at the desk.",
      "You sit. For a while the only noise is the basement machinery.",
      "When a thin tapping travels up through the floor, Slimer taps back against the chair leg. Three beats. A pause. Three beats. Downstairs, the rhythm changes.",
      "“He’s been doing that since the postal ghosts arrived,” Janine says quietly. “We thought he wanted their lunch.”",
      "You take out your delivery slip and show Slimer the space for a signature. He pats the empty chair. Then he points down through the floor and pats it again. You start to say that nobody is sitting there. Slimer waits.",
      "You draw twelve little boxes in your notebook. Slimer touches one with the very tip of a finger, carefully avoiding the paper. For once he doesn’t lick anything.",
      "The dial is now {{clock}}. When you stand, Slimer stays beside the empty chair, tapping an answer to the people below. You put your notebook away without closing the twelve boxes."
    ],
    "choices": [
      {
        "text": "Take your notes back onto the street",
        "to": "R04"
      },
      {
        "text": "Bring the notes to the team when they return",
        "to": "F04"
      }
    ],
    "onEnter": {
      "set": {
        "heardSlimer": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "F04",
    "title": "The Working Wait",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "slimer"
    ],
    "imagePrompt": "Firehouse front office late on a rainy night. Player sits at a wooden bench with towel round shoulders, writing on a job slip; bag closed at their feet, no external equipment visible. Janine works the desk telephone and reads notes. Slimer sits beside an empty chair holding a carton of noodles. Calm purposeful work; no ghost capture, no newspaper swatting.",
    "text": [
      "At the firehouse, Janine settles you at a bench with a towel and a carton of noodles. Your bicycle stays locked outside. Slimer occupies the next chair, keeping his food away from your notebook.",
      "You don’t just sit watching the needle. Janine calls the team with everything you have found. You check Pell’s collection time against the first surge and write the sequence in order. The earlier account becomes clearer: the trapped clerks answered the carrier before any new ghost reached it.",
      "Janine switches the grid onto its reserve cooling circuit. It slows the rise; it cannot stop people trying to get back to a job they think is unfinished. During the wait the dial reaches {{clock}}.",
      "At ten twenty-five, the garage door rolls up. Four wet people come in carrying heavy grey packs. One has a sandwich protected under his collar. Another is trying to keep a notebook dry and failing.",
      "Janine hands your page to the man with round glasses. “Here’s the part we didn’t know,” she says. “And here’s the person who saw it happen.”"
    ],
    "choices": [
      {
        "text": "Work through the evidence with them",
        "to": "F05"
      }
    ],
    "time": "FRI NOV 15 · 10:25 PM",
    "onEnter": {
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "F05",
    "title": "Back from the Job",
    "era": "firehouse",
    "cast": [
      "player",
      "peter",
      "ray",
      "egon",
      "winston",
      "janine",
      "canister"
    ],
    "imagePrompt": "The firehouse engine bay at night. Four wet people in khaki jumpsuits with heavy grey backpacks come in through the big garage door: Peter, sardonic, tries to pull a squelching shoe off; Ray, big and cheerful, holds a half-eaten sandwich and peers at a brass canister; Egon, tall and thin with round glasses, reads the dial on a tag; Winston drops into a chair. Janine stands beside them. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, holds the canister.",
    "text": [
      "In the engine bay, Janine introduces Peter Venkman, who has the wet shoe; Ray Stantz, who rescued the sandwich; Egon Spengler, who reads your notes twice; and Winston Zeddemore, who immediately finds you a dry chair.",
      "Their packs make controlled energy beams that hold a ghost while a floor trap catches it. Peter lowers his onto the bench with a thud. “I’d like to report a haunting in my left shoe.” Egon moves it off your notes without looking up.",
      "“My first test was incomplete,” Egon says. “I measured the carrier at rest. Moving it woke the route. That wasn’t in your instructions.” He places your account beside the readings, finds the same surge on both pages and draws a line between them.",
      "Ray unrolls a building survey from the job van. “An entire dispatch station under a hotel. They built right over it.” It puts Station Nine beneath the Sedgewick. While he phones maintenance about its eleven-twenty bell, Egon cleans the remaining soot off the seal: a staff closure notice, dated eighty-seven years ago.",
      "There are two workable plans. The team can isolate the carrier and collect the remaining wandering clerks in separate traps. That should make the borough safe tonight, but leave the staff captive while a release is researched. Or you can take the notice to its intended desk, with the team controlling the equipment.",
      "“We can take the equipment,” Winston says to you. “Can you get us to the desk?” Peter raises a finger. “And through the lobby without buying them another chandelier?”"
    ],
    "choices": [
      {
        "text": "Choose isolation and help document the unresolved case",
        "to": "E07"
      },
      {
        "text": "Keep the parcel and make the delivery with the team",
        "to": "F06"
      }
    ],
    "time": "FRI NOV 15 · 10:30 PM",
    "onEnter": {
      "set": {
        "knowsSite": true
      }
    }
  },
  {
    "id": "F06",
    "title": "A Courier’s Route",
    "era": "hotel",
    "cast": [
      "player",
      "peter",
      "ray",
      "egon",
      "winston",
      "ernie",
      "voss"
    ],
    "imagePrompt": "The grand marble lobby of an old hotel at night. A small neat night manager in a black suit stands with his arms folded in front of the Ghostbusters in khaki jumpsuits and backpacks, while a skinny bellhop in a maroon uniform waves them toward a staff door. The player, seen from behind in the silver helmet and mustard-yellow windbreaker with the messenger bag, follows. Wet footprints on the marble.",
    "text": [
      "At quarter to eleven, you spread your route notes over the firehouse desk. No time for a ceremonial convoy: the hotel’s goods entrance faces Ann Street, and its lobby staff need to know why five wet people are coming downstairs.",
      "Janine calls ahead while you ride with the team through the rain. Your bicycle stays locked at the firehouse. The receiver reaches {{clock}} on the journey. Winston checks the one spare trap assigned to you: a flat grey box with hinged doors and a pedal on a cord. He shows you how to lay it clear of living feet and press once. It catches one group, shuts, and must then stay shut until it is docked safely at the firehouse.",
      "By eleven, you are at the Sedgewick. Mr. Voss, the small night manager in the immaculate black suit, has his incident book ready. Peter begins a speech. You give Voss the collection address, the historical destination and the name of the person who called ahead.",
      "Voss draws a line in his book. “No beams in the lobby.” “I was going to say good evening,” Peter tells him. “That was the beginning of it last time,” says Voss.",
      "“Agreed,” says Winston, before Peter can improve the arrangement.",
      "Ernie, a skinny bellhop in maroon, leads everyone down the back stairs. The team has brought the equipment. You still carry the parcel. At the bottom, Egon checks the reading against his own instrument and asks you to keep the final delivery slip dry."
    ],
    "choices": [
      {
        "text": "Lead the way along the cellar corridor",
        "to": "C01"
      }
    ],
    "time": "FRI NOV 15 · 10:45 PM",
    "onEnter": {
      "set": {
        "team": true,
        "route": "team",
        "trap": "empty"
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "S01",
    "title": "Park Row",
    "era": "hotel",
    "cast": [
      "player"
    ],
    "imagePrompt": "A wide wet street at night in front of a vast dark granite hotel with a green copper roof, a golden revolving door and a dripping awning. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, chains a bicycle to the railing by the entrance. A narrow shadowy lane runs along the side of the hotel. Alone, nobody else is here.",
    "text": [
      "You ride east through the wet streets to Park Row, keeping the carrier upright over each pothole. The dial reaches {{clock}}. This is why you normally charge extra for anything that has to stay a particular way up.",
      "The Sedgewick fills the block ahead: dark granite, a green copper roof and a revolving door glowing gold under a dripping awning. You lock your bike to the entrance railing. Ann Street runs along the side.",
      "Through the glass you can see the night manager behind a desk. A guest is pointing at a damp patch on the ceiling; the manager is explaining it with both hands. Bringing an old parcel to its proper address is only the beginning of getting it delivered.",
      {
        "if": {
          "flag": "knowsChute",
          "is": true
        },
        "text": "Hollis’s napkin marks a service stair beside the Ann Street coal chute. You know which hatch to lift and which kitchen bell to ring."
      }
    ],
    "choices": [
      {
        "text": "Take the parcel through reception",
        "to": "H01"
      },
      {
        "text": "Use Hollis’s service entrance",
        "to": "H04",
        "if": {
          "flag": "knowsChute",
          "is": true
        }
      }
    ],
    "time": "FRI NOV 15 · NIGHT",
    "onEnter": {
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "H01",
    "title": "The Lobby",
    "era": "hotel",
    "cast": [
      "player",
      "voss",
      "ernie"
    ],
    "imagePrompt": "A vast marble hotel lobby at night with brass lamps, a ceiling painted with pink clouds and a front desk like a pulpit. A small neat night manager in a black suit writes in a ledger behind it. A skinny bellhop in a maroon uniform leans on a luggage cart. A brass plaque is on the wall by the revolving door. The player, seen from behind in the silver helmet and mustard-yellow windbreaker with the messenger bag, stands just inside the door. A damp green stain on the carpet.",
    "text": [
      "The Sedgewick lobby smells of floor polish and expensive flowers. You stop on the mat to let your windbreaker drip. Its reflective stripe flashes in the brass lamps.",
      "A plaque by the revolving door reads: BUILT 1899 ON THE SITE OF THE PARK ROW POST OFFICE ANNEX. The old destination is underneath the new one. You copy the exact wording onto your slip.",
      "MR. VOSS, NIGHT MANAGER, says the nameplate on the desk. Mr. Voss is a small, neat man in a black suit. Beyond him, a skinny bellhop wearing a maroon uniform leans against a luggage cart. His badge says ERNIE.",
      "A green stain dries beside the lifts. From beneath it comes a tiny tapping, followed by a pause, followed by more tapping. Ernie has heard it. Mr. Voss is making an effort not to.",
      "The door behind the desk says STAFF ONLY — CELLAR. You could reach it in six running steps. Or you could do what you do at every building that doesn’t want to admit it has ordered something."
    ],
    "choices": [
      {
        "text": "Present the address and ask for cellar access",
        "to": "H02"
      },
      {
        "text": "Show Voss the inspection plan and request its marked route",
        "to": "H03",
        "if": {
          "flag": "visitedEngine",
          "is": true
        }
      }
    ]
  },
  {
    "id": "H02",
    "title": "The Night Manager",
    "era": "hotel",
    "cast": [
      "player",
      "voss"
    ],
    "imagePrompt": "The hotel lobby. The small neat night manager in a black suit has gone pale and points a shaking finger at a green eyeshade lying alone on the marble floor. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, stands at the desk with the humming messenger bag. A guest in an armchair has dropped a newspaper. A faint trail of paper scraps drifts down.",
    "text": [
      "At the desk, Mr. Voss reads the year on the seal and presses his lips together. “We do not accept deliveries for previous tenants.”",
      "A grey clerk rises through the floor behind him. The clerk tries to remove his eyeshade politely, loses his grip, and leaves it on the marble. When Voss turns, the ghost has sunk out of sight again. The eyeshade remains.",
      "Voss stares at it. The receiver reaches {{clock}} while you explain that the old tube room still exists beneath his building.",
      "“The Ghostbusters took my ballroom apart last year,” he says. “If they’re involved, I need a name and a telephone number. And someone from my staff goes down with you.”",
      "You have Janine’s number on the delivery slip. Voss reaches for the telephone. As he bends over the desk, his elbow holds the staff door open; beyond it, a bare stair runs down toward the tapping."
    ],
    "choices": [
      {
        "text": "Give him Janine’s number and accept an escort",
        "to": "H03"
      },
      {
        "text": "Make for the stairs before he can refuse",
        "to": "E05"
      }
    ],
    "onEnter": {
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "H03",
    "title": "The Back Stairs",
    "era": "hotel",
    "cast": [
      "player",
      "ernie"
    ],
    "imagePrompt": "A narrow back staircase in an old hotel, with bare bulbs and peeling green paint. A skinny young bellhop in a maroon uniform leads the way down with a flashlight and looks back over his shoulder at the player, who is seen from behind in the silver helmet and mustard-yellow windbreaker with the humming messenger bag.",
    "text": [
      "Voss checks your paperwork and Janine’s number, then marks the cellar route in his incident book. Ernie opens the staff door. “Eleven-twenty,” the bellhop says on the stairs. “That’s when the bell goes. Every night. I thought it was a timer nobody could find.”",
      "You follow his flashlight down two flights. The carpets disappear first, then the plaster. By the bottom landing the hotel has become old brick and pipes.",
      "Ernie points along a corridor and keeps the flashlight trained on the floor while you step over a loose cable. He is frightened, but he doesn’t hurry you. “If anything happens, this door stays open,” he says.",
      "You show him the return number on your slip. It is a small thing to do. He looks relieved to have something ordinary to write down.",
      "At the landing he turns back toward reception with his flashlight. The corridor ahead has fixed boiler lamps; you won’t need to borrow it. Behind you, the stair door remains propped open with a folded towel."
    ],
    "choices": [
      {
        "text": "Continue to the old tube room",
        "to": "C01"
      }
    ],
    "onEnter": {
      "set": {
        "route": "lobby"
      }
    }
  },
  {
    "id": "H04",
    "title": "The Coal Chute",
    "era": "hotel",
    "cast": [
      "player"
    ],
    "imagePrompt": "A narrow dark lane at night behind a big hotel. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, kneels in the rain and heaves up a rusty square steel plate set in the pavement, revealing a black metal chute. A faint orange glow from a distant streetlamp. Alone, nobody else is here.",
    "text": [
      "On Ann Street, rain runs between the paving stones toward a rusty square hatch. You lift before pulling, as Hollis showed you, and the catch comes free without a fight.",
      "The black coal chute slopes into darkness. Beside it, beyond the rim, is the narrow service stair he promised. You leave the chute alone, ring the kitchen bell, and call down that a courier is entering. Somebody answers with a weary “Mind the third step.”",
      "You lower your bag ahead of you, keeping one hand on its strap. The third step is slick rather than broken. Your orange sneakers arrive in the cellar a little blacker than they left the pavement.",
      "The kitchen worker closes an inner service door somewhere above. You leave the street hatch on its stay so you can find the stairs again. Your bicycle is still locked out front. Nothing glamorous has happened, which is generally how you know an entrance worked."
    ],
    "choices": [
      {
        "text": "Follow the cellar’s fixed lights",
        "to": "C01"
      }
    ],
    "onEnter": {
      "set": {
        "route": "chute"
      }
    }
  },
  {
    "id": "T01",
    "title": "Pell’s Cellar",
    "era": "under",
    "cast": [
      "player",
      "pell"
    ],
    "imagePrompt": "A steep stair down into an old brick cellar at night. A stooped old man in a brown dressing gown and half-moon glasses holds a lantern at the top of the steps. At the bottom, a collapsed wall is propped with timber, and behind it a thick brass tube runs away into the dark beside a narrow passage with a rusty ladder. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, stands at the foot of the stairs.",
    "text": [
      "Back at Pell’s shop, you explain that you want to follow the pipe. Mr. Pell has changed into a brown dressing gown, but he has not gone to bed. He puts your bicycle in the back room and finds his lantern.",
      "The fallen cellar wall has been propped with timber. Beyond it runs a brass tube, with a narrow inspection passage alongside. You study the support before stepping through. Pell keeps the lantern at the entrance; old maintenance lamps glow farther in, lit by something that is no longer electricity.",
      "Beside the broken tube, a surviving dispatch card gives Station Nine’s last scheduled run as 11:20 P.M. A diagram shows an upward pipe feeding a receiving tray and a downward pipe returning unclaimed mail. You sketch both.",
      "“If they ask,” Pell says, “I’ve kept every letter I found. Even the ones addressed to buildings that aren’t there.” He says it with the defensiveness of someone who has been rehearsing an explanation for eighty-seven-year-old colleagues.",
      "The carrier hums as you follow the pipe east. By the first junction the dial reaches {{clock}}. This route follows the actual machinery that lost the parcel. It might also tell you why."
    ],
    "choices": [
      {
        "text": "Follow the maintenance passage",
        "to": "T02"
      }
    ],
    "time": "FRI NOV 15 · EVENING",
    "onEnter": {
      "set": {
        "visitedTunnel": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "T02",
    "title": "The Tube Gallery",
    "era": "under",
    "cast": [
      "player"
    ],
    "imagePrompt": "A long vaulted brick gallery underground. Six brass tubes run side by side along the right-hand wall and vanish together into a low, narrow passage at the far end. On the left, behind a rusted open iron gate, a wide passage glows with warm yellow light. The player, seen from behind in the silver helmet and mustard-yellow windbreaker with the messenger bag, stands in the middle. Ambient light from the passages and dial; no flashlight. Alone, nobody else is here.",
    "text": [
      {
        "if": {
          "flag": "visitedSorting",
          "is": true
        },
        "text": "You return from the records room to the vaulted tube gallery. The copied delivery rule is safe in your notebook.",
        "else": "The passage opens into a vaulted brick gallery. Six brass pipes run along the right wall, their seams catching the pale maintenance light."
      },
      "Beyond a rusted gate on the left, green-shaded lamps illuminate desks and pigeonholes. A paper notice on the gate reads RECORDS & UNCLAIMED MAIL. The wider path smells of dust.",
      "The pipes themselves lead into a low passage on the right. A draught travels down it, carrying the smell of a hotel laundry. Following the carrier’s route is faster. The records room might explain the job at its end.",
      "You rest your bag on your knee to adjust the strap. Even underground, delivery work comes down to deciding whether the information you don’t have is worth going back for."
    ],
    "choices": [
      {
        "text": "Search the records before going on",
        "to": "T03",
        "if": {
          "not": {
            "flag": "visitedSorting",
            "is": true
          }
        }
      },
      {
        "text": "Follow the pipes toward the laundry draught",
        "to": "T04"
      }
    ]
  },
  {
    "id": "T03",
    "title": "The Sorting Room",
    "era": "under",
    "cast": [
      "player",
      "clerks"
    ],
    "imagePrompt": "Rainy November night beneath Manhattan, vaulted records room lit by green-shaded desk lamps. Player copies an old paper form at one dusty desk. Only three translucent Night Mail clerks quietly sort papers at other desks. Many empty desks, wooden pigeonholes. No capture light, no Slimer or Ghostbusters. Canister and optional trap stay outside the framing.",
    "text": [
      "The lit room off the gallery contains rows of empty desks. A few ghost clerks shuffle blank pages between pigeonholes. One offers you a form headed REQUEST FOR FORM. You return it with thanks.",
      "You work along the labelled drawers, checking the station number before touching the contents. Nine has one sheet left in its closing file: the procedure for notices that must reach a whole shift.",
      "An absent employee can receive a dated, certified copy bearing their full name. Each employee must acknowledge it. The station’s delivery receipt stays open until the last acknowledgement arrives. A supervisor has written in the margin: NO COLLECTIVE SIGNATURE FOR PERSONS NOT PRESENT.",
      "You copy the rule. On an adjacent routing card, UP leads to the receiving tray; DOWN recirculates unclaimed carriers. The original parcel never reached the tray, so nobody could open it as received mail.",
      "The clerks resume their careful sorting. You resist the urge to tell them the pages are blank. The search has brought the receiver to {{clock}}, but you have found a way a message might reach people who can’t come to the counter."
    ],
    "choices": [
      {
        "text": "Return to the pipes with the procedure copied",
        "to": "T02"
      }
    ],
    "onEnter": {
      "set": {
        "visitedSorting": true,
        "copyRule": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "T04",
    "title": "The Blockade",
    "era": "under",
    "cast": [
      "player",
      "clerks"
    ],
    "imagePrompt": "Narrow wet brick tube passage beneath Manhattan on a rainy night. Exactly six silent pale postal ghost clerks stand crowded around a fallen pipe support, facing the player. A ladder and warmer light beyond them. Other passages and clerks outside framing. Messenger bag closed; optional trap not visible. No capture light, no flashlight, no team or Slimer.",
    "text": [
      "The low passage narrows where a pipe support has fallen. Six ghost clerks stand across it, shoulder to shoulder in the confined space. More drift in the gallery behind them. They hold their satchels as if standing at a counter that has forgotten to open.",
      "Beyond them you can see a ladder and a little square of warmer light. The address is close. The six won’t step aside while the parcel is on your side of the support; each seems afraid of losing their turn.",
      "You could work the bag through first and follow slowly, showing the empty signature space. That would take patience while the grid keeps straining.",
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "The unused trap is heavy on your back. One press would clear these six immediately and leave them inside it. Then you would carry a full box for the rest of the job, with no second catch available."
      },
      "They are blocking the way, but they are watching your hands rather than threatening you. You still have room to turn back."
    ],
    "choices": [
      {
        "text": "Show the slip and negotiate room to carry the parcel through",
        "to": "C01",
        "set": {
          "route": "tunnel"
        },
        "add": {
          "margin": -10
        }
      },
      {
        "text": "Use the trap here and carry the six clerks onward",
        "to": "C01",
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "set": {
          "route": "tunnel",
          "trap": "blockade"
        }
      },
      {
        "text": "Retrace the passage to the street",
        "to": "T05",
        "add": {
          "margin": -5
        }
      }
    ]
  },
  {
    "id": "T05",
    "title": "Back Up the Stairs",
    "era": "streets",
    "cast": [
      "player",
      "pell",
      "clerks"
    ],
    "imagePrompt": "A narrow old stamp shop at night. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, wheels a bicycle out through the shop door into the rain while Mr. Pell, a stooped old man in a brown dressing gown and half-moon glasses, holds the door. A faint grey ghost clerk drifts after them near the ceiling.",
    "text": [
      "You retrace the pipes to Pell’s cellar with the parcel still secure. A curious clerk follows at ceiling height, then stops by a frame of Victorian stamps. Pell pretends not to see him.",
      "The return has brought the dial to {{clock}}. Your knees ache from the low passage. But you have not left the carrier, or anyone in a box, down there.",
      "Pell wheels your bicycle out of his back room and holds the shop door. You tell him the passage is too crowded to be your route tonight. He accepts that without recommending courage from the comfort of his dressing gown.",
      "Outside, you can get back to the people with telephones, plans and properly lit stairs. You mark the tunnel checked in your notebook; there is no reason to spend the same journey twice."
    ],
    "choices": [
      {
        "text": "Return to the corner and choose an above-ground route",
        "to": "R04"
      }
    ]
  },
  {
    "id": "C01",
    "title": "The Hotel Cellar",
    "era": "under",
    "cast": [
      "player"
    ],
    "imagePrompt": "A long low brick cellar corridor with pipes along the ceiling, a ticking boiler in an alcove and laundry carts against one wall. At the far end, set into dark old stone, is a round-topped bronze door with a spoked wheel, green with age. The player, seen from behind in the silver helmet and mustard-yellow windbreaker with the humming messenger bag, stands at the near end. Dim light from the boiler and the glowing tag dial, no flashlight. A slight green haze.",
    "text": [
      {
        "if": {
          "flag": "route",
          "is": "lobby"
        },
        "text": "Ernie’s footsteps fade up the stairs behind you. You are in a brick corridor beneath the Sedgewick, with a clear way back to reception."
      },
      {
        "if": {
          "flag": "route",
          "is": "chute"
        },
        "text": "You leave the service stair behind and cross the Sedgewick’s coal-blackened cellar to a brick corridor."
      },
      {
        "if": {
          "all": [
            {
              "flag": "route",
              "is": "tunnel"
            },
            {
              "flag": "trap",
              "is": "blockade"
            }
          ]
        },
        "text": "You lay the trap on the passage floor, clear your feet and press the pedal. White-blue light flares between the six clerks; their satchels flap as they stream into it, and the doors snap shut. You secure the full box, pass the fallen support and climb the ladder beyond. A hatch opens into the Sedgewick’s laundry corridor. Your bicycle remains in Pell’s back room."
      },
      {
        "if": {
          "all": [
            {
              "flag": "route",
              "is": "tunnel"
            },
            {
              "not": {
                "flag": "trap",
                "is": "blockade"
              }
            }
          ]
        },
        "text": "You pass the parcel through the gap, then edge after it while the clerks politely disagree about queue order. Nobody is captured. Beyond them, a ladder leads into the Sedgewick’s laundry corridor. Your bicycle remains at Pell’s."
      },
      {
        "if": {
          "flag": "route",
          "is": "team"
        },
        "text": "Ernie returns upstairs from the cellar landing. The four Ghostbusters follow you along the Sedgewick’s brick corridor, their equipment silent."
      },
      "Boiler lamps pick out a round-topped bronze door. STA. 9 — TUBE ROOM, say the green letters above it. The wheel resists your first touch.",
      {
        "if": {
          "flag": "visitedEngine",
          "is": true
        },
        "text": "You unfold Gallo’s sketch against the brick. There is the little lever, almost hidden by a pipe bracket. You lift it before turning the wheel; the weight comes off the catch exactly as he said it would.",
        "else": "You look before pulling harder. It’s a loading-door catch: the little lever beside the wheel carries the door’s weight. You brace the bag, lift the lever and turn. The door moves."
      },
      "A colder draught comes through the opening. You push the door onto its stop, leaving your return route clear."
    ],
    "choices": [
      {
        "text": "Carry the parcel through the open door",
        "to": "C02"
      }
    ],
    "time": "FRI NOV 15 · BEFORE THE BELL"
  },
  {
    "id": "C02",
    "title": "Station 9",
    "era": "under",
    "cast": [
      "player"
    ],
    "imagePrompt": "A cold vaulted round brick chamber like a church apse, lit by a thin grey light from a street grating high in the ceiling. Two banks of brass tubes come out of the wall: the left bank stenciled UP in worn white letters with a small brass bell on a bracket above it, the right bank stenciled DOWN. A big round wall clock with no hands hangs on the far wall. The player, seen from behind in the silver helmet and mustard-yellow windbreaker with the messenger bag, stands in the open bronze doorway.",
    "text": [
      "Station Nine is a round brick chamber under the hotel. Grey street light comes through a high grating. On the left is a narrow brass mouth marked UP, with a wire receipt tray beneath it. On the right, DOWN widens into a flared opening. A wall clock has lost its hands.",
      "Beside the tubes, a simple routing diagram shows the left bank ending at the clerk’s desk. The right joins a ring of pipe and comes around again. Air is already moving through the right-hand mouth; the left is still. Near the doorway, a pressure-control handwheel shivers on a connecting pipe.",
      "The soot has loosened from the carrier during the journey. You can now read the whole seal: CLOSURE — NOTICE TO ALL STAFF, 15 NOV 1898. Beneath it, your thumb rests on an unbroken strip of paper. This is what the waiting people have never been told.",
      "The small bell hasn’t rung. On the desk lies an attendance book, its pages lifting in the draught. You keep the original closed; a courier can inspect an address without opening somebody else’s letter.",
      {
        "if": {
          "flag": "team",
          "is": true
        },
        "text": "Egon and Winston offer to steady the pipe mechanism while the shift assembles. Peter waits by the door; Ray watches the desk. You remain responsible for the carrier."
      },
      {
        "if": {
          "flag": "trap",
          "is": "blockade"
        },
        "text": "Six of the clerks are in the box on your strap. It is already full for this journey."
      },
      "A few early arrivals are beginning to gather in the doorway, circling whenever the handwheel rattles and the carrier’s hum rises.",
      {
        "if": {
          "not": {
            "flag": "team",
            "is": true
          }
        },
        "text": "You rest a hand on the pressure wheel. Holding it steady quiets the hum."
      },
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "The empty trap on your strap could stop the clerks’ circling."
      }
    ],
    "choices": [
      {
        "text": "Hold the wheel and wait for the shift",
        "to": "C03",
        "if": {
          "not": {
            "flag": "team",
            "is": true
          }
        },
        "add": {
          "margin": -5
        }
      },
      {
        "text": "Let the team steady the mechanism while you wait",
        "to": "C03",
        "if": {
          "flag": "team",
          "is": true
        }
      },
      {
        "text": "Catch the three early arrivals to keep the room quiet",
        "to": "C03",
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "set": {
          "trap": "watch"
        }
      },
      {
        "text": "Leave the carrier on the desk and mark the delivery complete",
        "to": "E03"
      }
    ]
  },
  {
    "id": "C03",
    "title": "The Waiting Staff",
    "era": "under",
    "cast": [
      "player",
      "tull"
    ],
    "imagePrompt": "Cold brick Station Nine tube room before the bell, rainy November night above. Player and Ambrose Tull stand at an old desk with an open attendance ledger. Tull rests a translucent hand on the page, a restrained worried expression. Tight two-person composition. No optional trap, no team, no Slimer, no other clerks in frame; those parts of the room are outside the crop.",
    "text": [
      "In the tube room, a gaunt clerk with silver side-whiskers emerges beside the desk. He pushes up his green eyeshade and bows. “Ambrose Tull. Night supervisor. We were told there would be one last dispatch.”",
      {
        "if": {
          "flag": "trap",
          "is": "watch"
        },
        "text": "You set the trap across the three early arrivals’ path, clear your feet and press the pedal. Light fans up the brickwork; the clerks whirl into the box with a flutter of coat-tails. Its doors clap shut. You set the full box beside your bag. Tull looks at it for a long moment, then opens his attendance book."
      },
      {
        "if": {
          "flag": "trap",
          "is": "blockade"
        },
        "text": "The six clerks you caught in the passage tap inside the closed trap beside your bag. Tull listens, then opens his attendance book."
      },
      {
        "if": {
          "all": [
            {
              "not": {
                "flag": "trap",
                "is": "watch"
              }
            },
            {
              "not": {
                "flag": "trap",
                "is": "blockade"
              }
            }
          ]
        },
        "text": "The early arrivals stop circling as the mechanism steadies. Tull opens his attendance book."
      },
      "Forty-seven names fill the last shift’s page. Twelve have been missing from the streets for days. You tell Tull where they are: the firehouse grid. He puts his hand flat on the page.",
      "“I sent them to find the mail,” he says. “I thought they might have gone home without us. I rather hoped they had.”",
      "You explain what a trap does. It can confine the remaining staff and quiet the machinery, but it cannot tell them their shift is over. Tull nods. “I understand why the hotel would prefer that. We’ve been a considerable inconvenience.”",
      "Tull calls the clerks toward the desk. A page of names lifts in the draught and falls back onto the attendance book. He catches it with his palm before it turns; the receiver clicks against your bag."
    ],
    "choices": [
      {
        "text": "Work through the attendance book with Tull",
        "to": "C11"
      },
      {
        "text": "Leave the roll to Tull and prepare the carrier",
        "to": "C04"
      }
    ]
  },
  {
    "id": "C11",
    "title": "The Roll",
    "era": "under",
    "cast": [
      "player",
      "tull"
    ],
    "imagePrompt": "Cold brick Station Nine desk at night. Close over the player's helmeted shoulder: Tull guides a pencil supported by the player's hand across a ruled courier sheet beside the old attendance ledger. Paper marks are not legible. Only player and Tull visible. Omit optional trap, team and background crowd.",
    "text": [
      "At Tull’s desk, you turn your delivery slip over and rule three columns: here, firehouse, carried. A courier’s round sheet usually counts envelopes. Tonight it counts people.",
      "Tull reads all forty-seven names. Your pencil runs ahead of him at first. Then he says “Edwin Vale” and you lose your place. “The pocket watch,” Tull adds. “He sets it by the station clock. Is he still doing that?” You remember the clerk Janine described and ask Tull to spell the surname. This time, you wait for every letter.",
      {
        "if": {
          "flag": "trap",
          "is": "blockade"
        },
        "text": "Twenty-nine answer from the room, six by tapping inside the trap, and twelve do not answer. Tull knows exactly which twelve went to search the streets. You list their full names separately."
      },
      {
        "if": {
          "flag": "trap",
          "is": "watch"
        },
        "text": "Thirty-two answer from the room, three by tapping inside the trap, and twelve do not answer. Tull supplies the full names of the twelve searchers who never returned."
      },
      {
        "if": {
          "all": [
            {
              "not": {
                "flag": "trap",
                "is": "blockade"
              }
            },
            {
              "not": {
                "flag": "trap",
                "is": "watch"
              }
            }
          ]
        },
        "text": "Thirty-five answer from the room. Tull supplies the full names of the twelve searchers who never returned. You list those names separately."
      },
      "You read the three totals back. They add up. Tull initials your list, very slowly, using your pencil; its point leaves a mark only when you support it from beneath.",
      "The dial has reached {{clock}}. At last Tull closes the book. “I had forgotten,” he says, “what it was like to have somebody check my work.”"
    ],
    "choices": [
      {
        "text": "Put the verified roll inside your job book",
        "to": "C04"
      }
    ],
    "onEnter": {
      "set": {
        "roster": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "C04",
    "title": "Eleven-Twenty",
    "era": "under",
    "cast": [
      "player",
      "tull",
      "clerks",
      "canister"
    ],
    "imagePrompt": "Cold round brick tube room at night, tight view of player holding the brass canister between a narrow left brass pipe mouth and wider right flared mouth. Tull waits beside the receipt desk, three ordinary clerks visible behind him; remaining room outside crop. No crowd visibly assigned to a pipe, no readable direction labels. No optional team, trap or Slimer shown.",
    "text": [
      {
        "if": {
          "not": {
            "flag": "triedDown",
            "is": true
          }
        },
        "text": "At eleven-twenty, the bell rings. The handless clock begins to tick. Clerks straighten their vests around the room as though a manager who has been dead for decades might inspect them."
      },
      {
        "if": {
          "flag": "triedDown",
          "is": true
        },
        "text": "The carrier is back in your hands in Station Nine. Tull waits beside the desk while the clock ticks on. The failed circuit has left the whole room colder."
      },
      "The narrow mouth on the left rattles once and falls quiet. The wider mouth on the right draws steadily. The parcel leans toward that draught; letting it go would be effortless.",
      "Tull leaves space for you at the counter. His hands are folded. He has waited so long that even now he seems unwilling to hurry a delivery.",
      {
        "if": {
          "flag": "team",
          "is": true
        },
        "text": "Behind you, Winston braces a trembling pipe joint. Egon holds the pressure steady while Ray keeps a spring from jumping out of its housing. Peter has both hands on the wheel. “Whenever you’re ready,” he says, a little higher than usual."
      },
      "You put one hand under the carrier’s felt ring and keep the other on your delivery book. Getting an object out of your bag and into the right hands has never felt less like the same thing."
    ],
    "choices": [
      {
        "text": "Feed the carrier into the narrow left-hand mouth",
        "to": "C06"
      },
      {
        "text": "Let the stronger draught take it into the right-hand mouth",
        "to": "C05",
        "if": {
          "not": {
            "flag": "triedDown",
            "is": true
          }
        }
      },
      {
        "text": "Use the empty trap to contain the assembled staff",
        "to": "E08",
        "if": {
          "flag": "trap",
          "is": "empty"
        }
      }
    ],
    "time": "FRI NOV 15 · 11:20 PM"
  },
  {
    "id": "C05",
    "title": "The Return Circuit",
    "era": "under",
    "cast": [
      "player",
      "tull",
      "clerks",
      "canister"
    ],
    "imagePrompt": "The cold round brick tube room. Mr. Tull, the gaunt old ghost clerk with silver side-whiskers and an eyeshade, politely hands the brass canister back to the player, who is seen from behind in the silver helmet and mustard-yellow windbreaker. Behind them the line of grey ghost clerks sags in dismay, and a few at the back drift anxiously toward the glowing dial on the player’s bag.",
    "text": [
      "You let the draught pull the carrier into the right-hand pipe. It vanishes with a confident whistle. For three seconds, it sounds as if everything has worked.",
      "Then the whistle comes around behind the wall. The parcel has entered a return loop. It strikes the same bend where its felt ring has been wearing thin for eighty-seven years.",
      "You catch the ring on the next pass and pull. Tull supports the cylinder as it comes free, then places it back in your hands. There is a fresh scrape on the brass.",
      "The receiver jumps to {{clock}}. The captives at the firehouse have felt another dispatch fail; the strain travels through their unfinished round.",
      "Tull looks at the scrape rather than at you. “It came back,” he says. He sounds relieved. The left-hand receiver is still open. You have lost time and capacity, but the letter is still deliverable."
    ],
    "choices": [
      {
        "text": "Take the recovered parcel back to the counter",
        "to": "C04"
      }
    ],
    "onEnter": {
      "set": {
        "triedDown": true
      },
      "add": {
        "margin": -10
      }
    }
  },
  {
    "id": "C06",
    "title": "The Receipt Tray",
    "era": "under",
    "cast": [
      "player",
      "tull",
      "clerks",
      "canister"
    ],
    "imagePrompt": "Station Nine tube room at rainy-night delivery. Tull gently lifts brass canister with its receiver dial from the wire tray beneath the left brass tube. Player watches beside desk; three grey clerks visible in a cropped background. No optional Ghostbusters or trap, no Slimer. Small bell swinging; dignified anticipation.",
    "text": [
      "You lift the carrier into the narrow left-hand tube. For a moment there is no suction at all. Then the felt rings catch a rising breath of air and the brass slides out of your hands.",
      "Something thumps above the desk. The bell rings twice. A flap drops open and the carrier rolls into the wire receipt tray.",
      "Tull checks the station number against his book before lifting it out. You recognise the gesture: an address checked even when everyone in the room knows what it says.",
      "The shift leans forward. Downstairs at the firehouse, the absent clerks feel the dispatch arrive and try once more to get to their desk. The receiver reaches {{clock}}; its glass cover trembles on the carrier in Tull’s hands.",
      "“Received at the counter,” Tull says. “Not yet acknowledged by staff.” His fingers rest on the seal. You place your job book beside the tray so he has a flat surface when he is ready to sign."
    ],
    "choices": [
      {
        "text": "Let the intended recipient open the notice",
        "to": "C07"
      }
    ],
    "onEnter": {
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "C07",
    "title": "The Notice",
    "era": "under",
    "cast": [
      "player",
      "tull",
      "clerks"
    ],
    "imagePrompt": "Close quiet scene in brick Station Nine tube room at night. Tull stands solidly translucent at a desk reading a folded notice with a red seal. Player's gloved-free hand rests near a job book; three ordinary clerks in background remove eyeshades and begin to fade. Tull is not fading. No optional team, trap or Slimer visible.",
    "text": [
      "At the desk in Station Nine, Tull breaks the paper seal. Inside is one sheet, folded in three. He smooths it with both hands before reading.",
      "“By order of the Pneumatic Mail Company: Station Nine closes at midnight on the fifteenth of November, 1898. All clerks are released from duty, with the Company’s thanks. Go home.”",
      "A clerk in the front row laughs once, from surprise. Another takes off an eyeshade and examines the dent it has left in their hair. They begin to fade, slowly, like breath clearing from a window.",
      "Tull remains beside the desk. “I used to know the first train after our shift,” he says. “I suppose the timetable has changed.” For the first time, he seems curious about it.",
      {
        "if": {
          "flag": "team",
          "is": true
        },
        "text": "Ray takes out a handkerchief without pretending he needs to polish anything. Egon watches the receiver; the strain has eased, but the twelve in the grid are still there."
      },
      "At the bottom of the notice is the station’s acknowledgement. Tull has signed his own name. Below it is a blank line marked COURIER. He smooths a crease in his shirtsleeve. The station clock keeps ticking.",
      "You set your pen against the paper. On the other side of your job book is everything you chose to write down tonight."
    ],
    "choices": [
      {
        "text": "Countersign the station receipt and finish with the team",
        "to": "E09",
        "if": {
          "flag": "team",
          "is": true
        }
      },
      {
        "text": "Countersign the station receipt and finish your round",
        "to": "E10",
        "if": {
          "not": {
            "flag": "team",
            "is": true
          }
        }
      },
      {
        "text": "Leave the receipt open and return to the firehouse",
        "to": "C08"
      }
    ]
  },
  {
    "id": "C08",
    "title": "The Unfinished Receipt",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "canister"
    ],
    "imagePrompt": "Warm firehouse reception late on rainy November night. Player spreads original folded notice, job slips and brass canister on Janine's desk. Janine compares sheets under her lamp. Only player and Janine visible; no trap, no ghosts, no optional companions. Old wall telephone and paperwork, no new magical device.",
    "text": [
      "You leave your countersignature blank beneath Tull’s name. He stays at his desk while you pack the original notice into its carrier and promise to find a way for the absent staff to hear it.",
      {
        "if": {
          "flag": "team",
          "is": true
        },
        "text": "The team brings you back to North Moore, where your bicycle is still locked outside. Egon calls Janine from the hotel before you leave so she can prepare the discharge desk."
      },
      {
        "if": {
          "not": {
            "flag": "team",
            "is": true
          }
        },
        "text": "You call Janine from the hotel and return to the firehouse with the carrier. The team is back now; she has them prepare the discharge desk while you retrieve your bicycle and ride over."
      },
      {
        "if": {
          "all": [
            {
              "not": {
                "flag": "team",
                "is": true
              }
            },
            {
              "flag": "route",
              "is": "tunnel"
            }
          ]
        },
        "text": "That means a stop at Pell’s back room first. He is still awake, and he brings the bicycle out before you finish knocking."
      },
      {
        "if": {
          "not": {
            "flag": "team",
            "is": true
          }
        },
        "text": "Janine introduces the returning Ghostbusters: Egon Spengler, the scientist who sent the receiver; Winston Zeddemore, who handles the discharge equipment; Ray Stantz, already reading the original; and Peter Venkman, on the telephone arranging access back at the hotel."
      },
      "The journey brings the receiver to {{clock}}. At Janine’s desk you spread out the original, your slip and your notes. She checks what can be certified tonight.",
      {
        "if": {
          "not": {
            "flag": "copyRule",
            "is": true
          }
        },
        "text": "You have the letter, but no authority for separate copies. The original names the station collectively. Egon won’t guess whether individual duplicates will release its staff or make a new obligation. A proper search of the company records will take longer than this delivery window."
      },
      {
        "if": {
          "not": {
            "flag": "roster",
            "is": true
          }
        },
        "text": "Your papers do not contain a verified roll. The intake photographs identify the grid’s captives by case number; they do not supply all the full names the notice requires. Janine will not put a guessed name on a release."
      },
      {
        "if": {
          "all": [
            { "flag": "margin", "gte": 1 },
            { "flag": "margin", "lte": 9 }
          ]
        },
        "text": "The grid has fewer than ten points of spare capacity. Egon can keep it closed safely now that the street shift has settled, but cannot open its controlled service hatch tonight."
      },
      {
        "if": {
          "all": [
            {
              "flag": "copyRule",
              "is": true
            },
            {
              "flag": "roster",
              "is": true
            },
            {
              "flag": "margin",
              "gte": 10
            }
          ]
        },
        "text": "The copied procedure and Tull’s verified roll agree. Janine dates and certifies a separate notice for each missing employee. The grid has the ten points of capacity Egon needs to separate this group from its other occupants."
      },
      "Peter puts down the telephone. “The Sedgewick’s night manager is keeping the cellar door open for us. He would like to know if we validate parking.” Janine slides the next form across to you."
    ],
    "choices": [
      {
        "text": "Serve the verified copies through the controlled hatch",
        "to": "C09",
        "if": {
          "all": [
            {
              "flag": "copyRule",
              "is": true
            },
            {
              "flag": "roster",
              "is": true
            },
            {
              "flag": "margin",
              "gte": 10
            }
          ]
        }
      },
      {
        "text": "Leave the open case with the team for further work",
        "to": "E09",
        "if": {
          "all": [
            {
              "flag": "team",
              "is": true
            },
            {
              "not": {
                "all": [
                  {
                    "flag": "copyRule",
                    "is": true
                  },
                  {
                    "flag": "roster",
                    "is": true
                  },
                  {
                    "flag": "margin",
                    "gte": 10
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "text": "Record what remains and finish tonight’s round",
        "to": "E10",
        "if": {
          "all": [
            {
              "not": {
                "flag": "team",
                "is": true
              }
            },
            {
              "not": {
                "all": [
                  {
                    "flag": "copyRule",
                    "is": true
                  },
                  {
                    "flag": "roster",
                    "is": true
                  },
                  {
                    "flag": "margin",
                    "gte": 10
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "time": "FRI NOV 15 · LATE NIGHT",
    "onEnter": {
      "set": {
        "followup": true
      },
      "add": {
        "margin": -5
      }
    }
  },
  {
    "id": "C09",
    "title": "Twelve Names",
    "era": "firehouse",
    "cast": [
      "player",
      "egon",
      "winston",
      "slimer",
      "clerks"
    ],
    "imagePrompt": "Firehouse basement late at night. Egon operates fixed industrial controls beside a small thick-glass shielded service hatch set into metal containment equipment. Winston checks a paper list; player holds a certified paper notice against the glass. One pale postal clerk visible behind glass. Slimer sits quietly on bottom stair. No open main vault, no mass ghost release, no optional portable trap.",
    "text": [
      "In the firehouse basement, Egon explains the service hatch before he touches it. It is a shielded opening used to transfer a named group into a separate chamber. The rest of the containment grid will remain closed.",
      "Winston checks the outer door. You check the names against Tull’s list. Egon operates the controls. Each of you can see what the other two are doing.",
      "The first clerk behind the thick window is winding a pocket watch. “Edwin Vale?” you ask. His hand stops. You hold his certified notice against the glass and read it aloud. He checks the date, then nods. Winston records the acknowledgement and Egon opens the small outer chamber.",
      "Vale steps clear. He starts to lift the watch again, changes his mind, and puts it in his pocket. He disappears with his hand still resting there. You find the next name. Eleven more notices pass against the glass; you wait for each answer before Winston marks the roll and Egon opens the chamber.",
      "The green resident ghost, Slimer, sits on the bottom stair. When the last clerk taps on the window, Slimer taps back.",
      {
        "if": {
          "flag": "heardSlimer",
          "is": true
        },
        "text": "You recognise the three beats from the empty chair. This time, after the answer, there is no need to repeat them."
      },
      "Winston checks the count. Twelve names, twelve acknowledgements. You have dealt with every postal clerk in the grid without releasing any of its other occupants."
    ],
    "choices": [
      {
        "text": "Check the carried column as well",
        "to": "C10"
      }
    ]
  },
  {
    "id": "C10",
    "title": "The Last Column",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "slimer"
    ],
    "imagePrompt": "Firehouse intake desk late on rainy night. Player, Janine and Slimer quietly study a ruled attendance sheet under a desk lamp. Janine holds a ruler beneath a line. Slimer sits with an unfinished hot dog. Tight composition; no portable trap, canister, optional team or ghost crowd in view. This depicts the start of the page before final return to the hotel.",
    "text": [
      "Back at the firehouse intake desk, you check the last column of the roll. Janine has a ruler beneath the current line. Slimer watches from a chair, holding a cold hot dog he has forgotten to finish.",
      {
        "if": {
          "flag": "trap",
          "is": "blockade"
        },
        "text": "Six names belong to the clerks you caught at the fallen support. Winston docks the full trap to the same shielded service chamber. Each gets a separate certified notice, acknowledges it and leaves. The last clerk pauses to straighten a twisted satchel strap. You keep the exit clear until it is done."
      },
      {
        "if": {
          "flag": "trap",
          "is": "watch"
        },
        "text": "Three names belong to the early arrivals you caught while waiting. Winston docks the full trap to the shielded chamber. Each gets a certified notice and a clear exit. You wait for the third acknowledgement before marking the box empty."
      },
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "The borrowed trap is still empty. You return it closed. There is nobody in the carried column to forget."
      },
      {
        "if": {
          "flag": "trap",
          "is": "none"
        },
        "text": "You never carried a trap. Janine rules a line through the empty carried column."
      },
      "You phone the hotel. Its bellhop, Ernie, carries your message to Tull at the open desk: every absent employee has acknowledged the notice. Your countersignature is the last thing missing; Tull is waiting to witness it.",
      "When you return to Station Nine with the completed roll, he checks all forty-seven names, including his own. You countersign beneath him. He sets down his pencil and removes his eyeshade.",
      "“I think,” Tull says, “I’ll walk.”",
      "He goes through the doorway at an ordinary walking pace, and is gone before the corridor turns. The clock stops ticking. Back at North Moore, Janine confirms that the grid has settled; you switch off the receiver."
    ],
    "choices": [
      {
        "text": "File the completed receipt",
        "to": "E11"
      }
    ]
  },
  {
    "id": "E01",
    "title": "Clocked Out",
    "era": "streets",
    "cast": [
      "player",
      "dolores"
    ],
    "imagePrompt": "A cramped dispatch office above a bagel shop on a rainy night. Dolores, phone in one hand, calmly crosses a name off a flat yellow job slip on her desk with a pen in the other. Her expression is tired and matter-of-fact, with a faint kind smile; no anger or crumpled paper. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, walks out of the door into the rain. Alone with Dolores (no other couriers shown).",
    "text": [
      "You tell Dolores you’re finished for the night. She crosses your name off the slip and reaches for the telephone. “Fair enough. Get those brakes fixed.”",
      "You ride home through the rain. In the morning, the paper mentions a disturbance in a stamp shop and a long queue of people who didn’t show up in the photographer’s pictures.",
      "Janine collected the carrier herself. The immediate trouble was contained. Pell’s shop stays shut for a week while the Ghostbusters investigate the pipes.",
      "You never learn what was in the parcel. Months later, riding through Tribeca, you still sometimes hear a bell from under the road and wonder what it was asking for."
    ],
    "ending": {
      "kind": "good"
    },
    "onEnter": {
      "set": {
        "running": false
      }
    }
  },
  {
    "id": "E02",
    "title": "Signed For",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "slimer",
      "canister"
    ],
    "imagePrompt": "Warm firehouse reception on rainy night. Janine signs a yellow courier slip as player hands her brass mail canister. Slimer peers toward an open plain metal storage case on desk. Calm competent handover; no bulging closet, no ghost crowd, no alarm. Optional borrowed trap outside crop.",
    "text": [
      {
        "if": { "flag": "route", "is": "lobby" },
        "text": "You leave the hotel, unlock your bicycle from the entrance railing and ride back to North Moore with the carrier strapped in your bag. At the firehouse you lock up again and take the parcel inside."
      },
      "At the firehouse reception desk, you hand the carrier to Janine. She checks the intact seal, signs your original job slip and places the parcel in the shielded storage case prepared for it.",
      "“Received,” she says. “And thank you for telling us what changed.” Slimer, the green ghost who lives at the firehouse, peers into the case before she closes it. She waits for his fingers to move.",
      "The team takes over. They use separate traps for the wandering clerks while the twelve already in the grid remain there. The streets grow quiet. Janine staples her signed receipt to your job slip.",
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "You return the borrowed trap unused. Janine checks it back onto Winston’s shelf before closing your equipment loan."
      },
      "On Monday, Dolores pays the agreed hazard rate. The delivery was properly completed.",
      "The case itself remains open in a different sense: forty-seven clerks have been accounted for in confinement, but they still haven’t heard the message in their letter. Janine writes RELEASE INVESTIGATION on a fresh folder. Safe custody is real work. So is what comes after it."
    ],
    "ending": {
      "kind": "good"
    },
    "onEnter": {
      "set": {
        "running": false
      }
    }
  },
  {
    "id": "E03",
    "title": "Left at the Desk",
    "era": "under",
    "cast": [
      "tull",
      "clerks",
      "canister"
    ],
    "imagePrompt": "Cold Station Nine tube room at night after the courier's departure. Brass canister with dial rests sealed on desk, outside the empty receipt tray. Tull and three ordinary grey clerks study it uncertainly. No player or optional team visible; tightly framed desk scene. No capture effect.",
    "text": [
      "You set the carrier on the receipt desk before the bell, mark it delivered and walk back out. Nobody has signed for it. For a moment, the lighter bag feels like the end of the job.",
      {
        "if": {
          "flag": "team",
          "is": true
        },
        "text": "At the doorway, you tell Winston where you have left the carrier. He stays with the others to secure the room. Your delivery slip goes back into your bag with its signature box empty."
      },
      {
        "if": {
          "not": {
            "flag": "team",
            "is": true
          }
        },
        "text": "From the hotel telephone you tell Janine where you left it. She sends the team to secure the room. You have not abandoned its location, but you have handed over an unfinished delivery."
      },
      "At eleven-twenty, the clerks assemble around a carrier which has never passed through their receiving tray. Their night supervisor, Ambrose Tull, can see the closure label. The old routine still treats the parcel as unreceived, and he cannot bring himself to break its seal.",
      "The team works out the receiving mechanism and puts the notice through it. The clerks in the room are finally released. But the absent twelve still wait in the grid, and your job comes back to Dolores marked NO RECIPIENT ACKNOWLEDGEMENT. The team’s incident record has to stand in for the delivery you left unfinished.",
      "Dolores lays your unsigned slip beside the team’s incident record. You cross out DELIVERED and write LEFT FOR COLLECTION. It fits in the same small box. You wish you had written it before leaving the hotel.",
      {
        "if": {
          "flag": "trap",
          "is": "blockade"
        },
        "text": "You hand the full trap to the team before leaving the hotel. The six clerks inside are recorded alongside the twelve in the grid for separate release work."
      },
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "You return the unused trap when the team takes over at the hotel."
      }
    ],
    "ending": {
      "kind": "bad"
    },
    "onEnter": {
      "set": {
        "running": false
      }
    }
  },
  {
    "id": "E04",
    "title": "Tomorrow’s Mail",
    "era": "streets",
    "cast": [
      "clerks",
      "canister"
    ],
    "imagePrompt": "Post office secure sorting-room corner late at night. Brass canister with dial rests inside a labelled wire pending-mail cage, no legible text. Two pale Night Mail clerks gaze at it through the cage. No enormous crowd, no conveyor chaos, no human figures. Cold clock-lit atmosphere, humane and quiet.",
    "text": [
      "You take the post office’s lost-mail receipt and let the counter worker lock the carrier in a pending bin. It is a real receipt with a real number. It says tracing begins on the next working day.",
      "The night supervisor calls the Ghostbusters when the sorting-room clocks all stop at eleven-twenty. Janine has the carrier quarantined before it can reach a conveyor. The storage grid is stabilised and no ordinary letters are lost.",
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "Later that night, you take Winston’s unused trap back to the firehouse. Janine checks it onto his shelf and closes the equipment loan."
      },
      "On Monday, Dolores lays your lost-mail receipt beside the original job slip. The two name different recipients. The carrier is still in the post office’s quarantined bin, and you must collect it for the delivery to Janine that you accepted on Friday. You spend the morning arranging its release from the counter supervisor. The clerks remain divided between the grid and the team’s portable traps.",
      "You phone the post office again from Quickfoot. The recorded voice says your call is important. Your first ordinary delivery of the morning goes to someone else."
    ],
    "ending": {
      "kind": "bad"
    },
    "onEnter": {
      "set": {
        "running": false
      }
    }
  },
  {
    "id": "E05",
    "title": "Back on the Mat",
    "era": "hotel",
    "cast": [
      "player",
      "voss"
    ],
    "imagePrompt": "Golden Sedgewick lobby on rainy night. Player stands on entrance mat facing Mr Voss at reception; Voss lays yellow delivery slip on desk with restrained irritation. Only player and Voss shown. No physical restraint, no carrying courier, no crowd or optional equipment visible.",
    "text": [
      "You make it two steps down the staff stair before a security guard opens the door from the other side. He blocks the landing with one hand on the rail and waits for you to turn around.",
      "Back in the lobby, Voss moves your wet footprints into the same mental category as last year’s damaged ballroom. “I asked for a telephone number,” he says. “Not a demonstration.”",
      "You lose time while security checks your bag against the delivery slip. The receiver reaches {{clock}}. The carrier stays with you.",
      "Voss sets the slip on the desk. “We can begin again. You apologise, I make the call, Ernie escorts you. Or you leave.”",
      "Through the revolving door, you can see rain running toward Ann Street. Voss draws the telephone closer, but leaves his hand resting beside it."
    ],
    "onEnter": {
      "add": {
        "margin": -10
      }
    },
    "choices": [
      {
        "text": "Apologise and let Voss make the call",
        "to": "H03"
      },
      {
        "text": "Leave the lobby and use the known service stair",
        "to": "H04",
        "if": {
          "flag": "knowsChute",
          "is": true
        }
      },
      {
        "text": "Take the parcel to Janine and end your part in the emergency",
        "to": "E02",
        "set": { "route": "lobby" }
      }
    ]
  },
  {
    "id": "E06",
    "title": "The Reserve Gives Out",
    "era": "firehouse",
    "cast": [
      "clerks"
    ],
    "imagePrompt": "Firehouse basement on rainy night, lights dimmed by protective breaker trip. A small polite queue of translucent Night Mail clerks steps out of an isolated side enclosure beside a closed larger metal vault. No explosion, bulging door, street mob or non-postal ghosts. Exactly twelve clerks suggested in a compact queue, not hundreds. No player or optional team shown.",
    "text": [
      "The receiver strikes the end of its scale. At North Moore, the twelve captive clerks make one more simultaneous attempt to report for duty.",
      "Janine’s protective breakers cut out before the main vault can rupture. The isolated postal section loses its field. Twelve grey clerks emerge into the basement, apologising to the machinery as they pass. The rest of the grid stays shut.",
      "The team’s emergency plan keeps people clear, but containing the escape consumes the rest of the night. The carrier is secured wherever you have reached with it.",
      {
        "if": {
          "flag": "followup",
          "is": true
        },
        "text": "The notice has already released the staff in the tube room. That part of the work holds. But the twelve escaped clerks must be recaptured before their separate deliveries can be attempted.",
        "else": "The shift’s notice remains unacknowledged. The team contains the wandering staff while the twelve escapees are returned to custody."
      },
      "By morning, the streets are safe, the twelve are captive again, and the release file is thicker. Janine records the rescue as well as the unfinished work. The reserve prevented a larger disaster, but it could not preserve tonight’s chance to finish.",
      {
        "if": {
          "flag": "trap",
          "is": "blockade"
        },
        "text": "The six clerks in your portable trap stay separate throughout the emergency. You hand over the full box with its count attached."
      },
      {
        "if": {
          "flag": "trap",
          "is": "watch"
        },
        "text": "The three early arrivals in your portable trap are not part of the escape. You hand over their full box and make sure they remain on the release list."
      },
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "You return the unused trap with the carrier."
      }
    ],
    "ending": {
      "kind": "bad"
    },
    "onEnter": {
      "set": {
        "running": false
      }
    }
  },
  {
    "id": "E07",
    "title": "A Case Kept Open",
    "era": "firehouse",
    "cast": [
      "player",
      "egon",
      "peter",
      "ray",
      "winston",
      "canister"
    ],
    "imagePrompt": "Firehouse engine bay late rainy night. Player and four Ghostbusters review a paper case record on a workbench. Egon places brass canister in plain shielded metal case; Ray writes, Winston checks list, Peter uses wall telephone. Packs match approved designs. No capture flash, escaping ghosts or crowd.",
    "text": [
      "At the firehouse, you give Egon the carrier and ask for the isolation plan. He repeats the decision back: quiet the call, collect the wandering staff, then investigate release with the machinery stable.",
      "He does not put the brass parcel in the grid. It goes into a shielded case. Winston arranges separate traps for the thirty-five clerks still outside; the twelve already in the vault remain isolated from its other occupants.",
      "You help Ray turn your observations into a case record. Peter calls the hotel to arrange access, this time without a speech. By dawn, the haunting is contained and the readings are steady.",
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "Your unused loan trap goes back to Winston. He marks its return before assigning the team’s equipment."
      },
      "Ray writes forty-seven at the top of the release file, and circles it. “That’s the number we owe an answer.”",
      "You sign beside Ray’s count. He pins the release file above his workbench instead of putting it in the cabinet. By the time you wheel your bicycle out, he has begun the first page."
    ],
    "ending": {
      "kind": "good"
    },
    "onEnter": {
      "set": {
        "running": false
      }
    }
  },
  {
    "id": "E08",
    "title": "A Full Trap",
    "era": "under",
    "cast": [
      "player",
      "tull",
      "clerks",
      "trap"
    ],
    "imagePrompt": "The cold round brick tube room. The player, seen from behind in the silver helmet and mustard-yellow windbreaker, stands with one foot on the pedal of a flat grey trap with open hinged doors while a river of pale grey ghost clerks streams into it in a bright white-blue glow. Mr. Tull, the gaunt old clerk with silver side-whiskers, is the last in the line and looks back with a faint, disappointed smile. Dim brick walls.",
    "text": [
      "You set the unused trap in front of the assembled staff. “I’m going to contain the room,” you tell Tull. He looks toward the ceiling, where a hotel guest has started knocking on the floor.",
      "“I understand,” he says. He does not say that he prefers it.",
      "You clear your feet and press the pedal. The doors open; white-blue light draws in the thirty-five clerks still outside the firehouse grid. Tull goes last. The doors shut. The canister’s call falls quiet because no part of its shift is still wandering.",
      {
        "if": {
          "flag": "team",
          "is": true
        },
        "text": "Winston takes charge of the full trap for the return journey. You keep the carrier and write the number of people inside the box on the handover slip."
      },
      {
        "if": {
          "not": {
            "flag": "team",
            "is": true
          }
        },
        "text": "You carry the full trap and the original parcel to the firehouse. Winston Zeddemore, the Ghostbuster who owns the spare, checks your handover and takes responsibility for both."
      },
      "The borough is quiet and the machinery holds. The trap stays separate from the twelve postal clerks already in the grid. A faint tapping reaches you through its closed doors.",
      "Ray Stantz, another of the Ghostbusters, reads the label on the unopened carrier: a closure notice for all staff. He begins a new file for getting it to them. The city is safe tonight. All forty-seven clerks remain confined."
    ],
    "ending": {
      "kind": "good"
    },
    "onEnter": {
      "set": {
        "trap": "final",
        "running": false
      }
    }
  },
  {
    "id": "E09",
    "title": "The Work Between You",
    "era": "firehouse",
    "cast": [
      "player",
      "ray",
      "winston"
    ],
    "imagePrompt": "Warm firehouse engine bay late rainy night. Player, Ray and Winston at a bench with courier paperwork and original notice. Winston rests hand on player's bicycle; Ray writes a follow-up case list. Quiet working partnership, no applause, no delivery performed by Ray, no optional trap in view.",
    "text": [
      {
        "if": {
          "not": {
            "flag": "followup",
            "is": true
          }
        },
        "text": "In Station Nine, you countersign the original receipt. Tull records it in the station book and leaves after the staff who received the notice in the room. The team brings you and the carrier back to North Moore."
      },
      {
        "if": {
          "flag": "followup",
          "is": true
        },
        "text": "When tonight’s separate deliveries cannot be completed, you return to the hotel to tell Tull. He closes the station receipt with your countersignature, and departs. The open release file goes back to North Moore with the team."
      },
      "Later, in the firehouse engine bay, Winston puts your bicycle beside the bench. Ray lays the closure notice next to the case record. You made the delivery. The team kept the mechanism steady enough for you to make it.",
      "The twelve clerks in the grid have not received individual release notices. The street shift has settled, so the grid can be held safely while Ray researches the remaining service. That work has a named owner and a written count.",
      {
        "if": {
          "flag": "trap",
          "is": "watch"
        },
        "text": "The three early arrivals in your borrowed trap are entered separately. Winston accepts the full box; Ray adds all three to the release file. Their silence does not count as acknowledgement."
      },
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "You hand the unused trap back to Winston. He checks its closed doors, then returns it to the equipment shelf."
      },
      "Peter asks what to put on the invoice. “Delivery assistance,” you say. Winston laughs once and tells him to write it exactly that way.",
      "Ray gives you a copy of the unfinished case list. You fold it into your round book, leaving its numbered edge sticking out. Winston circles the firehouse telephone number on the cover. “Ask for us,” he says. “Not the invoice department.” Peter looks up. “That’s also us.”"
    ],
    "ending": {
      "kind": "good"
    },
    "onEnter": {
      "set": {
        "running": false
      }
    },
    "time": "FRI NOV 15 · LATE NIGHT"
  },
  {
    "id": "E10",
    "title": "The Next Delivery",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "canister"
    ],
    "imagePrompt": "Firehouse front desk late on rainy November night. Janine writes on a courier receipt and hands a case-number slip to player. Brass canister rests closed beside the paperwork. Only player and Janine visible. No morning sunlight, celebration, optional trap, Slimer or team.",
    "text": [
      {
        "if": {
          "not": {
            "flag": "followup",
            "is": true
          }
        },
        "text": "You countersign the receipt in Station Nine. Tull records it in the station book, removes his eyeshade and follows the clerks who heard the notice. You call the firehouse, retrieve your bicycle and bring the original carrier back to its commissioned address."
      },
      {
        "if": {
          "all": [
            {
              "not": {
                "flag": "followup",
                "is": true
              }
            },
            {
              "flag": "route",
              "is": "tunnel"
            }
          ]
        },
        "text": "Pell has kept your bicycle in his back room. When you collect it, you tell him the notice finally reached its desk. He locks up behind you with both hands on the key."
      },
      {
        "if": {
          "flag": "followup",
          "is": true
        },
        "text": "You return to Station Nine to tell Tull that serving the missing staff will need more work. He closes the station receipt with you and departs. Back at North Moore, you leave the copied evidence with Janine."
      },
      "At the firehouse desk, Janine signs your original courier slip. “Two addresses,” she says. “One invoice. We’ll fix that.”",
      "The haunting in the hotel has ended. The twelve clerks in the containment grid still need individual notices; they cannot hear a reading given beneath Park Row. The team can now hold the grid steady while their release is researched.",
      {
        "if": {
          "flag": "trap",
          "is": "blockade"
        },
        "text": "You hand over the trap with six clerks inside and insist that six goes on the receipt. Janine writes it down and repeats it back."
      },
      {
        "if": {
          "flag": "trap",
          "is": "watch"
        },
        "text": "You hand over the trap with the three early arrivals inside. Janine enters them separately from the twelve in the grid."
      },
      {
        "if": {
          "flag": "trap",
          "is": "empty"
        },
        "text": "You return the unused trap, still shut."
      },
      "On Monday, you ask for the release file’s number before you leave. Janine gives it to you without a joke. You write it beneath Friday’s completed delivery and leave a fresh line underneath."
    ],
    "ending": {
      "kind": "good"
    },
    "onEnter": {
      "set": {
        "running": false
      }
    },
    "time": "FRI NOV 15 · LATE NIGHT"
  },
  {
    "id": "E11",
    "title": "Everybody Off the Clock",
    "era": "firehouse",
    "cast": [
      "player",
      "janine",
      "slimer"
    ],
    "imagePrompt": "Quiet Monday morning at firehouse reception in pale sunlight. Janine returns a black courier job book to player across desk. Slimer sits on one wooden chair eating a hot dog; an ordinary empty chair stands beside him. Only these three characters. No applause, medal, ghost crowd, canister or trap.",
    "text": [
      "On Monday morning, the firehouse sounds like an ordinary badly organised workplace. A telephone rings. Somebody upstairs cannot find a sock. Nothing taps in answer from under the floor.",
      "Janine returns your delivery book. Inside is the completed forty-seven-name roll, with the station receipt countersigned beneath it. You find Vale’s name. Beside it, Winston has drawn a tiny watch with no hands. No Night Mail clerk remains in confinement.",
      "Egon has kept the separation record so another shift will not need to invent the procedure in an emergency. Ray has filed the original closure notice under DELIVERED, a category he says they should use more often.",
      "Janine pays the amended invoice and asks whether Friday nights are usually this complicated. You tell her the birthday cake was worse. “I’ll put that in the file,” she says.",
      {
        "if": {
          "flag": "heardSlimer",
          "is": true
        },
        "text": "Slimer is on the chair beside the desk, eating a hot dog. The other chair is empty. This time he doesn’t point at it.",
        "else": "Slimer is on the chair beside the desk, eating a hot dog. When you pass, he lifts one tiny hand from the bun. You lift yours from the handlebar."
      },
      "You tighten your helmet strap and put your book away. At the bicycle shop round the corner, you spend part of the payment on having the rear brake cable replaced. The wheel stops cleanly when you test it. At the next crossing, you wait for an elderly man to reach the pavement before you push off.",
      "There are still things in New York that only a courier can get done."
    ],
    "ending": {
      "kind": "good",
      "best": true
    },
    "onEnter": {
      "set": {
        "running": false
      }
    },
    "time": "MON NOV 18 · MORNING"
  }
];

// Resolve exhausted headroom before allowing another action.
const spends = (effects?: Effects) => (effects?.add?.margin ?? 0) < 0;
const costly = new Set<string>();
for (const page of raw) {
  if (spends(page.onEnter)) costly.add(page.id);
  for (const choice of page.choices ?? []) if (spends(choice)) costly.add(choice.to);
}
// Exhaustive arrival analysis proves these one-use investigation stops cannot exhaust the grid.
const unguarded = new Set(['R03', 'R05', 'R06', 'R07', 'F01', 'F03', 'T01', 'T03', 'T05']);
const guarded = new Set([...costly].filter((id) => !unguarded.has(id)));
const pages: Page[] = raw.map((page) =>
  !guarded.has(page.id) || page.ending ? page : {
    ...page,
    text: [...page.text, {
      if: le(0),
      text: 'The receiver reaches the end of its scale. The reserve has run out before you can take the next step.',
    }],
    choices: [
      ...page.choices!.map((choice) => ({ ...choice, if: choice.if ? all(choice.if, ge(1)) : ge(1) })),
      { text: 'Call in the emergency and secure the parcel', to: 'E06', if: le(0) },
    ],
  },
);

const story: Story = {
  id: 'return-to-sender',
  revision: 3,
  title: 'Return to Sender',
  subtitle: 'A Ghostbusters adventure',
  blurb: 'One last bicycle delivery on a rainy Friday: an unopened brass carrier, eighty-seven years late. The Ghostbusters can keep it safe. Finding out who still needs it will take a courier.',
  start: 'R01',
  eras: {
    streets: { label: 'Lower Manhattan' },
    firehouse: { label: 'Firehouse' },
    hotel: { label: 'Park Row' },
    under: { label: 'Underground' },
  },
  flags: {
    margin: { default: 65 },
    difficulty: { default: 'medium', values: ['easy', 'medium', 'hard'] },
    running: { default: false },
    visitedFirehouse: { default: false },
    visitedPost: { default: false },
    visitedEngine: { default: false },
    visitedDiner: { default: false },
    visitedTunnel: { default: false },
    visitedSorting: { default: false },
    knowsSite: { default: false },
    knowsChute: { default: false },
    copyRule: { default: false },
    heardSlimer: { default: false },
    roster: { default: false },
    team: { default: false },
    triedDown: { default: false },
    followup: { default: false },
    trap: { default: 'none', values: ['none', 'empty', 'blockade', 'watch', 'final'] },
    route: { default: 'none', values: ['none', 'lobby', 'chute', 'tunnel', 'team'] },
  },
  ui: { transition: 'slime' },
  difficultyNotes: {
    easy: 'The grid starts at 20% load. There is room for extra investigation, and unlimited undo.',
    medium: 'The grid starts at 35% load. A careful delivery allows a wrong turn; undo your last 2 choices.',
    hard: 'The grid starts at 50% load. Complete accounting needs a disciplined route. No undo.',
  },
  // Solo postal/lobby and researched team routes each cost 40 to release everyone.
  // Controlled discharge also needs 10 headroom: Hard has no spare, Medium has 15.
  difficulties: {
    easy: { set: { difficulty: 'easy', margin: 80 } },
    medium: { set: { difficulty: 'medium', margin: 65 } },
    hard: { set: { difficulty: 'hard', margin: 50 } },
  },
  clock: {
    flag: 'margin',
    label: 'GRID LOAD',
    format: 'number',
    unit: '%',
    risesFrom: 100,
    visibleWhen: is('running'),
    allowExpiredOn: [...guarded],
  },
  art: {
    stylePrefix: `Bright 1980s animated-film illustration: bold ink outlines, saturated colour, expressive faces, cinematic lighting, 3:2 landscape. No text, lettering or captions anywhere in the image, except where a stenciled word is described. The setting is Manhattan on a rainy November night in 1985: wet streets, steaming manholes, no snow. Streets are steel blue with sodium-orange light. The firehouse is brick red with warm lamp yellow. The hotel is gold and burgundy. Underground scenes are dark brick with ectoplasm-green glow. Ghosts are pale, see-through and friendly rather than scary, never gory. Only the characters listed for the scene appear; the Ghostbusters, Slimer, the clerks and the hotel staff appear only if described. No cars or other famous vehicles, no company logos, and no likeness of any real person. Family-friendly and slightly comic: nobody is hurt.`,
    cast: {
      player: `THE PLAYER: a 17-year-old bicycle courier in a dented silver bike helmet, a mustard-yellow nylon windbreaker with a silver reflective stripe, faded jeans and orange high-top sneakers, with the same black canvas messenger bag across the back: rounded rectangular flap, two vertical black straps with rectangular silver buckles, one small centered red label and one broad black cross-body strap. Match references/courier-kit.webp exactly. Shown from behind or over the shoulder with the face hidden, gender-neutral. Always the same helmet and mustard-yellow windbreaker.`,
      dolores: `DOLORES VANCE: a brisk woman in her fifties with grey-streaked black hair in a bun, cat-eye glasses, a green cardigan and a telephone headset.`,
      pell: `MR. ALDEN PELL: a stooped elderly man with white hair, half-moon glasses and a brown cardigan (a brown dressing gown late at night).`,
      hollis: `MR. HOLLIS: a lean man in his seventies in a navy postal-style cap and a grey raincoat, with a coffee mug and a twinkle.`,
      janine: `JANINE MELNITZ: a woman in her twenties with red curly hair, enormous round glasses and a mustard cardigan, brisk and sarcastic, often holding a carton of chow mein.`,
      peter: `PETER VENKMAN: a tall man in his forties with tousled dark hair and a permanent smirk, in a khaki jumpsuit with a round shoulder patch and a heavy grey backpack-sized machine with a wand on a cable.`,
      ray: `RAY STANTZ: a big, cheerful man in his thirties with a boyish face and wavy hair, in a khaki jumpsuit with a round shoulder patch and a heavy grey backpack-sized machine.`,
      egon: `EGON SPENGLER: a tall, thin, pale man with round glasses and swept-up hair, in a khaki jumpsuit with a round shoulder patch and a heavy grey backpack-sized machine. Serious and precise.`,
      winston: `WINSTON ZEDDEMORE: a calm, strong man in his thirties with a patient smile, in a khaki jumpsuit with a round shoulder patch and a heavy grey backpack-sized machine.`,
      slimer: `SLIMER: a squat, round, bright-green ghost the size of a beanbag chair with a huge grinning mouth, tiny arms and no legs, trailing a little green goo. Comic, never scary.`,
      voss: `MR. VOSS: a small, neat night hotel manager in a black suit, with a thin mustache and a tight smile.`,
      ernie: `ERNIE: a skinny young hotel bellhop in a maroon uniform and a small round cap, with a luggage cart.`,
      tull: `MR. AMBROSE TULL: a gaunt, dignified old ghost in a grey vest and shirtsleeves with silver side-whiskers and a green eyeshade pushed back on his forehead. Pale and see-through.`,
      clerks: `THE NIGHT MAIL CLERKS: pale, see-through ghosts of old postal clerks in grey vests, sleeve garters and green eyeshades, each carrying a leather satchel. Polite, never scary.`,
      canister: `THE CANISTER: a brass cylinder the size of a thermos with grey felt rings at both ends, a small brass plate on its side, and a round metal coaster-sized tag with a glass dial window taped on beside it.`,
      trap: `THE TRAP: a compact flat grey metal box, about 30 by 18 by 10 cm and small enough to strap to the messenger bag, with two hinged doors on top, a pedal on a cord and black-and-yellow hazard stripes.`,
    },
  },
  pages,
};

export default story;
