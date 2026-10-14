# Glasshouse Express character references — Astra

## Runtime verification

Requested: Codex / gpt-6-astra / reasoningEffort medium. Independently verified 2026-10-14: the injected T3 runtime explicitly states Codex harness, gpt-6-astra, medium reasoning effort. Live orchestrator_capabilities returned inherited provider codex and model gpt-6-astra; its live model catalog lists reasoningEffort currentValue medium. t3_thread_read reports providerInstanceId codex and model gpt-6-astra for both this thread and active run (ordinal 1). The durable thread read does not expose a reasoning field; medium is corroborated by runtime injection and live catalog, not merely the task request.

Thread: thread:delegated-task:command%3Amcp%3Aa52a3b34-4132-45a3-a172-985b5adbb76c%3Adelegate-task%3Aglasshouse-ref-characters-v1
Worktree: /Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-d9a4cb43

## Scope and inputs

References only; no scenes, author edits, or reviewedSha256 writes. Read CLAUDE.md, README.md, full story.ts, bible, manifest, reference-prompts.md, imagegen SKILL.md, and all 628 lines of npm run -s story-dump -- glasshouse-express including every arrival-state summary. npm ci supplied missing tsx; dump then succeeded. Anchor player-hesper.webp at 704dd239b82a27878c6af4dc6706954f6ddb23aa verified SHA-256 50511aac7b66cfef5f5cb038927c3a5d8a22b815c974c87584fdb9b1db5a6a30. Owner metadata b6e279e cherry-picked as 3367d49, author a61acbc merged and diff read, Fenn brief 8110a56 cherry-picked as e630e44. Owner alone reviews and records hashes.

## Candidate milestone 1

Built-in image_gen only. Each call used the full manifest brief below and attached its sole listed source, player-hesper.webp, explicitly as style/material reference only. No player or Hesper regenerated. Original outputs preserved in ignored art-src/references/. Conversion: cwebp -q 88 without resize. Both PNG and WebP boards inspected at full 1536x1024 resolution.

Dov: consistent face, black badge cap, grey beard, rust quilted oilskin, navy overalls, orange/grey scarf, black boots, coherent hands and limbs; square lantern held and separate matching lit/unlit views. No correction required on worker inspection.
Keeper props: matching brass lamp geometry in lit/unlit views, wooden handle and wire nozzle guard, blue flame, five-digit gloved grip; cassette bay, piano keys, round speaker and handle coherent; blank cassette labels; peat bricks/hod, separate grit and coal buckets, brass token ring/tag, black handset. No correction required on worker inspection. These are candidate designs pending independent owner review, not approved story possession/state.

### dov

- WebP: stories/glasshouse-express/references/dov.webp
- Dimensions: 1536x1024
- WebP SHA-256: dc705854ecd63bd9a5a1d3f4a84c8fab5a4cd891d30fa63bbc08ff773fe57f39
- Original: stories/glasshouse-express/art-src/references/dov-astra-v1.png
- Original SHA-256: 4f7433bc1ab6a3ed577675b0485a9172a2eaac42892ce861e6f1a8013f08b86f

Full manifest prompt:

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, family-friendly and gently comic. Clear separated design views, not a story event. No real people's likenesses, no copied franchise designs, no famous trains, no weapons, no logos, no legible text or captions (maker's plates, signs and cassette labels are blank or unreadable). Only specified subjects. The story's night is clear with hard frost and stars; interiors are lamplit; dawn is clear and golden. This board locks design only, never possession, accompaniment, plant state or story outcome. DOV PELLINGER only: an original big man in his fifties, dark brown skin, close-cropped grey beard, calm kind face. Clothing verbatim: a black railway cap with a small brass badge, a quilted rust-orange oilskin jacket over navy overalls, an orange-and-grey striped scarf, heavy black boots. One full-body front view holding a square glass-sided hand lantern, one full-body rear view, one large head three-quarter detail. The lantern shown separately once, unlit and lit. Two ordinary arms and legs, five fingers per hand. No engine on this board. Attached Glasshouse Express sources are rendering/material guides unless a specific shared design is requested above; preserve that design only. Do not copy unrelated subjects or the source board layout.

