import { motion } from "framer-motion";
import llpaLogo from "@/assets/llpa-logo-white.svg";
import { sourceCount } from "@/data/reportData";

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-950 text-white border-t border-white/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={llpaLogo} alt="LLPA" className="h-8" />
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Analysis of global enterprise AI adoption patterns, barriers, and future outlook. 
              Synthesizing {sourceCount} research sources.
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
              Methodology
            </h4>
            <ul className="space-y-2 font-body text-sm text-white/60">
              <li>• Global market analysis</li>
              <li>• Academic research synthesis</li>
              <li>• Industry survey data</li>
              <li>• Forecasting model aggregation</li>
            </ul>
          </div>

          {/* Report Details */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
              Report Details
            </h4>
            <div className="space-y-3 font-body text-sm">
              <div>
                <span className="text-white/40">Report Date:</span>
                <span className="ml-2 text-white/80">March 2026</span>
              </div>
              <div>
                <span className="text-white/40">Research Period:</span>
                <span className="ml-2 text-white/80">2024 – 2025</span>
              </div>
              <div>
                <span className="text-white/40">Coverage:</span>
                <span className="ml-2 text-white/80">Global Enterprise AI</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-white/5 my-12" />

        <p className="font-body text-sm text-white/40 text-center">
          © 2026 Enterprise AI Adoption Report
        </p>
      </div>
    </footer>
  );
};

export default Footer;
