import { motion } from "framer-motion";
import { typography } from "./styles";
import { BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Color bar accent */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-llpa-orange" />
        <div className="flex-1 bg-llpa-green" />
        <div className="flex-1 bg-llpa-blue" />
        <div className="flex-1 bg-llpa-yellow" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <BookOpen className="h-10 w-10 text-white" />
            <span className="text-white text-xl font-semibold">AI Training Market Research</span>
          </motion.div>

          {/* Report badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-12 bg-llpa-yellow" />
            <span className={`${typography.sectionLabel} text-llpa-yellow mb-0`}>
              Industry Report 2025
            </span>
          </motion.div>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            AI Training Market Report
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
            Global Enterprise AI Adoption Analysis & Strategic Opportunities for Learning Providers 2025-2027
          </p>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-8 pt-6 border-t border-white/20"
          >
            <div>
              <p className={`${typography.caption} text-white/50 mb-1`}>Report Type</p>
              <p className="text-sm text-white/90">Industry Analysis</p>
            </div>
            <div>
              <p className={`${typography.caption} text-white/50 mb-1`}>Research Period</p>
              <p className="text-sm text-white/90">2024 – 2025</p>
            </div>
            <div>
              <p className={`${typography.caption} text-white/50 mb-1`}>Primary Research</p>
              <p className="text-sm text-white/90">Global training provider survey</p>
            </div>
            <div>
              <p className={`${typography.caption} text-white/50 mb-1`}>External Sources</p>
              <p className="text-sm text-white/90">425+ market research sources</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
