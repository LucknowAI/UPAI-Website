import { ArrowRight, Cpu, Database, Brain, Network } from "lucide-react"
import Link from "next/link"

const labs = [
  {
    title: "Machine Learning Lab",
    location: "Lucknow",
    description: "Focused on developing novel machine learning algorithms and applications for various domains.",
    icon: <Brain className="h-8 w-8" />,
    specializations: ["Deep Learning", "Computer Vision", "NLP"],
  },
  {
    title: "AI for Agriculture",
    location: "Kanpur",
    description: "Developing AI solutions to improve agricultural productivity and sustainability in Uttar Pradesh.",
    icon: <Database className="h-8 w-8" />,
    specializations: ["Crop Analysis", "Yield Prediction", "Pest Detection"],
  },
  {
    title: "Healthcare AI Lab",
    location: "Varanasi",
    description: "Creating AI tools for better healthcare delivery, diagnosis, and treatment in rural areas.",
    icon: <Network className="h-8 w-8" />,
    specializations: ["Medical Imaging", "Disease Prediction", "Telemedicine"],
  },
  {
    title: "Smart Cities Lab",
    location: "Noida",
    description: "Building AI systems for urban planning, traffic management, and smart infrastructure.",
    icon: <Cpu className="h-8 w-8" />,
    specializations: ["IoT Integration", "Urban Analytics", "Sustainable Planning"],
  },
]

export default function LabsSection() {
  return (
    <section id="labs" className="py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <Cpu className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Labs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a range of programs designed to nurture AI talent and drive innovation across Uttar Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labs.map((lab, index) => (
            <div
              key={index}
              className="bg-card/70 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div className="p-2 bg-primary/10 rounded-lg mb-3">{lab.icon}</div>
                <div className="text-sm text-muted-foreground">{lab.location}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{lab.title}</h3>
              <p className="text-muted-foreground mb-4">{lab.description}</p>
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {lab.specializations.map((spec, idx) => (
                  <span key={idx} className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
              <Link href="#" className="inline-flex items-center text-secondary font-medium group hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

