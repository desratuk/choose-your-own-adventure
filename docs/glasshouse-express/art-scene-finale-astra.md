# Glasshouse Express — finale art production

Status: all fourteen assigned scenes delivered; owner independently approved F01–F06. E03–E10 await owner review. Exclusive assignment: F01 F02 F03 F04 F05 F06 E03 E04 E05 E06 E07 E08 E09 E10.

Runtime: injected Codex / gpt-6-astra / medium. Live orchestrator_capabilities confirms inherited provider `codex`, model `gpt-6-astra`, and matching catalog `reasoningEffort.currentValue=medium`. Durable record verification belongs to owner. No subagents or alternate image providers used.

Built-in image_gen only. Approved source boards inspected at native resolution. Assigned 44 lossless pack files copied from owner worktree into ignored art-src/packed; every packed SHA, dimension, source SHA and decoded RGB rectangle verified against tracked art-packing-audit-astra.json using Pillow. No resizing or cropping of attached boards. Complete exported prompt is supplied verbatim on every call, followed by pack-role and composition instructions. Source prompts remain in image-prompts.md; exact per-call prompts are recorded below.

Full story-dump generated using owner's installed tsx executable via PATH because local dependencies are absent. No dependency files changed. Story, bible, stamp, references, shared code and other batches remain untouched.

Story SHA-256: `ac3eede2367c209657140c9facac60cb4a8db9a4338ff97051039850e2a9e8bf`. Full exported prompts SHA-256: `cb087c1ad97ee2b3e9a13f9668b19f3143c7a8a426232e1336bf3f44d817f894`. Packing audit SHA-256: `1b7918713fbfcbac1e34c6a82a2e10b76b9a9efbedaafb832a813b1c6a726ffb`.

## F01

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-50ccec9f-f90b-465a-8c11-8163a28d1fd2.png`; SHA-256 `b6a6190e0f15fe4b24a460f8f3e374e17b24c7c7436e14d18cfbbdc56005ecf0`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/F01.png`; SHA-256 `4a22f1a6267f55604838babdb1fb045920b6a15c7e11c585591dca6306764f2c`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/F01.webp`; SHA-256 `e8962a35c20c575a6e047e9adead0bb66da8e23512bba2913abd802b95f5dab6`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: First version rejected: engine outside gates. Built-in edit moved gateway behind engine; selected version places engine inside before fountain, coupled glowing carriage at gate, dark cars trailing outside. Three correct people, no player face, night, closed dome. Final WebP inspected at native size; identity, hands/anatomy, route state and geometry preserved.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/F01-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/F01-2.png` SHA-256 `3e594964b7fc6b2d3d6d554030507f11c62d4d68b5bf3ce78a4989ce903eeab6`; 1536×2048; upper fenn, lower marigold.
- `stories/glasshouse-express/art-src/packed/F01-3.png` SHA-256 `311b16e880088b7c0771e26c88a2caf0ba01ba0c519c81baba20ecf4ddf83632`; 1536×2048; upper glasshouse-carriage, lower conservatory-exterior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Clear frosty night before dawn at the Conservatory yard on the summit of Cold Hill: tall iron gates in a stone wall standing open onto a snowy forecourt with a frozen fountain, the great dark glass dome rising behind with its ring of closed eastern shutters. Tobias Fenn, a tall thin old man in a long brown waxed coat over striped pyjamas, unlaced boots and a brown knitted cap, holds up a hurricane lantern just inside the open gates. Marigold stands stopped just inside the gates, short of the fountain, with the glowing carriage behind her still on the gate line and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind it, trailing back outside the gates and out of frame; Dov stands by the engine; the player walks toward Fenn, seen from behind. Only these three people. Stars.

Generate one 1536x1024 finished full-bleed illustration, no panels.
Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = marigold
Image 3: upper = glasshouse-carriage; lower = conservatory-exterior
Reference boards establish designs only, not additional presence. Composition: view diagonally across the snowy forecourt toward the open gates, engine facing into yard, stopped short of frozen fountain. The glowing carriage straddles the open gate line; two coupled dark cars continue outward, partly beyond frame. Keep coherent continuous rails and couplings. Only player, Dov, Fenn. Match reference engine three axles, no tender. Dome closed and dark, hard starry night. Fenn's coat stays buttoned.
```

Correction generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-a6546cc7-a7be-4d41-a928-65417201097e.png`; SHA-256 `4a22f1a6267f55604838babdb1fb045920b6a15c7e11c585591dca6306764f2c`. Rejected initial retained at `art-src/corrections/F01-v1.png`; target attached after all three packs.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Clear frosty night before dawn at the Conservatory yard on the summit of Cold Hill: tall iron gates in a stone wall standing open onto a snowy forecourt with a frozen fountain, the great dark glass dome rising behind with its ring of closed eastern shutters. Tobias Fenn, a tall thin old man in a long brown waxed coat over striped pyjamas, unlaced boots and a brown knitted cap, holds up a hurricane lantern just inside the open gates. Marigold stands stopped just inside the gates, short of the fountain, with the glowing carriage behind her still on the gate line and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind it, trailing back outside the gates and out of frame; Dov stands by the engine; the player walks toward Fenn, seen from behind. Only these three people. Stars.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = marigold
Image 3: upper = glasshouse-carriage; lower = conservatory-exterior
Image 4 is the edit target. Correct gate/rail geometry only, preserving character identities, clothing, anatomy, lighting and locomotive design. Output 1536x1024. The target wrongly places engine outside the gateway. Relocate the open gate pillars, wall and both gate leaves LEFTWARD and BACKWARD in perspective so that the glowing carriage is passing THROUGH the gateway behind the engine's cab, and the WHOLE engine is on the fountain/Conservatory side inside the forecourt. Rails run through that gateway under all vehicles, toward fountain. Remove the current misplaced gate pillar and leaf beside player's head and remove the right-edge misplaced pillar. Engine, Dov, player and Fenn are all inside yard. Glowing carriage at gate line, two dark coupled carriages trailing outside to left. Do not add people, plants or objects. Reference packs are identity only.
```
## F02

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-3bd9a51c-b172-4423-9ba8-e958b8d54fe9.png`; SHA-256 `d654dd72254bfcb89f8950040dc13ddf7ae7936b4b217c37a3732b0a3220e150`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/F02.png`; SHA-256 `d654dd72254bfcb89f8950040dc13ddf7ae7936b4b217c37a3732b0a3220e150`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/F02.webp`; SHA-256 `7e240d51affbd858607e83e0976663b04826b52b4960b30854be2e6420d1cdbe`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Low tray-level view hides all contents and bed plants across every arrival; three correct identities, natural carrying grip, dark stove and closed shutters, starry predawn glass. Final WebP inspected at native size; identity, hands/anatomy, route state and geometry preserved.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/F02-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/F02-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/F02-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Before dawn, inside the great Conservatory on Cold Hill, lit by lanterns: a vast cold space under white iron ribs and dark glass, a circular raised stone planting bed in the centre with a small iron stove door in its base, the tall iron eastern shutters standing closed in a curved row. The player and Dov carry a shallow wooden tray between them toward the bed, seen edge-on so its contents are hidden, the player seen from behind; Tobias Fenn in his brown waxed coat over striped pyjamas stands at the bed with a lantern. Only these three people. Breath steaming; frost on the inner glass.

