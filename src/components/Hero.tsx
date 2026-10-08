"use client";

import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import WoodenDummyCanvas from "@/components/WoodenDummyCanvas";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Building2,
  ChevronRight,
  Compass,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#040810] via-[#090d18] to-[#040810] border-b border-amber-950/40">
      {/* 3D WebGL Canvas Layer (Muk Yan Jong, Cinematic Lighting & Dust Particles) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <WoodenDummyCanvas className="w-full h-full" />
      </div>

      {/* Atmospheric Overlays (Vignette & Warm Timber Shimmer) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent lg:w-3/5 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70 z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-950/20 blur-[130px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide shadow-xl backdrop-blur-md">
              <span className="text-amber-400 font-serif font-black text-sm">詠春拳</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-300 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                WING CHUN MARTIAL ARTS ASSOCIATION INDIA
              </span>
            </div>

            {/* Main Title & Anniversary Tag */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>1991 — 2026</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                35 YEARS OF{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                  WING CHUN HERITAGE
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-1">
              <p className="text-base sm:text-xl font-extrabold text-amber-300 tracking-wide font-serif">
                "{ASSOCIATION_INFO.taglines.primary}"
              </p>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400">
                {ASSOCIATION_INFO.taglines.secondary}
              </p>
            </div>

            {/* Official Description */}
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Preserving traditional Wing Chun through structured training, instructor development, academy affiliation, grading and national martial-arts programs.
            </p>

            {/* Official Credentials Summary */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Regn: KAM/240/W/08 of 2005–2006</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Charter: WCMAA Singapore</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Affiliated: TWKSF Kuoshu</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href={getRoutePath("#branches")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-sm hover:from-amber-400 hover:to-amber-500 shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users className="w-4 h-4 text-slate-950 shrink-0" />
                BEGIN YOUR WING CHUN JOURNEY
              </a>
              <a
                href={getRoutePath("/affiliation")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-bold text-sm shadow-lg shadow-red-900/30 transition-all"
              >
                <Building2 className="w-4 h-4 text-amber-300 shrink-0" />
                AFFILIATE YOUR ACADEMY
              </a>
              <a
                href={getRoutePath("#verify")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-500/60 text-slate-200 font-semibold text-xs hover:bg-slate-800 hover:text-white transition-all backdrop-blur-md"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                VERIFY CREDENTIAL
              </a>
            </div>

            {/* Professional National Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="bg-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-black text-amber-400 block">35+</span>
                <span className="text-[11px] text-slate-400 font-medium">Years Heritage</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-black text-white block">Growing</span>
                <span className="text-[11px] text-slate-400 font-medium">Practitioner Network</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-black text-white block">Dojo Hubs</span>
                <span className="text-[11px] text-slate-400 font-medium">Training Centres</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-black text-emerald-400 block">All-India</span>
                <span className="text-[11px] text-slate-400 font-medium">Training Network</span>
              </div>
            </div>
          </div>

          {/* Right Column: Historical Foundation Recap & Leadership Badge */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-sm bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 border border-amber-500/30 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                  National Secretariat
                </span>
                <span className="text-slate-400 text-[10px]">Guwahati, Assam</span>
              </div>

              {/* Event poster thumbnail */}
              <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-800 mb-3 group">
                <img
                  src={getAssetPath("/assets/event_35th_foundation.webp")}
                  alt="35th Foundation Anniversary Celebration Wing Chun Martial Arts Association India"
                  width={400}
                  height={264}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/90 text-slate-950 text-[10px] font-bold uppercase">
                    35th Anniversary Event Completed
                  </span>
                  <p className="text-xs font-bold text-white mt-1">6 September 2026 • Guwahati</p>
                </div>
              </div>

              {/* Leadership Strip */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img
                      src={getAssetPath("/assets/grandmaster_avatar.webp")}
                      alt="Sifu Amar Singh Deori"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-amber-500 object-cover object-top"
                      loading="eager"
                    />
                    <img
                      src={getAssetPath("/assets/sifu_sankar_dutta_avatar.webp")}
                      alt="Sifu Sankar Dutta"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-red-500 object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-tight text-[11px]">Executive Sifus</p>
                    <p className="text-[10px] text-slate-400">Amar Singh & Sankar Dutta</p>
                  </div>
                </div>

                <a
                  href={getRoutePath("#leadership")}
                  className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center"
                >
                  <span>Profiles</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
