import Image from "next/image";
import Link from "next/link";

interface Resource {
  title: string;
  image: string;
  link: string;
  date?: string;
  type: string;
}

const resources: Resource[] = [
  {
    title: "Youtube",
    image: "/yt.PNG",
    link: "https://www.youtube.com/@lucknowailabs/videos",
    type: "Videos"
  },
  {
    title: "AI Career Toolkit",
    image: "/AICareerToolkit.png",
    link: "https://github.com/LucknowAI/AI-Career-Toolkit",
    type: "Guide"
  },
  {
    title: "AI All Resources",
    image: "/AIAllRes.png",
    link: "https://github.com/LucknowAI/ai_all_resources",
    type: "Collection"
  }
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 md:py-24 relative bg-black">
      <div className="container relative max-w-6xl mx-auto px-4">
        {/* Resources Button - Centered */}
        <div className="flex justify-center mb-10">
          <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-xl font-medium text-white flex items-center">
              <span className="mr-2">•</span> Resources
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="text-gray-500">Your Gateway to</span>{" "}
            <span className="text-white">Valuable Assets</span>
          </h2>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Link 
              href={resource.link} 
              key={index}
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="relative h-52">
                  <Image
                    src={resource.image || "/1.png"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-lg mb-1">{resource.title}</h3>
                  {resource.date && (
                    <p className="text-gray-400 text-sm">{resource.date}</p>
                  )}
                  {resource.type && (
                    <p className="text-gray-400 text-sm">{resource.type}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 