import Link from "next/link";
import { HeroDraftsman } from "@/components/hero-draftsman";
import { stats, projects } from "@/lib/data";

const pillars = [
  {
    n: "01",
    title: "Quality workmanship",
    desc: "Tight miters. Consistent reveal. Plumb to the foundation.",
  },
  {
    n: "02",
    title: "Expert consultation",
    desc: "Free walk-through. Written estimate in five days. No pressure.",
  },
  {
    n: "03",
    title: "Timely completion",
    desc: "Schedules met. Permit timelines built in honestly, up front.",
  },
  {
    n: "04",
    title: "Customer satisfaction",
    desc: "Clean punch list. 25-year workmanship warranty. Reachable directly.",
  },
];

const servicePreview = [
  {
    icon: "trowel",
    n: "01",
    title: "Kitchen & bath",
    desc: "Custom cabinetry, stone counters, tile set true. Appliances, lighting, plumbing finished to spec.",
    from: "$38/sqft",
    more: "Interior →",
    href: "/services/interior",
    featured: false,
  },
  {
    icon: "hammer",
    n: "04",
    title: "Framing & structural",
    desc: "New builds, additions, load-bearing work. Engineered to county code, plumb to the foundation.",
    from: "$42/sqft",
    more: "Interior →",
    href: "/services/interior",
    featured: false,
  },
  {
    icon: "saw",
    n: "05",
    title: "Siding & trim",
    desc: "Fiber-cement, cedar lap, stucco. Tight mitered corners, consistent reveal top to bottom.",
    from: "$12/sqft",
    more: "Exterior →",
    href: "/services/exterior",
    featured: false,
  },
  {
    icon: "hammer",
    n: "08 · Featured",
    title: "Roofing",
    desc: "Asphalt, metal standing-seam, slate repair. Full tear-off or overlay, ice-shield to ridge cap. Our specialty.",
    from: "$8/sqft",
    more: "Specialty →",
    href: "/services/exterior",
    featured: true,
  },
] as const;

const portfolioPreview = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <HeroDraftsman />

      {/* Four pillars */}
      <section
        className="nn-section-sm"
        style={{ paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="nn-container">
          <div className="nn-eyebrow" style={{ marginBottom: 32 }}>
            Four pillars
          </div>
          <div className="nn-pillars">
            {pillars.map((p) => (
              <div key={p.n} className="nn-pillar">
                <div className="nn-pillar-n">{p.n}</div>
                <h3 className="nn-pillar-title">{p.title}</h3>
                <p className="nn-pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr
        className="nn-rule"
        style={{ maxWidth: 1240, margin: "0 auto" }}
      />

      {/* Stats */}
      <section className="nn-section">
        <div className="nn-container nn-stats">
          {stats.map((s) => (
            <div key={s.label} className="nn-stat">
              <div className="nn-eyebrow">{s.label}</div>
              <div className="nn-stat-num">{s.value}</div>
              <div className="nn-stat-unit">{s.unit}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial split */}
      <section className="nn-section nn-section-elev">
        <div className="nn-container nn-editorial">
          <div className="nn-editorial-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/stairs.svg" alt="" />
            <div className="nn-editorial-tag">Jefferson Stair · 2024</div>
          </div>
          <div>
            <div className="nn-chapter">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icons/level.svg" alt="" />
              <span className="nn-chapter-n">01</span>
              <span className="nn-chapter-label">The work</span>
            </div>
            <h2 className="nn-section-title">
              Built true
              <br />
              to plumb.
            </h2>
            <div className="nn-prose" style={{ marginTop: 40 }}>
              <p>
                We are a twelve-person shop running framing, finish, and
                roofing out of Silver Spring. One project manager, one crew,
                one warranty — start to finish.
              </p>
              <p>
                <strong>No subcontractor shuffle.</strong> The people who bid
                your project are the people who show up. Change orders are
                written, signed, and priced before work proceeds. Permits
                handled. Receipts on request.
              </p>
            </div>
            <div style={{ marginTop: 40 }}>
              <Link className="nn-btn nn-btn-ghost" href="/about">
                Read about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-section-head">
            <div className="nn-chapter">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icons/hammer.svg" alt="" />
              <span className="nn-chapter-n">02</span>
              <span className="nn-chapter-label">Services</span>
            </div>
            <h2 className="nn-section-title">
              Every surface considered.
              <br />
              Every line true.
            </h2>
            <p className="nn-section-lead">
              Eight core disciplines, one crew. Interior, exterior, and a
              proven roofing specialty.
            </p>
          </div>

          <div className="nn-service-grid" style={{ marginTop: 72 }}>
            {servicePreview.map((s) => (
              <Link
                key={s.title}
                className={`nn-service-card${s.featured ? " featured" : ""}`}
                href={s.href}
              >
                <div className="nn-service-head">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/assets/icons/${s.icon}.svg`} alt="" />
                  <span className="nn-service-n">{s.n}</span>
                </div>
                <h3 className="nn-service-title">{s.title}</h3>
                <p className="nn-service-desc">{s.desc}</p>
                <div className="nn-service-foot">
                  <span className="nn-service-from">{s.from}</span>
                  <span className="nn-service-more">{s.more}</span>
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: 56,
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <Link className="nn-btn nn-btn-ghost" href="/services/interior">
              All interior services →
            </Link>
            <Link className="nn-btn nn-btn-ghost" href="/services/exterior">
              All exterior services →
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="nn-section nn-section-elev">
        <div className="nn-container">
          <div className="nn-section-head">
            <div className="nn-chapter">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icons/square.svg" alt="" />
              <span className="nn-chapter-n">03</span>
              <span className="nn-chapter-label">Portfolio</span>
            </div>
            <h2 className="nn-section-title">
              Recent work,
              <br />
              appraised in low light.
            </h2>
          </div>

          <div className="nn-project-grid" style={{ marginTop: 64 }}>
            {portfolioPreview.map((p) => (
              <Link key={p.slug} className="nn-project-card" href="/portfolio">
                <div className="nn-project-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/assets/img/${p.img}.svg`} alt="" />
                </div>
                <div className="nn-project-meta">
                  <span className="nn-eyebrow">{p.cat}</span>
                  <span className="nn-project-year">{p.year}</span>
                </div>
                <h3 className="nn-project-title">{p.name}</h3>
                <div className="nn-project-sub">
                  <span>{p.loc}</span>
                  <span className="nn-project-area">{p.area}</span>
                </div>
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

      {/* Testimonial lead */}
      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-section-head">
            <div className="nn-chapter">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/icons/pencil.svg" alt="" />
              <span className="nn-chapter-n">04</span>
              <span className="nn-chapter-label">Clients</span>
            </div>
          </div>
          <div className="nn-pull-quote">
            <p className="nn-pull-quote-text">
              &ldquo;They showed up on the days they said they would, for the
              number they quoted. After two other contractors ghosted us,
              that alone was a revelation. The work itself is beautiful.&rdquo;
            </p>
            <div className="nn-pull-quote-cap">
              Eleanor Park · Bethesda, MD · Oak Ridge Kitchen
            </div>
          </div>
          <div style={{ marginTop: 48 }}>
            <Link className="nn-btn nn-btn-ghost" href="/testimonials">
              More from our clients →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="nn-cta-band">
        <div className="nn-container nn-cta-inner">
          <div>
            <div className="nn-eyebrow">Accepting projects · Summer &apos;26</div>
            <h2 className="nn-cta-title">Start with a free walk-through.</h2>
          </div>
          <Link className="nn-btn nn-btn-primary nn-btn-lg" href="/contact">
            Request estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
