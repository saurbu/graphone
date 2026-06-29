"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const reports = [
  {
    title: "Top 600 AI Investors",
    year: "2024",
    image: "/images/ui/r1.png",
  },
  {
    title: "Who Leads Most Seed Rounds?",
    year: "2016",
    image: "/images/ui/r2.png",
  },
  {
    title: "The Rise of Operator Angels",
    year: "2026",
    image: "/images/ui/r3.png",
  },
  {
    title: "State of AI Venture Capital",
    year: "2014",
    image: "/images/ui/r4.png",
  },
  {
    title: "AI Capital Flows Report",
    year: "2020",
    image: "/images/ui/r5.png",
  },
];

export default function InvestorResearch() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="flex items-center text-xl font-bold text-gray-900">
          <span className="mr-4 text-red-500">08</span>
          Investor Research
        </h2>

        <button className="flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black">
          View all
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="w-full overflow-hidden">
        <div className="research-scroll flex gap-4 pb-2">
          {reports.map((report) => (
            <div
              key={report.title}
              className="group relative h-[160px] w-[105px] flex-shrink-0 overflow-hidden rounded-3xl border border-gray-200"
            >
              <Image
                src={report.image}
                alt={report.title}
                fill
                sizes="160px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="relative flex h-full flex-col justify-between p-5">
                <h3 className="text-[12px] font-bold leading-4 text-gray-900">
                  {report.title}
                </h3>

                <p className="text-sm font-medium text-gray-700">
                  {report.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}