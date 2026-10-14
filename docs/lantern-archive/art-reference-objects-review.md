# Lantern Archive — objects and Wicks reference review

Reviewed 14 October 2026. Owned batch: `light-moths`, `wicks-cans`, `lamplighter-pole`, `anchors`, `depot-field`, `wicks-streets`. Six approved reference WebPs only; no final scenes. These sheets establish design identity, never presence, possession, completed work or outcome.

## Runtime and inputs

Requested: provider `codex`, model `gpt-6-astra`, `reasoningEffort: medium`. Verified through live `orchestrator_capabilities`: inherited provider `codex`, inherited model `gpt-6-astra`; that model's reasoning option had `currentValue: medium`. Injected runtime independently identifies GPT-6-Astra with medium reasoning. No delegated workers or substitute image providers used.

Read CLAUDE.md, README.md, the complete story.ts and bible, the complete successful `npm run -s story-dump -- lantern-archive` output, reference manifest, and `/Users/carl/.codex/skills/.system/imagegen/SKILL.md`. Initial story dump failed because tsx was absent; `npm ci --ignore-scripts` restored dependencies, then the dump succeeded. No tracked dependency files changed.

Base: `72b2e51` (approved player-win anchor). Viewed player-win at original resolution and attached it to EVERY generation/correction call for STYLE ONLY, explicitly excluding its people and key. Parent subsequently supplied manuscript correction `3ffd42a` and instructed this isolated worktree not to merge it. Its supplied corrections do not alter these designs: E06/E08 are late October, E09 goes downhill toward the chimney, final scenes remain HOLD for independent round-two review. No manuscript review or stamp is claimed here.

## Generation provenance

All eleven generations/corrections used the built-in `image_gen__imagegen` tool, transparent_background false, requesting 1536×1024. No image CLI/API fallback, compositing, resizing or programmatic artwork. Initial calls included the exact manifest prompt verbatim (reproduced below), followed only by reference-role and output-size constraints. Corrections used built-in imagegen with the previous candidate attached and targeted changes described below. The approved player-win style anchor was also attached throughout.

Built-in originals directory: `/Users/carl/.codex/generated_images/01a13c40-6fda-7da0-82d5-65f42bcd4c85/`. All files below were copied, leaving that source intact, into ignored `stories/lantern-archive/art-src/references/` in this worktree. The ignored copies must be copied separately when integrating; git commits do not carry them.

| Local original | Built-in original basename | Disposition |
|---|---|---|
| depot-field-v1-rejected.png | exec-e4c81d6f-badd-4c15-8249-e2e31b8cfae1.png | Rejected: abandoned lamp lit, tapered panes |
| depot-field-v2.png | exec-f824542c-fd3b-4d1e-9aaa-fba89dc26237.png | Approved |
| wicks-streets-v1-rejected.png | exec-a0e91822-24c3-4601-a222-08fd3b3cfeb6.png | Rejected: tapered lamps, sepia tint, legible 7 |
| wicks-streets-v2.png | exec-e3eff9ee-7aa1-4265-bc0f-0bfd4492d300.png | Approved |
| light-moths-v1.png | exec-b929d483-cedc-471c-a840-cee371b0578f.png | Approved |
| wicks-cans-v1-rejected.png | exec-8149bfa5-4484-46a4-9fd9-b07cf46569bb.png | Rejected: six dark card entries, sepia film |
| wicks-cans-v2.png | exec-e4070115-9b1b-45c5-8b81-1c0aac80e654.png | Approved |
| lamplighter-pole-v1.png | exec-1580a6de-e88f-4453-a398-8308155e8056.png | Approved |
| anchors-v1-rejected.png | exec-00f167da-2abc-4623-9de4-aac562cc49c9.png | Rejected: oversized slide, stairway instead of lane |
| anchors-v2-rejected.png | exec-2478a5bf-565e-446a-abbd-ff4bf00e6e00.png | Rejected: slide still larger than pane |
| anchors-v3.png | exec-f6d80cdd-6bb3-46e9-950e-af6a250fd3ca.png | Approved |

Depot Field was generated and approved before Wicks Streets. Both Wicks calls attached depot-field.webp as the chimney/lamp identity reference. Anchors correction v2 additionally attached wicks-streets-v2.png for the lane, separate from its colourful painted-slide treatment.

## Visual review and corrections

Reviewed all candidates visually, with original-resolution local views for detailed inspection, and viewed each final WebP at original resolution after conversion. No people or hands occur, so human anatomy checks reduce to confirming their absence. All panels remain separate design alternatives.

