import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Building2, TrendingUp, AlertTriangle, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/report/Header";
import Footer from "@/components/report/Footer";
import MarketProfileCitation from "@/components/report/MarketProfileCitation";
import MarketProfileReferences from "@/components/report/MarketProfileReferences";
import MarketProfileSidebar from "@/components/report/MarketProfileSidebar";

interface MarketProfile {
  region: string;
  subRegion?: string;
  country: string;
  provider: string;
  tier: number;
  tierLabel: string;
  stats: {
    label: string;
    value: string;
  }[];
  marketInsights: string;
  strengths: string[];
  weaknesses: string[];
  comparativeContext: {
    inRegion: string;
    globally: string;
  };
}

const profiles: MarketProfile[] = [
  {
    region: "Europe",
    subRegion: "Nordic",
    country: "Denmark",
    provider: "Provider A",
    tier: 1,
    tierLabel: "Leader",
    stats: [
      { label: "Enterprise AI adoption", value: "42.03% (highest in EU)[1]" },
      { label: "Year-over-year growth", value: "+14.45 percentage points (largest increase in EU)[1]" },
      { label: "Large enterprise adoption (250+ employees)", value: "63%[2]" },
      { label: "GenAI individual usage", value: "48.4% (highest in EU)[3]" }
    ],
    marketInsights: "Denmark's digitally mature corporate culture creates strong demand for advanced AI training. Enterprises request practical implementation support and governance frameworks, moving beyond basic awareness training. Public sector adoption drives consistent demand across government and municipal services.[80]",
    strengths: [
      "Highest enterprise AI adoption in EU — Denmark leads all 27 EU member states with 42.03% of enterprises using AI technologies as of 2025, nearly double the EU average of 20% and more than triple the rate of lagging countries like Romania (5.2%).[1]",
      "Largest year-over-year growth in AI adoption — Denmark recorded the highest increase in AI adoption in the EU at 14.45 percentage points, demonstrating exceptional acceleration that doubled adoption from 27.6% in 2024 to 42% in 2025.[1]",
      "Strong regulatory and policy environment — Denmark's national AI strategy (launched 2023) prioritizes responsible adoption with €200 million dedicated to research and development in healthcare, education, and sustainability. The government is actively updating copyright laws to address AI-generated content.[4]",
      "High individual generative AI usage — 48.4% of Danish citizens used generative AI tools in 2025, the highest rate in the EU, demonstrating broad societal readiness and digital literacy that supports enterprise adoption.[3]",
      "Digital-first business culture with collaborative practices — Denmark's commitment to open innovation and collaborative practices, combined with 90% SME digital intensity, creates fertile ground for AI adoption. Nordic focus on innovating with existing AI models rather than developing proprietary ones proves effective.[4]"
    ],
    weaknesses: [
      "Small domestic market scale — Despite leadership in adoption rates, Denmark's relatively small economy (population 5.9 million) limits absolute market size for training providers compared to larger EU economies like Germany or the UK.",
      "High baseline saturation risk — With 42% enterprise adoption already achieved, Denmark may face market saturation in foundational AI training, requiring providers to pivot toward advanced and specialized offerings.",
      "Premium cost expectations — High wage levels and business costs in Denmark create pricing pressure for training providers while also raising client expectations for quality and customization.",
      "Limited language-specific AI models — Danish language AI models and resources remain less developed than major languages, potentially creating friction for organizations seeking to implement Danish-language AI applications.",
      "SME implementation gap despite adoption rates — While SME adoption rates are high, many Danish SMEs report that 'lack of experience' remains the primary barrier to deeper AI implementation, indicating surface-level adoption.[39]"
    ],
    comparativeContext: {
      inRegion: "Denmark is the undisputed EU leader in enterprise AI adoption at 42%, nearly 22 percentage points above the EU average. Sweden (35%) is the next closest among EU members.[1]",
      globally: "Denmark ranks among global leaders alongside the UAE (64%) and Singapore (60.9%) in working-age population AI adoption, positioning it as one of the world's most AI-ready markets for enterprise training.[48]"
    }
  },
  {
    region: "Europe",
    subRegion: "Western",
    country: "Netherlands",
    provider: "Provider B",
    tier: 1,
    tierLabel: "Leader",
    stats: [
      { label: "Enterprise AI adoption", value: "Above EU average (~25%)" },
      { label: "GenAI individual usage", value: "45% (among highest in EU)[3]" },
      { label: "Cloud services adoption", value: "92% (highest in EU)[35]" },
      { label: "Enterprise AI growth", value: "140%+ YoY (fastest in Europe alongside Australia, Brazil, France)[26]" }
    ],
    marketInsights: "Dutch enterprises demonstrate sophisticated AI maturity with emphasis on practical applications in logistics, financial services, and agriculture technology sectors. Organizations expect hands-on implementation support with multilingual delivery capabilities.",
    strengths: [
      "Highest cloud adoption rate in EU — Over 92% of Dutch enterprises use some form of cloud service—the highest rate in the EU—providing essential infrastructure for AI adoption and creating natural progression to AI-enabled cloud services.[35]",
      "Among fastest-growing AI markets globally — OpenAI's enterprise AI report identifies Netherlands alongside Australia, Brazil, and France as exceeding 140% year-over-year growth in business AI customers, indicating exceptional momentum.[26]",
      "Strong digital infrastructure and data center presence — Dense fiber-optic networks, major European data-exchange hubs (AMS-IX), and hyperscale data centers from AWS, Microsoft, and Google within Dutch borders ensure GDPR-compliant data residency and low latency.[35]",
      "Advanced AI-first workforce and near-equal work/personal AI usage — In the Netherlands, usage is almost evenly split between personal (28%) and work (27%) AI applications—the smallest gap in Europe—indicating mature workplace integration of AI tools.[34]",
      "Industry cluster strength with concentrated demand — Rotterdam port logistics, Eindhoven tech corridor (including ASML), and Amsterdam fintech create concentrated AI training demand. Companies like Coolblue, Booking.com, and Bol.com actively deploy cloud-native AI analytics.[35]"
    ],
    weaknesses: [
      "Privacy concerns limiting adoption pace — More than half of Dutch companies with 100+ employees cite privacy as a reason for not adopting AI technology, indicating that GDPR compliance and data protection concerns create friction.[39]",
      "Lack of AI experience remains primary barrier — Among companies considering AI adoption, 74.6% cite 'lack of experience' as the most common reason for non-adoption, similar to patterns across the EU.[39]",
      "Dependence on multinational technology providers — Heavy reliance on US cloud giants (AWS, Azure, Google Cloud) for AI infrastructure creates strategic dependency and potential sovereignty concerns aligned with EU digital autonomy goals.",
      "SME adoption lag despite digital maturity — While large enterprises lead in AI adoption, Dutch SMEs face the same structural barriers as elsewhere in Europe, with significant gaps between large enterprise and SME adoption rates.",
      "Competitive talent market — High demand for AI skills combined with strong existing tech ecosystem creates competitive labor market, potentially limiting ability of training providers to recruit instructors."
    ],
    comparativeContext: {
      inRegion: "Netherlands consistently ranks among top EU adopters with strong enterprise AI penetration and the highest cloud adoption rate. Its balanced work/personal AI usage indicates mature digital culture.[34]",
      globally: "Netherlands benefits from strategic position as a European logistics and data hub, with major multinationals choosing it for regional AI operations. The country's 140%+ growth rate positions it among global AI adoption leaders.[26]"
    }
  },
  {
    region: "Europe",
    subRegion: "Western",
    country: "Germany",
    provider: "Provider C",
    tier: 2,
    tierLabel: "Advanced",
    stats: [
      { label: "Enterprise AI adoption", value: "~20% (slightly above EU average)[65]" },
      { label: "GenAI individual usage", value: "32% (below EU average of 33%)[69]" },
      { label: "Large enterprise AI adoption", value: "~40% (aligned with EU large enterprise rates)" },
      { label: "Manufacturing AI adoption", value: "Growing significantly in automotive and industrial sectors" }
    ],
    marketInsights: "Germany's industrial base creates concentrated demand for AI in manufacturing, automotive, and engineering contexts. Mittelstand companies require practical implementation pathways tailored to their scale. Strong compliance and certification focus aligns with EU AI Act preparation demand.",
    strengths: [
      "Europe's largest economy with substantial AI market — Germany's position as Europe's largest economy creates significant volume opportunity. The AI market includes 463 AI startups, with Berlin and Munich emerging as key innovation centers.[65]",
      "Strong industrial AI demand in manufacturing and automotive — Germany's industrial base creates concentrated demand for applied AI in production optimization, quality control, and Industry 4.0 applications. Manufacturing AI adoption is particularly strong among enterprises with established digital transformation programs.",
      "EU AI Act compliance driving training demand — As a major EU economy, German companies are actively preparing for EU AI Act compliance, creating sustained demand for governance, risk management, and regulatory alignment training.",
      "Strong growth trajectory despite moderate baseline — German companies using AI increased from 11.6% in 2023 to 19.8% in 2024, representing significant acceleration. According to ifo Business Survey, 27% of companies used AI with an additional 17.5% planning to adopt.[65]",
      "Certification and standards leadership — TÜV Rheinland's expertise in certification and standards creates natural alignment with AI assurance, governance, and compliance training—a growing market as organizations seek trusted AI deployment frameworks."
    ],
    weaknesses: [
      "Below-average individual AI adoption — At 32%, Germany's individual generative AI usage falls below the EU average of 33%, indicating that consumer AI literacy may lag behind enterprise adoption, creating potential workforce readiness gaps.[69]",
      "Fiber infrastructure lag — Germany lags below the OECD average in fiber deployment with only 12.2% fiber connections over total fixed broadband, potentially creating infrastructure barriers for AI-intensive applications.[62]",
      "Regulatory conservatism may slow adoption — German businesses tend toward more cautious technology adoption, with established processes and risk management practices potentially slowing AI integration compared to more agile Nordic markets.",
      "Mittelstand AI adoption challenges — Small and medium enterprises (Mittelstand) face particular challenges in AI adoption due to resource constraints, requiring targeted support programs and accessible training solutions.",
      "Service provider concentration in specific sectors — The highest AI use appears among advertising/market research businesses (72%) and IT service providers (60%), indicating adoption is not evenly distributed across the economy.[65]"
    ],
    comparativeContext: {
      inRegion: "Germany ranks in the middle tier of EU adopters, with adoption rates near the EU average. However, its large economy means absolute market size remains substantial. The country ranks third in Europe as a top location for AI startup industry.[65]",
      globally: "Germany ranks seventh globally for AI startup ecosystem and benefits from strong university-industry collaboration. DeepL, a German AI unicorn specializing in translation, was ranked as the best unicorn startup in Western Europe in 2025.[65]"
    }
  },
  {
    region: "Europe",
    subRegion: "Western",
    country: "Switzerland",
    provider: "Provider D",
    tier: 1,
    tierLabel: "Leader",
    stats: [
      { label: "GenAI individual usage", value: "47% (highest non-EU European country)[3]" },
      { label: "Digital readiness", value: "Among top-ranked globally for innovation and digital infrastructure" },
      { label: "Working-age AI adoption", value: "Approximately 30-35% (estimated based on Microsoft AI Diffusion data)" }
    ],
    marketInsights: "Switzerland's financial services and pharmaceutical sectors drive demand for specialized AI applications with strict compliance requirements. Organizations prioritize security, data privacy, and regulatory alignment. Premium pricing is accepted for quality training.",
    strengths: [
      "Among highest generative AI usage in Europe — Switzerland's 47% individual generative AI usage rate is among the highest in Europe, exceeded only by Norway (56%), indicating exceptional digital literacy and AI readiness.[3]",
      "Premium market positioning enabling quality-focused training — High willingness to pay for quality training enables sustainable pricing models. Swiss enterprises invest significantly in workforce development and accept premium rates for specialized, high-value training.",
      "Financial services and pharmaceutical concentration — Banking, insurance, and pharma create deep vertical expertise opportunities. These sectors have specific AI use cases around risk modeling, drug discovery, personalized medicine, and regulatory compliance.",
      "Strong innovation ecosystem and research base — Switzerland's world-class universities (ETH Zurich, EPFL) and research institutions create strong AI talent pipeline and research collaboration opportunities. The country consistently ranks among global innovation leaders.",
      "Regulatory stability and data protection leadership — Switzerland's strong data protection framework and regulatory stability provide enterprises with confidence for AI investment. Neutrality and independence from EU AI Act create potential differentiation."
    ],
    weaknesses: [
      "Multilingual market complexity — German, French, and Italian market segments require localized delivery approaches, increasing operational complexity and content development costs for training providers.",
      "Small domestic market despite high value — With population of approximately 8.8 million, Switzerland's absolute market size is limited despite high per-capita value, capping growth potential for purely domestic-focused providers.",
      "High cost structure — Switzerland's high wage levels and operating costs create pressure on training provider margins, requiring premium positioning or efficiency optimization.",
      "Conservative enterprise culture in established sectors — Traditional banking and pharmaceutical companies may move cautiously on AI adoption, preferring proven approaches over cutting-edge implementations.",
      "Limited official AI adoption statistics — Unlike EU member states tracked by Eurostat, Switzerland lacks comprehensive official enterprise AI adoption statistics, making market sizing and benchmarking more challenging."
    ],
    comparativeContext: {
      inRegion: "Switzerland ranks alongside Nordic leaders in individual AI usage (47%) and benefits from exceptional digital infrastructure and innovation ecosystem. Its non-EU status provides regulatory flexibility while maintaining close economic integration.",
      globally: "Switzerland's position as a global innovation leader, combined with its financial services and pharmaceutical concentrations, creates premium AI training market opportunity. Strong university-industry linkages support talent development."
    }
  },
  {
    region: "Europe",
    subRegion: "Western",
    country: "United Kingdom",
    provider: "Provider E",
    tier: 2,
    tierLabel: "Advanced",
    stats: [
      { label: "Enterprise AI adoption", value: "22% (projected 2024, up from 9% in 2023)[77]" },
      { label: "Near-term adoption pipeline", value: "14% plan to adopt within 3 months (highest since tracking began)[77]" },
      { label: "Individual AI usage", value: "31% have used tools like ChatGPT/Gemini[77]" },
      { label: "AI investment", value: "$4.5 billion private investment (third globally after US and China)[6]" }
    ],
    marketInsights: "UK's financial services concentration and tech sector growth create sophisticated demand for enterprise AI training. Post-Brexit regulatory divergence creates UK-specific compliance needs. Strong focus on AI safety and responsible deployment.",
    strengths: [
      "Third-largest global AI private investment — UK attracted $4.5 billion in private AI investment in 2024, positioning it as the third-largest AI investment destination globally after the US ($109 billion) and China ($9.3 billion).[6]",
      "Strong near-term adoption pipeline — 14% of UK firms plan to adopt AI within 3 months (June 2025), the highest share since tracking began in September 2023, indicating sustained growth momentum.[77]",
      "Financial services AI leadership — London's position as a global financial center drives demand for AI in trading, risk management, regulatory technology, and customer service applications, creating concentrated training demand.",
      "Active government AI policy and safety leadership — UK AI Safety Institute and national AI strategy create momentum for workforce development. UK leadership in AI safety research positions the market for governance and responsible AI training.",
      "Most open to offshore outsourcing in Europe — UK's cost-saving business culture, historical ties with global partners, and English language create openness to international training partnerships and distributed delivery models.[65]"
    ],
    weaknesses: [
      "AI adoption acceleration lagging expectations — UK businesses are among the least likely in global surveys to accelerate AI rollout (40%), placing behind China (85%), India (74%), and UAE (72%), suggesting cautious enterprise approach.[29]",
      "Expertise and cost barriers — Issues preventing UK businesses from adopting AI include level of expertise in AI, cost, and difficulty identifying business use cases, indicating need for practical, ROI-focused training.[65]",
      "Post-Brexit regulatory uncertainty — Regulatory divergence from EU creates compliance complexity for multinational organizations, potentially fragmenting AI governance training requirements.",
      "Skills gap pressure — Limited AI skills and expertise remain top barriers to adoption (33%), creating both training opportunity and instructor recruitment challenges.[29]",
      "Uneven sector adoption — AI adoption concentrated in financial services and technology sectors, with other industries lagging, requiring sector-specific approaches to expand market reach."
    ],
    comparativeContext: {
      inRegion: "UK ranks below EU leaders (Denmark, Sweden, Netherlands) in enterprise AI adoption but shows strong growth trajectory and investment levels. Post-Brexit positioning creates both challenges and opportunities for differentiated training.",
      globally: "UK's $4.5 billion in private AI investment and AI safety leadership position it as a significant global AI market. Financial services concentration creates specialized high-value training demand."
    }
  },
  {
    region: "Europe",
    subRegion: "Western",
    country: "Portugal",
    provider: "Provider F",
    tier: 3,
    tierLabel: "Emerging",
    stats: [
      { label: "Enterprise AI adoption", value: "~10-12% (below EU average)" },
      { label: "Year-over-year growth", value: "+0.8 percentage points (lowest growth in EU in 2024)[68]" },
      { label: "GenAI individual usage", value: "~30% (near EU average)" }
    ],
    marketInsights: "Portugal's growing tech hub status (particularly Lisbon) creates demand for AI workforce development. Strong tourism and services sectors show increasing AI interest. Language advantage for Portuguese-speaking markets.",
    strengths: [
      "Emerging tech ecosystem with Lisbon as European hub — Lisbon's emergence as a European tech hub attracts AI-focused companies and talent. Web Summit's location in Lisbon has elevated Portugal's tech profile and created networking opportunities.",
      "EU positioning with Atlantic-facing advantages — Portugal's position as an Atlantic-facing EU member creates bridge opportunity for Portuguese-speaking markets (Brazil, Angola, Mozambique), enabling regional expansion strategies.",
      "Quality of life advantage for talent attraction — Attractive location for international training events and programs, with competitive cost of living compared to other Western European countries supporting remote work and training delivery.",
      "EU AI Factory participation — Spain's BSC AI Factory is a joint initiative including Portugal, demonstrating commitment to regional AI infrastructure development and research collaboration.[75]",
      "Tourism and services sector AI opportunity — Strong tourism industry creates AI use cases for customer service, personalization, and operational optimization, providing sector-specific training demand."
    ],
    weaknesses: [
      "Lowest AI adoption growth in EU (2024) — Portugal recorded the smallest year-over-year increase in AI adoption at just 0.8 percentage points in 2024, suggesting structural barriers or lower prioritization compared to EU peers.[68]",
      "Below EU average adoption rates — Enterprise AI adoption remains below the 20% EU average, indicating Portugal is not keeping pace with EU digital transformation momentum.",
      "Limited AI infrastructure investment — Compared to larger EU economies, Portugal has attracted less AI-specific infrastructure investment, potentially limiting enterprise AI deployment capabilities.",
      "Economic constraints affecting training budgets — Relatively lower GDP per capita compared to Northern European markets may constrain enterprise training budgets and limit premium pricing.",
      "Brain drain concerns — Tech talent may migrate to higher-paying markets (UK, Germany, Netherlands), creating workforce development challenges and instructor recruitment difficulties."
    ],
    comparativeContext: {
      inRegion: "Portugal falls into the 'intermediate' group of EU AI adopters alongside countries like Spain, Austria, and Czech Republic. Its 0.8 pp growth rate was the lowest in the EU in 2024, raising concerns about adoption momentum.[68]",
      globally: "Portugal's tech ecosystem is growing but remains smaller than established hubs. Portuguese language advantage creates potential for expanding to Brazil and Lusophone Africa markets."
    }
  },
  {
    region: "Europe",
    subRegion: "Central & Eastern",
    country: "Romania",
    provider: "Provider G",
    tier: 2,
    tierLabel: "Advanced",
    stats: [
      { label: "Enterprise AI adoption", value: "5.21% (lowest in EU)[1]" },
      { label: "GenAI individual usage", value: "17.8% (lowest in EU)[3]" },
      { label: "Year-over-year growth", value: "+2.1 percentage points (modest growth from 3.1% base)" }
    ],
    marketInsights: "Romania's strong IT outsourcing sector creates technical workforce familiar with software development but requiring AI-specific upskilling. Growing domestic enterprise interest complements existing services export model.",
    strengths: [
      "Strong technical talent base and IT services sector — Established software development workforce provides strong foundation for AI skills development. Romania is known for cost-effective, high-quality IT services delivery with English-proficient developers.",
      "Cost competitiveness enabling training investment — Favorable economics enable training investment at scale. Lower operational costs create opportunity for affordable AI training programs targeting SMEs and emerging enterprises.",
      "EU membership and funding access — Access to EU structural funds, digital transformation programs, and AI training subsidies through European initiatives. National AI Strategy 2024-2027 allocates 0.5% of GDP annually to research.[75]",
      "Growth from low base indicating momentum — While still lowest in EU, Romania improved from 3.1% to 5.21% (growth of 2.1 pp), showing adoption is accelerating even if from a low baseline.[1]",
      "BSC AI Factory participation — Romania participates in Spain's BSC AI Factory through the National Institute for Research and Development of Informatics (ICI București), demonstrating commitment to regional AI infrastructure.[75]"
    ],
    weaknesses: [
      "Lowest enterprise AI adoption in EU — At 5.21%, Romania has the lowest enterprise AI adoption rate among all EU member states, significantly trailing the 20% EU average.[1]",
      "Lowest individual generative AI usage in EU — Only 17.8% of Romanian citizens used generative AI tools in 2025, the lowest in the EU, indicating limited consumer awareness and digital literacy for AI tools.[3]",
      "Infrastructure and investment gaps — Despite technical talent, Romania faces challenges in AI infrastructure deployment, cloud computing capacity, and enterprise technology investment.",
      "Limited AI governance frameworks — Emerging regulatory and governance structures for AI may create uncertainty for enterprises considering AI deployment, potentially slowing adoption.",
      "Brain drain of technical talent — Competitive international labor market draws skilled Romanian developers abroad, creating workforce retention challenges for domestic AI development."
    ],
    comparativeContext: {
      inRegion: "Romania, alongside Poland (8.4%) and Bulgaria (8.5%), forms the bottom tier of EU AI adoption. Strong IT services sector has not yet translated into enterprise AI deployment, creating significant catch-up opportunity.[1]",
      globally: "Romania's position in the global AI landscape remains nascent, though strong technical education system and EU integration provide foundation for future growth. National AI Strategy signals government commitment to acceleration."
    }
  },
  {
    region: "Europe",
    subRegion: "Central & Eastern",
    country: "Croatia",
    provider: "Provider H",
    tier: 2,
    tierLabel: "Advanced",
    stats: [
      { label: "Working-age AI adoption", value: "21.8% (Microsoft AI Diffusion Report)[71]" },
      { label: "Enterprise AI adoption", value: "~12-15% (estimated, middle tier in EU)" },
      { label: "GenAI individual usage", value: "~30% (near EU average)" }
    ],
    marketInsights: "Croatia shows growing interest in AI workforce development, particularly in tourism technology and emerging tech startup ecosystem. EU membership enables access to structural funds for investments.",
    strengths: [
      "Moderate AI adoption positioning in Adriatic region — Croatia's 21.8% working-age AI adoption places it in the middle tier of global AI diffusion, ahead of many Central and Eastern European peers and indicating reasonable digital readiness.[71]",
      "EU funding access for digital transformation — EU structural funds available for digital skills and AI training programs, providing financial support for enterprise and public sector AI workforce development initiatives.",
      "Tourism sector digitalization opportunity — Strong tourism industry creates specific AI application opportunities in hospitality, customer service personalization, and operational efficiency that drive training demand.",
      "Regional hub positioning — Geographic position between Western and Southeastern Europe offers strategic advantage for training delivery across Adriatic and Balkan markets.",
      "Growing tech startup ecosystem — Emerging technology sector in Zagreb and other cities creates entrepreneurial AI demand and potential for innovation-focused training programs."
    ],
    weaknesses: [
      "Limited absolute market scale — Population of approximately 3.9 million limits domestic market size, requiring regional expansion strategy for sustainable training business growth.",
      "Infrastructure development needs — While improving, Croatia's digital infrastructure and cloud computing capacity remain behind Western European leaders, potentially constraining enterprise AI deployment.",
      "Brain drain pressure — EU freedom of movement enables technical talent migration to higher-wage Western European markets, creating workforce retention challenges.",
      "Below EU average in key digital metrics — Croatia falls in the lower-middle tier across several EU digital metrics, indicating need for accelerated digital transformation to support AI adoption.",
      "Tourism sector seasonality — Heavy dependence on tourism creates seasonal business cycles that may affect enterprise training budgets and scheduling."
    ],
    comparativeContext: {
      inRegion: "Croatia performs in the middle tier of EU AI adoption, comparable to countries like Slovenia, Austria, and Greece. Its Adriatic positioning creates opportunities for regional training hub development.[71]",
      globally: "Microsoft AI Diffusion data positions Croatia among moderate global AI adopters. Investment in AI and cloud infrastructure, digital skills, and regional collaboration will be essential for accelerating adoption.[71]"
    }
  },
  {
    region: "Europe",
    subRegion: "Central & Eastern",
    country: "Slovenia",
    provider: "Provider I",
    tier: 4,
    tierLabel: "Nascent",
    stats: [
      { label: "Working-age AI adoption", value: "24.6% (Microsoft AI Diffusion Report)[71]" },
      { label: "Enterprise AI adoption", value: "Among EU intermediate adopters (~15-20%)" },
      { label: "AI purpose adoption", value: "Recognized for adopting AI technologies for multiple purposes[72]" }
    ],
    marketInsights: "Slovenia's small but highly educated workforce shows readiness for AI adoption. Strong manufacturing base and EU membership create structural demand for skills development.",
    strengths: [
      "Higher AI adoption than regional peers — Slovenia's 24.6% working-age AI adoption exceeds Croatia (21.8%) and Serbia (19.7%), indicating stronger digital foundation among Adriatic neighbors.[71]",
      "Recognized for broad AI purpose adoption — Eurostat cluster analysis identifies Slovenia alongside Belgium, Denmark, Netherlands, and Sweden as countries adopting AI technologies for multiple purposes rather than single use cases.[72]",
      "High baseline education quality — Well-established education system produces highly educated workforce with strong STEM foundation, enabling rapid AI skills acquisition.",
      "Manufacturing concentration for applied AI — Strong industrial base creates applied AI training opportunities in manufacturing, quality control, process optimization, and Industry 4.0 applications.",
      "Central European positioning — Geographic location enables regional training delivery across Central Europe, with strong connections to Austrian and German markets."
    ],
    weaknesses: [
      "Very small domestic market — Population of approximately 2.1 million severely limits domestic market size, requiring expansion into neighboring markets for business viability.",
      "Limited AI infrastructure investment — Small market size constrains ability to attract major AI infrastructure investments, potentially requiring reliance on regional data centers.",
      "Talent retention challenges — Proximity to Austria and Germany creates competitive pressure for AI talent, with wage differentials driving brain drain.",
      "Limited language scale for AI models — Slovenian language AI models and resources limited due to small speaker population, creating dependence on multilingual solutions.",
      "Economic constraints on training investment — Smaller enterprises may face budget constraints for comprehensive AI training programs compared to larger European markets."
    ],
    comparativeContext: {
      inRegion: "Slovenia performs well among smaller EU states and has been grouped with Northern European leaders for multi-purpose AI adoption. Its educated workforce and manufacturing base create strong foundation for AI growth.[72]",
      globally: "Slovenia benefits from EU integration and Central European positioning but lacks scale to compete independently with major AI markets. Regional collaboration and niche specialization are essential strategies."
    }
  },
  {
    region: "Europe",
    subRegion: "Central & Eastern",
    country: "North Macedonia",
    provider: "Provider J",
    tier: 2,
    tierLabel: "Advanced",
    stats: [
      { label: "GenAI individual usage", value: "22% (below EU average)[69]" },
      { label: "Working-age AI adoption", value: "Estimated 15-20% based on regional patterns" },
      { label: "National AI strategy", value: "Under development with EU accession focus" }
    ],
    marketInsights: "North Macedonia's emerging tech sector shows interest in AI capabilities as part of broader economic modernization efforts. Limited current adoption creates greenfield market opportunity.[404]",
    strengths: [
      "Greenfield market opportunity — Early-stage market offers first-mover advantage for quality training providers establishing presence and brand recognition.",
      "EU accession trajectory driving standards alignment — Alignment with EU standards creates regulatory training demand as North Macedonia prepares for eventual EU membership and compliance requirements.",
      "Cost-effective training delivery location — Lower operational costs enable competitive pricing for training programs targeting regional markets.",
      "Regional connectivity for cross-border service — Position in Western Balkans enables cross-border service delivery to neighboring markets (Serbia, Kosovo, Albania, Bulgaria).",
      "Growing IT services sector — Emerging IT outsourcing and services sector creates demand for technical upskilling including AI capabilities."
    ],
    weaknesses: [
      "Below-average generative AI usage — At 22% individual GenAI usage, North Macedonia falls among European countries with lowest adoption alongside Bulgaria (23%), Poland (23%), and Serbia (19%).[69]",
      "Limited AI infrastructure — Nascent AI infrastructure and enterprise technology investment constrain ability to deploy advanced AI applications.",
      "Small market with economic constraints — Population of approximately 1.8 million and relatively lower GDP per capita limit domestic market opportunity and training budgets.",
      "Regulatory and governance gaps — Emerging regulatory frameworks for AI create uncertainty while also presenting opportunity for governance and compliance training.",
      "Brain drain to EU markets — Technical talent migration to EU member states creates workforce development challenges and limits local AI expertise concentration."
    ],
    comparativeContext: {
      inRegion: "North Macedonia falls among lowest European countries for GenAI adoption, comparable to Bulgaria, Poland, and Serbia. EU accession trajectory creates potential for accelerated adoption as alignment progresses.",
      globally: "As an emerging market, North Macedonia faces significant catch-up requirements but can learn from more mature markets. Regional cooperation and EU support mechanisms provide potential acceleration pathways."
    }
  },
  {
    region: "Asia-Pacific",
    country: "Singapore",
    provider: "Provider K",
    tier: 1,
    tierLabel: "Leader",
    stats: [
      { label: "Working-age AI adoption", value: "60.9% (second highest globally)[48]" },
      { label: "SME AI adoption", value: "14.5% (tripled YoY from 4.2%)[11]" },
      { label: "Non-SME AI adoption", value: "62.5% (up from 44%)[11]" },
      { label: "Digital economy", value: "18.6% of GDP (S$128.1 billion)[11]" },
      { label: "Worker AI usage", value: "75% regularly use AI tools[18]" }
    ],
    marketInsights: "Singapore's position as ASEAN's AI hub creates demand for enterprise-grade implementation training. Government's National AI Strategy 2.0 and substantial investment ($27B commitment) drive urgency for workforce upskilling at scale.[405][406][407]",
    strengths: [
      "Second-highest global AI adoption rate — 60.9% of Singapore's working-age population uses AI tools, second only to UAE (64%) globally, demonstrating exceptional digital readiness and enterprise AI integration.[48]",
      "Explosive SME AI adoption growth — SME AI adoption tripled in one year from 4.2% to 14.5%, while non-SME adoption jumped from 44% to 62.5%, showing unprecedented acceleration across business sizes.[11]",
      "Strong government coordination and investment — National AI Strategy 2.0, Digital Leaders Programme supporting 2,000 enterprises, and S$27 billion AI investment commitment provide comprehensive policy support for AI workforce development.[407][14]",
      "Documented AI productivity gains — 85% of AI-using workers report improved productivity, time savings, and work quality improvements. SMEs using AI-enabled PSG solutions achieved 52% average cost savings.[11][18]",
      "Regional training hub for Southeast Asia — Companies throughout Southeast Asia look to Singapore-based providers for AI capability building, creating regional market expansion opportunity beyond domestic market."
    ],
    weaknesses: [
      "High cost structure for training delivery — Singapore's high operating costs and wage levels create pricing pressure for training providers, requiring premium positioning or efficiency optimization.",
      "Talent competition in tight labor market — Tech workforce expanded to 214,000 but competitive hiring environment makes instructor recruitment challenging, particularly for specialized AI expertise.",
      "SME adoption still modest in absolute terms — Despite tripling, 14.5% SME AI adoption remains well below large enterprise rates, indicating significant market development work required.",
      "Dependence on off-the-shelf GenAI tools — 84% of AI-using firms rely on off-the-shelf generative AI tools rather than custom solutions, potentially limiting demand for advanced technical training.[13]",
      "Hype cycle concerns — IMDA acknowledges need to 'separate hype from reality' as valuations fluctuate, requiring training providers to focus on demonstrated value rather than trend-chasing.[16]"
    ],
    comparativeContext: {
      inRegion: "Singapore leads ASEAN in AI adoption and serves as regional hub for AI training and development. Strong government support and infrastructure investment position it as Asia's premier AI training destination.",
      globally: "Singapore's 60.9% working-age AI adoption places it second globally behind UAE. The combination of government investment, enterprise adoption, and workforce readiness creates exceptional market for AI training.[48]"
    }
  },
  {
    region: "Asia-Pacific",
    country: "Australia",
    provider: "Provider L",
    tier: 1,
    tierLabel: "Leader",
    stats: [
      { label: "Enterprise AI adoption", value: "35%+ of Australian businesses[27]" },
      { label: "Large enterprise adoption", value: "60% (500+ employees)[27]" },
      { label: "Enterprise AI growth", value: "140%+ YoY (among fastest globally)[26]" },
      { label: "GenAI individual usage", value: "49% (up from 38% in 2023)[28]" },
      { label: "AI market value", value: "AUD 7.25 billion (2025)[28]" }
    ],
    marketInsights: "Australian businesses show growing AI adoption with particular emphasis on productivity applications. RBA research indicates technology investment acceleration, though trust remains a barrier.[408][409][410][411][412]",
    strengths: [
      "Among fastest-growing enterprise AI markets globally — Australia joins Brazil, Netherlands, and France in exceeding 140% year-over-year growth in enterprise AI customers, indicating exceptional adoption momentum.[26]",
      "High individual generative AI usage — Google/Ipsos 2025 survey shows 49% of Australians employed generative AI in the last year, up from 38% in 2023, with 74% of AI users integrating tools into work.[28]",
      "Strong government investment and policy support — Australian Government allocated $124 million toward AI research and development. National AI Centre's AI Adoption Tracker provides detailed market intelligence.[27][22]",
      "Sector-specific opportunities in mining and resources — Major extractives sector creates specialized industrial AI training opportunities for predictive maintenance, exploration optimization, and operational efficiency.",
      "Demonstrated ROI driving adoption — 48% of businesses report positive ROI within first year of implementing AI solutions, supporting business case for training investment.[27]"
    ],
    weaknesses: [
      "Trust deficit despite growing usage — KPMG global study reveals Australia lags in AI trust despite growing usage, creating need for change management and responsible AI training integration.[412]",
      "SME adoption significantly lower than large enterprises — Only 20% SME adoption compared to 60% for large enterprises (500+ employees) indicates significant market development opportunity but also structural barriers.[27]",
      "Cautious enterprise approach compared to global leaders — RBA research indicates 'adoption of AI at an enterprise scale is still at a very early stage and largely for pilot or experimental purposes,' suggesting conservative deployment patterns.[24]",
      "AI talent concentration below global leaders — Australia's relative performance across AI skill penetration and AI talent concentration is lower than other countries, reflecting cautious adoption approach.[24]",
      "Geographic isolation affecting training delivery — Distance from major AI hubs creates challenges for instructor recruitment and international training partnerships."
    ],
    comparativeContext: {
      inRegion: "Australia leads alongside Singapore in AI adoption within the region. Strong government support and enterprise investment create substantial training market opportunity.",
      globally: "Australia's 140%+ enterprise AI growth rate positions it among fastest-growing markets globally. The combination of high consumer adoption (49%) and enterprise investment creates strong foundation for continued expansion.[26][28]"
    }
  },
  {
    region: "Americas",
    country: "Mexico",
    provider: "Provider M",
    tier: 2,
    tierLabel: "Advanced",
    stats: [
      { label: "AI investment (2018-2024)", value: "$640 million secured[52]" },
      { label: "Manufacturing AI adoption", value: "Growing significantly, especially automotive and electronics" },
      { label: "GenAI excitement", value: "72% somewhat excited about AI possibilities[59]" },
      { label: "ILIA ranking", value: "Among 'adopters' category in Latin America" }
    ],
    marketInsights: "Mexico's manufacturing nearshoring boom creates AI training demand in automotive and electronics production. Growing corporate interest but limited local AI infrastructure.",
    strengths: [
      "Nearshoring momentum driving technology investment — US-Mexico supply chain integration accelerates technology modernization investments as companies relocate or expand manufacturing operations, creating AI training demand.[52]",
      "Large workforce scale for volume opportunity — Substantial labor market creates significant volume opportunity for foundational AI literacy programs and industrial AI applications training.",
      "Spanish-language hub for Latin America — Potential to serve broader Latin American market from Mexico base, leveraging language advantage and regional connectivity.",
      "Strong R&D and adoption rates in regional context — Mexico is considered an 'AI advancer' in Latin America owing to R&D investment and adoption rates, though governance remains a gap area.[58]",
      "Government-university-industry partnerships — Partnerships between Mexican government, local universities, and global technology companies focus on developing AI talent pipelines and research centers.[52]"
    ],
    weaknesses: [
      "Governance gap limiting full potential — While Mexico advances in R&D and adoption, governance frameworks for AI lag behind South American peers like Chile, Brazil, and Uruguay.[58]",
      "Underperformance relative to US economic integration — Despite high integration with the US AI economy, Mexico underperforms on the Latin America AI Index compared to expectations, indicating structural barriers.[58]",
      "Data center and infrastructure limitations — Most new data centers are not being built in Mexico's capital, creating potential infrastructure constraints for AI deployment at scale.[58]",
      "Only 17% of companies have AI governance frameworks — Just 17% of companies in the region have established clear AI governance frameworks, creating regulatory uncertainty.[59]",
      "Rural connectivity gap — Only 4 out of 10 rural Latin Americans have internet access, limiting AI training reach and enterprise deployment in rural regions.[59]"
    ],
    comparativeContext: {
      inRegion: "Mexico falls behind Chile, Brazil, and Uruguay as regional AI 'pioneers' but leads among 'adopter' category countries. Manufacturing strength creates differentiated AI application opportunities.[56]",
      globally: "Mexico benefits from proximity to US AI ecosystem but has not fully leveraged this advantage. Manufacturing AI applications and nearshoring dynamics create growth opportunities."
    }
  },
  {
    region: "Americas",
    country: "Brazil",
    provider: "Provider N",
    tier: 2,
    tierLabel: "Advanced",
    stats: [
      { label: "ILIA ranking", value: "Pioneer (among top 3 in Latin America)[56]" },
      { label: "Enterprise AI growth", value: "140%+ YoY (among fastest globally)[26]" },
      { label: "Daily AI usage", value: "68% of Brazilian professionals use AI daily[60]" },
      { label: "GenAI excitement", value: "65% somewhat excited about AI possibilities[59]" },
      { label: "Microsoft investment", value: "$2.7 billion committed through 2027[52]" }
    ],
    marketInsights: "Brazil's large economy and tech sector growth create significant AI opportunity. Agricultural technology and financial services lead adoption, though infrastructure gaps persist.",
    strengths: [
      "Latin America's AI powerhouse with pioneer status — Chile, Brazil, and Uruguay have consolidated as pioneers scoring more than 60 points on the Latin America AI Index, positioning Brazil as regional leader.[56]",
      "Among fastest-growing enterprise AI markets globally — Brazil joins Australia, Netherlands, and France in exceeding 140% year-over-year growth in enterprise AI customers, indicating exceptional momentum.[26]",
      "High daily AI usage among professionals — 68% of Brazilian professionals use AI every day according to Read AI research, demonstrating exceptional workforce integration of AI tools.[60]",
      "Massive Microsoft investment commitment — Microsoft committed US$2.7 billion through 2027 to expand AI and cloud infrastructure in Brazil—its largest investment in the country—including upskilling programs and innovation incentives.[52]",
      "Diverse sector adoption — Finance (AI-driven risk modeling, digital banking), retail (recommendation engines), agriculture (precision farming, pest control), and fintech (Magie processing $16.5M via WhatsApp) demonstrate broad AI application.[52][59]"
    ],
    weaknesses: [
      "Only 33% have formal AI access and training at work — Despite 68% daily usage, only 33% of Brazilian workers have formal AI access and training, indicating informal adoption outpacing organizational support.[60]",
      "Regional disparities within Brazil — São Paulo leads AI development while North and Northeast regions do not receive adequate AI services, creating uneven market development.[59]",
      "Economic inequality limiting inclusive adoption — Significant income inequality affects ability of SMEs and smaller organizations to invest in AI training and implementation.",
      "Regulatory uncertainty — Only 17% of regional companies have established AI governance frameworks, creating compliance and risk management challenges.[59]",
      "Infrastructure gaps outside major centers — Rural connectivity and infrastructure limitations constrain AI deployment and training delivery beyond major urban centers."
    ],
    comparativeContext: {
      inRegion: "Brazil leads as one of three regional pioneers alongside Chile and Uruguay. Manufacturing and agritech applications create differentiated opportunities. 16.9% of manufacturing firms with 100+ employees use AI.[54]",
      globally: "Brazil's 140%+ enterprise growth rate positions it among fastest-growing markets globally. Read AI identifies Brazil as one of its fastest-growing markets, validating strong AI adoption trajectory.[26][60]"
    }
  },
  {
    region: "Africa",
    country: "South Africa",
    provider: "Provider O",
    tier: 2,
    tierLabel: "Advanced",
    stats: [
      { label: "GenAI adult adoption", value: "45.4% (among fastest globally)[49]" },
      { label: "Internet user AI adoption", value: "15.3% (working-age population)" },
      { label: "AI readiness", value: "77% of businesses prepared to adopt AI immediately[44]" },
      { label: "AI market", value: "Over 600 AI companies (most in Africa)[45]" }
    ],
    marketInsights: "South Africa leads African AI adoption with growing enterprise interest across financial services, mining, and telecommunications. Demand spans from executive awareness to technical implementation.[413][414][415]",
    strengths: [
      "Continental AI leadership with 600+ AI companies — South Africa hosts over 600 AI companies, the most in Africa, followed by Nigeria (400+) and Egypt (200+), demonstrating established ecosystem.[45]",
      "Among world's fastest generative AI adopters — OECD-Cisco research shows 45.4% of South African adults use generative AI tools, positioning the country among global leaders in AI adoption.[49]",
      "Strong enterprise readiness — 77% of South African business decision-makers are prepared to adopt AI tools immediately, with over half already seeing measurable benefits.[44]",
      "Robust infrastructure and regulatory framework — Internet penetration at 74.7% (2024), $6.8B IoT market, and robust policies (POPIA, Cybercrimes Act, National AI Policy Framework) support AI deployment.[42]",
      "Financial services concentration driving adoption — Johannesburg's banking sector drives enterprise AI implementation demand. Banks using AI for fraud detection, risk management, and personalized marketing.[42]"
    ],
    weaknesses: [
      "Significant regional inequality in access — AI adoption concentrated in urban centers (Johannesburg, Cape Town) with limited reach to rural areas and other provinces.",
      "Skills gap and talent retention challenges — Competitive global market draws skilled South African AI practitioners abroad, creating workforce development and retention challenges.",
      "Economic constraints affecting SME adoption — While large enterprises lead, SMEs face budget and resource constraints limiting AI adoption and training investment.",
      "Trust and well-being considerations — OECD-Cisco research notes well-being considerations require greater attention in South Africa, suggesting need for balanced approach to AI adoption.[49]",
      "Infrastructure limitations outside major centers — Data center and connectivity infrastructure concentrated in major metros, constraining AI deployment in secondary markets."
    ],
    comparativeContext: {
      inRegion: "South Africa leads continental AI adoption by significant margin. Kenya (42.1% ChatGPT usage) and Nigeria (120+ AI startups) are emerging competitors but lack South Africa's infrastructure and enterprise scale.[42][47]",
      globally: "South Africa's 45.4% GenAI adoption positions it among global leaders, comparable to advanced European and Asian markets. Mastercard research validates AI's transformative potential across African markets.[415]"
    }
  }
];

