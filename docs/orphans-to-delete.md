# Orphaned citation entries

References declared in `src/data/reportData.ts` that are **not cited anywhere in the source tree**. Candidates for deletion in a single sweep commit.

**Generated:** 2026-04-21 (re-run the scan below before committing the sweep; new orphans may have accumulated.)

## Regenerate this list

```bash
node scripts/find-orphan-citations.mjs
```

(Script to be added in the sweep commit; for now the logic lives inline in the commit that generated this file.)

## Detection rules

An entry is considered "used" if any of the following match in `src/**`:

- `<CitationLink id={N} />` in .tsx/.ts
- `<MarketProfileCitation … id={N} … />` in .tsx/.ts
- `citation: N` in data objects
- `citations: [N, …]` in data objects
- `[N]` markers in .md files

If an orphan below is actually used via some other pattern, remove it from this list and expand the detection rules.

## Counts

- Total citation entries in `reportData.ts`: **433**
- Cited somewhere in `src/`: **299**
- **Orphans: 221**

## Explicit flags

- **ID 387** (Deloitte Mexico / IMCO, "AI Workforce Readiness Survey: Mexico 2025") — URL returned 404 during the Mexico citation rewrite (commit `b04c6f71`). The one claim that cited it was dropped. Entry is now orphaned; **explicitly tracked for this sweep.**
- **ID 391** — retired as a comment marker (not a ref entry) during commit `b04c6f71`. Not an orphan and excluded from the sweep; the marker stays.

## Orphan table

