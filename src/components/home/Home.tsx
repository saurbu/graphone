import Hero from "./Hero";
import TrendingCompanies from "./FeaturedCompanies";
import FastestCompanies from "./FastestCompany";
import EmergingStartup from "./EmergingStartup";
import Categories from "./Categories";
import Breakdown from "./Breakdown";
import Receently from "./Recently";
import Watch from "./Watch";
import AIUnicornsCard from "./AIUnicornsCard";
import FrontierAILabsCard from "./FrontierAILabsCard";
import OpenSourceLeadersCard from "./OpenSourceLeadersCard";
import CuratedCollection from "./CuratedCollection";
import NewCompaniesCard from "./NewCompaniesCard";
import ExploreCompaniesCard from "./ExploreCompaniesCard";
import Mail from "./Mail";

export default function Page() {
  return (
  <div className="px-4 py-8 md:px-8 lg:px-12 space-y-5">
    <Hero />
    <TrendingCompanies />
    <FastestCompanies />
    <EmergingStartup />
    <Categories />
    <div className="mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <Breakdown />
      <Receently />
      <Watch />
    </div>
      <AIUnicornsCard />
      <FrontierAILabsCard />
      <OpenSourceLeadersCard />
      <CuratedCollection />
      <div className="grid gap-6 lg:grid-cols-2">
        <NewCompaniesCard />
        <ExploreCompaniesCard />
      </div>
      <Mail />

    </div>
  )
}