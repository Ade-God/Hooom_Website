export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  industry: string;
  servicesProvided: string[];
  tags: string[];
  summary: string;
  body: string;
  techStack: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "autopay",
    name: "AutoPay",
    shortDescription: "Fintech platform automating vendor payouts and reconciliation.",
    industry: "Fintech",
    servicesProvided: ["Software Development", "Product Design", "Cloud & DevOps"],
    tags: ["Payments", "Automation"],
    summary: "Built a secure payment orchestration layer and intuitive dashboard for finance teams managing bulk payouts.",
    body: `## Problem\nFinance teams struggled with fragmented payment flows, manual reconciliations, and limited visibility into payouts.\n\n## Solution\nWe delivered a unified payouts dashboard, automated reconciliation engine, and audit-ready reporting with granular access controls.\n\n## Results\n- 65% faster payout cycles\n- 99.9% uptime across critical payment windows\n- Reduced reconciliation effort from days to hours`,
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    featured: true,
  },
  {
    slug: "reach-marketplace",
    name: "REACH Marketplace",
    shortDescription: "Real estate marketplace with immersive listings and broker tooling.",
    industry: "Real Estate",
    servicesProvided: ["Product Design", "Software Development", "Branding"],
    tags: ["Marketplace", "PropTech"],
    summary: "Crafted a premium search and discovery experience with robust broker dashboards.",
    body: `## Problem\nProperty discovery felt outdated with slow search, low-quality assets, and poor lead capture.\n\n## Solution\nWe designed cinematic listing pages, 3D-ready asset support, and CRM-style broker tools with analytics.\n\n## Results\n- 2.8x increase in qualified leads\n- 40% faster search performance\n- Stronger broker retention through self-serve tooling`,
    techStack: ["Next.js", "NestJS", "TailwindCSS", "AWS"],
    featured: true,
  },
  {
    slug: "karsto-erp",
    name: "Karsto ERP",
    shortDescription: "Construction ERP connecting site operations, procurement, and finance.",
    industry: "Construction",
    servicesProvided: ["Enterprise Solutions", "Cloud & DevOps", "Software Development"],
    tags: ["ERP", "Automation"],
    summary: "Customized ERP modules for HSE, procurement, and project management with mobile-first workflows.",
    body: `## Problem\nDisparate tools slowed project execution and obscured profitability across projects.\n\n## Solution\nBuilt modular ERP with role-based access, offline-ready mobile apps, and automated approvals across procurement and site ops.\n\n## Results\n- Unified reporting across projects\n- 30% faster procurement cycles\n- Improved compliance via HSE workflows`,
    techStack: ["React Native", "Next.js", "PostgreSQL", "AWS"],
    featured: true,
  },
  {
    slug: "lizza-atelier",
    name: "Lizza Atelier",
    shortDescription: "Luxury fashion e-commerce with immersive storytelling and concierge checkout.",
    industry: "Luxury Fashion",
    servicesProvided: ["Branding", "Product Design", "Software Development"],
    tags: ["E-commerce", "Luxury"],
    summary: "Developed a brand identity and digital flagship that mirrors in-store experience with curated content commerce.",
    body: `## Problem\nLegacy storefront failed to express the brand and led to abandoned carts among high-intent shoppers.\n\n## Solution\nIntroduced a cinematic product grid, bespoke lookbooks, and concierge-style checkout with personal stylists.\n\n## Results\n- 18% uplift in conversion rate\n- Higher average order value through curated bundles\n- Stronger brand recall with refreshed identity`,
    techStack: ["Next.js", "Shopify Storefront API", "TailwindCSS"],
    featured: true,
  },
  {
    slug: "sawubona-advisory",
    name: "Sawubona Advisory",
    shortDescription: "Wealth advisory platform with secure client portals and portfolio insights.",
    industry: "Wealth Advisory",
    servicesProvided: ["Software Development", "Product Design", "Cloud & DevOps"],
    tags: ["WealthTech", "Analytics"],
    summary: "Launched a premium digital client experience with realtime portfolio reporting and secure messaging.",
    body: `## Problem\nHigh-net-worth clients lacked a transparent view of portfolios and a secure line to advisors.\n\n## Solution\nBuilt authenticated client portals with bank-grade security, portfolio insights, and advisor collaboration tools.\n\n## Results\n- Improved client satisfaction scores\n- Reduced manual reporting through automated data pipelines\n- Enhanced compliance posture with audit logs`,
    techStack: ["Next.js", "GraphQL", "AWS", "TailwindCSS"],
    featured: false,
  },
  {
    slug: "horizon-estate-manager",
    name: "Horizon Estate Manager",
    shortDescription: "Community management platform for estates and shared spaces.",
    industry: "Community Management",
    servicesProvided: ["Software Development", "Enterprise Solutions", "Cloud & DevOps"],
    tags: ["Property", "Operations"],
    summary: "Digitized facility management, payments, and resident communications with a unified portal.",
    body: `## Problem\nEstate managers handled tickets, payments, and communications manually leading to delays.\n\n## Solution\nDelivered a resident portal with maintenance tickets, digital payments, and broadcast messaging integrated with accounting.\n\n## Results\n- 50% reduction in ticket resolution time\n- Reliable payment tracking with automated reminders\n- Happier residents through transparent updates`,
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    featured: false,
  },
];
