import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactSection from "@/components/sections/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | UPAI Labs",
  description:
    "Get in touch with UPAI Labs about partnerships, sponsorship, volunteering, research or anything else.",
  alternates: { canonical: "/contact_us" },
}

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
