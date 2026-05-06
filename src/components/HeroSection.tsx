"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon } from "./icons";
import CentralAvatar from "./CentralAvatar";
import MagneticButton from "./MagneticButton";
import SectionReveal from "./SectionReveal";
import { identity, techStack } from "@/config/portfolio";

export default function HeroSection() {
  const floatingBadges = techStack.flatMap((cat) =>
    cat.items.slice(0, 2).map((item) => ({ name: item.name, iconUrl: item.iconUrl, color: cat.color }))
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 overflow-hidden"
    >
        {/* Top Text (Name & Title) - sits above the avatar */}
        <div className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 text-center w-full px-6">
          <SectionReveal delay={0.2}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">
                Systems Online — Available for Projects
              </span>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
              <span className="text-gradient">{identity.name}</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <p className="text-lg md:text-xl font-light text-text-secondary">
              {identity.title}
            </p>
          </SectionReveal>
        </div>

        {/* Dynamic orbiting badges framing the global avatar */}
        <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
          {floatingBadges.slice(0, 4).map((badge, i) => {
            const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
            // Tight controlled orbit around the avatar
            const radiusX = 200;
            const radiusY = 160;
            
            return (
              <motion.div
                key={badge.name}
                className="absolute left-1/2 top-1/2"
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: Math.cos(angle) * radiusX,
                  y: Math.sin(angle) * radiusY
                }}
                transition={{ 
                  delay: 1 + i * 0.1, 
                  duration: 1,
                  type: "spring"
                }}
              >
                <motion.div
                  className="font-mono text-xs px-3 py-1.5 rounded-full border shadow-[0_0_15px_rgba(139,92,246,0.15)] backdrop-blur-md"
                  style={{
                    borderColor: `${badge.color}40`,
                    color: `${badge.color}f0`,
                    backgroundColor: `${badge.color}10`,
                  }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotateZ: [0, (i % 2 === 0 ? 5 : -5), 0]
                  }}
                  transition={{ 
                    duration: 3 + (i % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                >
                  {badge.name}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA & Tagline - sits below the avatar */}
        <div className="absolute bottom-[10%] md:bottom-[15%] left-1/2 -translate-x-1/2 text-center w-full px-6 flex flex-col items-center">
          <SectionReveal delay={0.5}>
            <p className="text-sm md:text-base text-text-muted max-w-lg leading-relaxed mb-8 mx-auto">
              {identity.tagline}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href="#projects"
                className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-lg hover:shadow-violet-500/25 border border-violet-500/20"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                href={identity.github}
                className="glass text-text-primary hover:border-violet-500/30"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-text-muted" />
      </motion.div>
    </section>
  );
}
