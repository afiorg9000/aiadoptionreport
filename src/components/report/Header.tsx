import { motion } from "framer-motion";
import { Download } from "lucide-react";
import llpaLogo from "@/assets/llpa-logo-white.svg";
import { usePrint } from "@/contexts/PrintContext";

const Header = () => {
  const { handlePrint } = usePrint();

  return (
    <>
      <a
        href="#executive-summary"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <img src={llpaLogo} alt="LLPA" className="h-7" />
              <span className="text-slate-500 text-sm hidden sm:inline">|</span>
              <span className="font-body text-sm font-medium text-white/90 hidden sm:inline">
                Enterprise AI Adoption Report 2025
              </span>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
              aria-label="Main navigation"
            >
              <a 
                href="#executive-summary" 
                className="font-body text-sm text-slate-400 hover:text-white transition-colors"
              >
                Summary
              </a>
              <a 
                href="#methodology" 
                className="font-body text-sm text-slate-400 hover:text-white transition-colors hidden md:block"
              >
                Methodology
              </a>
              <a 
                href="#section-1" 
                className="font-body text-sm text-slate-400 hover:text-white transition-colors hidden lg:block"
              >
                Findings
              </a>
              <a 
                href="#references" 
                className="font-body text-sm text-slate-400 hover:text-white transition-colors hidden md:block"
              >
                References
              </a>
              <button
                onClick={() => handlePrint()}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-md transition-colors print:hidden"
                aria-label="Save as PDF"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Save PDF</span>
              </button>
            </motion.nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
