// Titech Agency — Massive Projects Portfolio Data
// 50 categories × 100+ projects = 5,000+ industry-level projects
// Generated programmatically with realistic templates + curated featured projects

export type ProjectCategory = {
  id: string;
  name: string;
  icon: string; // lucide icon name
  color: string;
  description: string;
  projectCount: number;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  short: string;
  description: string;
  tags: string[];
  difficulty: 'Intermediate' | 'Advanced' | 'Expert';
  featured: boolean;
};

// === 50 CATEGORIES ===
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: 'ai-agents', name: 'AI Agents', icon: 'Bot', color: '#a855f7', description: 'Autonomous AI agents, chatbots, and intelligent assistants', projectCount: 0 },
  { id: 'gen-ai', name: 'Gen AI Projects', icon: 'Sparkles', color: '#ec4899', description: 'Generative AI — text, image, video, and code generation', projectCount: 0 },
  { id: 'web-dev', name: 'Web Development', icon: 'Globe', color: '#22d3ee', description: 'Modern web apps, websites, and web platforms', projectCount: 0 },
  { id: 'app-dev', name: 'App Development', icon: 'Smartphone', color: '#f59e0b', description: 'iOS, Android, and cross-platform mobile apps', projectCount: 0 },
  { id: 'software-dev', name: 'Software Development', icon: 'Code2', color: '#10b981', description: 'Desktop, enterprise, and system software', projectCount: 0 },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: 'Megaphone', color: '#8b5cf6', description: 'SEO, PPC, social media, and growth marketing', projectCount: 0 },
  { id: 'automation', name: 'Automation', icon: 'Zap', color: '#eab308', description: 'Workflow automation, RPA, and intelligent pipelines', projectCount: 0 },
  { id: 'graphic-design', name: 'Graphic Designing', icon: 'Palette', color: '#f472b6', description: 'Logos, visuals, brand assets, and print design', projectCount: 0 },
  { id: 'ui-ux', name: 'UI/UX Design', icon: 'PenTool', color: '#06b6d4', description: 'User interfaces, design systems, and product design', projectCount: 0 },
  { id: 'video-editing', name: 'Video Editing', icon: 'Video', color: '#ef4444', description: 'Video production, motion graphics, and content creation', projectCount: 0 },
  { id: 'cyber-security', name: 'Cyber Security', icon: 'ShieldCheck', color: '#84cc16', description: 'Penetration testing, audits, and security hardening', projectCount: 0 },
  { id: 'machine-learning', name: 'Machine Learning', icon: 'BrainCircuit', color: '#a855f7', description: 'ML models, predictive analytics, and data science', projectCount: 0 },
  { id: 'computer-vision', name: 'Computer Vision', icon: 'Eye', color: '#0ea5e9', description: 'Image recognition, object detection, and visual AI', projectCount: 0 },
  { id: 'nlp', name: 'NLP', icon: 'Languages', color: '#8b5cf6', description: 'Natural language processing and text AI', projectCount: 0 },
  { id: 'cloud-devops', name: 'Cloud & DevOps', icon: 'Cloud', color: '#3b82f6', description: 'Cloud infrastructure, CI/CD, and DevOps', projectCount: 0 },
  { id: 'blockchain', name: 'Blockchain/Web3', icon: 'Link2', color: '#f97316', description: 'Smart contracts, dApps, and decentralized systems', projectCount: 0 },
  { id: 'iot', name: 'IoT', icon: 'Cpu', color: '#14b8a6', description: 'Internet of Things, embedded systems, and hardware', projectCount: 0 },
  { id: 'ar-vr', name: 'AR/VR', icon: 'Glasses', color: '#d946ef', description: 'Augmented and virtual reality experiences', projectCount: 0 },
  { id: 'game-dev', name: 'Game Development', icon: 'Gamepad2', color: '#f43f5e', description: 'Games, interactive experiences, and game engines', projectCount: 0 },
  { id: 'fintech', name: 'Fintech', icon: 'CreditCard', color: '#059669', description: 'Financial technology, payments, and banking', projectCount: 0 },
  { id: 'healthtech', name: 'Healthtech', icon: 'HeartPulse', color: '#dc2626', description: 'Healthcare technology and medical AI', projectCount: 0 },
  { id: 'edtech', name: 'EdTech', icon: 'GraduationCap', color: '#7c3aed', description: 'Education technology and learning platforms', projectCount: 0 },
  { id: 'ecommerce', name: 'E-Commerce', icon: 'ShoppingCart', color: '#ea580c', description: 'Online stores, marketplaces, and retail tech', projectCount: 0 },
  { id: 'saas', name: 'SaaS Products', icon: 'LayoutDashboard', color: '#6366f1', description: 'Software-as-a-Service products and platforms', projectCount: 0 },
  { id: 'data-science', name: 'Data Science', icon: 'BarChart3', color: '#0891b2', description: 'Data analysis, visualization, and big data', projectCount: 0 },
  { id: 'api-dev', name: 'API Development', icon: 'Webhook', color: '#9333ea', description: 'REST, GraphQL, and microservice APIs', projectCount: 0 },
  { id: 'database', name: 'Database Design', icon: 'Database', color: '#4f46e5', description: 'Database architecture, optimization, and migration', projectCount: 0 },
  { id: 'qa-testing', name: 'QA & Testing', icon: 'Bug', color: '#65a30d', description: 'Quality assurance, automated testing, and audits', projectCount: 0 },
  { id: 'seo', name: 'SEO', icon: 'Search', color: '#0d9488', description: 'Search engine optimization and technical SEO', projectCount: 0 },
  { id: 'content-marketing', name: 'Content Marketing', icon: 'FileText', color: '#c026d3', description: 'Content strategy, blogs, and copywriting', projectCount: 0 },
  { id: 'social-media', name: 'Social Media', icon: 'Share2', color: '#2563eb', description: 'Social media management and campaigns', projectCount: 0 },
  { id: 'branding', name: 'Branding', icon: 'Stamp', color: '#db2777', description: 'Brand identity, guidelines, and strategy', projectCount: 0 },
  { id: 'motion-graphics', name: 'Motion Graphics', icon: 'Film', color: '#9333ea', description: 'Animated graphics and visual effects', projectCount: 0 },
  { id: '3d-modeling', name: '3D Modeling', icon: 'Boxes', color: '#7c3aed', description: '3D assets, models, and product visualization', projectCount: 0 },
  { id: 'animation', name: 'Animation', icon: 'Clapperboard', color: '#f59e0b', description: '2D/3D animation and character rigging', projectCount: 0 },
  { id: 'voice-ai', name: 'Voice AI', icon: 'Mic', color: '#06b6d4', description: 'Speech-to-text, text-to-speech, and voice agents', projectCount: 0 },
  { id: 'robotics', name: 'Robotics', icon: 'Bot', color: '#64748b', description: 'Robotics, drone automation, and physical AI', projectCount: 0 },
  { id: 'biotech', name: 'Biotech', icon: 'Dna', color: '#16a34a', description: 'Biotechnology and computational biology', projectCount: 0 },
  { id: 'agritech', name: 'AgriTech', icon: 'Sprout', color: '#65a30d', description: 'Agricultural technology and smart farming', projectCount: 0 },
  { id: 'greentech', name: 'GreenTech', icon: 'Leaf', color: '#22c55e', description: 'Clean energy and sustainability technology', projectCount: 0 },
  { id: 'real-estate', name: 'Real Estate Tech', icon: 'Building2', color: '#b45309', description: 'PropTech and real estate platforms', projectCount: 0 },
  { id: 'logistics', name: 'Logistics Tech', icon: 'Truck', color: '#0284c7', description: 'Supply chain, fleet, and logistics systems', projectCount: 0 },
  { id: 'enterprise', name: 'Enterprise Software', icon: 'Building', color: '#475569', description: 'ERP, CRM, and enterprise-grade systems', projectCount: 0 },
  { id: 'devsecops', name: 'DevSecOps', icon: 'Lock', color: '#dc2626', description: 'Security-integrated DevOps and compliance', projectCount: 0 },
  { id: 'email-marketing', name: 'Email Marketing', icon: 'Mail', color: '#9333ea', description: 'Email campaigns, automation, and CRM', projectCount: 0 },
  { id: 'ppc-ads', name: 'PPC & Ads', icon: 'Target', color: '#ea580c', description: 'Paid advertising and campaign management', projectCount: 0 },
  { id: 'music-prod', name: 'Music Production', icon: 'Music', color: '#a855f7', description: 'AI music, audio production, and sound design', projectCount: 0 },
  { id: 'photography', name: 'Photography', icon: 'Camera', color: '#64748b', description: 'Product, event, and AI-enhanced photography', projectCount: 0 },
  { id: 'quantum', name: 'Quantum Computing', icon: 'Atom', color: '#3b82f6', description: 'Quantum algorithms and quantum-ready systems', projectCount: 0 },
  { id: 'product-mgmt', name: 'Product Management', icon: 'ClipboardList', color: '#8b5cf6', description: 'Product strategy, roadmaps, and management', projectCount: 0 },
];

