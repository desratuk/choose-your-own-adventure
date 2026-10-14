# Lantern Archive — cast and homes reference review

Date: 2026-10-14. Implementation batch based on anchor commit `72b2e51`.
Scope: only four assigned reference WebPs and this report. No final scenes, shared manifest, prompts, story, bible, stamps or shared code changed.

## Runtime evidence

Requested: provider `codex`, model `gpt-6-astra`, reasoningEffort `medium`.
Verified by live `orchestrator_capabilities`: inheritedProviderInstanceId `codex`, inheritedModel `gpt-6-astra`; that model's reasoningEffort currentValue `medium`. Injected runtime independently states Codex harness / gpt-6-astra / medium. No delegated children.

Read CLAUDE.md, README.md, the imagegen SKILL.md, the entire story.ts and story-outline.md, manifest.json, and the full successful `npm run -s story-dump -- lantern-archive` including arrival states. Initial dump lacked tsx; `npm ci --ignore-scripts` installed locked dependencies and the rerun succeeded.

Parent subsequently supplied manuscript correction `3ffd42a` and instructed no local merge: stable designs unchanged, LEFT Win plait, six Dot buttons, Abel red-and-cream shirt, E06/E08 late October and E09 downhill toward chimney. None conflict with this batch. These sheets establish designs only; no scene presence, possession or outcome is authorized. Final scenes remain HOLD for manuscript round 2.

## Generation provenance

All five raster generations/edits used built-in `image_gen__imagegen` only. No image API, CLI generation, compositing or resizing.
Each initial call used its exact manifest prompt reproduced below, plus an instruction identifying the attached approved `stories/lantern-archive/references/player-win.webp` as STYLE ONLY: match painterly rendering, texture and finish; never copy its people or key; output exactly 1536x1024. Location calls explicitly required empty rooms and no copied costumes.

Original tool directory:
`/Users/carl/.codex/generated_images/01a13c40-6f63-7cc0-a8cf-cee793dbd02b/`

| Board / attempt | Tool PNG basename | Retained workspace original |
|---|---|---|
| palladian-staff v1 approved | exec-9a4f1d35-ee57-4411-9a72-b790e55012bd.png | stories/lantern-archive/art-src/references/palladian-staff-v1.png |
| highfield-residents v1 approved | exec-a3370913-5c64-4bd5-afd4-1d519432962c.png | stories/lantern-archive/art-src/references/highfield-residents-v1.png |
| highfield-house v1 rejected | exec-79581f24-0337-41a3-849f-3bd916951359.png | stories/lantern-archive/art-src/references/highfield-house-v1-rejected.png |
| highfield-house v2 approved | exec-c8bc18a1-4c67-485d-a29b-71e65f33b698.png | stories/lantern-archive/art-src/references/highfield-house-v2.png |
| win-home v1 approved | exec-af306368-46ef-46f5-846f-2d1f99b6f7c0.png | stories/lantern-archive/art-src/references/win-home-v1.png |

All workspace originals are git-ignored and retained, including the rejection. They reside in this isolated worktree and are not carried by a cherry-pick.

Highfield v2 attached both v1 as edit target and player-win as STYLE ONLY. It repeated the exact manifest brief and requested only: move the two empty brackets from above the settee to directly above the rear-wall armchair, remove the painting there to make room, retain all other architecture/furniture/light/panels and keep the pole absent. The correction succeeded.

## Visual approval

I viewed the anchor, all selected original PNGs and all final WebPs using `view_image(detail: "original")`, at 1536x1024. Approval below followed actual visual inspection; hashes were computed afterwards.

- **palladian-staff:** approved. Dot's front view exposes exactly six brass buttons in two columns of three, red jacket/gold piping, warm brown skin, curly black hair, black skirt/flats and shallow neck-supported tray. Front, side and head identity agree. Hale has the same bald crown/grey moustache across front, rear and head views, bottle-green velvet jacket, bow tie and black trousers/shoes. Limb, hand and shoe geometry is plausible; no extra fingers or limbs observed. Fingers partly hidden by the tray are natural occlusion.
- **highfield-residents:** approved. Abel is thin and elderly, short white beard, brown cable-knit cardigan and red-and-cream checked shirt in all views. Standing/seated forms have coherent limbs and hands. Twins have matching face, hair, blouse, pleated skirt, shoes and pose; lilac versus sage cardigan is the identity distinction. Paired head details preserve the same features. Small beige raincoat view is a separate costume alternative, not evidence of scene wear. No cane, hat or pole.
- **highfield-house:** v1 rejected because brackets were above the settee. V2 approved: two empty brackets above a single armchair, three armchairs (one partly cropped), settee, cocoa table, patterned carpet and standard lamp. Empty hallway has coat stand and front door; exterior has rainy night, lit doorway and mostly dark windows. Roof, openings and furniture are legible and plausible. Extra elevation/roof views are design views, not new scenes.
- **win-home:** approved. Plain BLUE front door in exterior and detail, small empty nail beside the door opening, ordinary brick terrace, cold daylight; kitchen has table/window, teapot and notebook; sitting room has table aligned below the window and large blank paper. No people, key, written memory map, green door or implied ending. Furniture geometry and door details remain coherent.

