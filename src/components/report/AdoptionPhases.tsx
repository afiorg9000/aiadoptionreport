import { motion } from "framer-motion";
import { typography, spacing } from "./styles";

const productivityStudies = [
  {
    study: "NBER Executive Survey (2025)",
    sample: "6,000 executives",
    finding: "90% of firms report zero measurable productivity or employment impact despite $2.5 trillion global AI spending",
    citation: "NBER",
  },
  {
    study: "GitHub Copilot Study (Peng et al. 2023)",
    sample: "Software developers",
    finding: "55% faster task completion for coding tasks",
    citation: "arXiv",
  },
  {
    study: "Customer Service Study (Brynjolfsson et al. 2025)",
    sample: "5,179 customer service agents",
    finding: "14% increase in issues resolved per hour; novice workers improved 34%, top performers showed minimal gains",
    citation: "QJE",
  },
  {
    study: "BCG Consulting Study (Dell'Acqua et al. 2023)",
    sample: "758 consultants",
    finding: "25% faster completion, 40% higher quality for AI-suitable tasks; 19% worse performance on tasks requiring judgment",
    citation: "HBS Working Paper",
  },
  {
    study: "METR Study (2025)",
    sample: "Experienced open-source developers",
    finding: "19% longer to complete real coding tasks with AI tools, though perceived themselves as 20% faster",
    citation: "METR",
  },
  {
    study: "CEO Survey (BuildMVPFast 2025)",
    sample: "Enterprise CEOs",
    finding: "95% of companies report zero measurable productivity ROI; 95% of AI pilots never escape the lab",
    citation: "BuildMVPFast",
  },
];

const macroEvidenceSources = [
  {
    source: "BLS Productivity Data (2025-2025)",
    finding: "US productivity growth: 2.7% in 2025 vs 1.4% decade average — early signs of acceleration",
    interpretation: "Suggestive but not conclusive; confounded by other economic factors",
  },
  {
    source: "Eurostat Enterprise Survey (2025)",
    finding: "Enterprise AI adoption reached 20% EU average, up from 8% in 2023",
    interpretation: "Adoption metrics improving but not yet reflected in aggregate output statistics",
  },
  {
    source: "UK Office for National Statistics (2025)",
    finding: "Most businesses report no measurable productivity impact from AI adoption",
    interpretation: "Consistent with deployment-value gap pattern observed across markets",
  },
];

const solowParadoxComparison = [
  {
    dimension: "Investment vs. Returns",
    computing1980s: "Hundredfold increase in computing capacity; productivity growth dropped from 3% to 1%",
    ai2020s: "$2.5 trillion global AI spending; 95% of firms report no measurable productivity impact",
  },
  {
    dimension: "Time to Impact",
    computing1980s: "10-15 years (1980-1995) before IT productivity gains appeared in macro data",
    ai2020s: "Unknown; economists debate whether J-curve arrives 2027 or 2037",
  },
  {
    dimension: "Resolution Pattern",
    computing1980s: "Gains emerged when organizations redesigned processes around technology (Walmart supply chain, financial services)",
    ai2020s: "Early evidence suggests same pattern: 95% bolted AI onto existing workflows rather than redesigning around it",
  },
];

const agiTimelines = [
  {
    source: "Metaculus (Community Forecast)",
    prediction: "First general AI announced: May 2033 (median)",
    methodology: "Aggregated predictions from forecasting community",
    notes: "Weakly general AI forecast: March 2028",
  },
  {
    source: "AI Impacts ESPAI Survey",
    prediction: "HLMI (50% probability): 2031-2047 depending on methodology",
    methodology: "Survey of AI researchers (2016, 2022, 2023)",
    notes: "Timelines shortened by 13 years between 2022-2023 surveys",
  },
  {
    source: "80,000 Hours Analysis (2025)",
    prediction: "Expert forecasts contracted from 50 years to 5 years over past four years",
    methodology: "Meta-analysis of expert predictions",
    notes: "AI company leaders claim AGI within 2-5 years",
  },
];

