"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CentralAvatar from "./CentralAvatar";

export default function AvatarStage() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
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
        sTop + 100,             // 4: Entering Stack
        sTop + 400,             // 5: Parked in Stack Constellation (Center)
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
    0.8,  // Transit
    1.0,  // Stack Parked
    0.7,  // Transit
    0.5,  // About Parked
    0.5   // Contact
  ]);
  
  // Numerical X offset mapping for calc() string injection
  const desktopXOffset = useTransform(smoothScrollY, offsets, [
    0,    // Hero
    15,   // Transit
    30,   // Projects Parked (Right side)
    30,   // Transit
    0,    // Transit
    0,    // Stack Parked (Center)
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
    "-50%",   // Stack Parked
    "-30%",   // Transit
    "-20%",   // About Parked
    "-20%"    // Contact
  ]);

  // Mobile mappings (mostly clamped to center to avoid horizontal overflow)
  const mobileScale = useTransform(smoothScrollY, offsets, [
    0.8, 0.7, 0.5, 0.5, 0.6, 0.7, 0.5, 0.4, 0.4
  ]);
  const mobileX = useTransform(smoothScrollY, offsets, [
    "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%", "-50%"
  ]);
  const mobileY = useTransform(smoothScrollY, offsets, [
    "-50%", "-80%", "-100%", "-100%", "-80%", "-50%", "0%", "20%", "20%"
  ]);

  return (
    <motion.div 
      className="fixed top-1/2 left-1/2 z-40 pointer-events-none flex flex-col items-center justify-center"
      style={{
        x: isMobile ? mobileX : desktopX,
        y: isMobile ? mobileY : desktopY,
        scale: isMobile ? mobileScale : desktopScale,
      }}
    >
      <motion.div 
        className="pointer-events-auto"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.5 }}
      >
        <CentralAvatar size={300} />
      </motion.div>
      
      {/* Platform/Stage under the avatar */}
      <motion.div 
        className="absolute -bottom-16 w-96 h-24 rounded-[100%] border border-violet-500/20 bg-violet-500/5 blur-md"
        style={{ transform: "rotateX(70deg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </motion.div>
  );
}
