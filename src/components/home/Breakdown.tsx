import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breakdown } from "@/data/breakdown";

export default function Breakdown() {
  const breakdowns = breakdown.slice(0, 3);

  if (!breakdowns.length) return null;

  return (
    <section className="h-full w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
          5
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold">
            Breakout Companies
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Companies making moves.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-[1fr_auto] gap-4">
        <div className="flex-1 space-y-6">
          {breakdowns.map((company) => (
            <Link
              key={company.id}
              href={`/companies/${company.slug}`}
              className="group flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-semibold transition group-hover:text-pink-600">
                  {company.name}
                </h3>

                <p className="mt-1 break-words text-sm leading-5 text-gray-500">
                  {company.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-end self-end">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:border-pink-400 hover:bg-pink-50">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}