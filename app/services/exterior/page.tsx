import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { serviceBranches } from "@/lib/data";
import { ServicesTabs } from "@/components/services-tabs";

export const metadata: Metadata = {
  title: "Exterior services · NN Construction",
  description:
    "Siding, decks, windows, and doors. Tight mitered corners, consistent reveal top to bottom, drainage engineered in.",
};

const branch = serviceBranches.find((b) => b.slug === "exterior")!;

export default function ExteriorServicesPage() {
  return (
    <>
      <section className="nn-page-head nn-services">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">Services · {branch.name}</span>
          </div>
          <h1 className="nn-page-title">
            {branch.pageTitle.map((line, i) => (
              <span key={i}>
                {line}
                {i < branch.pageTitle.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <p className="nn-page-lead">{branch.pageLead}</p>
          <ServicesTabs active="exterior" />
          <div className="nn-page-head-img">
            <Image
              src={branch.heroImage}
              alt={branch.heroAlt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-service-grid">
            {branch.services.map((s) => (
              <div key={s.title} className="nn-service-card">
                <h2 className="nn-service-title">{s.title}</h2>
                <p className="nn-service-desc">{s.desc}</p>
                <div className="nn-service-foot">
                  <span className="nn-service-from">{s.from}</span>
                  <span className="nn-service-more">{s.time}</span>
                </div>
              </div>
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
