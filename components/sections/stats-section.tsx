import { Users, Code, Award, BookOpen } from "lucide-react"

const stats = [
  {
    value: "5,000+",
    label: "Community Members",
    icon: <Users className="h-6 w-6" />,
    description: "Active participants across Uttar Pradesh",
  },
  {
    value: "100+",
    label: "AI Projects",
    icon: <Code className="h-6 w-6" />,
    description: "Innovative solutions developed",
  },
  {
    value: "25+",
    label: "Research Papers",
    icon: <BookOpen className="h-6 w-6" />,
    description: "Published in international journals",
  },
  {
    value: "15+",
    label: "Industry Partners",
    icon: <Award className="h-6 w-6" />,
    description: "Collaborating on AI initiatives",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>

      <div className="container relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`opacity-0 animate-fade-in-delay-${index * 100} group`}>
              <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-lg p-6 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 bg-[length:200%_100%] animate-shimmer transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-secondary">{stat.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

