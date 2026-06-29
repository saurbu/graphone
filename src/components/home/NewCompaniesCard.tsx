import Image from "next/image";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    name: "MemGPT",
    category: "AI Memory",
    logo: "/images/companies/memgpt.png",
  },
  {
    name: "Bria AI",
    category: "AI Video",
    logo: "/images/companies/bria.png",
  },
  {
    name: "CharacterX",
    category: "AI Chat",
    logo: "/images/companies/characterx.png",
  },
  {
    name: "Unify",
    category: "AI Infra",
    logo: "/images/companies/unify.png",
  },
  {
    name: "Palette",
    category: "AI Design",
    logo: "/images/companies/palette.png",
  },
];

export default function NewCompaniesCard() {
  return (
    <section className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-sm font-bold text-pink-600">
            12
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              New on GraphOne
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Recently added companies.
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:bg-gray-50">
          View all
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {companies.map((company) => (
          <button
            key={company.name}
            className="group flex flex-col items-center rounded-2xl p-4 transition hover:bg-gray-50"
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition group-hover:shadow-md">
              <Image
                src={company.logo}
                alt={company.name}
                width={42}
                height={42}
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 text-base font-semibold text-gray-900">
              {company.name}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {company.category}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}