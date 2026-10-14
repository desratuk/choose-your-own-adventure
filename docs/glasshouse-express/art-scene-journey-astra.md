# Glasshouse Express journey art — Astra

Status: all 15 assigned scenes selected, saved and locally inspected. D03 independently owner-approved (checkpoint 0d0097c); remaining 14 await owner review. No self-stamp.

Runtime: injected Codex/gpt-6-astra/medium and live orchestrator catalog inherited codex/gpt-6-astra, current reasoningEffort medium verified. Parent owns durable-record verification. Built-in image_gen only; no substitute image provider or native subagents.

Read CLAUDE.md, README.md, imagegen skill, whole story and bible, complete story dump including every arrival, manifest, exported prompts, batch contract and attachment/packing audit. All mapped boards inspected at original resolution. Complete source packs copied losslessly from owner and attached to every call. Story SHA: `ac3eede2367c209657140c9facac60cb4a8db9a4338ff97051039850e2a9e8bf`.

The story dump initially failed because this worktree lacks tsx; reran successfully using owner node_modules/.bin on PATH, without changing dependencies.

## Validation

- PASS assigned coverage: 15/15 selected PNGs at 1536×1024 and 15/15 WebPs at 1200×800; 15 distinct final SHA-256 hashes.
- PASS pack verification: 41 pack hashes/dimensions and 73 source hashes/dimensions/decoded RGB rectangles pixel-equal to approved WebPs. Reverified after generation.
- PASS every call has all mapped packs, at most five attached paths including edit target. Complete exported prompt retained verbatim before additions; source prompts taken directly from image-prompts.md.
- PASS full-size selected originals and final WebPs inspected for identity, faces, hands, anatomy, scenery, geometry and page-specific route states. Details and rejected variants below.
- All final WebPs converted only after original visual selection with `cwebp -q 75 -resize 1200 800 <selected.png> -o <ID.webp>`.
- Global `npm run -s test:art` executed with owner node_modules/.bin on PATH: 8 pass, 4 fail. Failures are missing scene coverage in last-skyway, midnight-signal, lantern-archive and this isolated branch’s 29 unassigned Glasshouse pages. All 15 assigned journey pages exist; shared reference coverage and mapping tests pass. Global/browser acceptance remains owner responsibility.
- Scope: only assigned WebPs and this report are tracked changes. Original selections, rejected corrections and lossless packs remain ignored under art-src. No story, bible, stamp, reference or shared code changes; no push or merge.

## Page records

### B10

Accepted first candidate: rear player at shed doorway; two workers around inspection pit; correct cream/green tram, cold night. Faces, hands and perspective inspected.

Selected PNG: `stories/glasshouse-express/art-src/B10.png` — SHA-256 `7cb7fcd6c1fdebe97267eb8cf426077579019c866306268c5fe683dc69a5ed16` (1536×1024).
Final WebP: `stories/glasshouse-express/images/B10.webp` — SHA-256 `24c8fc26ad844db1971a7ca282bc32d71208f3ba80eff47c9d7629aa219b8d43` (1200×800).

#### Call 3 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-66ef1141-20e3-48b0-8ddf-07fb487c1d01.png`
Original SHA-256: `7cb7fcd6c1fdebe97267eb8cf426077579019c866306268c5fe683dc69a5ed16`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/B10-1.png` — `015b72de18b3db4ff6af240a9befe5f2364a0c107de9f4b79856982caac684ac`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/B10-2.png` — `f4c29ee7b1a89be4eeff891fdbd3c354589fd82c571c7474b8843e021bc48ef7`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

Clear frosty night, one o'clock, inside the Lower Town tram depot down the lane from the Allotment Halt: a high brick shed, a cream-and-green tram standing over an inspection pit with work lamps, two unnamed depot workers in overalls and woolly hats looking up from the pit at the player, who stands at the shed door seen from behind. No other people. Cold blue night outside the open door.

Use case: illustration-story. One finished 1536x1024 landscape, no panels.
Reference image 1: upper full board = player-hesper; lower full board = tallow-street-and-halt
Reference image 2: entire board = lower-town-interiors
Reference contents establish identity only. Rear apprentice at the open shed doorway in foreground, face completely hidden. Exactly two workers looking up from a structurally coherent inspection pit beneath the cream-and-green tram. Natural anatomy, clear floor edges and rails straddling pit; warm work lamps against cold night. Do not add Hesper or any other reference subjects.
```

### C01

Rejected initial extra dark carriage/open vents and disconnected bridge. First edit corrected consist and vents but bridge still disconnected; second edit places viaduct beneath track ahead. Final has exactly engine + amber carriage + two dark glass carriages, gates across road, night lake, rear player.

Selected PNG: `stories/glasshouse-express/art-src/C01.png` — SHA-256 `76eb2d3fd9cd61ce44c039a367e8b42f4aa7f809aff8fbeb672dc0b82b2714fd` (1536×1024).
Final WebP: `stories/glasshouse-express/images/C01.webp` — SHA-256 `5ed4e07a7cbcae4378b49489ef6aac6443ffb6249f0dd03bbf1a967345dadda6` (1200×800).

#### Call 4 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-773b7416-400c-4a01-905e-7f71c5f3c77c.png`
Original SHA-256: `0fa6b23a1d4bda17d81387a621119b12162cd2d61a4cf5c35bbc20eca4303f9e`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-1.png` — `253c646bb0fe7e4c4795b98038a133f0db0638d7092f06081fc91b2b93ef9815`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-2.png` — `7d8e511c097d8ff01caab0a3d07f2db689629c6f8ab1d14b5a95617ab5bb855c`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-3.png` — `44d620acc2e76aee667c14f357d6d41967b830f03f073be551b0037958ad0e5d`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, half past one, at the Mere Road level crossing on the edge of town where the line leaves the last houses for the frozen lake: white crossing gates with red lamps closed against the road, a small lit crossing keeper's hut, the Glasshouse Express rolling across with Marigold leading, the glowing carriage behind her and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind that. The player is seen from behind at the glowing carriage's end window. Beyond, the dark viaduct begins over the ice. No tram in frame (it is out of shot on every route), no individually named people.

Use case: illustration-story. One finished 1536x1024 landscape, no panels.
Reference image 1: upper full board = player-hesper; lower full board = marigold
Reference image 2: upper full board = glasshouse-carriage; lower full board = tallow-street-and-halt
Reference image 3: entire board = mere-and-beacon
Reference contents establish identity only. Wide elevated three-quarter view containing exactly four connected railway vehicles on one continuous track: green engine leading toward the viaduct at right, amber greenhouse carriage immediately behind, then exactly two dark empty greenhouse carriages trailing toward left. Keep each vehicle distinct, no tender, no extra cars. Small rear-facing apprentice visible inside glowing carriage end window, face concealed. White gates block the perpendicular road but leave rails clear. No tram or other people. The frozen lake and viaduct beyond establish direction.
```

#### Call 5 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-bc6193d5-28e0-4adc-a94f-7775da3ce4df.png`
Original SHA-256: `11df817576cac7e33b230e9d03191b5065967977c87b2bfd169130f2ec7cfd3c`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-1.png` — `253c646bb0fe7e4c4795b98038a133f0db0638d7092f06081fc91b2b93ef9815`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-2.png` — `7d8e511c097d8ff01caab0a3d07f2db689629c6f8ab1d14b5a95617ab5bb855c`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-3.png` — `44d620acc2e76aee667c14f357d6d41967b830f03f073be551b0037958ad0e5d`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-773b7416-400c-4a01-905e-7f71c5f3c77c.png` — `0fa6b23a1d4bda17d81387a621119b12162cd2d61a4cf5c35bbc20eca4303f9e`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, half past one, at the Mere Road level crossing on the edge of town where the line leaves the last houses for the frozen lake: white crossing gates with red lamps closed against the road, a small lit crossing keeper's hut, the Glasshouse Express rolling across with Marigold leading, the glowing carriage behind her and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind that. The player is seen from behind at the glowing carriage's end window. Beyond, the dark viaduct begins over the ice. No tram in frame (it is out of shot on every route), no individually named people.

