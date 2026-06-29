import Image from "next/image";
import { ArrowRight } from "lucide-react";

const leaders = [
  {
    name: "Sam Altman",
    role: "CEO",
    image: "/images/people/sam.jpg",
    education: "Stanford",
    experience: "4 year",
  },
  {
    name: "Greg Brockman",
    role: "President",
    image: "/images/people/greg.jpg",
    education: "MIT",
    experience: "4 year",
  },
  {
    name: "Mira Murati",
    role: "CTO",
    image: "/images/people/mira.jpg",
    education: "Dartmouth",
    experience: "4 year",
  },
  {
    name: "Ilya Sutskever",
    role: "Chief Scientist",
    image: "/images/people/ilya.jpg",
    education: "Toronto",
    experience: "4 year",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="scroll-mt-28 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Leadership
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Executive leadership team.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:bg-gray-50">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="
              group
              relative
              rounded-2xl
              border border-gray-200
              bg-white
              shadow-sm
              hover:shadow-lg
              transition-all duration-300

              flex items-center gap-5
              p-6
              h-[160px]

              hover:-translate-y-1
            "
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-gray-50 to-white pointer-events-none" />

            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-gray-100 z-10">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>

            <div className=" relative z-10 justify-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {leader.name}
              </h3>

              <p className="text-sm text-gray-500">
                {leader.role}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {leader.education}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {leader.experience}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}