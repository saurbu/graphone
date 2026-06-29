"use client";

import { ChevronDown, Flame, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";
import { categories, products } from "@/data/ProductData";

export default function ProductFeed() {
  return (
    <section className="ml-[120px] bg-[#fafafa] min-h-screen py-2 justify-center">

      <div className="mx-auto max-w-8xl">

        <div className="mb-6 justify-center flex flex-wrap gap-2">

          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "bg-black text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-rose-300 hover:text-rose-500"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap items-center gap-2">

            <button className="flex items-center gap-2 rounded-lg bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600">
              <Flame className="h-4 w-4" />
              Trending
            </button>

            <button className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
              New
            </button>

            <button className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
              Popular
            </button>

            <button className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
              Featured
            </button>

          </div>

          <div className="flex items-center gap-2">

            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
              Most Popular
              <ChevronDown className="h-4 w-4" />
            </button>

          </div>

        </div>

        <div className="space-y-5">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              tagline={product.tagline}
              description={product.description}
              category={product.category}
              users={product.users}
              likes={product.likes}
              comments={product.comments}
              Icon={product.Icon}
              color={product.color}
              featured={product.featured}
            />
          ))}

        </div>

        <div className="my-8 overflow-hidden rounded-3xl bg-gradient-to-r from-black via-gray-900 to-black p-8 text-white">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase">
                Sponsored
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                Launch your AI Product
              </h2>

              <p className="mt-2 max-w-xl text-gray-300">
                Reach thousands of founders, developers, investors and AI
                enthusiasts every day.
              </p>

            </div>

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black hover:shadow-lg">
              Promote Product
            </button>

          </div>

        </div>

        <div className="space-y-5">

          {products.map((product) => (
            <ProductCard
              key={`second-${product.id}`}
              name={product.name}
              tagline={product.tagline}
              description={product.description}
              category={product.category}
              users={product.users}
              likes={product.likes}
              comments={product.comments}
              Icon={product.Icon}
              color={product.color}
            />
          ))}

        </div>

      </div>

    </section>
  );
}