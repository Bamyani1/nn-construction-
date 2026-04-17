"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  match: (pathname: string) => boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", match: (p) => p === "/" },
  {
    label: "Services",
    href: "/services/interior",
    match: (p) => p.startsWith("/services"),
  },
  { label: "Portfolio", href: "/portfolio", match: (p) => p === "/portfolio" },
  { label: "About", href: "/about", match: (p) => p === "/about" },
  { label: "Testimonials", href: "/testimonials", match: (p) => p === "/testimonials" },
  { label: "FAQ", href: "/faq", match: (p) => p === "/faq" },
  { label: "Contact", href: "/contact", match: (p) => p === "/contact" },
];

export function Nav() {
  const pathname = usePathname() ?? "/";

  return (
    <nav className="nn-nav">
      <div className="nn-nav-inner">
        <Link className="nn-brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="nn-brand-mark"
            src="/assets/logo-mark.svg"
            alt="NN monogram"
          />
          <div>
            <div className="nn-brand-word">NN Construction</div>
            <div className="nn-brand-tag">Your dream · Our hardwork</div>
          </div>
        </Link>
        <div className="nn-nav-links">
          {navItems.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nn-nav-link${active ? " active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <Link className="nn-btn nn-btn-primary" href="/contact">
          Get a quote →
        </Link>
      </div>
    </nav>
  );
}
