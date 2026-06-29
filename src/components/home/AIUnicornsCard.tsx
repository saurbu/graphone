import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";

const companies = [
  {
    name: "OpenAI",
    value: "$300B+",
    logo: "/images/logos/openai.png",
  },
  {
    name: "Anthropic",
    value: "$61.5B",
    logo: "/images/logos/anthropic.png",
  },
  {
    name: "Databricks",
    value: "$62B",
    logo: "/images/logos/databricks.png",
  },
  {
    name: "Perplexity",
    value: "$18B",
    logo: "/images/logos/perplexity.jpg",
  },
  {
    name: "xAI",
    value: "$80B",
    logo: "/images/logos/xai.png",
  },
];

export default function AIUnicornsCard() {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-pink-100 bg-gradient-to-r from-pink-50 via-purple-50 to-orange-50 p-6 shadow-sm transition-all duration-300 hover:shadow-xl">

      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative z-10 flex items-start justify-between">

        {/* Left */}
        <div>
          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
          8
        </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                AI Unicorns
              </h2>

              <p className="text-sm text-gray-500">
                Private companies valued above $1B.
              </p>
            </div>
          </div>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition group-hover:translate-x-1">
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>

      </div>

<div className="relative z-10 mt-8 flex flex-wrap justify-center gap-8 px-4 lg:px-8">

        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center gap-3 p-3 backdrop-blur transition"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-2 shadow-sm">

              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain p-2"
              />

            </div>

            <div>

              <h3 className="font-semibold text-gray-900">
                {company.name}
              </h3>

              <p className="text-sm text-gray-500">
                {company.value}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}