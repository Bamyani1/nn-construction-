import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About · NN Construction",
  description:
    "A twelve-person crew in Silver Spring, MD, running framing, finish, and roofing for seventeen years.",
};

const principles = [
  {
    name: "Integrity.",
    desc: "Written estimates, signed change orders, receipts on request.",
  },
  {
    name: "Innovation.",
    desc: "Standing-seam details, engineered flashing, modern building-science — applied to old houses.",
  },
  {
    name: "Craftsmanship.",
    desc: "Tight miters. Consistent reveal. Plumb to the foundation.",
  },
  {
    name: "Durability.",
    desc: "Built to stand longer than the warranty.",
  },
];

const licenses = [
  { label: "Maryland", val: "MHIC #132-8847" },
  { label: "D.C.", val: "BBL-200489" },
  { label: "Virginia", val: "2705-189-332" },
  { label: "Plumbing", val: "WSSC-certified" },
  { label: "Liability", val: "$2M general + WC" },
];

function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            <span className="nn-label">About</span>
          </div>
          <h1 className="nn-page-title">
            A local crew,
            <br />
            seventeen years on.
          </h1>
          <p className="nn-page-lead">
            Nelson Nieves founded NN Construction in 2009 with one truck and a
            short list of roofing clients. Today the shop runs twelve full-time
            tradespeople across framing, finish, and roofing, serving Montgomery
            County, DC, and Northern Virginia.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="nn-section">
        <div className="nn-container nn-two-col nn-two-col-narrow">
          <div>
            <div className="nn-eyebrow">Principles</div>
            <ul className="nn-principle-list">
              {principles.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}</strong>
                  {p.desc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className="nn-editorial-img"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src="/assets/projects/brick-facade-restoration/01.webp"
                alt="Shop — Silver Spring"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="nn-editorial-tag">Shop · Silver Spring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's note */}
      <section className="nn-section nn-section-raised">
        <div className="nn-container">
          <div className="nn-section-head">
            <div className="nn-chapter">
              <span className="nn-chapter-label">Founder&apos;s note</span>
            </div>
          </div>
          <div className="nn-prose" style={{ maxWidth: 780 }}>
            <p
              style={{
                font: "400 28px/1.4 var(--ff-sans)",
                color: "var(--fg-1)",
                letterSpacing: "-0.008em",
                margin: "0 0 32px",
                maxWidth: 780,
              }}
            >
              We named the four pillars — Quality, Consultation, Timely
              Completion, Customer Satisfaction — because they are the
              complaints we heard most often about other contractors.
            </p>
            <p>
              Most of our work starts as a referral. The second-most starts as a
              rescue from whoever was on the job first. We do not love taking
              over half-finished projects, but we&apos;ve stopped being surprised
              by them.
            </p>
            <p>
              What we promise: we show up. We price the job honestly. We write
              the change order before we swing the hammer. We stand behind the
              work for twenty-five years. It is a short list — and almost nobody
              keeps it.
            </p>
            <p
              style={{
                color: "var(--fg-1)",
                fontWeight: 500,
                marginTop: 40,
              }}
            >
              — Nelson Nieves, Founder
            </p>
          </div>
        </div>
      </section>

      {/* The crew */}
      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-section-head">
            <div className="nn-chapter">
              <span className="nn-chapter-label">The crew</span>
            </div>
            <h2 className="nn-section-title">The people on site.</h2>
            <p className="nn-section-lead">
              A twelve-person shop. Three leads, plus tradespeople in framing,
              finish carpentry, and roofing.
            </p>
          </div>
          <div className="nn-team-grid" style={{ marginTop: 64 }}>
            {team.map((m) => (
              <div key={m.name} className="nn-team-card">
                <div className="nn-team-avatar">{initials(m.name)}</div>
                <div className="nn-team-name">{m.name}</div>
                <div className="nn-team-role">{m.role}</div>
                <div className="nn-team-tenure">{m.tenure}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensure */}
      <section className="nn-section-sm">
        <div className="nn-container">
          <div className="nn-eyebrow" style={{ marginBottom: 24 }}>
            Licensure &amp; insurance
          </div>
          <div className="nn-license-strip">
            {licenses.map((l) => (
              <div key={l.label} className="nn-license">
                <span className="nn-license-label">{l.label}</span>
                <span className="nn-license-val">{l.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nn-cta-band">
        <div className="nn-container nn-cta-inner">
          <div>
            <div className="nn-eyebrow">Meet the crew on your site</div>
            <h2 className="nn-cta-title">
              Free walk-through, typically within a week.
            </h2>
          </div>
          <Link className="nn-btn nn-btn-primary nn-btn-lg" href="/contact">
            Request estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
