"use client";

import {
  ArrowRight,
  Building2,
  BadgeDollarSign,
  Wrench,
  Waves,
  Target,
} from "lucide-react";

const investors = [
  {
    name: "Theory",
    subtitle: "Ventures",
    desc1: "Early Stage",
    desc2: "AI First",
    icon: Building2,
  },
  {
    name: "Conviction",
    subtitle: "Partners",
    desc1: "Seed to A",
    desc2: "AI Startups",
    icon: BadgeDollarSign,
  },
  {
    name: "Radical",
    subtitle: "Ventures",
    desc1: "Pre-seed",
    desc2: "AI + Frontier",
    icon: Wrench,
  },
  {
    name: "NFDG",
    subtitle: "AI-first Fund",
    desc1: "Global Early",
    desc2: "Stage",
    icon: Waves,
  },
  {
    name: "SouthPark",
    subtitle: "Commons",
    desc1: "Operator-led",
    desc2: "Invest",
    icon: Target,
  },
];

export default function EmergingInvestors() {
  return (
    <section>
      <div className=" flex items-center justify-between">
        <h2 className="flex items-center text-xl font-bold text-gray-900">
          <span className="mr-4 text-red-500">07</span>
          Emerging Investors
        </h2>

        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black">
          View all
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Horizontal scroll with hidden scrollbar */}
      <div className="investor-scroll flex gap-4 pb-2">
        {investors.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="group h-[160px] w-[105px] flex-shrink-0 rounded-3xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-full flex-col">
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gray-100 text-gray-900">
                  <Icon size={18} strokeWidth={2.2} />
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="text-[15px] font-bold leading-tight text-gray-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium text-gray-500">
                    {item.subtitle}
                  </p>

                  <div className="mt-auto space-y-1">
                    <p className="text-[10px] text-gray-500">{item.desc1}</p>
                    <p className="text-[10px] text-gray-500">{item.desc2}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        
      </div>
    </section>
  );
}