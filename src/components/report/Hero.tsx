import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-slate-900">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Report Type */}
          <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-6">
            Research Report
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Enterprise AI Adoption 2025
          </h1>
          
          <p className="text-xl text-slate-300 mb-12">
            Global Patterns, Barriers, and Future Outlook
          </p>

          {/* Report metadata */}
          <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400 border-t border-slate-700 pt-8">
            <div>
              <span className="text-slate-500">Published:</span>{" "}
              <span className="text-slate-300">2025</span>
            </div>
            <div>
              <span className="text-slate-500">Coverage:</span>{" "}
              <span className="text-slate-300">Global Enterprise</span>
            </div>
            <div>
              <span className="text-slate-500">Sources:</span>{" "}
              <span className="text-slate-300">425+ research publications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
