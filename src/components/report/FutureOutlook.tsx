import { motion } from "framer-motion";
import { typography, spacing } from "./styles";

const capabilityProgress = [
  {
    benchmark: "GPQA Diamond (PhD-level reasoning)",
    baseline2024: "~65%",
    current2026: "87.3% (Claude 5)",
    change: "+22 points",
    significance: "Surpassed what researchers expected wouldn't happen for 2-3 years",
  },
  {
    benchmark: "SWE-bench Verified (real GitHub issues)",
    baseline2024: "~45%",
    current2026: "80.8% (Claude Opus 4.5)",
    change: "+35 points",
    significance: "Production-grade software engineering capability",
  },
  {
    benchmark: "HumanEval (code generation)",
    baseline2024: "~85%",
    current2026: "98.1% (GPT-5.3-Codex)",
    change: "+13 points",
    significance: "Near-ceiling on standard coding benchmarks",
  },
  {
    benchmark: "Inference cost (per million tokens)",
    baseline2024: "$60",
    current2026: "$0.21",
    change: "280x reduction",
    significance: "Enables enterprise-scale deployment at viable economics",
  },
];

const capabilityPhases = [
  {
    phase: "Phase 1 (2022-2025)",
    category: "Individual Assistants",
    description: "Human-in-the-loop tools that augment individual tasks (ChatGPT, Copilot, drafting assistants)",
    status: "Productivity ceiling emerging; 95% of firms report no measurable ROI",
    isCurrentCeiling: true,
  },
  {
    phase: "Phase 2 (2025-2027)",
    category: "Task Agents",
    description: "Autonomous multi-step task completion with human oversight (research synthesis, code refactoring)",
    status: "Production deployments beginning; reliability constraints being addressed",
    isCurrentCeiling: false,
  },
  {
    phase: "Phase 3 (2027+)",
    category: "Workflow Agents",
    description: "End-to-end process automation with minimal intervention (full feature development, complex analysis)",
    status: "Early pilots; governance and safety frameworks under development",
    isCurrentCeiling: false,
  },
];

const forecastComparison = [
  {
    source: "Metaculus Mean",
    forecast2020: "2070 (50 years)",
    forecast2024: "2030 (6 years)",
    change: "-40 years",
  },
  {
    source: "AI Researcher Survey (HLMI)",
    forecast2022: "2059",
    forecast2023: "2046",
    change: "-13 years",
  },
  {
    source: "Industry Leaders",
    forecast2022: "10-20 years",
    forecast2025: "2-5 years",
    change: "-10+ years",
  },
];

const organizationalRequirements = [
  {
    area: "Governance",
    requirements: [
      "Decision boundary frameworks for autonomous systems",
      "Audit trail and accountability structures",
      "Escalation protocols for agent failures",
    ],
  },
  {
    area: "Skills",
    requirements: [
      "Transition from AI usage to AI supervision",
      "Evaluation and quality assurance capabilities",
      "Orchestration and integration competencies",
    ],
  },
  {
    area: "Infrastructure",
    requirements: [
      "Observability for AI system behavior",
      "Safety guardrails and containment mechanisms",
      "Testing and validation frameworks",
    ],
  },
];

