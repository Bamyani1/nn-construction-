import Image from "next/image";
import Link from "next/link";
import { NavLinks, type NavLinkItem } from "@/components/nav-links";

const navItems: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/interior", matchPrefix: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  return (
    <nav className="nn-nav">
      <div className="nn-nav-inner">
        <Link className="nn-brand" href="/">
          <Image
            className="nn-brand-mark-img"
            src="/assets/logo.png"
            alt="NN Construction-BD"
            width={296}
            height={252}
            priority
          />
        </Link>
        <NavLinks items={navItems} />
        <Link className="nn-btn nn-btn-primary" href="/contact">
          Get a quote →
        </Link>
      </div>
    </nav>
  );
}