Generate a single 1536x1024 full-bleed scene.
Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Use reference boards for identities only. Camera low at tray-rim height: player rear at left and Dov opposite carry tray level with all contents obscured behind its solid wooden near side. Fenn at stone bed with lantern. Great Bed planting surface hidden behind raised stone rim from this low angle, no readable plants anywhere. The bed stove remains unlit, no visible fuel state. Dark glass, cold steaming breath, closed shutters, before dawn. No extra props from sheets.
```
## F03

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-a84aa6c8-4b1f-4873-8476-e1f9f5c0e1d2.png`; SHA-256 `10be50b434645bd147a571da96bccca267f685795048e7137c25dac97d7d2599`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/F03.png`; SHA-256 `10be50b434645bd147a571da96bccca267f685795048e7137c25dac97d7d2599`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/F03.webp`; SHA-256 `77266799fc8f5568144f83e78503c1f8ed67c6a24aea275eb20524be2502c6d3`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Original inspected: three correct identities, player rear kneeling, Fenn crouched holding hurricane lantern, Dov folded arms, open dark stove, wooden brick hod. Bed surface and all plants hidden. No correction. Final WebP inspected at native size; identity, hands/anatomy, route state and geometry preserved.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/F03-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/F03-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/F03-3.png` SHA-256 `853302d54f41535a14b63e53bbe3b8a15bfc271c4b1e85ef84c9185f26a1a40d`; 1536×2048; upper keeper-props, lower conservatory-exterior.
- `stories/glasshouse-express/art-src/packed/F03-4.png` SHA-256 `5299fe6086fd3f7e380fe51e5143dc7813a73f89870807c7f3567164e40098f0`; 1536×1024; upper conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Before dawn inside the Conservatory on Cold Hill, lantern light: close view at the base of the round stone Great Bed, the small iron stove door standing open and dark, a hod of ember-bricks on the floor beside it. The player kneels at the stove door, seen from behind; Fenn crouches at the other side holding a lantern; Dov stands behind with folded arms. The framing stops at the bed's stone rim; no plants visible. Only these three people. Closed iron shutters in the background.

Generate one 1536x1024 full-bleed scene.
Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = keeper-props; lower = conservatory-exterior
Image 4: whole = conservatory-interior
All references are identity/design only. Close low camera looking horizontally at stone stove base; bed planting surface completely outside view behind its rim. Open stove door reveals only deep black shadow, no countable fuel. Wooden hod of dark rectangular ember-bricks beside it. Player kneeling rear view, Fenn crouched opposite with hurricane lantern, Dov behind with folded arms; correct hand anatomy. Fenn coat buttoned and pyjama legs visible. No plants, no optional tools or recorder.
```
## F04

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-2b3fc128-d4b1-445f-8084-b9738a6f6a0c.png`; SHA-256 `f02df766708b54823de3829dc19a50451f07c6e69f2417fffa59c85563f0b656`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/F04.png`; SHA-256 `f02df766708b54823de3829dc19a50451f07c6e69f2417fffa59c85563f0b656`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/F04.webp`; SHA-256 `9ffe9194e066e43ec0f45cdca148346781fa48ff309c91d573155490581da855`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Owner approved representative; original and final WebP inspected. Three identities/wardrobes, player face hidden, no bed/plants, frozen mechanism and closed shutter arc. No corrections. Final WebP inspected at native size; identity, hands/anatomy, route state and geometry preserved.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/F04-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/F04-2.png` SHA-256 `594dfcc626149e4f54c4ea3cbd67bfd85239e4d2d71049cfaef78927dddfe1c7`; 1536×2048; upper fenn, lower keeper-props.
- `stories/glasshouse-express/art-src/packed/F04-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

THE THAW-LAMP: a brass hand lamp with a bulbous spirit reservoir, a wooden side grip, and a flared brass nozzle inside a wire guard, throwing a small soft blue flame. Palm-and-a-half tall; used to thaw frozen locks, levers and wax cylinders.

First grey before sunrise inside the Conservatory on Cold Hill: the tall curved row of iron dawn shutters on the eastern face, frost-rimed, with a heavy chain hanging from a large frost-whitened brass wax cylinder mounted high on the ribs where the shutters' gear meets the dome. The player stands below looking up, seen from behind, thaw-lamp in hand; Dov and Fenn stand either side, Fenn pointing up at the cylinder with his lantern. The Great Bed itself is out of frame; only the warm glow of its lit stove spills across the stone floor behind them. No plants visible. Only these three people. Palest grey in the glass above the shutters.

Use case: illustration-story. Generate one finished 1536x1024 scene, full bleed, no panels or reference-sheet layout.
Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = keeper-props
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Each upper/lower image is an entire approved reference board. Use identity/design only. Hesper is not present. Compose toward the shutter wall, away from the bed: exactly twelve closed tall iron shutter leaves in a continuous curved row, three times human height. The horizontal brass Hallam cylinder, wheel, pin and collar match the reference and remain frost-bound. Player centrally seen from the rear, Dov left, Fenn right lifting his hurricane lantern toward the mechanism; natural hands and anatomy. No plants or bed edge in frame.
```
## F05

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-18221327-854d-4fd8-8a3e-d179a2f7d404.png`; SHA-256 `c3f8a8b37ead918c4d4f22ae979eccf123abf876aefcbb5bc4376192f8f7b4bd`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/F05.png`; SHA-256 `13d4e37d7a8742690e2d4fc6ca54a1ae796d138ccbee7b788e8fe8b261bb319b`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/F05.webp`; SHA-256 `408d2b5ebc307c3af15155303410a558efa7d69c643b839c7c9c5caee5285b36`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Owner requested exact twelve leaves because full bank endpoints were visible. Built-in edit subdivided bank into twelve distinct closed leaves (six plus six); counted at original and final size. Bed contents remain unreadable, cast and hands unchanged.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/F05-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/F05-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/F05-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: low golden light slanting in through narrow open side louvres near the floor, lighting the stone floor and the lower glass but leaving the round Great Bed in the centre in deep cool shadow under the still-closed tall eastern shutters. The player, Dov and Fenn stand at the bed's rim looking down into the shadowed bed, the player seen from behind; the bed's contents are lost in shadow, no leaf shapes readable. Only these three people.

Generate a single full-bleed 1536x1024 scene.
Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
References establish identities only. Medium wide view across circular bed: interior of bed is deep uniform blue-black shadow, absolutely no discernible leaves, buds or plant silhouettes. Narrow side louvres admit low stripes of golden light strictly on floor and boots, never on bed contents. Tall eastern shutters remain fully CLOSED. Three people looking down, rear-facing player, Fenn in buttoned coat and cap holding hurricane lantern. Preserve lamp identity and natural hands. No extra subjects.
```
Correction generated original: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-e287db97-d135-48c1-80e7-98dc8b3f2327.png`, SHA same as selected PNG. Rejected first variant retained at `art-src/corrections/F05-v1.png`. All three reference packs plus target attached.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: low golden light slanting in through narrow open side louvres near the floor, lighting the stone floor and the lower glass but leaving the round Great Bed in the centre in deep cool shadow under the still-closed tall eastern shutters. The player, Dov and Fenn stand at the bed's rim looking down into the shadowed bed, the player seen from behind; the bed's contents are lost in shadow, no leaf shapes readable. Only these three people.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Image 4 is edit target. Targeted correction ONLY: the target displays the entire closed shutter bank between clear side glazing but has too few tall shutter leaves. Rebuild this closed curved bank as EXACTLY TWELVE distinct tall iron shutter leaves, six left of the central dividing rib and six right, each separated by a narrow white iron stile and its own visible hinge hardware. Count six plus six = twelve. Keep same overall width/height of shutter bank, using narrower leaves. Every one remains fully closed. Preserve all other image details, especially the three characters' faces, clothes, hands, player rear view and satchel, lantern identities, stone bed with entirely unreadable shadowed contents, warm stove, OPEN low side louvres and low golden floor lighting, camera/framing. No additional plants or people. Full-bleed 1536x1024.
```

