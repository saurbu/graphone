import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const alumni = [
  {
    company: "Anthropic",
    logo: "/images/products/anthropic.png",
    role: "Founded by former OpenAI researchers",
    year: "2021",
  },
  {
    company: "Perplexity",
    logo: "/images/products/perplexity.jpg",
    role: "Former OpenAI engineers",
    year: "2022",
  },
  {
    company: "Thinking Machines Lab",
    logo: "/images/products/thinking-machines.png",
    role: "AI research startup",
    year: "2025",
  },
  {
    company: "Safe Superintelligence",
    logo: "/images/products/ssi.png",
    role: "Founded by Ilya Sutskever",
    year: "2024",
  },
  {
    company: "World Labs",
    logo: "/images/products/world-labs.png",
    role: "Spatial intelligence",
    year: "2024",
  },
  {
    company: "xAI",
    logo: "/images/products/xai.png",
    role: "AI foundation models",
    year: "2023",
  },
];

export default function Alumni() {
  return (
    <section
      id="alumni"
      className="mt-8 rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm"
    >
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Alumni Companies
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Companies founded by former employees.
          </p>
        </div>

        <Link
          href="#"
          className="flex items-center gap-2 text-sm font-semibold text-pink-600 hover:text-pink-700"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {alumni.map((item) => (
          <Link
            key={item.company}
            href="#"
            className="group rounded-2xl border border-gray-200 p-5 transition-all hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border bg-gray-50">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600">
                  {item.company}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.role}
                </p>

                <span className="mt-3 inline-flex rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                  {item.year}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}