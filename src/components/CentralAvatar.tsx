"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CentralAvatarProps {
  size?: number;
  className?: string;
  section?: string;
}

const SECTION_THEMES: Record<string, { eyeColor: string; eyeGlow: string; coreColor: string; coreGlow: string; pulseSpeed: number }> = {
  hero:     { eyeColor: "#06b6d4", eyeGlow: "rgba(6,182,212,1)",     coreColor: "#3b82f6", coreGlow: "rgba(59,130,246,1)",   pulseSpeed: 2 },
  projects: { eyeColor: "#8b5cf6", eyeGlow: "rgba(139,92,246,1)",    coreColor: "#8b5cf6", coreGlow: "rgba(139,92,246,1)",    pulseSpeed: 1.4 },
  stack:    { eyeColor: "#10b981", eyeGlow: "rgba(16,185,129,1)",    coreColor: "#06b6d4", coreGlow: "rgba(6,182,212,1)",     pulseSpeed: 1.6 },
  about:    { eyeColor: "#06b6d4", eyeGlow: "rgba(6,182,212,1)",     coreColor: "#10b981", coreGlow: "rgba(16,185,129,1)",    pulseSpeed: 2.4 },
  journey:  { eyeColor: "#3b82f6", eyeGlow: "rgba(59,130,246,1)",    coreColor: "#8b5cf6", coreGlow: "rgba(139,92,246,1)",    pulseSpeed: 2.0 },
  github:   { eyeColor: "#e8e8f0", eyeGlow: "rgba(232,232,240,0.8)", coreColor: "#3b82f6", coreGlow: "rgba(59,130,246,1)",   pulseSpeed: 2.2 },
  contact:  { eyeColor: "#06b6d4", eyeGlow: "rgba(6,182,212,1)",     coreColor: "#06b6d4", coreGlow: "rgba(6,182,212,1)",     pulseSpeed: 1.8 },
};

export default function CentralAvatar({
  size = 280,
  className = "",
  section = "hero",
}: CentralAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const theme = SECTION_THEMES[section] || SECTION_THEMES.hero;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      setMousePosition({ x: deltaX, y: deltaY });
      container.style.transform = `rotateX(${deltaY * 10}deg) rotateY(${-deltaX * 10}deg)`;
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
      container.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        perspective: "1000px",
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-3xl animate-pulse-ring" />

      {/* Floating Character Container */}
      <motion.div
        className="relative w-full h-full flex flex-col items-center justify-center z-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Head/Visor Container */}
        <div className="relative w-[55%] h-[40%] bg-gradient-to-b from-gray-900 to-black rounded-t-[3rem] rounded-b-[2rem] border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)] overflow-hidden">
          {/* Inner Visor Glow */}
          <div className="absolute inset-x-2 top-2 bottom-4 bg-gradient-to-b from-violet-900/40 to-blue-900/20 rounded-[2rem] border border-white/5 shadow-inner flex items-center justify-center overflow-hidden">
            {/* Scanline */}
            <div className="absolute w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]" />
            
            {/* Eyes — section-aware color */}
            <motion.div 
              className="relative w-full flex justify-center gap-6 z-10"
              animate={{ 
                x: mousePosition.x * 20,
                y: mousePosition.y * 15
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              {/* Left Eye */}
              <motion.div 
                className="w-3.5 h-7 rounded-full"
                style={{ 
                  backgroundColor: theme.eyeColor,
                  boxShadow: `0 0 15px ${theme.eyeGlow}`,
                  transition: "background-color 0.6s ease, box-shadow 0.6s ease",
                }}
                animate={{ scaleY: [1, 0.1, 1, 1, 1, 1, 1, 1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Right Eye */}
              <motion.div 
                className="w-3.5 h-7 rounded-full"
                style={{ 
                  backgroundColor: theme.eyeColor,
                  boxShadow: `0 0 15px ${theme.eyeGlow}`,
                  transition: "background-color 0.6s ease, box-shadow 0.6s ease",
                }}
                animate={{ scaleY: [1, 0.1, 1, 1, 1, 1, 1, 1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
              />
            </motion.div>
          </div>
          
          {/* Headphones/Ears */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-10 bg-gray-800 rounded-l-lg border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-10 bg-gray-800 rounded-r-lg border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
        </div>

        {/* Neck/Core Connection */}
        <motion.div 
          className="w-6 h-8 flex flex-col justify-between py-1.5 my-1"
          animate={{ height: [32, 36, 32] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="w-full h-1 bg-violet-500/80 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
          <div className="w-full h-1 bg-violet-500/80 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
          <div className="w-full h-1 bg-cyan-500/80 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </motion.div>

        {/* Body/Core — section-aware color */}
        <div className="relative w-[45%] h-[20%] bg-gradient-to-b from-gray-800 to-black rounded-[2rem] border border-white/10 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
           {/* Inner Core */}
           <motion.div 
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: theme.coreColor,
                boxShadow: `0 0 20px ${theme.coreGlow}`,
                transition: "background-color 0.6s ease, box-shadow 0.6s ease",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: theme.pulseSpeed, repeat: Infinity, ease: "easeInOut" }}
           >
              <div className="w-2 h-2 bg-white rounded-full blur-[1px]" />
           </motion.div>
        </div>
        
        {/* Floating Aura Base */}
        <motion.div 
          className="absolute -bottom-8 w-[60%] h-4 bg-violet-500/30 blur-xl rounded-[100%]"
          animate={{ scale: [1, 0.7, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Orbiting Decor (Holographic Rings) */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d", transform: "rotateX(60deg)" }}>
        <motion.div 
          className="absolute inset-[-10%] border-2 border-violet-500/20 rounded-full border-dashed"
          animate={{ rotateZ: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-[5%] border border-cyan-500/30 rounded-full"
          animate={{ rotateZ: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
           {/* Orbiting node */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </motion.div>
      </div>

      {/* Floating Hands */}
      <motion.div 
        className="absolute z-20 w-8 h-8 bg-gray-800 border-2 border-violet-500/50 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)]"
        style={{ left: "15%", top: "60%" }}
        animate={{ 
          y: [0, -8, 0],
          x: [0, 4, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute z-20 w-8 h-8 bg-gray-800 border-2 border-cyan-500/50 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]"
        style={{ right: "15%", top: "60%" }}
        animate={{ 
          y: [0, -10, 0],
          x: [0, -4, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
    </div>
  );
}
