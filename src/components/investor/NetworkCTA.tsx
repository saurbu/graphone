"use client";

import { ArrowRight } from "lucide-react";

export default function NetworkCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">

        <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-white to-indigo-50" />

        <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between px-8 py-8">

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">

            <div className="flex items-center gap-4">

              <span className="text-rose-500 font-bold text-lg">
                10
              </span>

              <div>

                <h3 className="font-bold text-sm text-gray-900">
                  Join the GraphOne Investor Network
                </h3>

              </div>

            </div>

            <div className="hidden lg:block h-14 w-px bg-gray-200" />

            <div>

              <h2 className="text-lg xl:text-lg font-bold tracking-tight text-gray-900 leading-tight">
                Unlock better opportunities.
                Build what's next.
              </h2>

            </div>

          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md">
                Log in
            </button>

            <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-500/30">
                Sign up for free

                <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </button>

            </div>

        </div>

        <div className="absolute left-10 right-10 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="absolute inset-0 rounded-[28px] ring-1 ring-black/5 pointer-events-none" />
        </div>
    </section>
  );
}