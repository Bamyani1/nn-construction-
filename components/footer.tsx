import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="nn-footer">
      <div className="nn-footer-inner">
        <div className="nn-footer-brand">
          <Image
            className="nn-footer-mark"
            src="/assets/logo.png"
            alt="NN Construction"
            width={296}
            height={252}
          />
          <p className="nn-footer-blurb">
            Full-service construction. Residential &amp; commercial. Licensed MHIC #{site.licenses.mhic}.
          </p>
        </div>
        <div>
          <div className="nn-eyebrow">Services</div>
          <ul className="nn-footer-list">
            <li>
              <Link href="/services/interior">Interior</Link>
            </li>
            <li>
              <Link href="/services/exterior">Exterior</Link>
            </li>
            <li>
              <Link href="/services/exterior#roofing">Roofing</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="nn-eyebrow">Company</div>
          <ul className="nn-footer-list">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="nn-eyebrow">Office</div>
          <div className="nn-footer-office">
            {site.address}
            <br />
            {site.phone}
            <br />
            {site.email}
          </div>
        </div>
      </div>
      <div className="nn-footer-base">
        <span>© 2026 NN Construction BD Corporation</span>
        <span>
          MHIC #{site.licenses.mhic} · DC {site.licenses.dc} · VA {site.licenses.va}
        </span>
      </div>
    </footer>
  );
}
