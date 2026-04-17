# NN Construction — Marketing Site

> Your dream, our hardwork.

The marketing site for **NN Construction BD Corporation** — a full-service residential and commercial construction firm in Silver Spring, MD, with roofing as a proven specialty. Dark graphite + burnished copper; a finished jobsite after dark with a flashlight.

## Stack

Static HTML, CSS, and vanilla JavaScript. No build step. Deployable to any static host.

- **Design tokens** in `css/colors_and_type.css` (palette, type scale, spacing).
- **Page styles** in `css/site.css`.
- **Content** in `js/data.js` — services, team, projects, testimonials, FAQs.
- **Chrome + interactions** in `js/site.js` — nav, footer, FAQ accordion, contact form, portfolio filter, project modal, hero scroll animation.

## Structure

```
├── home.html          Home — draftsman hero, pillars, stats, services, portfolio, CTA
├── about.html         Founder note + principles + team
├── services-interior.html   4 interior disciplines
├── services-exterior.html   4 exterior disciplines (roofing featured)
├── portfolio.html     Filterable project grid
├── testimonials.html  Client quotes
├── faq.html           Accordion
├── contact.html       Estimate request form
├── canvas.html        Design canvas — all pages at once
├── css/   site.css · colors_and_type.css · fonts/
├── js/    data.js · site.js
└── assets/  logo · 8 tool icons · 4 illustrations
```

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/home.html.

## Credits

Visual design mocked in [Claude Design](https://claude.ai/design). Implementation by the repo owner.
