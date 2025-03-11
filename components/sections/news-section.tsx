import { CalendarDays, ChevronRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const news = [
  {
    title: "UP AI Labs Launches New Computer Vision Research Program",
    date: "December 15, 2023",
    excerpt:
      "The new program will focus on developing AI solutions for agricultural and healthcare applications in rural UP.",
    category: "Research",
    link: "#",
  },
  {
    title: "Partnership with IIT Kanpur for Edge AI Development",
    date: "November 28, 2023",
    excerpt:
      "Our collaboration with IIT Kanpur aims to build lightweight AI models that can run on low-powered devices.",
    category: "Partnership",
    link: "#",
  },
  {
    title: "UP Government Announces Funding for AI in Agriculture",
    date: "November 10, 2023",
    excerpt:
      "The UP government has allocated ₹50 crores for AI research focused on agricultural applications.",
    category: "Funding",
    link: "#",
  },
  {
    title: "UP AI Labs to Host Annual AI Conference in Lucknow",
    date: "October 25, 2023",
    excerpt:
      "The conference will bring together researchers, industry experts, and government officials to discuss AI innovation.",
    category: "Event",
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
            <div key={index} className="group">
              <div className="h-full bg-card/70 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 bg-primary/20 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <a
                    href={item.link}
                    className="inline-flex items-center text-sm text-secondary font-medium hover:underline"
                  >
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="border-primary/20">
            View All News
          </Button>
        </div>
      </div>
    </section>
  )
}

