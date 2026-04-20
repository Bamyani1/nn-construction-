import Link from "next/link";

const servicePreview = [
  {
    title: "Kitchen & bath",
    desc: "Custom cabinetry, stone counters, tile set true. Appliances, lighting, plumbing finished to spec.",
    from: "$38/sqft",
    more: "Interior →",
    href: "/services/interior",
    featured: false,
  },
  {
    title: "Framing & structural",
    desc: "New builds, additions, load-bearing work. Engineered to county code, plumb to the foundation.",
    from: "$42/sqft",
    more: "Interior →",
    href: "/services/interior",
    featured: false,
  },
  {
    title: "Siding & trim",
    desc: "Fiber-cement, cedar lap, stucco. Tight mitered corners, consistent reveal top to bottom.",
    from: "$12/sqft",
    more: "Exterior →",
    href: "/services/exterior",
    featured: false,
  },
  {
    title: "Roofing",
    desc: "Asphalt, metal standing-seam, slate repair. Full tear-off or overlay, ice-shield to ridge cap. Our specialty.",
    from: "$8/sqft",
    more: "Specialty →",
    href: "/services/exterior",
    featured: true,
  },
] as const;

export function ServicesPreview({ id }: { id?: string } = {}) {
  return (
    <section id={id} className="nn-section">
      <div className="nn-container">
        <div className="nn-section-head" data-reveal-stagger>
          <div
            className="nn-chapter"
            data-reveal="fade-rise"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <span className="nn-chapter-label">Services</span>
          </div>
          <h2
            className="nn-section-title"
            data-reveal="fade-rise"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Every surface considered.
            <br />
            Every line true.
          </h2>
          <p
            className="nn-section-lead"
            data-reveal="fade-rise"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Eight core disciplines, one crew. Interior, exterior, and a
            proven roofing specialty.
          </p>
        </div>

        <div
          className="nn-service-grid"
          style={{ marginTop: 72 }}
          data-reveal-stagger
        >
          {servicePreview.map((s, i) => (
            <Link
              key={s.title}
              className={`nn-service-card${s.featured ? " featured" : ""}`}
              href={s.href}
              data-reveal={s.featured ? "scale-settle" : "fade-rise"}
              style={{ "--i": i } as React.CSSProperties}
            >
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
  );
}
