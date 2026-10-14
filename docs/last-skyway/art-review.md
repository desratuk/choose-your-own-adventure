# Last Skyway art production review

## Production status

All ten reference sheets and all 48 unique scene illustrations are complete and reviewed.
Final owner integration review and checks are recorded below.
Independent continuity round 3 passed in commit `1a6d072`, merged here. The
manuscript SHA-256 and reviewer stamp both equal
`6314fe086b617078cea496aac6bd8fe961cbc516f3b085c2e8d7c38e2c9e29c6`.
Manuscript fixes from `1ba892e` and `175677f` were reviewed against the updated
arrival dump, including enteredGallery, D03 recovery and D07 wrapping action.

Production agent: T3 Codex `gpt-6-astra`, medium reasoning (runtime-provided).
The live orchestrator catalog also reports inherited model `gpt-6-astra` and its
current reasoning option `medium`. All images use built-in `image_gen`.

## Character reference review

All four final 1536×1024 WebPs were viewed at original resolution after conversion
with `cwebp -q 88`, without resizing. SHA-256 approvals were recorded only after
inspection. Full PNG originals and rejected versions remain in ignored
`stories/last-skyway/art-src/references/`.

- **Apprentice:** concealed face; rust jacket, oatmeal jumper, indigo trousers,
  brown boots and single broad slate bag strap consistent across views. The
  initial test lamp had too much bare metal; corrected to an insulated shaft
  with a small exposed contact tip. Bottom monochrome silhouettes are shape
  studies, not alternative clothing colours. Scenery vignettes on this character
  board are not approved architecture; use the dedicated location references.
- **Imani:** deep brown skin, short salt-and-pepper curls and round amber glasses
  consistent; navy boiler suit, cream collar, burgundy waistcoat, black boots.
  Initial rear view omitted the waistcoat; corrected before approval. Visible
  hands, limbs and facial details reviewed.
- **Sol:** round face, medium brown skin, short dark curls, plum jacket, pale-blue
  shirt, charcoal trousers and black shoes consistent. Separate brass key-ring
  studies do not establish scene possession. Hands are in jacket pockets.
- **Mara:** freckled face, short copper curls, broad shoulders, green cardigan,
  cream shirt, brown corduroys and black ankle boots consistent. Red fingerless
  glove studies have four fingers and a thumb, with coherent openings. Gloves
  are required at the controller; this board does not force them into every scene.

## Locked art constraints from continuity review

- Plates remain closed in their box: exposed but unprocessed calibration from
  the previous night. Never show glass or an open box.
- Refuge cradle travels a short horizontal distance sideways, never vertically
  and never down the mountain.
- Crossover wind ribbon must be visible from the cabin; dispatch observation
  is only a written observer report, copied trace and mast sketch. No physical
  dispatch ribbon or remote-viewing device exists.
- Early-failure crossover remains unselected; shared endings must not assert
  optional docking, wrap or machinery outcomes.

Scene production used three disjoint Astra Medium worktree batches of sixteen
pages. Every page maps to at most five full reference files; direct attachments
cover every required sheet, without packing or dropping references.

## Prop and interior reference review

- **Plate box and wrap:** closed wooden box with brass corners and two silver
  catches; flat cream wrap, fitted wrap and folded-in-bag variants remain
  separate. Exactly two orange straps; single slate bag strap matches apprentice.
  No glass visible. Apprentice sheet attached as identity/style reference.
- **Refuge and greenhouse:** cream/green room, three closed bunk curtains, kettle,
  table and separate greenhouse with biscuit-tin seedlings and guarded radiator.
  Closed plate-box identity matches attached approved prop sheet. Snow is an
  ending weather variant, not a mandate for D07 or D08.
- **Gallery and relay:** four distinct interior panels, protected pipe corridor,
  pendulum-clock landing, stairs/lift and guarded machinery with separate battery
  rack. Initial tool and key drift required two corrections: exact orange test
  lamp, insulated probe, square key shoulder/round tip, round lock socket and
  reset button. Apprentice reference was attached for tool identity.

All three final WebPs were inspected at original 1536×1024 resolution before
recording their approval hashes. Conversion was q88 without resizing. Generation
used each manifest brief with explicit reference-role constraints; rejected
versions remain under art-src/references/corrections.

