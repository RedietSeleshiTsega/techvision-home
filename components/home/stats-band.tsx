import { useTranslations } from "next-intl";

const stats = [
  { value: "500+", label: "Organizations served" },
  { value: "1M+", label: "Active learners & users" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "24/7", label: "Local support" },
];

export function StatsBand() {
  const t = useTranslations("stats");
  const stats = t.raw("items") as { value: string; label: string }[];

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
