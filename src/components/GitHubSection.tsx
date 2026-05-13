"use client";

import { motion } from "framer-motion";
import { GitFork, Star, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { identity, projects } from "@/config/portfolio";

export default function GitHubSection() {
  const pinned = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="github" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400/80 mb-3">
              // Open Source
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Source Code</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Todos os projetos são open source. Explore, faça forks ou contribua.
            </p>
          </div>
        </SectionReveal>

        {/* Terminal-style card */}
        <SectionReveal delay={0.1}>
          <div className="glass rounded-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 font-mono text-xs text-text-muted">
                ~/{identity.handle}
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8 font-mono text-sm space-y-4">
              <div>
                <span className="text-emerald-400">$</span>
                <span className="text-text-secondary ml-2">
                  gh repo list {identity.handle} --limit 4 --sort updated
                </span>
              </div>

              {/* Repos list */}
              <div className="space-y-3 ml-2">
                {pinned.map((project, i) => (
                  <motion.a
                    key={project.id}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.03] transition-colors group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-violet-400">→</span>
                      <span className="text-blue-400 group-hover:text-white transition-colors">
                        {project.id}
                      </span>
                      <span className="text-text-muted text-xs hidden sm:inline">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-text-muted">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span className="text-xs">-</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span className="text-xs">-</span>
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-2 border-t border-white/[0.04]">
                <span className="text-emerald-400">$</span>
                <span className="text-text-muted ml-2">
                  # Total: {projects.length} repositórios públicos
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={0.2}>
          <div className="text-center mt-10">
            <MagneticButton
              href={identity.github}
              className="bg-white/[0.04] border border-white/[0.08] text-white hover:border-violet-500/30 hover:bg-violet-500/10"
            >
              <GithubIcon className="w-4 h-4" />
              Ver Todos os Repositórios
            </MagneticButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
