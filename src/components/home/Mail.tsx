"use client";

import { useState } from "react";
import Logo from "@/assets/logos/image.png";
import Link from "next/link";
import Image from "next/image";

export default function Mail() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mt-5">
      <div className="flex items-center gap-4 rounded-2xl border border-rose-200 bg-rose-100 px-4 py-3 shadow-sm lg:px-6">
        <div
          className={`${
            open ? "hidden lg:flex" : "flex"
          } items-center gap-4 flex-1`}
        >
          <Link href="/" className="shrink-0">
            <Image
              src={Logo}
              alt="GraphOne Logo"
              className="h-8 w-8 rounded-full"
            />
          </Link>

          <div className="hidden lg:block">
            <span className="text-lg font-semibold">
              Be the First to discover what's next in AI.
            </span>

            <p className="text-gray-500">
              Join thousands of builders, investors, researchers.
            </p>
          </div>
        </div>

        <div
          className={`${
            open
              ? "flex flex-1"
              : "hidden lg:flex lg:flex-1 lg:ml-12 lg:max-w-lg"
          } items-center rounded-full border border-gray-300 bg-white pl-4 shadow-sm focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-100 transition-all duration-300`}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className=" bg-transparent px-3 py-3 outline-none"
          />
          <button
            onClick={() => {
                if (window.innerWidth < 1024) {
                setOpen((prev) => !prev);
                }
            }}
            className="ml-auto flex h-12 shrink-0 items-center justify-center rounded-full bg-red-500 px-6 text-white transition hover:bg-red-600"
            >
            <span className="lg:hidden">
                {open ? "Submit" : "Get Updated"}
            </span>

            <span className="hidden lg:inline">
                Get Updated
            </span>
            </button>
        </div>

        
      </div>
    </section>
  );
}