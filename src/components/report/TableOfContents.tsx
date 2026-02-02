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
      { id: "strategic-imperatives", title: "Strategic Imperatives for 2025-2027" },
    ],
  },
  {
    id: "section-1",
    title: "Section 1: Global AI Adoption Landscape",
    items: [
      {
        id: "section-1-1",
        title: "1.1 Maturity Tier Framework & Methodology",
        items: [
          { id: "strategic-context-1", title: "Strategic Context" },
          { id: "maturity-tier-framework", title: "Maturity Tier Framework" },
          { id: "tier-classification", title: "training providers Member Markets: Tier Classification Summary" },
          { id: "training-demand-tier", title: "Training Demand by Tier" },
          { id: "methodology", title: "Methodology" },
        ],
      },
      {
        id: "section-1-2",
        title: "1.2 Cross-Market Adoption Patterns",
        items: [
          { id: "pattern-1", title: "Pattern 1: The Size-Class Divide Persists Despite Overall Growth" },
          { id: "pattern-2", title: "Pattern 2: Skills Gap Remains Universal Despite Adoption Growth" },
          { id: "pattern-3", title: "Pattern 3: Regulated Industries Show Higher Training Investment" },
          { id: "pattern-4", title: "Pattern 4: The Strategic Planning Gap Is Universal" },
        ],
      },
    ],
  },
  {
    id: "section-2",
    title: "Section 2: Market Demand & Client Needs",
    items: [
      { id: "demand-pattern-1", title: "Demand Pattern 1: Foundational GenAI Training (ChatGPT, Copilot Basics)" },
      { id: "demand-pattern-2", title: "Demand Pattern 2: Role-Based & Industry-Specific Training" },
      { id: "demand-pattern-3", title: "Demand Pattern 3: Post-Purchase Adoption Support" },
    ],
  },
  {
    id: "section-3",
    title: "Section 3: Barriers to AI Adoption",
    items: [
      { id: "challenge-1", title: "Challenge 1: Financial Constraints" },
      { id: "challenge-2", title: "Challenge 2: Organizational Inertia & Change Resistance" },
    ],
  },
  {
    id: "section-4",
    title: "Section 4: training providers Course Portfolio Analysis",
    items: [
      {
        id: "finding-1",
        title: "Finding 1: Vendor Concentration Creates Both Competitive Advantage and Strategic Risk",
        items: [
          { id: "portfolio-strength-ms", title: "Portfolio Strength: Microsoft Ecosystem Depth & Breadth" },
          { id: "critical-gap-non-ms", title: "Critical Gap: Non-Microsoft Ecosystem Training" },
          { id: "recommended-curriculum", title: "Recommended Curriculum Development (Claude, OpenAI, Google Gemini, Multi-Model)" },
        ],
      },
      {
        id: "finding-2",
        title: "Finding 2: Skill Level Distribution Optimized for Emerging Markets, Under-Serves Advanced Demand",
        items: [
          { id: "portfolio-strength-beginner", title: "Portfolio Strength: Strong Beginner/Intermediate Foundation" },
          { id: "critical-gap-advanced", title: "Critical Gap: Advanced Technical Training" },
          { id: "missing-content", title: "Missing Content Analysis (Production RAG, Agentic AI, Fine-Tuning, LLMOps, Open-Source AI)" },
        ],
      },
      { id: "finding-3", title: "Finding 3: Delivery Method Distribution Provides Quality Advantage but Limits Scalability" },
      {
        id: "finding-4",
        title: "Finding 4: Audience Segmentation Under-Serves High-Value Verticals",
        items: [
          { id: "vertical-1", title: "Priority Vertical 1: Financial Services" },
          { id: "vertical-2", title: "Priority Vertical 2: Manufacturing & Industrial" },
          { id: "vertical-3", title: "Priority Vertical 3: Legal Services" },
          { id: "vertical-4", title: "Priority Vertical 4: Public Sector & Government" },
          { id: "vertical-5", title: "Priority Vertical 5: Education & Academic Institutions" },
        ],
      },
    ],
  },
  {
    id: "section-5",
    title: "Section 5: Member Capabilities & Internal Tool Usage",
    items: [
      {
        id: "section-5-1",
        title: "5.1 Tool Usage Patterns by Category",
        items: [
          { id: "copilot-gap", title: "Critical Finding: The Copilot Training-Practice Gap" },
          { id: "category-1", title: "Category 1: Free/Low-Cost Tools" },
          { id: "category-2", title: "Category 2: Custom/Advanced AI Solutions" },
        ],
      },
      { id: "section-5-2", title: "5.2 External Market Research: Tool Adoption Across Sectors" },
      {
        id: "section-5-3",
        title: "5.3 Market Validation: Which Internal Tools Deliver ROI?",
        items: [
          { id: "priority-highest", title: "Highest Priority: Revenue-Generating + Cost-Saving Tools" },
          { id: "priority-high", title: "High Priority: Strong Cost-Saving Tools" },
          { id: "priority-medium", title: "Medium Priority: Moderate ROI Tools" },
          { id: "priority-lower", title: "Lower Priority: Unproven ROI" },
        ],
      },
    ],
  },
  {
    id: "section-6",
    title: "Section 6: Strategic Recommendations",
    items: [
      { id: "transformation-imperative", title: "Expand from Training Provider to Offer Strategic Advisory and Implementation Consulting" },
      {
        id: "part-a",
        title: "Part A: Strategic Imperatives for Industry associations",
        items: [
          { id: "central-1", title: "Imperative 1: Develop training providers AI Transformation Methodology" },
          { id: "central-2", title: "Imperative 2: Educate Members to Have Baseline Knowledge on AI" },
          { id: "central-3", title: "Imperative 3: Create Member Marketplace" },
          { id: "central-4", title: "Imperative 4: Launch the AI Channel" },
          { id: "central-5", title: "Imperative 5: Implement Member Support Infrastructure" },
        ],
      },
      {
        id: "part-b",
        title: "Part B: Strategic Imperatives for training providers Members",
        items: [
          { id: "member-1", title: "Imperative 1: Adopt Strategic Advisory Capabilities" },
          { id: "member-2", title: "Imperative 2: Develop Advanced Curriculum" },
          { id: "member-3", title: "Imperative 3: Diversify Beyond Microsoft" },
          { id: "member-4", title: "Imperative 4: Build Industry Vertical Depth" },
          { id: "member-5", title: "Imperative 5: Implement Tiered Packages by Market" },
          { id: "member-6", title: "Imperative 6: Close the Training-Practice Gap" },
          { id: "member-7", title: "Imperative 7: Capture EU AI Act Compliance Opportunity" },
        ],
      },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion: The Transformation Imperative",
  },
  {
    id: "references",
    title: "References",
  },
  {
    id: "appendices",
    title: "Appendices",
    items: [
      { id: "appendix-a", title: "Appendix A: Member Interview Methodology" },
      { id: "appendix-b", title: "Appendix B: Course Portfolio Classification Methodology" },
    ],
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
    <section id="table-of-contents" className="py-20 bg-card border-y border-border">
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
