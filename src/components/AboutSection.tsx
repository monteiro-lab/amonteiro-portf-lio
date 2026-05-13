"use client";

import SectionReveal from "./SectionReveal";
import { identity } from "@/config/portfolio";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 w-full">
      <div className="max-w-3xl ml-auto mr-4 md:mr-12">
        <SectionReveal>
          <div className="text-left mb-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-emerald-400/80 mb-3">
              // identidade
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* gradiente de destaque */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%)",
              }}
            />

            <div className="relative z-10 space-y-8">
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                <div className="relative shrink-0 group cursor-default">
                  {/* brilho externo sutil */}
                  <div className="absolute inset-0 rounded-2xl bg-violet-500/10 blur-xl group-hover:bg-violet-500/20 transition-colors duration-500" />
                  
                  {/* mini foto de perfil */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    {/* reflexo de vidro */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20 pointer-events-none" />
                    
                    <Image 
                      src="/images/arthur-profile-office.jpg" 
                      alt="Arthur Monteiro" 
                      fill
                      sizes="(max-width: 768px) 64px, 80px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <p className="text-lg md:text-xl text-text-primary leading-relaxed flex-1">
                  {identity.shortBio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.04]">
                <div className="space-y-2">
                  <p className="font-mono text-xs text-violet-400/80 uppercase tracking-wider">
                    Foco Principal
                  </p>
                  <p className="text-text-secondary text-sm">
                    Aplicações web full-stack com backends em Python, frontends
                    modernos e infraestrutura nativa em nuvem.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-xs text-blue-400/80 uppercase tracking-wider">
                    Abordagem
                  </p>
                  <p className="text-text-secondary text-sm">
                    Entregar sistemas reais que resolvem problemas reais. Todo projeto
                    visa a excelência e o nível de produção, desde a arquitetura até o deploy.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-xs text-cyan-400/80 uppercase tracking-wider">
                    Direção Atual
                  </p>
                  <p className="text-text-secondary text-sm">
                    Integrar capacidades de IA em fluxos de trabalho existentes:
                    LangChain, pipelines de automação e sistemas de agendamento
                    inteligente.
                  </p>
                </div>
              </div>

              {/* citação com estilo de terminal */}
              <div className="mt-8 p-4 rounded-lg bg-black/30 border border-white/[0.04] font-mono text-sm">
                <span className="text-emerald-400">arthur@lab</span>
                <span className="text-text-muted">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-text-muted">$ </span>
                <span className="text-text-secondary">
                  echo &quot;Construa sistemas relevantes. Entregue código que funciona.&quot;
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
