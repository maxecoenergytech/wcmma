import React from "react";
import { getRoutePath } from "@/utils/paths";
import { Users, ChevronRight, Sparkles, Shield } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#090504] via-[#150a06] to-[#040810] border-b border-amber-950/40 relative overflow-hidden text-center">
      {/* Background Wooden Hall Silhouette & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,83,9,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-950/30 blur-[130px] rounded-full pointer-events-none" />

      {/* Traditional Wooden Dummy Silhouette Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none">
        <span className="text-[260px] sm:text-[360px] font-serif font-black text-amber-500">
          木人樁
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Shield className="w-3.5 h-3.5 text-amber-400" />
          The Path of Kung Fu
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          DISCIPLINE IS THE FOUNDATION.
        </h2>

        <p className="text-amber-300 text-base sm:text-xl font-bold tracking-wide font-serif">
          Strength Through Discipline • Honor Through Tradition
        </p>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Preserving traditional Wing Chun across India through structured training, instructor development, academy affiliation, grading and martial-arts education.
        </p>

        {/* Primary Action Button */}
        <div className="pt-4 flex justify-center">
          <a
            href={getRoutePath("#branches")}
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wider uppercase shadow-2xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Users className="w-4 h-4 text-slate-950 shrink-0" />
            <span>BEGIN YOUR JOURNEY</span>
            <ChevronRight className="w-4 h-4 text-slate-950 shrink-0" />
          </a>
        </div>

        {/* Association Trust Line */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400 border-t border-amber-950/40">
          <span>Regn: KAM/240/W/08 of 2005–2006</span>
          <span className="text-amber-500/40">•</span>
          <span>WCMAA Singapore Charter</span>
          <span className="text-amber-500/40">•</span>
          <span>Affiliated: TWKSF Kuoshu</span>
        </div>
      </div>
    </section>
  );
}
