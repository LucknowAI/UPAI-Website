import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | UPAI Labs",
  description: "What UPAI Labs does with the details you send through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="container max-w-3xl mx-auto px-4 space-y-6 text-gray-300 leading-relaxed">
          <h1 className="text-4xl font-bold text-white">Privacy</h1>
          <p>
            This page explains what UPAI Labs Foundation does with the details you share through
            upailabs.org.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">The contact form</h2>
          <p>
            When you send a message, we receive your name, email address, the topic you chose and
            your message, by email at hello@upailabs.org. We use them only to reply to you. We do
            not add you to a mailing list and we do not share your details with anyone outside the
            UPAI Labs team.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Cookies and tracking</h2>
          <p>This website does not use cookies or analytics to track you.</p>

          <h2 className="text-2xl font-bold text-white pt-4">Other websites</h2>
          <p>
            Event registrations happen on Commudle, and some links go to WhatsApp, Discord, GitHub,
            YouTube and Medium. Those sites have their own privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">Your choices</h2>
          <p>
            To see, correct or delete what you sent us, email{" "}
            <a href="mailto:hello@upailabs.org" className="underline hover:text-white">
              hello@upailabs.org
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
