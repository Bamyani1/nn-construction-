"use client";

import { useEffect } from "react";

/* Fires the per-word title cascade by stamping data-hero-title-play on the
   hero section. Words ship hidden via CSS (.nn-hero-word { opacity: 0 }) so
   first paint shows nothing — the attribute selector turns on the keyframe.
   Scheduled on rAF so layout is committed before the animation begins. */
export function HeroTextReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".nn-hero-split");
    if (!root) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    requestAnimationFrame(() => {
      root.setAttribute(
        "data-hero-title-play",
        reduced ? "reduced" : "full",
      );
    });
  }, []);
  return null;
}
