import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { PageHeader } from "@/components/site/page-header";
import { AboutContent } from "@/components/about/about-content";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "About — TechVision",
  description:
    "TechVision builds cloud-based digital solutions for organizations across Ethiopia and beyond, with a mission to make technology accessible and impactful.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <PageHeader
        eyebrowKey="aboutPage.eyebrow"
        titleKey="aboutPage.title"
        descriptionKey="aboutPage.description"
      />
      <AboutContent />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}