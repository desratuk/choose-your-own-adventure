# Glasshouse Express landmark references — Astra

Status: architecture hold **released for references** by the parent after corrected author commit `19768a4cb29d0e3f29bd60e767feade9a25fa4f2`. Owner tips `dae9a55` and `8dc03f4` merged locally. Approved carriage received; Winter Terminus independently approved in owner `7c0b61e`; downstream generation proceeding; scenes remain on hold. No review hashes written to the manifest.

## Runtime and sources

Verified 14 October 2026 with the live T3 `orchestrator_capabilities` catalog: provider `codex`, model `gpt-6-astra`, `reasoningEffort` current value `medium`. The recorded worker thread and active run independently confirm `codex` / `gpt-6-astra`; the injected runtime confirms medium reasoning (the thread-read response does not expose an effort field). Worktree: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-915f6429`.

Read CLAUDE.md, README.md, the entire story.ts, story-outline.md, manifest.json, reference-prompts.md, and `/Users/carl/.codex/skills/.system/imagegen/SKILL.md`. Read the full 628-line `npm run -s story-dump -- glasshouse-express` output, including all 44 pages' possible/always arrival states and conditional text. This preparation used commit `704dd23`; story SHA-256: `230c4f0a618aa90305cc71aae67966c341d20624672551f227e2bf5f5c224772`.

Inspected the approved player/Hesper anchor at full image dimensions, 1536×1024. SHA-256: `50511aac7b66cfef5f5cb038927c3a5d8a22b815c974c87584fdb9b1db5a6a30`. It supplies painterly material/rendering style only for these people-free boards. No character or board layout is to be copied.

Inspected parent-supplied dependency metadata commit `b6e279e`: keeper-props now precedes carriage-interior. It changes none of the seven assigned landmark briefs. Initially inspected without cherry-picking; now included through the authorized merge of `dae9a55`.

## Dependencies and ownership

- `winter-terminus` uses owner-approved `glasshouse-carriage` from `8dc03f4` (SHA-256 `8fc132adbe435576dd0ddd7b777be0d1099d973ff933248ba76398990d6d4611`).
- `candlewick-junction`, `ember-works`, and `tallow-street-and-halt` require `winter-terminus`.
- `lower-town-interiors` and `mere-and-beacon` require `tallow-street-and-halt`.
- `fernhallow-incline` requires `mere-and-beacon`.

Carriage and Winter Terminus received and independently approved. No substitute sources used. The Conservatory worker subsequently needs fernhallow-incline; send a milestone commit as soon as it is ready for owner review.

Own only these seven reference WebPs, ignored originals/corrections prefixed with their IDs under art-src/references/, and this report. Story, theme, bible, stamps, shared code, manifests, generated prompt files and art-review.md remain untouched.

## Corrected canon and design checks

1. **Candlewick track direction — resolved:** B01 and the corrected manifest specify facing points approached from the foreground, straight main line and a right-diverging siding. Keep the missing pin, empty short chain, frost-bound pivot and brick-dusted footprint distinct; a reference does not establish that the player has discovered them.
2. **Ember Works gates — resolved:** B03/B04 use a single heavy iron YARD GATE between brick piers. E02 uses a distinct taller FAR GATE: paired iron doors in the outer wall beneath a brick arch with an unlit lamp above. The corrected board explicitly separates these physical gates, with the far gate in grey morning light. Do not render two lighting states of the same gate.
3. **Mere Road crossing — resolved scene constraint:** C01 still has both `tramsHeld` values; the corrected scene crops the tram out on every route. Reference geometry establishes the white gates, lamps, hut and viaduct approach without asserting a universal tram position or passage outcome.
4. **Beacon geometry across boards:** lower-town-interiors and mere-and-beacon both show the radio cabin's downward view. Keep cabin/window, stair, token hut and rails spatially compatible. These boards share Tallow Street as a listed source but not each other, so compare their generated views before approval. No token in somebody's possession and no train or radio speaker invented in the empty architectural views.
5. **Fernhallow state:** the outdoor grade is iced; D02 describes dry rails at the portal and D04 wet black tunnel stone. Do not carry the outdoor ice blanket down the entire tunnel. D07 has a failed run before manual gritting; corrected D07/E04 prompts show bare polished ice, without premature grit. The shelter/bin/bucket and tunnel alignment must match between halt, tunnel and summit panels. No derailed track or damaged train.
6. **Summit silhouette:** mere-and-beacon and fernhallow-incline establish the distant dark dome before the detailed Conservatory reference. Preserve the approved white-ribbed dome and lantern cupola vocabulary and keep detailed shutter mechanisms consistent with the separate Conservatory reference work. D05 remains fully dark, without dawn glow.
7. **Terminus and small interiors:** keep office window, platform canopy, signal cabin and bell locations consistent; reproduce sliding carriage doors only from the reviewed carriage. Nan's lean-to is against a shed across the lane, with a cold cellar below and warm shelf above. Hyacinths are distinct from sunwort. Depot inspection-pit rails must support the same cream-and-green tram geometry shown outside.

## Corrected manuscript preparation

Read the complete `19768a4` author diff and the bible's round-one responses, along with the merged art corrections and updated landmark briefs. The planting deadline, rather than a bloom deadline, is now explicit. Dov stays at the Beacon Cut hut throughout the hub. E01 is five in the morning, still fully dark, with the train held at Fernhallow; sunrise is half past seven. Fenn's timing, Hallam introduction and cold-planting wording are corrected. These changes do not authorize people, possession or outcomes on landmark boards. The historical source hash above records the first preparation pass, not the corrected manuscript.

## Production and validation

Use built-in image_gen only, one board at a time. Every generation/correction receives the full current manifest brief, all listed source images, and the approved player/Hesper style anchor. Inspect originals at full resolution for geometry, perspective, variants, and accidental people/faces/hands; correct defects with built-in image_gen while retaining rejected originals in the ignored assigned paths. Convert accepted candidates with `cwebp -q 88` and no resize, checking both original and WebP are 1536×1024. Record each original/output hash, generation provenance and inspection result here. Independent owner review and `reviewedSha256` recording remain pending and belong to the owner.

Validation performed: the initial story-dump failed because this isolated worktree lacked tsx. `npm ci --ignore-scripts` installed lockfile dependencies successfully, then story-dump passed. `cwebp` is available at `/opt/homebrew/bin/cwebp`. No story edits were made; no story/build/art test pass is claimed. No final scenes generated.

## Winter Terminus — owner approved at 7c0b61e

Built-in image_gen only, full manifest brief attached on both calls with the approved carriage and player/Hesper anchor; correction also attached the rejected candidate. Source generation: `/Users/carl/.codex/generated_images/01a13c47-e304-7480-9c59-42ceb065593a/exec-81836238-416e-47c4-b85c-87c69c7d6422.png`. Rejected v1 for an extra raised right platform and unrequested water crane; retained as ignored `art-src/references/winter-terminus-v1-rejected.png`. Targeted correction removed both while preserving the other panels. Final generation: same directory, `exec-5840dad4-3b32-4d35-8501-3b13d454709b.png`; copied to ignored `art-src/references/winter-terminus-v2.png`.

Inspected full 1536×1024 original and converted WebP: one raised platform by the brick building, frosted glass canopy, ground-level yard and signal cabin, frozen lake; office fire/desk/telephone/chair/stool; matching green carriage sliding door and pane framing, station wall bell. No people, faces or hands. Separate panels establish design, not presence or an event. Converted `cwebp -q 88` without resize; both files verified 1536×1024.

- Original SHA-256: `09f499465cb0372cc847f3bccbf96ea8dc048041bb1749487776b97cf2e19346`.
- `references/winter-terminus.webp` SHA-256: `e22b66d12c2d56023025d734083bebba262209e78df381abb3a6e486dfc6e25c` (487,898 bytes).
- Original ignore rule verified; `git diff --check` passed. Owner independently approved PNG/WebP and recorded the hash at `7c0b61e`; downstream use released. Cabin illumination is a design-board variant: A06 scene must darken it.

Read round-two findings at `1658490`: key ownership, fuel wording, Conservatory scene approach and trailing-car visibility do not alter these landmark reference designs. Scenes remain held.

## Tallow Street and Halt — owner approved at e46051f

Built-in image_gen calls attach the full current manifest brief, approved Winter Terminus (`e22b66d12c2d56023025d734083bebba262209e78df381abb3a6e486dfc6e25c`) and player/Hesper style anchor. Correction also attaches its target. Original v1 `exec-888a4761-05d0-402a-be45-325850009f93.png` retained as ignored `tallow-street-and-halt-v1-rejected.png`: rejected lit parked trams, detached glasshouse and daylight/disconnected crossing viaduct. Corrected `exec-97ebe4b9-0e86-46f5-b910-9c3b37b3882a.png` copied to ignored `tallow-street-and-halt-v2.png`. Both originate in `/Users/carl/.codex/generated_images/01a13c47-e304-7480-9c59-42ceb065593a/`.

Full-resolution original and WebP inspected: four distinct views; dark street trams; matching cream/green depot tram over pit; wooden halt, water crane/leather bag and telephone box; lit single-slope lean-to against shed; starry crossing with continuous rails onto stone viaduct and white gates/red lamps beside road. No people, faces or hands. Shop neon is pictorial, without text. `cwebp -q 88`, no resize; 1536×1024.

- Original SHA-256: `0a6c840d70fe7c688ea2e3819465b2a6d270f02b1ca3a2d42dc62f6bb0004ac5`.
- WebP SHA-256: `853adfb0ef1c0bfd244e466b3e91bdf1bccf400b3d8b216d0710c1ec31db14cf`.

Merged `513ce8a` and read full author `16bd8d2` diff/bible responses. Four-vehicle train, gate-key ownership and arrival sequencing retained; no reference redesign needed. Read attachment audit `d62cfee`: all full source boards must be attached, losslessly packed at native resolution only if required to remain within five paths, with hashes/placements and pixel verification. Current landmark generation uses two paths, corrections three; no packing required or source content omitted.

## Mere and Beacon — owner approved at aeb6135

Built-in image_gen with full manifest brief, approved Tallow board (`853adfb0ef1c0bfd244e466b3e91bdf1bccf400b3d8b216d0710c1ec31db14cf`) and player/Hesper style anchor on both calls, plus target on correction. V1 `exec-0591ea1d-e6dc-429e-bad8-366e49e609da.png` retained as ignored `mere-and-beacon-v1-rejected.png`: inconsistent hut/stair banks and lit dome cupola. V2 `exec-33fb0dc9-3b8e-4f98-b008-ecb42de61491.png` corrected those and removed unrequested foreground props; saved as ignored `mere-and-beacon-v2.png`. Generated directory is the same as prior boards.

Full-resolution PNG/WebP review: stone-arched viaduct across frozen lake, spindrift, dark upper town/dome, red mast light; cutting has single track, token hut opposite cabin/stair bank in both views, timber cabin on ledge, connected iron stair. No people or trains. 1536×1024; q88 without resize.

- Original SHA-256: `411bf2a0a88b04e6069bc1e0ae6ea521a6c96f94042cecc67b8f5328c2adc3f9`.
- WebP SHA-256: `e1c743c43c82f8f2b8572e22d82081c5d39d8e7f5c18132e78ce1a8648d24a5b`.

Merged owner `e46051f` (Tallow approved) and `e7d1d8d` (author `8360ab2`). Round-three findings and bible responses preserve reference geometry: exterior train visibility/crops and D04 stove-only light corrected. Scenes remain on hold. Candlewick v1 is retained ignored, awaiting correction of lit signal box and invalid turnout geometry before submission.

## Fernhallow Incline candidate — awaiting owner review

Built-in image_gen, full manifest brief, approved Mere/Beacon (`e1c743c43c82f8f2b8572e22d82081c5d39d8e7f5c18132e78ce1a8648d24a5b`) and player/Hesper style attached. Generated `exec-66767aad-dbd4-48d7-8cc1-6ab9b4527f82.png` in the same generation directory, preserved ignored as `fernhallow-incline-v1.png`. No correction needed in worker inspection.

Full-resolution PNG/WebP inspected: single track climbs icy grade to stone portal with blank keystone; tiny wooden shelter with one hanging oil lamp, wooden bin and hanging tin bucket; wet dark enclosed tunnel without outdoor snowfall or ice blanket; summit cut leads toward dark glass dome/cupola. No people, anatomy, trains or lettering. q88 no resize, 1536×1024.

- Original SHA-256: `cf07ac296afa6111b080da64fd2abeac0570739d4548328e93072bd81ebdbb69`.
- WebP SHA-256: `4e0bf61591ca66c58bd9cdfd2cef6ad3ba10cb58de126a0556f5f9aa588a7eec`.

Owner `aeb6135` merged; Mere release received. Candlewick v2 remains rejected/ignored because a curved branch rail terminates instead of joining the turnout, despite successful signal-box darkening. No provider/model substitution and no usage-limit error encountered in this worker so far.
