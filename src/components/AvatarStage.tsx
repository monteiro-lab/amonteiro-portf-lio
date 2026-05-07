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

      // Create a 9-point scene map to hold the avatar in safe zones during sections
      // and only transition rapidly between them.
      setOffsets([
        hTop,                   // 0: Hero Center
        pTop - 100,             // 1: Leaving Hero
        pTop + 200,             // 2: Parked in Projects (Right)
        pBot - 300,             // 3: Leaving Projects
        sTop,                   // 4: Entering Stack
        sTop + 200,             // 5: Parked in Stack Constellation (Center)
        sBot - 100,             // 6: Leaving Stack
        aTop + 100,             // 7: Parked in About (Left)
        cTop                    // 8: Contact
      ]);
    };

    checkMobile();
    // Wait for DOM layout to settle
    setTimeout(updateOffsets, 150);
    window.addEventListener("resize", () => {
      checkMobile();
      updateOffsets();
    });
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

  // Track current section for avatar personality
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

  // 9-Point Mappings matching the offsets array
  // Scale mapping
  const desktopScale = useTransform(smoothScrollY, offsets, [
    1.0,  // Hero
    0.8,  // Transit
    0.6,  // Projects Parked
    0.6,  // Transit
    0.01, // Transit (Entering Stack) - Avoid 0 to prevent Framer matrix collapse
    0.01, // Stack Parked (Hidden)
    0.01, // Transit (Leaving Stack)
    0.5,  // About Parked
    0.5   // Contact
  ]);
  
  // Opacity mapping to fully hide during Stack
  const desktopOpacity = useTransform(smoothScrollY, offsets, [
    1, 1, 1, 1, 0, 0, 0, 1, 1
  ]);
  
  // Numerical X offset mapping for calc() string injection
  const desktopXOffset = useTransform(smoothScrollY, offsets, [
    0,    // Hero
    15,   // Transit
    30,   // Projects Parked (Right side)
    30,   // Transit
    0,    // Transit
    0,    // Stack Parked (Mathematically centered)
    -15,  // Transit
    -35,  // About Parked (Left side)
    -35   // Contact
  ]);
  const desktopX = useTransform(desktopXOffset, v => `calc(-50% + ${v}vw)`);
  
  // Y offset mapping (percentages of own height)
  const desktopY = useTransform(smoothScrollY, offsets, [
    "-50%",   // Hero
    "-65%",   // Transit
    "-80%",   // Projects Parked
    "-80%",   // Transit
    "-65%",   // Transit
    "-45%",   // Stack Parked (Slightly lowered to hit optical center)
    "-35%",   // Transit
    "-20%",   // About Parked
    "-20%"    // Contact
  ]);

  // Mobile mappings (mostly clamped to center to avoid horizontal overflow)
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

      {/* Contextual section label — desktop only */}
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
      
      {/* Platform/Stage under the avatar */}
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
