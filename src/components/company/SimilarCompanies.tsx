import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { companies } from "@/data/companies";

type Props = {
  current: any;
};

export default function SimilarCompanies({ current }: Props) {
  const similarCompanies = companies
    .filter((c) => c.slug !== current.slug)
    .slice(0, 4);

  return (
    <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Similar Companies
          </h2>

          <p className="mt-1 text-gray-500">
            Explore companies working in similar AI domains.
          </p>
        </div>

        <Link
          href="/companies"
          className="rounded-full border border-gray-200 px-5 py-2 text-sm font-medium transition hover:border-pink-400 hover:bg-pink-50"
        >
          View All
        </Link>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {similarCompanies.map((company) => (
          <Link
            key={company.id}
            href={`/companies/${company.slug}`}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl"
          >
            <div className="relative h-36 overflow-hidden">
              <Image
                src={company.background}
                alt={company.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold shadow">
                #{company.rank}
              </div>

              <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold transition group-hover:text-pink-600">
                    {company.name}
                  </h3>

                  <span className="mt-2 inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">
                    {company.category}
                  </span>
                </div>

                <ArrowUpRight className="text-gray-400 transition group-hover:text-pink-600" />
              </div>

              <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                {company.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp
                    size={18}
                    className="text-green-500"
                  />

                  <span className="font-semibold">
                    {company.growthScore}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {company.views}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}