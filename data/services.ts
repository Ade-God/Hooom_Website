export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  bullets: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "software-development",
    name: "Software Development",
    shortDescription: "Custom software development for web, mobile, and enterprise workflows.",
    longDescription:
      "We design and build high-performance web and mobile applications that help teams operate faster and smarter. From internal tools to customer-facing platforms, we combine human-centered product thinking with scalable engineering.",
    bullets: [
      "Web applications for internal and external users",
      "Mobile applications for iOS and Android",
      "API design and integrations",
      "Progressive web apps (PWAs)",
    ],
    seoTitle: "Custom Software Development Company in Nigeria | HoooM Technologies",
    seoDescription: "HoooM Technologies provides custom web, mobile, and enterprise software development.",
  },
  {
    slug: "product-design",
    name: "Product Design (UX/UI)",
    shortDescription: "UX and UI design that balances usability, beauty, and business outcomes.",
    longDescription:
      "We design digital products that people enjoy using. Through UX research, user flows, and interface design, we create systems that align user needs with business goals.",
    bullets: [
      "UX research & personas",
      "Flows & information architecture",
      "UI design & interactive prototypes",
      "Design systems",
    ],
    seoTitle: "UX/UI Product Design Agency in Lagos | HoooM Technologies",
    seoDescription: "HoooM Technologies delivers UX research, UI design, and complete product design services.",
  },
  {
    slug: "branding",
    name: "Branding",
    shortDescription: "Brand identity systems for modern African and global businesses.",
    longDescription:
      "Your logo is not your brand. We build complete brand systems including strategy, messaging, visual identity, and digital assets.",
    bullets: [
      "Brand strategy & positioning",
      "Logo and visual identity",
      "Brand guidelines & tone of voice",
      "Marketing assets & collateral",
    ],
    seoTitle: "Branding Agency in Nigeria | HoooM Technologies",
    seoDescription: "Brand identity, strategy, logos, guidelines, and marketing assets for African and global companies.",
  },
  {
    slug: "enterprise-solutions",
    name: "Enterprise Solutions",
    shortDescription: "ERP, HRM, HSE, inventory, and internal systems tailored to your operations.",
    longDescription:
      "We design enterprise systems around real workflows. From ERP customization to HRM, HSE, project management, and procurement automation.",
    bullets: [
      "ERP implementation",
      "HRM & HSE modules",
      "Procurement & inventory automation",
      "Project/operations management",
    ],
    seoTitle: "ERP & Enterprise Software Solutions Nigeria | HoooM Technologies",
    seoDescription: "Enterprise ERP, HRM, HSE, procurement, and operations software.",
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    shortDescription: "AWS cloud migration and DevOps for scaling teams.",
    longDescription:
      "We handle cloud migration, infrastructure, CI/CD pipelines, monitoring, and system scaling. In partnership with CecureIntel, an AWS partner.",
    bullets: [
      "AWS cloud migration",
      "Infrastructure setup",
      "CI/CD pipelines",
      "Monitoring & performance",
    ],
    seoTitle: "Cloud Migration & DevOps Services Nigeria | HoooM Technologies",
    seoDescription: "AWS migration, DevOps automation, CI/CD, and infrastructure engineering.",
  },
];
