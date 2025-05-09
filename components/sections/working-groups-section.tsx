import { User, Building, GraduationCap } from "lucide-react";
import Link from "next/link";

const workingGroups = [
  {
    title: "Individual",
    icon: <User className="h-12 w-12 text-white" />,
    link: "https://airtable.com/appVtU1kNmtrMl3dq/pagWDJfY7nqpFwvsl/form"
  },
  {
    title: "Industry",
    icon: <Building className="h-12 w-12 text-white" />,
    link: "https://airtable.com/appVtU1kNmtrMl3dq/pagQjOdvTi8YUSm19/form"
  },
  {
    title: "Academia",
    icon: <GraduationCap className="h-12 w-12 text-white" />,
    link: "https://airtable.com/appVtU1kNmtrMl3dq/pagNcRDO7yraRF73O/form"
  }
];

export default function WorkingGroupsSection() {
  return (
    <section id="working-groups" className="py-12 md:py-16 relative bg-black">
      <div className="container relative max-w-5xl mx-auto px-4">
        {/* Working Groups Button - Centered */}
        <div className="flex justify-center mb-6">
          <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-lg font-medium text-white flex items-center">
              <span className="mr-2">•</span> Working Groups
            </p>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            <span className="text-gray-500">Explore Our Community</span>{" "}
            <span className="text-white">Collaboration Teams Now</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base">
            Working groups are specialized teams assembled to address specific tasks or projects within an organization, leveraging their expertise and knowledge to achieve defined objectives.
          </p>
        </div>

        {/* Working Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {workingGroups.map((group, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <h3 className="text-white text-xl font-semibold mb-4">{group.title}</h3>
              <div className="mb-5">
                {group.icon}
              </div>
              <Link 
                href={group.link}
                className="bg-white text-black hover:bg-gray-200 transition-colors py-2 px-6 rounded-full w-full text-center font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 