import { motion } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";

type TocItem = {
  id: string;
  title: string;
  items?: TocItem[];
};

const tocData: TocItem[] = [
  {
    id: "executive-summary",
    title: "Executive Summary",
    items: [
      { id: "strategic-context", title: "Strategic Context" },
      { id: "critical-findings", title: "Critical Findings" },
    ],
  },
  {
    id: "methodology",
    title: "Methodology",
  },
  {
    id: "section-1",
    title: "Section 1: Global AI Landscape",
    items: [
      { id: "section-1-1", title: "1.1 Market Maturity Framework" },
      { id: "section-1-2", title: "1.2 Cross-Market Patterns" },
    ],
  },
  {
    id: "section-3",
    title: "Section 2: Barriers to Adoption",
    items: [
      { id: "challenge-1", title: "Financial Constraints" },
      { id: "challenge-2", title: "Organizational Inertia" },
    ],
  },
  {
    id: "section-4",
    title: "Section 3: Industry Adoption",
    items: [
      { id: "financial-services", title: "Financial Services" },
      { id: "healthcare", title: "Healthcare" },
      { id: "manufacturing", title: "Manufacturing" },
      { id: "retail", title: "Retail" },
      { id: "professional-services", title: "Professional Services" },
      { id: "public-sector", title: "Public Sector" },
    ],
  },
  {
    id: "productivity-analysis",
    title: "Section 4: Productivity Evidence Gap",
    items: [
      { id: "productivity-evidence", title: "4.1 Task-Level Evidence" },
      { id: "macro-evidence", title: "4.2 Aggregate Evidence" },
      { id: "micro-macro-gap", title: "4.3 Solow Paradox" },
    ],
  },
  {
    id: "future-outlook",
    title: "Section 5: Future Outlook",
    items: [
      { id: "capability-progress", title: "5.1 Capability Progress" },
      { id: "agi-timeline", title: "5.2 AGI Timeline" },
      { id: "phase-transitions", title: "5.3 Phase Transitions" },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
  },
  {
    id: "references",
    title: "References",
  },
];

const TocItemComponent = ({ item, depth = 0 }: { item: TocItem; depth?: number }) => {
  const handleClick = () => {
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMainSection = depth === 0;
  const isSubSection = depth === 1;

  return (
    <div className={depth > 0 ? "ml-4" : ""}>
      <button
        onClick={handleClick}
        className={`
          flex items-start gap-2 text-left w-full group transition-colors
          ${isMainSection ? "font-semibold text-foreground hover:text-llpa-orange py-2" : ""}
          ${isSubSection ? "font-medium text-foreground/80 hover:text-llpa-orange py-1.5" : ""}
          ${depth >= 2 ? "text-sm text-muted-foreground hover:text-llpa-blue py-1" : ""}
        `}
      >
        <ChevronRight className={`
          w-3 h-3 mt-1.5 flex-shrink-0 transition-colors
          ${isMainSection ? "text-llpa-orange" : "text-llpa-blue/50 group-hover:text-llpa-blue"}
        `} />
        <span className="font-body">{item.title}</span>
      </button>
      {item.items && item.items.length > 0 && (
        <div className="border-l border-border/50 ml-1.5">
          {item.items.map((subItem) => (
            <TocItemComponent key={subItem.id} item={subItem} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const TableOfContents = () => {
  return (
    <section id="table-of-contents" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <FileText className="w-6 h-6 text-llpa-orange" />
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Table of Contents
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2 max-w-6xl"
        >
          {/* Left Column */}
          <div className="space-y-1">
            {tocData.slice(0, 5).map((item) => (
              <TocItemComponent key={item.id} item={item} />
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-1">
            {tocData.slice(5).map((item) => (
              <TocItemComponent key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TableOfContents;
