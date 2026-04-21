import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { serviceBranches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services · NN Construction",
  description:
    "Interior, exterior, and roofing — three shops under one roof. Licensed, insured, 25-year workmanship warranty.",
};

export default function ServicesHubPage() {
  return (
    <>
      <section className="nn-page-head nn-services">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">Services</span>
          </div>
          <h1 className="nn-page-title">What we build.</h1>
          <p className="nn-page-lead">
            Three shops under one roof — interior finish, exterior
            envelope, and roofing. One project manager on every job.
            Licensed, insured, 25-year workmanship warranty.
          </p>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-service-hub-grid">
            {serviceBranches.map((b) => (
              <Link
                key={b.slug}
                href={`/services/${b.slug}`}
                className="nn-service-hub-card nn-card-hover"
              >
                <div className="nn-service-hub-img">
                  <Image
                    src={b.heroImage}
                    alt={b.heroAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h2 className="nn-service-hub-title">{b.name}</h2>
                <p className="nn-service-hub-desc">{b.tagline}</p>
                <span className="nn-service-hub-arrow">
                  View {b.name.toLowerCase()}{" "}
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
