"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import { useEffect, useState, type ReactNode } from "react";

const lenisOptions: LenisOptions = {
  lerp: 0.1,
  smoothWheel: true,
  syncTouch: false,
  autoRaf: true,
  anchors: {
    offset: -64,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  },
};

export function LenisProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
