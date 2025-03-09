import { Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const partners = [
  {
    name: "Tech Innovate",
    logo: "/placeholder.svg?height=80&width=200&text=Tech Innovate",
    type: "Industry",
  },
  {
    name: "IIT Kanpur",
    logo: "/placeholder.svg?height=80&width=200&text=IIT Kanpur",
    type: "Academic",
  },
  {
    name: "UP Government",
    logo: "/placeholder.svg?height=80&width=200&text=UP Government",
    type: "Government",
  },
  {
    name: "Future AI",
    logo: "/placeholder.svg?height=80&width=200&text=Future AI",
    type: "Industry",
  },
  {
    name: "AgriTech Solutions",
    logo: "/placeholder.svg?height=80&width=200&text=AgriTech",
    type: "Industry",
  },
  {
    name: "BHU Varanasi",
    logo: "/placeholder.svg?height=80&width=200&text=BHU",
    type: "Academic",
  },
  {
    name: "Health AI",
    logo: "/placeholder.svg?height=80&width=200&text=Health AI",
    type: "Industry",
  },
  {
    name: "Digital India",
    logo: "/placeholder.svg?height=80&width=200&text=Digital India",
    type: "Government",
  },
]

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 md:py-24 relative">
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <Building className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading organizations across industry, academia, and government to advance AI in Uttar
            Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div key={index} className={`opacity-0 animate-fade-in-delay-${(index % 4) * 100} group`}>
              <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-12 md:h-16 object-contain mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <h3 className="font-medium text-center">{partner.name}</h3>
                <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-primary/10 mt-2">
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 transition-colors group">
            Become a Partner
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

