"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, CheckCircle2, Send, Database } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionReveal from "./SectionReveal";
import MagneticButton from "./MagneticButton";
import { identity, ctaFinal } from "@/config/portfolio";

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate API call to Supabase / Backend
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 px-6 w-full">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 60%, rgba(139, 92, 246, 0.06), transparent 70%)",
          }}
        />

        {/* Left Side: Contact Info */}
        <div className="flex-1 text-left w-full">
          <SectionReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-violet-400/80 mb-3">
              // Contact
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">{ctaFinal.headline}</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mb-12">
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
                href={identity.linkedin}
                className="glass text-text-primary hover:border-violet-500/30"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </MagneticButton>
              <MagneticButton
                href={`mailto:${identity.email}`}
                className="glass text-text-primary hover:border-violet-500/30"
              >
                <Mail className="w-4 h-4" />
                Email Direto
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>

        {/* Right Side: Showcase Form */}
        <div className="w-full md:w-[450px] flex-shrink-0">
          <SectionReveal delay={0.3}>
            <div className="glass-strong p-8 rounded-2xl relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500" />
              
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-emerald-400 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                  <p className="text-text-secondary text-sm">
                    Sua mensagem foi processada e salva no banco de dados. Retornarei em breve.
                  </p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="mt-6 text-xs font-mono text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                      <Send size={18} className="text-violet-400" />
                      Deixe uma mensagem
                    </h3>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-text-muted uppercase tracking-wider">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-text-muted uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-text-muted uppercase tracking-wider">Mensagem</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      placeholder="Como posso te ajudar?"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-white/20 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === "submitting"}
                    className="mt-2 w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Processando...
                      </>
                    ) : (
                      "Enviar Mensagem"
                    )}
                  </button>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-[10px] text-text-muted font-mono uppercase">
                    <Database size={12} className="text-violet-400" />
                    Simulação: Form → API Serverless → Supabase
                  </div>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
