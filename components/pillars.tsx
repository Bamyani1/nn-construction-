const pillars = [
  {
    title: "Quality workmanship",
    desc: "Tight miters. Consistent reveal. Plumb to the foundation.",
  },
  {
    title: "Expert consultation",
    desc: "Free walk-through. Written estimate in five days. No pressure.",
  },
  {
    title: "Timely completion",
    desc: "Schedules met. Permit timelines built in honestly, up front.",
  },
  {
    title: "Customer satisfaction",
    desc: "Clean punch list. 25-year workmanship warranty. Reachable directly.",
  },
];

export function Pillars() {
  return (
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
            <div key={p.title} className="nn-pillar">
              <h3 className="nn-pillar-title">{p.title}</h3>
              <p className="nn-pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
