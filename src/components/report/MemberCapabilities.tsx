import { motion } from "framer-motion";
import { Users, AlertTriangle, Lightbulb, Target, TrendingUp, MessageSquare, Bot, Sparkles, DollarSign, Clock, Zap, BookOpen, Brain, Shield, BarChart3, FlaskConical, Code, Building2, Briefcase } from "lucide-react";
import CitationLink from "./CitationLink";
import SectionHeader from "./SectionHeader";
import MethodologyBlock from "./MethodologyBlock";
import InsightBox from "./InsightBox";
import { subsectionStyles, cardStyles, iconWrapperStyles } from "./styles";

const toolPriorityHigh = [
  {
    number: 1,
    title: "Sales Pipeline & Lead Qualification Automation",
    revenueImpact: "25-35% higher conversion rates",
    costImpact: "30% shorter sales cycles",
    citations: [407],
    color: "gold",
  },
  {
    number: 2,
    title: "Course Recommendation Engines",
    revenueImpact: "35% of sales through personalized suggestions (Amazon)",
    costImpact: "$1B annual savings in retention (Netflix)",
    citations: [408],
    color: "gold",
  },
  {
    number: 3,
    title: "Automated Customer Success / Retention Systems",
    revenueImpact: "Preserves recurring revenue, increases LTV",
    costImpact: "Retaining customers 5-25x cheaper than acquiring",
    citations: [409],
    color: "gold",
  },
];

const toolPriorityMediumHigh = [
  {
    number: 4,
    title: "Customer Service Chatbots",
    stats: ["30% reduction in operational costs by 2029", "70% of inquiries resolved autonomously (Vodafone TOBi)"],
    payback: "6-12 months",
    citations: [410, 411, 412],
    color: "info",
  },
  {
    number: 5,
    title: "Content Generation & Marketing Automation",
    stats: ["40% lift in response rates (telecom case study)", "5-15% marketing productivity increase"],
    payback: "3-6 months",
    citations: [413, 414],
    color: "info",
  },
  {
    number: 6,
    title: "Learning & Training Personalization",
    stats: ["70% improvement with tailored learning (Coursera)", "Improved motivation and completion rates"],
    payback: "6-12 months",
    citations: [415, 416],
    color: "info",
  },
];

const toolPriorityMedium = [
  {
    number: 7,
    title: "Internal Knowledge Management / Q&A Systems",
    stats: "AI redefines knowledge management with intelligent categorization and personalization",
    payback: "18-24 months",
    challenge: "Value depends on content quality and user adoption",
    citations: [417],
    color: "steel",
  },
  {
    number: 8,
    title: "Assessment & Quiz Generation",
    stats: "Teachers using AI weekly save 5.9 hours/week",
    payback: "6-12 months",
    challenge: "Requires human review; may fall short on higher-order thinking skills",
    citations: [418, 419],
    color: "steel",
  },
];

const advancedProviders = [
  { name: "Provider A", country: "Eastern Europe", capabilities: "Video-script generation; multilingual SEO/content agents; course-recommendation chatbot; sales automation", outcomes: "Lead generation improvement, tripled engagement on content strategies" },
  { name: "Provider B", country: "Central Europe", capabilities: "Student-portal chatbot (production ~1 year); LMS mentor bot with context-aware RAG", outcomes: "Automated administrative/academic queries; personalized content access" },
  { name: "Provider C", country: "Northern Europe", capabilities: "AI tutor & microlearning platform; AI flashcards/quizzes; webinar support tooling", outcomes: "Comprehensive AI learning ecosystem" },
  { name: "Provider D", country: "Western Europe", capabilities: "Marketing automation, adoption workshops", outcomes: "40% time savings; successful post-purchase adoption programs" },
  { name: "Provider E", country: "Asia-Pacific", capabilities: "Content-creation initiative", outcomes: "~40% time-to-delivery reduction" },
  { name: "Provider F", country: "Western Europe", capabilities: "AI Learning Buddy as a co-trainer for software training", outcomes: "Integrated AI assistance in training delivery" },
];

