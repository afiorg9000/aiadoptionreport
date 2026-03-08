import { motion } from "framer-motion";
import { Building2, Landmark, Factory, Scale, GraduationCap, Heart, ShoppingCart, Truck } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { subsectionStyles, cardStyles, typography, spacing } from "./styles";

const industryData = [
  {
    industry: "Financial Services",
    adoption: "72%",
    adoptionValue: 72,
    icon: Landmark,
    color: "llpa-blue",
    useCases: ["Fraud detection & prevention", "Credit risk assessment", "Customer service automation", "Regulatory compliance"],
    barriers: ["Regulatory complexity", "Data privacy requirements", "Legacy system integration"],
    outlook: "Highest AI investment intensity; regulatory pressure driving governance maturity"
  },
  {
    industry: "Healthcare & Life Sciences",
    adoption: "65%",
    adoptionValue: 65,
    icon: Heart,
    color: "llpa-green",
    useCases: ["Diagnostic imaging analysis", "Drug discovery acceleration", "Clinical documentation", "Patient engagement"],
    barriers: ["HIPAA/regulatory compliance", "Clinical validation requirements", "Physician adoption resistance"],
    outlook: "Rapid growth in administrative AI; clinical AI adoption slower due to validation requirements"
  },
  {
    industry: "Manufacturing",
    adoption: "58%",
    adoptionValue: 58,
    icon: Factory,
    color: "llpa-orange",
    useCases: ["Predictive maintenance", "Quality control automation", "Supply chain optimization", "Production scheduling"],
    barriers: ["OT/IT integration complexity", "Workforce skills gap", "ROI measurement challenges"],
    outlook: "Strong industrial AI adoption driven by operational efficiency gains"
  },
  {
    industry: "Retail & E-commerce",
    adoption: "68%",
    adoptionValue: 68,
    icon: ShoppingCart,
    color: "llpa-yellow",
    useCases: ["Personalization engines", "Demand forecasting", "Inventory optimization", "Customer service chatbots"],
    barriers: ["Data quality issues", "Real-time processing requirements", "Customer trust concerns"],
    outlook: "Mature adoption in customer-facing AI; growing investment in supply chain applications"
  },
  {
    industry: "Professional Services",
    adoption: "54%",
    adoptionValue: 54,
    icon: Scale,
    color: "llpa-blue",
    useCases: ["Document analysis & review", "Research automation", "Client insights", "Proposal generation"],
    barriers: ["Confidentiality concerns", "Quality assurance requirements", "Partner adoption"],
    outlook: "Rapid adoption in legal and consulting; focus on augmentation over automation"
  },
  {
    industry: "Public Sector",
    adoption: "42%",
    adoptionValue: 42,
    icon: Building2,
    color: "steel",
    useCases: ["Citizen services automation", "Fraud detection", "Document processing", "Policy analysis"],
    barriers: ["Procurement complexity", "Transparency requirements", "Budget constraints"],
    outlook: "Growing adoption driven by efficiency mandates; governance requirements creating structured approaches"
  },
];

const keyInsights = [
  {
    title: "Regulated Industries Lead in Governance",
    description: "Financial services, healthcare, and public sector show more mature AI governance frameworks, driven by regulatory requirements. This structured approach correlates with higher value realization rates.",
  },
  {
    title: "Skills Gap Persists Across All Sectors",
    description: "Despite varying adoption rates, all industries report skills gaps as a top-3 barrier. Technical skills (data science, ML engineering) and strategic skills (AI strategy, change management) both in short supply.",
  },
  {
    title: "Customer-Facing AI Most Mature",
    description: "Chatbots, recommendation engines, and personalization have highest deployment rates. Back-office and operational AI adoption growing but less mature.",
  },
];

const IndustryAdoption = () => {
  return (
    <section id="section-4" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          sectionNumber="4"
          title="AI Adoption by Industry"
          subtitle="Sector-specific adoption patterns, use cases, and barriers"
        />

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {industryData.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`${cardStyles.base} p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${industry.color}/10`}>
                    <IconComponent className={`w-6 h-6 text-${industry.color}`} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {industry.industry}
                    </h4>
                    <p className={`text-${industry.color} font-semibold`}>
                      {industry.adoption} adoption
                    </p>
                  </div>
                </div>

                {/* Adoption bar */}
                <div className="w-full h-2 bg-muted rounded-full mb-4">
                  <div 
                    className={`h-full bg-${industry.color} rounded-full`}
                    style={{ width: `${industry.adoptionValue}%` }}
                  />
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Top Use Cases
                    </p>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {industry.useCases.slice(0, 3).map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-muted-foreground">•</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Key Barriers
                    </p>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {industry.barriers.slice(0, 2).map((barrier, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-destructive">•</span>
                          {barrier}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground italic">
                      {industry.outlook}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className={`${typography.subsectionTitle} mb-6`}>Cross-Industry Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyInsights.map((insight, index) => (
              <div key={index} className={`${cardStyles.base} p-6 border-l-4 border-llpa-blue`}>
                <h4 className="font-display text-base font-semibold text-foreground mb-2">
                  {insight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryAdoption;
