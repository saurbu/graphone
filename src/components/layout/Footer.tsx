"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";

import Logo from "@/assets/logos/image.png";

const platformLinks = [
  "For Founders",
  "For Investors",
  "AI News",
  "AI Products",
  "AI Jobs",
];

const resourceLinks = [
  "Blog",
  "Research",
  "Reports",
  "API",
  "Help Center",
];

const companyLinks = [
  "About",
  "Careers",
  "Contact",
  "Privacy",
  "Terms",
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="grid gap-12 lg:grid-cols-[320px_1fr_340px]">

          <div>

            <Link href="/" className="inline-flex items-center gap-4">

              <Image
                src={Logo}
                alt="GraphOne"
                width={46}
                height={46}
                className="rounded-xl"
              />

              <div>

                <h2 className="text-2xl font-bold text-gray-900">
                  GraphOne
                </h2>

                <p className="text-sm text-gray-500 leading-6">
                  Intelligence Layer for
                  <br />
                  the AI Economy
                </p>

              </div>

            </Link>

            <div className="mt-8 flex items-center gap-5">

              <Link
                href="#"
                className="text-gray-500 hover:text-black transition"
              >
                {/* <Linkedin size={18} /> */} p
              </Link>

              <Link
                href="#"
                className="text-gray-500 hover:text-black transition"
              >
                {/* <Twitter size={18} /> */} t
              </Link>

              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs font-bold text-gray-600 hover:border-black hover:text-black transition"
              >
                G
              </Link>

            </div>

          </div>

          <div className="grid grid-cols-3 gap-10">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-5">
                Platform
              </h3>

              <ul className="space-y-3">
                {platformLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 transition hover:text-black"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-5">
                Resources
              </h3>

              <ul className="space-y-3">
                {resourceLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 transition hover:text-black"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-5">
                Company
              </h3>

              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 transition hover:text-black"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            </div>

            <div className="lg:pl-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Stay ahead in the AI economy
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Get the latest investor insights and capital
                trends in your inbox.
              </p>

              <div className="mt-6 flex overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-5 py-4 text-sm outline-none"
                />

                <button className="flex h-14 w-14 items-center justify-center bg-rose-500 text-white transition hover:bg-rose-600">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-3 text-sm text-gray-500 lg:flex-row">

          <p>
            © 2025 GraphOne. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <Link
              href="#"
              className="transition hover:text-black"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition hover:text-black"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="transition hover:text-black"
            >
              Cookies
            </Link>

            <Link
              href="#"
              className="transition hover:text-black"
            >
              Security
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}