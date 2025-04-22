import { MapPin } from "lucide-react";
import Image from "next/image";

const chapters = [
  { number: "01", name: "Lucknow" },
  { number: "02", name: "Kanpur" },
  { number: "03", name: "Varanasi" },
  { number: "04", name: "Noida" },
  { number: "05", name: "Agra" }
];

export default function ChaptersSection() {
  return (
    <section id="chapters" className="py-16 md:py-24 relative">
      <div className="container relative">
        {/* Chapter Button - Centered */}
        <div className="flex justify-center mb-12">
          <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-xl font-medium text-white flex items-center">
              <span className="mr-2">•</span> Our Chapters
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Chapter list */}
          <div className="space-y-8">
            {chapters.map((chapter) => (
              <div key={chapter.number} className="group">
                <a href="#" className="flex items-baseline hover:text-white transition-colors">
                  <span className="text-2xl text-gray-500 mr-4">{chapter.number}.</span>
                  <span className="text-4xl font-light text-white border-b border-transparent group-hover:border-white pb-1">
                    {chapter.name}
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Right side - Images */}
          <div className="relative">
            {/* Top image - Larger */}
            <div className="rounded-2xl overflow-hidden mb-6">
              <Image 
                src="/chapters/meetup1.jpg" 
                alt="AI UP Chapter Event" 
                width={600} 
                height={400}
                className="w-full object-cover"
              />
            </div>
            
            {/* Bottom image - Smaller, offset to the right */}
            <div className="rounded-2xl overflow-hidden ml-auto w-4/5">
              <Image 
                src="/chapters/meetup2.jpg" 
                alt="AI UP Chapter Event" 
                width={500} 
                height={300}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 