const MemberCapabilities = () => {
  return (
    <section id="section-5" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          sectionNumber={5}
          label="Section 5"
          title="AI Tool Adoption Patterns"
          id="section-5-header"
        />

        {/* 5.1 Tool Usage Patterns */}
        <div id="section-5-1" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  5.1
                </div>
                <h3 className={subsectionStyles.title}>
                  Tool Usage Patterns by Category
                </h3>
              </div>

              <div>
              {/* Methodology */}
              <MethodologyBlock
                methodology="Analysis of training provider surveys conducted July-September 2025 in response to the question: 'What AI tools or platforms do you use internally?'"
              />
              
              <div className="mb-8">
                <p className="font-body text-sm text-muted-foreground">
                  <strong>Purpose:</strong> Understanding what tools training providers actually use reveals:
                </p>
                <ul className="mt-2 space-y-1 font-body text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span>•</span><strong>Validated capabilities:</strong> Tools organizations have hands-on experience with</li>
                  <li className="flex items-start gap-2"><span>•</span><strong>Adoption gaps:</strong> Disconnect between tool availability vs. actual usage</li>
                  <li className="flex items-start gap-2"><span>•</span><strong>Advanced capabilities:</strong> Organizations with sophisticated internal AI operations</li>
                  <li className="flex items-start gap-2"><span>•</span><strong>Market insights:</strong> Tool choices reflect real-world effectiveness</li>
                </ul>
              </div>
            </div>

            {/* Critical Finding: Copilot Gap */}
            <div id="copilot-gap" className="mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Critical Finding: The Copilot Training-Practice Gap
              </h4>
              
              <p className="font-body text-sm text-muted-foreground mb-4">
                <strong>100%</strong> of training providers sell Microsoft Copilot training, yet only <strong>36%</strong> use Copilot internally. This gap between training offerings and internal practice may impact expertise depth and client credibility.
              </p>

              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2"><span>•</span><strong>100%</strong> of surveyed organizations offer Copilot training.</li>
                <li className="flex items-start gap-2"><span>•</span><strong>86%</strong> of providers report clients requesting Copilot training.</li>
                <li className="flex items-start gap-2"><span>•</span>Only <strong>36%</strong> of organizations (8/22) use Copilot internally.</li>
                <li className="flex items-start gap-2"><span>•</span><strong>73%</strong> of organizations (16/22) use ChatGPT internally.</li>
              </ul>

              <p className="font-body text-sm font-semibold text-foreground mb-2">Why This Matters:</p>
              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span><strong>Depth of expertise:</strong> Organizations extensively using ChatGPT but deploying Copilot may lack advanced implementation knowledge</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Use case discovery:</strong> Internal usage surfaces real-world challenges and workarounds</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Client credibility:</strong> Clients increasingly ask "do you use this yourselves?" — authentic experience strengthens positioning</li>
              </ul>

              <p className="font-body text-sm font-semibold text-foreground mb-2">Why Organizations Choose ChatGPT Over Copilot Internally:</p>
              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span>"Staff choose free tools over paid ones due to budget constraints" — Survey respondents</li>
                <li className="flex items-start gap-2"><span>•</span>Copilot licenses typically limited to 10-25 seats (executives/marketing only)</li>
                <li className="flex items-start gap-2"><span>•</span>ChatGPT's flexibility for experimentation vs. Copilot's Microsoft 365 integration focus</li>
              </ul>

              <p className="font-body text-sm text-muted-foreground">
                <strong>Strategic Implication:</strong> Organizations should increase internal Copilot deployment to build deeper expertise, or explicitly position ChatGPT expertise as complementary offering.
              </p>
            </div>

            {/* Category 1: Free/Low-Cost Tools */}
            <div id="category-1" className="bg-card rounded-xl p-6 border border-border mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-info" />
                Category 1: Free/Low-Cost Tools (16/22 organizations, 73%)
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Widely accessible AI tools used for daily productivity, content creation, and experimentation. These form the baseline of internal AI adoption.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-body text-sm font-semibold text-foreground">ChatGPT</p>
                    <span className="text-xs px-2 py-1 bg-success/20 text-success rounded">16/22 organizations</span>
                  </div>
                  <ul className="space-y-1 font-body text-xs text-muted-foreground">
                    <li>• Extensive use for content creation, admin tasks</li>
                    <li>• Primary tool for experimentation and POCs</li>
                  </ul>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-body text-sm font-semibold text-foreground">Microsoft Copilot</p>
                    <span className="text-xs px-2 py-1 bg-warning/20 text-warning rounded">8/22 organizations</span>
                  </div>
                  <ul className="space-y-1 font-body text-xs text-muted-foreground">
                    <li>• Typically 10-25 licenses for executives/marketing</li>
                    <li>• Most organizations have pilot or limited deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Category 2: Custom/Advanced AI Solutions */}
            <div id="category-2" className="bg-card rounded-xl p-6 border border-border mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Bot className="w-5 h-5 text-gold" />
                Category 2: Custom/Advanced AI Solutions (13/22 organizations, 59%)
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                These organizations represent the industry's advanced capability tier:
              </p>

              <div className="space-y-3">
                {advancedProviders.map((provider, i) => (
                  <div key={i} className="bg-background rounded-xl p-4 border border-border">
                    <p className="font-body text-sm font-semibold text-foreground mb-1">{provider.name}</p>
                    <p className="font-body text-xs text-muted-foreground mb-1">
                      {provider.capabilities}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {provider.outcomes}
                    </p>
                  </div>
                ))}
                
                {/* Additional providers (anonymized; same convention as Provider A–F above) */}
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Provider G</p>
                  <p className="font-body text-xs text-muted-foreground">Internal chatbot implementation</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Provider H</p>
                  <p className="font-body text-xs text-muted-foreground">Creative AI suite, project automation</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Provider I</p>
                  <p className="font-body text-xs text-muted-foreground">Website chatbot development</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Provider J</p>
                  <p className="font-body text-xs text-muted-foreground">AI transcript Q&A agent</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Provider K</p>
                  <p className="font-body text-xs text-muted-foreground">Content & assessment creation</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Provider L</p>
                  <p className="font-body text-xs text-muted-foreground">Internal AI assistant (pilot)</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="font-body text-sm font-semibold text-foreground mb-1">Provider M</p>
                  <p className="font-body text-xs text-muted-foreground">Marketing & process automation</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-info/10 rounded-xl border border-info/30">
                <p className="font-body text-sm font-semibold text-foreground mb-2">Top Internal Tool Priorities Reported:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-background rounded-full border border-border">Marketing automation</span>
                  <span className="text-xs px-3 py-1 bg-background rounded-full border border-border">Scheduling automation</span>
                  <span className="text-xs px-3 py-1 bg-background rounded-full border border-border">AI mentor within LMS</span>
                  <span className="text-xs px-3 py-1 bg-background rounded-full border border-border">Language translation</span>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>

        {/* 5.2 External Market Research: Tool Adoption Across Sectors */}
        <div id="section-5-2" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-info/20 flex items-center justify-center text-info font-bold">5.2</span>
              External Market Research: Tool Adoption Across Sectors
            </h3>

            <p className="font-body text-sm text-muted-foreground mb-6">
              <strong>Objective:</strong> Validate training provider tool choices against broader market trends.
            </p>

            {/* Tech Professionals/Developers */}
            <div className="bg-card rounded-xl p-6 border border-border mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-llpa-blue" />
                Tech Professionals/Developers
              </h4>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Most Popular Developer AI Tools (2025):</p>
              <ul className="space-y-2 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span><strong>GitHub Copilot:</strong> Activated by 1M+ developers, 20K+ organizations</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Cursor IDE:</strong> Most popular AI-powered IDE</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Claude:</strong> Preferred for coding and documentation</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Tabnine:</strong> Privacy-focused code completion</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Amazon CodeWhisperer:</strong> Security-focused development</li>
              </ul>
              <p className="font-body text-xs text-muted-foreground">
                Source: GitHub Annual Report (2025), Stack Overflow Developer Survey (2025)<CitationLink id={185} /><CitationLink id={186} />
              </p>
            </div>

            {/* Small and Medium Businesses (SMBs) */}
            <div className="bg-card rounded-xl p-6 border border-border mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-llpa-orange" />
                Small and Medium Businesses (SMBs)
              </h4>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Most Popular SMB AI Tools:</p>
              <ul className="space-y-2 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span><strong>Microsoft 365 Copilot:</strong> Integrated AI across Office apps</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Salesforce AI/Agentforce:</strong> CRM and customer service</li>
                <li className="flex items-start gap-2"><span>•</span><strong>ChatGPT:</strong> General business operations (most common)</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Google Workspace AI with Gemini:</strong> Productivity suite</li>
                <li className="flex items-start gap-2"><span>•</span><strong>QuickBooks with Intuit Assist:</strong> Financial management</li>
                <li className="flex items-start gap-2"><span>•</span><strong>AI chatbots:</strong> Customer support automation</li>
              </ul>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Primary SMB Use Cases:</p>
              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span>Customer service automation (38%)</li>
                <li className="flex items-start gap-2"><span>•</span>Marketing and social media (28%)</li>
                <li className="flex items-start gap-2"><span>•</span>Written communications (24%)</li>
                <li className="flex items-start gap-2"><span>•</span>Cybersecurity (19%)</li>
              </ul>
              <p className="font-body text-xs text-muted-foreground">
                Sources: US Chamber of Commerce AI Study (2025), Salesforce SMB Trends Report (2025), Intuit AI Survey (2024)<CitationLink id={187} /><CitationLink id={188} /><CitationLink id={189} />
              </p>
            </div>

            {/* Individual Consumers */}
            <div className="bg-card rounded-xl p-6 border border-border mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-llpa-green" />
                Individual Consumers
              </h4>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Consumer AI Tool Adoption:</p>
              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span>28% of Americans use ChatGPT (leading consumer AI tool)</li>
                <li className="flex items-start gap-2"><span>•</span>23% use Google Gemini (second most popular)</li>
                <li className="flex items-start gap-2"><span>•</span>91% of AI users reach for favorite general AI tool for nearly every task</li>
                <li className="flex items-start gap-2"><span>•</span>100M+ users on Notion AI</li>
                <li className="flex items-start gap-2"><span>•</span>350M monthly users on Google Gemini</li>
              </ul>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Most Popular Consumer AI Tools:</p>
              <ul className="space-y-2 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span><strong>ChatGPT:</strong> 28% adoption rate, dominant market leader</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Google Gemini:</strong> 23% adoption rate</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Notion AI:</strong> Productivity and organization (100M+ users)</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Canva:</strong> Design and creative work</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Grammarly:</strong> Writing assistance</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Claude:</strong> Growing adoption for complex tasks</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Perplexity:</strong> AI search engine (emerging)</li>
              </ul>
              <p className="font-body text-xs text-muted-foreground">
                Sources: Pew Research Center (2025), Google AI User Survey (2025), OpenAI Usage Statistics (2024)<CitationLink id={190} /><CitationLink id={191} />
              </p>
            </div>

            {/* Enterprise Organizations */}
            <div className="bg-card rounded-xl p-6 border border-border mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gold" />
                Enterprise Organizations
              </h4>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Enterprise AI Tool Adoption (2025):</p>
              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span>79% of enterprises using Microsoft Copilot (but only 50% deploying to all employees)</li>
                <li className="flex items-start gap-2"><span>•</span>68% of enterprises using 2+ LLM providers (multi-model strategy)</li>
                <li className="flex items-start gap-2"><span>•</span>41% planning to increase number of AI vendors in next 12 months</li>
              </ul>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Enterprise Tool Stack (Most Common):</p>
              <ul className="space-y-2 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span><strong>Microsoft 365 Copilot:</strong> Productivity suite integration</li>
                <li className="flex items-start gap-2"><span>•</span><strong>ChatGPT Enterprise:</strong> Custom AI with data privacy</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Salesforce AI:</strong> CRM and customer service</li>
                <li className="flex items-start gap-2"><span>•</span><strong>AWS Bedrock:</strong> Multi-model platform (OpenAI, Anthropic, Meta models)</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Google Cloud Vertex AI:</strong> ML/AI platform</li>
                <li className="flex items-start gap-2"><span>•</span><strong>Anthropic Claude:</strong> Complex reasoning, analysis (growing)</li>
              </ul>
              <p className="font-body text-sm font-semibold text-foreground mb-3">Why Multiple Vendors:</p>
              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span>•</span>Avoiding vendor lock-in (67% cite this)</li>
                <li className="flex items-start gap-2"><span>•</span>Optimizing cost/performance (59%)</li>
                <li className="flex items-start gap-2"><span>•</span>Regulatory compliance (43%)</li>
                <li className="flex items-start gap-2"><span>•</span>Geographic data residency (38%)</li>
              </ul>
              <p className="font-body text-xs text-muted-foreground">
                Sources: Gartner CIO Survey (2025), Andreessen Horowitz State of AI Report (2024), CNBC Tech Executive Council (2024)<CitationLink id={192} /><CitationLink id={193} />
              </p>
            </div>
          </motion.div>
        </div>

        {/* 5.3 Market Validation: Which Tools Deliver ROI */}
        <div id="section-5-3" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  5.3
                </div>
                <h3 className={subsectionStyles.title}>
                  Market Validation: Which Internal Tools Deliver ROI?
                </h3>
              </div>

              {/* Methodology */}
              <div className="mb-8">
              <p className="font-body text-sm text-muted-foreground mb-2">
                <strong>Methodology:</strong> Analysis of external ROI benchmarks from consulting firms (McKinsey, Gartner, Forrester, BCG), technology vendors (Salesforce), and industry research organizations cross-referenced against provider-reported internal tool development.
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <strong>Objective:</strong> Evaluate which AI tools organizations are building against external ROI benchmarks. Organizations are actively building internal AI tools — but are they building the tools that deliver the highest value?
              </p>
            </div>

            {/* Highest Priority: Revenue + Cost */}
            <div id="priority-highest" className="bg-success/10 rounded-xl p-6 border border-success/30 mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                Highest Priority: Revenue-Generating + Cost-Saving Tools
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                These tools deliver both top-line growth AND operational efficiency — the strongest business case.
              </p>

              <ul className="space-y-3">
                {toolPriorityHigh.map((tool) => (
                  <li key={tool.number} className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">{tool.number}. {tool.title}</strong>
                    <br />
                    Revenue: {tool.revenueImpact} · Cost: {tool.costImpact}
                    <span className="ml-1">{tool.citations.map(c => <CitationLink key={c} id={c} />)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* High Priority: Cost-Saving Tools */}
            <div id="priority-high" className="bg-info/10 rounded-xl p-6 border border-info/30 mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-info" />
                High Priority: Strong Cost-Saving Tools
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                These tools deliver proven operational efficiency with clear payback periods.
              </p>

              <ul className="space-y-3">
                {toolPriorityMediumHigh.map((tool) => (
                  <li key={tool.number} className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">{tool.number}. {tool.title}</strong> (Payback: {tool.payback})
                    <ul className="ml-4 mt-1 space-y-0.5">
                      {tool.stats.map((stat, i) => (
                        <li key={i}>• {stat}</li>
                      ))}
                    </ul>
                    <span>{tool.citations.map(c => <CitationLink key={c} id={c} />)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medium Priority */}
            <div id="priority-medium" className="bg-card rounded-xl p-6 border border-border mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-steel" />
                Medium Priority: Moderate ROI Tools
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                These tools deliver value but have longer payback periods or quality constraints.
              </p>

              <ul className="space-y-3">
                {toolPriorityMedium.map((tool) => (
                  <li key={tool.number} className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">{tool.number}. {tool.title}</strong> (Payback: {tool.payback})
                    <br />
                    {tool.stats}
                    <br />
                    <em>Challenge: {tool.challenge}</em>
                    <span className="ml-1">{tool.citations.map(c => <CitationLink key={c} id={c} />)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lower Priority */}
            <div id="priority-lower" className="bg-muted/30 rounded-xl p-6 border border-border mb-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-muted-foreground" />
                Lower Priority: Unproven ROI
              </h4>
              
              <p className="font-body text-sm text-muted-foreground mb-2">
                <strong className="text-foreground">9. AI Coaches / Avatar Assistants</strong>
              </p>
              <ul className="space-y-1 font-body text-sm text-muted-foreground mb-3">
                <li>• Limited data available on ROI</li>
                <li>• Early-stage implementations across industry</li>
                <li>• User acceptance varies significantly by culture and learning style</li>
              </ul>
              <p className="font-body text-sm text-muted-foreground">
                Research identifies three critical ethical risks: "(1) the lack of empathic accuracy and empathy in situations of need, (2) non-responsible and biased decision-making, and (3) confidentiality and data security." AI coaches lack the ability to accurately identify emotions and understand underlying motivations.<CitationLink id={423} />
              </p>
            </div>

            {/* Strategic Recommendations */}
            <div className="bg-gold/5 rounded-xl p-6 border border-gold/20">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-gold" />
                Strategic Recommendations
              </h4>
              <ul className="space-y-3">
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">1.</span>
                  <span><strong>Close the Copilot gap:</strong> Organizations should increase internal Copilot deployment to build deeper expertise</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">2.</span>
                  <span><strong>Prioritize high-ROI tools:</strong> Focus internal development on sales pipeline automation, recommendation engines, and customer success systems</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">3.</span>
                  <span><strong>Leverage advanced capabilities:</strong> Organizations with production AI systems should share implementation learnings</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1 font-semibold">4.</span>
                  <span><strong>Document ROI from internal tools:</strong> Create case studies showing measurable outcomes (40% time savings, $17K leads) to validate training recommendations</span>
                </li>
              </ul>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MemberCapabilities;
