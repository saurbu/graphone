import Link from "next/link";
import { companies } from "@/data/companies";
import GrowthCompanyCard from "@/components/company/GrowthCompanyCard";
import GrowthCTA from "@/components/company/GrowthCTA";

export default function FastestCompany() {
  const growthCompanies = companies.slice(0, 5);

  return (
    <section className="mt-5 grid gap-6 lg:grid-cols-[3fr_1.25fr]">

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
              2
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Fastest Growing AI Companies
              </h2>
              <p className="text-gray-500 text-sm">
                Companies showing strong momentum across key growth signals.
              </p>
            </div>
          </div>

          <Link href="/companies" className="font-semibold hover:text-red-500">
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
          {growthCompanies.map((company) => (
            <GrowthCompanyCard key={company.id} company={company} />
          ))}
        </div>

      </div>

      {/* RIGHT */}
      <GrowthCTA />

    </section>
  );
}