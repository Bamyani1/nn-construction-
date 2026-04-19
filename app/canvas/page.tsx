import type { Metadata } from "next";
import { CanvasTile } from "@/components/canvas-tile";

export const metadata: Metadata = {
  title: "Canvas · NN Construction",
  description: "All eight marketing pages at once, scaled into one view.",
  robots: { index: false, follow: false },
};

const pages = [
  {
    label: "Home",
    note: "Hero · four pillars · editorial rhythm",
    href: "/",
  },
  {
    label: "About",
    note: "Principles · founder note · crew · licensure",
    href: "/about",
  },
  {
    label: "Services · Interior",
    note: "Four interior services · project process",
    href: "/services/interior",
  },
  {
    label: "Services · Exterior",
    note: "Four exterior services · roofing feature · spec sheet",
    href: "/services/exterior",
  },
  {
    label: "Portfolio",
    note: "Six recent projects · category filter · modal detail",
    href: "/portfolio",
  },
  {
    label: "Testimonials",
    note: "Four attributed quotes",
    href: "/testimonials",
  },
  {
    label: "FAQ",
    note: "Six answered questions · accordion",
    href: "/faq",
  },
  {
    label: "Contact",
    note: "Form + office · service area · licensure · hours",
    href: "/contact",
  },
];

export default function CanvasPage() {
  return (
    <div className="canvas-root">
      <header className="canvas-header">
        <div>
          <div className="nn-eyebrow" style={{ marginBottom: 16 }}>
            Marketing site
          </div>
          <h1 className="canvas-title">
            NN Construction — hero to footer, all at once.
          </h1>
          <p className="canvas-sub">
            Each tile is the full page rendered live, scaled into a 4:5 cell.
            Click any tile to open it full-size.
          </p>
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