Use case: precise-object-edit. 1536x1024 single scene.
Reference image 1: upper full board = player-hesper; lower full board = marigold
Reference image 2: upper full board = glasshouse-carriage; lower full board = tallow-street-and-halt
Reference image 3: entire board = mere-and-beacon
Final attached image is edit target. Correct three things: (1) remove the rearmost dark carriage at far left, leaving EXACTLY TWO dark carriages behind ONE glowing carriage behind ONE engine, four vehicles total; shift rear train into frame as needed. (2) Close ALL roof vents flush with the roof on every carriage; no raised rectangular roof panels. (3) the train track in front of engine must curve naturally toward the lake and connect continuously onto the viaduct: reposition viaduct approach if necessary so this is visibly one railway, no disconnected bridge alongside train. Preserve the player rear-facing at the end window, clothing, lantern-lit hut, white gates barring road only, frozen lake, starry deep night, and all reference designs. No extra people or tram.
```

#### Call 11 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-8adde50a-d71e-4bd2-914c-39229cb7bf14.png`
Original SHA-256: `76eb2d3fd9cd61ce44c039a367e8b42f4aa7f809aff8fbeb672dc0b82b2714fd`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-1.png` — `253c646bb0fe7e4c4795b98038a133f0db0638d7092f06081fc91b2b93ef9815`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-2.png` — `7d8e511c097d8ff01caab0a3d07f2db689629c6f8ab1d14b5a95617ab5bb855c`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C01-3.png` — `44d620acc2e76aee667c14f357d6d41967b830f03f073be551b0037958ad0e5d`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-bc6193d5-28e0-4adc-a94f-7775da3ce4df.png` — `11df817576cac7e33b230e9d03191b5065967977c87b2bfd169130f2ec7cfd3c`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, half past one, at the Mere Road level crossing on the edge of town where the line leaves the last houses for the frozen lake: white crossing gates with red lamps closed against the road, a small lit crossing keeper's hut, the Glasshouse Express rolling across with Marigold leading, the glowing carriage behind her and the two dark, empty glass carriages (the Fern House and the Orchard Car) coupled behind that. The player is seen from behind at the glowing carriage's end window. Beyond, the dark viaduct begins over the ice. No tram in frame (it is out of shot on every route), no individually named people.

Use case: precise-object-edit. 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = marigold
Reference image 2: upper full board = glasshouse-carriage; lower full board = tallow-street-and-halt
Reference image 3: entire board = mere-and-beacon
Final image is target. Correct the background railway geometry: REMOVE the current viaduct that starts behind the middle of the train and stretches horizontally across the lake. Replace that area with uninterrupted frozen lake. Instead, show the start of a stone viaduct directly UNDER the rails AHEAD OF THE ENGINE at the extreme lower-right edge, with one or two stone arches visible below the track there; the rest of this bridge continues out of frame to the right. This establishes that train is just crossing the road and about to enter the viaduct, not running alongside a disconnected bridge. Keep the engine, exactly one glowing carriage and two dark carriages, all closed roof vents, rear-facing player, road gates, hut and night lighting unchanged. Do not add any other vehicles or people.
```

### C02

Accepted first candidate: natural gloved hand wiping fogged pane, hidden player face, healthy broad rosettes with closed copper buds, moonlit lake and city.

Selected PNG: `stories/glasshouse-express/art-src/C02.png` — SHA-256 `0e89c3eb25f5edd347c6530246ca32722d8b8d00952d1ea4e2de3df27e7af58d` (1536×1024).
Final WebP: `stories/glasshouse-express/images/C02.webp` — SHA-256 `4e516e47cac82f4cfc967b46d9694348013203cdad8a6e81a207efbe9ca83d6c` (1200×800).

#### Call 6 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-4d02afc1-fd62-4c05-9f81-0b90898b19e8.png`
Original SHA-256: `0e89c3eb25f5edd347c6530246ca32722d8b8d00952d1ea4e2de3df27e7af58d`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C02-1.png` — `35e8a27a5b96d81756fbea8f8433e215e4586c7dad64ba6da5f101ae2989a3a3`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C02-2.png` — `5cf78072e88e35604c5573828e33e097ea8ef6d68de0ed565a81b4cf210ed111`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C02-3.png` — `44d620acc2e76aee667c14f357d6d41967b830f03f073be551b0037958ad0e5d`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

Clear frosty night, near two o'clock, inside the Glasshouse Carriage crossing the long stone viaduct over the frozen Mere: the player stands among the sunwort trays, seen from behind, wiping a clear patch in the condensation on a pane with a gloved hand; through the fogged glass, moonlit ice stretches away to the distant lit city on its hill and the dark dome of the Conservatory on the summit. The house stove glows at the carriage end. Alone in the carriage. Wind-blown spindrift outside.

Use case: illustration-story. One finished 1536x1024 landscape, no panels.
Reference image 1: upper full board = player-hesper; lower full board = glasshouse-carriage
Reference image 2: upper full board = carriage-interior; lower full board = sunwort
Reference image 3: entire board = mere-and-beacon
Reference contents establish identity only. Compose a side-window view from inside behind the apprentice, grey gloved hand wiping a single clear patch amid soft condensation; through this patch show the distant city tiers and summit dome across moonlit ice. Keep plants in healthy travelling state with broad leaves and closed copper buds, roof vents closed. No lamp in hand or copied wall thaw-lamp, no extra characters. Stove softly glowing at carriage end. Contrast warm inside with cold blue spindrift outside.
```

### C03

Accepted first candidate: rear player at doorway, Dov with square lantern approaching hut, correct engine, radio studio/mast/stairs above; trailing vehicles cropped.

Selected PNG: `stories/glasshouse-express/art-src/C03.png` — SHA-256 `8466b48d6c616fee7d0013b61b9fd8e5b58be1351f09661ccf623de8edeb072c` (1536×1024).
Final WebP: `stories/glasshouse-express/images/C03.webp` — SHA-256 `df90cbd417e286f2a95cb31f2dbda5b4279b30cd9d1e75bfe01db789cb77fdb7` (1200×800).

#### Call 7 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-3b69e7b5-c08c-48d5-90b1-58a28dd75284.png`
Original SHA-256: `8466b48d6c616fee7d0013b61b9fd8e5b58be1351f09661ccf623de8edeb072c`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C03-1.png` — `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C03-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C03-3.png` — `76af86017281893924726e013c9a9c71af354a3c12780ff3d502fd6a261cfa38`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, two o'clock, at Beacon Cut on the far shore of the frozen Mere: the line in a shallow rock cutting, a small token hut with a lamp beside the rails, and above the cutting a tall steel radio mast with a blinking red lamp at its top and a lit studio cabin at its base reached by an iron stair. Marigold stands stopped; Dov walks to the hut with a lantern; the player stands at the open carriage door, seen from behind. Only these two people. Stars, snow on the rocks. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.

Use case: illustration-story. One finished 1536x1024 landscape, no panels.
Reference image 1: upper full board = player-hesper; lower full board = dov
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = keeper-props; lower full board = mere-and-beacon
Reference contents establish identity only. Compose from just behind the apprentice in the near open carriage doorway, looking ahead along the single stopped engine toward the small token hut. Rear of glowing carriage is cropped by frame, and two trailing dark carriages entirely out of shot. Dov walks toward hut holding his square X-braced brass lantern; only Dov and rear-facing apprentice visible. Tall mast and cabin rise above snowy cutting with zigzag stair. Keep roof vents closed, engine three driving axles/no tender. No token in player hands, no other reference equipment, no Cassia in window.
```

### C04

Initial copied an extra studio/mast into exterior view and incidental plant. Edit removes duplicates/plant; Cassia teal outfit/headphones, natural receiver hand, rear player and four-vehicle train below verified.

Selected PNG: `stories/glasshouse-express/art-src/C04.png` — SHA-256 `1ccc56640f4a301e68fbe8e9a840e610ba7916ff9e50ae8c1e29d73c2e0ad08a` (1536×1024).
Final WebP: `stories/glasshouse-express/images/C04.webp` — SHA-256 `e4660cc757542f6a28c22d3ae5ced737f1ee46c48c7038ebe237823bedddd129` (1200×800).

#### Call 8 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-b5692bfc-ddaa-45b1-9f94-bc688a32801e.png`
Original SHA-256: `31a65ece6314992d13d4bdb716718b563b4c7424dd4ce5e1baf21f6f7289938a`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C04-1.png` — `9258db3f5cd2900558f0ee0a11410b597e1e39e92ca0d5a2947b55c3aeaa4e48`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C04-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C04-3.png` — `9f216e2d442de9375457fac7eecaceebbf73d6d8cf656b93b790808b317121af`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

CASSIA FLINT: an original woman in her twenties, deep brown skin, short bleached-blonde curls, big silver headphones worn round her neck, a shiny teal puffer jacket over a black turtleneck, black leggings with acid-yellow leg warmers and white high-top sneakers. Quick grin, always near a microphone.

Clear frosty night, two o'clock, inside the small radio studio cabin at the foot of the Beacon Cut mast: egg-crate foam on the walls, a mixing desk with glowing meters, twin turntables, a cassette deck, a desk microphone on a boom, a window looking down on the stopped lit train in the cutting below. Cassia Flint in her shiny teal puffer jacket with big silver headphones round her neck holds a telephone receiver and grins at the player, who stands just inside the door seen from behind. Only these two people. Seen from above, the train in the cutting is the whole four-vehicle Express: Marigold, the glowing carriage and the two dark, empty glass carriages coupled behind.

