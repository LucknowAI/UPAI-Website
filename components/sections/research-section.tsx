import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { pastEvents } from "@/lib/events";

const researchProjects = [
  {
    title: "Awadhi language project",
    description:
      "Awadhi has about 38 million speakers but very little data or software. We are collecting Awadhi text and speech and building speech-to-text for the language. If you speak Awadhi, you can help by recording sentences on the project website.",
    image: "/Project_Awadhi.jpg",
    link: "https://awadhi-language.vercel.app/",
    status: "Ongoing",
  },
  {
    title: "Sign Language Translator",
    description:
      "AI for real-time sign language translation, with a survey of recent research. There have been no commits since March 2025, and contributors who want to pick it up are welcome.",
    image: "/AI_Sign_Language.jpg",
    link: "https://github.com/LucknowAI/Sign_Language_Translator",
    status: "Paused",
  },
];

const areas = [
  "Low-resource Indian languages, starting with Awadhi",
  "Document and image understanding for Indian contexts",
  "Applied AI agents, such as NAWAB AI",
];

export default function ResearchSection() {
  const paperSessions = pastEvents().filter((e) => e.type === "paper-reading").length;

  return (
    <section id="research" className="py-16 md:py-24 relative bg-black text-white">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white flex items-center">
                <span className="mr-2">•</span> Research
              </p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-gray-500">Research</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We want Uttar Pradesh to produce AI research, not only use it. That starts with reading
            papers together and grows into our own work on problems that matter here.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {researchProjects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="relative w-full h-64 overflow-hidden bg-[#1a1a1a]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm shadow-sm uppercase tracking-wider ${
                      project.status === "Ongoing"
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 md:p-8 relative z-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed tracking-wide flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#111] border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-3">Paper reading</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Members read a recent machine learning paper and discuss it together. We have held{" "}
              <span className="text-white font-semibold">{paperSessions}</span> paper reading
              sessions since October 2024, most of them with AI Community Lucknow.
            </p>
          </div>
          <div className="rounded-2xl bg-[#111] border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-3">Areas we work on</h2>
            <ul className="text-gray-400 text-sm leading-relaxed list-disc pl-5 space-y-1">
              {areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#111] border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-3">Towards our first publication</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are working towards our first research paper. It will be listed here once it is
              published.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Want to present a paper, join the Awadhi work or lead a research project with us?
          </p>
          <Link
            href="/contact_us?topic=research"
            className="inline-block px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
          >
            Get in touch about research
          </Link>
        </div>
      </div>
    </section>
  );
}
