# Glasshouse Express landmark references — Astra

Status: architecture hold **released for references** by the parent after corrected author commit `19768a4cb29d0e3f29bd60e767feade9a25fa4f2`. Owner tip `dae9a55` merged locally. All seven boards still await the owner-reviewed carriage dependency; scenes remain on hold. No images generated or review hashes recorded.

## Runtime and sources

Verified 14 October 2026 with the live T3 `orchestrator_capabilities` catalog: provider `codex`, model `gpt-6-astra`, `reasoningEffort` current value `medium`. The recorded worker thread and active run independently confirm `codex` / `gpt-6-astra`; the injected runtime confirms medium reasoning (the thread-read response does not expose an effort field). Worktree: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-915f6429`.

Read CLAUDE.md, README.md, the entire story.ts, story-outline.md, manifest.json, reference-prompts.md, and `/Users/carl/.codex/skills/.system/imagegen/SKILL.md`. Read the full 628-line `npm run -s story-dump -- glasshouse-express` output, including all 44 pages' possible/always arrival states and conditional text. This preparation used commit `704dd23`; story SHA-256: `230c4f0a618aa90305cc71aae67966c341d20624672551f227e2bf5f5c224772`.

Inspected the approved player/Hesper anchor at full image dimensions, 1536×1024. SHA-256: `50511aac7b66cfef5f5cb038927c3a5d8a22b815c974c87584fdb9b1db5a6a30`. It supplies painterly material/rendering style only for these people-free boards. No character or board layout is to be copied.

Inspected parent-supplied dependency metadata commit `b6e279e`: keeper-props now precedes carriage-interior. It changes none of the seven assigned landmark briefs. Initially inspected without cherry-picking; now included through the authorized merge of `dae9a55`.

## Dependencies and ownership

- `winter-terminus` requires `glasshouse-carriage`, pending machinery production and owner review.
- `candlewick-junction`, `ember-works`, and `tallow-street-and-halt` require `winter-terminus`.
- `lower-town-interiors` and `mere-and-beacon` require `tallow-street-and-halt`.
- `fernhallow-incline` requires `mere-and-beacon`.

All seven remain blocked transitively by the carriage dependency. The parent released the architecture hold and supplied the fixed manuscript; the reviewed carriage will follow. No substitute sources used. The Conservatory worker subsequently needs fernhallow-incline; send a milestone commit as soon as it is ready for owner review.

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

## Production and validation awaiting carriage source

Use built-in image_gen only, one board at a time. Every generation/correction receives the full current manifest brief, all listed source images, and the approved player/Hesper style anchor. Inspect originals at full resolution for geometry, perspective, variants, and accidental people/faces/hands; correct defects with built-in image_gen while retaining rejected originals in the ignored assigned paths. Convert accepted candidates with `cwebp -q 88` and no resize, checking both original and WebP are 1536×1024. Record each original/output hash, generation provenance and inspection result here. Independent owner review and `reviewedSha256` recording remain pending and belong to the owner.

Validation performed: the initial story-dump failed because this isolated worktree lacked tsx. `npm ci --ignore-scripts` installed lockfile dependencies successfully, then story-dump passed. `cwebp` is available at `/opt/homebrew/bin/cwebp`. No story edits or image assets exist in this milestone, so no story/build/art test pass is claimed. No final scenes generated.
