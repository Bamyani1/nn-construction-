"use client";

import { useEffect } from "react";

const EASE_OUT = "cubic-bezier(0.2, 0.8, 0.2, 1)";
const MOUNT_DURATION_MS = 700;
const STAGGER_STEP_MS = 80;

/* Coordinates the reveal system across three entry paths:
   - Above-the-fold at load (Chrome): each element's CSS view()
     animation has its timeline swapped to the document timeline
     via WAAPI, giving a 700ms time-based entrance with the same
     keyframes. Latch after the duration elapses.
   - Above-the-fold at load (Safari): just set data-revealed; the
     fallback transition in CSS handles the visuals.
   - Below-the-fold: observe for viewport intersection and latch on
     first crossing. Chrome's scroll-driven animation drives the
     entrance; the latched rule's short transition smooths the
     snap if the observer fires mid-animation.
   - Already-scrolled-past at load (hash-link): latch silently. */
export function RevealObserver() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal]:not([data-revealed])",
      ),
    );
    if (!targets.length) return;

    const supportsView =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("animation-timeline: view()");
    const vh = window.innerHeight;
    const toObserve: HTMLElement[] = [];
    const toMount: HTMLElement[] = [];

    for (const el of targets) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0) {
        el.setAttribute("data-revealed", "");
      } else if (rect.top < vh) {
        if (supportsView) {
          toMount.push(el);
        } else {
          el.setAttribute("data-revealed", "");
        }
      } else {
        toObserve.push(el);
      }
    }

    // Defer mount animations a frame so scroll-driven animations have
    // been attached by the browser and getAnimations() returns them.
    if (toMount.length) {
      requestAnimationFrame(() => {
        for (const el of toMount) runMountAnimation(el);
      });
    }

    if (!toObserve.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.setAttribute("data-revealed", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );
    toObserve.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

function runMountAnimation(el: HTMLElement) {
  const anims = el.getAnimations();
  if (!anims.length) {
    el.setAttribute("data-revealed", "");
    return;
  }

  const i = parseInt(
    getComputedStyle(el).getPropertyValue("--i").trim() || "0",
    10,
  );
  const delay = i * STAGGER_STEP_MS;

  let swapped = false;
  for (const anim of anims) {
    try {
      anim.timeline = document.timeline;
      anim.effect?.updateTiming({
        duration: MOUNT_DURATION_MS,
        delay,
        iterations: 1,
        fill: "both",
        easing: EASE_OUT,
      });
      anim.currentTime = 0;
      anim.play();
      swapped = true;
    } catch {
      // Some browsers may refuse to retarget. Fall through to latch.
    }
  }

  if (!swapped) {
    el.setAttribute("data-revealed", "");
    return;
  }

  window.setTimeout(() => {
    el.setAttribute("data-revealed", "");
  }, MOUNT_DURATION_MS + delay + 50);
}