### keeper-props

- WebP: stories/glasshouse-express/references/keeper-props.webp
- Dimensions: 1536x1024
- WebP SHA-256: 7dd5472750a2c6205763d3cee1d42f0997819511e0dfbcb40cc30df96a7deb34
- Original: stories/glasshouse-express/art-src/references/keeper-props-astra-v1.png
- Original SHA-256: 04896e8a11cc241fa03c815886fb635e0e0a3b60fdf7a9d8329d17da20681a65

Full manifest prompt:

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, family-friendly and gently comic. Clear separated design views, not a story event. No real people's likenesses, no copied franchise designs, no famous trains, no weapons, no logos, no legible text or captions (maker's plates, signs and cassette labels are blank or unreadable). Only specified subjects. The story's night is clear with hard frost and stars; interiors are lamplit; dawn is clear and golden. This board locks design only, never possession, accompaniment, plant state or story outcome. Prop board, no people. (1) THE THAW-LAMP: a brass hand lamp with a bulbous spirit reservoir, a wire guard, a turned wooden handle and a flared brass nozzle throwing a small soft blue flame; shown lit and unlit, about a palm and a half tall, with a gloved hand for scale. (2) HESPER'S RECORDER: a chunky cream-and-brown portable cassette recorder with a carrying handle, a row of piano-key buttons and a round speaker grille, beside a round biscuit tin holding cassettes with blank labels. (3) EMBER-BRICKS: dark rectangular pressed bricks the size of a house brick with a dull peat-like surface, shown loose and in a wooden hod. (4) a galvanised tin grit bucket; (5) a galvanised coal bucket with glowing coals; (6) the hill token: a heavy brass ring with a small tag; (7) a heavy black telephone handset on a thick cord. All items in consistent scale. Attached Glasshouse Express sources are rendering/material guides unless a specific shared design is requested above; preserve that design only. Do not copy unrelated subjects or the source board layout.

Dov call additions: Input image 1 is the approved player-Hesper rendering/style reference only. Do not draw either of those people, their clothing or props. Output exactly 1536x1024 pixels. The same square lantern design appears held and in two separated object-state views (one unlit, one lit). Keep the same scarf stripe order and width in both character views and head detail.

Keeper-props call additions: Input image 1 is the approved player-Hesper rendering/material reference ONLY: reproduce no people or unrelated clothing/props; only the requested isolated grey wool gloved scale hand. Output exactly 1536x1024. Separate objects clearly on parchment, all fully in frame. Lamp lit/unlit views must have identical geometry and scale. The small blue flame comes from the flared nozzle, with a clear functional connection from reservoir to nozzle. Recorder is plausible 1980s machinery with coherent cassette bay, keys and speaker; all labels blank. Grit bucket and coal bucket are distinct. No narrative action.

Built-in source files: /Users/carl/.codex/generated_images/01a13c47-e345-72a1-ae2e-69d0cf4230d6/exec-83ce57e1-7d8b-4f76-8ce6-96af8f9d4cbc.png (Dov), exec-1f5b4d0d-0fa1-460d-8fd9-5d7c4a664319.png (keeper-props).

## Outstanding

Dov and keeper-props independently approved by owner commit 4367106 (imported as e76fc37); lower-town-cast and Fenn generated after that approval. Fenn stays buttoned, with additional uncapped head for E08/E10. Sallow has no hat. Sunwort awaits reviewed carriage-interior source. Independent manuscript review remains pending; no final scenes or affected unconfirmed designs frozen. Full art gate intentionally remains pending reference approvals and absent scenes; not run as a completion claim.

## Candidate milestone 2

