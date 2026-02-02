import Header from "@/components/report/Header";
import Hero from "@/components/report/Hero";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";
import TableOfContents from "@/components/report/TableOfContents";
import GlobalAILandscape from "@/components/report/GlobalAILandscape";
import MarketDemand from "@/components/report/MarketDemand";
import BarriersToAdoption from "@/components/report/BarriersToAdoption";
import PortfolioAnalysis from "@/components/report/PortfolioAnalysisNew";
import MemberCapabilities from "@/components/report/MemberCapabilities";
import StrategicRecommendations from "@/components/report/StrategicRecommendations";
import Conclusion from "@/components/report/Conclusion";
import Appendices from "@/components/report/Appendices";
import References from "@/components/report/References";
import Footer from "@/components/report/Footer";
import SidebarNav from "@/components/report/SidebarNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        
        {/* Content sections with reserved space for the right sidebar (xl+) */}
        <div className="xl:flex">
          <div className="min-w-0 flex-1">
            {/* Executive Summary Section */}
            <div className="bg-muted/50">
              <ExecutiveSummary />
            </div>

            <TableOfContents />

            {/* Section 1: Global AI Landscape */}
            <div className="bg-muted/50">
              <GlobalAILandscape />
            </div>

            {/* Section 2: Market Demand */}
            <div>
              <MarketDemand />
            </div>

            {/* Section 3: Barriers */}
            <div className="bg-muted/50">
              <BarriersToAdoption />
            </div>

            {/* Section 4: Portfolio Analysis */}
            <div>
              <PortfolioAnalysis />
            </div>

            {/* Section 5: Member Capabilities */}
            <div className="bg-muted/50">
              <MemberCapabilities />
            </div>

            {/* Section 6: Strategic Recommendations */}
            <div>
              <StrategicRecommendations />
            </div>

            {/* Conclusion */}
            <div className="bg-muted/50">
              <Conclusion />
            </div>

            {/* Appendices & References */}
            <div>
              <Appendices />
            </div>
            <div className="bg-muted/50">
              <References />
            </div>
          </div>

          {/* right rail */}
          <aside className="hidden xl:block w-52 shrink-0">
            <SidebarNav />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
