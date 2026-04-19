"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkItem {
  label: string;
  href: string;
  matchPrefix?: string;
}

interface NavLinksProps {
  items: NavLinkItem[];
}

export function NavLinks({ items }: NavLinksProps) {
  const pathname = usePathname() ?? "/";

  return (
    <div className="nn-nav-links">
      {items.map((item) => {
        const active =
          item.matchPrefix != null
            ? pathname.startsWith(item.matchPrefix)
            : pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nn-nav-link${active ? " active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
