"use client";

import { useTranslation } from "react-i18next";

const sectionKeys = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"] as const;

export function LegalContent({ pageKey }: { pageKey: string }) {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <p className="text-sm text-muted-foreground">
          {t(`${pageKey}.lastUpdated`)}
        </p>
        <div className="mt-8 space-y-10">
          {sectionKeys.map((key) => (
            <div key={key}>
              <h2 className="font-display text-2xl tracking-tight">
                {t(`${pageKey}.sections.${key}.heading`)}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {t(`${pageKey}.sections.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}