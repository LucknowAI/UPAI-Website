import { ArrowRight, Mail, MapPin, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/5 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
              <Star className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Join Our Community</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Be part of Uttar Pradesh's growing AI ecosystem. Connect with like-minded individuals, learn from experts,
              and contribute to innovative projects.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    UP AI Labs Headquarters
                    <br />
                    IT Park, Lucknow
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:contact@upailabs.org" className="hover:text-primary transition-colors">
                      contact@upailabs.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91 522 123 4567</p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="gap-2 group">
              Become a Member <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="bg-card/70 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 rounded-lg border border-white/10 z-10 hover:border-primary/50 transition-colors duration-300 pointer-events-none"></div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button type="submit" variant="secondary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

