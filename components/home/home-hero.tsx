"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check } from "lucide-react";

export function HomeHero() {
  const t = useTranslations("hero");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const checklist = t.raw("checklist") as string[];
  const trustedBy = t.raw("trustedBy") as string[];

  return (
    <section className="relative overflow-hidden bg-green-glow">
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

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 pt-36 lg:pt-44 pb-20">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground/90 text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {t("badge")}
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-balance">
            {t("titlePrefix")}{" "}
            <span className="text-gradient-green">{t("titleHighlight")}</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            {t("subtitle")}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-base shadow-lg shadow-primary/30 group"
            >
              <Link href="/contact">
                {t("ctaPrimary")}
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base border-border hover:bg-accent"
            >
              <Link href="/solutions">{t("ctaSecondary")}</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {checklist.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard showcase */}
        <div
          className={`relative mt-16 lg:mt-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
            <Image
              src="/dashboards/education-erp-dashboard.png"
              alt={t("dashboardAlt")}
              width={1600}
              height={1000}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>

          <div className="absolute -left-4 top-1/4 hidden lg:block w-56 rotate-[-6deg] animate-float">
            <div className="rounded-xl border border-border bg-card p-2 shadow-xl shadow-primary/10">
              <Image
                src="/dashboards/hr-dashboard.png"
                alt={t("hrDashboardAlt")}
                width={400}
                height={260}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div
            className="absolute -right-4 top-1/3 hidden lg:block w-56 rotate-[6deg] animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="rounded-xl border border-border bg-card p-2 shadow-xl shadow-primary/10">
              <Image
                src="/dashboards/lms-dashboard.png"
                alt={t("lmsDashboardAlt")}
                width={400}
                height={260}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 lg:mt-24">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {t("trustedByLabel")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span key={name} className="font-display text-lg text-muted-foreground/70">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}