Use case: illustration-story. One finished 1536x1024 landscape, no panels.
Reference image 1: upper full board = player-hesper; lower full board = lower-town-cast
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = lower-town-interiors; lower full board = mere-and-beacon
Reference contents establish identity only. Inside studio, apprentice rear view near doorway at left, Cassia at mixing desk at right with receiver in one naturally formed hand, silver headphones around neck. Window above desk looks steeply down on EXACTLY four coupled vehicles on a single curved track: one squat green engine, one glowing glasshouse carriage, precisely TWO dark empty carriages. All roof vents closed. No tender, no extra carriage, no figures outside. Make train small enough to show all four vehicles clearly. Include both turntables, microphone, meters and cassette deck, no readable text. No other cast from reference boards.
```

#### Call 9 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-e7edcdbf-0ee6-4c73-8810-cb303b80aa20.png`
Original SHA-256: `1ccc56640f4a301e68fbe8e9a840e610ba7916ff9e50ae8c1e29d73c2e0ad08a`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C04-1.png` — `9258db3f5cd2900558f0ee0a11410b597e1e39e92ca0d5a2947b55c3aeaa4e48`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C04-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C04-3.png` — `9f216e2d442de9375457fac7eecaceebbf73d6d8cf656b93b790808b317121af`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-b5692bfc-ddaa-45b1-9f94-bc688a32801e.png` — `31a65ece6314992d13d4bdb716718b563b4c7424dd4ce5e1baf21f6f7289938a`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

CASSIA FLINT: an original woman in her twenties, deep brown skin, short bleached-blonde curls, big silver headphones worn round her neck, a shiny teal puffer jacket over a black turtleneck, black leggings with acid-yellow leg warmers and white high-top sneakers. Quick grin, always near a microphone.

Clear frosty night, two o'clock, inside the small radio studio cabin at the foot of the Beacon Cut mast: egg-crate foam on the walls, a mixing desk with glowing meters, twin turntables, a cassette deck, a desk microphone on a boom, a window looking down on the stopped lit train in the cutting below. Cassia Flint in her shiny teal puffer jacket with big silver headphones round her neck holds a telephone receiver and grins at the player, who stands just inside the door seen from behind. Only these two people. Seen from above, the train in the cutting is the whole four-vehicle Express: Marigold, the glowing carriage and the two dark, empty glass carriages coupled behind.

Use case: precise-object-edit. 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = lower-town-cast
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = lower-town-interiors; lower full board = mere-and-beacon
Final image is target. Remove the duplicate lit studio cabin and radio mast on the ridge visible through the window, replacing them with uninterrupted snowy rock and dark trees: we are INSIDE the one studio, so it cannot appear again across the cutting. Retain the small token hut by the rails and stair leading down into cutting. Remove the incidental houseplant in the extreme upper-right indoor corner. Preserve all other details exactly: Cassia face, correct teal jacket, silver headphones, phone receiver and natural hands; hidden-face player with correct satchel; exactly four coupled vehicles with closed vents outside; mixing desk, twin turntables, microphone and cassette deck. No extra subjects from refs.
```

### C05

Initial roof opening too broad. Edit restores glazing and curved ribs with hinged ridge windows visibly open. Natural two-handed chain pull, steam, closed copper buds and slightly curled leaves; no lasting chilled state.

Selected PNG: `stories/glasshouse-express/art-src/C05.png` — SHA-256 `768cd8230f523a40b6522a5a0d56f2ca671de9262c53ba80be6c6288e4ec5fea` (1536×1024).
Final WebP: `stories/glasshouse-express/images/C05.webp` — SHA-256 `ff4e7beca297e754ee1e6a2338b78e01ddcdd2aa8920424d1fe27829d3db52be` (1200×800).

#### Call 10 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-5bb2225d-a9b5-4b2c-b0e9-0b9a153550c0.png`
Original SHA-256: `51cefa29f85d300d0937e8993a5716c6f4f494a2d6c757b65e0f17eed19b05f8`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C05-1.png` — `35e8a27a5b96d81756fbea8f8433e215e4586c7dad64ba6da5f101ae2989a3a3`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C05-2.png` — `5cf78072e88e35604c5573828e33e097ea8ef6d68de0ed565a81b4cf210ed111`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C05-3.png` — `44d620acc2e76aee667c14f357d6d41967b830f03f073be551b0037958ad0e5d`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

Clear frosty night, two o'clock, inside the Glasshouse Carriage stopped at Beacon Cut: the player hauls on the vent hand chain by the stove, seen from behind, while the ridge vents stand open overhead and warm vapour streams out into the starry night; the panes have cleared to show sunwort trays sharply and the rock cutting outside. Alone in the carriage. Hard frost outside, the stove glowing.

Use case: illustration-story. One finished 1536x1024 landscape, no panels.
Reference image 1: upper full board = player-hesper; lower full board = glasshouse-carriage
Reference image 2: upper full board = carriage-interior; lower full board = sunwort
Reference image 3: entire board = mere-and-beacon
Reference contents establish identity only. Focus on rear-view apprentice actively hauling the black vent hand-chain with two naturally formed grey-gloved hands, safely clear of the stove flue. Roof ridge vents visibly open, releasing warm vapour through narrow openings into starry night. This is the brief Beacon Cut vent mistake: healthy closed copper buds, broad leaves just beginning to curl slightly, not full chilled fists, no flowers. Clear glass shows snowy rock cutting, no Dov or other person; no wall thaw-lamp or additional props. Keep navy coat, mustard scarf, left-shoulder/right-hip satchel.
```

#### Call 12 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-8b876a9e-913b-4174-a6c5-d7f3cd9c7767.png`
Original SHA-256: `768cd8230f523a40b6522a5a0d56f2ca671de9262c53ba80be6c6288e4ec5fea`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C05-1.png` — `35e8a27a5b96d81756fbea8f8433e215e4586c7dad64ba6da5f101ae2989a3a3`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C05-2.png` — `5cf78072e88e35604c5573828e33e097ea8ef6d68de0ed565a81b4cf210ed111`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/C05-3.png` — `44d620acc2e76aee667c14f357d6d41967b830f03f073be551b0037958ad0e5d`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-5bb2225d-a9b5-4b2c-b0e9-0b9a153550c0.png` — `51cefa29f85d300d0937e8993a5716c6f4f494a2d6c757b65e0f17eed19b05f8`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

Clear frosty night, two o'clock, inside the Glasshouse Carriage stopped at Beacon Cut: the player hauls on the vent hand chain by the stove, seen from behind, while the ridge vents stand open overhead and warm vapour streams out into the starry night; the panes have cleared to show sunwort trays sharply and the rock cutting outside. Alone in the carriage. Hard frost outside, the stove glowing.

Use case: precise-object-edit. 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = glasshouse-carriage
Reference image 2: upper full board = carriage-interior; lower full board = sunwort
Reference image 3: entire board = mere-and-beacon
Final image is target. Correct roof geometry only: restore the continuous curved white iron roof ribs and glazed roof surface overhead. The reference carriage has a narrow line of small hinged ridge vents at the roof apex, not a giant missing central roof. Show those small rectangular ridge windows tilted open on intact hinges, with vapour escaping through these narrow gaps. No wide skylight hole; no missing ribs. Preserve the apprentice pose, hands hauling chain clear of stove, clothing/satchel, healthy closed-bud plants, clear side panes, snowy cutting and all other details. No new objects or subjects.
```

### D01

Initial and first edit rejected for disconnected crossing track, open vents or lamp substitution. Fresh composition restored identities and carriage crop. Final targeted edit connects rails under engine to uphill tunnel and restores icy sander pipe. Kneeling Dov, square lantern, rear player with bulbous thaw-lamp, shelter/grit bin, no applied grit.

Selected PNG: `stories/glasshouse-express/art-src/D01.png` — SHA-256 `b5dc748c7c5ce8f0a3fbf23bb755c3a42f768a9c0a087e1092e1894756418eb1` (1536×1024).
Final WebP: `stories/glasshouse-express/images/D01.webp` — SHA-256 `3497bd1a970878a9b533555b53754cb53ce8783180c657c9a5a480faf293be9b` (1200×800).

#### Call 13 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-ce0597e6-cb8c-49ad-8c2a-552c2b30dc46.png`
Original SHA-256: `a01e627f52fd450b67fb167129d2dd63c60826db411b173859e7b97dca4bafb7`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-1.png` — `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-3.png` — `cf99aacfd4a97e57e4cc502faa22d5631dd420c2653962aa57b37381bc6c2fb3`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, three o'clock, at Fernhallow Halt at the foot of Cold Hill: a tiny wooden shelter with one oil lamp, a grit bin, and the rails climbing steeply ahead into a stone-arched tunnel mouth in the hillside, the rails glassy with ice shining in the engine's headlamp. Dov kneels at Marigold's frozen sander pipe with a lantern; the player stands beside him seen from behind, holding the thaw-lamp. Only these two people. Stars, snowy pines above the tunnel. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.

Use case: illustration-story. One finished 1536x1024 landscape, no panels.
Reference image 1: upper full board = player-hesper; lower full board = dov
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = keeper-props; lower full board = fernhallow-incline
Reference contents establish identity only. Side three-quarter view close to Marigold wheels, engine facing uphill toward tunnel in background. Dov kneels beside the iced sander pipe near the foremost driving wheel, naturally holding square X-braced lantern. Apprentice standing beside him from rear holds small brass thaw-lamp by its wooden grip, face hidden. Exactly these two people. Rails ahead bare glassy ice, no grit laid. Tiny shelter and grit bin visible beside track. Glowing carriage behind engine partly cropped; frame ends before any trailing dark carriages. Roof vents closed. Preserve three axles, integral bunker, two buffers and no tender.
```

