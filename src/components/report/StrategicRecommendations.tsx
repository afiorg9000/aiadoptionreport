import { motion } from "framer-motion";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Briefcase, 
  BookOpen, 
  Store, 
  Radio, 
  HeartHandshake,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
  Building2,
  Factory,
  Landmark,
  Scale,
  GraduationCap,
  Layers,
  GitBranch,
  Cpu,
  Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CitationLink from "./CitationLink";
import SectionHeader from "./SectionHeader";
import { subsectionStyles, cardStyles } from "./styles";

const StrategicRecommendations = () => {
  return (
    <section id="section-6" className="py-24 bg-background">
      <div className="container">
        <SectionHeader
          sectionNumber={6}
          label="Section 6"
          title="Strategic Recommendations"
          subtitle="Expand from Training Provider to Offer Strategic Advisory and Implementation Consulting"
          id="section-6-header"
        />

        <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
        {/* Strategic Vision */}
        <motion.div
          id="transformation-imperative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Strategic Vision 2026-2027
          </h3>
          <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">The Core Challenge</h4>
                <p className="text-muted-foreground mb-4">
                  training providers currently operate primarily as training providers in a market where training alone is insufficient. The evidence is clear:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-llpa-orange" />
                    <span>88% of organizations use AI, but only 6% are "high performers" capturing significant value<CitationLink id={393} /></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-llpa-blue" />
                    <span>64% of providers report clients lack strategic clarity on AI goals—they need strategic guidance, not more courses</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-llpa-yellow" />
                    <span>60% of Copilot licenses go unused within 90 days<CitationLink id={157} />—training after adoption failure has limited impact</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-llpa-green" />
                    <span>Organizations don't lack awareness; they lack implementation capability, strategic clarity, and adoption support</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">The Strategic Response</h4>
                <p className="text-muted-foreground mb-4">
                  training providers and its members must evolve from organizations that teach about AI to organizations that enable AI transformation. This requires fundamental shifts in:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-llpa-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="w-3.5 h-3.5 text-llpa-green" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Value Proposition</p>
                      <p className="text-sm text-muted-foreground">From "We train your people" → "We accelerate your AI transformation"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-llpa-blue/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-llpa-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Revenue Model</p>
                      <p className="text-sm text-muted-foreground">From course sales → recurring advisory relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-llpa-yellow/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-llpa-yellow" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Client Engagement</p>
                      <p className="text-sm text-muted-foreground">From post-purchase remediation → pre-deployment strategic partnership</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-llpa-orange/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5 text-llpa-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Delivery</p>
                      <p className="text-sm text-muted-foreground">From content delivery → outcome accountability</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-2">Why This Transformation Is Urgent</h4>
                <p className="text-sm text-muted-foreground mb-3">Two forces are converging:</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">1. Commoditization Pressure</p>
                    <p className="text-sm text-muted-foreground">
                      Free resources are proliferating (Microsoft Learn, YouTube tutorials, ChatGPT's built-in help). Per-learner training spending declined 19% from $954 (2023) to $774 (2024)<CitationLink id={220} />. Organizations struggle to justify premium pricing for content comparable to free alternatives.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">2. The "Missing Middle" Opportunity</p>
                    <p className="text-sm text-muted-foreground">
                      Mid-market enterprises ($50M-$500M revenue) desperately need strategic AI guidance but can't afford McKinsey or Deloitte. training providers can fill this gap—premium to training but accessible to mid-market.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </motion.div>

        {/* Part A: Industry associations Imperatives */}
        <motion.div
          id="part-a"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Building2 className="h-7 w-7 text-primary" />
            Part A: Strategic Imperatives for Industry associations
          </h3>

          <div className="space-y-6">
            {/* Imperative 1 */}
            <Card id="central-1">
              <CardHeader className="bg-llpa-blue/10">
                <CardTitle>
                  1. Develop training providers AI Transformation Methodology
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-foreground mb-2">The Need</h5>
                  <p className="text-sm text-muted-foreground">
                    Individual members shouldn't each develop assessment tools and consulting frameworks independently. Industry associations should develop core intellectual property that members can adopt and customize for their markets and clients. Central investment enables higher-quality frameworks than individual members could afford.
                  </p>
                </div>

                <h5 className="font-semibold text-foreground">Core Frameworks to Develop:</h5>
                <div className="space-y-4">
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2">training providers AI Readiness Assessment</h6>
                    <p className="text-sm text-muted-foreground">
                      Standardized diagnostic covering organizational readiness (data quality, technical infrastructure, skills inventory), use case discovery and prioritization, vendor evaluation criteria, quick-win identification, competitive benchmarking, and team capability assessment. Addresses the finding that 64% of providers report clients lack strategic clarity on AI goals.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2">training providers Change Readiness Diagnostic</h6>
                    <p className="text-sm text-muted-foreground">
                      Framework to identify organizational resistance patterns. Research shows 70% of AI initiatives fail due to employee pushback or inadequate management support<CitationLink id={399} />, and 74% of companies struggle to scale AI value with roughly 70% of challenges stemming from people and process issues<CitationLink id={400} />.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2">training providers AI ROI Calculator</h6>
                    <p className="text-sm text-muted-foreground">
                      Business case development tools to help clients justify training investment—addressing the finding that organizations struggle to articulate expected ROI.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2">Additional Frameworks</h6>
                    <p className="text-sm text-muted-foreground">
                      Organizational readiness diagnostic, use case discovery framework, vendor evaluation and bullshit detector, quick-win identification tool, decision frameworks, competitive benchmarks, team capability assessment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Imperative 2 */}
            <Card id="central-2">
              <CardHeader className="bg-llpa-blue/10">
                <CardTitle>
                  2. Educate Members to Have Baseline Knowledge on AI
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-foreground mb-2">The Need</h5>
                  <p className="text-sm text-muted-foreground">
                    Members need ongoing education to stay current with the rapidly evolving AI landscape and to learn from each other's experiences implementing AI solutions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      AI Salons
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Regular gatherings (virtual and in-person) where training providers focuses on helping members understand and/or implement relevant themes or initiatives, as well as have SMEs share experiences, discuss emerging trends, and learn from each other's successes and failures.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Training and/or Workshops
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Structured learning sessions to build member capabilities that can help in conducting assessments, facilitating strategy sessions, and delivering advisory services. Deep-dives on Claude, Gemini, and other tools and how to safely use them internally as well as many more things.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Imperative 3 */}
            <Card id="central-3">
              <CardHeader className="bg-llpa-blue/10">
                <CardTitle>
                  3. Create Member Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-foreground mb-2">The Opportunity</h5>
                  <p className="text-sm text-muted-foreground">
                    Members are already developing valuable AI initiatives, tools, and solutions internally. A central marketplace enables members to share and monetize these innovations across training providers.
                  </p>
                </div>

                <h5 className="font-semibold text-foreground">Marketplace Components:</h5>
                <div className="space-y-4">
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Store className="h-4 w-4 text-primary" />
                      Best Initiatives Repository
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Documented case studies of successful AI implementations members have deployed—both internal (productivity tools, marketing automation) and client-facing (assessment processes, training programs). This can help in selling customer success to customers as well as for internal use.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-primary" />
                      Tools and Templates
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Member and training providers developed tools available for licensing or sharing. Other members can implement internally or resell. Examples: Custom courses for specific industries, software tools and platforms, consulting methodologies and frameworks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Imperative 4 */}
            <Card id="central-4">
              <CardHeader className="bg-llpa-blue/10">
                <CardTitle>
                  4. Launch the AI Channel
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-foreground mb-2">The Opportunity</h5>
                  <p className="text-sm text-muted-foreground">
                    Create a unified digital presence for the industry's AI transformation offerings—serving both as a resource hub for clients and a lead generation platform for members.
                  </p>
                </div>

                <h5 className="font-semibold text-foreground">AI Channel Components:</h5>
                <div className="space-y-4">
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Radio className="h-4 w-4 text-primary" />
                      Content Hub
                    </h6>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Market intelligence and trend reports</li>
                      <li>• Best practice guides and frameworks</li>
                      <li>• Case studies showcasing member success stories</li>
                      <li>• Webinars and thought leadership content</li>
                    </ul>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-primary" />
                      Learning Pathways
                    </h6>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Curated course recommendations by role, industry, and maturity level</li>
                      <li>• Self-assessment tools for organizations to identify their needs</li>
                    </ul>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Member Directory
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Searchable directory of training providers by geography, specialty, and capability.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Lead Generation
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Inbound inquiries routed to appropriate regional members. Shared lead pool for enterprise opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Imperative 5 */}
            <Card id="central-5">
              <CardHeader className="bg-llpa-blue/10">
                <CardTitle>
                  5. Implement Member Support Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <h5 className="font-semibold text-foreground">Shared Resources:</h5>
                <div className="space-y-4">
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      training providers AI Curriculum Library
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Central repository of member-developed curriculum available for adoption and customization.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-primary" />
                      Asset Library
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Shared case studies and best practices for member use.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Part B: Member Imperatives */}
        <motion.div
          id="part-b"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Users className="h-7 w-7 text-primary" />
            Part B: Strategic Imperatives for training providers Members
          </h3>
          <p className="text-muted-foreground mb-6">
            The following imperatives represent a starting point for members. Each member should assess which imperatives are most relevant to their market tier, client base, and current capabilities, then prioritize accordingly. Not every imperative will apply equally to every member.
          </p>

          <div className="space-y-6">
            {/* Member Imperative 1 */}
            <Card id="member-1">
              <CardHeader className="bg-secondary/50">
                <CardTitle>
                  1. Adopt Strategic Advisory Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-foreground mb-2">The Opportunity</h5>
                  <p className="text-sm text-muted-foreground">
                    Industry associations is developing assessment frameworks and consulting methodologies (Imperative 1, Part A). Members should adopt these tools to position upstream of training purchases.
                  </p>
                </div>

                <h5 className="font-semibold text-foreground">Implementation Consulting Services:</h5>
                <p className="text-sm text-muted-foreground mb-4">Move beyond training-only engagements to consulting with the following methods:</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-llpa-green/15 flex items-center justify-center flex-shrink-0">
                        <HeartHandshake className="w-3.5 h-3.5 text-llpa-green" />
                      </div>
                      Method 1: Post-Purchase Adoption Services
                    </h6>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-amber-600">The Crisis:</span> 60% of Copilot licenses go unused within 90 days<CitationLink id={157} />.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bundle training with 90-day post-implementation support to address license abandonment.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-llpa-blue/15 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-3.5 h-3.5 text-llpa-blue" />
                      </div>
                      Method 2: "Rescue Packages"
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Develop "rescue packages" for failed AI deployments as productized service. Structure as: adoption audit → recovery plan → power user bootcamp → workflow redesign → measurement iteration.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-llpa-yellow/15 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-3.5 h-3.5 text-llpa-yellow" />
                      </div>
                      Method 3: Bundled Training + Support
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Move from training-only to training + adoption support bundles. Vodafone case study shows 77% of Copilot users report productivity gains, average 3 hours/week saved<CitationLink id={129} />.
                    </p>
                  </div>
                </div>

                <h5 className="font-semibold text-foreground mb-3">Advisory Framework by Market Tier:</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-foreground">
                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Market Tier</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Focus</th>
                        <th className="text-left py-3 pl-4 font-semibold text-foreground">Advisory Components</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border bg-muted/30">
                        <td className="py-3 pr-4 font-medium text-foreground">Tier 4 (Nascent)</td>
                        <td className="py-3 px-4 text-foreground">AI awareness &amp; digital foundations</td>
                        <td className="py-3 pl-4 text-muted-foreground">Basic readiness assessment, executive education, ROI justification support, use case identification</td>
                      </tr>
                      <tr className="border-b border-border bg-orange-500/10">
                        <td className="py-3 pr-4 font-medium text-foreground">Tier 3 (Emerging)</td>
                        <td className="py-3 px-4 text-foreground">Foundational literacy &amp; tool adoption</td>
                        <td className="py-3 pl-4 text-muted-foreground">Readiness assessment, adoption planning, 30-day support, quick-win identification</td>
                      </tr>
                      <tr className="border-b border-border bg-yellow-500/10">
                        <td className="py-3 pr-4 font-medium text-foreground">Tier 2 (Advanced)</td>
                        <td className="py-3 px-4 text-foreground">Pilot-to-production &amp; scaling</td>
                        <td className="py-3 pl-4 text-muted-foreground">Full assessment suite, 90-day adoption support, change management, workflow redesign</td>
                      </tr>
                      <tr className="border-b border-border bg-green-500/10">
                        <td className="py-3 pr-4 font-medium text-foreground">Tier 1 (Leaders)</td>
                        <td className="py-3 px-4 text-foreground">Advanced implementation &amp; transformation</td>
                        <td className="py-3 pl-4 text-muted-foreground">Strategic advisory, multi-use case roadmap, ongoing partnership, advanced implementation consulting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Member Imperative 2 */}
            <Card id="member-2">
              <CardHeader className="bg-secondary/50">
                <CardTitle>
                  2. Develop Advanced Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-llpa-orange/10 border border-llpa-orange/30 p-4 rounded-xl">
                  <h5 className="font-semibold text-foreground mb-2">The Gap</h5>
                  <p className="text-sm text-muted-foreground">
                    89.8% of training providers portfolio is beginner/intermediate; only 10.1% is advanced/expert. Tier 1 markets explicitly request advanced content that doesn't exist. Global enterprise AI spending reached $154 billion in 2024, with 71% allocated to production implementations<CitationLink id={222} />.
                  </p>
                  <p className="text-sm font-medium text-foreground mt-2">
                    Target: Shift portfolio from 10% to 25% advanced/expert content within 18 months.
                  </p>
                </div>

                <h5 className="font-semibold text-foreground">Priority Courses to Develop:</h5>
                <div className="space-y-4">
                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-llpa-orange/15 text-llpa-orange border-llpa-orange/30">Priority 1</Badge>
                      <h6 className="font-medium text-foreground">Production RAG Implementation</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      71% of organizations implementing RAG cite "lack of in-house expertise" as primary barrier<CitationLink id={226} />. RAG engineers earn 64% premium ($180,000-$250,000 vs. $110,000-$140,000)<CitationLink id={236} />.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Course content:</span> Vector database selection and optimization, chunking strategies, retrieval tuning, context management, evaluation frameworks, production scaling.
                    </p>
                  </div>

                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-orange-500/10 text-orange-700 border-orange-500/20">Priority 2</Badge>
                      <h6 className="font-medium text-foreground">Agentic AI & Autonomous Systems</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      79% of organizations have deployed or are piloting AI agents (up from 23% in 2023)<CitationLink id={239} />. Enterprise agentic AI market projected to reach $47.1 billion by 2027 (55.8% CAGR)<CitationLink id={240} />.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Course content:</span> Multi-agent architectures, planning and reasoning frameworks (ReAct achieves 27% higher task completion<CitationLink id={246} />), tool use and function calling, memory systems, agent evaluation, safety and control.
                    </p>
                  </div>

                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20">Priority 3</Badge>
                      <h6 className="font-medium text-foreground">LLMOps for Production</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      85% of AI projects fail to move to production, with "lack of MLOps capabilities" cited in 73% of failures<CitationLink id={263} />.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Course content:</span> CI/CD for LLM applications, model versioning, monitoring (latency, cost, quality), cost optimization techniques (caching reduces costs 40-60%<CitationLink id={268} />, prompt compression 25-35% token reduction<CitationLink id={269} />, model routing saves 85%<CitationLink id={270} />).
                    </p>
                  </div>

                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-500/10 text-green-700 border-green-500/20">Priority 4</Badge>
                      <h6 className="font-medium text-foreground">Fine-Tuning & Model Customization</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      67% of enterprises are fine-tuning or planning to within 12 months<CitationLink id={253} />.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Course content:</span> Decision frameworks (when to fine-tune vs. prompt engineering vs. RAG), data preparation, training approaches (LoRA, QLoRA), evaluation, deployment.
                    </p>
                  </div>

                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-500/10 text-blue-700 border-blue-500/20">Priority 5</Badge>
                      <h6 className="font-medium text-foreground">Open-Source AI Ecosystem</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      58% of enterprises will use open-source LLMs by 2026<CitationLink id={295} />.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Course content:</span> Hugging Face ecosystem, framework comparison (LangChain vs. LlamaIndex vs. Haystack), self-hosted inference optimization, production serving.
                    </p>
                  </div>
                </div>

                <div className="bg-llpa-blue/10 p-4 rounded-xl mt-4">
                  <h5 className="font-semibold text-foreground mb-2">Skill Progression Pathways</h5>
                  <p className="text-sm text-muted-foreground mb-3">Structure as journeys, not isolated courses:</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <Badge variant="outline">Foundation (AI Literacy)</Badge>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline">Practitioner (Prompt Engineering, AI for [Role])</Badge>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline">Specialist (Production RAG, Agentic AI, LLMOps)</Badge>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline">Expert (Multi-Model Architecture, AI Strategy)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Member Imperative 3 */}
            <Card id="member-3">
              <CardHeader className="bg-secondary/50">
                <CardTitle>
                  3. Diversify Beyond Microsoft
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-llpa-orange/10 border border-llpa-orange/30 p-4 rounded-xl">
                  <h5 className="font-semibold text-foreground mb-2">The Risk</h5>
                  <p className="text-sm text-muted-foreground">
                    46.4% Microsoft concentration creates vendor dependency. Meanwhile, 68% of enterprises use 2+ LLM providers (up from 23% in 2023)<CitationLink id={297} />. training providers has zero Anthropic courses (42% Fortune 500 adoption), only 13 Google courses (1.5%) despite 3B+ Workspace users, and no open-source training.
                  </p>
                  <p className="text-sm font-medium text-foreground mt-2">
                    Target: Reduce Microsoft from 46.4% to 35% by end 2027 through addition of new vendor content (not reduction of Microsoft).
                  </p>
                </div>

                <h5 className="font-semibold text-foreground">Priority Training Tracks to Develop:</h5>
                <div className="space-y-4">
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-purple-600" />
                      Anthropic Claude Track
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Model family overview, prompt engineering for Claude (achieves 34% better reasoning vs. GPT-4 on analysis tasks<CitationLink id={316} />), API deep-dive, enterprise features, migration strategies.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      Google Gemini & Vertex AI Track
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Gemini models (including 1M token context), Workspace integration, Gemini API development, Vertex AI platform, Model Garden access to 100+ foundation models.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-green-600" />
                      OpenAI API & ChatGPT Enterprise Track
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Assistants API, function calling, embeddings and fine-tuning, cost optimization, enterprise administration, governance frameworks.
                    </p>
                  </div>
                  <div className="border border-border p-4 rounded-xl">
                    <h6 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-orange-600" />
                      Multi-Model Strategy
                    </h6>
                    <p className="text-sm text-muted-foreground">
                      Model selection frameworks, cost optimization through intelligent routing (organizations save 45-65% vs. single-vendor<CitationLink id={332} />), fallback architectures, vendor risk management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Member Imperative 4 */}
            <Card id="member-4">
              <CardHeader className="bg-secondary/50">
                <CardTitle>
                  4. Build Industry Vertical Depth
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-foreground mb-2">The Evidence</h5>
                  <p className="text-sm text-muted-foreground">
                    55% of providers report strong demand for industry-customized training. Industry-specific courses achieve 3.2x higher completion rates and command 30-50% pricing premium. Yet only 73 courses (8.2%) target specific industries.
                  </p>
                  <p className="text-sm font-medium text-foreground mt-2">
                    Target: Launch 4 verticals with 6-10 courses each by end 2027.
                  </p>
                </div>

                <h5 className="font-semibold text-foreground">Priority Verticals:</h5>
                <div className="space-y-4">
                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <h6 className="font-medium text-foreground">Financial Services</h6>
                      <Badge className="bg-llpa-orange/15 text-llpa-orange border-llpa-orange/30 text-xs">Highest Priority</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      AI spending $52.3B (2024) → $89.7B (2027)<CitationLink id={339} />; 84% cite lack of AI talent as barrier<CitationLink id={345} />.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Courses:</span> AI for Banking & Lending, AI for Insurance, AI for Asset Management, AI Governance for Financial Services.
                    </p>
                  </div>

                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Factory className="h-5 w-5 text-orange-600" />
                      <h6 className="font-medium text-foreground">Manufacturing & Industrial</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      AI spending $47.1B (2024) → $94.2B (2027)<CitationLink id={347} />; clear ROI metrics (uptime, defect rates, throughput).
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Courses:</span> AI for Predictive Maintenance, AI for Quality Control (99.2% vs. 94% human<CitationLink id={350} />), AI for Supply Chain.
                    </p>
                  </div>

                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Landmark className="h-5 w-5 text-purple-600" />
                      <h6 className="font-medium text-foreground">Public Sector & Government</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      AI spending $29.3B (2024) → $58.1B (2027)<CitationLink id={369} />; high-value government contracts.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Courses:</span> AI for Citizen Services, AI for Government Operations, AI Governance for Public Sector.
                    </p>
                  </div>

                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Scale className="h-5 w-5 text-green-600" />
                      <h6 className="font-medium text-foreground">Legal Services</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      AI spending $8.7B (2024) → $21.4B (2027) at 35.4% CAGR (fastest growing)<CitationLink id={355} />; high willingness to pay.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Courses:</span> AI for Legal Research (65% time reduction<CitationLink id={356} />), AI for Contract Lifecycle Management, AI for E-Discovery.
                    </p>
                  </div>

                  <div className="border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-cyan-600" />
                      <h6 className="font-medium text-foreground">Education & Academic</h6>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      EdTech AI market $4.2B (2024) → $12.1B (2027) at 42% CAGR; 67% of higher ed exploring AI but cite lack of training resources<CitationLink id={163} />.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Courses:</span> AI for Teaching & Learning (5.9 hrs/week saved<CitationLink id={418} />), AI for Academic Administration, AI Governance for Education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Summary Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-llpa-blue text-white rounded-full flex items-center justify-center shrink-0">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">The Path Forward</h4>
                  <p className="text-muted-foreground mb-4">
                    The strategic recommendations outlined above represent a comprehensive transformation agenda. Success requires coordinated action between Industry associations and individual members, with each playing complementary roles in building the infrastructure, capabilities, and offerings needed to expand from training providers to offer strategic advisory and implementation consulting.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The market opportunity is clear: organizations desperately need strategic AI guidance they can afford. training providers and its members are uniquely positioned to fill this gap—but only if they act decisively to build advisory capabilities, develop advanced curriculum, diversify beyond Microsoft, and create industry-specific offerings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicRecommendations;