const FutureOutlook = () => {
  return (
    <section id="future-outlook" className={`${spacing.section} bg-muted/30`}>
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
            <p className={`${typography.sectionLabel} text-muted-foreground`}>Section 5</p>
            <h2 className={typography.sectionTitle}>Future Outlook</h2>
            <p className={`${typography.body} mt-4`}>
              The productivity gap documented in Section 4 reflects a phase transition, not a technology 
              ceiling. This section presents evidence on capability trajectories, AGI timelines, and 
              organizational preparation requirements.
            </p>
          </motion.div>

          {/* 5.1 Capability Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-10"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>5.1 Evidence of Continued Capability Progress</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              Unlike previous technology hype cycles, AI capabilities continue improving on fundamental 
              performance metrics. This distinguishes current adoption challenges from evidence of 
              technology limits.
            </p>
            
            <div className="border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b">
                    <th className="text-left py-3 px-4 font-semibold">Benchmark</th>
                    <th className="text-left py-3 px-4 font-semibold">2024 Baseline</th>
                    <th className="text-left py-3 px-4 font-semibold">March 2026</th>
                    <th className="text-left py-3 px-4 font-semibold">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilityProgress.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="py-3 px-4 font-medium">{row.benchmark}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.baseline2024}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.current2026}</td>
                      <td className="py-3 px-4 font-medium text-emerald-700">{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Key Observation:</strong> These improvements are driven by inference-time 
                computation and architectural refinements, not simply parameter scaling. Progress is 
                constrained by research breakthroughs rather than resource limitations — a fundamentally 
                different constraint than previous hype cycles.
              </p>
            </div>
          </motion.div>

          {/* 5.2 AGI Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>5.2 AGI Timeline Forecasts</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              Expert forecasts have compressed dramatically. The consistent direction of revision 
              (earlier, not later) suggests systematic underestimation of capability progress.
            </p>
            
            <div className="border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b">
                    <th className="text-left py-3 px-4 font-semibold">Source</th>
                    <th className="text-left py-3 px-4 font-semibold">Earlier Forecast</th>
                    <th className="text-left py-3 px-4 font-semibold">Recent Forecast</th>
                    <th className="text-left py-3 px-4 font-semibold">Revision</th>
                  </tr>
                </thead>
                <tbody>
                  {forecastComparison.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="py-3 px-4 font-medium">{row.source}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.forecast2020 || row.forecast2022}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.forecast2024 || row.forecast2023 || row.forecast2025}</td>
                      <td className="py-3 px-4 font-medium text-rose-700">{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-rose-900">
                <strong>Aggregated Estimate:</strong> Greater than 80% probability of AGI by 2031. 
                AGI defined as systems capable of performing most economically valuable work at or 
                above human level. Current productivity challenges will appear modest in retrospect 
                if these forecasts prove accurate.
              </p>
            </div>

            <p className={typography.body}>
              <strong>Critical distinction:</strong> What we are seeing now regarding AI hype "dying down" 
              relates to deployment challenges and organizational adaptation — not architectural breakthroughs 
              or capability ceilings. This technology is a few research advances away from capabilities that 
              will supersede human performance on most tasks regardless of current adoption status.
            </p>
          </motion.div>

          {/* Capability Evolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>5.3 Adoption Phase Transitions</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              Current productivity challenges are phase-specific. The ChatGPT era — individual assistants 
              and copilots — has reached its ceiling. This does not indicate technology failure; it indicates 
              transition to the next phase.
            </p>
            
            <div className="space-y-4">
              {capabilityPhases.map((phase) => (
                <div 
                  key={phase.phase} 
                  className={`border rounded-lg p-4 ${phase.isCurrentCeiling ? 'border-amber-300 bg-amber-50' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {phase.phase}
                      </span>
                      <h4 className="font-semibold text-foreground">{phase.category}</h4>
                    </div>
                    {phase.isCurrentCeiling && (
                      <span className="text-xs font-medium bg-amber-200 text-amber-800 px-2 py-1 rounded">
                        Current Ceiling
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{phase.description}</p>
                  <p className={`text-sm ${phase.isCurrentCeiling ? 'text-amber-800 font-medium' : 'text-foreground'}`}>
                    {phase.status}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white rounded-lg p-4 mt-6">
              <p className="text-sm text-white/90">
                <strong>The same plateau will appear with AI agents.</strong> Organizations will deploy them, 
                hit a ceiling on what current systems can reliably do, and interpret that as confirmation 
                the hype is dying. The pattern will repeat until organizations learn to anticipate phase 
                transitions rather than interpreting them as technology failure.
              </p>
            </div>
          </motion.div>

          {/* Organizational Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-10"
          >
            <h3 className={`${typography.subsectionTitle} mb-2`}>5.4 Organizational Preparation</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              Transition to agentic AI will require organizational capabilities that differ from 
              those developed for current-generation tools.
            </p>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b">
                    <th className="text-left py-3 px-4 font-semibold w-28">Area</th>
                    <th className="text-left py-3 px-4 font-semibold">Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  {organizationalRequirements.map((area) => (
                    <tr key={area.area} className="border-b last:border-b-0">
                      <td className="py-3 px-4 font-medium align-top">{area.area}</td>
                      <td className="py-3 px-4">
                        <ul className="space-y-1">
                          {area.requirements.map((req, i) => (
                            <li key={i} className="text-muted-foreground">• {req}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Implications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>5.5 Strategic Implications</h3>
            
            <div className="bg-slate-900 text-white rounded-lg p-6">
              <p className="text-white/90 mb-4">
                <strong>The evidence supports a specific interpretation:</strong> Current AI adoption 
                challenges reflect early-phase deployment friction, not fundamental technology limitations. 
                Organizations interpreting productivity plateaus as confirmation that "the hype is dying" 
                are likely making the same error as those who dismissed computing's potential in the 1980s.
              </p>
              <p className="text-white/80 mb-4">
                Unlike the metaverse or VR, AI capabilities continue improving on fundamental metrics. 
                Benchmark scores are rising. Inference costs are falling. Expert timeline forecasts 
                continue compressing. The question is not whether AI will transform work, but how quickly.
              </p>
              <p className="text-white/90 font-medium">
                Organizations should prioritize adaptive capabilities — governance frameworks, evaluation 
                skills, flexible infrastructure — over optimizing for current-generation tools. The 
                timeline forecasts suggest limited runway for gradual adaptation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureOutlook;
