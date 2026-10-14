# Midnight Signal — batch A review

Completed A01–A08 and B01–B07. Each page has its own built-in image_gen scene, generated from its exported prompt with every listed reference attached. Corrective calls repeated those references and attached the rejected scene. No CLI image generation or placeholder art.

Requested runtime: Codex / GPT-6-Astra / medium. Actual runtime: the injected T3 runtime identifies Codex harness / gpt-6-astra / medium; the parent additionally confirmed that configuration on resume. No independent provider telemetry was queried by this worker. Image-generation backend model is not exposed by the built-in tool; it is not claimed to be the agent model.

Worktree: `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ab2d8940`
Branch: `t3/midnight-signal-astra-batch-a`
Opening milestone: `3bf3853` (A01–A08; parent reports merged).

## Preservation and review method

Preserve the entire ignored directory `/Users/carl/.t3/worktrees/create-your-own-adventure-opus/t3-ab2d8940/stories/midnight-signal/art-src/` before removing this worktree. Final originals are `<ID>.png`; rejected initial versions are `corrections/<ID>-initial.png` (all pages except A08). Generated-source copies also remain under `/Users/carl/.codex/generated_images/01a13c44-b483-75d1-935f-b9335e20b2ed/`.

Read CLAUDE.md, imagegen skill, outline, art review, entire manuscript and exported prompts. Inspected all four mapped reference boards at original resolution. Every accepted original was individually inspected with `view_image` detail `original` BEFORE conversion. Every final WebP was individually inspected afterward. All originals are 1536×1024; conversion used `cwebp -q 75 -resize 1200 800`; all final WebPs are 1200×800. No people, faces, hands or bodies appear. All scenes are stormy late-night environmental views, with optional evidence omitted unless explicitly requested. Paper marks are illustrative rather than readable prose.

## Page-by-page review

| Page | Arrival/state review and corrections | Result |
|---|---|---|
| A01 | Opening receiver and rain-dark window. Removed reference-derived extra room props; cream receiver geometry and amber meter retained. | Original + WebP pass |
| A02 | After spool falls: one red spool in box on floor below sagging shelf; lamp extinguished. Corrected box initially placed on shelf; removed unrelated equipment. | Original + WebP pass |
| A03 | After telephone call and mains failure: rotary phone, illegible note, stopped vinyl player. Removed restored shelf spool and replaced incorrectly substituted tape logger. | Original + WebP pass |
| A04 | Hub valid before/after preparation detours: blank cassette, closed blue notebook, cream standalone reserve gauge, black-left/blue-right sockets. Corrected receiver substituted for gauge. No copied evidence implied. | Original + WebP pass |
| A05 | Copy route guarantees cassette and envelope at Gull. Enclosed charcoal logger has transparent lid fully seated closed. Tightened crop to those objects. | Original + WebP pass |
| A06 | Test completed, sockets empty, loose disconnected lead and headphones. Black left/blue right retained; removed background equipment. No readable destination label. | Original + WebP pass |
| A07 | Full-power test aftermath: transmitter rack meter and lowered single switch, distinct from receiver. Removed unrelated desk equipment. | Original + WebP pass |
| A08 | Stair descent/loan-coat handover moment: yellow coat on peg, dry stairs into office. No carried cassette or people. Original accepted without correction. | Original + WebP pass |
| B01 | Duty desk on sole arrival from A08: plan, closed green register, tide drum. Removed invented lit boat and clutter. | Original + WebP pass |
| B02 | Investigation hub valid after any optional detour: register and separate rising/falling paper records. No player evidence or signatures invented; removed boat and clutter. | Original + WebP pass |
| B03 | Sound-register visit: open register, abstract marks, pencil and harbour window. Inspection handset/activity outside crop. Removed boat and tide reader. Saved resumed correction accepted without regeneration. | Original + WebP pass |
| B04 | Paired-reading visit: falling sea trace on drum, rising basin graph on separate clipboard. Corrected initially matching curves; handset and remote scale absent. Saved resumed correction accepted without regeneration. | Original + WebP pass |
| B05 | Pier detour: closed gate spans passage; dry protected side, wet exposed quay beyond, empty cream/teal launch with dark cabin behind bars. Corrected side opening that bypassed gate. Lock remains in existing frame, no cabinet. | Original + WebP pass |
| B06 | Return from pier: map with crossed abstract route and pencil. Handset omitted; removed boat, gloves and unrelated desk objects. | Original + WebP pass |
| B07 | Crew safety call at office after any investigation choices: black desk handset and folded route plan. No crew or optional evidence. Corrected open map/wide reference-room layout. | Original + WebP pass |

## Checks and remaining integration review

