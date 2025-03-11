import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent blur-3xl"></div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/90">
          Uttar Pradesh AI Labs
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
          Building the future of AI innovation and talent in Uttar Pradesh
        </p>
        <div className="flex flex-row gap-6">
          <Button
            size="lg"
            className="gap-2 group bg-primary hover:bg-primary/90 transition-colors"
          >
            Join Our Community
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/20 hover:bg-primary/10 transition-colors"
          >
            Explore Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
