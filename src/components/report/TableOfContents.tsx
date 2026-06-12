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
      { id: "critical-findings", title: "Five Findings" },
    ],
  },
  {
    id: "section-1",
    title: "Section 1: Global AI Landscape",
    items: [
      { id: "section-1-1", title: "1.1 Maturity Tier Framework" },
      { id: "section-1-2", title: "1.2 Size-Class Divide" },
      { id: "section-1-3", title: "1.3 Geography of Adoption" },
    ],
  },
  {
    id: "section-2",
    title: "Section 2: Barriers to Value Realization",
    items: [
      { id: "barrier-2-1", title: "2.1 Financial Constraints" },
      { id: "barrier-2-2", title: "2.2 Organizational Inertia" },
      { id: "barrier-2-3", title: "2.3 Regulated Industries" },
      { id: "barrier-2-4", title: "2.4 Strategic-Clarity Gap" },
      { id: "barrier-2-5", title: "2.5 The Sector Divide" },
      { id: "barrier-2-6", title: "2.6 Sectors Up Close" },
    ],
  },
  {
    id: "productivity-analysis",
    title: "Section 3: Productivity Evidence Gap",
    items: [
      { id: "productivity-evidence", title: "3.1 Task-Level Gains" },
      { id: "macro-evidence", title: "3.2 Aggregate Evidence" },
      { id: "micro-macro-gap", title: "3.3 Solow Paradox" },
      { id: "capability-displacement-gap", title: "3.4 Capability & Displacement" },
    ],
  },
  {
    id: "future-outlook",
    title: "Section 4: What Value-Realizers Do",
    items: [
      { id: "value-minority-practices", title: "4.1 Five Practices" },
      { id: "implementation-gap", title: "4.2 Implementation Gap" },
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
  {
    id: "methodology",
    title: "Methodology",
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
        data-toc-target={item.id}
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
          className="flex flex-col items-center text-center mb-12"
        >
          <FileText className="w-6 h-6 text-llpa-orange mb-3" />
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Table of Contents
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-2xl mx-auto w-full space-y-1"
        >
          {tocData.map((item) => (
            <TocItemComponent key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TableOfContents;
