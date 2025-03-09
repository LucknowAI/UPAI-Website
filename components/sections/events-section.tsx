import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const events = [
  {
    title: "AI Hackathon 2023",
    date: "March 15-17, 2023",
    location: "Lucknow IT Park",
    description: "A 48-hour hackathon focused on developing AI solutions for agriculture and healthcare.",
    image: "/placeholder.svg?height=300&width=500&text=Hackathon",
    attendees: 250,
    link: "#",
  },
  {
    title: "Machine Learning Workshop Series",
    date: "April 5-20, 2023",
    location: "Virtual",
    description: "A comprehensive workshop series covering the fundamentals of machine learning and deep learning.",
    image: "/placeholder.svg?height=300&width=500&text=Workshop",
    attendees: 500,
    link: "#",
  },
  {
    title: "AI Research Symposium",
    date: "May 10, 2023",
    location: "IIT Kanpur",
    description: "A symposium featuring presentations from leading AI researchers in Uttar Pradesh.",
    image: "/placeholder.svg?height=300&width=500&text=Symposium",
    attendees: 150,
    link: "#",
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 relative bg-primary/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <Calendar className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Events & Workshops</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our events to learn, network, and collaborate with the AI community in Uttar Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className={`opacity-0 animate-fade-in-delay-${index * 100} group`}>
              <div className="bg-card/70 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Link
                    href={event.link}
                    className="inline-flex items-center text-secondary font-medium group-hover:underline"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10 transition-colors">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}

