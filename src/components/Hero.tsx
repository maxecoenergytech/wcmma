import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { ShieldCheck, Calendar, MapPin, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0b1728] to-slate-950 py-16 md:py-24 border-b border-slate-800">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Overview */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* 35th Anniversary Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Award className="w-4 h-4 text-amber-400" />
              <span>35 Years of Authentic Wing Chun in India (1991–2026)</span>
            </div>

            {/* Main Federation Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Wing Chun Martial Arts Association{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                India
              </span>
            </h1>

            {/* Taglines Banner */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-bold text-amber-300 tracking-wide">
                "{ASSOCIATION_INFO.taglines.primary}"
              </p>
              <p className="text-sm uppercase tracking-widest font-semibold text-slate-400">
                {ASSOCIATION_INFO.taglines.secondary}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The premier national body fostering traditional Chinese Wing Chun Kung Fu across India.
              Affiliated with <strong>WCMAA Singapore</strong> and <strong>The World Kuoshu Federation (TWKSF)</strong>, dedicated to preserving Ip Man lineage principles, Wooden Dummy mastery, and practical self-defense education.
            </p>

            {/* Quick trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Govt. Regn. KAM/240/W/08</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Affiliated: WCMAA Singapore</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Member: TWKSF World Kuoshu</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#verify"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                <ShieldCheck className="w-5 h-5 text-slate-950" />
                Verify Member / Certificate
              </a>
              <a
                href="#event"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm hover:bg-slate-800 hover:text-white transition-all"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                35th Foundation Seminar
              </a>
              <a
                href="#branches"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-800 text-slate-300 font-medium text-sm hover:border-slate-600 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-blue-400" />
                Find a Dojo
              </a>
            </div>
          </div>

          {/* Right Column: Visual Highlight Card with Logo & Founder Images */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              {/* Gold border accent banner */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider rounded-full shadow-md">
                Official National Headquarters
              </div>

              {/* Poster / Founder Image Container */}
              <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 mb-4 group">
                <img
                  src="/assets/event_35th_foundation.jpg"
                  alt="35th Foundation Day Wing Chun Martial Arts Association India"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Upcoming National Camp
                  </span>
                  <p className="text-sm font-extrabold text-white">
                    35th Foundation Day • Bamunimaidam Bihu Mancha, Guwahati
                  </p>
                </div>
              </div>

              {/* Leadership Quick Snapshot */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <img
                    src="/assets/grandmaster_portrait.jpg"
                    alt="Founder President Amar Singh Deori"
                    className="w-12 h-12 rounded-lg object-cover ring-1 ring-amber-500/50"
                  />
                  <div>
                    <p className="text-[11px] text-amber-400 font-semibold uppercase">Founder President</p>
                    <p className="text-xs font-bold text-white">Amar Singh Deori</p>
                  </div>
                </div>

                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <img
                    src="/assets/sifu_sankar_dutta_portrait.jpg"
                    alt="General Secretary Sifu Sankar Dutta"
                    className="w-12 h-12 rounded-lg object-cover ring-1 ring-amber-500/50"
                  />
                  <div>
                    <p className="text-[11px] text-amber-400 font-semibold uppercase">General Secretary</p>
                    <p className="text-xs font-bold text-white">Sifu Sankar Dutta</p>
                  </div>
                </div>
              </div>

              {/* Bottom Self-defense banner */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">
                  ⚡ {ASSOCIATION_INFO.taglines.motto}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
