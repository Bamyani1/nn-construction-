import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { serviceBranches } from "@/lib/data";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services · NN Construction",
  description:
    "Interior, exterior, and roofing — three shops under one roof. Licensed, insured, 25-year workmanship warranty.",
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

export default function ServicesHubPage() {
  return (
    <>
      <section className="nn-page-head nn-services">
        <div className="nn-container">
          <div
            className="nn-page-eyebrow"
            data-reveal="fade-rise"
            style={{ "--i": 0 } as CSSProperties}
          >
            <span className="nn-label">Services</span>
          </div>
          <h1
            className="nn-page-title"
            data-reveal="fade-rise"
            style={{ "--i": 1 } as CSSProperties}
          >
            What we build.
          </h1>
          <p
            className="nn-page-lead"
            data-reveal="fade-rise"
            style={{ "--i": 2 } as CSSProperties}
          >
            Three shops under one roof — interior finish, exterior
            envelope, and roofing. One project manager on every job.
            Licensed, insured, 25-year workmanship warranty.
          </p>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-service-hub-grid">
            {serviceBranches.map((b, i) => (
              <Link
                key={b.slug}
                href={`/services/${b.slug}`}
                className="nn-service-hub-card nn-card-hover"
                data-reveal="fade-rise"
                style={{ "--i": i } as CSSProperties}
              >
                <div className="nn-service-hub-img">
                  <Image
                    src={b.heroImage}
                    alt={b.heroAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="nn-service-hub-body">
                  <h2 className="nn-service-hub-title">{b.name}</h2>
                  <p className="nn-service-hub-desc">{b.tagline}</p>
                  <div className="nn-service-hub-meta">
                    <span>{b.startingAt}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {b.services.length} service
                      {b.services.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <span className="nn-service-hub-arrow">
                    View {b.name.toLowerCase()}{" "}
                    <span className="nn-btn-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="nn-section nn-section-raised">
        <div className="nn-container">
          <div className="nn-section-head">
            <div
              className="nn-chapter"
              data-reveal="clip-reveal"
              style={{ "--i": 0 } as CSSProperties}
            >
              <span className="nn-chapter-label">Process</span>
            </div>
            <h2
              className="nn-section-title"
              data-reveal="fade-rise"
              style={{ "--i": 1 } as CSSProperties}
            >
              How a project moves.
            </h2>
          </div>
          <div className="nn-process">
            {process.map((p, i) => (
              <div
                key={p.title}
                className="nn-process-step"
                data-reveal="fade-rise"
                style={{ "--i": i } as CSSProperties}
              >
                <h3 className="nn-process-title">{p.title}</h3>
                <p className="nn-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
