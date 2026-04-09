import { motion } from "framer-motion";
import { PieChart as PieChartIcon, Shield, AlertTriangle, Lightbulb, Target, TrendingUp, BookOpen, Layers, Bot, Cloud, Cpu, Code, Zap, Users, Video, GraduationCap, Database, Wrench, Server, Building2, Factory, Scale, Landmark, School } from "lucide-react";
import CitationLink from "./CitationLink";
import SectionHeader from "./SectionHeader";
import MethodologyBlock from "./MethodologyBlock";
import InsightBox from "./InsightBox";
import { subsectionStyles, cardStyles } from "./styles";

const PLATFORM_COLORS: Record<string, string> = {
  "Microsoft Copilot": "#209FDF", // training providers Blue
  "ChatGPT/OpenAI API": "#73BF39", // training providers Green
  "Claude": "#E85C2B", // training providers Orange
  "Google": "#E8B520", // training providers Yellow
  "AWS": "#DC2626", // Red
};

const vendorDistribution = [
  { vendor: "Microsoft", count: 414, percentage: "46.4%", assessment: "Over-concentration risk", color: "text-warning" },
  { vendor: "Member-Created", count: 253, percentage: "28.4%", assessment: "Strategic differentiation", color: "text-success" },
  { vendor: "AWS", count: 30, percentage: "3.4%", assessment: "Under-represented relative to market share", color: "text-destructive" },
  { vendor: "Google Cloud", count: 13, percentage: "1.5%", assessment: "Significantly under-represented; critical gap given Gemini's enterprise momentum and Google Workspace's 3+ billion user base", color: "text-destructive" },
  { vendor: "CertNexus", count: 45, percentage: "5.0%", assessment: "Valuable soft skills complement", color: "text-muted-foreground" },
  { vendor: "Other Vendors", count: 150, percentage: "16.8%", assessment: "Fragmented; includes CompTIA, NVIDIA, Salesforce, others", color: "text-muted-foreground" },
  { vendor: "Anthropic Claude", count: 0, percentage: "0%", assessment: "No coverage despite enterprise adoption", color: "text-destructive" },
  { vendor: "Open Source", count: 0, percentage: "0%", assessment: "No coverage (Hugging Face, LangChain, etc.)", color: "text-destructive" },
];

const microsoftStrengths = [
  { category: "Microsoft 365 Copilot", courses: "120+", description: "covering all applications (Word, Excel, PowerPoint, Outlook, Teams, OneNote)" },
  { category: "Copilot Studio", courses: "35+", description: "on custom copilot development" },
  { category: "Azure AI Services", courses: "80+", description: "on Azure OpenAI, Cognitive Services, Machine Learning" },
  { category: "Power Platform AI", courses: "45+", description: "on AI Builder, Power Automate AI features" },
];

const platformGapComparison = [
  { platform: "Microsoft Copilot", adoption: "79%", courses: 414, percentage: "46.4%", gap: false },
  { platform: "ChatGPT/OpenAI API", adoption: "71%", courses: 8, percentage: "0.9%", gap: true },
  { platform: "Claude", adoption: "42%", courses: 0, percentage: "0%", gap: true },
  { platform: "Google", adoption: "65%", courses: 13, percentage: "1.5%", gap: true },
  { platform: "AWS", adoption: "58%", courses: 30, percentage: "3.4%", gap: true },
];

const claudeCourses = [
  {
    title: "Claude Fundamentals for Enterprise",
    level: "Intermediate",
    topics: [
      "Model family: Claude Sonnet 4.5 (most capable), Claude Opus 4 (complex reasoning), Claude Haiku 4 (fast & cost-effective)",
      "Prompt engineering for Claude: Best practices specific to Claude's training; constitutional AI principles",
      "Use case alignment: When to use Claude vs. GPT-4 (Choose Claude for complex analysis, long documents, nuanced reasoning)",
    ],
    citations: [315, 316],
  },
  {
    title: "Claude API & Enterprise Integration",
    level: "Advanced",
    topics: [
      "Claude API deep-dive: Streaming responses; function calling; prompt caching (reducing costs by 90%)",
      "Enterprise features: Claude for Work data privacy; SSO integration; audit logs; content moderation",
      "Migration strategies: Moving from GPT-4 to Claude; cost analysis; performance comparison",
    ],
    citations: [317],
  },
];

const openaiCourses = [
  {
    title: "Advanced OpenAI API Development",
    level: "Advanced",
    topics: [
      "Assistants API: Building stateful conversational agents; file retrieval; code interpreter",
      "Function calling: Tool use patterns; error handling; CRM integration, database queries",
      "Embeddings & fine-tuning: Fine-tuned GPT-3.5 often outperforms base GPT-4 at 85% lower cost",
      "Cost optimization: Prompt caching; token management; model selection strategies",
    ],
    citations: [321],
  },
  {
    title: "Custom GPTs & AI Agents for Business",
    level: "Intermediate",
    topics: [
      "GPT Builder: Creating custom GPTs for specific business workflows; knowledge base integration",
      "AI Agents: Building autonomous agents for customer support, research, and data analysis",
      "Team deployment: Sharing GPTs across organizations; access controls; usage monitoring",
      "Prompt libraries: Building reusable prompt templates for sales, marketing, HR, and operations",
    ],
    citations: [322, 323],
  },
];

const geminiCourses = [
  {
    title: "Google Gemini for Workspace Productivity",
    level: "Intermediate",
    topics: [
      "Gemini models: Gemini 2.5 Pro (1M token context), Gemini 2.5 Flash (fast & cost-effective)",
      "Workspace integration: Gemini in Gmail, Docs, Sheets, Slides, Meet",
      "Prompt engineering for Gemini: Multimodal prompting (text + image + video)",
      "Use case workshops: Marketing, Sales, HR, Finance teams with customized examples",
    ],
    citations: [324, 325],
  },
  {
    title: "Vertex AI Platform & Custom AI Solutions",
    level: "Advanced",
    topics: [
      "Vertex AI overview: Managed ML platform; model deployment; MLOps on Google Cloud",
      "Gemini API development: Building custom applications; streaming; function calling",
      "Model Garden: Access to 100+ foundation models through single platform",
      "Production deployment: Scaling to millions of requests; cost optimization; monitoring",
    ],
    citations: [326, 327],
  },
];

const multiModelCourse = {
  title: "Enterprise Multi-Model AI Architecture",
  audience: "CTOs, Enterprise Architects, AI Product Managers, Technical Program Managers",
  level: "Advanced",
  modules: [
    {
      name: "Model Selection & Strategy",
      topics: [
        "GPT-4 Turbo: $10/MTok input; strengths: code generation, broad knowledge, multimodal",
        "Claude 3.5 Sonnet: $3/MTok input; strengths: analysis, reasoning, long-context (200K tokens)",
        "Gemini 2.5 Pro: $3.50/MTok input; strengths: multimodal, 1M context, Google ecosystem",
        "Llama 3 70B (self-hosted): $0.002-0.004/MTok; strengths: cost, data sovereignty",
        "Selection frameworks: Cost analysis, performance benchmarking, compliance mapping",
      ],
    },
    {
      name: "Multi-Model Operations",
      topics: [
        "Simple routing: Task complexity → model selection (60% cost reduction case study)",
        "Semantic routing: Using embeddings to classify queries; 92% classification accuracy",
        "Fallback architectures: 99.97% uptime through multi-vendor redundancy",
        "Cost-based fallback: Try cheaper model first; escalate if needed",
      ],
    },
    {
      name: "Cost Optimization Case Studies",
      topics: [
        "Financial services firm: 67% cost reduction through intelligent routing",
        "Healthcare provider: HIPAA compliance + 45% cost savings through regional model selection",
        "E-commerce platform: 58% cost reduction for 2M daily queries",
      ],
      citations: [329, 330, 331],
    },
    {
      name: "Vendor Risk Management",
      topics: [
        "Avoiding lock-in: Abstraction layers; swappable model backends; prompt portability",
        "Exit strategies: Migration paths; cost of switching; data portability",
        "SLA management: Tracking model reliability; automated failover",
      ],
    },
  ],
  validation: [
    { text: "37% of enterprises now use 5+ models in production (up from 29% last year)", citation: 441 },
    { text: "Enterprise model usage: 69% Google, 55% OpenAI, 38% Meta—most use multiple models simultaneously", citation: 442 },
    { text: "Anthropic (40%), OpenAI (27%), and Google (21%) together account for 88% of enterprise LLM API spend", citation: 440 },
    { text: "Model API spending more than doubled to $8.4B in 2025", citation: 426 },
    { text: "72% of enterprises plan to increase LLM spending in 2025", citation: 442 },
    { text: "37% of enterprises spend $250,000+ annually on LLMs; 73% spend over $50,000", citation: 442 },
    { text: "Companies using multi-model strategies achieve average ROI of $3.70 per dollar invested; top performers reach $10.30", citation: 443 },
    { text: "Enterprise LLM market projected to grow from $5.9B (2025) to $48-71B by 2034-35 (28-30% CAGR)", citation: 444 },
  ],
};

