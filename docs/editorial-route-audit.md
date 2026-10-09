# Editorial route audit

**Spoilers.** Supporting measurements for the [final editorial review](editorial-review.md).

Baseline source: `8df3b3706c2a83cba14fdc07d8488835215ba506`, 9 October 2026. The baseline tables below were measured before editing. Revision 3 measurements and validation are recorded separately at the end.

## What was measured

The audit used the actual TypeScript engine: `startState(story, "medium")`, `visibleChoices`, `choose` (including destination effects), and `renderText`. Every representative step was asserted to select exactly one available choice and finish on an ending. Conditional paragraphs and meter placeholders were resolved; `<br>` markup was excluded. Words were counted as Unicode letter/number sequences, retaining internal apostrophes and hyphens. Page headings, meter labels, interface controls, illustrations and hidden alternatives were excluded. Available-choice words include every visible option at each visit, not only the selected option. Revisited pages are counted again.

A separate memoized traversal visited every reachable Medium page/state combination. It computed minimum and maximum prose words and page visits for each ending. A repeated identical state would fail the audit as a cycle; none occurred. These are possible routes, not a sample of human behavior. The shortest word route and shortest page route need not be the same itinerary. Path counts include permutations and closely related variants: they do not measure distinct dramatic experiences or the probability of success.

No timed human playtest or browser reading-speed study was performed. The illustrative 200–250 words/minute calculation below is an explicitly chosen sensitivity range, not an empirical claim about the audience. It includes prose and available-choice text, but adds no time for decision-making, looking at art, animations, rereading, undo or interruptions.

## Representative routes

| Story / Medium route | Page visits | Prose words | Choice words | Multi-option prompts | Single-option advances | Illustrative text-only minutes |
|---|---:|---:|---:|---:|---:|---:|
| The Stopped Clocks — clean best | 25 | 4,771 | 283 | 13 | 11 | 20.2–25.3 |
| The Stopped Clocks — ordinary good, escape after investigation | 24 | 4,629 | 279 | 13 | 10 | 19.6–24.5 |
| The Stopped Clocks — wheel recovery, best | 27 | 5,009 | 306 | 14 | 12 | 21.3–26.6 |
| The Fratelli Run — clean best | 22 | 4,289 | 457 | 14 | 7 | 19.0–23.7 |
| The Fratelli Run — best with library | 25 | 4,983 | 534 | 16 | 8 | 22.1–27.6 |
| The Fratelli Run — best with wrong-fork recovery | 24 | 4,547 | 466 | 14 | 9 | 20.1–25.1 |
| The Fratelli Run — ordinary good, solo | 19 | 3,070 | 323 | 10 | 8 | 13.6–17.0 |
| Return to Sender — clean best, solo | 21 | 3,683 | 267 | 9 | 11 | 15.8–19.8 |
| Return to Sender — clean best, team | 21 | 3,956 | 317 | 10 | 10 | 17.1–21.4 |
| Return to Sender — best with wrong-tube recovery | 23 | 3,955 | 283 | 9 | 13 | 17.0–21.2 |
| Return to Sender — ordinary good, commissioned handover | 6 | 1,244 | 97 | 3 | 2 | 5.4–6.7 |
| Return to Sender — ordinary good, solo original delivery | 18 | 3,097 | 249 | 9 | 8 | 13.4–16.7 |

“Multi-option” describes the interface, not the literary quality of a decision. Two choices can be obvious or lead to nearly identical experiences. A single-option advance can also be worthwhile breathing space; these counts are not targets to optimize.

## Exhaustive Medium best-ending ranges

| Story | Best ending | Page visits | Prose words | Reachable Medium states |
|---|---|---:|---:|---:|
| The Stopped Clocks | E10 | 25–33 | 4,771–5,756 | 78,641 |
| The Fratelli Run | E11 | 22–28 | 4,239–5,770 | 357,634 |
| Return to Sender | E11 | 20–32 | 3,471–5,718 | 25,950 |

Longer successful routes can exceed the intended session length without proving that the whole story needs shortening. The editorial concern is avoidable repetition or procedure on appealing routes; optional exploration and meaningful recovery deserve room.

