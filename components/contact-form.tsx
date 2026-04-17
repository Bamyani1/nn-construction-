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
    setSent(true);
  }

  return (
    <form className="nn-contact-form" onSubmit={handleSubmit}>
      {!sent ? (
        <div style={{ display: "contents" }}>
          <div className="nn-field">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              required
              type="text"
              defaultValue="Maya Reyes"
            />
          </div>
          <div className="nn-field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              required
              type="email"
              defaultValue="maya.reyes@example.com"
            />
          </div>
          <div className="nn-field">
            <label htmlFor="cf-phone">Phone</label>
            <input
              id="cf-phone"
              type="tel"
              defaultValue="(240) 555-0166"
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
              defaultValue="1928 colonial in Chevy Chase. Looking at standing-seam metal for the front dormer and repair on the rear slope. Free to walk the property any weekday morning."
            />
          </div>
          <div className="nn-form-actions">
            <button
              className="nn-btn nn-btn-primary nn-btn-lg"
              type="submit"
            >
              Send request →
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
              style={{ color: "var(--nn-copper)" }}
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
            You&apos;ll receive a confirmation email within a few minutes. If
            your project is roofing-related and urgent (active leak, storm
            damage), please also call the office.
          </p>
        </div>
      )}
    </form>
  );
}
