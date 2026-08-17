import type { Metadata } from "next";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { PageHeader } from "@/components/site/page-header";
import { LegalContent } from "@/components/legal/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service — TechVision",
  description: "The terms and conditions for using TechVision products and services.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <PageHeader
        eyebrowKey="termsPage.eyebrow"
        titleKey="termsPage.title"
        descriptionKey="termsPage.description"
      />
      <LegalContent pageKey="termsPage" />
      <SiteFooter />
    </main>
  );
}