// Using brand colors for consistency with main report
const getTierColor = (tier: number) => {
  switch (tier) {
    case 1:
      return "bg-llpa-green/15 text-llpa-green border-llpa-green/30";
    case 2:
      return "bg-llpa-blue/15 text-llpa-blue border-llpa-blue/30";
    case 3:
      return "bg-llpa-yellow/15 text-llpa-yellow border-llpa-yellow/30";
    case 4:
      return "bg-llpa-orange/15 text-llpa-orange border-llpa-orange/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const MarketProfiles = () => {
  const groupedProfiles = profiles.reduce((acc, profile) => {
    const key = profile.subRegion ? `${profile.region} - ${profile.subRegion}` : profile.region;
    if (!acc[key]) acc[key] = [];
    acc[key].push(profile);
    return acc;
  }, {} as Record<string, MarketProfile[]>);

  // Tier distribution
  const tierDistribution = [
    { tier: "Tier 1 (Leaders)", count: 5, markets: "Denmark, Singapore, Netherlands, Switzerland, Australia" },
    { tier: "Tier 2 (Advanced)", count: 8, markets: "Germany, UK, Mexico, Brazil, Croatia, Romania, South Africa, North Macedonia" },
    { tier: "Tier 3 (Emerging)", count: 1, markets: "Portugal" },
    { tier: "Tier 4 (Nascent)", count: 1, markets: "Slovenia" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link to="/#section-1-1" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Report
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Regional Market Profiles
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              Comprehensive AI Adoption Analysis by Country
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-8">
              These profiles provide strengths, weaknesses, and comparative context for each market.
            </p>

            {/* Tier Distribution Table */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-steel" />
                Tier Distribution
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Tier</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Count</th>
                      <th className="text-left py-3 pl-4 font-semibold text-foreground">Markets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tierDistribution.map((row, i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">{row.tier}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.count}</td>
                        <td className="py-3 pl-4 text-muted-foreground">{row.markets}</td>
                      </tr>
                    ))}
                    <tr className="bg-muted/30">
                      <td className="py-3 pr-4 font-semibold text-foreground">Total</td>
                      <td className="py-3 px-4 font-semibold text-foreground">15</td>
                      <td className="py-3 pl-4 text-muted-foreground">markets across 4 tiers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Main content with sidebar */}
          <div className="flex gap-8">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Market Profiles by Region */}
              {Object.entries(groupedProfiles).map(([region, regionProfiles], regionIndex) => (
                <motion.section
                  key={region}
                  id={`region-${region.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + regionIndex * 0.1 }}
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Globe className="w-6 h-6 text-steel" />
                    {region}
                  </h2>

                  <div className="space-y-6">
                    {regionProfiles.map((profile, profileIndex) => (
                      <div
                        key={`${profile.country}-${profileIndex}`}
                        id={`country-${profile.country.toLowerCase().replace(/\s+/g, '-')}`}
                        className="border border-border rounded-lg overflow-hidden bg-card scroll-mt-24"
                      >
                        {/* Profile Header */}
                        <div className="p-6 border-b border-border bg-muted/30">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-foreground">{profile.country}</h3>
                                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getTierColor(profile.tier)}`}>
                                  Tier {profile.tier}: {profile.tierLabel}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Building2 className="w-4 h-4" />
                                <span>{profile.provider}</span>
                                {profile.subRegion && (
                                  <>
                                    <span className="text-border">•</span>
                                    <span>{profile.subRegion}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Profile Content */}
                        <div className="p-6 space-y-6">
                          {/* Statistics */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-steel" />
                              Current Statistics (January 2025)
                            </h4>
                            <div className="grid gap-2">
                              {profile.stats.map((stat, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm">
                                  <span className="text-muted-foreground">{stat.label}:</span>
                                  <span className="font-medium text-foreground">
                                    <MarketProfileCitation text={stat.value} />
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Market Insights */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                              <Users className="w-4 h-4 text-steel" />
                              Market Insights
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              <MarketProfileCitation text={profile.marketInsights} />
                            </p>
                          </div>

                          {/* Strengths & Weaknesses */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-3">
                                Strengths
                              </h4>
                              <ul className="space-y-2">
                                {profile.strengths.map((strength, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                    <span className="text-emerald-600 mt-1">✓</span>
                                    <span>
                                      <MarketProfileCitation text={strength} />
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Weaknesses
                              </h4>
                              <ul className="space-y-2">
                                {profile.weaknesses.map((weakness, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>
                                      <MarketProfileCitation text={weakness} />
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Comparative Context */}
                          <div className="pt-4 border-t border-border">
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                              Comparative Context
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-foreground">In {profile.region}:</span>
                                <p className="text-muted-foreground mt-1">
                                  <MarketProfileCitation text={profile.comparativeContext.inRegion} />
                                </p>
                              </div>
                              <div>
                                <span className="font-medium text-foreground">Globally:</span>
                                <p className="text-muted-foreground mt-1">
                                  <MarketProfileCitation text={profile.comparativeContext.globally} />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Sidebar TOC */}
            <MarketProfileSidebar groupedProfiles={groupedProfiles} />
          </div>
        </div>

        <div id="references">
          <MarketProfileReferences />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketProfiles;
