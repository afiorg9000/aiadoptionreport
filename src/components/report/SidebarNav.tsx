import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  title: string;
  items?: NavItem[];
};

const navData: NavItem[] = [
  {
    id: "executive-summary",
    title: "Executive Summary",
    items: [
      { id: "strategic-context", title: "Strategic Context" },
      { id: "critical-findings", title: "Critical Findings" },
      { id: "key-metrics-summary", title: "Key Metrics Summary" },
      { id: "strategic-imperatives", title: "Strategic Imperatives" },
    ],
  },
  {
    id: "section-1",
    title: "1. Global AI Landscape",
    items: [
      {
        id: "section-1-1",
        title: "1.1 Maturity Tier Framework",
        items: [
          { id: "strategic-context-1", title: "Strategic Context" },
          { id: "maturity-tier-framework", title: "Maturity Tier Framework" },
          { id: "tier-classification", title: "Tier Classification" },
          { id: "training-demand-tier", title: "Training Demand by Tier" },
          { id: "methodology", title: "Methodology" },
        ],
      },
      {
        id: "section-1-2",
        title: "1.2 Cross-Market Patterns",
        items: [
          { id: "pattern-1", title: "Pattern 1: Size-Class Divide" },
          { id: "pattern-2", title: "Pattern 2: Skills Gap" },
          { id: "pattern-3", title: "Pattern 3: Regulated Industries" },
          { id: "pattern-4", title: "Pattern 4: Strategic Planning Gap" },
        ],
      },
    ],
  },
  {
    id: "section-2",
    title: "2. Market Demand",
    items: [
      { id: "demand-pattern-1", title: "Foundational GenAI Training" },
      { id: "demand-pattern-2", title: "Role-Based Training" },
      { id: "demand-pattern-3", title: "Post-Purchase Support" },
    ],
  },
  {
    id: "section-3",
    title: "3. Barriers to Adoption",
    items: [
      { id: "challenge-1", title: "Financial Constraints" },
      { id: "challenge-2", title: "Organizational Inertia" },
    ],
  },
  {
    id: "section-4",
    title: "4. Portfolio Analysis",
    items: [
      {
        id: "finding-1",
        title: "Finding 1: Vendor Concentration",
        items: [
          { id: "portfolio-strength-ms", title: "Microsoft Ecosystem" },
          { id: "critical-gap-non-ms", title: "Non-Microsoft Gap" },
          { id: "recommended-curriculum", title: "Recommended Curriculum" },
        ],
      },
      {
        id: "finding-2",
        title: "Finding 2: Skill Level Distribution",
        items: [
          { id: "portfolio-strength-beginner", title: "Beginner Foundation" },
          { id: "critical-gap-advanced", title: "Advanced Gap" },
          { id: "missing-content", title: "Missing Content" },
        ],
      },
      { id: "finding-3", title: "Finding 3: Delivery Methods" },
      {
        id: "finding-4",
        title: "Finding 4: Audience Segmentation",
        items: [
          { id: "vertical-1", title: "Financial Services" },
          { id: "vertical-2", title: "Manufacturing" },
          { id: "vertical-3", title: "Legal Services" },
          { id: "vertical-4", title: "Public Sector" },
          { id: "vertical-5", title: "Education" },
        ],
      },
    ],
  },
  {
    id: "section-5",
    title: "5. Member Capabilities",
    items: [
      {
        id: "section-5-1",
        title: "5.1 Tool Usage Patterns",
        items: [
          { id: "copilot-gap", title: "Copilot Training Gap" },
          { id: "category-1", title: "Free/Low-Cost Tools" },
          { id: "category-2", title: "Custom/Advanced AI" },
        ],
      },
      { id: "section-5-2", title: "5.2 External Research" },
      {
        id: "section-5-3",
        title: "5.3 Market Validation",
        items: [
          { id: "priority-highest", title: "Highest Priority" },
          { id: "priority-high", title: "High Priority" },
          { id: "priority-medium", title: "Medium Priority" },
          { id: "priority-lower", title: "Lower Priority" },
        ],
      },
    ],
  },
  {
    id: "section-6",
    title: "6. Recommendations",
    items: [
      { id: "transformation-imperative", title: "Transformation Imperative" },
      {
        id: "part-a",
        title: "Part A: Industry associations",
        items: [
          { id: "central-1", title: "Imperative 1" },
          { id: "central-2", title: "Imperative 2" },
          { id: "central-3", title: "Imperative 3" },
          { id: "central-4", title: "Imperative 4" },
          { id: "central-5", title: "Imperative 5" },
        ],
      },
      {
        id: "part-b",
        title: "Part B: training providers Members",
        items: [
          { id: "member-1", title: "Imperative 1" },
          { id: "member-2", title: "Imperative 2" },
          { id: "member-3", title: "Imperative 3" },
          { id: "member-4", title: "Imperative 4" },
          { id: "member-5", title: "Imperative 5" },
          { id: "member-6", title: "Imperative 6" },
          { id: "member-7", title: "Imperative 7" },
        ],
      },
    ],
  },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
  {
    id: "appendices",
    title: "Appendices",
    items: [
      { id: "appendix-a", title: "Appendix A" },
      { id: "appendix-b", title: "Appendix B" },
    ],
  },
];

