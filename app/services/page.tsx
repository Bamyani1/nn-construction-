import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services · NN Construction",
  description:
    "Interior, exterior, and roofing — three shops under one roof. Licensed, insured, 25-year workmanship warranty.",
};

const branches = [
  {
    title: "Interior",
    href: "/services/interior",
    summary:
      "Kitchen, bath, millwork, flooring, framing. Stained-oak cabinetry, stone counters, tile set true.",
    image: "/assets/projects/primary-bath-renovation/01.webp",
    alt: "Primary bath renovation",
  },
  {
    title: "Exterior",
    href: "/services/exterior",
    summary:
      "Siding, decks, windows, doors. Tight mitered corners, consistent reveal, drainage engineered in.",
    image: "/assets/projects/foundation-waterproofing/01.webp",
    alt: "Foundation waterproofing",
  },
  {
    title: "Roofing",
    href: "/services/roofing",
    summary:
      "Our specialty since 2009. Standing-seam metal, asphalt, and slate repair — ice-shield to ridge cap.",
    image: "/assets/projects/standing-seam-reroof/01.webp",
    alt: "Standing-seam re-roof",
  },
];

export default function ServicesHubPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">Services</span>
          </div>
          <h1 className="nn-page-title">What we build.</h1>
          <p className="nn-page-lead">
            Three shops under one roof — interior finish, exterior envelope,
            and roofing. One project manager on every job. Licensed,
            insured, 25-year workmanship warranty.
          </p>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-service-hub-grid">
            {branches.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="nn-service-hub-card nn-card-hover"
              >
                <div className="nn-service-hub-img">
                  <Image
                    src={b.image}
                    alt={b.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h2 className="nn-service-hub-title">{b.title}</h2>
                <p className="nn-service-hub-desc">{b.summary}</p>
                <span className="nn-service-hub-arrow">
                  View {b.title.toLowerCase()}{" "}
                  <span className="nn-btn-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="nn-cta-band">
        <div className="nn-container nn-cta-inner">
          <div>
            <div className="nn-eyebrow">Summer &apos;26 · now scheduling</div>
            <h2 className="nn-cta-title">Start with an estimate.</h2>
          </div>
          <Link className="nn-btn nn-btn-primary nn-btn-lg" href="/contact">
            Request estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
