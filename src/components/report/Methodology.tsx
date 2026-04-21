import { motion } from "framer-motion";
import { typography, spacing } from "./styles";
import { sourceCount } from "@/data/reportData";

const dataSources = [
  {
    category: "Industry Surveys",
    description: "Enterprise AI adoption surveys from major consulting firms and research organizations",
    examples: "McKinsey Global Survey, Deloitte State of AI, IBM Global AI Adoption Index",
    count: "45+",
  },
  {
    category: "Government Statistics",
    description: "Official statistics on business technology adoption and labor productivity",
    examples: "Eurostat, US Census Bureau BTOS, UK ONS, Statistics Canada",
    count: "12",
  },
  {
    category: "Academic Research",
    description: "Peer-reviewed studies on AI productivity impacts and adoption patterns",
    examples: "Brynjolfsson et al. (QJE), Dell'Acqua et al. (HBS), Peng et al.",
    count: "85+",
  },
  {
    category: "Market Analysis",
    description: "Industry analyst reports on enterprise AI spending and vendor landscape",
    examples: "Gartner, IDC, Forrester, CB Insights",
    count: "60+",
  },
  {
    category: "LLPA Member Survey 2025",
    description: "Anonymized primary research from structured interviews with LLPA member training providers, aggregated by region (see paragraph above)",
    examples: "Nordic, Western/Central/Eastern/Southern Europe, Asia-Pacific, Latin America, Africa",
    count: "51",
  },
  {
    category: "Forecasting Aggregations",
    description: "Aggregated predictions on AI capability timelines",
    examples: "Metaculus, AI Impacts Survey, Cotra Bio Anchors",
    count: "8",
  },
];

const Methodology = () => {
  return (
    <section id="methodology" className={`${spacing.section} bg-background`}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${typography.sectionTitle} mb-4`}>Methodology</h2>
            
            <p className={`${typography.body} mb-6`}>
              This report synthesizes findings from {sourceCount} research sources published between 2023 and 2025. 
              Data was collected through systematic review of industry surveys, government statistics, 
              academic research, and market analysis reports. Where sources reported conflicting figures, 
              we prioritized recent data, larger sample sizes, and methodologically rigorous studies.
            </p>

            <div className="mb-8 p-4 bg-llpa-blue/5 border border-llpa-blue/20 rounded-lg">
              <h4 className={`${typography.blockTitle} mb-2`}>LLPA Member Survey 2025</h4>
              <p className={`${typography.bodySmall} text-muted-foreground`}>
                Alongside published research, LLPA conducted structured interviews with 22 member training providers across more than 20 markets during August–September 2025 to capture frontline observations on enterprise AI adoption patterns. Individual participants and their organizations are reported anonymously to preserve the candor of client-facing observations. Contributions are aggregated by region (Nordic, Western Europe, Central Europe, Eastern Europe, Southern Europe, Asia-Pacific, Latin America, and Africa). Interview participant names and questions are held confidentially by LLPA and are not published.
              </p>
            </div>

            <h3 className={`${typography.subsectionTitle} mb-4`}>Data Sources</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="text-left py-3 pr-4 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                    <th className="text-right py-3 pl-4 font-semibold w-20">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSources.map((source) => (
                    <tr key={source.category} className="border-b border-border">
                      <td className="py-3 pr-4 font-medium align-top">{source.category}</td>
                      <td className="py-3 px-4 text-muted-foreground">
                        <p>{source.description}</p>
                        <p className="text-xs mt-1 text-muted-foreground/70">
                          Examples: {source.examples}
                        </p>
                      </td>
                      <td className="py-3 pl-4 text-right align-top">{source.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className={`${typography.bodySmall} text-muted-foreground`}>
                <strong>Limitations:</strong> Enterprise AI adoption data relies heavily on self-reported 
                surveys, which may overstate adoption rates. Productivity impact studies are predominantly 
                conducted in controlled settings that may not reflect real-world deployment conditions. 
                AGI timeline forecasts represent aggregated expert predictions, not empirical projections.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
