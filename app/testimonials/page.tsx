import Link from "next/link";
import type { Metadata } from "next";
import { testimonials, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials · NN Construction",
  description:
    "Unedited, attributed client testimonials. Reference calls available before you sign.",
};

function projectYear(projectName: string): number | null {
  const match = projects.find((p) => p.name === projectName);
  return match ? match.year : null;
}

export default function TestimonialsPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">Testimonials</span>
          </div>
          <h1 className="nn-page-title">
            Words from the sites
            <br />
            we&apos;ve finished.
          </h1>
          <p className="nn-page-lead">
            Unedited, attributed, reachable. We&apos;re happy to connect you
            with any client below for a reference call before you sign.
          </p>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container" style={{ maxWidth: 1100 }}>
          {testimonials.map((t) => {
            const year = projectYear(t.project);
            return (
              <figure key={t.name} className="nn-testimonial">
                <div className="nn-testimonial-rule" />
                <blockquote className="nn-testimonial-quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="nn-testimonial-cap">
                  <div className="nn-testimonial-name">{t.name}</div>
                  <div className="nn-testimonial-role">
                    {t.role} · {t.loc}
                  </div>
                  <div className="nn-testimonial-proj">
                    {t.project}
                    {year ? ` · ${year}` : ""}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="nn-cta-band">
        <div className="nn-container nn-cta-inner">
          <div>
            <div className="nn-eyebrow">References available</div>
            <h2 className="nn-cta-title">Ask us for a reference call.</h2>
          </div>
          <Link className="nn-btn nn-btn-primary nn-btn-lg" href="/contact">
            Request estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
