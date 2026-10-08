"use client";

import React, { useState } from "react";
import { SYLLABUS_DATA } from "@/data/associationData";
import {
  BookOpen,
  Layers,
  Sparkles,
  ChevronRight,
  Shield,
  Star,
  CheckCircle2,
  X,
} from "lucide-react";

export default function TrainingPathway() {
  const [showFullSyllabus, setShowFullSyllabus] = useState(false);

  const pathwaySteps = [
    {
      stage: "FOUNDATION",
      form: "SIU NIM TAO",
      chinese: "小念頭",
      subtitle: "Foundation and structure",
      description:
        "Foundational stance (Kim Yeung Ma), centerline axis, relaxed elbow energy, and proper structural alignment.",
      color: "from-amber-500/20 via-amber-500/5 to-slate-900",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      accent: "text-amber-400",
    },
    {
      stage: "MOVEMENT",
      form: "CHUM KIU",
      chinese: "尋橋",
      subtitle: "Movement and coordination",
      description:
        "Coordinated pivoting, dynamic stepping footwork, distance closing, and bridging into opponents' guard.",
      color: "from-blue-500/20 via-blue-500/5 to-slate-900",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      accent: "text-blue-400",
    },
    {
      stage: "RECOVERY",
      form: "BIU JEE",
      chinese: "鏢指",
      subtitle: "Advanced technique and recovery",
      description:
        "Emergency recovery mechanics, explosive short-range power, angle deflection, and recovering trapped positions.",
      color: "from-emerald-500/20 via-emerald-500/5 to-slate-900",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      accent: "text-emerald-400",
    },
    {
      stage: "APPARATUS",
      form: "MUK YAN JONG",
      chinese: "木人樁",
      subtitle: "Wooden dummy training",
      description:
        "116 dummy techniques refining tactile contact, limb conditioning, angle displacement, and simultaneous counter-striking.",
      color: "from-amber-600/20 via-amber-700/5 to-slate-900",
      badgeColor: "bg-amber-600/20 text-amber-300 border-amber-600/40",
      accent: "text-amber-400",
    },
    {
      stage: "MASTERY",
      form: "WEAPONS",
      chinese: "八斬刀 • 六點半棍",
      subtitle: "Baat Jaam Do & Luk Dim Boon Kwan",
      description:
        "Mastery of dual bladed butterfly knives and the 8-9 foot long dragon pole forging wrist leverage and rooted whole-body energy.",
      color: "from-red-600/20 via-red-600/5 to-slate-900",
      badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
      accent: "text-red-400",
    },
  ];

  return (
    <section id="syllabus" className="py-20 sm:py-24 bg-[#050a14] border-b border-slate-800 relative overflow-hidden">
      {/* Background Chinese Calligraphy Watermark */}
      <div className="absolute right-4 top-10 pointer-events-none select-none text-[120px] sm:text-[180px] font-serif font-black text-amber-500/[0.02] leading-none z-0">
        詠春拳
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Standardized Technical Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            THE ART OF WING CHUN
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Five core pillars of classical Wing Chun martial arts education—from empty-hand foundation to apparatus wooden dummy training and weapons mastery.
          </p>
        </div>

        {/* 5 Interactive Cards with Subtle 3D Hover Treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {pathwaySteps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className={`w-full bg-gradient-to-b ${step.color} rounded-2xl border border-slate-800 p-5 flex flex-col justify-between shadow-xl hover:border-amber-500/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 min-h-[300px] text-left group`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${step.badgeColor}`}>
                      {step.stage}
                    </span>
                    <span className="text-2xl font-serif text-slate-400 group-hover:text-amber-400 transition-colors">
                      {step.chinese}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors">
                      {step.form}
                    </h3>
                    <p className="text-[11px] font-semibold text-amber-400/90 mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-amber-400 font-bold group-hover:underline flex items-center gap-1">
                    Standardized
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Complete Syllabus CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowFullSyllabus(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <BookOpen className="w-4 h-4" />
            <span>VIEW COMPLETE SYLLABUS</span>
          </button>
        </div>

        {/* Lineage Philosophy Banner */}
        <div className="mt-12 bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="text-sm font-extrabold text-amber-400 mb-1">Centerline Theory (中線理論)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Control the shortest imaginary line connecting your center to the opponent's center, maximizing economy of motion and defensive coverage simultaneously.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-amber-400 mb-1">Simultaneous Defense & Attack (連消帶打)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than blocking then striking in two distinct counts, Wing Chun deflection and striking occur within a singular, unified action.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-amber-400 mb-1">Tactile Spring Energy (彈簧勁)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Borrow incoming force, yield under pressure, and redirect kinetic momentum without relying on brute muscular mass.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Syllabus Modal */}
      {showFullSyllabus && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setShowFullSyllabus(false)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullSyllabus(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              aria-label="Close Syllabus Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Official WCMAA India Technical Curriculum
              </span>
              <h3 className="text-2xl font-black text-white">
                Complete Wing Chun Syllabus & Grade Standards
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SYLLABUS_DATA.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {item.level}
                    </span>
                    <span className="text-xl font-serif text-slate-400">{item.chinese}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Key Pillars:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.keyConcepts.map((concept, cIdx) => (
                        <span key={cIdx} className="text-[11px] text-slate-300 bg-slate-900 px-2 py-0.5 rounded">
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-center">
              <button
                onClick={() => setShowFullSyllabus(false)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Close Syllabus View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
