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
              This report began with a question that looked simpler than it is: how widely is
              enterprise AI being adopted, and what is it returning? The answer, drawn from
              government statistics, consulting surveys, controlled experiments, and labor-market
              data, is that{" "}
              <strong>use has spread far faster than value</strong> — a pattern consistent across
              countries, sectors, and firm sizes, even when the headline adoption numbers disagree
              on the details.
            </p>

            <p className={typography.body}>
              The gap is not mainly a technology gap. Models are improving quickly; the harder
              problems are organizational — where to point the tool, how to sustain adoption after
              purchase, and whether the firm can absorb the fixed cost of change. Section 4
              documents what separates the minority that captures return: they resource
              organizational change deliberately, not just tool access (see §4.1–4.2).
            </p>

            <p className={typography.body}>
              Section 3 adds a second tension beneath the first: controlled studies find real
              task-level gains, while firm-level surveys find almost no aggregate return — and
              both are well-evidenced. Early labor-market effects are already visible at the entry
              level<CitationLink id={120} />, even as economywide displacement remains hard to
              detect<CitationLink id={122} /><CitationLink id={123} />. Whether the adoption–value
              gap closes as firms redesign around the tool — the Solow precedent for computing
              suggests it may<CitationLink id={48} /> — or proves durable is still unsettled. The
              competitive direction is clearer: the leader–laggard gap is widening<CitationLink id={33} />.
            </p>

            <p className={typography.body}>
              Low adoption in some sectors and among the smallest firms often reflects a genuine
              mismatch with what these systems do today, not merely lag — and &ldquo;not yet&rdquo;
              remains a legitimate answer. The plainest thing the evidence asks of any organization
              is proportion: invest at the level of where it actually stands, fund the change work
              at the same time as the tools, and be honest about when waiting is the right move.
              The report&apos;s job was to map that terrain, not to pretend the map is simpler than
              the territory.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
