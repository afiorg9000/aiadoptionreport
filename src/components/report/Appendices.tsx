import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, BarChart3, Mail, FlaskConical } from "lucide-react";
import { iconWrapperStyles } from "./styles";

const interviewParticipants = [
  { organization: "Teknologisk Institut", country: "Denmark", date: "July 15, 2025" },
  { organization: "Computrain", country: "Netherlands", date: "July 18, 2025" },
  { organization: "Digicomp", country: "Switzerland", date: "July 22, 2025" },
  { organization: "TÜV Rheinland", country: "Germany", date: "July 25, 2025" },
  { organization: "Eduhouse", country: "Finland", date: "July 29, 2025" },
  { organization: "Glasspaper", country: "UK", date: "August 1, 2025" },
  { organization: "Cornerstone", country: "UK/Sweden", date: "August 5, 2025" },
  { organization: "Rumos", country: "Portugal", date: "August 8, 2025" },
  { organization: "Kompas Xnet", country: "Slovenia", date: "August 12, 2025" },
  { organization: "Algebra", country: "Croatia", date: "August 15, 2025" },
  { organization: "Bittnet", country: "Romania", date: "August 19, 2025" },
  { organization: "ETC", country: "Austria", date: "August 22, 2025" },
  { organization: "Trainocate", country: "Singapore", date: "August 26, 2025" },
  { organization: "Lumify Work", country: "Australia", date: "August 29, 2025" },
  { organization: "CTU Training Solutions", country: "South Africa", date: "September 2, 2025" },
  { organization: "CloudTeam", country: "South Africa/Poland", date: "September 5, 2025" },
  { organization: "Semos Education", country: "North Macedonia", date: "September 9, 2025" },
  { organization: "GREEN Tecnologia", country: "Brazil", date: "September 12, 2025" },
  { organization: "CompuEducación", country: "Mexico", date: "September 16, 2025" },
  { organization: "ThinkSmart", country: "Bahrain/South Africa", date: "September 19, 2025" },
  { organization: "Gopas", country: "Slovakia", date: "September 23, 2025" },
  { organization: "BilgeAdam IT Services", country: "Turkey", date: "September 26, 2025" },
];

const interviewQuestions = [
  {
    category: "Market Demand",
    questions: [
      "What are clients asking for most when it comes to AI training?",
      "What trends are you seeing in client requests (past 6 months)?",
      "Which industries/sectors show highest demand?",
    ],
  },
  {
    category: "Internal AI Usage",
    questions: [
      "What AI tools or platforms do you use internally?",
      "How has AI changed your operations?",
      "Any measured productivity/cost impacts?",
    ],
  },
  {
    category: "Client Challenges",
    questions: [
      "What are the biggest challenges you and your clients face when adopting AI?",
      "What obstacles prevent clients from purchasing training?",
      "What implementation barriers do clients report?",
    ],
  },
  {
    category: "Geographic Context",
    questions: [
      "How would you characterize AI maturity in your market?",
      "What unique regional factors affect AI adoption?",
      "How does your market compare to others you're aware of?",
    ],
  },
  {
    category: "Strategic Priorities",
    questions: [
      "What curriculum gaps would you most like to see filled?",
      "What would make training providers more valuable to your organization?",
      "If you could invest in one area, what would it be?",
    ],
  },
];

