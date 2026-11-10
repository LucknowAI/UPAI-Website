import Link from "next/link";
import { CalendarDays, HeartHandshake, GraduationCap, Mic, Building2, FlaskConical, Github } from "lucide-react";

const ways = [
  {
    title: "Attend",
    description: "Come to a meetup, study jam, paper reading session or hackathon.",
    href: "/events",
    cta: "See events",
    icon: CalendarDays,
  },
  {
    title: "Volunteer",
    description: "Help run events, design, write, or look after our community channels.",
    href: "https://lucknowai.github.io/volunteer/",
    cta: "Volunteer roles",
    icon: HeartHandshake,
  },
  {
    title: "Mentor or be mentored",
    description: "Experienced practitioners guide learners through real projects.",
    href: "https://lucknowai.github.io/mentorship/",
    cta: "Mentorship programme",
    icon: GraduationCap,
  },
  {
    title: "Give a talk",
    description: "Share what you know at a meetup or run a hands-on workshop.",
    href: "/contact_us?topic=volunteer",
    cta: "Propose a talk",
    icon: Mic,
  },
  {
    title: "Partner or sponsor",
    description: "Host an event, sponsor a hackathon or work with us as a company or college.",
    href: "/contact_us?topic=partnership",
    cta: "Talk to us",
    icon: Building2,
  },
  {
    title: "Research",
    description: "Present a paper, join the Awadhi work or lead a research project.",
    href: "/contact_us?topic=research",
    cta: "Get in touch",
    icon: FlaskConical,
  },
  {
    title: "Contribute code",
    description: "Every project is open source. Pick an issue and open a pull request.",
    href: "https://github.com/LucknowAI",
    cta: "Our GitHub",
    icon: Github,
  },
];

export default function GetInvolvedSection() {
  return (
    <section id="get-involved" className="py-16 md:py-24 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white flex items-center">
                <span className="mr-2">•</span> Get involved
              </p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Build it </span>
            <span className="text-gray-500">with us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map(({ title, description, href, cta, icon: Icon }) => {
            const external = href.startsWith("http");
            return (
              <Link
                key={title}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col rounded-2xl bg-[#111] border border-white/10 p-6 hover:border-white/30 transition-colors"
              >
                <Icon className="h-8 w-8 text-gray-500 group-hover:text-secondary transition-colors" />
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-400 flex-1">{description}</p>
                <span className="mt-4 text-sm text-white underline underline-offset-4 group-hover:text-secondary">
                  {cta}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
