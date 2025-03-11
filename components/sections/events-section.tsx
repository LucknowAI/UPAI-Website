import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, ChevronRight } from "lucide-react"

const events = [
  {
    title: "UP AI Summit 2024",
    date: "January 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Indira Gandhi Pratishthan, Lucknow",
    attendees: 500,
    description:
      "Annual conference bringing together AI researchers, industry professionals, and policymakers from across Uttar Pradesh.",
    link: "#",
  },
  {
    title: "Machine Learning Workshop",
    date: "February 10, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "IIT Kanpur",
    attendees: 100,
    description:
      "Hands-on workshop on machine learning fundamentals and practical applications in Python.",
    link: "#",
  },
  {
    title: "AI for Healthcare Hackathon",
    date: "March 5-7, 2024",
    time: "All day",
    location: "BHU, Varanasi",
    attendees: 200,
    description:
      "48-hour hackathon focused on developing AI solutions for healthcare challenges in eastern UP.",
    link: "#",
  },
  {
    title: "Natural Language Processing Meetup",
    date: "April 22, 2024",
    time: "5:00 PM - 8:00 PM",
    location: "Tech Hub, Noida",
    attendees: 75,
    description:
      "Monthly meetup for NLP enthusiasts to discuss latest research and applications.",
    link: "#",
  },
]

export default function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card/70 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="text-xs font-medium px-2.5 py-1 bg-primary/20 rounded-full">
                    Upcoming
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    {event.attendees} Expected Attendees
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                <a
                  href={event.link}
                  className="inline-flex items-center text-sm text-secondary font-medium hover:underline"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="border-primary/20">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}

