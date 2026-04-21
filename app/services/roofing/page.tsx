import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ServicesTabs } from "@/components/services-tabs";

export const metadata: Metadata = {
  title: "Roofing · NN Construction",
  description:
    "Our proven specialty since 2009 — 1.4 million square feet delivered. Standing-seam metal, asphalt, slate repair. Ice-shield to ridge cap.",
};

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

export default function RoofingServicesPage() {
  return (
    <>
      <section className="nn-page-head nn-services">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">Services · Roofing</span>
          </div>
          <h1 className="nn-page-title">
            Our proven
            <br />
            specialty.
          </h1>
          <p className="nn-page-lead">
            1.4 million square feet of roofing delivered since 2009.
            Standing-seam metal, asphalt, and slate repair — full tear-off
            or overlay, ice-shield to ridge cap.
          </p>
          <ServicesTabs active="roofing" />
          <div className="nn-page-head-img">
            <Image
              src="/assets/projects/standing-seam-reroof/01.webp"
              alt="Standing-seam re-roof"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="nn-section nn-roofing-feature">
        <div className="nn-container">
          <div className="nn-section-head">
            <div className="nn-chapter">
              <span className="nn-chapter-label">How we roof</span>
            </div>
            <h2 className="nn-section-title">Three tracks.</h2>
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
