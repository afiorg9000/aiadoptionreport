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
      { id: "critical-findings", title: "Five Findings" },
      { id: "reconciling-numbers", title: "Reconciling Numbers" },
    ],
  },
  {
    id: "section-1",
    title: "1. Global AI Landscape",
    items: [
      { id: "section-1-1", title: "1.1 Maturity Tiers" },
      { id: "section-1-2", title: "1.2 Size-Class Divide" },
      { id: "section-1-3", title: "1.3 Geography of Adoption" },
    ],
  },
  {
    id: "section-2",
    title: "2. Barriers to Value",
    items: [
      { id: "barrier-2-1", title: "2.1 Financial" },
      { id: "barrier-2-2", title: "2.2 Inertia" },
      { id: "barrier-2-3", title: "2.3 Regulated Industries" },
      { id: "barrier-2-4", title: "2.4 Strategic Clarity" },
      { id: "barrier-2-5", title: "2.5 Sector Divide" },
      { id: "barrier-2-6", title: "2.6 Sectors Up Close" },
    ],
  },
  {
    id: "productivity-analysis",
    title: "3. Productivity Evidence",
    items: [
      { id: "productivity-evidence", title: "3.1 Task-Level" },
      { id: "macro-evidence", title: "3.2 Aggregate" },
      { id: "micro-macro-gap", title: "3.3 Solow Paradox" },
    ],
  },
  {
    id: "future-outlook",
    title: "4. Value-Realizing Minority",
    items: [
      { id: "value-minority-practices", title: "4. Five Practices" },
      { id: "agentic-frontier", title: "4.1 Agentic Frontier" },
    ],
  },
  { id: "recommendations", title: "5. Recommendations" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
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
