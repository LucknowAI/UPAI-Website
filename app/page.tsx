import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import HomeAboutSection from "@/components/sections/home-about-section";
import Activities from "@/components/sections/activities";
import StatsSection from "@/components/sections/stats-section";
import EventsSection from "@/components/sections/events-section";
import GetInvolvedSection from "@/components/sections/get-involved-section";
import PartnersSection from "@/components/sections/partners-section";
import Footer from "@/components/footer";
import { ScrollButton } from "@/components/ui/scroll-button";
import StructuredData from "./structured-data";
import { Metadata } from "next";

// Rebuild at most twice a day so the next event and the stats stay current.
export const revalidate = 43200;

export const metadata: Metadata = {
  title: "UPAI Labs | Uttar Pradesh AI Labs Foundation",
  description:
    "UPAI Labs Foundation is a Section 8 not-for-profit building AI talent, open source and research in Uttar Pradesh, starting with Lucknow AI Labs.",
  alternates: { canonical: "/" },
};

const divider = (
  <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <StructuredData />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div id="next-section"></div>

        <div className="space-y-12 md:space-y-16 pb-16">
          <StatsSection />
          {divider}
          <HomeAboutSection />
          {divider}
          <EventsSection />
          {divider}
          <Activities />
          {divider}
          <GetInvolvedSection />
          {divider}
          <PartnersSection />
        </div>
      </main>
      <Footer />
      <ScrollButton targetId="next-section" />
    </div>
  );
}
