import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Enhanced background with more dynamic gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-radial from-secondary/5 to-transparent"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <Sparkles className="h-12 w-12 text-secondary animate-pulse-slow" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Uttar Pradesh AI Labs
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8 opacity-0 animate-fade-in-delay-100">
          Building the future of AI innovation and talent in Uttar Pradesh
        </p>
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-200">
          <Button
            size="lg"
            className="gap-2 group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-none"
          >
            Join Our Community
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-secondary/50 hover:bg-gray-300 transition-colors">
            Explore Programs
          </Button>
        </div>
      </div>
    </section>
  )
}

