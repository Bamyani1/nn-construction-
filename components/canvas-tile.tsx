"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface CanvasTileProps {
  label: string;
  note: string;
  href: string;
}

const FRAME_W = 1440;
const FRAME_H = 1800;

export function CanvasTile({ label, note, href }: CanvasTileProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setScale(width / FRAME_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);    

  return (
    <div className="canvas-cell">
      <div className="canvas-cell-head">
        <span className="canvas-cell-title">{label}</span>
      </div>
      <p className="canvas-cell-note">{note}</p>
      <div ref={wrapRef} className="canvas-frame-wrap">
        {scale > 0 && (
          <iframe
            title={label}
            src={href}
            scrolling="no"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: FRAME_W,
              height: FRAME_H,
              border: 0,
              transformOrigin: "0 0",
              transform: `scale(${scale})`,
              pointerEvents: "none",
              background: "var(--nn-paper)",
            }}
          />
        )}
        <Link href={href} className="canvas-frame-link">
          <span className="canvas-frame-cta">Open page →</span>
        </Link>
      </div>
    </div>
  );
}
