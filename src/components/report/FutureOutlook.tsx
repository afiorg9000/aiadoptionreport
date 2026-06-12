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
              Sections 1–3 establish the adoption–value gap. The natural question is what
              separates the minority that captures return from the majority that does not.
              McKinsey and BCG segment that minority independently on different samples, yet
              converge on the same short list of practices — suggesting the difference is
              structural and repeatable.
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
            <h3 className={`${typography.subsectionTitle} mb-2`}>4.1 Five practices</h3>
            <div className="border-l-4 border-llpa-green bg-card rounded-r-xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground mb-2">
                They redesign workflows rather than layering AI onto existing ones.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is the single strongest correlate of value in McKinsey&apos;s data — high
                performers are far more likely to rework an end-to-end process around AI rather
                than bolt a tool onto an unchanged workflow<CitationLink id={26} />. The Solow
                analogy in §3.3 points the same direction; §4.2 develops why the organizational
                layer dominates the payoff.
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
                diffuse<CitationLink id={33} />. The pattern echoes the implementation gap in
                §4.2: AI value depends on someone owning the organizational change, not just the
                procurement.
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
                majority are actively scaling across functions rather than stalling in
                pilots<CitationLink id={26} />.
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

          {/* 4.2 The implementation gap */}
          <motion.div
            id="implementation-gap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>
              4.2 The implementation gap: value-realizers buy the change, not just the tool
            </h3>

            <div className="space-y-4">
              <p className={`${typography.bodySmall} text-muted-foreground`}>
                The five practices above share a common thread: each is a form of organizational
                change that has to be resourced, and the value-realizing minority is far more likely
                to resource it deliberately — often by buying it in. The clearest single measure of
                the gap is from AWS&apos;s Generative AI Adoption Index (3,739 IT decision-makers):
                nearly half of organizations were moving generative AI into production, yet only{" "}
                <strong>14% had a change-management strategy</strong> in place to support
                it<CitationLink id={78} />.{" "}
                <strong>Deployment is running well ahead of the work that makes deployment pay.</strong>
              </p>

              <p className={`${typography.bodySmall} text-muted-foreground`}>
                Why that work dominates is structural, not incidental. BCG&apos;s
                &ldquo;10-20-70&rdquo; framing holds that{" "}
                <strong>AI value is roughly 10% algorithms, 20% technology and data, and 70% people,
                process, and adoption</strong><CitationLink id={10} /> — meaning
                the bulk of both the difficulty and the payoff sits in exactly the organizational
                layer that procurement tends to under-fund. The behavioral data bears this out:
                McKinsey finds{" "}
                <strong>the single strongest correlate of value is redesigning an end-to-end process
                around AI rather than layering a tool onto an unchanged workflow</strong>, and BCG
                attributes about{" "}
                <strong>70% of the value its &ldquo;future-built&rdquo; companies capture to reshaping
                core-business processes</strong> rather than peripheral
                experiments<CitationLink id={26} /><CitationLink id={33} />.
              </p>

              <p className={`${typography.bodySmall} text-muted-foreground`}>
                The same McKinsey survey shows what resourcing this looks like in practice, and that
                larger firms do markedly more of it. Respondents at larger organizations are{" "}
                <strong>more than twice as likely</strong> as their small-company peers to report
                having established clearly defined road maps to drive gen AI adoption — phased
                rollouts across teams and business units — and to have stood up a dedicated team,
                such as a transformation office, to drive it. They are also ahead on creating{" "}
                <strong>role-based capability training</strong> so that employees at each level know
                how to use gen AI appropriately<CitationLink id={132} />. These are not features of
                the model; they are{" "}
                <strong>deliberate investments in adoption</strong>, and they map directly onto the
                fixed-cost logic of the size-class divide in §1.2 —{" "}
                <strong>large firms can absorb the overhead of change, small firms struggle to.</strong>
              </p>

              <p className={`${typography.bodySmall} text-muted-foreground`}>
                On the return side, the buyer&apos;s-eye evidence is encouraging but should be read
                with care. Deloitte&apos;s <em>State of Generative AI in the Enterprise</em> (Q4 2024)
                found that among organizations&apos; most advanced initiatives,{" "}
                <strong>74% report meeting or exceeding their ROI expectations</strong> and{" "}
                <strong>20% report returns above 30%</strong><CitationLink id={131} /> — but Deloitte
                is explicit that this value is hard-won, with most organizations needing a year or
                more to work through governance, talent, trust, and data challenges. That figure
                describes{" "}
                <strong>the most advanced initiatives, not the average firm</strong>, which is the
                crucial caveat: it is consistent with, not a contradiction of, the finding that{" "}
                <strong>89–95% of firms overall still see no measurable
                return</strong><CitationLink id={1} /><CitationLink id={2} />.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FutureOutlook;
