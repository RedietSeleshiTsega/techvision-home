"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The active theme is only known on the client, so render a matching
  // placeholder on the server / first paint to avoid a hydration mismatch.
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="h-9 w-[116px] rounded-full border border-input bg-transparent"
      />
    );
  }

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[116px] rounded-full h-9 text-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">{t("nav.theme.light")}</SelectItem>
        <SelectItem value="dark">{t("nav.theme.dark")}</SelectItem>
        <SelectItem value="system">{t("nav.theme.system")}</SelectItem>
      </SelectContent>
    </Select>
  );
}
