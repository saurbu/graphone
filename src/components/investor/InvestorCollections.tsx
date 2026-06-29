"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Investors Backing\nAI Agents",
    investors: "129 Investors",
    image: "/images/ui/bg0.png",
    large: true,
  },
  {
    title: "Investors Backing\nIndian AI Startups",
    investors: "96 Investors",
    image: "/images/ui/bg1.png",
  },
  {
    title: "Top Seed\nInvestors",
    investors: "214 Investors",
    image: "/images/ui/bg2.png",
  },
  {
    title: "Operator\nAngels",
    investors: "178 Investors",
    image: "/images/ui/bg3.png",
  },
  {
    title: "OpenAI Alumni\nInvestors",
    investors: "86 Investors",
    image: "/images/ui/bg4.png",
  },
  {
    title: "Enterprise AI\nInvestors",
    investors: "64 Investors",
    image: "/images/ui/bg5.png",
  },
  {
    title: "Developer Tool\nSpecialists",
    investors: "92 Investors",
    image: "/images/ui/bg6.png",
  },
  {
    title: "Healthcare AI\nInvestors",
    investors: "58 Investors",
    image: "/images/ui/bg7.png",
  },
];

export default function InvestorCollections() {
  return (
    <section className="max-w-7xl mx-auto px-6">

      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">
          <span className="text-rose-500 font-bold text-xl">02</span>

          <h2 className="text-2xl font-semibold text-gray-900">
            Investor Collections
          </h2>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
          View all
          <ArrowRight size={16} />
        </button>

      </div>

      <div className="grid grid-cols-12 gap-4 auto-rows-[165px]">
        {collections.slice(0, 4).map((item, index) => (
          <div
            key={item.title}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
              index === 0 ? "col-span-12 md:col-span-5" : "col-span-12 md:col-span-[2.333]"
            }`}
            style={
              index !== 0
                ? {
                    gridColumn:
                      index === 1
                        ? "span 3 / span 3"
                        : index === 2
                        ? "span 2 / span 2"
                        : "span 2 / span 2",
                  }
                : {}
            }
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
              <div>
                <h3 className="whitespace-pre-line text-3xl font-semibold leading-tight md:text-[18px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-white/90">
                  {item.investors}
                </p>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-black backdrop-blur transition hover:scale-110">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
        {collections.slice(4).map((item) => (
          <div
            key={item.title}
            className="relative col-span-12 md:col-span-3 h-[165px] overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width:768px) 100vw,25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
              <div>
                <h3 className="whitespace-pre-line text-[18px] font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-white/90">
                  {item.investors}
                </p>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
          }
        }

        button {
          transition: all 0.25s ease;
        }

        button:hover svg {
          transform: translateX(2px);
        }

        h3 {
          text-wrap: balance;
        }
      `}</style>
    </section>
  );
}