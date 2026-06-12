import { motion } from "framer-motion";
import { typography, spacing } from "./styles";
import CitationLink from "./CitationLink";

const ExecutiveSummary = () => {
  return (
    <section id="executive-summary" className={`${spacing.section} bg-background`}>
      <div className="container">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={spacing.sectionMargin}
          >
            <p className={`${typography.sectionLabel} text-llpa-blue`}>Executive Summary</p>
            <h2 className={`${typography.sectionTitle} mb-6`}>Executive summary</h2>

            <p className={`${typography.body} mb-4`}>
              <strong>The defining pattern of enterprise AI today is a gap between adoption and value.</strong>{" "}
              A large majority of organizations report <em>using</em> AI in some form, but only a
              small minority can point to measurable financial impact. The disconnect is consistent
              across geographies, industries, and survey instruments, even though the instruments
              disagree sharply on the absolute numbers.
            </p>

            <p className={`${typography.body} mb-8`}>
              The evidence below supports five findings. The recommendations that follow are ours,
              as an interested party in the training business, and sit in a separate section so
              they can be weighed on their own.
            </p>
          </motion.div>

          {/* Five Findings */}
          <motion.div
            id="critical-findings"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={spacing.sectionMargin}
          >
            <ul className="space-y-6">

              {/* Finding 1 */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-llpa-blue/10 text-llpa-blue text-sm font-bold flex items-center justify-center mt-0.5">
                  1
                </span>
                <div>
                  <p className={`${typography.body} font-semibold mb-1`}>
                    Adoption is broad; measured value is narrow.
                  </p>
                  <p className={`${typography.bodySmall} text-muted-foreground mb-1`}>
                    This is the finding the rest of the report orbits. Most organizations now
                    report using AI in some form, but in the best-sourced surveys the large
                    majority cannot show a return for it: in the NBER survey of roughly 6,000
                    senior leaders, about 89% reported no measurable productivity impact over three
                    years<CitationLink id={1} />, and MIT&apos;s review of around 300 deployments put
                    the share seeing no return near 95%<CitationLink id={2} />. Use is real; value,
                    mostly, is not — and the likeliest reason is that the use is shallow. Firms
                    have bought access and run pilots, but the slow work of rebuilding a process
                    around the tool, which is where the money actually is, has barely begun.
                    Whether that gap is a lag that closes once the redesign happens or a ceiling
                    that won&apos;t is still open since ChatGPT launched; what isn&apos;t in question is that
                    the gap is large and has held across several model generations. Three
                    independent studies converge on the size of the value-realizing minority —
                    BCG&apos;s ~5% &ldquo;future-built,&rdquo; McKinsey&apos;s ~6% high performers, and MIT&apos;s ~5% with
                    measurable return<CitationLink id={33} /><CitationLink id={26} /><CitationLink id={2} /> — and a
                    separate KPMG index of Canadian organizations found 93% reporting
                    enterprise-level adoption but only <strong>2%</strong> claiming a measurable
                    return<CitationLink id={80} />, the same gap from yet another vantage point.
                  </p>
                  <p className="text-xs text-muted-foreground/50 italic mt-1">Tier A/B</p>
                </div>
              </motion.li>

              {/* Finding 2 */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.5 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-llpa-blue/10 text-llpa-blue text-sm font-bold flex items-center justify-center mt-0.5">
                  2
                </span>
                <div>
                  <p className={`${typography.body} font-semibold mb-1`}>
                    The strategic-clarity gap is the most common obstacle.
                  </p>
                  <p className={`${typography.bodySmall} text-muted-foreground mb-1`}>
                    Across surveys and in our members&apos; field notes, what stalls firms is not
                    understanding what AI is but deciding where to point it. The tools arrive with
                    too many plausible uses and no obvious best one for a given organization, so
                    the hard part is matching a capability to a process where it actually pays —
                    which takes knowledge of the business, not of the model. One caveat keeps this
                    honest: &ldquo;we don&apos;t know where to apply it&rdquo; is sometimes a tactful way of
                    saying &ldquo;it doesn&apos;t work well enough for the work we actually do,&rdquo; and the two
                    complaints look identical on a survey form.
                  </p>
                  <p className="text-xs text-muted-foreground/50 italic mt-1">Tier B/C</p>
                </div>
              </motion.li>

              {/* Finding 3 */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16, duration: 0.5 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-llpa-blue/10 text-llpa-blue text-sm font-bold flex items-center justify-center mt-0.5">
                  3
                </span>
                <div>
                  <p className={`${typography.body} font-semibold mb-1`}>
                    Post-purchase abandonment is common.
                  </p>
                  <p className={`${typography.bodySmall} text-muted-foreground mb-1`}>
                    Licenses get bought and then sit idle; tools dropped into a workflow without
                    changing the workflow tend to fall out of use. The pull is simply that buying
                    access is easy and changing how people work is hard, so absent a forcing
                    function people drift back to the old way. Though not all of it is waste — a
                    firm that tries a tool, finds it doesn&apos;t fit, and stops has made the right
                    call, not a mistake — which is why the figure is a reason to look closer
                    rather than a verdict on its own.
                  </p>
                  <p className="text-xs text-muted-foreground/50 italic mt-1">Tier C — see source note in Section 2.4</p>
                </div>
              </motion.li>

              {/* Finding 4 */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24, duration: 0.5 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-llpa-blue/10 text-llpa-blue text-sm font-bold flex items-center justify-center mt-0.5">
                  4
                </span>
                <div>
                  <p className={`${typography.body} font-semibold mb-1`}>
                    Skills gaps look structural, not temporary.
                  </p>
                  <p className={`${typography.bodySmall} text-muted-foreground mb-1`}>
                    Markets at the top and bottom of the adoption range report shortages of
                    roughly equal severity — which is what you would expect if the requirement
                    keeps moving: awareness gives way to implementation, implementation to
                    governance and evaluation, so a workforce can grow more capable and stay just
                    as short. The simpler reading can&apos;t be ruled out, that the shortage is merely
                    transitional everywhere at once and will ease as training supply catches up.
                    We offer it as a pattern observed across markets, not a proven law.
                  </p>
                  <p className="text-xs text-muted-foreground/50 italic mt-1">Tier A/B</p>
                </div>
              </motion.li>

              {/* Finding 5 */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.32, duration: 0.5 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-llpa-blue/10 text-llpa-blue text-sm font-bold flex items-center justify-center mt-0.5">
                  5
                </span>
                <div>
                  <p className={`${typography.body} font-semibold mb-1`}>
                    The multi-vendor environment adds real complexity.
                  </p>
                  <p className={`${typography.bodySmall} text-muted-foreground mb-1`}>
                    Most enterprises now run several models and providers, and the cost of
                    securing, evaluating, and staffing for them climbs faster than the count of
                    systems. But the sprawl is as much hedge as burden — running more than one
                    vendor is also how firms dodge lock-in and send each job to whichever model
                    handles it best.
                  </p>
                  <p className="text-xs text-muted-foreground/50 italic mt-1">Tier B</p>
                </div>
              </motion.li>

            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
