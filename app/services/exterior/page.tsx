import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ServicesTabs } from "@/components/services-tabs";

export const metadata: Metadata = {
  title: "Exterior services · NN Construction",
  description:
    "Siding, decks, windows, and doors. Tight mitered corners, consistent reveal top to bottom, drainage engineered in.",
};

const exteriorServices = [
  {
    title: "Siding & trim",
    desc: "Fiber-cement, cedar lap, stucco. Tight mitered corners, consistent reveal top to bottom. Full tear-off or overlay with proper flashing.",
    from: "From $12/sqft",
    time: "4–8 wks",
  },
  {
    title: "Decks & hardscape",
    desc: "IPE and composite decks, paver patios, retaining walls. Drainage engineered in. Structural posts to frost depth.",
    from: "From $65/sqft",
    time: "3–6 wks",
  },
  {
    title: "Windows & doors",
    desc: "Full-frame replacement, custom entry doors, structural openings cut and supported. Rough-openings squared before install, every time.",
    from: "From $1,200/opening",
    time: "1–3 wks",
  },
];

export default function ExteriorServicesPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">Services · Exterior</span>
          </div>
          <h1 className="nn-page-title">
            Outside work
            <br />
            that holds weather.
          </h1>
          <p className="nn-page-lead">
            Siding, decks, windows, and doors. Tight mitered corners,
            consistent reveal top to bottom, drainage engineered in. For
            roofing, see our dedicated specialty.
          </p>
          <ServicesTabs active="exterior" />
          <div className="nn-page-head-img">
            <Image
              src="/assets/projects/foundation-waterproofing/01.webp"
              alt="Foundation waterproofing"
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
            {exteriorServices.map((s) => (
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
