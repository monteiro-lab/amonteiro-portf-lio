"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import { GithubIcon } from "./icons";
import MagneticButton from "./MagneticButton";
import SectionReveal from "./SectionReveal";
import { identity } from "@/config/portfolio";

export default function HeroSection() {
  // Hardcoded high-value badges for the Hero orbit
  const heroBadges = [
    { name: "Python", color: "#8b5cf6", angle: Math.PI / 4 + 0.1, radiusX: 240, radiusY: 160 },
    { name: "Flask & APIs", color: "#3b82f6", angle: Math.PI / 4 * 3 - 0.1, radiusX: 240, radiusY: 160 },
    { name: "AI Systems", color: "#10b981", angle: Math.PI / 4 * 5 + 0.1, radiusX: 240, radiusY: 160 },
    { name: "Dashboards", color: "#06b6d4", angle: Math.PI / 4 * 7 - 0.1, radiusX: 240, radiusY: 160 },
  ];

  const projectSignals = [
    { name: "Dolar Tracker", status: "ONLINE", align: "left" },
    { name: "CalendarAI", status: "SYNCED", align: "left" },
    { name: "Ouvidoria MG", status: "ACTIVE", align: "right" },
    { name: "GridX", status: "STABLE", align: "right" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-[#05050a]"
    >
        {/* Background Depth & Decor */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Subtle grid mesh */}
          <div 
            className="absolute inset-0 opacity-[0.02]" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
            }} 
          />
          {/* Avatar Pedestal Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        </div>

        {/* Side HUD Panels (Desktop Only) */}
        <div className="absolute inset-0 pointer-events-none hidden xl:block z-10">
          {/* Left Panel */}
          <motion.div 
            className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="font-mono text-[10px] text-violet-500/40 tracking-[0.3em] mb-2 uppercase">sys.projects.local</div>
            {projectSignals.filter(p => p.align === "left").map((p, i) => (
              <div key={p.name} className="flex items-center gap-3 opacity-60">
                <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                <div className="font-mono text-xs text-text-muted">{p.name}</div>
                <div className="font-mono text-[9px] text-emerald-400/70 border border-emerald-400/20 bg-emerald-400/5 px-1.5 py-0.5 rounded-sm">{p.status}</div>
              </div>
            ))}
          </motion.div>

          {/* Right Panel */}
          <motion.div 
            className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            <div className="font-mono text-[10px] text-violet-500/40 tracking-[0.3em] mb-2 uppercase text-right">sys.monitor.remote</div>
            {projectSignals.filter(p => p.align === "right").map((p, i) => (
              <div key={p.name} className="flex items-center gap-3 opacity-60 flex-row-reverse">
                <div className="w-1 h-1 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.7}s` }} />
                <div className="font-mono text-xs text-text-muted">{p.name}</div>
                <div className="font-mono text-[9px] text-cyan-400/70 border border-cyan-400/20 bg-cyan-400/5 px-1.5 py-0.5 rounded-sm">{p.status}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Top Text (Name & Title) - sits above the avatar */}
        <div className="absolute top-[12%] md:top-[12%] left-1/2 -translate-x-1/2 text-center w-full px-6 z-20">
          <SectionReveal delay={0.2}>
            <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
              <Terminal className="w-3 h-3 text-emerald-400" />
              <span className="font-mono text-[10px] text-emerald-400 tracking-[0.25em] uppercase border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                SYSTEMS ONLINE // BUILD MODE
              </span>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 drop-shadow-xl">
              <span className="text-gradient">{identity.name}</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <p className="text-lg md:text-xl font-light text-text-secondary drop-shadow-md">
              {identity.title}
            </p>
          </SectionReveal>
        </div>

        {/* Dynamic orbiting badges framing the global avatar */}
        <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
          {heroBadges.map((badge, i) => {
            return (
              <motion.div
                key={badge.name}
                className="absolute left-1/2 top-1/2"
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: Math.cos(badge.angle) * badge.radiusX,
                  y: Math.sin(badge.angle) * badge.radiusY
                }}
                transition={{ 
                  delay: 1 + i * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
              >
                {/* SVG Targeting Line */}
                <svg className="absolute pointer-events-none z-[-1]" style={{ width: '600px', height: '600px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', overflow: 'visible' }}>
                  <line 
                    x1="300" 
                    y1="300" 
                    x2={300 - Math.cos(badge.angle) * badge.radiusX} 
                    y2={300 - Math.sin(badge.angle) * badge.radiusY} 
                    stroke={`${badge.color}30`} 
                    strokeWidth="1" 
                    strokeDasharray="4 4" 
                  />
                </svg>

                <motion.div
                  className="font-mono text-xs px-4 py-1.5 rounded-full border shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden group"
                  style={{
                    borderColor: `${badge.color}40`,
                    color: `${badge.color}f0`,
                    backgroundColor: `${badge.color}15`,
                  }}
                  animate={{ 
                    y: [0, -8, 0],
                    rotateZ: [0, (i % 2 === 0 ? 3 : -3), 0]
                  }}
                  transition={{ 
                    duration: 3 + (i % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {badge.name}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA & Tagline - sits below the avatar */}
        <div className="absolute bottom-[10%] md:bottom-[12%] left-1/2 -translate-x-1/2 text-center w-full px-6 flex flex-col items-center z-20">
          <SectionReveal delay={0.5}>
            <p className="text-sm md:text-base text-text-muted max-w-lg leading-relaxed mb-6 mx-auto drop-shadow-md">
              Full-stack developer building Python-powered systems, dashboards, automations, and AI-assisted web applications.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.6}>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <MagneticButton
                  href="#projects"
                  className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] border border-violet-400/30 transition-shadow duration-300 px-6 py-3"
                >
                  Explore Projects
                  <ArrowDown className="w-4 h-4 ml-1 opacity-80" />
                </MagneticButton>
                <MagneticButton
                  href={identity.github}
                  className="glass text-text-primary hover:border-violet-500/40 hover:bg-white/[0.05] transition-all duration-300 px-6 py-3"
                >
                  <GithubIcon className="w-4 h-4 mr-1 opacity-80" />
                  GitHub
                </MagneticButton>
              </div>
              <p className="font-mono text-[10px] text-text-muted/50 tracking-wider">
                SELECTED BUILDS & SOURCE CODE
              </p>
            </div>
          </SectionReveal>
        </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-violet-500/50" />
      </motion.div>
    </section>
  );
}
