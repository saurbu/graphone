"use client";

import {
  Sprout,
  TrendingUp,
  Users,
  Building2,
  BarChart3,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "Seed Investors",
    count: "1,246 Investors",
    icon: Sprout,
    color: "text-emerald-500",
    bg: "from-emerald-50 to-white",
  },
  {
    title: "Series A Investors",
    count: "896 Investors",
    icon: TrendingUp,
    color: "text-violet-500",
    bg: "from-violet-50 to-white",
  },
  {
    title: "Angel Investors",
    count: "2,734 Investors",
    icon: Users,
    color: "text-purple-500",
    bg: "from-purple-50 to-white",
  },
  {
    title: "Corporate Venture Funds",
    count: "432 Investors",
    icon: Building2,
    color: "text-blue-500",
    bg: "from-blue-50 to-white",
  },
  {
    title: "Late Stage Investors",
    count: "432 Investors",
    icon: BarChart3,
    color: "text-rose-500",
    bg: "from-rose-50 to-white",
  },
  {
    title: "Family Offices",
    count: "289 Investors",
    icon: Briefcase,
    color: "text-orange-500",
    bg: "from-orange-50 to-white",
  },
];

function Card({
  item,
  span,
}: {
  item: (typeof cards)[number];
  span: string;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`${span} h-[120px] rounded-3xl border border-gray-100 bg-gradient-to-br ${item.bg} p-6 transition hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="flex h-full items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow ${item.color}`}
        >
          <Icon size={28} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {item.count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BrowseInvestor() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-8 flex items-center text-xl font-bold">
        <span className="mr-5 text-red-500 text-lg">03</span>
        Browse by Investors Type
      </h2>

      <div className="grid grid-cols-12 gap-5">
        <Card item={cards[0]} span="col-span-12 md:col-span-3" />

        <Card item={cards[1]} span="col-span-12 md:col-span-4" />

        <Card item={cards[2]} span="col-span-12 md:col-span-4" />

        <div className="hidden md:flex col-span-1 items-center justify-center">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
            <ArrowRight size={18} />
          </button>
        </div>

        <Card item={cards[3]} span="col-span-12 md:col-span-5" />

        <Card item={cards[4]} span="col-span-12 md:col-span-4" />

        <Card item={cards[5]} span="col-span-12 md:col-span-3" />
      </div>
    </section>
  );
}