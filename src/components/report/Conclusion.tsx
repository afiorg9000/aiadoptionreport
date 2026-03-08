import { motion } from "framer-motion";
import { typography, spacing } from "./styles";

const Conclusion = () => {
  return (
    <section id="conclusion" className={`${spacing.section} bg-muted/30`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`${typography.sectionTitle} mb-6`}>Conclusion</h2>

          <div className="space-y-6">
            <p className={typography.body}>
              This research documents a significant gap between AI adoption rates and value realization. 
              While 88% of organizations report using AI, only 6% qualify as high performers capturing 
              meaningful business impact. This finding is consistent across geographies and industries.
            </p>

            <p className={typography.body}>
              The productivity analysis reveals a pattern consistent with historical technology adoption 
              cycles. Controlled studies document substantial productivity gains (14-55%), while aggregate 
              statistics show minimal impact. This micro-macro gap reflects training deficits, task 
              bottlenecks, and J-curve investment effects rather than fundamental technology limitations.
            </p>

            <p className={typography.body}>
              Barriers to value realization cluster around three areas: financial constraints limiting 
              sustained investment, organizational inertia slowing deployment, and skills gaps that 
              persist regardless of adoption maturity. Notably, skills challenges evolve rather than 
              resolve as organizations advance through adoption stages.
            </p>

            <p className={typography.body}>
              Capability forecasts suggest compressed timelines for future AI development. Aggregated 
              predictions indicate greater than 80% probability of AGI by 2031. Organizations that 
              delay building adaptive capabilities — governance frameworks, evaluation skills, flexible 
              infrastructure — may face challenging transition periods.
            </p>
          </div>

          <div className="border rounded-lg p-6 mt-8 bg-card">
            <h3 className="font-semibold text-foreground mb-3">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• The adoption-value gap is the defining challenge of enterprise AI in 2026</li>
              <li>• Current productivity plateaus are phase-specific, not technology-specific</li>
              <li>• Skills requirements evolve as adoption matures; training is not a one-time investment</li>
              <li>• Organizations should prioritize adaptive capabilities over tool optimization</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
