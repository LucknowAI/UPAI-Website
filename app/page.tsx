import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import Activities from "@/components/sections/activities";
import Chapters from "@/components/sections/chapters";
import StatsSection from "@/components/sections/stats-section";
import PartnersSection from "@/components/sections/partners-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";
import { ScrollButton } from "@/components/ui/scroll-button";
import FAQs from "@/components/faq";
import StructuredData from './structured-data'
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import ResourcesSection from "@/components/sections/resources-section";
import WorkingGroupsSection from "@/components/sections/working-groups-section";

export const metadata: Metadata = {
  title: "AI Labs & Research Centers | UP AI Labs",
  description: "Explore our state-of-the-art AI labs and research centers across Uttar Pradesh. Join us in advancing AI technology and innovation.",
} 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <StructuredData />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div id="next-section"></div>
        
        {/* Consistent section spacing */}
        <div className="space-y-12 md:space-y-16">
          <StatsSection />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <AboutSection />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <Activities />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <Chapters />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <ResourcesSection />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <WorkingGroupsSection />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <PartnersSection />
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          {/* FAQs Section */}
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
                <p className="text-lg font-medium text-white flex items-center">
                  <span className="mr-2">•</span> FAQs
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="p-4 bg-[#111] border border-white/10 rounded-xl backdrop-blur-lg">
                <FAQs />
              </div>
            </div>
          </div>
          
          <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <ContactSection />
        </div>
      </main>
      <Footer />
      <ScrollButton targetId="next-section" />
    </div>
  );
}
