"use client";

import { useState } from "react";
import SectionReveal from "./SectionReveal";
import GlowCard from "./GlowCard";
import { projects } from "@/config/portfolio";
import type { Project } from "@/config/portfolio";
import ProjectModal from "./ProjectModal";

export default function ProjectShowcase() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="relative py-32 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-violet-400/80 mb-3">
              // Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Selected Work</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Sistemas reais construídos para uso real: acompanhamento financeiro, agendamento por IA, plataformas governamentais e ferramentas de dados.
            </p>
          </div>
        </SectionReveal>

        {/* Project progressive floating layout - left-aligned to frame the avatar on the right */}
        <div className="relative mt-16 z-10 w-full max-w-3xl mr-auto pl-4 md:pl-12">
          {/* Vertical continuous scroll rail */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/0 via-violet-500/20 to-blue-500/0" />
          
          <div className="flex flex-col gap-12 md:gap-20">
            {displayed.map((project, i) => (
              <div 
                key={project.id} 
                className="w-full relative"
              >
                {/* Connection node to the scroll rail */}
                <div className="absolute top-8 -left-4 md:-left-12 w-8 md:w-12 h-px bg-violet-500/20">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-violet-500 bg-bg-primary" />
                </div>
                <div onClick={() => setSelectedProject(project)} className="cursor-pointer">
                  <GlowCard project={project} index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show more */}
        {!showAll && others.length > 0 && (
          <SectionReveal>
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="font-mono text-sm text-text-muted hover:text-violet-400 border border-white/[0.06] hover:border-violet-500/30 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
              >
                Ver Todos os {projects.length} Projetos
              </button>
            </div>
          </SectionReveal>
        )}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
