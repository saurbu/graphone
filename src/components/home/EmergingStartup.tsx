import Image from "next/image";
import Link from "next/link";
import { startups } from "@/data/startups";
export default function EmergingStartup() {
  const startup = startups.slice(0, 4);

  if (startups.length < 4) return null;

  return (
    <section className="mt-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600">
            3
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Emerging AI Startups to Watch
            </h2>

            <p className="text-gray-500 text-sm">
              Promising early-stage companies gaining real traction.
            </p>
          </div>
        </div>

        <Link
          href="/companies"
          className="font-semibold hover:text-pink-600"
        >
          View all
        </Link>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-6">
        <Link
          href={`/companies/${startups[0].slug}`}
          className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-violet-100 via-purple-50 to-white p-6 lg:col-span-2"
        >
          <div className="relative z-10 max-w-[220px]">
            <Image
              src={startups[0].logo}
              alt={startups[0].name}
              width={46}
              height={46}
            />

            <h3 className="mt-5 text-2xl font-bold">
              {startups[0].name}
            </h3>

            <p className="mt-1 text-gray-500">
              {startups[0].category}
            </p>

            <p className="mt-6 text-gray-700">
              {startups[0].description}
            </p>

            <p className="mt-8 text-sm text-gray-500">
              {startups[0].founded} • {startups[0].employees}
            </p>
          </div>

          
        </Link>
        {startups.slice(1, 3).map((company) => (
          <Link
            key={company.id}
            href={`/companies/${company.slug}`}
            className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:shadow-lg"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={42}
              height={42}
            />

            <h3 className="mt-5 text-xl font-semibold">
              {company.name}
            </h3>

            <p className="text-gray-500">
              {company.category}
            </p>

            <p className="mt-5 text-gray-600">
              {company.description}
            </p>

            <p className="mt-8 text-sm text-gray-500">
              {company.founded} • {company.employees}
            </p>
          </Link>
        ))}

        <Link
          href={`/companies/${startups[3].slug}`}
          className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-200 p-6 lg:col-span-2"
        >
          <div className="relative z-10 max-w-[220px]">
            <Image
              src={startups[3].logo}
              alt={startups[3].name}
              width={46}
              height={46}
            />

            <h3 className="mt-5 text-2xl font-bold">
              {startups[3].name}
            </h3>

            <p className="mt-1 text-gray-500">
              {startups[3].category}
            </p>

            <p className="mt-6 text-gray-700">
              {startups[3].description}
            </p>

            <p className="mt-8 text-sm text-gray-500">
              {startups[3].founded} • {startups[3].employees}
            </p>
          </div>

        </Link>
      </div>
    </section>
  );
}