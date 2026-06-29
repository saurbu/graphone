import { DollarSign, ArrowUpRight } from "lucide-react";

const funding = [
  {
    round: "Seed",
    year: "2016",
    amount: "$10M",
    investors: "Y Combinator",
  },
  {
    round: "Series A",
    year: "2019",
    amount: "$120M",
    investors: "Microsoft",
  },
  {
    round: "Series B",
    year: "2021",
    amount: "$1B",
    investors: "Thrive Capital",
  },
  {
    round: "Series C",
    year: "2023",
    amount: "$10B",
    investors: "Microsoft",
  },
];

export default function Funding() {
  return (
    <section
      id="funding"
      className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Funding History
        </h2>

        <button className="rounded-full border px-4 py-2 text-sm hover:bg-gray-50">
          View All
        </button>
      </div>

      <div className="mt-8 space-y-5">

        {funding.map((item) => (
          <div
            key={item.round}
            className="rounded-2xl border border-gray-200 p-5 transition hover:border-pink-400 hover:shadow-md"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
                  <DollarSign className="text-pink-600" />
                </div>

                <div>

                  <h3 className="font-semibold">
                    {item.round}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.year}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <h3 className="font-bold text-lg">
                  {item.amount}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.investors}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}