- **Light moths:** approved pale-gold luminous bodies, open-wing resting and flying views, film-frame wing patterns, sparse stream of roughly twenty and dense swirl of hundreds on dark swatches. No visible legs, mandibles or horror features. Enlarged singles are design details, not actual scene scale; use approximately 4 cm wingspan in scenes.
- **Wicks cans:** approved flat round dull-silver cans, closed/open alternatives and stack of exactly four. Tight film roll on a small core, monochrome pictures with sprockets and no soundtrack stripe. Correction made the card's four darker entries explicit (two per column), faded the other entries, and neutralised sepia film. Handwriting remains illegible. Tiny film pictures are material examples, not the authoritative Wicks geography; use wicks-streets for that.
- **Lamplighter pole:** approved full-length horizontal honey-brown wooden shaft, consistent curved brass hook/cap, screwed grip plate with four abstract raised marks separated by dots, and matching view on two brackets. No people or outdoor setting. The pole remains at Highfield House. The abstract motifs are intentionally non-letter substitutes required by the manifest; story text supplies T · W · D · M.
- **Anchors:** approved separate cloudy greenish pane with weathered edges and etched flame, front/edge/half-wrapped white cloth views; separate brown-card slide with saturated painted terraced cobbled lane, gas lamps and chapel. Corrections replaced stairway with cobbles and reduced the slide including its frame below the pane's size. These are approximately palm-sized alternatives, not simultaneous gate occupancy. The slide is a painting, not a true physical anchor.
- **Depot Field:** approved matching rainy-night/day geometry, square brick chimney with one pale band downhill, long kerb/cobble lines leading to tilted lamp uphill, chain-link gap, depot and double-deckers, rusty street sign, separate spring wooden sign. Corrected unlit abandoned lamp and two distinct enlarged head states: whole cloudy flame-marked pane versus empty frame with remaining cracked glass. The square-pane enlarged details govern geometry; tiny overview lamps simplify the silhouette. No person or walking direction is encoded.
- **Wicks Streets:** approved four separate silvery monochrome silent-film frames with sprocket holes and no soundtrack stripe: steep Tallow Lane/chapel, level Wick Street/shops/washing, Dipping Row/sheds/vats/candles, Mould Yard/gates/square chimney. Corrected lamps to straight box frames matching Depot Field detail, replaced readable 7 with an abstract brass mark, removed sepia picture tint. Warm parchment remains outside the film pictures. No identifiable faces.

Residual limitations for scene integration: illustrative boards are not engineering scale drawings; enlarged closeups govern details over tiny overview silhouettes. The small lamps inside Ada's painted slide are pictorial simplifications, not a competing physical lamp design. The pole's abstract plate marks must not be treated as a new puzzle code. No blocking design defects remain in this batch under this review. Parent still owns independent acceptance, manifest hash integration and final-scene clearance.

## Conversion, hashes and checks

Converted only approved originals using `cwebp -q 88` (some calls also used `-quiet`), without resizing. All six final WebPs were viewed before SHA256 computation. `webpinfo` reports 1536×1024, valid lossy VP8, no errors, for every file.

| File under stories/lantern-archive/references/ | Reviewed SHA256 |
|---|---|
| light-moths.webp | 611b2e3e542b012af829de8ebbc88f9ebe4f608b023df1b61e6e03ef15d08110 |
| wicks-cans.webp | 9be79d4a0d7ade4a04089bcf9d46d9527278a3c7caf71da3c4468841fbe7501e |
| lamplighter-pole.webp | e6ac2270ac05ebaef8ffc888fc6280a16c5e11402f9e6830873554b388ef6ac7 |
| anchors.webp | 51a1140483c195c869f13a3469b1ee41cab8064f28cd3a9a4cd2a8d583fd0586 |
| depot-field.webp | 13c3297d65081379b68c3c06edbfc9d6cfb77f57851ff7ee678560d880d87c40 |
| wicks-streets.webp | bc027349540f9e19b307dd169454bcccac857b97630d190845045d7a0c552488 |

`npm run test:art`: 6 passed, 5 failed. Investigated failures: incomplete game-scene coverage for player-two, last-skyway, midnight-signal and lantern-archive; global reference validation first stops at missing last-skyway/references/valley-workshop.webp. Lantern scenes are deliberately on hold. This task does not complete the repository-wide gate or update manifest reviewed hashes. No shared manifests, prompts, story, bible, stamps or code changed. `git check-ignore` confirms all eleven copied originals are ignored.

## Exact initial manifest prompt set

