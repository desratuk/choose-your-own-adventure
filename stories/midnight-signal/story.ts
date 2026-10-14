import type { Story } from '../../src/engine/types';

const story: Story = {
  "id": "midnight-signal",
  "revision": 1,
  "title": "The Midnight Signal",
  "subtitle": "Greyhaven · 1986 · A voice ahead of the tide",
  "blurb": "A storm, a community radio station, and a distress call from after midnight. Tomorrow's trouble is arriving early. Find out where it belongs before it becomes true.",
  "start": "A01",
  "eras": {
    "station": {
      "label": "Gull Radio"
    },
    "harbour": {
      "label": "Greyhaven Harbour"
    },
    "basin": {
      "label": "The Repair Basin"
    }
  },
  "flags": {
    "copy": {
      "default": false
    },
    "wiring": {
      "default": false
    },
    "test": {
      "default": false
    },
    "code": {
      "default": false
    },
    "tide": {
      "default": false
    },
    "pier": {
      "default": false
    },
    "shelter": {
      "default": false
    },
    "pin": {
      "default": false
    },
    "wrong": {
      "default": false
    },
    "drained": {
      "default": false
    },
    "charge": {
      "default": 85
    }
  },
  "difficulties": {
    "easy": {
      "set": {
        "charge": 100
      }
    },
    "medium": {
      "set": {
        "charge": 85
      }
    },
    "hard": {
      "set": {
        "charge": 70
      }
    }
  },
  "ui": {
    "header": "basic",
    "transition": "vhs"
  },
  "clock": {
    "flag": "charge",
    "label": "RESERVE BANK",
    "format": "number",
    "unit": "%",
    "visibleWhen": {
      "flag": "charge",
      "gte": 0
    },
    "allowExpiredOn": []
  },
  "art": {
    "stylePrefix": "Original 1980s coastal mystery book illustration, gouache texture and fine ink, deep petrol blue, warm amber lamps, sea-glass green and muted coral. Cinematic 3:2 landscape, 1536x1024. Family-friendly, non-violent. Only listed characters appear; main companions only when described. No famous props or vehicles, no real people likenesses. State weather, time and location. Keep clothing identical in every appearance. Empty environmental compositions deliberately omit optional companions and evidence; do not add people, faces, hands or possessions from narrative context. No readable text, logos or border.",
    "cast": {
      "radio": "Gull Radio interior: cream analogue receiver with round amber meter above wide horizontal tuning dial, dark teal mixing desk, enclosed charcoal logging tape deck with clear lid, black rotary telephone, patch panel with exactly one black socket on left and one blue socket on right. Use only items explicitly requested.",
      "harbour": "Greyhaven customs-house harbour office and pier: whitewashed brick, dark teal doors, cream desk lamp, simple black handset, paper drum tide reader; small cream maintenance launch Petrel with teal wheelhouse at west pier. Use only items explicitly requested.",
      "basin": "Greyhaven repair-basin service spaces: whitewashed brick dry covered passage, brick shelter with wooden bench and wall telephone, dry control gallery with two guarded dark grey levers, separate indicator rods, inlet stop wheel and small square inspection hatch. Inner window looks into upper lobby above lower flood landing. Use only requested items."
    }
  },
  "pages": [
    {
      "id": "A01",
      "title": "The Weather Slot",
      "era": "station",
      "text": [
        "Rain drags silver lines down the window of Gull Radio. It is late on 17 October 1986, and you are the teenage volunteer trusted with the weather slot, the record sleeves and the kettle, though not necessarily in that order. Beyond the glass, the little coastal town of Greyhaven has pulled its curtains shut.",
        "Station manager Mara Vale stands at the mixing desk, counting seconds on her fingers. Her dark curls have escaped their pencil again. You lower the music fader when she points. A listener has requested something cheerful for a greenhouse that has just blown away.",
        "The studio shares this old customs house with the harbour office downstairs. Usually their receiver supplies shipping notices. Tonight it supplies a voice so faint that you think, for a moment, somebody is speaking from inside the wall.",
        "“Launch Petrel. Eighteenth October. Zero twelve. Water climbing. Three knocks overhead. Our door won't open.”",
        "Mara stops counting. The calendar still says the seventeenth. Midnight has not happened yet."
      ],
      "imagePrompt": "Stormy late night in a small 1986 coastal radio studio. Close view of the cream receiver and rain-streaked dark window; amber meter glows, no people visible.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Raise the harbour receiver",
          "to": "A02"
        }
      ]
    },
    {
      "id": "A02",
      "title": "A Voice Ahead",
      "era": "station",
      "text": [
        "You and Mara lean over the harbour receiver in the studio. The voice gives its name: Ellis Ward, engineer aboard the harbour maintenance launch Petrel. A launch is a small working boat. You have carried its engine-room notices upstairs before; Ellis always draws a kettle in the margin.",
        "Mara writes the words down, including the date. You check the wall clock against the telephone speaking clock. Both put midnight comfortably ahead of you. The receiver crackles again.",
        "“Tell Gull the red spool falls before the lamp goes out,” Ellis says. “Please don't send us back to the west pier.”",
        "On Mara's shelf, a red spool of old recording tape sits between two dictionaries. Nothing touches it. As you watch, the shelf bracket pulls free of damp plaster. The spool drops into a cardboard box. The desk lamp goes dark a heartbeat later.",
        "You look at Mara. She looks at the box. Neither of you volunteers to explain it."
      ],
      "imagePrompt": "Stormy late night in the studio. Red loose tape spool resting inside cardboard box below a sagging shelf, extinguished desk lamp, warm receiver glow. No people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Call the harbour office downstairs",
          "to": "A03"
        }
      ]
    },
    {
      "id": "A03",
      "title": "Ask Someone Living",
      "era": "station",
      "text": [
        "At the studio telephone, you dial the harbour office rather than putting the strange voice on air. Harbour keeper Jo Fen answers downstairs. Jo checks the duty board and calls Petrel on the normal marine set while you listen on the extension.",
        "Ellis answers cheerfully. Petrel is tied up. Its three-person crew are checking a pump chamber tonight; nobody is trapped. Ellis has sent no distress call. Jo tells the crew to stay together and keep their radio on.",
        "“Something is wrong,” Mara says beside you. “We can investigate that without announcing the end of the world.”",
        "Jo agrees to accompany you through the sheltered harbour passages if you want to help. Jo knows the gates; you know the station equipment. Mara must stay with Gull's transmitter and the telephone. She can contact the rescue service if the future starts arriving badly.",
        "The mains fail. The receiver survives on the customs house's shared reserve bank, but the record player slowly loses its argument with gravity."
      ],
      "imagePrompt": "Stormy late night studio desk, black rotary telephone beside handwritten note, record player stopped. No people, notes illegible.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Work with Jo and Mara",
          "to": "A04"
        },
        {
          "text": "Hand the notes to the adults and go home with the relief driver",
          "to": "E01"
        },
        {
          "text": "Put the unverified call straight on air",
          "to": "E02"
        }
      ]
    },
    {
      "id": "A04",
      "title": "The Reserve Bank",
      "era": "station",
      "text": [
        "In the studio's dry equipment alcove, Mara switches on the reserve gauge. It reads {{clock}}. The bank feeds the station's portable test socket and the harbour's remote controls. Ordinary lights and rescue-service radios have separate batteries. You cannot make more charge by waiting.",
        "“The pump chamber Petrel’s crew are checking sits beside the old repair basin,” Mara says. “Water gates control the level beside its boat workshop. We can operate those gates remotely from this bank. A complete gate cycle takes twenty. Sending the inspection record afterward takes another ten, and the recorder needs ten left to keep it intact until the relief generator arrives. We can still get people out by hand if we lose that option.”",
        "The record is more than a souvenir. A clear distress recording, a measured tide reading, the harbour sound register and the gate inspection together can prove which fault needs repairing. Without them, the council will close the basin and investigate later. People come first; keeping their workshop open would help too.",
        "Mara lays out blank cassettes and the station patch diagram. Jo will meet you downstairs when you are ready. You have time to choose what to prepare, but the powered bench draws from the same bank."
      ],
      "imagePrompt": "Stormy late night dry equipment alcove. Cream battery gauge, blank cassette, closed blue notebook, black and blue audio sockets on patch panel. No people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Copy the strange call onto a labelled cassette",
          "to": "A05",
          "add": {
            "charge": -5
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "copy",
                  "is": true
                }
              },
              {
                "flag": "charge",
                "gte": 6
              }
            ]
          }
        },
        {
          "text": "Trace the receiver and transmitter sockets",
          "to": "A06",
          "if": {
            "not": {
              "flag": "wiring",
              "is": true
            }
          }
        },
        {
          "text": "Try the transmitter at full power",
          "to": "A07",
          "add": {
            "charge": -15
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "test",
                  "is": true
                }
              },
              {
                "flag": "charge",
                "gte": 6
              }
            ]
          }
        },
        {
          "text": "Take the stairs to Jo",
          "to": "A08"
        }
      ]
    },
    {
      "id": "A05",
      "title": "Keep the Original",
      "era": "station",
      "text": [
        "At the studio's small tape deck, you and Mara copy the receiver's continuously running logging tape onto a fresh cassette. The red spool that fell was an old spare; the logger is safely enclosed under its clear lid. You label the cassette with the present date and the time you actually received the call.",
        "Mara reads the label back before putting the copy in a dry envelope. That detail matters. Anyone can record a prediction after it happens. The logger's telephone time signal and your original receipt time will let someone check the order.",
        "You listen once through headphones. Ellis sounds frightened but precise. Water climbing. Three knocks overhead. A jammed door. Not a scream, not a monster: somebody trying to give useful information.",
        "Mara keeps the envelope here, away from the weather. You do not have to carry the evidence into a flood to be useful."
      ],
      "imagePrompt": "Stormy late night studio tape desk. Close-up of single cassette and dry cream envelope beside enclosed logging deck, no hands or people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Return to the reserve alcove",
          "to": "A04"
        }
      ],
      "onEnter": {
        "set": {
          "copy": true
        }
      }
    },
    {
      "id": "A06",
      "title": "Where a Wire Goes",
      "era": "station",
      "text": [
        "Behind the studio desk, you trace the patch panel while Mara holds a torch. The black socket returns a signal to the studio monitor. The blue socket carries it to the hill aerial. Both make the same needle move. Only one sends anything beyond this building.",
        "You test them with the low-power tone generator. Black makes a pleasing, useless hum in your headphones. Blue gets a reply from the unattended hill repeater: two short ticks. A repeater receives a signal and sends it on, letting a modest set cover the valley beyond the harbour.",
        "Mara makes you unplug the test lead afterward. “Tomorrow's volunteer deserves a desk that isn't secretly doing tonight's experiment,” she says.",
        "You add the two socket destinations to the station notebook. The labels on the old panel are worn almost white. Their colours remain clear. What the needle does is not the same as where the signal goes."
      ],
      "imagePrompt": "Stormy late night studio, close view of black and blue patch sockets and disconnected single test lead, small headphones on desk. No people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Return to the reserve alcove",
          "to": "A04"
        }
      ],
      "onEnter": {
        "set": {
          "wiring": true
        }
      }
    },
    {
      "id": "A07",
      "title": "An Impressive Needle",
      "era": "station",
      "text": [
        "At the transmitter rack, you ask Mara for a full-power check. The needle swings magnificently. For a moment the room feels less helpless.",
        "Then Mara lowers the switch. “The hill repeater is a mast that relays our signal across the valley,” she says. “It answers a low-power test tone with two ticks. Full power proves nothing that little tone couldn’t.” This test has used fifteen reserve points. The rack warms your palms through its cover.",
        "You write the expenditure in the log. Mara doesn't take the pencil away or deliver a speech. She puts a square around the remaining charge instead. “Now we work with that,” she says.",
        "The reassuring thing about a meter is that it tells the truth. The awkward thing about a meter is exactly the same. Outside, rain rattles against the receiver's aerial cable, and Jo's footsteps sound on the stairs below."
      ],
      "imagePrompt": "Stormy late night radio transmitter rack, warm illuminated analog needle, single lowered power switch, no people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Return to the reserve alcove",
          "to": "A04"
        }
      ],
      "onEnter": {
        "set": {
          "test": true
        }
      }
    },
    {
      "id": "A08",
      "title": "The Stairs Between",
      "era": "harbour",
      "text": [
        "You leave Mara at the studio desk and descend the customs house's narrow interior stairs. Jo Fen waits in the harbour office, wearing a rust-orange waterproof coat over work clothes. Jo hands you a plain yellow loan raincoat from the office hook and checks that its sleeves leave your hands free.",
        "“I won't take you onto an exposed quay,” Jo says. “There are covered service passages between here and the basin. If I say stop, we stop.” You agree. Being helpful does not require becoming the fourth person someone must fetch.",
        "Jo gives Mara a final update by telephone, then clips a small harbour handset to their coat. You carry only a pencil and a dry notebook in your pocket. Any cassette you prepared stays upstairs with Mara.",
        "Through the office window, the west pier light sweeps the rain. Across the harbour, the old pump house answers with a noise like a hammer inside a biscuit tin."
      ],
      "imagePrompt": "Stormy late night customs-house staircase viewed down toward harbour office; yellow loan raincoat hanging on peg, no people or optional cassette.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Examine the harbour duty desk",
          "to": "B01"
        },
        {
          "text": "Stay with the office relief crew",
          "to": "E04"
        }
      ]
    },
    {
      "id": "B01",
      "title": "Nobody Missing Yet",
      "era": "harbour",
      "text": [
        "In the harbour office, Jo spreads the duty board across a cleared desk. Petrel's three crew are Ellis the engineer, skipper Nessa and apprentice Kit. They have gone ashore to check a sticking sluice: a gate that controls water entering or leaving the old repair basin. Their boat remains tied at the west pier.",
        "That explains why sending help to the boat might not send it to the crew. Jo calls again. Ellis reports that the three are together, dry, and about to inspect the basin chamber. Jo tells them about the strange message and asks them to remain in its upper lobby until you arrive.",
        "Ellis agrees without laughing. “Someone's been putting our notices on Gull for years,” the engineer says. “We can give that someone five minutes of attention.”",
        "Jo unrolls the harbour plan. There are two covered routes: one to the pier where the boat waits, one to the basin where the crew are working. Beside the plan sit a sound register and the tide reader."
      ],
      "imagePrompt": "Stormy late night harbour office desk with paper harbour plan, closed register and tide instrument. No people, no legible labels.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Study the desk before leaving",
          "to": "B02"
        }
      ]
    },
    {
      "id": "B02",
      "title": "The Harbour in Paper",
      "era": "harbour",
      "text": [
        "At the harbour office desk, you and Jo can hear the rain on the porch roof. The passage doors remain shut. The receiver beside the tide reader repeats ordinary weather chatter, with no second message from tomorrow.",
        "Jo has called the relief crew to cover this desk. The rescue service is aware of a possible pump-house fault, but Jo has not described a catastrophe as an established fact. The useful question is what can be checked now.",
        "The sound register lists signals heard around the harbour. The tide reader draws the sea level onto a turning paper drum, and a separate pencil record notes water inside the repair basin. Neither document will walk itself across to the council tomorrow. If you want a measured record, you will have to take the readings.",
        "Jo checks the handset. “I'll make the decisions about gates,” Jo says. “You can help me make them with better information.”"
      ],
      "imagePrompt": "Stormy late night harbour office, sound register and two separate paper water records under desk lamp. No people.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Check the harbour sound register",
          "to": "B03",
          "add": {
            "charge": -5
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "code",
                  "is": true
                }
              },
              {
                "flag": "charge",
                "gte": 6
              }
            ]
          }
        },
        {
          "text": "Compare the two water readings",
          "to": "B04",
          "add": {
            "charge": -5
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "tide",
                  "is": true
                }
              },
              {
                "flag": "charge",
                "gte": 6
              }
            ]
          }
        },
        {
          "text": "Inspect the boat at the west pier",
          "to": "B05",
          "add": {
            "charge": -15
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "pier",
                  "is": true
                }
              },
              {
                "flag": "charge",
                "gte": 6
              }
            ]
          }
        },
        {
          "text": "Call the waiting crew together",
          "to": "B07"
        },
        {
          "text": "Leave the investigation with the relief crew",
          "to": "E04"
        }
      ]
    },
    {
      "id": "B03",
      "title": "Three Knocks",
      "era": "harbour",
      "text": [
        "You open the sound register at the harbour desk while Jo checks its date. Greyhaven once warned workers with mechanical bells because motors drowned out shouted instructions. The west pier bell gives two strokes. The basin pump makes three hard knocks when its loose coupling turns.",
        "A note says the pump's noise carries through the chamber ceiling. Its repair is scheduled for Monday. Jo grimaces at that word; Monday is where cheap repairs go to become expensive ones.",
        "You copy the entries and their maintenance numbers into your notebook. Then, from across the water, the pump gives its uneven little announcement: knock, knock, knock. You tick the observation beside the entry rather than merely copying what ought to happen.",
        "It is not a code meant to keep strangers out. It is a record made by people who expected somebody else to need it. For once, you are that somebody."
      ],
      "imagePrompt": "Stormy late night office, open maintenance register with abstract marks, pencil resting beside it, dark harbour window beyond. No people.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Return to the harbour desk",
          "to": "B02"
        }
      ],
      "onEnter": {
        "set": {
          "code": true
        }
      }
    },
    {
      "id": "B04",
      "title": "Two Different Waters",
      "era": "harbour",
      "text": [
        "At the tide reader, Jo shows you the paper drum. The sea outside the harbour has passed high water and is falling. The basin's pencilled observations climb in the opposite direction. Rainwater is collecting behind a gate that ought to let it drain.",
        "You take a fresh pair of readings, write the receipt time from the office clock and sign the observation as the station volunteer. Jo countersigns. This is a measurement someone else can check, not just a hunch about a wet night.",
        "The old drainage diagram shows the safe order when the sea is lower: shut the sea inlet first, then open the basin outlet. Opening the inlet instead would let storm surges push back into the chamber, even while the average sea level falls.",
        "Jo folds the diagram into its wall sleeve. “We check the actual gate positions when we get there,” Jo says. Paper can tell you what to look for; it cannot turn a wheel."
      ],
      "imagePrompt": "Stormy late night harbour office, close-up of paper drum tide reader and separate pencilled graph on clipboard, lines rising and falling, no text or people.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Return to the harbour desk",
          "to": "B02"
        }
      ],
      "onEnter": {
        "set": {
          "tide": true
        }
      }
    },
    {
      "id": "B05",
      "title": "The Boat Is Not the Crew",
      "era": "harbour",
      "text": [
        "Jo escorts you along the covered pier passage to its locked viewing gate. Rain lashes the open quay beyond it. Petrel rocks against its fenders, cabin dark. You stay behind the gate while Jo calls the crew on the handset.",
        "Ellis answers from the basin's upper lobby. All three are still together. You have inspected the place where the boat belongs rather than the place where its people are. The passage lights and gate check have cost reserve charge without moving the investigation forward.",
        "Then the pier bell sounds twice. Across the harbour comes a thinner, uneven set of three knocks. The difference is clear out here, though you have no register entry to authenticate it unless you copied one earlier.",
        "Jo turns the handset down. “We can put this down as ruling something out,” Jo says. “Provided we actually rule it out.” The sheltered route back remains open."
      ],
      "imagePrompt": "Stormy late night covered pier passage looking through closed safety gate toward a small dark maintenance launch moored outside. No people aboard or on quay.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Return to the office with Jo",
          "to": "B06"
        },
        {
          "text": "Insist the rescue service search only the boat",
          "to": "E03"
        }
      ],
      "onEnter": {
        "set": {
          "pier": true
        }
      }
    },
    {
      "id": "B06",
      "title": "A Better Address",
      "era": "harbour",
      "text": [
        "You and Jo retrace the covered passage to the harbour office. The relief worker has arrived and is dealing with a report of somebody's garden shed occupying a bus stop. Jo gives the worker the boat check without interrupting the call.",
        "At the desk you cross WEST PIER off your working destination. The three crew are at the repair basin. A boat name on a radio is an identity, not a promise that its speaker is standing aboard.",
        "Jo lets you make that correction yourself. The reserve gauge has not forgiven the detour, but the investigation does not have to repeat it. On the wall, the basin diagram still waits beside the tide reader.",
        "You hear Mara on the handset asking whether you are both dry. Jo answers, “Dry enough.” You add, “And slightly better informed.” Mara says she will take that as a useful weather bulletin."
      ],
      "imagePrompt": "Stormy late night office desktop with harbour plan and pencil crossing an abstract route, no people, handset cropped out.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Reconsider the desk records",
          "to": "B02"
        }
      ]
    },
    {
      "id": "B07",
      "title": "Keep the Door Open",
      "era": "harbour",
      "text": [
        "Before leaving the harbour office, Jo calls Ellis with you listening. The crew have obeyed the request to wait in the upper lobby. Below them, water is beginning to seep across a lower inspection landing. It is not yet trapping anyone, but the door down there has started rubbing its frame.",
        "Jo tells them to stay above the landing and wedge the upper door open. They must not enter the lower room to fetch tools. Ellis repeats the instruction to Nessa and Kit, and then back to Jo. You write THREE IN UPPER LOBBY in your notebook.",
        "Mara relays that report to the rescue service. A crew is heading toward the basin by road, but a fallen tree delays their vehicle. Jo can reach the control gallery using the covered harbour passage. The plan is to inspect the fault while the professionals make their way around.",
        "For the first time, tomorrow's voice has a door you can keep from closing."
      ],
      "imagePrompt": "Stormy late night harbour office black handset on desk beside closed route plan, no people or depicted crew.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Take the covered basin passage with Jo",
          "to": "B08",
          "add": {
            "charge": -10
          },
          "if": {
            "flag": "charge",
            "gte": 11
          }
        },
        {
          "text": "Remain with the office relief team",
          "to": "E04"
        }
      ]
    },
    {
      "id": "B08",
      "title": "Under the Quay",
      "era": "basin",
      "text": [
        "You and Jo walk the enclosed service passage beneath the high quay. Your yellow coat brushes whitewashed brick. Rain drains in channels on the other side of the wall; the floor under your boots remains dry. Jo checks each junction before waving you forward.",
        "An inspection window reveals the basin beyond. The water looks black, except where lamplight lies across it in broken strips. A pump on the roof of the low chamber makes three uneven knocks. Its vibration comes through the handrail into your fingers.",
        "Jo stops at a brick shelter just short of the control gallery. There is a bench, a battery lamp and a telephone connected to the harbour office. If the route ahead is unsafe, this is where you will wait for the rescue crew.",
        "You can see the gallery door from here. It stands above the waterline, but its observation window is fogged. Jo takes out a cloth to clear it before trying the handle."
      ],
      "imagePrompt": "Stormy late night enclosed whitewashed service passage, dry floor, inspection window showing black basin water and pump-house silhouette. No people.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Continue to the gallery door",
          "to": "B10"
        },
        {
          "text": "Check in from the shelter telephone first",
          "to": "B09",
          "add": {
            "charge": -5
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "shelter",
                  "is": true
                }
              },
              {
                "flag": "charge",
                "gte": 6
              }
            ]
          }
        }
      ]
    },
    {
      "id": "B09",
      "title": "A Place to Wait",
      "era": "basin",
      "text": [
        "In the brick shelter, Jo uses the telephone while you wait beside the battery lamp. Mara reports that the rescue vehicle is working around the fallen tree. She asks Jo to give the crew a clear access route when they arrive.",
        "You describe the dry passage, the shelter and the gallery door. Mara repeats the route, then reads it to the rescue dispatcher. Spending charge on the powered line has bought something modest and useful: no one will waste time trying the exposed quay entrance.",
        "Jo hangs up. There is nothing heroic about the bench, and that is its best quality. You could sit here with the relief worker when they arrive, let Jo continue alone and still have helped.",
        "Beyond the inspection window, rain stipples the basin. Somewhere above it, the pump knocks again. The message from tomorrow was not a command addressed only to you. Other people are allowed to answer."
      ],
      "imagePrompt": "Stormy late night empty brick service shelter, plain bench, wall telephone and warm battery lamp; no people.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Join Jo at the gallery door",
          "to": "B10"
        },
        {
          "text": "Wait here for the rescue crew",
          "to": "E04"
        }
      ],
      "onEnter": {
        "set": {
          "shelter": true
        }
      }
    },
    {
      "id": "B10",
      "title": "Before the Handle",
      "era": "basin",
      "text": [
        "At the control gallery door, Jo wipes a clear circle in the window. Inside, the floor is dry and the wall controls are intact. Jo opens the door from the sheltered side, tests the threshold with a boot and lets you follow.",
        "Through a second window across the gallery you can see the upper lobby. Three torch beams answer Jo's wave. The Petrel crew are staying together beyond that glass, with their own door propped open. You will not need to cross the lower landing to reach them.",
        "Jo calls their names, and Ellis answers for the group, then asks each of the others to speak. Three voices, three people. You note that too.",
        "The noise overhead has become louder in here. It is a loose mechanical coupling, not somebody knocking to be let out. Beneath it, an indicator says the sea inlet is partly open. Another says the basin outlet is shut."
      ],
      "imagePrompt": "Stormy late night dry control-gallery doorway, small fogged observation window and separate distant lobby window with three abstract torch glows, no visible faces or figures.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Read the control gallery with Jo",
          "to": "C01"
        }
      ]
    },
    {
      "id": "C01",
      "title": "What the Future Left Out",
      "era": "basin",
      "text": [
        "Inside the dry control gallery, Jo checks the gate indicator rods against their mechanical stops. They agree with the lamps: inlet partly open, outlet closed. Water below the lobby is rising, but the three crew are staying out of it.",
        "Ellis speaks through the wall intercom. “The lower door was sticking when we arrived. We nearly all went down to shove it.” The engineer pauses. “Glad you called.”",
        "You can imagine the other version of tonight: three people below, the warped door closing behind them, a radio message nobody hears until too late. That version is on a tape at Gull, whether or not you made a separate copy. It is not yet happening in this room.",
        "Jo places the gate key in the control box but does not turn it. The reserve gauge repeats {{clock}}. Manual evacuation is possible from the upper lobby once rescuers arrive. A controlled drain could save the flooded workshop below as well."
      ],
      "imagePrompt": "Stormy late night control gallery, gate indicator rods, closed key-operated control box, rain dark window. No people or optional tools.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Examine the gate controls",
          "to": "C02"
        }
      ]
    },
    {
      "id": "C02",
      "title": "A Handle and a Record",
      "era": "basin",
      "text": [
        "Jo opens the control box in the gallery. Two guarded levers operate the sea inlet and the basin outlet. Their labels describe destinations, not which one to pull first. The remote drive can perform one complete gate cycle for twenty reserve points. Once the water moves, Jo can stop it manually.",
        "Beside the box is a small inspection hatch. A numbered shear pin couples the automatic timer to the inlet linkage. If that pin has cracked, the timer can finish its turn while the gate remains open. Photographing and logging the pin would preserve evidence before any repair changes it. The instant camera's inspection lamp draws five points from the test socket.",
        "Jo will inspect the pin without disturbing it if you ask. Alternatively, you can begin the gate operation or call for a manual evacuation. You remain behind the marked line while Jo handles all machinery. The teenage volunteer's job is observations and communication, not wrestling a sluice."
      ],
      "imagePrompt": "Stormy late night gallery control box with two guarded lever handles and small CLOSED adjacent inspection hatch. No people or camera; no completed repair.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Document the timer coupling",
          "to": "C03",
          "add": {
            "charge": -5
          },
          "if": {
            "all": [
              {
                "not": {
                  "flag": "pin",
                  "is": true
                }
              },
              {
                "flag": "charge",
                "gte": 6
              }
            ]
          }
        },
        {
          "text": "Choose the gate operation",
          "to": "C04"
        },
        {
          "text": "Ask for manual evacuation",
          "to": "C08",
          "set": {
            "drained": false
          }
        }
      ]
    },
    {
      "id": "C03",
      "title": "The Crack in Monday",
      "era": "basin",
      "text": [
        "At the gallery inspection hatch, Jo opens the dry cover while you aim the fixed inspection camera from behind the safety line. The coupling pin has a pale crack around its neck. Jo points without touching it. The timer's arm is resting at CLOSED; the separate inlet rod is still in its partly open position.",
        "You make an instant photograph, then write the pin number and both positions on its blank lower margin. Jo signs alongside your observation. The flash leaves a blue square floating in your vision. When it clears, the two positions still disagree.",
        "No saboteur has climbed in through the rain. A cheap replaceable part has failed, and a maintenance schedule has treated its warning as tomorrow's problem. That is a mystery a town can actually fix.",
        "Jo closes the hatch without removing the pin. You put the developing photograph flat inside your dry notebook. It belongs with the tide readings and sound register, if you collected those."
      ],
      "imagePrompt": "Stormy late night dry gallery, open small inspection hatch revealing one cracked narrow shear pin joining timer arm and gate linkage, plain instant photograph on nearby ledge. No people.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Return to the controls",
          "to": "C02"
        }
      ],
      "onEnter": {
        "set": {
          "pin": true
        }
      }
    },
    {
      "id": "C04",
      "title": "Which Water First",
      "era": "basin",
      "text": [
        "At the guarded controls, Jo asks you to state a sequence for the operation log. Jo will carry it out and watch the chamber level. Through the inner window, the three waiting torch beams stay above the lower landing.",
        "A short wave slaps the outside wall. Jo checks the upper lobby through the inner window, then returns to the controls. Ellis has asked whether to bring the tool bag when the rescuers arrive. Jo says to leave it on its hook; nobody will be sent back for a spanner.",
        "You put your pencil on the next line of the log. The recorder needs the order as well as the result. If an inspector arrives tomorrow, a page saying WE DID SOMETHING TO THE GATES will not be much help.",
        {
          "if": {
            "flag": "wrong"
          },
          "text": "The failed attempt is already recorded above. You can propose a corrected sequence, or stop operating the gates. Jo waits beside the controls; the crew remain in the upper lobby, and the road rescue team is still coming.",
          "else": "Jo waits for your proposal. The crew remain in the upper lobby, and the road rescue team is still coming. You have an alternative if you do not want to operate the gates."
        }
      ],
      "imagePrompt": "Stormy late night close-up of two guarded gallery levers at rest, pencil and operation log with indistinct marks on shelf. No people, readable sequence, visible gate indicator positions or instructional arrows.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Close the sea inlet, then open the basin outlet",
          "to": "C05",
          "add": {
            "charge": -20
          },
          "if": {
            "flag": "charge",
            "gte": 21
          },
          "set": {
            "drained": true
          }
        },
        {
          "text": "Open the sea inlet fully, then work the outlet",
          "to": "C06",
          "add": {
            "charge": -15
          },
          "if": {
            "all": [
              {
                "flag": "charge",
                "gte": 16
              },
              {
                "not": {
                  "flag": "wrong",
                  "is": true
                }
              }
            ]
          },
          "set": {
            "wrong": true
          }
        },
        {
          "text": "Leave the gates and arrange manual evacuation",
          "to": "C08",
          "set": {
            "drained": false
          }
        }
      ]
    },
    {
      "id": "C05",
      "title": "A Line Begins to Fall",
      "era": "basin",
      "text": [
        "Jo works the guarded levers in the dry gallery, closing the inlet before opening the outlet. You read the separate position rods aloud. They move this time; the manual remote drive has bypassed the faulty timer coupling.",
        "Below the lobby window, a black line of water hesitates against the wall. Then it slips downward. Ellis reports the same change from the other side. Nobody goes downstairs to celebrate. Jo secures the controls and tells the crew to remain where they are until the rescue team checks the route.",
        "The bank now reads {{clock}}. You log the operation and its result. A falling line looks like almost nothing, which makes it difficult to believe how much trouble a rising one promised.",
        "From the covered passage comes a knock that does not belong to the pump. The rescue team has arrived on foot from its vehicle. Jo opens the gallery door and gives them the crew count and the dry access route."
      ],
      "imagePrompt": "Stormy late night gallery observation window looking at now-receding basin waterline with wet wall band above it. Empty foreground, no people or implied cleared lower room.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Help with the handover",
          "to": "C07"
        }
      ]
    },
    {
      "id": "C06",
      "title": "The Wrong Direction",
      "era": "basin",
      "text": [
        "In the gallery, Jo opens the inlet fully from its partly open position. The next surge pushes through the widened inlet while the basin outlet is still shut. Water rises against the lower landing window. Jo immediately stops the drive and shuts the inlet by its manual wheel.",
        "The three crew are still in the upper lobby. Ellis reports that nobody has moved below. Your mistake has cost fifteen reserve points, not a person, but Jo has no intention of repeating it.",
        "You write the failed sequence and the stop in the log. The remote drive can still perform the proper full cycle if the bank has enough charge. Otherwise, the rescue team can evacuate the crew and leave the workshop closed.",
        "Jo keeps a hand beside the stop wheel. “An honest correction goes in the record,” Jo says. “An erased mistake doesn't become a success.” Rain thuds against the gallery roof. You turn to a fresh line."
      ],
      "imagePrompt": "Stormy late night gallery, stopped inlet manual wheel beside control box, water high beyond lower window, no people or flooding inside gallery.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Return to the operation choice",
          "to": "C04"
        },
        {
          "text": "Leave the outlet closed and call the job finished",
          "to": "E05"
        }
      ]
    },
    {
      "id": "C07",
      "title": "Three Across",
      "era": "basin",
      "text": [
        "In the gallery, you step back as the rescue team takes over. Jo guides them along the upper service connection to the lobby. A rescuer checks the floor and door wedge, then brings Ellis, Nessa and Kit through in that order. You count three, and the rescuer checks your count.",
        "Ellis is older than the voice sounded. Nessa keeps one hand on Kit's shoulder until Kit gently removes it to pull on a glove. All three are wet around the edges and deeply interested in the shelter's promise of a bench.",
        "“Was that really me on your radio?” Ellis asks you. You say you heard a voice claiming to be Ellis. It knew about the spool. That is what you can truthfully say.",
        "Jo sends the crew with the rescuers to the brick shelter. You remain in the dry gallery with Jo to finish the record. The pump goes on knocking over an empty lobby."
      ],
      "imagePrompt": "Stormy late night empty upper lobby seen through gallery window, door safely wedged open, three abandoned pools of torch reflection only from lights outside crop; no people.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Decide what to preserve",
          "to": "C08"
        }
      ]
    },
    {
      "id": "C08",
      "title": "People Before Paper",
      "era": "basin",
      "text": [
        {
          "if": {
            "flag": "drained"
          },
          "text": "In the dry gallery, Jo checks in with the rescue team. With the handover complete, the three Petrel crew are safe in the brick shelter. Nobody had to enter the lower chamber.",
          "else": "In the dry gallery, Jo locks the levers and calls for the evacuation. After a wait, the road rescue team arrives through the covered passage. You stay with Jo in the gallery while the rescuers bring Ellis, Nessa and Kit along the upper service connection to the brick shelter. Jo checks in with the team: all three are safe. Nobody enters the lower chamber."
        },
        "The workshop's future is a separate question. With a controlled drain and a complete authenticated record, the morning inspector can authorise a targeted coupling repair. Without both, the basin will stay closed pending a full survey. Jo will not invent readings just to get a quicker reopening.",
        "Mara asks by handset whether you are returning to Gull. Her logger contains the strange call, but the original tape will soon loop over that section unless a copy was made. The road crew's portable generator can power the station later; it cannot restore an overwritten recording.",
        "You can leave the remaining paperwork to Jo or return to help Mara send what you actually have."
      ],
      "imagePrompt": "Stormy late night dry gallery shelf with closed notebook and unoccupied intercom, empty upper lobby beyond window. No optional photograph visible.",
      "cast": [
        "basin"
      ],
      "choices": [
        {
          "text": "Return to Gull with Jo",
          "to": "C09"
        },
        {
          "text": "Finish with the rescue team",
          "to": "E06"
        }
      ]
    },
    {
      "id": "C09",
      "title": "The Safe Way Back",
      "era": "harbour",
      "text": [
        "You and Jo retrace the dry covered passage, passing the brick shelter where the rescue team has the Petrel crew. Ellis raises a mug. You raise an empty hand, which is less impressive but easier to carry. Jo confirms that all three will travel home with the team.",
        "At the harbour office, the relief worker takes Jo's spoken report. Jo enters the crew's safe arrival in the duty ledger and closes the public access gates. You hear the key turn without the urgency it had earlier.",
        "Mara calls down from the stairs. The time is approaching the point named in the strange transmission. She has kept the receiver running. You could listen to it all night, waiting for the universe to explain itself, or finish the ordinary work still within reach.",
        "Jo hands you the station copy of the operation log. Any measurements and photograph you made remain inside your notebook. Together you go upstairs."
      ],
      "imagePrompt": "Stormy late night customs-house internal stairs ascending toward warm studio door, no people, papers or optional evidence.",
      "cast": [
        "harbour"
      ],
      "choices": [
        {
          "text": "Lay out the record at the studio desk",
          "to": "C10"
        }
      ]
    },
    {
      "id": "C10",
      "title": "What Is Actually Here",
      "era": "station",
      "text": [
        "Back in Gull's studio, you put your notebook and Jo's operation log on the desk. Mara remains at the receiver; Jo stands by the telephone. Rain continues at the window, but somebody downstairs has found a biscuit tin that is not being used to catch drips.",
        "Mara inventories only material you actually gathered. A copied distress cassette, observed sound-register entry, signed paired water readings and coupling photograph would make the complete evidence packet. Missing pieces stay missing. The current operation log and crew report remain useful on their own.",
        "The council's duty inspector is reachable through the data receiver on the hill repeater, an unattended mast that relays Gull’s signal beyond the harbour. Gull can send a slow audio copy and spoken readings for ten reserve points. To preserve that upload until the generator arrives, ten points must remain afterward. Mara's tape deck needs that holding power.",
        "A telephone report can secure a closure and another inspection without spending the bank. It cannot carry the station's authenticated audio record tonight."
      ],
      "imagePrompt": "Stormy late night studio desk with CLOSED notebook and separate plain operation log, telephone and enclosed tape deck. Optional cassette and photograph absent from view. No people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Prepare a repeater transmission",
          "to": "D01"
        },
        {
          "text": "Let Jo make the telephone report",
          "to": "D07"
        }
      ]
    },
    {
      "id": "D01",
      "title": "The Needle Is Listening",
      "era": "station",
      "text": [
        "At the studio patch panel, Mara hands you the loose audio lead. Jo has called the duty inspector to arrange a receiver check. The inspector will acknowledge over the telephone after hearing Gull's identification, so you can test the route before sending the report.",
        "The black and blue sockets sit beside one another. The panel needle responds to either because it measures the desk's output, not the far end of the wire. You remember how often an impressive display can stand in for a useful result.",
        "Mara cues the identification tone at a level that does not spend the transmission reserve. “Give me a destination,” she says. Jo holds the telephone away from the desk speaker to avoid feedback.",
        "The decision is yours. You have come back with a report about real people; it deserves to travel farther than this room."
      ],
      "imagePrompt": "Stormy late night studio patch panel, unplugged single audio lead placed between black and blue sockets. No hands or people; neither socket selected.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Patch the lead to the blue socket",
          "to": "D02"
        },
        {
          "text": "Patch the lead to the black socket",
          "to": "D03"
        }
      ]
    },
    {
      "id": "D02",
      "title": "The Far End Answers",
      "era": "station",
      "text": [
        "In the studio, you connect the lead to the blue socket. Mara sends Gull's identification tone. Two ticks return from the hill repeater; then Jo nods at something the inspector says over the telephone.",
        "“Gull received,” Jo reports. “The inspector has your station identifier.” It is a small sentence, but it establishes a whole stretch of invisible wire and air. The panel needle alone could not have done that.",
        "Mara holds off on the transmission. She asks you to check the material and the reserve before sending. The holding requirement is still ten points after the ten-point transmission. You can choose a truthful partial report if the physical evidence is incomplete, or leave the matter with the telephone call.",
        "The studio clock is nearly at the time Ellis gave in the impossible message. Outside the window, no one is calling for help. That silence is allowed to be good news."
      ],
      "imagePrompt": "Stormy late night studio patch panel, single audio lead connected to BLUE socket, black socket empty, steady amber meter, no people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Check the evidence and reserve",
          "to": "D04"
        }
      ]
    },
    {
      "id": "D03",
      "title": "A Room Talking to Itself",
      "era": "station",
      "text": [
        "In the studio, you plug the lead into the black socket. Gull's identification fills the desk speaker. The needle responds beautifully. Jo listens to the telephone, then shakes their head: the inspector has received nothing.",
        "Mara stops the tone. You have routed the output back into this room. Nothing has been transmitted or erased, and the low-level check has not spent the reserve. The mistake is useful if you let its result change your plan.",
        "You look at the other socket. Jo stays on the line while the inspector waits. The receiver does not become less patient merely because you are embarrassed.",
        "Mara slides a blank label toward you. “Once we know, write it where the next volunteer can see it,” she says. First, though, there has to be something worth labelling."
      ],
      "imagePrompt": "Stormy late night studio patch panel, single audio lead connected to BLACK socket, blue socket empty, desk speaker grille in foreground. No people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Move the lead to the blue socket",
          "to": "D02"
        },
        {
          "text": "Play the evidence into the black socket and close the desk",
          "to": "E07"
        }
      ]
    },
    {
      "id": "D04",
      "title": "A Packet With No Inventions",
      "era": "station",
      "text": [
        "At the studio desk, Mara checks your inventory against Jo's report. The transmitter route has been acknowledged. Now the question is what you can honestly send and preserve.",
        "A full packet needs the copied early call, your observed sound-register entry, the signed comparison of sea and basin levels, and the photograph linking the closed timer arm to the still-open gate. A successful drain must also be in Jo's operation log. Together those establish the location, the direction of the water and the failed part.",
        "If anything is absent, the inspector will still accept a partial report and keep the basin closed for a survey. If the reserve cannot cover transmission plus holding power, Jo's telephone report will do. Mara has no special switch that turns missing observations into facts.",
        "You check the bank: {{clock}}. The report waits, and the people tomorrow’s message warned about are already safe."
      ],
      "imagePrompt": "Stormy late night studio reserve gauge beside closed blue notebook on the dark teal desk. No people, cassette, photograph, visible optional evidence or readable meter number.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Send and preserve the complete repair record",
          "to": "D05",
          "add": {
            "charge": -10
          },
          "if": {
            "all": [
              {
                "all": [
                  {
                    "flag": "copy",
                    "is": true
                  },
                  {
                    "flag": "code",
                    "is": true
                  },
                  {
                    "flag": "tide",
                    "is": true
                  },
                  {
                    "flag": "pin",
                    "is": true
                  },
                  {
                    "flag": "drained",
                    "is": true
                  }
                ]
              },
              {
                "flag": "charge",
                "gte": 20
              }
            ]
          }
        },
        {
          "text": "Send a truthful partial report",
          "to": "D06",
          "add": {
            "charge": -10
          },
          "if": {
            "flag": "charge",
            "gte": 20
          }
        },
        {
          "text": "Use the telephone report",
          "to": "D07"
        }
      ]
    },
    {
      "id": "D05",
      "title": "Read Back the Evidence",
      "era": "station",
      "text": [
        "In the studio, Mara sends the copied distress call and your spoken observations through the hill repeater. You read the sound-register number, the paired water readings and the coupling photograph's annotation. Jo confirms the controlled drain from the operation log. The duty inspector reads every reference back over the telephone.",
        "The remaining {{clock}} holds the station recorder while the relief team brings its generator. Mara seals the original copy and your evidence together. Nothing has been slipped into a gap or improved in the telling.",
        "The inspector authorises a morning coupling replacement followed by a supervised gate test. The workshop can reopen after that test instead of waiting weeks behind a survey notice. Tonight's rescue is already complete; this is a different kind of help, for the people who work here after the adventure ends.",
        "The clock reaches the time in the call. Mara turns the receiver up one last time."
      ],
      "imagePrompt": "Stormy late night studio tape desk, sealed cream evidence envelope beside running enclosed recorder, warm reserve lamp, no people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Listen to midnight arrive",
          "to": "D08"
        }
      ]
    },
    {
      "id": "D06",
      "title": "An Honest Incomplete Report",
      "era": "station",
      "text": [
        "At Gull's desk, you and Mara send a limited report through the hill repeater. Jo confirms that the three crew are safe. You include the observations you can support and mark the remaining evidence as not supplied in this packet.",
        "The inspector acknowledges receipt and keeps the basin closed pending a full survey. Even if you gathered more material, this transmission has not submitted the complete authenticated repair record. No one should reopen a water gate because a volunteer sounded confident.",
        "The remaining {{clock}} keeps the recorder alive until the relief generator reaches the customs house. Mara writes the receiver's acknowledgement beside the transmission entry, so the next shift will know somebody actually heard it.",
        "You put the pencil down. An incomplete job honestly described gives somebody else a place to begin. Downstairs, Jo's relief worker is finding dry coats for people whose night has become much longer than planned."
      ],
      "imagePrompt": "Stormy late night studio notebook open beside tape deck, plain incomplete checklist with abstract marks and large blank sections, no people or optional artifacts.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Leave the next shift a clear record",
          "to": "E09"
        }
      ]
    },
    {
      "id": "D07",
      "title": "The Ordinary Telephone",
      "era": "station",
      "text": [
        "In the studio, Jo calls the duty inspector while you and Mara tidy the desk. Jo reports the rescued crew and the state of the basin controls. The inspector orders the repair basin closed until a survey crew can inspect it in daylight.",
        "You have not sent an authenticated evidence packet over the repeater. That may cost the workshop time, but it does not undo the rescue. Mara labels the station's current records with exactly what happened, then turns off equipment the bank no longer needs to feed.",
        "The relief team arrives downstairs with a portable generator. Its ordinary engine noise is oddly comforting after a receiver that seems to have forgotten which direction time goes. Nobody asks you to solve the universe before helping unload the cable.",
        "Jo puts the telephone down. “Everyone accounted for,” Jo says. You decide that is a good sentence to hear twice."
      ],
      "imagePrompt": "Stormy late night studio rotary telephone on hook beside powered-down transmitter meter, warm independent lamp, no people or evidence props.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Help the relief team finish the night",
          "to": "E08"
        }
      ]
    },
    {
      "id": "D08",
      "title": "The Message That Changed",
      "era": "station",
      "text": [
        "At twelve minutes past midnight on 18 October, you stand with Mara and Jo beside Gull's receiver. Tomorrow has become an ordinary date on a wall calendar. Somewhere downstairs, the generator coughs, catches and settles.",
        "The receiver clicks. Ellis's voice says, “Petrel crew, all three ashore and safe. Thanks, Gull.” No climbing water. No jammed door. The signal is on the normal harbour channel, and Jo answers it normally.",
        "Mara compares the new message with her transcript of the sealed earlier copy. They do not match. You have preserved the difference, but that does not explain it. A storm, an old aerial and a voice arriving early remain a question for someone with better instruments and a very open mind.",
        "For now, the dangerous future has failed to keep its appointment. You did not defeat it by being certain. You checked a sound, a wire, a waterline and a broken pin, and let other people help."
      ],
      "imagePrompt": "Rain easing after midnight in radio studio, warm receiver beside sealed cream envelope, window beginning to reflect steady generator-powered lamplight, no people.",
      "cast": [
        "radio"
      ],
      "choices": [
        {
          "text": "Welcome the morning shift",
          "to": "E10"
        }
      ]
    },
    {
      "id": "E01",
      "title": "The Responsible Handover",
      "era": "station",
      "text": [
        "You hand Mara your notes in the studio and explain every word you heard. A relief driver takes you home by the inland road while Mara and Jo continue the investigation. You have not secretly erased the call or decided that it cannot matter because it is strange.",
        "In the morning, Mara telephones. Jo had told the crew to wait in the upper lobby above the pump chamber, away from the rising water, and they were brought out safely. The basin will remain shut for a survey. There are things nobody measured in time, and the impossible broadcast remains an unanswered question.",
        "Your next volunteer shift is still on the rota. Mara has added one instruction beside your name: CHECK THE SHELF BRACKETS. You can accept that assignment without a discussion of the nature of time.",
        "Good ending — You passed on a serious warning and let the duty team take responsibility."
      ],
      "imagePrompt": "Next morning after storm, studio rota beside repaired shelf bracket, warm grey daylight, no people.",
      "cast": [
        "radio"
      ],
      "ending": {
        "kind": "good"
      }
    },
    {
      "id": "E02",
      "title": "Everyone Calls at Once",
      "era": "station",
      "text": [
        "From Gull's studio, you put the unverified message on air as a disaster already happening. Within moments the telephone fills with questions. People drive toward the closed harbour to look for relatives who are not there. Mara cuts the broadcast and gives a correction.",
        "Jo keeps the Petrel crew waiting in the upper lobby above the flooding chamber and the rescue service eventually brings them out. Nobody is lost, but volunteers spend the rest of the night turning cars around instead of checking the sluice. The basin stays shut and the station must explain why it presented a prediction as a fact.",
        "By morning, your weather slot has become supervised training. The strange voice deserved attention. Your listeners deserved the difference between what you heard and what you knew.",
        "Bad ending — The warning became a rumour, and useful work disappeared beneath it."
      ],
      "imagePrompt": "Stormy night studio, several telephone message slips beside lit switchboard, stopped microphone safely on stand; no people.",
      "cast": [
        "radio"
      ],
      "ending": {
        "kind": "bad"
      }
    },
    {
      "id": "E03",
      "title": "Searching the Name",
      "era": "harbour",
      "text": [
        "At the covered pier gate, you insist that the search concentrate on Petrel because the voice used its name. Jo refuses to leave the crew unsupported and calls the rescue service with their actual location. Your repeated boat report nevertheless occupies the harbour channel until Jo takes back the handset.",
        "You wait in the office while the adults sort the conflicting messages. The three crew are brought out of the basin's upper lobby safely, but the lower workshop floods before anyone can make a controlled drain. Petrel remains exactly where it was, empty and tied up.",
        "When Mara asks for your account, you write both destinations and which one Ellis had actually confirmed. It is an uncomfortable piece of paper. It is also finally accurate.",
        "Bad ending — You kept the name of a boat and lost track of its people."
      ],
      "imagePrompt": "Stormy night harbour office window looking toward dark empty moored launch, rain reflections, no people.",
      "cast": [
        "harbour"
      ],
      "ending": {
        "kind": "bad"
      }
    },
    {
      "id": "E04",
      "title": "A Useful Pair of Hands",
      "era": "harbour",
      "text": [
        {
          "if": {
            "flag": "shelter"
          },
          "text": "You tell Jo you are stopping the investigation. Jo waits with you in the dry brick shelter until the relief worker arrives, then continues with the rescue team. You help the relief worker record names and pass on messages.",
          "else": "You tell Jo you are stopping the investigation. Jo makes sure the relief worker is at the harbour office desk before leaving you there to continue with the rescue team. You stay dry and help the relief worker record names and pass on messages."
        },
        "By the time everyone returns to the customs house, the Petrel crew are safe. The basin must close for a survey; there was no complete controlled-drain evidence packet to clear a quick repair. That is work for tomorrow, with daylight and more people.",
        "Mara finds you downstairs sorting dry gloves into actual pairs. She thanks you for saying where you were and what you could do. You have helped without pretending that help only counts at the dangerous end of a corridor.",
        "Good ending — You chose a safe supporting role and stayed useful."
      ],
      "imagePrompt": "After midnight rainy harbour office, paired dry gloves arranged on bench beside warm lamp, no people.",
      "cast": [
        "harbour"
      ],
      "ending": {
        "kind": "good"
      }
    },
    {
      "id": "E05",
      "title": "A Closed File, an Open Problem",
      "era": "basin",
      "text": [
        "In the control gallery, you call the job finished after Jo stops the surge. Jo corrects that report at once: the inlet has been shut manually, but the basin outlet is still closed. Rainwater continues collecting below the lobby.",
        "The rescue team reaches the crew by the upper service connection and takes all three to the shelter. Jo keeps you in the dry gallery while they work. The flooded workshop cannot be saved by writing DONE on an unfinished operation.",
        "Back at the office, you help Jo record the failed sequence and the incomplete drain. Nobody asks you to pretend it was a success. The repair basin will stay closed until a full survey can account for the damage.",
        "Bad ending — You stopped after stopping the mistake, before finishing the repair."
      ],
      "imagePrompt": "Stormy night dry control gallery, closed outlet indicator and dark water high beyond window, no people.",
      "cast": [
        "basin"
      ],
      "ending": {
        "kind": "bad"
      }
    },
    {
      "id": "E06",
      "title": "Three Is the Important Number",
      "era": "basin",
      "text": [
        "You leave the gallery paperwork with Jo and join the rescue team in the brick shelter. Ellis, Nessa and Kit sit together on the bench. Someone has found three cups; nobody complains that they do not match.",
        "You confirm the names for the rescue log, then ride back to the customs house with the relief party. Any successful drainage work is recorded, but without a completed authenticated evidence transmission the basin will still await an inspector's survey. Jo has the operational handover.",
        "Ellis asks whether the radio really spoke from tomorrow. You answer that it spoke early enough to make you call. The engineer turns that over, then says, “Good enough for tonight.”",
        "Good ending — The crew are safe. You leave the remaining investigation to the people taking the next shift."
      ],
      "imagePrompt": "Stormy night brick service shelter, three mismatched cups on bench, empty frame with people outside crop; no proof of any optional repair.",
      "cast": [
        "basin"
      ],
      "ending": {
        "kind": "good"
      }
    },
    {
      "id": "E07",
      "title": "Only Gull Heard Gull",
      "era": "station",
      "text": [
        "In the studio, you play the material into the black return socket and close the transmission log without an acknowledgement. The needle moves, and your own speaker sounds clear. The inspector's telephone call arrives a little later: no report was received.",
        "Mara reopens the log and marks the failed transmission. The crew remain safe, but the evidence has not reached the inspector in the promised form. Jo makes a closure report by telephone. The workshop will await a full survey, and the next shift must untangle a record that says SENT when it means PLAYED.",
        "You unplug the black lead. It is a small action compared with everything tonight, and the one you should have taken while someone was still waiting at the far end.",
        "Bad ending — A working monitor was mistaken for a completed handover."
      ],
      "imagePrompt": "Stormy late night studio, single lead removed from black socket lying beside crossed-out transmission log, no people.",
      "cast": [
        "radio"
      ],
      "ending": {
        "kind": "bad"
      }
    },
    {
      "id": "E08",
      "title": "A Morning Survey",
      "era": "station",
      "text": [
        "As the generator steadies outside the customs house, you help Mara leave Gull ready for the morning shift. Jo's telephone report has reached the duty inspector. The three Petrel crew are safe; the repair basin is closed pending a survey.",
        "It is not the quickest route to reopening the workshop. It is a clear, honest end to a difficult night. The next team will know the limits of your report instead of discovering them while standing beside an open gate.",
        "Mara gives you the last unbroken biscuit. The impossible call is still impossible. Nobody tries to improve the biscuit by calling that impossible too.",
        "Good ending — You secured a responsible handover and brought everyone home."
      ],
      "imagePrompt": "After midnight storm easing, studio desk with single plain biscuit on saucer beside on-hook telephone, warm light, no people.",
      "cast": [
        "radio"
      ],
      "ending": {
        "kind": "good"
      }
    },
    {
      "id": "E09",
      "title": "Received, With Gaps",
      "era": "station",
      "text": [
        "The relief generator takes over at Gull, and Mara checks that the recorded acknowledgement is intact. Your partial report has reached the duty inspector. Its gaps are labelled, its observations are usable, and no one has mistaken it for clearance to reopen the basin.",
        "Jo pins the survey appointment to the harbour board downstairs. The Petrel crew have gone home with the rescue team. There will be lost working days and more questions, but there will also be a record that another person can trust.",
        "You write the two patch-socket destinations on fresh labels before your shift ends. Tomorrow's volunteer should not have to solve every mystery you solved tonight.",
        "Good ending — You sent a truthful record and left the unfinished work visible."
      ],
      "imagePrompt": "Grey dawn after storm in studio, freshly labelled black and blue sockets, no legible words needed, quiet warm desk, no people.",
      "cast": [
        "radio"
      ],
      "ending": {
        "kind": "good"
      }
    },
    {
      "id": "E10",
      "title": "Tomorrow, Repaired",
      "era": "station",
      "text": [
        "Morning brings pale sun to Gull's studio. You return after sleep to find Mara reading the inspector's report: coupling replaced, gates tested, repair basin cleared to reopen. The three Petrel crew have signed a thank-you card with an extremely detailed drawing of a kettle.",
        "Your complete record made a precise repair possible. The early call remains sealed beside the ordinary midnight reply, two different accounts of a night that happened only once. Experts may argue about the aerial later. The workshop's apprentices have jobs to return to now.",
        "Jo comes upstairs with a replacement shelf bracket. You help hold it level while Mara tightens the screws. The red spool goes back between its dictionaries, less dramatically than it left.",
        "Best ending — You changed the distress call, saved the crew and preserved the evidence that kept their harbour working. Tomorrow is not perfect. It is open."
      ],
      "imagePrompt": "Clear pale morning after storm in radio studio, red spool securely between dictionaries on repaired shelf, kettle thank-you drawing and sealed envelope on desk, no people.",
      "cast": [
        "radio"
      ],
      "ending": {
        "kind": "good",
        "best": true
      }
    }
  ]
};

export default story;
