import Link from "next/link";
import { useTranslations } from "next-intl";
import { products } from "@/lib/site-data";
import { Mail } from "lucide-react";

export function SiteFooter() {
  const t = useTranslations("footer");
  const tSolutions = useTranslations("solutions");

  const footerCols = [
    {
      key: "products",
      links: products.map((p) => ({
        key: p.slug,
        name: tSolutions(`products.${p.slug}.short`),
        href: `/solutions#${p.slug}`,
      })),
    },
    {
      key: "company",
      links: [
        { key: "about", name: t("company.about"), href: "/about" },
        { key: "industries", name: t("company.industries"), href: "/industries" },
        { key: "pricing", name: t("company.pricing"), href: "/pricing" },
        { key: "contact", name: t("company.contact"), href: "/contact" },
      ],
    },
    {
      key: "resources",
      links: [
        { key: "requestDemo", name: t("resources.requestDemo"), href: "/contact" },
        { key: "documentation", name: t("resources.documentation"), href: "/solutions" },
        { key: "support", name: t("resources.support"), href: "/contact" },
        { key: "privacy", name: t("resources.privacy"), href: "/about" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display text-lg">
                T
              </span>
              <span className="font-display text-xl tracking-tight">TechVision</span>
            </Link>
            <p className="mt-5 text-muted-foreground max-w-sm leading-relaxed">
              {t("tagline")}
            </p>
            
              <a>href="mailto:info@techvision.edu.et"
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              <Mail className="h-4 w-4" />
              info@techvision.edu.et
            </a>
          </div>

          {footerCols.map((col) => (
            <div key={col.key}>
              <h4 className="font-medium text-foreground mb-4">{t(`columns.${col.key}`)}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-sm text-muted-foreground font-mono">techvision.edu.et</p>
        </div>
      </div>
    </footer>
  );
}