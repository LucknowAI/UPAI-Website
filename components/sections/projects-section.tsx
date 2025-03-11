import { ArrowRight, ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "UP Crop Disease Detection",
    description: "AI-powered mobile app for farmers to detect and diagnose crop diseases using photos.",
    image: "/projects/crop-disease.jpg",
    tags: ["Computer Vision", "Mobile App", "Agriculture"],
    demoLink: "#",
    repoLink: "#",
    date: "Jun 2023",
  },
  {
    title: "Hindi Voice Assistant",
    description: "Natural language voice assistant that understands Hindi and regional dialects of UP.",
    image: "/projects/voice-assistant.jpg",
    tags: ["NLP", "Speech Recognition", "Accessibility"],
    demoLink: "#",
    repoLink: "#",
    date: "Aug 2023",
  },
  {
    title: "Traffic Flow Optimization",
    description: "AI system to optimize traffic light timing in Lucknow based on real-time traffic data.",
    image: "/projects/traffic-flow.jpg",
    tags: ["Smart Cities", "Computer Vision", "IoT"],
    demoLink: "#",
    repoLink: "#",
    date: "Oct 2023",
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
              className="group overflow-hidden rounded-lg border border-white/10 bg-card/70 backdrop-blur-md hover:border-primary/50 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {project.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-50"></div>
                )}
                <div className="absolute bottom-4 left-4 z-10 flex items-center text-sm text-white/80">
                  <Calendar className="mr-1 h-4 w-4" />
                  {project.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a href={project.demoLink} className="inline-flex items-center text-secondary font-medium group hover:underline">
                    Demo <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <a href={project.repoLink} className="inline-flex items-center text-secondary font-medium group hover:underline">
                    Code <Github className="ml-1 h-4 w-4" />
                  </a>
                </div>
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