Both calls attached player-hesper.webp and approved dov.webp, with the complete corresponding manifest brief. Lower-town v1 also added unrequested rear views and copied Hesper glasses/face and a square lantern. Rejected original preserved as art-src/references/lower-town-cast-astra-v1-rejected.png. Built-in correction attached both mandatory anchors plus the rejected candidate, requested only three front figures, a distinct broad-cheeked olive Nan without glasses, apron under coat, and a round globe hurricane lantern for Sallow. Cassia/Sallow faces and costumes preserved. Sallow has no hat. Final v2 inspected at full resolution in PNG and WebP: faces match portraits, costumes and ordinary limb geometry correct; hands pocketed except coherent lantern grip.

Fenn v1 has matching capped/uncapped faces, sparse white hair and moustache; front, side and kneeling figures have buttoned brown wax coat over striped pyjamas and untied brown boots. Round-globe hurricane lantern; held and resting hands inspected, kneeling legs coherent. No coat-off variant. Full-resolution PNG/WebP inspection passed. Both are 1536x1024, cwebp -q 88, no resize, independent owner review pending.

Validation: npm run check passed every story after imported a61acbc, including Glasshouse Express 44 pages, 10/10 endings, 29,401 page/state combinations and 24,575 playthroughs. git diff --check passed.

### lower-town-cast

WebP: stories/glasshouse-express/references/lower-town-cast.webp

SHA-256: a44dc6654985bc79cfd2b772d3c8e01e17dc6cc2cb43eafbb0fbf2873b9e921d

Original: stories/glasshouse-express/art-src/references/lower-town-cast-astra-v2.png

Original SHA-256: aca3c73f606c6ac6b5f7166846ba2a3fa612ded9de7e03f4e4fc38fc820ac0b6

Full manifest brief:

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, family-friendly and gently comic. Clear separated design views, not a story event. No real people's likenesses, no copied franchise designs, no famous trains, no weapons, no logos, no legible text or captions (maker's plates, signs and cassette labels are blank or unreadable). Only specified subjects. The story's night is clear with hard frost and stars; interiors are lamplit; dawn is clear and golden. This board locks design only, never possession, accompaniment, plant state or story outcome. Three separated original character designs, each one full-body front figure plus a large matching head detail directly above it. LEFT NAN PERROW: small woman in her seventies, warm olive skin, silver hair under a purple knitted hat, a padded lilac coat over a floral apron, green wellington boots and brown fingerless mittens; brisk amused face. CENTER CASSIA FLINT: woman in her twenties, deep brown skin, short bleached-blonde curls, big silver headphones worn round her neck, a shiny teal puffer jacket over a black turtleneck, black leggings with acid-yellow leg warmers and white high-top sneakers; quick grin. RIGHT LUCAN SALLOW: man in his forties, pale skin, sleek black hair, a neat black moustache, a camel overcoat with a fur collar, a crimson silk scarf, black leather gloves and polished black shoes, carrying a hurricane lantern; a warm salesman's smile that does not reach the eyes, ordinary clothes, no villain costume. Each has two ordinary arms, hands and legs, five fingers per hand. No settings. Attached Glasshouse Express sources are rendering/material guides unless a specific shared design is requested above; preserve that design only. Do not copy unrelated subjects or the source board layout.

### fenn

WebP: stories/glasshouse-express/references/fenn.webp

SHA-256: af77cc78162b10edf031e5907682e6635e8c9d2be4c7f88b45149f7fe5feb78d

Original: stories/glasshouse-express/art-src/references/fenn-astra-v1.png

Original SHA-256: 55b69ed92061b12f1c9f9dcb2851f3c5b278d2066c3730f6aecedfacf89bfa7c

