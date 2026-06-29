"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const investors = [
  {
    name: "a16z",
    desc: ["AI Infrastructure", "AI Agents", "Developer Tools"],
    img: "/images/ui/agent-bg.png",
  },
  {
    name: "Sequoia",
    desc: ["AI Infra", "Enterprise AI", "Global Scale"],
    img: "/images/ui/frontier-bg.png",
  },
  {
    name: "Lightspeed",
    desc: ["Early Stage", "AI/ML", "Enterprise"],
    img: "/images/ui/funded-bg.png",
  },
  {
    name: "Khosla Ventures",
    desc: ["Deep Tech", "AI", "Frontier"],
    img: "/images/ui/alumni-bg.png",
  },
  {
    name: "Accel",
    desc: ["Early Stage", "Consumer AI", "Enterprise"],
    img: "/images/ui/funded.png",
  },
  {
    name: "General Catalyst",
    desc: ["Seed to Growth", "AI First", "Platform"],
    img: "/images/ui/infrastructure-bg.png",
  },
];

export default function TrendingInvestors() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const el = scrollRef.current;

    setShowLeft(el.scrollLeft > 10);

    setShowRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 10
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    handleScroll();
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold"><span className="text-red-500 pr-5 text-xl">01</span> Trending Investors</h2>
        <p className="text-xs text-gray-400 pl-12">Discover top VC firms</p>
      </div>

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 border rounded-full bg-white shadow"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 border rounded-full bg-white shadow"
          >
            <ChevronRight size={18} />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar scroll-smooth px-10"
        >
          {investors.map((i) => (
            <div
              key={i.name}
              className="relative flex-shrink-0 w-[200px] h-[160px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={i.img}
                alt={i.name}
                fill
                sizes="280px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white z-10">
                <div>
                  <h3 className="font-bold text-lg">{i.name}</h3>

                  <div className="text-xs opacity-90 mt-2 space-y-1">
                    {i.desc.map((d) => (
                      <div key={d}> {d}</div>
                    ))}
                  </div>
                </div>

                <button className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full w-fit hover:bg-white/30">
                  View portfolio →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}