## Exact representative itineraries

Each list includes the start and ending. When two choices share a destination, the qualifying choice is identified below. The engine audit disambiguated using the choice text or original source index, not the filtered choice position. All measurements above are Medium.

### The Stopped Clocks

**clean best** — `S01 → S02 → S04 → S06 → S07 → S09 → S10 → S11 → S13 → S14 → S20 → S21 → S23 → S26 → S30 → S30k → S31 → S33 → S38 → S40 → S41 → S42 → S44 → S45 → E10`.

**ordinary good, escape after investigation** — `S01 → S02 → S04 → S06 → S07 → S09 → S10 → S11 → S13 → S14 → S20 → S21 → S23 → S26 → S30 → S30k → S31 → S33 → S38 → S40 → S41 → S42 → S43 → E09`.

**wheel recovery, best** — `S01 → S02 → S04 → S06 → S07 → S09 → S10 → S11 → S13 → S14 → S20 → S21 → S23 → S25 → S26b → S26 → S30 → S30k → S31 → S33 → S38 → S40 → S41 → S42 → S44 → S45 → E10`.

### The Fratelli Run

**clean best** — `D01 → D03 → D04 → D06 → D05 → D07 → D08 → D05 → U01 → U02 → U04 → U05 → U06 → P01 → P03 → P05 → P06 → P07 → P08 → F01 → F03 → E11`.

**best with library** — `D01 → D03 → D04 → D06 → D05 → D07 → D08 → D05 → T01 → T02 → D05 → U01 → U02 → U04 → U05 → U06 → P01 → P03 → P05 → P06 → P07 → P08 → F01 → F03 → E11`.

**best with wrong-fork recovery** — `D01 → D03 → D04 → D06 → D05 → D07 → D08 → D05 → U01 → U02 → U03 → U02 → U04 → U05 → U06 → P01 → P03 → P05 → P06 → P07 → P08 → F01 → F03 → E11`.

**ordinary good, solo** — `D01 → D03 → D04 → D06 → D05 → U01 → U02 → U04 → U05 → U06 → P01 → P03 → P05 → P06 → P07 → P08 → F01 → F03 → E10`.

Best routes choose flats support at D04, the launcher at D06, the launcher crossing at U04, Sloth teamwork at U05, concealed light at P03, shared escape at P05, and the timed signal at P06. The library route settles at the known door; routes without its map search for the door. The ordinary solo route chooses station support, travels light, uses the handrail and unaided catch, and slips into the ice house without signaling.

### Return to Sender

**clean best, solo** — `R01 → R02 → R03 → R04 → R05 → R04 → S01 → H01 → H02 → H03 → C01 → C02 → C03 → C11 → C04 → C06 → C07 → C08 → C09 → C10 → E11`.

**clean best, team** — `R01 → R02 → R03 → R04 → R05 → R04 → F01 → F04 → F05 → F06 → C01 → C02 → C03 → C11 → C04 → C06 → C07 → C08 → C09 → C10 → E11`.

**best with wrong-tube recovery** — `R01 → R02 → R03 → R04 → R05 → R04 → S01 → H01 → H02 → H03 → C01 → C02 → C03 → C11 → C04 → C05 → C04 → C06 → C07 → C08 → C09 → C10 → E11`.

**ordinary good, commissioned handover** — `R01 → R02 → R03 → R04 → F01 → E02`.

**ordinary good, solo original delivery** — `R01 → R02 → R03 → R04 → R05 → R04 → S01 → H01 → H02 → H03 → C01 → C02 → C03 → C11 → C04 → C06 → C07 → E10`.

Solo routes steady the mechanism personally at C02 (source choice index 0); the team route uses the team (source index 1). All listed full-delivery routes check the roll at C03. The recovery route chooses the return circuit at C04 once, then the receiving circuit.

## Baseline checks

`npm run check` passed TypeScript, story registration/theme checks, and exhaustive structural checks across all three difficulties. All 49 tests in `npm run test:story` passed.

