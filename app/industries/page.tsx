import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { PageHeader } from "@/components/site/page-header";
import { IndustriesGrid } from "@/components/industries/industries-grid";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Industries — TechVision",
  description:
    "TechVision powers schools, universities, training centers, NGOs, government, telecom, and businesses with tailored digital solutions.",
};

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <PageHeader
        eyebrowKey="industriesPage.eyebrow"
        titleKey="industriesPage.title"
        descriptionKey="industriesPage.description"
      />
      <IndustriesGrid />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}