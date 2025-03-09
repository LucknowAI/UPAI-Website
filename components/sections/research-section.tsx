import { BookOpen, BarChart, LineChart, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"

const researchAreas = [
  {
    title: "Natural Language Processing",
    description: "Developing models for Indian languages with a focus on Hindi and regional dialects of Uttar Pradesh.",
    icon: <BookOpen className="h-10 w-10" />,
    progress: 85,
  },
  {
    title: "Computer Vision",
    description: "Creating vision systems for agriculture, healthcare, and cultural heritage preservation.",
    icon: <PieChart className="h-10 w-10" />,
    progress: 75,
  },
  {
    title: "AI for Social Good",
    description: "Applying AI to address social challenges in education, healthcare, and rural development.",
    icon: <BarChart className="h-10 w-10" />,
    progress: 65,
  },
  {
    title: "Reinforcement Learning",
    description: "Exploring applications in robotics, autonomous systems, and optimization problems.",
    icon: <LineChart className="h-10 w-10" />,
    progress: 60,
  },
]

export default function ResearchSection() {
  return (
    <section id="research" className="py-16 md:py-24 relative bg-primary/5">
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <BookOpen className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Research Areas</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our research focuses on advancing AI in areas that can have significant impact on Uttar Pradesh's
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`opacity-0 animate-fade-in-delay-${(index + 1) * 100} flex gap-6 p-6 bg-card/70 backdrop-blur-md rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-lg`}
            >
              <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg h-fit">{area.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${area.progress}%` }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Research Progress</span>
                  <span>{area.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 transition-colors">
            View Research Publications
          </Button>
        </div>
      </div>
    </section>
  )
}

