import Image from "next/image";
import Link from "next/link";

interface HeroSplitProps {
  backImageSrc?: string;
  backImageAlt?: string;
  frontImageSrc?: string;
  frontImageAlt?: string;
}

export function HeroSplit({
  backImageSrc = "/assets/projects/custom-window-install/04.webp",
  backImageAlt = "NN Construction crew installing a window",
  frontImageSrc = "/assets/projects/standing-seam-reroof/12.webp",
  frontImageAlt = "Two-person crew laying standing-seam roofing",
}: HeroSplitProps = {}) {
  return (
    <section className="nn-hero-split">
      <div className="nn-hero-split-left">
        <div className="nn-hero-split-copy">
          <h1 className="nn-hero-split-title">
            {"Full\u2011service construction."}
            <span className="nn-hero-split-title-accent">Done right.</span>
          </h1>
          <p className="nn-hero-split-lead">
            Residential construction from framing to finish — plumb to the
            foundation, tight to the weather, finished appraisal-ready.
          </p>
          <Link href="/services/interior" className="nn-hero-split-cta">
            Explore services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="nn-hero-split-right">
        <div className="nn-hero-stack">
          <figure className="nn-hero-stack-back">
            <span className="nn-hero-stack-glow" aria-hidden="true">
              <Image src={backImageSrc} alt="" fill sizes="50vw" />
            </span>
            <span className="nn-hero-stack-img">
              <Image
                src={backImageSrc}
                alt={backImageAlt}
                fill
                sizes="(max-width: 768px) 70vw, 30vw"
                priority
              />
            </span>
          </figure>
          <figure className="nn-hero-stack-front">
            <span className="nn-hero-stack-glow" aria-hidden="true">
              <Image src={frontImageSrc} alt="" fill sizes="40vw" />
            </span>
            <span className="nn-hero-stack-img">
              <Image
                src={frontImageSrc}
                alt={frontImageAlt}
                fill
                sizes="(max-width: 768px) 60vw, 24vw"
                priority
              />
            </span>
          </figure>
        </div>
      </div>
    </section>
  );
}
