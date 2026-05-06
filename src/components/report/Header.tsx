import { motion } from "framer-motion";
import { Download } from "lucide-react";
import llpaLogo from "@/assets/llpa-logo-white.svg";

const PDF_HREF = "/Enterprise-AI-Adoption-Report-2025.pdf";
const PDF_FILENAME = "Enterprise-AI-Adoption-Report-2025.pdf";

const Header = () => {
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

              <a
                href={PDF_HREF}
                download={PDF_FILENAME}
                aria-label="Download PDF: read-only, print-ready layout"
                className="
                  group inline-flex items-center gap-2 px-5 py-2
                  font-body text-sm font-medium text-white
                  bg-llpa-blue hover:bg-llpa-blue/90
                  rounded-lg shadow-sm hover:shadow-md
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-white/50 focus-visible:ring-offset-2
                  focus-visible:ring-offset-slate-900
                "
              >
                <Download
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap">Download PDF</span>
              </a>
            </motion.nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
