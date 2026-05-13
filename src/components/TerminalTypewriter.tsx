"use client";

import { useState, useEffect, useRef } from "react";

const PHRASES = [
  "INITIALIZING",
  "INITIALIZING SYSTEM",
  "BOOTING PORTFOLIO",
  "LOADING ARTHUR.DEV",
];

interface TerminalTypewriterProps {
  className?: string;
}

export default function TerminalTypewriter({ className = "" }: TerminalTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const phaseRef = useRef<"typing" | "holding" | "deleting" | "pausing">("typing");
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // faz o cursor piscar
  useEffect(() => {
    if (!mounted || reduceMotion) return;
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, [mounted, reduceMotion]);

  // loop principal da animação de digitação
  useEffect(() => {
    if (!mounted || reduceMotion) return;

    const tick = () => {
      const currentPhrase = PHRASES[phraseIndexRef.current];
      const phase = phaseRef.current;

      if (phase === "typing") {
        if (charIndexRef.current < currentPhrase.length) {
          charIndexRef.current++;
          setDisplayText(currentPhrase.slice(0, charIndexRef.current));
          // velocidade ligeiramente aleatória pra dar um toque mais humano
          timerRef.current = setTimeout(tick, 60 + Math.random() * 40);
        } else {
          // terminou de digitar, segura um pouquinho
          phaseRef.current = "holding";
          timerRef.current = setTimeout(tick, 1800);
        }
      } else if (phase === "holding") {
        // começa a apagar
        phaseRef.current = "deleting";
        timerRef.current = setTimeout(tick, 30);
      } else if (phase === "deleting") {
        if (charIndexRef.current > 0) {
          charIndexRef.current--;
          setDisplayText(currentPhrase.slice(0, charIndexRef.current));
          timerRef.current = setTimeout(tick, 25 + Math.random() * 15);
        } else {
          // terminou de apagar, pausa antes da próxima frase
          phaseRef.current = "pausing";
          timerRef.current = setTimeout(tick, 600);
        }
      } else if (phase === "pausing") {
        // avança pra próxima frase
        phraseIndexRef.current = (phraseIndexRef.current + 1) % PHRASES.length;
        charIndexRef.current = 0;
        phaseRef.current = "typing";
        timerRef.current = setTimeout(tick, 100);
      }
    };

    // começa depois de um pequeno delay
    timerRef.current = setTimeout(tick, 400);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mounted, reduceMotion]);

  if (!mounted) return null;

  // se o usuário prefere menos animações, mostra o texto estático
  if (reduceMotion) {
    return (
      <span className={className}>
        INITIALIZING
      </span>
    );
  }

  return (
    <span className={className}>
      {displayText}
      <span
        className="inline-block w-[2px] h-[1em] ml-0.5 align-middle"
        style={{
          backgroundColor: showCursor ? "currentColor" : "transparent",
          transition: "background-color 0.05s",
        }}
        aria-hidden="true"
      />
    </span>
  );
}
