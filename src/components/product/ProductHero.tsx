"use client";

import {
  ArrowRight,
  Search,
  Sparkles,
  Brain,
  Bot,
  Cpu,
  Database,
  Code2,
} from "lucide-react";

import { heroTags } from "@/data/ProductData";

const nodes = [
  {
    name: "OpenAI",
    Icon: Sparkles,
    color: "from-emerald-500 to-green-500",
    x: "50%",
    y: "45%",
    size: "h-16 w-16",
  },
  {
    name: "Anthropic",
    Icon: Brain,
    color: "from-orange-500 to-yellow-500",
    x: "20%",
    y: "22%",
    size: "h-12 w-12",
  },
  {
    name: "Cursor",
    Icon: Code2,
    color: "from-black to-gray-700",
    x: "82%",
    y: "28%",
    size: "h-12 w-12",
  },
  {
    name: "Perplexity",
    Icon: Database,
    color: "from-cyan-500 to-blue-500",
    x: "75%",
    y: "74%",
    size: "h-12 w-12",
  },
  {
    name: "Runway",
    Icon: Cpu,
    color: "from-violet-500 to-indigo-500",
    x: "22%",
    y: "75%",
    size: "h-12 w-12",
  },
  {
    name: "Agents",
    Icon: Bot,
    color: "from-pink-500 to-rose-500",
    x: "50%",
    y: "8%",
    size: "h-10 w-10",
  },
];

export default function ProductHero() {
  return (
    <section className="ml-[92px] border-b border-gray-100 bg-gradient-to-b from-white via-white to-gray-50">

      <div className="mx-auto grid max-w-9xl gap-12 px-8 py-16 lg:grid-cols-[1.05fr_.95fr] bg-gradient-to-br from-rose-50/60 via-white to-indigo-50/70">

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600">

            <Sparkles className="h-4 w-4" />

            AI Discovery Platform

          </span>

          <h1 className="mt-6 font-bold leading-[1.05] tracking-tight text-gray-900 lg:text-2xl">

            The
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              {" "}Intelligence Layer{" "}
            </span>

            for the AI Economy.

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-500">

            Discover AI startups, products, companies, investors,
            founders and capital flowing across the global AI ecosystem.

          </p>

          <div className="relative mt-10">

            <Search className="absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />

            <input
              placeholder="Search products, companies, investors..."
              className="h-16 w-full rounded-3xl border border-gray-200 bg-white pl-16 pr-44 text-lg shadow-sm outline-none transition-all focus:border-rose-400 focus:ring-4 focus:ring-rose-100"
            />

            <button className="absolute right-2 top-2 flex h-12 items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 text-white transition hover:scale-105">

              Explore

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            {heroTags.map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-rose-300 hover:text-rose-500"
              >
                {tag}
              </button>
            ))}

          </div>

        </div>

        <div className="relative flex items-center justify-center">

          <div className="relative h-[520px] w-full overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f8fafc_1px,transparent_1px)] bg-[length:34px_34px]" />

            <div className="absolute inset-0 " />

            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-rose-300" />

            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-200" />

            {nodes.map((node) => {
              const Icon = node.Icon;

              return (
                <div
                  key={node.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: node.x,
                    top: node.y,
                  }}
                >
                  <div
                    className={`${node.size} flex items-center justify-center rounded-2xl bg-gradient-to-br ${node.color} shadow-xl`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <p className="mt-3 text-center text-sm font-medium text-gray-700">
                    {node.name}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}