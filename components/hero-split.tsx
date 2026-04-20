import Image from "next/image";
import Link from "next/link";
import { HeroParallax } from "./hero-parallax";
import { HeroTextReveal } from "./hero-text-reveal";
import { HeroTitle } from "./hero-title";

interface HeroSplitProps {
  backImageSrc?: string;
  backImageAlt?: string;
  frontImageSrc?: string;
  frontImageAlt?: string;
}

export function HeroSplit({
  backImageSrc = "/assets/projects/custom-window-install/04.webp",
  backImageAlt = "NN Construction crew installing a window",
  frontImageSrc = "/assets/projects/primary-bath-renovation/04.webp",
  frontImageAlt = "Primary bathroom renovation, finished",
}: HeroSplitProps = {}) {
  return (
    <section className="nn-hero-split">
      <HeroParallax />
      <HeroTextReveal />
      <div className="nn-hero-split-left">
        <div className="nn-hero-split-copy" data-reveal-stagger>
          <HeroTitle
            main={"Full\u2011service construction."}
            accent="Done right."
          />
          <p
            className="nn-hero-split-lead"
            data-reveal="fade-rise"
            style={{ "--i": 14 } as React.CSSProperties}
          >
            Residential construction from framing to finish — plumb to the
            foundation, tight to the weather, finished appraisal-ready.
          </p>
          <Link
            href="/services/interior"
            className="nn-hero-split-cta"
            data-reveal="scale-settle"
            style={{ "--i": 19 } as React.CSSProperties}
          >
            Explore services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="nn-hero-split-right" data-reveal="scale-settle">
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
