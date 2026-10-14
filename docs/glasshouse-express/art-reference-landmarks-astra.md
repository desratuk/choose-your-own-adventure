# Glasshouse Express landmark references — Astra

Status: preparation complete; all seven reference boards **on hold** pending the fixed author commit and owner-reviewed dependencies. No designs frozen, images generated, or review hashes recorded.

## Runtime and sources

Verified 14 October 2026 with the live T3 `orchestrator_capabilities` catalog: provider `codex`, model `gpt-6-astra`, `reasoningEffort` current value `medium`. The recorded worker thread and active run independently confirm `codex` / `gpt-6-astra`; the injected runtime confirms medium reasoning (the thread-read response does not expose an effort field). Worktree: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-915f6429`.

Read CLAUDE.md, README.md, the entire story.ts, story-outline.md, manifest.json, reference-prompts.md, and `/Users/carl/.codex/skills/.system/imagegen/SKILL.md`. Read the full 628-line `npm run -s story-dump -- glasshouse-express` output, including all 44 pages' possible/always arrival states and conditional text. This preparation used commit `704dd23`; story SHA-256: `230c4f0a618aa90305cc71aae67966c341d20624672551f227e2bf5f5c224772`.

Inspected the approved player/Hesper anchor at full image dimensions, 1536×1024. SHA-256: `50511aac7b66cfef5f5cb038927c3a5d8a22b815c974c87584fdb9b1db5a6a30`. It supplies painterly material/rendering style only for these people-free boards. No character or board layout is to be copied.

Inspected parent-supplied dependency metadata commit `b6e279e`: keeper-props now precedes carriage-interior. It changes none of the seven assigned landmark briefs. Not cherry-picked during this hold.

## Dependencies and ownership

- `winter-terminus` requires `glasshouse-carriage`, pending machinery production and owner review.
- `candlewick-junction`, `ember-works`, and `tallow-street-and-halt` require `winter-terminus`.
- `lower-town-interiors` and `mere-and-beacon` require `tallow-street-and-halt`.
- `fernhallow-incline` requires `mere-and-beacon`.

All seven are therefore blocked transitively by the carriage dependency as well as the explicit architecture hold. No substitute sources used. The parent confirmed the hold and will relay the fixed manuscript and reviewed carriage. The Conservatory worker subsequently needs fernhallow-incline; send a milestone commit as soon as it is ready for owner review.

Own only these seven reference WebPs, ignored originals/corrections prefixed with their IDs under art-src/references/, and this report. Story, theme, bible, stamps, shared code, manifests, generated prompt files and art-review.md remain untouched.

## Design issues to reconcile against the fixed author commit

1. **Candlewick track direction:** B01 approaches points that select straight main line or right-hand siding. Its image prompt and reference brief say “trailing”. Do not lock a contradictory track plan. Parent has relayed this to the author. Keep the missing pin, empty short chain, frost-bound pivot and brick-dusted footprint distinct; a reference does not establish that the player has discovered them.
2. **Ember Works gates:** B03/B04 stop before the first chained gate; E02 reaches a second gate through internal works rails, then finds the entered gate chained too. The reference asks for the “same yard” in morning light. Preserve the yard's identity without treating the morning barrier as the same physical first gate. Parent has relayed this to the author.
3. **Mere Road crossing variants:** C01 has both `tramsHeld` values. One route waits for the tram, the other rolls through while it waits. A reference can establish the white gates, lamps, hut and viaduct approach, but must not assert a universal tram position or passage outcome. The eventual scene prompt currently selects only the held-tram arrangement; leave correction to the owner/author.
4. **Beacon geometry across boards:** lower-town-interiors and mere-and-beacon both show the radio cabin's downward view. Keep cabin/window, stair, token hut and rails spatially compatible. These boards share Tallow Street as a listed source but not each other, so compare their generated views before approval. No token in somebody's possession and no train or radio speaker invented in the empty architectural views.
5. **Fernhallow state:** the outdoor grade is iced; D02 describes dry rails at the portal and D04 wet black tunnel stone. Do not carry the outdoor ice blanket down the entire tunnel. D07 has a failed run before manual gritting; its scene prompt's thrown grit is not a universal landmark feature. The shelter/bin/bucket and tunnel alignment must match between halt, tunnel and summit panels. No derailed track or damaged train.
6. **Summit silhouette:** mere-and-beacon and fernhallow-incline establish the distant dark dome before the detailed Conservatory reference. Preserve the approved white-ribbed dome and lantern cupola vocabulary without prematurely fixing shutter mechanism details under author review. D05 remains fully dark, without dawn glow.
7. **Terminus and small interiors:** keep office window, platform canopy, signal cabin and bell locations consistent; reproduce sliding carriage doors only from the reviewed carriage. Nan's lean-to is against a shed across the lane, with a cold cellar below and warm shelf above. Hyacinths are distinct from sunwort. Depot inspection-pit rails must support the same cream-and-green tram geometry shown outside.

## Production and validation pending release

Use built-in image_gen only, one board at a time. Every generation/correction receives the full current manifest brief, all listed source images, and the approved player/Hesper style anchor. Inspect originals at full resolution for geometry, perspective, variants, and accidental people/faces/hands; correct defects with built-in image_gen while retaining rejected originals in the ignored assigned paths. Convert accepted candidates with `cwebp -q 88` and no resize, checking both original and WebP are 1536×1024. Record each original/output hash, generation provenance and inspection result here. Independent owner review and `reviewedSha256` recording remain pending and belong to the owner.

Validation performed: the initial story-dump failed because this isolated worktree lacked tsx. `npm ci --ignore-scripts` installed lockfile dependencies successfully, then story-dump passed. `cwebp` is available at `/opt/homebrew/bin/cwebp`. No story edits or image assets exist in this milestone, so no story/build/art test pass is claimed. No final scenes generated.
