"use client";

import { useEffect } from "react";

const ATTRACT_RADIUS = 160;

export function PointerField() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof matchMedia === "undefined") return;
    if (matchMedia("(hover: none)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const rects = new WeakMap<Element, DOMRect>();
    let magnetic: HTMLElement[] = [];
    let glow: HTMLElement[] = [];

    let px = -9999;
    let py = -9999;
    let rafId = 0;
    let needsRectRefresh = true;

    function refreshLists() {
      magnetic = Array.from(
        document.querySelectorAll<HTMLElement>("[data-magnetic]")
      );
      glow = Array.from(
        document.querySelectorAll<HTMLElement>("[data-glow]")
      );
      needsRectRefresh = true;
      scheduleTick();
    }

    function refreshRects() {
      const seen = new Set<Element>();
      for (const el of magnetic) {
        if (seen.has(el)) continue;
        rects.set(el, el.getBoundingClientRect());
        seen.add(el);
      }
      for (const el of glow) {
        if (seen.has(el)) continue;
        rects.set(el, el.getBoundingClientRect());
        seen.add(el);
      }
      needsRectRefresh = false;
    }

    function tick() {
      rafId = 0;
      if (needsRectRefresh) refreshRects();

      root.style.setProperty("--pointer-vx", `${px}px`);
      root.style.setProperty("--pointer-vy", `${py}px`);

      const vh = window.innerHeight;

      for (const el of magnetic) {
        const r = rects.get(el);
        if (!r || r.bottom < 0 || r.top > vh) continue;

        const halfW = r.width / 2;
        const halfH = r.height / 2;
        const cx = r.left + halfW;
        const cy = r.top + halfH;
        const dx = px - cx;
        const dy = py - cy;
        const reachX = halfW + ATTRACT_RADIUS;
        const reachY = halfH + ATTRACT_RADIUS;

        if (Math.abs(dx) <= reachX && Math.abs(dy) <= reachY) {
          const nx = Math.max(-1, Math.min(1, dx / reachX));
          const ny = Math.max(-1, Math.min(1, dy / reachY));
          el.style.setProperty("--mag-x", nx.toFixed(3));
          el.style.setProperty("--mag-y", ny.toFixed(3));
        } else {
          el.style.setProperty("--mag-x", "0");
          el.style.setProperty("--mag-y", "0");
        }
      }

      for (const el of glow) {
        const r = rects.get(el);
        if (!r || r.bottom < 0 || r.top > vh) continue;
        el.style.setProperty("--glow-x", `${px - r.left}px`);
        el.style.setProperty("--glow-y", `${py - r.top}px`);
      }
    }

    function scheduleTick() {
      if (rafId) return;
      rafId = requestAnimationFrame(tick);
    }

    function onPointerMove(e: PointerEvent) {
      px = e.clientX;
      py = e.clientY;
      scheduleTick();
    }

    function onScrollOrResize() {
      needsRectRefresh = true;
      scheduleTick();
    }

    refreshLists();

    const mo = new MutationObserver(() => refreshLists());
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-magnetic", "data-glow"],
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mo.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      root.style.removeProperty("--pointer-vx");
      root.style.removeProperty("--pointer-vy");
      for (const el of [...magnetic, ...glow]) {
        el.style.removeProperty("--mag-x");
        el.style.removeProperty("--mag-y");
        el.style.removeProperty("--glow-x");
        el.style.removeProperty("--glow-y");
      }
    };
  }, []);

  return null;
}
