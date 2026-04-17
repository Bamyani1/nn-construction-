# Blue palette — design spec

_2026-04-17 · status: superseded by amendment below_

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