| Story | Actual pages | Endings reachable | All-difficulty page/state combinations | All-difficulty distinct paths |
|---|---:|---:|---:|---:|
| The Stopped Clocks | 51 | 11/11 | 229,811 | 88,647 |
| The Fratelli Run | 45 | 11/11 | 1,238,524 | 3,060,588 |
| Return to Sender | 46 | 10/10 | 71,110 | 417,419 |

These checks establish the implemented structural baseline. The checker’s “every path is coherent” message does not establish literary coherence, fair clueing, reader enjoyment, canon compatibility or publication readiness. Those require editorial judgment and, ultimately, reader testing.

The baseline README quoted older page/ending counts for some packs. The implementation refreshes that catalogue copy from the actual story source, without adding or deleting scenes.

## Revision 3 comparison

The same named Medium itineraries were rendered again after revision, using the same engine and word-count rules. The Goonies signal and waiting choices use their revised labels. The new inspection-plan shortcut and additional recoverable signal routes are included in the exhaustive ranges, but were not substituted into the representative routes: this keeps the before/after comparison like for like.

| Story / route | Prose before → after | Choice words after | Visits | Prose change | Illustrative text-only minutes after |
|---|---:|---:|---:|---:|---:|
| The Stopped Clocks — clean best | 4,771 → 4,660 | 283 | 25 | -111 | 19.8–24.7 |
| The Stopped Clocks — ordinary good, escape after investigation | 4,629 → 4,452 | 279 | 24 | -177 | 18.9–23.7 |
| The Stopped Clocks — wheel recovery, best | 5,009 → 4,918 | 306 | 27 | -91 | 20.9–26.1 |
| The Fratelli Run — clean best | 4,289 → 4,195 | 435 | 22 | -94 | 18.5–23.1 |
| The Fratelli Run — best with library | 4,983 → 4,749 | 514 | 25 | -234 | 21.1–26.3 |
| The Fratelli Run — best with wrong-fork recovery | 4,547 → 4,441 | 444 | 24 | -106 | 19.5–24.4 |
| The Fratelli Run — ordinary good, solo | 3,070 → 3,137 | 303 | 19 | +67 | 13.8–17.2 |
| Return to Sender — clean best, solo | 3,683 → 3,910 | 263 | 21 | +227 | 16.7–20.9 |
| Return to Sender — clean best, team | 3,956 → 4,275 | 313 | 21 | +319 | 18.4–22.9 |
| Return to Sender — best with wrong-tube recovery | 3,955 → 4,182 | 279 | 23 | +227 | 17.8–22.3 |
| Return to Sender — ordinary good, commissioned handover | 1,244 → 1,363 | 97 | 6 | +119 | 5.8–7.3 |
| Return to Sender — ordinary good, solo original delivery | 3,097 → 3,231 | 245 | 18 | +134 | 13.9–17.4 |

Shortening every route was not the objective. Stopped Clocks reaches its first era change sooner; Fratelli removes repeated hub setup. Return to Sender invests additional words in the universally available reserve clue, an identifiable captive and visible character action. Its clean routes remain shorter than the Stopped Clocks investigation, but its longer exploratory routes still need actual reader timing before any blanket 15–25-minute claim.

### Revised exhaustive Medium best-ending ranges

| Story | Page visits | Prose words | Reachable Medium states |
|---|---:|---:|---:|
| The Stopped Clocks | 25–33 | 4,660–5,690 | 82,417 |
| The Fratelli Run | 22–29 | 4,136–5,699 | 362,199 |
| Return to Sender | 20–33 | 3,700–6,193 | 29,270 |

The extra maximum visits in Fratelli and Return to Sender reflect reachable recovery/access combinations. Minimum and maximum lengths remain independent extrema, not completion-time predictions. No count here represents human success probability.

Measured source SHA-256 values:

- `stopped-clocks`: `37c35697b97000c6939d8259c4531127bb95eb92140a1f77e9aa16faac898c0c`
- `fratelli-run`: `923fd94457ec1b0fc474a4d293d6f05a00f8082158cb8da9043ed11aaedacc08`
- `return-to-sender`: `1617e206be4e737976647a455e3ad8c84c2567f0d9984491f62ca55e9a5a67d3`
