import { ArrowRight, Cpu, Database, Brain, Network, BookOpen, Users, FileText, BarChart3 } from "lucide-react";
import Link from "next/link";

const activities = [
  {
    title: "Education and Knowledge Sharing",
    description: "Facilitating AI education programs in Tier 3 cities and villages across Uttar Pradesh, making AI accessible to all.",
    icon: <Users className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "Promoting AI & ML Research",
    description: "Pioneering AI research to explore new horizons and push the boundaries of the field in Uttar Pradesh.",
    icon: <BookOpen className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "Active Engagement in Open Source",
    description: "Actively contributing to the open-source AI community, fostering innovation and accessibility.",
    icon: <Cpu className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "Supporting Startup Ventures",
    description: "Nurturing AI-driven startups by providing vital support, mentorship, and resources.",
    icon: <Brain className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "Solving Local Challenges with AI",
    description: "With the power of AI innovation, we strive to make impactful solutions for our local challenges.",
    icon: <FileText className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "Hindi NLP and Data Advancement",
    description: "Advancing Hindi Natural Language Processing and data-driven initiatives to empower the Hindi language.",
    icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
            <Cpu className="h-6 w-6 text-secondary" />
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white"><span className="mr-2">•</span>Activities</p>
            </div>
          </div>

          <h2 className="text-4xl text-muted-foreground max-w-3xl mx-auto">
            Empower the idea of AI and knowledge sharing throughout Uttar
            Pradesh.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-color-[#383942]">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border rounded-lg border-primary/20 p-6 hover:border-primary/30 transition-all duration-300 shadow-lg h-full flex flex-col"
            >
              <div className="mb-4">
                <div className="p-2 rounded-lg mb-3">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{activity.title}</h3>
              </div>
              <p className="text-gray-400 mb-4 flex-grow">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
