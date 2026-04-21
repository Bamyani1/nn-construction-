import Image from "next/image";
import Link from "next/link";
import { NavLinks, type NavLinkItem } from "@/components/nav-links";
import { MobileNav } from "@/components/mobile-nav";
import { NavCta } from "@/components/nav-cta";

const navItems: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", matchPrefix: "/services" },
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
            src="/assets/nn-logo.png"
            alt="NN Construction"
            width={172}
            height={140}
            priority
          />
          <div className="nn-brand-word">NN Construction</div>
        </Link>
        <NavLinks items={navItems} />
        <div className="nn-nav-right">
          <NavCta />
          <MobileNav items={navItems} />
        </div>
      </div>
    </nav>
  );
}
