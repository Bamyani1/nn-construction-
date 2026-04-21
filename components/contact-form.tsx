"use client";

import { useMemo, useState, type FormEvent } from "react";

const services = [
  "Roofing — repair",
  "Roofing — full replacement",
  "Interior renovation",
  "Exterior / siding",
  "Addition / framing",
  "Commercial tenant build-out",
  "Something else",
];

function generateRequestId(): string {
  return `NN-${Math.floor(Math.random() * 9000 + 1000)}`;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const requestId = useMemo(generateRequestId, [sent]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(phase-5): wire a real route handler + email backend.
    setSent(true);
  }

  return (
    <form id="contact-form" className="nn-contact-form" onSubmit={handleSubmit}>
      {!sent ? (
        <div style={{ display: "contents" }}>
          <div className="nn-field">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              required
              type="text"
              autoComplete="name"
              placeholder="Your name"
            />
            <span className="nn-field-hint">Please enter your name.</span>
          </div>
          <div className="nn-field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              required
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
            />
            <span className="nn-field-hint">Please enter a valid email address.</span>
          </div>
          <div className="nn-field">
            <label htmlFor="cf-phone">Phone</label>
            <input
              id="cf-phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(555) 555-5555"
            />
          </div>
          <div className="nn-field">
            <label htmlFor="cf-service">Service</label>
            <select id="cf-service" defaultValue={services[0]}>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="nn-field nn-field-full">
            <label htmlFor="cf-notes">Project notes</label>
            <textarea
              id="cf-notes"
              rows={5}
              placeholder="Tell us about the property, the scope you're considering, and any timing constraints."
            />
          </div>
          <div className="nn-form-actions">
            <button
              className="nn-btn nn-btn-primary nn-btn-lg"
              type="submit"
              data-magnetic
              data-glow
            >
              Send request <span className="nn-btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="nn-sent">
          <div className="nn-eyebrow">Received</div>
          <h3
            style={{
              font: "500 36px/1.15 var(--ff-sans)",
              letterSpacing: "-0.012em",
              margin: "16px 0 0",
            }}
          >
            We&apos;ll be in touch within one business day.
          </h3>
          <p className="nn-lead" style={{ marginTop: 20 }}>
            Request #
            <span
              className="nn-mono"
              style={{ color: "var(--nn-azure)" }}
            >
              {requestId}
            </span>
          </p>
          <p
            style={{
              color: "var(--fg-2)",
              marginTop: 16,
              maxWidth: 560,
            }}
          >
            We&apos;ve received your request and will reach out directly. If
            your project is roofing-related and urgent (active leak, storm
            damage), please also call the office.
          </p>
        </div>
      )}
    </form>
  );
}
