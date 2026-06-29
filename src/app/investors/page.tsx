import BrowseInvestor from "@/components/investor/BrowseInvestor";
import CapitalGraphCTA from "@/components/investor/CapitalGraphCTA";
import CapitalThemes from "@/components/investor/CapitalThemes";
import EmergingInvestors from "@/components/investor/EmergingInvestors";
import InvestorCollections from "@/components/investor/InvestorCollections";
import InvestorDiscoveryPage from "@/components/investor/InvestorDiscoveryPage";
import InvestorResearch from "@/components/investor/InvestorResearch";
import InvestorsBackingWinners from "@/components/investor/InvestorsBackingWinners";
import MostActiveInvestors from "@/components/investor/MostActiveInvestors";
import NetworkCTA from "@/components/investor/NetworkCTA";
import TrendingInvestors from "@/components/investor/TrendingInvestors";

export default function InvestorsPage() {
  return (
    <main className="bg-white text-black">
      <InvestorDiscoveryPage />
      <div className=" pb-20">
        <TrendingInvestors /> 
        <InvestorCollections /> 
        <BrowseInvestor />   
        <MostActiveInvestors />
        <div className="px-15 grid grid-cols-1 xl:grid-cols-2 gap-8">
          <InvestorsBackingWinners />
          <CapitalThemes />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-1">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <EmergingInvestors />
            <InvestorResearch />
          </div>
        </div> 
        <CapitalGraphCTA /> 
        <NetworkCTA />
      </div>
    </main>
  );
}