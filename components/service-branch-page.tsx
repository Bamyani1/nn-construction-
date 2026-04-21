import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { ServiceBranch } from "@/lib/data";
import { CtaBand } from "@/components/cta-band";

interface ServiceBranchPageProps {
  branch: ServiceBranch;
}

export function ServiceBranchPage({ branch }: ServiceBranchPageProps) {
  return (
    <>
      <section className="nn-page-head nn-services">
        <div className="nn-container">
          <div className="nn-page-head-text">
            <Link
              href="/services"
              className="nn-breadcrumb"
              data-reveal="fade-rise"
              style={{ "--i": 0 } as CSSProperties}
            >
              <span aria-hidden="true">←</span> Services
            </Link>
            <div
              className="nn-page-eyebrow"
              data-reveal="fade-rise"
              style={{ "--i": 1 } as CSSProperties}
            >
              <span className="nn-label">Services · {branch.name}</span>
            </div>
            <h1
              className="nn-page-title"
              data-reveal="fade-rise"
              style={{ "--i": 2 } as CSSProperties}
            >
              {branch.pageTitle.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < branch.pageTitle.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            <p
              className="nn-page-lead"
              data-reveal="fade-rise"
              style={{ "--i": 3 } as CSSProperties}
            >
              {branch.pageLead}
            </p>
          </div>
          <div
            className="nn-page-head-img"
            data-reveal="scale-settle"
            style={{ "--i": 4 } as CSSProperties}
          >
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
            {branch.services.map((s, i) => (
              <div
                key={s.title}
                className="nn-service-card"
                data-reveal="fade-rise"
                style={{ "--i": i } as CSSProperties}
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

      <section className="nn-section nn-section-raised">
        <div className="nn-container">
          {branch.proof.kind === "quote" ? (
            <figure
              className="nn-pull-quote"
              data-reveal="fade-rise"
              style={{ "--i": 0 } as CSSProperties}
            >
              <p className="nn-pull-quote-text">
                &ldquo;{branch.proof.text}&rdquo;
              </p>
              <figcaption className="nn-pull-quote-cap">
                {branch.proof.name} · {branch.proof.loc}
              </figcaption>
            </figure>
          ) : (
            <div className="nn-spec-sheet">
              {branch.proof.cells.map((c, i) => (
                <div
                  key={c.label}
                  className="nn-spec-cell"
                  data-reveal="fade-rise"
                  style={{ "--i": i } as CSSProperties}
                >
                  <div className="nn-spec-label">{c.label}</div>
                  <div className="nn-spec-val">
                    {c.value}
                    <span className="nn-spec-unit">{c.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
