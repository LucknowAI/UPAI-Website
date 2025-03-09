import { ArrowRight, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const news = [
  {
    title: "UP AI Labs Launches New Healthcare AI Initiative",
    date: "February 15, 2023",
    excerpt: "A new initiative focused on developing AI solutions for healthcare challenges in rural Uttar Pradesh.",
    image: "/placeholder.svg?height=300&width=500&text=Healthcare AI",
    category: "Initiatives",
    readTime: "4 min read",
    link: "#",
  },
  {
    title: "Research Team Wins National AI Competition",
    date: "January 28, 2023",
    excerpt: "Our research team's agricultural AI solution won first place at the National AI Innovation Challenge.",
    image: "/placeholder.svg?height=300&width=500&text=Award",
    category: "Achievements",
    readTime: "3 min read",
    link: "#",
  },
  {
    title: "Partnership Announced with Tech Innovate",
    date: "January 10, 2023",
    excerpt: "UP AI Labs partners with Tech Innovate to accelerate AI adoption in manufacturing sector.",
    image: "/placeholder.svg?height=300&width=500&text=Partnership",
    category: "Partnerships",
    readTime: "5 min read",
    link: "#",
  },
  {
    title: "New Machine Learning Course Launched",
    date: "December 5, 2022",
    excerpt: "Free online course on machine learning fundamentals now available for students across Uttar Pradesh.",
    image: "/placeholder.svg?height=300&width=500&text=ML Course",
    category: "Education",
    readTime: "2 min read",
    link: "#",
  },
]

export default function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-24 relative">
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <FileText className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Latest News</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments, achievements, and announcements from UP AI Labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <div key={index} className={`opacity-0 animate-fade-in-delay-${index * 100} group`}>
              <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <div className="absolute top-3 right-3 bg-secondary/90 text-background px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Clock className="h-3 w-3 mr-1" />
                    <span className="text-xs">
                      {item.date} • {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-secondary text-sm font-medium group-hover:underline"
                  >
                    Read more <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 transition-colors">
            View All News
          </Button>
        </div>
      </div>
    </section>
  )
}

