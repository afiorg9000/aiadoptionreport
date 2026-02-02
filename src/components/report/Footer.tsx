import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-900 text-white">
      {/* Color bar */}
      <div className="h-1 flex mb-12">
        <div className="flex-1 bg-llpa-orange" />
        <div className="flex-1 bg-llpa-green" />
        <div className="flex-1 bg-llpa-blue" />
        <div className="flex-1 bg-llpa-yellow" />
      </div>
      
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
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-white" />
              <span className="text-white font-semibold">AI Training Market Research</span>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Comprehensive analysis of the global AI training landscape, synthesizing insights from training providers across 20+ countries.
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-llpa-yellow mb-4">
              Research Methodology
            </h4>
            <ul className="space-y-2 font-body text-sm text-white/70">
              <li>• Global training provider surveys</li>
              <li>• Course catalog analysis</li>
              <li>• 425+ external research sources</li>
              <li>• Four-factor maturity assessment</li>
            </ul>
          </div>

          {/* Report Details */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-llpa-yellow mb-4">
              Report Details
            </h4>
            <div className="space-y-3 font-body text-sm">
              <div>
                <span className="text-white/50">Report Date:</span>
                <span className="ml-2 text-white/90">January 2025</span>
              </div>
              <div>
                <span className="text-white/50">Research Period:</span>
                <span className="ml-2 text-white/90">2024 – 2025</span>
              </div>
              <div>
                <span className="text-white/50">Coverage:</span>
                <span className="ml-2 text-white/90">Global Enterprise AI Training Market</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-white/10 my-12" />

        <p className="font-body text-sm text-white/50 text-center">
          © 2025 AI Training Market Research. Industry analysis report.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
