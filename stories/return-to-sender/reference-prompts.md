# Reference art: Return to Sender

Create and visually review these sheets BEFORE exporting or generating scene illustrations. Existing scene sources below are migration/style anchors, not permission to generate new scenes first.

Lock faces, silhouettes, clothing colours/stripe order, item dimensions/materials and landmark geometry. Keep state variants separate; a reference never grants possession or adds a companion. Correct anatomy and ambiguous details before approval.

Save originals in art-src/references/ (git-ignored). Convert reviewed sheets to references/<id>.webp at quality 88, preserving their resolution. Record the inspected WebP’s SHA-256 as reviewedSha256 in references/manifest.json. A missing or changed sheet blocks scene export.

## courier-kit

Subjects: player, canister, trap.

Output: `stories/return-to-sender/references/courier-kit.webp`

Attach these existing anchors in order:
- `stories/return-to-sender/images/F02.webp`
- `stories/return-to-sender/images/R02.webp`

```
Use case: illustration-story. Create a 1536x1024 landscape production CHARACTER AND PROP REFERENCE SHEET, light warm plain background. Both images are reference inputs, not scenes to copy. Exact same bright 1980s animated-film style with bold outlines as inputs. Left half: same anonymous 17-year-old PLAYER shown full body from rear and side-back, face concealed and gender-neutral, dented silver helmet, mustard-yellow windbreaker with one silver horizontal reflective band across upper back/chest/sleeves, faded blue jeans, orange high-top sneakers. Same BLACK CANVAS MESSENGER SATCHEL as image 1: rectangular soft-sided bag, large rounded flap, two black vertical closure straps with rectangular metal buckles, small red rectangular cloth label centered on flap, one broad black shoulder strap across torso. Show separate rear close-up of this exact satchel; never backpack. Right half separate props: thermos-sized brass cylindrical mail canister with grey felt rings at BOTH ends, small rectangular brass identity plate and coaster-sized circular SINGLE-NEEDLE load gauge taped to side, same as image2, gauge marks from 0 to 100 not a clock face. Below it show the compact grey ghost trap from image1, about 30 cm long, 18cm wide, 10cm high, with two hinged doors lengthwise on top, black/yellow hazard stripe sides, black cable and separate small black foot pedal; closed and open views of exactly same trap. This is a design inventory: no character holding a trap or canister; do not imply ownership or story event. No Janine, ghosts or other people, no bicycle, no caption text. Keep objects separated with clear proportions.
```

## firehouse-cast

Subjects: peter, ray, egon, winston, janine, slimer.

Output: `stories/return-to-sender/references/firehouse-cast.webp`

Attach these existing anchors in order:
- `stories/return-to-sender/images/E11.webp`

```
Use case: illustration-story. Create a production character reference lineup, 1536x1024 landscape, plain warm pale background. Input image is identity/clothing/style reference only, not a scene to copy. Preserve EXACT fictional cartoon faces and designs of PETER (tall, tousled dark hair, smirk), RAY (stocky, round cheerful boyish face, wavy brown hair), EGON (tall slim, round glasses, high swept-up dark hair), WINSTON (Black man, short hair, black mustache, calm smile), JANINE (red curly hair, enormous round glasses, mustard cardigan over white blouse, burgundy knee-length skirt), SLIMER (round bright-green floating ghost, huge mouth, tiny arms, no legs). Six separated full-body characters, same relative heights, first four in same khaki jumpsuits and grey proton backpacks. No courier, no satchel, no canister, no desk, no setting. No additional figures or duplicate characters. No lettering. Lock the character identities and clothing for subsequent scene generation; references don't imply all characters belong in a scene.
```

## supporting-cast

Subjects: dolores, pell, hollis, voss, ernie.

Output: `stories/return-to-sender/references/supporting-cast.webp`

Attach these existing anchors in order:
- `stories/return-to-sender/images/R01.webp`
- `stories/return-to-sender/images/R02.webp`
- `stories/return-to-sender/images/R08.webp`
- `stories/return-to-sender/images/H01.webp`
- `stories/return-to-sender/images/H03.webp`

```
Use case: illustration-story. Production character reference lineup in exactly the supplied bright 1980s cartoon style, 1536x1024 landscape, pale neutral background. Reference inputs give identities, NOT composition. Five separated full-body characters only: DOLORES from image1, grey-streaked black hair in bun, cat-eye glasses, green cardigan, cream blouse, dark trousers; MR PELL from image2, stooped old man white hair and half-moon glasses, brown cardigan dark trousers; MR HOLLIS from image3, lean old man, navy postal cap and grey raincoat, black tie; MR VOSS from image4, small neat middle-aged man, tiny black mustache, neatly combed black hair, black suit and tie; ERNIE from image5, skinny young bellhop auburn hair, maroon uniform and cap, narrow gold trim, black shoes. Exactly match each established face, hair and clothing. Add small separate folded brown dressing gown swatch beside Pell as his later-night wardrobe option. No courier, ghosts, props, room setting or lettering.
```