#### Call 14 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-dd694e5d-3c57-4f32-a00b-5336930ca950.png`
Original SHA-256: `df9319739ad2ff9d331593f1d03c35fbc5a0ce46a9e8a3b83fc4f696b16214ae`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-1.png` — `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-3.png` — `cf99aacfd4a97e57e4cc502faa22d5631dd420c2653962aa57b37381bc6c2fb3`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-ce0597e6-cb8c-49ad-8c2a-552c2b30dc46.png` — `a01e627f52fd450b67fb167129d2dd63c60826db411b173859e7b97dca4bafb7`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, three o'clock, at Fernhallow Halt at the foot of Cold Hill: a tiny wooden shelter with one oil lamp, a grit bin, and the rails climbing steeply ahead into a stone-arched tunnel mouth in the hillside, the rails glassy with ice shining in the engine's headlamp. Dov kneels at Marigold's frozen sander pipe with a lantern; the player stands beside him seen from behind, holding the thaw-lamp. Only these two people. Stars, snowy pines above the tunnel. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.

Use case: precise-object-edit. 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = dov
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = keeper-props; lower full board = fernhallow-incline
Final image is target. Correct these specific defects: close the glowing carriage roof vents flush, no raised panels. The engine must be on ONE continuous track curving uphill into tunnel: replace the crossing/branch-like rail junction at right with a smooth single pair of rails continuing from under engine front wheels and curving into the incline. No railway crossing or second track. Player merely HOLDS the small thaw-lamp lowered beside thigh, nozzle pointed away from Dov and the frozen pipe, flame off; the sander remains frozen, no successful repair shown. Keep both people, hidden player face, Dov kneeling with square lantern, hands/anatomy, full clothing, locomotive design, shelter/grit bin, ice and tunnel unchanged otherwise.
```

#### Call 15 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-e34be42d-310a-49bb-b580-a79f21fa1bc6.png`
Original SHA-256: `ee0b7d7debc5f0eeb55380f13a9f5fcf09a9499b4e98792e7fe240c1a3bae72b`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-1.png` — `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-3.png` — `cf99aacfd4a97e57e4cc502faa22d5631dd420c2653962aa57b37381bc6c2fb3`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, three o'clock, at Fernhallow Halt at the foot of Cold Hill: a tiny wooden shelter with one oil lamp, a grit bin, and the rails climbing steeply ahead into a stone-arched tunnel mouth in the hillside, the rails glassy with ice shining in the engine's headlamp. Dov kneels at Marigold's frozen sander pipe with a lantern; the player stands beside him seen from behind, holding the thaw-lamp. Only these two people. Stars, snowy pines above the tunnel. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.

Use case: illustration-story. Generate a fresh single scene at 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = dov
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = keeper-props; lower full board = fernhallow-incline
Reference contents identity only. Use a simple coherent railway composition: camera is above and behind the train looking straight UP the single incline track to the tunnel. In foreground left the glowing carriage is cropped after its front section; immediately ahead is Marigold viewed from rear three-quarter, integral coal bunker and cab nearest, chimney pointing toward distant tunnel. Exactly ONE pair of parallel rails runs beneath train straight into tunnel, no bends, branches or crossings. Two people on snowy ballast to RIGHT of engine: Dov kneels at frozen sander pipe holding square X-braced lantern; player stands beside him facing away from camera, holding the exact bulbous brass thaw-lamp with wooden side grip and guarded flared nozzle, unlit and pointed away. Roof vents CLOSED flush on carriage. No repairs under way, no grit laid. Tiny shelter and grit bin on right beside track. No buckets added in hands. No extra people, vehicles, or tender. Hide the trailing empty carriages behind crop.
```

#### Call 24 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-ed4a15f0-e498-4133-ab7f-61ecd4501833.png`
Original SHA-256: `b5dc748c7c5ce8f0a3fbf23bb755c3a42f768a9c0a087e1092e1894756418eb1`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-1.png` — `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D01-3.png` — `cf99aacfd4a97e57e4cc502faa22d5631dd420c2653962aa57b37381bc6c2fb3`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-e34be42d-310a-49bb-b580-a79f21fa1bc6.png` — `ee0b7d7debc5f0eeb55380f13a9f5fcf09a9499b4e98792e7fe240c1a3bae72b`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, three o'clock, at Fernhallow Halt at the foot of Cold Hill: a tiny wooden shelter with one oil lamp, a grit bin, and the rails climbing steeply ahead into a stone-arched tunnel mouth in the hillside, the rails glassy with ice shining in the engine's headlamp. Dov kneels at Marigold's frozen sander pipe with a lantern; the player stands beside him seen from behind, holding the thaw-lamp. Only these two people. Stars, snowy pines above the tunnel. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.

Use case: precise-object-edit. 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = dov
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = keeper-props; lower full board = fernhallow-incline
Last image is edit target. Make a precise railway-geometry repair: current uphill track sits beside engine. Move lower part of incline rails LEFT so the RIGHT rail continues from under the visible driving wheels directly around the engine nose, then smoothly curves right uphill into tunnel. Left rail mostly hidden under locomotive until beyond its nose. Fill former separate lower track location behind Dov and player with snowy ballast. Exactly ONE continuous pair of rails under engine and carriage to tunnel, no branch or second track. Also give frozen sander pipe at Dov hands a thin white icy coating. Preserve people, hands, lamp, lantern, clothing, carriage, locomotive identity, shed, snowy trees and all else.
```

### D02

Initial player between rails, unwanted distant dome and wrong dark roofs rejected. First edit moved tunnel behind train and added car, rejected. Second edit uses original target: restores near tunnel frame, removes dome, puts player on snowy ballast outside running rail, dark glazed trailing car roofs. Headlamp, raised thaw-lamp, hidden Dov verified.

Selected PNG: `stories/glasshouse-express/art-src/D02.png` — SHA-256 `8f2fd2b0223af10f4ad05599fbeaae634d5bfdcbc3921bda002a547e5b90bc47` (1536×1024).
Final WebP: `stories/glasshouse-express/images/D02.webp` — SHA-256 `92b68a9c45b5b24882caa455e8129fbd3173b0518504abede03acd1a8e2d1485` (1200×800).

#### Call 16 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-82f9b4b3-d2c6-4d22-ab3d-7408865abdb5.png`
Original SHA-256: `46816df343387299e4839d8830922e8e00669a4c3d7adb63193d69a5df62b84b`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-1.png` — `253c646bb0fe7e4c4795b98038a133f0db0638d7092f06081fc91b2b93ef9815`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-2.png` — `0d692d04f47c9af772796f3817fbc8f7fee4376bebbf2c12439e89896e275cf7`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-3.png` — `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

THE THAW-LAMP: a brass hand lamp with a bulbous spirit reservoir, a wooden side grip, and a flared brass nozzle inside a wire guard, throwing a small soft blue flame. Palm-and-a-half tall; used to thaw frozen locks, levers and wax cylinders.

Clear frosty night, after three, on the steep incline above Fernhallow Halt: the player stands aside on the snowy ballast just below the dark stone tunnel mouth, seen from behind, holding the brass thaw-lamp raised; no bucket in frame. Marigold creeps up the grade toward the player with her headlamp blazing, the glowing glass carriage behind her. Alone on the track; Dov is on the footplate, not visible. Pines heavy with snow. The two dark, empty glass carriages (the Fern House and the Orchard Car) are coupled behind the glowing carriage, lower on the grade and mostly out of frame.

