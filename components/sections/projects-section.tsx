import { ArrowRight, ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "UP Crop Disease Detection",
    description: "An AI system that helps farmers identify crop diseases through smartphone images.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2023",
    github: "#",
    demo: "#",
    tags: ["Computer Vision", "Mobile App", "Agriculture"],
  },
  {
    title: "Hindi Speech Recognition",
    description: "Advanced speech recognition model for Hindi and its regional dialects.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2023",
    github: "#",
    demo: "#",
    tags: ["NLP", "Speech Recognition", "Regional Languages"],
  },
  {
    title: "Smart Traffic Management",
    description: "AI-powered traffic management system deployed in Lucknow to reduce congestion.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2022",
    github: "#",
    demo: "#",
    tags: ["Computer Vision", "IoT", "Smart Cities"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <Github className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative AI projects developed by our labs that address real-world challenges in Uttar Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`opacity-0 animate-fade-in-delay-${(index + 1) * 100} group overflow-hidden rounded-lg border border-white/10 bg-card/70 backdrop-blur-md hover:border-primary/50 transition-all duration-300 shadow-lg`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Link
                    href={project.github}
                    className="bg-background/80 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                  <Link
                    href={project.demo}
                    className="bg-background/80 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="View demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="#" className="inline-flex items-center text-secondary font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 transition-colors">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

