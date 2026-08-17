"use client";

import { useTranslation } from "react-i18next";

export function StatsBand() {
  const { t } = useTranslation();
  const stats = t("stats.items", { returnObjects: true }) as { value: string; label: string }[];

  return (
    <section className="relative py-16 bg-primary text-primary-foreground">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl tracking-tight">{stat.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}