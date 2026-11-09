import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import EventsSection from "@/components/sections/events-section";
import { Metadata } from "next";

// Rebuild at most twice a day so "upcoming" stays accurate without a new deploy.
export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Events | UPAI Labs",
  description:
    "Upcoming and past UPAI Labs and Lucknow AI Labs events: meetups, workshops, study jams, paper reading sessions, summits and hackathons since November 2023.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <EventsSection variant="full" />
      </main>
      <Footer />
    </div>
  );
}
