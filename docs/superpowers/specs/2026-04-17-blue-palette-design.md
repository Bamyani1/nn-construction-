# Blue palette — design spec

_2026-04-17 · status: superseded by amendment below_

## Amendment — Cyanotype Blueprint

_2026-04-18 · v2.2 · current_

The cinematic limestone palette (amendment below) created visual dissonance — warm limestone bg + warm-wood atmospheric pool fought the cool blue accent. Revised to a fully cyanotype direction (deep Prussian on blueprint paper). Token names also renamed to semantic blueprint vocabulary, since the prior `--nn-copper` / `--nn-cedar` / `--nn-bone` / `--nn-black` (which held the warm limestone value) were misleading once values shifted to blue.

| Old token | New token | New value (cyanotype) |
|---|---|---|
| `--nn-black` (page) | `--nn-paper` | `#ECF1F7` blueprint paper |
| `--nn-graphite` (cards) | `--nn-paper-raised` | `#F7FAFC` cool white |
| `--nn-charcoal` (divider) | `--nn-paper-elevated` | `#DDE5EF` slate divider |
| `--nn-bone` (text) | `--nn-ink` | `#0B1A2E` deep ink |
| `--nn-copper` (accent) | `--nn-azure` | `#1E3A5F` Prussian |
| `--nn-copper-deep` (pressed) | `--nn-azure-deep` | `#153050` deep Prussian |
| `--nn-cedar` (hover) | `--nn-azure-lift` | `#2556A8` lifted cyan |
| `--nn-slate` | `--nn-slate` (kept) | `#64748B` slate-500 |
| `--nn-slate-dim` | `--nn-slate-dim` (kept) | `#94A3B8` slate-400 |
| `--nn-hairline-warm` | `--nn-hairline-azure` | `rgba(30, 58, 95, 0.22)` |
| `--bg-3` (input) | `--bg-3` (kept) | `#CFDAE6` pale blueprint |
| `--fg-2` | `--fg-2` (kept) | `#3E4A5F` cool charcoal |
| `--shadow-inset-copper` | `--shadow-inset-azure` | azure hairline |
| `--line-copper`, `--line-cedar` | `--line-azure`, `--line-azure-lift` | follow new accents |

**Atmosphere — re-tinted, not stripped.** The five-layer `body::before` stack (paper grain, dot grid, three radial gradients) and `body::after` edge vignette are retained — only colors shift. Warm `rgba(20, 15, 10, *)` shadows and hairlines move to `rgba(11, 26, 46, *)`. Warm-wood pool `rgba(181, 140, 90, 0.10)` becomes cyanotype flash `rgba(37, 99, 235, 0.10)`. Paper-grain SVG `<feColorMatrix>` shifts to a cool-ink cast (`0.04, 0.06, 0.10`). Dot grid and top-right wash pulled to `rgba(30, 58, 95, *)`. Limestone literals `rgba(245, 242, 237, *)` (used in nav backdrop, hero band/scrub backdrops, modal close, canvas frame gradients) all swept to `rgba(236, 241, 247, *)` (blueprint paper).

**Class renames** for semantic consistency:
- `.nn-rule-copper` → `.nn-rule-azure`
- `.nn-copper-tick` → `.nn-azure-tick`
- `.nn-section-elev` → `.nn-section-raised` (4 component usages updated)
- `.nn-section-charcoal` → `.nn-section-elevated`

**Asset sweep** — `logo.svg`, `logo-mark.svg`, four illustrations (`roof`, `kitchen`, `exterior`, `stairs`), and eight icons (`hammer`, `level`, `pencil`, `saw`, `square`, `tape`, `trowel`, `wrench`) updated: warm gradient stops swept to blueprint paper / cool white / slate divider; `#3B82F6` strokes pulled to `#1E3A5F` (Prussian); `#0F172A` deep ink to `#0B1A2E`; `#60A5FA` highlights to `#2556A8` (azure-lift).

**Bug fix piggybacked.** `.canvas-root` was still set to `#07090b` (leftover from the original dark theme), which rendered the canvas-page header/title text invisible against a dark background. Switched to `var(--bg-2)` so labels read against the new blueprint-elevated surround.

**Contrast (WCAG AAA):** ink `#0B1A2E` on paper `#ECF1F7` ≈ 16.8:1; Prussian accent `#1E3A5F` on paper ≈ 9.4:1.

Tag: `v2.2.0`. Prior cinematic-limestone amendment below retained for lineage.

---

## Amendment — cinematic limestone atmosphere

_2026-04-17 · v2.1.1 · status: superseded by Cyanotype Blueprint above_

The pure slate-50 light theme (amendment below) read as clinical/SaaS — "too clear and lifeless" for a construction company. Revised palette + atmosphere, staying bright:

| Token | Value |
|---|---|
| `--nn-black` (page) | `#F5F2ED` warm limestone |
| `--nn-graphite` (cards) | `#FDFCFA` cool off-white (temp contrast) |
| `--nn-charcoal` (divider) | `#EDE9E2` |
| `--nn-bone` (text) | `#1B1F26` near-black, slight warm |
| `--nn-copper` (accent) | `#2563EB` blue-600 (unchanged) |
| `--nn-slate` | `#6B6B72` warm-neutral |
| `--nn-slate-dim` | `#A3A097` warm-neutral |
| `--fg-2` | `#4C4B50` |
| `--bg-3` (input) | `#E6E1D7` warm |
| hairlines | `rgba(20, 15, 10, *)` instead of `rgba(15, 23, 42, *)` |

**Atmospheric layers (site-wide, `body::before` + `body::after`):**

