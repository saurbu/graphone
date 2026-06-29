import {
  Rocket,
  Sparkles,
  Trophy,
  Cpu,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description:
      "Started with the mission of advancing AI safely.",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "Major Breakthrough",
    description:
      "Released the first widely adopted language model.",
    icon: Sparkles,
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description:
      "Reached millions of users worldwide.",
    icon: Trophy,
  },
  {
    year: "2025",
    title: "Latest AI Models",
    description:
      "Released next-generation multimodal AI.",
    icon: Cpu,
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="mt-10 scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
    >

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Company Timeline
          </h2>

          <p className="mt-2 text-gray-500">
            Important milestones throughout the company's journey.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition hover:bg-gray-50">
          View Full Timeline
          <ArrowRight size={18} />
        </button>

      </div>

      <div className="relative mt-12">

        <div className="absolute left-0 right-0 top-5 h-[2px] bg-gray-200" />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.year}
                className="relative"
              >

                <div className="absolute left-5 top-2 z-10 h-6 w-6 rounded-full border-4 border-white bg-pink-500" />


                <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">

                    <Icon
                      className="text-pink-600"
                      size={22}
                    />

                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-pink-600">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}