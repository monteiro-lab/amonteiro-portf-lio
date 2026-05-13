"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { techStack } from "@/config/portfolio";
import * as Icons from "lucide-react";

export default function StackConstellation() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="stack" className="relative py-32 px-6 w-full min-h-screen flex items-center overflow-hidden bg-[#05050a]">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Local Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
        >
          <source src="/video/techstack-bg.webm" type="video/webm" />
        </video>

        {/* Atmospheric Vignette and Readability Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f] opacity-80" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        {/* Slow moving radial glows to integrate the video color with the palette */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        
        {/* Subtle grid lines to ground the tech theme */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400/80 mb-3 drop-shadow-md">
              // Tools
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto drop-shadow-md">
              Tecnologias centrais em todas as camadas — frameworks frontend, backends Python, pipelines de dados e infraestrutura em nuvem.
            </p>
          </div>
        </SectionReveal>

        {/* Category tabs */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {techStack.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={`relative px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  activeCategory === i
                    ? "text-white"
                    : "text-text-muted hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {activeCategory === i && (
                  <motion.div
                    layoutId="stack-tab-active"
                    className="absolute inset-0 rounded-full border shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                    style={{
                      borderColor: `${cat.color}60`,
                      backgroundColor: `${cat.color}20`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10" style={activeCategory === i ? { color: cat.color } : undefined}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Display — Responsive Grid */}
        <SectionReveal delay={0.2}>
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {techStack[activeCategory].items.map((item, i) => {
                  const LucideIcon = item.lucideIcon
                    ? (Icons[item.lucideIcon as keyof typeof Icons] as React.ElementType)
                    : Icons.Terminal;

                  return (
                    <motion.div
                      key={item.name}
                      className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border backdrop-blur-lg cursor-pointer transition-all duration-300 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                      style={{
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      {/* Hover glow background */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${techStack[activeCategory].color}25 0%, transparent 70%)`
                        }}
                      />
                      
                      {/* Hover border glow */}
                      <div 
                        className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          borderColor: `${techStack[activeCategory].color}60`,
                          boxShadow: `inset 0 0 20px ${techStack[activeCategory].color}15, 0 0 20px ${techStack[activeCategory].color}15`
                        }}
                      />

                      {/* Icon */}
                      <div className="relative z-10 w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                        {item.iconUrl ? (
                          <img
                            src={item.iconUrl}
                            alt={`${item.name} logo`}
                            className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                            <LucideIcon size={32} style={{ color: techStack[activeCategory].color }} className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                          </div>
                        )}
                      </div>

                      {/* Label */}
                      <span
                        className="relative z-10 font-mono text-sm tracking-wide transition-colors duration-300 text-text-muted group-hover:text-white text-center drop-shadow-md"
                      >
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
