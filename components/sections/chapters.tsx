import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Chapters are added here only once they are running. A new chapter opens
// when the one before it can run without its founders day to day.
const chapters = [
  {
    number: "01",
    name: "Lucknow",
    brand: "Lucknow AI Labs",
    since: "November 2023",
    href: "https://lucknowai.github.io",
  },
];

export default function Chapters() {
  return (
    <section id="chapters" className="p-16 md:py-24 bg-black relative">
      <div className="container mx-auto max-w-4xl px-4 relative">
        <div className="flex justify-center mb-10">
          <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <h1 className="text-xl font-medium text-white flex items-center">
              <span className="mr-2">•</span> Our Chapters
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 lg:pr-4">
            {chapters.map((chapter) => (
              <div key={chapter.number}>
                <div className="flex items-baseline">
                  <span className="text-2xl text-gray-500 mr-4">{chapter.number}.</span>
                  <span className="text-4xl font-light text-white">{chapter.name}</span>
                </div>
                <p className="mt-3 text-gray-400">
                  {chapter.brand}, our first chapter, running since {chapter.since}: meetups,
                  workshops, study jams, paper reading and hackathons, many of them with AI
                  Community Lucknow and colleges across the city.
                </p>
                <Link
                  href={chapter.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-white underline hover:text-secondary"
                >
                  Visit {chapter.brand} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}

            <div className="border-t border-white/10 pt-6">
              <p className="text-2xl font-light text-gray-500">More cities next</p>
              <p className="mt-2 text-gray-400 text-sm">
                We open a new chapter once the one before it can run on its own. Want to start
                one in your city?{" "}
                <Link href="/contact_us?topic=partnership" className="underline hover:text-white">
                  Tell us
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-4">
            <Image
              src="/33.JPG"
              alt="Speakers at the Gen AI Awadh Summit in Lucknow"
              width={600}
              height={400}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <Image
              src="/22.jpg"
              alt="A talk at DevFest Lucknow"
              width={600}
              height={400}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full h-56 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
