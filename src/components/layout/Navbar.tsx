"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, Search } from "lucide-react";

import logo from "@/assets/logos/image.png";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = navigation.filter((item) => item.showInNavbar);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1700px] items-center justify-between px-4">

        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
        >
          <Image
            src={logo}
            alt="GraphOne"
            className="h-9 w-9 rounded-full"
          />

          <span className="hidden text-xl font-bold sm:block">
            graphOne
          </span>
        </Link>

        <div className="mx-8 hidden flex-1 lg:flex">
          <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm transition focus-within:border-rose-400 focus-within:ring-2 focus-within:ring-rose-100">
            <Search className="h-5 w-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search companies, products..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <nav className="hidden h-16 items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-full items-center border-b-[3px] text-sm font-semibold transition ${
                pathname === item.href
                  ? "border-rose-500 text-rose-500"
                  : "border-transparent text-gray-700 hover:border-rose-500 hover:text-rose-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">

            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600"
            >
              Signup
            </Link>

            <button className="rounded-lg p-2 hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>

          </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="border-t bg-white">

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 transition ${
                pathname === item.href
                  ? "bg-rose-50 font-semibold text-rose-600"
                  : "hover:bg-gray-50"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="space-y-3 border-t p-5">

            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600"
            >
              Signup
            </Link>

          </div>

        </nav>
      </div>
    </header>
  );
}