const PortfolioAnalysis = () => {
  return (
    <section id="section-4" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          sectionNumber={4}
          label="Section 4"
          title="training providers Course Portfolio Analysis"
          id="section-4-header"
        />

        {/* Data Source */}
        <MethodologyBlock
          methodology="training providers AI Courses Database, reflecting member submissions through September 2025."
          note="Members may have developed additional courses October-December 2025 not captured in this analysis."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${cardStyles.default} mb-12 -mt-4`}
        >
          <p className="font-body text-lg text-foreground">
            <strong>Total Courses Analyzed:</strong> <span className="text-gold font-semibold">892</span>
          </p>
        </motion.div>

        {/* Finding 1: Vendor Concentration */}
        <div id="finding-1" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <PieChartIcon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Finding 1: Vendor Concentration Creates Both Competitive Advantage and Strategic Risk
              </h3>
            </div>

            <p className="font-body text-lg text-foreground font-medium mb-8">
              <span className="text-gold font-bold">46.4%</span> of the industry's portfolio is Microsoft-focused, creating the alliance's deepest competitive advantage while simultaneously exposing members to significant vendor dependency risk.
            </p>

            {/* Vendor Distribution Table */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Current State: Vendor Distribution
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Vendor</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Course Count</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Percentage</th>
                      <th className="text-left py-3 pl-4 font-semibold text-foreground">Strategic Assessment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorDistribution.map((row) => (
                      <tr key={row.vendor} className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">{row.vendor}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.count}</td>
                        <td className="py-3 px-4 text-gold font-semibold">{row.percentage}</td>
                        <td className={`py-3 pl-4 ${row.color}`}>{row.assessment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Critical Finding */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Critical Finding: 46.4% Microsoft concentration creates three risks
              </h4>
              <ul className="space-y-3 ml-7">
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive mt-1 font-semibold">1.</span>
                  <span><strong>Vendor dependency:</strong> Microsoft partnership changes (pricing, terms, content requirements) could devalue nearly half of training providers portfolio overnight</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive mt-1 font-semibold">2.</span>
                  <span><strong>Commoditization vulnerability:</strong> Microsoft Learn offers free Copilot training; as Microsoft improves free resources, the industry's paid Microsoft training must justify premium</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive mt-1 font-semibold">3.</span>
                  <span><strong>Multi-cloud gap:</strong> Enterprises adopt multiple AI platforms (ChatGPT Enterprise, Claude, Gemini) but training providers provides limited non-Microsoft alternatives</span>
                </li>
              </ul>

              <div className="mt-4 ml-7">
                <p className="font-body text-sm font-semibold text-foreground mb-2">Benchmark Context:</p>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Gartner reports 76% of enterprises use multiple cloud providers<CitationLink id={160} /></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>AWS Bedrock provides access to models from Anthropic, Meta, Stability AI, and Cohere on single platform</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Google's Vertex AI similarly offers multiple model access including PaLM, Gemini, and third-party models</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>the industry's 46% Microsoft concentration misaligns with enterprise multi-cloud reality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Portfolio Strength: Microsoft */}
            <div id="portfolio-strength-ms" className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Portfolio Strength: Microsoft Ecosystem Depth & Breadth (414 courses)
              </h4>
              <p className="font-body text-muted-foreground mb-4 ml-7">
                While Microsoft over-concentration represents a risk, the depth of Microsoft coverage also represents competitive strength:
              </p>

              <ul className="space-y-2 mb-6 ml-7">
                {microsoftStrengths.map((item, i) => (
                  <li key={i} className="font-body text-sm flex items-start gap-2">
                    <span className="text-success">•</span>
                    <span>
                      <strong className="text-foreground">{item.category}:</strong>{" "}
                      <span className="text-muted-foreground">{item.courses} {item.description}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 ml-7">
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-2">Competitive Differentiation:</p>
                  <ul className="space-y-2 font-body text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-success">•</span>
                      <span><strong>Depth exceeds vendor training:</strong> Microsoft Learn provides breadth but limited depth on advanced implementation patterns</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-success">•</span>
                      <span><strong>Cross-product integration:</strong> training providers courses teach integration across Microsoft stack while vendor training siloed by product</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-success">•</span>
                      <span><strong>Industry customization:</strong> Member-developed Microsoft courses include industry-specific examples lacking in generic vendor training</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-2">Evidence of Value:</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      <span>86% of providers report Copilot among top client requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      <span>79% of US enterprises use Microsoft Copilot<CitationLink id={167} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">•</span>
                      <span>Microsoft AI business unit: $13B annual revenue, 175% YoY growth<CitationLink id={168} /></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Critical Gap: Non-Microsoft */}
            <div id="critical-gap-non-ms" className="mb-8">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Critical Gap: Non-Microsoft Ecosystem Training
              </h4>
              <p className="font-body text-muted-foreground mb-6">
                training provider's 46.4% Microsoft concentration creates vendor dependency risk while missing significant market demand for multi-cloud and vendor-neutral AI training.
              </p>

              {/* Market Evidence */}
              <div className="space-y-6 mb-6">
                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-2">Enterprise Multi-Model Adoption is Standard Practice</p>
                  <p className="font-body text-sm text-muted-foreground mb-2">Andreessen Horowitz's 2024 State of GenAI report documents widespread multi-vendor strategies:</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-info mt-1">•</span>
                      <span>68% of enterprises use 2+ LLM providers in production (up from 23% in 2023)<CitationLink id={297} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info mt-1">•</span>
                      <span>41% plan to increase number of AI vendors in next 12 months<CitationLink id={298} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info mt-1">•</span>
                      <span>Average enterprise uses 3.2 different LLMs across their organization<CitationLink id={299} /></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-2">Why Organizations Use Multiple Models</p>
                  <p className="font-body text-sm text-muted-foreground mb-2">Gartner's 2025 AI Infrastructure Survey identifies four primary drivers:</p>
                  <ul className="space-y-2">
                    <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span><strong>Cost optimization:</strong> Using GPT-3.5 for simple tasks saves 60%<CitationLink id={300} /></span>
                    </li>
                    <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span><strong>Performance optimization:</strong> Claude excels at analysis, GPT-4 at code<CitationLink id={301} /></span>
                    </li>
                    <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span><strong>Avoiding vendor lock-in:</strong> 67% of CTOs cite diversification<CitationLink id={302} /></span>
                    </li>
                    <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span><strong>Regulatory compliance:</strong> 43% cite data residency requirements<CitationLink id={303} /></span>
                    </li>
                  </ul>
                </div>

                    <div>
                  <p className="font-body text-sm font-semibold text-foreground mb-3">Non-Microsoft Platforms Show Rapid Enterprise Growth</p>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Three major AI platforms are experiencing rapid enterprise adoption, yet the industry's portfolio has minimal coverage:
                  </p>
                  <ul className="space-y-2 font-body text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-llpa-orange mt-1.5 flex-shrink-0"></div>
                      <span><strong>Anthropic Claude:</strong> 32% enterprise market share (#1), yet training providers has 0 courses<CitationLink id={426} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-llpa-green mt-1.5 flex-shrink-0"></div>
                      <span><strong>OpenAI/ChatGPT:</strong> 1M+ business customers, 800M weekly users<CitationLink id={431} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-llpa-blue mt-1.5 flex-shrink-0"></div>
                      <span><strong>Google Gemini:</strong> 20-21% market share, 650M monthly users<CitationLink id={426} /><CitationLink id={435} /></span>
                    </li>
                      </ul>
                  <p className="font-body text-xs text-muted-foreground mt-3 italic">
                    See Recommended Curriculum Development below for detailed market validation and proposed training tracks.
                  </p>
                </div>
              </div>

              {/* Platform Gap Table */}
              <div className="mb-6">
                <p className="font-body text-sm font-semibold text-foreground mb-4">Training Market Severely Underserves Non-Microsoft Demand</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Platform</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Enterprise Adoption</th>
                        <th className="text-left py-3 pl-4 font-semibold text-foreground">training providers Courses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platformGapComparison.map((row) => (
                      <tr key={row.platform} className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">{row.platform}</td>
                          <td className="py-3 px-4 text-muted-foreground">{row.adoption}</td>
                          <td className="py-3 pl-4 text-muted-foreground">{row.courses} ({row.percentage})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>

              {/* Key Insight */}
              <div className="p-4 bg-gold/10 rounded-xl border border-gold/30">
                <p className="font-body text-sm text-foreground flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Key Insight:</strong> External research validates that the industry's Microsoft-heavy portfolio, while providing depth advantage, misaligns with enterprise multi-cloud reality where 68% of organizations use multiple AI vendors.
                  </span>
                </p>
              </div>
            </div>

            {/* Recommended Curriculum Development */}
            <div id="recommended-curriculum" className="mb-8">
              <h4 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" />
                Recommended Curriculum Development
              </h4>

              {/* 1. Anthropic Claude */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gold" />
                  </div>
                  <h5 className="font-display text-lg font-semibold text-foreground">1. Anthropic Claude Training Track</h5>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  {claudeCourses.map((course, i) => (
                    <div key={i} className="bg-card rounded-xl p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h6 className="font-display text-sm font-semibold text-foreground">{course.title}</h6>
                        <span className="text-xs px-2 py-1 bg-gold/20 text-gold rounded">{course.level}</span>
                      </div>
                      <ul className="space-y-1 mt-2">
                        {course.topics.map((topic, j) => (
                          <li key={j} className="font-body text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-gold mt-0.5">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2">
                        {course.citations.map(c => <CitationLink key={c} id={c} />)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gold/10 rounded-xl border border-gold/30">
                  <p className="font-body text-xs font-semibold text-foreground mb-2">Market Validation:</p>
                  <ul className="space-y-1 font-body text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>Anthropic now leads enterprise LLM market with 32% market share, overtaking OpenAI's 25%<CitationLink id={426} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>Claude captures 42% of developer market share for code generation—more than double OpenAI's 21%<CitationLink id={426} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>Anthropic revenue growth: $1B → $4B in six months; projected $2.2B ARR in 2025<CitationLink id={427} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>Enterprise adoption increased 7x since Claude 3 release in 2024<CitationLink id={428} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>60% of Fortune 500 companies now use Claude in productivity suites<CitationLink id={428} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span><strong>Training gap:</strong> Only 340 Claude courses exist globally vs. 2,400+ Copilot courses—7:1 undersupply ratio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>88% enterprise retention rate (industry average: 76%)<CitationLink id={429} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>25 billion+ API calls to Claude monthly, with 45% from enterprise customers<CitationLink id={427} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span className="text-muted-foreground">Yet training providers have 0 Claude courses</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. OpenAI */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-info" />
                  </div>
                  <h5 className="font-display text-lg font-semibold text-foreground">2. OpenAI API & ChatGPT Enterprise Track</h5>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  <strong>Current State:</strong> training providers has ~8 basic ChatGPT courses but lacks advanced API and enterprise deployment training.
                  <br />
                  <strong>Market Gap:</strong> 71% of enterprises use ChatGPT but IBM survey found 76% lack formal training on enterprise features<CitationLink id={319} />
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  {openaiCourses.map((course, i) => (
                    <div key={i} className="bg-card rounded-xl p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h6 className="font-display text-sm font-semibold text-foreground">{course.title}</h6>
                        <span className="text-xs px-2 py-1 bg-info/20 text-info rounded">{course.level}</span>
                      </div>
                      <ul className="space-y-1 mt-2">
                        {course.topics.map((topic, j) => (
                          <li key={j} className="font-body text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-info mt-0.5">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2">
                        {course.citations.map(c => <CitationLink key={c} id={c} />)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-info/10 rounded-xl border border-info/30">
                  <p className="font-body text-xs font-semibold text-foreground mb-2">Market Validation:</p>
                  <ul className="space-y-1 font-body text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>800 million weekly active users globally<CitationLink id={430} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>1 million+ business customers—fastest-growing business platform in history<CitationLink id={431} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>7 million+ ChatGPT for Work seats, up 9x year-over-year<CitationLink id={431} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>ChatGPT Enterprise message volume grew 8x year-over-year<CitationLink id={430} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>API reasoning token consumption per organization increased 320x in 12 months<CitationLink id={430} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>Custom GPT usage jumped 19x year-to-date, now accounting for 20% of enterprise messages<CitationLink id={432} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>Enterprise workers save 40-60 minutes per day with OpenAI products<CitationLink id={430} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>92% of Fortune 500 companies use OpenAI products or APIs<CitationLink id={433} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-info">•</span>
                      <span>OpenAI expects $12 billion in annual revenue in 2025<CitationLink id={434} /></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Google Gemini */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-steel/20 flex items-center justify-center">
                    <Cloud className="w-4 h-4 text-steel" />
                  </div>
                  <h5 className="font-display text-lg font-semibold text-foreground">3. Google Gemini & Vertex AI Track</h5>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  <strong>Market Opportunity:</strong> Google Workspace has 3+ billion users (9x larger than Microsoft 365's 345M paid seats). Yet training availability severely limited: Only 340+ Gemini courses globally vs. 2,400+ Microsoft Copilot courses<CitationLink id={325} />
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  {geminiCourses.map((course, i) => (
                    <div key={i} className="bg-card rounded-xl p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h6 className="font-display text-sm font-semibold text-foreground">{course.title}</h6>
                        <span className="text-xs px-2 py-1 bg-steel/20 text-steel rounded">{course.level}</span>
                      </div>
                      <ul className="space-y-1 mt-2">
                        {course.topics.map((topic, j) => (
                          <li key={j} className="font-body text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-steel mt-0.5">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2">
                        {course.citations.map(c => <CitationLink key={c} id={c} />)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-steel/10 rounded-xl border border-steel/30">
                  <p className="font-body text-xs font-semibold text-foreground mb-2">Market Validation:</p>
                  <ul className="space-y-1 font-body text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>350-650 million monthly active users across web and app<CitationLink id={435} /><CitationLink id={436} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>Google Cloud Vertex AI processed 90+ trillion tokens in December 2025—11x increase YoY<CitationLink id={437} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>46% of U.S. enterprises have adopted Gemini<CitationLink id={438} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>63% of Gemini usage comes from enterprise users<CitationLink id={439} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>41% of Fortune 500 companies have embedded Gemini in at least one department<CitationLink id={439} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>Healthcare and Finance seeing 3.4x growth in enterprise deployment in 2025<CitationLink id={438} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>Enterprise users save an average of 105 minutes per week<CitationLink id={436} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>Google Cloud revenue grew 34% driven by AI adoption<CitationLink id={436} /></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-steel">•</span>
                      <span>Google Gemini holds 20-21% enterprise LLM market share<CitationLink id={426} /><CitationLink id={440} /></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 4. Multi-Model */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-warning" />
                  </div>
                  <h5 className="font-display text-lg font-semibold text-foreground">4. Multi-Model AI Strategy & Orchestration</h5>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  <strong>Strategic Value:</strong> Organizations need decision frameworks for vendor selection and operational patterns for multi-model deployments
                </p>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h6 className="font-display text-base font-semibold text-foreground">{multiModelCourse.title}</h6>
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">{multiModelCourse.level}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mb-4">
                    <strong>Target Audience:</strong> {multiModelCourse.audience}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {multiModelCourse.modules.map((module, i) => (
                      <div key={i} className="bg-muted/30 rounded-xl p-3">
                        <p className="font-body text-sm font-semibold text-foreground mb-2">{module.name}</p>
                        <ul className="space-y-1">
                          {module.topics.slice(0, 3).map((topic, j) => (
                            <li key={j} className="font-body text-xs text-muted-foreground flex items-start gap-1">
                              <span className="text-warning mt-0.5">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                        {module.citations && (
                          <div className="mt-1">
                            {module.citations.map(c => <CitationLink key={c} id={c} />)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-muted/50 rounded-xl border border-border">
                    <p className="font-body text-xs font-semibold text-foreground mb-2">Market Validation:</p>
                    <ul className="space-y-1">
                      {multiModelCourse.validation.map((item, i) => (
                        <li key={i} className="font-body text-xs text-muted-foreground flex items-start gap-1">
                          <span className="text-foreground mt-0.5">•</span>
                          <span>{item.text}<CitationLink id={item.citation} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Training Gap: Market Need */}
            <div className="mb-8">
              <h4 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                AI Training Gap: Market Need
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                <strong>Critical Enterprise Challenge:</strong> The demand for AI-skilled workers far exceeds supply, creating unprecedented training needs.
              </p>
              <ul className="space-y-2 font-body text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>94% of leaders face AI-critical skill shortages today; one-third report gaps of 40%+<CitationLink id={446} /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>AI talent demand exceeds supply by 3.2:1 globally, with 1.6M+ open positions<CitationLink id={447} /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>Skills shortages may cost the global economy up to $5.5 trillion by 2026<CitationLink id={448} /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>Only 35% of employees have received any AI training in the past year<CitationLink id={449} /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>AI skills shortage went from #6 to #1 most scarce tech skill in 16 months—fastest jump in 15+ years<CitationLink id={450} /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>78% of ICT roles now list AI technical skills as requirements<CitationLink id={451} /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>AI roles command 56-67% higher salaries than comparable positions<CitationLink id={447} /><CitationLink id={448} /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>Generative AI job postings tripled year-over-year in early 2025<CitationLink id={450} /></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground">•</span>
                  <span>90% of engineering teams use AI coding tools; nearly half use two or more<CitationLink id={452} /></span>
                </li>
              </ul>
            </div>

            {/* Key Takeaway */}
            <div className="mb-8 p-4 bg-muted/50 rounded-xl border border-border">
              <p className="font-body text-sm text-foreground">
                <strong>Key Takeaway:</strong> training providers would be among the first to offer certified training across all major enterprise AI platforms, addressing a critical market gap as <span className="font-semibold">94%</span> of organizations report AI skills shortages and <span className="font-semibold">72%</span> plan to increase LLM spending in 2025.
              </p>
            </div>

            {/* Strategic Recommendations for Finding 1 */}
            <div className="bg-gold/5 rounded-xl p-6 border border-gold/20">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-gold" />
                Strategic Recommendations
              </h4>
              <ul className="space-y-3">
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">1.</span>
                  <span><strong>Develop Anthropic Claude Training Track</strong> as priority non-Microsoft offering</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">2.</span>
                  <span><strong>Create OpenAI API & ChatGPT Enterprise curriculum</strong> for 71% of enterprises using ChatGPT</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">3.</span>
                  <span><strong>Launch Google Gemini track</strong> to capture 3+ billion Google Workspace users</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">4.</span>
                  <span><strong>Develop Multi-Model AI Strategy course</strong> for enterprise architects and CTOs</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Finding 2: Skill Level Distribution */}
        <div id="finding-2" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Finding 2: Skill Level Distribution Optimized for Emerging Markets, Under-Serves Advanced Demand
              </h3>
            </div>

            <p className="font-body text-lg text-foreground font-medium mb-8">
              <span className="text-gold font-bold">89.8%</span> of the industry's portfolio targets beginner/intermediate learners, aligning well with Tier 3-4 markets but creating critical gaps in Tier 1 market demand.
            </p>

            {/* Skill Level Distribution Table */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Current State: Skill Level Distribution
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Skill Level</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Course Count</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Percentage</th>
                      <th className="text-left py-3 pl-4 font-semibold text-foreground">Market Alignment Assessment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">Beginner</td>
                      <td className="py-3 px-4 text-muted-foreground">393</td>
                      <td className="py-3 px-4 text-gold font-semibold">44.0%</td>
                      <td className="py-3 pl-4 text-success">Well-aligned with awareness-phase demand</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">Intermediate</td>
                      <td className="py-3 px-4 text-muted-foreground">409</td>
                      <td className="py-3 px-4 text-gold font-semibold">45.8%</td>
                      <td className="py-3 pl-4 text-success">Appropriate for adoption-phase markets</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">Advanced</td>
                      <td className="py-3 px-4 text-muted-foreground">64</td>
                      <td className="py-3 px-4 text-gold font-semibold">7.2%</td>
                      <td className="py-3 pl-4 text-destructive">Critical gap vs. Tier 1 market demand</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">Expert/Specialized</td>
                      <td className="py-3 px-4 text-muted-foreground">26</td>
                      <td className="py-3 px-4 text-gold font-semibold">2.9%</td>
                      <td className="py-3 pl-4 text-destructive">Insufficient for production AI implementations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Benchmark Context */}
              <div className="mt-4">
                <p className="font-body text-sm font-semibold text-foreground mb-2">Benchmark Context:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Tier 1 markets (Denmark 42.03% adoption, Netherlands ~25%, Singapore 62.5% non-SME) are moving beyond awareness phase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Member interviews from Tier 1 markets explicitly request "advanced use cases," "custom implementations," "production deployment training"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Yet only <strong>90 courses (10.1%)</strong> serve advanced/expert learners</span>
                  </li>
                </ul>
              </div>

              {/* Demand-Supply Mismatch */}
              <div className="mt-4">
                <p className="font-body text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-muted-foreground" />
                  Demand-Supply Mismatch
                </p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span>•</span><span>High-maturity markets need advanced training</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Low-maturity markets need foundational training and training providers serves well with 89.8% beginner/intermediate portfolio</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span><strong>Strategic misalignment:</strong> the industry's portfolio optimized for Tier 3-4 markets but under-serves Tier 1 markets where revenue and margin are highest</span></li>
                </ul>
              </div>
            </div>

            {/* Portfolio Strength */}
            <div id="portfolio-strength-beginner" className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-muted-foreground" />
                Portfolio Strength: Strong Beginner/Intermediate Foundation (802 courses, 89.9%)
              </h4>
              <p className="font-body text-muted-foreground">
                <strong>Tier 3 & 4 Market Alignment:</strong> the industry's heavy beginner/intermediate concentration aligns well with emerging markets where most organizations remain in awareness/adoption phases. In these regions, demand centers on foundational literacy rather than advanced technical specialization—organizations need to understand what AI can do, enable employees to work productively alongside AI tools, and build confidence before pursuing larger initiatives.
              </p>
            </div>

            {/* Critical Gap: Advanced Technical Training */}
            <div id="critical-gap-advanced" className="mb-8">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                Critical Gap: Advanced Technical Training (Only 7.2% of Portfolio)
              </h4>
              
              <p className="font-body text-muted-foreground mb-6">
                <strong>Strategic Context:</strong> the industry's current portfolio serves awareness-phase markets well (89.9% beginner/intermediate content) but critically under-serves high-growth enterprise segments. Global enterprise spending on AI reached <span className="text-gold font-semibold">$154 billion in 2024</span>, with 71% allocated to production implementations rather than experimentation.<CitationLink id={222} /> Organizations are consolidating around proven use cases: 71% of early GenAI adopters are implementing production RAG systems, 79% have deployed AI agents, and the enterprise LLM API market reached $8.4 billion in 2024.<CitationLink id={223} /><CitationLink id={224} />
              </p>

              {/* Why Advanced Training Despite Low Deployment */}
              <div className="mb-8">
                <h5 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-gold" />
                  Why Advanced Training is Critical Despite Low Deployment Rates
                </h5>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  A logical tension exists: if 95% of GenAI pilots fail and most organizations remain stuck in experimentation, why develop advanced training? The answer lies in understanding <em>why</em> organizations are stuck.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-foreground mt-0.5">•</span>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground mb-1">The Pilot-to-Production Gap is Fundamentally Technical</p>
                      <p className="font-body text-sm text-muted-foreground">
                        Research shows the barriers to AI success are overwhelmingly technical: data quality and readiness (43%), lack of technical maturity (43%), and shortage of skills (35%).<CitationLink id={454} /> Only 48% of AI projects make it into production, with data availability and quality identified as the top challenge.<CitationLink id={459} /> Organizations aren't stuck because they need more awareness training—they're stuck because they lack the technical capability to move from experiment to production.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-foreground mt-0.5">•</span>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground mb-1">"Using AI" is Not the Same as "Building AI Capabilities"</p>
                      <p className="font-body text-sm text-muted-foreground">
                        Adoption statistics measure "someone used ChatGPT." Production deployment requires entirely different skill sets: RAG architecture, API integration, data pipelines, monitoring, cost optimization. MIT NANDA's research is clear: "The core barrier to scaling is not infrastructure, regulation, or talent. It is learning."<CitationLink id={453} /> The 42% of companies that abandoned most AI initiatives in 2025 (up from 17% in 2024) didn't fail from lack of awareness—they failed from lack of implementation expertise.<CitationLink id={455} />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-foreground mt-0.5">•</span>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground mb-1">Technical and Organizational Barriers are Interconnected</p>
                      <p className="font-body text-sm text-muted-foreground">
                        Organizations that succeed are twice as likely to have redesigned end-to-end workflows <em>before</em> selecting modeling techniques.<CitationLink id={456} /> This requires both technical knowledge AND process/change management skills. MIT NANDA confirms: "The dominant barrier to crossing the GenAI Divide is not integration or budget, it is organizational design."<CitationLink id={453} />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-foreground mt-0.5">•</span>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground mb-1">Advanced Training Solves the Deployment Problem, Not the Awareness Problem</p>
                      <p className="font-body text-sm text-muted-foreground">
                        The 60% Copilot license abandonment rate and 85% pilot failure rate aren't solved by more beginner content. Gartner projects 30% of generative AI projects will be abandoned after proof of concept by end of 2025—"not a technology failure" but "gaps in strategy, governance, and organisational readiness."<CitationLink id={457} /> Internal AI builds succeed only 22% of the time vs. 67% for vendor purchases<CitationLink id={458} />—the difference is implementation expertise, LLMOps, data readiness skills, and production deployment knowledge.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-muted/50 rounded-xl border border-border">
                  <p className="font-body text-sm text-foreground">
                    <strong>Key Insight:</strong> Advanced training doesn't compete with foundational training—it addresses an entirely different problem. Organizations need awareness training to start experimenting, but they need advanced technical training to stop failing. the industry's 89.8% beginner/intermediate portfolio helps organizations begin; the missing 10.2% advanced content would help them succeed.
                  </p>
                </div>
              </div>

              {/* External Validation */}
              <div className="mb-6">
                <h5 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-info" />
                  External Validation: Market Evidence of Demand
                </h5>

                <div className="space-y-6">
                  {/* 1. Enterprise AI Budgets */}
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Enterprise AI Budgets Shifting to Production Implementation</p>
                    <p className="font-body text-sm text-muted-foreground mb-3">
                      Research from Gartner's 2025 CIO Survey shows that 68% of enterprises moved from AI experimentation to production deployment in 2024, with average AI project budgets increasing from $2.1M (experimentation) to $7.8M (production).<CitationLink id={225} />
                    </p>
                    <ul className="space-y-2 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span><strong>Production RAG systems:</strong> 71% cite "lack of in-house expertise" as barrier; only 23% of data science teams confident<CitationLink id={226} /></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span><strong>Vector database skills shortage:</strong> 3rd fastest-growing AI role (+347% YoY demand)<CitationLink id={227} /></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span><strong>MLOps for LLMs:</strong> 85% of AI projects fail due to MLOps gaps; 3.2x higher success with training<CitationLink id={228} /></span>
                      </li>
                    </ul>
                  </div>

                  {/* 2. Competitor Analysis */}
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Competitor Analysis Shows Market Opportunity</p>
                    <p className="font-body text-sm text-muted-foreground mb-3">Analysis of major training providers reveals severe supply-demand mismatch:</p>
                    <ul className="space-y-2 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span><strong>Coursera:</strong> 7,000+ AI courses but only 89 (1.3%) cover production RAG<CitationLink id={230} /></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span><strong>LinkedIn Learning:</strong> 300+ AI courses but zero dedicated MLOps-for-LLMs courses<CitationLink id={231} /></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span><strong>Udemy Business:</strong> 500+ AI courses but only 12 (2.4%) address vector databases<CitationLink id={232} /></span>
                      </li>
                    </ul>
                    <p className="font-body text-sm text-muted-foreground mt-3">
                      AWS reports that 73% of enterprises seeking advanced AI training cannot find suitable options from traditional providers.<CitationLink id={233} />
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical AI Training Tracks */}
              <div className="mb-6 bg-card rounded-xl p-6 border border-border">
                <h5 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gold" />
                  Technical AI Training Tracks: Recommended Curriculum Development
                </h5>

                {/* 1. Production RAG */}
                <div className="mb-8">
                  <h6 className="font-display text-base font-semibold text-foreground mb-3">1. Production RAG (Retrieval Augmented Generation) Implementation</h6>
                  
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    <strong>Current State:</strong> RAG mentioned in ~15 training providers courses but only at conceptual level ("what is RAG, basic architecture")
                  </p>

                  <p className="font-body text-sm font-semibold text-foreground mb-3">Recommended Curriculum:</p>
                  
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 1: Advanced RAG Architecture & Design (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Vector database selection & optimization:</strong> Pinecone vs. Weaviate vs. Chroma vs. Qdrant; cost-performance tradeoffs; index optimization strategies (HNSW vs. IVF trade-offs)</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Chunking strategies:</strong> Document segmentation approaches (fixed-size vs. semantic chunking); chunk size optimization; overlap strategies; metadata enrichment techniques</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Retrieval tuning:</strong> Similarity search algorithms (cosine vs. Euclidean vs. dot product); hybrid search (vector + keyword BM25); re-ranking strategies with cross-encoders; measuring retrieval quality (Recall@K, MRR, NDCG)</span></li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 2: Production RAG Deployment & Optimization (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Context management:</strong> Managing context window limits (Claude 200K vs. GPT-4 128K); context compression techniques; dynamic context selection; cost optimization (40-60% cost reduction possible through context optimization)</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Evaluation frameworks:</strong> Measuring retrieval quality; end-to-end RAG performance; A/B testing methodologies; continuous evaluation in production</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Production scaling:</strong> Handling thousands of queries/second; caching strategies; cost optimization; monitoring and debugging production systems</span></li>
                      </ul>
                    </div>

                  <div className="mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                      <li className="flex items-start gap-2"><span>•</span><span>71% of early GenAI adopters are already implementing RAG; 96% are doing some kind of fine-tuning or augmentation<CitationLink id={463} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>RAG market growing from $1.9B (2025) to $9.9-11.0B by 2030 at 38-49% CAGR<CitationLink id={464} /><CitationLink id={465} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>85% of organizations are either testing or actively deploying LLMs with RAG integration<CitationLink id={466} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>RAG reduces AI hallucinations by 70-90% compared to standard LLMs<CitationLink id={467} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Enterprises choose RAG for 30-60% of their use cases where high accuracy and transparency are required<CitationLink id={468} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Large enterprises account for 73% of RAG market share<CitationLink id={469} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>RAG achieves 95-99% accuracy on queries about recent events vs. 30-50% for traditional LLMs<CitationLink id={467} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>63.6% of implementations utilize GPT-based models; 80.5% rely on standard retrieval frameworks<CitationLink id={470} /></span></li>
                      </ul>
                    </div>
                </div>

                {/* 2. Agentic AI */}
                <div className="mb-8">
                  <h6 className="font-display text-base font-semibold text-foreground mb-3">2. Agentic AI & Autonomous Systems</h6>
                  
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    <strong>Current State:</strong> training providers catalog missing agentic AI training entirely
                  </p>

                  <p className="font-body text-sm font-semibold text-foreground mb-3">Recommended Curriculum:</p>
                  
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 1: Agentic AI Fundamentals & Architecture (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Multi-agent architectures:</strong> Single vs. multiple agents; coordination strategies; hierarchical vs. flat structures</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Planning frameworks:</strong> ReAct, Plan-and-Solve, Tree of Thoughts</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Tool use & function calling:</strong> Connecting to APIs, databases, external services</span></li>
                      </ul>
                    </div>
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 2: Production Agentic AI Deployment (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Memory systems:</strong> Architecture design for context retention and improved performance</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Agent evaluation:</strong> Measuring task completion rates; reliability metrics; guardrails implementation</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Frameworks:</strong> LangGraph, CrewAI, AutoGen hands-on implementation</span></li>
                      </ul>
                    </div>

                  <div className="mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                      <li className="flex items-start gap-2"><span>•</span><span>79% of organizations report some level of agentic AI adoption; 96% planning to expand in 2025<CitationLink id={471} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Agentic AI market exploding from $5.25B (2024) to $139-199B by 2034 at 40-44% CAGR<CitationLink id={472} /><CitationLink id={473} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>85% of enterprises expected to implement AI agents by end of 2025<CitationLink id={474} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Companies report average ROI of 171%; U.S. enterprises achieving 192% ROI<CitationLink id={471} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>43% of companies allocate over half of AI budgets to agentic systems<CitationLink id={471} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>By 2028, 33% of enterprise software applications will include agentic AI (up from &lt;1% in 2024)<CitationLink id={475} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>By 2028, 68% of customer interactions projected to be handled by agentic AI<CitationLink id={471} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>66.4% of implementations use multi-agent system designs<CitationLink id={471} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>AI agent startups raised $3.8 billion in 2024—nearly tripling from previous year<CitationLink id={476} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Organizations using AI agents report 55% higher operational efficiency and 35% cost reductions<CitationLink id={476} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Agentic AI can reduce human task time by up to 86% in multi-step workflows<CitationLink id={477} /></span></li>
                    </ul>
                  </div>
                </div>

                {/* 3. Fine-Tuning */}
                <div className="mb-8">
                  <h6 className="font-display text-base font-semibold text-foreground mb-3">3. Fine-Tuning & Model Customization</h6>
                  
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    <strong>Current State:</strong> ~10 courses mention fine-tuning but primarily Azure OpenAI (Microsoft-specific)
                  </p>

                  <p className="font-body text-sm font-semibold text-foreground mb-3">Recommended Curriculum:</p>
                  
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 1: Fine-Tuning Decision Framework (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Decision framework:</strong> When to fine-tune vs. prompt engineering vs. RAG</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Data requirements:</strong> 500-2,000 examples optimal for most use cases</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Case studies:</strong> Domain-specific accuracy improvements and ROI analysis</span></li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 2: Advanced Fine-Tuning Techniques (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>LoRA & QLoRA:</strong> 90% cost reduction through parameter-efficient fine-tuning</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Evaluation:</strong> Overfitting detection, A/B testing methodologies</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Multi-platform deployment:</strong> OpenAI, Azure, Hugging Face, Vertex AI</span></li>
                      </ul>
                    </div>

                  <div className="mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                      <li className="flex items-start gap-2"><span>•</span><span>Domain-specific LLMs growing at 38%+ CAGR through 2033—fastest-growing segment<CitationLink id={478} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>72% of companies plan to boost LLM investments; 40% will spend $250,000+ for deployment<CitationLink id={479} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Enterprise LLM market growing from $5.9B (2025) to $48-71B by 2034-35 at 26-30% CAGR<CitationLink id={478} /><CitationLink id={480} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Cloud deployment dominates with 49-59% market share; hybrid growing for compliance<CitationLink id={478} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Healthcare segment expected to grow at fastest CAGR of 32%+ driven by demand for domain-specific models<CitationLink id={478} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Retail and e-commerce account for 25-27.5% of enterprise LLM market—largest industry segment<CitationLink id={480} /><CitationLink id={481} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>63.6% of RAG implementations using GPT-based models show need for fine-tuned domain expertise<CitationLink id={470} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Organizations increasingly preferring fine-tuned smaller models over larger general models for specific use cases</span></li>
                      </ul>
                    </div>
                </div>

                {/* 4. LLMOps */}
                <div className="mb-8">
                  <h6 className="font-display text-base font-semibold text-foreground mb-3">4. MLOps for LLMs (LLMOps)</h6>
                  
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    <strong>Current State:</strong> Generic MLOps courses (~12) don't address LLM-specific challenges
                  </p>

                  <p className="font-body text-sm font-semibold text-foreground mb-3">Recommended Curriculum:</p>
                  
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 1: LLMOps Fundamentals (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>CI/CD for LLM applications:</strong> Automated testing, catching issues pre-production</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Model versioning:</strong> Managing multiple models; fallback strategies; A/B testing</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Monitoring:</strong> Latency, cost per query ($0.002-$0.08), quality metrics, drift detection</span></li>
                      </ul>
                    </div>
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 2: Advanced LLMOps & Cost Optimization (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Caching strategies:</strong> 40-60% cost reduction techniques</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Prompt compression:</strong> 25-35% token reduction techniques</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Tools:</strong> LangSmith, Weights & Biases, Arize AI hands-on implementation</span></li>
                      </ul>
                </div>

                  <div className="mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                      <li className="flex items-start gap-2"><span>•</span><span>95% of enterprise GenAI implementations fail to meet expectations (MIT research)<CitationLink id={482} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>72% of enterprises planning to increase LLM spending in 2025<CitationLink id={479} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Enterprise LLM spending rose to $8.4B by mid-2025 (up from $3.5B in late 2024)<CitationLink id={483} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>37% of enterprises spend $250,000+ annually on LLMs; 73% spend over $50,000<CitationLink id={479} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>44% cite data privacy and security as top barrier to LLM adoption<CitationLink id={484} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Only 54% of models successfully move from pilot to production<CitationLink id={482} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>78% of organizations now use AI in at least one business function<CitationLink id={482} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Proper LLMOps increases project success rates and enables 3.7x average ROI<CitationLink id={482} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>92% of Fortune 500 use generative AI but only 5% have enterprise-grade deployment<CitationLink id={483} /></span></li>
                    </ul>
                    </div>
                  </div>

                {/* 5. Open-Source */}
                      <div>
                  <h6 className="font-display text-base font-semibold text-foreground mb-3">5. Open-Source AI Ecosystem</h6>
                  
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    <strong>Current State:</strong> Zero training providers courses on open-source AI tools/platforms
                  </p>

                  <p className="font-body text-sm font-semibold text-foreground mb-3">Recommended Curriculum:</p>
                  
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 1: Open-Source LLM Ecosystem (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Hugging Face:</strong> Transformers, Datasets, Model Hub navigation</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Framework comparison:</strong> LangChain vs. LlamaIndex vs. Haystack; strengths and limitations</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Model selection:</strong> Llama 4 vs. Mistral vs. Qwen vs. Gemma vs. DeepSeek; licensing implications</span></li>
                      </ul>
                    </div>
                  <div className="bg-muted/30 rounded-xl p-4 border border-border mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Course 2: Self-Hosted AI Infrastructure (Advanced)</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Local deployment:</strong> GPU requirements (A100 vs. H100 vs. consumer GPUs); cost analysis</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Inference optimization:</strong> vLLM (3-5x throughput), quantization techniques, KTransformers</span></li>
                      <li className="flex items-start gap-2"><span>•</span><span><strong>Open-source RAG stack:</strong> Chroma + Llama + LangChain integration</span></li>
                      </ul>
                    </div>

                  <div className="mb-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                      <li className="flex items-start gap-2"><span>•</span><span>Open-source models account for 13% of AI workloads (down from 19% six months prior)<CitationLink id={485} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Meta's Llama remains most widely adopted open-weight model in enterprise<CitationLink id={485} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Qwen family adopted by 90,000+ enterprises across consumer electronics, gaming, and other sectors<CitationLink id={486} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>North American LLM market expected to reach $105.5 billion by 2030<CitationLink id={487} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>64% of EU enterprises prefer on-premises deployment for GDPR/NIS2/DORA compliance<CitationLink id={488} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>KTransformers achieved 34x adoption spike enabling 671B parameter models on consumer hardware<CitationLink id={489} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Open models critical for highly regulated sectors (telecommunications, banking) requiring data sovereignty<CitationLink id={490} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>Usage of AutoGPT and agentic frameworks surged 920% across developer repositories (2023-2025)<CitationLink id={477} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>API costs (GPT-4): $0.03-0.06/1K tokens vs. Self-hosted: $0.002-0.004 (85-93% reduction)<CitationLink id={488} /></span></li>
                      <li className="flex items-start gap-2"><span>•</span><span>67% of Fortune 500 have adopted AI infrastructure initiatives—many exploring open-source options<CitationLink id={483} /></span></li>
                    </ul>
                  </div>
                </div>

                {/* Key Takeaway */}
                <div className="mt-6 p-4 bg-gold/5 rounded-xl border border-gold/20">
                  <p className="font-body text-sm text-foreground">
                    <strong className="text-gold">Key Takeaway:</strong> Technical AI implementation skills represent the fastest-growing training need, with 94% of leaders facing AI-critical skill shortages. Organizations deploying AI agents report 171-192% ROI, but 95% of GenAI implementations fail without proper operational expertise. training providers has an opportunity to become the first global provider of comprehensive technical AI training across RAG, agentic AI, fine-tuning, LLMOps, and open-source ecosystems.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Recommendations for Finding 2 */}
            <div className="bg-gold/5 rounded-xl p-6 border border-gold/20">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-gold" />
                Strategic Recommendations
              </h4>
              <ul className="space-y-3">
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">1.</span>
                  <span><strong>Develop Production RAG curriculum</strong> as highest-priority advanced offering</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">2.</span>
                  <span><strong>Launch Agentic AI track</strong> to capture fastest-growing enterprise AI category</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">3.</span>
                  <span><strong>Create Fine-Tuning and LLMOps courses</strong> to address production deployment gaps</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">4.</span>
                  <span><strong>Build Open-Source AI curriculum</strong> to serve data sovereignty and cost optimization demand</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">5.</span>
                  <span><strong>Target portfolio rebalancing:</strong> Advanced/Expert content from 10.1% → 25% within 18 months</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Finding 3: Delivery Method Distribution */}
        <div id="finding-3" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center">
                <Video className="w-6 h-6 text-info" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Finding 3: Delivery Method Distribution Provides Quality Advantage but Limits Scalability
              </h3>
            </div>

            <p className="font-body text-lg text-foreground font-medium mb-8">
              <span className="text-gold font-bold">79.9%</span> of training providers courses require live instructor presence, creating quality differentiation but imposing scalability constraints.
            </p>

            {/* Delivery Method Table */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Current State: Delivery Method Distribution
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Delivery Method</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Course Count</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Percentage</th>
                      <th className="text-left py-3 pl-4 font-semibold text-foreground">Scalability Assessment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">Live Virtual Instructor-Led</td>
                      <td className="py-3 px-4 text-muted-foreground">579</td>
                      <td className="py-3 px-4 text-gold font-semibold">64.9%</td>
                      <td className="py-3 pl-4 text-warning">High quality but low scalability</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">Hybrid (Virtual + Classroom)</td>
                      <td className="py-3 px-4 text-muted-foreground">134</td>
                      <td className="py-3 px-4 text-gold font-semibold">15.0%</td>
                      <td className="py-3 pl-4 text-info">Moderate scalability</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">Self-Paced Online</td>
                      <td className="py-3 px-4 text-muted-foreground">17</td>
                      <td className="py-3 px-4 text-gold font-semibold">1.9%</td>
                      <td className="py-3 pl-4 text-destructive">Critical gap in scalable delivery</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">On-Demand Recording</td>
                      <td className="py-3 px-4 text-muted-foreground">~35</td>
                      <td className="py-3 px-4 text-gold font-semibold">3.9%</td>
                      <td className="py-3 pl-4 text-muted-foreground">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Implications */}
              <div className="mt-4">
                <p className="font-body text-sm font-semibold text-foreground mb-2">Implications:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Revenue ceiling:</strong> Instructor-led training revenue limited by instructor availability and billable hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Geographic constraints:</strong> Classroom delivery requires local instructor presence; time zone challenges for live virtual</span>
                  </li>
                </ul>
              </div>

              {/* Benchmark Context */}
              <div className="mt-4">
                <p className="font-body text-sm font-semibold text-foreground mb-2">Benchmark Context:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Coursera for Business:</strong> 90%+ self-paced content, enabling unlimited learner scaling<CitationLink id={460} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>LinkedIn Learning:</strong> 100% self-paced, 16,000+ courses available on-demand<CitationLink id={461} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>Udemy Business:</strong> 100% self-paced, 11,000+ courses<CitationLink id={462} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span><strong>the industry's 1.9% self-paced</strong> drastically under-indexes vs. scalable competitors</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Portfolio Strength */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-muted-foreground" />
                Portfolio Strength: Multi-Modal Delivery Options (65% Live Virtual + 15% Hybrid)
              </h4>
              <p className="font-body text-muted-foreground mb-4">
                While over-reliance on instructor-led training creates scalability constraint, it also represents quality and differentiation advantage:
              </p>

              <ul className="space-y-3 font-body text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Superior Learning Outcomes:</strong> Adult learning research shows 25-40% higher knowledge retention vs. self-paced<CitationLink id={169} />; real-time problem-solving addresses learner-specific challenges; immediate feedback accelerates skill development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Premium Positioning:</strong> Instructor-led justifies premium pricing vs. self-paced platforms; enterprise buyers perceive higher value in live instruction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Networking & Peer Learning:</strong> Live cohorts enable peer-to-peer learning; particularly valuable for leadership/executive training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Accountability & Completion:</strong> Scheduled classes create commitment vs. self-paced procrastination; completion rates: 60-80% instructor-led vs. 5-15% MOOCs<CitationLink id={170} /></span>
                </li>
                  </ul>
            </div>

            {/* External Validation */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-info" />
                External Validation: Market Demands Both Quality and Scale
              </h4>

              <ul className="space-y-3 font-body text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Self-paced market is massive:</strong> Coursera (148M registered learners), Udemy (70M+ learners), LinkedIn Learning (100M+ learners via Premium). Organizations often use blended approaches: self-paced for foundational content, instructor-led for advanced/implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Completion rate disparity:</strong> MOOC completion rates average 5-15%<CitationLink id={170} /> vs. instructor-led at 60-80%<CitationLink id={170} />. Self-paced effective for awareness/volume; instructor-led critical for skills application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Enterprise buyers value both:</strong> Large enterprises often want self-paced for broad workforce literacy + instructor-led for implementation teams; self-paced enables "just-in-time" learning while instructor-led enables "cohort-based" transformation programs</span>
                    </li>
                  </ul>

              {/* Key Insight */}
              <div className="p-4 bg-muted/50 rounded-xl border border-border">
                <p className="font-body text-sm text-foreground flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Key Insight:</strong> the industry's instructor-led strength provides quality differentiation, but absence of scalable delivery options limits ability to serve awareness-phase demand and compete on volume.
                  </span>
                </p>
              </div>
            </div>

            {/* Strategic Recommendations for Finding 3 */}
            <div className="bg-gold/5 rounded-xl p-6 border border-gold/20">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-gold" />
                Strategic Recommendations
              </h4>
              <ul className="space-y-3">
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">1.</span>
                  <span><strong>Leverage instructor-led as premium offering</strong> for implementation, advanced skills, and change management</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">2.</span>
                  <span><strong>Convert top-performing instructor-led courses to self-paced format</strong> with video, labs, assessments</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">3.</span>
                  <span><strong>Create hybrid pathways:</strong> self-paced foundational → instructor-led advanced</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">4.</span>
                  <span><strong>Target delivery mix:</strong> Instructor-led 50%, Hybrid 20%, Self-paced 30% within 24 months</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Finding 4: Audience Segmentation */}
        <div id="finding-4" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-steel/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-steel" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Finding 4: Audience Segmentation Under-Serves High-Value Verticals
              </h3>
            </div>

            <p className="font-body text-lg text-foreground font-medium mb-8">
              Only <span className="text-gold font-bold">8.2%</span> of courses explicitly target specific industries, despite <span className="text-gold font-bold">55%</span> of providers reporting strong demand for industry-customized training.
            </p>

            {/* Current State */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Current State: Audience Segmentation
              </h4>

                  <p className="font-body text-sm font-semibold text-foreground mb-3">Organizational Clients (94% of courses):</p>
              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span>•</span>Enterprises (large corporations)</li>
                <li className="flex items-start gap-2"><span>•</span>Small and medium businesses (SMBs)</li>
                <li className="flex items-start gap-2"><span>•</span>Government agencies</li>
                <li className="flex items-start gap-2"><span>•</span>Educational institutions</li>
              </ul>

              <p className="font-body text-sm font-semibold text-foreground mb-4">Sector-Specific Gaps</p>

              {/* Individual Learners Under-Served */}
              <div className="bg-card rounded-xl p-6 border border-border mb-4">
                <h5 className="font-body text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-llpa-blue" />
                  Individual Learners (Consumer Market) Under-Served
                </h5>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Only 51 courses (5.7%) target individual learners, despite consumer education representing large market volume:
                </p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2"><span>•</span><strong>Coursera:</strong> 148M registered learners (2024)</li>
                  <li className="flex items-start gap-2"><span>•</span><strong>Udemy:</strong> 70M+ learners</li>
                  <li className="flex items-start gap-2"><span>•</span><strong>LinkedIn Learning:</strong> 100M+ learners via LinkedIn Premium</li>
                </ul>
                
                <p className="font-body text-sm font-semibold text-foreground mb-3">Strategic Choice Required: Should members enter consumer market or remain pure B2B?</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-body text-sm font-semibold text-success mb-2">Arguments FOR consumer market entry:</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><strong>Market size:</strong> Consumer education market larger by learner volume than enterprise</li>
                      <li className="flex items-start gap-2"><span>•</span><strong>Lead generation:</strong> Individual learners become enterprise buyers in their organizations</li>
                      <li className="flex items-start gap-2"><span>•</span><strong>Brand building:</strong> Consumer presence builds awareness driving B2B demand</li>
                      <li className="flex items-start gap-2"><span>•</span><strong>Revenue diversification:</strong> Reduces dependence on enterprise budget cycles</li>
                  </ul>
                </div>
                <div>
                    <p className="font-body text-sm font-semibold text-destructive mb-2">Arguments AGAINST consumer market entry:</p>
                    <ul className="space-y-1 font-body text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span>•</span><strong>Margin dilution:</strong> Consumer pricing far below enterprise requires massive scale to offset</li>
                      <li className="flex items-start gap-2"><span>•</span><strong>Business model complexity:</strong> Consumer requires different marketing, sales, support infrastructure</li>
                      <li className="flex items-start gap-2"><span>•</span><strong>Competitive disadvantage:</strong> Coursera, Udemy, LinkedIn Learning have 10+ year head start</li>
                    </ul>
                    </div>
                </div>
              </div>

              {/* Education Sector Under-Served */}
              <div className="bg-card rounded-xl p-6 border border-border mb-4">
                <h5 className="font-body text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-llpa-green" />
                  Education Sector Under-Served
                </h5>
                <p className="font-body text-sm text-muted-foreground">
                  Only 53 courses (5.9%) target education sector (K-12 teachers, university faculty, education administrators), yet multiple members report education institution inquiries.
                </p>
              </div>

              {/* Government Sector Critical Gap */}
              <div className="bg-card rounded-xl p-6 border border-border mb-4">
                <h5 className="font-body text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-llpa-orange" />
                  Government & Public Sector Critical Gap
                </h5>
                <p className="font-body text-sm text-muted-foreground mb-3">
                  Only 45 courses (5.0%) target government/public sector.
                </p>
                
                <p className="font-body text-sm font-semibold text-foreground mb-2">Strategic Importance:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4">
                  <li className="flex items-start gap-2"><span>•</span>Public-sector adoption drives private-sector demand</li>
                  <li className="flex items-start gap-2"><span>•</span>Singapore PAIR example: 64,626 government users created private enterprise demand</li>
                  <li className="flex items-start gap-2"><span>•</span>Denmark, UK, Netherlands, Finland government AI strategies creating immediate training requirements</li>
                    </ul>

                <p className="font-body text-sm font-semibold text-foreground mb-2">Government-Specific Requirements:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span>•</span><strong>Procurement compliance:</strong> Public tender processes, framework agreements, security clearances</li>
                  <li className="flex items-start gap-2"><span>•</span><strong>Regulatory focus:</strong> GDPR, AI Act, sector-specific regulations</li>
                  <li className="flex items-start gap-2"><span>•</span><strong>Legacy system integration:</strong> Government agencies operate decades-old IT infrastructure</li>
                  <li className="flex items-start gap-2"><span>•</span><strong>Transparency & explainability:</strong> Public-sector AI decisions must be explainable to citizens</li>
                    </ul>
              </div>
            </div>

            {/* Portfolio Strength: Member-Created Content */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-muted-foreground" />
                Portfolio Strength: Member-Created Content (253 courses, 28.4%)
              </h4>
              <p className="font-body text-sm font-semibold text-foreground mb-2">Strategic Differentiation:</p>
              <p className="font-body text-muted-foreground mb-4">
                28.4% of portfolio is proprietary member-developed content not available through vendor training or competitor platforms. This provides:
              </p>
              <ul className="space-y-2 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Intellectual Property Ownership:</strong> Members control content (no vendor licensing dependencies); can modify, update, repurpose freely; potentially higher margins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Customization Capability:</strong> Industry-specific scenarios reflecting member's domain expertise; language variations (not just translations but culturally adapted content)</span>
                </li>
                  </ul>
            </div>

            {/* Critical Gap: Industry Vertical Specialization */}
            <div className="mb-8">
              <h4 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Critical Gap: Industry Vertical Specialization
              </h4>
              
              <p className="font-body text-muted-foreground mb-6">
                <strong>Current State:</strong> Only 73 courses (8.2%) explicitly target specific industries despite 55% of providers reporting demand for industry-customized training.
              </p>

              {/* External Validation */}
              <p className="font-body text-sm font-semibold text-foreground mb-3">External Research Confirms Market Preference for Specialized Content:</p>
              <ul className="space-y-2 font-body text-sm text-muted-foreground mb-6 ml-4">
                <li className="flex items-start gap-2"><span>•</span><span>Industry-specific courses achieve 3.2x higher completion rates than generic courses; learners report 40% higher skill confidence when training includes role-specific examples<CitationLink id={491} /></span></li>
                <li className="flex items-start gap-2"><span>•</span><span>Industry vertical training commands 30-50% pricing premium over generic equivalents; financial services and healthcare sectors show highest willingness-to-pay for specialized AI training<CitationLink id={492} /></span></li>
                <li className="flex items-start gap-2"><span>•</span><span>67% of enterprises prioritize AI training that addresses industry-specific use cases; 54% cite "lack of relevant examples" as barrier to effective AI training adoption<CitationLink id={493} /></span></li>
              </ul>

              {/* Key Insight */}
              <div className="p-4 bg-muted/50 rounded-xl border border-border mb-6">
                <p className="font-body text-sm text-foreground flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Key Insight:</strong> External research confirms provider-reported pattern—organizations willing to pay premium for training that reduces "translation effort" from generic concepts to specific workflows.
                  </span>
                </p>
              </div>

              {/* Recommended Industry Curriculum */}
              <h5 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" />
                Recommended Industry Curriculum (Top 5 Priorities)
              </h5>

              {/* Priority 1: Financial Services */}
              <div id="vertical-1" className="mb-6 bg-muted/30 rounded-xl p-5 border border-border">
                <h6 className="font-display text-base font-semibold text-foreground mb-4">Priority Vertical 1: Financial Services</h6>
                
                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Size & Characteristics:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4 ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>AI spending in financial services: $35B (2023) → $97B by 2027<CitationLink id={494} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>85% of financial firms actively applying AI in fraud detection, IT operations, digital marketing, and risk modeling<CitationLink id={495} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>98% of North American banks using AI in at least one operational process by 2025<CitationLink id={496} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Regulatory complexity creates training demand (Basel III, MiFID II, GDPR, DORA, AI Act)</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Premium pricing: Financial services willing to pay for specialized expertise</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Generative AI could create $200-340 billion in additional annual value for banking<CitationLink id={497} /></span></li>
                </ul>

                <p className="font-body text-sm font-semibold text-foreground mb-3">Potential Courses (8-10 courses):</p>
                
                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">1. AI for Banking & Lending</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Credit risk assessment with AI:</strong> Default prediction models; explainability requirements (regulatory mandate); bias detection and mitigation</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Loan underwriting automation:</strong> Document processing; income verification; fraud detection</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Anti-money laundering (AML):</strong> Transaction monitoring; pattern detection; regulatory compliance (FATF guidelines)</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Customer service chatbots:</strong> Account inquiries; transaction disputes; product recommendations; security considerations</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">2. AI for Insurance</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Claims processing automation:</strong> Document analysis; fraud detection; damage assessment using computer vision</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Underwriting risk assessment:</strong> Predictive modeling; telematics data (auto insurance); health risk scoring; bias and fairness requirements</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Actuarial modeling with AI:</strong> Mortality prediction; catastrophe modeling; pricing optimization</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Regulatory compliance:</strong> Solvency II, insurance-specific AI Act requirements</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-4">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">3. AI for Asset Management & Trading</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Portfolio optimization:</strong> Modern portfolio theory enhanced with AI; factor models; backtesting strategies</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Market analysis:</strong> Sentiment analysis from news/social media; technical analysis automation; macroeconomic indicator processing</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Risk management:</strong> VaR (Value at Risk) calculation; stress testing; scenario analysis; correlation modeling</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Compliance & regulation:</strong> MiFID II algorithmic trading rules; best execution requirements; audit trails</span></li>
                    </ul>
                </div>

                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>70% of banking companies that have adopted AI are realizing cost savings<CitationLink id={494} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>82% of leaders say 2025 is pivotal for rethinking organizational AI strategy<CitationLink id={494} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>81% expect AI agents to be deeply integrated into workforces within 12-18 months<CitationLink id={515} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Bank gen AI spending projected to reach $84.99 billion by 2030<CitationLink id={498} /></span></li>
                </ul>
              </div>

              {/* Priority 2: Manufacturing */}
              <div id="vertical-2" className="mb-6 bg-muted/30 rounded-xl p-5 border border-border">
                <h6 className="font-display text-base font-semibold text-foreground mb-4">Priority Vertical 2: Manufacturing & Industrial</h6>
                
                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Size & Characteristics:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4 ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>AI in manufacturing market: $34.18B (2025) → $155.04B by 2030 (35.3% CAGR)<CitationLink id={499} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Clear ROI measurement: Manufacturing metrics concrete (uptime %, defect rates, throughput)</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>41.9% of industrial organizations adopted AI in 2024 (up from 16.9% in 2022)<CitationLink id={500} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Predictive maintenance can save up to 40% of repair costs<CitationLink id={501} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>AI-driven predictive maintenance reduces unplanned downtime by up to 30%<CitationLink id={500} /></span></li>
                </ul>

                <p className="font-body text-sm font-semibold text-foreground mb-3">Recommended Courses (8-10 courses):</p>
                
                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">1. AI for Predictive Maintenance</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Sensor data analysis:</strong> Vibration analysis; temperature monitoring; acoustic emissions; pressure/flow sensors</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Anomaly detection:</strong> Unsupervised learning; threshold-based vs. ML-based approaches; real-time detection</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Time-to-failure prediction:</strong> Survival analysis; remaining useful life (RUL) estimation</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Maintenance scheduling optimization:</strong> Balancing costs of premature maintenance vs. unexpected downtime; parts inventory optimization</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">2. AI for Quality Control</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Computer vision for defect detection:</strong> Surface inspection; dimensional verification; assembly verification</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Automated inspection systems:</strong> Camera selection; lighting; image processing pipelines; real-time inference</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Process optimization:</strong> Statistical process control (SPC) enhanced with AI; root cause analysis; parameter tuning</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Case studies:</strong> Automotive (paint defect detection), electronics (PCB inspection), pharmaceuticals (tablet inspection)</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-4">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">3. AI for Supply Chain & Logistics</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Demand forecasting:</strong> Time series models; incorporating external factors (weather, events, economic indicators)</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Inventory optimization:</strong> Safety stock calculation; reorder point optimization; multi-echelon inventory management</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Route optimization:</strong> Vehicle routing problem (VRP); real-time re-routing</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Supplier risk assessment:</strong> Financial health monitoring; geopolitical risk; delivery performance prediction</span></li>
                    </ul>
                </div>

                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>AI-enabled quality inspection shows 90% improvement in production consistency<CitationLink id={500} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>95% of manufacturers investing or planning to invest in AI within five years<CitationLink id={500} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Operators using AI report 10-15% boost in production processes and 4-5% increase in EBITA<CitationLink id={501} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>60% of industrialists use AI for quality monitoring, detecting 200% more supply chain disruptions<CitationLink id={501} /></span></li>
                </ul>
              </div>

              {/* Priority 3: Legal Services */}
              <div id="vertical-3" className="mb-6 bg-muted/30 rounded-xl p-5 border border-border">
                <h6 className="font-display text-base font-semibold text-foreground mb-4">Priority Vertical 3: Legal Services</h6>
                
                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Size & Characteristics:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4 ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>Legal AI market: $1.45-2.1B (2024) → $3.9-7.4B by 2030-35 (13-17% CAGR)<CitationLink id={502} /><CitationLink id={503} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Legal AI software market: $3.11B (2025) → $10.82B by 2030 (28.3% CAGR)<CitationLink id={504} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>High willingness to pay: Legal services accustomed to premium pricing for specialized expertise</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Clear ROI: Time savings directly translates to billable hours or cost reduction</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>79% of legal professionals now use AI (2025)<CitationLink id={505} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Generative AI integration in law firms rose from 14% (2024) to 26% (2025)<CitationLink id={506} /></span></li>
                </ul>

                <p className="font-body text-sm font-semibold text-foreground mb-3">Required Courses (6-8 courses):</p>
                
                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">1. AI for Legal Research & Analysis</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>AI-powered case law research:</strong> Semantic search; citation analysis; precedent identification</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Statute & regulation analysis:</strong> Regulatory change monitoring; compliance mapping; jurisdiction-specific considerations</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Legal precedent identification:</strong> Pattern matching; analogical reasoning; distinguishing precedents; explainability requirements (courts require reasoning transparency)</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">2. AI for Contract Lifecycle Management</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Contract review & analysis:</strong> Key term extraction; obligation identification; risk flagging</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Clause extraction & comparison:</strong> Standard vs. negotiated terms; deviation analysis; benchmarking against industry standards</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Risk identification:</strong> Liability clauses; termination rights; intellectual property provisions; indemnification analysis</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Contract drafting assistance:</strong> Template generation; clause libraries; natural language generation; quality assurance</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-4">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">3. AI for E-Discovery & Litigation</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Document review automation:</strong> Technology-assisted review (TAR); predictive coding; privilege identification</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Email and communication analysis:</strong> Thread reconstruction; key player identification; timeline generation</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Deposition preparation:</strong> Evidence organization; witness preparation; argument construction</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Expert witness support:</strong> Demonstrative evidence generation; data visualization; explaining AI to judges/juries</span></li>
                    </ul>
                </div>

                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>87% of large law firms have adopted AI; only 71% of solo firms<CitationLink id={505} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>77% of legal professionals report improved operations as biggest revenue gain from AI<CitationLink id={505} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>54% of legal professionals use AI to draft correspondence<CitationLink id={507} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Firms with 51+ lawyers report 39% generative AI adoption rate—double that of smaller firms<CitationLink id={507} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>45% of law firms either use generative AI or plan to make it central within one year<CitationLink id={506} /></span></li>
                </ul>
              </div>

              {/* Priority 4: Public Sector */}
              <div id="vertical-4" className="mb-6 bg-muted/30 rounded-xl p-5 border border-border">
                <h6 className="font-display text-base font-semibold text-foreground mb-4">Priority Vertical 4: Public Sector & Government</h6>
                
                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Size & Characteristics:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4 ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>Government AI spending growing rapidly with strategic value</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Public-sector adoption drives private-sector demand</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Different buying process: Tenders, frameworks, security clearances</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Government transparency and explainability requirements create unique training needs</span></li>
                </ul>

                <p className="font-body text-sm font-semibold text-foreground mb-3">Required Courses (6-8 courses):</p>
                
                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">1. AI for Citizen Services</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>AI chatbots for government services:</strong> Inquiry handling; application processing; multilingual support; accessibility requirements (WCAG compliance)</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Application processing automation:</strong> Permits; licenses; benefits</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Public inquiry handling:</strong> Email triage; response generation; escalation logic; quality assurance</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Case studies:</strong> Singapore PAIR (64,626 monthly users), Denmark government AI strategy, UK Government Digital Service</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">2. AI for Government Operations</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Document processing & records management:</strong> Digitization; classification; search; retention policies</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Meeting transcription & summarization:</strong> Automated minutes; action item extraction; decision tracking</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Policy analysis & research:</strong> Evidence synthesis; impact assessment; international comparison</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Budget forecasting:</strong> Revenue prediction; expenditure modeling; scenario planning</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-4">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">3. AI Governance for Public Sector</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Transparency & explainability:</strong> Government AI decisions must be explainable to citizens; algorithmic transparency requirements; case study: Amsterdam Algorithm Register</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Data privacy & sovereignty:</strong> Citizen data protection; cross-border data restrictions; Schrems II implications</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Bias detection & fairness:</strong> Government must serve all citizens equitably; demographic parity analysis; fairness metrics (disparate impact)</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Procurement & vendor evaluation:</strong> How government evaluates AI vendors; security requirements; performance benchmarks; total cost of ownership</span></li>
                    </ul>
                </div>

                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>71% of governments implementing AI cite "lack of internal expertise" as primary barrier<CitationLink id={508} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Governments with formal AI training programs achieve 4.1x higher citizen satisfaction with AI services<CitationLink id={509} /></span></li>
                </ul>
              </div>

              {/* Priority 5: Education */}
              <div id="vertical-5" className="bg-muted/30 rounded-xl p-5 border border-border">
                <h6 className="font-display text-base font-semibold text-foreground mb-4">Priority Vertical 5: Education & Academic Institutions</h6>
                
                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Size & Characteristics:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4 ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>Global AI in education market: $5.88-7.05B (2024-25) → $32-112B by 2030-34 (31-36% CAGR)<CitationLink id={510} /><CitationLink id={511} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>AI in K-12 education market: $390.8M (2024) → $7.95B by 2033 (38.1% CAGR)<CitationLink id={512} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>K-12 sector represents 45% of worldwide AI in education earnings in 2025<CitationLink id={513} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Unique buyer dynamics: Budget cycles tied to academic year; procurement through committees; strong preference for peer institution references</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Regulatory complexity: Student data privacy (FERPA in US, GDPR in EU); academic integrity concerns around AI-generated content</span></li>
                </ul>

                <p className="font-body text-sm font-semibold text-foreground mb-3">Recommended Courses (6-8 courses):</p>
                
                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">1. AI for Teaching & Learning</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>AI-assisted lesson planning:</strong> Curriculum development; differentiated instruction; creating assessments</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Student engagement tools:</strong> Personalized learning pathways; adaptive content delivery; real-time feedback mechanisms</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Academic integrity in the AI era:</strong> Detection tools and their limitations; assignment design that incorporates AI appropriately; developing AI literacy alongside subject mastery</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Classroom implementation:</strong> Practical workshops on integrating ChatGPT, Copilot, and discipline-specific AI tools into daily teaching</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-3">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">2. AI for Academic Administration</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Enrollment management:</strong> Predictive analytics for student recruitment; yield optimization; retention risk identification</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Student services automation:</strong> Chatbots for admissions inquiries; financial aid processing; academic advising support</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Administrative efficiency:</strong> Meeting summarization; report generation; policy document analysis; scheduling optimization</span></li>
                    </ul>
                  </div>

                <div className="bg-card rounded-xl p-4 border border-border mb-4">
                  <p className="font-body text-sm font-semibold text-foreground mb-2">3. AI Governance for Education</p>
                  <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Student data privacy:</strong> FERPA compliance; GDPR considerations for student records; vendor data handling requirements</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Academic integrity frameworks:</strong> Developing institutional AI policies; balancing innovation with integrity; faculty guidelines for AI-assisted assignments</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Ethical AI in education:</strong> Bias in educational AI systems; equity considerations; transparency in algorithmic decision-making (admissions, grading support)</span></li>
                    <li className="flex items-start gap-2"><span>•</span><span><strong>Procurement guidance:</strong> Evaluating EdTech AI vendors; security requirements; total cost of ownership</span></li>
                    </ul>
                </div>

                <p className="font-body text-sm font-semibold text-foreground mb-2">Market Validation:</p>
                <ul className="space-y-1 font-body text-sm text-muted-foreground ml-4">
                  <li className="flex items-start gap-2"><span>•</span><span>Only 40% of K-12 teachers feel qualified to use AI tools in classrooms<CitationLink id={513} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>92% of students report using tools like ChatGPT in 2025 (up from 66% in 2024)<CitationLink id={514} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>South Korea investing $740 million (2024-2026) to train teachers on AI tools<CitationLink id={511} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Microsoft investing $4 billion in AI education initiatives (July 2025)<CitationLink id={511} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>OpenAI committed $10 million over five years for K-12 AI integration partnership<CitationLink id={512} /></span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>NLP tools enable 22% of AI edtech platforms in 2025—40% year-over-year rise<CitationLink id={513} /></span></li>
                </ul>
              </div>
            </div>

            {/* Strategic Recommendations for Finding 4 */}
            <div className="bg-gold/5 rounded-xl p-6 border border-gold/20">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-gold" />
                Strategic Recommendations
              </h4>
              <ul className="space-y-3">
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">1.</span>
                  <span><strong>Launch government and education sector-specific AI adoption programs</strong> (currently underserved 5% segments)</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">2.</span>
                  <span><strong>Develop Financial Services vertical (8-10 courses)</strong> as highest-margin opportunity</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">3.</span>
                  <span><strong>Create Manufacturing & Industrial track</strong> to capture 35% CAGR market</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">4.</span>
                  <span><strong>Build Legal Services curriculum</strong> capturing fastest-growing vertical (28% CAGR for legal AI software)</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">5.</span>
                  <span><strong>Develop Education & Academic Institutions vertical (6-8 courses)</strong> to capture 31-38% CAGR EdTech AI markets</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAnalysis;
