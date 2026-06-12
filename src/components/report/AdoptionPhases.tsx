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

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>Pattern across all of these:</strong> gains are real but highly
                context-dependent. They concentrate in less-experienced workers and well-scoped
                tasks, can reverse on complex or judgment-heavy work, and often speed up drafting
                while creating new verification work downstream. The largest developer surveys
                capture both halves at once — GitHub&apos;s Octoverse reports ~92% of developers now
                using or experimenting with AI tools<CitationLink id={111} />, yet Stack
                Overflow&apos;s survey of 49,000+ developers found favorability{" "}
                <em>falling</em> — from over 70% in 2023–24 to about 60% in
                2025<CitationLink id={110} />.{" "}
                <strong>Adoption and confidence are moving in opposite directions.</strong>
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
                  process redesign described below.{" "}
                  <strong>Whether the macro number is low because the value is small or merely
                  because it&apos;s late is the part the data won&apos;t yet settle.</strong>
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

        </div>
      </div>
    </section>
  );
};

export default AdoptionPhases;
