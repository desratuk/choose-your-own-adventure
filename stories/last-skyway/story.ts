import type { Story } from '../../src/engine/types';

const story: Story = {
  "id": "last-skyway",
  "revision": 1,
  "title": "The Last Skyway",
  "subtitle": "A mountain adventure · 1986",
  "blurb": "The observatory tram is stranded above the snowline. You are the new maintenance apprentice, with a notebook, an analogue test lamp and one weather window to bring it home.",
  "start": "A01",
  "eras": {
    "base": {
      "label": "Juniper Valley · 1986"
    },
    "gallery": {
      "label": "Protected Service Gallery"
    },
    "ridge": {
      "label": "Observatory Ridge"
    },
    "landing": {
      "label": "Crossover Landing"
    },
    "transit": {
      "label": "The Sheltered Return"
    }
  },
  "flags": {
    "window": {
      "default": 94
    },
    "running": {
      "default": false
    },
    "weather": {
      "default": false
    },
    "governor": {
      "default": false
    },
    "blankets": {
      "default": false
    },
    "traced": {
      "default": false
    },
    "corrected": {
      "default": false
    },
    "synced": {
      "default": false
    },
    "logged": {
      "default": false
    },
    "docked": {
      "default": false
    },
    "bridge": {
      "default": false
    },
    "moved": {
      "default": false
    }
  },
  "difficulties": {
    "easy": {
      "set": {
        "window": 110
      }
    },
    "medium": {
      "set": {
        "window": 94
      }
    },
    "hard": {
      "set": {
        "window": 86
      }
    }
  },
  "difficultyNotes": {
    "easy": "A generous weather window and unlimited undo. Time to investigate and recover.",
    "medium": "Room for one eight-minute mistake on a complete rescue. Undo your last 2 choices.",
    "hard": "A complete rescue needs a clean run. No undo."
  },
  "ui": {
    "header": "basic",
    "transition": "fade",
    "eraBadges": true
  },
  "clock": {
    "flag": "window",
    "label": "RESCUE WINDOW",
    "visibleWhen": {
      "flag": "running",
      "is": true
    },
    "allowExpiredOn": []
  },
  "art": {
    "stylePrefix": "Original warm 1980s mountain-adventure story illustration, painted gouache colours, crisp ink, tactile analogue machinery, playful human expressions, cream, pine teal and safety orange, cinematic 3:2 landscape. Family-friendly non-violent engineering, no combat or injury. Only listed characters appear, no real people’s likenesses or famous props or vehicles. Mara, Sol and Imani appear only when listed and physically present, never merely as telephone voices. State location, weather and time; enclosed rooms protect characters from mountain weather. Keep clothing word-for-word identical to cast. Player always unnamed and gender-neutral with face hidden. Show no optional companion, tool, wrap or plate box unless the scene explicitly requests it. For merged routes crop variable states out completely. No captions or legible text; labels and diagrams abstract. Snow reaches exposed span only in endings or after lower arrival. Distinguish stationary support rope, moving haul rope and enclosed pedestrian service gallery; no unsafe open-air repairs.",
    "cast": {
      "player": "THE PLAYER: unnamed gender-neutral young maintenance apprentice, face hidden from behind or over shoulder, rust-orange canvas work jacket over oatmeal jumper, dark indigo work trousers, brown lace-up boots, plain slate shoulder bag with one broad strap. Same clothing indoors and out. Small grey pocket notebook and orange-handled test lamp only when scene requests. No name badge or gendered facial styling.",
      "imani": "IMANI VALE: original adult woman with deep brown skin, close-cropped salt-and-pepper curls, round amber glasses, navy boiler suit with cream collar, burgundy knit waistcoat and black work boots. Practical warm expression, no real likeness.",
      "sol": "SOL ANWAR: original middle-aged nonbinary caretaker with medium brown skin, round face, short black curls, plum work jacket over pale blue shirt, charcoal trousers and black lace-up shoes. Small brass key ring when requested. No real likeness.",
      "mara": "MARA QUILL: original adult woman with light freckled skin, broad shoulders, short copper curls, moss-green cardigan over cream shirt, dark brown corduroy trousers and black ankle boots. Red knitted fingerless gloves when at cabin controller. No real likeness."
    }
  },
  "pages": [
    {
      "id": "A01",
      "title": "A Machine That Owes You Tea",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Inside the enclosed lower tram workshop, late afternoon in November 1986. Clear valley light below gathering mountain cloud. Player and Imani inspect a brass tea bell beside a workbench; no tram passengers visible.",
      "text": [
        "The tea bell in the lower tram workshop rings whenever someone shuts the tool cupboard. It is not supposed to. On your third afternoon as a maintenance apprentice at Juniper Mountain Observatory, you have repaired the cupboard and made the bell considerably worse.",
        "Imani Vale, the tram engineer, listens to the faint ting. “Excellent,” she says. “We can now take a break whenever we put something away.” She is wearing the same practical expression she wore when she hired you: pleased that you asked how the machinery worked before asking how fast it went.",
        "Outside, a yellow aerial tram hangs motionless above the white firs. The Skyway carries visitors between this valley workshop and the observatory on the ridge. Today it carries a telescope technician, a cook and a box of glass photographic plates. They should have arrived before the afternoon biscuit tin opened.",
        "The wall telephone rings properly. Imani answers it. Her smile goes away, but she keeps one hand resting on the workbench instead of reaching for a switch."
      ],
      "choices": [
        {
          "text": "Listen to the call",
          "to": "A02"
        }
      ]
    },
    {
      "id": "A02",
      "title": "The Car Between Stations",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Enclosed lower workshop in cloudy late afternoon. Player and Imani beside black corded telephone and a simplified tram plan, no other people.",
      "text": [
        "At the workshop telephone, Imani repeats the report so you can both hear it. The tram's traction motor stopped during a scheduled brake test. The cabin's roof brake has held it at a service landing, safely above a fenced maintenance balcony. Nobody is hurt.",
        "The ridge station has lost its normal electrical supply. A small diesel generator can run the auxiliary drive, but the transfer switch needs operating in person. A crosswind is bringing snow toward the mountain. When its leading edge reaches the exposed span, the tram must stop for the night.",
        "Imani takes the handset away from her ear. “Mara has the cabin. Sol is up at the generator. I need to stay here to operate the lower receiving winch. There is an enclosed service gallery to the ridge. You know the low-voltage test panel; Sol can supervise the switching.”",
        "You ask why she cannot send the winch operator. Imani taps the empty hook where the operator's coat usually hangs. “Dentist. Probably having a much quieter afternoon.” Outside the window, the yellow cabin looks small enough to put in a pocket."
      ],
      "choices": [
        {
          "text": "Ask what you would actually be responsible for",
          "to": "A03"
        }
      ]
    },
    {
      "id": "A03",
      "title": "The Job You Can Accept",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Enclosed workshop in overcast afternoon, player and Imani at a hand-drawn mountain route. Telephone on wall; no departure yet.",
      "text": [
        "Beside the workshop map, Imani describes a job with edges. You will walk the protected service route, test the control wiring with Sol, and help Mara choose the auxiliary drive settings. Nobody will ask you to climb a cable or open live power equipment.",
        "“Mara is the qualified cabin attendant,” Imani says. “She can veto a run. So can Sol. So can you. If the drive isn't right, we use the landing's enclosed refuge and wait out the front.”",
        "The refuge has heat, food and bunks. A delayed rescue would be disappointing and expensive, not a reason to gamble with people. Imani wants the cabin home before ice immobilises its machinery and the telescope's unprocessed glass plates become unusable. The people come first.",
        "You look at your repaired cupboard. It is the first thing here with your work on it. The mountain beyond the window is a rather larger second thing. Imani waits without touching the map again."
      ],
      "choices": [
        {
          "text": "Take the service assignment",
          "to": "A04"
        },
        {
          "text": "Stay and help in the valley workshop",
          "to": "E01"
        }
      ]
    },
    {
      "id": "A04",
      "title": "Two Ropes and One Cabin",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Overcast afternoon inside workshop. Player and Imani inspect a small bench model of stationary support rope and moving haul rope, no actual tram in room.",
      "text": [
        "At the bench, Imani rolls a wooden model along a taut wire. A heavy stationary rope supports the real cabin's wheels. A separate moving haul rope pulls it. Stopping the haul rope does not make the cabin fall; the independent roof brake grips the support rope.",
        "The auxiliary drive is slower than the normal motor. Its governor limits speed even if a control sticks. Two settings on the old console govern how the drive responds, not how brave its operator feels. Imani makes you trace the control circuit with your finger rather than memorise the knobs.",
        "The service landing is just below the ridge crossover, a guided section where the cabin can be directed toward either the sheltered return line or the telescope freight spur. The spur ends at an unheated loading shed. The return line leads down here.",
        "“A tram isn't a lift with scenery,” Imani says. “But the paperwork is trying very hard.” You work the model brake twice and leave it holding before following her to the dispatch desk."
      ],
      "choices": [
        {
          "text": "Make a departure plan",
          "to": "A05"
        }
      ]
    },
    {
      "id": "A05",
      "title": "A Window in Pencil",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Enclosed dispatch desk at late afternoon under grey mountain sky. Imani marks a paper weather chart while player watches; analogue clock and pencil, no readable generated labels.",
      "text": [
        "At the dispatch desk, Imani draws a pencil line across the latest weather chart. The rescue window is a conservative estimate of working time before the snow front makes the exposed span unusable. It is not a prediction that the world ends at the next tick.",
        "The desk clock starts your allowance at {{clock}}. Every investigation and journey will use part of it. At marked checkpoints you can stop and call the refuge plan instead. That decision remains yours even if the clock still looks generous.",
        "Imani writes a second note on the cabin card. Completing a controlled return with less than ten minutes left gives no time to drain and dry the auxiliary brake circuit before the freeze. Passengers can still arrive safely, but the tram will need a winter overhaul. A good rescue and a complete rescue are different jobs.",
        "You put the pencil behind your ear. It falls out immediately. Imani gives you a pocket notebook instead."
      ],
      "choices": [
        {
          "text": "Check the field telephone",
          "to": "A06"
        }
      ],
      "onEnter": {
        "set": {
          "running": true
        }
      }
    },
    {
      "id": "A06",
      "title": "Three People on the Line",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Enclosed lower dispatch desk, overcast afternoon. Close view of player at black telephone with Imani beside them; remote speakers never visible.",
      "text": [
        "At the workshop telephone you introduce yourself to the two people higher on the mountain. Mara Quill, the cabin attendant, sounds as though she has a smile tucked behind her voice. She reports both passengers seated, brake secure and the kettle at the refuge already filled.",
        "Sol Anwar, the observatory caretaker, answers from the ridge switch room. Sol used to build model railways and now looks after something with rather more windows. The diesel generator has passed its unloaded test. It stays disconnected from the tram until the wiring is checked.",
        "“We have a fine view of the valley,” Mara says. “Would quite like to return it.” Sol tells her the observatory has several spare views, but no spare afternoon.",
        "You repeat the stop rule to both of them. Mara agrees. Sol agrees. Imani then puts a short, orange-handled test lamp in your notebook pocket and shows you where the service gallery begins. Before leaving, you can inspect the dispatch room's records and stores."
      ],
      "choices": [
        {
          "text": "Look around the dispatch room",
          "to": "B01"
        }
      ]
    },
    {
      "id": "B01",
      "title": "Before the Gallery",
      "era": "base",
      "cast": [
        "player"
      ],
      "imagePrompt": "Enclosed lower dispatch room in cloudy afternoon. Player alone (Imani is outside the crop at the winch); weather chart, brake display and closed store cupboard. Crop omits optional notebook contents and blankets.",
      "text": [
        "In the lower dispatch room, you stand between a weather recorder, a brake demonstration rig and the store cupboard. Imani has moved through the adjoining doorway to the receiving winch; you can still hear her testing its empty drum.",
        "The service gallery door is unlatched. A notice asks staff to leave their outdoor boots on the rubber mat, then asks them to disregard the earlier notice asking precisely the opposite. Someone has drawn a very tired boot between them.",
        {
          "if": {
            "flag": "weather",
            "is": true
          },
          "text": "You have copied the weather recorder observations into your notebook."
        },
        {
          "if": {
            "flag": "governor",
            "is": true
          },
          "text": "Your notebook also holds the governor test results."
        },
        {
          "if": {
            "flag": "blankets",
            "is": true
          },
          "text": "The dry insulated plate wrap is fastened flat in your shoulder bag."
        },
        "Your remaining working window is {{clock}}. Nothing in this room can make it larger; some things may make the journey worth it."
      ],
      "choices": [
        {
          "text": "Compare the weather drum with the ridge log",
          "to": "B02",
          "add": {
            "window": -4
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "weather",
                  "is": true
                }
              },
              {
                "flag": "window",
                "gte": 5
              }
            ]
          }
        },
        {
          "text": "Work the brake demonstration rig",
          "to": "B03",
          "add": {
            "window": -4
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "governor",
                  "is": true
                }
              },
              {
                "flag": "window",
                "gte": 5
              }
            ]
          }
        },
        {
          "text": "Pack the insulated plate wrap",
          "to": "B04",
          "add": {
            "window": -4
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "blankets",
                  "is": true
                }
              },
              {
                "flag": "window",
                "gte": 5
              }
            ]
          }
        },
        {
          "text": "Release the gallery access lock",
          "to": "B05"
        },
        {
          "text": "Call off the trip and prepare the refuge plan",
          "to": "E02"
        }
      ]
    },
    {
      "id": "B02",
      "title": "The Tail of the Ribbon",
      "era": "base",
      "cast": [
        "player"
      ],
      "imagePrompt": "Enclosed weather desk at cloudy afternoon. Player alone studies smoked-paper weather drum and narrow blue ribbon inside a small glazed observation tube; Imani absent.",
      "text": [
        "At the weather desk, you compare the ridge log with a smoked-paper drum. The pen has drawn groups of three short teeth followed by a longer flat section. The written observations call these gust packets, with a predictable lull after each third gust. They are local turbulence from air spilling over the ridge, not the snow front itself.",
        "A blue ribbon in a little observation tube responds to wind at the exposed crossover. Its tail points downwind. In today's west wind it streams toward the east wall. The ridge log notes that the line tucked behind that east wall is sheltered; the western freight spur faces the gusts.",
        "You copy the three-and-lull pattern and sketch the ribbon's tail. The next drum record agrees with the last one. It is evidence from today rather than a comforting old instruction.",
        "A weather observer has pencilled a tiny hat on the drum's pressure pen. You leave that detail out of your sketch, although it explains why the recorder looks offended."
      ],
      "choices": [
        {
          "text": "Close the recorder cover and return",
          "to": "B01"
        }
      ],
      "onEnter": {
        "set": {
          "weather": true
        }
      }
    },
    {
      "id": "B03",
      "title": "The Patient Flywheel",
      "era": "base",
      "cast": [
        "player"
      ],
      "imagePrompt": "Enclosed demonstration bench in cloudy afternoon. Player alone tests a small guarded flywheel governor with two-position selector; no moving full-scale machinery.",
      "text": [
        "At the dispatch bench, you turn the demonstration crank. A small guarded flywheel spins, its weights rise, and the governor starts resisting the handle. This model uses a lamp instead of a real brake so an apprentice can make mistakes without providing a new entry in the incident book.",
        "At selector TWO the brake releases in short steps and reapplies when the drive stops pulling. At FOUR the release stays held between movements. FOUR makes an empty maintenance trolley easier to shift. A loaded passenger cabin needs the brake to reapply in every pause; otherwise a sideways gust can leave its suspension moving before the drive takes the load again.",
        "You try both positions with the model's wooden load attached. At TWO, each pause ends in a clean, patient hold. You copy the result without circling it. A note from Imani on the bench reads: MAKE THE MODEL PROVE YOU WRONG.",
        "The model does not prove you wrong. You stop its crank, replace the guard and leave the selector where you found it."
      ],
      "choices": [
        {
          "text": "Return to the gallery door",
          "to": "B01"
        }
      ],
      "onEnter": {
        "set": {
          "governor": true
        }
      }
    },
    {
      "id": "B04",
      "title": "Something Soft for the Glass",
      "era": "base",
      "cast": [
        "player"
      ],
      "imagePrompt": "Enclosed store cupboard in cloudy afternoon. Player alone folds a cream insulated wrap with two orange straps into a slate shoulder bag; no glass plates here.",
      "text": [
        "Inside the dispatch store, you find a cream insulated wrap made for the observatory's photographic plate box. Its two orange straps close around the box without touching the glass. Dry padding and controlled cooling will keep warm processed coatings from fogging when they reach the valley cold room.",
        "The box is already in the cabin, but Mara reported that its normal cover was left drying upstairs. You telephone her from the store extension to check the dimensions before packing the wrap. She reads them off the box. You read yours back. They match.",
        "“Thank you,” Mara says. “I was considering offering it my cardigan. The cardigan has filed an objection.”",
        "You fasten the folded wrap into your plain shoulder bag. It makes the bag bulky, not magical. You will still need to reach the cabin and fit it before the descent. The time spent finding a dry, correctly sized cover has come off your working window."
      ],
      "choices": [
        {
          "text": "Return to the dispatch room",
          "to": "B01"
        }
      ],
      "onEnter": {
        "set": {
          "blankets": true
        }
      }
    },
    {
      "id": "B05",
      "title": "A Door with a Memory",
      "era": "base",
      "cast": [
        "player"
      ],
      "imagePrompt": "Enclosed lower service-gallery access vestibule in cloudy afternoon. Player alone beside closed door with trapped-key lock, simple relay lamp and reset button; no tools touching live equipment.",
      "text": [
        "At the gallery entrance, you find a trapped-key lock. The door key cannot turn until the gallery's inspection trolley is parked and its electrical supply isolated. A green lamp shows that isolation has been completed. The key itself has a broad square shoulder and a narrow round tip.",
        "A little flag above the key slot remains halfway between two marks. You recognise the relay: its mechanism must be acknowledged locally after a remote isolation. The nearby reset button belongs to the door latch, not the tram drive.",
        "The door's thick glass shows an empty, lit corridor beyond. You can hear Imani at the winch through the wall. She is concentrating on a different machine and has left this small one to you. The access card says PUSH TO ACKNOWLEDGE. The polished key is tempting because it is already in your hand."
      ],
      "choices": [
        {
          "text": "Acknowledge the local relay, then turn the key",
          "to": "B07"
        },
        {
          "text": "Turn the key firmly through its stiff spot",
          "to": "B06",
          "add": {
            "window": -8
          },
          "if": {
            "flag": "window",
            "gte": 9
          }
        },
        {
          "text": "Leave the gallery closed and organise refuge supplies",
          "to": "E02"
        }
      ]
    },
    {
      "id": "B06",
      "title": "The Latch Wins",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Enclosed lower gallery vestibule under cloudy afternoon light. Player and Imani look at shut interlocked door, key undamaged, no forcing or sparks.",
      "text": [
        "In the lower vestibule, the key stops against its shoulder. A protective latch drops with a rather satisfied clunk. You let go instead of adding your other hand.",
        "Imani comes from the receiving winch when you call. She checks the key for damage and finds none. Together you wait through the latch's reset interval, confirm the trolley isolation, and acknowledge the relay properly. The lost time includes her winch recheck after leaving its controls.",
        "“The door did its job,” Imani says. “It would prefer a thank-you note to another attempt.”",
        "You write the reset procedure in your notebook. Imani returns to the winch. You are still authorised to use the service gallery; you have simply used some of the margin that could have gone toward the cabin. The key now turns with two fingers. You leave the supply isolation locked in place behind you."
      ],
      "choices": [
        {
          "text": "Open the gallery door",
          "to": "B07"
        }
      ]
    },
    {
      "id": "B07",
      "title": "Under the Mountain’s Sleeve",
      "era": "gallery",
      "cast": [
        "player"
      ],
      "imagePrompt": "Inside the enclosed lower service gallery at late afternoon, cloud visible through narrow windows. Player alone entering a warm pipe corridor; optional bag contents hidden.",
      "text": [
        "The acknowledged latch releases and you step into the enclosed service gallery. Behind you, the door closes without relocking you inside. Mechanical exit bars work from either side; Imani has been very particular about showing you that.",
        "Warm pipes run along one wall. The other carries the tram's low-voltage control cable and narrow windows looking across the slope. The gallery climbs through the mountain's service buildings rather than following the tram out over open air.",
        "You telephone Sol from the first junction. Sol confirms the auxiliary power remains isolated and promises to meet you at the ridge end. Mara reports that her passengers have voted the stranded cabin the world's least surprising scenic stop.",
        "The next section is a steady uphill walk to the old clock gallery. You tuck the notebook away and keep one hand free for the rail. The pipe insulation has been patched in so many colours that the corridor resembles an extremely long knitted scarf."
      ],
      "choices": [
        {
          "text": "Climb to the clock gallery",
          "to": "B08",
          "add": {
            "window": -8
          },
          "if": {
            "flag": "window",
            "gte": 9
          }
        },
        {
          "text": "Return to the lower dispatch room and call the refuge plan",
          "to": "E02"
        }
      ]
    },
    {
      "id": "B08",
      "title": "The Caretaker’s Landing",
      "era": "gallery",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed clock gallery at late afternoon under thickening cloud. Sol meets player beside stopped pendulum clock and a wall telephone; no tram passengers here.",
      "text": [
        "After the climb, you reach a landing lined with old observatory clocks. A round-faced caretaker in a plum work jacket is waiting beside the telephone. “Sol Anwar,” Sol says. “We met through a considerably smaller hole in the wall.”",
        "Sol has come down from the ridge switch room to show you the remaining route. The auxiliary generator is running unloaded behind locked guards. Its fuel and cooling checks are complete. The next job is to verify which control contacts actually reach the crossover.",
        "One clock on the landing has stopped at teatime. “Demonstration piece,” Sol says before you can ask. “If it agreed with the others we'd have to find it a job.”",
        "You compare the window estimate on your notebook with Sol's ridge observation. The rescue window is now {{clock}}. There is still a heated refuge near the cabin landing; it remains an alternative to any questionable piece of engineering. Sol leads you toward a junction beneath an old enamel sign."
      ],
      "choices": [
        {
          "text": "Follow Sol to the gallery junction",
          "to": "C01"
        }
      ]
    },
    {
      "id": "C01",
      "title": "Sixteen Steps or a Lift",
      "era": "gallery",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed gallery junction in grey late-afternoon light. Player and Sol stand between broad enclosed stairs and a small freight-lift gate; no other people.",
      "text": [
        "At the gallery junction, you and Sol can take broad service stairs or an old freight lift to the relay floor. The lift car is already here, with room for both of you. Its card says AUTOMATIC RETURN TO GROUND ON SUPPLY CHANGE.",
        "Sol points to a diagram of the buildings. The ridge generator is still settling onto its own lighting circuit; a supply change can happen while the tram circuit remains safely isolated. The stairs have a long landing for carrying equipment, but today neither of you has anything too heavy to carry.",
        "“People used to call it the express,” Sol says, sliding the lift gate halfway open. “Mostly people who sold it.” The cage is beautifully polished. The stair rail has ordinary wear where ordinary hands have used it for years.",
        "Above you, someone has repaired the enamel sign by painting a small staircase over a larger staircase. You consider which piece of history ought to carry you to work."
      ],
      "choices": [
        {
          "text": "Take the broad enclosed stairs",
          "to": "C02",
          "add": {
            "window": -6
          },
          "if": {
            "flag": "window",
            "gte": 7
          }
        },
        {
          "text": "Use the waiting freight lift",
          "to": "C03",
          "add": {
            "window": -14
          },
          "if": {
            "flag": "window",
            "gte": 15
          }
        },
        {
          "text": "Use the junction telephone to call the refuge plan",
          "to": "E02"
        }
      ]
    },
    {
      "id": "C02",
      "title": "The Ordinary Way Up",
      "era": "gallery",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed upper stair landing, cloudy late afternoon. Player and Sol emerge beside a warm pipe and closed relay-room door, no outdoor exposure.",
      "text": [
        "You and Sol take the service stairs. At the broad middle landing, a window catches the yellow tram between two bands of cloud. It has not moved. Knowing that its brake is holding makes the stillness look purposeful instead of abandoned.",
        "Sol carries nothing except a ring of building keys and a pencil worn almost to the rubber. You ask about the model railways. “Still have one,” Sol says. “Much stricter passengers. Never thank you when the timetable works.”",
        "At the upper landing, you stop long enough to wipe condensation from your notebook's cover. The climb has used its share of the rescue window, but you have reached the relay floor without disturbing any machinery.",
        "Sol checks the closed door's isolation tag before unlocking it. From behind the door comes the dry ticking of relays, like a cupboard full of very small clocks arguing about the time."
      ],
      "choices": [
        {
          "text": "Enter the isolated relay room",
          "to": "C04"
        }
      ]
    },
    {
      "id": "C03",
      "title": "The Express to Where You Were",
      "era": "gallery",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed freight lift at its ground stop in grey afternoon. Player and Sol stand behind open gate under a steady lamp, calm comic delay, no falling car.",
      "text": [
        "The freight lift carries you and Sol halfway up before its lamp changes colour. A relay clicks. The car slows, stops, then returns gently to the ground landing, exactly as its card promised.",
        "Sol holds the gate while you step out. The lighting supply has changed over. The lift will not accept another journey until its automatic return cycle and checks are complete. Nobody is trapped, but the time saved in your head has become time spent in the building.",
        "You take the stairs together instead. At the middle window, the yellow tram is still waiting on its independent brake. “The lift's passengers are doing better than my railway ones,” Sol says. “At least we get some exercise.”",
        "By the time you reach the upper landing, the rescue window reads {{clock}}. Sol checks the relay-room isolation tag. You wait for the key rather than proposing another express service."
      ],
      "choices": [
        {
          "text": "Enter the isolated relay room",
          "to": "C04"
        }
      ]
    },
    {
      "id": "C04",
      "title": "The Drawing and the Machine",
      "era": "ridge",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed ridge relay room in dim cloudy afternoon. Player and Sol beside disconnected low-voltage test rack and faded circuit plan, no open power panels.",
      "text": [
        "Inside the ridge relay room, Sol shows you the open isolator, locks it and keeps the key. The test rack uses a separate low-voltage battery. Neither of you will need to reach inside the guarded drive machinery.",
        "The faded circuit drawing has two pencil corrections and one coffee ring. Its return-line relay is marked NORTH. Behind the rack, the wire to that relay disappears beneath a newer sleeve. The sleeve's tag says RENEWED 1982, which is later than the drawing's last date.",
        "Sol hands you the test rack's approved sockets. The orange-handled lamp in your notebook pocket fits them. You can either spend time tracing the contacts through the test rack or trust the drawing and do a basic continuity check.",
        "“Both procedures are in the book,” Sol says. “The full one takes longer. I'd like to know what we're actually commanding before Mara puts a cabin on it.” The decision is yours to record."
      ],
      "choices": [
        {
          "text": "Set up the test rack",
          "to": "C05"
        }
      ]
    },
    {
      "id": "C05",
      "title": "Which Question to Ask",
      "era": "ridge",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed ridge relay room at cloudy late afternoon. Player and Sol at a test rack with orange-handled lamp disconnected on bench; no completed test implied.",
      "text": [
        "At the relay bench, you open the notebook to a clean sheet. The battery supply is small enough to be harmless to the drive, but large enough to make the test lamp honest.",
        "The basic continuity check asks whether a selected circuit conducts. It can confirm that no wire is broken without proving that a wire still goes where an old drawing says. The contact trace will need Sol to work the isolated crossover's position indicator while you follow each lamp response.",
        "Beyond the frosted window, the white sky has become grey. A cable trunk rattles once as the building contracts in the cold. You remind yourself that a noise and a fault are not the same thing.",
        "Sol puts the test sheet beside the coffee-stained drawing. “Your signature for the test you choose,” Sol says. There is room for observations as well as a tick."
      ],
      "choices": [
        {
          "text": "Trace both crossover contacts and their actual destinations",
          "to": "C06",
          "add": {
            "window": -4
          },
          "if": {
            "flag": "window",
            "gte": 5
          }
        },
        {
          "text": "Check continuity against the drawing",
          "to": "C07"
        },
        {
          "text": "Stop work and organise the refuge transfer",
          "to": "E02"
        }
      ]
    },
    {
      "id": "C06",
      "title": "Under the New Sleeve",
      "era": "ridge",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed relay room in cloudy afternoon. Player uses orange-handled lamp at isolated test sockets while Sol moves a small position indicator; no actual crossover movement or exposed mains.",
      "text": [
        "At the isolated test rack, you connect the lamp and ask Sol to move the position indicator through each stop. You repeat the test in reverse. A flicker becomes a steady light; a guess becomes a pattern.",
        "The NORTH contact now commands the western freight spur. SOUTH commands the eastern sheltered return line. The renewed wire sleeve conceals a swapped pair; the circuit is sound, but the old drawing describes the arrangement before the 1982 work.",
        "You draw two separate lines in the notebook, with the actual destinations at their ends. Sol checks them by operating the indicator once more without telling you which stop was selected. The lamp agrees with your sketch.",
        "“You've saved us some very confident wrong instructions,” Sol says. Together you label the drawing as superseded, record the contacts on the dispatch sheet and leave the test lamp disconnected. The tram itself has remained isolated throughout."
      ],
      "choices": [
        {
          "text": "File the test sheet",
          "to": "C08"
        }
      ],
      "onEnter": {
        "set": {
          "traced": true
        }
      }
    },
    {
      "id": "C07",
      "title": "A Tick in the Box",
      "era": "ridge",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed relay room in cloudy afternoon. Player and Sol with orange test lamp beside a ticked basic inspection sheet, connections hidden, no proof of contact destination.",
      "text": [
        "At the relay bench, you test continuity against the old drawing. Both circuits conduct without interruption. You sign the basic inspection line and write the limits of the test underneath: destinations not independently traced.",
        "Sol checks the battery is disconnected before closing the rack. “That tells us the wire is whole,” Sol says. “It doesn't tell us whether the old destination labels are right. We can still make an observed selection at the crossover.”",
        "You leave the drawing clipped to its board rather than copying its labels into your notebook as facts. It would be easy to turn a clean tick into more certainty than you earned.",
        "The generator note on the desk confirms stable voltage and ample fuel for a slow descent. From the telephone, Mara reports that one passenger has found a packet of ginger biscuits. She is treating this as a useful improvement in cabin morale."
      ],
      "choices": [
        {
          "text": "File the limited test sheet",
          "to": "C08"
        }
      ]
    },
    {
      "id": "C08",
      "title": "Two Useful Jobs",
      "era": "ridge",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed ridge relay-room desk in cloudy late afternoon. Player and Sol beside heat-distribution plan and closed generator-room door. No cabin or optional wrap visible.",
      "text": [
        "At the relay-room desk, Sol signs the power checks and telephones Imani. The lower receiving winch is ready. Mara will meet you at the crossover's enclosed observation booth after moving her passengers into the landing refuge. The cabin stays braked beside it.",
        "Sol also shows you the building heat plan. If you end the tram attempt here, the generator can be reassigned to the refuge and greenhouse annex. Their reserve heaters work, but spreading the diesel heat now would keep the observatory's seedlings and water pipes from freezing overnight.",
        "The two jobs compete for the same supervised shift. Sol cannot prepare the auxiliary drive and rebalance the heat plant at the same time. Both choices help someone. Only one might bring the cabin down tonight.",
        "You look through the wired glass at the grey sky. No machine has promised you a result. The people on the telephone are waiting for a decision."
      ],
      "choices": [
        {
          "text": "Continue with the supervised tram return",
          "to": "D01",
          "add": {
            "window": -6
          },
          "if": {
            "flag": "window",
            "gte": 7
          }
        },
        {
          "text": "Reassign the generator and prepare a comfortable refuge night",
          "to": "E10"
        },
        {
          "text": "Call the standard refuge plan without further work",
          "to": "E02"
        }
      ]
    },
    {
      "id": "D01",
      "title": "The Person at the Other End",
      "era": "landing",
      "cast": [
        "player",
        "mara",
        "sol"
      ],
      "imagePrompt": "Enclosed crossover observation booth in late afternoon beneath grey cloud. Mara, Sol and player meet beside a window; braked yellow cabin outside without visible passengers.",
      "text": [
        "Sol takes you along the enclosed link from the relay floor to the crossover booth. There Mara Quill is waiting, a broad-shouldered attendant in a moss-green cardigan. She shakes your hand as if you have already done something useful, then asks what your tests actually established.",
        "You tell her their limits as well as their results. Sol confirms the drive is still isolated. Through the window, the yellow cabin rests beside the maintenance balcony. Both passengers are now in the connected heated refuge with their glass plate box. They can return by a protected bridge if the tram is cleared.",
        "“The cook says a night here would be quite pleasant,” Mara says. “The telescope technician has introduced the cook to tomorrow's reservation calendar. They have different opinions.”",
        "Mara shows you the booth controls. The crossover has two fixed guide channels. Once selected, its tongue is mechanically pinned and independently checked before any cabin movement. Today your next task is simply to say which destination you want."
      ],
      "choices": [
        {
          "text": "Compare the two channels",
          "to": "D02"
        }
      ]
    },
    {
      "id": "D02",
      "title": "The Two Sides of the Wall",
      "era": "landing",
      "cast": [
        "player",
        "mara",
        "sol"
      ],
      "imagePrompt": "Inside glazed crossover booth in grey late afternoon. Player, Mara and Sol look toward empty bifurcation, west freight spur and east wall visible; no ribbon or labels spelling answer.",
      "text": [
        "From the observation booth, you can see the two channels separating beyond the cabin landing. One curves west toward a small freight shed; the other disappears behind the eastern retaining wall before turning downhill. A draught rattles the booth's closed outer shutter.",
        "The pointer on the control pedestal has two old labels: NORTH and SOUTH. These describe electrical contacts, not compass directions along the track. A separate mechanical diagram shows the physical destinations. You keep the two questions apart: where should the cabin go, and which contact will send it there?",
        "Mara waits with her gloved hand clear of the selector. Sol is beside the isolation key box. Neither assumes that being the newest person makes you unable to read a mountain.",
        "You have to nominate a physical destination first. The contact selection comes after everyone agrees what the selected tongue must do. Beyond the glass, the freight shed has a fine clear view of the whole valley."
      ],
      "choices": [
        {
          "text": "Nominate the eastern line behind the retaining wall",
          "to": "D04"
        },
        {
          "text": "Nominate the western freight spur with the open view",
          "to": "D03"
        }
      ]
    },
    {
      "id": "D03",
      "title": "A Fine View of Tomorrow",
      "era": "landing",
      "cast": [
        "player",
        "mara",
        "sol"
      ],
      "imagePrompt": "Enclosed crossover booth at late afternoon with first snow beyond west freight spur. Player, Mara and Sol study the physical route plan; cabin unmoved outside crop.",
      "text": [
        "In the crossover booth, Mara marks your nominated western spur on the physical route plan before anyone moves a switch. Its line ends at the freight shed. There is no connection onward to the valley receiving station.",
        "Sol checks the weather instrument. The exposed spur has begun collecting windblown ice. Reconfiguring a route inspection now would consume the safe preparation window for this attempt, so Mara closes the movement permit. The cabin has not left its brake.",
        "You go with Mara through the protected link to tell the two passengers. The cook makes room at the refuge table. The telescope technician covers the reservation calendar with a blanket and asks for a pencil.",
        "Everyone is safe, but the homeward journey will wait until the line can be checked after the front. You chose a view instead of a return path. Outside, the western shed gradually disappears behind snow."
      ],
      "choices": [
        {
          "text": "Close the spur permit and stay at the refuge",
          "to": "E03"
        }
      ]
    },
    {
      "id": "D04",
      "title": "A Word on a Switch",
      "era": "landing",
      "cast": [
        "player",
        "mara",
        "sol"
      ],
      "imagePrompt": "Enclosed crossover booth in dim cloudy afternoon. Player, Mara and Sol at untouched two-position selector, window crops optional notebook contents and external route.",
      "text": [
        "At the crossover booth, Mara writes EASTERN RETURN LINE on the movement permit. Sol checks the physical plan and agrees. The sheltered line is the destination; now its control contact must be selected.",
        "The old NORTH and SOUTH labels face you. Neither one mentions a destination. The selector will move only while Sol holds the permission key, and Mara will inspect the resulting tongue position before anything rolls.",
        "You open your notebook without finding a helpful arrow suddenly drawn across its last page. Some observations mattered when you made them. This is where they have to become a decision.",
        "Mara reads the permit back exactly, then asks for your contact instruction. Sol waits at the key box. The cabin outside remains braked, the passengers remain inside the heated refuge, and a small old switch gets an unusually attentive audience."
      ],
      "choices": [
        {
          "text": "Select SOUTH",
          "to": "D05"
        },
        {
          "text": "Select NORTH",
          "to": "D06",
          "add": {
            "window": -8
          },
          "if": {
            "flag": "window",
            "gte": 9
          }
        },
        {
          "text": "Close the permit and accept an overnight refuge stay",
          "to": "E04"
        }
      ]
    },
    {
      "id": "D05",
      "title": "The Pin and the Promise",
      "era": "landing",
      "cast": [
        "player",
        "mara",
        "sol"
      ],
      "imagePrompt": "Enclosed crossover inspection window at grey late afternoon. Player, Mara and Sol observe correctly pinned east guide tongue, empty track only; no cabin moving.",
      "text": [
        "At the crossover, Mara and Sol check the eastern guide tongue independently. Its indicator agrees with the physical stop. Sol inserts the mechanical locking pin; Mara records the pin number on the permit. Electrical labels can be mistaken. A pinned guide cannot quietly change its mind.",
        {
          "if": {
            "flag": "corrected",
            "is": true
          },
          "text": "Your first selection has been corrected and tested. You add the lost interval to the log instead of crossing it out."
        },
        "Sol authorises the auxiliary supply, then stays in the booth to monitor its indicators. Mara will accompany you across the protected bridge to the refuge and cabin. Imani remains at the receiving winch below. Everyone repeats the stop signal on the telephone before leaving it.",
        "You can still choose a refuge night. The people waiting beyond the door are warm, and warmth is not a failed engineering procedure. The decision to continue means completing the boarding checks carefully, not racing them."
      ],
      "choices": [
        {
          "text": "Take Mara’s protected bridge to the refuge",
          "to": "D07",
          "add": {
            "window": -8
          },
          "if": {
            "flag": "window",
            "gte": 9
          }
        },
        {
          "text": "Close the permit and remain in the refuge overnight",
          "to": "E04"
        }
      ]
    },
    {
      "id": "D06",
      "title": "The Tongue Tells the Truth",
      "era": "landing",
      "cast": [
        "player",
        "mara",
        "sol"
      ],
      "imagePrompt": "Enclosed crossover booth in cloudy late afternoon. Mara and Sol compare wrong guide indicator to plan beside player; no moving cabin or injury.",
      "text": [
        "In the booth, Sol enables NORTH. The tongue indicator moves toward the freight spur. Mara compares it with the actual guide, calls STOP, and leaves the movement permit open. Nobody has released the cabin brake.",
        "You tell Sol to return the selector to neutral. Together you inspect the control record and select SOUTH instead. This time the tongue points along the eastern return line. The two-person inspection repeats in full; the mistake costs time even though the interlocks have prevented movement.",
        "“The machine answered the word we gave it,” Mara says. “We asked the wrong question.” There is no scolding in her voice, which makes it easier to write an honest entry in the log.",
        "Sol keeps the supply permission key until the inspection is complete. You put the superseded label warning where the next shift will see it. The cabin still waits beside the landing, unhurried by your embarrassment."
      ],
      "choices": [
        {
          "text": "Repeat the locking-pin inspection",
          "to": "D05"
        }
      ],
      "onEnter": {
        "set": {
          "corrected": true
        }
      }
    },
    {
      "id": "D07",
      "title": "The Bridge to the Biscuit Tin",
      "era": "landing",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Inside enclosed heated refuge at late afternoon, cloud beyond glazed bridge. Player and Mara beside closed glass-plate box on table; passengers out of frame, optional wrap not visible.",
      "text": [
        "Mara leads you through the booth door and along the enclosed bridge into the refuge. Sol stays at the crossover console. The cook and telescope technician introduce themselves as Fen and Ellis, then move their chairs away from the bridge entrance so nobody has to squeeze past the kettle.",
        "The two passengers have been checked, counted and offered the same choices. They will board if Mara clears the cabin. If she does not, everyone stays in the refuge. Ellis points out the closed wooden plate box on the table; the glass records tonight’s telescope calibration, work that cannot be replaced by taking another photograph tomorrow.",
        {
          "if": {
            "flag": "blankets",
            "is": true
          },
          "text": "You take the cream insulated wrap from your bag. Ellis checks the dry lining, then helps you fasten its two orange straps around the closed plate box. The wrap stays on the box for the journey.",
          "else": "Ellis has wrapped the plate box in a dry refuge blanket. It will protect the glass from knocks, but it is not the insulated cover needed for controlled cooling. The calibration may have to be repeated."
        },
        "Mara checks the weather reading through the inner window. If the line is no longer worth running, a protected receiving cradle can lift the locked cabin a short distance level with the refuge floor. Passengers would remain here tonight; the cradle would secure the tram against overnight ice. It cannot lower anyone down the mountain."
      ],
      "choices": [
        {
          "text": "Help Mara inspect and board the passenger cabin",
          "to": "D08"
        },
        {
          "text": "Secure the cabin on the refuge cradle instead",
          "to": "E05"
        }
      ]
    },
    {
      "id": "D08",
      "title": "The Cabin Is Not a Workshop",
      "era": "landing",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Interior of enclosed yellow tram cabin at grey late afternoon. Player and Mara check a closed floor hatch and handrail; seated passengers and plate box outside tight crop. No optional wrap visible.",
      "text": [
        "You and Mara cross the short protected boarding bridge to the cabin while the passengers wait in the refuge. She checks the running gear indicators, door contacts, emergency light and cabin telephone. You read the independent brake indicator back to her. The floor hatch remains sealed; this is an inspection of indications, not an invitation to dismantle a tram in midair.",
        "Once Mara is satisfied, you return for Fen, Ellis and the plate box. They board over the same bridge, sit in the marked seats and fasten the box to its floor cleats. You take the fold-down apprentice seat beside Mara. Sol secures the bridge gate from the booth side and confirms it locked.",
        "Imani answers the cabin telephone from the valley winch. Sol reports the auxiliary drive ready at the ridge. Mara calls each person by their job and gets a reply before signing departure.",
        "Now the cabin contains people rather than a rescue plan. You listen to the quiet space between the gusts."
      ],
      "choices": [
        {
          "text": "Begin the controlled return",
          "to": "F01",
          "add": {
            "window": -8
          },
          "if": {
            "flag": "window",
            "gte": 9
          }
        },
        {
          "text": "Disembark everyone back into the refuge",
          "to": "E04"
        }
      ]
    },
    {
      "id": "F01",
      "title": "Across the Exposed Piece",
      "era": "transit",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Interior yellow tram cabin in dim cloudy late afternoon before movement; over-shoulder player and Mara at hand controller, valley outside. Passenger seats and optional cargo out of crop.",
      "text": [
        "In the stationary cabin, Mara holds the drive controller at neutral. The first section crosses a short exposed gap before the retaining wall shelters the return line. The permission circuit is closed; Sol can cut the auxiliary supply at the ridge, and Imani can stop the receiving operation below.",
        "The ribbon visible through the booth window snaps sideways, relaxes, snaps again. Mara asks you to choose the departure method and says she will stop if the cabin's suspension exceeds its marked limit. The roof brake can hold safely here as long as it is applied between movements.",
        "A continuous run would spend less time exposed. Short movements would spend longer on the gap but could fit the mountain's rhythm. The controller's little white pointer sits exactly at zero.",
        "Fen has gone quiet behind you. Ellis is reading the plate box's transit instructions for something to do. You have a telephone, a notebook and an afternoon's worth of observations. Mara has the lever."
      ],
      "choices": [
        {
          "text": "Use short movements in the lulls",
          "to": "F02",
          "add": {
            "window": -6
          },
          "if": {
            "flag": "window",
            "gte": 7
          }
        },
        {
          "text": "Run continuously across the gap",
          "to": "E06"
        },
        {
          "text": "Cancel departure and return everyone to the refuge",
          "to": "E04"
        }
      ]
    },
    {
      "id": "F02",
      "title": "The Space After the Third",
      "era": "transit",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Inside enclosed yellow cabin beginning controlled movement in grey late afternoon, no falling snow yet. Mara at neutral controller, player watches suspension pointer; close crop hides optional cargo and passengers.",
      "text": [
        "Beside Mara in the cabin, you count the sideways pulls. One. Two. Three. The long lull follows. You tell Mara to take the first short movement then, and she brings the auxiliary drive up gently. The cabin slides to the next marked hold position without exceeding its suspension limit.",
        "Sol confirms the current draw from the ridge telephone. Imani reports a smooth haul-rope feed below. Mara returns the controller to neutral and the brake takes the load. Through the window, the retaining wall is closer, but the cabin still has another exposed movement to make.",
        "The governor selector is on the panel beside your seat. Its two positions are TWO and FOUR. Sol has verified that it operates; the correct response for today's loaded cabin is your instruction to choose.",
        "Nobody supplies a fresh lecture through the telephone. You look at the two numbers, then at Mara's hand resting beside the lever. The machinery has done exactly what you asked so far."
      ],
      "choices": [
        {
          "text": "Set TWO for the next movement",
          "to": "F03",
          "add": {
            "window": -6
          },
          "if": {
            "flag": "window",
            "gte": 7
          },
          "set": {
            "synced": true
          }
        },
        {
          "text": "Set FOUR for the next movement",
          "to": "F03",
          "add": {
            "window": -6
          },
          "if": {
            "flag": "window",
            "gte": 7
          },
          "set": {
            "synced": false
          }
        },
        {
          "text": "Cancel the run and return to the refuge",
          "to": "E04"
        }
      ],
      "onEnter": {
        "set": {
          "moved": true
        }
      }
    },
    {
      "id": "F03",
      "title": "Behind the Wall",
      "era": "transit",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Inside enclosed yellow cabin beside eastern retaining wall, cloudy late afternoon. Player and Mara at panel with neutral pointer; no optional box or passengers visible, no dramatic damage.",
      "text": [
        {
          "if": {
            "flag": "synced",
            "is": true
          },
          "text": "The cabin makes its second short movement at TWO. In the pause, the brake reapplies cleanly. You and Mara watch the suspension pointer settle before continuing behind the retaining wall.",
          "else": "The cabin makes its second movement at FOUR. In the pause, the release remains held and the suspension pointer creeps sideways. Mara stops the attempt before its limit, applies the independent hold and has Sol select the conservative local mode. You finish the short section under that slower control. The brake linkage will need a workshop inspection afterward."
        },
        "Now sheltered from the worst crosswind, the cabin travels down the return line toward the valley receiving station. The protected part of the descent is steady rather than swift. Mara checks each tower passage with Imani; Sol monitors the auxiliary drive until its load falls away.",
        "At the valley approach marker, Imani asks you to check the working window before accepting the full docking cycle. It reads {{clock}}. The complete cycle needs six minutes with a positive margin left afterward. If that margin is gone, an approach cradle and the enclosed station bridge provide a slower safe arrival without running the full mechanism."
      ],
      "choices": [
        {
          "text": "Authorise the complete docking cycle",
          "to": "F04",
          "add": {
            "window": -6
          },
          "if": {
            "flag": "window",
            "gte": 7
          }
        },
        {
          "text": "Use the approach cradle and station bridge",
          "to": "F05"
        }
      ]
    },
    {
      "id": "F04",
      "title": "The Last Length of Rope",
      "era": "base",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Interior yellow cabin at lower receiving station, cloudy late afternoon. Mara and player watch station bumper through glass; no passengers or optional cargo in crop.",
      "text": [
        "The receiving winch takes the final length of haul rope. Through the cabin glass, you see Imani's station lights come one at a time: alignment, approach, docked. Mara holds neutral until the mechanical dock catches, then reads the latch indicator aloud.",
        "You ask Imani to confirm the actual catch from her window. She does. Only then does Mara release the passenger doors. The cabin is back in the lower station, and nobody has needed to pretend that a hopeful light was a physical inspection.",
        "Your working window reads {{clock}}. The first windblown snow has reached the upper ridge, still above the exposed span. Down here, the platform remains sheltered.",
        "Sol calls from the ridge to report the generator unloading normally. The long telephone circuit has become a string of people saying a job is finished. You do not disconnect it yet; there are passengers, a box and a machine still to hand over."
      ],
      "choices": [
        {
          "text": "Complete the platform handover",
          "to": "F06"
        }
      ],
      "onEnter": {
        "set": {
          "docked": true
        }
      }
    },
    {
      "id": "F05",
      "title": "The Bridge Is Also an Arrival",
      "era": "base",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Enclosed lower approach-cradle bridge in late afternoon with grey cloud outside. Player and Mara at secure cabin doorway, passengers out of crop; no optional cargo.",
      "text": [
        "At the valley approach, Mara calls for the stationary cradle. Imani locks its receiving jaws around the cabin's docking frame before opening the enclosed bridge gate. The main docking mechanism stays idle.",
        "You and Mara check the bridge floor together. Fen and Ellis then walk into the lower station with the plate box between them. Imani meets them at the inner door and marks both names off the manifest. The journey down the mountain is complete, even though the last length of machinery has been replaced by a very solid floor.",
        "Snow begins collecting along the high windows. The cabin must stay cradled until the weather clears and a crew can finish the docking inspection. You write that plainly on the equipment card.",
        "Mara sits for a moment on the folded bridge seat. “A bridge is allowed to be a success,” she says. You sit beside her and let the relief of an ordinary safe arrival catch up."
      ],
      "choices": [
        {
          "text": "Hand the winter inspection card to Imani",
          "to": "E07"
        }
      ],
      "onEnter": {
        "set": {
          "bridge": true
        }
      }
    },
    {
      "id": "F06",
      "title": "People Before Equipment",
      "era": "base",
      "cast": [
        "player",
        "mara",
        "imani"
      ],
      "imagePrompt": "Enclosed lower station platform under early-evening lamps, mountain snow outside high windows. Player, Mara and Imani beside closed cabin; passengers already beyond crop.",
      "text": [
        "On the lower platform, Mara escorts Fen and Ellis into the heated waiting room with the plate box. Imani checks their names off the manifest, telephones the observatory to confirm both arrivals, then turns back to the docked cabin.",
        "For a moment nobody speaks. The machinery is quiet in the particular way a workshop gets quiet when an unfamiliar noise finally stops. Imani rubs a clean patch in the condensation on the station window and looks uphill. Snow has reached the outer span.",
        "There is still work: hand over the plate box to its cold-room trolley, record the run and drain the auxiliary brake circuit if the time and its condition permit. Sol can finish the ridge end after receiving your lower-station readings. None of those tasks should be allowed to rewrite the passenger count, which is already complete.",
        "Mara asks how you want to record the job. You can write only the arrival and leave the machine locked for inspection, or provide the complete observations so the shift can finish what it safely can."
      ],
      "choices": [
        {
          "text": "Record the control settings, test limits and remaining window",
          "to": "F07",
          "set": {
            "logged": true
          }
        },
        {
          "text": "Record passenger arrival and leave the machine for inspection",
          "to": "F08"
        }
      ]
    },
    {
      "id": "F07",
      "title": "The Work Nobody Can See",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Enclosed workshop at early evening with snow outside. Player and Imani complete notebook and maintenance card beside closed drain cabinet; no magical repaired machinery.",
      "text": [
        "At the lower workshop desk, you lay out the notebook for Imani. You record observations as observations, guesses as guesses and the places where another person's check stopped a mistake. It takes more care than writing a triumphant sentence.",
        "Imani telephones Sol with the confirmed docking readings. Together they decide whether the auxiliary brake circuit can be drained before its exposed section freezes. Your log gives them the settings and test coverage they need; it does not turn missing tests into completed ones.",
        "The tea bell rings when Imani opens the tool cupboard. “Still working,” she says. You cannot tell whether she means your repair or the whole mountain.",
        "Mara returns from the waiting room with the passenger card. She puts it beside the maintenance sheet rather than on top of it. One records the people who are home. The other records what the next shift ought to know. You sign your own part and leave space for theirs."
      ],
      "choices": [
        {
          "text": "Review the completed handover",
          "to": "F08"
        }
      ]
    },
    {
      "id": "F08",
      "title": "What Came Home",
      "era": "base",
      "cast": [
        "player",
        "imani",
        "mara"
      ],
      "imagePrompt": "Enclosed lower workshop in snowy early evening. Player, Imani and Mara beside closed notebook and tea mugs, all optional cargo and equipment-state indicators outside crop.",
      "text": [
        "In the lower workshop, you meet Mara and Imani beside the bench. Fen and Ellis are in the waiting room; Sol remains at the ridge end until its shutdown checks are complete. The cabin is docked and its doors are locked against any new departure.",
        {
          "if": {
            "flag": "blankets",
            "is": true
          },
          "text": "Ellis sends word that the dry insulated wrap has kept the plates within their cooling limits. The calibration record can go to the cold room intact.",
          "else": "Ellis reports that the refuge blanket kept the glass whole, but the coatings fogged during cooling. The measurements will need repeating. The empty plate box will come back after processing."
        },
        {
          "if": {
            "all": [
              {
                "flag": "synced",
                "is": true
              },
              {
                "flag": "window",
                "gte": 10
              },
              {
                "flag": "weather",
                "is": true
              },
              {
                "flag": "governor",
                "is": true
              },
              {
                "flag": "traced",
                "is": true
              },
              {
                "flag": "logged",
                "is": true
              }
            ]
          },
          "text": "Your recorded tests and controlled settings let Imani and Sol finish the auxiliary drain-down within the remaining margin. The tram can be returned to service after its routine morning inspection.",
          "else": "Imani leaves the auxiliary mechanism isolated for a full winter inspection. Either its control history, its condition or the remaining margin is insufficient for a complete drain-down tonight. The passenger rescue stands; the equipment needs more work."
        },
        "Imani sets three mugs on the bench. You can hear snow brushing the station roof. What you carried home includes the choices you made as well as the things that fit in the cabin."
      ],
      "choices": [
        {
          "text": "File the complete rescue report",
          "to": "E09",
          "if": {
            "all": [
              {
                "flag": "weather",
                "is": true
              },
              {
                "flag": "governor",
                "is": true
              },
              {
                "flag": "traced",
                "is": true
              },
              {
                "flag": "blankets",
                "is": true
              },
              {
                "flag": "synced",
                "is": true
              },
              {
                "flag": "logged",
                "is": true
              },
              {
                "flag": "window",
                "gte": 10
              }
            ]
          }
        },
        {
          "text": "File the passenger and calibration report",
          "to": "E08",
          "if": {
            "all": [
              {
                "flag": "blankets",
                "is": true
              },
              {
                "not": {
                  "all": [
                    {
                      "flag": "weather",
                      "is": true
                    },
                    {
                      "flag": "governor",
                      "is": true
                    },
                    {
                      "flag": "traced",
                      "is": true
                    },
                    {
                      "flag": "blankets",
                      "is": true
                    },
                    {
                      "flag": "synced",
                      "is": true
                    },
                    {
                      "flag": "logged",
                      "is": true
                    },
                    {
                      "flag": "window",
                      "gte": 10
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "text": "File the passenger rescue report",
          "to": "E07",
          "if": {
            "not": {
              "flag": "blankets",
              "is": true
            }
          }
        }
      ]
    },
    {
      "id": "E01",
      "title": "An Apprentice at the Other End",
      "era": "base",
      "cast": [
        "player",
        "imani"
      ],
      "imagePrompt": "Enclosed lower workshop at snowy evening. Player and Imani prepare a maintenance card under warm lamps; no successful tram return shown.",
      "text": [
        "You stay in the lower workshop with Imani. She does not make a speech about courage. She shows you the receiving winch checks, then telephones Sol to cancel the auxiliary return and prepare the refuge.",
        "By evening, Mara, Fen and Ellis are warm beside the refuge kettle. The tram remains on its service-landing brake until the front passes and a full crew can inspect the route. The telescope bookings will change; the mountain can afford that more easily than it can afford hurried work.",
        "You help Imani make the next shift's parts list. There are jobs on it you already understand and jobs you will need to learn. She gives you the list to read back instead of assuming that staying meant you wanted nothing difficult.",
        "When she shuts the tool cupboard, the tea bell rings. You both take that as an instruction. Tomorrow there will still be a place here for an apprentice who knows which job they accepted."
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
      "title": "The Window You Kept",
      "era": "base",
      "cast": [
        "player"
      ],
      "imagePrompt": "Enclosed lower workshop at evening after return by protected gallery; snow outside. Player alone at telephone, no other cast or cabin in frame.",
      "text": [
        "You use the nearest field telephone to end your part of the tram attempt. Sol keeps the auxiliary drive isolated; Mara confirms her passengers will use the heated refuge. Nobody releases the cabin's service-landing brake.",
        "After the call, you follow the enclosed service route back to the lower workshop. Any colleague with you goes to their own shutdown post. Imani has left the inner door unlatched and a clear place on the bench for your notebook.",
        "The front closes the exposed span before another attempt can be prepared. The refuge telephone reports hot food and three occupied bunks. The cabin, its calibration plates and tomorrow's telescope programme will have to wait for a recovery crew and better weather.",
        "You chose a safe limit, but the Skyway rescue has not been completed. In the incident log, you write where you stopped and why. A later shift will have a better starting point because you did not try to make the ending look tidier."
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
      "title": "The Night Above the Cloud",
      "era": "landing",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Enclosed heated refuge at snowy evening. Player and Mara beside kettle and bunk curtains; passengers behind curtains out of frame, optional plate wrap omitted.",
      "text": [
        {
          "if": {
            "flag": "moved",
            "is": true
          },
          "text": "Before cancelling at the cabin controller, Mara reverses the first short movement under Sol’s local permission and checks the cabin back onto its landing hold. The protected boarding bridge can now be secured to its doorway again."
        },
        "You and Mara close the movement permit. If anyone has boarded, Mara returns them over the protected bridge to the refuge before the cabin is locked again. Sol secures the crossover at the booth and telephones the lower station with the cancelled departure.",
        "In the refuge, Fen counts the soup bowls and Ellis counts the plate-box catches. You help Mara count bunks. Everybody is warm; nobody has reached the valley as planned. The roof brake holds the cabin beside the landing while ice begins collecting on the unused return line.",
        "Later Sol joins you after shutting down the tram supply. Imani promises a recovery crew after the front. You can hear the disappointment in Ellis's voice when the next morning's telescope work is cancelled, but nobody disputes the stop decision.",
        "The Skyway's last run tonight is a crossed-out line on a permit. You put your notebook beside the bunk and listen to the weather that has replaced it."
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
      "title": "A Better Place to Wait",
      "era": "landing",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Enclosed refuge receiving bay in snowy evening. Mara and player inspect yellow cabin secured level in stationary cradle through window; no passengers visible.",
      "text": [
        "At the refuge, Mara calls Sol to operate the stationary receiving cradle. Its slow jaws hold the cabin's docking frame and bring the doorway level with the protected bay. You inspect the catch with Mara, then close and tag the empty cabin.",
        "Fen and Ellis remain inside the refuge with their plate box. With the tram under the bay roof, its doors and landing brake will not be buried in ice before a crew can reach them. Sol reassigns the generator after securing the tram circuit. Imani confirms tomorrow's recovery plan from below.",
        "You have not brought the passengers down, but you have completed a useful, deliberate recovery: everyone is sheltered and the cabin is secured where the next crew can work on it.",
        "Mara lends you the visitor book. Under PURPOSE OF VISIT you write maintenance. After thinking, you add soup. From the kitchen corner, Fen says that is the most accurate report anybody has made today."
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
      "id": "E06",
      "title": "The Lever Comes Back",
      "era": "landing",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Enclosed refuge in snowy evening. Player and Mara beside a closed movement-permit folder, calm disappointed faces; no dangerous moving tram.",
      "text": [
        "Mara applies continuous drive at your instruction. Before the cabin clears the service landing, the first gust moves its suspension pointer toward the marked limit. Mara returns the lever to neutral and applies the independent hold. Sol cuts the auxiliary permission when she calls STOP.",
        "The cabin remains within reach of the boarding bridge. You and Mara repeat its docking checks, then return everyone to the refuge. Nobody has been hurt. The continuous-run trial has used the remaining weather opportunity for another fully checked departure.",
        "Later, with snow against the windows, you write the actual instruction in the log. Mara does not let you turn it into “unexpected weather.” The gusts were there; the method was yours.",
        "Sol secures the drive for the night. The passengers are warm, but their ride home and the tram's recovery must wait. You help Fen wash the soup bowls, giving each one a careful, complete turn beneath the tap."
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
      "title": "Everybody Down",
      "era": "base",
      "cast": [
        "player",
        "imani",
        "mara"
      ],
      "imagePrompt": "Enclosed lower workshop in snowy evening. Player, Imani and Mara at warm bench with mugs, cabin and optional plate-box outcome outside crop.",
      "text": [
        {
          "if": {
            "flag": "bridge",
            "is": true
          },
          "text": "In the lower workshop, you hand Imani the approach-cradle inspection card. The cabin is secured above the enclosed station bridge; a crew will finish its docking when the weather permits.",
          "else": "In the lower workshop, you hand Imani the docked cabin’s inspection card. The auxiliary mechanism remains isolated for winter work; no new departure will use it tonight."
        },
        "Fen and Ellis are home in the valley. Mara telephones their arrival to Sol, who completes the ridge shutdown and arranges an overnight stay at the observatory. Nobody is forgotten simply because they worked at the other end of the line.",
        {
          "if": {
            "flag": "blankets",
            "is": true
          },
          "text": "Ellis takes the insulated plate box to the cold-room staff. You leave its detailed calibration report for their handover.",
          "else": "Ellis reports that the glass survived, but its coatings fogged in transit. The observatory will repeat the calibration. You record the loss alongside the safe passenger arrival."
        },
        "The tram needs more work. The people do not need another rescue. Imani sets a mug beside your notebook and asks you to show her where the next shift should begin. You turn to the first useful page instead of the most flattering one."
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
      "title": "The Pictures in the Box",
      "era": "base",
      "cast": [
        "player",
        "imani",
        "mara"
      ],
      "imagePrompt": "Enclosed cold-room anteroom at snowy evening. Player, Imani and Mara beside closed wrapped plate box, cream wrap two orange straps intact; no technician required in crop.",
      "text": [
        "From the lower workshop, you and Mara help Imani wheel the insulated plate box to the cold-room anteroom. Ellis has checked its temperature strip and signed for the intact calibration. The photographs inside will tell tomorrow's astronomers whether their measurements are true.",
        "The passengers are safely in the valley and the plate record has survived. The auxiliary tram mechanism still needs a winter inspection, so the observatory will use its road service when the front clears. Success can include a repair list without becoming a failure.",
        "Imani leaves the cream wrap fastened for the cold-room staff to open on their schedule. You had thought of it as something soft to put around glass. Now it looks like an afternoon of work that other people will not have to repeat.",
        "Back in the workshop, the tea bell rings. Mara raises her mug toward the ceiling. “A very well-equipped mountain,” she says. You decide the cupboard can keep its extra feature until morning."
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
      "id": "E09",
      "title": "The Last Skyway",
      "era": "base",
      "cast": [
        "player",
        "imani",
        "mara"
      ],
      "imagePrompt": "Enclosed lower workshop at snowy evening. Player, Imani and Mara with tea mugs beside closed maintenance log and warm lamp, no optional passengers or Sol physically present.",
      "text": [
        "In the lower workshop, Imani files the complete return report. Both passengers are home. The calibration plates are cooling intact. Your recorded contact trace, governor test and wind observations have supported the settings all the way down, and the ten-minute reserve has let the crew finish the drain-down before the freeze.",
        "Sol telephones the final ridge checks. The auxiliary system is dry and isolated, ready for the routine morning inspection rather than a winter rebuild. The observatory has kept its people, its measurements and the machinery that carries them between the two.",
        "Mara puts a spare movement-permit form beside your notebook. “For next time,” she says. You tell her you would prefer the next one to begin at the bottom and stay on schedule. “Ambitious,” Mara says.",
        "Outside, snow erases the high span. The yellow cabin is already under its roof. Imani shuts the tool cupboard and the tea bell gives a small, triumphant ting.",
        "“You can fix that tomorrow,” she says. You look at the three mugs on the bench. “Maybe,” you say. For tonight, it is doing exactly the right job."
      ],
      "ending": {
        "kind": "good",
        "best": true
      },
      "onEnter": {
        "set": {
          "running": false
        }
      }
    },
    {
      "id": "E10",
      "title": "The Warm Side of the Mountain",
      "era": "ridge",
      "cast": [
        "player",
        "sol"
      ],
      "imagePrompt": "Enclosed greenhouse annex at snowy evening. Player and Sol beside small seedling benches and guarded radiator; no tram or other people visible.",
      "text": [
        "At the relay-room desk, you choose the heat plant. Sol cancels the tram preparation, locks its supply isolated and confirms the refuge plan with Mara and Imani. Then you help read the low-voltage thermostat checks while Sol rebalances the generator's heating load.",
        "By evening, you and Sol walk into the greenhouse annex. Its seedlings stand in rows of reused biscuit tins. Warm water is circulating through the guarded radiator again. The refuge has steady heat; Mara reports everyone settled for the night with Fen's soup and a board game Ellis claims to understand.",
        "The cabin will need a recovery crew after the front, and the telescope calibration will need another session. You have chosen a different useful outcome: the observatory's vulnerable water pipes and seedlings will survive the freeze without an emergency repair.",
        "Sol straightens a plant label. “They never ask if you've fixed a tram before,” Sol says. “Very encouraging colleagues.” You put a hand near the radiator and feel tomorrow arriving in the pipes."
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
      "title": "The Spur Permit",
      "era": "landing",
      "cast": [
        "player",
        "mara"
      ],
      "imagePrompt": "Enclosed heated refuge at snowy evening. Player and Mara file a closed route permit beside a window looking toward obscured west shed; no cabin moving.",
      "text": [
        "At the refuge table, you and Mara close the western-spur permit. The inspection record says the cabin never moved. It also says the selected physical destination could not deliver its passengers to the valley.",
        "Sol leaves the crossover pinned and the tram supply isolated. Imani acknowledges the cancellation from the lower station. Outside, the freight shed has disappeared into the front; the view that made it attractive is gone too.",
        "Fen sets soup beside your notebook. Ellis has started moving tomorrow's telescope bookings onto a later page. Nobody blames a new apprentice for not knowing the mountain already, but your report must preserve what you learned about its two lines.",
        "The rescue has become an overnight wait. You draw the eastern retaining wall on the route sketch before putting the pencil away. A future choice ought to have somewhere better to start."
      ],
      "ending": {
        "kind": "bad"
      },
      "onEnter": {
        "set": {
          "running": false
        }
      }
    }
  ]
};

export default story;
