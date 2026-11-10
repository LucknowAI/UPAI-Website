import Navbar from "@/components/navbar";
import AboutSection from "@/components/sections/about-section";
import StatsSection from "@/components/sections/stats-section";
import Footer from "@/components/footer";
import { Metadata } from "next";

// Rebuild at most twice a day so the calculated numbers stay current.
export const revalidate = 43200;

export const metadata: Metadata = {
  title: "About | UPAI Labs",
  description:
    "About UPAI Labs Foundation, a Section 8 not-for-profit in Lucknow building the AI ecosystem of Tier-2 India: mission, vision and the organisation.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="space-y-12 md:space-y-16 pb-16">
          <AboutSection />
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <StatsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
