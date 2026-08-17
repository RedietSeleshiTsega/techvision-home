"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  GraduationCap, School, BookOpen, HeartHandshake, Landmark, Radio, Building2, ArrowRight,
} from "lucide-react";

const industryDetails = [
  { key: "schools", icon: School, productKeys: ["education-erp", "lms"] },
  { key: "universities", icon: GraduationCap, productKeys: ["education-erp", "lms", "hr"] },
  { key: "trainingCenters", icon: BookOpen, productKeys: ["lms"] },
  { key: "ngos", icon: HeartHandshake, productKeys: ["erp", "hr"] },
  { key: "government", icon: Landmark, productKeys: ["erp", "hr"] },
  { key: "telecom", icon: Radio, productKeys: ["erp", "hr"] },
  { key: "businesses", icon: Building2, productKeys: ["erp", "hr", "lms"] },
];

export function IndustriesGrid() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.key}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 hover-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight">
                  {t(`industries.items.${industry.key}.name`)}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {t(`industriesPage.details.${industry.key}`)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {industry.productKeys.map((slug) => (
                    <span
                      key={slug}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t(`solutions.products.${slug}.short`)}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                >
                  {t("industriesPage.talkToUs")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}