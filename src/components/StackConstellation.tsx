"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { techStack } from "@/config/portfolio";

import * as Icons from "lucide-react";

export default function StackConstellation() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="stack" className="relative py-32 px-6 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400/80 mb-3">
              // Tech Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Stack Constellation</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              The tools and technologies powering every system — from frontend
              frameworks to AI integration layers.
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
                className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 cursor-pointer ${
                  activeCategory === i
                    ? "text-white border"
                    : "text-text-muted hover:text-white border border-transparent hover:border-white/[0.06]"
                }`}
                style={
                  activeCategory === i
                    ? {
                        borderColor: `${cat.color}50`,
                        backgroundColor: `${cat.color}15`,
                        color: cat.color,
                      }
                    : undefined
                }
              >
                {cat.name}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Constellation display */}
        <SectionReveal delay={0.2}>
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* The global avatar will be visible here in the center */}

            {/* Orbital items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="relative w-full max-w-2xl aspect-square"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 10 }}
                transition={{ duration: 0.6 }}
              >
                {techStack[activeCategory].items.map((item, i) => {
                  const total = techStack[activeCategory].items.length;
                  const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
                  // Larger radius to orbit the global avatar
                  const radius = 45; 
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  
                  const LucideIcon = item.lucideIcon ? Icons[item.lucideIcon as keyof typeof Icons] as React.ElementType : Icons.Terminal;

                  return (
                    <motion.div
                      key={item.name}
                      className="absolute group"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 150,
                      }}
                    >
                      {/* Connection line pointing towards the center */}
                      <svg
                        className="absolute pointer-events-none z-[-1]"
                        style={{
                          width: "300px",
                          height: "300px",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          overflow: "visible",
                        }}
                      >
                        <line
                          x1="150"
                          y1="150"
                          x2={150 + (50 - x) * 2.5}
                          y2={150 + (50 - y) * 2.5}
                          stroke={`${techStack[activeCategory].color}30`}
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />
                      </svg>

                      {/* Badge / Logo Pill */}
                      <div
                        className="relative flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-md transition-all duration-300 group-hover:scale-110 z-10 cursor-pointer"
                        style={{
                          borderColor: `${techStack[activeCategory].color}40`,
                          backgroundColor: `${techStack[activeCategory].color}10`,
                          boxShadow: `0 0 30px ${techStack[activeCategory].color}15`,
                          animation: `float ${4 + i % 3}s ease-in-out infinite ${i * 0.3}s`,
                        }}
                      >
                        {item.iconUrl ? (
                          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-md p-1 drop-shadow-md">
                            <img 
                              src={item.iconUrl} 
                              alt={`${item.name} logo`} 
                              className="w-full h-full object-contain" 
                            />
                          </div>
                        ) : (
                          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-md p-1 drop-shadow-md">
                            <LucideIcon size={16} color={techStack[activeCategory].color} />
                          </div>
                        )}
                        <span 
                          className="font-mono text-sm whitespace-nowrap"
                          style={{ color: `${techStack[activeCategory].color}f0` }}
                        >
                          {item.name}
                        </span>
                        
                        {/* Glow on hover */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            boxShadow: `0 0 25px ${techStack[activeCategory].color}40`,
                          }}
                        />
                      </div>
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
