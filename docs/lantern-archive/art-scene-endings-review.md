# Lantern Archive — ending scene implementation review

## Scope and runtime

Implemented F05–F09 and E01–E10 only. Built-in `image_gen__imagegen` for every generation/correction; no image API or CLI generation. T3 orchestrator catalog verified inherited provider `codex`, model `gpt-6-astra`, current reasoningEffort `medium`, runtime `full-access`; runtime injection independently confirms Astra medium. Reconfirmed after the authorized resume. Existing successful candidates were reused. No quota error occurred during resumed calls.

Worktree: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-6c6e3ac7`; branch `t3/lantern-archive-scene-art-batch`. Base clearance d56d1b5; independent PASS 839b967 is an ancestor. Story and reviewer stamp both SHA256 `e927e74cf19bcdc5a9aa6fcb72800c6b4d7b7b755ee2d4d57e543c5f10b9beb3`, checked before generation and after final assets. No manuscript, bible, stamp, references, exports, theme or shared code changed.

## Reading, preflight and QA

Read CLAUDE.md, README.md, imagegen skill, complete manuscript/bible, art-review.md and all fifteen complete exported briefs. Successful full `npm run -s story-dump -- lantern-archive` (all arrival states) read after `npm ci` resolved missing tsx. Existing `validateReferences`, `referencesForPage`, and `imagePrompt` used directly in scoped preflight; all 15 reference hashes pass and each exported page prompt contains the exact engine-generated prompt. No global exporter run.

All ten applicable reference boards viewed at original 1536×1024 resolution before use. Every initial call attached every listed board as actual image content via referenced_image_paths. Every edit repeated the full exported prompt and every required reference. The full fenced prompt in image-prompts.md, with SHA256 recorded below, was passed verbatim followed by the recorded composition/correction instruction.

Inspected every selected original at full size for arrival validity, faces, anatomy, hands, clothing, object count/state/scale, and machine geometry. Inspected all fifteen final 1200×800 WebPs individually and the batch contact sheet. Contact sheet confirms consistent style and character identity, distinct F05/F08 compositions, and seasonal variation. All player faces hidden. Win has one silver plait over anatomical left shoulder; half-moon glasses, mustard cardigan. No lamplighter pole appears. No optional anchors appear on shared scenes.

## Checks and remaining integration

Owner subsequently inspected all 15 selected originals at full resolution and accepted them, including corrected E05, E07–E10 seasonal geography, downhill E09 with five figures, and left-shoulder plait continuity. No additional corrections requested. Final WebP QA was completed after conversion; whole-pack/browser QA remains with owner.

- 15 unique selected PNGs, each 1536×1024: PASS.
- Exactly assigned 15 unique game WebPs, each 1200×800: PASS. Converted individually with `cwebp -q 75 -resize 1200 800`.
- Scoped references, full prompts/attachment sets, matching manuscript/stamp: PASS.
- `npx tsx --test scripts/lantern-archive-regressions.test.ts`: 16/16 PASS.
- `git diff --check`: PASS.
- `npm run test:art`: 7 pass, 5 fail. Failures are missing scene coverage for last-skyway (48), midnight-signal (46), glasshouse-express (44), and the other 30 Lantern pages; global reference validation stops at missing `stories/glasshouse-express/references/dov.webp`. No tests weakened.
- Parent owns whole-pack integration and browser QA; neither claimed complete here. This is implementation QA, not a new independent review.

## Retained originals and corrections

Selected originals: `stories/lantern-archive/art-src/<PAGE>.png` in this worktree (all 15, ignored). Generated tool outputs remain under `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/`. Rejections retained in `art-src/corrections/`: F05-v1, E03-v1, E05-v1, E07-v1, E07-v2 PNGs. Contact sheet: `art-src/corrections/endings-contact-sheet.png`.

## Reference provenance

Hashes below are the actual approved attached WebPs. Full boards, including all panels, were supplied.

- `stories/lantern-archive/references/depot-field.webp`: `13c3297d65081379b68c3c06edbfc9d6cfb77f57851ff7ee678560d880d87c40`

- `stories/lantern-archive/references/highfield-residents.webp`: `c9fecb2e68f38a4fa36e1e21ad8e58b5817960d72109146f8bb85a30c192be38`

- `stories/lantern-archive/references/lantern-projector.webp`: `33ef2ff275dc976e07d1862b089f585c11b5fae0858c1a65bf325b06916153c0`

- `stories/lantern-archive/references/light-moths.webp`: `611b2e3e542b012af829de8ebbc88f9ebe4f608b023df1b61e6e03ef15d08110`

- `stories/lantern-archive/references/palladian-house.webp`: `9f24415eb22d80e6fc9ca8114e64e1e9353a00646db4eeb175b702d4665ffd47`

- `stories/lantern-archive/references/player-win.webp`: `e32b6b105761533368f8b5039a0e8709c20e267fea90378a473b0dd24860a2b3`

- `stories/lantern-archive/references/projection-box.webp`: `15126b3eb2180c1807c4f6423ff3883ad6ce21f1e2e4a1a180909c2872527ebc`

- `stories/lantern-archive/references/wicks-cans.webp`: `9be79d4a0d7ade4a04089bcf9d46d9527278a3c7caf71da3c4468841fbe7501e`

- `stories/lantern-archive/references/wicks-streets.webp`: `bc027349540f9e19b307dd169454bcccac857b97630d190845045d7a0c552488`

- `stories/lantern-archive/references/win-home.webp`: `e2222c29f64425762ac30f1677f82a6a73e3a8f32c16e9be486e7f7717cd68ed`

## Lossless reference packing

F05 and E05 edits needed an edit target plus five boards. Each five-board pack was built with Pillow as a 1536×5120 RGB PNG by vertically pasting complete decoded 1536×1024 boards, with no crop, resize or omission. Source hashes are listed above. No scene pixels were edited with Pillow.

- F05 pack: `8558868cc7050dc029a0cddae9848f1125459b2d192f9a7c9faca19262de8ea0`. Top-to-bottom: player-win, lantern-projector, projection-box, palladian-house, wicks-streets.

- E05 pack: `05d95da2b79650bb34ca19c554868c8af19ec21ed4e9c10b8daf2545f5d4cc4a`. Top-to-bottom: player-win, lantern-projector, light-moths, wicks-cans, projection-box.

## Per-page provenance and decisions

### F05

Corrected sideways projector and exposed gate; rear player left, machine right. Slot hidden; distant blurred monochrome lane.

- Full exported prompt SHA256 (trimmed fenced content): `c589e4354ee461dafbdb5259f6e0254e55f49fd7a7a536e680b033c0d79e00b0`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `projection-box`, `palladian-house`, `wicks-streets`.
- Selected original SHA256: `dcb9aea2825749ef6e3daa4cf45a05943382ea0d52b3d9217600d675e23342c5`.
- Game WebP SHA256: `5b98868075e870b561f70e52b0c3c82fac9c8923003160db200f71bd54c86140`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-32944821-872b-470e-85cc-76b560667477.png`.

