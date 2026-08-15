import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site-data";

export function SolutionsGrid() {
  const t = useTranslations("solutions");

  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">{t("eyebrow")}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
            {t("heading")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{t("subheading")}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/solutions#${product.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
                <Image
                  src={product.image}
                  alt={t(`products.${product.slug}.name`)}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
                      {t(`products.${product.slug}.short`)}
                    </span>
                    <h3 className="mt-3 font-display text-2xl tracking-tight">
                      {t(`products.${product.slug}.name`)}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {t(`products.${product.slug}.tagline`)}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t("priceLine", { price: product.startingPrice })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}