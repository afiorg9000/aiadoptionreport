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
import { PrintProvider, usePrint } from "@/contexts/PrintContext";

const ReportContent = () => {
  const { contentRef } = usePrint();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div ref={contentRef} className="print-content">
          <Hero />
          
          <div className="xl:flex">
            <div className="min-w-0 flex-1">
              <ExecutiveSummary />
              <Methodology />
              <TableOfContents />
              <GlobalAILandscape />
              <BarriersToAdoption />
              <IndustryAdoption />
              <AdoptionPhases />
              <FutureOutlook />
              <Conclusion />
              <References />
            </div>

            <aside className="hidden xl:block w-52 shrink-0 print:hidden">
              <SidebarNav />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <PrintProvider>
      <ReportContent />
    </PrintProvider>
  );
};

export default Index;
