"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { identity, ctaFinal } from "@/config/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 w-full">
      <div className="max-w-3xl ml-auto mr-4 md:mr-12 text-left">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 60%, rgba(139, 92, 246, 0.06), transparent 70%)",
          }}
        />

        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-violet-400/80 mb-3">
            // Contact
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">{ctaFinal.headline}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">
            {ctaFinal.subline}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <MagneticButton
              href={identity.github}
              className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-lg hover:shadow-violet-500/25 border border-violet-500/20"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3 h-3" />
            </MagneticButton>
            <MagneticButton
              href={`mailto:${identity.email}`}
              className="glass text-text-primary hover:border-violet-500/30"
            >
              <Mail className="w-4 h-4" />
              Email
            </MagneticButton>
            <MagneticButton
              href={identity.linkedin}
              className="glass text-text-primary hover:border-violet-500/30"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </MagneticButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
