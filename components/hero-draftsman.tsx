import Link from "next/link";

export function HeroDraftsman() {
  return (
    <section className="nn-hero nn-hero-draft">
      <div className="nn-hero-bg" />

      <div className="nn-hero-copy">
        <div className="nn-hero-copy-inner">
          <div className="nn-eyebrow">
            Residential &amp; Commercial · Roofing specialty
          </div>
          <h1 className="nn-display">
            Your dream,
            <br />
            our hardwork.
          </h1>
          <p className="nn-lead">
            Full-service construction — interior, exterior, and a proven
            specialty in roofing. Built true to plumb, backed by a 25-year
            workmanship warranty.
          </p>
          <div className="nn-hero-cta">
            <Link className="nn-btn nn-btn-primary nn-btn-lg" href="/contact">
              Request an estimate →
            </Link>
            <Link className="nn-btn nn-btn-ghost" href="/portfolio">
              See recent work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
