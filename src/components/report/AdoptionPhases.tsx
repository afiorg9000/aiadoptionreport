import { motion } from "framer-motion";
import { typography, spacing } from "./styles";
import CitationLink from "./CitationLink";

const AdoptionPhases = () => {
  return (
    <section id="productivity-analysis" className={`${spacing.section} bg-background`}>
      <div className="container">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className={`${typography.sectionLabel} text-muted-foreground`}>Section 3</p>
            <h2 className={typography.sectionTitle}>The productivity evidence gap</h2>
            <p className={`${typography.body} mt-4`}>
              The central question is whether the documented task-level gains from AI show up in
              aggregate economic data. <strong>So far they largely do not — and the gap between
              the two is the real finding of this section.</strong>
            </p>
          </motion.div>

          {/* 3.1 Task-Level Evidence */}
          <motion.div
            id="productivity-evidence"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>
              3.1 Task-level gains (micro evidence)
            </h3>

            <div className="space-y-3 mb-6">
              <p className={typography.bodySmall}>
                <strong>Controlled studies find real, double-digit productivity gains — but only
                on the right tasks.</strong> A GitHub Copilot experiment had developers complete a
                coding task about <strong>56% faster</strong>, with the largest gains going to
                less-experienced developers<CitationLink id={14} /><CitationLink id={28} />. A
                customer-support study of roughly 5,000 agents found{" "}
                <strong>~14% more issues resolved per hour</strong>, again concentrated among
                novices while top performers barely moved<CitationLink id={15} /><CitationLink id={53} />.
                And a study of ~750 consultants found <strong>~25% faster, higher-quality work on
                AI-suitable tasks</strong> but worse results on tasks outside the tool&apos;s
                competence — the &ldquo;jagged frontier&rdquo;<CitationLink id={16} /><CitationLink id={54} />.
                The clearest cautionary result came from METR, where 16 experienced developers
                worked <strong>~19% slower on real tasks in their own large codebases</strong>{" "}
                while believing they were faster<CitationLink id={17} /><CitationLink id={45} />.
                (A February 2026 follow-up made the slowdown itself less certain — wide confidence
                intervals, selection effects, a study redesign — so the durable takeaway is not
                &ldquo;AI makes you slower&rdquo; but that developers were poor judges of their own
                speedup.)
              </p>
            </div>
          </motion.div>

          {/* 3.2 Aggregate Evidence */}
          <motion.div
            id="macro-evidence"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>
              3.2 Aggregate evidence (macro)
            </h3>

            <div className="space-y-4">
              <p className={typography.bodySmall}>
                <strong>Investment is enormous and rising; measured return is scarce — that is
                the paradox in one line.</strong> Firms are forecast to spend roughly{" "}
                <strong>$2.52 trillion on AI in 2026</strong><CitationLink id={7} />, and this
                isn&apos;t just a forecasting artifact: Menlo Ventures&apos; bottom-up model of actual
                purchases put generative-AI spending at $37 billion in 2025, about 3.2x the prior
                year<CitationLink id={105} />. Yet the return side stays flat — an analysis of
                S&P 500 earnings calls found 374 companies citing AI, mostly positively, with no
                corresponding lift in aggregate productivity<CitationLink id={51} />, and outside
                the largest tech firms economists report little AI signal in employment,
                productivity, or inflation data<CitationLink id={49} />.
              </p>

              <p className={typography.bodySmall}>
                <strong>The most rigorous surveys converge on the same answer: most firms see no
                measurable return yet.</strong> In the NBER survey of ~6,000 senior leaders,
                about <strong>89% reported no productivity impact over three
                years</strong><CitationLink id={1} />; MIT&apos;s Project NANDA put the share of
                organizations seeing no return near <strong>95%</strong><CitationLink id={2} />;
                PwC&apos;s survey of ~4,500 CEOs found <strong>56% reporting neither higher revenue
                nor lower costs</strong> from AI<CitationLink id={8} /> — all Tier B. Tier A
                government data (BLS, Eurostat, ONS) agrees as far as it can see: an aggregate
                productivity effect remains hard to detect against other macro
                factors<CitationLink id={4} /><CitationLink id={18} />.
              </p>

              <div className="bg-card border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>The deeper paradox is the disconnect itself:</strong> controlled studies
                  find double-digit task gains, while firm-level surveys find almost no aggregate
                  impact — and both are well-evidenced. There are good reasons real task gains may
                  not surface in the financials: time saved often turns into slack or gets
                  reabsorbed rather than into output or headcount; gains on a few tasks get
                  cancelled by new oversight elsewhere; and speeding one step does little when the
                  bottleneck sits somewhere else — Amdahl&apos;s law applied to an org chart. But the
                  optimistic reading fits the same evidence equally well — the gains may be real
                  but early, still below the resolution of an annual survey, waiting on the
                  process redesign described below.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3.3 Solow Paradox */}
          <motion.div
            id="micro-macro-gap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>
              3.3 Historical precedent: the Solow paradox
            </h3>
            <div className="space-y-4">
              <p className={`${typography.bodySmall} text-muted-foreground`}>
                In 1987 Robert Solow observed that the computer age was visible &ldquo;everywhere but
                in the productivity statistics.&rdquo;<CitationLink id={48} />{" "}
                <strong>IT&apos;s payoff only arrived in the 1990s, once organizations redesigned their
                processes around the technology instead of bolting it on</strong> — and that is
                the crux of the analogy now being drawn for AI. Apollo&apos;s chief economist has
                restated the line as &ldquo;AI is everywhere except in the incoming macroeconomic
                data,&rdquo;<CitationLink id={49} /> while the St. Louis Fed estimates a ~1.9% excess
                cumulative productivity gain since ChatGPT — small but non-zero, consistent with
                an early-but-real reading<CitationLink id={50} />.
              </p>
              <p className={`${typography.bodySmall} text-muted-foreground`}>
                It is a genuine and apt parallel — but it&apos;s an analogy, not proof. The 1980s
                computing surge coincided with productivity growth falling from 3% to 1% before
                it recovered; today&apos;s AI spend coincides with 89–95% of firms reporting no
                measurable impact.{" "}
                <strong>If the parallel holds, the resolution comes the same way it did then —
                from redesigning work around the tool rather than adding it to an unchanged
                process.</strong> The evidence so far is consistent with that hypothesis, not yet
                confirmation of it.
              </p>
            </div>
          </motion.div>

          {/* 3.4 Capability, displacement, and competitive gap */}
          <motion.div
            id="capability-displacement-gap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>
              3.4 Capability, displacement, and the widening competitive gap
            </h3>
            <div className="space-y-4">
              <p className={`${typography.bodySmall} text-muted-foreground`}>
                <strong>The capability trajectory.</strong> The value gap documented above is not
                explained by a capability plateau. Stanford&apos;s 2026 AI Index records frontier
                models gaining about 30 percentage points in a single year on Humanity&apos;s Last Exam
                — a benchmark built to be hard for AI — with evaluations meant to last years
                saturating in months; on agentic tasks, WebArena success rose from 15% (2023) to
                roughly 74% (early 2026) and Cybench from 15% (2024) to
                93%<CitationLink id={117} />. Yet capability is not deployment: frontier models
                still fail roughly one in three production attempts<CitationLink id={118} />, and
                reviewers document a ~37-point gap between lab benchmark scores and real-world
                performance<CitationLink id={119} />.
              </p>

              <p className={`${typography.bodySmall} text-muted-foreground`}>
                <strong>The displacement has already started — at the entry level.</strong> The
                clearest evidence to date is Stanford&apos;s Canaries in the Coal Mine study
                (Brynjolfsson, Chandar &amp; Chen, 2025), built on ADP payroll records covering
                millions of workers<CitationLink id={120} />. Since generative AI&apos;s widespread
                adoption, early-career workers aged 22–25 in the most AI-exposed occupations have
                seen a <strong>13% relative decline in employment</strong> — and for young software
                developers the drop runs near <strong>20% since late 2022</strong> — holding even
                after controlling for firm-level shocks. The cuts concentrate in roles where AI
                automates rather than augments, and the labor market is adjusting through headcount,
                not wages: pay held steady while jobs disappeared. Experienced workers in the same
                occupations were largely spared; the loss fell on the people just entering.
              </p>

              <p className={`${typography.bodySmall} text-muted-foreground`}>
                This entry-level-first shape lines up with the pyramid replacement idea from{" "}
                <em>The Intelligence Curse</em> (Drago &amp; Laine, 2025) — an interpretive argument,
                not an empirical study<CitationLink id={125} /> — which reads AI adoption as moving
                up the corporate pyramid rather than across it: the most routine, entry-level tasks
                tend to give way first, with more senior, judgment-heavy work following more slowly.
                The Canaries data is the measured first step; the thesis mainly supplies a direction
                of travel for it. The authors don&apos;t attach a timeline, so it&apos;s useful here as a
                way to read the trend and a pointer to where the next signal would show up — not as
                a forecast of any particular endpoint. The modest, supported takeaway is simply that
                change starts with the most automatable work, which is exactly where the early
                evidence has surfaced.
              </p>

              <p className={`${typography.bodySmall} text-muted-foreground`}>
                <strong>What firms are projected to forgo by waiting.</strong> The competitive cost
                of standing still is itself a projection, but a credible one. BCG&apos;s{" "}
                <em>Widening AI Value Gap</em> (n=1,250) finds the leader–laggard performance gap
                widening: future-built firms already show roughly 1.7× the revenue growth, 1.6× the
                EBIT margin, and 3.6× the three-year total shareholder return of laggards, and in
                AI-enabled areas BCG projects gains of about 14% for leaders by 2028 against under 7%
                for laggards<CitationLink id={33} />. The mechanism is compounding — leaders
                reinvest AI returns into further capability while laggards&apos; thin returns starve the
                next round of investment. The Intelligence Curse essay frames the same dynamic as a
                competitive ratchet: once a rival automates a function, matching it stops feeling
                optional, and the pressure to keep pace builds<CitationLink id={125} />. As an
                argument it reaches further than the evidence does — so, again, a frame rather than
                a finding — but its near-term, testable claim is just the BCG pattern above: the
                gap between movers and waiters tends to widen rather than close. The §4 caveat still
                applies: leaders also start with capital, data, and talent the median firm lacks, so
                the gap is correlated with, not purely caused by, moving early. The direction,
                however, is not in dispute.
              </p>

              <p className={`${typography.bodySmall} text-muted-foreground`}>
                <strong>Two honest qualifiers.</strong> Aggregate displacement is not yet visible
                — economywide employment and openings in exposed occupations have not broadly
                fallen<CitationLink id={122} /><CitationLink id={123} /> — so the effect today is
                concentrated, not general. And the Canaries authors&apos; February 2026 update finds
                the decline statistically robust only from 2024 and frame it as correlation and an
                early warning, not proven economywide causation<CitationLink id={120} />. But
                &ldquo;early warning&rdquo; is the case for acting now, not against it: the first
                measurable losses are landing precisely where the capability-exposure data predicted
                they would. The organizations and workers who close the capability-to-usage gap while
                it is still a choice — rather than a scramble — are the ones not reacting later from
                behind.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AdoptionPhases;