Full manifest brief:

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, family-friendly and gently comic. Clear separated design views, not a story event. No real people's likenesses, no copied franchise designs, no famous trains, no weapons, no logos, no legible text or captions (maker's plates, signs and cassette labels are blank or unreadable). Only specified subjects. The story's night is clear with hard frost and stars; interiors are lamplit; dawn is clear and golden. This board locks design only, never possession, accompaniment, plant state or story outcome. TOBIAS FENN only: an original tall thin man in his seventies, pale lined skin, white moustache, grumbling devoted face. Clothing verbatim: a brown knitted cap, a long brown waxed coat buttoned over blue-and-white striped pyjamas (pyjama legs and collar visible), unlaced brown boots. One full-body front view holding a hurricane lantern, one full-body side view showing the coat length and unlaced boots, one large head three-quarter detail wearing the cap, plus a small matching uncapped head detail with sparse white hair for the endings where he holds his cap (the coat stays buttoned). Also one small view of him kneeling at nothing (pose only) to lock how the coat falls. Two ordinary arms and legs, five fingers per hand. No conservatory on this board. Attached Glasshouse Express sources are rendering/material guides unless a specific shared design is requested above; preserve that design only. Do not copy unrelated subjects or the source board layout.

Call additions (lower-town initial): style references only, no anchor subjects/clothes/lantern; Sallow NO hat per a61acbc; preserve three distinct faces and exact costume details, three columns, full bodies, portraits above, exactly 1536x1024.

Correction additions: input 3 rejected candidate; inputs 1/2 style only. Preserve Cassia and Sallow faces/clothes; Nan keeps requested clothes but gets distinct broader round cheeks, shorter rounded nose, no spectacles, no copied Hesper freckles, brown fingerless mittens. Sallow lantern becomes ROUND glass globe, round fuel reservoir, curved tubular supports and arched wire handle, not square/X-braced panes. Remove three rear figures. Apron under coat. Exact dimensions, no labels.

Fenn additions: anchors rendering only; distinct tall thin pale elderly man, white moustache, no beard. Conventional ROUND-globe hurricane lantern, round fuel reservoir, curved supports/arched handle, never rectangular. Same BUTTONED coat in front/side/kneeling. Matching capped/uncapped portraits with sparse white hair. No coat-off variant, no implied outcome; full bodies/footwear in frame, exactly 1536x1024.

Built-in output basenames in /Users/carl/.codex/generated_images/01a13c47-e345-72a1-ae2e-69d0cf4230d6/: exec-7b5c7f79-3ddc-4f82-8a3d-14d48e63cd3d.png (rejected lower-town v1); exec-cb311ddf-e05d-4740-ad86-f9cf655d2fc5.png (corrected lower-town v2); exec-0fdeb7f6-2e50-43aa-b6c3-a5c80c5f4373.png (Fenn v1). Sunwort remains pending reviewed carriage-interior.

## Corrected canon checkpoint

Merged owner tip dae9a55 as 1231064, including exact author 19768a4. Read author diff and bible response table: planting-before-dawn rule, Beacon Cut Dov at token hut, Fenn's three-hour estimate, neutral cold planting, five-AM refusal at Fernhallow, Hallam introduction, 7:30 sunrise, facing points and distinct Works gates. Approved bag/Dov/lamp/recorder descriptions match existing boards. No character regeneration required. Merge retained this newer report and owner review notes; no original author content was edited by this worker.

After the merge, npm run check passed all eight stories; npx tsx --test scripts/glasshouse-express-regressions.test.ts passed 18/18; git diff --check passed. Scene generation remains held for independent round-2 PASS. Four assigned boards delivered in 139c1e7 and eaa7f08; sunwort remains blocked solely by its unavailable reviewed carriage-interior source. Do not treat this checkpoint as completion of sunwort or owner approval of lower-town/Fenn.


## Sunwort completion candidate — resumed run 3

Merged owner d4f3333, e7d1d8d and de0799d; read current sunwort manifest/export brief and author/bible updates. Round-3/4 changes concern train framing and D04 lighting, not botanical identity. Scene hold is now fresh round-5 PASS/stamp plus all 18 references. No scenes generated or approval hashes written by this worker.