1. **Paper grain** — SVG `<feTurbulence>` data-URI, 180×180 tile, `mix-blend-mode: multiply` at ~7% effective opacity
2. **Draftsman dot grid** — blue at 4% on 48px spacing, extends the hero's grid site-wide
3. **Gradient meshes** — three radials: morning-blue top-right, warm-copper pool bottom-left, soft bright wash top-center
4. **Edge vignette** — subtle four-corner darkening (6% alpha) on `body::after` z-index 3, above content but below nav (40) and modal (50+)

Shadows re-authored from dark-theme `rgba(0,0,0,0.6)` to layered warm light-theme `rgba(20,15,10,0.05–0.12)`. Illustrations (stairs, kitchen, roof, exterior) had their bg/elevated/mid tones swept to match the new limestone (dark fills + blue accents kept).

Modal overlay stays dark `rgba(15, 23, 42, 0.45)` for contrast against the light page.

Tag: `v2.1.1`. Prior "bright/light theme" amendment below retained for lineage.

---

## Amendment — bright/light theme

Initial direction was "lift the dark base + blue accent" (dark navy + blue). The owner clarified they wanted the site **actually bright** — a full light theme, not a darker-navy. Revised palette:

| Token | Value |
|---|---|
| `--nn-black` (page) | `#F8FAFC` light slate |
| `--nn-graphite` (cards) | `#FFFFFF` white |
| `--nn-charcoal` (divider) | `#F1F5F9` |
| `--nn-bone` (text) | `#0F172A` near-black |
| `--nn-copper` (accent) | `#2563EB` blue-600 |
| `--nn-copper-deep` | `#1D4ED8` blue-700 |
| `--nn-cedar` (hover) | `#3B82F6` blue-500 |
| `--nn-slate` | `#64748B` |
| `--nn-slate-dim` | `#94A3B8` |
| `--fg-2` | `#475569` |
| `--bg-3` (input) | `#E2E8F0` |

Illustrations (stairs, kitchen, roof, exterior) were inverted from dark jobsite scenes to light architectural renders. Icons (stroke `#3B82F6`) unchanged. Modal overlay kept dark-transparent (`rgba(15,23,42,0.45)`) for contrast against the now-light page.

The original dark-navy direction (below) is retained for reference only — it was not shipped.

---

## Original direction (superseded)



## Why

The current design system is dark-graphite + burnished-copper ("jobsite after dark with a flashlight"). The owner wants a **brighter, cooler system**: a lifted dark-navy base with a **bright-blue accent** in place of copper. Keeps the dark-theme mood but reads more modern / less moody.

## Scope

Palette only. No typography, spacing, motion, layout, component, or content changes.

## Palette — current → new

| CSS variable | Current (warm) | New (cool) |
|---|---|---|
| `--nn-black` (page bg) | `#0B0D0F` | `#0B1220` deep navy |
| `--nn-graphite` (cards) | `#151A1E` | `#1E293B` slate |
| `--nn-charcoal` (divider) | `#1F2428` | `#273449` |
| `--nn-bone` (primary text) | `#E8DFD2` | `#E2E8F0` cool bone |
| `--nn-copper` (accent) | `#C97B3F` | `#3B82F6` bright blue |
| `--nn-copper-deep` (pressed) | `#A8622E` | `#2563EB` deeper blue |
| `--nn-cedar` (hover/rule) | `#8A6642` | `#60A5FA` lifted blue |
| `--nn-slate` (meta) | `#6D7378` | `#64748B` |
| `--nn-slate-dim` (quiet UI) | `#4A4F53` | `#475569` |
| `--nn-hairline-warm` | `rgba(201,123,63,.18)` | `rgba(59,130,246,.18)` |
| `--fg-2` (secondary text) | `#B7AFA3` | `#CBD5E1` |
| `--bg-3` (input surface) | `#262C31` | `#2E3B52` |

Naming: tokens stay `--nn-copper` / `--nn-cedar` even though values are now blue. Rationale: internal name, never surfaced to users; renaming would touch every component for zero visual benefit.

## Files to change

1. **`app/globals.css`** — rewrite the `:root { }` block at the top (palette swatches, semantic fg/bg/line tokens). All downstream styles use these vars and update automatically.
2. **`components/hero-draftsman.tsx`** — SVG has hardcoded `#C97B3F` (draftsman measurement marks, fill + stroke) and `#0B0D0F` (label background fills). Replace with `#3B82F6` and `#0B1220`.

No other files touch raw hex.

## What stays the same

- Every component class (`nn-btn-primary`, `nn-chapter`, `nn-stat-num`, `nn-pillar-n`, etc.) that references accent via `var(--nn-copper)` — unchanged.
- The `nn-copper-tick` class, `nn-hairline-warm`, `nn-copper-deep` variable chain — unchanged.
- Typography (Space Grotesk + JetBrains Mono), spatial tokens, motion, shadows.

## Verification

- `npm run build` passes with no TS or lint errors.
- Dev server: visit every route (`/`, `/about`, `/services/interior`, `/services/exterior`, `/portfolio`, `/testimonials`, `/faq`, `/contact`, `/canvas`). Accent hits should read blue (buttons, chapter-mark borders, eyebrows, stat numbers' underlines, pillar numerals, pull-quote captions, service-card "featured" accent, form field labels, nav-link hover underline, footer copper-links).
- Hero home page (`/`) — draftsman measurement SVG lines and `1240 mm` / `900 mm` / `A · 01` / `EL. +0'-0"` / `SCALE 1:50` labels render in blue (not copper). Label backgrounds match the new page background.

## Rollout

One feature branch `feat/blue-palette` → PR → merge. Tag `v2.1.0` once merged.