| ID | Source | Description | Had URL? |
|---:|---|---|:-:|
| 38 | HostingJournalist | Netherlands Sees Surge in AI Integration Across 60% of Businesses | yes |
| 41 | European Commission | Netherlands 2024 Digital Decade Country Report | no |
| 60 | Chambers and Partners | Artificial Intelligence 2024 - Netherlands | no |
| 62 | Michael Page | Switzerland leads Europe in AI workforce adoption | no |
| 63 | European Commission | Switzerland AI Strategy Report - AI Watch | no |
| 64 | Statista | Switzerland AI Market | no |
| 75 | Market Research Future | Germany Artificial Intelligence Market | no |
| 77 | Startbase | 20% of German companies will be using AI technologies in 2024 | no |
| 78 | ifo Institute | More Companies in Germany Using Artificial Intelligence | no |
| 79 | Founders Forum Group | AI Statistics 2024–2025: Global Trends | yes |
| 87 | European Commission | Finland AI Strategy Report - AI Watch | no |
| 92 | Statsandgraphs | AI adoption in European businesses in 2024 | no |
| 93 | Chambers and Partners | Artificial Intelligence 2024 - Finland | no |
| 94 | Coherent Solutions | 2025 AI Adoption Across Industries: Trends You Don't Want to Miss | yes |
| 95 | Eurostat | Statistics Explained: Use of artificial intelligence in enterprises | yes |
| 96 | Training Provider Survey | Africa Region | no |
| 97 | Training Provider Survey | Nordic Region | no |
| 101 | Training Provider Survey | Africa Region | no |
| 102 | Training Provider Survey | Southern Europe | no |
| 103 | Training Provider Survey | Eastern Europe | no |
| 105 | Training Provider Survey | Central Europe | no |
| 106 | Training Provider Survey | Western Europe | no |
| 107 | Training Provider Survey | Central Europe | no |
| 108 | Training Provider Survey | Asia-Pacific | no |
| 109 | Training Provider Survey | Eastern Europe | no |
| 111 | Training Provider Survey | Central Europe | no |
| 112 | Training Provider Survey | Eastern Europe | no |
| 114 | IBM | Global AI Adoption Index 2024 | no |
| 115 | McKinsey | The State of AI in 2025 | no |
| 117 | McKinsey | The State of AI in 2025 | no |
| 118 | Bain & Company | AI isn't taking your job; the big threat is a growing skills gap | yes |
| 119 | PwC | Hopes and Fears 2025 | no |
| 120 | AWS | 2025 AWS Generative AI Adoption Index | no |
| 121 | McKinsey | The State of AI in 2025 | no |
| 122 | Worklytics | The Enterprise Guide to Microsoft Copilot Adoption | no |
| 123 | IBM | Global AI Adoption Index 2024 | no |
| 124 | European Commission | AI Act \| Shaping Europe's digital future | no |
| 125 | Latham & Watkins | Upcoming EU AI Act Obligations: Mandatory Training and Prohibited Practices | yes |
| 126 | Eurostat | Usage of AI technologies increasing in EU enterprises | no |
| 127 | Statistics Netherlands | Increasing use of AI by business | no |
| 128 | CNBC | Microsoft Copilot AI use extends deep into corporate America | yes |
| 131 | Training Provider Survey | Africa Region | no |
| 133 | Training Provider Survey | Southern Europe | no |
| 134 | Training Provider Survey | Western Europe | no |
| 136 | Training Provider Survey | Western Europe | no |
| 137 | Training Provider Survey | Africa Region | no |
| 145 | Training Provider Survey | Africa Region | no |
| 146 | Training Provider Survey | Eastern Europe | no |
| 147 | Training Provider Survey | Western Europe | no |
| 148 | Training Provider Survey | Africa Region | no |
| 151 | Training Provider Survey | Southern Europe | no |
| 152 | McKinsey | The State of AI in 2025 | no |
| 153 | Bain & Company | AI Skills Gap Report | no |
| 154 | PwC | Hopes and Fears 2025 | no |
| 155 | AWS | 2025 AWS Generative AI Adoption Index | no |
| 156 | McKinsey | The State of AI in 2025 | no |
| 158 | IBM | Global AI Adoption Index 2024 | no |
| 159 | Deloitte | State of AI in the Enterprise, 6th Edition | yes |
| 161 | eSchool News | How AI can transform lesson planning and assessment | yes |
| 162 | MagicSchool | Platform overview | yes |
| 164 | Digital Promise | AI Literacy: A Framework to Understand, Evaluate, and Use Emerging Technology | yes |
| 165 | UPCEA | AI Readiness and Its Relationship to Enrollment Management | yes |
| 166 | eLearning Industry | Enhancing Student Enrollment: The Power Of Predictive Analytics | yes |
| 171 | Bertelsmann Stiftung | EU Digital Sovereignty Report | yes |
| 172 | Training Provider Survey | Southern Europe | no |
| 173 | Training Provider Survey | Asia-Pacific | no |
| 174 | Training Provider Survey | Eastern Europe | no |
| 175 | Training Industry | 2024 Training Industry Report | no |
| 176 | LinkedIn | 2024 Workplace Learning Report | no |
| 177 | Deutsche Telekom | European Industrial AI Infrastructure with NVIDIA | yes |
| 178 | IBM | Global AI Adoption Index 2024 | no |
| 179 | McKinsey | The State of AI in 2025 | no |
| 180 | LinkedIn | 2024 Workplace Learning Report | no |
| 181 | Degreed | 2024 State of Skills Report | yes |
| 182 | Training Industry | 2024 Training Industry Report | no |
| 183 | Training Provider Survey | Asia-Pacific | no |
| 184 | Training Provider Survey | Eastern Europe | no |
| 194 | European Commission | AI Act \| Shaping Europe's digital future | no |
| 195 | European Commission | AI Act \| Shaping Europe's digital future | no |
| 196 | Worklytics | The Enterprise Guide to Microsoft Copilot Adoption | no |
| 197 | CNBC | Microsoft Copilot AI use extends deep into corporate America | no |
| 198 | Training Industry | 2024 Training Industry Report | no |
| 199 | LinkedIn | 2024 Workplace Learning Report | no |
| 200 | Andreessen Horowitz | The State of Generative AI in the Enterprise | no |
| 201 | Gartner | Cloud Will Become a Business Necessity by 2028 | no |
| 202 | Training Industry | 2024 Training Industry Report | no |
| 203 | Founders Forum Group | AI Statistics 2024–2025: Global Trends | no |
| 204 | Stanford HAI | AI Index 2025 — Economy chapter | no |
| 205 | Anthropic | Anthropic Economic Index Report | yes |
| 206 | Market.us | AI in Learning and Development Market Size \| CAGR of 26% | no |
| 207 | AWS | 2025 AWS Generative AI Adoption Index | no |
| 208 | PwC | Hopes and Fears 2025 | no |
| 209 | McKinsey | The State of AI in 2025 | no |
| 210 | UK ONS | Difficulty identifying use cases | no |
| 214 | techUK | Major barriers to AI adoption remain for UK businesses | yes |
| 215 | Prem AI | 25 Enterprise AI Adoption Statistics | yes |
| 216 | Daijobu.AI | SME AI Adoption in 2025: Key Insights from OECD Research | yes |
| 217 | Pellera Technologies | Top 5 AI Adoption Challenges for 2025 | yes |
| 218 | Journal of Small Business Management | The new normal: The status quo of AI adoption in SMEs | yes |
| 219 | BigSur.AI | AI Adoption in SMBs vs Enterprises: Rates, ROI, and Barriers | yes |
| 229 | PwC | 2025 Global Workforce Study: AI Skills Premium | no |
| 234 | Databricks | 2025 State of Data + AI | no |
| 235 | Databricks | 2025 State of Data + AI | no |
| 237 | Anthropic Economic Index | 3.7x ROI for production RAG implementations | no |
| 238 | Context Optimization Research | 40-60% cost reduction through optimization | no |
| 241 | Agent Cost Savings Analysis | $47,000-$340,000 annual savings per agent | no |
| 242 | BCG AI Impact Study | 68% reduction in customer service resolution time | no |
| 243 | BCG AI Impact Study | 3.2x increase in qualified leads | no |
| 244 | BCG AI Impact Study | 8-12 hour tasks completed in 15-45 minutes | no |
| 245 | IBM Global AI Adoption Index | 82% require external expertise for agentic AI | no |
| 247 | Agent API Integration Study | 94% success rate with 7 different APIs | no |
| 248 | Memory Architecture Research | 34% improvement in multi-turn accuracy | no |
| 249 | Financial Agent Study | 89% accuracy on complex queries | no |
| 250 | Salesforce State of AI 2025 | 42% productivity improvement from agentic AI | no |
| 251 | Gartner AI Spending Forecast | 45% of AI spending on agentic systems by 2027 | no |
| 252 | Training Provider Survey | 89% enrollment growth for agentic AI curriculum | no |
| 254 | Fine-tuning ROI Analysis | 34% average cost reduction | no |
| 255 | Fine-tuning Performance Study | 56% accuracy improvement on domain tasks | no |
| 256 | Bloomberg Research | BloombergGPT 7.25x ROI in first year | no |
| 257 | Anthropic Economic Index | 76% require external training for fine-tuning | no |
| 258 | Fine-tuning Break-even Analysis | Break-even at ~50,000 queries | no |
| 259 | Fine-tuning Case Studies | 56% average accuracy improvement | no |
| 260 | Model Optimization Research | Smaller fine-tuned models cost 85% less | no |
| 261 | Harvard Business Review | $420,000 annual savings from fine-tuning | no |
| 262 | Stanford HAI AI Index | Fine-tuning market projected $4.2B by 2027 | no |
| 264 | LLMOps Success Study | 3.2x higher deployment success rates | no |
| 265 | Failed AI Project Analysis | Average $1.2M wasted investment | no |
| 266 | LLMOps ROI Study | 4.7x average return within 6 months | no |
| 267 | LLM Testing Research | 73% of quality issues caught pre-production | no |
| 271 | Batching Strategy Research | 3-5x throughput improvement | no |
| 272 | Databricks LLMOps Report | 58% cost reduction with best practices | no |
| 273 | McKinsey AI ROI Study | ROI increase from 1.2x to 4.1x with LLMOps | no |
| 274 | AWS Enterprise Survey | 89% cannot find suitable LLMOps training | no |
| 275 | Grand View Research | Vector Database Market Size & Forecast 2024-2027 | no |
| 276 | CB Insights | Pinecone Valuation Trends | no |
| 277 | TechCrunch | Weaviate Raises $200M Series C | no |
| 278 | Andreessen Horowitz | 2024 State of GenAI Infrastructure | no |
| 279 | Andreessen Horowitz | Vector Database Selection Cost Impact Analysis | no |
| 280 | LinkedIn | 2025 Emerging Jobs Report | no |
| 281 | Datastax | Vector Database Migration Study | no |
| 282 | Weaviate | HNSW vs IVF Performance Benchmarks | no |
| 283 | Gartner | Vector Database Adoption Forecast | no |
| 284 | Databricks | Vector Database Training Impact Study | no |
| 285 | Hugging Face | 500,000+ models, 50M+ monthly downloads | no |
| 286 | LangChain GitHub | 80,000+ stars, 45% of production RAG implementations | no |
| 287 | Meta | Llama 3 30M+ downloads, 350,000+ developers | no |
| 288 | European Bank Case Study | €340,000 to €47,000 annual cost reduction | no |
| 289 | EU Enterprise AI Survey | 64% prefer on-premises for regulated data | no |
| 290 | Netherlands GPT-NL | €13.5M government investment | no |
| 291 | Mistral AI | €2B valuation June 2024 | no |
| 292 | Quantization Research | 60-75% memory reduction with minimal accuracy loss | no |
| 293 | Stanford HAI AI Index | Open-source downloads grew 340% in 2024 | no |
| 294 | Together.ai | $180,000 average annual savings vs. commercial APIs | no |
| 296 | Gartner | 2025 CIO Survey: AI Budget Shifts | no |
| 304 | Anthropic Revenue | $0 → $200M → $875M → $2.1B growth | no |
| 305 | Fortune 500 AI Adoption | 42% using Claude in production | no |
| 306 | Claude Capabilities | Complex reasoning, 200K context window | no |
| 307 | Google | 3+ billion Workspace users | no |
| 308 | Google Cloud | 65% of Enterprise customers piloting Gemini | no |
| 309 | Gemini Benchmarks | 78% better on vision-language tasks | no |
| 310 | Workplace AI Survey | 71% market share for ChatGPT | no |
| 311 | OpenAI | 600,000+ organizations using ChatGPT Enterprise | no |
| 312 | ChatGPT Enterprise Pricing | $45-120 per user per month | no |
| 313 | AWS Bedrock | 58% of enterprise customers using Bedrock | no |
| 314 | AWS Bedrock | Single API, no lock-in, pay-per-use | no |
| 318 | Anthropic Customer Survey | 89% report need for formal training | no |
| 320 | ChatGPT Training Survey | Only 18% provide structured training | no |
| 328 | Multi-model Cost Study | 45-65% cost savings | no |
| 333 | Gartner | 76% will use 3+ LLMs by 2026 | no |
| 334 | Multi-model ROI | $120,000-$340,000 annual savings | no |
| 335 | Training Industry | 2024 Pricing Analysis: Generic vs Industry-Specific Training | no |
| 336 | Training Industry | 2024 Completion Rate Analysis by Training Type | no |
| 337 | Training Industry | 2024 Client Satisfaction Benchmarks | no |
| 338 | Gartner | 2025 CIO Survey: AI Training Value Drivers | no |
| 340 | Financial AI Adoption | 67% using AI in production | no |
| 341 | Lending Case Study | 73% faster approval times | no |
| 342 | AML Case Study | 67% reduction in false positives | no |
| 343 | Insurance Journal | AI Claims Processing ROI Analysis | no |
| 344 | Asset Management Case | 12% alpha improvement | no |
| 346 | McKinsey Financial AI | 3.4x higher ROI with training | no |
| 348 | German Industrial AI | €3B+ cloud investment | no |
| 349 | Predictive Maintenance | 35% maintenance cost reduction | no |
| 351 | Demand Forecasting | 28% inventory reduction | no |
| 352 | Route Optimization | 17% fuel cost savings | no |
| 353 | Siemens Industrial AI | 76% lack in-house expertise | no |
| 354 | BCG Manufacturing | 2.7x faster implementation with training | no |
| 357 | Contract Review AI | 87% faster contract review | no |
| 358 | E-Discovery AI | 72% cost reduction in document review | no |
| 359 | Thomson Reuters | 74% of law firms need formal AI training | no |
| 360 | Harvard Law School Research | $420,000 average annual cost savings | no |
| 361 | McKinsey | Healthcare AI Investment 2024-2027 | no |
| 362 | Nature Medicine | Medical Imaging AI Diagnostic Accuracy Meta-Analysis | no |
| 363 | Johns Hopkins | AI Readmission Prediction Impact Study | no |
| 364 | Epic Systems | Appointment Scheduling AI Optimization Study | no |
| 365 | 3M Health Information Systems | AI Medical Coding Accuracy Benchmarks | no |
| 366 | Stanford Medicine | Bias Detection in Healthcare AI Algorithms | no |
| 367 | HIMSS | Healthcare AI Skills Gap Survey 2025 | no |
| 368 | McKinsey | Healthcare AI Training ROI Analysis | no |
| 370 | Singapore PAIR | 40% processing time reduction | no |
| 371 | Amsterdam Algorithm Register | Algorithmic transparency requirements | no |
| 372 | OECD Government AI Report | 71% cite lack of internal expertise | no |
| 373 | Deloitte Public Sector Survey | 4.1x higher citizen satisfaction with AI training | no |
| 374 | Training Industry | Industry-Specific Training Retention Analysis | no |
| 377 | Microsoft | AI Diffusion Report: Global AI Workforce Adoption | yes |
| 381 | Bitkom | AI Adoption in German Enterprises: February 2025 Survey Results | yes |
| 385 | OpenAI / Salesforce | ChatGPT Enterprise Global Adoption Report 2025 | yes |
| 386 | South African Department of Communications and Digital Technologies | National AI Training Needs Assessment 2025 | yes |
| 387 | Deloitte Mexico / IMCO | AI Workforce Readiness Survey: Mexico 2025 | yes |
| 388 | Brazil Ministry of Science, Technology and Innovation / McKinsey | Enterprise AI Adoption in Brazil 2025 | yes |
| 401 | IDC | Closing the Gap: Verifying AI Skills in the Enterprise | no |
| 402 | Keller Executive Search | AI & Machine-Learning Talent Gap 2025 | yes |
| 403 | IBM | IBM Global AI Adoption Index 2023 | yes |
| 404 | Bain & Company | Widening Talent Gap Threatens Executives' AI Ambitions | yes |
| 405 | PwC | 2025 Global AI Jobs Barometer | yes |
| 406 | Randstad | AI Skills Gap Widens | yes |
| 420 | Growth Market Reports | AI-Generated Social Skills Coaching Avatar Market Research Report 2033 | yes |
| 421 | Emerald Insight | A systematic literature review of artificial intelligence (AI) in coaching | yes |
| 422 | Training Industry | How AI Is Shaping the Future of Corporate Training in 2025 | yes |
| 424 | arXiv | Superhuman AI Disclosure: Impacts on Toxicity, Fairness, and Trust Vary by Expertise and Persona Attributes | yes |
| 425 | Alex Imas (Substack) | What is the impact of AI on productivity? Reconciling the micro and the macro evidence (March 2026) | yes |
| 516 | Nasdaq | How Netflix's AI Saves It $1 Billion Every Year | yes |

## Sweep plan

1. Confirm none of these are used in .pdf build assets, in content imported at runtime, or by any future orphan-detection exceptions.
2. Delete the entries from `src/data/reportData.ts`.
3. Let the existing `sourceCount = references.length` export update the user-facing "${sourceCount} research sources" references automatically.
4. Run `npm run build` to verify nothing references the deleted ids (TypeScript won't catch unused refs, but a rendered `<CitationLink id={N} />` for a missing id will render the bare `[N]` without a source hint).
5. Commit as `chore: delete 221 orphaned citation entries`.
