"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
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
    if (cssTimeline) return;
    const el = ref.current;
    if (!el) return;

    if (lenis) {
      const handler = () => {
        el.style.transform = `scaleX(${lenis.progress})`;
      };
      lenis.on("scroll", handler);
      handler();
      return () => {
        lenis.off("scroll", handler);
      };
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? doc.scrollTop / max : 0;
      el.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [lenis, cssTimeline]);

  return <div ref={ref} className="nn-scroll-progress" aria-hidden="true" />;
}
