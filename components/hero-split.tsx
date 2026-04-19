import Link from "next/link";

interface HeroSplitProps {
  eyebrow?: string;
  title?: string;
  loc?: string;
}

export function HeroSplit({
  eyebrow = "Project 01",
  title = "The Glass Pavilion",
  loc = "Portland, Oregon",
}: HeroSplitProps = {}) {
  return (
    <section className="nn-hero-split">
      <div className="nn-hero-split-left">
        <div className="nn-hero-split-copy">
          <h1 className="nn-hero-split-title">Defining Space.</h1>
          <p className="nn-hero-split-lead">
            Architectural excellence achieved through intentional restraint and
            rigorous material logic.
          </p>
          <Link href="/portfolio" className="nn-hero-split-cta">
            Explore portfolio <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="nn-hero-split-right">
        <div className="nn-hero-split-photo" aria-hidden="true" />
        <aside className="nn-hero-split-card">
          <div className="nn-hero-split-card-eyebrow">{eyebrow}</div>
          <div className="nn-hero-split-card-title">{title}</div>
          <div className="nn-hero-split-card-loc">{loc}</div>
        </aside>
      </div>
    </section>
  );
}
