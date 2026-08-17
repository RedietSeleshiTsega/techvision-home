"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { industries } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export function IndustriesStrip() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">{t("industries.eyebrow")}</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
              {t("industries.heading")}
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {t("industries.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.key} className="bg-card p-7 transition-colors hover:bg-accent/40">
              <h3 className="font-display text-2xl tracking-tight">{t(`industries.items.${industry.key}.name`)}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {t(`industries.items.${industry.key}.description`)}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-between bg-primary p-7 text-primary-foreground">
            <span className="font-display text-2xl tracking-tight">{t("industries.yourSector")}</span>
            <Link
              href="/contact"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/20 hover:bg-background/30 transition-colors"
              aria-label={t("industries.contactAboutIndustry")}
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}