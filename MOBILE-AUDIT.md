# Mobile Audit — Phase 1

Branch: `mobile-view`. Dev server probed at `http://localhost:3001` (port 3000 already in use by a persistent dev server on the same tree).

Walked: `/`, `/about`, `/contact`, `/portfolio`, `/testimonials`, `/faq`, `/services/interior`, `/services/exterior`, `/canvas` via Chrome DevTools MCP at mobile emulation (primary breakpoint 375×812, DPR 2, touch). No console errors or warnings on any route.

## Baseline Lighthouse (mobile, device=mobile)

> The `lighthouse_audit` MCP tool does not report Performance. Performance will be measured via `performance_start_trace` in Phase 3 delta.

| Route                  | A11y | Best Practices | SEO |
|------------------------|-----:|---------------:|----:|
| `/`                    |   98 |            100 |  92 |
| `/services/interior`   |   94 |            100 |  92 |

Repeated failing audits:
- `meta-description` — missing on route-level metadata (every page inherits layout meta but does not set a route-specific `description`). SEO.
- `heading-order` — sequential-descending order violated on `/` and `/services/interior`. A11y.
- `color-contrast` — on `/services/interior`. A11y. Specific element TBD in Phase 2 via DevTools elements panel.

---

## [Critical] Horizontal overflow — `.nn-page-title` h1 does not wrap

Every page that uses the `.nn-page-head` hero has a long h1 (`.nn-page-title`) whose computed width exceeds the `.nn-container` at 375px. Because the h1 overflows its parent, the document's `scrollWidth` exceeds its `clientWidth` → the whole page scrolls horizontally on mobile.

Measured at 375px:

| Route                | h1 scrollWidth | container cw | page overflow |
|----------------------|---------------:|-------------:|--------------:|
| `/about`             |            403 |          335 |        49 px  |
| `/faq`               |            410 |          335 |        55 px  |
| `/services/interior` |            387 |          335 |        32 px  |

Root cause: `.nn-page-title` uses an oversized display token (`--fs-display` / `--fs-h1`) at mobile with no `overflow-wrap: anywhere` / `word-break: break-word`, and some copy contains comma-joined tokens without spaces (e.g., `Questions,answered plainly.` on `/faq`) that the browser treats as one unbreakable word. Separately, at 375px the raw font-size for `--fs-display` is still desktop-grade.

Proposed fix: add `overflow-wrap: break-word` (or `anywhere`) on `.nn-page-title`, and/or introduce a `clamp()` tier that shrinks `--fs-display` / `--fs-h1` at <480. Also: fix the `Questions,answered plainly.` string in `lib/data.ts` (missing space after the comma — a copy bug).

## [Critical] Horizontal overflow — `.nn-spec-cell` on services pages

`/services/exterior` shows 149 px of horizontal overflow at 375px. Culprit:

```
DIV.nn-spec-cell    left=355  right=524  width=169
DIV.nn-spec-label   left=387  right=492  width=105
DIV.nn-spec-val     left=387  right=492  width=105
```

The spec grid is a multi-column layout that doesn't collapse to a single column on mobile. `/services/interior` shows 32 px of similar overflow. Proposed fix: mobile rule that collapses `.nn-spec-cell` grid columns to 1 (or 2) at `<= 640`, or makes the spec container horizontally scrollable in its own overflow zone so the page body does not scroll.

## [Critical] No hamburger — nav wraps inline at <768

Confirmed at 375: inline `NavLinks` are rendered as 18 px-tall anchors with no breathing room (sample widths 42–81 px; all below 44×44). Design-decision already resolved: build `components/mobile-nav.tsx` drawer with focus trap, scroll lock, ESC + backdrop close, animated hamburger-to-X, staggered link reveal. Hide inline `NavLinks` at `(max-width: 767px)`; show hamburger instead. Keep "Get a quote" CTA visible at all widths. Visual style to be chosen in Phase 2 via `frontend-design:frontend-design` (right-slide panel vs top-sheet vs full-screen overlay).

