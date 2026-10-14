# Last Skyway art production review

## Production status

All ten reference sheets reviewed; zero of 48 scene illustrations generated.
Independent continuity round 3 passed in commit `1a6d072`, merged here. The
manuscript SHA-256 and reviewer stamp both equal
`6314fe086b617078cea496aac6bd8fe961cbc516f3b085c2e8d7c38e2c9e29c6`.
Manuscript fixes from `1ba892e` and `175677f` were reviewed against the updated
arrival dump, including enteredGallery, D03 recovery and D07 wrapping action.

Production agent: T3 Codex `gpt-6-astra`, medium reasoning (runtime-provided).
The live orchestrator catalog also reports inherited model `gpt-6-astra` and its
current reasoning option `medium`. All images use built-in `image_gen`.

## Character reference review

All four final 1536×1024 WebPs were viewed at original resolution after conversion
with `cwebp -q 88`, without resizing. SHA-256 approvals were recorded only after
inspection. Full PNG originals and rejected versions remain in ignored
`stories/last-skyway/art-src/references/`.

- **Apprentice:** concealed face; rust jacket, oatmeal jumper, indigo trousers,
  brown boots and single broad slate bag strap consistent across views. The
  initial test lamp had too much bare metal; corrected to an insulated shaft
  with a small exposed contact tip. Bottom monochrome silhouettes are shape
  studies, not alternative clothing colours. Scenery vignettes on this character
  board are not approved architecture; use the dedicated location references.
- **Imani:** deep brown skin, short salt-and-pepper curls and round amber glasses
  consistent; navy boiler suit, cream collar, burgundy waistcoat, black boots.
  Initial rear view omitted the waistcoat; corrected before approval. Visible
  hands, limbs and facial details reviewed.
- **Sol:** round face, medium brown skin, short dark curls, plum jacket, pale-blue
  shirt, charcoal trousers and black shoes consistent. Separate brass key-ring
  studies do not establish scene possession. Hands are in jacket pockets.
- **Mara:** freckled face, short copper curls, broad shoulders, green cardigan,
  cream shirt, brown corduroys and black ankle boots consistent. Red fingerless
  glove studies have four fingers and a thumb, with coherent openings. Gloves
  are required at the controller; this board does not force them into every scene.

## Locked art constraints from continuity review

- Plates remain closed in their box: exposed but unprocessed calibration from
  the previous night. Never show glass or an open box.
- Refuge cradle travels a short horizontal distance sideways, never vertically
  and never down the mountain.
- Crossover wind ribbon must be visible from the cabin; dispatch observation
  is only a written observer report, copied trace and mast sketch. No physical
  dispatch ribbon or remote-viewing device exists.
- Early-failure crossover remains unselected; shared endings must not assert
  optional docking, wrap or machinery outcomes.

Scene production will use three disjoint Astra Medium worktree batches of sixteen
pages. Every page maps to at most five full reference files; direct attachments
cover every required sheet, without packing or dropping references.

## Prop and interior reference review

- **Plate box and wrap:** closed wooden box with brass corners and two silver
  catches; flat cream wrap, fitted wrap and folded-in-bag variants remain
  separate. Exactly two orange straps; single slate bag strap matches apprentice.
  No glass visible. Apprentice sheet attached as identity/style reference.
- **Refuge and greenhouse:** cream/green room, three closed bunk curtains, kettle,
  table and separate greenhouse with biscuit-tin seedlings and guarded radiator.
  Closed plate-box identity matches attached approved prop sheet. Snow is an
  ending weather variant, not a mandate for D07 or D08.
- **Gallery and relay:** four distinct interior panels, protected pipe corridor,
  pendulum-clock landing, stairs/lift and guarded machinery with separate battery
  rack. Initial tool and key drift required two corrections: exact orange test
  lamp, insulated probe, square key shoulder/round tip, round lock socket and
  reset button. Apprentice reference was attached for tool identity.

All three final WebPs were inspected at original 1536×1024 resolution before
recording their approval hashes. Conversion was q88 without resizing. Generation
used each manifest brief with explicit reference-role constraints; rejected
versions remain under art-src/references/corrections.

Validation so far: story-dump completed; eight focused Last Skyway regression
tests passed on the pre-correction manuscript. These do not replace the pending
independent continuity pass or final art checks.

## Machinery reference review

- **Valley workshop:** paper-only ridge evidence and smoked-paper pressure drum;
  no physical dispatch ribbon or anemometer. Corrected invented barred entrance
  to a closed wooden glazed door into the enclosed gallery. Gallery sheet is
  authoritative for close-up trapped-key/lock geometry. Bench tram and guarded
  governor are small models; actual winch stays behind separate window.
- **Cabin and stations:** yellow body, cream roof, three side windows, two-part
  end door and red rail. Corrected duplicate cabin at bridge, separated thick
  support and thinner haul ropes, added hand controller and restored white
  neutral suspension pointer. Sideways cradle uses horizontal rails at constant
  floor height. Sheet's clear-weather/background snow studies do not override
  each scene's grey-cloud or falling-snow timing.
- **Skyway system:** west spur ends at shed; eastern line shelters behind retaining
  wall. Enclosed pedestrian gallery is separate from tram ropes. Corrected
  exposed pedestrian section to continuous glazed enclosure; restored blue
  mast ribbon after an edit removed it. Loose pin detail is not evidence that
  a route has been selected. All geographic views contain one cabin.

Each final WebP was inspected at original resolution after q88 conversion with
no resizing. Original and correction PNGs remain ignored. Manifest briefs and
reference export now encode the corrected manuscript constraints. Scoped prompt
export uses a temporary copy of scripts/export-prompts.ts outside the tracked
tree, changing only imports and the story list; validateReferences,
referencesForPage and imagePrompt semantics are unchanged.

Checks after manuscript corrections: npm run check PASS across all six packs;
Last Skyway 48 pages, ten reachable endings, 7,401 states and zero errors/warnings.
Focused Last Skyway regressions PASS, 13/13.

## Active scene batches

Reference/export checkpoint: `17b96ce`. Three app-owned isolated worktrees, each
assigned exactly sixteen disjoint pages, launched with explicit provider `codex`,
model `gpt-6-astra`, option `reasoningEffort=medium`. Launch responses and durable
thread/run records independently confirm provider/model. All three workers
confirmed before generation that live orchestrator_capabilities reports inherited
provider codex, model gpt-6-astra and reasoningEffort.currentValue medium; ridge
and return also cite matching runtime injection. These are observed settings,
not merely the requested configuration.

Task ID prefix for all three: `node:delegated-task:command%3Amcp%3A42411c37-e2a2-4fed-ae24-030de53d05eb%3Adelegate-task%3A`.

| Batch / task suffix | Assigned pages | Worktree | Branch |
|---|---|---|---|
| opening / last-skyway-scenes-opening-v1 | A01–A06, B01–B08, C01–C02 | t3-879c949f | t3/skyway-opening-scene-art |
| ridge / last-skyway-scenes-ridge-v1 | C03–C08, D01–D08, F01–F02 | t3-7056ed79 | t3/last-skyway-ridge-scene-art |
| return / last-skyway-scenes-return-v1 | F03–F08, E01–E10 | t3-f4e1ab51 | t3/last-skyway-art-batch-return |

Every call must attach the page's complete reference set. Each worker owns only
assigned assets and its batch report, inspects originals before q75 conversion,
and commits those assets. Parent retains cross-batch visual QA and merge work.
