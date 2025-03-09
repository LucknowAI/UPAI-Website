import type { LucideIcon } from "lucide-react"

interface SectionHeadingProps {
  title: string
  description?: string
  icon?: LucideIcon
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, description, icon: Icon, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}`}>
      {Icon && (
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}

