import React from "react";
import { getRoutePath } from "@/utils/paths";
import { Users, Building2, Mail, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#070e1b] via-[#091526] to-[#040810] border-b border-slate-800 relative overflow-hidden text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          National Wing Chun Network
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Begin Your Wing Chun Journey
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you are a beginner, parent, martial artist or academy owner, discover structured Wing Chun training through the WCMAA India network.
        </p>

        {/* 3 Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={getRoutePath("#branches")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Users className="w-4 h-4 text-slate-950 shrink-0" />
            <span>JOIN A DOJO</span>
          </a>

          <a
            href={getRoutePath("/affiliation")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
          >
            <Building2 className="w-4 h-4 text-amber-300 shrink-0" />
            <span>AFFILIATE YOUR ACADEMY</span>
          </a>

          <a
            href={getRoutePath("#join")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-bold text-sm tracking-wide shadow-lg transition-all"
          >
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <span>CONTACT US</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
          <span>✓ Govt. Regn. KAM/240/W/08</span>
          <span>•</span>
          <span>✓ WCMAA Singapore Charter</span>
          <span>•</span>
          <span>✓ Verified National Belt Passports</span>
        </div>
      </div>
    </section>
  );
}
