import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { bundles } from "@/lib/site-data";

export function BundlesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">Bundles</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
            Save more with bundled suites
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Combine products into a single suite and unlock deeper integration plus bundle pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {bundles.map((bundle, idx) => (
            <div
              key={bundle.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                idx === 2 ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl tracking-tight">{bundle.name}</h3>
                <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-foreground">
                  {bundle.save}
                </span>
              </div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{bundle.description}</p>

              <ul className="mt-6 space-y-3">
                {bundle.products.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
              >
                View bundle pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