Each initial prompt below was supplied verbatim, with a short appended instruction identifying player-win as STYLE ONLY, excluding its people/key and reiterating 1536×1024. Wicks Streets additionally identified the attached approved Depot Field as chimney/lamp geometry reference; Anchors reiterated separate plain glass versus painted slide; Pole reiterated care-home wall placement. The targeted corrections are documented above.

### light-moths

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. LIGHT-MOTHS: small, gentle moths made of pale-gold light, about 4 cm wingspan, softly glowing, with faint pale film-frame rectangles patterned on their wings, no insect legs or mandibles visible, never frightening. Show: a single moth resting with wings open at large scale; a single moth in flight; a loose drifting stream of about twenty at small scale against a dark swatch to show glow; a dense swirl of hundreds against a dark swatch. Neutral board, no people or setting.

### wicks-cans

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. THE WICKS ROLLS: four identical small, flat, round dull-silver tin film cans, each about 18 cm across, each with one small cream paper label in brown looping ink (scribbles, no legible words). One can closed; one open showing a short tight roll of black-and-white 35mm film on a small core, edge-to-edge picture frames with sprocket holes and NO soundtrack stripe; a stack of all four closed. Separate detail: a small cream index card, about 13x8 cm, with two columns of faded brown handwriting (illegible), four lines slightly darker near the bottom. No people or setting.

### lamplighter-pole

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. ABEL'S POLE: a long, smooth, worn honey-brown wooden lamplighter's pole about 2.4 metres long, with a curved brass hook and small brass cap at the top and one small rectangular brass plate, about 6x2 cm, screwed on near the grip end, stamped with four small raised marks separated by dots (keep them as abstract marks, not legible letters). Full-length view horizontal; close detail of hook; close detail of plate. Separate small view resting on two plain wall brackets. No people.

### anchors

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. Two separate small glass objects, never combined. LEFT: THE LAMP GLASS, a palm-sized (about 9 cm) square pane of clouded, slightly greenish old glass with weathered edges and a tiny etched flame in one corner; front view and edge view; separate view half wrapped in a plain white cotton cloth. RIGHT: ADA'S SLIDE, a palm-sized (about 8 cm) square glass magic-lantern slide framed in brown card, hand-painted in bright boiled-sweet colours with a steep terraced lane, gas lamps and a small chapel at the top; front view and edge view. Same scale for both. No hands, people or setting.

### depot-field

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. DEPOT FIELD, Saltbeck, empty of characters. A wide sloping field of brambles and long grass behind a small town bus depot with a chain-link fence (one gap where wire is bent back, small sign with illegible text) and dark parked double-decker buses beyond. In the field: ONE tall SQUARE brick chimney with a single band of WHITE brick near its top, standing alone near the bottom of the slope; long straight lines of old kerbstones and cobbles showing through the turf, running up the slope; at the top of the longest line, a tilted cast-iron gas lamp post with a four-sided lantern head, and a rusty half-buried enamel street sign (illegible) at its foot. Views: rainy night under an orange town-glow sky; dry bright daytime with the same geometry; detail of lamp post head with three cracked panes and one whole pane; same head with one EMPTY frame. Separate variant: a plain new wooden sign on the fence (illegible) for spring only. States are alternatives.

### wicks-streets

Use case: illustration-story. Production reference sheet, 1536x1024 landscape, warm pale parchment background. Warm painterly 1980s storybook illustration with a touch of magic realism, soft ink outlines, rich velvet reds, brass golds and lamplit ambers against deep night blues, gentle film-grain texture, expressive invented faces. Clear separated design views, not a story event. No real people's likenesses, no famous films, logos, brand names, legible text or captions. Only the specified subjects. This board locks design only, never possession, presence, completed work or story outcome. Each figure has two arms, two legs and five fingers per visible hand. THE WICKS as remembered in silvery black-and-white silent-film stills, about 1925, empty of identifiable faces. Four separate frames, each with edge-to-edge picture and sprocket holes, no soundtrack stripe: (1) TALLOW LANE: a steep cobbled lane of terraced houses climbing to a small stone chapel at the top, gas lamps along the kerb, a doorstep with a brass numeral shape; (2) WICK STREET: a long level street of small shops with blinds and washing lines across a back alley, gas lamps; (3) DIPPING ROW: a row of low wooden sheds with vats and rows of hanging candles; (4) MOULD YARD: a cobbled yard with candle-works gates and the tall SQUARE brick chimney with a pale band near its top (match depot-field). Same chimney and lamp design across frames.
