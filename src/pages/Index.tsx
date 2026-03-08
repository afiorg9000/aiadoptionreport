import Header from "@/components/report/Header";
import Hero from "@/components/report/Hero";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";
import Methodology from "@/components/report/Methodology";
import TableOfContents from "@/components/report/TableOfContents";
import GlobalAILandscape from "@/components/report/GlobalAILandscape";
import BarriersToAdoption from "@/components/report/BarriersToAdoption";
import IndustryAdoption from "@/components/report/IndustryAdoption";
import AdoptionPhases from "@/components/report/AdoptionPhases";
import FutureOutlook from "@/components/report/FutureOutlook";
import Conclusion from "@/components/report/Conclusion";
import References from "@/components/report/References";
import Footer from "@/components/report/Footer";
import SidebarNav from "@/components/report/SidebarNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Cover */}
        <Hero />
        
        {/* Content sections with sidebar */}
        <div className="xl:flex">
          <div className="min-w-0 flex-1">
            {/* Executive Summary */}
            <ExecutiveSummary />

            {/* Methodology */}
            <Methodology />

            {/* Table of Contents */}
            <TableOfContents />

            {/* Section 1: Global AI Adoption Landscape */}
            <GlobalAILandscape />

            {/* Section 2: Barriers to Adoption */}
            <BarriersToAdoption />

            {/* Section 3: Industry Adoption */}
            <IndustryAdoption />

            {/* Section 4: Productivity Impact Analysis */}
            <AdoptionPhases />

            {/* Section 5: Future Outlook */}
            <FutureOutlook />

            {/* Conclusion */}
            <Conclusion />

            {/* References */}
            <References />
          </div>

          {/* Right sidebar navigation */}
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