## F06

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-83ba05af-f303-44d2-9738-776433503d6a.png`; SHA-256 `2622d74bd743279be5d86a57f0b44207ee4a4f3d73f0a1087c7328f394c6225e`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/F06.png`; SHA-256 `2622d74bd743279be5d86a57f0b44207ee4a4f3d73f0a1087c7328f394c6225e`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/F06.webp`; SHA-256 `9eae01bf24bbf5c5bea33bcd721ffaf8e966305c0816e8e76aca6268092bba88`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Original inspected: full sunrise through open shutters, entire planted surface burnt out to glare, no readable plant state. Player rear on wooden stepladder with thaw-lamp, Dov holding ladder and Fenn shielding eyes. Correct wardrobe. No correction. Final WebP inspected at native size; identity, hands/anatomy, route state and geometry preserved.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/F06-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/F06-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/F06-3.png` SHA-256 `853302d54f41535a14b63e53bbe3b8a15bfc271c4b1e85ef84c9185f26a1a40d`; 1536×2048; upper keeper-props, lower conservatory-exterior.
- `stories/glasshouse-express/art-src/packed/F06-4.png` SHA-256 `5299fe6086fd3f7e380fe51e5143dc7813a73f89870807c7f3567164e40098f0`; 1536×1024; upper conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

THE THAW-LAMP: a brass hand lamp with a bulbous spirit reservoir, a wooden side grip, and a flared brass nozzle inside a wire guard, throwing a small soft blue flame. Palm-and-a-half tall; used to thaw frozen locks, levers and wax cylinders.

Sunrise inside the Conservatory on Cold Hill: the tall iron eastern shutters swinging wide open all together, full golden sunrise flooding straight across the round Great Bed, which is seen from behind and above as a blazing disc of light with its contents burnt out to glare (no plant detail), dust shining in the beams. The player stands on a wooden stepladder near the dome ribs, seen from behind, lowering the brass thaw-lamp from the now frost-free brass cylinder; Dov holds the ladder, Fenn stands at the bed's rim shielding his eyes. Only these three people.