// Flatten all IDs for scroll tracking
const getAllIds = (items: NavItem[]): string[] => {
  return items.flatMap((item) => [item.id, ...(item.items ? getAllIds(item.items) : [])]);
};

const allIds = getAllIds(navData);

const NavItemComponent = ({
  item,
  depth = 0,
  activeSection,
  onNavigate,
  expandedSections,
  toggleSection,
}: {
  item: NavItem;
  depth?: number;
  activeSection: string;
  onNavigate: (id: string) => void;
  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
}) => {
  const hasChildren = item.items && item.items.length > 0;
  const isExpanded = expandedSections.has(item.id);
  const isActive = activeSection === item.id;
  
  // Check if any child is active
  const isChildActive = (items: NavItem[]): boolean => {
    return items.some((child) => 
      child.id === activeSection || (child.items && isChildActive(child.items))
    );
  };
  const hasActiveChild = hasChildren && isChildActive(item.items!);

  return (
    <div>
      <div className="flex items-center">
        {hasChildren && (
          <button
            onClick={() => toggleSection(item.id)}
            className="p-0.5 hover:bg-muted rounded mr-0.5"
          >
            {isExpanded ? (
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-3 h-3 text-muted-foreground" />
            )}
          </button>
        )}
        <button
          onClick={() => onNavigate(item.id)}
          className={cn(
            "flex-1 text-left py-1 text-xs rounded transition-all duration-200 truncate",
            !hasChildren && "pl-4",
            depth === 0 && "font-medium",
            isActive
              ? "text-llpa-blue font-medium"
              : hasActiveChild
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.title}
        </button>
      </div>
      {hasChildren && isExpanded && (
        <div className={cn("ml-3 border-l border-border/50 pl-1", depth >= 1 && "ml-2")}>
          {item.items!.map((child) => (
            <NavItemComponent
              key={child.id}
              item={child}
              depth={depth + 1}
              activeSection={activeSection}
              onNavigate={onNavigate}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Auto-expand parents when active section changes
  useEffect(() => {
    const findParents = (items: NavItem[], targetId: string, parents: string[] = []): string[] | null => {
      for (const item of items) {
        if (item.id === targetId) {
          return parents;
        }
        if (item.items) {
          const found = findParents(item.items, targetId, [...parents, item.id]);
          if (found) return found;
        }
      }
      return null;
    };

    const parents = findParents(navData, activeSection);
    if (parents && parents.length > 0) {
      setExpandedSections((prev) => {
        const next = new Set(prev);
        parents.forEach((p) => next.add(p));
        return next;
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);

      // Track active section from all possible IDs
      const scrollPosition = window.scrollY + 120;
      
      for (let i = allIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(allIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(allIds[i]);
          break;
        }
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  if (!isVisible) return null;

  const navContent = (
    <div className="px-2 py-2 overflow-y-auto h-full">
      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3 px-1">
        Contents
      </p>
      <div className="space-y-0.5">
        {navData.map((item) => (
          <NavItemComponent
            key={item.id}
            item={item}
            activeSection={activeSection}
            onNavigate={handleClick}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
        ))}
      </div>
    </div>
  );

  // Desktop: render as a sticky right-rail element
  if (isLargeScreen) {
    return (
      <nav className="sticky top-20 h-[calc(100vh-5rem)] pt-6">
        <div className="bg-background/70 backdrop-blur-md border-l border-border h-full overflow-hidden">
          {navContent}
        </div>
      </nav>
    );
  }

  // Mobile/Tablet: off-canvas drawer
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-llpa-blue text-white p-3 rounded-full shadow-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={cn(
          "fixed z-40 transition-all duration-300",
          isOpen
            ? "translate-x-0 top-0 right-0 w-72 h-full pt-16 bg-card/95 backdrop-blur-sm border-l border-border"
            : "translate-x-full"
        )}
      >
        {navContent}
      </nav>
    </>
  );
};

export default SidebarNav;
