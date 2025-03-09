"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "ta">("en")

  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full px-4"
      onClick={() => setLanguage(language === "en" ? "ta" : "en")}
    >
      {language === "en" ? "வணக்கம், AI தமிழ்நாடு" : "Hello, AI Tamil Nadu"}
    </Button>
  )
}

