import { motion } from "framer-motion";
import { typography, spacing } from "./styles";
import CitationLink from "./CitationLink";

const FutureOutlook = () => {
  return (
    <section id="future-outlook" className={`${spacing.section} bg-background`}>
      <div className="container">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className={`${typography.sectionLabel} text-muted-foreground`}>Section 4</p>
            <h2 className={typography.sectionTitle}>
              What the value-realizing minority does differently
            </h2>
            <p className={`${typography.body} mt-4`}>
              Sections 1–3 establish a consistent finding: a small minority of organizations —
              roughly 5–6% across three independent studies — captures most of the measurable
              value, while the majority invests without a return. The natural question is what
              separates them. The two most rigorous segmentations of this minority, from McKinsey
              and BCG, were conducted independently on different samples, yet they converge on
              the same short list of practices. That convergence is the useful part: it suggests
              the difference is structural and repeatable.
            </p>
          </motion.div>

          <motion.div
            id="value-minority-practices"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-10 space-y-5"
          >
            <div className="border-l-4 border-llpa-green bg-card rounded-r-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground mb-2">
                They redesign workflows rather than layering AI onto existing ones.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is the single strongest correlate of value in McKinsey&apos;s data — high
                performers are far more likely to rework an end-to-end process around AI rather
                than bolt a tool onto an unchanged workflow<CitationLink id={26} />. It is the
                same lesson the Solow analogy in §3.3 predicts and the same logic behind BCG&apos;s
                &ldquo;10-20-70&rdquo; framing, in which roughly 70% of the difficulty and the payoff sits
                in people, process, and adoption rather than the technology<CitationLink id={10} />.
                BCG&apos;s data puts a number on it: about 70% of the value future-built companies
                capture comes from reshaping core-business processes, not from peripheral
                experiments<CitationLink id={33} />.
              </p>
            </div>

            <div className="border-l-4 border-llpa-blue bg-card rounded-r-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground mb-2">
                They aim at transformation, not just efficiency.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most organizations adopt AI to cut costs; the value-realizers also set growth
                and innovation as explicit objectives. McKinsey finds high performers roughly{" "}
                <strong className="text-foreground">3.6x more likely</strong> to be using AI to
                drive transformative change over the next three years<CitationLink id={26} />,
                and BCG&apos;s future-built companies are defined partly by pursuing a multiyear,
                CEO-sponsored ambition rather than a portfolio of disconnected
                pilots<CitationLink id={33} />.
              </p>
            </div>

            <div className="border-l-4 border-llpa-yellow bg-card rounded-r-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground mb-2">
                They concentrate investment instead of spreading it thin.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                More than a third of McKinsey&apos;s high performers devote over{" "}
                <strong className="text-foreground">20% of their digital budget</strong> to AI —
                making them several times more likely than the rest to make a concentrated bet
                rather than fund many small ones<CitationLink id={26} />. This sits in
                deliberate tension with the abandonment pattern in §2.4: the failures over-buy
                breadth (licenses across the org) while the value-realizers over-invest depth
                (one transformed function).
              </p>
            </div>

            <div className="border-l-4 border-llpa-orange bg-card rounded-r-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground mb-2">
                They put senior leadership and clear ownership behind it.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Executive sponsorship is among the strongest predictors of success in both
                studies. Future-built companies are markedly more likely to appoint a chief AI
                officer and a chief data officer and to establish co-ownership between business
                units and IT, so that accountability for outcomes is explicit rather than
                diffuse<CitationLink id={33} />. The pattern echoes the change-management
                finding in §2.2: AI value depends on someone owning the organizational change,
                not just the procurement.
              </p>
            </div>

            <div className="border-l-4 border-muted-foreground/30 bg-card rounded-r-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground mb-2">
                They scale across functions rather than stalling in pilots.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The majority of organizations remain stuck in experimentation — McKinsey finds
                nearly two-thirds have not begun scaling AI across the
                enterprise<CitationLink id={26} />. High performers are the exception: a large
                majority are actively scaling, and they are several times more likely to be
                deploying AI agents across multiple functions rather than testing them in
                one<CitationLink id={26} /><CitationLink id={21} />.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10"
          >
            <div className="bg-card border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                None of this is a recipe that guarantees the result — the value-realizers also
                tend to have capital, data infrastructure, and talent that the median firm lacks,
                and these practices are correlated with success, not proven to cause it. But the
                convergence of two independent studies on the same five behaviors is the closest
                thing the current evidence offers to a map of what &ldquo;doing it well&rdquo; looks like.
              </p>
            </div>
          </motion.div>

          {/* 4.1 The agentic frontier */}
          <motion.div
            id="agentic-frontier"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>
              4.1 The agentic frontier — and why it repeats the pattern
            </h3>

            <div className="space-y-4">
              <p className={`${typography.bodySmall} text-muted-foreground`}>
                The newest version of this divide is forming around AI{" "}
                <em>agents</em> — systems that carry out multi-step tasks rather than answering
                single prompts. Adoption is moving fast on paper: McKinsey finds 62% of
                organizations at least experimenting with agents and 23% scaling them in at
                least one function<CitationLink id={26} />, and Gartner forecasts that 40% of
                enterprise applications will embed task-specific agents by the end of 2026, up
                from under 5% in 2025<CitationLink id={63} />. BCG estimates agents already
                account for roughly 17% of AI value in 2025, rising toward 29% by
                2028<CitationLink id={33} />.
              </p>

              <p className={`${typography.bodySmall} text-muted-foreground`}>
                But the gap reappears one level up. S&P Global finds only about 31% of
                enterprises have an agent genuinely in production, with the familiar spread —
                banking and insurance near 47%, healthcare and government nearer
                18%<CitationLink id={62} /> — and Gartner predicts more than 40% of agentic-AI
                projects will be cancelled by 2027, citing the same causes as the earlier
                abandonment wave: unclear value, cost, and inadequate
                controls<CitationLink id={63} />. If anything, agents raise the stakes, because
                handing a multi-step process to an autonomous system magnifies both the payoff
                of a redesigned workflow and the cost of an unredesigned one.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FutureOutlook;
