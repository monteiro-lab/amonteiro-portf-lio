"use client";

import { identity } from "@/config/portfolio";

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
            AM
          </div>
          <span className="font-mono text-xs text-text-muted">
            {identity.name}
          </span>
        </div>
        <p className="font-mono text-xs text-text-muted">
          Construído com Next.js + TypeScript. Hospedado na{" "}
          <span className="text-violet-400/60">Vercel</span>.
        </p>
        <div className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
