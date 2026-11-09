import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/sections/projects-section";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | UPAI Labs",
  description:
    "Open-source projects built by the UPAI Labs and Lucknow AI Labs community, including NAWAB AI, Loki LLM and the Awadhi language project.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="space-y-12 md:space-y-16 pb-16">
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
