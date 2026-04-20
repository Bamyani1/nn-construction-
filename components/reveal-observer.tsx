"use client";

import { useEffect } from "react";

/* Latches [data-reveal] elements to their end state on first viewport
   crossing — CSS view() timeline is bidirectional, so without this latch
   a scroll-up would reverse the entrance. Also drives the fallback path
   for browsers without animation-timeline: view(). */
export function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-revealed])",
    );
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Latch on intersection, or when the element has already scrolled
          // past the viewport top (handles fast jumps / hash-link landings
          // where the observer never saw the transient intersection).
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.setAttribute("data-revealed", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
