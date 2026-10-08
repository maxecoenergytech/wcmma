import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  ShieldCheck,
  Calendar,
  MapPin,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Building2,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050a12] via-[#091526] to-[#040810] py-14 sm:py-20 lg:py-24 border-b border-slate-800 martial-bg-pattern">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] lg:w-[850px] h-[350px] sm:h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Traditional Wing Chun Motto Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide shadow-lg backdrop-blur-md">
            <span className="text-amber-400 font-serif font-black text-sm">詠春拳</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-medium">
              National Martial Arts Federation
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-amber-300/90 font-serif italic text-xs">
              "來留去送，甩手直衝"
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Subheadline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>35 Years of Wing Chun Heritage in India • 1991–2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Wing Chun Martial Arts Association{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                India
              </span>
            </h1>

            {/* Subheadline & Tagline */}
            <div className="space-y-1.5">
              <p className="text-base sm:text-xl font-bold text-amber-300 tracking-wide font-serif">
                "{ASSOCIATION_INFO.taglines.primary}"
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-slate-400">
                {ASSOCIATION_INFO.taglines.secondary}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Preserving traditional Wing Chun through structured training, instructor development, academy affiliation and national martial-arts programs.
            </p>

            {/* Official Credentials Summary */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Govt. Regn. KAM/240/W/08</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Charter: WCMAA Singapore</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Affiliated: TWKSF Kuoshu</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={getRoutePath("#branches")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-sm hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users className="w-4 h-4 text-slate-950 shrink-0" />
                JOIN A DOJO
              </a>
              <a
                href={getRoutePath("/affiliation")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all"
              >
                <Building2 className="w-4 h-4 text-amber-300 shrink-0" />
                AFFILIATE YOUR ACADEMY
              </a>
              <a
                href={getRoutePath("#verify")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:text-white transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                VERIFY CREDENTIAL
              </a>
            </div>

            {/* Professional National Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-black text-amber-400 block">35+</span>
                <span className="text-[11px] text-slate-400 font-medium">Years Heritage</span>
              </div>
              <div className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-black text-white block">1,200+</span>
                <span className="text-[11px] text-slate-400 font-medium">Practitioners</span>
              </div>
              <div className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-black text-white block">40+</span>
                <span className="text-[11px] text-slate-400 font-medium">Dojos & Chapters</span>
              </div>
              <div className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-black text-emerald-400 block">All-India</span>
                <span className="text-[11px] text-slate-400 font-medium">Training Network</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Highlight Card with Poster & Leadership */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900/95 via-slate-950 to-slate-950 border-2 border-amber-500/40 rounded-2xl p-5 sm:p-6 shadow-2xl gold-border-glow">
              {/* Header Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-slate-950" />
                National Federation Secretariat
              </div>

              {/* Event Poster Container with explicit dimensions & WebP */}
              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 mb-4 group shadow-md">
                <img
                  src={getAssetPath("/assets/event_35th_foundation.webp")}
                  alt="35th Foundation Day Celebration Wing Chun Martial Arts Association India"
                  width={600}
                  height={396}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="px-2 py-0.5 rounded bg-amber-500/90 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                    Upcoming Milestone
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-white mt-1">
                    35th Foundation Day Celebration & Seminar
                  </p>
                  <p className="text-[11px] text-amber-300 font-medium">
                    6th September 2026 • Guwahati, Assam
                  </p>
                </div>
              </div>

              {/* Leadership Avatars Strip */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    <img
                      src={getAssetPath("/assets/grandmaster_avatar.webp")}
                      alt="Sifu Amar Singh Deori"
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-amber-500 object-cover object-top"
                      loading="eager"
                    />
                    <img
                      src={getAssetPath("/assets/sifu_sankar_dutta_avatar.webp")}
                      alt="Sifu Sankar Dutta"
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-2 border-blue-500 object-cover object-top"
                      loading="eager"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-tight">Executive Leadership</p>
                    <p className="text-[10px] text-slate-400">Sifu Amar Singh & Sifu Sankar Dutta</p>
                  </div>
                </div>

                <a
                  href={getRoutePath("#leadership")}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 transition-colors"
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
