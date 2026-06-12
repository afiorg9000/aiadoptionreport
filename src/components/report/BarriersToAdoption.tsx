import { motion } from "framer-motion";
import { DollarSign, Users, Shield, Target, BarChart2, Building } from "lucide-react";
import CitationLink from "./CitationLink";
import { spacing, typography } from "./styles";

const BarriersToAdoption = () => {
  return (
    <section id="section-2" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm text-llpa-yellow mb-2">Section 2</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Barriers to value realization
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The barriers below are drawn from adoption surveys and validated against independent
              research. The framing throughout is associational: these factors{" "}
              <em>correlate with</em> difficulty realizing value. Causal attribution is flagged
              where the evidence supports it and avoided where it does not.
            </p>
          </motion.div>

          {/* 2.1 */}
          <motion.div
            id="barrier-2-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl border border-border shadow-sm p-6 mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-llpa-orange/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-llpa-orange" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-llpa-orange">2.1</span>
                <h3 className="text-xl font-semibold text-foreground leading-snug">Financial constraints and the ROI-articulation problem</h3>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <p className={typography.bodySmall}>
                A substantial share of enterprises cite cost as a barrier, and a larger share
                report difficulty <em>justifying</em> AI investment internally. Corporate training
                budgets tightened over 2023–2024, and free and low-cost self-paced alternatives
                (vendor learning portals, video tutorials, subscription platforms) create real
                pricing pressure on paid offerings. <em>(Tier B/C)</em>
              </p>
              <p className={typography.bodySmall}>
                <strong>The sharper finding is that the constraint is usually not the size of the
                budget but the difficulty of saying what the spend will return.</strong> AI
                competes for money against investments with legible payback — a hire, a familiar
                piece of software — and a request that can&apos;t state its value hypothesis loses
                that contest no matter how cheap it is. <strong>Firms that can name a concrete
                return meet far less resistance getting it approved.</strong> It&apos;s worth resisting
                the reflex to treat this as always a problem to solve: sometimes the inability to
                justify the spend is correct information. If a firm truly can&apos;t say what an AI
                investment is worth, the value may genuinely be uncertain — and &ldquo;buy it anyway,
                you&apos;ll find a use&rdquo; is bad advice, not a budgeting failure.
              </p>
              <p className={typography.bodySmall}>
                The government data reinforces where the real friction sits. Among EU enterprises
                that considered AI but chose not to adopt it, the most common reason by a wide
                margin is <strong>lack of relevant expertise (70.9%)</strong>, followed by{" "}
                <strong>lack of clarity about the legal consequences (52.5%)</strong> and{" "}
                <strong>data-protection and privacy concerns (48.8%)</strong>. Tellingly, the{" "}
                <em>least</em> common reason — cited by only <strong>20.7%</strong> — is that AI
                was &ldquo;not useful for the enterprise.&rdquo; In other words,{" "}
                <strong>firms are held back far more by a capability-and-confidence gap than by a
                judgment that the technology is irrelevant: most non-adopters believe AI could
                help them but feel unequipped to deploy it safely.</strong>{" "}
                <em>(Tier A — Eurostat, Dec 2025.)</em><CitationLink id={4} /> The OECD&apos;s
                December 2025 SME report reaches the same conclusion on a separate dataset: among
                SMEs, <strong>a skills shortage is the most-cited barrier (~half of firms)</strong>,
                ahead of maintenance cost (40%) and hardware (32%)<CitationLink id={23} />. The
                pattern holds globally: in the WEF&apos;s <em>Future of Jobs 2025</em> survey of more
                than 1,000 employers, <strong>63% identified skills gaps as the single biggest
                barrier to business transformation</strong> over 2025–2030 — ranking above
                culture, regulation, and capital<CitationLink id={20} /><CitationLink id={40} />.
                IBM&apos;s Global AI Adoption Index, built on a far larger base of 7,502 businesses,
                names the same lead barriers: limited AI skills and expertise (33%), data
                complexity (25%), and ethical concerns (23%)<CitationLink id={103} />.{" "}
                <strong>Across government statistics, multi-country consulting surveys, and a
                7,500-firm vendor index, the top constraint is consistently capability, not
                conviction.</strong>
              </p>
            </div>

            <p className="text-xs text-muted-foreground/50 italic mt-4">Tier B/C</p>
          </motion.div>

          {/* 2.2 */}
          <motion.div
            id="barrier-2-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="bg-card rounded-xl border border-border shadow-sm p-6 mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-llpa-green/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-llpa-green" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-llpa-green">2.2</span>
                <h3 className="text-xl font-semibold text-foreground leading-snug">Organizational inertia and change resistance</h3>
              </div>
            </div>

            <p className={`${typography.bodySmall} mb-3`}>
              A large minority of enterprises cite leadership reluctance, conservative culture,
              security concerns, and job-displacement fears as barriers. External research is
              consistent with this:
            </p>

            <ul className={`space-y-3 mb-4 ${spacing.indent}`}>
              <li className="flex gap-3">
                <span className="text-llpa-blue mt-0.5">•</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  In BCG&apos;s <em>Build for the Future 2025</em> study (n=1,250), only{" "}
                  <strong>5%</strong> of companies qualify as &ldquo;future-built&rdquo; and generating
                  substantial value, <strong>35%</strong> are scaling, and <strong>60%</strong>{" "}
                  have seen little-to-no measurable benefit despite investment.<CitationLink id={33} />{" "}
                  <em className="text-xs text-muted-foreground/60">(Tier B — BCG)</em>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-llpa-blue mt-0.5">•</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Worker anxiety is real and measurable: in Microsoft&apos;s Work Trend Index,{" "}
                  <strong>53% of employees who use AI at work worry that doing so on important
                  tasks makes them look replaceable.</strong><CitationLink id={11} /> PwC&apos;s{" "}
                  <em>Global Workforce Hopes &amp; Fears 2025</em> (49,843 workers) puts a
                  constructive counterpoint alongside that anxiety: daily AI users report far
                  better outcomes than infrequent users — 92% vs 58% on productivity, 58% vs 36%
                  on job security — suggesting the fear eases with fluency rather than
                  exposure<CitationLink id={79} />.{" "}
                  <em className="text-xs text-muted-foreground/60">(Tier B — Microsoft/LinkedIn Work Trend Index 2024; PwC Global Workforce 2025)</em>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-llpa-blue mt-0.5">•</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Deployment often races ahead of adoption infrastructure — a mismatch the AWS{" "}
                  <em>Generative AI Adoption Index</em> quantifies in §4.2 (nearly half of
                  organizations moving gen AI into production,{" "}
                  <strong>14% with a change-management strategy</strong> in place).{" "}
                  <em className="text-xs text-muted-foreground/60">(Tier B — AWS Generative AI Adoption Index 2025)</em>
                </span>
              </li>
            </ul>

            <p className={`${typography.bodySmall} mb-4`}>
              The defensible conclusion is that resistance usually has legitimate roots, and that
              skimping on change management goes hand in hand with weaker adoption. AI changes how
              work is done, not just which application is open, and reorganizing established work
              always drags its usual frictions behind it — retraining, status anxiety, a dip in
              output before any gain — which harden into inertia if no one manages them. But not
              all of what gets called resistance is obstruction; some of it is judgment. A
              workforce that watched the last rollout fail, or that senses a tool isn&apos;t yet
              reliable for its actual work, is being cautious in a way that often proves right.
              Treating every objection as a barrier to push through assumes the deployment was
              sound to begin with — the very thing the abandonment numbers put in doubt.
            </p>

            <p className="text-xs text-muted-foreground/50 italic mt-4">Tier B/C</p>
          </motion.div>

          {/* 2.3 */}
          <motion.div
            id="barrier-2-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="bg-card rounded-xl border border-border shadow-sm p-6 mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-llpa-blue/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-llpa-blue" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-llpa-blue">2.3</span>
                <h3 className="text-xl font-semibold text-foreground leading-snug">Regulated industries: caution as both friction and opportunity</h3>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <p className={typography.bodySmall}>
                Regulated sectors (financial services, healthcare, insurance, public sector) show
                more cautious deployment and more emphasis on security, governance, and
                proof-of-value. <strong>One 2025 survey found AI adoption in support operations
                running at 92% in technology firms but only 58% in regulated industries — a
                34-point gap</strong> attributed to compliance and security review rather than
                lack of interest<CitationLink id={57} />. <strong>Governance gaps coexist with
                &ldquo;shadow AI&rdquo;</strong> — employees using unsanctioned personal tools;{" "}
                <strong>one survey of finance leaders found 92% had implemented or planned AI but
                only 43% had a formal AI governance framework</strong><CitationLink id={59} />.
                The caution comes down to lopsided stakes: in a regulated sector a wrong AI
                output — a compliance breach, a mis-advised customer, a leaked record — costs the
                firm dearly, while a right one helps only at the margin,{" "}
                <strong>so slow and governed is the rational posture.</strong> That same
                lopsidedness produces shadow AI: when the sanctioned tools lag, employees quietly
                route around them with consumer apps, and the governance gap and the adoption
                pressure turn out to be one behavior seen from two sides. All of it feeds demand
                for sector-specific compliance skills. And{" "}
                <strong>some of what reads as a gap is just appropriate restraint — a hospital or
                a bank that waits until a system is auditable isn&apos;t behind, it&apos;s being
                careful</strong>, and scoring it against a tech firm&apos;s adoption rate mistakes
                prudence for lag.
              </p>
            </div>

            <p className="text-xs text-muted-foreground/50 italic mt-4">Tier B/C</p>
          </motion.div>

          {/* 2.4 */}
          <motion.div
            id="barrier-2-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="bg-card rounded-xl border border-border shadow-sm p-6 mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-llpa-yellow/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-llpa-yellow" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-llpa-yellow">2.4</span>
                <h3 className="text-xl font-semibold text-foreground leading-snug">The strategic-clarity gap and post-purchase abandonment</h3>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <p className={typography.bodySmall}>
                <strong>Across tiers, the most frequently reported obstacle is deciding{" "}
                <em>where</em> and <em>how</em> to apply AI rather than understanding what it
                is.</strong> This aligns with the documented reasons projects fail:{" "}
                <strong>Gartner attributes the ~30% post-proof-of-concept abandonment rate to
                poor data quality, inadequate risk controls, escalating costs, and unclear
                business value</strong> — failures of preparation and clarity, not of the
                technology itself<CitationLink id={19} /><CitationLink id={37} /> (the same
                difficulty of naming a return discussed in §2.1). Our members&apos; field observations
                echo this: clients are described as &ldquo;unsure what they want&rdquo; and as seeking
                general awareness over advanced topics. These are qualitative, anonymized
                observations from LLPA&apos;s member survey (Tier C) — a small, non-random sample of
                member providers describing their own clients; they illustrate but do not
                establish the pattern, which is corroborated by the Tier B surveys above.
              </p>
            </div>

            <div className="mt-4 p-4 bg-muted/60 rounded-lg border border-border/60">
              <p className="text-xs font-semibold text-foreground mb-1">
                Source note on the 60% license abandonment figure
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The abandonment shows up after purchase as well as before.{" "}
                <strong>Our members report that roughly 60% of purchased Copilot-type licenses
                go unused within about 90 days</strong> — a figure we include because it matches
                what they consistently see, but one that has to be read carefully. It is
                LLPA&apos;s own internal observational data, not an external benchmark: observations
                pooled from a few dozen member training providers describing their own client
                engagements, not a structured survey with a defined sampling frame.{" "}
                <strong>The specific percentage should be treated as directional field texture
                rather than a measured rate</strong>, and weighed knowing it comes from a
                population with both direct visibility into the problem and a commercial interest
                in it. We report it for the corroboration; we flag its provenance and its sample
                because that honesty is the point.
              </p>
            </div>

            <p className="text-xs text-muted-foreground/50 italic mt-4">Tier C — see source note</p>
          </motion.div>

          {/* 2.5 The sector divide */}
          <motion.div
            id="barrier-2-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="bg-card rounded-xl border border-border shadow-sm p-6 mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-llpa-blue/10 flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-llpa-blue" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-llpa-blue">2.5</span>
                <h3 className="text-xl font-semibold text-foreground leading-snug">The sector divide</h3>
              </div>
            </div>

            <p className={`${typography.bodySmall} mb-4`}>
              Adoption varies as sharply by industry as it does by firm size, and — unlike many
              cross-country comparisons — this pattern holds on consistent measurement. The
              EU-wide ICT-usage survey (157,000 enterprises across 27 member states, reference
              year 2025) breaks adoption down by economic activity:
            </p>

            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="text-left py-3 pr-4 font-semibold">Sector (EU, 2025)</th>
                    <th className="text-left py-3 pl-4 font-semibold">Enterprises using ≥1 AI technology <span className="font-normal text-muted-foreground">(any use of text mining, ML, chatbots, computer vision, etc. — not deployed at scale)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sector: "Information and communication", adoption: "62.5%" },
                    { sector: "Professional, scientific and technical services", adoption: "40.4%" },
                    { sector: "Real estate", adoption: "24.8%" },
                    { sector: "Construction (lowest)", adoption: "10.8%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="py-3 pr-4 text-muted-foreground">{row.sector}</td>
                      <td className="py-3 pl-4 font-medium">{row.adoption}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic mb-5">
              Only two sectors exceed 25%; every other sector falls between 10.8% (construction)
              and 24.8% (real estate). Source: Eurostat, isoc_eb_ain2 (Dec 2025) — Tier A.<CitationLink id={12} />
            </p>

            <p className={`${typography.bodySmall} mb-4`}>
              There isn&apos;t enough cross-country firm-level sector data to lay this pattern out
              cleanly market by market. The most thorough single-country breakdown we found that
              lines up with the EU picture is the Netherlands: Statistics Netherlands&apos; AI Monitor
              2024 — measured independently, though on the same EU definition — shows the same
              broad shape, with knowledge and information services at the top and physical,
              site-based sectors at the bottom:
            </p>

            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="text-left py-3 pr-4 font-semibold">Sector (Netherlands, 2024)</th>
                    <th className="text-left py-3 pl-4 font-semibold">Firms using ≥1 AI technology <span className="font-normal text-muted-foreground">(any use — not deployed at scale)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sector: "Information and communication", adoption: "58.0%" },
                    { sector: "Specialist business services", adoption: "39.8%" },
                    { sector: "Financial services", adoption: "37.4%" },
                    { sector: "Trade", adoption: "23.2%" },
                    { sector: "Manufacturing", adoption: "18.0%" },
                    { sector: "Health and social care", adoption: "18.4%" },
                    { sector: "Transport and storage", adoption: "11.0%" },
                    { sector: "Construction", adoption: "8.9%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="py-3 pr-4 text-muted-foreground">{row.sector}</td>
                      <td className="py-3 pl-4 font-medium">{row.adoption}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic mb-5">
              Source: CBS (Statistics Netherlands), AI Monitor 2024 — Tier A.<CitationLink id={13} />
            </p>

            <div className="space-y-3">
              <p className={typography.bodySmall}>
                The roughly 6x gap between information/communication firms and construction —
                visible in the EU aggregate and echoed in the one national breakdown we could
                examine closely — is not a local peculiarity; it reflects how closely a sector&apos;s
                core work maps onto what current AI does well. Knowledge-and-language-heavy
                industries — software, professional services, finance — sit at the top because
                their day-to-day output is exactly the text, code, and analysis these systems
                generate. Physical and site-based industries — construction, hospitality,
                transport — sit at the bottom because the binding constraint there is rarely a
                document. This is the same fixed-cost and use-case logic from Sections 1.2 and
                2.4, seen along a different axis: the question is less &ldquo;how big is the firm&rdquo;
                than &ldquo;how much of its work is the kind AI can touch.&rdquo; Regulated sectors
                (finance, health) sit in the middle for the reasons set out in 2.3 — real
                applicability, held back by real caution.
              </p>
              <p className={typography.bodySmall}>
                Two caveats. First, these are EU-anchored figures; comparable government sector
                breakdowns are scarcer outside Europe, so the <em>pattern</em> should be read as
                globally indicative while the <em>percentages</em> are EU-specific. Second, the
                gap is partly understated everywhere, because in physical sectors a growing share
                of real AI use is embedded in software and equipment the firm already runs and
                would not report as &ldquo;adopting AI.&rdquo;
              </p>
            </div>

            <p className="text-xs text-muted-foreground/50 italic mt-4">
              Tier A, EU-anchored; treat the knowledge-vs-physical gradient as the durable finding
              and the exact percentages and rankings as European.
            </p>
          </motion.div>

          {/* 2.6 Sectors up close */}
          <motion.div
            id="barrier-2-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="bg-card rounded-xl border border-border shadow-sm p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-llpa-orange/10 flex items-center justify-center">
                <Building className="w-6 h-6 text-llpa-orange" />
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-llpa-orange">2.6</span>
                <h3 className="text-xl font-semibold text-foreground leading-snug">Sectors up close</h3>
              </div>
            </div>

            <p className={`${typography.bodySmall} mb-5`}>
              The cross-sector gradient is worth seeing at sector level, because the{" "}
              <em>shape</em> of the barrier differs even though the headline gap does not — which
              is why generic advice tends to fail.
            </p>

            <div className="space-y-4">
              <div>
                <p className={`${typography.bodySmall} font-semibold mb-1`}>Financial services</p>
                <p className={typography.bodySmall}>
                  Lead most league tables: S&P Global put financial-services AI deployment at 54%
                  in early 2025, up from 40% and ahead of the 46% cross-sector
                  average<CitationLink id={65} />, and EY-Parthenon found 77% of banks had
                  launched or soft-launched GenAI<CitationLink id={66} />.{" "}
                  <strong>The binding constraint is governance and legacy systems, not interest</strong>{" "}
                  — 68% of financial-services CTOs name legacy infrastructure as the biggest
                  obstacle<CitationLink id={68} />, and only ~46% of leaders qualify as Deloitte
                  &ldquo;pioneers&rdquo;<CitationLink id={67} />.
                </p>
              </div>

              <div>
                <p className={`${typography.bodySmall} font-semibold mb-1`}>Healthcare</p>
                <p className={typography.bodySmall}>
                  Use-case-dependent: a peer-reviewed survey of 43 US health systems found
                  clinical-documentation AI near-universal and imaging deployed at 90% of
                  organizations, but limited success on diagnosis<CitationLink id={69} />. At the
                  system level it is earlier still — roughly four in five US hospitals had not
                  broadly adopted AI<CitationLink id={70} />, and privacy, accuracy, and clinician
                  trust top the hesitations<CitationLink id={71} /><CitationLink id={72} />.{" "}
                  <strong>Where AI works here, uptake tracks trust and reimbursement rather than
                  capability.</strong>
                </p>
              </div>

              <div>
                <p className={`${typography.bodySmall} font-semibold mb-1`}>Manufacturing</p>
                <p className={typography.bodySmall}>
                  <strong>Shows the measurement problem in miniature</strong>: industry surveys
                  report 77%+ &ldquo;implementing AI to some extent&rdquo;<CitationLink id={74} /> while
                  government data has manufacturer use rising only from 1.8% to
                  13.9%<CitationLink id={73} /> — both true, they just measure different things.{" "}
                  <strong>The real constraint is physical</strong> — 58% of pilot delays come
                  from infrastructure readiness, not models<CitationLink id={76} />, and only 12%
                  of adopters reach enterprise scale<CitationLink id={75} />; in Germany,
                  manufacturing AI use ran at 10% against 30% in the information
                  economy<CitationLink id={77} />.
                </p>
              </div>

              <div>
                <p className={`${typography.bodySmall} font-semibold mb-1`}>Retail, public sector, professional services &amp; education</p>
                <p className={typography.bodySmall}>
                  In retail, <strong>AI is concentrated in content and merchandising but stalls
                  at the agent stage</strong> — 67% use it for content creation<CitationLink id={82} />,
                  yet only 2% have full-scale agent deployment<CitationLink id={83} />. The public
                  sector shows <strong>fast grassroots use but lagging institutional
                  integration</strong> — federal use cases rose from ~710 to
                  3,600+<CitationLink id={85} /> and employee use from 17% to
                  43%<CitationLink id={86} />, held back by budget, legacy systems, and
                  skills<CitationLink id={87} /><CitationLink id={88} /><CitationLink id={89} />.
                  Professional services <strong>adopt earliest, as the document-heavy work
                  predicts</strong> — 82% of legal respondents are open to generative
                  AI<CitationLink id={81} />. And education is{" "}
                  <strong>the starkest split between individual use and institutional
                  readiness</strong>: 88% of UK students used generative AI for assessments in
                  2025<CitationLink id={99} /> and institutional adoption jumped from 49% to
                  66%<CitationLink id={101} />, yet{" "}
                  <strong>only ~10% of institutions had any AI-use guidelines</strong><CitationLink id={102} />.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground/50 italic mt-4">Tier B/C</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BarriersToAdoption;
