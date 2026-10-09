"use client";

import React, { useState, useEffect, useRef } from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Respect user reduced-motion preferences
    try {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(motionQuery.matches);

      const handleMotionChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      motionQuery.addEventListener("change", handleMotionChange);
      return () => motionQuery.removeEventListener("change", handleMotionChange);
    } catch {
      // Gracefully ignored in non-supporting browsers
    }
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#040810] via-[#090d18] to-[#040810] border-b border-amber-950/40">
      {/* Full-Width Cinematic Background Video Layer with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 1. Base Static Poster Image Fallback (Zero CLS, Instant Render) */}
        <img
          src={getAssetPath("/assets/hero_video_poster.webp")}
          alt=""
          role="presentation"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* 2. Premium HTML5 Background Video */}
        {!prefersReducedMotion && !videoFailed && (
          <video
            ref={videoRef}
            src={HERO_VIDEO_URL}
            poster={getAssetPath("/assets/hero_video_poster.webp")}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* 3. Dark Cinematic Multi-Layer Contrast & Vignette Overlays */}
        <div className="absolute inset-0 bg-slate-950/75 sm:bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-transparent to-slate-950/80" />

        {/* 4. Indian National Tricolor Atmospheric Ambient Lighting */}
        <div className="absolute -top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF671F]/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-white/[0.04] blur-[130px] rounded-full" />
        <div className="absolute -bottom-10 left-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-[#046A38]/16 blur-[140px] rounded-full" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions (Clean, Balanced & Compact) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 text-center lg:text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-slate-200 text-xs font-semibold tracking-wide shadow-xl backdrop-blur-md">
              <span className="text-amber-400 font-serif font-black text-xs sm:text-sm">詠春拳</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-300 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                WING CHUN MARTIAL ARTS ASSOCIATION INDIA
              </span>
            </div>

            {/* Main Title & Anniversary Tag */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2.5">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>1991 — 2026</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
                35 YEARS OF{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                  WING CHUN HERITAGE
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-1">
              <p className="text-sm sm:text-lg font-extrabold text-amber-300 tracking-wide font-serif">
                "{ASSOCIATION_INFO.taglines.primary}"
              </p>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-slate-400">
                {ASSOCIATION_INFO.taglines.secondary}
              </p>
            </div>

            {/* Official Description */}
            <p className="text-slate-200 text-xs sm:text-sm sm:leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
              Preserving traditional Wing Chun through structured training, instructor development, academy affiliation, grading and national martial-arts programs.
            </p>

            {/* Official Credentials Summary */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-[11px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 shadow-sm backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Regn: KAM/240/W/08 of 2005–2006</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 shadow-sm backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Charter: WCMAA Singapore</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 shadow-sm backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Affiliated: TWKSF Kuoshu</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-2">
              <a
                href={getRoutePath("#branches")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm hover:from-amber-400 hover:to-amber-500 shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users className="w-4 h-4 text-slate-950 shrink-0" />
                BEGIN YOUR WING CHUN JOURNEY
              </a>
              <a
                href={getRoutePath("/affiliation")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-900/30 transition-all"
              >
                <Building2 className="w-4 h-4 text-amber-300 shrink-0" />
                AFFILIATE YOUR ACADEMY
              </a>
              <a
                href={getRoutePath("#verify")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-500/60 text-slate-200 font-semibold text-xs hover:bg-slate-800 hover:text-white transition-all backdrop-blur-md"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                VERIFY CREDENTIAL
              </a>
            </div>

            {/* Professional National Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-lg sm:text-xl font-black text-amber-400 block">35+</span>
                <span className="text-[10px] text-slate-400 font-medium">Years Heritage</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-lg sm:text-xl font-black text-white block">Growing</span>
                <span className="text-[10px] text-slate-400 font-medium">Practitioner Network</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-lg sm:text-xl font-black text-white block">Dojo Hubs</span>
                <span className="text-[10px] text-slate-400 font-medium">Training Centres</span>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-slate-800 text-center lg:text-left">
                <span className="text-lg sm:text-xl font-black text-emerald-400 block">All-India</span>
                <span className="text-[10px] text-slate-400 font-medium">Training Network</span>
              </div>
            </div>
          </div>

          {/* Right Column: Open Showcase for 3D Wooden Dummy + Tasteful Floating Badge */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-end mt-4 lg:mt-0">
            {/* Elegant Floating Glass Badge (Does not block the 3D dummy!) */}
            <div className="w-full max-w-sm bg-slate-950/80 backdrop-blur-md border border-amber-500/30 rounded-2xl p-3.5 sm:p-4 shadow-2xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
                <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  National Secretariat
                </span>
                <span className="text-slate-400 text-[10px]">Guwahati, Assam</span>
              </div>

              {/* Event Completed Status Pill */}
              <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 text-left">
                <span className="px-2 py-0.5 rounded bg-emerald-500/90 text-slate-950 text-[9px] font-black uppercase tracking-wider inline-block mb-1">
                  35th Anniversary Event Completed
                </span>
                <p className="text-xs font-bold text-white leading-tight">
                  35th Foundation Day Celebration & Seminar
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">6 September 2026 • Guwahati, Assam</p>
              </div>

              {/* Founding Leadership Avatars */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
                  {/* Sifu Amar Singh Deori */}
                  <div className="flex items-center gap-2">
                    <img
                      src={getAssetPath("/assets/grandmaster_avatar.webp")}
                      alt="Sifu Amar Singh Deori - Founder President & Chief Instructor"
                      width={30}
                      height={30}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-amber-500 object-cover object-top shadow-md"
                      loading="eager"
                    />
                    <div className="text-left">
                      <p className="text-white font-bold leading-tight text-[10px] sm:text-[11px]">Sifu Amar Singh Deori</p>
                      <p className="text-[9px] text-amber-400 font-semibold">Founder President</p>
                    </div>
                  </div>

                  {/* Sifu Sankar Dutta */}
                  <div className="flex items-center gap-2 sm:pl-2 sm:border-l sm:border-slate-800">
                    <img
                      src={getAssetPath("/assets/sifu_sankar_dutta_avatar.webp")}
                      alt="Sifu Sankar Dutta - Founder & General Secretary"
                      width={30}
                      height={30}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-amber-500 object-cover object-top shadow-md"
                      loading="eager"
                    />
                    <div className="text-left">
                      <p className="text-white font-bold leading-tight text-[10px] sm:text-[11px]">Sifu Sankar Dutta</p>
                      <p className="text-[9px] text-amber-400 font-semibold">Founder & Gen. Secy.</p>
                    </div>
                  </div>
                </div>

                <a
                  href={getRoutePath("#leadership")}
                  className="text-[10px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-0.5 shrink-0 self-end sm:self-center"
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
