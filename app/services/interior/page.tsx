import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { serviceBranches } from "@/lib/data";
import { ServicesTabs } from "@/components/services-tabs";

export const metadata: Metadata = {
  title: "Interior services · NN Construction",
  description:
    "Kitchen, bath, millwork, flooring, framing. Stained-oak cabinetry, stone counters, tile set true.",
};

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

const branch = serviceBranches.find((b) => b.slug === "interior")!;

export default function InteriorServicesPage() {
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
          <ServicesTabs active="interior" />
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
              &ldquo;
              {branch.proof.kind === "quote" ? branch.proof.text : null}
              &rdquo;
            </p>
            {branch.proof.kind === "quote" ? (
              <div className="nn-pull-quote-cap">
                {branch.proof.name} · {branch.proof.loc}
              </div>
            ) : null}
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
