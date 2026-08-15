import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  School,
  BookOpen,
  HeartHandshake,
  Landmark,
  Radio,
  Building2,
  ArrowRight,
} from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { PageHeader } from "@/components/site/page-header";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Industries — TechVision",
  description:
    "TechVision powers schools, universities, training centers, NGOs, government, telecom, and businesses with tailored digital solutions.",
};

const industryDetails = [
  {
    name: "Schools",
    icon: School,
    description: "Digitize K–12 administration, attendance, fees, and classroom learning in one platform.",
    products: ["Education ERP", "LMS"],
  },
  {
    name: "Universities",
    icon: GraduationCap,
    description: "Manage multiple faculties, campuses, admissions, and research at national scale.",
    products: ["Education ERP", "LMS", "HR"],
  },
  {
    name: "Training Centers",
    icon: BookOpen,
    description: "Run cohorts, sell courses, issue certificates, and track learner outcomes.",
    products: ["LMS"],
  },
  {
    name: "NGOs",
    icon: HeartHandshake,
    description: "Track programs, beneficiaries, staff, and impact reporting transparently.",
    products: ["ERP", "HR"],
  },
  {
    name: "Government",
    icon: Landmark,
    description: "Secure, compliant systems for public institutions and workforce management.",
    products: ["ERP", "HR"],
  },
  {
    name: "Telecom",
    icon: Radio,
    description: "Coordinate distributed teams, operations, and finance across regions.",
    products: ["ERP", "HR"],
  },
  {
    name: "Businesses",
    icon: Building2,
    description: "Unify finance, inventory, sales, and people in a single connected system.",
    products: ["ERP", "HR", "LMS"],
  },
];

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />
      <PageHeader
        eyebrow="Industries"
        title="Solutions tailored to your sector"
        description="From classrooms to national enterprises, TechVision adapts to the way your organization works — with the right products configured for your needs."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryDetails.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-7 hover-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl tracking-tight">{industry.name}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {industry.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    Talk to us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </main>
  );
}