## [Critical] `vh` leaks — iOS address-bar clip risk (7 sites)

Confirmed by static read of `app/globals.css`:

| Site | Current | Target | Rationale |
|------|---------|--------|-----------|
| `body { min-height }` (`:117`) | `100vh` | `100dvh` | body never clips; match current viewport |
| `.nn-hero-split { height }` (`:676`) | `92vh` | `92svh` | hero must be fully visible at first paint, no resize jump when bar collapses |
| `.nn-hero-split-left { min-height }` (`:848`) | `60vh` | `60dvh` | stacked content block |
| `.nn-hero-split-right { min-height }` (`:852`) | `70vh` | `70dvh` | stacked content block |
| `.canvas-root { min-height }` (`:1496`) | `100vh` | `100dvh` | stable full-page canvas |
| `.nn-modal-inner { max-height }` (`:1591`) | `92vh` | `92dvh` | stay within currently visible viewport |
| `animation-range` (`:928`) | `0 100vh` | `0 100lvh` | stable parallax range; largest viewport avoids drift |

## [Critical] `viewport` export missing `viewportFit: "cover"`

`app/layout.tsx:16` exports `viewport = { width: "device-width", initialScale: 1, themeColor: "#ECF1F7" }`. Add `viewportFit: "cover"`. Without it, `env(safe-area-inset-*)` resolves to 0 on notched devices — the drawer, modal close button, and any sticky-to-edge UI will be clipped by the notch / home indicator. Do NOT add `userScalable: false` (a11y violation). Verified via built HTML: `<meta name="viewport" content="width=device-width, initial-scale=1">` — no `viewport-fit=cover`.

## [Critical] No `<480` breakpoint tier

Globals ladder is `1280 / 1024 / 768 / 640`. Widths 320–430 inherit 640-tier rules verbatim. Introduce `@media (max-width: 480px)` only for rules that legitimately need smaller treatment there (reduced gutters, reduced display font-sizes, tighter section gap).

---

## [Major] Touch targets under 44×44

Measured at 375px on `/`:
- `.nn-nav-link` — 18 px tall (Home 42×18, Services 71×18, Portfolio 81×18, About 49×18, Contact 67×18). Becomes moot once drawer hides these at <768; still tight at 768–1024.
- `.nn-brand` — 335×32 (32 px tall; logo/brand tap).
- `.nn-tab` (portfolio filter tabs) — 37 px tall ("All", "Roofing", "Interior", "Exterior"). Needs +7 px vertical padding at ≤640.
- `.nn-faq-row` — 57 px tall but it's a `<div>` with no `role`, no `onclick`, no `tabindex`. Either the click handler lives on an inner element not sampled, or FAQ accordion rows are not keyboard-accessible. **Verify in Phase 2 that `.nn-faq-row` is an actual button** — if it is a `<div>` click handler, that's an a11y bug (not keyboard-operable, no role). Headers themselves (`.nn-faq-q` span) are 29 px tall.
- Modal thumbs at 640 are 64×48 (meets 44×44, gap ≥ 8 px) per `globals.css:1708`. OK; verify only visual cramping at 320–430.

Proposed fix: add padding to the elements themselves (not wrappers) to expand hit areas without changing visual weight. Drawer will absorb nav-link concern at <768.

## [Major] Contact form missing `autoComplete` + `inputMode`

Verified against live DOM on `/contact` and `components/contact-form.tsx`:

```
cf-name     autoComplete=null  inputMode=null   (should be "name")
cf-email    autoComplete=null  inputMode=null   (should be "email" + inputMode="email")
cf-phone    autoComplete=null  inputMode=null   (should be "tel"   + inputMode="tel")
cf-service  autoComplete=null  inputMode=null   (should be "off")
cf-notes    autoComplete=null  inputMode=null   (should be "off")
```

