import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { serviceBranches } from "@/lib/data";
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

const branch = serviceBranches.find((b) => b.slug === "roofing")!;

export default function RoofingServicesPage() {
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
          <ServicesTabs active="roofing" />
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

          {branch.proof.kind === "spec" ? (
            <div className="nn-spec-sheet" style={{ marginTop: 96 }}>
              {branch.proof.cells.map((s) => (
                <div key={s.label} className="nn-spec-cell">
                  <div className="nn-spec-label">{s.label}</div>
                  <div className="nn-spec-val">
                    {s.value}
                    <span className="nn-spec-unit">{s.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
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
