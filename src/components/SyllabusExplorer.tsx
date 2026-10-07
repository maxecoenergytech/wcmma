"use client";

import React, { useState } from "react";
import { SYLLABUS_DATA } from "@/data/associationData";
import { BookOpen, Layers, Check, Sparkles } from "lucide-react";

export default function SyllabusExplorer() {
  const [selectedType, setSelectedType] = useState<string>("All");

  const categories = ["All", "Empty Hand Form", "Wooden Dummy", "Weapon", "Partner Training"];

  const filteredItems =
    selectedType === "All"
      ? SYLLABUS_DATA
      : SYLLABUS_DATA.filter((item) => item.type === selectedType);

  return (
    <section id="syllabus" className="py-20 bg-[#070e1b] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Standardized Technical Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Complete Wing Chun System
          </h2>
          <p className="text-slate-400 text-base">
            From the foundational concepts of the Centerline to master-level Wooden Dummy and bladed butterfly swords—structured progression adhering to authentic lineage standards.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedType(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedType === cat
                    ? "bg-amber-500 text-slate-950 shadow-md scale-105"
                    : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Syllabus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                    {item.level}
                  </span>
                  <span className="text-2xl font-serif text-slate-400 group-hover:text-amber-400 transition-colors">
                    {item.chinese}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Key Technical Pillars:
                </p>
                <div className="grid grid-cols-1 gap-1.5">
                  {item.keyConcepts.map((concept, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centerline Philosophy Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-950/40 via-slate-900 to-amber-950/30 rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="text-base font-extrabold text-amber-400 mb-1">Centerline Theory (中線理論)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Control the shortest imaginary line connecting your center to the opponent's center, maximizing economy of motion and defense simultaneously.
              </p>
            </div>
            <div>
              <h4 className="text-base font-extrabold text-amber-400 mb-1">Simultaneous Defense & Attack (連消帶打)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than blocking then striking in two motions, Wing Chun utilizes deflection and striking in a singular unified instant.
              </p>
            </div>
            <div>
              <h4 className="text-base font-extrabold text-amber-400 mb-1">Tactile Spring Energy (彈簧勁)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Borrow the opponent's incoming brute force, yield to superior pressure, and redirect kinetic power without relying on pure muscular strength.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