Use case: illustration-story. One finished 1536x1024 landscape, no panels.
Reference image 1: upper full board = player-hesper; lower full board = marigold
Reference image 2: upper full board = glasshouse-carriage; lower full board = keeper-props
Reference image 3: entire board = fernhallow-incline
Reference contents identity only. Camera just inside tunnel mouth looking DOWN the incline from behind apprentice, who stands safely on snowy ballast to the side, face hidden, small exact brass thaw-lamp raised by its wooden side grip. The stone arch frames upper image edges. Engine approaches camera uphill on ONE continuous pair of rails, headlamp blazing, three driving axles, NO tender. Immediately behind engine one amber carriage then exactly two dark carriages trailing down grade and mostly cropped/out of view. Closed roof vents on all carriages. No buckets anywhere in frame. Dov hidden in cab, no other people. Grit scattered on rails below, no damage or derailment, snow-laden pines.
```

#### Call 17 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-bf18859f-a90e-4a14-aa94-76600e31da45.png`
Original SHA-256: `1bcf42a7d75691327fcce455bfc549b9dfdabeeb2c97ab17b7c88f85ae4c1391`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-1.png` — `253c646bb0fe7e4c4795b98038a133f0db0638d7092f06081fc91b2b93ef9815`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-2.png` — `0d692d04f47c9af772796f3817fbc8f7fee4376bebbf2c12439e89896e275cf7`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-3.png` — `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-82f9b4b3-d2c6-4d22-ab3d-7408865abdb5.png` — `46816df343387299e4839d8830922e8e00669a4c3d7adb63193d69a5df62b84b`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

THE THAW-LAMP: a brass hand lamp with a bulbous spirit reservoir, a wooden side grip, and a flared brass nozzle inside a wire guard, throwing a small soft blue flame. Palm-and-a-half tall; used to thaw frozen locks, levers and wax cylinders.

Clear frosty night, after three, on the steep incline above Fernhallow Halt: the player stands aside on the snowy ballast just below the dark stone tunnel mouth, seen from behind, holding the brass thaw-lamp raised; no bucket in frame. Marigold creeps up the grade toward the player with her headlamp blazing, the glowing glass carriage behind her. Alone on the track; Dov is on the footplate, not visible. Pines heavy with snow. The two dark, empty glass carriages (the Fern House and the Orchard Car) are coupled behind the glowing carriage, lower on the grade and mostly out of frame.

Use case: precise-object-edit. 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = marigold
Reference image 2: upper full board = glasshouse-carriage; lower full board = keeper-props
Reference image 3: entire board = fernhallow-incline
Final image is target. Correct only: remove the distant illuminated dome at upper-right and replace with snowy pine-covered hills; the Conservatory is not below the tunnel. Move the apprentice wholly LEFT of the left running rail onto snowy ballast, both boots well outside the railway gauge, preserving rear view, natural anatomy and raised exact brass thaw-lamp. The two dark carriages behind the glowing carriage must have rounded glass roofs and white iron glazing like the supplied glasshouse-carriage board, unlit and empty, not ordinary passenger coaches. Their rear ends may trail out of frame. Keep engine on rails, three driving axles, two front buffers, headlamp, tunnel arch, lamp hand, clothing and all other details unchanged. Closed roof vents, no buckets or other people.
```

#### Call 18 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-21dfdb3e-7459-428f-926a-f489fa2005a7.png`
Original SHA-256: `8f2fd2b0223af10f4ad05599fbeaae634d5bfdcbc3921bda002a547e5b90bc47`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-1.png` — `253c646bb0fe7e4c4795b98038a133f0db0638d7092f06081fc91b2b93ef9815`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-2.png` — `0d692d04f47c9af772796f3817fbc8f7fee4376bebbf2c12439e89896e275cf7`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D02-3.png` — `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-82f9b4b3-d2c6-4d22-ab3d-7408865abdb5.png` — `46816df343387299e4839d8830922e8e00669a4c3d7adb63193d69a5df62b84b`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

THE THAW-LAMP: a brass hand lamp with a bulbous spirit reservoir, a wooden side grip, and a flared brass nozzle inside a wire guard, throwing a small soft blue flame. Palm-and-a-half tall; used to thaw frozen locks, levers and wax cylinders.

Clear frosty night, after three, on the steep incline above Fernhallow Halt: the player stands aside on the snowy ballast just below the dark stone tunnel mouth, seen from behind, holding the brass thaw-lamp raised; no bucket in frame. Marigold creeps up the grade toward the player with her headlamp blazing, the glowing glass carriage behind her. Alone on the track; Dov is on the footplate, not visible. Pines heavy with snow. The two dark, empty glass carriages (the Fern House and the Orchard Car) are coupled behind the glowing carriage, lower on the grade and mostly out of frame.

Use case: precise-object-edit. Keep 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = marigold
Reference image 2: upper full board = glasshouse-carriage; lower full board = keeper-props
Reference image 3: entire board = fernhallow-incline
The final image is the ORIGINAL edit target, and must retain its camera looking out from inside tunnel mouth. Keep the stone arch around LEFT/TOP/RIGHT frame edges EXACTLY in place; NEVER add any tunnel opening behind train. Make ONLY these local edits: replace illuminated dome far upper-right with snowy trees. Move the left foreground running rail to the RIGHT of both apprentice boots so the apprentice is standing safely on ballast outside rails; keep train wheels seated correctly on continuous rails. Replace the solid dark roofs on the two trailing cars with rounded greenhouse glazed roofs, dark and unlit. There are exactly TWO dark cars, never three. Preserve engine position and count, glowing carriage, rear-facing player pose and lamp, sky and all other details.
```

### D03

Owner independently approved corrected full-size PNG and final WebP, actual milestone history merged; approval checkpoint 0d0097c. Initial copied wall thaw-lamp removed and right hand clarified beside vent control clear of hot flue. Healthy closed buds, open brick locker, tunnel composition preserved.

Selected PNG: `stories/glasshouse-express/art-src/D03.png` — SHA-256 `f1e411954dfd8d216f3b5b2162ec33afd6b6e7e31b9292f607d72768854966db` (1536×1024).
Final WebP: `stories/glasshouse-express/images/D03.webp` — SHA-256 `7fb1a2a0be03a3685ad9a24e1a56e6ae2df86669e5338eee9af08eb48ea5f3ba` (1200×800).

#### Call 1 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-8287ee35-0094-4f71-8322-856a0325de95.png`
Original SHA-256: `953dd339b91248584a4c8a3d8412b35d013cdbe493084f234d0575c0cfa0f84e`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D03-1.png` — `35e8a27a5b96d81756fbea8f8433e215e4586c7dad64ba6da5f101ae2989a3a3`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D03-2.png` — `5cf78072e88e35604c5573828e33e097ea8ef6d68de0ed565a81b4cf210ed111`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D03-3.png` — `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

Clear frosty deep night, inside the Glasshouse Carriage paused at the dark stone mouth of Fernhallow Tunnel: the player stands by the house stove with one hand near the vent chain and the brick locker open beside it, seen from behind; sunwort trays with tight copper buds on the staging; through the end panes the tunnel's black arch and the frosted rock face in the headlamp glow. Alone in the carriage. Stove glowing.

Use case: illustration-story. Generate one finished 1536x1024 landscape illustration, no panels or reference-sheet layout.
Reference image 1: upper full board = player-hesper; lower full board = glasshouse-carriage
Reference image 2: upper full board = carriage-interior; lower full board = sunwort
Reference image 3: entire board = fernhallow-incline
All reference sheets are identity guides only. Compose an intimate rear view of the apprentice beside the small closed glowing stove, open brick locker, and slack vent chain, with broad healthy leaves and tightly closed copper buds. Roof vents closed. Angle the end panes to reveal the frosted tunnel arch above the engine line without showing additional characters. No hand-held lamp, no flowers, no optional props. The player has two natural gloved hands, one near but not pulling the chain. Keep the reference coat, scarf and left-shoulder to right-hip satchel.
```

#### Call 2 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-4ddb517e-6e37-4141-b8f8-93b50908a2db.png`
Original SHA-256: `f1e411954dfd8d216f3b5b2162ec33afd6b6e7e31b9292f607d72768854966db`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D03-1.png` — `35e8a27a5b96d81756fbea8f8433e215e4586c7dad64ba6da5f101ae2989a3a3`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D03-2.png` — `5cf78072e88e35604c5573828e33e097ea8ef6d68de0ed565a81b4cf210ed111`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D03-3.png` — `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-8287ee35-0094-4f71-8322-856a0325de95.png` — `953dd339b91248584a4c8a3d8412b35d013cdbe493084f234d0575c0cfa0f84e`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

Clear frosty deep night, inside the Glasshouse Carriage paused at the dark stone mouth of Fernhallow Tunnel: the player stands by the house stove with one hand near the vent chain and the brick locker open beside it, seen from behind; sunwort trays with tight copper buds on the staging; through the end panes the tunnel's black arch and the frosted rock face in the headlamp glow. Alone in the carriage. Stove glowing.

Use case: precise-object-edit. Keep 1536x1024. Reference image 1: upper full board = player-hesper; lower full board = glasshouse-carriage
Reference image 2: upper full board = carriage-interior; lower full board = sunwort
Reference image 3: entire board = fernhallow-incline
The final attached image is the D03 edit target. Remove only the large brass thaw-lamp hanging on the wall at the upper right: replace it with plain white-painted carriage wall boards matching the surroundings. It is an unlisted optional prop. Move the raised gloved hand slightly right so it rests near the hanging vent-chain, without touching the hot stove pipe or pulling the chain. Keep face completely hidden, body, satchel, closed copper buds, healthy broad leaves, stove, locker, tunnel, lighting and all other details unchanged. Reference boards establish identity only; do not add their other props or subjects.
```

### D04

Accepted first candidate: rear player hand on end-window frame, dark wet tunnel masonry; dim red stove rim-light only. No readable plants, vents, frost or condensation, valid for all arrival states. No lamp.