// === CURATED FEATURED PROJECTS (user-specified) ===
const FEATURED_PROJECTS: Omit<Project, 'id' | 'category'>[] = [
  // AI Agents
  { title: 'Education RAG-Based Chatbot', short: 'AI tutor that answers from your course materials using RAG.', description: 'A retrieval-augmented generation chatbot for educational institutions. Students ask questions and get answers grounded in their textbooks, lecture notes, and syllabus — with citations. Built with vector embeddings, LLM orchestration, and a multi-tenant architecture supporting 10K+ concurrent learners.', tags: ['RAG', 'LangChain', 'Vector DB', 'Education', 'LLM'], difficulty: 'Advanced', featured: true },
  { title: 'Legal Document RAG-Based Chatbot', short: 'AI legal assistant trained on case law and contracts.', description: 'A specialized RAG chatbot for law firms. Ingests legal documents, case precedents, statutes, and contracts to answer legal queries with precise citations. Includes entity extraction, clause analysis, and compliance checking. HIPAA and attorney-client privilege aware.', tags: ['RAG', 'Legal Tech', 'NLP', 'Vector DB', 'GPT-4'], difficulty: 'Expert', featured: true },
  { title: 'Coding AI Agent', short: 'Autonomous agent that writes, tests, and deploys code.', description: 'A full-stack AI coding agent that reads requirements, writes code across multiple files, runs tests, debugs failures, and deploys. Integrates with GitHub, runs in sandboxed containers, and supports 20+ programming languages with a 73% first-pass success rate on real-world tasks.', tags: ['AI Agent', 'Code Generation', 'DevOps', 'Autonomous'], difficulty: 'Expert', featured: true },
  { title: 'Advanced JARVIS — Personal AI Assistant', short: 'Voice-controlled AI assistant with proactive intelligence.', description: 'A JARVIS-level personal AI assistant with voice control, proactive suggestions, multi-modal input (voice, text, vision), smart home integration, calendar management, email drafting, and contextual memory. Runs on-device with cloud LLM fallback. The ultimate digital butler.', tags: ['JARVIS', 'Voice AI', 'IoT', 'Multi-modal', 'Personal AI'], difficulty: 'Expert', featured: true },
  { title: 'Hand Gesture Recognition System', short: 'Real-time hand gesture control for apps and devices.', description: 'Computer vision system that recognizes 50+ hand gestures in real-time using MediaPipe and custom CNNs. Controls presentations, games, smart home devices, and accessibility interfaces. Sub-30ms latency, works on webcam or mobile camera.', tags: ['Computer Vision', 'MediaPipe', 'Gesture Control', 'Real-time'], difficulty: 'Advanced', featured: true },
  { title: 'Voice Controller System', short: 'Voice-activated control for any software or hardware.', description: 'A universal voice control system that maps natural language commands to any application — control your IDE, browser, design tools, or operating system hands-free. Includes custom wake word, offline recognition, and macro programming.', tags: ['Voice AI', 'ASR', 'Automation', 'Accessibility'], difficulty: 'Advanced', featured: true },
  { title: 'Digital Face Recognition System', short: 'Real-time face recognition with attendance and security.', description: 'An enterprise-grade face recognition system with 99.8% accuracy. Supports live video streams, attendance tracking, access control, and watchlist alerts. Includes liveness detection (anti-spoofing), multi-camera support, and a dashboard with analytics.', tags: ['Face Recognition', 'Computer Vision', 'Security', 'Biometrics'], difficulty: 'Expert', featured: true },
  { title: 'AI-Based Text Humanizer', short: 'Makes AI-generated text undetectable and human-sounding.', description: 'An AI text humanizer that rewrites LLM-generated content to bypass AI detection while preserving meaning. Uses style transfer, lexical variation, and semantic rewriting. Includes tone control, readability scoring, and multi-language support.', tags: ['NLP', 'Text Rewriting', 'AI Detection', 'Content'], difficulty: 'Advanced', featured: true },
  { title: 'AI Trading Bots', short: 'Algorithmic trading bots with ML-powered signals.', description: 'A suite of AI trading bots for crypto, stocks, and forex. Uses LSTM price prediction, sentiment analysis from news/social media, and reinforcement learning for strategy optimization. Includes backtesting, paper trading, risk management, and live deployment with broker APIs.', tags: ['Trading', 'Fintech', 'RL', 'LSTM', 'Algorithmic'], difficulty: 'Expert', featured: true },
  { title: 'AI-Based Lead Generation Software', short: 'Automated lead sourcing, scoring, and outreach platform.', description: 'A lead generation platform that scrapes, enriches, scores, and contacts prospects automatically. Uses AI to identify ideal customer profiles, extract contacts from LinkedIn/web, score lead quality, and send personalized cold emails. Includes CRM integration and analytics dashboard.', tags: ['Lead Gen', 'Sales', 'Scraping', 'Automation', 'B2B'], difficulty: 'Advanced', featured: true },
  { title: 'AI-Based Automatic Email Sending', short: 'Smart email automation with AI personalization.', description: 'An AI-powered email automation system that writes, schedules, and sends personalized emails at scale. Uses LLMs to craft subject lines and body content per recipient, optimizes send times with ML, tracks opens/clicks, and auto-follows-up. Includes drip campaigns and A/B testing.', tags: ['Email Marketing', 'Automation', 'LLM', 'Personalization'], difficulty: 'Advanced', featured: true },
  { title: 'Social Media Automation Suite', short: 'AI-driven social media posting and engagement automation.', description: 'A full social media automation platform — schedules posts, generates captions and hashtags with AI, auto-responds to DMs/comments, analyzes engagement, and reports. Supports Instagram, TikTok, X, LinkedIn, Facebook, and YouTube. Includes content calendar and trend detection.', tags: ['Social Media', 'Automation', 'Scheduling', 'AI Content'], difficulty: 'Advanced', featured: true },
  { title: 'YouTube Long-to-Short Video Clipping', short: 'AI that clips viral shorts from long YouTube videos.', description: 'An AI tool that watches long-form YouTube videos, identifies the most engaging moments, and auto-generates vertical short clips (Reels/Shorts/TikTok) with captions, emoji, and trending audio. Uses virality prediction, speaker detection, and auto-framing. 10x your content output.', tags: ['Video Editing', 'YouTube', 'AI Clipping', 'Shorts', 'Viral'], difficulty: 'Advanced', featured: true },
  { title: 'Advanced General Chatbot', short: 'Multi-purpose AI chatbot with reasoning and tool use.', description: 'A general-purpose AI chatbot with multi-step reasoning, tool use (web search, code execution, API calls), memory, and multi-turn conversations. Supports text, voice, and image input. Deployable on web, WhatsApp, Telegram, and Slack. 99.9% uptime with 3-tier LLM fallback.', tags: ['Chatbot', 'LLM', 'Tool Use', 'Multi-platform'], difficulty: 'Advanced', featured: true },
  { title: 'AI-Based LMS (Learning Management System)', short: 'Adaptive learning platform with AI tutoring and assessment.', description: 'A next-gen LMS with AI-powered features: adaptive learning paths, automated grading, AI tutor for Q&A, plagiarism detection, performance analytics, and personalized content recommendations. Supports live classes, assignments, certificates, and multi-tenant school deployments.', tags: ['EdTech', 'LMS', 'AI Tutor', 'Adaptive Learning'], difficulty: 'Expert', featured: true },
];

