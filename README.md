# NN Construction — Marketing Site

> Your dream, our hardwork.

Marketing site for **NN Construction** — full-service residential construction
in the DC metro (Silver Spring, MD), with roofing as a proven specialty.
Cyanotype blueprint palette; a construction-company voice, not an architect's.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript 5**
- **`next/font`** — Space Grotesk + JetBrains Mono (400 + 500 weights only)
- **`next/image`** — AVIF/WebP format negotiation, responsive `srcset`, lazy loading
- Design tokens + page styles in `app/globals.css` (no Tailwind, no CSS-in-JS)
- Fully static — every route prerenders as `○ (Static)`

## Routes

| Path | What |
|---|---|
| `/` | Hero split · four pillars · stats · services preview · portfolio preview · testimonial |
| `/about` | Principles, founder's note, crew, licensure |
| `/services/interior` | Interior disciplines + project process |
| `/services/exterior` | Exterior disciplines + roofing specialty spec sheet |
| `/portfolio` | Filterable project grid (All / Roofing / Interior / Exterior) with hero + gallery modal |
| `/testimonials` | Attributed client quotes |
| `/faq` | Accordion |
| `/contact` | Estimate form (front-end only — see *Known deferrals*) |
| `/canvas` | Design canvas — all pages scaled into one view (noindex) |

Plus `/sitemap.xml`, `/robots.txt`, `/opengraph-image.jpg`, `/icon.svg`.

## Repository layout

```
app/
  layout.tsx               — root shell, metadata, viewport
  page.tsx                 — home
  icon.svg                 — favicon
  opengraph-image.jpg      — social preview
  sitemap.ts / robots.ts   — generated /sitemap.xml + /robots.txt
  not-found.tsx            — 404
  error.tsx                — client error boundary
  globals.css              — all design tokens + page styles + responsive breakpoints
components/                — Nav, NavLinks, Footer, HeroSplit, PortfolioBrowser, FaqAccordion, ContactForm, CanvasTile, ServicesTabs
lib/data.ts                — typed content (projects, testimonials, team, stats, faqs)
public/assets/
  logo(-mark).svg          — brand marks
  projects/<slug>/NN.webp  — real project photos (1600 px max, q80)
  img/tools-pattern.svg    — decorative background pattern
scripts/compress-images.mjs — HEIC → WebP pipeline
NN-pictures/               — raw HEIC sources (gitignored, local only)
docs/                      — design specs and historical notes
```

## Content model

`lib/data.ts` holds the typed data every page consumes. The key types:

```ts
Project     = { slug, name, cat, images[], brief }
Testimonial = { quote, name, role, loc, project }   // project ↔ Project["name"] union
TeamMember  = { name, role, tenure }
Faq         = { q, a }
```

Swapping a photo, renaming a project, or adding a testimonial is a one-file
change.

## Develop

```bash
npm install
npm run dev           # http://localhost:3000
npm run build         # production build
npm run start         # serve production build
npm run lint          # next lint
npm run images        # regenerate /public/assets/projects/** from /NN-pictures/**
```

## Image pipeline

`npm run images` converts raw iPhone HEICs in `NN-pictures/<folder>/*.HEIC`
to WebP under `public/assets/projects/<slug>/NN.webp`:

1. `sips` decodes HEIC → intermediate full-res JPEG.
2. `sharp` applies EXIF rotation, resizes to 1600 px max edge, writes WebP q80.
3. Each slug folder is written to a tmp directory first and renamed atomically
   on success, so a mid-run failure never leaves production pointing at an
   empty folder.

The folder → slug mapping and hero-first file ordering is hard-coded in
`scripts/compress-images.mjs`.

## Known deferrals

- **Contact form has no backend.** `components/contact-form.tsx` only flips
  local state on submit. Copy tells the user "we've received your request"
  without promising an email. Real submission (Resend + route handler) is a
  planned follow-up — see the `TODO(phase-5)` comment in `handleSubmit`.
- **Nav has no mobile drawer.** On viewports ≤640 px the brand and link strip
  stack vertically with links wrapping. It works but isn't a polished
  hamburger pattern.
- **Per-page OpenGraph overrides** are not set — every page inherits the root
  `openGraph` block. Once a live domain is attached, consider adding per-page
  OG images (esp. `/portfolio`).

## History

- **v1.0.0** — Static HTML/CSS/JS handoff from Claude Design (tag preserved)
- **v2.0.0** — Full migration to Next.js 15 App Router
- **v2.1.0** (in progress) — Real project photos, gallery modal, accessibility
  pass, performance pass, mobile responsive, production readiness