Selected PNG: `stories/glasshouse-express/art-src/D04.png` — SHA-256 `f0629474334a3fae0dad5e6d03d3ddbd72fa6dd21915dda8ebc6b5578f1745bc` (1536×1024).
Final WebP: `stories/glasshouse-express/images/D04.webp` — SHA-256 `138e99c9bc54da0ac46643ee4c2730e6735b4164ad01052359cb575fd5bcbb48` (1200×800).

#### Call 19 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-40620b64-3e21-4ad5-a246-63c8fa082363.png`
Original SHA-256: `f0629474334a3fae0dad5e6d03d3ddbd72fa6dd21915dda8ebc6b5578f1745bc`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D04-1.png` — `b62d4e15f047770232f4e25e1c6c73e968064abede73e5bda3c0e8534d38bd06`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D04-2.png` — `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

Inside the Glasshouse Carriage deep in Fernhallow Tunnel at night: pitch-black sooty stone arch sliding past the end panes, water glistening on the tunnel wall, the only light the dim red glow of the house stove behind the player. The player stands at the end window, seen from behind, one gloved hand on the frame, a dark silhouette against the wet stone; staging edges in deep shadow with no plants, vents, frost or condensation discernible. Alone in the carriage. No weather (enclosed tunnel).

Use case: illustration-story. Generate one final 1536x1024 landscape scene.
Reference image 1: upper full board = player-hesper; lower full board = carriage-interior
Reference image 2: entire board = fernhallow-incline
Composition: tightly frame the end-window and rear-view player in near darkness, single gloved hand resting naturally on its side frame. Dim deep-red stove glow from behind softly outlines coat, mustard scarf and right-hip satchel. Window view is extremely close wet soot-black tunnel masonry, not an exit. No blue daylight, no lantern, no visible plants, vents, frost or condensation anywhere. Roof and sides lost in shadow. The stove need not be in frame. Reference boards establish identity only; never reproduce their layouts.
```

### D05

Initial had three dark cars and dome behind engine, rejected. Edit yields exactly four vehicles, dark dome ahead, city/frozen lake below, fully dark starry sky and red mast. Rear player small at window, no diagnostically readable plant state.

Selected PNG: `stories/glasshouse-express/art-src/D05.png` — SHA-256 `965e68b5834ec09a67ac8837709a760cf2280dca15ff764acfe2c6a9e7af10b0` (1536×1024).
Final WebP: `stories/glasshouse-express/images/D05.webp` — SHA-256 `439b15fcbe21afb8ba433832943ba2649d293d1d9569fc1b22fbd23ef8cbcc82` (1200×800).

#### Call 20 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-d65d11ba-1e4a-4acb-a296-573a4443c22d.png`
Original SHA-256: `e659e363be6265619ca07a3cdf1abae94a3e98bfa8bf3d523640cecbee6205ed`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D05-1.png` — `253c646bb0fe7e4c4795b98038a133f0db0638d7092f06081fc91b2b93ef9815`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D05-2.png` — `c9a801cae8e657d6ae584aec74734674d927b1aa1f572a3b7432d54d6163a3f1`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D05-3.png` — `e1b2aae8a0f17fd40c5633011955b7f33b8f3c9ec4169182be7956fbdf3f6d76`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Clear frosty deep night with no dawn glow yet, the Glasshouse Express emerging from the summit cut onto the top of Cold Hill: Marigold leading the glowing glass carriage and, coupled behind it, the two dark, empty glass carriages (the Fern House and the Orchard Car) along a shelf of track above the whole city, Tallowmere's lights spread far below in tiers down to the moonlit frozen Mere with the tiny red mast light on its far shore; ahead on the summit, the great dark glass dome of the Conservatory with its white iron ribs and lantern cupola. The player is a small figure seen from behind at the carriage window. Stars; the eastern sky still fully dark. Only the player visible.

Use case: illustration-story. One 1536x1024 final illustration.
Reference image 1: upper full board = player-hesper; lower full board = marigold
Reference image 2: upper full board = glasshouse-carriage; lower full board = mere-and-beacon
Reference image 3: entire board = conservatory-exterior
Wide cinematic elevated landscape: exactly FOUR connected railway vehicles on one coherent gently curved shelf track: green tank engine leading toward the dark summit dome, ONE amber greenhouse carriage, then exactly TWO dark unlit matching greenhouse carriages. All four fully visible. Engine three axles, no tender. Small rear-view player visible from carriage end window, face hidden; plants and vent states too small to read. Dark dome ahead at higher summit to right, city and frozen lake far below to left. Entire star-filled sky deep midnight navy with no sunrise or pale horizon. No extra people, railway vehicles, buildings from board layouts, labels or inset details.
```

#### Call 21 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-a1fa7190-0bba-4e25-bbd1-2958461934ec.png`
Original SHA-256: `965e68b5834ec09a67ac8837709a760cf2280dca15ff764acfe2c6a9e7af10b0`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D05-1.png` — `253c646bb0fe7e4c4795b98038a133f0db0638d7092f06081fc91b2b93ef9815`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D05-2.png` — `c9a801cae8e657d6ae584aec74734674d927b1aa1f572a3b7432d54d6163a3f1`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D05-3.png` — `e1b2aae8a0f17fd40c5633011955b7f33b8f3c9ec4169182be7956fbdf3f6d76`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-d65d11ba-1e4a-4acb-a296-573a4443c22d.png` — `e659e363be6265619ca07a3cdf1abae94a3e98bfa8bf3d523640cecbee6205ed`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

THE CONSERVATORY: a great glass dome on the summit of Cold Hill, white-painted iron ribs, a lantern cupola at the crown, a stone base, and on its eastern face a curved row of twelve tall vertical iron shutters with a heavy chain and a large brass wax cylinder mounted high where their gear meets the ribs. Inside, a round raised stone planting bed (the Great Bed) with a small iron stove door in its base, and narrow hand-opened side louvres low in the walls. Outside, iron gates in a stone wall and a frozen fountain.

Clear frosty deep night with no dawn glow yet, the Glasshouse Express emerging from the summit cut onto the top of Cold Hill: Marigold leading the glowing glass carriage and, coupled behind it, the two dark, empty glass carriages (the Fern House and the Orchard Car) along a shelf of track above the whole city, Tallowmere's lights spread far below in tiers down to the moonlit frozen Mere with the tiny red mast light on its far shore; ahead on the summit, the great dark glass dome of the Conservatory with its white iron ribs and lantern cupola. The player is a small figure seen from behind at the carriage window. Stars; the eastern sky still fully dark. Only the player visible.

Use case: precise-object-edit. Correct attached final target at 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = marigold
Reference image 2: upper full board = glasshouse-carriage; lower full board = mere-and-beacon
Reference image 3: entire board = conservatory-exterior
Last image is edit target, not a reference. Remove ONE of the THREE dark trailing glass carriages: result must be exactly engine, one amber carriage, TWO dark carriages = FOUR total vehicles. Move the dark Conservatory dome and its gate from upper right to a rocky summit shelf at lower-left ahead of the engine, with track curving toward it beyond the left crop. Remove old dome and gate at upper right, replacing with snow/rock/trees and dark cut behind the last carriage. Preserve midnight sky, city/lake below, player rear view, engine identity. Close the readable raised ridge vents flush so no raised panels; keep plants too indistinct to diagnose their health. No new objects or people.
```

### D06

Initial chain incorrectly connected to stove, rejected. Targeted edit routes taut chain vertically to window-frame hook clear of flue. Kneeling rear player feeding bricks, natural hands/boots, roaring fire, shut vents, melting frost and tightly drawn-in dark rosettes with closed buds.

Selected PNG: `stories/glasshouse-express/art-src/D06.png` — SHA-256 `7774d9b1f2dec1a673a16685eaf4f5fbbd54005d20e8e2de94f3abe70d7fa0ab` (1536×1024).
Final WebP: `stories/glasshouse-express/images/D06.webp` — SHA-256 `b4107ee2d83302f5e77abea288e4a2ce0ad6842f482f8ad65f0cddd59399f2b9` (1200×800).

#### Call 22 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-9d010015-521c-4333-817d-080d47c57e97.png`
Original SHA-256: `69b040868566a92aefafc40e0fcb04da29213979be0e1453b6b0ad3cbdbf6940`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D06-1.png` — `35e8a27a5b96d81756fbea8f8433e215e4586c7dad64ba6da5f101ae2989a3a3`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D06-2.png` — `5cf78072e88e35604c5573828e33e097ea8ef6d68de0ed565a81b4cf210ed111`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D06-3.png` — `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

Clear frosty deep night, inside the Glasshouse Carriage just out of the tunnel and climbing the summit cut: the player kneels at the open house stove feeding dark ember-bricks into a roaring fire, seen from behind, the vent chain pulled taut and tied off on its hook; frost ferns melting on the inside of the panes; sunwort trays with tightly drawn-in dark rosettes on the staging. Alone in the carriage. Stars and snowy rock walls outside.

