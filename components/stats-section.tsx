import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="nn-section">
      <div className="nn-container nn-stats" data-reveal-stagger>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="nn-stat"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="nn-eyebrow" data-reveal="fade-rise">
              {s.label}
            </div>
            <div className="nn-stat-num" data-reveal="blur-to-sharp">
              {s.value}
            </div>
            <div className="nn-stat-unit" data-reveal="fade-rise">
              {s.unit}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