Historical reference-stage validation: story-dump completed and eight early
regressions passed. Superseded by the final manuscript checks below.

## Machinery reference review

- **Valley workshop:** paper-only ridge evidence and smoked-paper pressure drum;
  no physical dispatch ribbon or anemometer. Corrected invented barred entrance
  to a closed wooden glazed door into the enclosed gallery. Gallery sheet is
  authoritative for close-up trapped-key/lock geometry. Bench tram and guarded
  governor are small models; actual winch stays behind separate window.
- **Cabin and stations:** yellow body, cream roof, three side windows, two-part
  end door and red rail. Corrected duplicate cabin at bridge, separated thick
  support and thinner haul ropes, added hand controller and restored white
  neutral suspension pointer. Sideways cradle uses horizontal rails at constant
  floor height. Sheet's clear-weather/background snow studies do not override
  each scene's grey-cloud or falling-snow timing.
- **Skyway system:** west spur ends at shed; eastern line shelters behind retaining
  wall. Enclosed pedestrian gallery is separate from tram ropes. Corrected
  exposed pedestrian section to continuous glazed enclosure; restored blue
  mast ribbon after an edit removed it. Loose pin detail is not evidence that
  a route has been selected. All geographic views contain one cabin.

Each final WebP was inspected at original resolution after q88 conversion with
no resizing. Original and correction PNGs remain ignored. Manifest briefs and
reference export now encode the corrected manuscript constraints. Scoped prompt
export uses a temporary copy of scripts/export-prompts.ts outside the tracked
tree, changing only imports and the story list; validateReferences,
referencesForPage and imagePrompt semantics are unchanged.

Checks after manuscript corrections: npm run check PASS across all six packs;
Last Skyway 48 pages, ten reachable endings, 7,401 states and zero errors/warnings.
Focused Last Skyway regressions PASS, 13/13.

## Scene batch provenance

Reference/export checkpoint: `17b96ce`. Three app-owned isolated worktrees, each
assigned exactly sixteen disjoint pages, launched with explicit provider `codex`,
model `gpt-6-astra`, option `reasoningEffort=medium`. Launch responses and durable
thread/run records independently confirm provider/model. All three workers
confirmed before generation that live orchestrator_capabilities reports inherited
provider codex, model gpt-6-astra and reasoningEffort.currentValue medium; ridge
and return also cite matching runtime injection. These are observed settings,
not merely the requested configuration.

Task ID prefix for all three: `node:delegated-task:command%3Amcp%3A42411c37-e2a2-4fed-ae24-030de53d05eb%3Adelegate-task%3A`.

| Batch / task suffix | Assigned pages | Worktree | Branch |
|---|---|---|---|
| opening / last-skyway-scenes-opening-v1 | A01–A06, B01–B08, C01–C02 | t3-879c949f | t3/skyway-opening-scene-art |
| ridge / last-skyway-scenes-ridge-v1 | C03–C08, D01–D08, F01–F02 | t3-7056ed79 | t3/last-skyway-ridge-scene-art |
| return / last-skyway-scenes-return-v1 | F03–F08, E01–E10 | t3-f4e1ab51 | t3/last-skyway-art-batch-return |

Every call must attach the page's complete reference set. Each worker owns only
assigned assets and its batch report, inspects originals before q75 conversion,
and commits those assets. Parent retains cross-batch visual QA and merge work.

## Final owner integration and visual review — 2026-10-14

Merged return `9814693250cffde1acd8628c972042eee0d64afb` and ridge
`4efd76dbfec010372f6c051829ad413f3fef9ac3` normally into
`t3/last-skyway-illustrations`. Opening task terminated after saving all sixteen
originals and WebPs, before its final report/commit. Its authoritative status was
failed, with no pending child run: “You’ve hit your usage limit”, retry date
October 20, 2026 08:01. Earlier broken-pipe retry was not treated as terminal.
No worker was duplicated or restarted. Owner recovered the sixteen uncommitted
opening assets from its assigned worktree, preserving the source worktree.
The opening durable timeline records generation, corrections and conversions;
its final C02 PNG/WebP were saved before the quota failure. Opening has no
producer completion commit; owner review and validation complete that handoff.

