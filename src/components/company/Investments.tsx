import { ArrowRight } from "lucide-react";

const investments = [
  {
    company: "Figure AI",
    round: "Series B",
  },
  {
    company: "Harvey",
    round: "Series C",
  },
  {
    company: "1X",
    round: "Series A",
  },
];

export default function Investments() {
  return (
    <section
      id="investments"
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Investments
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Key startup investments across AI ecosystem.
          </p>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {investments.map((item) => (
          <div
            key={item.company}
            className="flex items-center justify-between px-8 py-5 transition hover:bg-pink-50/60"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 font-bold text-pink-600">
                {item.company.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.company}
                </h3>
                <p className="text-sm text-gray-500">{item.round}</p>
              </div>
            </div>

            <button className="flex items-center gap-2 text-sm font-semibold text-pink-600 transition hover:gap-3">
              View
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end border-t border-gray-100 px-8 py-5">
        <button className="flex items-center gap-2 text-sm font-semibold text-pink-600 transition hover:gap-3">
          View all investments
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}