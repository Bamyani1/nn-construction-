import Link from "next/link";

export function CtaBand({ id }: { id?: string } = {}) {
  return (
    <section id={id} className="nn-cta-band" data-reveal="scale-settle">
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
  );
}
