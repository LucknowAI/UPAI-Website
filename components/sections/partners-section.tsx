import { Building2 } from "lucide-react"
import Image from "next/image"

const partners = [
  {
    name: "UP Government",
    logo: "/partners/up-govt.png",
    type: "Government",
  },
  {
    name: "IIT Kanpur",
    logo: "/partners/iit-kanpur.png",
    type: "Academic",
  },
  {
    name: "Microsoft",
    logo: "/partners/microsoft.png",
    type: "Industry",
  },
  {
    name: "Google",
    logo: "/partners/google.png",
    type: "Industry",
  },
  {
    name: "NASSCOM",
    logo: "/partners/nasscom.png",
    type: "Industry Association",
  },
  {
    name: "UP IT Department",
    logo: "/partners/up-it.png",
    type: "Government",
  },
]

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 md:py-24 relative">
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <Building2 className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with government, industry, and academic institutions to create a thriving AI ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-16 w-16 mb-4 bg-white/5 rounded-full flex items-center justify-center">
                {partner.logo ? (
                  <Image src={partner.logo} alt={partner.name} width={40} height={40} />
                ) : (
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                )}
              </div>
              <h3 className="text-sm font-medium text-center">{partner.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

