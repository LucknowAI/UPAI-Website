"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import LabsSection from "@/components/sections/labs-section";
import ResearchSection from "@/components/sections/research-section";
import ProjectsSection from "@/components/sections/projects-section";
import StatsSection from "@/components/sections/stats-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import PartnersSection from "@/components/sections/partners-section";
import EventsSection from "@/components/sections/events-section";
import NewsSection from "@/components/sections/news-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";
import { ScrollButton } from "@/components/ui/scroll-button";
import FAQs from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
        <LabsSection />
        <ResearchSection />
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
        <ProjectsSection />
        <TestimonialsSection />
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
        <PartnersSection />
        <EventsSection />
        <NewsSection />
        <div className="flex justify-center -z-10 flex-col sm:mt-36 mt-24">
            <h3 className="tracking-widest text-3xl font-semibold text-center relative z-10 text-black dark:text-white hover:underline hover:decoration-blue-500 hover:decoration-4">
            FAQs
            </h3>
          <div className="w-full mt-5 flex justify-center">
            <div className="lg:m-20 p-4 bg-red-200 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-lg lg:rounded-xl">
              <FAQs />
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <ScrollButton targetId="next-section" />
    </div>
  );
}
