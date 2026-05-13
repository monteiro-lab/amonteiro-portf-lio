"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import SectionReveal from "./SectionReveal";
import { journeyMilestones } from "@/config/portfolio";

function MilestoneCard({ milestone, i }: { milestone: any; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // Becomes active when the element's top edge crosses the vertical center of the viewport
  const isActive = useInView(ref, { margin: "100% 0px -50% 0px" });
  
  const isRight = i % 2 === 0;
  const IconComponent = Icons[milestone.icon as keyof typeof Icons] as React.ElementType;

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start mb-16 last:mb-0 ${
        isRight ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Node dot */}
      <div
        className={`absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full border-2 z-10 md:-translate-x-1/2 transition-all duration-500 ease-out ${
          isActive 
            ? "bg-violet-500 border-cyan-400 scale-125" 
            : "bg-[#0a0a0f] border-white/20 scale-100"
        }`}
        style={{
          boxShadow: isActive ? "0 0 20px rgba(139, 92, 246, 0.6)" : "none",
        }}
      />

      {/* Content */}
      <div
        className={`ml-16 md:ml-0 md:w-[45%] transition-all duration-500 ${
          isRight ? "md:pr-12" : "md:pl-12 md:ml-auto"
        } ${isActive ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
      >
        <div className={`glass rounded-xl p-6 transition-all duration-500 border ${
          isActive ? "border-violet-500/40 bg-white/[0.05] shadow-[0_0_30px_rgba(139,92,246,0.1)]" : "border-white/[0.04] bg-white/[0.01]"
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`transition-colors duration-500 ${isActive ? "text-cyan-400" : "text-violet-400/50"}`}>
              {IconComponent ? <IconComponent size={20} /> : <Icons.Circle size={20} />}
            </div>
            <div>
              <p className={`font-mono text-xs uppercase tracking-wider transition-colors duration-500 ${isActive ? "text-violet-300" : "text-violet-400/50"}`}>
                {milestone.phase}
              </p>
              <h3 className={`text-lg font-semibold transition-colors duration-500 ${isActive ? "text-white" : "text-white/60"}`}>
                {milestone.title}
              </h3>
            </div>
          </div>
          <p className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${isActive ? "text-text-secondary" : "text-text-muted"}`}>
            {milestone.description}
          </p>
          {milestone.projects.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {milestone.projects.map((p: string) => (
                <span
                  key={p}
                  className={`px-2 py-1 rounded-md text-xs font-mono border transition-colors duration-500 ${
                    isActive 
                      ? "bg-violet-500/10 border-violet-500/20 text-violet-200" 
                      : "bg-white/[0.02] border-white/[0.04] text-text-muted/50"
                  }`}
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
}

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth the progress value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-20">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-violet-400/80 mb-3">
              // Development Path
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Evolution</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Desde os primeiros projetos full-stack até sistemas de IA em contêineres — cada fase moldada por problemas do mundo real.
            </p>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Base Static Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] md:-translate-x-1/2 rounded-full" />

          {/* Animated Progress Fill Line */}
          <motion.div 
            className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent md:-translate-x-1/2 origin-top rounded-full z-0"
            style={{ 
              scaleY: smoothProgress,
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
            }}
          />

          {journeyMilestones.map((milestone, i) => (
            <MilestoneCard key={milestone.phase} milestone={milestone} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
