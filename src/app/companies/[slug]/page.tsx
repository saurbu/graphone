import { notFound } from "next/navigation";
import { companies } from "@/data/companies";

import CompanyHero from "@/components/company/CompanyHero";
import CompanyTabs from "@/components/company/CompanyTabs";
import Timeline from "@/components/company/Timeline";
import Funding from "@/components/company/Funding";
import Ownership from "@/components/company/Ownership";
import Investors from "@/components/company/Investors";
import Leadership from "@/components/company/Leadership";
import Products from "@/components/company/Products";
import Acquisitions from "@/components/company/Acquisitions";
import Investments from "@/components/company/Investments";
import Competitors from "@/components/company/Competitors";
import SimilarCompanies from "@/components/company/SimilarCompanies";
import CompanyOverview from "@/components/company/CompanyOverview";
import LatestNews from "@/components/company/LatestNews";
import EcosystemGraph from "@/components/company/EcosystemGraph";
import ResearchPapers from "@/components/company/ResearchPapers";
import Patents from "@/components/company/Patents";
import Jobs from "@/components/company/Jobs";
import Collections from "@/components/company/Collections";
import CompanyStats from "@/components/company/CompanyStats";
import Alumni from "@/components/company/Alumni";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const company = companies.find((item) => item.slug === slug);

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">

      <div className=" bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">

          <div className="flex items-center gap-2 text-sm">

            <span className="text-gray-500">
              Home
            </span>

            <span className="text-gray-400">
              /
            </span>

            <span className="text-gray-500">
              Companies
            </span>

            <span className="text-gray-400">
              /
            </span>

            <span className="font-semibold">
              {company.name}
            </span>

          </div>

        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">

        <CompanyHero company={company} />
        <CompanyTabs />
        <CompanyOverview company={company} />

        <Timeline />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Funding />
          <Ownership />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Investors />
          <Leadership />
        </div>

        <Products />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Acquisitions />
          <Investments />
        </div>
        <Competitors />
        <SimilarCompanies current={company} />
        <LatestNews />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ResearchPapers />
          <Patents />
        </div>

        <EcosystemGraph />

        <Jobs />

        <Collections />

        <CompanyStats company={company} />
        <Alumni />
      </div>

    </main>
  );
}