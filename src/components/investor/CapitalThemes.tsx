"use client";

import {
  Bot,
  Code2,
  Server,
  Boxes,
  Cpu,
  HeartPulse,
  Shield,
  Video,
  ArrowRight,
} from "lucide-react";

const themes = [
  {
    name: "AI Agents",
    investors: "2,744 Investors",
    icon: Bot,
    color: "text-rose-500",
    bg: "from-rose-50 to-white",
  },
  {
    name: "AI Coding",
    investors: "156 Investors",
    icon: Code2,
    color: "text-indigo-500",
    bg: "from-indigo-50 to-white",
  },
  {
    name: "AI Infrastructure",
    investors: "180 Investors",
    icon: Server,
    color: "text-sky-500",
    bg: "from-sky-50 to-white",
  },
  {
    name: "Developer Tools",
    investors: "145 Investors",
    icon: Boxes,
    color: "text-blue-500",
    bg: "from-blue-50 to-white",
  },
  {
    name: "Robotics",
    investors: "90 Investors",
    icon: Cpu,
    color: "text-emerald-500",
    bg: "from-emerald-50 to-white",
  },
  {
    name: "Healthcare AI",
    investors: "107 Investors",
    icon: HeartPulse,
    color: "text-green-500",
    bg: "from-green-50 to-white",
  },
  {
    name: "Defense AI",
    investors: "78 Investors",
    icon: Shield,
    color: "text-red-500",
    bg: "from-red-50 to-white",
  },
  {
    name: "Video AI",
    investors: "87 Investors",
    icon: Video,
    color: "text-fuchsia-500",
    bg: "from-fuchsia-50 to-white",
  },
];

export default function CapitalThemes() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center text-xl font-bold">
          <span className="mr-4 text-red-500">06</span>
          Capital Themes
        </h2>

        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
          View all
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {themes.map((theme) => {
          const Icon = theme.icon;

          return (
            <div
              key={theme.name}
              className={`rounded-2xl border border-gray-100 overflow-hidden bg-gradient-to-br ${theme.bg} p-3 transition hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-10 items-center justify-center rounded-xl bg-white shadow-sm ${theme.color}`}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-gray-900">
                    {theme.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {theme.investors}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}