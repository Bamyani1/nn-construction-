import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ServicesTabs } from "@/components/services-tabs";

export const metadata: Metadata = {
  title: "Exterior services & roofing · NN Construction",
  description:
    "Siding, decks, windows, doors, and our proven roofing specialty. Tight mitered corners, consistent reveal, drainage engineered in.",
};

const exteriorServices = [
  {
    title: "Siding & trim",
    desc: "Fiber-cement, cedar lap, stucco. Tight mitered corners, consistent reveal top to bottom. Full tear-off or overlay with proper flashing.",
    from: "From $12/sqft",
    time: "4–8 wks",
    featured: false,
  },
  {
    title: "Decks & hardscape",
    desc: "IPE and composite decks, paver patios, retaining walls. Drainage engineered in. Structural posts to frost depth.",
    from: "From $65/sqft",
    time: "3–6 wks",
    featured: false,
  },
  {
    title: "Windows & doors",
    desc: "Full-frame replacement, custom entry doors, structural openings cut and supported. Rough-openings squared before install, every time.",
    from: "From $1,200/opening",
    time: "1–3 wks",
    featured: false,
  },
  {
    title: "Roofing",
    desc: "Asphalt, metal standing-seam, slate repair. Full tear-off or overlay, ice-shield to ridge cap. Our proven specialty — see below.",
    from: "From $8/sqft",
    time: "Full detail ↓",
    featured: true,
  },
];

const roofingCells = [
  {
    title: "Full tear-off re-roof",
    desc: "Decking inspected, ice & water shield applied at eaves and valleys, synthetic underlayment, hand-nailed asphalt or standing-seam metal. Proper step-flashing at every penetration.",
  },
  {
    title: "Repair & flashing",
    desc: "Leak diagnosis, chimney and skylight flashing, valley replacement. Documented before-and-after for every repair, including infrared moisture scans where warranted.",
  },
  {
    title: "Annual maintenance",
    desc: "Semi-annual inspection, gutter cleaning, sealant refresh. Keeps the 25-year workmanship warranty live and catches small failures before they become expensive ones.",
  },
];

const specSheet = [
  {
    label: "Installed since 2009",
    value: "1,420,000",
    unit: "square feet",
  },
  {
    label: "Standing-seam material warranty",
    value: "50 years",
    unit: "manufacturer, pass-through",
  },
  {
    label: "Workmanship warranty",
    value: "25 years",
    unit: "direct, no call centers",
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
            Siding, decks, windows, and doors — plus our proven roofing
            specialty. Tight mitered corners, consistent reveal top to bottom,
            drainage engineered in.
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
              <div
                key={s.title}
                className={`nn-service-card${s.featured ? " featured" : ""}`}
              >
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

      <section id="roofing" className="nn-roofing-feature">
        <div className="nn-container">
          <div className="nn-section-head">
            <div className="nn-chapter">
              <span className="nn-chapter-label">Specialty · Roofing</span>
            </div>
            <h2 className="nn-section-title">Our proven specialty.</h2>
            <p className="nn-section-lead">
              1.4 million square feet of roofing delivered since 2009.
              Standing-seam metal, asphalt, and slate repair — full tear-off or
              overlay, ice-shield to ridge cap.
            </p>
          </div>

          <div className="nn-roof-grid">
            {roofingCells.map((c) => (
              <div key={c.title} className="nn-roof-cell">
                <h3 className="nn-roof-title">{c.title}</h3>
                <p className="nn-roof-desc">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="nn-spec-sheet" style={{ marginTop: 96 }}>
            {specSheet.map((s) => (
              <div key={s.label} className="nn-spec-cell">
                <div className="nn-spec-label">{s.label}</div>
                <div className="nn-spec-val">
                  {s.value}
                  <span className="nn-spec-unit">{s.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nn-cta-band">
        <div className="nn-container nn-cta-inner">
          <div>
            <div className="nn-eyebrow">Roofing · now scheduling</div>
            <h2 className="nn-cta-title">Let us walk your roof.</h2>
          </div>
          <Link className="nn-btn nn-btn-primary nn-btn-lg" href="/contact">
            Request estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
