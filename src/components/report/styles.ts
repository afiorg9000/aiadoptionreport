// Shared style constants for report components
// ============================================
// This file defines all design tokens for consistent visual styling across the report

// ===========================================
// SPACING TOKENS
// ===========================================
export const spacing = {
  // Section level spacing
  section: "py-24",
  sectionMargin: "mb-16",
  
  // Block level spacing (cards, findings, etc.)
  blockMargin: "mb-8",
  blockMarginSmall: "mb-4",
  
  // Content spacing within blocks
  contentGap: "gap-3",
  titleMargin: "mb-3",
  paragraphMargin: "mb-4",
  
  // List spacing
  listGap: "space-y-3",
  listGapLarge: "space-y-6",
  
  // Padding
  cardPadding: "p-6",
  compactPadding: "p-4",
  
  // Standardized indentation (for nested content)
  indent: "ml-6",           // Standard indent for nested content
  indentSmall: "ml-4",      // Small indent
  indentLarge: "ml-8",      // Large indent
  
  // Table indentation
  tableIndent: "ml-6",
};

// ===========================================
// TYPOGRAPHY TOKENS
// ===========================================
export const typography = {
  // Section headers
  sectionLabel: "font-body text-sm font-medium tracking-widest uppercase mb-3",
  sectionTitle: "font-display text-3xl md:text-4xl font-semibold text-foreground mb-3",
  sectionSubtitle: "font-body text-lg text-muted-foreground max-w-3xl",
  
  // Subsection headers
  subsectionTitle: "text-2xl font-semibold text-foreground",
  
  // Block headers (Finding, Evidence, Recommendation, etc.)
  blockTitle: "text-base font-semibold text-foreground",
  
  // Pattern/Card headers
  cardTitle: "text-xl font-semibold text-foreground",
  
  // Small headers
  smallTitle: "text-lg font-semibold text-foreground",
  
  // Body text
  body: "text-muted-foreground leading-relaxed",
  bodySmall: "text-sm text-muted-foreground leading-relaxed",
  
  // Emphasized text
  emphasis: "font-medium text-foreground",
  
  // Notes and captions
  note: "text-sm text-muted-foreground italic",
  caption: "text-xs text-muted-foreground",
};

// ===========================================
// ICON SIZE TOKENS
// ===========================================
export const iconSizes = {
  xs: { wrapper: "w-5 h-5", icon: "w-3 h-3" },
  sm: { wrapper: "w-6 h-6", icon: "w-3.5 h-3.5" },
  md: { wrapper: "w-8 h-8", icon: "w-4 h-4" },
  lg: { wrapper: "w-10 h-10", icon: "w-5 h-5" },
  xl: { wrapper: "w-12 h-12", icon: "w-6 h-6" },
};

// Icon wrapper base styles
export const iconWrapperBase = "rounded-lg flex items-center justify-center flex-shrink-0";

// Icon wrapper styles (legacy - use iconSizes instead)
export const iconWrapperStyles = {
  small: `${iconWrapperBase} ${iconSizes.sm.wrapper}`,
  medium: `${iconWrapperBase} ${iconSizes.md.wrapper}`,
  large: `${iconWrapperBase} ${iconSizes.lg.wrapper}`,
};

// ===========================================
// CARD & CONTAINER TOKENS
// ===========================================
export const containers = {
  // Standard card - primary container style
  card: "bg-card rounded-xl p-6 border border-border shadow-sm",
  
  // Compact card - for smaller content blocks
  cardCompact: "bg-card rounded-xl p-4 border border-border shadow-sm",
  
  // Subtle background card - for secondary content
  cardSubtle: "bg-muted/30 rounded-xl p-6 border border-border/50",
  
  // Highlighted card with gradient - for important callouts
  cardHighlighted: "p-6 bg-gradient-to-br from-llpa-orange/5 to-llpa-yellow/5 rounded-xl border border-llpa-orange/20",
  
  // Pattern card - for numbered pattern blocks
  patternCard: "bg-card rounded-xl p-6 border border-border shadow-sm",
  
  // Insight/callout box - for inline insights
  insight: "p-4 rounded-xl border",
  
  // Note box - for notes and captions
  note: "bg-muted/50 p-4 rounded-xl",
  
  // Table container - consistent table wrapper
  table: "overflow-x-auto rounded-xl border border-border shadow-sm",
  
  // Content block with left border - for evidence, findings within cards
  borderedBlock: "border-l-4 pl-4",
  
  // Nested content wrapper
  nestedContent: "ml-6 space-y-4",
};

