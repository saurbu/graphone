"use client";

import {
  ArrowRight,
  Flame,
  Newspaper,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { trending, products } from "@/data/ProductData";

export default function ProductRightSidebar() {
  return (
    <aside className=" top-18 h-fit space-y-3 px-2 py-2">

      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">

        <div className="flex items-center gap-2 border-b border-gray-100 p-6">

          <Flame className="h-5 w-5 text-rose-500" />

          <h3 className="text-lg font-bold">
            Trending Searches
          </h3>

        </div>

        <div className="p-5">

          <div className="flex flex-wrap gap-3">

            {trending.map((item) => (
              <button
                key={item}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600"
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </div>

      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">

        <div className="flex items-center gap-2 border-b border-gray-100 p-6">

          <Newspaper className="h-5 w-5 text-blue-500" />

          <h3 className="text-lg font-bold">
            AI News
          </h3>

        </div>

        <div className="divide-y divide-gray-100">

          {[
            {
              title: "OpenAI launches a new reasoning model",
              time: "2 hours ago",
            },
            {
              title: "Anthropic expands Claude capabilities",
              time: "5 hours ago",
            },
            {
              title: "Cursor reaches 2M developers",
              time: "Today",
            },
            {
              title: "AI funding crosses $20B this month",
              time: "Yesterday",
            },
          ].map((news) => (
            <button
              key={news.title}
              className="w-full p-5 text-left transition hover:bg-gray-50"
            >
              <p className="font-semibold text-gray-900 leading-6">
                {news.title}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {news.time}
              </p>
            </button>
          ))}

        </div>

      </div>

      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">

        <div className="flex items-center gap-2 border-b border-gray-100 p-6">

          <TrendingUp className="h-5 w-5 text-emerald-500" />

          <h3 className="text-lg font-bold">
            Top Products
          </h3>

        </div>

        <div className="divide-y divide-gray-100">

          {products.slice(0, 5).map((product, index) => {
            const Icon = product.Icon;

            return (
              <div
                key={product.id}
                className="flex items-center gap-4 p-5"
              >
                <span className="w-5 text-sm font-bold text-gray-400">
                  {index + 1}
                </span>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${product.color}`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <div className="flex-1">

                  <p className="font-semibold">
                    {product.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {product.users} users
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 p-8 text-white shadow-xl">

        <Sparkles className="h-10 w-10" />

        <h3 className="mt-6 text-3xl font-bold leading-tight">

          Never miss the
          <br />
          next AI breakthrough.

        </h3>

        <p className="mt-4 text-rose-100 leading-7">

          Join thousands of founders, builders and investors receiving our weekly AI digest.

        </p>

        <input
          placeholder="Enter your email"
          className="mt-8 h-14 w-full rounded-2xl border-0 bg-white px-5 text-black outline-none"
        />

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 font-semibold transition hover:scale-[1.02]">

          Subscribe

          <ArrowRight className="h-4 w-4" />

        </button>

      </div>


    </aside>
  );
}