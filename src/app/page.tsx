"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroGate from "@/components/IntroGate";
import AnimatedBackground from "@/components/AnimatedBackground";
import AvatarStage from "@/components/AvatarStage";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import StackConstellation from "@/components/StackConstellation";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {/* Intro Gate */}
      {!entered && <IntroGate onEnter={() => setEntered(true)} />}

      {/* Main Portfolio */}
      <AnimatePresence>
        {entered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <AnimatedBackground />
            
            <AvatarStage />
            <Navbar />
            <main className="relative z-10 w-full overflow-hidden">
              <HeroSection />
              <ProjectShowcase />
              <StackConstellation />
              <AboutSection />
              <JourneySection />
              <GitHubSection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
