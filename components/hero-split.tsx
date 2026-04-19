import Image from "next/image";
import Link from "next/link";

interface HeroSplitProps {
  eyebrow?: string;
  title?: string;
  loc?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroSplit({
  eyebrow = "Recent project",
  title = "Flat-Roof Re-roof",
  loc = "DC metro",
  imageSrc = "/assets/hero/landing.webp",
  imageAlt = "Flat-Roof Re-roof",
}: HeroSplitProps = {}) {
  return (
    <section className="nn-hero-split">
      <div className="nn-hero-split-left">
        <div className="nn-hero-split-copy">
          <h1 className="nn-hero-split-title">Built to last.</h1>
          <p className="nn-hero-split-lead">
            Residential construction from framing to finish — plumb to the
            foundation, tight to the weather, finished appraisal-ready.
          </p>
          <Link href="/portfolio" className="nn-hero-split-cta">
            Explore portfolio <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="nn-hero-split-right">
        <div className="nn-hero-split-photo">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <aside className="nn-hero-split-card">
          <div className="nn-hero-split-card-eyebrow">{eyebrow}</div>
          <div className="nn-hero-split-card-title">{title}</div>
          <div className="nn-hero-split-card-loc">{loc}</div>
        </aside>
      </div>
    </section>
  );
}
