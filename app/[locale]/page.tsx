// app/[locale]/page.tsx
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { HomeHero } from "@/components/home/home-hero";
import { StatsBand } from "@/components/home/stats-band";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { WhyTechVision } from "@/components/home/why-techvision";
import { IndustriesStrip } from "@/components/home/industries-strip";
import { PricingPlans } from "@/components/site/pricing-plans";
import { CtaBanner } from "@/components/site/cta-banner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <HomeHero />
      <StatsBand />
      <SolutionsGrid />
      <WhyTechVision />
      <IndustriesStrip />
      <PricingPlans />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}