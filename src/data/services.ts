// Titech Agency - Services & Agency Data
// US / UK / UAE based AI-driven digital services agency

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string; // lucide icon name
  image: string; // ai-generated image path
  trending: boolean;
  features: string[];
};

// Trending services (shown on home preview) + full catalog (in detailed section)
export const SERVICES: Service[] = [
  {
    id: "ai-development",
    title: "AI & Machine Learning",
    short: "Custom AI agents, LLM apps, computer vision, and intelligent automation.",
    description:
      "We design and deploy production-grade AI systems — from custom GPT-powered agents and RAG pipelines to computer vision, predictive models, and autonomous workflows. Built on z.ai, OpenRouter, NVIDIA NIM, and open-source models with full MLOps.",
    icon: "BrainCircuit",
    image: "/ai-images/service-ai.png",
    trending: true,
    features: [
      "Custom LLM agents & chatbots",
      "Retrieval Augmented Generation (RAG)",
      "Computer vision & OCR",
      "Predictive analytics",
      "Voice AI (TTS / ASR)",
      "AI image & video generation",
      "Fine-tuning & model hosting",
      "Autonomous AI workflows",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    short: "Next.js, React, 3D web, WebGL, and cinematic animated experiences.",
    description:
      "High-performance, SEO-ready web applications built with Next.js 16, React 19, and TypeScript. We craft immersive 3D experiences with Three.js, React Three Fiber, GSAP, and WebGL shaders that convert visitors into customers.",
    icon: "Globe",
    image: "/ai-images/service-web.png",
    trending: true,
    features: [
      "Next.js 16 App Router",
      "React 19 + TypeScript",
      "Three.js / React Three Fiber",
      "WebGL & GLSL shaders",
      "GSAP & Framer Motion",
      "Headless CMS integration",
      "E-commerce & PWAs",
      "Core Web Vitals optimization",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    short: "iOS, Android, and cross-platform apps with native-grade performance.",
    description:
      "We build stunning native and cross-platform mobile apps with React Native, Flutter, and Swift/Kotlin. From MVP to scale — offline-first, real-time, and beautifully animated.",
    icon: "Smartphone",
    image: "/ai-images/service-mobile.png",
    trending: true,
    features: [
      "React Native & Expo",
      "Flutter cross-platform",
      "Native iOS (Swift)",
      "Native Android (Kotlin)",
      "Offline-first architecture",
      "Push notifications",
      "App Store & Play Store launch",
      "In-app purchases",
    ],
  },
  {
    id: "branding-design",
    title: "Branding & UI/UX Design",
    short: "Brand identity, design systems, and UI/UX that feels premium.",
    description:
      "End-to-end brand identity and product design — logo systems, design tokens, motion guidelines, and pixel-perfect UI built in Figma and shipped with shadcn/ui and Tailwind.",
    icon: "Palette",
    image: "/ai-images/service-branding.png",
    trending: true,
    features: [
      "Brand identity & guidelines",
      "Logo & visual systems",
      "Design systems & tokens",
      "Figma to production",
      "shadcn/ui + Tailwind",
      "Motion design",
      "Prototyping & user testing",
      "Accessibility (WCAG)",
    ],
  },
  {
    id: "3d-animation",
    title: "3D & Motion Graphics",
    short: "Cinematic 3D scenes, product visualizations, and motion design.",
    description:
      "We create jaw-dropping 3D experiences for the web using Three.js, Spline, Blender, and WebGL — product configurators, interactive scenes, and cinematic hero animations.",
    icon: "Boxes",
    image: "/ai-images/service-3d.png",
    trending: true,
    features: [
      "Three.js / R3F scenes",
      "Spline 3D integration",
      "Blender modeling & animation",
      "Product visualization",
      "GLSL shader programming",
      "Interactive 3D configurators",
      "Cinematic transitions",
      "Real-time rendering",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Scalable cloud infrastructure, CI/CD, and observability.",
    description:
      "Production cloud architecture on AWS, GCP, and Azure — Kubernetes, Terraform, CI/CD pipelines, and 24/7 observability. We make sure your product scales gracefully.",
    icon: "Cloud",
    image: "/ai-images/service-cloud.png",
    trending: true,
    features: [
      "AWS / GCP / Azure",
      "Kubernetes & Docker",
      "Terraform IaC",
      "CI/CD pipelines",
      "Observability & monitoring",
      "Cost optimization",
      "Security & compliance",
      "Serverless architecture",
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    short: "Smart contracts, dApps, NFT platforms, and token economies.",
    description:
      "Full-stack Web3 development — Solidity smart contracts, decentralized apps, NFT marketplaces, and tokenomics design on Ethereum, Solana, and Layer 2s.",
    icon: "Link2",
    image: "/ai-images/service-blockchain.png",
    trending: false,
    features: [
      "Solidity smart contracts",
      "dApp development",
      "NFT marketplaces",
      "Tokenomics design",
      "Wallet integration",
      "Layer 2 solutions",
      "Security audits",
      "DeFi protocols",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    short: "Performance marketing, SEO, and content that drives revenue.",
    description:
      "Data-driven growth — technical SEO, paid acquisition, content engines, and conversion-rate optimization. We turn traffic into pipeline.",
    icon: "Megaphone",
    image: "/ai-images/service-design.png",
    trending: false,
    features: [
      "Technical SEO",
      "Paid ads (Google/Meta)",
      "Content marketing",
      "CRO & A/B testing",
      "Analytics & attribution",
      "Social media strategy",
      "Email automation",
      "Growth experiments",
    ],
  },
  {
    id: "video-production",
    title: "Video & Content Production",
    short: "AI-generated video, motion graphics, and cinematic content.",
    description:
      "Full-service video production — AI-generated video, motion graphics, brand films, and social content. From script to final cut.",
    icon: "Video",
    image: "/ai-images/service-video.png",
    trending: false,
    features: [
      "AI video generation",
      "Motion graphics",
      "Brand films",
      "Social media content",
      "3D animation",
      "Scriptwriting",
      "Color grading",
      "Sound design",
    ],
  },
  {
    id: "saas-development",
    title: "SaaS Product Development",
    short: "From idea to scalable SaaS — MVP, billing, multi-tenancy.",
    description:
      "We build complete SaaS products — multi-tenant architecture, subscription billing, admin dashboards, and analytics. Ship your MVP in weeks, not months.",
    icon: "LayoutDashboard",
    image: "/ai-images/service-cloud.png",
    trending: false,
    features: [
      "Multi-tenant architecture",
      "Subscription billing",
      "Admin dashboards",
      "Analytics & reporting",
      "Role-based access",
      "API design",
      "Onboarding flows",
      "Scalable databases",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    short: "Shopify, headless commerce, and custom storefronts that sell.",
    description:
      "High-converting e-commerce experiences — Shopify Plus, headless commerce with Next.js, and custom B2B/B2C platforms with advanced checkout.",
    icon: "ShoppingCart",
    image: "/ai-images/service-web.png",
    trending: false,
    features: [
      "Shopify Plus",
      "Headless commerce",
      "Custom storefronts",
      "Payment integrations",
      "Inventory management",
      "B2B portals",
      "Conversion optimization",
      "Multi-currency",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    short: "Penetration testing, audits, and security hardening.",
    description:
      "End-to-end security — penetration testing, code audits, compliance (SOC2, GDPR), and DevSecOps. Sleep well knowing your product is protected.",
    icon: "ShieldCheck",
    image: "/ai-images/service-cloud.png",
    trending: false,
    features: [
      "Penetration testing",
      "Security audits",
      "SOC2 & GDPR compliance",
      "DevSecOps",
      "Threat modeling",
      "Incident response",
      "Zero-trust architecture",
      "Security training",
    ],
  },
];

export const TRENDING_SERVICES = SERVICES.filter((s) => s.trending);

// Tech stack showcase — all the frameworks the user requested
export type TechItem = {
  name: string;
  category: string;
  description: string;
  color: string;
};

export const TECH_STACK: TechItem[] = [
  { name: "Three.js", category: "3D Engine", description: "Low-level WebGL 3D engine for scenes, cameras, and shaders.", color: "#049ef4" },
  { name: "React Three Fiber", category: "3D React", description: "React renderer for Three.js — declarative 3D scenes.", color: "#ff6b9d" },
  { name: "PixiJS", category: "2D Engine", description: "Fastest 2D WebGL renderer for games & rich graphics.", color: "#e81a61" },
  { name: "Babylon.js", category: "3D Engine", description: "Powerful game & 3D engine with physics and PBR.", color: "#bb464b" },
  { name: "GSAP", category: "Animation", description: "Industry-standard JavaScript animation library.", color: "#88ce02" },
  { name: "Framer Motion", category: "Animation", description: "Production-ready motion library for React.", color: "#ff5cf0" },
  { name: "Spline", category: "3D Design", description: "Design & ship interactive 3D experiences visually.", color: "#ff9a55" },
  { name: "WebFlow", category: "No-Code", description: "Visual web design with clean exported code.", color: "#4353ff" },
  { name: "Framer", category: "No-Code", description: "Design & publish interactive sites in-browser.", color: "#0099ff" },
  { name: "WebGL", category: "Graphics", description: "Browser GPU API for real-time rendering & shaders.", color: "#990000" },
  { name: "GLSL Shaders", category: "Graphics", description: "Custom GPU shaders for cinematic visual effects.", color: "#a64dff" },
  { name: "Next.js 16", category: "Framework", description: "App Router, RSC, and server actions.", color: "#ffffff" },
  { name: "Tailwind CSS 4", category: "Styling", description: "Utility-first CSS with design tokens.", color: "#38bdf8" },
  { name: "shadcn/ui", category: "UI Kit", description: "Beautifully designed accessible React components.", color: "#e4e4e7" },
  { name: "21st.dev", category: "Components", description: "Community-driven modern component library.", color: "#a78bfa" },
  { name: "UI/UX Pro Max", category: "Design", description: "Senior-level design systems & micro-interactions.", color: "#f472b6" },
  { name: "z.ai SDK", category: "AI", description: "Primary AI provider — LLM, image, TTS, ASR, VLM.", color: "#22d3ee" },
  { name: "OpenRouter", category: "AI Fallback", description: "Multi-model LLM gateway with 200+ models.", color: "#8b5cf6" },
  { name: "NVIDIA NIM", category: "AI Fallback", description: "Enterprise-grade inference for Llama, Mistral & more.", color: "#76b900" },
  { name: "Prisma ORM", category: "Database", description: "Type-safe database ORM with migrations.", color: "#5a67d8" },
];

// Agency info
export const AGENCY = {
  name: "Titech Agency",
  tagline: "AI-Driven Digital Excellence",
  taglineLong: "We architect, design, and engineer the future of digital experiences.",
  regions: [
    { country: "United States", city: "New York", flag: "🇺🇸", address: "350 5th Ave, New York, NY 10118" },
    { country: "United Kingdom", city: "London", flag: "🇬🇧", address: "1 Canada Square, Canary Wharf, London E14 5AB" },
    { country: "United Arab Emirates", city: "Dubai", flag: "🇦🇪", address: "Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd, Dubai" },
  ],
  stats: [
    { value: 250, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Retention" },
    { value: 15, suffix: "+", label: "Industries Served" },
    { value: 40, suffix: "+", label: "Expert Engineers" },
  ],
  email: "titechagency@gmail.com",
  phone: "+92 321 380 9420",
  formSubmitEndpoint: "https://formsubmit.co/ajax/titechagency@gmail.com",
};

// Social media links
export const SOCIAL_LINKS: { name: string; href: string; icon: string }[] = [
  { name: "Twitter / X", href: "https://twitter.com/titechagency", icon: "Twitter" },
  { name: "LinkedIn", href: "https://linkedin.com/company/titechagency", icon: "Linkedin" },
  { name: "Instagram", href: "https://instagram.com/titechagency", icon: "Instagram" },
  { name: "Facebook", href: "https://facebook.com/titechagency", icon: "Facebook" },
  { name: "YouTube", href: "https://youtube.com/@titechagency", icon: "Youtube" },
  { name: "GitHub", href: "https://github.com/titechagency", icon: "Github" },
  { name: "Dribbble", href: "https://dribbble.com/titechagency", icon: "Dribbble" },
  { name: "Behance", href: "https://behance.net/titechagency", icon: "Behance" }, // no lucide icon, fallback
];

// Process steps
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business, goals, and audience to craft a bulletproof digital strategy.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Cinematic UI/UX design and interactive prototypes — you see the experience before we build.",
  },
  {
    step: "03",
    title: "Engineering & AI",
    description: "Our elite engineers and AI specialists build with Three.js, Next.js, and z.ai — production-grade.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "We deploy, monitor, and optimize — then scale with data-driven growth experiments.",
  },
];

// Why Choose Us features
export const WHY_CHOOSE_US = [
  {
    icon: "Zap",
    title: "Lightning Fast Delivery",
    description: "MVPs shipped in weeks, not months. Our AI-augmented workflow cuts dev time by 60%.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise-Grade Security",
    description: "SOC2, GDPR, and zero-trust architecture baked into every project from day one.",
  },
  {
    icon: "Sparkles",
    title: "AI-First Engineering",
    description: "Every product ships with AI built in — agents, automation, and intelligent UX.",
  },
  {
    icon: "Globe",
    title: "Truly Global Team",
    description: "Follow-the-sun delivery across 3 continents. Someone is always working on your project.",
  },
  {
    icon: "Award",
    title: "Award-Winning Design",
    description: "Awwwards, FWA, and CSS Design Awards — we build experiences that get recognized.",
  },
  {
    icon: "TrendingUp",
    title: "Measurable Results",
    description: "Average 3.2x ROI for clients within 6 months of launch. Growth you can quantify.",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote:
      "Titech transformed our outdated platform into a cinematic 3D experience. Conversions jumped 240% in the first quarter. They don't just build websites — they build belief.",
    name: "Sarah Mitchell",
    role: "CEO, Lumen Finance",
    location: "New York, US",
    avatar: "SM",
    rating: 5,
  },
  {
    quote:
      "The AI agent they built handles 80% of our customer queries autonomously. Our support costs dropped 65% while CSAT went UP. Unreal engineering.",
    name: "James Okonkwo",
    role: "CTO, Nebula Commerce",
    location: "London, UK",
    avatar: "JO",
    rating: 5,
  },
  {
    quote:
      "We needed a Web3 marketplace live in 6 weeks. Titech delivered in 4 — with smart contracts, a stunning UI, and zero security issues on audit. Best agency in the Gulf.",
    name: "Aisha Al-Rashid",
    role: "Founder, BlockSouk",
    location: "Dubai, UAE",
    avatar: "AR",
    rating: 5,
  },
  {
    quote:
      "Their Three.js work is on another planet. Our product configurator went viral on Twitter and drove 500K qualified visitors in a weekend.ROI was instant.",
    name: "Marcus Chen",
    role: "VP Product, Voltaic Motors",
    location: "San Francisco, US",
    avatar: "MC",
    rating: 5,
  },
  {
    quote:
      "From discovery to launch, Titech felt like an extension of our team. The cinematic motion design alone closed our Series B round. Investors were stunned.",
    name: "Priya Nair",
    role: "COO, Helix Health",
    location: "London, UK",
    avatar: "PN",
    rating: 5,
  },
  {
    quote:
      "The most professional agency I've worked with in 20 years. They delivered a multi-tenant SaaS with billing, dashboards, and AI analytics in 10 weeks. Flawless.",
    name: "Khalid Mansoor",
    role: "MD, Emirates Logistics",
    location: "Dubai, UAE",
    avatar: "KM",
    rating: 5,
  },
];

// Portfolio / Work showcase
export const PORTFOLIO = [
  {
    id: "p1",
    title: "Lumen Finance Platform",
    category: "Fintech · Web App",
    description: "3D investment dashboard with real-time AI market insights and predictive portfolio analytics.",
    tags: ["Next.js", "Three.js", "AI", "Charts"],
    image: "/ai-images/service-ai.png",
    metric: "+240% conversions",
  },
  {
    id: "p2",
    title: "BlockSouk Marketplace",
    category: "Web3 · dApp",
    description: "NFT marketplace with smart contracts, wallet integration, and a stunning 3D product viewer.",
    tags: ["Solidity", "React", "3D", "Web3"],
    image: "/ai-images/service-blockchain.png",
    metric: "$4.2M volume",
  },
  {
    id: "p3",
    title: "Voltaic Configurator",
    category: "E-Commerce · 3D",
    description: "Real-time EV configurator with WebGL rendering and instant price calculations.",
    tags: ["Three.js", "R3F", "GSAP", "Commerce"],
    image: "/ai-images/service-3d.png",
    metric: "500K visitors",
  },
  {
    id: "p4",
    title: "Helix Health Suite",
    category: "SaaS · Healthcare",
    description: "Multi-tenant healthcare SaaS with AI diagnostics assistant and HIPAA-compliant architecture.",
    tags: ["Next.js", "AI", "SaaS", "Multi-tenant"],
    image: "/ai-images/service-cloud.png",
    metric: "Series B closed",
  },
  {
    id: "p5",
    title: "Nebula Commerce AI",
    category: "AI · Retail",
    description: "Autonomous customer service agent handling 80% of queries with RAG over product catalog.",
    tags: ["LLM", "RAG", "Voice AI", "Automation"],
    image: "/ai-images/service-ai.png",
    metric: "-65% support cost",
  },
  {
    id: "p6",
    title: "Emirates Logistics OS",
    category: "Enterprise · Dashboard",
    description: "Logistics command center with live fleet tracking, predictive ETAs, and AI route optimization.",
    tags: ["Dashboard", "Real-time", "AI", "Maps"],
    image: "/ai-images/service-web.png",
    metric: "10-week delivery",
  },
];

// Pricing packages
export const PRICING = [
  {
    name: "Launch",
    tagline: "For startups validating an idea",
    price: "$4,900",
    period: "/ project",
    popular: false,
    features: [
      "5-page cinematic website",
      "Mobile-responsive design",
      "Basic AI chatbot integration",
      "Contact form + CRM setup",
      "SEO foundation",
      "2 rounds of revisions",
      "14-day delivery",
      "30 days post-launch support",
    ],
    cta: "Start with Launch",
  },
  {
    name: "Scale",
    tagline: "For growing brands going premium",
    price: "$14,900",
    period: "/ project",
    popular: true,
    features: [
      "Full 3D animated website",
      "Custom AI agent (z.ai powered)",
      "Headless CMS integration",
      "Advanced animations (GSAP + R3F)",
      "E-commerce / booking system",
      "Analytics dashboard",
      "Unlimited revisions (fair use)",
      "30-day delivery",
      "90 days post-launch support",
    ],
    cta: "Choose Scale",
  },
  {
    name: "Enterprise",
    tagline: "For industry leaders & complex builds",
    price: "Custom",
    period: "/ quote",
    popular: false,
    features: [
      "Multi-platform (web + mobile + AI)",
      "Dedicated engineering team",
      "Custom 3D / WebGL experiences",
      "Multi-tenant SaaS architecture",
      "Advanced AI (RAG, vision, voice)",
      "Cloud + DevOps + security audits",
      "SLA & dedicated success manager",
      "60-90 day delivery",
      "12 months priority support",
    ],
    cta: "Talk to Sales",
  },
];

// FAQ
export const FAQ = [
  {
    q: "What makes Titech Agency different from other digital agencies?",
    a: "Three things: (1) We're AI-first — every project ships with intelligent automation built in. (2) We engineer cinematic 3D experiences using Three.js, R3F, and GSAP that most agencies can't. (3) We operate across US, UK, and UAE with follow-the-sun delivery, so your project moves 24/7.",
  },
  {
    q: "How much does a typical project cost?",
    a: "Pricing is project-based and depends on scope. Our Launch package starts at $4,900 for a cinematic website, the Scale package is $14,900 for full 3D + AI, and Enterprise is custom-quoted for complex multi-platform builds. Book a free consultation and we'll tailor a quote within 24 hours.",
  },
  {
    q: "How long does delivery take?",
    a: "Launch websites ship in 14 days, Scale projects in 30 days, and Enterprise builds in 60–90 days depending on complexity. Our AI-augmented workflow cuts traditional timelines by ~60%, so you launch faster without compromising quality.",
  },
  {
    q: "Do you work with clients outside the US, UK, and UAE?",
    a: "Absolutely. While we have physical offices in New York, London, and Dubai, we've delivered projects for clients in 40+ countries. Our remote-first process and async communication tools make timezone differences a non-issue.",
  },
  {
    q: "Can you integrate AI into our existing product?",
    a: "Yes — that's one of our specialties. We build custom AI agents, RAG pipelines, computer vision systems, and voice AI on top of existing platforms. We use the z.ai SDK as our primary engine, with OpenRouter and NVIDIA NIM as automatic fallbacks for maximum uptime.",
  },
  {
    q: "What happens after launch?",
    a: "Every package includes post-launch support (30 days for Launch, 90 for Scale, 12 months for Enterprise). We also offer ongoing growth retainers covering SEO, CRO, performance monitoring, and feature iterations. We're in it for the long haul.",
  },
  {
    q: "Do you sign NDAs and handle sensitive data?",
    a: "Always. We sign NDAs before any discovery call, follow SOC2 and GDPR practices, and implement zero-trust architecture on every project. Your IP and data security are non-negotiable for us.",
  },
  {
    q: "What is your tech stack?",
    a: "Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui. 3D & Animation: Three.js, React Three Fiber, PixiJS, Babylon.js, GSAP, Framer Motion, Spline, WebGL, GLSL. AI: z.ai SDK, OpenRouter, NVIDIA NIM. Backend: Prisma ORM, Node.js, serverless. Cloud: AWS, GCP, Azure with Kubernetes and Terraform.",
  },
];

// Team members
export const TEAM = [
  {
    name: "Daniel Reyes",
    role: "Founder & CEO",
    bio: "Ex-Google, 15+ years scaling digital products. Leads strategy across all 3 regions.",
    avatar: "DR",
    color: "from-violet-500 to-fuchsia-500",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Amira Hassan",
    role: "Chief Design Officer",
    bio: "Awwwards-winning designer. Former Lead at Figma. Obsessed with cinematic motion.",
    avatar: "AH",
    color: "from-cyan-400 to-blue-500",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Tomás Whitfield",
    role: "CTO & Head of Engineering",
    bio: "Built systems serving 50M+ users. Three.js core contributor. AI architecture specialist.",
    avatar: "TW",
    color: "from-emerald-400 to-cyan-500",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Leila Park",
    role: "VP, AI Research",
    bio: "PhD ML Stanford. Previously NVIDIA. Leads our z.ai / OpenRouter / NIM agent platform.",
    avatar: "LP",
    color: "from-fuchsia-500 to-pink-500",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Omar Siddiqui",
    role: "Director, MENA Region",
    bio: "Based in Dubai. 12 years scaling enterprise in the Gulf. Heads our UAE office.",
    avatar: "OS",
    color: "from-amber-400 to-orange-500",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Eleanor Vance",
    role: "Head of Client Success",
    bio: "Based in London. Ensures every project ships on time, on budget, and beyond expectations.",
    avatar: "EV",
    color: "from-indigo-400 to-violet-500",
    socials: { twitter: "#", linkedin: "#" },
  },
];

// Blog / insights
export const BLOG_POSTS = [
  {
    id: "b1",
    title: "Why 3D Web Experiences Convert 3x Better Than Flat Sites",
    excerpt:
      "We analyzed 200 client launches and found a consistent pattern: immersive 3D drives engagement, retention, and conversion. Here's the data.",
    category: "Design",
    readTime: "6 min read",
    date: "Nov 18, 2025",
    image: "/ai-images/service-3d.png",
  },
  {
    id: "b2",
    title: "Building Production AI Agents with z.ai, OpenRouter & NVIDIA",
    excerpt:
      "A deep dive into our 3-tier fallback architecture that keeps Titech's AI agents online 99.99% of the time. Code included.",
    category: "AI",
    readTime: "9 min read",
    date: "Nov 12, 2025",
    image: "/ai-images/service-ai.png",
  },
  {
    id: "b3",
    title: "The Cinematic Web: GSAP + R3F Techniques That Wow Users",
    excerpt:
      "Scroll-triggered animations, shader transitions, and camera choreography — the techniques behind award-winning sites.",
    category: "Engineering",
    readTime: "7 min read",
    date: "Nov 5, 2025",
    image: "/ai-images/service-web.png",
  },
];

// Client logos (text-based for marquee)
export const CLIENTS = [
  "Lumen Finance",
  "BlockSouk",
  "Voltaic Motors",
  "Helix Health",
  "Nebula Commerce",
  "Emirates Logistics",
  "Quantum Labs",
  "Aether Studios",
  "Vertex Capital",
  "Solace AI",
  "Pinnacle Retail",
  "Meridian Cloud",
];

// Awards & recognition
export const AWARDS = [
  { name: "Awwwards", count: 12, label: "Site of the Day" },
  { name: "FWA", count: 8, label: "Site of the Day" },
  { name: "CSS Design Awards", count: 15, label: "Website of the Day" },
  { name: "Webby Awards", count: 5, label: "Honoree" },
  { name: "Communicator Awards", count: 7, label: "Gold Winner" },
  { name: "Clutch Global", count: 1, label: "Top 1% Agency" },
];

// Skills cloud — comprehensive capabilities
export const SKILLS_CLOUD = [
  { name: "React", level: 98, category: "Frontend" },
  { name: "Next.js 16", level: 96, category: "Frontend" },
  { name: "TypeScript", level: 97, category: "Language" },
  { name: "Three.js", level: 94, category: "3D" },
  { name: "React Three Fiber", level: 92, category: "3D" },
  { name: "WebGL", level: 88, category: "3D" },
  { name: "GLSL Shaders", level: 84, category: "3D" },
  { name: "GSAP", level: 95, category: "Animation" },
  { name: "Framer Motion", level: 96, category: "Animation" },
  { name: "PixiJS", level: 82, category: "2D" },
  { name: "Babylon.js", level: 80, category: "3D" },
  { name: "Spline", level: 88, category: "3D Design" },
  { name: "Tailwind CSS 4", level: 98, category: "Styling" },
  { name: "shadcn/ui", level: 96, category: "UI Kit" },
  { name: "Figma", level: 94, category: "Design" },
  { name: "Blender", level: 80, category: "3D Modeling" },
  { name: "Node.js", level: 95, category: "Backend" },
  { name: "Prisma ORM", level: 93, category: "Database" },
  { name: "PostgreSQL", level: 90, category: "Database" },
  { name: "Redis", level: 85, category: "Caching" },
  { name: "GraphQL", level: 88, category: "API" },
  { name: "tRPC", level: 86, category: "API" },
  { name: "Python", level: 89, category: "Language" },
  { name: "LLM Engineering", level: 94, category: "AI" },
  { name: "RAG Pipelines", level: 91, category: "AI" },
  { name: "Computer Vision", level: 86, category: "AI" },
  { name: "Prompt Engineering", level: 95, category: "AI" },
  { name: "OpenAI APIs", level: 93, category: "AI" },
  { name: "LangChain", level: 87, category: "AI" },
  { name: "Vector DBs", level: 85, category: "AI" },
  { name: "React Native", level: 89, category: "Mobile" },
  { name: "Flutter", level: 84, category: "Mobile" },
  { name: "Swift", level: 78, category: "Mobile" },
  { name: "Kotlin", level: 76, category: "Mobile" },
  { name: "AWS", level: 91, category: "Cloud" },
  { name: "GCP", level: 87, category: "Cloud" },
  { name: "Azure", level: 85, category: "Cloud" },
  { name: "Kubernetes", level: 86, category: "DevOps" },
  { name: "Docker", level: 92, category: "DevOps" },
  { name: "Terraform", level: 84, category: "DevOps" },
  { name: "CI/CD", level: 90, category: "DevOps" },
  { name: "Solidity", level: 78, category: "Web3" },
  { name: "Ethereum", level: 80, category: "Web3" },
  { name: "Solana", level: 75, category: "Web3" },
  { name: "SEO", level: 90, category: "Marketing" },
  { name: "Analytics", level: 88, category: "Marketing" },
  { name: "CRO", level: 86, category: "Marketing" },
];

// Comparison: Titech vs typical agencies
export const COMPARISON = [
  { feature: "AI-first engineering (every project)", titech: true, others: false },
  { feature: "Cinematic 3D / WebGL experiences", titech: true, others: false },
  { feature: "Follow-the-sun delivery (3 continents)", titech: true, others: false },
  { feature: "Custom AI agents with 3-tier fallback", titech: true, others: false },
  { feature: "Award-winning design team", titech: true, others: "sometimes" },
  { feature: "Source code ownership", titech: true, others: "sometimes" },
  { feature: "NDA + SOC2 + GDPR compliance", titech: true, others: "sometimes" },
  { feature: "Post-launch support included", titech: true, others: false },
  { feature: "Transparent fixed pricing", titech: true, others: false },
  { feature: "Senior engineers only (no juniors)", titech: true, others: false },
];

// Capability deep-dive metrics
export const CAPABILITIES = [
  { label: "Frontend Engineering", value: 98, color: "#a855f7" },
  { label: "3D / WebGL / Shaders", value: 94, color: "#22d3ee" },
  { label: "AI / ML / LLMs", value: 96, color: "#ec4899" },
  { label: "Mobile Development", value: 89, color: "#f59e0b" },
  { label: "Cloud / DevOps", value: 92, color: "#10b981" },
  { label: "UI/UX Design", value: 95, color: "#8b5cf6" },
];

// Tech timeline — milestones of our journey
export const TIMELINE = [
  {
    year: "2019",
    title: "The Spark",
    description: "Founded in a New York loft by 3 engineers obsessed with the cinematic web.",
    milestone: "First client shipped",
  },
  {
    year: "2020",
    title: "London Expansion",
    description: "Opened our UK studio. First Awwwards Site of the Day.",
    milestone: "Team grew to 12",
  },
  {
    year: "2021",
    title: "AI Practice Born",
    description: "Launched our AI division — first custom GPT-powered chatbot shipped to production.",
    milestone: "50+ projects",
  },
  {
    year: "2022",
    title: "Dubai HQ",
    description: "Established MENA headquarters in Burj Khalifa. Enterprise clients onboarded.",
    milestone: "$5M revenue",
  },
  {
    year: "2023",
    title: "3D Web Renaissance",
    description: "Pioneered cinematic Three.js + R3F experiences. 3 FWA awards.",
    milestone: "150+ projects",
  },
  {
    year: "2024",
    title: "Multi-Model AI",
    description: "Built our 3-tier fallback AI agent platform (primary + OpenRouter + NVIDIA).",
    milestone: "99.99% uptime",
  },
  {
    year: "2025",
    title: "The Cinematic Web",
    description: "Shipping fully-animated, AI-generated, 4D-feel experiences at scale.",
    milestone: "250+ projects",
  },
];

// Newsletter benefits
export const NEWSLETTER_BENEFITS = [
  "Monthly insights on AI, 3D, and the cinematic web",
  "Early access to our open-source experiments",
  "Exclusive case studies not published elsewhere",
  "Zero spam. Unsubscribe anytime.",
];

// Quick stats for the interactive metrics banner
export const METRICS_BANNER = [
  { value: 24, suffix: "h", label: "Avg response time" },
  { value: 99.99, suffix: "%", label: "AI agent uptime", decimals: 2 },
  { value: 3.2, suffix: "x", label: "Avg client ROI", decimals: 1 },
  { value: 60, suffix: "%", label: "Faster delivery", decimals: 0 },
];

// AI agent quick-reply chips (advanced assistant UX)
export const AI_QUICK_REPLIES = [
  { label: "Services", message: "What services do you offer?" },
  { label: "Pricing", message: "How much does a project cost?" },
  { label: "Timeline", message: "How long does delivery take?" },
  { label: "Book call", message: "I want to book an appointment" },
  { label: "Tech stack", message: "What's your tech stack?" },
  { label: "Portfolio", message: "Show me your recent work" },
];

