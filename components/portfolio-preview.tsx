import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

const portfolioPreview = projects.slice(0, 3);

export function PortfolioPreview({ id }: { id?: string } = {}) {
  return (
    <section id={id} className="nn-section nn-section-raised">
      <div className="nn-container">
        <div className="nn-section-head" data-reveal-stagger>
          <div
            className="nn-chapter"
            data-reveal="fade-rise"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <span className="nn-chapter-label">Portfolio</span>
          </div>
          <h2
            className="nn-section-title"
            data-reveal="fade-rise"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Recent work,
            <br />
            appraised in low light.
          </h2>
        </div>

        <div
          className="nn-project-grid"
          style={{ marginTop: 64 }}
          data-reveal-stagger
        >
          {portfolioPreview.map((p, i) => (
            <Link
              key={p.slug}
              className="nn-project-card nn-card-hover"
              href="/portfolio"
              data-reveal="mask-wipe"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="nn-project-img">
                <Image
                  src={`/assets/projects/${p.slug}/${p.images[0]}`}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="nn-project-meta">
                <span className="nn-eyebrow">{p.cat}</span>
              </div>
              <h3 className="nn-project-title">{p.name}</h3>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <Link className="nn-btn nn-btn-ghost" href="/portfolio">
            See full portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