Use case: illustration-story. Final 1536x1024 scene.
Reference image 1: upper full board = player-hesper; lower full board = glasshouse-carriage
Reference image 2: upper full board = carriage-interior; lower full board = sunwort
Reference image 3: entire board = fernhallow-incline
Compose a low rear three-quarter view of the kneeling player carefully placing one dark ember brick at the open stove firebox, grey-gloved hand clearly outside flames. Other hand holds another brick near lap. Natural anatomy, face completely hidden. Distinct tied taut vent chain hooked safely to wall beside stove, never against flue. Roof panes and ridge vents shut flush. Plants clearly chilled, leaves curled tightly inward and dark, small CLOSED copper buds only, no orange flowers. Melting fernlike ice on interior panes, snowy cut rocks and stars beyond. No lantern, thaw-lamp, other character, or added wall equipment. Match carriage structural identity but do not copy board layout.
```

#### Call 23 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-e92d2e85-7ec6-4f11-9ec4-4b8fbbfc70ff.png`
Original SHA-256: `7774d9b1f2dec1a673a16685eaf4f5fbbd54005d20e8e2de94f3abe70d7fa0ab`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D06-1.png` — `35e8a27a5b96d81756fbea8f8433e215e4586c7dad64ba6da5f101ae2989a3a3`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D06-2.png` — `5cf78072e88e35604c5573828e33e097ea8ef6d68de0ed565a81b4cf210ed111`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D06-3.png` — `9ece3cc4a6f1e7b6828e07439f663cd07548aa55c5720d9d91a619aceca19d19`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-9d010015-521c-4333-817d-080d47c57e97.png` — `69b040868566a92aefafc40e0fcb04da29213979be0e1453b6b0ad3cbdbf6940`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

SUNWORT TRAYS: shallow wooden trays of broad dark-green rosette plants, each rosette with a cluster of tight copper-coloured buds at its heart, on slatted wooden staging. Closed buds throughout the journey; open flowers are broad warm orange cups, shown only in the endings that describe them. When planted, the rosettes sit in dark soil in the round stone bed.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

Clear frosty deep night, inside the Glasshouse Carriage just out of the tunnel and climbing the summit cut: the player kneels at the open house stove feeding dark ember-bricks into a roaring fire, seen from behind, the vent chain pulled taut and tied off on its hook; frost ferns melting on the inside of the panes; sunwort trays with tightly drawn-in dark rosettes on the staging. Alone in the carriage. Stars and snowy rock walls outside.

Use case: precise-object-edit. Keep 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = glasshouse-carriage
Reference image 2: upper full board = carriage-interior; lower full board = sunwort
Reference image 3: entire board = fernhallow-incline
Last attached image is edit target. Correct ONLY vent chain: remove diagonal chain that currently connects stove top to wall. Instead show the brass vent-control chain descending taut vertically from the closed roof vent linkage near the top-right window mullion, well to the RIGHT of the stove flue, and secured by a small loop tied off on a hook on that same white vertical window frame beside stove. It must not connect to the stove in any way. Preserve all player anatomy, hands and bricks, stove, clothing, closed copper buds, curled dark chilled rosettes, melting frost, outside stars/rock/snow and composition.
```

### D07

Initial separate incline track rejected. Edit continues rails beneath locomotive smoothly into uphill tunnel. Dov cap pushed back and lantern lowered; rear player at carriage step; bare polished iced rails, steam, no grit, no derailment or injury.

Selected PNG: `stories/glasshouse-express/art-src/D07.png` — SHA-256 `e80d3f034cd476e6bee5e8ae5ca10eaa99434f34613b7e551200d86267f1d52c` (1536×1024).
Final WebP: `stories/glasshouse-express/images/D07.webp` — SHA-256 `4686e027fb4ab08f19b17818e9ad9063609751ece7ee41ea32ed6c3361f4c2c5` (1200×800).

#### Call 25 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-f4e576cb-f557-4da7-a037-4a8b955cbea7.png`
Original SHA-256: `bcc31603e3ae99f2f128efffc57e8a8b5501adb189955b1c1e09daa3d7b905c0`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D07-1.png` — `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D07-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D07-3.png` — `cf99aacfd4a97e57e4cc502faa22d5631dd420c2653962aa57b37381bc6c2fb3`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, after three, at Fernhallow Halt: Marigold stopped back at the foot of the iced incline with steam billowing after a failed run, her driving wheels standing on bare glassy ice with a bright polished stretch of rail gleaming above her, no grit on the rails, the tunnel mouth dark above. Dov stands beside the engine with his cap pushed back, lantern lowered; the player stands at the carriage step, seen from behind. Only these two people. Nothing derailed, nobody hurt. Snowy pines, stars. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.

Use case: illustration-story. One final 1536x1024 image.
Reference image 1: upper full board = player-hesper; lower full board = dov
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = keeper-props; lower full board = fernhallow-incline
Compose rear three-quarter view looking uphill past halted locomotive to the dark tunnel, single pair of coherent parallel rails under train continuing steeply ahead. Carriage at left foreground cropped just behind its lit doorway; player rear view at its step with empty hands, no lamp. Dov stands near engine, pushed-back cap, square X-braced lantern held low in one natural hand, disappointed thoughtful posture. Bare smooth shining iced rail heads, NO scattered sand or grit. Steam billows from locomotive without hiding rail continuity. Correct small three-axle tank engine, no tender. All roof vents closed flush. No other cars in frame, no extra figures. Match identities only, no board layouts or props.
```

#### Call 26 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-725fe1e0-164d-4e54-9594-7838495cf4ca.png`
Original SHA-256: `e80d3f034cd476e6bee5e8ae5ca10eaa99434f34613b7e551200d86267f1d52c`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D07-1.png` — `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D07-2.png` — `c91a16ca699acc38422120317d31c28c204b70ff1cafc0e6389b142e16ddc527`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/D07-3.png` — `cf99aacfd4a97e57e4cc502faa22d5631dd420c2653962aa57b37381bc6c2fb3`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-f4e576cb-f557-4da7-a037-4a8b955cbea7.png` — `bcc31603e3ae99f2f128efffc57e8a8b5501adb189955b1c1e09daa3d7b905c0`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

Clear frosty night, after three, at Fernhallow Halt: Marigold stopped back at the foot of the iced incline with steam billowing after a failed run, her driving wheels standing on bare glassy ice with a bright polished stretch of rail gleaming above her, no grit on the rails, the tunnel mouth dark above. Dov stands beside the engine with his cap pushed back, lantern lowered; the player stands at the carriage step, seen from behind. Only these two people. Nothing derailed, nobody hurt. Snowy pines, stars. Framing cuts off just behind the glowing Glasshouse Carriage; the two empty carriages coupled behind it are out of frame.

Use case: precise-object-edit. Keep 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = dov
Reference image 2: upper full board = marigold; lower full board = glasshouse-carriage
Reference image 3: upper full board = keeper-props; lower full board = fernhallow-incline
Last image edit target. Repair railway geometry ONLY: remove current separate track running up right foreground. The incline must begin directly UNDER the front engine wheels, receding from the locomotive nose at mid-right to tunnel at upper-right in a smooth curve. Snowy ballast fills the foreground right up to existing wheel rail. Locomotive sits directly on ONE continuous pair of rails, which continues ahead from beneath its front wheels curving uphill right into tunnel. No crossing track, no second parallel railway, no rail passing beside the engine. Preserve people, clothing, poses, lantern, locomotive, carriage crop, night sky and all other details. Bare shiny ice on rails, no grit.
```

### E01

Initial fire too high, rejected. Targeted edit reduces to low coal glow. Hesper seated bowed at radio, left bandaged ankle on stool under tartan, grey sock; rear seated player hands clasped, empty fully dark platform. Natural anatomy and hands.

Selected PNG: `stories/glasshouse-express/art-src/E01.png` — SHA-256 `66f42775f11a6adcc55bf9ffcb3838e49cf819238c272ebaa0ca14936f571a4d` (1536×1024).
Final WebP: `stories/glasshouse-express/images/E01.webp` — SHA-256 `e43baaab87adccc0b57d85d88d968da4e3a9d5779f33b9cffd80d1a961eabce5` (1200×800).

#### Call 27 — rejected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-2e8b0679-e162-43e8-bc5a-d14b0a4d858e.png`
Original SHA-256: `d87b6bc5d62f92e966cd28ce58cee3ca1c89ea1155540de62f8289a0dbe82265`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/E01-1.png` — `7e7a0bd9217cd2f3f190ff61350ea77934d61c9a42950d1115470047f413e74f`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

HESPER VANE: an original woman in her seventies, pale freckled skin, white hair in a short plait, round tortoiseshell glasses, in a bottle-green station jumper, a grey wool skirt and thick grey socks, her LEFT ankle strapped in white bandage and propped on a stool under a red tartan blanket. Sharp, dry, affectionate. Never standing in any scene except on crutches in the epilogue if listed.

Clear frosty night, five in the morning and still fully dark, inside the stationmaster's office at Winter Terminus: Hesper Vane sits with her strapped ankle on its stool, head bowed, one hand on a small transistor radio on the desk; the player sits on a hard chair across from her, seen from behind, hands clasped. The platform outside the window is empty and dark, with no train. Only these two people. Coal fire low.

Use case: illustration-story. One final 1536x1024 landscape.
Reference image 1: upper full board = player-hesper; lower full board = winter-terminus
Quiet restrained composition: rear-view player seated on hard wooden chair foreground left, grey gloved hands clasped visibly in lap, face entirely hidden. Hesper across small desk to right, head bowed, glasses and white short plait, one natural hand resting on small transistor radio. Her LEFT bandaged ankle is propped on a low stool, foot grey sock, red tartan blanket draped over knee and stool allowing bandage to read. Her other foot on floor. Low coal glow, dark empty platform through window, fully dark 5am not dawn. No train, extra people, outdoor clothing on Hesper, crutches, plants or copied reference labels.
```

