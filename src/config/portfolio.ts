export const identity = {
  name: "Arthur Monteiro",
  handle: "monteiro-lab",
  title: "Desenvolvedor Full-Stack",
  tagline: "Sistemas full-stack, dashboards de dados, integrações com IA e infraestrutura nativa em nuvem.",
  shortBio:
    "Desenvolvedor full-stack focado em backends Python, frontends modernos e integração prática de IA. Minha trajetória inclui dashboards financeiros, agendamento inteligente com IA, plataformas governamentais e sistemas corporativos em contêineres.",
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
      "Rastreador da taxa de câmbio USD/BRL em tempo real, com análise histórica e dashboards interativos.",
    longDescription:
      "Uma aplicação financeira construída em Flask que monitora as taxas do dólar, oferece análise de tendências históricas e renderiza dashboards visuais interativos para extrair insights valiosos dos dados.",
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
      "Web app de agendamento inteligente potencializado por IA, LangChain e sincronização com o Google Calendar.",
    longDescription:
      "Uma aplicação de calendário assistida por IA que utiliza o LangChain para processamento de linguagem natural, integra-se ao Google Calendar e aproveita o Supabase para persistência de dados em tempo real. Projetado para proporcionar um agendamento inteligente e automatizado.",
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
      "Sistema interno de ouvidoria para departamentos de RH: construído com Flask, Supabase e Docker.",
    longDescription:
      "Um sistema full-stack completo de gerenciamento de feedback e ouvidoria interna projetado para departamentos de recursos humanos. Apresenta tratamento seguro de dados, acesso baseado em funções e deploy através de contêineres.",
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
      "Kit de ferramentas analíticas e grid de dados para exploração e visualização de dados estruturados.",
    longDescription:
      "Um kit de ferramentas de análise de dados e visualização em formato de grid baseado no Jupyter, focado em explorar conjuntos de dados estruturados com notebooks interativos e pipelines de análise visual.",
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
      "Framework de automação de fluxo de trabalho e pipeline de dados para tarefas de processamento e ETL.",
    longDescription:
      "Um framework de pipeline de dados em Python projetado para construir, orquestrar e monitorar fluxos de trabalho de transformação de dados. Simplifica os processos de ETL com uma arquitetura limpa e escalável.",
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
      "Aplicação visual de exploração de dados astronômicos e mapeamento estelar.",
    longDescription:
      "Uma aplicação que dá vida aos dados astronômicos através de visualizações interativas e mapeamento estelar, combinando ciência de dados com uma narrativa visual imersiva.",
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
      "Sistema de gestão paroquial e diocesana com fluxos de trabalho organizacionais.",
    longDescription:
      "Um sistema de gerenciamento abrangente para organizações eclesiásticas, projetado para lidar com registros paroquiais, fluxos de trabalho organizacionais e processos administrativos através de uma plataforma digital estruturada.",
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
      "Motor de recomendação de filmes baseado em Flask com filtragem inteligente.",
    longDescription:
      "Um sistema de recomendação impulsionado por machine learning construído em Flask que analisa as preferências e padrões de visualização dos usuários para sugerir filmes relevantes usando algoritmos de filtragem avançados.",
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
      "Ferramenta de cálculo de impostos e gestão fiscal focada em rotinas fiscais brasileiras.",
    longDescription:
      "Uma aplicação especializada em gestão fiscal projetada para compliance com as rotinas fiscais do Brasil, automatizando cálculos, gerando relatórios e simplificando os processos contábeis.",
    tech: ["Python", "Flask", "Finance", "Automation"],
    category: "Data & Finance",
    github: "https://github.com/monteiro-lab/FiscalPro",
    featured: false,
    icon: "Receipt",
  },
  {
    id: "cotidiano-pdf",
    name: "Cotidiano PDF Studio",
    description: "Estúdio de geração e manipulação de PDFs para fluxos de trabalho de documentos.",
    longDescription:
      "Um kit completo de processamento de documentos que possibilita a criação, manipulação e transformação de arquivos PDF, com um foco central em otimizar as rotinas diárias com documentos.",
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
      "Utilitário avançado de processamento e transformação de PDFs com suporte a operações em lote.",
    longDescription:
      "Um utilitário de processamento de PDF muito versátil que lida com transformações complexas, mesclagem, divisão e operações em lote para simplificar os fluxos de trabalho de gestão documental.",
    tech: ["Python", "PDF Processing", "CLI"],
    category: "Tools & Automation",
    github: "https://github.com/monteiro-lab/pdfwizard",
    featured: false,
    icon: "Wand2",
  }
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
    title: "Primeiros Sistemas Full-Stack",
    description:
      "Construí aplicações web base e aprendi a conectar interfaces frontend a backends em Python.",
    projects: ["gestao-diocesana", "pdfwizard"],
    icon: "Hammer",
  },
  {
    phase: "Data Era",
    title: "Dashboards & Ferramentas de Dados",
    description:
      "Desenvolvi aplicações guiadas por dados, dashboards interativos e sistemas de análise financeira.",
    projects: ["dolar-tracker", "GridX", "dataflow"],
    icon: "BarChart2",
  },
  {
    phase: "AI Integration",
    title: "Aplicações com IA",
    description:
      "Integrei IA e LangChain em aplicações de produção para desenvolver agentes inteligentes de agendamento e recomendação.",
    projects: ["CalendarAI_PRO", "movie-recommender"],
    icon: "Bot",
  },
  {
    phase: "Enterprise Scale",
    title: "Sistemas em Nuvem & Contêineres",
    description:
      "Projetei sistemas robustos de nível corporativo com Docker, Supabase e arquitetura nativa em nuvem para organizações reais.",
    projects: ["ouvidoria-mg", "FiscalPro"],
    icon: "Cloud",
  },
  {
    phase: "Current",
    title: "Ecossistemas Web Inteligentes",
    description:
      "Combinando desenvolvimento full-stack, IA, automação e infraestrutura em nuvem para criar soluções digitais completas.",
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
  headline: "Vamos construir algo que realmente funcione.",
  subline:
    "De pipelines de dados e integrações com IA até plataformas web de nível de produção, aberto para colaborações.",
};
