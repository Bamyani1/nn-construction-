import Link from "next/link";
import { testimonials } from "@/lib/data";

const featuredTestimonial = testimonials[0];

export function TestimonialLead() {
  return (
    <section className="nn-section">
      <div className="nn-container">
        <div className="nn-section-head">
          <div className="nn-chapter" data-reveal="fade-rise">
            <span className="nn-chapter-label">Clients</span>
          </div>
        </div>
        <div className="nn-pull-quote" data-reveal-stagger>
          <p
            className="nn-pull-quote-text"
            data-reveal="clip-reveal"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            &ldquo;{featuredTestimonial.quote}&rdquo;
          </p>
          <div
            className="nn-pull-quote-cap"
            data-reveal="fade-rise"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {featuredTestimonial.name} · {featuredTestimonial.loc} ·{" "}
            {featuredTestimonial.project}
          </div>
        </div>
        <div style={{ marginTop: 48 }}>
          <Link className="nn-btn nn-btn-ghost" href="/testimonials">
            More from our clients →
          </Link>
        </div>
      </div>
    </section>
  );
}
