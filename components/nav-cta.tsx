"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavCta() {
  const pathname = usePathname();
  const href = pathname === "/contact" ? "#contact-form" : "/contact";

  return (
    <Link
      className="nn-btn nn-btn-primary nn-nav-cta"
      href={href}
      data-magnetic
      data-glow
    >
      Request estimate <span className="nn-btn-arrow" aria-hidden="true">→</span>
    </Link>
  );
}
