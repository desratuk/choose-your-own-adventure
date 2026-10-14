# Ridge scene-art batch

Completed assigned assets only: C03–C08, D01–D08, F01–F02 (16 scenes).

## Runtime and provenance

Requested GPT-6-Astra Medium. Independently queried `orchestrator_capabilities` before generation: inherited provider `codex`, inherited model `gpt-6-astra`, matching model option `reasoningEffort.currentValue = medium`. Runtime injection also states Codex harness, GPT-6-Astra, medium. Requested configuration and observed evidence agree. Runtime confirmation was sent to the parent with `t3_thread_send`, mode auto, request ID `ridge-runtime-confirm-20261014-01`.

Branch: `t3/last-skyway-ridge-scene-art`.
Worktree: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-7056ed79`.
Full source PNG directory: `stories/last-skyway/art-src/` within this worktree (ignored).

All art used built-in `image_gen`, 16 separate scene generations plus one C06 correction. No CLI/API image generation, delegation, creative Pillow edits, reference edits or manuscript edits. Every call attached every reference listed in that page's exported prompt using absolute file paths. The C06 edit attached its target plus all three required reference sheets (four attachments). No packed reference board was needed. Reference sheets were inspected before generation.

Prompt set: exact assigned entries in `stories/last-skyway/image-prompts.md` at inherited commit `17b96ce`, supplemented by 1536×1024 output instruction and scene-specific framing/state constraints summarized below. All are single original gouache/ink scenes, not reference-sheet reuse. Full generation requests remain in this task's tool history.

Manuscript SHA-256 remains `6314fe086b617078cea496aac6bd8fe961cbc516f3b085c2e8d7c38e2c9e29c6`.
Read CLAUDE.md, manuscript, bible, art review, manifest, exact prompt entries and imagegen skill. Ran story-dump and reviewed all assigned arrival-state summaries and conditional text. Optional weather/governor/wrap/tracing/history states stay hidden where not guaranteed. Apprentice face hidden and bag single-strapped throughout. Fen/Ellis absent; Sol absent from D07 onward.

## Visual inspection and conversion

Each generated original was visually inspected in the tool's full 1536×1024 output before copying and converting. Checked faces, hands/limbs, costume, strap count, prop counts/state, location, weather and shared-arrival validity against approved sheets. Inspected a converted 16-scene contact sheet for cross-scene consistency, and F01 WebP in browser. This is producer visual QA, not an independent reviewer pass.

Rejected C06 original retained at `art-src/corrections/C06-rack.png`. Its sockets were too closely associated with the large guarded machinery. Built-in edit moved testing onto a clearly separate battery bench rack; all reference identities were attached again. No other discarded scene originals.

Conversion for each accepted original: `cwebp -q 75 -resize 1200 800 art-src/ID.png -o images/ID.webp`.

| Page | Composition and continuity review |
| --- | --- |
| C03 | Stopped freight lift; level floor, open gate, calm delay; no optional props. |
| C04 | Guarded machinery and disconnected battery rack; arrival from either stairs or lift. |
| C05 | Clean notebook and one disconnected orange lamp; test not yet chosen. |
| C06 | Separate battery-only bench test, insulated orange lamp and position indicator; corrected initial oversized machinery-mounted rack. |
| C07 | Limited inspection tick; connections hidden; no destination certainty implied. |
| C08 | Heat plan and closed generator door; valid after either test route. |
| D01 | Three-person introduction; one empty stationary rope-supported cabin. |
| D02 | Enclosed observation; supported branching guides, west shed and east wall; no ribbon. |
| D03 | Open physical plan under cloud; no snow, pin, cabin movement or closed permit. |
| D04 | Untouched selector with abstract marks; hands clear; external route cropped. |
| D05 | Close physical pin inspection from enclosed window; no moving cabin; valid direct/corrected. |
| D06 | Wrong guide indicator and calm stop gesture; no moving cabin. |
| D07 | Bare CLOSED wooden box, brass corners and two silver catches, before either wrapping action; no passengers. |
| D08 | Closed sealed floor hatch and handrail; no tools, passengers or cargo. |
| F01 | Neutral controller and white pointer; exactly one actual blue ribbon on separate outside mast visible through cabin window. |
| F02 | First movement completed, neutral hold and white pointer; nearer retaining wall; no cargo/passengers or selected governor outcome. |

## Checks and limitations

- PASS: 16/16 assigned original PNGs at 1536×1024; 16/16 assigned WebPs at 1200×800; distinct hashes for all originals and all converted assets.
- PASS: story-dump after installing locked dependencies with `npm ci --ignore-scripts`.
- PASS: browser Image.onload/naturalWidth/naturalHeight for all 16 assets served by this worktree at port 5187; F01 visually checked in browser.
- `npm run test:art`: 7 passed, 3 failed. All reference coverage/hash/export checks passed. The three failures are scene coverage outside this batch: Player Two missing 19 scenes, Last Skyway missing other 32 assigned-to-others scenes, Midnight Signal missing 46 scenes. No ridge asset missing.
- Manuscript hash unchanged. No story tests/build required for asset-only edits. No full illustrated route/mobile review or independent art review claimed; parent integration QA remains.
- Initial tooling errors: `sh: tsx: command not found` resolved by locked dependency install; `sed: scripts/story-dump.ts: No such file or directory` resolved by reading actual package command `scripts/dump-story.ts`. Browser first asset loads returned error because initial port belonged to a different worktree; Vite reported `Port 5186 is in use, trying another one...`, and all loads passed on actual port 5187.
- No unresolved producer visual defect identified. No pushes or merges.

## Asset hashes

| Page | Original PNG SHA-256 | Game WebP SHA-256 |
| --- | --- | --- |
| C03 | `fdad275f31aefb6ea471042a805ce02c0a2c96096e6d727ef8aa48a7140aec24` | `ed071e838d350ebc69c1e8a680dab25f8f6d68bb3cd63e8af74d99b0c99a2428` |
| C04 | `403d8bf66e5dadea91084008899f301e4e846e2067e270573ea673f036334d07` | `6104fc9181537448f6a60f0a9538c5fb95a69d16e575f80e2d76f3d43566334b` |
| C05 | `5e60b58efb0dcfae717556541f06c4711289c6e38b4f386e612c6278d8d79626` | `3daa09197595fcf5dc6c468faa87344b5544c14b291a736ee74c9fa9d50c9867` |
| C06 | `d2f38f4aa2e0717e2b9b3b85dbf871c9e666fb6eccb37d9698c9b169470dce3e` | `447d6880c58e8def79afb588fa23d19fc32c1617a167fa94e4b32b1c0c98f4b6` |
| C07 | `19f686f13d77e1f796367b2b647c78b75a5f4b43856cf48e6fd6dbdcc78c5b53` | `36d8c910dbff483437829888484d5d4fd0b98555f3b2de0947e1224abae5fc25` |
| C08 | `ae7ce8a5270b05b3fcc589abdd2ec75269c8abc2f987b4ea7f8a840ff50df473` | `275d094e97820be7bdd249f711b74e348cbd74ec6a3dd18290316f409f46e548` |
| D01 | `da0aa22e2117e4409dede95f678bf6b9da9e96f310a6f316b13bd8b566d8e542` | `8a5c214da2185038073c22630261a1c4cf6f67f4b442e7b9f303557d653596ec` |
| D02 | `0549c4763917adac8f98e90bb8fe5f084f31169364de7cc58d7658b280fb7fab` | `900de7db9c8122c349f44cda27b7f216098cfb31976695a4812b5d233492ebba` |
| D03 | `dfdbdf07e23ac64008cd9c18a9f90689335bddfe4836d17a62f8beb80bc3f464` | `da1440b855d826a368478ee646d5be047861d35366accc08bf152ce4912663e6` |
| D04 | `46375f252a731ba9f48bcf674890783dd262f10c09266245b82d3d7a3a3c20e7` | `4bdadb358187be27a1d3cf702648217aea2fa2bb5a8ddc9f024e73f87ae6c51b` |
| D05 | `3e9857b60da63b2b81309e1ff5c555bf27c7d9c238f2293c02632d2608a9a1e6` | `bd208521687f00af4bab3017c1ce19a8de2fd92ff9da342502049e734cfe07fc` |
| D06 | `de25c5f7f4a13cd058d75f0047cf92fbe2cf11499fe14fed4fc012e5dad821b8` | `c202f5778bd1c0dc01e7c3e9da54fd9925af1bad3b07c98d6a96d0a7980b990e` |
| D07 | `27d759d29f9b8a2f235e6470ac7b879e4643b071bef9d698dacdc87d417b4e0b` | `2609fa26aa97ef369c388d8dff77a7b96d5563d87675ebbf25286ed73f647b7b` |
| D08 | `5d81c5ab52b8ae7bde6523c6b560c6a24bafa0d75c7e8e3d93e1f6390595b652` | `1af816e6ad25219ab2fb9a8dc3cd0479af5d6048a2a4e11bde4c63eae4da0194` |
| F01 | `68697eb0deccd998bfbf41c0c53a34dc3ec538097d0c55c12338ceeecc642d47` | `d11371ca8353411b41d723611de7def90f013afb214409dc9d6e3389c2bedff8` |
| F02 | `7c2e35013a2de79b61c4f561925adfa4af6e1f9a661537e2068c148c3b738890` | `c214dac6ce4a982617e56a96da7440e3ab346a5de5ca468abfe4fdec774c7287` |
