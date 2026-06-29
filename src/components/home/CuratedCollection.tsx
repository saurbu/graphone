"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const collections = [
  {
    title: "OpenAI Alumni Startups",
    companies: "42 companies",
    image: "/images/ui/alumni-bg.png",
  },
  {
    title: "YC AI Startups",
    companies: "263 companies",
    image: "/images/ui/yc-bg.png",
  },
  {
    title: "AI Agent Leaders",
    companies: "128 companies",
    image: "/images/ui/agent-bg.png",
  },
  {
    title: "AI Infrastructure Leaders",
    companies: "186 companies",
    image: "/images/ui/infrastructure-bg.png",
  },
  {
    title: "Most Funded AI Startups",
    companies: "184 companies",
    image: "/images/ui/funded-bg.png",
  },
  {
    title: "Most Funded AI Startups",
    companies: "184 companies",
    image: "/images/ui/funded.png",
  },
];

export default function CuratedCollection() {
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

    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", checkButtons);
    window.addEventListener("resize", checkButtons);

    return () => {
      slider.removeEventListener("scroll", checkButtons);
      window.removeEventListener("resize", checkButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
            11
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Curated Collections
            </h2>

            <p className="text-sm text-gray-500">
              Handpicked lists for faster discovery.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 shadow-lg transition hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 shadow-lg transition hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        )}

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {collections.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group relative h-24 w-[220px] shrink-0 overflow-hidden rounded-2xl sm:w-[220px] lg:w-[210px] xl:w-[232px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />

              <div className="relative z-10 flex h-full flex-col justify-end p-4">
                <h3 className="text-sm font-semibold leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-white/80">
                  {item.companies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}