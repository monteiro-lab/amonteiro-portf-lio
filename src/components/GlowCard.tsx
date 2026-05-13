"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/config/portfolio";

interface GlowCardProps {
  project: Project;
  index: number;
}

// mapa de cores por categoria pra dar uma identidade visual
const CATEGORY_COLORS: Record<string, string> = {
  "Data & Finance": "#3b82f6",
  "AI & Automation": "#8b5cf6",
  "Enterprise Systems": "#10b981",
  "Data & Dashboards": "#06b6d4",
  "Data & Automation": "#06b6d4",
  "Data Visualization": "#3b82f6",
  "Tools & Automation": "#f59e0b",
};

export default function GlowCard({ project, index }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accentColor = CATEGORY_COLORS[project.category] || "#8b5cf6";

  const handleMouseMove = (e: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  // carrega o ícone do lucide dinamicamente
  const IconComponent = Icons[project.icon as keyof typeof Icons] as React.ElementType;

  const maxVisibleTech = 4;
  const visibleTech = project.tech.slice(0, maxVisibleTech);
  const overflowCount = project.tech.length - maxVisibleTech;

  return (
    <motion.div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, type: "spring", damping: 25, stiffness: 200 }}
      whileHover={{ y: -3 }}
    >
      {/* efeito de brilho que acompanha o mouse no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background:
            `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accentColor}18, transparent 60%)`,
        }}
      />

      {/* conteúdo do card */}
      <div className="relative glass rounded-2xl h-full flex flex-col group-hover:border-violet-500/20 transition-colors duration-500 overflow-hidden">
        {/* linha colorida no topo do card */}
        <div
          className="h-[2px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}60, ${accentColor}30, transparent)`,
          }}
        />

        <div className="p-6 md:p-8 flex flex-col flex-1">
          {/* cabeçalho */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              {/* ícone com a cor da categoria */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 flex-shrink-0"
                style={{
                  backgroundColor: `${accentColor}15`,
                  border: `1px solid ${accentColor}30`,
                }}
              >
                <div
                  className="group-hover:scale-110 transition-transform duration-300"
                  style={{ color: accentColor }}
                >
                  {IconComponent ? <IconComponent size={20} /> : <Icons.Folder size={20} />}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {project.name}
                </h3>
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {/* descrição */}
          <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* destaque pra métricas */}
          {project.metrics && (
            <div className="mb-5 bg-violet-500/10 border border-violet-500/20 rounded-lg p-3">
              <p className="text-xs font-mono text-violet-300 flex items-center gap-2">
                <Icons.TrendingUp size={14} className="text-violet-400" />
                {project.metrics}
              </p>
            </div>
          )}

          {/* tags das tecnologias usadas */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.06] text-text-secondary group-hover:border-violet-500/15 group-hover:text-violet-300/80 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {overflowCount > 0 && (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-text-muted">
                +{overflowCount}
              </span>
            )}
          </div>

          {/* rodapé */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-text-muted hover:text-violet-400 transition-colors font-mono group/link"
            >
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-200" />
              Ver Código
            </a>
            {project.featured && (
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Destaque
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
