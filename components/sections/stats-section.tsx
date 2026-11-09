import { activeProjects } from "@/content/projects";
import { pastEvents } from "@/lib/events";

// Numbers are calculated from the content files, so they always match what the
// site actually lists. The member count is the community's own figure.
export default function StatsSection() {
  const past = pastEvents();
  const hackathons = past.filter((e) => e.type === "hackathon").length;

  const stats = [
    { value: "5,000+", label: "Community members" },
    { value: String(past.length), label: "Events since November 2023" },
    { value: String(hackathons), label: "Hackathons" },
    { value: String(activeProjects.length), label: "Active open-source projects" },
  ];

  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-lg">
          <p className="text-xl font-medium text-white"><span className="mr-2">•</span>Impact so far</p>
        </div>
      </div>
      <section className="py-24 relative bg-gradient-to-b from-background to-background/90">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Events counted from{" "}
            <a href="/events" className="underline hover:text-primary">our events list</a>,
            including those run with AI Community Lucknow and other partner communities.
          </p>
        </div>
      </section>
    </div>
  );
}
