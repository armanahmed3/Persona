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
  email: "hello@titechagency.com",
  phone: "+1 (212) 555-0199",
  formSubmitEndpoint: "https://formsubmit.co/ajax/hello@titechagency.com",
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
