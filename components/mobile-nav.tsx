"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import type { NavLinkItem } from "@/components/nav-links";

interface MobileNavProps {
  items: NavLinkItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const drawerId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      trigger?.focus();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`nn-mobile-trigger${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls={drawerId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nn-mobile-trigger-bars" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
        id={drawerId}
        className={`nn-mobile-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
      >
        <div
          className="nn-mobile-backdrop"
          onClick={close}
          aria-hidden="true"
        />
        <div className="nn-mobile-panel" ref={panelRef}>
          <div className="nn-mobile-panel-head">
            <button
              ref={closeRef}
              type="button"
              className="nn-mobile-close"
              onClick={close}
              aria-label="Close menu"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav className="nn-mobile-links" aria-label="Mobile menu">
            {items.map((item, i) => {
              const active =
                item.matchPrefix != null
                  ? pathname.startsWith(item.matchPrefix)
                  : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nn-mobile-link${active ? " active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={close}
                  style={{ ["--i" as string]: i }}
                >
                  <span className="nn-mobile-link-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="nn-mobile-link-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="nn-btn nn-btn-primary nn-mobile-cta"
            onClick={close}
          >
            Get a quote{" "}
            <span className="nn-btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
