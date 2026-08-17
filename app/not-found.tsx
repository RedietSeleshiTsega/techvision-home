"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { SiteNav } from "@/components/site/site-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SiteNav />

      <section className="relative overflow-hidden bg-green-glow pt-36 lg:pt-44 pb-24 lg:pb-32">
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

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-sm tracking-widest text-primary uppercase">
            {t("notFound.code")}
          </span>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] tracking-tight text-balance">
            {t("notFound.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {t("notFound.description")}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-base shadow-lg shadow-primary/30 group"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-1" />
                {t("notFound.goHome")}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base border-border hover:bg-accent"
            >
              <Link href="/contact">
                {t("notFound.contactUs")}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}