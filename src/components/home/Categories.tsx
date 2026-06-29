"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bot, Code, Search, Video, Mic, Server, Cross, BotMessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "AI Agent", href: "/", icon: Bot, companies: "1457 Companies" },
  { name: "AI Coding", href: "/", icon: Code, companies: "157 Companies" },
  { name: "AI Search", href: "/", icon: Search, companies: "717 Companies" },
  { name: "AI Video", href: "/", icon: Video, companies: "357 Companies" },
  { name: "AI Voice", href: "/", icon: Mic, companies: "147 Companies" },
  { name: "AI Infrastructure", href: "/", icon: Server, companies: "257 Companies" },
  { name: "Healthcare AI", href: "/", icon: Cross, companies: "27 Companies" },
  { name: "AI Robotics", href: "/", icon: BotMessageSquare, companies: "57 Companies" },
];

export default function Categories() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkButtons = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    setShowLeft(scrollLeft > 5);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkButtons();

    window.addEventListener("resize", checkButtons);

    return () => window.removeEventListener("resize", checkButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });

    setTimeout(checkButtons, 350);
  };

  return (
    <section className="mt-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
          4
        </div>

          <div>
            <h2 className="text-xl font-bold">
              Browse by Category
            </h2>

            <p className="text-gray-500 text-sm">
              Explore categories by what they are building.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-6 scrollbar-hide">

        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border cursor-pointer bg-white p-2 shadow-lg transition hover:bg-gray-100"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border cursor-pointer bg-white p-2 shadow-lg transition hover:bg-gray-100"
          >
            <ChevronRight size={22} />
          </button>
        )}

        <div
          ref={sliderRef}
          onScroll={checkButtons}
          className="flex gap-4 overflow-x-hidden scroll-smooth px-10 scrollbar-hide"
        >
          {navLinks.map(({ name, href, icon: Icon, companies }) => (
            <Link
              key={name}
              href={href}
              className="flex-shrink-0 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-pink-400 hover:bg-pink-50
                         w-[170px] sm:w-[130px] md:w-[160px] lg:w-[170px]"
            >
              <div className="flex flex-col gap-3">
                <Icon className="h-10 w-10 rounded-lg border border-pink-300 p-2 text-pink-500" />

                <h3 className="font-semibold">{name}</h3>

                <p className="text-sm text-gray-500">
                  {companies}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}