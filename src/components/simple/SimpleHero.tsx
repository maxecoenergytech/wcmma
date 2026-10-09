import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function SimpleHero() {
  return (
    <section className="relative bg-slate-950 text-white border-b border-slate-800 py-10 sm:py-16 overflow-hidden">
      {/* Indian National Tricolor Atmospheric Ambient Background Glow */}
      <div className="absolute -top-12 left-1/4 w-80 h-80 bg-[#FF671F]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-12 right-1/4 w-80 h-80 bg-[#046A38]/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Clean Federation Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Traditional Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="text-amber-400 font-serif font-bold text-sm">詠春拳</span>
              <span className="text-slate-600">•</span>
              <span className="font-semibold text-slate-200">
                Wing Chun Martial Arts Association India
              </span>
            </div>

            {/* Main Title & Anniversary */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>1991 — 2026 • 35 Years Heritage</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
                35 YEARS OF{" "}
                <span className="text-amber-400">WING CHUN HERITAGE</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-1">
              <p className="text-base sm:text-lg font-bold text-amber-300 font-serif">
                "{ASSOCIATION_INFO.taglines.primary}"
              </p>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                {ASSOCIATION_INFO.taglines.secondary}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Preserving traditional Wing Chun through structured training, instructor development, academy affiliation, grading and national martial-arts programs.
            </p>

            {/* Verified Credentials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Regn: KAM/240/W/08 of 2005–2006</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Charter: WCMAA Singapore</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Affiliated: TWKSF Kuoshu</span>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href={getRoutePath("#branches")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow transition-colors"
              >
                <Users className="w-4 h-4 text-slate-950 shrink-0" />
                BEGIN YOUR WING CHUN JOURNEY
              </a>
              <a
                href={getRoutePath("/affiliation")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-red-800 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <Building2 className="w-4 h-4 text-amber-300 shrink-0" />
                AFFILIATE YOUR ACADEMY
              </a>
              <a
                href={getRoutePath("#verify")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 font-semibold text-xs transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                VERIFY CREDENTIAL
              </a>
            </div>
          </div>

          {/* Right: Clean Static Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                  National Secretariat
                </span>
                <span className="text-slate-400 text-[10px]">Guwahati, Assam</span>
              </div>

              {/* High-res authentic poster */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={getAssetPath("/assets/event_35th_foundation.webp")}
                  alt="35th Foundation Anniversary WCMAA India"
                  width={400}
                  height={264}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-950/80 backdrop-blur-sm p-2 rounded">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase block">
                    35th Anniversary Event Completed
                  </span>
                  <span className="text-xs font-semibold text-white">6 September 2026 • Guwahati, Assam</span>
                </div>
              </div>

              {/* Leadership Strip */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <img
                      src={getAssetPath("/assets/grandmaster_avatar.webp")}
                      alt="Sifu Amar Singh Deori"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-amber-500 object-cover object-top"
                    />
                    <img
                      src={getAssetPath("/assets/sifu_sankar_dutta_avatar.webp")}
                      alt="Sifu Sankar Dutta"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-red-500 object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-tight text-xs">Executive Leadership</p>
                    <p className="text-[10px] text-slate-400">Amar Singh Deori & Sankar Dutta</p>
                  </div>
                </div>

                <a
                  href={getRoutePath("#leadership")}
                  className="text-amber-400 hover:text-amber-300 font-bold text-xs flex items-center gap-1"
                >
                  <span>Profiles</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
