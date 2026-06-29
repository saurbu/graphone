"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { collectionProducts } from "@/data/ProductData";

export default function ProductCollection() {
  return (
    <section className="ml-[90px] bg-[#fafafa]">
      <div className="mx-auto grid w-10xl gap-1 px-4 py-8 lg:grid-cols-[1.5fr_.8fr]">

        <div className="relative overflow-hidden rounded-[32px] w-120 border border-gray-200 bg-white p-8 shadow-sm">

          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-rose-100 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-indigo-100 blur-3xl" />

          <div className="relative">

            <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600">

              <Sparkles className="h-4 w-4" />

              Collection of the Week

            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900">

              AI Coding
              <br />
              Tools

            </h2>

            <p className="mt-4 max-w-lg text-gray-500 leading-7">

              Discover the fastest growing AI coding assistants,
              IDEs and developer tools changing how software is built.

            </p>

            <div className="mt-8 flex -space-x-4">

              {collectionProducts.map((item) => {
                const Icon = item.Icon;

                return (
                  <div
                    key={item.name}
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white ${item.color} shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                );
              })}

            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 font-semibold text-white transition hover:scale-105">

              Explore Collection

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        </div>

        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm">

          <div className="border-b border-gray-100 p-6">

            <p className="text-sm font-medium text-gray-500">
              PRODUCT OF THE DAY
            </p>

          </div>

          <div className="p-6">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black">

              <Sparkles className="h-8 w-8 text-white" />

            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">

              Cursor

            </h3>

            <p className="mt-3 text-gray-500 leading-7">

              AI-powered code editor helping developers write,
              understand and refactor code faster.

            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-gray-50 p-4">

                <p className="text-sm text-gray-500">
                  Users
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  1.9M
                </h4>

              </div>

              <div className="rounded-2xl bg-gray-50 p-4">

                <p className="text-sm text-gray-500">
                  Rating
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  4.9★
                </h4>

              </div>

            </div>

            <button className="mt-8 w-full rounded-2xl border border-gray-200 py-3 font-semibold transition hover:bg-gray-50">

              View Product

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}