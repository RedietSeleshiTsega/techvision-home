"use client";

import { useTranslation } from "react-i18next";

export function PageHeader({
  eyebrowKey,
  titleKey,
  descriptionKey,
}: {
  eyebrowKey: string;
  titleKey: string;
  descriptionKey?: string;
}) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-green-glow pt-36 lg:pt-44 pb-16 lg:pb-20 border-b border-border">
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-primary uppercase">{t(eyebrowKey)}</span>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] tracking-tight text-balance">
          {t(titleKey)}
        </h1>
        {descriptionKey && (
          <p className="mt-5 max-w-2xl text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            {t(descriptionKey)}
          </p>
        )}
      </div>
    </section>
  );
}