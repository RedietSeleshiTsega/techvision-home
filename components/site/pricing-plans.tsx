"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/lib/site-data";

export function PricingPlans({ showHeader = true }: { showHeader?: boolean }) {
  const t = useTranslations("pricing");
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {showHeader && (
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">{t("eyebrow")}</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
              {t("heading")}
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{t("subheading")}</p>
          </div>
        )}

        <div className="mt-10 flex items-center gap-4">
          <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            {t("monthly")}
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-muted rounded-full p-1 transition-colors hover:bg-accent"
            aria-label={t("toggleAnnual")}
          >
            <div
              className={`w-5 h-5 bg-primary rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            {t("annual")}
          </span>
          {isAnnual && (
            <span className="ml-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-foreground">
              {t("saveUpTo")}
            </span>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.key}
              className={`relative flex flex-col rounded-2xl border bg-card p-7 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/15 ring-1 ring-primary"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {t("mostPopular")}
                </span>
              )}
              <h3 className="font-display text-2xl tracking-tight">{t(`plans.${plan.key}.name`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(`plans.${plan.key}.description`)}</p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-4xl tracking-tight">
                  ${(isAnnual ? plan.annual : plan.monthly).toLocaleString()}
                </span>
                <span className="text-muted-foreground text-sm">{t("perMonth")}</span>
              </div>

              <Link
                href="/contact"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-accent"
                }`}
              >
                {t(`plans.${plan.key}.cta`)}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {(t.raw(`plans.${plan.key}.features`) as string[]).map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {t("customPlan")}{" "}
          <Link href="/contact" className="text-foreground underline underline-offset-4 hover:text-primary">
            {t("talkToTeam")}
          </Link>
        </p>
      </div>
    </section>
  );
}