import Image from "next/image";
import { ArrowRight } from "lucide-react";

const investors = [
  {
    name: "Microsoft",
    type: "Lead Investor",
    logo: "/images/logos/microsoft.png",
    investment: "$13B",
  },
  {
    name: "Thrive Capital",
    type: "Series C",
    logo: "/images/logos/thrive.png",
    investment: "$1.3B",
  },
  {
    name: "Khosla Ventures",
    type: "Early Investor",
    logo: "/images/logos/khosla.png",
    investment: "$50M",
  },
  {
    name: "Sequoia Capital",
    type: "Growth",
    logo: "/images/logos/sequoia.png",
    investment: "$500M",
  },
];

export default function Investors() {
  return (
    <section
      id="investors"
      className="scroll-mt-28 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Investors
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Institutions and venture firms backing the company.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:border-pink-300 hover:bg-pink-50">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="divide-y divide-gray-100">
        {investors.map((investor) => (
          <div
            key={investor.name}
            className="flex items-center justify-between px-8 py-5 transition hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white">
                <Image
                  src={investor.logo}
                  alt={investor.name}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {investor.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {investor.type}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">
                {investor.investment}
              </p>

              <p className="text-sm text-gray-500">
                Investment
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}