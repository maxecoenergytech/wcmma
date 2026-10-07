"use client";

import React, { useState } from "react";
import { BRANCHES } from "@/data/associationData";
import { MapPin, Phone, Clock, User, Shield, Search } from "lucide-react";

export default function BranchLocator() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBranches = BRANCHES.filter(
    (b) =>
      b.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="branches" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            All-India Training Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Authorized Training Grounds & Dojos
          </h2>
          <p className="text-slate-400 text-base">
            Train under certified instructors adhering to the official syllabus and national safety guidelines. Find your nearest approved dojo or training academy.
          </p>

          {/* Search Input */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city (e.g. Guwahati, Delhi, Kolkata)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 hover:bg-slate-900 transition-all shadow-lg group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800">
                    {branch.city}, {branch.state}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Certified Branch
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                  {branch.name}
                </h3>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Chief Instructor: <strong className="text-white">{branch.chiefInstructor}</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-400">{branch.timing}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {branch.phone}
                </a>

                <a
                  href="#join"
                  className="px-3 py-1 text-[11px] font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  Join Class
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
