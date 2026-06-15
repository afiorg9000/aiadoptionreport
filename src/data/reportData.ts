// AI Training Market Report Data with Citations

export interface Reference {
  id: number;
  source: string;
  description: string;
  url?: string;
}

export const references: Reference[] = [
  // Primary references
  { id: 1, source: 'NBER', description: 'Firm Data on AI (Working Paper w34836), Bloom et al., 2025. ~6,000 senior leaders (US/UK/Germany/Australia); ~89% report no productivity impact', url: 'https://www.nber.org/papers/w34836' },
  { id: 2, source: 'MIT Project NANDA', description: 'The GenAI Divide: State of AI in Business 2025 (July 2025). ~300 deployments; ~95% no return on $30–40B', url: 'https://nanda.media.mit.edu/' },
  { id: 3, source: 'US Census Bureau', description: 'Business Trends and Outlook Survey (BTOS). Firm-level US adoption (~17%).', url: 'https://www.census.gov/hfp/btos' },
  { id: 4, source: 'Eurostat', description: '"Use of AI technologies in enterprises" (released 11 Dec 2025, reference year 2025). EU 20.0%, up from 13.5%; size-class 17/30/55%; country and Nordic figures', url: 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2' },
  { id: 5, source: 'McKinsey', description: 'The State of AI 2025. 88% any-use; small high-performer minority', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { id: 6, source: 'Stanford HAI', description: 'AI Index 2025, Economy chapter. Adoption, benchmark, and inference-cost trends', url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report/economy' },
  { id: 7, source: 'Gartner', description: 'Worldwide AI spending forecast (15 Jan 2026). ~$2.52T for 2026 (revised to ~$2.59T in May 2026)', url: 'https://www.gartner.com/en/newsroom' },
  { id: 8, source: 'PwC', description: 'Global CEO Survey 2026. ~4,500 CEOs; 56% report neither higher revenue nor lower costs from AI', url: 'https://www.pwc.com/gx/en/issues/c-suite-insights/ceo-survey.html' },
  { id: 9, source: 'BCG', description: 'Build for the Future 2025 (n=1,250). 5% "future-built" / 35% scaling / 60% little-to-no benefit', url: 'https://www.bcg.com/capabilities/digital-technology-data' },
  { id: 10, source: 'BCG', description: "The Leader's Guide to Transforming with AI (10-20-70). 10% algorithms / 20% tech & data / 70% people, process, adoption.", url: 'https://www.bcg.com' },
  { id: 11, source: 'Microsoft / LinkedIn', description: 'Work Trend Index 2024. 53% of AI users worry it makes them look replaceable; 39% trained', url: 'https://news.microsoft.com/source/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/' },
  { id: 12, source: 'Eurostat', description: '"Use of AI in enterprises by NACE activity" (dataset isoc_eb_ain2, Dec 2025). Sector breakdown: Info & comms 62.5% → Construction 10.8%', url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises' },
  { id: 13, source: 'CBS (Statistics Netherlands)', description: 'AI Monitor 2024 (Sept 2025). NL 22.7% all-sector; 17.8% small / 59.2% 500+; sector table', url: 'https://www.cbs.nl/en-gb/news/2025/09/increasing-use-of-ai-by-business' },
  { id: 14, source: 'Peng et al. (2023)', description: 'GitHub Copilot RCT. ~95 developers; 55.8% faster on an HTTP-server task.', url: 'https://arxiv.org/abs/2302.06590' },
  { id: 15, source: 'Brynjolfsson, Li & Raymond', description: 'Generative AI at Work (NBER w31161). ~14% more issues resolved per hour in customer support.', url: 'https://www.nber.org/papers/w31161' },
  { id: 16, source: "Dell'Acqua et al. (2023)", description: 'Navigating the Jagged Technological Frontier (Harvard BS WP 24-013). ~25% faster on suitable tasks; worse outside AI competence.', url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=64700' },
  { id: 17, source: 'METR (2025)', description: 'Measuring the Impact of Early-2025 AI on Developer Productivity (arXiv 2507.09089). 16 experienced developers; 19% slower; Feb 2026 follow-up revising the design', url: 'https://arxiv.org/abs/2507.09089' },
  { id: 18, source: 'UK ONS', description: 'Management practices and adoption of technology and AI in UK firms.', url: 'https://www.ons.gov.uk' },
  { id: 19, source: 'Gartner', description: '30% of GenAI projects abandoned after proof-of-concept by end of 2025 (press release, 29 Jul 2024)', url: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025' },
  { id: 20, source: 'World Economic Forum', description: 'Future of Jobs Report 2025 (7 Jan 2025). 1,000+ employers, 14M+ workers, 55 economies; skills gaps as the leading barrier to transformation', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' },
  { id: 21, source: 'BCG', description: 'AI Radar 2026 (15 Jan 2026). 2,360 executives / 640 CEOs; 82% more optimistic on ROI; 90%+ keep investing despite uncertain payoff; Follower/Pragmatist/Trailblazer split', url: 'https://www.bcg.com/publications/2026/as-ai-investments-surge-ceos-take-the-lead' },
  // Corroborating sources
  { id: 22, source: 'Eurostat', description: 'Use of AI in enterprises, full statistical report (KS-01-26-009-EN, 2026). Sector + size-class detail behind the Dec 2025 release', url: 'https://ec.europa.eu/eurostat/documents/7870049/23260410/KS-01-26-009-EN-N.pdf' },
  { id: 23, source: 'OECD', description: 'AI adoption by small and medium-sized enterprises (Dec 2025, G7 presidency). OECD firm adoption 8.7%→14.2%→20.2% (2023–25); SME barriers — skills (~50%), maintenance cost (40%), hardware (32%)', url: 'https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/12/ai-adoption-by-small-and-medium-sized-enterprises_9c48eae6/426399c1-en.pdf' },
  { id: 24, source: 'US Census Bureau', description: 'BTOS (Nov 2025). 17.3% of US businesses use AI for any function' },
  { id: 25, source: 'UK DSIT', description: 'Business adoption of AI. 16% of UK businesses (5+ employees) use AI' },
  { id: 26, source: 'McKinsey', description: 'The State of AI in 2025: Agents, Innovation, and Transformation (primary, Nov 2025). 88% any-use; only 39% report any enterprise EBIT impact; ~6% high performers; n=1,993 across 105 nations', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { id: 27, source: 'Cross-study convergence', description: 'McKinsey ~5.5% / MIT ~5%. McKinsey high-performer share aligns with MIT NANDA measurable-P&L share' },
  { id: 28, source: 'Peng et al.', description: 'The Impact of AI on Developer Productivity (arXiv 2302.06590, primary). 55.8% faster; gains concentrated in less-experienced developers', url: 'https://arxiv.org/abs/2302.06590' },
  { id: 29, source: 'Cui et al.', description: 'Productivity Effects of GenAI: Field Experiment with GitHub Copilot (MIT GenAI). 1,974 developers at Microsoft & Accenture', url: 'https://mit-genai.pubpub.org/pub/v5iixksv' },
  { id: 30, source: 'Chatterjee et al. (2024)', description: 'GitHub Copilot at ANZ Bank. ~42% productivity gain' },
  { id: 31, source: 'Campero et al. (2022)', description: 'GPT-3 coding study. 27% speed increase; novices reach near-experienced levels' },
  { id: 32, source: '"Dear Diary" RCT', description: '~11 weeks of use before measurable productivity impact appears', url: 'https://arxiv.org/html/2410.18334v1' },
  { id: 33, source: 'BCG', description: 'The Widening AI Value Gap: Build for the Future 2025 (primary PDF, Sept 2025, n=1,250). 5% future-built / 35% scalers / 60% laggards; 70% of AI value in core business', url: 'https://media-publications.bcg.com/The-Widening-AI-Value-Gap-Sept-2025.pdf' },
  { id: 34, source: 'BCG', description: 'Press release — "Only 5% of Companies Globally Are Future-Built for AI."' },
  { id: 35, source: 'Business Insider / Yahoo Finance', description: 'Coverage of the BCG 5%/60% value gap', url: 'https://finance.yahoo.com/news/bcg-says-only-5-companies-171501700.html' },
  { id: 36, source: 'Cross-report convergence', description: 'BCG 5% / McKinsey 6% / MIT 5%. Three independent studies converge on a ~5% value-realizing minority' },
  { id: 37, source: 'Gartner', description: '30% of GenAI projects abandoned after PoC (primary press release, 29 Jul 2024). Reasons: poor data quality, inadequate risk controls, escalating costs, unclear business value', url: 'https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025' },
  { id: 38, source: 'Computer Weekly', description: 'Coverage of the Gartner abandonment forecast', url: 'https://www.computerweekly.com/news/366599232/Nearly-a-third-of-GenAI-projects-to-be-dropped-after-PoC' },
  { id: 39, source: 'Gartner (via Informatica)', description: 'Production rates. Only 48% of AI projects reach production; ~8 months prototype-to-production' },
  { id: 40, source: 'WEF', description: 'Future of Jobs Report 2025 (primary PDF). Exactly 63% of employers cite skills gaps as the biggest barrier to transformation 2025–2030; 85% plan upskilling', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' },
  { id: 41, source: 'WEF', description: 'Press release (8 Jan 2025). 170M created / 92M displaced / +78M net; 63% skills-gap barrier', url: 'https://www.weforum.org/press/2025/01/future-of-jobs-report-2025-78-million-new-job-opportunities-by-2030-but-urgent-upskilling-needed-to-prepare-workforces/' },
  { id: 42, source: 'WEF', description: 'Future of Jobs 2025, Skills Outlook chapter. North America 67% of workforce needs training by 2030' },
  { id: 43, source: 'Microsoft WorkLab', description: 'AI at Work Is Here. Now Comes the Hard Part (primary, 2024). 53% worry AI use makes them look replaceable; 78% BYOAI; 60% say company lacks a vision/plan. Edelman, 31,000 knowledge workers, 31 markets', url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part' },
  { id: 44, source: 'Microsoft / LinkedIn', description: '2024 WTI press release (8 May 2024)', url: 'https://news.microsoft.com/source/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/' },
  { id: 45, source: 'METR', description: 'Measuring the Impact of Early-2025 AI on Experienced OS Developer Productivity (primary blog, 10 Jul 2025). 16 devs, 246 tasks; AI +19% time; perception gap', url: 'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/' },
  { id: 46, source: 'METR', description: 'arXiv 2507.09089. Becker, Rush, Barnes, Rein', url: 'https://arxiv.org/abs/2507.09089' },
  { id: 47, source: 'METR', description: 'Changing our Developer Productivity Experiment Design (24 Feb 2026). Follow-up: −18% (orig subset) / −4% (new devs), wide CIs, redesign', url: 'https://metr.org/blog/2026-02-24-uplift-update/' },
  { id: 48, source: 'Robert Solow', description: 'New York Times Book Review, 12 Jul 1987. Origin of the productivity-paradox observation' },
  { id: 49, source: 'Torsten Slok (Apollo)', description: '2026. "AI is everywhere except in the incoming macroeconomic data."' },
  { id: 50, source: 'Federal Reserve Bank of St. Louis', description: 'State of Generative AI Adoption (Nov 2025). ~1.9% excess cumulative productivity growth since ChatGPT' },
  { id: 51, source: 'Fortune / FT analysis', description: '374 of S&P 500 mention AI positively in earnings calls, yet no aggregate productivity gain', url: 'https://fortune.com/2026/02/17/ai-productivity-paradox-ceo-study-robert-solow-information-technology-age' },
  { id: 52, source: 'MAS Economics / MRB Partners', description: 'AI added ~0.9pp gross to 2025 real GDP growth, ~0.4–0.5pp net of hardware imports' },
  { id: 53, source: 'Brynjolfsson, Li & Raymond', description: 'Generative AI at Work (NBER w31161, primary). 5,179 agents; +14% issues/hour; +34% for novices, minimal for experienced', url: 'https://www.nber.org/papers/w31161' },
  { id: 54, source: "Dell'Acqua et al.", description: 'Navigating the Jagged Technological Frontier (Organization Science, peer-reviewed 2025). 758 BCG consultants; +12.2% tasks, 25.1% faster; worse outside AI competence', url: 'https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838' },
  { id: 55, source: 'Noy & Zhang (2023)', description: '453 professionals; writing 40% faster, quality +0.45 SD' },
  { id: 56, source: 'Choi & Schwarcz (2024)', description: 'Law-exam study; bottom-of-distribution students gain most (skill-leveling pattern)' },
  { id: 57, source: 'Deskpro', description: 'State of AI in Support Operations (Nov 2025, 220+ professionals). 92% tech vs 58% regulated AI adoption (34-pt gap)', url: 'https://www.deskpro.com/blog/ai-adoption-report-support-operations-regulated-industries' },
  { id: 58, source: 'Databricks', description: 'State of Data + AI. Financial services most testing-intensive; experiment-to-production ratio improved from 29:1 to 10:1' },
  { id: 59, source: 'BDO', description: 'Survey of 210 US finance leaders (Nov 2025). 92% implemented/planning AI but only 43% have a formal AI governance framework' },
  { id: 60, source: 'Deloitte', description: 'AI adoption challenges / AI trends 2025. Infrastructure integration top barrier (35%); regulatory uncertainty in regulated sectors' },
  { id: 61, source: 'McKinsey', description: 'State of AI 2025 (agents). 62% of organizations at least experimenting with AI agents; 23% scaling in at least one function', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { id: 62, source: 'S&P Global Market Intelligence', description: 'Enterprise AI agent production rates (2026). ~31% of enterprises have an agent in production; banking/insurance ~47%, healthcare/government ~18%' },
  { id: 63, source: 'Gartner', description: 'Agentic AI forecasts (2026). 40% of enterprise applications to embed task-specific agents by end-2026; 40%+ of agentic projects predicted cancelled by 2027' },
  { id: 64, source: 'BCG', description: 'Build for the Future 2025 (agentic value share). Agents ≈17% of AI value in 2025, projected ~29% by 2028', url: 'https://media-publications.bcg.com/The-Widening-AI-Value-Gap-Sept-2025.pdf' },
  // Sector and survey sources
  { id: 65, source: 'S&P Global Market Intelligence / 451 Research', description: 'Voice of the Enterprise: AI & ML 2025. Financial-services AI deployment 54% (Jan 2025, from 40%), vs 46% cross-sector', url: 'https://www.spglobal.com/en/research-insights/special-reports/ai-and-banking-leaders-will-soon-pull-away-from-the-pack' },
  { id: 66, source: 'EY-Parthenon', description: 'Generative AI in Banking 2025. 77% of banks launched/soft-launched GenAI (from 61% in 2023)', url: 'https://www.ey.com/en_us/insights/banking-capital-markets/ai-in-banking-ey-parthenon-genai-survey-insights' },
  { id: 67, source: 'Deloitte', description: 'State of GenAI in the Enterprise (financial-services cut, ~540 respondents). 46% "pioneers."', url: 'https://www.deloitte.com/us/en/insights/industry/financial-services/generative-ai-financial-services-pioneers.html' },
  { id: 68, source: 'EY', description: 'Financial Services CTO Survey (2024). 68% cite legacy systems as the top obstacle to AI' },
  { id: 69, source: 'Survey of 43 US health systems', description: 'Adoption of AI in Healthcare (peer-reviewed, 2025). Clinical-documentation AI near-universal; imaging 90% deployed; barriers — immature tools (77%), financial (47%), regulatory (40%)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12202002/' },
  { id: 70, source: 'American Hospital Association', description: '~81% of US hospitals had not broadly adopted AI; large hospitals ~1.5x more likely' },
  { id: 71, source: 'Experian Health', description: 'Survey (Oct 2025, 200 decision-makers). Privacy/security top barrier (50%), accuracy (41%)', url: 'https://www.experian.com/blogs/healthcare/new-survey-shows-providers-are-confident-but-cautious-about-ai-adoption-in-healthcare/' },
  { id: 72, source: 'ScienceDirect', description: 'Review (Oct 2025). Healthcare AI barriers: clinician trust, AI literacy, de-skilling concerns', url: 'https://www.sciencedirect.com/science/article/pii/S092575352500253X' },
  { id: 73, source: 'US Census BTOS (via Digit Software)', description: 'Manufacturer AI use 1.8% (Sep 2023) → 13.9% (Feb 2026)', url: 'https://www.automation.com/article/report-ai-adoption-us-manufacturing-quadrupled' },
  { id: 74, source: 'Deloitte', description: '2025 Smart Manufacturing and Operations Survey (600 executives). 29% using AI/ML at facility/network level', url: 'https://www.deloitte.com/us/en/insights/industry/manufacturing/2025-smart-manufacturing-survey.html' },
  { id: 75, source: 'Capgemini Research Institute', description: 'Smart Factories 2025. 42% adopted AI; only 12% at enterprise scale' },
  { id: 76, source: 'Gartner', description: 'Manufacturing AI pilots. 58% of pilot delays stem from infrastructure readiness, not model development' },
  { id: 77, source: 'ZEW', description: 'Germany, 2023 (via arXiv 2407.05426). 10% of manufacturing vs 30% of information-economy firms had implemented AI' },
  { id: 78, source: 'AWS', description: 'Generative AI Adoption Index (Access Partnership, 3,739 IT decision-makers, 9 countries, 2025). Only 14% had a change-management strategy', url: 'https://press.aboutamazon.com/aws/2025/5/generative-ai-adoption-index' },
  { id: 79, source: 'PwC', description: 'Global Workforce Hopes & Fears 2025 (49,843 workers, 48 countries). Daily vs infrequent AI users: 92% vs 58% productivity, 58% vs 36% job security', url: 'https://www.pwc.com/id/en/media-centre/press-release/2026/english/hopes-and-fears-2025.html' },
  { id: 80, source: 'KPMG', description: 'Generative AI Adoption Index 2025 (Canada). 93% report enterprise-level adoption but only 2% realize measurable ROI', url: 'https://assets.kpmg.com/content/dam/kpmg/ca/pdf/2025/11/ca-generative-ai-adoption-index-report-en.pdf' },
  { id: 81, source: 'LexisNexis', description: 'Future of Work Report 2025 (1,800+ legal/professional respondents). 82% open to GenAI; 53% save 1–2 hrs/day' },
  { id: 82, source: 'NVIDIA', description: 'State of AI in Retail and CPG 2025. Content creation leads retail AI use at 67%' },
  { id: 83, source: 'Capgemini', description: 'Rise of Agentic AI (Jul 2025). Only 2% of retailers at full-scale agent deployment' },
  { id: 84, source: 'Salesforce', description: 'Connected Shoppers Report (6th ed., Mar 2025; 1,700 retail decision-makers, 21 countries). 75% say AI agents will be essential to compete within a year' },
  { id: 85, source: 'Brookings', description: 'Assessing the state of AI adoption across the federal government (2026). US federal AI use cases 710 (2023) → 3,600+ (2025)', url: 'https://www.brookings.edu/articles/assessing-the-state-of-ai-adoption-across-the-federal-government/' },
  { id: 86, source: 'Gallup', description: 'Q4 2025. 43% of public-sector employees use AI at least a few times/year (from 17% in 2023)', url: 'https://www.gallup.com/workplace/702983/adoption-rapidly-growing-public-sector.aspx' },
  { id: 87, source: 'EY', description: '2026 Government & Public Sector Federal Trends Report (131 federal leaders). Top barriers — budget (34%), outdated infrastructure (32%), skilled-personnel shortage (31%)', url: 'https://www.ey.com/en_us/newsroom/2026/04/federal-government-agencies-efficiency-efforts-face-significant-barriers' },
  { id: 88, source: 'Public Sector AI Adoption Index 2026', description: 'Public First / Center for Data Innovation; 3,335 public servants, 10 countries. 74% now use AI', url: 'https://datainnovation.org/2026/02/public-sector-ai-adoption-index-2026/' },
  { id: 89, source: 'US GAO', description: '2025. Generative-AI use cases increased significantly across federal agencies; policy-compliance challenges cited' },
  // Regional and country sources
  { id: 90, source: 'Bitkom Research', description: 'AI in Germany 2025 (n=604 firms, 20+ employees). AI use 36% (from 20%); ~half cite legal uncertainty, lack of know-how, and staff shortage' },
  { id: 91, source: 'Eurostat / Our World in Data', description: 'EU country adoption (2025 reference year). Denmark 42.0%, Finland 37.8%, Sweden 35.0%, Belgium 34.5%, Netherlands 33.2%; EU avg 20.0%', url: 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2' },
  { id: 92, source: 'Implicator.ai', description: 'Eurostat analysis (2026). Capital-vs-adoption split: UK/France/Germany lead AI funding but trail the Nordics in enterprise adoption', url: 'https://www.implicator.ai/denmark-leads-europe-in-business-ai-use-at-42-eurostat-data-shows/' },
  { id: 93, source: 'IMDA', description: 'Singapore Digital Economy Report 2025 (primary). SME AI adoption tripled 4.2%→14.5%; large enterprises 62.5%; 84% off-the-shelf GenAI', url: 'https://www.imda.gov.sg/-/media/imda/files/about/resources/corporate-publications/annual-report/imda-sgde-report-fy2024-2025.pdf' },
  { id: 94, source: 'Microsoft AI Economy Institute', description: 'Global AI Adoption 2025 (147 countries, working-age population). UAE 64.0%, Singapore 60.9%; US 28.3% (24th)', url: 'https://www.microsoft.com/en-us/corporate-responsibility/topics/ai-economy-institute/reports/global-ai-adoption-2025/' },
  { id: 95, source: 'Microsoft / Visual Capitalist', description: 'Global adoption divide. Global North avg ~24.7% vs Global South ~14.1% population-level adoption', url: 'https://www.visualcapitalist.com/ai-adoption-rates-by-country/' },
  { id: 96, source: 'Stanford HAI', description: 'AI Index 2025, Economy chapter. US private AI investment ~$109.1B in 2024 (~12x China, ~24x UK)', url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report/economy' },
  { id: 97, source: 'OECD', description: 'Venture Capital Investments in AI through 2025 (primary). US ~75% (≈$194B) of AI VC deal value; EU27 6% (≈$15.8B)', url: 'https://www.oecd.org/en/publications/venture-capital-investments-in-artificial-intelligence-through-2025_a13752f5-en/full-report.html' },
  { id: 98, source: 'Federal Reserve', description: 'The State of AI Competition in Advanced Economies (Oct 2025). Europe invests ~4% of US AI spend', url: 'https://www.federalreserve.gov/econres/notes/feds-notes/the-state-of-ai-competition-in-advanced-economies-20251006.html' },
  { id: 99, source: 'HEPI', description: 'Student Generative AI Survey 2025 (n=1,041 UK students). 88% used GenAI for assessments (from 53% in 2024)', url: 'https://www.hepi.ac.uk/reports/student-generative-ai-survey-2025/' },
  { id: 100, source: 'Gallup–Walton Family Foundation', description: 'Teacher survey (1,000+ US teachers, 2025). Majority report AI-enabled time savings; 59% more personalized instruction' },
  { id: 101, source: 'Ellucian', description: 'State of AI in Higher Education 2025. Institution-wide adoption 49%→66% in one year', url: 'https://www.ellucian.com/blog/ai-higher-education-2025-survey-findings-move-strategic-integration' },
  { id: 102, source: 'UNESCO', description: 'Survey of 450+ schools and universities. Only ~10% had established guidelines for AI use' },
  { id: 103, source: 'IBM', description: 'Global AI Adoption Index (Morning Consult, 7,502 businesses). Top barriers — AI skills/expertise (33%), data complexity (25%), ethical concerns (23%)', url: 'https://newsroom.ibm.com/2024-01-10-Data-Suggests-Growth-in-Enterprise-Adoption-of-AI-is-Due-to-Widespread-Deployment-by-Early-Adopters' },
  { id: 104, source: 'IDC', description: '2025 CIO Playbook: It\u2019s Time for AI-nomics (commissioned by Lenovo). Proving ROI named the single greatest barrier', url: 'https://www.businesswire.com/news/home/20250205462134/en' },
  { id: 105, source: 'Menlo Ventures', description: '2025: The State of Generative AI in the Enterprise. Enterprise GenAI spend $37B in 2025 (3.2x YoY); ~6% of the global SaaS market', url: 'https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/' },
  { id: 106, source: 'Pew Research Center', description: 'Feb–Mar 2025. 34% of US adults have used ChatGPT (about double the 2023 share); 58% of under-30s' },
  { id: 107, source: 'Eurostat', description: '2025. 32.7% of EU individuals aged 16–74 used generative AI; 25.1% for personal purposes' },
  { id: 108, source: 'Brookings / US Census (Bonney et al.)', description: 'How Are Americans Using AI. Firm AI-use rate 3.7%→5.4% (Sep 2023–Feb 2024), but employment-weighted uptake ~20%', url: 'https://www.brookings.edu/articles/how-are-americans-using-ai-evidence-from-a-nationwide-survey/' },
  { id: 109, source: 'OpenAI / David Deming (Harvard)', description: 'NBER working paper, How People Are Using ChatGPT. 1.5M conversations analyzed; 700M weekly active users', url: 'https://openai.com/index/how-people-are-using-chatgpt/' },
  { id: 110, source: 'Stack Overflow', description: '2025 Developer Survey (49,000+ developers, 177 countries). AI-tool use rising but favorability falling (~70%+ in 2023–24 → ~60% in 2025)', url: 'https://survey.stackoverflow.co/2025/ai' },
  { id: 111, source: 'GitHub', description: 'Octoverse 2025. ~92% of developers using or experimenting with AI coding tools', url: 'https://github.blog/ai-and-ml/generative-ai/how-ai-is-reshaping-developer-choice-and-octoverse-data-proves-it/' },
  { id: 112, source: 'YouGov', description: '2025 (via Brookings). 56% of US adults used AI tools, 28% weekly; under-30s 76% / 50%' },
  // Size-class divide sources
  { id: 113, source: 'Federal Reserve Bank of Minneapolis', description: 'AI adoption in business grows steadily but unevenly (2026). 30% of US firms with 250+ employees use AI vs 17% of firms with fewer than 20; larger firms better equipped to manage the investment and learning curve', url: 'https://www.minneapolisfed.org/article/2026/ai-adoption-in-business-grows-steadily-but-unevenly' },
  { id: 114, source: 'Brookings', description: 'AI growth acceleration versus distributional fairness (May 2026). OECD analysis: diffusion driven more by leaders pulling ahead than laggards catching up; adoption gaps widening', url: 'https://www.brookings.edu/articles/ai-growth-acceleration-versus-distributional-fairness/' },
  { id: 115, source: 'Federal Reserve Bank of San Francisco', description: 'Early Findings on Small Business Use of AI (2026). Documents small-business AI use embedded in existing software; ~40% of small firms using or planning to use AI', url: 'https://www.frbsf.org/research-and-insights/publications/community-development-articles/2026/03/ai-and-small-businesses/' },
  { id: 116, source: 'JPMorganChase Institute', description: 'Understanding the use of AI among small businesses (2026). Cites OECD evidence that AI reaches SMEs through passive integration via AI-enabled platform tools', url: 'https://www.jpmorganchase.com/institute/all-topics/business-growth-and-entrepreneurship/understanding-ai-use-by-small-businesses' },
  { id: 117, source: 'Stanford HAI', description: '2026 AI Index, Technical Performance. Frontier models gained ~30pp on Humanity\u2019s Last Exam in one year; WebArena 15% (2023) to ~74% (early 2026); Cybench 15% (2024) to 93%', url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance' },
  { id: 118, source: 'VentureBeat', description: 'Frontier models are failing one in three production attempts — and getting harder to audit', url: 'https://venturebeat.com/security/frontier-models-are-failing-one-in-three-production-attempts-and-getting-harder-to-audit' },
  { id: 119, source: 'Kili Technology', description: 'AI Benchmarks 2026 guide. Documents ~37-point gap between lab benchmark scores and real-world performance', url: 'https://kili-technology.com/blog/ai-benchmarks-guide-the-top-evaluations-in-2026-and-why-theyre-not-enough' },
  { id: 120, source: 'Brynjolfsson, Chandar & Chen', description: 'Canaries in the Coal Mine? (Stanford Digital Economy Lab, 2025). ADP payroll records; 13% relative employment decline for early-career workers (22–25) in most AI-exposed occupations since GenAI adoption; ~20% for young software developers since late 2022', url: 'https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine/' },
  { id: 121, source: 'Anthropic', description: 'Economic Index / labor-market impacts research', url: 'https://www.anthropic.com/research/labor-market-impacts' },
  { id: 122, source: 'NY Fed (Liberty Street Economics)', description: 'Do Job Postings Show Early Labor-Market Effects of AI? (May 2026). Economywide employment and openings in exposed occupations have not broadly fallen', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' },
  { id: 123, source: 'ICLE', description: 'AI, Productivity, and Labor Markets: A Review of the Empirical Evidence (Feb 2026 literature review)', url: 'https://laweconcenter.org/resources/ai-productivity-and-labor-markets-a-review-of-the-empirical-evidence/' },
  { id: 124, source: 'Goldman Sachs', description: 'How Will AI Affect the US Labor Market?', url: 'https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-us-labor-market' },
  { id: 125, source: 'Drago & Laine', description: 'The Intelligence Curse (essay series). Interpretive argument on AI adoption moving up the corporate pyramid rather than across it', url: 'https://intelligence-curse.ai/' },
  { id: 126, source: 'Metaculus', description: 'Community AGI forecast (landing page; confirm live aggregations before citing)', url: 'https://www.metaculus.com/' },
  { id: 127, source: 'Goodheart Labs', description: 'AGI Timelines Dashboard', url: 'https://agi.goodheartlabs.com/' },
  { id: 128, source: 'Moody\u2019s Analytics', description: 'The Macroeconomic Consequences of AI (Feb 2026). Verify download resolves at economy.com', url: 'https://www.economy.com/' },
  { id: 129, source: 'AI consulting market (vendor estimates)', description: 'Multiple vendor estimates for AI consulting market size (63–69% range cited). SNS Insider, market.us, Research and Markets', url: 'https://www.snsinsider.com/reports/ai-consulting-services-market-7145' },
  { id: 130, source: 'Market Data Forecast', description: 'AI Consulting Services Market (2025)', url: 'https://www.marketdataforecast.com/market-reports/ai-consulting-services-market' },
  { id: 131, source: 'Deloitte', description: 'State of Generative AI in the Enterprise: Q4 2024 ("Now decides next"). Among most-advanced initiatives, 74% meeting or exceeding ROI expectations; 20% reporting ROI above 30%. Describes advanced initiatives, not the average firm', url: 'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-generative-ai-in-enterprise.html' },
  { id: 132, source: 'McKinsey', description: 'The state of AI: How organizations are rewiring to capture value (March 2025; fielded Jul 16–31 2024, n=1,491, 101 nations). Larger firms >2x as likely to have gen-AI adoption road maps, dedicated transformation teams, and role-based capability training', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value' },
  { id: 133, source: 'Office for National Statistics (UK)', description: 'Business insights and impact on the UK economy, BICS Wave 141 (~23% AI use, autumn 2025)', url: 'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/bulletins/businessinsightsandimpactontheukeconomy/2october2025' },
];

/**
 * Single source of truth for the citation count surfaced in user-facing copy.
 * Import this anywhere instead of hardcoding "428" so the number can never drift.
 */
export const sourceCount = references.length;

export const executiveSummary = {
  strategicContext: `The global AI training market is undergoing rapid transformation. Enterprise AI adoption has reached 88% globally, yet only 6% of organizations qualify as "high performers" capturing significant value. This disconnect between adoption and value realization represents the greatest challenge and opportunity for training providers.

This report synthesizes insights from training provider surveys across 20+ countries and validation against ${sourceCount} external market research sources to identify strategic opportunities for 2025-2027.`,
  keyQuote: "Organizations don't need more awareness training—they need implementation expertise, strategic guidance, and adoption support.",
};

export const criticalFindings = [
  {
    number: 1,
    title: "The Value Gap Is the Core Market Opportunity",
    summary: "88% of organizations use AI, but only 39% report any EBIT impact. Nearly two-thirds remain stuck in experimentation/pilot phase.",
    insight: "Organizations don't need more awareness training—they need implementation expertise, strategic guidance, and adoption support. Training providers must expand to offer strategic advisory and implementation consulting.",
    citations: [393],
    color: "llpa-blue",
  },
  {
    number: 2,
    title: "The Strategic Planning Gap Is Universal",
    summary: "64% of training providers report clients 'don't know what they want'—the most frequently cited challenge across all surveys.",
    insight: "This represents a strategic opportunity: providers who develop assessment and advisory capabilities can position upstream of training purchases.",
    citations: [113, 140, 141, 142, 143, 144],
    color: "llpa-green",
  },
  {
    number: 3,
    title: "Skills Gaps Persist Despite High Adoption",
    summary: "Even in high-adoption markets (Denmark 27.6%, Netherlands 23.1%), 62-74% of enterprises cite skills gaps as primary barrier.",
    insight: "The training opportunity is not awareness—it's implementation capability. Advanced technical training and change management skills are the critical gaps.",
    citations: [26, 42],
    color: "llpa-orange",
  },
  {
    number: 4,
    title: "Portfolio Diversification Is Essential",
    summary: "Many training portfolios show high vendor concentration and predominantly beginner/intermediate content.",
    insight: "Diversification across vendors, skill levels, and industries is essential for sustainable growth and client relevance.",
    citations: [167, 168],
    color: "llpa-purple",
  },
];

export const keyMetrics = [
  {
    label: "Global AI Adoption",
    value: "88%",
    description: "Organizations using AI in some capacity",
    citations: [393],
    color: "llpa-blue",
  },
  {
    label: "High Performers",
    value: "6%",
    description: "Organizations capturing significant AI value",
    citations: [393],
    color: "llpa-green",
  },
  {
    label: "Skills Gap Barrier",
    value: "62-74%",
    description: "Enterprises citing skills gaps as primary obstacle",
    citations: [26, 42],
    color: "llpa-orange",
  },
  {
    label: "License Abandonment",
    value: "60%",
    description: "Copilot licenses unused within 90 days",
    citations: [157],
    color: "llpa-red",
  },
];

export const strategicImperatives = [
  {
    number: 1,
    title: "Expand from Training Provider to Offer Strategic Advisory and Implementation Consulting",
    description: "Develop assessment frameworks, advisory capabilities, and implementation support services that position training providers upstream of purchases.",
    priority: "Critical",
  },
  {
    number: 2,
    title: "Develop Advanced Technical Curriculum",
    description: "Create production RAG, agentic AI, LLMOps, and fine-tuning courses to serve advanced market demand. Target higher advanced/expert content mix.",
    priority: "High",
  },
  {
    number: 3,
    title: "Diversify Platform Coverage",
    description: "Develop Anthropic Claude, Google Gemini, and multi-model strategy training to reduce vendor concentration and capture emerging platform demand.",
    priority: "High",
  },
  {
    number: 4,
    title: "Build Industry Vertical Depth",
    description: "Launch industry-specific AI training for financial services, manufacturing, legal, government, and education to capture premium pricing opportunity.",
    priority: "Medium",
  },
];

export const portfolioData = {
  vendorDistribution: [
    { vendor: "Microsoft", count: 0, percentage: 45, color: "#00A4EF" },
    { vendor: "AWS", count: 0, percentage: 12, color: "#FF9900" },
    { vendor: "Google", count: 0, percentage: 5, color: "#4285F4" },
    { vendor: "Anthropic", count: 0, percentage: 3, color: "#D4A574" },
    { vendor: "Other/Vendor-Neutral", count: 0, percentage: 35, color: "#6B7280" },
  ],
  skillLevelDistribution: [
    { level: "Beginner", count: 0, percentage: 42, color: "#22C55E" },
    { level: "Intermediate", count: 0, percentage: 45, color: "#3B82F6" },
    { level: "Advanced", count: 0, percentage: 9, color: "#F59E0B" },
    { level: "Expert", count: 0, percentage: 4, color: "#EF4444" },
  ],
  deliveryMethods: [
    { method: "Live Virtual", count: 0, percentage: 60 },
    { method: "Hybrid", count: 0, percentage: 18 },
    { method: "Self-Paced", count: 0, percentage: 8 },
    { method: "On-Demand", count: 0, percentage: 8 },
    { method: "Other", count: 0, percentage: 6 },
  ],
};

export const marketTiers = [
  {
    tier: 1,
    name: "Leaders",
    countries: ["Denmark", "Netherlands", "Singapore", "Switzerland"],
    adoptionRange: "23-62%",
    profile: "High adoption, moving to optimization",
    demands: ["Advanced implementations", "Custom solutions", "Multi-model strategies"],
  },
  {
    tier: 2,
    name: "Advanced",
    countries: ["UK", "USA", "Germany", "Finland", "Austria"],
    adoptionRange: "15-22%",
    profile: "Strong adoption, scaling challenges",
    demands: ["Implementation support", "Change management", "Industry-specific training"],
  },
  {
    tier: 3,
    name: "Emerging",
    countries: ["Australia", "Poland", "Portugal", "Croatia"],
    adoptionRange: "10-15%",
    profile: "Growing adoption, foundational needs",
    demands: ["Foundational training", "ROI justification", "Use case discovery"],
  },
  {
    tier: 4,
    name: "Nascent",
    countries: ["Brazil", "Mexico", "South Africa", "North Macedonia"],
    adoptionRange: "<10%",
    profile: "Early stage, awareness building",
    demands: ["AI literacy", "Executive awareness", "Pilot support"],
  },
];

export const crossMarketPatterns = [
  {
    pattern: "Size-Class Divide",
    description: "Large enterprises (250+ employees) adopt AI 2-3x faster than SMEs across all markets.",
    implication: "Different training approaches needed for enterprise vs. SME segments.",
  },
  {
    pattern: "Skills Gap Persistence",
    description: "Even high-adoption markets (Denmark, Netherlands) report 62-74% skills gap barriers.",
    implication: "Training opportunity is implementation capability, not awareness.",
  },
  {
    pattern: "Public Sector Catalyst",
    description: "Government AI initiatives (Singapore PAIR, Denmark strategy) drive private sector demand.",
    implication: "Public sector training creates downstream enterprise opportunities.",
  },
];

export const demandPatterns = [
  {
    pattern: "Foundational GenAI Training",
    description: "Prompt engineering, AI literacy, Copilot basics",
    frequency: "100% of members",
    opportunity: "High volume, competitive pricing pressure",
  },
  {
    pattern: "Role-Based Training",
    description: "AI for HR, Finance, Marketing, Sales, Legal",
    frequency: "86% of members",
    opportunity: "Premium pricing, differentiation potential",
  },
  {
    pattern: "Post-Purchase Adoption",
    description: "Rescue packages for failed deployments, adoption support",
    frequency: "55% of members",
    opportunity: "High margin, recurring relationships",
  },
  {
    pattern: "Strategic Advisory",
    description: "AI readiness assessments, use case discovery, ROI justification",
    frequency: "64% implied need",
    opportunity: "Upstream positioning, strategic advisory partnerships",
  },
];

export const advancedCurriculumGaps = [
  {
    topic: "Production RAG",
    currentState: "~15 courses, conceptual only",
    marketDemand: "71% implementing, 89% cite expertise gap",
    priority: "Critical",
  },
  {
    topic: "Agentic AI",
    currentState: "Zero courses",
    marketDemand: "79% deployed/piloting, 55.8% CAGR",
    priority: "Critical",
  },
  {
    topic: "LLMOps",
    currentState: "~12 generic MLOps courses",
    marketDemand: "85% project failure rate, 73% MLOps gaps",
    priority: "High",
  },
  {
    topic: "Fine-Tuning",
    currentState: "~10 courses, Microsoft-specific",
    marketDemand: "67% planning within 12 months",
    priority: "High",
  },
  {
    topic: "Open-Source AI",
    currentState: "Zero courses",
    marketDemand: "58% will use by 2026, 340% download growth",
    priority: "High",
  },
];

export const nonMicrosoftGaps = [
  {
    platform: "Anthropic Claude",
    llpaCourses: 0,
    marketAdoption: "42% Fortune 500",
    revenue: "$2.1B (2024)",
    gap: "Critical",
  },
  {
    platform: "OpenAI ChatGPT Enterprise",
    llpaCourses: 5,
    marketAdoption: "600,000+ organizations",
    revenue: "71% market share",
    gap: "Significant",
  },
  {
    platform: "Google Gemini",
    llpaCourses: 13,
    marketAdoption: "3B+ Workspace users",
    revenue: "65% piloting",
    gap: "Significant",
  },
  {
    platform: "Multi-Model Strategy",
    llpaCourses: 0,
    marketAdoption: "68% use 2+ providers",
    revenue: "45-65% cost savings",
    gap: "Critical",
  },
];
