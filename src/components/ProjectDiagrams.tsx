"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export type NodeType = {
  id: string;
  label: string;
  icon: string;
  color: string;
  bg: string;
  border: string;
  glow: string;
};

export type ParallelNode = NodeType & {
  position: "top" | "bottom";
  leftOffset: string; // ex: "14%"
};

export type DiagramConfig = {
  id: string;
  nodes: NodeType[];
  parallelNodes?: ParallelNode[];
};

const DIAGRAMS: Record<string, DiagramConfig> = {
  "dolar-tracker": {
    id: "dolar-tracker",
    nodes: [
      { id: "fontes", label: "Fontes de Câmbio", icon: "Globe", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
      { id: "coletor", label: "Coletor de Dados", icon: "DownloadCloud", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
      { id: "pipeline", label: "Pipeline de Normalização", icon: "Filter", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30", glow: "shadow-[0_0_15px_rgba(217,70,239,0.15)]" },
      { id: "base", label: "Base Histórica", icon: "Database", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
      { id: "motor", label: "Motor de Análise", icon: "Cpu", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
      { id: "api", label: "API Flask", icon: "Server", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", glow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]" },
      { id: "dashboard", label: "Dashboard Financeiro", icon: "LayoutDashboard", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]" },
    ],
    parallelNodes: [
      { id: "agenda", label: "Atualização Agendada", icon: "Clock", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30", glow: "shadow-[0_0_10px_rgba(234,179,8,0.15)]", position: "bottom", leftOffset: "14%" },
      { id: "trends", label: "Tendências & Indicadores", icon: "TrendingUp", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/30", glow: "shadow-[0_0_10px_rgba(99,102,241,0.15)]", position: "top", leftOffset: "28%" },
    ]
  },
  "calendar-ai-pro": {
    id: "calendar-ai-pro",
    nodes: [
      { id: "ui", label: "Client UI", icon: "Layout", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
      { id: "api", label: "Flask Backend", icon: "Server", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
      { id: "nlp", label: "LangChain NLP Engine", icon: "BrainCircuit", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
      { id: "db", label: "Supabase DB", icon: "Database", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
      { id: "google", label: "Google Calendar API", icon: "Calendar", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", glow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]" },
    ],
    parallelNodes: [
      { id: "sync", label: "Real-time Sync", icon: "RefreshCw", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", glow: "shadow-[0_0_10px_rgba(236,72,153,0.15)]", position: "bottom", leftOffset: "50%" },
    ]
  },
  "ouvidoria-mg": {
    id: "ouvidoria-mg",
    nodes: [
      { id: "portal", label: "Portal do Servidor", icon: "Users", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
      { id: "auth", label: "RBAC Auth", icon: "ShieldCheck", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30", glow: "shadow-[0_0_15px_rgba(239,68,68,0.15)]" },
      { id: "core", label: "Flask Core", icon: "Cpu", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
      { id: "db", label: "PostgreSQL (Supabase)", icon: "Database", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
      { id: "dashboard", label: "RH Dashboard", icon: "BarChart3", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", glow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]" },
    ],
    parallelNodes: [
      { id: "docker", label: "Docker Swarm", icon: "Container", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", glow: "shadow-[0_0_10px_rgba(6,182,212,0.15)]", position: "bottom", leftOffset: "50%" },
    ]
  },
  "gridx": {
    id: "gridx",
    nodes: [
      { id: "data", label: "Raw Data", icon: "FileJson", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
      { id: "pandas", label: "Pandas Engine", icon: "Table2", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
      { id: "jupyter", label: "Jupyter Kernel", icon: "TerminalSquare", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", glow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]" },
      { id: "ui", label: "Interactive Grid", icon: "LayoutGrid", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
      { id: "export", label: "Visualizations", icon: "LineChart", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]" },
    ]
  },
  "dataflow": {
    id: "dataflow",
    nodes: [
      { id: "extract", label: "Extratores API", icon: "CloudDownload", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
      { id: "transform", label: "Transformador", icon: "Workflow", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
      { id: "orchestrator", label: "Orquestrador", icon: "Network", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30", glow: "shadow-[0_0_15px_rgba(217,70,239,0.15)]" },
      { id: "load", label: "Data Warehouse", icon: "DatabaseZap", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
    ],
    parallelNodes: [
      { id: "monitor", label: "Monitoramento", icon: "Activity", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", glow: "shadow-[0_0_10px_rgba(6,182,212,0.15)]", position: "top", leftOffset: "50%" },
    ]
  }
};

export default function ProjectDiagram({ projectId }: { projectId: string }) {
  const config = DIAGRAMS[projectId];
  
  if (!config) {
    // exibe um estado vazio se o projeto não tiver diagrama mapeado
    return (
      <div className="w-full h-48 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
        <p className="text-text-muted font-mono text-sm z-10 flex items-center gap-2">
          <Icons.GitBranch size={16} /> Fluxo de Arquitetura em Definição
        </p>
      </div>
    );
  }

  const { nodes, parallelNodes } = config;
  const containerWidth = Math.max(800, nodes.length * 150);

  return (
    <div className="w-full relative py-6 overflow-x-auto overflow-y-hidden no-scrollbar rounded-xl border border-white/5 bg-black/20">
      <div 
        className="px-6 flex items-center justify-between relative h-32"
        style={{ minWidth: `${containerWidth}px` }}
      >
        
        {/* linha de fundo que conecta os nós */}
        <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
        
        {/* linha animada simulando o fluxo de dados */}
        <motion.div 
          className="absolute top-1/2 left-10 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 -translate-y-1/2 z-0"
          initial={{ width: "0%" }}
          animate={{ width: "calc(100% - 80px)" }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />

        {/* nós principais do diagrama */}
        {nodes.map((node, i) => {
          const Icon = Icons[node.icon as keyof typeof Icons] as React.ElementType || Icons.Box;
          return (
            <motion.div
              key={node.id}
              className="relative z-10 flex flex-col items-center justify-center gap-3 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${node.bg} ${node.border} ${node.color} ${node.glow} bg-bg-card backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                <Icon size={24} strokeWidth={1.5} />
              </div>
              
              <div className="absolute -bottom-10 w-28 text-center">
                <span className="text-[10px] font-mono leading-tight text-text-muted group-hover:text-white transition-colors">
                  {node.label}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* processos paralelos ou assíncronos */}
        {parallelNodes && parallelNodes.map((pNode, i) => {
          const Icon = Icons[pNode.icon as keyof typeof Icons] as React.ElementType || Icons.Box;
          const isTop = pNode.position === "top";
          
          return (
            <motion.div 
              key={pNode.id}
              className={`absolute z-10 flex flex-col items-center gap-2 group ${isTop ? "-top-4" : "-bottom-4"}`}
              style={{ left: pNode.leftOffset }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
            >
              {isTop && (
                <span className={`absolute -top-6 w-24 text-center text-[9px] font-mono text-text-muted transition-colors`} style={{ color: pNode.color }}>
                  {pNode.label}
                </span>
              )}
              
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${pNode.border} ${pNode.bg} ${pNode.color} ${pNode.glow} bg-bg-card transition-transform duration-300 group-hover:scale-110`}>
                <Icon size={14} />
              </div>
              
              {!isTop && (
                <span className={`absolute -bottom-6 w-24 text-center text-[9px] font-mono text-text-muted transition-colors`} style={{ color: pNode.color }}>
                  {pNode.label}
                </span>
              )}
              
              {/* linha que liga o nó paralelo ao fluxo principal */}
              <div className={`absolute w-[1px] h-4 ${pNode.bg.replace('/10', '/30')} ${isTop ? "-bottom-4" : "-top-4"}`} />
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
