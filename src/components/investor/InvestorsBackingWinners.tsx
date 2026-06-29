"use client";

import {
  Brain,
  Building2,
  Cpu,
  Boxes,
  Database,
  Bot,
  ArrowRight,
} from "lucide-react";

const companies = [
  {
    name: "OpenAI",
    investors: [
      { name: "Microsoft", icon: Building2 },
      { name: "Thrive Capital", icon: Brain },
      { name: "Khosla Ventures", icon: Boxes },
      { name: "Founders Fund", icon: Cpu },
    ],
  },
  {
    name: "Anthropic",
    investors: [
      { name: "Google Ventures", icon: Building2 },
      { name: "Spark Capital", icon: Database },
      { name: "Menlo Ventures", icon: Boxes },
      { name: "Lightspeed", icon: Bot },
    ],
  },
  {
    name: "Perplexity",
    investors: [
      { name: "a16z", icon: Brain },
      { name: "Databricks Ventures", icon: Database },
      { name: "NEA", icon: Boxes },
      { name: "IVP", icon: Bot },
    ],
  },
];

export default function InvestorsBackingWinners() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center text-xl font-bold">
          <span className="mr-4 text-red-500">05</span>
          Investors Backing Winners
        </h2>

        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
          View all
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {companies.map((company) => (
          <div
            key={company.name}
            className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-3xl font-bold">{company.name}</h3>

            <p className="mt-5 mb-4 text-xs uppercase tracking-wider text-gray-400">
              Backed by
            </p>

            <div className="space-y-3">
              {company.investors.map((investor) => {
                const Icon = investor.icon;

                return (
                  <div
                    key={investor.name}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
                      <Icon size={15} />
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      {investor.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}