const aiVsMetaverse = [
  {
    dimension: "Current Deployment",
    ai: "88% enterprise adoption; measurable task-level productivity gains documented",
    metaverseVR: "Limited enterprise adoption; use cases remain primarily consumer entertainment",
  },
  {
    dimension: "Capability Progress",
    ai: "Benchmarks improving continuously: GPQA Diamond scores rose from 79.2% to 87.3% in months; inference costs dropped 280-fold over two years",
    metaverseVR: "Hardware improvements incremental; fundamental interaction paradigm unchanged since 2016",
  },
  {
    dimension: "Economic Integration",
    ai: "GitHub Copilot, ChatGPT, enterprise LLMs embedded in daily workflows of millions",
    metaverseVR: "Virtual offices, metaverse platforms largely abandoned or pivoted by major tech companies",
  },
  {
    dimension: "Investment Trajectory",
    ai: "Continued scaling: Microsoft $80B, Google $75B, Amazon $100B committed to AI infrastructure 2025-2027",
    metaverseVR: "Meta pivoted from metaverse focus; VR investment declining across major platforms",
  },
];

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
            <p className={`${typography.sectionLabel} text-muted-foreground`}>Section 4</p>
            <h2 className={typography.sectionTitle}>The Productivity Evidence Gap</h2>
            <p className={`${typography.body} mt-4`}>
              A central question in AI adoption research is whether documented productivity gains translate 
              to aggregate economic impact. Current evidence reveals a significant gap between micro-level 
              findings and macro-level statistics — a pattern with important implications for interpreting 
              claims that "AI hype is dying."
            </p>
          </motion.div>

          {/* Core Thesis Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-slate-900 text-white rounded-lg p-6 mb-10"
          >
            <h3 className="font-semibold text-white text-lg mb-3">Research Summary</h3>
            <p className="text-white/90 mb-4">
              The narrative that AI hype is dying is understandable given current evidence — enterprises bought 
              AI tools and aren't seeing returns; productivity gains aren't showing up in labor market data. 
              However, this interpretation conflates <strong>a temporary plateau in one phase of adoption</strong> with 
              evidence of fundamental technology limitations.
            </p>
            <p className="text-white/80 text-sm">
              This section presents the evidence for both the productivity gap and the argument that it represents 
              a phase transition rather than a ceiling on AI capability.
            </p>
          </motion.div>

          {/* 4.1 Micro-Level Evidence */}
          <motion.div
            id="productivity-evidence"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>4.1 Task-Level Productivity Gains (Micro Evidence)</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              Controlled studies consistently document significant productivity improvements at the task level.
            </p>

            <div className="border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b">
                    <th className="text-left py-3 px-4 font-semibold">Study</th>
                    <th className="text-left py-3 px-4 font-semibold">Sample</th>
                    <th className="text-left py-3 px-4 font-semibold">Finding</th>
                  </tr>
                </thead>
                <tbody>
                  {productivityStudies.map((study, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="py-3 px-4 font-medium align-top">{study.study}</td>
                      <td className="py-3 px-4 text-muted-foreground align-top">{study.sample}</td>
                      <td className="py-3 px-4 text-muted-foreground">{study.finding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>Key Pattern:</strong> Gains are real but context-dependent. Novice workers improve 
                disproportionately (34% vs minimal for experts). Experienced developers may actually take 
                longer while perceiving themselves as faster. AI accelerates drafting but creates downstream 
                verification work — what researchers call "workslop."
              </p>
            </div>
          </motion.div>

          {/* 4.2 Macro-Level Evidence */}
          <motion.div
            id="macro-evidence"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>4.2 Aggregate Economic Impact (Macro Evidence)</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              Despite task-level gains, aggregate statistics show minimal measurable impact.
            </p>

            <div className="space-y-4 mb-6">
              {macroEvidenceSources.map((source, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-1">{source.source}</h4>
                  <p className="text-sm text-foreground mb-2">{source.finding}</p>
                  <p className="text-xs text-muted-foreground italic">{source.interpretation}</p>
                </div>
              ))}
            </div>

            <div className="bg-card border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>The Central Paradox:</strong> Task-level studies document 14-55% productivity gains. 
                Aggregate data shows 90-95% of firms reporting zero measurable impact. This disconnect defines 
                the current phase of AI adoption.
              </p>
            </div>
          </motion.div>

          {/* 4.3 Historical Precedent */}
          <motion.div
            id="micro-macro-gap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>4.3 Historical Precedent: The Solow Paradox</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              In 1987, economist Robert Solow observed: "You can see the computer age everywhere but in the 
              productivity statistics." The current AI pattern mirrors this historical precedent.
            </p>

            <div className="border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b">
                    <th className="text-left py-3 px-4 font-semibold w-1/4">Dimension</th>
                    <th className="text-left py-3 px-4 font-semibold">Computing (1980s)</th>
                    <th className="text-left py-3 px-4 font-semibold">AI (2020s)</th>
                  </tr>
                </thead>
                <tbody>
                  {solowParadoxComparison.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="py-3 px-4 font-medium align-top">{row.dimension}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.computing1980s}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.ai2020s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-emerald-900">
                <strong>Resolution Pattern:</strong> IT productivity gains emerged in the 1990s when organizations 
                redesigned processes around technology rather than bolting computers onto existing workflows. 
                Research suggests the same pattern will determine AI value realization.
              </p>
            </div>
          </motion.div>

          {/* 4.4 Why This Differs from Previous Hype Cycles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>4.4 Why AI Differs from Metaverse/VR Hype Cycles</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              A critical question is whether current AI adoption patterns reflect the metaverse/VR cycle 
              (hype without sustained capability progress) or the computing cycle (temporary lag before 
              transformative impact).
            </p>

            <div className="border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b">
                    <th className="text-left py-3 px-4 font-semibold w-1/4">Dimension</th>
                    <th className="text-left py-3 px-4 font-semibold">AI (2024-2025)</th>
                    <th className="text-left py-3 px-4 font-semibold">Metaverse/VR</th>
                  </tr>
                </thead>
                <tbody>
                  {aiVsMetaverse.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="py-3 px-4 font-medium align-top">{row.dimension}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.ai}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.metaverseVR}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Key Distinction:</strong> AI capabilities continue improving on fundamental metrics 
                (benchmark scores, inference costs, context windows). Metaverse/VR hype collapsed without 
                sustained capability breakthroughs. AI has crossed from theoretical capability to operational 
                implementation embedded in daily workflows of millions.
              </p>
            </div>
          </motion.div>

          {/* 4.5 AGI Timeline Forecasts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>4.5 AGI Timeline Forecasts</h3>
            <p className={`${typography.bodySmall} text-muted-foreground mb-6`}>
              Aggregated forecasts from prediction markets and expert surveys provide context on expected 
              capability trajectories.
            </p>

            <div className="border rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b">
                    <th className="text-left py-3 px-4 font-semibold">Source</th>
                    <th className="text-left py-3 px-4 font-semibold">Prediction</th>
                    <th className="text-left py-3 px-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {agiTimelines.map((row, i) => (
                    <tr key={i} className="border-b last:border-b-0">
                      <td className="py-3 px-4 font-medium align-top">{row.source}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.prediction}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
              <p className="text-sm text-rose-900">
                <strong>Timeline Implications:</strong> Expert forecasts have contracted dramatically — from 
                50 years to 5 years over four years. While prediction uncertainty is high, the direction 
                of revision (consistently earlier) suggests current deployment challenges reflect early-phase 
                adoption rather than fundamental capability limits.
              </p>
            </div>
          </motion.div>

          {/* 4.6 Implications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className={`${typography.subsectionTitle} mb-4`}>4.6 Interpreting the Evidence</h3>
            
            <div className="space-y-4">
              <p className={typography.body}>
                The evidence supports several conclusions:
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground font-medium">1.</span>
                  <span><strong>The productivity gap is real.</strong> 90-95% of firms report no measurable AI productivity impact despite significant investment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-medium">2.</span>
                  <span><strong>Task-level gains are also real.</strong> Controlled studies consistently document 14-55% improvements for specific tasks.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-medium">3.</span>
                  <span><strong>This pattern has historical precedent.</strong> The Solow Paradox showed a 10-15 year lag between IT investment and productivity gains.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-medium">4.</span>
                  <span><strong>AI differs from previous hype cycles.</strong> Unlike metaverse/VR, AI capabilities continue improving on fundamental metrics and are embedded in daily workflows.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-medium">5. </span>
                  <span><strong>Timeline forecasts suggest limited runway.</strong> AGI predictions have compressed from decades to years, though uncertainty remains high.</span>
                </li>
              </ul>

              <div className="bg-slate-900 text-white rounded-lg p-6 mt-6">
                <p className="text-white/90">
                  <strong>Bottom Line:</strong> Current evidence is consistent with a temporary plateau between 
                  adoption phases rather than evidence that AI has reached its limits. Organizations interpreting 
                  current deployment challenges as confirmation that "the hype is dying" may be making the same 
                  error as those who dismissed computing's transformative potential in the 1980s.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionPhases;