Generate one full-bleed 1536x1024 scene.
Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = keeper-props; lower = conservatory-exterior
Image 4: whole = conservatory-interior
References are identity/design only. Show the elevated viewpoint over the bed, its entire planting surface obscured by intense white-gold glare: absolutely no identifiable leaves, buds, flowers or soil detail. Player rear view on sound wooden A-frame stepladder at left near now frost-free horizontal Hallam cylinder, lowering correct small blue-flame thaw-lamp. Dov safely grips both ladder rails, Fenn on floor at bed rim shielding eyes, coat buttoned and cap on. Exactly three people. Coherent ladder rungs/feet and anatomically natural hands. Eastern shutter panels all pivoted open; sunrise comes directly through them.
```

## E03

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-a58fdb54-0d38-49d6-a743-702f2abe7a5b.png`; SHA-256 `405221aefc7543834cb4b5d417168e8c6b182f1423bae0398b0d7eec12ded0ce`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/E03.png`; SHA-256 `7a3d3f6adfede005e75e6ed68167708cd6f0f6a5cb186004d83e4e3664507b8f`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/E03.webp`; SHA-256 `1c991624b98f5f19022d86195f6dfdec3324c3d723fac219f69e02b14d47a039`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Corrected full bank to twelve closed leaves (five paired middle bays, single outer leaves) and tucked dead grey coal bucket beneath bed. Frost-black glassy rosettes and closed buds, no flowers, unlit stove; three correct identities, player kneeling rear, lanterns distinct. Selected original and final WebP visually inspected at native size; conversion preserves composition, identities, hands and route state. Owner review pending.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/E03-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/E03-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/E03-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: side louvres open, thin low gold light across the floor; the round Great Bed with its sunwort rosettes gone dark and glassy with frost, a dead bucket of grey coals at its base. The player kneels at the bed's rim, seen from behind, one gloved hand on the stone; Dov and Fenn stand behind in silence. Only these three people. Breath steaming.

Generate one 1536x1024 full-bleed scene.
Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Reference design only. Show tragic quiet frost failure, no injury: sunwort entire bed dark glassy frost-damaged rosettes and CLOSED dark buds, NO flowers. Dead GREY coal bucket beneath stone base, no fire in bed stove. Tall shutters fully CLOSED, side louvres open giving weak low golden bands on floor. Player rear kneeling at rim, one gloved hand on stone, Dov and capped Fenn silent behind. Only three people, anatomically natural hands. Fenn buttoned coat over striped pyjamas.
```

Correction 1 generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-320dc5d3-6825-4987-9f43-41ff5fa4c889.png`; SHA-256 `7a3d3f6adfede005e75e6ed68167708cd6f0f6a5cb186004d83e4e3664507b8f`. Target `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-a58fdb54-0d38-49d6-a743-702f2abe7a5b.png` (SHA-256 `405221aefc7543834cb4b5d417168e8c6b182f1423bae0398b0d7eec12ded0ce`) attached after ALL page packs. Rejected target retained at `art-src/corrections/E03-v1.png`.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: side louvres open, thin low gold light across the floor; the round Great Bed with its sunwort rosettes gone dark and glassy with frost, a dead bucket of grey coals at its base. The player kneels at the bed's rim, seen from behind, one gloved hand on the stone; Dov and Fenn stand behind in silence. Only these three people. Breath steaming.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Targeted correction ONLY to attached scene at1536x1024. Keep all three characters, faces, hands, wardrobe, lanterns, kneeling player, frost-black plants closed buds and dead grey coals unchanged. This shows entire bank of seven broad shutter bays. Make EXACTLY TWELVE closed leaves by splitting each of FIVE middle bays into two tall leaves with a clear centre seam and hinges, while leaving the outermost left and right bays single: 1+2+2+2+2+2+1=12. No opening tall shutters. Keep open low side louvres and sunrise bands. Also place existing dead-coal bucket tucked slightly beneath a recess in the bed stone base, still plainly dead grey with no glow. No additional props.
```

## E04

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-d1c4c2a8-60d2-49bc-afbf-31bdaa4f6401.png`; SHA-256 `be4ae0b1251a51d94db7dbe16d4e850b80e449791dcaef34f28f59030e5c424b`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/E04.png`; SHA-256 `d36bc954faa51ce2d36cd4f0315f74f9d4816ba846d63118ffdde50ffca2cf0b`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/E04.webp`; SHA-256 `46c499b6ab8cd311d49ece5e3e668018f1377b254f71bda91260be70d42405f8`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Initial rejected for tunnel behind rear train and extra track. Corrected tunnel ahead of locomotive and removed extra track; four coupled vehicles, three locomotive axles, bare ice, loaded cart and two arriving workers. Dov and hidden-face player correctly placed; no Fenn. Selected original and final WebP visually inspected at native size; conversion preserves composition, identities, hands and route state. Owner review pending.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/E04-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/E04-2.png` SHA-256 `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`; 1536×2048; upper marigold, lower glasshouse-carriage.
- `stories/glasshouse-express/art-src/packed/E04-3.png` SHA-256 `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`; 1536×1024; whole fernhallow-incline.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

Grey winter morning at Fernhallow Halt at the foot of Cold Hill: the whole Glasshouse Express (Marigold, the glowing glass carriage, and the two dark, empty glass carriages, the Fern House and the Orchard Car, coupled behind) standing back at the halt below the iced incline and the tunnel mouth, Marigold's wheels standing on bare glassy ice with no grit laid, a pair of unnamed gritting workers with shovels and a loaded handcart just arriving along the line and not yet at work. Dov leans against the engine in his cap; the player stands at the carriage door, seen from behind. Nobody hurt, nothing derailed. Pale daylight on snowy pines.

Generate one full-bleed 1536x1024 illustration.
Image 1: upper = player-hesper; lower = dov
Image 2: upper = marigold; lower = glasshouse-carriage
Image 3: whole = fernhallow-incline
Identity references only. Wide diagonal railway view showing the entire four-vehicle train in correct coupled order: engine facing uphill toward tunnel, then glowing greenhouse carriage, then two dark empty matching glass carriages. All wheels on coherent continuous rails, no tender. Bare polished ice beneath engine and up grade, absolutely no grit on rails; two gritting workers are only arriving with still-loaded handcart and shovels lowered, not shovelling yet. Player rear at carriage doorway, Dov leaning against engine; four people total. Grey morning, no stars. Keep engine six wheels on three axles and round buffers. No Fenn or other reference figures.
```

