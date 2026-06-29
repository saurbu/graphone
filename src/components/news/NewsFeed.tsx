"use client";

import Image from "next/image";
import { news } from "@/data/news";
import { Flame, MessageCircle, Eye, ChevronDown } from "lucide-react";

const tabs = [
  "All",
  "AI Models",
  "AI Tools",
  "Funding",
  "Research",
  "Robotics",
] as const;

type Tab = (typeof tabs)[number];

const badgeColors: Record<string, string> = {
  red: "bg-red-50 text-red-600",
  orange: "bg-orange-50 text-orange-600",
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-purple-50 text-purple-600",
  emerald: "bg-emerald-50 text-emerald-600",
  pink: "bg-pink-50 text-pink-600",
  indigo: "bg-indigo-50 text-indigo-600",
  rose: "bg-rose-50 text-rose-600",
  cyan: "bg-cyan-50 text-cyan-600",
  amber: "bg-amber-50 text-amber-600",
};
export default function NewsFeed() {
  return (
    <section className=" ml-30 w-full max-w-7xl mx-auto px-4">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
          AI News
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Trending AI News
        </h1>

        <p className="mt-3 max-w-3xl text-[16px] leading-7 text-gray-500">
          Stay updated with the biggest AI announcements, research papers,
          funding rounds, product launches and startup news from around the world.
        </p>
      </div>
      <div className="sticky top-0 z-20 mb-8 rounded-3xl max-w-270 border border-gray-200 bg-white/95 p-5 backdrop-blur">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                index === 0
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap  items-center gap-3 ">
          {["Latest", "Category", "Source"].map((label) => (
            <button
              key={label}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50"
            >
              {label}
              <ChevronDown size={16} />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4 max-w-270">
        {news.map((item) => (
          <article
            key={item.id}
            className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
          >
            <div className="flex gap-6">
                            <div className="hidden w-12 items-start justify-center md:flex">
                <span className="text-3xl font-bold text-gray-300 transition group-hover:text-red-500">
                  {item.rank}
                </span>
              </div>

              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        fill
                        sizes="48px"
                        className="object-contain p-2"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.company}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.source} • {item.time}
                      </p>
                    </div>
                  </div>
                                    <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      badgeColors[item.color] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h2 className="max-w-4xl text-2xl font-bold leading-9 text-gray-900 transition group-hover:text-red-500">
                  {item.title}
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-gray-500">
                  Artificial intelligence continues to evolve rapidly as leading
                  companies introduce new foundation models, enterprise solutions,
                  infrastructure improvements and breakthrough research worldwide.
                </p>
                                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Flame size={17} className="text-orange-500" />
                    Trending
                  </div>

                  <div className="flex items-center gap-2">
                    <Eye size={17} />
                    {item.views}
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircle size={17} />
                    {item.comments}
                  </div>

                  <button className="ml-auto rounded-full border border-gray-200 px-5 py-2 text-sm font-medium transition hover:border-red-400 hover:text-red-500">
                    Read Story →
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}