// Unified card styles - all use consistent rounded-xl and shadow-sm
export const cardStyles = {
  // Base cards
  default: containers.card,
  methodology: containers.card,
  
  // Insight/callout cards
  insight: containers.insight,
  strategic: "rounded-xl p-6 border",
  
  // Pattern cards (with bottom margin)
  pattern: `${containers.card} mb-6`,
  
  // Block styles (minimal margin only, styling comes from component)
  finding: "mb-6",
  evidence: "mb-6",
  recommendation: "mb-6",
  interpretation: `${containers.card} mb-6`,
  
  // Highlighted cards
  highlighted: containers.cardHighlighted,
  
  // Note cards
  note: containers.note,
};

// ===========================================
// SECTION STYLES (Legacy)
// ===========================================
export const sectionStyles = {
  label: typography.sectionLabel,
  title: typography.sectionTitle,
  subtitle: typography.sectionSubtitle,
};

// Subsection styles
export const subsectionStyles = {
  container: "mb-20 pl-6 md:pl-8 border-l-2 border-muted",
  innerContent: "pl-6",
  numberBadge: `${iconSizes.lg.wrapper} rounded-full flex items-center justify-center font-bold text-white`,
  title: typography.subsectionTitle,
  subTitle: typography.cardTitle,
};

// ===========================================
// COLOR SYSTEM
// ===========================================

// Brand colors for different contexts
export const brandColors = {
  orange: "llpa-orange",
  green: "llpa-green",
  blue: "llpa-blue",
  yellow: "llpa-yellow",
};

// Get color classes for any brand color
export const getColorClasses = (color: string) => ({
  text: `text-${color}`,
  bg: `bg-${color}`,
  bgLight: `bg-${color}/15`,
  bgSubtle: `bg-${color}/10`,
  border: `border-${color}`,
  borderLight: `border-${color}/30`,
});

// Tier colors (using brand colors)
export const tierColors = {
  1: { bg: "bg-llpa-green/10", border: "border-l-llpa-green", text: "text-llpa-green", borderColor: "border-llpa-green/30", color: "llpa-green" },
  2: { bg: "bg-llpa-blue/10", border: "border-l-llpa-blue", text: "text-llpa-blue", borderColor: "border-llpa-blue/30", color: "llpa-blue" },
  3: { bg: "bg-llpa-yellow/10", border: "border-l-llpa-yellow", text: "text-llpa-yellow", borderColor: "border-llpa-yellow/30", color: "llpa-yellow" },
  4: { bg: "bg-llpa-orange/10", border: "border-l-llpa-orange", text: "text-llpa-orange", borderColor: "border-llpa-orange/30", color: "llpa-orange" },
};

// Section accent colors
export const sectionColors: Record<number, string> = {
  1: "llpa-orange",
  2: "llpa-blue",
  3: "llpa-yellow",
  4: "llpa-green",
  5: "llpa-yellow",
  6: "llpa-orange",
};

// Get color classes for a section
export const getSectionColorClasses = (sectionNumber: number) => {
  const color = sectionColors[sectionNumber] || "llpa-orange";
  return getColorClasses(color);
};

// Color rotation for lists (4-color theme)
export const rotatingColors = [
  "llpa-green",
  "llpa-blue",
  "llpa-yellow",
  "llpa-orange",
];

// Get rotating color by index
export const getRotatingColor = (index: number) => {
  return rotatingColors[index % rotatingColors.length];
};