Correction 1 generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-ac4298b8-1711-40a7-8799-1018d62badbd.png`; SHA-256 `d36bc954faa51ce2d36cd4f0315f74f9d4816ba846d63118ffdde50ffca2cf0b`. Target `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-d1c4c2a8-60d2-49bc-afbf-31bdaa4f6401.png` (SHA-256 `be4ae0b1251a51d94db7dbe16d4e850b80e449791dcaef34f28f59030e5c424b`) attached after ALL page packs. Rejected target retained at `art-src/corrections/E04-v1.png`.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

Grey winter morning at Fernhallow Halt at the foot of Cold Hill: the whole Glasshouse Express (Marigold, the glowing glass carriage, and the two dark, empty glass carriages, the Fern House and the Orchard Car, coupled behind) standing back at the halt below the iced incline and the tunnel mouth, Marigold's wheels standing on bare glassy ice with no grit laid, a pair of unnamed gritting workers with shovels and a loaded handcart just arriving along the line and not yet at work. Dov leans against the engine in his cap; the player stands at the carriage door, seen from behind. Nobody hurt, nothing derailed. Pale daylight on snowy pines.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = marigold; lower = glasshouse-carriage
Image 3: whole = fernhallow-incline
TARGETED CORRECTION of attached final image, keep 1536x1024. Preserve four vehicles, people, wardrobe and bare ice. Correct railway geometry: REMOVE the tunnel and steep track behind the rear car at upper right. Place tunnel at upper LEFT ahead of locomotive with a gently curving iced incline leading from the locomotive FRONT to that tunnel. Locomotive points toward tunnel. A SINGLE pair of continuous rails supports train and curves ahead of engine to tunnel; remove the extra parallel foreground track entirely. Keep all four coupled vehicles fully visible. Workers arriving with loaded cart, no grit laid. No extra characters.
```

## E05

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-f0ac8335-0e71-4840-a78e-700a1586dbfe.png`; SHA-256 `ca793432fac74b43e2dcc505c7d8b0d2b35256c0dc3ba6d87b79b7d4571c32b8`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/E05.png`; SHA-256 `59b09b61d360de72be6ae4d5257c0db6c5873f2dbdca5801a9732095a64cbb95`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/E05.webp`; SHA-256 `5a43ed7748f919c8f523fde3c681c1892c49fe6cffe3c4e3505a0945abc0deae`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Two corrections retained: missing upper panes, dark stove, then narrow half-open crooked shutter leaves and fallen chain. Twelve leaves including edge-on leaves, broken gearing and mist, frost-dark plants, three unharmed people safely clear. Selected original and final WebP visually inspected at native size; conversion preserves composition, identities, hands and route state. Owner review pending.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/E05-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/E05-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/E05-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: the tall iron eastern shutters sagging half open and askew on broken gearing, a run of upper panes gone and cold morning mist pouring in through the gap, frost silvering the round Great Bed and its darkened sunwort below. The player, Dov and Fenn stand well back across the floor, unharmed, looking up; the player seen from behind. Only these three people. Golden light through the ruined opening.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Generate one 1536x1024 full-bleed scene. References are identity only. Wide dramatic view of damaged shutter mechanism and missing upper panes, cold mist entering. Three people stand safely far back in foreground, player back to viewer. All sunwort dark frost-damaged with no open flowers. Tall shutters sagging askew half open, not normal open doors. No falling glass near people, no injury. Fenn cap on, coat buttoned. Broken upper panes distinct from intact dome ribs.
```

Correction 1 generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-5b94ad7d-a094-4a79-9287-430cf4ab8251.png`; SHA-256 `cd7ac11aad51a8eaf87ad46de821ef81379823d30b2cae70fbd9a2f18c2557ed`. Target `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-f0ac8335-0e71-4840-a78e-700a1586dbfe.png` (SHA-256 `ca793432fac74b43e2dcc505c7d8b0d2b35256c0dc3ba6d87b79b7d4571c32b8`) attached after ALL page packs. Rejected target retained at `art-src/corrections/E05-v1.png`.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: the tall iron eastern shutters sagging half open and askew on broken gearing, a run of upper panes gone and cold morning mist pouring in through the gap, frost silvering the round Great Bed and its darkened sunwort below. The player, Dov and Fenn stand well back across the floor, unharmed, looking up; the player seen from behind. Only these three people. Golden light through the ruined opening.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Edit final attached scene at1536x1024. Preserve the three identities, hands and lanterns, frosted dark plants and safe spacing. Correct upper ruined opening: show several upper glass panes entirely MISSING, with visibly empty frames and a few jagged shards at edges, cold mist flowing inward through them. Shutter bank must comprise EXACTLY TWELVE tall iron leaves total, six on each side, sagging at uneven angles and half-open from broken gearing. Split wider leaves to achieve twelve distinct leaves. Do not add more characters or props. Remove visible orange fire from stove door: dark closed stove door only. The upper wax cylinder and broken chain mechanism remain.
```

Correction 2 generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-6174b90d-45d4-47c0-ad56-6ed4677645ef.png`; SHA-256 `59b09b61d360de72be6ae4d5257c0db6c5873f2dbdca5801a9732095a64cbb95`. Target `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-5b94ad7d-a094-4a79-9287-430cf4ab8251.png` (SHA-256 `cd7ac11aad51a8eaf87ad46de821ef81379823d30b2cae70fbd9a2f18c2557ed`) attached after ALL page packs. Rejected target retained at `art-src/corrections/E05-v2.png`.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: the tall iron eastern shutters sagging half open and askew on broken gearing, a run of upper panes gone and cold morning mist pouring in through the gap, frost silvering the round Great Bed and its darkened sunwort below. The player, Dov and Fenn stand well back across the floor, unharmed, looking up; the player seen from behind. Only these three people. Golden light through the ruined opening.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Targeted geometry correction of final attached image at1536x1024. Keep plants, three people and all attire, lanterns and anatomy unchanged. Keep broken missing upper glazing and mist. REPLACE shutter bank with TWELVE NARROW tall vertical iron leaves arranged as six clear PAIRS, two leaves within each of six broad structural bays. Each pair has a clear vertical centre seam, making exactly 12 long leaves visible. All sag crooked and half open on broken hinges, not rolled up. Broken chain lies coiled on empty floor away from people. No fire.
```