const classificationDimensions = [
  {
    dimension: "Vendor/Creator",
    categories: [
      "Microsoft (courses focused on Microsoft technologies)",
      "Member-Created (proprietary content developed by training providers)",
      "AWS (Amazon Web Services courses)",
      "Google Cloud (Google AI/ML courses)",
      "CertNexus (vendor certification courses)",
      "Anthropic (Claude-focused courses)",
      "Other Vendors (CompTIA, NVIDIA, etc.)",
      "Open Source (Hugging Face, LangChain, etc.)",
    ],
  },
  {
    dimension: "Skill Level",
    categories: [
      "Beginner (no prerequisites, awareness/introductory)",
      "Intermediate (requires basic AI knowledge or related technical skills)",
      "Advanced (requires intermediate AI skills, production experience)",
      "Expert/Specialized (requires advanced expertise in specific domain)",
    ],
  },
  {
    dimension: "Delivery Method",
    categories: [
      "Live Virtual Instructor-Led",
      "Hybrid (combination of virtual and classroom)",
      "Self-Paced Online",
      "On-Demand Recording",
      "Classroom Only",
    ],
  },
  {
    dimension: "Target Audience",
    categories: [
      "Organizational Clients (enterprises, SMBs, government, education)",
      "Individual Learners (consumer market)",
    ],
  },
  {
    dimension: "Industry Specificity",
    categories: [
      "Generic/Cross-Industry",
      "Industry-Specific (identified by title keywords: healthcare, finance, manufacturing, legal, etc.)",
    ],
  },
];

