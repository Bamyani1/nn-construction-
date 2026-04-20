import Link from "next/link";
import { testimonials } from "@/lib/data";

const featuredTestimonial = testimonials[0];

export function TestimonialLead() {
  return (
    <section className="nn-section">
      <div className="nn-container">
        <div className="nn-section-head">
          <div className="nn-chapter">
            <span className="nn-chapter-label">Clients</span>
          </div>
        </div>
        <div className="nn-pull-quote">
          <p className="nn-pull-quote-text">
            &ldquo;{featuredTestimonial.quote}&rdquo;
          </p>
          <div className="nn-pull-quote-cap">
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
