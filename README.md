# NN Construction — Marketing Site

> Your dream, our hardwork.

Marketing site for **NN Construction BD Corporation** — full-service residential and commercial construction in Silver Spring, MD, with roofing as a proven specialty. Dark graphite + burnished copper; a finished jobsite after dark with a flashlight.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- **next/font** — Space Grotesk + JetBrains Mono, self-hosted
- Design tokens + page styles in `app/globals.css` (no Tailwind, no CSS-in-JS overhead)
- Fully static — 8 prerendered routes, ~106 kB First Load JS

## Routes

| Path                    | What                                                     |
|-------------------------|----------------------------------------------------------|
| `/`                     | Home — draftsman hero, pillars, stats, services preview  |
| `/about`                | Principles, founder's note, crew, licensure              |
| `/services/interior`    | 4 interior disciplines + project process                 |
| `/services/exterior`    | 4 exterior disciplines + roofing specialty spec sheet    |
| `/portfolio`            | Filterable project grid (All / Roofing / Interior / Exterior) with detail modal |
| `/testimonials`         | Attributed client quotes                                 |
| `/faq`                  | Accordion                                                |
| `/contact`              | Estimate form + office / service area / hours            |
| `/canvas`               | Design canvas — all 8 pages scaled into one view         |

## Structure

```
app/
  layout.tsx            Root layout — next/font, nav, footer
  globals.css           Design tokens + page styles
  page.tsx              Home
  about/page.tsx
  services/
    interior/page.tsx
    exterior/page.tsx
  portfolio/page.tsx
  testimonials/page.tsx
  faq/page.tsx
  contact/page.tsx
  canvas/page.tsx
components/             Nav, Footer, HeroDraftsman, PortfolioBrowser, FaqAccordion, ContactForm, CanvasTile, ServicesTabs
lib/data.ts             Content (services, team, projects, testimonials, FAQs) with TS types
public/assets/          Logo · 8 tool icons · 4 illustration SVGs
```

## Develop

```bash
npm install
npm run dev       # next dev — http://localhost:3000
npm run build     # production build
npm run start     # serve the built output
npm run lint      # next lint
```

## History

- **v1.0.0** — Static HTML/CSS/JS handoff from Claude Design (tag preserved)
- **v2.0.0** — Full migration to Next.js App Router

## Credits

Visual design mocked in [Claude Design](https://claude.ai/design). Implementation by the repo owner.
