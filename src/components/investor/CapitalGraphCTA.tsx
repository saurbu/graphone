"use client";

import {
  ArrowRight,
  User,
  Briefcase,
  Building2,
  ShieldCheck,
  Boxes,
} from "lucide-react";

import GraphNode from "./GraphNode";

const nodes = [
  {
    title: "Investor",
    icon: User,
    color: "from-pink-500 via-rose-500 to-red-500",
    glow: "bg-pink-500",
  },
  {
    title: "Founder",
    icon: User,
    color: "from-violet-500 via-purple-500 to-fuchsia-500",
    glow: "bg-violet-500",
  },
  {
    title: "Company",
    icon: Building2,
    color: "from-blue-500 via-indigo-500 to-blue-600",
    glow: "bg-blue-500",
  },
  {
    title: "Funding Round",
    icon: ShieldCheck,
    color: "from-cyan-400 via-teal-400 to-cyan-500",
    glow: "bg-cyan-400",
  },
  {
    title: "Product",
    icon: Boxes,
    color: "from-green-400 via-emerald-500 to-green-500",
    glow: "bg-green-500",
  },
];

export default function CapitalGraphCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090311] px-10 py-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6b21a822,transparent_45%)]" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-32 top-24 h-[500px] w-[900px] rounded-full border border-fuchsia-500/20" />
          <div className="absolute -left-20 top-28 h-[480px] w-[860px] rounded-full border border-fuchsia-500/10" />
          <div className="absolute left-10 top-40 h-[430px] w-[760px] rounded-full border border-fuchsia-500/10" />
        </div>

        <div className="relative grid lg:grid-cols-[420px_1fr] items-center gap-2">

          <div>

            <div className="flex items-center gap-3 mb-6">

              <span className="text-rose-500 font-bold">
                09
              </span>

              <span className="text-white/80 font-medium">
                Explore the Capital Graph
              </span>

            </div>

            <h2 className="text-[25px] leading-tight font-bold text-white">
              Visualize How Capital
              <br />
              Moves in the AI Economy
            </h2>

            <p className="mt-6 text-white/50 text-sm leading-5 max-w-md">
              Explore the relationships between investors,
              founders, companies, funding rounds and products.
            </p>

            <button className="mt-8 flex items-center gap-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-4 font-semibold text-white transition hover:scale-105">
              Explore Capital Graph
              <ArrowRight size={18} />
            </button>

          </div>

          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-rose-500 via-violet-500 via-blue-500 via-cyan-400 to-green-500 opacity-70" />
              <div className="absolute left-0 right-0 top-10 flex justify-between px-10">
                {[0, 1, 2, 3].map((i) => (
                  <ArrowRight
                    key={i}
                    size={22}
                    className={[
                      "text-rose-400",
                      "text-violet-400",
                      "text-cyan-400",
                      "text-emerald-400",
                    ][i]}
                  />
                ))}
              </div>

              <div className="relative z-10 flex w-full items-start justify-between gap-8">
                {nodes.map((node) => (
                  <GraphNode
                    key={node.title}
                    title={node.title}
                    icon={node.icon}
                    color={node.color}
                    glow={node.glow}
                  />
                ))}
              </div>

              </div>
            </div>

            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
          <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10 pointer-events-none" />

    </div>
    </section>
  );
}