## E06

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-ac9d3cfd-baed-442a-99ea-c83145481e04.png`; SHA-256 `9f8a0448dcadada4f6379254de076026844615e1be4be08596c35edf3c95a429`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/E06.png`; SHA-256 `3b9996e87e6089ba95b8d56c22a2018f7a572de8ebe0f732fc8786a51ad7bbbc`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/E06.webp`; SHA-256 `995d5ed4390f840b33d18fface23b58cd60cb3f943caa6b91d19b6bda31aba26`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Corrected erroneous wall stove into glowing coal bucket beneath bed. Only orange threads in mostly closed copper buds; foliage blurred/unreadable. Three crouching identities, closed cropped shutter arc, open low louvres. Selected original and final WebP visually inspected at native size; conversion preserves composition, identities, hands and route state. Owner review pending.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/E06-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/E06-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/E06-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: side louvres open, low gold light along the floor; the round Great Bed in soft shadow with a glowing bucket of coals set under its stone base. Close on the soil at the rim: a scattering of copper sunwort buds just beginning to split and show a thread of warm orange among mostly closed buds, leaves out of focus and cropped so no leaf shape is readable. The player, Dov and Fenn crouch at the bed's rim, the player seen from behind. Only these three people. Tall eastern shutters closed behind.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Generate one 1536x1024 full-bleed illustration. Close low composition at rim, three crouching figures, player's face entirely hidden. Copper buds just cracked a hairline with thin orange threads, NO open cup flowers. CRITICAL leaves must have NO readable outlines: dark soft blur below buds, cropped by stone rim. Glowing coal bucket visible tucked under base. Closed tall shutter bank extends out of frame on both sides, a cropped middle section only; low side louvres OPEN casting low gold bands. Fenn coat BUTTONED and cap on. No optional props.
```

Correction 1 generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-208ce55f-6d73-4812-9a99-ecd2b8baa308.png`; SHA-256 `3b9996e87e6089ba95b8d56c22a2018f7a572de8ebe0f732fc8786a51ad7bbbc`. Target `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-ac9d3cfd-baed-442a-99ea-c83145481e04.png` (SHA-256 `9f8a0448dcadada4f6379254de076026844615e1be4be08596c35edf3c95a429`) attached after ALL page packs. Rejected target retained at `art-src/corrections/E06-v1.png`.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: side louvres open, low gold light along the floor; the round Great Bed in soft shadow with a glowing bucket of coals set under its stone base. Close on the soil at the rim: a scattering of copper sunwort buds just beginning to split and show a thread of warm orange among mostly closed buds, leaves out of focus and cropped so no leaf shape is readable. The player, Dov and Fenn crouch at the bed's rim, the player seen from behind. Only these three people. Tall eastern shutters closed behind.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Targeted edit of final image, 1536x1024. Preserve people anatomy and dress, buds only a thin orange thread, blurred unreadable foliage. REMOVE the fire/stove opening from the BACK WALL: replace it with plain stone wall. Put a small metal bucket of glowing coals in a visible arched recess UNDER THE ROUND BED STONE BASE at lower left foreground. Adjust framing slightly to see that bucket below stone, retain close bud view. Bed in soft shadow, low sunlight only on floor, no open flowers.
```

## E07

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-f789a1d1-c11f-4878-b297-5003e3660e97.png`; SHA-256 `eca33f9a1bc18f3d771472f53ef2c357ea10e2acbd1c7521a5d7e99ca95077ab`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/E07.png`; SHA-256 `2729ae9016dd1a7268bbb72092850f24bacb6e919eab6445d01d290fbd18865c`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/E07.webp`; SHA-256 `390f60a20590a39e1f160e6cadaeba2b2cc250a6d957a96b7bf6b59636c48c3b`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Corrected readable foliage to fully defocused mass with no leaf outlines. About half cups, half closed buds; midmorning sunlight over closed cropped shutter arc, open low louvres; three correct standing identities. Selected original and final WebP visually inspected at native size; conversion preserves composition, identities, hands and route state. Owner review pending.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/E07-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/E07-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/E07-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Mid-morning inside the Conservatory on Cold Hill: high sun now clearing the top of the still-closed eastern shutters and falling on the round Great Bed, where about half the sunwort buds have opened into warm orange cup flowers, the rest still closed, the leaves beneath them soft and out of focus so no leaf shape is readable. The player, Dov and Fenn stand at the rim in bright light, the player seen from behind. Only these three people. Open side louvres along the walls.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
One 1536x1024 full-bleed scene, medium-wide at bed rim. Precisely about HALF plants have open broad orange CUP flowers, HALF remain closed copper buds; mix evenly. All underlying leaves soft dark blur, NO readable leaf outlines. High midmorning sunlight comes OVER top of CLOSED shutters. Frame cropped middle arc of shutter bank extending beyond both frame edges so outer endpoints unseen. Open low side louvres. Three people stand at rim, player rear facing hidden, Dov and Fenn capped and coat buttoned. No extra props.
```

Correction 1 generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-6ef2347e-8ff8-4be4-b4a9-5ba9968b66bc.png`; SHA-256 `2729ae9016dd1a7268bbb72092850f24bacb6e919eab6445d01d290fbd18865c`. Target `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-f789a1d1-c11f-4878-b297-5003e3660e97.png` (SHA-256 `eca33f9a1bc18f3d771472f53ef2c357ea10e2acbd1c7521a5d7e99ca95077ab`) attached after ALL page packs. Rejected target retained at `art-src/corrections/E07-v1.png`.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Mid-morning inside the Conservatory on Cold Hill: high sun now clearing the top of the still-closed eastern shutters and falling on the round Great Bed, where about half the sunwort buds have opened into warm orange cup flowers, the rest still closed, the leaves beneath them soft and out of focus so no leaf shape is readable. The player, Dov and Fenn stand at the rim in bright light, the player seen from behind. Only these three people. Open side louvres along the walls.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Precise correction to last image at1536x1024. Preserve all people, hands, clothing, closed shutters, open low louvres, high sunlight and 50/50 open orange cups versus closed copper buds. ONLY change the foliage beneath buds and flowers: remove every readable leaf contour. Render that lower foliage as a very soft, defocused dark green-brown mass with no individual leaf edge or shape discernible, while retaining sharp cup flowers and buds above it. No other changes.
```

