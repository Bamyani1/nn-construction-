import Link from "next/link";

export function HeroDraftsman() {
  return (
    <section className="nn-hero nn-hero-draft">
      <div className="nn-hero-bg">
        {/* dot grid field — extremely faint, like blueprint paper tooth */}
        <svg
          className="nn-hero-grid"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="heroDots2"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#3B82F6" fillOpacity="0.05" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="1440" height="900" fill="url(#heroDots2)" />
        </svg>

        {/* sparse architectural measurement annotations */}
        <svg
          className="nn-hero-draft-marks"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g
            stroke="#3B82F6"
            fill="none"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="square"
          >
            {/* TOP horizontal dimension line */}
            <g opacity="0.55">
              <line x1="200" y1="104" x2="200" y2="128" />
              <line x1="1240" y1="104" x2="1240" y2="128" />
              <line x1="200" y1="116" x2="1240" y2="116" />
              <line x1="194" y1="110" x2="206" y2="122" />
              <line x1="1234" y1="110" x2="1246" y2="122" />
              <line x1="460" y1="113" x2="460" y2="119" />
              <line x1="720" y1="113" x2="720" y2="119" />
              <line x1="980" y1="113" x2="980" y2="119" />
            </g>
            <rect x="684" y="108" width="72" height="16" fill="#F5F2ED" />
            <text
              x="720"
              y="120"
              fill="#3B82F6"
              fontFamily="'JetBrains Mono',monospace"
              fontSize="10"
              textAnchor="middle"
              letterSpacing="3"
              opacity="0.75"
            >
              1240 mm
            </text>

            {/* LEFT vertical measurement line */}
            <g opacity="0.5">
              <line x1="88" y1="220" x2="88" y2="720" />
              <line x1="76" y1="220" x2="100" y2="220" />
              <line x1="76" y1="720" x2="100" y2="720" />
              <line x1="82" y1="214" x2="94" y2="226" />
              <line x1="82" y1="714" x2="94" y2="726" />
              <line x1="85" y1="345" x2="91" y2="345" />
              <line x1="85" y1="470" x2="91" y2="470" />
              <line x1="85" y1="595" x2="91" y2="595" />
            </g>
            <rect x="80" y="456" width="16" height="44" fill="#F5F2ED" />
            <text
              x="88"
              y="478"
              fill="#3B82F6"
              fontFamily="'JetBrains Mono',monospace"
              fontSize="10"
              textAnchor="middle"
              letterSpacing="3"
              opacity="0.75"
              transform="rotate(-90 88 478)"
            >
              900 mm
            </text>

            {/* RIGHT corner registration cross */}
            <g opacity="0.5" transform="translate(1352 128)">
              <circle cx="0" cy="0" r="12" strokeWidth="1" />
              <line x1="-18" y1="0" x2="18" y2="0" />
              <line x1="0" y1="-18" x2="0" y2="18" />
            </g>
            <text
              x="1352"
              y="170"
              fill="#3B82F6"
              fontFamily="'JetBrains Mono',monospace"
              fontSize="9"
              textAnchor="middle"
              letterSpacing="3"
              opacity="0.55"
            >
              A · 01
            </text>

            {/* DIAGONAL elevation callout */}
            <g opacity="0.55">
              <circle cx="340" cy="760" r="3" fill="#3B82F6" stroke="none" />
              <line x1="340" y1="760" x2="420" y2="712" />
              <line x1="420" y1="712" x2="560" y2="712" />
            </g>
            <text
              x="568"
              y="716"
              fill="#3B82F6"
              fontFamily="'JetBrains Mono',monospace"
              fontSize="10"
              letterSpacing="3"
              opacity="0.75"
            >
              EL. +0&apos;-0&quot; · GRADE
            </text>

            {/* BOTTOM-RIGHT corner reference tick cluster */}
            <g opacity="0.45" transform="translate(1320 808)">
              <line x1="-40" y1="0" x2="40" y2="0" />
              <line x1="-40" y1="-8" x2="-40" y2="8" />
              <line x1="40" y1="-8" x2="40" y2="8" />
              <line x1="0" y1="-8" x2="0" y2="8" />
            </g>
            <text
              x="1320"
              y="836"
              fill="#3B82F6"
              fontFamily="'JetBrains Mono',monospace"
              fontSize="9"
              textAnchor="middle"
              letterSpacing="3"
              opacity="0.5"
            >
              SCALE 1:50
            </text>
          </g>
        </svg>
      </div>

      {/* top meta */}
      <div className="nn-hero-meta">
        <div className="nn-hero-meta-inner">
          <span>Est. 2009 · Silver Spring, MD</span>
          <span>MHIC #132-8847</span>
        </div>
      </div>

      {/* copy */}
      <div className="nn-hero-copy">
        <div className="nn-hero-copy-inner">
          <div className="nn-eyebrow">
            Residential &amp; Commercial · Roofing specialty
          </div>
          <h1 className="nn-display">
            Your dream,
            <br />
            our hardwork.
          </h1>
          <p className="nn-lead">
            Full-service construction — interior, exterior, and a proven
            specialty in roofing. Built true to plumb, backed by a 25-year
            workmanship warranty.
          </p>
          <div className="nn-hero-cta">
            <Link
              className="nn-btn nn-btn-primary nn-btn-lg"
              href="/contact"
            >
              Request an estimate →
            </Link>
            <Link className="nn-btn nn-btn-ghost" href="/portfolio">
              See recent work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
