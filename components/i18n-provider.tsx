"use client";

import { useEffect, useState } from "react";
import "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return <>{children}</>;
}