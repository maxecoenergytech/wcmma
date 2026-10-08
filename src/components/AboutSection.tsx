"use client";

import React, { useState } from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#070e1b] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Concise Professional Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-400" />
              National Martial Arts Association
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              About Wing Chun Martial Arts Association India
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Established in 1991 under the leadership of <strong>Sifu Amar Singh Deori</strong> and <strong>Sifu Sankar Dutta</strong>, the <strong>Wing Chun Martial Arts Association India (WCMAA India)</strong> is a national martial arts association dedicated to the promotion and structured teaching of traditional Wing Chun Kung Fu in India.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Registered under the applicable society/association registration framework in Assam (<em>Registration No.: KAM/240/W/08 of 2005–2006</em>) and internationally chartered with <strong>WCMAA Singapore</strong>, the association coordinates structured martial-arts education, instructor development, dojo affiliations, grading programs, and national training seminars in association with <strong>The World Kuoshu Federation (TWKSF)</strong>.
            </p>

            {/* Quick Core Activities Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Structured Education:</strong> Step-by-step empty-hand forms, Wooden Dummy, and weapon mechanics.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Instructor Development:</strong> Standardized pedagogical guidelines and technical examinations.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Academy Affiliation:</strong> Empowering martial-arts schools with official association affiliation.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <Calendar className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span><strong>Events & Grading:</strong> National training camps, referee seminars, and authorized grading sessions.</span>
              </div>
            </div>

            {/* Collapsible / Expandable Full Overview */}
            {expanded && (
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300 animate-fadeIn">
                <h4 className="font-bold text-white text-base">Association Mission & Principles</h4>
                <p className="leading-relaxed">
                  For over three decades, WCMAA India has operated on the principles of mutual respect, physical conditioning, tactical awareness, and continuous martial education. WCMAA India supports students and dojo instructors nationwide with curriculum syllabi, verifiable membership credentials, and international technical alignment.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-amber-300">
                  <span className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800">KAM/240/W/08 of 2005–2006</span>
                  <span className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800">WCMAA Singapore</span>
                  <span className="bg-slate-950 px-2.5 py-1 rounded border border-slate-800">TWKSF Kuoshu</span>
                </div>
              </div>
            )}

            {/* Read More Toggle */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
                aria-expanded={expanded}
              >
                <span>{expanded ? "Read Less" : "Read Complete Overview"}</span>
                {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <a
                href={getRoutePath("#leadership")}
                className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
              >
                View Leadership Council →
              </a>
            </div>
          </div>

          {/* Right: Official Heritage Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <img
                  src={getAssetPath("/assets/wcmaai_logo_sm.webp")}
                  alt="Wing Chun Martial Arts Association India Official Emblem"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-12 h-12 rounded-full bg-white p-1 object-contain"
                />
                <div>
                  <h3 className="font-extrabold text-white text-base">Association Heritage</h3>
                  <p className="text-xs text-amber-400 font-mono">FOUNDED 1991 • 35 YEARS</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Government Registration</strong>
                    <span>Registered under applicable framework in Assam: KAM/240/W/08 of 2005–2006</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">International Charter</strong>
                    <span>Affiliated with WCMAA Singapore</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">International Technical Association</strong>
                    <span>The World Kuoshu Federation (TWKSF)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">National Association Partner</strong>
                    <span>KUOSHU Federation of India</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">
                  National Motto
                </p>
                <p className="text-sm font-black text-amber-400">
                  "{ASSOCIATION_INFO.taglines.motto}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