## E08

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-78ff9970-73e5-40d0-9b6b-269be1091afd.png`; SHA-256 `968e103d9377d0d75bac3e256fe4e943fd3f8f96022555154ac4435f934c8050`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/E08.png`; SHA-256 `67c66d71045597d1efaadfae3ee42f3235a42a96811ca5a9f5b1b67e86d5492b`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/E08.webp`; SHA-256 `8289a87e1e0344806a69d4d0f53e10281fb68db425dfe0debd4c597a8b774e14`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Two shutter count corrections: final twelve leaves (1+1+2+2+2+2+1+1). Full orange cup bloom and broad rosettes, noon high light and shimmer, open side louvres; Fenn cap off dabbing brow with correct hand, lantern identities preserved. Selected original and final WebP visually inspected at native size; conversion preserves composition, identities, hands and route state. Owner review pending.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/E08-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/E08-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/E08-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Noon inside the Conservatory on Cold Hill: strong high sunlight pouring down onto the round Great Bed, now wholly in flower, dense warm orange sunwort cups glowing among dark leaves, visible heat shimmer above the bed; the tall eastern shutters still closed behind, side louvres open. The player, Dov and Fenn stand at the rim in their usual clothes, Fenn dabbing his brow with his knitted cap, the player seen from behind. Only these three people.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Generate one 1536x1024 full-bleed scene. Distinct slightly elevated oblique composition across fully flowering round bed. EVERY plant has broad warm orange cup flowers among broad dark rosette leaves, no closed buds. Noon high overhead sunlight and subtle heat shimmer, tall shutters CLOSED with cropped arc continuing off edges; low side louvres OPEN. Player rear hidden face. Fenn cap OFF his head, using that brown knitted cap in one hand to dab his brow, other hand holds hurricane lantern naturally. Coat remains buttoned. Dov stands smiling. Three people only, accurate hands.
```

Correction 1 generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-fe8fb094-6b84-46e2-b374-379cf278b84d.png`; SHA-256 `72baad33bed6246cadf0d5da68490f9a44436cf925fcbe972ee4d651dc552e31`. Target `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-78ff9970-73e5-40d0-9b6b-269be1091afd.png` (SHA-256 `968e103d9377d0d75bac3e256fe4e943fd3f8f96022555154ac4435f934c8050`) attached after ALL page packs. Rejected target retained at `art-src/corrections/E08-v1.png`.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Noon inside the Conservatory on Cold Hill: strong high sunlight pouring down onto the round Great Bed, now wholly in flower, dense warm orange sunwort cups glowing among dark leaves, visible heat shimmer above the bed; the tall eastern shutters still closed behind, side louvres open. The player, Dov and Fenn stand at the rim in their usual clothes, Fenn dabbing his brow with his knitted cap, the player seen from behind. Only these three people.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Targeted correction ONLY: the target displays the entire closed shutter bank between clear side glazing but has too few tall shutter leaves. Rebuild this closed curved bank as EXACTLY TWELVE distinct tall iron shutter leaves, six left of the central dividing rib and six right, each separated by a narrow white iron stile and its own visible hinge hardware. Count six plus six = twelve. Keep same overall width/height of shutter bank, using narrower leaves. Every one remains fully closed. Preserve all other image details, especially three faces, clothes, hands, player rear view and satchel, Fenn cap OFF dabbing brow, lantern identities, wholly flowering orange cup bed, noon light, open side louvres and heat shimmer. Full-bleed1536x1024.
```

Correction 2 generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-8c7137b3-511d-4891-9a7a-2ab079212bc9.png`; SHA-256 `67c66d71045597d1efaadfae3ee42f3235a42a96811ca5a9f5b1b67e86d5492b`. Target `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-fe8fb094-6b84-46e2-b374-379cf278b84d.png` (SHA-256 `72baad33bed6246cadf0d5da68490f9a44436cf925fcbe972ee4d651dc552e31`) attached after ALL page packs. Rejected target retained at `art-src/corrections/E08-v2.png`.

Exact correction prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Noon inside the Conservatory on Cold Hill: strong high sunlight pouring down onto the round Great Bed, now wholly in flower, dense warm orange sunwort cups glowing among dark leaves, visible heat shimmer above the bed; the tall eastern shutters still closed behind, side louvres open. The player, Dov and Fenn stand at the rim in their usual clothes, Fenn dabbing his brow with his knitted cap, the player seen from behind. Only these three people.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Precise small correction of last image, preserve1536x1024. Current bank has14 shutter leaves: six paired inner bays plus one single outer leaf each side. Reduce to12 by removing ONLY the thin centre seams in the SECOND bay from LEFT (around x477) and SECOND bay from RIGHT (around x1145), merging each of those pairs into one wide leaf. Keep the central FOUR bays paired, outer TWO bays at EACH end single. Count1+1+2+2+2+2+1+1=12. Do not alter white structural ribs. All shutters closed. Preserve every other pixel-level scene detail, characters, hands, cap gesture, flowers, leaves, lanterns, noon lighting and open low louvres.
```

