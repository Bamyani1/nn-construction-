"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

/* Drives the hero's scroll-linked parallax.
   - Mirrors ScrollProgress: CSS scroll-timeline primary, Lenis/native
     scroll JS fallback for browsers without animation-timeline support.
   - Toggles [data-hero-active] while the section is in view so the CSS
     can promote the drifting layers to compositor only when needed.
   - In the fallback path, sets [data-hero-scroll-ready] and writes
     --nn-hero-scroll (0..1) on the section; CSS reads that variable
     under @supports not (animation-timeline: scroll()). */
export function HeroParallax() {
  const lenis = useLenis();
  const [cssTimeline, setCssTimeline] = useState(true);

  useEffect(() => {
    const supports =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("animation-timeline: scroll()");
    setCssTimeline(supports);
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".nn-hero-split");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hero.setAttribute("data-hero-active", "");
        } else {
          hero.removeAttribute("data-hero-active");
        }
      },
      { rootMargin: "20% 0px 20% 0px" },
    );
    io.observe(hero);

    if (cssTimeline) {
      return () => {
        io.disconnect();
        hero.removeAttribute("data-hero-active");
      };
    }

    // Reduced-motion mirrors the CSS path: no drift. The CSS media
    // query already nulls the transforms, but skip the subscription
    // so we don't run the handler every frame for no visual effect.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return () => {
        io.disconnect();
        hero.removeAttribute("data-hero-active");
      };
    }

    hero.setAttribute("data-hero-scroll-ready", "");
    const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
    const readProgress = () => {
      const rect = hero.getBoundingClientRect();
      return clamp01(-rect.top / window.innerHeight);
    };
    const apply = (p: number) => {
      hero.style.setProperty("--nn-hero-scroll", String(p));
    };

    const cleanupFallback = () => {
      io.disconnect();
      hero.removeAttribute("data-hero-active");
      hero.removeAttribute("data-hero-scroll-ready");
      hero.style.removeProperty("--nn-hero-scroll");
    };

    if (lenis) {
      const handler = () => apply(readProgress());
      lenis.on("scroll", handler);
      handler();
      return () => {
        lenis.off("scroll", handler);
        cleanupFallback();
      };
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      apply(readProgress());
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      cleanupFallback();
    };
  }, [cssTimeline, lenis]);

  return null;
}
