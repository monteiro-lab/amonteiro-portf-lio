"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import CentralAvatar from "./CentralAvatar";

const SECTION_LABELS: Record<string, string> = {
  hero: "",
  projects: "ANALYZING BUILDS",
  stack: "STACK SYNC",
  about: "SYSTEMS ONLINE",
  journey: "LOADING HISTORY",
  github: "SOURCE INDEX",
  contact: "READY TO CONNECT",
};

export default function AvatarStage() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");
  const [offsets, setOffsets] = useState([0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const updateOffsets = () => {
      const hero = document.getElementById("hero");
      const projects = document.getElementById("projects");
      const stack = document.getElementById("stack");
      const about = document.getElementById("about");
      const contact = document.getElementById("contact");

      const hTop = hero?.offsetTop || 0;
      
      const pTop = projects?.offsetTop || 800;
      const pBot = pTop + (projects?.offsetHeight || 800);
      
      const sTop = stack?.offsetTop || 1600;
      const sBot = sTop + (stack?.offsetHeight || 800);
      
      const aTop = about?.offsetTop || 2400;
      const cTop = contact?.offsetTop || 3200;

      // cria um mapa de 9 pontos pra manter o avatar em áreas seguras durante as seções
      // e fazer transições rápidas entre elas.
      setOffsets([
        hTop,                   // 0: no centro do hero
        pTop - 100,             // 1: saindo do hero
        pTop + 200,             // 2: na seção de projetos (direita)
        pBot - 300,             // 3: saindo de projetos
        sTop,                   // 4: entrando na stack
        sTop + 200,             // 5: no centro da constelação (escondido)
        sBot - 100,             // 6: saindo da stack
        aTop + 100,             // 7: na seção sobre mim (esquerda)
        cTop                    // 8: contato
      ]);
    };

    checkMobile();
    // aguarda o DOM terminar o layout
    setTimeout(updateOffsets, 150);
    window.addEventListener("resize", () => {
      checkMobile();
      updateOffsets();
    });
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

  // acompanha a seção atual pra mudar a expressão/personalidade do avatar
  useEffect(() => {
    const sectionIds = ["contact", "github", "journey", "about", "stack", "projects", "hero"];
    
    const onScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 300) {
          setCurrentSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 1
  });

  // mapeamento dos 9 pontos casando com o array de offsets
  // escala do avatar
  const desktopScale = useTransform(smoothScrollY, offsets, [
    1.0,  // hero
    0.8,  // transição
    0.6,  // projetos
    0.6,  // transição
    0.01, // entrando na stack (evitando 0 pra não quebrar a matriz do framer)
    0.01, // stack (escondido)
    0.01, // saindo da stack
    0.5,  // sobre
    0.5   // contato
  ]);
  
  // opacidade pra sumir com o avatar durante a stack
  const desktopOpacity = useTransform(smoothScrollY, offsets, [
    1, 1, 1, 1, 0, 0, 0, 1, 1
  ]);
  
  // deslocamento numérico no eixo x pra jogar no calc() do css
  const desktopXOffset = useTransform(smoothScrollY, offsets, [
    0,    // hero
    15,   // transição
    30,   // projetos (fica na direita)
    30,   // transição
    0,    // transição
    0,    // stack (meio da tela matematicamente)
    -15,  // transição
    -35,  // sobre (fica na esquerda)
    -35   // contato
  ]);
  const desktopX = useTransform(desktopXOffset, v => `calc(-50% + ${v}vw)`);
  
  // deslocamento no eixo y (porcentagens baseadas na própria altura)
  const desktopY = useTransform(smoothScrollY, offsets, [
    "-50%",   // hero
    "-65%",   // transição
    "-80%",   // projetos
    "-80%",   // transição
    "-65%",   // transição
    "-45%",   // stack (um pouco mais baixo pro centro ótico)
    "-35%",   // transição
    "-20%",   // sobre
    "-20%"    // contato
  ]);

  // animações no mobile (na maioria cravadas no meio pra não quebrar a barra de rolagem lateral)
  const mobileScale = useTransform(smoothScrollY, offsets, [
    0.8, 0.7, 0.5, 0.5, 0.01, 0.01, 0.01, 0.4, 0.4
  ]);
  const mobileOpacity = useTransform(smoothScrollY, offsets, [
    1, 1, 1, 1, 0, 0, 0, 1, 1
  ]);
  const mobileX = useTransform(smoothScrollY, offsets, [
    "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%"
  ]);
  const mobileY = useTransform(smoothScrollY, offsets, [
    "-50%", "-80%", "-100%", "-100%", "-80%", "-50%", "0%", "20%", "20%"
  ]);

  const label = SECTION_LABELS[currentSection] || "";

  return (
    <motion.div 
      id="avatar-stage"
      className="fixed top-1/2 left-1/2 z-40 pointer-events-none flex flex-col items-center justify-center"
      style={{
        x: isMobile ? mobileX : desktopX,
        y: isMobile ? mobileY : desktopY,
        scale: isMobile ? mobileScale : desktopScale,
        opacity: isMobile ? mobileOpacity : desktopOpacity,
      }}
    >
      <motion.div 
        className="pointer-events-auto"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
      >
        <CentralAvatar size={300} section={currentSection} />
      </motion.div>

      {/* label contextual da seção (só no desktop) */}
      {!isMobile && (
        <AnimatePresence mode="wait">
          {label && (
            <motion.div
              key={label}
              className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-text-muted/60 select-none"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      )}
      
      {/* plataforma/palco embaixo do avatar */}
      <motion.div 
        className="absolute -bottom-16 w-96 h-24 rounded-[100%] border border-violet-500/20 bg-violet-500/5 blur-md"
        style={{ 
          transform: "rotateX(70deg)",
          opacity: isMobile ? mobileOpacity : desktopOpacity 
        }}
      />
    </motion.div>
  );
}
