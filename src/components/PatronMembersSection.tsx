"use client";

import React, { useState } from "react";
import patronMembersData from "@/data/patronMembers.json";
import { getAssetPath } from "@/utils/paths";
import {
  Users,
  Shield,
  MapPin,
  Sparkles,
  Search,
  Award,
  CheckCircle2,
  ZoomIn,
  X,
  Scale,
  Briefcase,
} from "lucide-react";

export default function PatronMembersSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalMember, setActiveModalMember] = useState<any | null>(null);

  const categories = [
    { label: "All Patrons & Council", value: "ALL" },
    { label: "National Executive", value: "National Executive" },
    { label: "Advisory & Legal", value: "Advisory & Legal" },
    { label: "District Leadership", value: "District Leadership" },
    { label: "Senior Instructors", value: "Senior Instructors" },
  ];

  const filteredMembers = patronMembersData.filter((member) => {
    const matchesCategory =
      selectedCategory === "ALL" || member.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.designation.toLowerCase().includes(query) ||
      member.districtState.toLowerCase().includes(query) ||
      member.department.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="patron-members"
      className="py-20 sm:py-24 bg-gradient-to-b from-[#060c18] via-[#040812] to-[#070e1b] border-b border-slate-800 relative overflow-hidden"
    >
      {/* Background Martial Glow Accents */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>WCMAA INDIA PATRON COUNCIL • 榮譽贊助理事會</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            PATRON MEMBERS & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
              EXECUTIVE ADVISORS
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Honoring the esteemed legal advisors, national joint secretaries, district association presidents, and senior master instructors upholding the legacy, governance, and promotion of traditional Wing Chun across India.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="pt-4 space-y-3">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, title, district, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                    selectedCategory === cat.value
                      ? "bg-amber-500 text-slate-950 font-black shadow-md scale-105"
                      : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setActiveModalMember(member)}
              className="bg-slate-900/90 rounded-2xl border border-slate-800/90 hover:border-amber-500/60 p-4 sm:p-5 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
            >
              <div className="space-y-4">
                {/* Photo Container */}
                <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden relative bg-slate-950 border border-slate-800/80 shadow-md">
                  <img
                    src={getAssetPath(member.image)}
                    alt={`${member.name} - ${member.role}`}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                    <span className="bg-slate-950/90 border border-amber-500/40 text-amber-300 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow backdrop-blur-md">
                      {member.designation}
                    </span>
                    <span className="p-1.5 rounded-lg bg-slate-950/80 text-white border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                  </div>

                  {/* Location strip on photo bottom */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 text-[11px] text-slate-300 font-medium bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800">
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">{member.districtState}</span>
                  </div>
                </div>

                {/* Member Text Info */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-400/90 leading-tight">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed pt-1">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Bottom Badges */}
              <div className="pt-3 mt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {member.badges.map((b: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-950 text-slate-300 border border-slate-800 px-2 py-0.5 rounded-md font-semibold"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <Users className="w-10 h-10 text-slate-500 mx-auto mb-2" />
            <p className="text-slate-300 text-sm font-bold">No patron members found</p>
            <p className="text-slate-500 text-xs mt-1">Try clearing your search query or selecting "All Patrons & Council"</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeModalMember && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveModalMember(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalMember(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row">
              {/* Modal Image */}
              <div className="sm:w-1/2 bg-slate-950 max-h-[50vh] sm:max-h-[60vh] flex items-center justify-center p-3 border-b sm:border-b-0 sm:border-r border-slate-800">
                <img
                  src={getAssetPath(activeModalMember.image)}
                  alt={activeModalMember.name}
                  className="max-h-[45vh] sm:max-h-[55vh] w-auto object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Modal Content */}
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>{activeModalMember.designation}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white">{activeModalMember.name}</h3>
                    <p className="text-xs font-bold text-amber-300 mt-1 leading-snug">
                      {activeModalMember.role}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span><strong>Department:</strong> {activeModalMember.department}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span><strong>Jurisdiction:</strong> {activeModalMember.districtState}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2">
                    {activeModalMember.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {activeModalMember.badges.map((b: string, i: number) => (
                    <span
                      key={i}
                      className="text-[10px] bg-slate-950 text-amber-300 border border-slate-800 px-2.5 py-1 rounded-md font-semibold"
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
