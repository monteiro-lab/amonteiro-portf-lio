"use client";

import { useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { GithubIcon } from "./icons";
import { Project } from "@/config/portfolio";

interface GlowCardProps {
  project: Project;
  index: number;
}

export default function GlowCard({ project, index }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  // Dynamically resolve the Lucide icon
  const IconComponent = Icons[project.icon as keyof typeof Icons] as React.ElementType;

  return (
    <motion.div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -4 }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.12), transparent 60%)",
        }}
      />

      {/* Card content */}
      <div className="relative glass rounded-2xl p-6 md:p-8 h-full flex flex-col group-hover:border-violet-500/20 transition-colors duration-500">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-violet-400 group-hover:text-cyan-400 transition-colors duration-300">
              {IconComponent ? <IconComponent size={24} /> : <Icons.Folder size={24} />}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-gradient transition-all duration-300">
                {project.name}
              </h3>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-white transition-all"
            aria-label={`View ${project.name} on GitHub`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Why it matters */}
        <p className="text-xs text-violet-400/60 italic mb-4">
          {project.longDescription.split(".")[0]}.
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.06] text-text-secondary group-hover:border-violet-500/20 group-hover:text-violet-300/80 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-text-muted hover:text-violet-400 transition-colors font-mono"
          >
            <ExternalLink className="w-3 h-3" />
            View Source
          </a>
          {project.featured && (
            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Featured
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
