export const identity = {
  name: "Arthur Monteiro",
  handle: "monteiro-lab",
  title: "Full-Stack Developer",
  tagline: "Full-stack systems, data dashboards, AI integrations, and cloud-native infrastructure.",
  shortBio:
    "Full-stack developer focused on Python backends, modern frontends, and practical AI integration. Past work includes financial dashboards, AI-assisted scheduling, government-scale complaint platforms, and containerized enterprise systems.",
  github: "https://github.com/monteiro-lab",
  email: "arthurmm122@gmail.com",
  linkedin: "https://www.linkedin.com/in/arthur-monteiro-9236a4207/",
};

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  github: string;
  featured: boolean;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "dolar-tracker",
    name: "Dolar Tracker",
    description:
      "Real-time USD/BRL exchange rate tracker with historical analysis and interactive dashboards.",
    longDescription:
      "A Flask-powered financial tracking application that monitors dollar exchange rates, provides historical trend analysis, and renders interactive visual dashboards for data-driven insights.",
    tech: ["Python", "Flask", "Dashboard", "Data Analysis"],
    category: "Data & Finance",
    github: "https://github.com/monteiro-lab/dolar-tracker",
    featured: true,
    icon: "TrendingUp",
  },
  {
    id: "calendar-ai-pro",
    name: "CalendarAI PRO",
    description:
      "Intelligent scheduling web app powered by AI, LangChain, and Google Calendar sync.",
    longDescription:
      "An AI-assisted calendar application that uses LangChain for natural language processing, integrates with Google Calendar, and leverages Supabase for real-time data persistence. Built for smart, automated scheduling.",
    tech: ["Python", "Flask", "LangChain", "Supabase", "Google Calendar API"],
    category: "AI & Automation",
    github: "https://github.com/ndmg-dev/CalendarAI_PRO",
    featured: true,
    icon: "Bot",
  },
  {
    id: "ouvidoria-mg",
    name: "Ouvidoria MG",
    description:
      "Internal ombudsman system for HR departments — built with Flask, Supabase, and Docker.",
    longDescription:
      "A full-stack internal complaint and feedback management system designed for human resources departments. Features secure data handling, role-based access, and containerized deployment.",
    tech: ["Flask", "Supabase", "Docker", "HTML/CSS"],
    category: "Enterprise Systems",
    github: "https://github.com/ndmg-dev/ouvidoria-mg",
    featured: true,
    icon: "Building2",
  },
  {
    id: "gridx",
    name: "GridX",
    description:
      "Data grid and analytics toolkit for structured data exploration and visualization.",
    longDescription:
      "A Jupyter-based data analysis and grid visualization toolkit for exploring structured datasets with interactive notebooks and visual analysis pipelines.",
    tech: ["Python", "Jupyter", "Data Analysis", "Pandas"],
    category: "Data & Dashboards",
    github: "https://github.com/monteiro-lab/GridX",
    featured: true,
    icon: "BarChart2",
  },
  {
    id: "dataflow",
    name: "DataFlow",
    description:
      "Data pipeline and workflow automation framework for ETL and processing tasks.",
    longDescription:
      "A Python-based data pipeline framework designed for building, orchestrating, and monitoring data transformation workflows. Streamlines ETL processes with clean, composable architecture.",
    tech: ["Python", "ETL", "Automation", "Data Pipelines"],
    category: "Data & Automation",
    github: "https://github.com/monteiro-lab/dataflow",
    featured: true,
    icon: "Workflow",
  },
  {
    id: "sky-stars",
    name: "Sky Stars",
    description:
      "Visual astronomical data exploration and star mapping application.",
    longDescription:
      "An application that brings astronomical data to life through interactive visualizations and star mapping, combining data science with visual storytelling.",
    tech: ["Python", "Data Visualization", "API Integration"],
    category: "Data Visualization",
    github: "https://github.com/monteiro-lab/Sky-Stars",
    featured: false,
    icon: "Star",
  },
  {
    id: "gestao-diocesana",
    name: "Gestão Diocesana",
    description:
      "Parish and diocese management system with organizational workflows.",
    longDescription:
      "A comprehensive management system for ecclesiastical organizations, handling parish records, organizational workflows, and administrative processes in a structured digital platform.",
    tech: ["Python", "Flask", "Database", "Web Systems"],
    category: "Enterprise Systems",
    github: "https://github.com/monteiro-lab/gestao-diocesana",
    featured: false,
    icon: "ClipboardList",
  },
  {
    id: "movie-recommender",
    name: "Movie Recommender",
    description:
      "Flask-based movie recommendation engine with intelligent filtering.",
    longDescription:
      "A machine learning-powered recommendation system built on Flask that analyzes user preferences and viewing patterns to suggest relevant films with intelligent filtering algorithms.",
    tech: ["Python", "Flask", "ML", "Recommendation Engine"],
    category: "AI & Automation",
    github: "https://github.com/monteiro-lab/movie-recommender-flask",
    featured: false,
    icon: "Film",
  },
  {
    id: "fiscalpro",
    name: "FiscalPro",
    description:
      "Tax calculation and fiscal management tool for Brazilian tax workflows.",
    longDescription:
      "A specialized fiscal management application designed for Brazilian tax compliance workflows, automating calculations, generating reports, and streamlining accounting processes.",
    tech: ["Python", "Flask", "Finance", "Automation"],
    category: "Data & Finance",
    github: "https://github.com/monteiro-lab/FiscalPro",
    featured: false,
    icon: "Receipt",
  },
  {
    id: "cotidiano-pdf",
    name: "Cotidiano PDF Studio",
    description: "PDF generation and manipulation studio for document workflows.",
    longDescription:
      "A document processing toolkit that enables creation, manipulation, and transformation of PDF files with a focus on streamlining daily document-centric workflows.",
    tech: ["Python", "PDF Processing", "Automation"],
    category: "Tools & Automation",
    github: "https://github.com/monteiro-lab/cotidiano-pdf-studio",
    featured: false,
    icon: "FileText",
  },
  {
    id: "pdfwizard",
    name: "PDF Wizard",
    description:
      "Advanced PDF transformation and processing utility with batch support.",
    longDescription:
      "A versatile PDF processing utility that handles complex transformations, merging, splitting, and batch operations for document management workflows.",
    tech: ["Python", "PDF Processing", "CLI"],
    category: "Tools & Automation",
    github: "https://github.com/monteiro-lab/pdfwizard",
    featured: false,
    icon: "Wand2",
  },
];

