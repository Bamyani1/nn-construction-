import { HeroSplit } from "@/components/hero-split";
import { Pillars } from "@/components/pillars";
import { StatsSection } from "@/components/stats-section";
import { Editorial } from "@/components/editorial";
import { ServicesPreview } from "@/components/services-preview";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { TestimonialLead } from "@/components/testimonial-lead";
import { CtaBand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <>
      <HeroSplit />
      <Pillars />
      <hr className="nn-rule" style={{ maxWidth: 1240, margin: "0 auto" }} />
      <StatsSection />
      <Editorial />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialLead />
      <CtaBand />
    </>
  );
}
