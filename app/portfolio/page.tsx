import Link from "next/link";
import type { Metadata } from "next";
import { PortfolioBrowser } from "@/components/portfolio-browser";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio · NN Construction",
  description:
    "Selected residential and commercial projects from 2023 onward. Scope, materials, and timeline for each.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="nn-page-head">
        <div className="nn-container">
          <div className="nn-page-eyebrow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/icons/square.svg" alt="" />
            <span className="nn-mono">03</span>
            <span className="nn-label">Portfolio</span>
          </div>
          <h1 className="nn-page-title">Recent work.</h1>
          <p className="nn-page-lead">
            Selected residential and commercial projects from 2023 onward.
            Click any project for scope, materials, and timeline.
          </p>
        </div>
      </section>

      <PortfolioBrowser projects={projects} />

      <section className="nn-cta-band">
        <div className="nn-container nn-cta-inner">
          <div>
            <div className="nn-eyebrow">Your project next</div>
            <h2 className="nn-cta-title">Let&apos;s walk your site.</h2>
          </div>
          <Link className="nn-btn nn-btn-primary nn-btn-lg" href="/contact">
            Request estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