// === PROJECT TEMPLATES PER CATEGORY ===
// Each template generates realistic project names + descriptions
const TEMPLATES: Record<string, { prefixes: string[]; suffixes: string[]; tags: string[] }> = {
  'ai-agents': {
    prefixes: ['AI', 'Smart', 'Intelligent', 'Autonomous', 'Neural', 'Cognitive', 'ML-Powered', 'Deep', 'Adaptive', 'Predictive'],
    suffixes: ['Customer Support Agent', 'Sales Assistant', 'Research Bot', 'Data Entry Agent', 'Scheduling Bot', 'Email Triage Agent', 'Code Review Bot', 'HR Assistant', 'Finance Advisor', 'Ops Monitor', 'Quality Assurance Bot', 'Content Moderator', 'Translation Agent', 'Summarization Bot', 'Sentiment Analyzer', 'Lead Qualifier', 'Onboarding Guide', 'Knowledge Base Bot', 'Ticket Router', 'Feedback Collector'],
    tags: ['LLM', 'Agent', 'Automation', 'RAG'],
  },
  'gen-ai': {
    prefixes: ['Generative', 'AI', 'Neural', 'Deep', 'Transformer', 'Diffusion', 'GAN', 'VAE', 'LLM', 'Foundation'],
    suffixes: ['Image Generator', 'Video Synthesizer', 'Code Generator', 'Music Composer', 'Story Writer', 'Logo Maker', 'Avatar Creator', 'Voice Cloner', 'Text Summarizer', 'Translation Engine', 'Caption Generator', '3D Model Generator', 'Art Studio', 'Poem Writer', 'Script Generator', 'Meme Generator', 'Face Generator', 'Scene Renderer', 'Lyric Writer', 'Prompt Optimizer'],
    tags: ['GenAI', 'Diffusion', 'LLM', 'Creative'],
  },
  'web-dev': {
    prefixes: ['Modern', 'Cinematic', 'Real-Time', 'Headless', 'Progressive', 'Interactive', '3D', 'Immersive', 'Dynamic', 'Scalable'],
    suffixes: ['Corporate Website', 'SaaS Landing Page', 'Portfolio Site', 'E-Commerce Storefront', 'Booking Platform', 'Community Forum', 'News Portal', 'Event Platform', 'Directory Site', 'Membership Portal', 'Documentation Site', 'Product Catalog', 'Real Estate Listing', 'Job Board', 'Recipe Platform', 'Travel Booking', 'Funding Portal', 'Mentorship Platform', 'Course Platform', 'Web App'],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  'app-dev': {
    prefixes: ['iOS', 'Android', 'Cross-Platform', 'Native', 'Flutter', 'React Native', 'Kotlin', 'Swift', 'Hybrid', 'PWA'],
    suffixes: ['Fitness Tracker', 'Meditation App', 'Budget Manager', 'Habit Tracker', 'Recipe App', 'Travel Companion', 'Social Network', 'Dating App', 'Food Delivery', 'Ride Sharing', 'Parking Finder', 'Event Finder', 'Study Planner', 'Plant Identifier', 'Calorie Counter', 'Sleep Tracker', 'Water Reminder', 'Expense Splitter', 'Local Discovery', 'Community App'],
    tags: ['Mobile', 'iOS', 'Android', 'Flutter'],
  },
  'software-dev': {
    prefixes: ['Enterprise', 'Desktop', 'Cross-Platform', 'Real-Time', 'Distributed', 'Microservice', 'Cloud-Native', 'High-Performance', 'Scalable', 'Robust'],
    suffixes: ['ERP System', 'CRM Platform', 'Inventory Manager', 'Accounting Software', 'HR Management', 'Payroll System', 'Project Tracker', 'Asset Manager', 'POS Terminal', 'Warehouse System', 'Fleet Manager', 'Booking Engine', 'Reservation System', 'Billing Platform', 'Audit Tool', 'Compliance Tracker', 'Document Manager', 'Workflow Engine', 'Report Generator', 'Dashboard Suite'],
    tags: ['Desktop', 'Enterprise', 'System'],
  },
  'digital-marketing': {
    prefixes: ['Data-Driven', 'Growth', 'Performance', 'Omnichannel', 'AI-Powered', 'Predictive', 'Automated', 'Hyper-Targeted', 'Viral', 'Conversion'],
    suffixes: ['Growth Campaign', 'Brand Launch', 'Product Go-To-Market', 'Influencer Campaign', 'Retargeting Strategy', 'Funnel Optimization', 'Email Sequence', 'Social Campaign', 'Content Calendar', 'SEO Sprint', 'PPC Campaign', 'Video Campaign', 'Podcast Launch', 'Webinar Series', 'Community Build', 'Affiliate Program', 'Referral Program', 'Loyalty Program', 'Review Campaign', 'PR Campaign'],
    tags: ['Marketing', 'Growth', 'Campaign'],
  },
  'automation': {
    prefixes: ['Intelligent', 'Workflow', 'Smart', 'Autonomous', 'RPA', 'Trigger-Based', 'Event-Driven', 'Scheduled', 'Pipeline', 'Zero-Touch'],
    suffixes: ['Data Pipeline', 'Report Generator', 'Sync Engine', 'Notification System', 'Backup Automation', 'Deployment Pipeline', 'Testing Bot', 'Data Scraper', 'Form Processor', 'Email Sorter', 'File Organizer', 'Social Scheduler', 'Invoice Processor', 'Lead Router', 'Ticket Assigner', 'Update Checker', 'Health Monitor', 'Log Analyzer', 'Compliance Checker', 'Cost Tracker'],
    tags: ['Automation', 'RPA', 'Workflow', 'Pipeline'],
  },
  'graphic-design': {
    prefixes: ['Premium', 'Minimalist', 'Bold', 'Luxury', 'Vintage', 'Modern', 'Futuristic', 'Organic', 'Geometric', 'Artisan'],
    suffixes: ['Logo Design', 'Brand Kit', 'Business Card', 'Brochure', 'Flyer', 'Poster', 'Packaging Design', 'Label Design', 'Book Cover', 'Album Art', 'Podcast Cover', 'YouTube Thumbnail', 'Instagram Template', 'Presentation Deck', 'Annual Report', 'Menu Design', 'Certificate', 'Banner Ad', 'Billboard', 'Trade Show Booth'],
    tags: ['Design', 'Branding', 'Visual'],
  },
  'ui-ux': {
    prefixes: ['Cinematic', 'Glassmorphic', 'Neumorphic', 'Minimal', 'Dark Mode', 'Accessible', 'Motion-First', 'Mobile-First', 'Data-Driven', 'Immersive'],
    suffixes: ['Dashboard UI', 'Mobile App UI', 'SaaS Interface', 'Landing Page UI', 'Design System', 'Component Library', 'Icon Set', 'Wireframe Kit', 'Prototype', 'Onboarding Flow', 'Checkout Flow', 'Settings Panel', 'Analytics View', 'Admin Console', 'Client Portal', 'Pricing Page', 'Login Screen', 'Profile Page', 'Search Interface', 'Navigation System'],
    tags: ['UI/UX', 'Design System', 'Figma'],
  },
  'video-editing': {
    prefixes: ['Cinematic', 'Documentary', 'Promotional', 'Social Media', 'Explainer', 'Product Demo', 'Testimonial', 'Event', 'Corporate', 'Viral'],
    suffixes: ['Brand Video', 'Product Launch', 'Tutorial Series', 'Ad Commercial', 'Music Video', 'Wedding Film', 'Event Recap', 'Social Reel', 'YouTube Video', 'TikTok Edit', 'Instagram Story', 'LinkedIn Video', 'Explainer Animation', 'Motion Title', 'Logo Sting', 'Lower Third', 'Transition Pack', 'Color Grade', 'Subtitle Pass', 'Trailer Edit'],
    tags: ['Video', 'Editing', 'Motion'],
  },
  'cyber-security': {
    prefixes: ['Zero-Trust', 'AI-Powered', 'Real-Time', 'Proactive', 'Enterprise', 'Cloud', 'Endpoint', 'Network', 'Application', 'Identity'],
    suffixes: ['Penetration Test', 'Security Audit', 'Vulnerability Scan', 'Threat Model', 'Incident Response', 'Security Training', 'Compliance Audit', 'Code Review', 'Network Hardening', 'Firewall Config', 'IDS/IPS Setup', 'SIEM Dashboard', 'Phishing Simulation', 'Access Control', 'Encryption Setup', 'API Security', 'Cloud Audit', 'Mobile Security', 'IoT Security', 'Zero-Day Hunt'],
    tags: ['Security', 'Pentest', 'Audit', 'Compliance'],
  },
  'machine-learning': {
    prefixes: ['Deep', 'Neural', 'Predictive', 'Reinforcement', 'Supervised', 'Unsupervised', 'Transfer', 'Federated', 'Ensemble', 'Transformer'],
    suffixes: ['Price Predictor', 'Demand Forecaster', 'Churn Model', 'Fraud Detector', 'Recommender System', 'Sentiment Model', 'Risk Scorer', 'Image Classifier', 'Anomaly Detector', 'Cluster Engine', 'Regression Model', 'Classification Engine', 'Ranking Model', 'Time Series Forecaster', 'Survival Model', 'Propensity Model', 'Lifetime Value Predictor', 'Credit Scorer', 'Demand Model', 'Yield Predictor'],
    tags: ['ML', 'Deep Learning', 'Predictive'],
  },
  'computer-vision': {
    prefixes: ['Real-Time', 'Edge', 'Deep', '3D', 'Thermal', 'Infrared', 'Multi-Camera', 'Drone', 'Mobile', 'GPU-Accelerated'],
    suffixes: ['Object Detector', 'Face Recognizer', 'OCR System', 'License Plate Reader', 'Defect Inspector', 'Medical Image Analyzer', 'Satellite Image Processor', 'Gesture Recognizer', 'Pose Estimator', 'Segmentation Model', 'Depth Estimator', 'Action Recognizer', 'Emotion Detector', 'Crowd Counter', 'Traffic Analyzer', 'Quality Checker', 'Barcode Scanner', 'Document Scanner', 'Scene Understander', 'AR Tracker'],
    tags: ['CV', 'Deep Learning', 'Real-time'],
  },
  'nlp': {
    prefixes: ['Multilingual', 'Domain-Specific', 'Fine-Tuned', 'Zero-Shot', 'Few-Shot', 'Transformer', 'BERT', 'GPT', 'LLaMA', 'Custom'],
    suffixes: ['Sentiment Analyzer', 'Text Classifier', 'NER System', 'Summarizer', 'Translator', 'Question Answerer', 'Chatbot Engine', 'Content Generator', 'Spam Detector', 'Topic Modeler', 'Intent Classifier', 'Entity Linker', 'Relation Extractor', 'Coreference Resolver', 'Text Simplifier', 'Grammar Corrector', 'Plagiarism Detector', 'Toxicity Classifier', 'Keyword Extractor', 'Resume Parser'],
    tags: ['NLP', 'LLM', 'Text AI'],
  },
  'cloud-devops': {
    prefixes: ['AWS', 'GCP', 'Azure', 'Multi-Cloud', 'Hybrid', 'Serverless', 'Kubernetes', 'Terraform', 'GitOps', 'Edge'],
    suffixes: ['CI/CD Pipeline', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring Stack', 'Log Aggregator', 'Auto-Scaling System', 'Disaster Recovery', 'Cloud Migration', 'Cost Optimizer', 'Security Hardening', 'Backup System', 'Deploy Automation', 'Service Mesh', 'API Gateway', 'CDN Setup', 'DNS Manager', 'Secret Manager', 'Vault Setup', 'Cluster Setup', 'Observability Stack'],
    tags: ['Cloud', 'DevOps', 'K8s', 'Terraform'],
  },
  'blockchain': {
    prefixes: ['Ethereum', 'Solana', 'Polygon', 'BSC', 'Avalanche', 'Multi-Chain', 'Layer-2', 'DeFi', 'NFT', 'DAO'],
    suffixes: ['Smart Contract', 'dApp', 'NFT Marketplace', 'DeFi Protocol', 'Token Contract', 'Staking Platform', 'Lending Protocol', 'DEX', 'Wallet App', 'Bridge Protocol', 'Oracle System', 'DAO Governance', 'Crowdsale Contract', 'Vesting Contract', 'Multi-Sig Wallet', 'Token Airdrop', 'NFT Mint', 'GameFi Protocol', 'Social Token', 'Carbon Credit Tracker'],
    tags: ['Web3', 'Solidity', 'DeFi', 'NFT'],
  },
  'iot': {
    prefixes: ['Smart', 'Connected', 'Edge', 'Embedded', 'Real-Time', 'Low-Power', 'Mesh', 'LoRaWAN', 'BLE', '5G'],
    suffixes: ['Home Automation', 'Farm Monitor', 'Factory Sensor', 'Wearable Device', 'Fleet Tracker', 'Energy Monitor', 'Water Sensor', 'Air Quality Monitor', 'Smart Meter', 'Parking Sensor', 'Waste Monitor', 'Asset Tracker', 'Cold Chain Monitor', 'Soil Sensor', 'Livestock Tracker', 'Door Lock', 'Thermostat', 'Lighting Controller', 'Security Camera', 'Weather Station'],
    tags: ['IoT', 'Embedded', 'Sensors'],
  },
  'ar-vr': {
    prefixes: ['AR', 'VR', 'MR', 'WebXR', 'Spatial', 'Immersive', '6DoF', 'Hand-Tracking', 'Markerless', 'Photorealistic'],
    suffixes: ['Product Visualizer', 'Virtual Tour', 'Training Simulator', 'Game Experience', 'Architecture Walkthrough', 'Medical Visualization', 'Retail Try-On', 'Museum Experience', 'Education Module', 'Design Review Tool', 'Real Estate Tour', 'Event Experience', 'Brand Activation', 'Filter Effect', 'Avatar Experience', 'Data Visualization', 'Meeting Space', 'Social VR', 'Therapy Tool', 'Maintenance Guide'],
    tags: ['AR/VR', 'WebXR', '3D'],
  },
  'game-dev': {
    prefixes: ['Unity', 'Unreal', 'WebGL', 'Mobile', '2D', '3D', 'VR', 'Multiplayer', 'Procedural', 'Physics-Based'],
    suffixes: ['Action Game', 'Puzzle Game', 'RPG Adventure', 'Racing Game', 'Strategy Game', 'Card Game', 'Board Game', 'Quiz Game', 'Arcade Game', 'Simulation Game', 'Platformer', 'Shooter Game', 'Sports Game', 'Educational Game', 'Idle Game', 'Tower Defense', 'Battle Royale', 'Farming Sim', 'City Builder', 'Horror Game'],
    tags: ['Game', 'Unity', 'Unreal', 'WebGL'],
  },
  'fintech': {
    prefixes: ['AI-Powered', 'Real-Time', 'Blockchain', 'Mobile-First', 'Open Banking', 'Embedded', 'Neobank', 'BNPL', 'Robo', 'P2P'],
    suffixes: ['Payment Gateway', 'Banking App', 'Investment Platform', 'Budgeting Tool', 'Expense Tracker', 'Loan Platform', 'Insurance Portal', 'Trading Platform', 'Crypto Wallet', 'Remittance App', 'Split Bill App', 'Invoice Platform', 'Payroll System', 'Tax Calculator', 'Credit Scorer', 'Savings Goal', 'Portfolio Tracker', 'Robo-Advisor', 'FX Platform', 'Compliance Tool'],
    tags: ['Fintech', 'Payments', 'Banking'],
  },
  'healthtech': {
    prefixes: ['AI-Powered', 'HIPAA-Compliant', 'Telemedicine', 'Wearable', 'Remote', 'Predictive', 'Personalized', 'Clinical', 'Diagnostic', 'Patient-Centric'],
    suffixes: ['Telehealth Platform', 'EHR System', 'Appointment Booking', 'Symptom Checker', 'Mental Health App', 'Fitness Tracker', 'Diet Planner', 'Medication Reminder', 'Vital Monitor', 'Patient Portal', 'Doctor Directory', 'Lab Results Viewer', 'Prescription Manager', 'Health Record', 'Care Plan', 'Rehab Tracker', 'Sleep Analyzer', 'Pregnancy Tracker', 'Chronic Disease Manager', 'Wellness Platform'],
    tags: ['Healthtech', 'HIPAA', 'Medical AI'],
  },
  'edtech': {
    prefixes: ['AI-Powered', 'Adaptive', 'Gamified', 'Interactive', 'Mobile', 'Collaborative', 'Immersive', 'Personalized', 'Real-Time', 'Multi-Tenant'],
    suffixes: ['Learning Platform', 'Quiz Maker', 'Course Creator', 'Flashcard App', 'Study Planner', 'Tutoring Platform', 'Language Learning', 'Coding Bootcamp', 'Math Solver', 'Science Lab', 'Exam Prep', 'Gradebook', 'Assignment Portal', 'Live Classroom', 'Discussion Forum', 'Certificate System', 'Progress Tracker', 'Parent Portal', 'Scholarship Finder', 'Career Counselor'],
    tags: ['EdTech', 'LMS', 'Adaptive'],
  },
  'ecommerce': {
    prefixes: ['Headless', 'Shopify', 'WooCommerce', 'Custom', 'Multi-Vendor', 'B2B', 'B2C', 'DTC', 'Social Commerce', 'Omnichannel'],
    suffixes: ['Online Store', 'Marketplace', 'Product Configurator', 'Subscription Box', 'Dropshipping Site', 'Flash Sale Platform', 'Loyalty Program', 'Gift Card System', 'Wishlist Feature', 'Cart Abandonment Recovery', 'Product Review System', 'Inventory Manager', 'Order Tracker', 'Returns Portal', 'Wishlist App', 'Price Comparison', 'Group Buy Platform', 'Rental Platform', 'Pre-Order System', 'Wholesale Portal'],
    tags: ['E-Commerce', 'Shopify', 'Commerce'],
  },
  'saas': {
    prefixes: ['AI-First', 'Multi-Tenant', 'White-Label', 'API-First', 'Micro-SaaS', 'Vertical', 'B2B', 'Self-Serve', 'Enterprise', 'Cloud-Native'],
    suffixes: ['Project Management Tool', 'CRM Platform', 'Help Desk Software', 'Email Marketing Tool', 'Social Media Manager', 'SEO Tool', 'Analytics Dashboard', 'Form Builder', 'Survey Platform', 'Booking System', 'Invoice Generator', 'Time Tracker', 'Team Chat App', 'File Storage', 'Video Hosting', 'Podcast Host', 'Webinar Platform', 'AB Testing Tool', 'Feature Flag System', 'Status Page'],
    tags: ['SaaS', 'Multi-tenant', 'B2B'],
  },
  'data-science': {
    prefixes: ['Big Data', 'Real-Time', 'Predictive', 'Descriptive', 'Prescriptive', 'Geospatial', 'Time-Series', 'Graph', 'Streaming', 'Distributed'],
    suffixes: ['Analytics Dashboard', 'Data Pipeline', 'ETL System', 'Data Warehouse', 'Data Lake', 'Business Intelligence Tool', 'Report Generator', 'KPI Tracker', 'Cohort Analyzer', 'Funnel Analyzer', 'A/B Test Platform', 'Attribution Model', 'Forecast Dashboard', 'Churn Dashboard', 'Revenue Dashboard', 'Customer 360', 'Risk Dashboard', 'Operations Dashboard', 'Sales Dashboard', 'Marketing Dashboard'],
    tags: ['Data Science', 'Analytics', 'BI'],
  },
  'api-dev': {
    prefixes: ['REST', 'GraphQL', 'gRPC', 'WebSocket', 'Serverless', 'Microservice', 'Real-Time', 'High-Performance', 'Versioned', 'Public'],
    suffixes: ['Payment API', 'Auth API', 'Search API', 'Recommendation API', 'Notification API', 'File Upload API', 'Email API', 'SMS API', 'Video API', 'AI Inference API', 'Translation API', 'OCR API', 'Speech API', 'Vision API', 'Weather API', 'Sports Data API', 'Finance API', 'Maps API', 'Social API', 'IoT API'],
    tags: ['API', 'REST', 'GraphQL'],
  },
  'database': {
    prefixes: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Supabase', 'PlanetScale', 'Neo4j', 'InfluxDB', 'Elasticsearch', 'Multi-Model'],
    suffixes: ['Schema Design', 'Migration Tool', 'Backup System', 'Replication Setup', 'Sharding Strategy', 'Index Optimizer', 'Query Analyzer', 'Data Model', 'ER Diagram', 'Seed Script', 'ETL Pipeline', 'CDC Stream', 'Read Replica', 'Connection Pool', 'ORM Layer', 'GraphQL Layer', 'Search Index', 'Time-Series Store', 'Graph Model', 'Vector Store'],
    tags: ['Database', 'SQL', 'NoSQL'],
  },
  'qa-testing': {
    prefixes: ['Automated', 'End-to-End', 'Unit', 'Integration', 'Load', 'Stress', 'Security', 'Accessibility', 'Visual Regression', 'Cross-Browser'],
    suffixes: ['Test Suite', 'Test Framework', 'CI Test Pipeline', 'Load Test', 'Stress Test', 'Security Scan', 'A11y Audit', 'Visual Test', 'API Test', 'Mobile Test', 'Playwright Suite', 'Cypress Suite', 'Selenium Suite', 'Jest Suite', 'Pytest Suite', 'Test Reporter', 'Coverage Tool', 'Mock Server', 'Fuzz Tester', 'Chaos Test'],
    tags: ['QA', 'Testing', 'Automation'],
  },
  'seo': {
    prefixes: ['Technical', 'Local', 'International', 'E-Commerce', 'Content', 'Voice', 'Video', 'Mobile', 'Programmatic', 'AI-Powered'],
    suffixes: ['SEO Audit', 'Keyword Research', 'Site Speed Optimization', 'Schema Markup', 'Core Web Vitals Fix', 'Backlink Strategy', 'Content Gap Analysis', 'Rank Tracker', 'Sitemap Generator', 'Robots.txt Config', 'Canonical Setup', 'Redirect Plan', 'Internal Linking', 'Meta Optimization', 'Image SEO', 'Page Speed Audit', 'Mobile SEO', 'Local SEO', 'SEO Dashboard', 'Competitor Analysis'],
    tags: ['SEO', 'Technical', 'Content'],
  },
  'content-marketing': {
    prefixes: ['AI-Powered', 'Data-Driven', 'SEO-First', 'Story-Driven', 'Thought Leadership', 'Viral', 'Evergreen', 'Interactive', 'Personalized', 'Omnichannel'],
    suffixes: ['Blog Strategy', 'Content Calendar', 'E-Book', 'White Paper', 'Case Study', 'Newsletter', 'Press Release', 'Product Description', 'Landing Page Copy', 'Email Sequence', 'Social Caption Set', 'Video Script', 'Podcast Script', 'Webinar Content', 'Infographic Content', 'SEO Article', 'Thought Leadership Piece', 'Customer Story', 'How-To Guide', 'Comparison Article'],
    tags: ['Content', 'Copywriting', 'Strategy'],
  },
  'social-media': {
    prefixes: ['AI-Powered', 'Data-Driven', 'Viral', 'Engagement-First', 'Brand-Consistent', 'Trend-Aware', 'Community-Led', 'Influencer', 'UGC', 'Social-First'],
    suffixes: ['Instagram Strategy', 'TikTok Campaign', 'LinkedIn Plan', 'YouTube Channel', 'Twitter/X Strategy', 'Facebook Campaign', 'Pinterest Strategy', 'Snapchat Campaign', 'Content Calendar', 'Hashtag Strategy', 'Influencer Outreach', 'Community Management', 'Social Listening', 'Crisis Response', 'UGC Campaign', 'Contest Campaign', 'Live Stream Plan', 'Stories Strategy', 'Reels Series', 'Social Ads'],
    tags: ['Social Media', 'Strategy', 'Content'],
  },
  'branding': {
    prefixes: ['Premium', 'Minimalist', 'Bold', 'Luxury', 'Modern', 'Heritage', 'Disruptive', 'Approachable', 'Sophisticated', 'Playful'],
    suffixes: ['Brand Identity', 'Brand Strategy', 'Brand Guidelines', 'Logo System', 'Visual Identity', 'Brand Voice', 'Brand Positioning', 'Brand Architecture', 'Brand Naming', 'Tagline Development', 'Brand Story', 'Brand Book', 'Color System', 'Typography System', 'Iconography Set', 'Photography Style', 'Illustration Style', 'Motion Guidelines', 'Social Brand Kit', 'Brand Refresh'],
    tags: ['Branding', 'Identity', 'Strategy'],
  },
  'motion-graphics': {
    prefixes: ['Cinematic', 'Minimalist', '3D', '2D', 'Kinetic', 'Liquid', 'Glitch', 'Neon', 'Corporate', 'Playful'],
    suffixes: ['Logo Animation', 'Title Sequence', 'Explainer Video', 'Product Animation', 'UI Motion', 'Social Media Animation', 'Broadcast Package', 'Lower Thirds', 'Transition Pack', 'Background Loop', 'Infographic Animation', 'Text Animation', 'Character Animation', 'Logo Reveal', 'Intro Sting', 'Outro Animation', 'Ad Bumper', 'Sponsor Card', 'Credits Roll', 'Logo Transition'],
    tags: ['Motion', 'Animation', 'After Effects'],
  },
  '3d-modeling': {
    prefixes: ['Photorealistic', 'Low-Poly', 'Stylized', 'PBR', 'Hard-Surface', 'Organic', 'Procedural', 'Sculpted', 'CAD', 'Voxel'],
    suffixes: ['Product Model', 'Character Model', 'Environment Model', 'Architectural Model', 'Vehicle Model', 'Furniture Model', 'Jewelry Model', 'Packaging Model', 'Prop Model', 'Weapon Model', 'Creature Model', 'Plant Model', 'Food Model', 'Electronics Model', 'Clothing Model', 'Footwear Model', 'Machine Model', 'Building Model', 'Interior Model', 'Landscape Model'],
    tags: ['3D', 'Blender', 'Modeling'],
  },
  'animation': {
    prefixes: ['2D', '3D', 'Stop-Motion', 'Cel', 'Vector', 'Rigged', 'Procedural', 'Hand-Drawn', 'Motion Capture', 'Cut-Out'],
    suffixes: ['Character Animation', 'Walk Cycle', 'Lip Sync', 'Facial Animation', 'Action Sequence', 'Idle Animation', 'Emote Animation', 'Intro Animation', 'Loop Animation', 'Transition Animation', 'Effects Animation', 'Cloth Simulation', 'Hair Simulation', 'Water Animation', 'Fire Animation', 'Smoke Animation', 'Explosion Animation', 'Magic Effect', 'UI Animation', 'Logo Animation'],
    tags: ['Animation', '2D', '3D'],
  },
  'voice-ai': {
    prefixes: ['Real-Time', 'Multilingual', 'Neural', 'Custom', 'On-Device', 'Cloud', 'Low-Latency', 'High-Fidelity', 'Emotional', 'Adaptive'],
    suffixes: ['Speech-to-Text Engine', 'Text-to-Speech Engine', 'Voice Cloner', 'Voice Assistant', 'Wake Word Detector', 'Speaker Identifier', 'Voice Translator', 'Podcast Transcriber', 'Meeting Notes Bot', 'Voicemail Transcriber', 'Subtitle Generator', 'Voice Search', 'IVR System', 'Audiobook Narrator', 'Voice Anonymizer', 'Singing Synthesizer', 'Voice Changer', 'Accent Converter', 'Emotion Detector', 'Voice Biometrics'],
    tags: ['Voice AI', 'TTS', 'ASR'],
  },
  'robotics': {
    prefixes: ['Autonomous', 'Teleoperated', 'Swarm', 'Collaborative', 'Mobile', 'Aerial', 'Underwater', 'Humanoid', 'Industrial', 'Service'],
    suffixes: ['Pick-and-Place Robot', 'Warehouse Robot', 'Delivery Drone', 'Inspection Drone', 'Cleaning Robot', 'Security Robot', 'Surgical Robot', 'Agricultural Robot', 'Mining Robot', 'Construction Robot', 'Rescue Robot', 'Surveillance Drone', 'Mapping Robot', 'Welding Robot', 'Painting Robot', 'Assembly Robot', 'Packaging Robot', 'Inventory Robot', 'Lawn Mower Robot', 'Pool Cleaner Robot'],
    tags: ['Robotics', 'Drone', 'Automation'],
  },
  'biotech': {
    prefixes: ['Computational', 'AI-Powered', 'Genomic', 'Protein', 'Molecular', 'Clinical', 'Precision', 'Synthetic', 'Systems', 'Structural'],
    suffixes: ['DNA Sequencing Pipeline', 'Protein Folding Predictor', 'Drug Discovery Platform', 'Genomic Analyzer', 'Molecular Dynamics Sim', 'Clinical Trial Manager', 'Biomarker Detector', 'Gene Editor Designer', 'Pathway Analyzer', 'Disease Predictor', 'Pharmacokinetics Model', 'Toxicity Predictor', 'Cell Simulator', 'Tissue Model', 'Strain Designer', 'Enzyme Engineer', 'Vaccine Designer', 'CRISPR Optimizer', 'Antibody Designer', 'Bioinformatics Dashboard'],
    tags: ['Biotech', 'Genomics', 'AI'],
  },
  'agritech': {
    prefixes: ['Smart', 'Precision', 'IoT-Enabled', 'AI-Powered', 'Satellite', 'Drone', 'Automated', 'Sustainable', 'Vertical', 'Hydroponic'],
    suffixes: ['Crop Monitor', 'Soil Sensor', 'Irrigation Controller', 'Drone Crop Survey', 'Yield Predictor', 'Pest Detector', 'Disease Identifier', 'Weather Station', 'Livestock Tracker', 'Greenhouse Controller', 'Fertilizer Optimizer', 'Harvest Planner', 'Seed Selector', 'Farm Management App', 'Supply Chain Tracker', 'Market Price Tracker', 'Carbon Tracker', 'Water Quality Monitor', 'Feed Optimizer', 'Bee Health Monitor'],
    tags: ['AgriTech', 'IoT', 'Precision Farming'],
  },
  'greentech': {
    prefixes: ['AI-Powered', 'IoT', 'Blockchain', 'Smart', 'Real-Time', 'Predictive', 'Carbon-Aware', 'Renewable', 'Sustainable', 'Circular'],
    suffixes: ['Energy Monitor', 'Solar Optimizer', 'Wind Predictor', 'Carbon Tracker', 'ESG Reporter', 'Waste Sorter', 'Water Saver', 'Smart Grid', 'EV Charger Network', 'Battery Optimizer', 'Carbon Credit Platform', 'Energy Trading', 'Demand Response', 'Leak Detector', 'Air Purifier', 'Eco Label System', 'Green Supply Chain', 'Climate Risk Model', 'Renewable Forecast', 'Circular Economy Platform'],
    tags: ['GreenTech', 'Clean Energy', 'ESG'],
  },
  'real-estate': {
    prefixes: ['AI-Powered', 'Virtual', 'Mobile', 'Blockchain', 'Data-Driven', '3D', 'AR-Enhanced', 'Smart', 'Predictive', 'Hyper-Local'],
    suffixes: ['Property Listing', 'Virtual Tour', 'Mortgage Calculator', 'Investment Analyzer', 'Tenant Portal', 'Landlord Dashboard', 'Property Manager', 'Lease Platform', 'CRM for Agents', 'Lead Router', 'Price Estimator', 'Neighborhood Analyzer', 'Rental Platform', 'Co-Living Platform', 'Commercial Listing', 'Auction Platform', 'Title Platform', 'Inspection Scheduler', 'Key Handover App', 'Maintenance Tracker'],
    tags: ['PropTech', 'Real Estate', 'Platform'],
  },
  'logistics': {
    prefixes: ['Real-Time', 'AI-Powered', 'IoT', 'Blockchain', 'Autonomous', 'Cloud-Native', 'Predictive', 'Multi-Modal', 'Last-Mile', 'Cold Chain'],
    suffixes: ['Fleet Tracker', 'Route Optimizer', 'Warehouse Manager', 'Inventory Tracker', 'Shipment Tracker', 'Customs Platform', 'Freight Marketplace', 'Delivery App', 'Returns Manager', 'Pickup Scheduler', 'Dock Scheduler', 'Yard Manager', 'Asset Tracker', 'Cold Chain Monitor', 'Supplier Portal', '3PL Platform', 'Last-Mile Optimizer', 'Box Loader', 'Label Printer', 'Proof of Delivery'],
    tags: ['Logistics', 'Supply Chain', 'Fleet'],
  },
  'enterprise': {
    prefixes: ['ERP', 'CRM', 'HRMS', 'SCM', 'BPM', 'DMS', 'BI', 'Custom', 'Integrated', 'Cloud-Native'],
    suffixes: ['ERP System', 'CRM Platform', 'HRMS', 'Payroll System', 'Procurement Platform', 'Inventory System', 'Project Management', 'Workflow Engine', 'Document Management', 'Approval System', 'Compliance Tracker', 'Audit System', 'Reporting Suite', 'Analytics Dashboard', 'Integration Hub', 'API Gateway', 'SSO Platform', 'Identity Manager', 'Notification Hub', 'Task Automation'],
    tags: ['Enterprise', 'ERP', 'CRM'],
  },
  'devsecops': {
    prefixes: ['Zero-Trust', 'Shift-Left', 'DevSecOps', 'SOC 2', 'GDPR', 'HIPAA', 'ISO 27001', 'PCI-DSS', 'Continuous', 'AI-Powered'],
    suffixes: ['Security Pipeline', 'SAST Tool', 'DAST Tool', 'Secret Scanner', 'Container Scanner', 'IaC Scanner', 'Dependency Checker', 'Compliance Automation', 'Policy as Code', 'Threat Model', 'Incident Response Plan', 'Security Training', 'Access Review', 'Privilege Manager', 'Audit Logger', 'FIM System', 'IDS/IPS', 'WAF Setup', 'Zero-Trust Network', 'SOC Dashboard'],
    tags: ['DevSecOps', 'Compliance', 'Security'],
  },
  'email-marketing': {
    prefixes: ['AI-Powered', 'Automated', 'Personalized', 'Behavioral', 'Drip', 'Lifecycle', 'Transactional', 'Newsletter', 'Trigger-Based', 'Predictive'],
    suffixes: ['Email Campaign', 'Drip Sequence', 'Newsletter Platform', 'Welcome Series', 'Abandoned Cart Email', 'Win-Back Campaign', 'Birthday Email', 'Post-Purchase Series', 'Re-Engagement Campaign', 'Product Launch Email', 'Webinar Invite', 'Survey Email', 'Referral Email', 'Upsell Sequence', 'Cross-Sell Campaign', 'Seasonal Campaign', 'Event Invite', 'Loyalty Email', 'Review Request', 'Milestone Email'],
    tags: ['Email', 'Marketing', 'Automation'],
  },
  'ppc-ads': {
    prefixes: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'YouTube Ads', 'Amazon Ads', 'Programmatic', 'Retargeting', 'Performance Max', 'AI-Powered'],
    suffixes: ['Search Campaign', 'Display Campaign', 'Shopping Campaign', 'Video Campaign', 'App Campaign', 'Lead Gen Campaign', 'Brand Campaign', 'Competitor Campaign', 'Retargeting Campaign', 'Lookalike Campaign', 'Conversion Campaign', 'Traffic Campaign', 'Awareness Campaign', 'Promo Campaign', 'Black Friday Campaign', 'Launch Campaign', 'Webinar Campaign', 'Recruitment Campaign', 'Local Campaign', 'Multi-Country Campaign'],
    tags: ['PPC', 'Ads', 'Paid Media'],
  },
  'music-prod': {
    prefixes: ['AI-Generated', 'Lo-Fi', 'Cinematic', 'Electronic', 'Orchestral', 'Ambient', 'Hip-Hop', 'Pop', 'Rock', 'Folk'],
    suffixes: ['Beat Production', 'Song Mastering', 'Album Mix', 'Podcast Intro', 'YouTube BGM', 'Game Soundtrack', 'Film Score', 'Ad Jingle', 'Ringtone', 'Sample Pack', 'Drum Loop', 'Melody Loop', 'Bass Line', 'Vocal Chop', 'Sound Effect Pack', 'Foley Art', 'Voiceover Mix', 'Live Recording', 'Remix', 'Mashup'],
    tags: ['Music', 'Audio', 'AI'],
  },
  'photography': {
    prefixes: ['Product', 'Real Estate', 'Food', 'Fashion', 'Event', 'Corporate', 'Lifestyle', 'Aerial', '360°', 'AI-Enhanced'],
    suffixes: ['Product Shoot', 'Interior Shoot', 'Exterior Shoot', 'Food Photography', 'Headshot Session', 'Brand Shoot', 'Wedding Photography', 'Event Coverage', 'Catalog Shoot', 'Lifestyle Shoot', 'Drone Shoot', 'Virtual Tour', 'Panorama Stitch', 'Photo Retouch', 'Color Grading', 'Background Removal', 'AI Upscale', 'Photo Restoration', 'Batch Edit', 'Photo Book'],
    tags: ['Photography', 'Visual', 'Editing'],
  },
  'quantum': {
    prefixes: ['Quantum', 'Quantum-Ready', 'Quantum-Inspired', 'Hybrid', 'Qiskit', 'Cirq', 'PennyLane', 'Post-Quantum', 'Quantum-Safe', 'NISQ'],
    suffixes: ['Optimization Solver', 'Circuit Simulator', 'ML Classifier', 'Chemistry Simulator', 'Cryptography Tool', 'Randomness Generator', 'Search Algorithm', 'Routing Optimizer', 'Portfolio Optimizer', 'Drug Discovery Sim', 'Schedule Optimizer', 'Graph Analyzer', 'Linear System Solver', 'Monte Carlo Sim', 'Encryption Tool', 'Key Distribution', 'Error Correction', 'Gate Compiler', 'Quantum Compiler', 'Benchmark Suite'],
    tags: ['Quantum', 'Algorithms', 'Future Tech'],
  },
  'product-mgmt': {
    prefixes: ['Data-Driven', 'Agile', 'Lean', 'OKR-Based', 'Customer-Centric', 'Growth-Focused', 'Cross-Functional', 'Roadmap-First', 'Metrics-Driven', 'User-First'],
    suffixes: ['Product Strategy', 'Product Roadmap', 'PRD Template', 'User Story Map', 'Sprint Plan', 'OKR Framework', 'Feature Prioritization', 'Go-To-Market Plan', 'Competitive Analysis', 'User Research Plan', 'Pricing Strategy', 'Monetization Model', 'Product Launch Plan', 'Release Notes', 'Changelog', 'Product Analytics', 'Funnel Analysis', 'Retention Strategy', 'Onboarding Flow', 'Feature Spec'],
    tags: ['Product', 'Strategy', 'Roadmap'],
  },
};

// Fix the typo in email-marketing prefixes (template literal issue)

// === GENERATE PROJECTS ===
function generateProjects(): Project[] {
  const projects: Project[] = [];
  let idCounter = 0;

  // 1. Add all featured projects to their categories
  const featuredByCategory: Record<string, Omit<Project, 'id' | 'category'>[]> = {
    'ai-agents': FEATURED_PROJECTS.slice(0, 6), // Education RAG, Legal RAG, Coding Agent, JARVIS, General Chatbot, AI LMS
    'gen-ai': [FEATURED_PROJECTS[6]], // AI Humanizer
    'automation': [FEATURED_PROJECTS[9], FEATURED_PROJECTS[10], FEATURED_PROJECTS[11]], // Lead Gen, Auto Email, Social Media Automation
    'video-editing': [FEATURED_PROJECTS[12]], // YouTube Clipping
    'computer-vision': [FEATURED_PROJECTS[4], FEATURED_PROJECTS[6]], // Hand Gesture, Face Recognition
    'voice-ai': [FEATURED_PROJECTS[5]], // Voice Controller
    'fintech': [FEATURED_PROJECTS[8]], // Trading Bots
    'edtech': [FEATURED_PROJECTS[14]], // AI LMS
  };

  // 2. Generate 100+ projects per category using templates
  for (const cat of PROJECT_CATEGORIES) {
    const template = TEMPLATES[cat.id];
    if (!template) continue;

    // Add featured projects first
    const featured = featuredByCategory[cat.id] || [];
    for (const fp of featured) {
      projects.push({
        id: `p${++idCounter}`,
        category: cat.id,
        ...fp,
      });
    }

    // Generate 100 projects per category
    for (let i = 0; i < 100; i++) {
      const prefix = template.prefixes[i % template.prefixes.length];
      const suffixIdx = Math.floor(i / template.prefixes.length) % template.suffixes.length;
      const suffix = template.suffixes[suffixIdx];
      const variation = i >= template.prefixes.length * template.suffixes.length ? ` v${Math.floor(i / (template.prefixes.length * template.suffixes.length)) + 1}` : '';
      const title = `${prefix} ${suffix}${variation}`;

      const difficulties: Project['difficulty'][] = ['Intermediate', 'Advanced', 'Expert'];
      const difficulty = difficulties[i % 3];

      projects.push({
        id: `p${++idCounter}`,
        title,
        category: cat.id,
        short: `${suffix} for ${cat.name.toLowerCase()} — built with cutting-edge tech, production-ready, scalable.`,
        description: `A ${difficulty.toLowerCase()}-level ${suffix.toLowerCase()} project in the ${cat.name} domain. ${prefix} approach with modern architecture, comprehensive testing, and production deployment. Includes documentation, CI/CD pipeline, monitoring, and post-launch support. Built with industry best practices and ${cat.description.toLowerCase()}.`,
        tags: [...template.tags, cat.name.split(' ')[0]],
        difficulty,
        featured: false,
      });
    }

    cat.projectCount = 100 + featured.length;
  }

  return projects;
}

// Generate once and cache
let _projects: Project[] | null = null;
export function getProjects(): Project[] {
  if (!_projects) {
    _projects = generateProjects();
  }
  return _projects;
}

export const TOTAL_PROJECTS = 50 * 100 + FEATURED_PROJECTS.length; // ~5015+
export const TOTAL_CATEGORIES = PROJECT_CATEGORIES.length; // 50