## night-mail

Subjects: tull, clerks.

Output: `stories/return-to-sender/references/night-mail.webp`

Attach these existing anchors in order:
- `stories/return-to-sender/images/C06.webp`
- `stories/return-to-sender/images/C04.webp`

```
Use case: illustration-story. Create production ghost-character reference sheet in supplied bright 1980s cartoon style, 1536x1024 landscape on warm grey plain background. Inputs are identity and costume references. Primary large full-body figure: MR TULL, gaunt dignified elderly ghost from image1, silver side-whiskers, thin kindly face, small round glasses, grey vest over white rolled shirtsleeves, dark tie, sleeve garters, green eyeshade pushed back below a grey postal cap, worn brown leather postal satchel with ONE shoulder strap. Three smaller ordinary Night Mail clerk variants beside him, round/thin/mustached adult faces, same grey vest, green eyeshade, cap, sleeve garters and brown leather satchel. All translucent pale grey-blue with faint halo, friendly and not frightening. Body proportions and clothing stay consistent, each with exactly two arms/two hands/two legs. No courier, canister, trap, Slimer or setting. No lettering.
```

## postal-paperwork

Subjects: landmark (page-specific).

Output: `stories/return-to-sender/references/postal-paperwork.webp`

Attach these existing anchors in order:
- `stories/return-to-sender/references/courier-kit.webp`

```
Use case: illustration-story. Create a production PROP REFERENCE BOARD, 1536x1024 landscape, in the exact bright 1980s animated-film style of the attached courier-kit board: rich saturated painted colour, crisp bold ink outlines, warm neutral parchment background. Input is STYLE ONLY; do NOT include its people, clothes, satchel, canister or trap. Three clearly separated prop groups: LEFT a small plain BLACK clothbound courier job book, pocket-notebook sized, rounded corners, simple straight spine, no labels, shown closed and open with cream faintly ruled paper. CENTER an aged cream closure-notice sheet folded into thirds, a small dark red wax seal fragment near its upper corner, spare illegible old handwriting; include a flat newer ivory certified copy beside it, no wax on the copy. RIGHT a large dark-brown hardbound Victorian attendance ledger with worn corners, open to ruled columns and tiny illegible handwritten marks, plus one loose cream courier sheet ruled into three columns. Keep objects unmagical, ordinary stationery, no people or hands or scenery, no readable text. Designs must be restrained and readily repeatable across night scenes. This locks item design, not possession or completed signatures.
```

## grid-service-hatch

Subjects: landmark (page-specific).

Output: `stories/return-to-sender/references/grid-service-hatch.webp`

Attach these existing anchors in order:
- `stories/return-to-sender/references/courier-kit.webp`

```
Use case: illustration-story. Create a production MACHINE REFERENCE BOARD,1536x1024 landscape, exact rich bright 1980s animated-film graphic style of attached board, bold ink outlines and painted material detail. Input STYLE ONLY: omit its people and objects. A modest 1985 industrial ghost-storage service module in two matching three-quarter views, one large installed front view and one small detail. Main bulk is a wide closed riveted grey metal vault with a square sealed door. A narrow human-height service chamber is mounted on its RIGHT side: dull steel frame, one thick rectangular glass window at head/chest height, a separate small door below, black gaskets, visible bolts, and a vertical control box beside it with two round analogue gauges, a red/green pair of indicator lamps, and three simple toggle switches. No magical portal, no loose portable trap, no proton pack, no chamber full of ghosts. Design for a ghost to be visible behind the glass and then exit one at a time through the outer service door; the main vault remains firmly closed. No text, labels, captions, people or ghost figures. Pale neutral background, simple mounted grey machinery only. Maintain the same pane/controls arrangement in each view; this reference fixes device geometry, not story state.
```

## storage-case

Subjects: landmark (page-specific).

Output: `stories/return-to-sender/references/storage-case.webp`

Attach these existing anchors in order:
- `stories/return-to-sender/references/courier-kit.webp`

```
Use case: illustration-story. Production PROP REFERENCE,1536x1024 landscape in exactly the attached bright 1980s animated-film painted style with bold ink outlines. Input style reference only: do not copy its character or satchel or ghost trap. Design one unbranded plain shielded storage case for a thermos-sized antique brass mail canister. Two matching views on neutral warm cream background: closed three-quarter and open three-quarter, with no separate detail panel. The case is a simple low rectangular dull slate-grey steel box about 45cm long,25cm wide,22cm deep, modest corner rivets, TWO small silver latches on the front short height edge, a SINGLE broad hinged lid opening to the back, dark charcoal padded interior with ONE cylindrical recess. In the open view only, include the exact brass mail canister from the reference lying horizontally in the recess: felt rings at bothends, smallplateandrounddial. The case must not resemble the black-and-yellow portable ghost trap; no striped doors,no pedal,no wires,no glass,no science-fiction light. No people,hands,ghosts,setting or text. Same dimensions,hinge,latch positions across views. Reference inventory only, not a story scene.
```