Initial instruction appended to full prompt:

Generate one unique narrative scene, exactly 1536x1024 PNG. Composition: rear player at left foreground, antique machine at right foreground aimed away from camera toward its small wall port and distant screen. Hide slide slot entirely behind machine/foreground; do not assert any anchor. Screen occupies less than one tenth of frame width, silvery blurred lane impression only. No visible player face/profile. No extra people in box. Use lantern-projector board for machine details; room board for layout only.

Correction 1 instruction appended to full prompt:

EDIT TARGET image 1: correct projector orientation and hide gate. Image 2 contains ALL FIVE complete reference boards vertically, each full 1536x1024, in order player-win, lantern-projector, projection-box, palladian-house, wicks-streets. Use all. Rotate entire antique projector so we see its BACK, lens pointing AWAY from camera into the port toward the distant screen. No lens facing right or viewer; no sideways beam. Lamphouse back occludes the entire slide slot so no anchor state visible. Player still left rear view, face fully hidden, anatomical hands. Remove surplus loose cans from crop. Small distant screen much softer, indistinct lane/chapel only. Preserve narrative style and setting. Exactly 1536x1024.

Edit attachments: target first; then all original listed references individually (E03/E07), or complete five-board pack (F05/E05).

### F06

Blank warm screen, golden moths over anonymous audience; no optional Win or visible anchor.

