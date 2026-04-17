import type { Metadata } from "next";
import { CanvasTile } from "@/components/canvas-tile";

export const metadata: Metadata = {
  title: "Canvas · NN Construction",
  description: "All eight marketing pages at once, scaled into one view.",
};

const pages = [
  {
    n: "01",
    label: "Home",
    note: "Draftsman hero · four pillars · editorial rhythm",
    href: "/",
  },
  {
    n: "02",
    label: "About",
    note: "Principles · founder note · six-person crew · licensure",
    href: "/about",
  },
  {
    n: "03",
    label: "Services · Interior",
    note: "Four interior services · four-step process",
    href: "/services/interior",
  },
  {
    n: "04",
    label: "Services · Exterior",
    note: "Four exterior services · roofing feature · spec sheet",
    href: "/services/exterior",
  },
  {
    n: "05",
    label: "Portfolio",
    note: "Six recent projects · category filter · modal detail",
    href: "/portfolio",
  },
  {
    n: "06",
    label: "Testimonials",
    note: "Four attributed quotes · editorial numbering",
    href: "/testimonials",
  },
  {
    n: "07",
    label: "FAQ",
    note: "Six answered questions · accordion",
    href: "/faq",
  },
  {
    n: "08",
    label: "Contact",
    note: "Form + aside · office · service area · licensure · hours",
    href: "/contact",
  },
];

export default function CanvasPage() {
  return (
    <div className="canvas-root">
      <header className="canvas-header">
        <div>
          <div className="nn-eyebrow" style={{ marginBottom: 16 }}>
            Marketing site · 8 pages
          </div>
          <h1 className="canvas-title">
            NN Construction — hero to footer, all at once.
          </h1>
          <p className="canvas-sub">
            Each tile is the full page rendered live, scaled into a 4:5 cell
            so the editorial rhythm — hero, pillars, chapter marks, CTA band,
            footer — reads across the set. Click any tile to open it
            full-size.
          </p>
        </div>
        <div className="canvas-meta">
          Canvas 01
          <br />
          Rev A · Apr 2026
        </div>
      </header>

      <div className="canvas-grid">
        {pages.map((p) => (
          <CanvasTile key={p.href} {...p} />
        ))}
      </div>
    </div>
  );
}
