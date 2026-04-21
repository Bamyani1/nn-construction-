"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project, ProjectCategory } from "@/lib/data";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Roofing", "Interior", "Exterior"];

interface PortfolioBrowserProps {
  projects: Project[];
}

export function PortfolioBrowser({ projects }: PortfolioBrowserProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalInnerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const programmaticScrollRef = useRef(false);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  const openModal = useCallback(
    (p: Project, trigger: HTMLButtonElement | null) => {
      triggerRef.current = trigger;
      setActiveIdx(0);
      setOpenProject(p);
    },
    []
  );

  const closeModal = useCallback(() => {
    setOpenProject(null);
    // Restore focus after React commits the close.
    queueMicrotask(() => triggerRef.current?.focus());
  }, []);

  // Keyboard: Escape, Arrow left/right, and Tab focus trap.
  useEffect(() => {
    if (!openProject) return;
    const modalEl = modalInnerRef.current;
    if (!modalEl) return;

    // Move focus into the modal on open.
    const focusables = () =>
      modalEl.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    const first = focusables()[0];
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key === "ArrowRight") {
        setActiveIdx((i) => Math.min(i + 1, openProject.images.length - 1));
        return;
      }
      if (e.key === "ArrowLeft") {
        setActiveIdx((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === "Tab") {
        const list = Array.from(focusables());
        if (!list.length) return;
        const firstEl = list[0];
        const lastEl = list[list.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openProject, closeModal]);

  // Mobile: sync swipe scroll position → activeIdx.
  useEffect(() => {
    if (!openProject) return;
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (programmaticScrollRef.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(idx)) setActiveIdx(idx);
          }
        }
      },
      { root: track, threshold: [0.6] }
    );
    Array.from(track.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [openProject]);

  // activeIdx → scroll (thumb / arrow key driven). No-op on desktop where
  // track has overflow: hidden.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (track.scrollWidth <= track.clientWidth) return;
    const slide = track.children[activeIdx] as HTMLElement | undefined;
    if (!slide) return;
    programmaticScrollRef.current = true;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    const t = window.setTimeout(() => {
      programmaticScrollRef.current = false;
    }, 450);
    return () => window.clearTimeout(t);
  }, [activeIdx, openProject]);

  return (
    <>
      <section
        style={{
          padding: "56px 0",
          borderBottom: "1px solid var(--line-quiet)",
        }}
      >
        <div className="nn-container">
          <div className="nn-tabs" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
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
          {visible.length > 0 ? (
            <div className="nn-project-grid">
              {visible.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  className="nn-project-card nn-card-hover"
                  onClick={(e) => openModal(p, e.currentTarget)}
                  aria-haspopup="dialog"
                >
                  <div className="nn-project-img">
                    <Image
                      src={`/assets/projects/${p.slug}/${p.images[0]}`}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="nn-project-meta">
                    <span className="nn-eyebrow">{p.cat}</span>
                  </div>
                  <h3 className="nn-project-title">{p.name}</h3>
                </button>
              ))}
            </div>
          ) : (
            <p className="nn-empty">
              No {filter.toLowerCase()} projects yet.
            </p>
          )}
        </div>
      </section>

      {openProject && (
        <div
          className="nn-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nn-modal-title"
          style={{ display: "flex" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="nn-modal-inner" ref={modalInnerRef} tabIndex={-1}>
            <button
              type="button"
              className="nn-modal-close"
              onClick={closeModal}
            >
              Close ×
            </button>
            <div
              className="nn-modal-track"
              ref={trackRef}
              role="group"
              aria-roledescription="carousel"
              aria-label="Project images"
            >
              {openProject.images.map((img, i) => (
                <div
                  key={img}
                  className="nn-modal-slide"
                  data-idx={i}
                  data-active={i === activeIdx ? "true" : "false"}
                  aria-hidden={i === activeIdx ? undefined : true}
                >
                  <Image
                    src={`/assets/projects/${openProject.slug}/${img}`}
                    alt={i === 0 ? openProject.name : ""}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 900px) 100vw, 900px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
            {openProject.images.length > 1 && (
              <div className="nn-modal-thumbs">
                {openProject.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    className={`nn-modal-thumb${i === activeIdx ? " active" : ""}`}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`View image ${i + 1} of ${openProject.images.length}`}
                    aria-current={i === activeIdx ? "true" : undefined}
                  >
                    <Image
                      src={`/assets/projects/${openProject.slug}/${img}`}
                      alt=""
                      width={96}
                      height={72}
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="nn-modal-detail">
              <div className="nn-eyebrow">{openProject.cat}</div>
              <h2 id="nn-modal-title" className="nn-modal-detail-title">
                {openProject.name}
              </h2>
              <p className="nn-modal-detail-brief">{openProject.brief}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