Runtime reverified on this single authorized resume: injected T3 runtime explicitly Codex harness / gpt-6-astra / medium; live orchestrator inherited codex/gpt-6-astra, model option reasoningEffort currentValue medium; durable thread and active run ordinal 3 record codex/gpt-6-astra. Prior run ordinal 2 records failed. No new image generation on resume: recovered its already completed third correction from the default generated_images directory, avoiding duplicate work.

Source attachments on EVERY original/correction built-in image_gen call:

- carriage-interior.webp (approved rendering/material and shallow-tray identity): SHA-256 b7d5d1dbdb1d0a83ab99aa74b3cfe8cb49cdaee391a32c6f4ca39799d4e263ed.
- player-hesper.webp (approved painterly style and grey glove material only): SHA-256 50511aac7b66cfef5f5cb038927c3a5d8a22b815c974c87584fdb9b1db5a6a30.
- Corrections additionally attached the preceding rejected PNG as input 3. No source subjects or unrelated props copied.

All seven states inspected at full 1536x1024 in PNG and converted WebP: healthy spreading closed-copper-bud rosette; firm folded chilled fist; live green slumped/papery-edged overheated rosette; split buds with orange seams; partial cups plus closed buds; fully open orange cups with heat shimmer; dark glassy frost-killed leaves and blackened buds. Five-digit gloved scale hand and shallow tray geometry coherent. No captions or combined story event. These states do not prescribe leaf conditions on shared-route pages.

Owner review caveat: the partial-flowering specimen contains THREE open cups and TWO closed buds, an approximate half-flowering sample, not an exact 50/50 count. The manifest's half-flowering intent remains subject to owner judgment; do not report an exact half count. v1 was rejected for extensive tan overheated margins and too few open cups; v2 improved overheating but still had only two cups. v3 opens the front central bud. Both rejected PNGs preserved unchanged.

Candidate: stories/glasshouse-express/references/sunwort.webp
Dimensions: 1536x1024; conversion cwebp -q 88, NO resize.
WebP SHA-256: f7157dfa913c4b7f9b19af02fbdde09e3c4a56512fe6891cd81425d1e541e915
Selected original: stories/glasshouse-express/art-src/references/sunwort-astra-v3.png
PNG SHA-256: 82b9f8823648d28c5dc1fd7fe26f29b405775dd4ee17502e7fa3b7f57546313d
Rejected originals: sunwort-astra-v1-rejected.png, sunwort-astra-v2-rejected.png in the same ignored directory.
Built-in output directory: /Users/carl/.codex/generated_images/01a13c47-e345-72a1-ae2e-69d0cf4230d6/
Output basenames: exec-ef322e81-8772-4990-9035-1d430d2e2baa.png (v1), exec-64a05382-2bc3-42fc-bec7-5ac03603c694.png (v2), exec-c27f3a2d-8a61-4283-b5e7-74651c9d40df.png (v3).

Full manifest brief included in all three calls:

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Painterly 1980s fantasy-adventure illustration, gouache and ink line, luminous frost blues and warm glasshouse amber, expressive invented faces, cinematic light, family-friendly and gently comic. Clear separated design views, not a story event. No real people's likenesses, no copied franchise designs, no famous trains, no weapons, no logos, no legible text or captions (maker's plates, signs and cassette labels are blank or unreadable). Only specified subjects. The story's night is clear with hard frost and stars; interiors are lamplit; dawn is clear and golden. This board locks design only, never possession, accompaniment, plant state or story outcome. SUNWORT, the story's invented plant, as a botanical state board. ROW ONE, in a shallow wooden tray: (a) the travelling state: a broad dark-green rosette of smooth tongue-shaped leaves with a central cluster of tight copper-coloured buds like small closed fists; (b) the CHILLED state: the same rosette drawn in tight, leaves folded up around the buds, dark and firm, no damage; (c) the OVERHEATED state: leaves slightly slumped over the tray rim with crumpled papery edges, buds still tight. ROW TWO, planted in dark soil: (d) buds just split showing a thread of warm orange; (e) half the buds open into broad warm orange cup flowers the size of a teacup; (f) every bud fully open, flowers glowing, faint heat shimmer; (g) FROSTED: leaves gone dark, glassy and translucent, buds blackened. Small scale marker: a gloved hand beside one rosette. No people otherwise, no text. Attached Glasshouse Express sources are rendering/material guides unless a specific shared design is requested above; preserve that design only. Do not copy unrelated subjects or the source board layout.

