import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeAboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container relative">
        {/* Section label */}
        <div className="flex justify-center mb-8">
          <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-xl font-medium text-white"><span className="mr-2">•</span>About UPAI Labs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-500">AI talent and research,</span>
                <br />
                <span className="text-white">beyond the metros</span>
              </h2>
            </div>

            <div className="space-y-3 max-w-xl">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Who we are</h3>
                <p className="text-gray-400 text-sm">
                  UPAI Labs Foundation (Uttar Pradesh AI Labs) is a Section 8 not-for-profit company, incorporated in March 2025 and based in Lucknow. We build the AI ecosystem in Tier-2 cities through community, open source and research.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">Where we started</h3>
                <p className="text-gray-400 text-sm">
                  Lucknow AI Labs, our first chapter, has run meetups, workshops, study jams, paper reading sessions and hackathons in Lucknow since November 2023, many of them with AI Community Lucknow and colleges across the city.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">What we do</h3>
                <p className="text-gray-400 text-sm">
                  Hands-on events, open-source projects, research on Indian languages, and mentorship for students and early-career engineers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1">How we grow</h3>
                <p className="text-gray-400 text-sm">
                  One city at a time. A new chapter opens once the one before it can run on its own.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Section - Centered */}
          <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-4">
              {/* First image */}
              <div className="rounded-xl overflow-hidden h-40">
                <Image 
                  src="/event.jpg" 
                  alt="A UPAI Labs community meetup" 
                  width={200} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Video placeholder */}
              <div className="rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center h-40">
              <Link
                  href="https://www.youtube.com/@lucknowailabs/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch our talks on YouTube"
                  className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <Play className="h-6 w-6 text-white" />
                </Link>
              </div>
            </div>
            
            {/* Team image */}
            <div className="relative rounded-xl overflow-hidden h-48">
              <Image 
                src="/team.jpg" 
                alt="The UPAI Labs team" 
                width={400} 
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
