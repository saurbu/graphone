"use client";

import {
  ChevronDown,
  Grid2X2,
  List,
  RotateCcw,
  Search,
} from "lucide-react";

const filters = [
  "Category",
  "Funding Stage",
  "Country",
  "Team Size",
  "More Filters",
];

export default function ExploreCompaniesCard() {
  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
          13
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Explore All Companies
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Find, filter and discover AI companies.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-5">
        {filters.map((filter) => (
          <button
            key={filter}
            className="flex h-12 items-center justify-between rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 transition hover:border-pink-300 hover:bg-pink-50"
          >
            {filter}

            <ChevronDown size={16} />
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        <div className="flex flex-wrap items-center gap-3">

          <span className="text-sm font-medium text-gray-500">
            Sort by
          </span>

          <button className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium hover:border-pink-300">
            Trending

            <ChevronDown size={16} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 hover:border-pink-300">
            <RotateCcw size={18} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-500 bg-pink-50 text-pink-600">
            <Grid2X2 size={18} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 hover:border-pink-300">
            <List size={18} />
          </button>

        </div>

        <div className="flex flex-col items-end">

          <button className="flex items-center gap-2 rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-600">
            <Search size={16} />

            Explore Companies
          </button>

          <p className="mt-2 text-sm text-gray-500">
            50,000+ companies
          </p>

        </div>

      </div>
    </section>
  );
}