Initial call additions:

Input 1: approved carriage-interior, a rendering/material guide and identity guide for shallow wooden trays only. Input 2: approved player-Hesper, painterly style and grey wool glove material only. Do not draw people, carriage interiors, lamps, recorder or other unrelated subjects. Create exactly seven distinctly separated botanical specimens in the specified two rows: three tray specimens above, four dark-soil specimens below. Same invented species and natural scale throughout; broad smooth tongue leaves, clustered copper buds, broad orange cup flowers, not roses. Top left healthy spreading rosette; top center leaves tightly folded inward/upright like a dark fist with closed copper buds visible at its heart, alive and undamaged; top right visibly slumped leaves with papery crumpled edges but CLOSED buds. Bottom left only narrow orange seams in just-split buds, no open flowers; next half open cups and half closed copper buds; next every bud open to orange cups with faint heat shimmer; last frost-killed glassy dark leaves and blackened closed buds, no flowers. Distinguish intentional chill from lethal frost. One isolated five-digit grey wool gloved hand for scale beside the healthy specimen, not holding a prop. No arrows or labels. These separated state samples do not imply simultaneous states, any route's possession or shared-page leaf condition. EXACT 1536x1024 landscape.

First correction additions:

Correct input image 3, the sunwort draft. Inputs 1 and 2 are required approved carriage-interior tray/material and player-Hesper style/glove references, not subjects to reproduce. Keep seven specimens in the same positions, same species and botanical scale, same five-digit glove, three upper trays/four lower soil patches, no labels. CHANGE ONLY these botanical defects: TOP RIGHT overheated plant should remain predominantly dark GREEN and alive, with leaves modestly slumped over the rim and a few crumpled papery edges; remove extensive tan/brown dead margins, this is recoverable over-stoking, not killed stock. BOTTOM SECOND FROM LEFT must show exactly THREE fully OPEN broad orange cup flowers and THREE tight CLOSED copper buds (half open, half closed); no extra buds. Preserve bottom left only just-split narrow orange seams, bottom third every flower fully open and warm, bottom right lethal dark glassy frost. Preserve top-left healthy spread and top-center firm folded chilled fist, closed buds in every top specimen. Do not turn painterly highlights into yellow disease markings. Distinct reference states imply no simultaneous route condition or story outcome. EXACT1536x1024.

Second correction additions:

PRECISE SMALL EDIT to input image 3. Input 1 approved carriage-interior tray/material guide; input 2 approved player-Hesper style and glove only, do not draw people or unrelated subjects. Preserve ALL of image 3 exactly except ONE bud in the bottom-row SECOND plant from the LEFT: the front-center CLOSED bud between the two orange open flowers must become ONE fully OPEN orange CUP flower identical in shape to its neighbours. Keep its two back CLOSED copper buds unchanged. The result is THREE OPEN cups and TWO CLOSED buds, an approximately half-flowering reference, clearly intermediate between just-split and fully flowering. Do not change any of the other six plant specimens, tray geometry, leaf states, frost, glove, background, scale, layout or dimensions. No labels. EXACT1536x1024.

Current delivery status supersedes earlier dependency checkpoints: all five assigned candidate boards delivered. Dov, keeper-props, lower-town-cast and Fenn are owner-approved; sunwort awaits independent owner review and approval hash. Full art gate and scene export remain owner work. Focused Glasshouse regressions passed 18/18 on resume; npm run check passed typechecking and all eight story checks (Glasshouse: 44 pages, 10/10 endings, 29,401 states, 24,575 paths); dimension/hash/ignored-original checks and git diff --check passed.
