import { createContext, useContext, useRef, ReactNode } from "react";
import { useReactToPrint } from "react-to-print";

interface PrintContextType {
  handlePrint: () => void;
  contentRef: React.RefObject<HTMLDivElement>;
}

const PrintContext = createContext<PrintContextType | null>(null);

export const usePrint = () => {
  const context = useContext(PrintContext);
  if (!context) {
    throw new Error("usePrint must be used within PrintProvider");
  }
  return context;
};

export const PrintProvider = ({ children }: { children: ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "Enterprise-AI-Adoption-Report-2025",
    pageStyle: `
      @page {
        size: A4;
        margin: 10mm;
      }
      @media print {
        html, body {
          height: auto !important;
          max-height: none !important;
          overflow: visible !important;
          background: white !important;
        }
        * {
          overflow: visible !important;
          max-height: none !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .fixed, .absolute, .sticky {
          position: static !important;
        }
      }
    `,
  });

  return (
    <PrintContext.Provider value={{ handlePrint, contentRef }}>
      {children}
    </PrintContext.Provider>
  );
};
