import Navbar from "@/components/navbar";
import Chapters from "@/components/sections/chapters";
import GetInvolvedSection from "@/components/sections/get-involved-section";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapters | UPAI Labs",
  description:
    "UPAI Labs chapters. Lucknow AI Labs is Chapter 1, running since November 2023.",
  alternates: { canonical: "/labs" },
}

export default function LabsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="space-y-12 md:space-y-16 pb-16">
          <Chapters />
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <GetInvolvedSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
