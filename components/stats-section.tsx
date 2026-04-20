import { stats } from "@/lib/data";

export function StatsSection() {
  return (
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
  );
}
