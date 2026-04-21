import Image from "next/image";
import Link from "next/link";
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
            <Link href="/services" className="nn-breadcrumb">
              <span aria-hidden="true">←</span> Services
            </Link>
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
          </div>
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
          {branch.proof.kind === "quote" ? (
            <figure className="nn-pull-quote">
              <p className="nn-pull-quote-text">
                &ldquo;{branch.proof.text}&rdquo;
              </p>
              <figcaption className="nn-pull-quote-cap">
                {branch.proof.name} · {branch.proof.loc}
              </figcaption>
            </figure>
          ) : (
            <div className="nn-spec-sheet">
              {branch.proof.cells.map((c) => (
                <div key={c.label} className="nn-spec-cell">
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
