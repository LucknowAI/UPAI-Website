import Navbar from "@/components/navbar";
import ResearchSection from "@/components/sections/research-section";
import Footer from "@/components/footer";
import { Metadata } from "next";

// Rebuild at most twice a day so the calculated numbers stay current.
export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Research | UPAI Labs",
  description:
    "UPAI Labs research: paper reading sessions, the Awadhi language project and our work towards a first publication.",
  alternates: { canonical: "/research" },
}

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
}
