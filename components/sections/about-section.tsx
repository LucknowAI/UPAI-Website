import { Users, Code, MapPin, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent"></div>

      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
              <Lightbulb className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">About UP AI Labs</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Uttar Pradesh AI Labs is a vibrant community of AI enthusiasts, developers, researchers, and industry
              experts committed to advancing artificial intelligence in Uttar Pradesh.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our mission is to foster innovation, provide education, and create opportunities in AI for the talented
              youth of Uttar Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center gap-2 bg-card/70 backdrop-blur-md border border-white/10 p-3 rounded-lg animate-float shadow-lg">
                <Users className="h-5 w-5 text-secondary" />
                <span className="font-medium">5000+ Members</span>
              </div>
              <div className="flex items-center gap-2 bg-card/70 backdrop-blur-md border border-white/10 p-3 rounded-lg animate-float delay-500 shadow-lg">
                <Code className="h-5 w-5 text-secondary" />
                <span className="font-medium">100+ Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-card/70 backdrop-blur-md border border-white/10 p-3 rounded-lg animate-float delay-1000 shadow-lg">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="font-medium">25+ Districts</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 group-hover:opacity-70 transition-opacity z-10"></div>
            <div className="absolute inset-0 rounded-lg border border-white/10 z-20 group-hover:border-primary/50 transition-colors duration-300"></div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="AI community in Uttar Pradesh"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

