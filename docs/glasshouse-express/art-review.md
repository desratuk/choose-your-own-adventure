# Glasshouse Express art review

Status: reference production; final scenes held for independent manuscript PASS and stamp.

## Provenance

Art owner: T3 branch `t3/glasshouse-express-art`, isolated worktree. Live `orchestrator_capabilities` and durable thread/run record confirm provider `codex`, model `gpt-6-astra`, runtime `full-access`; catalog `reasoningEffort` current value is `medium`, matching injected GPT-6-Astra Medium runtime. Built-in imagegen only. No CLI/API image generation.

Read the complete manuscript at `43394ec`, bible, reference manifest and exported briefs, repository instructions, imagegen skill, and all 628 lines of `npm run -s story-dump -- glasshouse-express`, including every arrival-state summary. Installed lockfile dependencies with `npm ci` in the isolated checkout (24 packages; audit reported zero vulnerabilities).

## Author corrections requested

Parent assigned these to Fable; art owner does not edit story or bible:

- C01: tram position varies with `tramsHeld`; crop tram and road traffic.
- D02: one/two-bucket routes and lamp placement differ; use a common cropped composition without impossible three-hand action.
- D04: plant shape, frost and vent state vary; crop those details. Remove unsupported extra hanging illumination when stove is the only light.
- D07/E04: no scattered grit before sanding.
- E08: coat over arm conflicts with buttoned-coat identity/prompt.
- E10: Dov sits on stone in prose; prompt has him standing.
- F02/F03/F05/F06: avoid exposing route-dependent leaf shapes in a shared static scene.
- Sallow lifts a hat in prose but no hat is defined in cast/reference.

No scene assets or reference hashes approved yet. Reference boards establish identity/design only; they never establish presence, possession, plant state or outcome.

## Approved anchor

`player-hesper.webp`: 1536×1024, q88, no resize. Full-resolution original and converted WebP inspected: hidden player face in both rear views, coherent limbs/gloves/boots, navy coat and mustard scarf, canvas bag left shoulder to right hip with single brass flap buckle; Hesper matching freckled face/glasses/plait, coherent seated anatomy and hands, supported left ankle under red tartan blanket with bandage glimpse. First version rejected for blanket beneath ankle and leather-like satchel; retained at ignored `art-src/references/rejected/player-hesper-v1.png`. Built-in targeted edit corrected blanket and canvas texture without changing identity. Hash recorded only after this review. Parent should lock bag strap side/buckle in cast if adopting this board.

## Reference delegation

Three disjoint T3 `delegate_task` runs requested `codex`, `gpt-6-astra`, `reasoningEffort: medium`, isolation `worktree`. Durable thread/run reads verified provider/model and full-access runtime for each; children also verify injected reasoning and live catalog. No native subagents.

Task prefix: `node:delegated-task:command%3Amcp%3Aa52a3b34-4132-45a3-a172-985b5adbb76c%3Adelegate-task%3A`.

- `glasshouse-ref-characters-v1`: dov, lower-town-cast, fenn, sunwort, keeper-props; worktree `t3-d9a4cb43`; report `art-reference-characters-astra.md`.
- `glasshouse-ref-machinery-v1`: marigold, glasshouse-carriage, carriage-interior, conservatory-exterior, conservatory-interior; worktree `t3-a76daba6`; report `art-reference-machinery-astra.md`.
- `glasshouse-ref-landmarks-v1`: winter-terminus, candlewick-junction, ember-works, tallow-street-and-halt, lower-town-interiors, mere-and-beacon, fernhallow-incline; worktree `t3-915f6429`; report `art-reference-landmarks-astra.md`.

Only art owner writes shared manifest/approval hashes. Child candidates must pass owner visual review before use. Affected reference details await author fixes; all scenes await independent PASS/stamp.

Dependency correction: keeper-props now derives rendering from the approved player/Hesper anchor, and carriage-interior attaches keeper-props as well as carriage exterior. This establishes lamp/recorder geometry before interior composition and removes the implied circular design dependency. No scene content or story changes.

`marigold.webp`: owner full-resolution visual approval, 1536×1024 q88 without resize. Three exterior views consistently show three driving axles, integral coal bunker and no tender, dark-green tank body, black smokebox, brass dome/chimney cap/headlamp, red beam, paired buffers and round cab windows. Interior shows two gauges, firebox and speaking tube. Rear-wheel correction removes rejected fourth wheel. Candidate commit `027ec07` integrated as `4bdbf9b`; hash recorded after owner inspection. Original/rejected PNGs remain ignored in machinery worker worktree, provenance in its report.

`dov.webp` and `keeper-props.webp`: independently approved by owner after full-resolution inspection of both WebPs, 1536×1024 q88 no resize. Dov has consistent face, grey beard, rust quilted jacket, navy bib overalls, alternating orange/grey scarf with orange fringe, black cap round brass badge, coherent hand/limb anatomy, matching square X-braced lantern in held/lit/unlit views. Props show matched lit/unlit guarded brass thaw-lamp with wooden grip, coherent gloved scale hand, cream/brown recorder and blue floral round tin, blank labels, peat-textured bricks/wooden hod, separate galvanised grit/coal buckets, brass ring/tag and black coiled-cord handset. No extra narrative possession implied. Candidate `139c1e7` integrated as `cf1d628`; source PNGs copied into owner ignored originals. Hashes recorded only after this owner review.
