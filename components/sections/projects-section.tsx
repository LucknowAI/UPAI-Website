import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { activeProjects, ALL_PROJECTS_URL } from "@/content/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 relative bg-black text-white">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white flex items-center">
                <span className="mr-2">•</span> Our Projects
              </p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Built in the </span>
            <span className="text-gray-500">open</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything our community builds is open source on{" "}
            <a href="https://github.com/LucknowAI" className="underline hover:text-white">
              GitHub
            </a>
            . Pick a project, read its README and open an issue or a pull request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-xl font-bold text-white mb-3">{project.name}</h2>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white hover:text-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> {project.live.label}
                    </Link>
                  )}
                  <span className="ml-auto text-xs text-gray-500">Updated {project.updated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-400">
          Looking for earlier projects such as Lucknow LLM, UPAI RAG or the AI Career Toolkit?{" "}
          <a href={ALL_PROJECTS_URL} className="underline hover:text-white">
            See the full list
          </a>
          .
        </p>
      </div>
    </section>
  );
}
