import { BookOpen } from "lucide-react";
import Image from "next/image";

const chapters = [
  { number: "01", name: "Coimbatore" },
  { number: "02", name: "Salem" },
  { number: "03", name: "Trichy" },
  { number: "04", name: "Chennai" },
  { number: "05", name: "Madurai" }
];

export default function Chapters() {
  return (
    <section id="chapters" className="py-16 md:py-24 relative bg-black">
      <div className="container relative max-w-5xl mx-auto px-4">
        {/* Chapter Button - Centered */}
        <div className="flex justify-center mb-10">
          <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-xl font-medium text-white flex items-center">
              <span className="mr-2">•</span> Our Chapters
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left side - Chapter list */}
          <div className="space-y-6 lg:pr-4">
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
          <div className="relative lg:pl-4">
            {/* Top image - Larger, positioned to match the reference */}
            <div className="rounded-2xl overflow-hidden mb-4 relative z-10">
              <Image 
                src="/1.png" 
                alt="AI Chapter Event" 
                width={600} 
                height={400}
                className="w-full h-[350px] object-cover"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

