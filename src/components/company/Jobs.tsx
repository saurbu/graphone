import { Briefcase } from "lucide-react";

const jobs = [
  "ML Engineer",
  "Frontend Engineer",
  "Research Scientist",
  "Product Designer",
];

export default function Jobs() {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Open Positions
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Join the team building next-gen AI systems.
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {jobs.map((job, index) => (
          <div
            key={job}
            className="group flex items-center justify-between px-8 py-5 transition hover:bg-pink-50/40"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition group-hover:bg-pink-100 group-hover:text-pink-600">
                <Briefcase size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-700 transition">
                  {job}
                </h3>

                <p className="text-xs text-gray-500">
                  {index === 0
                    ? "AI/ML Systems team"
                    : index === 1
                    ? "Web Platform team"
                    : index === 2
                    ? "Research division"
                    : "Design & UX team"}
                </p>
              </div>
            </div>

            <button className=" cursor-pointer rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-pink-300 hover:bg-pink-500 hover:text-white hover:shadow-md">
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}