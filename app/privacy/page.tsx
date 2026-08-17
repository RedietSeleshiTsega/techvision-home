import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { PageHeader } from "@/components/site/page-header";
import { LegalContent } from "@/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — TechVision",
  description: "How TechVision collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <PageHeader
        eyebrowKey="privacyPage.eyebrow"
        titleKey="privacyPage.title"
        descriptionKey="privacyPage.description"
      />
      <LegalContent pageKey="privacyPage" />
      <SiteFooter />
    </main>
  );
}