import { ArrowRight } from "lucide-react";

const acquisitions = [
  {
    company: "Global Illumination",
    year: "2023",
    description: "AI-powered design startup",
  },
  {
    company: "Rockset",
    year: "2024",
    description: "Enterprise search infrastructure",
  },
];

export default function Acquisitions() {
  return (
    <section
      id="acquisitions"
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Acquisitions
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Strategic acquisitions expanding AI capabilities.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 text-left text-sm text-gray-500">
              <th className="px-8 py-4 font-medium">Company</th>
              <th className="px-8 py-4 font-medium">Year</th>
              <th className="px-8 py-4 font-medium">Focus</th>
            </tr>
          </thead>

          <tbody>
            {acquisitions.map((item) => (
              <tr
                key={item.company}
                className="border-b border-gray-100 transition hover:bg-pink-50/60"
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 font-bold text-pink-600">
                      {item.company.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.company}
                      </h3>
                    </div>
                  </div>
                </td>

                <td className="px-8 py-5 text-gray-700">
                  {item.year}
                </td>

                <td className="px-8 py-5 text-gray-600">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end border-t border-gray-100 px-8 py-5">
        <button className="flex items-center gap-2 text-sm font-semibold text-pink-600 transition hover:gap-3">
          View all acquisitions
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}