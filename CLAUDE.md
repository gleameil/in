# CLAUDE.md — `/in/`

This file orients an AI assistant (or future developer) to the `/in/` codebase. Read this before touching anything. Fuller documentation lives in the `docs/` folder: `doc-time.md`, `doc-home.md`, `doc-shared.md`, `doc-dark-room.md`, `doc-computer.md`, `doc-books.md`, `doc-reader-january.md`, `doc-reader-february.md`, `doc-garbage.md`, `doc-browser.md`, `doc-clock-and-calendar.md`, `doc-mirror.md`.

---

## What This Is

`/in/` is one half of *Out of Tales* — a browser-based net art piece / interactive book by Meg Moseman. It is a point-and-click environment: the player inhabits Jennie's bedroom and explores from there. Its sister repo `/out/` renders what's visible through the window.

**January** (complete): a minimalist black-and-white bedroom. Six clickable objects lead to books, a laptop, a dark room story, garbage/sketchbook pages, the window (→ `/out/`), and the intro note.

**February** (in active development): a cozy child's bedroom in 3D CSS perspective. Different objects, warmer palette, holiday-specific content, a "hell" variant on Valentine's Day. The mirror is the first thing a new February player sees — it runs the onboarding dialogue that sets the foresight mode. As February grows, the mirror will offer different conversations keyed to specific days.

The experience runs entirely in the browser. No framework — vanilla TypeScript, bundled with Parcel. No backend — all state lives in `localStorage` and `window`.

Live at: `https://gleameil.github.io/in`
Sister repo: `https://gleameil.github.io/out`

---

## The World

A few things you must not get wrong:

**Jennie** (with an *-ie*) is the main character — small, scarcely real, the player's host. Her room is the January home base.

**Jenny** (with a *-y*) is the narrator — the author herself, intrusive and philosophical. One letter apart, two distinct beings. Do not blur this distinction.

**Evernost** is everything outside the Kingdom — where the window looks out. Malleable in time, vast.

**Evernostian time** is the in-world clock. It is a `Date` object using real 2024 calendar dates as substrate: January 2024 = the January experience, February 2024 = the February experience. Time is strange here by design.

---

## Architecture in One Page

```
index.ts
  └── comeIn()
        ├── handleQueryParams()     reads ?time= and ?canPlay= from URL
        ├── startTime()             starts the January clock; sets favicon
        └── enterFebruary()
              ├── getLimitOfFebruaryForesight() === null → februaryOpening()
              │     └── makeFirstMirror(0, comeHome)   first-run onboarding dialogue;
              │                                        sets foresight key, then comeHome()
              └── otherwise → comeHome()

comeHome()                          the central hub; dispatches by month
  ├── month() === 0 → homeJanuary(comeHome)
  └── month() === 1 → homeFebruary(comeHome)

Every place:
  - receives comeHome as a callback parameter (never imports it directly)
  - calls leaveHome() / removeByClassName('home') before rendering
  - calls comeHome() to return
```

### The `comeHome` callback pattern
Place modules must **not** import `comeHome` directly from `home.ts` — this creates a circular dependency. Instead, every place function receives `comeHome` as a parameter and passes it along to sub-places. `homeJanuary` currently violates this (see known debt).

### State
- **`localStorage`**: `evernostianNow` (timestamp), `limitOfFebruaryForesight` (foresight key), `*-background-choice-february` (wall/bedspread color choices per element), `jennies-room-bg` (player-chosen photo background), `darkRoomPath` (maze progress), `showRainbow` (February book unlock flag)
- **`window`**: `clock` (interval ID), `canPlayAudio` (boolean), `lampIsOn` (boolean), `isHell` (boolean)
- Several `window` values that should eventually move to `localStorage`: `isHell` (resets on reload — known debt), `lampIsOn` (resets on reload — probably acceptable default behavior).
- No backend. No user accounts. This will likely change someday.

---

## Time System

Time is the backbone of everything. Read `doc-time.md` for the full picture. Key facts:

