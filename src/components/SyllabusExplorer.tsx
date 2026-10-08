"use client";

import React, { useState } from "react";
import { SYLLABUS_DATA } from "@/data/associationData";
import { BookOpen, Layers, Check, Sparkles, Star, Award, Shield } from "lucide-react";

export default function SyllabusExplorer() {
  const [selectedType, setSelectedType] = useState<string>("All");

  const categories = ["All", "Empty Hand Form", "Wooden Dummy", "Weapon", "Partner Training"];

  const filteredItems =
    selectedType === "All"
      ? SYLLABUS_DATA
      : SYLLABUS_DATA.filter((item) => item.type === selectedType);

  const getDifficulty = (type: string, level: string) => {
    if (type === "Weapon") return 5;
    if (type === "Wooden Dummy") return 4;
    if (level.includes("Advanced")) return 4;
    if (level.includes("Intermediate")) return 3;
    if (type === "Partner Training") return 3;
    return 2;
  };

  return (
    <section id="syllabus" className="py-20 bg-[#070e1b] border-b border-slate-800 relative overflow-hidden">
      {/* Background Chinese Calligraphy Watermark */}
      <div className="absolute right-4 top-10 pointer-events-none select-none text-[120px] sm:text-[180px] font-serif font-black text-amber-500/[0.02] leading-none z-0">
        詠春拳
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Standardized Technical Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The Complete Wing Chun System
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From the foundational concepts of the Centerline to master-level Wooden Dummy and bladed butterfly swords—structured progression adhering to authentic lineage standards.
          </p>

          {/* Category Filter Pills - Scrollable on mobile, centered on desktop */}
          <div className="flex items-center justify-start sm:justify-center gap-2 pt-4 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedType(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  selectedType === cat
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Syllabus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const difficulty = getDifficulty(item.type, item.level);
            return (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl border border-slate-800/90 p-6 flex flex-col justify-between hover:border-amber-500/60 hover:bg-slate-900 transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                {/* Subtle Card Accent Light */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none"></div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700 shadow-inner">
                      {item.level}
                    </span>
                    <span className="text-3xl font-serif text-slate-500/80 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                      {item.chinese}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        {item.type}
                      </span>
                      {/* Difficulty Stars */}
                      <div className="flex items-center gap-0.5" title={`Mastery Tier: ${difficulty}/5`}>
                        {[...Array(5)].map((_, sIdx) => (
                          <Star
                            key={sIdx}
                            className={`w-3 h-3 ${
                              sIdx < difficulty ? "text-amber-400 fill-amber-400" : "text-slate-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 relative z-10">
                  <p className="text-[11px] font-bold text-amber-400/90 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Key Technical Pillars:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {item.keyConcepts.map((concept, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                        <span className="font-medium">{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centerline Philosophy Box */}
        <div className="mt-14 bg-gradient-to-r from-blue-950/40 via-slate-900 to-amber-950/30 rounded-2xl border border-slate-800/90 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-4 h-4 text-amber-400" />
            Core Lineage Principles • 詠春三要
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/50">
              <h4 className="text-sm font-extrabold text-amber-300 mb-1.5">Centerline Theory (中線理論)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Control the shortest imaginary line connecting your center to the opponent's center, maximizing economy of motion and defense simultaneously.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/50">
              <h4 className="text-sm font-extrabold text-amber-300 mb-1.5">Simultaneous Defense & Strike (連消帶打)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than blocking then striking in two separate beats, Wing Chun utilizes deflection and striking in a singular unified instant.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/50">
              <h4 className="text-sm font-extrabold text-amber-300 mb-1.5">Tactile Spring Energy (彈簧勁)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Borrow the opponent's incoming brute force, yield to superior pressure, and redirect kinetic power without relying on sheer muscle weight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
