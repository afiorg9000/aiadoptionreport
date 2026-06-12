import { motion } from "framer-motion";
import { typography, spacing } from "./styles";
import CitationLink from "./CitationLink";


const Conclusion = () => {
  return (
    <section id="conclusion" className={`${spacing.section} bg-background`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`${typography.sectionTitle} mb-8`}>Conclusion</h2>

          <div className="space-y-5">
            <p className={typography.body}>
              The evidence in this report converges on one pattern in which AI adoption is broad
              and widening, while measurable financial return remains concentrated in a small
              minority of firms — roughly 5–6% across three independent
              studies<CitationLink id={33} /><CitationLink id={26} /><CitationLink id={2} />.
            </p>

            <p className={typography.body}>
              The five findings trace that gap. Adoption is broad but measured value is narrow,
              with 89–95% of firms in the best-sourced surveys reporting no measurable
              return<CitationLink id={1} /><CitationLink id={2} />. The most common obstacle is
              not understanding the technology but deciding where to point it — a strategic-clarity
              gap rather than a knowledge gap. Post-purchase abandonment is common, with licenses
              bought and left idle. Skills shortages appear structural rather than transitional,
              holding steady even as workforces grow more capable. And the multi-vendor environment
              adds cost and complexity that climbs faster than the number of systems in use.
            </p>

            <p className={typography.body}>
              Underneath these sits a deeper puzzle the report could document but not resolve:
              controlled studies find real, double-digit task-level gains, while firm-level data
              finds almost no aggregate return. Whether that gap is early-but-closing or a durable
              ceiling is not something the current evidence settles. The Solow precedent —
              productivity gains from computing that appeared only once firms redesigned work around
              the technology<CitationLink id={48} /> — suggests the resolution depends on process
              redesign rather than better tools, but that remains a hypothesis the data raises
              rather than confirms.
            </p>

            <p className={typography.body}>
              What distinguishes the value-realizing minority is consistent across studies: they
              redesign workflows rather than layering AI onto existing ones, aim at transformation
              over efficiency, concentrate rather than scatter investment, put senior ownership
              behind it, and scale across functions rather than stalling in
              pilots<CitationLink id={26} /><CitationLink id={33} />. The same divide is now
              reforming around AI agents<CitationLink id={62} /><CitationLink id={63} />.
            </p>

            <p className={typography.body}>
              The defining figure is that{" "}
              <strong>over 90% of firms intend to keep investing in AI even if it does not pay off
              next year</strong><CitationLink id={21} />. The plainest thing the evidence asks of
              any organization is to invest in proportion to where it actually stands — and to be
              honest about when the right move is to wait.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
