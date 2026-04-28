import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact · NN Construction",
  description:
    "Request a free in-person walk-through and a written estimate inside five business days.",
};

const OFFICE_ADDRESS = "8420 Georgia Ave, Silver Spring, MD 20910";
const MAP_QUERY = encodeURIComponent(OFFICE_ADDRESS);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

export default function ContactPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container nn-page-head-grid">
          <div className="nn-page-head-main">
            <div className="nn-page-eyebrow">
              <span className="nn-label">Contact</span>
            </div>
            <h1 className="nn-page-title">Start with a walk-through.</h1>
          </div>

          <aside
            className="nn-titleblock"
            aria-label="Request specifications"
          >
            <dl className="nn-titleblock-list">
              <div className="nn-titleblock-row">
                <dt>Estimate</dt>
                <dd>5 business days</dd>
              </div>
              <div className="nn-titleblock-row">
                <dt>Coverage</dt>
                <dd>MD · DC · VA</dd>
              </div>
              <div className="nn-titleblock-row">
                <dt>License</dt>
                <dd>
                  <span className="nn-mono">MHIC #{site.licenses.mhic}</span>
                </dd>
              </div>
              <div className="nn-titleblock-row">
                <dt>Warranty</dt>
                <dd>25 years, workmanship</dd>
              </div>
            </dl>
          </aside>
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

      <section className="nn-section nn-map-section">
        <div className="nn-container">
          <div className="nn-map-head">
            <div className="nn-eyebrow">Find us</div>
            <a
              className="nn-map-directions"
              href={MAP_DIRECTIONS_HREF}
              target="_blank"
              rel="noreferrer noopener"
            >
              Get directions ↗
            </a>
          </div>
          <div className="nn-map-frame">
            <iframe
              title="NN Construction office location"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
