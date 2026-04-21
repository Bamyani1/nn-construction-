import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ServicesTabs } from "@/components/services-tabs";

export const metadata: Metadata = {
  title: "Interior services · NN Construction",
  description:
    "Kitchen, bath, millwork, flooring, framing. Stained-oak cabinetry, stone counters, tile set true.",
};

const interiorServices = [
  {
    title: "Kitchen & bath",
    desc: "Custom cabinetry, stone counters, tile set true. Appliances, lighting, plumbing finished to spec. Structural wall removal with engineered LVL where needed.",
    from: "From $38/sqft",
    time: "8–14 wks",
  },
  {
    title: "Custom built-ins",
    desc: "Stained-oak millwork, floating shelves, integrated storage. Shop-built, site-finished. Mitred returns, continuous grain, hand-rubbed wax.",
    from: "From $210/lf",
    time: "3–6 wks",
  },
  {
    title: "Flooring & stair",
    desc: "Wide-plank white oak, tile, stone. Custom stair runs with closed or open risers — blackened-steel stringers and solid hardwood treads.",
    from: "From $14/sqft",
    time: "2–5 wks",
  },
  {
    title: "Framing & structural",
    desc: "New builds, additions, load-bearing work. Engineered to county code, plumb to the foundation. Permit submittal and inspection handled in-house.",
    from: "From $42/sqft",
    time: "6–16 wks",
  },
];

const process = [
  {
    title: "Walk-through",
    desc: "Free, in-person, typically within a week. We walk the space, talk scope, discuss constraints.",
  },
  {
    title: "Written estimate",
    desc: "Inside five business days. Line-item labor, materials, permits, timeline. No hidden contingencies.",
  },
  {
    title: "Build",
    desc: "One project manager. One crew. Daily clean-up. Change orders written, signed, priced before work.",
  },
  {
    title: "Punch & warranty",
    desc: "Clean hand-off, 25-year workmanship warranty. Reachable directly — no call centers.",
  },
];

export default function InteriorServicesPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">Services · Interior</span>
          </div>
          <h1 className="nn-page-title">
            Inside work,
            <br />
            finished appraisal-ready.
          </h1>
          <p className="nn-page-lead">
            Kitchen, bath, millwork, flooring, framing. Stained-oak cabinetry,
            stone counters, tile set true to reveal. Structural work permitted
            and inspected.
          </p>
          <ServicesTabs active="interior" />
          <div className="nn-page-head-img">
            <Image
              src="/assets/projects/primary-bath-renovation/01.webp"
              alt="Primary bath renovation"
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
            {interiorServices.map((s) => (
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

      <section className="nn-section nn-section-raised">
        <div className="nn-container">
          <div className="nn-section-head">
            <div className="nn-chapter">
              <span className="nn-chapter-label">Process</span>
            </div>
            <h2 className="nn-section-title">How a project moves.</h2>
          </div>
          <div className="nn-process">
            {process.map((p) => (
              <div key={p.title} className="nn-process-step">
                <h3 className="nn-process-title">{p.title}</h3>
                <p className="nn-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-pull-quote">
            <p className="nn-pull-quote-text">
              &ldquo;The level of finish carpentry you get from Marta&apos;s
              team is honestly the reason we&apos;ll use them again. Every miter
              is tight. Every reveal is consistent.&rdquo;
            </p>
            <div className="nn-pull-quote-cap">
              David Hollister · Takoma Park, MD
            </div>
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
