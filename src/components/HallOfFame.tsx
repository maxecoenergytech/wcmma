"use client";

import React, { useState } from "react";
import hallOfFameData from "@/data/hallOfFame.json";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  Award,
  ShieldCheck,
  MapPin,
  Sparkles,
  ChevronRight,
  Search,
  CheckCircle2,
} from "lucide-react";

export default function HallOfFame() {
  const [filterState, setFilterState] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredMembers = hallOfFameData.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.appointment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.districtState.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.rank.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterState === "ALL") return matchesSearch;
    if (filterState === "TRIPURA")
      return matchesSearch && member.districtState.includes("Tripura");
    if (filterState === "BARAK")
      return matchesSearch && member.districtState.includes("Barak");
    if (filterState === "ASSAM")
      return (
        matchesSearch &&
        (member.districtState.includes("Assam") ||
          member.districtState.includes("Barpeta") ||
          member.districtState.includes("Guwahati"))
      );
    return matchesSearch;
  });

  return (
    <section
      id="hall-of-fame"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#040810] via-slate-950 to-[#040810] border-b border-amber-950/40 relative overflow-hidden"
    >
      {/* Indian National Tricolor Heritage Ambient Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF671F]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#046A38]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>詠春拳 黑帶名人堂 • HALL OF FAME</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            HONORABLE BLACK BELT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              SASH HOLDERS
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Honoring the dedication, technical discipline, and regional leadership of certified Black Belt holders and senior technical instructors in the Wing Chun Martial Arts Association India.
          </p>

          {/* Quick Filter & Search Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, rank, or chapter..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs">
              <button
                onClick={() => setFilterState("ALL")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  filterState === "ALL"
                    ? "bg-amber-500 text-slate-950 shadow"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                All Leaders ({hallOfFameData.length})
              </button>
              <button
                onClick={() => setFilterState("ASSAM")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  filterState === "ASSAM"
                    ? "bg-amber-500 text-slate-950 shadow"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                Assam Chapters
              </button>
              <button
                onClick={() => setFilterState("TRIPURA")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  filterState === "TRIPURA"
                    ? "bg-amber-500 text-slate-950 shadow"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                Tripura State
              </button>
              <button
                onClick={() => setFilterState("BARAK")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  filterState === "BARAK"
                    ? "bg-amber-500 text-slate-950 shadow"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                Barak Valley
              </button>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-2xl border-2 border-slate-800 hover:border-amber-500/60 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-4">
                {/* Header: Photo & Rank Badge */}
                <div className="flex items-start gap-4">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden shrink-0 relative bg-slate-950 border border-amber-500/40 shadow-md">
                    <img
                      src={getAssetPath(member.image)}
                      alt={member.name}
                      width={160}
                      height={200}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-1 left-1 bg-slate-950/90 text-amber-400 text-[8px] font-black uppercase px-1.5 py-0.5 rounded border border-amber-500/40">
                      ★ HOF
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-700 text-[10px] font-bold text-amber-300">
                      <Award className="w-3 h-3 text-amber-400" />
                      <span>{member.rank}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-300 transition-colors leading-tight">
                      {member.name}
                    </h3>

                    <p className="text-xs font-bold text-amber-400 leading-tight">
                      {member.appointment}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                      <span>{member.districtState}</span>
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                  <strong className="text-amber-300 text-[11px] block mb-1">
                    Technical Focus:
                  </strong>
                  <span>{member.specialization}</span>
                </div>

                {/* Achievements list */}
                <div className="space-y-1.5 pt-1">
                  {member.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-1.5 text-[11px] text-slate-400"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer: Verification Link */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-slate-500">
                  Reg ID: #{member.credentialId}
                </span>

                <a
                  href={getRoutePath("#verify")}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verify Credential</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Banner: Join Technical Leadership */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-black text-white">
              Strive for Technical Excellence & Black Sash Accreditation
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              WCMAA India follows the traditional Singapore grading charter. Instructors and senior disciples undergo progressive technical evaluations under Founder President Sifu Amar Singh Deori and Founder & General Secretary Sifu Sankar Dutta.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getRoutePath("/affiliation")}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors shadow"
            >
              Instructor Pathway
            </a>
            <a
              href={getRoutePath("#verify")}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
            >
              Registry Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
