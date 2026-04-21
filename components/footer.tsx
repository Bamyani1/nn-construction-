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
            src="/assets/nn-logo-with-text.png"
            alt="NN Construction"
            width={241}
            height={172}
          />
          <p className="nn-footer-blurb">
            Full-service construction. Residential &amp; commercial.
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
            <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