All inputs are already 16 px font-size (iOS zoom on focus already prevented). Labels already sit above inputs. Structural changes unnecessary.

## [Major] `next/image fill` without `aspect-ratio` — CLS risk

Project already uses `aspect-ratio` in 5 places (`globals.css:1103, 1477, 1528, 1632, 1713`). Sweep `components/hero-split.tsx`, `components/portfolio-preview.tsx`, `components/portfolio-browser.tsx`, `components/editorial.tsx`, `components/services-preview.tsx` for `fill={true}` parents missing `aspect-ratio`. Fix case-by-case.

## [Major] `<meta name="description">` missing on routes

Lighthouse SEO reports missing meta-description on `/` and `/services/interior`. Root layout sets a `description`, but route-level `metadata.description` appears unset on some routes so the layout default is expected to inherit — verify in Phase 2 whether Next is stripping it or the site-wide default actually applies. Likely a per-route `metadata` export that overrides `title` but omits `description`.

## [Major] `heading-order` violation

Both `/` and `/services/interior` fail `heading-order`. Typical cause: an `h3` appearing before an `h2`, or an `h2` whose parent skipped from `h1` directly. Identify the offending headings in Phase 2 using Lighthouse's element trace.

---

## [Polish] No `clamp()` fluid type

Display-tier headings (`--fs-display`, `--fs-h1`, `--fs-h2`) step hard at each breakpoint. Wrap in `clamp(min, vw-linear, max)` so mobile→desktop transitions smoothly and the `<480` tier doesn't need a fourth override.

## [Polish] `content-visibility: auto` unused off-screen

Safe candidates: portfolio rows, testimonials list, team grid, FAQ accordion. Never hero / first-fold. Add `content-visibility: auto; contain-intrinsic-size: <estimate>`.

## [Polish] Playfair Display weight loadout

`app/layout.tsx` loads Playfair Display weights `400, 500, 600` + italic. Confirm above-the-fold actually uses 600 and italic. If not, trim the weights array.

## [Polish] Reveal stagger at <480

Reveal stagger duration is the same on phones as on desktop. Consider shortening transition delay (or shrinking `animation-range` for the Chrome path) at `<480` for a snappier phone feel.

## [Polish] `Questions,answered plainly.` — copy bug

`/faq` page title is `Questions,answered plainly.` (no space after comma). Fix in `lib/data.ts`. Adjacent to the Critical overflow fix; include as part of that commit.

---

## Routes walked (summary)

| Route                 | overflow @ 375 | notes |
|-----------------------|---------------:|-------|
| `/`                   |             0 | 21 sub-44 touch targets (nav absorbed by drawer) |
| `/about`              |           49 | `.nn-page-title` h1 |
| `/contact`            |             0 | form missing autocomplete/inputmode |
| `/portfolio`          |             0 | `.nn-tab` 37 px tall |
| `/testimonials`       |             0 | clean |
| `/faq`                |           55 | `.nn-page-title` h1 + copy bug |
| `/services/interior`  |           32 | `.nn-page-title` h1 |
| `/services/exterior`  |          149 | `.nn-spec-cell` grid |
| `/canvas`             |             0 | clean |

## Counts by severity

- Critical: 5
- Major: 5
- Polish: 5

## Design decisions needed before Phase 2

1. **Drawer visual style.** Right-slide panel, top-slide sheet, or full-screen overlay? Phase 2 will route this through `frontend-design:frontend-design` with 2–3 mockups before coding.
2. **`.nn-spec-cell` on services pages.** Collapse to single column at mobile, or make the specs row horizontally scrollable inside its own container? Single-column reads better but doubles section height.
3. **Page-title overflow fix.** Prefer `overflow-wrap: break-word` (safe but may break a word across lines), or pure typographic shrink via `clamp()` (no word breaks but loses desktop punch at mobile)? Recommend `clamp()` + `text-wrap: balance` primary, `overflow-wrap` as a safety net.

Awaiting confirmation / additions before Phase 2.
