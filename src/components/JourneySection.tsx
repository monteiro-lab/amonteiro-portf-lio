"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionReveal from "./SectionReveal";
import { journeyMilestones } from "@/config/portfolio";

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-violet-400/80 mb-3">
              // Development Path
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Evolution</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From first full-stack builds to AI-powered enterprise systems — a
              progression driven by real-world needs.
            </p>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-blue-500/20 to-transparent md:-translate-x-px" />

          {journeyMilestones.map((milestone, i) => {
            const isRight = i % 2 === 0;
            const IconComponent = Icons[milestone.icon as keyof typeof Icons] as React.ElementType;

            return (
              <motion.div
                key={milestone.phase}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  isRight ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Node dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-bg-primary z-10 md:-translate-x-1.5"
                  style={{
                    boxShadow: "0 0 12px rgba(139, 92, 246, 0.5)",
                  }}
                />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] ${
                    isRight ? "md:pr-12" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="glass rounded-xl p-6 hover:border-violet-500/20 transition-colors duration-300 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-violet-400 group-hover:text-cyan-400 transition-colors duration-300">
                        {IconComponent ? <IconComponent size={20} /> : <Icons.Circle size={20} />}
                      </div>
                      <div>
                        <p className="font-mono text-xs text-violet-400/80 uppercase tracking-wider">
                          {milestone.phase}
                        </p>
                        <h3 className="text-lg font-semibold text-white">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {milestone.description}
                    </p>
                    {milestone.projects.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {milestone.projects.map((p) => (
                          <span
                            key={p}
                            className="px-2 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-text-muted"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