const Appendices = () => {
  return (
    <section id="appendices" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-body text-sm font-medium tracking-widest uppercase text-llpa-blue mb-4 block">
            Methodology
          </span>
          <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
            Appendices
          </h2>
          <p className="font-body text-muted-foreground">
            Research methodology, classification frameworks, and data sources
          </p>
        </motion.div>

        {/* Appendix A: Member Interview Methodology */}
        <motion.div
          id="appendix-a"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="border-l-4 border-l-llpa-blue">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Users className="h-6 w-6 text-llpa-blue" />
                Appendix A: Member Interview Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-llpa-blue/5 p-4 rounded-xl">
                  <p className="font-body text-sm text-muted-foreground">Interview Period</p>
                  <p className="font-display text-lg font-semibold text-foreground">July 1 - September 30, 2025</p>
                </div>
                <div className="bg-llpa-green/5 p-4 rounded-xl">
                  <p className="font-body text-sm text-muted-foreground">Sample Size</p>
                  <p className="font-display text-lg font-semibold text-foreground">Training providers across 20+ countries</p>
                </div>
                <div className="bg-llpa-orange/5 p-4 rounded-xl">
                  <p className="font-body text-sm text-muted-foreground">Geographic Coverage</p>
                  <p className="font-display text-lg font-semibold text-foreground">20 countries</p>
                </div>
              </div>

              {/* Interview Format */}
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-3">Interview Format</h4>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-blue mt-1">•</span>
                    Semi-structured interviews (30-45 minutes each)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-blue mt-1">•</span>
                    Conducted via video conference (Zoom, Microsoft Teams)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-blue mt-1">•</span>
                    Recorded with participant consent; transcribed for analysis
                  </li>
                </ul>
              </div>

              {/* Interview Guide */}
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">Interview Guide - Core Questions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interviewQuestions.map((section) => (
                    <div key={section.category} className="bg-card border border-border rounded-xl p-4">
                      <h5 className="font-display font-semibold text-llpa-blue mb-3">{section.category}</h5>
                      <ul className="font-body text-sm text-muted-foreground space-y-2">
                        {section.questions.map((question, qIndex) => (
                          <li key={qIndex} className="flex items-start gap-2">
                            <span className="text-llpa-blue mt-1 text-xs">→</span>
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analysis Methodology */}
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className={`${iconWrapperStyles.small} bg-llpa-green/15`}>
                    <FlaskConical className="w-3.5 h-3.5 text-llpa-green" />
                  </span>
                  Analysis Methodology
                </h4>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-green mt-1">•</span>
                    Thematic coding using qualitative data analysis software (NVivo)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-green mt-1">•</span>
                    Inter-rater reliability check (two researchers independently coded subset of interviews)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-green mt-1">•</span>
                    Triangulation with external research to validate findings
                  </li>
                </ul>
              </div>

              {/* Participating Members Table */}
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">Participating Members</h4>
                <div className="border border-border rounded-xl overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-display font-semibold">Member Organization</TableHead>
                        <TableHead className="font-display font-semibold">Country</TableHead>
                        <TableHead className="font-display font-semibold">Interview Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {interviewParticipants.map((participant, index) => (
                        <TableRow key={participant.organization} className={index % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                          <TableCell className="font-body font-medium">{participant.organization}</TableCell>
                          <TableCell className="font-body text-muted-foreground">{participant.country}</TableCell>
                          <TableCell className="font-body text-muted-foreground">{participant.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Appendix B: Course Portfolio Classification Methodology */}
        <motion.div
          id="appendix-b"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="border-l-4 border-l-llpa-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BarChart3 className="h-6 w-6 text-llpa-green" />
                Appendix B: Course Portfolio Classification Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-llpa-green/5 p-4 rounded-xl">
                  <p className="font-body text-sm text-muted-foreground">Data Source</p>
                  <p className="font-display text-lg font-semibold text-foreground">training providers AI Courses Database (September 2025 snapshot)</p>
                </div>
                <div className="bg-llpa-blue/5 p-4 rounded-xl">
                  <p className="font-body text-sm text-muted-foreground">Total Courses Analyzed</p>
                  <p className="font-display text-lg font-semibold text-foreground">892</p>
                </div>
              </div>

              {/* Classification Dimensions */}
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">Classification Dimensions</h4>
                <div className="space-y-4">
                  {classificationDimensions.map((dim) => (
                    <div key={dim.dimension} className="bg-card border border-border rounded-xl p-4">
                      <h5 className="font-display font-semibold text-foreground mb-3">{dim.dimension}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {dim.categories.map((category, cIndex) => (
                          <div key={cIndex} className="flex items-start gap-2">
                            <span className="text-llpa-green mt-1 text-sm">•</span>
                            <span className="font-body text-sm text-muted-foreground">{category}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Classification Process */}
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-3">Classification Process</h4>
                <ul className="font-body text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-green mt-1">1.</span>
                    Automated keyword analysis of course titles and descriptions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-green mt-1">2.</span>
                    Manual review of ambiguous cases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-green mt-1">3.</span>
                    Validation sample: 10% of courses manually reclassified to check accuracy (96% agreement)
                  </li>
                </ul>
              </div>

              {/* Limitations */}
              <div className="bg-llpa-yellow/10 border border-llpa-yellow/30 rounded-xl p-4">
                <h4 className="font-display text-lg font-semibold text-foreground mb-3">Limitations</h4>
                <ul className="font-body text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">⚠</span>
                    Classification based on course titles/descriptions; actual content not reviewed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">⚠</span>
                    Some courses serve multiple audiences but classified in primary category
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">⚠</span>
                    Self-reported survey data (not independently verified)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">⚠</span>
                    Snapshot from September 2025; portfolio evolving
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Report Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-l-4 border-l-llpa-purple bg-gradient-to-br from-white to-llpa-purple/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-6 w-6 text-llpa-purple" />
                Report Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-body text-sm text-muted-foreground mb-6">
                This report was supervised by Claude Opus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="font-body text-sm text-muted-foreground mb-1">Report Version</p>
                  <p className="font-display font-semibold text-foreground">1.0 (Final)</p>
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground mb-1">Publication Date</p>
                  <p className="font-display font-semibold text-foreground">January 2025</p>
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground mb-1">Next Update</p>
                  <p className="font-display font-semibold text-foreground">Q3 2026 (progress review)</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-body text-muted-foreground mb-3">
                  For questions or feedback regarding this report:
                </p>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-llpa-blue" />
                  <div>
                    <p className="font-body font-medium text-foreground">training providers AI Strategy Lead</p>
                    <a 
                      href="mailto:Sofia.mendez@thellpa.com" 
                      className="font-body text-llpa-blue hover:underline"
                    >
                      Sofia.mendez@thellpa.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Appendices;