#### Call 28 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-57f1149e-7048-4250-8b66-aa44cfa5bb99.png`
Original SHA-256: `66f42775f11a6adcc55bf9ffcb3838e49cf819238c272ebaa0ca14936f571a4d`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/E01-1.png` — `7e7a0bd9217cd2f3f190ff61350ea77934d61c9a42950d1115470047f413e74f`
- `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-2e8b0679-e162-43e8-bc5a-d14b0a4d858e.png` — `d87b6bc5d62f92e966cd28ce58cee3ca1c89ea1155540de62f8289a0dbe82265`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

HESPER VANE: an original woman in her seventies, pale freckled skin, white hair in a short plait, round tortoiseshell glasses, in a bottle-green station jumper, a grey wool skirt and thick grey socks, her LEFT ankle strapped in white bandage and propped on a stool under a red tartan blanket. Sharp, dry, affectionate. Never standing in any scene except on crutches in the epilogue if listed.

Clear frosty night, five in the morning and still fully dark, inside the stationmaster's office at Winter Terminus: Hesper Vane sits with her strapped ankle on its stool, head bowed, one hand on a small transistor radio on the desk; the player sits on a hard chair across from her, seen from behind, hands clasped. The platform outside the window is empty and dark, with no train. Only these two people. Coal fire low.

Use case: precise-object-edit. 1536x1024.
Reference image 1: upper full board = player-hesper; lower full board = winter-terminus
Last attached image edit target. Change ONLY fireplace: replace tall bright flames with a low bed of dim red glowing coals and at most tiny low flickers. Preserve lamplight elsewhere, Hesper bowed head and hand on radio, LEFT strapped ankle on stool, player rear view hands clasped, clothes, night empty platform and composition. No other changes.
```

### E02

Accepted first candidate: whole four-vehicle train on works internal rails at chained double iron far gate under brick arch, unlit lamp, grey morning. Sallow spreads hands, Dov folded arms, rear player at carriage step, exactly three people. Lanterns set down to permit prescribed gestures; single yard gate absent.

Selected PNG: `stories/glasshouse-express/art-src/E02.png` — SHA-256 `3a56b31c48ffacf84065de3ec587a2bf60e120dcff69651a0e3fb963422bcf9c` (1536×1024).
Final WebP: `stories/glasshouse-express/images/E02.webp` — SHA-256 `e4645cc4fc2710e7adbfc75a4ec0ca1d4451bfc2eff26fcd4c9ae0d9e31b72ba` (1200×800).

#### Call 29 — selected

Original generated path: `/Users/carl/.codex/generated_images/01a13c80-41e8-74d0-876c-b5a0baf24582/exec-513ec694-78b6-46a6-8b80-6baa02478eb6.png`
Original SHA-256: `3a56b31c48ffacf84065de3ec587a2bf60e120dcff69651a0e3fb963422bcf9c`

Attachments in actual order:

- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/E02-1.png` — `52ec26d424a90c0bd8f57717d04e86878fad501f5c72dd61f5fe5c4a8bc96022`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/E02-2.png` — `b240dddc8ecc11ee48ccf884bd28f3a52c02b17929863635914a68e62f2d5012`
- `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-3e913e0a/stories/glasshouse-express/art-src/packed/E02-3.png` — `f4c3510c1dedf3c9c0b976d7c70b9845ec6bfcd4e22e9db9cbda7faabb91f58d`

Complete actual prompt:

```text
The attached sheets lock identity, shape, colour, clothing and scale only. Draw ONLY the scene below, not a lineup. Do not add other subjects or equipment from a reference. Match this scene’s possession, costume variant, time, location and object state. Shared-path illustrations must be valid on every arrival route; never interpret an optional companion as required.
Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, 3:2 landscape. Family-friendly, gently comic. Only the listed characters appear; Hesper appears only at the Terminus, Cassia only inside her studio, Sallow only at the Ember Works, Fenn only at the Conservatory; radio voices and telephone voices are never drawn. No real people's likenesses, no famous trains or film props, no logos, no legible text or captions (signs and plates are blank or unreadable). Every scene states location, weather and time: the night is clear with hard frost and stars, wind only on the Mere viaduct, tunnel interiors enclosed and weatherless, dawn scenes clear and golden. Use 'alone (X is not here)' when specified. Keep every character's clothing word-for-word identical to the cast description; scene prompts never substitute outfits. The player's face is always hidden. Action is machinery, weather and plants, never injury; falling glass lands where nobody stands. Optional companions, props and the empty dark carriages are absent unless explicitly listed for that scene.

THE PLAYER: an unnamed, gender-neutral teenager, always seen from behind or over the shoulder with the face hidden, in a navy wool railway greatcoat with brass buttons, a mustard knitted scarf, grey woollen gloves, dark corduroy trousers and black lace-up boots, with a brown canvas keeper's satchel worn across the body on a strap from the LEFT shoulder to the RIGHT hip, closed by a single brass flap buckle. Short dark hair under no hat. The brass thaw-lamp is carried only when listed.

DOV PELLINGER: an original big man in his fifties, dark brown skin, close-cropped grey beard, a black railway cap with a small round brass badge, a quilted rust-orange oilskin jacket over navy bib overalls, a scarf of alternating orange and grey stripes with an orange fringe, heavy black boots. Carries a square X-braced brass hand lantern when outdoors. Calm, slow-moving, kind.

LUCAN SALLOW: an original man in his forties, pale skin, sleek black hair, a neat black moustache, a camel overcoat with a fur collar, a crimson silk scarf, black leather gloves and polished black shoes, carrying a hurricane lantern. A warm salesman's smile that never reaches the eyes. No villain costume.

MARIGOLD: a small squat dark-green tank locomotive with NO tender and an integral rear coal bunker, three driving axles (six red-rimmed wheels), a tall chimney capped in brass, a round brass headlamp on the smokebox front, a red buffer beam with a pair of round buffers, black smokebox, polished brass dome and a short cab with round brass-trimmed windows. Always the same engine; no famous or named real locomotive.

THE GLASSHOUSE CARRIAGE: a long railway carriage whose upper body is a greenhouse of small panes in a white-painted iron frame on a dark-green wooden underbody, a row of hinged ridge vents along the roof with a brass wax autovent cylinder at the centre, a small black iron stove chimney at one end, end windows and sliding platform doors, glowing warm amber from inside. Two matching dark, unlit, empty glass carriages (the Fern House and Orchard Car) couple behind it only when a scene lists them.

Grey winter morning in the Ember Works yard: the whole Glasshouse Express (Marigold, the glowing glass carriage, and the two dark, empty glass carriages, the Fern House and the Orchard Car, coupled behind) standing on the works' internal rails before the FAR GATE, a pair of tall iron double doors set in the works' outer wall under a brick arch with an unlit lamp above, chained shut; this is a different, taller gate from the single yard gate between brick piers seen at B03, which is out of frame behind the train. Pale daylight on the smoking chimneys and stacked bricks under tarpaulins. Lucan Sallow in his camel overcoat spreads his gloved hands apologetically; Dov stands rigid with folded arms; the player, seen from behind, stands at the carriage step. Only these three people. Snow trodden grey.

Use case: illustration-story. One final 1536x1024 landscape.
Reference image 1: upper full board = player-hesper; lower full board = dov
Reference image 2: upper full board = lower-town-cast; lower full board = marigold
Reference image 3: upper full board = glasshouse-carriage; lower full board = ember-works
Elevated wide three-quarter view across yard, exact FOUR coupled vehicles visible: locomotive at right facing locked far gate, ONE amber greenhouse carriage behind it, exactly TWO matching dark greenhouse carriages trailing left. No tender. Gate tall PAIR of solid iron doors beneath brick arch, heavy chain visibly binding door handles, lamp above unlit; track runs continuously under train directly to gate. Three people only, readable foreground group: Sallow camel fur-collar coat/crimson scarf NO hat spreads black gloved hands apologetically, hurricane lantern set at his feet; Dov folded arms, lowered square lantern set beside his feet; player rear view on carriage step, face hidden. Roof vents closed, no readable plants. Grey overcast winter morning, grey trampled snow, chimneys and tarp-covered bricks. Do not copy extra subjects or reference-board layout. No text.
```
