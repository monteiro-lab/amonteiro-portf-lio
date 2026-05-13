"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Terminal-style tokens for the code rain columns
const TOKENS = [
  "0", "1", "const", "let", "async", "await", "fn", "=>",
  "AI", "API", "sys", "run", "build", "Flask", "def",
  "import", "from", "class", "self", "True", "None",
  "GET", "POST", "200", "404", "tcp", "ssh", "git",
  "0x", "ff", "db", "sql", "pip", "npm", "dev",
  "{}", "()", "[]", "//", "/*", "*/", "#", "::",
  "py", "ts", "js", "css", "html", "json", "yaml",
  "&&", "||", "!=", "==", "+=", ">>", "<<",
];

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  charIndex: number;
  opacity: number;
  hue: number; // 180=cyan, 250=violet, 220=blue
}

interface CodeRainBackgroundProps {
  /** Overall opacity multiplier (0-1) */
  intensity?: number;
  /** className for the container */
  className?: string;
}

export default function CodeRainBackground({
  intensity = 0.35,
  className = "",
}: CodeRainBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(canvasRef);
  const [reduceMotion, setReduceMotion] = useState(false);
  const columnsRef = useRef<Column[]>([]);
  const animRef = useRef<number>(0);

  // Check reduced motion preference client-side only
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion || !isInView) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const fontSize = isMobile ? 12 : 14;
    const columnSpacing = isMobile ? 50 : 35;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    const initColumns = () => {
      const cols: Column[] = [];
      const numCols = Math.floor(canvas.width / columnSpacing);
      
      for (let i = 0; i < numCols; i++) {
        // Randomize initial state so columns are staggered
        const charList: string[] = [];
        const numChars = Math.floor(Math.random() * 6) + 3;
        for (let j = 0; j < numChars; j++) {
          charList.push(TOKENS[Math.floor(Math.random() * TOKENS.length)]);
        }

        cols.push({
          x: i * columnSpacing + columnSpacing / 2 + (Math.random() - 0.5) * 10,
          y: Math.random() * -canvas.height * 1.5, // start off-screen at varying heights
          speed: 0.3 + Math.random() * 0.6,
          chars: charList,
          charIndex: 0,
          opacity: 0.15 + Math.random() * 0.25,
          hue: [180, 250, 220, 160][Math.floor(Math.random() * 4)], // cyan, violet, blue, teal
        });
      }
      columnsRef.current = cols;
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const columns = columnsRef.current;
      
      for (const col of columns) {
        const lineHeight = fontSize * 1.8;
        
        // Draw each character in the column's trail
        for (let i = 0; i < col.chars.length; i++) {
          const charY = col.y + i * lineHeight;
          
          // Only draw if on screen
          if (charY < -lineHeight || charY > canvas.height + lineHeight) continue;
          
          // Fade: leading char is brightest, trail fades
          const trailFade = 1 - (i / col.chars.length) * 0.7;
          const alpha = col.opacity * trailFade * intensity;
          
          // Leading character gets a slight brightness boost
          const isLead = i === 0;
          const saturation = isLead ? 80 : 50;
          const lightness = isLead ? 65 : 45;
          
          ctx.font = `${fontSize}px "JetBrains Mono", "Fira Code", monospace`;
          ctx.fillStyle = `hsla(${col.hue}, ${saturation}%, ${lightness}%, ${alpha})`;
          ctx.fillText(col.chars[i], col.x, charY);
        }

        // Move column down
        col.y += col.speed;

        // Reset when fully off bottom
        const totalHeight = col.chars.length * fontSize * 1.8;
        if (col.y - totalHeight > canvas.height) {
          // Respawn at top with new tokens
          col.y = Math.random() * -300 - 50;
          col.charIndex = 0;
          const numChars = Math.floor(Math.random() * 6) + 3;
          col.chars = [];
          for (let j = 0; j < numChars; j++) {
            col.chars.push(TOKENS[Math.floor(Math.random() * TOKENS.length)]);
          }
          col.opacity = 0.15 + Math.random() * 0.25;
          col.hue = [180, 250, 220, 160][Math.floor(Math.random() * 4)];
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [reduceMotion, intensity, isInView]);

  // Reduced motion: show nothing (or a static subtle pattern)
  if (reduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
}
