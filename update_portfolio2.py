import re

file_path = 'src/config/portfolio.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace projects definition with the new one containing metrics
content = re.sub(
    r'export interface Project \{.*?\}',
    '''export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  github: string;
  featured: boolean;
  icon: string;
  metrics?: string; // NOVO: Métrica de impacto (ex: "Reduziu tempo em 40%")
  videoPreview?: string; // NOVO: Caminho para vídeo WebM/MP4
}''',
    content,
    flags=re.DOTALL
)

projects_replacement = '''export const projects: Project[] = [
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
    metrics: "Processa 1M+ de pontos de dados históricos",
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
    metrics: "Automatizou 40+ horas/mês de triagem",
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
    metrics: "Aumentou a taxa de resolução em 60%",
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
    metrics: "Visualiza 500k+ linhas instantaneamente",
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
    metrics: "Reduziu o tempo de ETL em 35%",
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
];'''

content = re.sub(
    r'export const projects: Project\[\] = \[.*?\];',
    projects_replacement,
    content,
    flags=re.DOTALL
)

# Fix weird encodings previously saved
content = content.replace("cǭlculos", "cálculos")
content = content.replace("cǭlculo", "cálculo")
content = content.replace("gestǜo", "gestão")
content = content.replace("aplicaes", "aplicações")
content = content.replace("operaes", "operações")
content = content.replace("solues", "soluções")
content = content.replace("produǜo", "produção")
content = content.replace("automaǜo", "automação")
content = content.replace("recomendaǜo", "recomendação")
content = content.replace("criaǜo", "criação")
content = content.replace("manipulaǜo", "manipulação")
content = content.replace("transformaǜo", "transformação")
content = content.replace("aplicaǜo", "aplicação")
content = content.replace("anǭlise", "análise")
content = content.replace("diǭrias", "diárias")
content = content.replace("utilitǭrio", "utilitário")
content = content.replace("versǭtil", "versátil")
content = content.replace("estǧdio", "estúdio")
content = content.replace("atǸ", "até")
content = content.replace("nvel", "nível")
content = content.replace("contǦineres", "contêineres")
content = content.replace("constru", "construí")
content = content.replace("prtica", "prática")
content = content.replace("trajetria", "trajetória")
content = content.replace("relatrios", "relatórios")
content = content.replace("contǭbeis", "contábeis")
content = content.replace("Estǧdio", "Estúdio")
content = content.replace("integraes", "integrações")
content = content.replace("colaboraes", "colaborações")
content = content.replace("?", "—") # revert ? to dash (if there were dashes)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
