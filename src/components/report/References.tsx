import { motion, AnimatePresence } from "framer-motion";
import { references } from "@/data/reportData";
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const References = () => {
  const sortedRefs = [...references].sort((a, b) => a.id - b.id);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedRefId, setExpandedRefId] = useState<number | null>(null);
  
  const displayedRefs = isExpanded ? sortedRefs : sortedRefs.slice(0, 30);

  const handleRefClick = (refId: number) => {
    setExpandedRefId(expandedRefId === refId ? null : refId);
  };

  return (
    <section id="references" className="py-16 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="font-body text-xs font-medium tracking-widest uppercase text-llpa-blue mb-2 block">
            Sources
          </span>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
            References
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-3">
            {sortedRefs.length} external market research sources validated against training provider surveys
          </p>
          <p className="font-body text-sm text-muted-foreground">
            <a
              href="/source-library.json"
              className="text-llpa-blue font-medium hover:underline"
              download
            >
              Download full bibliographic index (JSON)
            </a>{" "}
            for digital libraries, events, or tooling. Public URLs are included where available; full-text PDFs from publishers are not redistributed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {displayedRefs.map((ref, index) => {
            const isRefExpanded = expandedRefId === ref.id;
            
            return (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.005, 0.3), duration: 0.2 }}
                id={`ref-${ref.id}`}
                className={`bg-card rounded border transition-all cursor-pointer ${
                  isRefExpanded 
                    ? 'border-llpa-blue shadow-md' 
                    : 'border-border hover:border-llpa-blue/30'
                }`}
                onClick={() => handleRefClick(ref.id)}
              >
                <div className="p-2">
                  <div className="flex items-start gap-1.5">
                    <span className="font-mono text-[10px] font-bold text-llpa-blue bg-llpa-blue/10 px-1 py-0.5 rounded shrink-0">
                      {ref.id}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className={`font-body text-[11px] font-medium text-foreground ${!isRefExpanded ? 'truncate' : ''}`} title={ref.source}>
                        {ref.source}
                      </p>
                      <p className={`font-body text-[10px] text-muted-foreground ${!isRefExpanded ? 'truncate' : ''}`} title={ref.description}>
                        {ref.description}
                      </p>
                    </div>
                    <ChevronDown 
                      className={`h-3 w-3 text-muted-foreground shrink-0 transition-transform ${isRefExpanded ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </div>
                
                <AnimatePresence>
                  {isRefExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-2 pt-1 border-t border-border/50">
                        <p className="font-body text-[11px] text-foreground mb-2">
                          {ref.description}
                        </p>
                        {ref.url ? (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10px] font-medium text-llpa-blue hover:text-llpa-blue/80 transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            View Source
                          </a>
                        ) : (
                          <span className="text-[10px] text-muted-foreground italic">
                            No external link available
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {sortedRefs.length > 30 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-llpa-blue hover:text-llpa-blue/80 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show All {sortedRefs.length} References <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default References;