- Evernostian time lives in `localStorage` as a numeric timestamp (`'evernostianNow'`)
- Valid range: Jan 1 – Feb 29, 2024 (the two fictional months)
- January: ticks forward 1 real minute = 1 in-game minute via `setInterval` on `window.clock`
- February: currently static; designed to eventually advance via goal completion
- Eight named time-of-day slots in January (wee hours → night), driven by `JANUARY_SCHEDULE`
- `JANUARY_SCHEDULE` exists in **both repos** and must be kept in sync manually — it drives weather content in `/out/` and weather forecasts in `/in/`'s laptop
- February foresight: three-state localStorage key (`null` = hasn't chosen, numeric timestamp = game mode, `'limitless'` = explore mode)
- `getTime()` defaults to `BEGINNING_OF_FEBRUARY` when localStorage is empty — intentional design (current-development-month-first) but February content is not yet substantial enough to justify it; resetting to January default is a near-term priority

---

## Two-Repo Contract

`/in/` and `/out/` are separate repos that communicate via URL query parameters:

| Parameter | Direction | Meaning |
|-----------|-----------|---------|
| `time` | `/in/` → `/out/` | Current Evernostian timestamp |
| `canPlay` | `/in/` → `/out/` | Whether audio is enabled |

`urlForOutNow()` in `shared/helpers.ts` constructs this URL. The base URL (`OUT` in `places/home/constants.ts`) has a localhost version commented out directly below it — **this has been accidentally shipped uncommented before**. An environment variable is the right fix.

Any change to these parameter names must be coordinated across both repos simultaneously.

Both repos are hosted under `gleameil.github.io` so they share an origin and `localStorage` would theoretically work — but this is not guaranteed to be permanent, and query params are the safer, more explicit contract.

---

## Design System

Colors, assets, and fonts live in `shared/color.ts` and `shared/shared.constants.ts`.

**Two color approaches coexist** — migration in progress:
- Old (still load-bearing): `JANUARY_COLORS`, `FEBRUARY_COLORS`, `OUT_COLORS` — plain objects of `rgb(...)` strings
- New: `Color` class with `fromString`, `makeTransparent`, `isEqualTo`; `JANUARY_COLOR_SET` etc. as pre-parsed versions

Prefer `Color` instances for any logic involving comparison or manipulation. Raw string constants are still needed where CSS strings are required directly.

**`FEBRUARY_COLORS.white` is parchment, not white.** `FEBRUARY_COLORS.black` is warm dark brown. This is intentional.

**Fonts in use:** IM Fell English, Indie Flower, Montserrat, EB Garamond, Rock Salt, Reenie Beanie, Nanum Brush Script, Petit Formal Script (all Google Fonts, defined in `FONTS` — note: Petit Formal Script is used in February books and the clock-and-calendar but may not yet be listed in `FONTS`).

**Assets** are Parcel-resolved `URL` objects. When setting `src` on an `<img>` or `<audio>` element, use the `ImageURLSrc` / `AudioURLSrc` cast pattern — standard DOM types expect strings, Parcel gives you URLs.

---

## Conventions

**File naming:** place files are named `home.ts`, `home.january.ts`, `home.february.ts`, etc. `home.ts` at the place root is the dispatcher; month-specific files are in subdirectories. *(Note: `home-january/home.ts` should be renamed `home.january.ts` — pending refactor.)*

**Models in constants files:** interfaces and types live alongside constants in `*.constants.ts` files. This is deliberate. When looking for a type, check the constants file for the relevant place or month.

**The February dialogue pattern:** interactive February sequences (mirror conversations, and likely future day-specific interactions) use a state-machine model defined in constants: a `MirrorInteractionSequence` (or equivalent) maps string IDs to either `Speech` nodes (linear, one speaker, one `nextId`) or `Choice` nodes (branching, multiple options). `effectIds` are exit sentinels — IDs that trigger side effects and leave the dialogue rather than continuing it. See `doc-mirror.md` and `mirror.february.constants.ts` for the reference implementation.

**`ImagePathAndAltText.imageLeft`** is used both for the January reader's flanking hover-images and as a generic preload slot elsewhere. The name is misleading in the latter context.

**`leaveHome(musicToo: boolean)`** is the standard cleanup before navigating away. Pass `false` to let music continue across navigation (e.g. to garbage, clock-and-calendar).

**`removeByClassName(className)`** is the DOM cleanup primitive. Every place adds class `'home'` to its elements so they can all be removed at once on departure.

**`createHomewardButton`** always gets id `'homeward'` — only one should exist at a time.

**`sun(parent, rayPrefix, time?, entropy?)`** creates 720 ray divs for the sun visual effect. Used in dark room and one February book. Not a general utility despite living in helpers.

**January books** use `makeParagraphs()` for plain text. **February books** use `fillWithMarkdown()` / `fillWithMarkdownInline()` via `markdown-it-ts`.

**`windowKeyHandlers`** (in `shared/state.ts`) is a registry for keyboard listeners that should not persist across navigation. Use it — stale listeners are a known bug source.

---

## Known Debt (Highlights)

Full debt details are in each doc. The most important ones to know before working:

1. **`homeJanuary` imports `comeHomeAnytime` directly** — circular dependency, violates the callback pattern. Fix: use the `comeHome` parameter it already receives.
2. **`home-january/home.ts` should be renamed `home.january.ts`** — naming collision with dispatcher.
3. **Duplicate `intro.ts`** — one in `home/`, one in `home-january/`. Delete the latter.
4. **`getTime()` defaults to February** — intentional but premature; February needs more content before it's the right default landing month.
5. **`JANUARY_SCHEDULE` exists in both repos** — manual sync required; a divergence causes the laptop weather forecast to lie.
6. **Color migration incomplete** — art frame cycling switches on raw color strings; will break silently if a color value changes.
7. **`LinearGradient` types color stops as `JanuaryColor`** — should be `DesignColor`.
8. **`handleQueryParams()` may leave a trailing `?`** — string replacement approach; `url.search = ''` is cleaner.
9. **Sound control is an emoji** — should be a drawn asset or native browser controls.
10. **`outOfTime()` has no exit** — player who lands in an invalid time is stuck.
11. **`window.isHell` is not persisted** — resets on reload; should move to localStorage.
12. **`isValentinesDay()` should be replaced** by the general holidays system (`FEBRUARY_HOLIDAYS`). It is a one-off hardcode that will need to be generalized when other holidays gate content.
13. **`OUT` URL is a comment-swap gotcha** — localhost URL lives on the adjacent line; has shipped accidentally before. Fix: environment variable.
14. **`stopTime()` call on entering clock-and-calendar** is currently a no-op for February but will have real effects once goal-gated time advancement is implemented. Revisit when February time mechanics are built.

---

## Architecture Futures

These are not current debt but are worth knowing when making decisions:

**A backend will likely be needed.** The localStorage architecture works for single-device use but won't support cross-device continuity, user accounts, or unforgeable February game-mode progress. The time/foresight system is already abstracted around a persistence layer — migration should be tractable when the time comes. Keep localStorage key names consistent.

**February is the active development front.** The design is undecided in several areas: time-of-day slots (perpetually cloudy? lamp-controlled?), `FEBRUARY_SCHEDULE` shape (holiday-based, mode-sensitive), branching stories for *Of the Abandoned* happy endings. Don't build February infrastructure that assumes these questions are settled.

**The mirror will grow into a day-keyed interaction system.** `FEBRUARY_IN_THE_MIRROR` is already structured as `{ [day: number]: MirrorInteraction }`. The first-run interaction is keyed at `0` (atemporal). Future entries will be keyed to specific February days, making the mirror an ongoing conversation partner rather than a passive object on most days. The `sideWallFebruary` room-object path will need to check for a day-keyed interaction before deciding whether to be active or inert.

**The two-repo structure is correct and should stay.** Different deployment cadences, `/out/` is linkable directly, and the query-param contract is cleaner than shared imports. The cost is the manual sync points — keep them documented.
