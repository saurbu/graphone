import { companies } from "@/data/companies";
import CompanyCard from "@/components/company/CompanyCard";
import CompanyListCard from "@/components/company/CompanyListCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedCompanies() {
  const featuredCompanies = companies.slice(0, 3);
  const sideCompanies = companies.slice(3, 5);

  return (
    <section className="mt-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
      
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
            1
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Trending AI Companies
            </h2>

            <p className="text-gray-500 text-sm">
              The most viewed AI companies right now.
            </p>
          </div>
        </div>

        <Link
          href="/companies"
          className="flex items-center gap-2 font-semibold text-red-500 transition hover:gap-3"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[3fr_1.1fr]">
  {/* Left */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {featuredCompanies.map((company) => (
      <CompanyCard key={company.id} company={company} />
    ))}
  </div>

  {/* Right */}
  <div className="flex flex-col gap-4 self-start">
    {sideCompanies.map((company) => (
      <CompanyListCard key={company.id} company={company} />
    ))}
  </div>
      </div>
    </section>
  );
}