import { motion } from "framer-motion";
import { typography } from "./styles";

const Conclusion = () => {
  return (
    <section id="conclusion" className={`py-16 bg-muted/30`}>
      {/* Brand color bar */}
      <div className="h-1 llpa-gradient-bar mb-12" />

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <h2 className={`${typography.sectionTitle} mb-6`}>
            Conclusion: The Transformation Imperative
          </h2>

          <p className={`${typography.body} mb-6`}>
            This research reveals a clear market reality: <strong>88% of organizations now use AI, but only 6% capture significant value</strong>. The gap between adoption and impact represents the industry's core strategic opportunity—and its existential challenge.
          </p>

          <p className={`${typography.body} mb-6`}>
            <strong>The demand signal is unambiguous.</strong> Members report that 86% of clients request foundational AI training, 64% lack strategic clarity on AI goals, and 55% demand industry-specific customization. Yet 60% of Copilot licenses go unused within 90 days—proof that training alone doesn't drive adoption.
          </p>

          <p className={`${typography.body} mb-6`}>
            <strong>the industry's portfolio shows both strengths and critical gaps.</strong> The 46.4% Microsoft concentration creates vendor risk as enterprises adopt multi-model strategies (37% now use 5+ models). The 89.8% beginner/intermediate focus leaves advanced practitioners underserved while technical skills like RAG, agentic AI, and LLMOps remain almost entirely absent from member offerings. Only 8.2% of courses target specific industries despite clear premium pricing opportunities in financial services, manufacturing, legal, government, and education.
          </p>

          <p className={`${typography.body} mb-6`}>
            <strong>The path forward requires coordinated transformation.</strong> Industry associations must develop shared methodology (AI readiness assessments, change management frameworks, ROI calculators), create a member marketplace for capability matching, and launch an AI Channel connecting multinational clients with local expertise. Individual members must adopt advisory capabilities, develop advanced technical curriculum, diversify beyond Microsoft, and build industry vertical depth.
          </p>

          <p className={`${typography.body} mb-6`}>
            <strong>The market window is narrow.</strong> Per-learner training spending declined 19% from $954 to $774 as free resources proliferate. Organizations increasingly struggle to justify premium pricing for content comparable to Microsoft Learn, YouTube tutorials, and ChatGPT's built-in help. The "missing middle"—mid-market enterprises needing strategic AI guidance but unable to afford McKinsey or Deloitte—represents the highest-value opportunity.
          </p>

          <p className="text-foreground font-semibold text-lg">
            The choice is clear: expand from training provider to offer strategic advisory and implementation consulting—or face commoditization. Organizations don't lack AI awareness; they lack implementation capability, strategic clarity, and adoption support. training providers who deliver these capabilities will capture higher-margin advisory engagements, build recurring relationships, and establish premium market positioning. Those who continue operating as training-only providers will face accelerating margin pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
