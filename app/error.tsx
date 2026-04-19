"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className="nn-page-head">
      <div className="nn-container">
        <div className="nn-page-eyebrow">
          <span className="nn-label">Something went wrong</span>
        </div>
        <h1 className="nn-page-title">
          The framing&apos;s
          <br />
          a bit out of plumb.
        </h1>
        <p className="nn-page-lead">
          An unexpected error interrupted this page. You can reload and try
          again, or head back to familiar ground.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
          <button
            type="button"
            className="nn-btn nn-btn-primary"
            onClick={reset}
          >
            Try again →
          </button>
          <Link className="nn-btn nn-btn-ghost" href="/">
            Back to home →
          </Link>
        </div>
      </div>
    </section>
  );
}
