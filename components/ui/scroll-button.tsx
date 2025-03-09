"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ScrollButtonProps {
  targetId: string
  className?: string
}

export function ScrollButton({ targetId, className }: ScrollButtonProps) {
  const handleScroll = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={handleScroll}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float ${className}`}
      aria-label="Scroll down"
    >
      <ChevronDown className="h-6 w-6" />
    </Button>
  )
} 