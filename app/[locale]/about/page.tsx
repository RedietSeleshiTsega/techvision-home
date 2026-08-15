import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { PageHeader } from "@/components/site/page-header";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "About — TechVision",
  description:
    "TechVision builds cloud-based digital solutions for organizations across Ethiopia and beyond, with a mission to make technology accessible and impactful.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower organizations with affordable, world-class digital tools that simplify operations and elevate outcomes.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A future where every school, institution, and business in the region runs on smart, connected technology.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Reliability, accessibility, and genuine local partnership guide everything we build and support.",
  },
];

const milestones = [
  { value: "2018", label: "Founded in Addis Ababa" },
  { value: "500+", label: "Organizations served" },
  { value: "4", label: "Flagship products" },
  { value: "1M+", label: "Users empowered" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <PageHeader
        eyebrow="About"
        title="Technology built for our communities"
        description="TechVision is on a mission to help organizations across Ethiopia and beyond run smarter with secure, scalable, cloud-based software — backed by people who understand the local context."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl tracking-tight">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-primary text-primary-foreground">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl tracking-tight">{m.value}</div>
                <div className="mt-2 text-sm text-primary-foreground/80">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">Our story</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-balance">
            From a local idea to a regional platform
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              TechVision started with a simple observation: organizations in our region were doing
              extraordinary work with tools that held them back. Spreadsheets, paper records, and
              disconnected systems made growth harder than it needed to be.
            </p>
            <p>
              We set out to change that — building cloud-based software that&apos;s powerful enough for
              enterprises yet accessible to schools and small teams. Today, our LMS, Education ERP,
              ERP, and HR products help hundreds of organizations operate with confidence.
            </p>
            <p>
              What sets us apart is partnership. Every customer gets onboarding and support from a
              team that speaks their language and understands their reality.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </main>
  );
}
