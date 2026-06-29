"use client";

import { ArrowRight, Circle, Hexagon, Sparkles, Triangle, Square } from "lucide-react";

const investors = [
  {
    name: "a16z",
    companies: "120 portfolio companies",
    logos: [
      { name: "OpenAI", color: "text-emerald-600", Icon: Circle },
      { name: "CURSOR", color: "text-black", Icon: Hexagon },
      { name: "perplexity", color: "text-cyan-500", Icon: Sparkles },
      { name: "Harvey", color: "text-gray-700", Icon: Triangle },
      { name: "Anysphere", color: "text-indigo-600", Icon: Square },
    ],
  },
  {
    name: "SEQUOIA",
    companies: "96 portfolio companies",
    logos: [
      { name: "ANTHROPIC", color: "text-black", Icon: Circle },
      { name: "Glean", color: "text-sky-600", Icon: Hexagon },
      { name: "Decagon", color: "text-violet-600", Icon: Sparkles },
      { name: "Mercor", color: "text-orange-500", Icon: Triangle },
      { name: "Pika", color: "text-pink-500", Icon: Square },
    ],
  },
  {
    name: "Lightspeed",
    companies: "86 portfolio companies",
    logos: [
      { name: "Mistral", color: "text-orange-500", Icon: Circle },
      { name: "Cohere", color: "text-emerald-600", Icon: Hexagon },
      { name: "Gamma", color: "text-fuchsia-500", Icon: Sparkles },
      { name: "Rippling", color: "text-amber-700", Icon: Triangle },
      { name: "Browserbase", color: "text-slate-700", Icon: Square },
    ],
  },
  {
    name: "Accel",
    companies: "72 portfolio companies",
    logos: [
      { name: "Klutrim", color: "text-green-700", Icon: Circle },
      { name: "meesho", color: "text-pink-500", Icon: Hexagon },
      { name: "Shiprocket", color: "text-indigo-600", Icon: Sparkles },
      { name: "Kloud", color: "text-slate-700", Icon: Triangle },
      { name: "Razorpay", color: "text-blue-600", Icon: Square },
    ],
  },
];

export default function MostActiveInvestors() {
  return (
    <section className="max-w-7xl mx-auto px-6">

      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">
          <span className="text-rose-500 font-bold text-lg">
            04
          </span>

          <h2 className="text-xl font-semibold">
            Most Active Investors
          </h2>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
          View all
          <ArrowRight size={16} />
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {investors.map((investor, index) => (
        <div
          key={investor.name}
          className="relative rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex h-full flex-col justify-between">

            <div>
              <h3 className="text-[30px] font-black tracking-tight text-gray-900">
                {investor.name}
              </h3>

              <p className="mt-2 text-xs font-medium text-gray-400">
                {investor.companies}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5">
                {investor.logos.map(({ name, color, Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <Icon
                      size={15}
                      strokeWidth={2.5}
                      className={color}
                    />

                    <span
                      className={`text-[13px] font-semibold ${color}`}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button className="flex items-center gap-2 text-sm font-semibold text-rose-500 transition-all hover:gap-3">
                View portfolio
                <ArrowRight size={14} />
              </button>
              {index === investors.length - 1 && (
                <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-11 w-11 rounded-full border border-gray-200 bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110">
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
            </div>
    </section>
  );
}