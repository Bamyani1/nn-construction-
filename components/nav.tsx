import Link from "next/link";
import { NavLinks, type NavLinkItem } from "@/components/nav-links";

const navItems: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/interior", matchPrefix: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
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
        <NavLinks items={navItems} />
        <Link className="nn-btn nn-btn-primary" href="/contact">
          Get a quote →
        </Link>
      </div>
    </nav>
  );
}
