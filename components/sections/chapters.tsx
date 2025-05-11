'use client';
import { useState } from "react";
import Image from "next/image";

const chapters = [
  { number: "01", name: "Lucknow" },
  { number: "02", name: "Kanpur" },
  { number: "03", name: "Varanasi" },
  { number: "04", name: "Noida" }
];

export default function Chapters() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <section id="chapters" className="p-16 md:py-24 bg-black relative">
      <div className="container mx-auto max-w-4xl px-4 relative">
        {/* Header */}
        <div className="flex justify-center mb-10">
          <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-xl font-medium text-white flex items-center">
              <span className="mr-2">•</span> Our Chapters
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Chapter list */}
          <div className="space-y-6 lg:pr-4">
            {chapters.map((chapter) => (
              <div key={chapter.number} className="group cursor-pointer">
                <div className="flex items-baseline transition-colors hover:text-white">
                  <span className="text-2xl text-gray-500 mr-4">{chapter.number}.</span>
                  <span className="text-4xl font-light text-white border-b border-transparent group-hover:border-white pb-1">
                    {chapter.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Flip images */}


          <div className="relative lg:pl-3 h-96">

     


            {/* Top Image */}
            <div
              onClick={toggleFlip}
              className={`absolute top-0 right-0 w-full lg:w-4/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                isFlipped ? "z-10 transform translate-x-[-5%] rotate-2" : "z-20"
              }`}
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
            >
              <Image
                src="/33.JPG"
                alt="AI Chapter Event"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div
              onClick={toggleFlip}
              className={`absolute top-20 right-0 w-full lg:w-4/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                isFlipped ? "z-20" : "z-10 transform translate-x-[15%] rotate-2"
              }`}
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
            >
              <Image
                src="/22.jpg"
                alt="AI UP Chapter Event"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
