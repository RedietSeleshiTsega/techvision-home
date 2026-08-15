export type Product = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  startingPrice: number;
};

export const products: Product[] = [
  {
    slug: "lms",
    name: "Learning Management System",
    short: "LMS",
    tagline: "Deliver world-class digital learning",
    description:
      "A complete LMS to create courses, track learner progress, run assessments, and deliver engaging blended learning at any scale.",
    image: "/dashboards/lms-dashboard.png",
    features: [
      "Course authoring & video lessons",
      "Automated grading & quizzes",
      "Learner progress analytics",
      "Certificates & gamification",
      "Live classes & discussion forums",
      "Mobile learning app",
    ],
    startingPrice: 49,
  },
  {
    slug: "education-erp",
    name: "Education ERP",
    short: "Education ERP",
    tagline: "Run your entire institution from one place",
    description:
      "Manage admissions, fees, timetables, exams, and parent communication in a single platform built for schools and universities.",
    image: "/dashboards/education-erp-dashboard.png",
    features: [
      "Admissions & enrollment",
      "Fee collection & invoicing",
      "Timetable & scheduling",
      "Exam & report cards",
      "Attendance tracking",
      "Parent–teacher portal",
    ],
    startingPrice: 79,
  },
  {
    slug: "erp",
    name: "ERP System",
    short: "ERP",
    tagline: "One system to run your whole business",
    description:
      "Unify finance, inventory, sales, and supply chain with a modular ERP that gives leadership real-time visibility across operations.",
    image: "/dashboards/erp-dashboard.png",
    features: [
      "Finance & accounting",
      "Inventory & warehousing",
      "Sales & CRM",
      "Procurement & supply chain",
      "Real-time dashboards",
      "Multi-branch support",
    ],
    startingPrice: 99,
  },
  {
    slug: "hr",
    name: "HR Management System",
    short: "HR Management",
    tagline: "Empower your people operations",
    description:
      "Streamline hiring, payroll, attendance, and performance so your HR team can focus on people instead of paperwork.",
    image: "/dashboards/hr-dashboard.png",
    features: [
      "Employee directory & records",
      "Payroll & compliance",
      "Attendance & leave",
      "Recruitment & onboarding",
      "Performance reviews",
      "Self-service portal",
    ],
    startingPrice: 59,
  },
];

export const navLinks = [
  { key: "home", href: "/" },
  { key: "solutions", href: "/solutions" },
  { key: "pricing", href: "/pricing" },
  { key: "industries", href: "/industries" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export const whyTechVision = [
  { key: "cloudBased" },
  { key: "secure" },
  { key: "scalable" },
  { key: "mobileFriendly" },
  { key: "easyIntegration" },
  { key: "localSupport" },
];

export const industries = [
  { key: "schools" },
  { key: "universities" },
  { key: "trainingCenters" },
  { key: "ngos" },
  { key: "government" },
  { key: "telecom" },
  { key: "businesses" },
];

export const pricingPlans = [
  { key: "starter", monthly: 10000, annual: 96000, popular: false },
  { key: "growth", monthly: 13000, annual: 124000, popular: false },
  { key: "educationSuite", monthly: 18000, annual: 172800, popular: false },
  { key: "enterpriseSuite", monthly: 24000, annual: 230400, popular: true },
];

export const bundles = [
  {
    name: "Education Suite",
    products: ["LMS", "Education ERP"],
    description: "Everything an institution needs to teach and operate.",
    save: "Save 25%",
  },
  {
    name: "Business Suite",
    products: ["ERP", "HR Management"],
    description: "Run finance, operations, and people from one platform.",
    save: "Save 25%",
  },
  {
    name: "Enterprise Suite",
    products: ["LMS", "Education ERP", "ERP", "HR Management"],
    description: "The complete TechVision platform, fully integrated.",
    save: "Save 35%",
  },
];