- Full exported prompt SHA256 (trimmed fenced content): `d807a1fe2e273dff8dc46e470b36c9d69be7495d3f5ddce08670abfd62959013`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `light-moths`, `projection-box`, `palladian-house`.
- Selected original SHA256: `5c64ba3e6c5af659f80082dede49aacdd9ca1d60221b48fedf2d3879f2a7e41c`.
- Game WebP SHA256: `179fddc11746df256fdfde829449fe3481fcdc19ed7755e76345b8bb848210f7`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-d2430781-d788-4352-9f4d-7d48115dd43f.png`.

Initial instruction appended to full prompt:

One narrative scene exactly 1536x1024. View from behind player at right, over shoulder toward small projection port, rear of antique machine at left. Projector lens points away through port, NOT across room. Its lamphouse rear occludes slide slot and controls. Beyond port blank warm-white screen and hundreds of tiny luminous moths drifting upward toward dome; anonymous distant audience. No Win or other box people; no loose objects or glass. Player face wholly invisible. Machine details from lantern-projector, placement from room board.

### F07

Central rear player; blurred yard/chimney; optional anchor hidden.

- Full exported prompt SHA256 (trimmed fenced content): `de22af860bb4793db62ec7d76586ee7fb93589f54cbc92d06f3b5af41bfab11b`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `projection-box`, `palladian-house`, `wicks-streets`.
- Selected original SHA256: `32b21b488ad443121b7bfe32530b4c01c9d1ee1f0dc2da53288e5dfee3484bfc`.
- Game WebP SHA256: `1d68a597848ceea204ff1ed0e243136f546044709bca858644b99cd179bb236f`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-95b8e990-c40d-4160-9a31-dceef2f92d49.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 single narrative scene. Composition from slightly higher behind player's head and shoulders at lower centre, looking down toward port. Antique machine partially cropped at far left, back of lamphouse conceals entire slide gate and lens points away through port. No glass/slide visible. Very SMALL distant cinema screen less than 10 percent image width: blurry silver yard/chimney impression, indistinct details. No named audience figures. Player face wholly hidden. Machine shape from lantern-projector, room arrangement only from projection-box. Do not reproduce a reference board.

### F08

Close right-shoulder composition, machine left; genuinely distinct from F05; blurred monochrome lane.

- Full exported prompt SHA256 (trimmed fenced content): `a7e2e2a85e4434d5bcb6ca1c4511bcc3d175e14a8febc7dc4c7809888c01d31e`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `projection-box`, `palladian-house`, `wicks-streets`.
- Selected original SHA256: `16acbb84926a576a9b00f01e67e54d06908c7bc5a8bfe7a9af524928c8a39061`.
- Game WebP SHA256: `5091e9b8b3ebeecb7480b9e2c0d7039dabc9e59405f94d3b4a901a7d844f7f5b`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-6c75135c-87f4-4964-a6c4-6510a9e1768e.png`.

Initial instruction appended to full prompt:

Single unique narrative painting, exactly 1536x1024. DIFFERENT COMPOSITION: very close over right shoulder, player cropped large along RIGHT EDGE, rear head with no profile. Low viewpoint at shoulder height, antique machine back/chimney cropped along LEFT EDGE, port at upper centre. Machine aimed away from viewer toward port, slot entirely concealed by lamphouse. Small distant screen only about 100 pixels wide in final 1536 image, faint blurry silvery lane rising to chapel, impossible to discern overlay colour/details. Dark anonymous rows of heads. No loose film cans, glass, slides, Win, residents or moths. Match reference machine details without copying side-on orientation.

