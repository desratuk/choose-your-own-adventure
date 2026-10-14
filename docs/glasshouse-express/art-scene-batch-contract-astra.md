# Glasshouse Express scene batch contract

Manuscript: independent round-seven PASS `dd6d252`, SHA-256 `ac3eede2367c209657140c9facac60cb4a8db9a4338ff97051039850e2a9e8bf`. This contract does not itself release generation: all eighteen references must first pass owner review and `validateReferences`, and the current full scene prompts and packing audit must be exported.

Three exclusive worktree assignments, covering all 44 pages exactly once:

- **town (15):** A01 A02 A03 A04 A05 A06 B01 B02 B03 B04 B05 B06 B07 B08 B09.
- **journey (15):** B10 C01 C02 C03 C04 C05 D01 D02 D03 D04 D05 D06 D07 E01 E02.
- **finale (14):** F01 F02 F03 F04 F05 F06 E03 E04 E05 E06 E07 E08 E09 E10.

Each worker owns only its listed `stories/glasshouse-express/images/<ID>.webp`, ignored `art-src/<ID>*.png` and corrections, and `docs/glasshouse-express/art-scene-<batch>-astra.md`. Workers are not alone; preserve unrelated work. Never edit story, cast, bible, stamps, manifest, reference images, shared code/docs or another batch. Owner merges actual worker branch histories. No pushes or main merge.

Read CLAUDE.md, README.md, imagegen skill, entire story/bible, full story-dump including every arrival, full reference manifest, current image-prompts.md and attachment audit. Visually inspect every reference used at full resolution. Verify requested Codex/gpt-6-astra/reasoningEffort medium against runtime and live catalog; owner also verifies durable thread/run records.

Generate one distinct 1536×1024 scene per page using built-in image_gen only. Include the COMPLETE exported prompt verbatim in every generation/edit call, plus narrowly targeted composition/correction instructions. Attach ALL mapped reference contents every call, using `art-packing-audit-astra.json` and matching PNG packs under owner ignored `art-src/packed`. Copy the packs into the worker's ignored art-src, checking packed hashes and source rectangle equality against approved source WebPs; no source omission, downsampling, cropping or lossy repacking. Packed upper/lower halves each preserve an entire board at 1536×1024. At most four reference paths plus one edit target. Explicitly describe which references occupy each pack position. Never render a reference board as the scene.

Inspect original and final WebP at full size for identity, wardrobe, hands, anatomy, railway geometry, plant state, possession, time, light, route validity and unwanted subjects. Correct defects through built-in editing with all full reference packs attached again. Preserve rejected PNGs in ignored corrections. After visual approval convert with cwebp -q 75 -resize 1200 800. Save only approved, unique 1200×800 game WebPs in images. No duplicate scenes, placeholders or invented optional props/people. Report every page's generated original path/hash, selected original hash, final WebP hash/dimensions, complete prompt provenance, actual attached pack hashes and review/corrections. Send the first scene for owner review early; continue remaining work unless a systemic issue is reported.

Critical continuity (read actual full prompts, not only this checklist): player face hidden; Hesper supported left ankle only at Terminus; phone/radio voices not drawn; Dov at token hut throughout Beacon hub; Fenn buttoned coat over pyjamas, cap/uncapped variant as specified. Four coupled train vehicles remain all night; honor each full-train or crop composition. B05 train is wholly clear of facing points on lakeside approach, rear along approach, empty right siding. Yard gate single leaf versus far gate paired doors under brick arch. D07/E04 rails bare ice before grit; D02 no buckets in crop. D04 stove-only silhouette, no readable stock/vents/frost; reference lanterns do not add scene light. F01 engine inside open gates short of fountain. F02/F03/F04/F05/F06 hide route-dependent plant states exactly as exported; E06 crops leaves, E07 leaves unreadable. Sunwort reference sample flowering counts are illustrative: E07 about half across bed, E09 mostly open, E08/E10 full; E03/E05 frost. Twelve shutters and Hallam mechanism must stay consistent; reference variants never imply possession/outcome.

Owner performs final cross-scene review, all 44 coverage/dimension/distinct-hash checks, scoped art/continuity tests, browser decoding and representative mobile route. Global failures in other unfinished packs must be reported accurately, never silenced.

## Verified launches

Release `eb6b25f`: all eighteen approved sheets and stamp validated, full current prompts exported, 125 lossless packs with source hashes/placements and pixel equality audited. Three T3 delegated runs requested explicit `codex` / `gpt-6-astra` / `reasoningEffort: medium`, isolation worktree. Owner durable thread and active-run reads confirm provider/model/full-access; each child independently confirmed injected runtime Medium and live catalog currentValue Medium. Durable run schema does not separately expose effort.

Task prefix: `node:delegated-task:command%3Amcp%3Aa52a3b34-4132-45a3-a172-985b5adbb76c%3Adelegate-task%3A`.

| Batch | Task suffix | Worktree | Branch |
|---|---|---|---|
| town | glasshouse-scenes-town-v1 | t3-4f503fd0 | t3/glasshouse-town-scene-imagery |
| journey | glasshouse-scenes-journey-v1 | t3-3e913e0a | t3/glasshouse-express-final-scene-art |
| finale | glasshouse-scenes-finale-v1 | t3-ddda0808 | t3/glasshouse-express-finale-art |
