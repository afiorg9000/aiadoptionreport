import { createContext, useContext, useRef, ReactNode } from "react";

interface PrintContextType {
  handlePrint: () => void;
  contentRef: React.RefObject<HTMLDivElement>;
  isExporting: boolean;
}

const PrintContext = createContext<PrintContextType | null>(null);

export const usePrint = () => {
  const context = useContext(PrintContext);
  if (!context) {
    throw new Error("usePrint must be used within PrintProvider");
  }
  return context;
};

const PDF_URL = "/Enterprise-AI-Adoption-Report-2025.pdf";

export const PrintProvider = ({ children }: { children: ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "Enterprise-AI-Adoption-Report-2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PrintContext.Provider value={{ handlePrint, contentRef, isExporting: false }}>
      {children}
    </PrintContext.Provider>
  );
};
