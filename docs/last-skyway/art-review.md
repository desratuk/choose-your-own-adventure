# Last Skyway art production review

## Production status

Seven of ten reference sheets reviewed; zero of 48 scene illustrations generated.
Scene generation is held for the parent's independent continuity pass. Round-one
findings at `96050c1` are being corrected by the manuscript owner. Machinery and
location references await the exact revised manuscript to avoid freezing stale
wind-observation and cradle details.

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

## Pending art constraints from continuity review

- Plates remain closed in their box: exposed but unprocessed calibration from
  the previous night. Never show glass or an open box.
- Refuge cradle travels a short horizontal distance sideways, never vertically
  and never down the mountain.
- Crossover wind ribbon must be visible from the cabin; dispatch observation
  must follow the revised manuscript's explicit separate or remote arrangement.
- Early-failure crossover remains unselected; shared endings must not assert
  optional docking, wrap or machinery outcomes.

No scene batch has been delegated yet. After all references and manuscript pass,
commit approved references and export prompts with the existing reference gate,
then delegate three disjoint Astra Medium worktree batches of sixteen pages.

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