No blocking visual defects remain identified. These are painterly design references rather than measured architectural plans; small incidental furnishings and roof detail should not override scene requirements. Occluded fingers are not independently countable. Parent's integration review remains pending.

## Final files and reviewed hashes

Converted only after PNG approval using `cwebp -quiet -q 88 <original.png> -o <reference.webp>`, without resize. Re-viewed final WebPs and verified all four dimensions with sips. SHA256 computed only after final visual approval.

| File under stories/lantern-archive/references/ | SHA256 |
|---|---|
| palladian-staff.webp | 6b35aa38c8071ef330ce2d3f0ed4397dd3b18c994bb0795755e180f79d630469 |
| highfield-residents.webp | c9fecb2e68f38a4fa36e1e21ad8e58b5817960d72109146f8bb85a30c192be38 |
| highfield-house.webp | cf16db549a3af5b5c60f923a54926a5966de321f3c012e9864cab964d55cce6b |
| win-home.webp | e2222c29f64425762ac30f1677f82a6a73e3a8f32c16e9be486e7f7717cd68ed |

## Checks and handoff

- Successful full story dump after dependency installation.
- Full-resolution PNG and final WebP visual review; dimensions 1536x1024 for every final.
- `git check-ignore` confirms every retained original is ignored.
- `npm run test:art`: **6 passed, 5 failed**. Four scene-coverage failures are existing incomplete Player Two, Last Skyway, Midnight Signal and Lantern Archive art. The reference-coverage failure stops at missing `stories/last-skyway/references/valley-workshop.webp`. These are outside owned scope. Lantern reference hashes also still require parent manifest integration; this batch deliberately does not modify it.
- No story/code checks claimed; no story/code changed. No pushes.
- Parent should review/integrate these four hashes and preserve the final-scene hold. No design conflicts with the supplied manuscript correction found.

## Exact initial manifest prompts

### palladian-staff

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. LEFT: DOT PRYOR, a cheerful, round-faced usherette in her fifties with warm brown skin and short curly black hair, in a red usherette jacket with gold piping and exactly six brass buttons, a black skirt and black flat shoes; a shallow wooden sweet tray hangs at waist height from a strap round her neck, holding plain unlabelled wrapped ices. Full-body front, full-body side, large head detail. RIGHT: MR HALE, a stout sixty-one-year-old man with light-brown skin, a bald head and a neat grey moustache, in a bottle-green velvet dinner jacket, a white shirt, a black bow tie and black trousers, black shoes. Full-body front, full-body rear, large three-quarter head detail. No setting, no other props.

### highfield-residents

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. LEFT: ABEL QUARRY, a thin ninety-year-old man with pale weathered skin, a short white beard and thin white hair, in a brown cable-knit cardigan over a red-and-cream checked flannel shirt, grey trousers and brown leather shoes; full-body front, seated three-quarter view, large head detail. RIGHT: IVY AND MAY PELLOW, identical seventy-four-year-old twin sisters with pale skin and short permed white hair and identical faces. IVY wears a lilac cardigan; MAY wears a sage-green cardigan; both wear grey pleated skirts and black shoes. Show both side by side in full-body front view, plus paired head details, with the cardigan colour as the ONLY difference. Separate small variant: one plain beige raincoat for Abel, worn only when stated outdoors. No canes, hats, pole or setting.

### highfield-house

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. HIGHFIELD HOUSE, a large Victorian villa turned care home on a hilltop, empty of characters. Views: rainy night exterior with lit front door and mostly dark windows; the lounge under a standard lamp with patterned carpet, three armchairs, a settee, a coffee table with cups of cocoa, and two empty wall brackets above one armchair; the hallway with a coat stand and front door. No people, no pole (it has its own sheet).

### win-home

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. WIN'S HOME in Saltbeck, an ordinary 1980s brick terraced house, empty of characters. Views: front door painted plain blue with a small nail beside the door frame, in bright cold daylight; a small kitchen with a table under a window, a teapot and a notebook; a small sitting room with a table under a window and a large blank sheet of paper. No people, no green doors.