All 48 original PNGs were copied byte-for-byte into this owner's ignored
`stories/last-skyway/art-src/`. Worker rejects and other QA artifacts are under
`art-src/worker-archive/{opening,ridge,return}/`; approved reference originals
remain under `art-src/references/`. Worker worktrees were not removed.
All images were produced by the verified Astra Medium runs using built-in
image_gen, with the exported page reference sets. No placeholders, generic
substitutes or duplicate scene files were used. Reference/export checkpoint
remains `17b96ce`; manuscript/style/cast/prompts were not changed during scene QA.

Owner opened every one of the 48 original 1536×1024 images at original resolution
and inspected three converted sixteen-image contact sheets for cross-batch
identity, wardrobe, anatomy, bag straps, props, weather, location and route
invariants. This is owner integration QA separate from producer QA, not a new
independent manuscript review. Checks included:

- A01–A06: cupboard bell, telephone conversations, model support/haul separation,
  weather desk; Imani identity and hidden apprentice face remain consistent.
- B01–B08: optional investigations confined to their pages; wind evidence is
  paper-only; fitted wrap absent during packing; closed gallery latch and
  square-shouldered key; fully enclosed corridor; Sol at clock landing.
  Opening worker had archived B08 for possible clock/weather refinement before
  failing. Owner reviewed the saved scene: stopped clock at four and cloudy
  late-afternoon light fit the teatime scene; no additional correction needed.
- C01–C08: enclosed stairs/lift and landing; Sol present; guards closed; battery
  test separate; limited inspection does not assert route tracing. C07's white
  window edges are frost/condensation, not falling snow.
- D01–D08: one stationary cabin, west shed/east wall guides, cloud without snow,
  unsigned/open planning, untouched selector, physical pin inspection, bare
  closed plate box before wrapping on both arrivals, sealed floor hatch.
- F01–F08: actual blue ribbon on the outside crossover mast visible from cabin;
  white settled pointer valid on both governor outcomes; wall-side return;
  enclosed bridge and docked platform distinguished; optional cargo/passengers
  cropped; handover and tea avoid unsupported certification outcomes.
- E01–E10: correct remaining cast and snowy ending timing; E02 telephone crop
  works for local and gallery-return aborts; early refuge failure has no selected
  guide; cradle hardware is horizontal at floor height; closed wrapped box has
  exactly two orange straps; shared endings hide optional outcomes; E10 is the
  separate greenhouse with Sol, seedlings and guarded radiator.

Owner found and corrected E02's duplicated telephone handset using one built-in
image_gen edit: target plus all three complete page refs (apprentice,
valley-workshop, refuge-and-greenhouse). Removed the handset resting on the base,
left empty cradle hooks, and retained the single handset held to the apprentice's
ear. No prompt/style/manuscript change. Reviewed corrected 1536×1024 output and
q75 conversion; old original preserved in `art-src/corrections/E02-duplicate-handset.png`.
Generation succeeded after the user's usage-reset notice. No unresolved visual
issue identified in final owner review.

## Final validation

- 48/48 original PNGs 1536×1024; 48/48 game WebPs 1200×800. Every WebP exactly
  byte-matches a fresh `cwebp -q 75 -resize 1200 800` conversion of its original.
  All 48 original hashes and all 48 WebP hashes are unique.
- `npm run test:art`: 8/10 pass. Last Skyway coverage and all reference validation
  tests PASS. Only failures: Player Two missing 19 assets and Midnight Signal
  missing 46 assets in this owner checkout. No gates weakened.
- `npx tsx --test scripts/last-skyway-regressions.test.ts`: 13/13 PASS.
- `npm run check`: PASS all six registered packs; Last Skyway 48 pages, 10/10
  reachable endings, 7,401 states, 19,795 playthroughs, zero errors/warnings.
- Story SHA and independent round3 stamp still match
  `6314fe086b617078cea496aac6bd8fe961cbc516f3b085c2e8d7c38e2c9e29c6`.
- T3 collaborative browser on owner Vite port 5193 loaded and decoded all 48
  final assets at 1200×800, zero failures. Started the actual reader and visually
  inspected A01 rendered beside its story text. This is image-loading and reader
  smoke verification, not an exhaustive manual playthrough of every route.
