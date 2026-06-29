"use client";

import {
  Bell,
  Search,
  Command,
  Sparkles,
  Bookmark,
  Plus,
} from "lucide-react";

export default function ProductNavbar() {
  return (
    <header className="sticky top-0 z-40 ml-[135px] border-b border-gray-200 bg-white/90 backdrop-blur-xl">

      <div className="flex h-15 items-center justify-between px-8">

        {/* SEARCH */}
        <div className="flex flex-1 items-center gap-6">

          <div className="relative w-full max-w-xl">

            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
              placeholder="Search AI products, companies, founders..."
              className="h-10 w-xl rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-24 text-[15px] outline-none focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
            />

            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg border bg-white px-2 py-1 text-xs text-gray-500">
              <Command className="h-3.5 w-3.5" />
              K
            </div>

          </div>

          <button className="hidden xl:flex items-center gap-2 rounded-2xl border px-5 py-2 text-sm font-medium hover:shadow-md">
            <Sparkles className="h-5 w-4 text-rose-500" />
            AI Discover
          </button>

        </div>

        <div className="ml-8 flex items-center gap-3">

          <button className="h-10 w-12 rounded-2xl border hover:shadow-md">
            <Plus className="h-5 w-5 mx-auto" />
          </button>

          <button className="h-10 w-12 rounded-2xl border hover:shadow-md">
            <Bookmark className="h-5 w-5 mx-auto" />
          </button>

          <button className="relative h-10 w-12 rounded-2xl border hover:shadow-md">
            <Bell className="h-5 w-5 mx-auto" />
            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border px-3 py-0.5 hover:shadow-md">

            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-bold">
              SS
            </div>

            <div className="hidden xl:block">
              <p className="text-sm font-semibold">Saurav</p>
              <p className="text-xs text-gray-500">Premium</p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}