- Dimension/hash audit: PASS, 15 originals at 1536×1024 and 15 distinct WebPs at 1200×800.
- Midnight Signal `validateReferences(story, readReferencePlan(story))`: PASS using existing first-party validator and main checkout's installed tsx.
- Manuscript SHA-256 and existing continuity stamp both remain `24f981199e00e4d77fdf5c2fa650a879c8e5175d32bcd66d5a422576f399ed31`.
- `git diff --check`: PASS.
- `npm run test:art` initially could not launch because isolated worktree has no local tsx. Ran equivalent suite with `/Users/carl/src/create-your-own-adventure-opus/node_modules/.bin/tsx --test scripts/art-references.test.ts`: 7 passed, 4 failed. Failures are incomplete Last Skyway scene coverage, Midnight Signal pages outside this batch, Lantern Archive scene coverage, and missing Lantern Archive reference sheet. Log: ignored `art-src/batch-a-test-art.log`. No assigned page is missing.
- `npm run story-gate`: global failure for unrelated Lantern Archive stamp mismatch; Midnight Signal hash/stamp match. No story or stamp edited.
- Parent owns final integrated contact-sheet/browser QA and rerunning global checks after other packs/batches are merged. No manuscript defect found in this illustration review. No pushes or main merges performed.

## SHA-256 evidence

Original path for each row: `stories/midnight-signal/art-src/<ID>.png`. Final path: `stories/midnight-signal/images/<ID>.webp`.

| ID | Original PNG SHA-256 | Final WebP SHA-256 |
|---|---|---|
| A01 | `fbc3cad9d9be53329817633f2604701bbe7f19e93e46896290ca9356a5f77f02` | `90e3b3bbd86004cd337c6bf4b67f90f080c9a47b1a39195eba8756c1261f55ef` |
| A02 | `2c36db531d0d0815cb2a418b473748ef3baa324736e38491aef75cb425002622` | `ef19bcc26666b326ee808a1555628ecd020c1832d9b417593d7db146317940d7` |
| A03 | `b1a0e6ae41ccc85cc96b074f179a4eae317d3d3f227eb61a5ecc8e7933edabc9` | `57343745ef536ab814c6d806f3dcf82f0059a3d783e000ed5a3ff0cb00bdc61a` |
| A04 | `be65dca64178947bccdf3ab9ac16e27efae0b0c20c2afdf29aaffaafb282022a` | `32b2a99d91c1c65a327c5aaccf88a1733d9fca7e6cb4120518eab2584ebccec6` |
| A05 | `74ae35b68d56a623cd986e334bc94fc27fcca47042662ccaef245dfead5e2eb0` | `02c7377645fab9a1094d5d81cb2eac2f27b2b80568e8548604ac1799010faeaa` |
| A06 | `376b58f816f387eab776cb0009cf1e371b8f46adba40cf2d8816287b0dbf4168` | `b6fec6fe76a5f9cb28a9cb59857a86d318acf423df0b7473983046ad510afe70` |
| A07 | `3531ad4c3557ec70577a9cb5d44b761031a9e2d06bc0576b9f7a2a214bd0be4e` | `1d78f71bb587d427d8d579e01a6936d8d73ce7ca6d1b07b614c5a1595f4f3f59` |
| A08 | `20385ece85e1a95a9b63a91ab1212409e6db6dc797c2683a01b2a6f04083301e` | `952b6a3bef866116cb8be992143bf2046778d94f4a35d9386d9012f65d3fe949` |
| B01 | `a565289e1ab144619b333b3d4370a79d893baafcff1e81cf3bfcf58ca4d6242e` | `aaf71fc5752e7fc4b7bf41068964d85a640e483670176e724a03b5d7a92c7269` |
| B02 | `68216575eb59842c9bf649d35d6ce38a17d9a73e73b0bb9bd100cf630355b804` | `e86623ff3357093282db825aae8037511780a792ee153cdcf875ec40c5b1c700` |
| B03 | `6929e3ce29d394ff48b2bfe47f9e80010b7a6dfd3356da17f7513200ebcf5e1c` | `82c8e3e2980071262527b78b301ba4ac534618beaba09e9b9cab75932983e718` |
| B04 | `cf3dfa681cc486aa15c29fd6f2c3921a7a5749267200263ec80000b4bee9ba01` | `49ea16ef2b32e67f052ac1e5a8d691166744a9f62b7ea5072ec1e01099103858` |
| B05 | `4ded7903f422749f02139118b794de6c0995eb8a858ead553fd271609f25b12d` | `df7c71b7a2144a6b6ca9da36bc8fae4e6ed8e1972e466f2c268790e97dfc1439` |
| B06 | `34026bee3d378d14eb23adb4703790bbe22bc6a06ac188628512a02c1061d560` | `99cd63daae0203ebd394967dfea52a8bee010ccc363200763eaaf3efa0fc17a9` |
| B07 | `dd5c58efc88b3f741c5cd7ce005d57449283e7fc86ee28866c2657e7203be855` | `2adc5dc86bf776f6d80fa12159cfb99ac3e38004e619b69c0533b6280edea729` |