- Browser QA script initially used a named `story` import (undefined `.pages`),
  then an invalid top-level-await expression; corrected to an async function
  importing the default export. Final 48-image browser check passed.
- Originals remain ignored. No shared code, story, registration or other pack
  edited by this art integration. No push or main merge.

## Final accepted asset hashes

| Page | Original PNG SHA-256 | Game WebP SHA-256 |
|---|---|---|
| A01 | `9241340bc4bb0f123b34e49005b960e822cce50e37c716c7b2d0627dc8960495` | `837b4fbbd71e4719e556f36d0ec9df2efdad9b563dc43d3af2c14b4a5eff8ca6` |
| A02 | `04137ecc1bc6016a1dcff0661ff0eda39d364eac033cb3b1a238653a504ff555` | `9125d7ef4b8483866df2ec0d805921c70c3352b26573d28608f89948c2a2dfdb` |
| A03 | `53156f8ef81bb18c659011acde2e370dde89f211afb04905fadfb03213abaee9` | `f568c213cfc618a0e2423662911ee58f477a3df56d35fffb27aa349b004a54ba` |
| A04 | `edc0b892981ac2c178acbb1b02f7dd23613d9e0b4a162a6521dffa944ff2aa25` | `476d02ac47e465c8d4651e4c43865c9b2cf762f94e5e97541e8fb2a7f78ae19e` |
| A05 | `f900a7cd82c103b8134aaf322ba13d05742706d851d63bcf97e50d0c46b3311f` | `35c8c61304a526aa5ee307cca1bf8bac0e95daeb1994b7a24953dae2c05b509f` |
| A06 | `f7ba17779b722f250069c21f5be2de8474e6da62b58c256a03a09ea3023b304e` | `b440c0731b8e2754e62004fe1d225dc47c55f5367ac5434ced07152b1904fff9` |
| B01 | `8a0f2940c0510b0783f119fe24387583ddb4c1c441822a4fad446da7a9522060` | `43f0fc96c81aab1ac3078bad74a5226b36fdb73f0fcac3bd0c8a0160ba1ac24a` |
| B02 | `a5aa43c4d91ad66e4a19380eba81904e71336f1d63aa517daf9ca7212fef6ea2` | `1fcf250c6f453de240d6fc511adc6df50c51d0aed8eb969e220c95816ee5d91e` |
| B03 | `66c0fc060b3a0589153c806445fcc2727ca46d9f624f36bd9b8b6a9cc0f2c75b` | `341e6cdd440119678e06de0320c30ec607fb14db1c6b9d4c0182d42605baa9f0` |
| B04 | `f974b03894434238332ef80f53f48d94e98d2520a9bf536d6251254b0171af2c` | `5f56408936ec6bcae1f5dcb7c5e603c9b6f98bf0a23e55467c58691995941634` |
| B05 | `0c0e75fb6b5467d677c0b053a82e93c20724930471921a4c606689dfe394abf6` | `448f34fb4c312ed2ec31ca16c3207379b3974003f5ef62cf0efa9fb289cdbf79` |
| B06 | `42c691209c0880827b60d2199c40448edf132731d00e11a4e24897f620515c55` | `12970186c90de699baf1973f1c48a3c4bda3aaf2a2ddc0a63aad3c2e29cb5402` |
| B07 | `c65a69758e4df0e7fc2b5971ea1747889760b39e1412de52bb97737064f3d119` | `4844b6798b390f3856414a091054604dbaf81de2bf2536fd8f83a40e98e4f863` |
| B08 | `e73045e0ce5377202247f3f2a5f0f6a1a5b00a3b44cbae71a1280f038c19d0c6` | `82da837a6248269ea17c05b7a6e9840aab02f7a602d79d16937f34c1199b246c` |
| C01 | `b80a763bd9396ce701a8a61d6cc19ddab7053f156ec0a385b18d4a36317a2155` | `f5922017bd2e9c0b94b0ce483a92293f58f2056642fc64ae2b4bdcd4e8a27093` |
| C02 | `17dbfb7a6156c120681dc8cb57aaf10d0a83325d9a94137add6d01e55f92dc94` | `c814263f74383602958037b966a4c06d760c72f5f329ad562b6705a7f529e210` |
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
| E01 | `d593b63602ad1df780ce51f1c8791ce2c177301e371b877f85c8a01bc4f96718` | `e05cbdef01c8d1748c45b0c6ec8a6a0e6ec64c3c70e3ee69655707fc1cfc3c1f` |
| E02 | `32a4a5e273fccc2391e44bcacf79437d658e4a02f8dedb59fd534837cafa99e8` | `11c31ed805f22589f76c8b72099cf447c721863098363450910c5566681aa34f` |
| E03 | `1babd148b3e20793873489926cfc29fbb5ded3076d90f3f18774369afdcf400e` | `1eb6a3ee4c66a496b564c3d455f333044f51c2262fcb07624bf15f0ad034e9cf` |
| E04 | `3f957e808a14d2c30f695757544b121834834e6478fbd649bdac36ac23c7218d` | `279e86cccde0075a7b1c878832ae863ec7175a3c1a9aa8652f7027e267d6706c` |
| E05 | `eb3ecb8061a7913a86d28995f2104200414855d3c827f9b8fcdd74191f897805` | `d72ba83e1920a1c24e06e1be3e12380c3a5ca2fccd492ae10db089c633302629` |
| E06 | `20793157f269e4f21b9606f2bc0486c582fb59ea7ec9f13a02be62415853c67a` | `5b0f818d3cb0bf8e92017c05db687014f81b2166d31017bacf675474418cc219` |
| E07 | `756eb3d650380ed70894c214734d7cfcaad1a0ea73042a3a48903a01c30817a2` | `e3346af855b3051a3d851d7f74bb67d482dcca6eb0f4e266b69deb6c632ba7e8` |
| E08 | `d1b44f593c01e2815a4e18813002bdaf82c9ea3b47a6526d330ca79017694eec` | `028031b29a9ebd60d33df1d0543eef8ed19d4fa8b6a66a55f74546db4615e9b6` |
| E09 | `cb01b93753ec10968840b2cd3aea695b44613fe71eb3296cc40d50bcad7bb624` | `46a102f70d74413028edfef7f52736225e4b1bad20b9d0455c4b397f975c91fb` |
| E10 | `47a4b9b60796b39a5aa6432f9e5128a6ba1e75964c28257a8fced0cf6ad132e5` | `5ef18217575b67aaf660b029c663e353ff4b205feefd0e0905a2996842d26dfe` |
| F01 | `68697eb0deccd998bfbf41c0c53a34dc3ec538097d0c55c12338ceeecc642d47` | `d11371ca8353411b41d723611de7def90f013afb214409dc9d6e3389c2bedff8` |
| F02 | `7c2e35013a2de79b61c4f561925adfa4af6e1f9a661537e2068c148c3b738890` | `c214dac6ce4a982617e56a96da7440e3ab346a5de5ca468abfe4fdec774c7287` |
| F03 | `009d5378894dbab6565567805112baebfb344aad904aab32173276abf47b7d5d` | `9b1fceabd7927c46dc2433945853d622d35c81492170f5c89ec54e972d158c47` |
| F04 | `f3e33ccd1aa8e3245d841e1f2c2ea4ea5908e0a294585197ea9637c421c8679f` | `d5baadad8f72f814049806ed716e6143d7692f9877eaca0faf324c6ed2dd7200` |
| F05 | `5854bbbe58526db1b2d01067663f679bdb2e8c2c06e8fc122cd5c1f7d06c2b91` | `2f122770fc484fcbb5e25cde9f5d9578b2b0e71a2f3e2ccfa36d6ff545dadb59` |
| F06 | `555f85e2375411e64267570d09527e01da0cc8a464945905b7a1400a6fe219a1` | `35bd4296391ed67d2889ef4e1514f5ec6a8eb7cf355b11083e35b206c1d31480` |
| F07 | `c7363764473f015dcfa606ae59df65f093b39f9d60ef6c20d23312f9fc3eb3ae` | `c7ebbc496119b26919e60f5aa97da82c02cab4036ae774d3956fd2254d9b9b15` |
| F08 | `26b3e4334817a6e10f708342dd5468b08563350a936cd232a4cff6ebb772ac84` | `cd888301b414d2f4be7c6e4e9b13c0b1a035ae8e230510dfb4a8b603da3459db` |