## E09

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-14fe6687-0ee7-435f-aae2-e9a4fac6d502.png`; SHA-256 `0b2c6e8fe5514ae98c85ecb853f0c69c233c819e634e1976a1415ba6875353c9`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/E09.png`; SHA-256 `0b2c6e8fe5514ae98c85ecb853f0c69c233c819e634e1976a1415ba6875353c9`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/E09.webp`; SHA-256 `ef9ed8ee57caceb85a03e23a9ec06635412d4905155f1f13dd3e5e47c733374f`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: Most plants open orange cups with scattered copper buds; low sunrise, open cropped shutter arc, frozen Mere below. Three standing identities, Fenn cap on, player rear hidden face. Selected original and final WebP visually inspected at native size; conversion preserves composition, identities, hands and route state. Owner review pending.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/E09-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/E09-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/E09-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: the tall eastern shutters standing wide open, full golden light across the round Great Bed, where most of the sunwort has opened into warm orange cups while a scattering of copper buds remain closed; the player, Dov and Fenn stand at the rim bathed in light, the player seen from behind. Only these three people. Frozen Mere glittering far below through the open shutters.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Generate one 1536x1024 full-bleed illustration. Golden sunrise low through WIDE OPEN vertical iron shutters. View framed tightly so outer bank ends outside image; show several shutter leaves edge-on open perpendicular to glazing and clear uninterrupted view of frozen Mere far below. Most sunwort broad orange CUP flowers among broad dark rosette leaves, a small scattering of CLOSED copper buds (about10percent) visible. Three people at rim, player rear face hidden, Dov and Fenn standing, both caps ON. Fenn coat buttoned and striped pyjamas visible below. No cap-off gesture, no extra people. Distinct oblique side composition, lake and dawn sun prominent.
```

## E10

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e2-7741-adff-74d7d67b8fcd/exec-c03d8162-3dc4-4cd8-bf57-68051fb2eb24.png`; SHA-256 `2475d7c9eb6ff6f76b53c7d0345555aba05a62dbb02fbd91ef6ed5289e9577b8`.

Selected PNG: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ddda0808/stories/glasshouse-express/art-src/E10.png`; SHA-256 `2475d7c9eb6ff6f76b53c7d0345555aba05a62dbb02fbd91ef6ed5289e9577b8`; 1536×1024.

Final WebP: `stories/glasshouse-express/images/E10.webp`; SHA-256 `9cfc319a49cd196b257ea8bd0b70687b95aaf70fe774bd281608d2d29833febe`; 1200×800; cwebp -q 75 -resize 1200 800.

QA: All plants full orange cup bloom, sunrise through open cropped shutter arc, city and frozen Mere, melting inner glass and steam. Player rear arms slightly raised, Dov seated on rim, Fenn bareheaded holding cap; anatomy and lantern checked. Selected original and final WebP visually inspected at native size; conversion preserves composition, identities, hands and route state. Owner review pending.

Actual reference attachments on every call:

- `stories/glasshouse-express/art-src/packed/E10-1.png` SHA-256 `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`; 1536×2048; upper player-hesper, lower dov.
- `stories/glasshouse-express/art-src/packed/E10-2.png` SHA-256 `2325da2befce654c65e5edd19ada20739555a04d4c3dca8c5db79ddd0a97b0b4`; 1536×2048; upper fenn, lower sunwort.
- `stories/glasshouse-express/art-src/packed/E10-3.png` SHA-256 `4c8e4304ca38652312d98fab950b4d37670f4d2338549f98a82048eca8a4a659`; 1536×2048; upper conservatory-exterior, lower conservatory-interior.

Exact initial prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

TOBIAS FENN: an original tall thin man in his seventies, pale lined skin, white moustache, a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas, unlaced brown boots. Carries a hurricane lantern. Grumbling but devoted.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Sunrise inside the Conservatory on Cold Hill: the tall eastern shutters flung wide, blazing golden light pouring across the round Great Bed where every sunwort plant has burst fully open into large warm orange cup flowers at once, heat shimmer rising, frost on the dome's inner glass turning to running water and steam. The player stands at the rim with arms slightly raised in the light, seen from behind; Dov sits down on the stone rim beside them, Fenn stands with his knitted cap in his hand. Only these three people. The whole city and frozen Mere visible far below through the open shutters.

Image 1: upper = player-hesper; lower = dov
Image 2: upper = fenn; lower = sunwort
Image 3: upper = conservatory-exterior; lower = conservatory-interior
Generate1536x1024 full-bleed climactic illustration. Player centre foreground rear face completely hidden, arms slightly raised with natural grey gloved hands. Dov SITTING naturally on stone rim to left, Fenn standing right holding his brown knit cap in hand, head BARE, coat still buttoned. EVERY plant fully blooming broad orange cup flowers, ZERO closed buds, heat shimmer. Low blazing SUNRISE through fully OPEN tall vertical shutter leaves perpendicular to glazing, partial arc cropped at outer edges. Vast frozen lake and city far below through glazing. Running rivulets on upper dome glass and thin steam as frost melts. All three identities exact, no added subjects. Dov square lantern and Fenn hurricane lantern if visible must stay distinct.
```

## Delivery validation

All 14 assigned final WebPs exist, decode at 1200×800, and have 14 distinct SHA-256 hashes. All selected originals are 1536×1024. Every selected original and WebP was visually inspected. Assigned 44 packs were verified before generation; ending pack hashes, approved source hashes and full-resolution decoded source rectangle equality were reverified at delivery. Every generation/edit included all mapped page packs and the complete exported prompt; corrections additionally attached the preceding target. All rejected variants remain in ignored corrections.

`git diff --check` passed. Changed tracked scope is the fourteen assigned images and this unique report only. No story, bible, stamp, reference, shared code or other batch changes. Owner has independently approved and merged F01–F06, including corrected F05; E03–E10 are ready for independent owner review. No self-stamp.

Global `npm run -s test:art` was run using the owner's installed tsx through PATH; result: 8 passed, 4 failed. Coverage tests also fail for unrelated existing stories last-skyway, midnight-signal and lantern-archive. Glasshouse Express coverage fails because 30 other-batch scene files (A01–A06, B01–B10, C01–C05, D01–D07, E01–E02) are absent in this isolated checkout. None of the missing files belongs to this assignment. Raw output is retained in ignored `art-src/finale-art-test.txt`. The owner must run combined global validation after merging all batches.
