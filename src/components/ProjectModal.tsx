"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/config/portfolio";
import ProjectDiagram from "./ProjectDiagrams";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    };
  }, [project]);

  if (!project) return null;

  const IconComponent = Icons[project.icon as keyof typeof Icons] as React.ElementType;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-bg-primary/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-strong rounded-2xl overflow-y-auto border border-white/10 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-colors z-10"
          >
            <Icons.X size={20} />
          </button>

          <div className="p-6 md:p-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-violet-500/10 border border-violet-500/30 text-violet-400">
                {IconComponent ? <IconComponent size={28} /> : <Icons.Folder size={28} />}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">{project.name}</h2>
                <span className="text-sm font-mono text-violet-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="mb-8 p-4 bg-gradient-to-r from-violet-500/10 to-transparent border-l-4 border-violet-500 rounded-r-lg">
                <p className="text-lg text-white font-medium flex items-center gap-2">
                  <Icons.Zap className="text-violet-400" size={20} />
                  Impacto Real: {project.metrics}
                </p>
              </div>
            )}

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Column */}
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Icons.Target className="text-violet-400" size={18} />
                    O Desafio
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.longDescription}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Icons.Wrench className="text-violet-400" size={18} />
                    Solução Arquitetural
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Para resolver o desafio de forma escalável, projetei um ecossistema focado em performance e resiliência, utilizando as melhores práticas para desenvolvimento backend. A comunicação de dados é otimizada para respostas rápidas.
                  </p>
                  {/* Architecture Diagram */}
                  <ProjectDiagram projectId={project.id} />
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                    Stack Tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                    Links Úteis
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 transition-all text-white group"
                  >
                    <GithubIcon className="w-[18px] h-[18px]" />
                    <span className="font-mono text-sm">Repositório Oficial</span>
                    <Icons.ArrowUpRight size={14} className="ml-auto text-text-muted group-hover:text-white transition-colors" />
                  </a>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
