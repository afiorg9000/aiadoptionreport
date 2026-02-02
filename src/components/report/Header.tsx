import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#executive-summary"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <BookOpen className="h-6 w-6 text-white" />
              <span className="font-body text-sm font-medium text-white/90 hidden sm:block">
                AI Training Market Report 2025
              </span>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-6"
              aria-label="Main navigation"
            >
              <a 
                href="#executive-summary" 
                className="font-body text-sm text-white/70 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1 transition-colors"
              >
                Findings
              </a>
              <a 
                href="#strategic-recommendations" 
                className="font-body text-sm text-white/70 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1 transition-colors hidden md:block"
              >
                Opportunities
              </a>
              <a 
                href="#references" 
                className="font-body text-sm text-white/70 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1 transition-colors hidden md:block"
              >
                References
              </a>
            </motion.nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
