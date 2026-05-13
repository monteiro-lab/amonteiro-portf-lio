"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function DolarTrackerDiagram() {
  const nodes = [
    { id: "fontes", label: "Fontes de Câmbio", icon: "Globe", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
    { id: "coletor", label: "Coletor de Dados", icon: "DownloadCloud", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
    { id: "pipeline", label: "Pipeline de Normalização", icon: "Filter", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30", glow: "shadow-[0_0_15px_rgba(217,70,239,0.15)]" },
    { id: "base", label: "Base Histórica", icon: "Database", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
    { id: "motor", label: "Motor de Análise", icon: "Cpu", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
    { id: "api", label: "API Flask", icon: "Server", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", glow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]" },
    { id: "dashboard", label: "Dashboard Financeiro", icon: "LayoutDashboard", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]" },
  ];

  return (
    <div className="w-full relative py-6 overflow-x-auto overflow-y-hidden no-scrollbar rounded-xl border border-white/5 bg-black/20">
      {/* Container to ensure min-width for horizontal scrolling if needed */}
      <div className="min-w-[800px] px-6 flex items-center justify-between relative h-32">
        
        {/* Background connecting line */}
        <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
        
        {/* Animated flow line */}
        <motion.div 
          className="absolute top-1/2 left-10 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 -translate-y-1/2 z-0"
          initial={{ width: "0%" }}
          animate={{ width: "calc(100% - 80px)" }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Nodes */}
        {nodes.map((node, i) => {
          const Icon = Icons[node.icon as keyof typeof Icons] as React.ElementType;
          return (
            <motion.div
              key={node.id}
              className="relative z-10 flex flex-col items-center justify-center gap-3 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              {/* Node Circle */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${node.bg} ${node.border} ${node.color} ${node.glow} bg-bg-card backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}>
                <Icon size={24} strokeWidth={1.5} />
              </div>
              
              {/* Label */}
              <div className="absolute -bottom-10 w-28 text-center">
                <span className="text-[10px] font-mono leading-tight text-text-muted group-hover:text-white transition-colors">
                  {node.label}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Floating parallel nodes (like "Atualização Agendada") */}
        <motion.div 
          className="absolute left-[14%] -bottom-4 z-10 flex flex-col items-center gap-2 group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 bg-bg-card shadow-[0_0_10px_rgba(234,179,8,0.15)] transition-transform duration-300 group-hover:scale-110">
            <Icons.Clock size={14} />
          </div>
          <span className="absolute -bottom-6 w-24 text-center text-[9px] font-mono text-text-muted group-hover:text-yellow-400/80 transition-colors">
            Atualização Agendada
          </span>
          {/* Connector arrow up */}
          <div className="absolute -top-4 w-[1px] h-4 bg-yellow-500/30" />
        </motion.div>

        {/* Parallel node 2 (Tendências e Indicadores) */}
        <motion.div 
          className="absolute left-[28%] -top-4 z-10 flex flex-col items-center gap-2 group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <span className="absolute -top-6 w-24 text-center text-[9px] font-mono text-text-muted group-hover:text-indigo-400/80 transition-colors">
            Tendências & Indicadores
          </span>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 bg-bg-card shadow-[0_0_10px_rgba(99,102,241,0.15)] transition-transform duration-300 group-hover:scale-110">
            <Icons.TrendingUp size={14} />
          </div>
          {/* Connector arrow down */}
          <div className="absolute -bottom-4 w-[1px] h-4 bg-indigo-500/30" />
        </motion.div>

      </div>
    </div>
  );
}
