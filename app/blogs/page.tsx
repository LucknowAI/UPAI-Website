import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogsSection from "@/components/sections/blogs-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | UPAI Labs",
  description:
    "Articles on AI written by members of the UPAI Labs team.",
  alternates: { canonical: "/blogs" },
}

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-1 pt-20">
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
}