export interface TechItem {
  name: string;
  iconUrl?: string;
  lucideIcon?: string;
}

export interface TechCategory {
  name: string;
  color: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    color: "#3b82f6",
    items: [
      { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    name: "Backend",
    color: "#8b5cf6",
    items: [
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
      { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "REST APIs", lucideIcon: "Server" },
    ],
  },
  {
    name: "Data & Dashboards",
    color: "#06b6d4",
    items: [
      { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "Jupyter", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
      { name: "Plotly", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" },
      { name: "Data Pipelines", lucideIcon: "Workflow" },
      { name: "ETL", lucideIcon: "Database" },
    ],
  },
  {
    name: "AI & Automation",
    color: "#10b981",
    items: [
      { name: "LangChain", lucideIcon: "Link" },
      { name: "OpenAI API", lucideIcon: "Cpu" },
      { name: "ML Models", lucideIcon: "BrainCircuit" },
      { name: "Task Automation", lucideIcon: "Settings" },
      { name: "Web Scraping", lucideIcon: "Globe" },
    ],
  },
  {
    name: "Databases",
    color: "#f59e0b",
    items: [
      { name: "Supabase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
      { name: "Firebase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "#ef4444",
    items: [
      { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub Actions", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Vercel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    ],
  },
];

export const journeyMilestones = [
  {
    phase: "Foundation",
    title: "First Full-Stack Systems",
    description:
      "Built foundational web applications and learned to connect frontend interfaces to Python-powered backends.",
    projects: ["gestao-diocesana", "pdfwizard"],
    icon: "Hammer",
  },
  {
    phase: "Data Era",
    title: "Dashboards & Data Tools",
    description:
      "Developed data-driven applications, interactive dashboards, and financial tracking systems.",
    projects: ["dolar-tracker", "GridX", "dataflow"],
    icon: "BarChart2",
  },
  {
    phase: "AI Integration",
    title: "AI-Assisted Applications",
    description:
      "Integrated AI and LangChain into production applications for intelligent scheduling and recommendation engines.",
    projects: ["CalendarAI_PRO", "movie-recommender"],
    icon: "Bot",
  },
  {
    phase: "Enterprise Scale",
    title: "Containerized & Cloud Systems",
    description:
      "Built enterprise-grade systems with Docker, Supabase, and cloud-native architecture for real organizations.",
    projects: ["ouvidoria-mg", "FiscalPro"],
    icon: "Cloud",
  },
  {
    phase: "Current",
    title: "Intelligent Web Ecosystems",
    description:
      "Combining full-stack development, AI, automation, and cloud infrastructure to build complete digital solutions.",
    projects: [],
    icon: "Zap",
  },
];

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const ctaFinal = {
  headline: "Let's build something that works.",
  subline:
    "From data pipelines and AI integrations to production-grade web platforms — open for collaboration.",
};
