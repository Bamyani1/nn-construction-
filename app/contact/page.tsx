import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact · NN Construction",
  description:
    "Request a free in-person walk-through and a written estimate inside five business days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">Contact</span>
          </div>
          <h1 className="nn-page-title">
            Start with
            <br />
            a walk-through.
          </h1>
          <p className="nn-page-lead">
            Free, in-person, typically within a week. Written estimate inside
            five business days.
          </p>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container nn-contact-grid">
          <ContactForm />

          <aside className="nn-contact-aside">
            <div className="nn-contact-aside-block">
              <div className="nn-eyebrow">Office</div>
              <div className="nn-contact-mono">
                8420 Georgia Ave
                <br />
                Silver Spring, MD 20910
                <br />
                {site.phone}
                <br />
                {site.email}
              </div>
            </div>

            <div className="nn-contact-aside-block">
              <div className="nn-eyebrow">Service area</div>
              <div className="nn-cities">
                {site.cities.map((c) => (
                  <span key={c} className="nn-city">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="nn-contact-aside-block">
              <div className="nn-eyebrow">Hours</div>
              <div
                className="nn-contact-mono"
                style={{ color: "var(--fg-2)" }}
              >
                Mon–Fri · 7:00 – 18:00
                <br />
                Sat · 8:00 – 13:00
                <br />
                Sun · emergency only
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
