"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CentralAvatar from "./CentralAvatar";
import CodeRainBackground from "./CodeRainBackground";
import TerminalTypewriter from "./TerminalTypewriter";
import { identity } from "@/config/portfolio";

interface IntroGateProps {
  onEnter: () => void;
}

export default function IntroGate({ onEnter }: IntroGateProps) {
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const startLoading = useCallback(() => {
    if (isComplete || isExiting) return;
    setIsHovering(true);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.5;
        if (next >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsComplete(true);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onEnter, 800);
          }, 400);
          return 100;
        }
        return next;
      });
    }, 30);
  }, [isComplete, isExiting, onEnter]);

  const stopLoading = useCallback(() => {
    if (isComplete) return;
    setIsHovering(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Drain progress
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 2;
      });
    }, 20);
  }, [isComplete]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#050508" }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Layer 1: Base dark background — via style above */}

          {/* Layer 2: Ambient radial gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139, 92, 246, ${0.06 + progress * 0.002}), transparent 70%)`,
              transition: "background 0.3s ease",
            }}
          />

          {/* Layer 3: Code rain background */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <CodeRainBackground 
              intensity={isHovering ? 0.45 : 0.3}
            />
          </motion.div>

          {/* Layer 4: Subtle grid overlay for terminal feel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.015) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.015) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              opacity: 0.6,
            }}
          />

          {/* Layer 4b: Scan line effect during loading */}
          {isHovering && (
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ opacity: 0.25 }}
            >
              <div
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                style={{ animation: "scan-line 2s linear infinite" }}
              />
            </div>
          )}

          {/* Layer 5-7: Content (Avatar, Text, Button) */}
          <motion.div
            className="relative z-10 flex flex-col items-center w-full max-w-5xl gap-8 px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Avatar */}
            <motion.div
              animate={{
                scale: isHovering ? 1.05 : 1,
                filter: isComplete
                  ? "brightness(1.5)"
                  : isHovering
                    ? "brightness(1.2)"
                    : "brightness(1)",
              }}
              transition={{ duration: 0.4 }}
            >
              <CentralAvatar size={200} />
            </motion.div>

            {/* Identity */}
            <div className="text-center flex flex-col items-center w-full space-y-3">
              <motion.div
                className="font-mono text-sm tracking-[0.3em] uppercase text-violet-400/80 h-[1.4em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <TerminalTypewriter />
              </motion.div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-gradient">{identity.name}</span>
              </motion.h1>
              <motion.p
                className="text-text-secondary text-sm md:text-base max-w-md mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {identity.tagline}
              </motion.p>
            </div>

            {/* Hover to Enter Button */}
            <motion.div
              className="relative mt-4 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <button
                id="intro-enter-button"
                onMouseEnter={startLoading}
                onMouseLeave={stopLoading}
                onTouchStart={(e) => {
                  e.preventDefault();
                  startLoading();
                }}
                onTouchEnd={stopLoading}
                onDoubleClick={() => {
                  setProgress(100);
                  setIsComplete(true);
                  setTimeout(() => {
                    setIsExiting(true);
                    setTimeout(onEnter, 800);
                  }, 400);
                }}
                className="relative group cursor-pointer select-none"
                aria-label="Hover or hold to enter portfolio"
              >
                {/* Outer glow ring */}
                <div
                  className="absolute -inset-3 rounded-full transition-opacity duration-300"
                  style={{
                    opacity: isHovering ? 0.6 : 0,
                    background: `conic-gradient(from 0deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.4))`,
                    filter: "blur(8px)",
                  }}
                />

                {/* Progress ring - SVG */}
                <svg
                  className="absolute -inset-1"
                  viewBox="0 0 120 120"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="56"
                    fill="none"
                    stroke="rgba(136, 136, 168, 0.1)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="56"
                    fill="none"
                    stroke="url(#progress-gradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                    style={{ transition: "stroke-dashoffset 0.1s ease" }}
                  />
                  <defs>
                    <linearGradient
                      id="progress-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Button face */}
                <div
                  className="relative w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center gap-1 transition-all duration-300"
                  style={{
                    background: isComplete
                      ? "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))"
                      : "rgba(13, 13, 24, 0.8)",
                    border: `1px solid ${isHovering ? "rgba(139, 92, 246, 0.4)" : "rgba(136, 136, 168, 0.15)"}`,
                    boxShadow: isHovering
                      ? "0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)"
                      : "none",
                  }}
                >
                  <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">
                    {isComplete ? "Ready" : "Load"}
                  </span>
                  <span className="font-mono text-xs text-violet-400 tracking-wider">
                    {isComplete ? "OK" : `${Math.round(progress)}%`}
                  </span>
                </div>
              </button>

              {/* Label */}
              <p className="text-center mt-6 text-text-muted text-xs font-mono tracking-wider">
                {isComplete
                  ? "INICIANDO..."
                  : "PASSE O MOUSE OU TOQUE PARA CARREGAR"}
              </p>
            </motion.div>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 text-text-muted/30 font-mono text-xs hidden md:block">
            <div>SYS.PORTFOLIO</div>
            <div className="text-violet-500/40">v2.0.26</div>
          </div>
          <div className="absolute bottom-6 right-6 text-text-muted/30 font-mono text-xs hidden md:block">
            <div>STATUS: {isComplete ? "READY" : isHovering ? "LOADING" : "STANDBY"}</div>
          </div>

          {/* Bottom-left corner — session info */}
          <div className="absolute bottom-6 left-6 text-text-muted/20 font-mono text-[10px] hidden md:block leading-relaxed">
            <div>SESSION: {mounted ? "ACTIVE" : "..."}</div>
            <div>RENDER: CLIENT</div>
          </div>
          
          {/* Top-right corner — timestamp-style */}
          <div className="absolute top-6 right-6 text-text-muted/20 font-mono text-[10px] hidden md:block text-right leading-relaxed">
            <div>NODE: MAIN</div>
            <div>PROTOCOL: HTTPS</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
