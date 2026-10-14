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

Lower-town-cast and Fenn released by author fix; awaiting Dov owner review for source use. Fenn stays buttoned, with additional uncapped head for E08/E10. Sallow has no hat. Sunwort awaits reviewed carriage-interior source. Independent manuscript review remains pending; no final scenes or affected unconfirmed designs frozen. Full art gate intentionally remains pending reference approvals and absent scenes; not run as a completion claim.
