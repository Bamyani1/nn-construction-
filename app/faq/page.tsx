import Link from "next/link";
import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ · NN Construction",
  description:
    "Service area, licensing, project kickoff, permits, warranty, change orders — the common questions, answered plainly.",
};

export default function FaqPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">FAQ</span>
          </div>
          <h1 className="nn-page-title">
            Questions,
            <br />
            answered plainly.
          </h1>
          <p className="nn-page-lead">
            If the answer isn&apos;t here, call or email. We&apos;ll get back
            the same business day.
          </p>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container" style={{ maxWidth: 960 }}>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="nn-cta-band">
        <div className="nn-container nn-cta-inner">
          <div>
            <div className="nn-eyebrow">Didn&apos;t answer your question?</div>
            <h2 className="nn-cta-title">Call us. We pick up.</h2>
          </div>
          <Link className="nn-btn nn-btn-primary nn-btn-lg" href="/contact">
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
