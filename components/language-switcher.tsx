"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState, createContext, useContext, useEffect } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import type { Language } from "@/lib/translations"

const languages = [
  { code: "en" as Language, name: "English" },
  { code: "hi" as Language, name: "हिन्दी (Hindi)" },
  { code: "ta" as Language, name: "தமிழ் (Tamil)" },
  { code: "te" as Language, name: "తెలుగు (Telugu)" },
  { code: "kn" as Language, name: "ಕನ್ನಡ (Kannada)" },
  { code: "ml" as Language, name: "മലയാളം (Malayalam)" },
  { code: "bn" as Language, name: "বাংলা (Bengali)" },
  { code: "gu" as Language, name: "ગુજરાતી (Gujarati)" },
  { code: "mr" as Language, name: "मराठी (Marathi)" },
  { code: "pa" as Language, name: "ਪੰਜਾਬੀ (Punjabi)" },
]

interface LanguageContextType {
  currentLanguage: Language
  setCurrentLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "en",
  setCurrentLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") as Language
    if (savedLanguage && languages.find((lang) => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    localStorage.setItem("selectedLanguage", language)
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageSwitcher() {
  const { currentLanguage, setCurrentLanguage } = useLanguage()

  const handleLanguageChange = (code: Language) => {
    setCurrentLanguage(code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Globe className="mr-2 h-4 w-4" />
          {languages.find((lang) => lang.code === currentLanguage)?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} onClick={() => handleLanguageChange(language.code)}>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
