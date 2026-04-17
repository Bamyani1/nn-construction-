"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/lib/data";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Roofing", "Interior", "Exterior"];

interface PortfolioBrowserProps {
  projects: Project[];
}

export function PortfolioBrowser({ projects }: PortfolioBrowserProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      <section
        style={{
          padding: "56px 0",
          borderBottom: "1px solid var(--line-quiet)",
        }}
      >
        <div className="nn-container">
          <div className="nn-tabs">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`nn-tab${filter === f ? " active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="nn-section">
        <div className="nn-container">
          <div className="nn-project-grid">
            {visible.map((p) => (
              <a
                key={p.slug}
                href="#"
                className="nn-project-card"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenProject(p);
                }}
              >
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {openProject && (
        <div
          className="nn-modal"
          style={{ display: "flex" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenProject(null);
          }}
        >
          <div className="nn-modal-inner">
            <button
              type="button"
              className="nn-modal-close"
              onClick={() => setOpenProject(null)}
            >
              Close ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/img/${openProject.img}.svg`}
              alt=""
              style={{ width: "100%", display: "block" }}
            />
            <div style={{ padding: "48px 40px" }}>
              <div className="nn-eyebrow">
                {openProject.cat} · {openProject.year}
              </div>
              <h2
                style={{
                  font: "500 40px/1.1 var(--ff-sans)",
                  letterSpacing: "-0.015em",
                  margin: "14px 0 0",
                }}
              >
                {openProject.name}
              </h2>
              <div
                style={{ color: "var(--fg-3)", marginTop: 10, fontSize: 14 }}
              >
                {openProject.loc} ·{" "}
                <span className="nn-mono">{openProject.area}</span>
              </div>
              <p
                style={{
                  margin: "28px 0 0",
                  color: "var(--fg-2)",
                  maxWidth: 620,
                  lineHeight: 1.65,
                }}
              >
                {openProject.brief}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