### F09

Weak orange peephole, low gauge, four closed cans, Win hand over player hand.

- Full exported prompt SHA256 (trimmed fenced content): `6b642747c0d659f5b54633b05f2716b7b4eab750154786360fb72bdd9ebf9f04`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `wicks-cans`, `projection-box`.
- Selected original SHA256: `c999246d08d1adbd2d9aea22934c53de9daaf2466b7f14ea79ab34a7bf33c01c`.
- Game WebP SHA256: `2bef4b6cac7ba1d06d07c935feaca7094821e269c6f77f0c004a0300ff46c8ab`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-c78bbb60-acc2-43cc-b675-c896cbfea98d.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 narrative painting. Rear player centre-left face completely hidden. Win at their side, her left-shoulder single plait, half-moon glasses, mustard cardigan. Her hand gently covers player's hand on crank. FOUR and only four small CLOSED flat film tins grouped clearly on bench. No loose glass or slide or other optional props. Lantern peephole weak dull orange, no strong projected beam; gauge needle near low end. Position lens toward nearby wall port, not across room; use machine board as detail authority, room board as layout. No extra people.

### E01

Cold machine, bolted hatch, Win still cardigan, iron key on bench.

- Full exported prompt SHA256 (trimmed fenced content): `683f868d5521c16c566d24e13213fcd4e39643c6f9bba8bb0379fdc9f494499c`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `projection-box`.
- Selected original SHA256: `4d3b5e8f450bb9d93e00fd680497676b688b0c1e2533253e1d751940f1a8d3f5`.
- Game WebP SHA256: `b387e1ac7c10e1ef8b1051f692c956ed29435ce3063c834bc1e9c4d07b636103`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-e8a3cfb8-581b-4eaa-a3b9-f0e377165b2a.png`.

Initial instruction appended to full prompt:

Single scene exactly 1536x1024. Wide quiet composition just after midnight. Player rear view at left edge, face completely hidden. Win facing partly toward camera at rewind bench, LEFT-shoulder single plait (viewer right), half-moon glasses. Her hand lowers small old iron key and brown string loop onto bench. Still mustard cardigan, white blouse, brown tweed skirt, NO coat. Dark cold black/brass Lantern in far corner faces its wall port. Beside it iron floor hatch fully shut with bolt engaged. No glow, no moths, no Wicks cans or recovered objects.

### E02

Transparent blank sprocketed film; modern projector and still-lit Lantern; Win omitted.

- Full exported prompt SHA256 (trimmed fenced content): `d3f79bfed9d9081526dc5f630fe90bfb5a0a035f8fae5ad4d9875573b2ea9544`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `projection-box`.
- Selected original SHA256: `88dc12c51f385ce54fbeab854d8ffcdc564dd0364694980b85510766c6532a7d`.
- Game WebP SHA256: `7201a20448b0a84935c3a098579dd4f800a34cb15f69297bfd4386062bd64432`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-7f0186ad-252a-48d6-9b18-240e0917b3ad.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 one scene. Rear player close foreground holding a narrow realistic 35mm transparent acetate film strip against small work lamp, sprocket holes along both sides, absolutely NO pictures or dark frames, clear as window. Anatomical hands, face completely hidden. Big GREY modern projector beside player aligned with wall port. Far corner behind still-lit black/brass Lantern with ruby glow, distinct from modern projector. Faint fine gold dust, not moths. No Win, no glass pane or painted slide.

### E03

Puzzled palm tracing, key in lap, dark Lantern. Corrected outdoor view to late-night empty auditorium.

- Full exported prompt SHA256 (trimmed fenced content): `1518bd39ea167b0b9a3ab22c1f477f158f2643f7fcaf9c8d295394ff196e50d6`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `projection-box`.
- Selected original SHA256: `d936757afe71b8ac903d5f082129fb9a44b3e4253ce08c5cf807167b64b5293e`.
- Game WebP SHA256: `708a623c00c238863e1392cdf62a1e45dc1621b2d0979cf616ba629f0571d2de`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-888c7f4e-c8aa-41f3-9340-300c11f67552.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 one narrative illustration. Intimate bench scene: Win seated facing camera three-quarter, frowning puzzled, left palm open as right index traces a line. One small iron key on brown string loop lies in her skirt lap. Single plait over anatomical LEFT shoulder, half-moon glasses. Player seated beside her at near edge, entirely rear view head/shoulders no profile. Dark cold Lantern in background aligned with port, no beam or glow. No moths, loose anchors or other people. Avoid cheerful expression.

Correction 1 instruction appended to full prompt:

EDIT image 1 only: keep characters, hands, key, clothing, faces and composition unchanged. Correct window behind projector: it is an interior projection port facing the DARK EMPTY AUDITORIUM, not outdoors. Replace town rooftops/chapel with dark soft empty red seats and a distant black unlit cinema screen, no buildings or sky. Lantern remains cold and dark. Images 2-4 are full identity/location references. Exactly 1536x1024.

Edit attachments: target first; then all original listed references individually (E03/E07), or complete five-board pack (F05/E05).

### E04

Grey Sunday kitchen, unreadable notebook, puzzled Win, tea and key.

- Full exported prompt SHA256 (trimmed fenced content): `e68a9df0f9a7e1fd7c59dc5533e40fba8a1dd0692a8defc872ef3c6b8c249871`.
- Initial attachments, in order: `player-win`, `win-home`.
- Selected original SHA256: `ef9125afd3323961e233d6899e6f066341e13eedac8fc5ab2f456afc9ed3de5f`.
- Game WebP SHA256: `9778dc74a4337f37cf75ff18c5fddb2e0f674645a68d679c22f11b6d8433bf28`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-854d1375-13c8-4e0b-9a2e-087288461949.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 single narrative scene. Alone Win in reference kitchen under grey wet Sunday morning light. Puzzled brow, looking down at open handwritten notebook, unreadable ink, not map. Tea cup and small iron key with brown string loop beside notebook. Single long silver plait over anatomical LEFT shoulder (viewer right), half-moon glasses black cord, mustard cardigan white blouse brown tweed skirt. Preserve aged invented face. Only Win, no player, no magical glow.

### E05

Cold Lantern, four closed cans, tiny fading moths. Owner correction: replaced premature empty auditorium with indistinct occupied monochrome feature screening.

- Full exported prompt SHA256 (trimmed fenced content): `9b97c7752ba55b9e7bfa238ec976654a3a2111a262e402b6944a2356eb059791`.
- Initial attachments, in order: `player-win`, `lantern-projector`, `light-moths`, `wicks-cans`, `projection-box`.
- Selected original SHA256: `0bfc065e41b422b3aa8340664f2098f434ed4793d604576b81dfb0de6bd0ae66`.
- Game WebP SHA256: `b0f68ad539bd8a254628fc80cc9f61ae137674aff8f9a9a490527b9ff1067d4e`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-d5a4ce78-b9a8-40da-ace5-05eb325a8961.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 one narrative illustration. Four CLOSED flat tin film cans in foreground clearly countable, a few tiny faint pale-gold moths folded on lids fading out. Behind, rear-view Win and rear-view player stand quietly side by side facing the cold dark antique Lantern. Win single plait over LEFT shoulder as in rear board. Player face wholly hidden. Black brass projector dark ruby glass, NO light or beam, aimed toward a dark INTERIOR auditorium port (never outdoor window). Only these two people. No optional anchors, extra cans or successful magic.

Correction 1 instruction appended to full prompt:

EDIT first image, single targeted correction. Keep dark cold Lantern, exactly FOUR closed foreground cans and tiny fading moths, rear player and Win entirely unchanged. Correct auditorium port: The Brass Moon feature is STILL RUNNING on a modern projector outside crop. Through port show only very indistinct dark rows of anonymous seated audience heads and a blurred SILVERY BLACK AND WHITE feature image on the small distant screen, not an empty house, not blank screen. No distinct faces or named characters on screen; indistinct grey shapes only, impossible to identify film. Second attached image packs ALL FIVE full-resolution boards vertically: player-win, lantern-projector, light-moths, wicks-cans, projection-box; use all identity refs. Exactly 1536x1024.

Edit attachments: target first; then all original listed references individually (E03/E07), or complete five-board pack (F05/E05).

### E06

Late October, actual blue home door, small iron key on string being hung.

- Full exported prompt SHA256 (trimmed fenced content): `d007b0e215b9cd3b3379d66a32004ccafe3bb2d449f09cfdb6ee049fcaa107e6`.
- Initial attachments, in order: `player-win`, `win-home`.
- Selected original SHA256: `6b5070ea5969250be62a4dcd34c40aef983a573c78ca4124795ceac7d45f1795`.
- Game WebP SHA256: `7e6df7cc40512bf722d616e2a7ed51adea400ecf838143c8aa97ee5b16a62f79`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-67badc25-5e83-4817-bb55-9036099f9ac2.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024. Single narrative scene, Win alone at her ordinary BLUE front door from win-home reference, not remembered green door. Late October bright cold morning with sparse autumn leaves, no snow. Quiet contented smile, one hand hangs the brown string loop of a small old iron key onto small nail beside door. Correct half-moon glasses, long silver single braid over her LEFT shoulder, mustard cardigan white blouse brown tweed skirt brown brogues. Natural hand and key scale. No duplicate key or extra people.

### E07

Winter four elders, uphill gesture, no pole/player. Corrected gesture, then restored single LEFT-shoulder plait.

- Full exported prompt SHA256 (trimmed fenced content): `7daed724efcf1efbffe95ece37b1c949ca7159f06c36a4581df9e35735a1efce`.
- Initial attachments, in order: `player-win`, `highfield-residents`, `depot-field`.
- Selected original SHA256: `5bb8fbdd34c81f0f57faa353297158253401319e018cb9caa24acfd50c14314c`.
- Game WebP SHA256: `9e89526dc568e84008878d717f9dd22a0f2d662be2dff45667c3922c4904b8c2`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-78eaeb3e-9a69-44ea-a3da-90e4f3d69826.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 one narrative scene. Four elderly people ONLY: Win, Abel, Ivy, May. Winter Sunday dry pale afternoon, bare trees, dormant grass, no snow needed. Win at left points UP the visible slope toward old kerbstones, Abel beside her nods, twins together in lilac and sage on right. White-banded square brick chimney behind group down slope. Half-moon glasses and single LEFT-shoulder silver plait; Abel red-and-cream checked shirt and brown cable cardigan. No player, no pole, no invented restored streets or houses. Field reference establishes geography; no close-up lamp or extra signs.

Correction 1 instruction appended to full prompt:

EDIT first image. Keep landscape geography unchanged: chimney downhill LEFT background, kerbstones climb to RIGHT upper slope. Correct Win's gesture: lower her right arm; turn her upper body slightly to her left and extend her LEFT arm to point diagonally toward UPPER RIGHT of picture along uphill kerbstones. Abel and twins look toward UPPER RIGHT following her hand, Abel nods. Preserve exactly four characters, their distinct faces/clothing, Win LEFT-shoulder plait, half-moon glasses, feet/anatomy, winter season. No pole or extra people. Other three attached boards are full references. Exactly 1536x1024.

Correction 2 instruction appended to full prompt:

Precise edit of first image: move ONLY Win's single silver plait from image-left side of her chest to image-RIGHT side of her chest, over her anatomical LEFT shoulder beneath her raised pointing arm. Remove old braid entirely, ONE braid only. Her raised arm points uphill upper-right and must stay unchanged. Keep all four people, gestures, faces, clothing, landscape, winter lighting and composition unchanged. Other 3 images full references. Exactly 1536x1024.

Edit attachments: target first; then all original listed references individually (E03/E07), or complete five-board pack (F05/E05).

### E08

Late-October Win alone pointing up visible cobbles; no optional companions.

- Full exported prompt SHA256 (trimmed fenced content): `0d2acf6480cb637713ab2072f50888e873ef7ba59dbb46e1104d6d4ab84b8c2e`.
- Initial attachments, in order: `player-win`, `depot-field`.
- Selected original SHA256: `efd32958d58cb85b37d88337cd59da3637d64e3678c5ce9e46ffd1f89629ee08`.
- Game WebP SHA256: `191bc0258b0659101e1780e5cca32a413786794607be91549769bcf4011fbe8e`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-c9b3a666-3afe-441f-a957-e1ab1006384e.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 one narrative scene. Win alone thoughtful on old cobbles. Compose Win at right of frame and terrain rising toward UPPER LEFT; she points uphill to upper-left with her right arm. White-banded square chimney downhill in background to right. Dry bright late October Monday, golden sparse foliage, no snow. Single long silver plait on anatomical LEFT shoulder (viewer right chest), half-moon glasses black cord, mustard cardigan white blouse brown tweed skirt brown shoes. No other characters, no pole, no restored buildings on field, no key needed.

### E09

Spring rear player follows four elders downhill toward chimney and new wooden sign; no pole.

- Full exported prompt SHA256 (trimmed fenced content): `e3f32bea580d5f32d8c854a507a40922c032db3e78c6d17ff52840fcada05d96`.
- Initial attachments, in order: `player-win`, `highfield-residents`, `depot-field`.
- Selected original SHA256: `d4daba64154c01e3f3eff325400827d6819e56a25459943540e3155024a67742`.
- Game WebP SHA256: `4fe55ff1810ff3446784ab27dc23a227a683818953bf6243eda739b10f6cc3d7`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-d6b19b8e-c3fd-44ff-ba53-5afddbaffbf0.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 single narrative scene. Camera at TOP of hill behind five people looking DOWN clearly descending old cobbles toward white-banded square chimney and depot fence below. Foreground rear player one step behind FOUR elderly people: Win mustard, Abel brown/red-cream checks, Ivy lilac, May sage. ALL FIVE walk AWAY DOWNHILL, player has no visible face or profile. Win carries one small iron key on brown string in hand; single braid over anatomical LEFT shoulder, mostly hidden from rear. Fresh spring green grass, young leaves, dry bright morning. New plain wooden sign on fence below near chimney, no readable words. No pole, no extra people, no rebuilt streets/houses. Match reference identities and location, narrative walking action not lineup.

### E10

Winter sitting room, careful map, key on string on sheet; Win alone.

- Full exported prompt SHA256 (trimmed fenced content): `91cd7638c80e2294e5bdf2092aadff4e93b470e5482030398b48f3335a1f5c70`.
- Initial attachments, in order: `player-win`, `win-home`.
- Selected original SHA256: `2e626bae5a3e1a7fdff34362daad62fe4bd0334d065b7119408b1af74135fcdc`.
- Game WebP SHA256: `6fd189d0fb7ad68c3b613c1360edd83cb3d99f1813a0431b557a817f14ae3c28`.
- Selected built-in output: `/Users/carl/.codex/generated_images/01a13c52-7519-7f03-9517-ffa4b8c1883c/exec-4fc3dc57-5b60-4783-afec-834ab40c3702.png`.

Initial instruction appended to full prompt:

Exactly 1536x1024 single narrative illustration. Win alone in reference SITTING ROOM (not kitchen), table positioned directly UNDER window. Cold dry winter afternoon bare trees outside. She draws careful hand map of FOUR connected streets in pencil on large sheet, map marks unreadable, no typeset words. One small old iron key on brown STRING LOOP rests ON CORNER OF SHEET at illustrated moment, not key ring. Left-shoulder long silver plait (viewer right chest), half-moon reading glasses on black cord, mustard cardigan white blouse brown tweed skirt. Gentle focused expression, anatomically correct drawing hand. No player or extra people.
