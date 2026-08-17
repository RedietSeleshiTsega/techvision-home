"use client";

import { useTranslation } from "react-i18next";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Select value={i18n.language} onValueChange={(lang) => i18n.changeLanguage(lang)}>
      <SelectTrigger className="w-[90px] rounded-full h-9 text-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="am">አማ</SelectItem>
      </SelectContent>
    </Select>
  );
}