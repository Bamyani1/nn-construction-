import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found · NN Construction",
};

export default function NotFound() {
  return (
    <section className="nn-page-head">
      <div className="nn-container">
        <div className="nn-page-eyebrow">
          <span className="nn-label">404 · Page not found</span>
        </div>
        <h1 className="nn-page-title">
          This one&apos;s
          <br />
          off the blueprint.
        </h1>
        <p className="nn-page-lead">
          The page you were looking for isn&apos;t here. It may have moved, or
          the link may be stale.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
          <Link className="nn-btn nn-btn-primary" href="/">
            Back to home →
          </Link>
          <Link className="nn-btn nn-btn-ghost" href="/portfolio">
            See our portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
