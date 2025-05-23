"use client"

import { useLanguage } from "@/components/language-switcher"
import { getTranslation } from "@/lib/translations"

export function useTranslation() {
  const { currentLanguage } = useLanguage()

  const t = (key: string) => {
    return getTranslation(currentLanguage, key)
  }

  return { t, currentLanguage }
}