// ===========================================
// BLOCK COMPONENT TYPES
// ===========================================

// Block types with their visual configuration
export const blockTypes = {
  finding: {
    icon: "Lightbulb",
    defaultTitle: "Key Finding",
    color: "llpa-orange",
  },
  evidence: {
    icon: "FileText",
    defaultTitle: "Evidence",
    color: "llpa-blue",
  },
  recommendation: {
    icon: "ArrowRight",
    defaultTitle: "Strategic Recommendations",
    color: "llpa-green",
  },
  interpretation: {
    icon: "MessageSquare",
    defaultTitle: "Interpretation",
    color: "llpa-yellow",
  },
  methodology: {
    icon: "FlaskConical",
    defaultTitle: "Methodology",
    color: "llpa-green",
  },
  insight: {
    icon: "Lightbulb",
    defaultTitle: "Key Insight",
    color: "llpa-orange",
  },
  strategic: {
    icon: "Target",
    defaultTitle: "Strategic Implication",
    color: "llpa-blue",
  },
  warning: {
    icon: "AlertTriangle",
    defaultTitle: "Warning",
    color: "destructive",
  },
  success: {
    icon: "CheckCircle",
    defaultTitle: "Success",
    color: "llpa-green",
  },
};

// Legacy insightTypes (for backwards compatibility)
export const insightTypes = {
  insight: {
    icon: "Lightbulb",
    bgClass: "bg-llpa-orange/10",
    borderClass: "border-llpa-orange/30",
    iconColor: "text-llpa-orange",
  },
  strategic: {
    icon: "Target",
    bgClass: "bg-llpa-blue/10",
    borderClass: "border-llpa-blue/30",
    iconColor: "text-llpa-blue",
  },
  interpretation: {
    icon: "Compass",
    bgClass: "bg-llpa-yellow/10",
    borderClass: "border-llpa-yellow/30",
    iconColor: "text-llpa-yellow",
  },
  warning: {
    icon: "AlertTriangle",
    bgClass: "bg-llpa-orange/10",
    borderClass: "border-llpa-orange/30",
    iconColor: "text-llpa-orange",
  },
  success: {
    icon: "CheckCircle",
    bgClass: "bg-llpa-green/10",
    borderClass: "border-llpa-green/30",
    iconColor: "text-llpa-green",
  },
};

// ===========================================
// TABLE STYLES
// ===========================================
export const tableStyles = {
  container: containers.table,
  header: "bg-llpa-blue text-white",
  headerCell: "px-4 py-3 text-left text-sm font-semibold",
  row: "border-b border-border",
  cell: "px-4 py-3 text-sm",
};

// ===========================================
// BULLET POINT STYLES
// ===========================================
export const bulletStyles = {
  container: "flex gap-3",
  dot: "flex-shrink-0 w-2 h-2 rounded-full mt-2",
  content: "flex-1",
  title: `${typography.blockTitle} mb-1`,
  text: typography.bodySmall,
};

// Legacy bullet colors
export const bulletColors = [
  "bg-llpa-green",
  "bg-llpa-blue",
  "bg-llpa-yellow",
  "bg-llpa-orange",
];

// Get bullet color by index (legacy)
export const getBulletColor = (index: number) => {
  return bulletColors[index % bulletColors.length];
};

// ===========================================
// HELPER FUNCTIONS
// ===========================================

// Get icon wrapper with color (legacy)
export const getIconWrapper = (color: string, size: "small" | "medium" | "large" = "small") => {
  return `${iconWrapperStyles[size]} bg-${color}/15`;
};

// Get complete icon styling
export const getIconStyles = (color: string, size: keyof typeof iconSizes = "sm") => {
  const sizeConfig = iconSizes[size];
  return {
    wrapper: `${iconWrapperBase} ${sizeConfig.wrapper} bg-${color}/15`,
    icon: `${sizeConfig.icon} text-${color}`,
  };
};
