"use client";

import React, { useState } from "react";
import { getRoutePath } from "@/utils/paths";
import { BookOpen, Shield, Target, Compass, Sparkles, ChevronRight } from "lucide-react";

export default function WoodenDummySection() {
  const [activePart, setActivePart] = useState<number>(0);

  const dummyFeatures = [
    {
      title: "116 Muk Yan Jong Techniques",
      chinese: "一百一十六式木人樁法",
      description:
        "The complete classical sequence teaching structural deflection, angle recovery, centerline trapping, and explosive close-range strikes.",
      icon: Target,
      highlight: "Technique Mastery",
    },
    {
      title: "Tactile Bridge & Line Sensitivity",
      chinese: "搭橋與觸覺反應",
      description:
        "The immovable solid timber arms train the practitioner never to clash force with force, but to deflect incoming kinetic energy with soft, spring-loaded structure.",
      icon: Compass,
      highlight: "Structural Alignment",
    },
    {
      title: "Leg Obstruction & Angle Stepping",
      chinese: "擺樁與絆腿步法",
      description:
        "The curved dummy leg forces the student to maintain low centerline rooted stability, evade foot jams, and execute simultaneous sweeps and inside kicks.",
      icon: Shield,
      highlight: "Rooted Footwork",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-[#120806] to-slate-950 border-b border-amber-950/40 relative overflow-hidden">
      {/* Warm Ambient Timber Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Traditional Visual Dummy Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-gradient-to-b from-[#1c0f0a] via-[#140a07] to-slate-950 border-2 border-amber-600/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-center gold-border-glow">
              {/* Emblem Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Classical Training Apparatus
              </div>

              {/* Muk Yan Jong Graphical Diagram */}
              <div className="relative my-4 flex flex-col items-center justify-center py-6">
                <div className="text-6xl sm:text-7xl font-black font-serif text-amber-400/90 tracking-widest select-none">
                  木人樁
                </div>
                <div className="w-16 h-1 bg-amber-500/60 rounded-full my-4" />
                <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-slate-200">
                  MUK YAN JONG
                </p>
                <p className="text-xs text-amber-300/80 font-mono mt-1">116 MOVEMENTS OF PRECISION</p>
              </div>

              {/* Interactive feature selector tabs */}
              <div className="mt-6 space-y-2">
                {dummyFeatures.map((f, i) => (
                  <button
                    key={f.title}
                    onClick={() => setActivePart(i)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                      activePart === i
                        ? "bg-amber-500 text-slate-950 font-black shadow-lg"
                        : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    <span className="truncate">{f.title}</span>
                    <span className="text-[10px] font-mono opacity-80">{f.highlight}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Section Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-700/40 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              Living Martial Heritage
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              TRAIN THE STRUCTURE.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                DEVELOP THE SKILL.
              </span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans">
              Traditional Wing Chun training develops structure, coordination, timing, movement, awareness and disciplined practice.
            </p>

            {/* Active Feature Detail Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1f100a]/90 to-slate-900/90 border border-amber-600/30 text-left backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-amber-900/30">
                <span className="text-sm font-bold text-amber-300">
                  {dummyFeatures[activePart].title}
                </span>
                <span className="text-xs font-serif text-slate-400">
                  {dummyFeatures[activePart].chinese}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                {dummyFeatures[activePart].description}
              </p>
            </div>

            {/* Explore Syllabus CTA */}
            <div className="pt-2">
              <a
                href={getRoutePath("#syllabus")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-sm hover:from-amber-400 hover:to-amber-500 shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                EXPLORE THE SYLLABUS
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
