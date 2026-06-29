"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface JobsHeroProps {
  keyword: string;
  setKeyword: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
  onSearch: () => void;
}

export default function JobsHero({
  keyword,
  setKeyword,
  location,
  setLocation,
  filter,
  setFilter,
  onSearch,
}: JobsHeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          AI Jobs at the companies building the future
        </h1>

        <p className="mt-6 text-xl text-gray-500 leading-8">
          Discover roles at the most innovative AI startups,
          labs and infrastructure companies.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              placeholder="Search companies or job titles..."
              className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-5 text-[15px] outline-none transition focus:border-rose-400 focus:bg-white"
            />
          </div>

          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Location"
              className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-5 text-[15px] outline-none transition focus:border-rose-400 focus:bg-white"
            />
          </div>

          <div className="relative">
            <SlidersHorizontal
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-14 min-w-[180px] appearance-none rounded-2xl border border-gray-200 bg-white pl-11 pr-10 text-[15px] outline-none transition hover:border-gray-300 focus:border-rose-400"
            >
              <option value="All">All Jobs</option>

              <optgroup label="Work Mode">
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
              </optgroup>

              <optgroup label="Employment">
                <option value="Full-time">Full-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </optgroup>

              <optgroup label="Shift">
                <option value="Day">Day Shift</option>
                <option value="Night">Night Shift</option>
              </optgroup>
            </select>
          </div>

          <button
            onClick={onSearch}
            className="h-14 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:scale-105"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </section>
  );
}