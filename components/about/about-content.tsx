"use client";

import { useTranslation } from "react-i18next";
import { Target, Eye, Heart } from "lucide-react";

const valueIcons = { mission: Target, vision: Eye, values: Heart };
const valueKeys = ["mission", "vision", "values"] as const;
const milestoneKeys = ["founded", "organizations", "products", "users"] as const;
const storyParagraphKeys = ["p1", "p2", "p3"] as const;

export function AboutContent() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {valueKeys.map((key) => {
              const Icon = valueIcons[key];
              return (
                <div key={key} className="rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl tracking-tight">
                    {t(`aboutPage.values.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {t(`aboutPage.values.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-primary text-primary-foreground">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {milestoneKeys.map((key) => (
              <div key={key} className="text-center">
                <div className="font-display text-4xl md:text-5xl tracking-tight">
                  {t(`aboutPage.milestones.${key}.value`)}
                </div>
                <div className="mt-2 text-sm text-primary-foreground/80">
                  {t(`aboutPage.milestones.${key}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            {t("aboutPage.story.eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-balance">
            {t("aboutPage.story.heading")}
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
            {storyParagraphKeys.map((key) => (
              <p key={key}>{t(`aboutPage.story.${key}`)}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}