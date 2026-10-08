"use client";

import React, { useState } from "react";
import { BRANCHES, BranchRecord } from "@/data/associationData";
import { getRoutePath } from "@/utils/paths";
import { MapPin, Phone, Clock, User, ChevronRight, Compass, ShieldCheck } from "lucide-react";

export default function IndiaDojoMap() {
  const [activeDojoId, setActiveDojoId] = useState<string>("ghy-hq");

  // Verified coordinates mapped onto an aesthetic stylized vector India map
  // Normalized percentage coordinates (x: 0-100%, y: 0-100%)
  const dojoPins = [
    {
      id: "ghy-hq",
      name: "Guwahati HQ & Northeast Hub",
      state: "Assam",
      x: 82, // Northeast
      y: 40,
      branchesCount: 3,
      branchRef: BRANCHES.find((b) => b.id === "ghy-hq") || BRANCHES[0],
    },
    {
      id: "delhi-ncr",
      name: "Delhi NCR Regional Dojo",
      state: "Delhi NCR",
      x: 38, // North
      y: 33,
      branchesCount: 1,
      branchRef: BRANCHES.find((b) => b.id === "delhi-ncr") || BRANCHES[0],
    },
    {
      id: "kolkata-wingchun",
      name: "Kolkata Eastern Zonal Chapter",
      state: "West Bengal",
      x: 74, // East
      y: 52,
      branchesCount: 1,
      branchRef: BRANCHES.find((b) => b.id === "kolkata-wingchun") || BRANCHES[0],
    },
    {
      id: "bangalore-wingchun",
      name: "Bengaluru Southern Academy",
      state: "Karnataka",
      x: 43, // South
      y: 78,
      branchesCount: 1,
      branchRef: BRANCHES.find((b) => b.id === "bangalore-wingchun") || BRANCHES[0],
    },
  ];

  const currentPin = dojoPins.find((p) => p.id === activeDojoId) || dojoPins[0];
  const activeBranch = currentPin.branchRef;

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            National Training Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            WCMAA India Dojo Network
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Authentic Wing Chun training across verified zonal centers and affiliated academies in India. Select a training hub to view dojo information.
          </p>
        </div>

        {/* Interactive Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Stylized Map */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 relative backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
              <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Interactive Training Hubs
              </span>
              <span className="text-amber-400 font-mono text-[11px]">Click pin to inspect</span>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[360px] sm:h-[420px] my-4 flex items-center justify-center overflow-hidden">
              {/* Stylized SVG Map of India */}
              <svg
                viewBox="0 0 500 550"
                className="w-full h-full max-h-[400px] object-contain opacity-80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized India Geography Contour */}
                <path
                  d="M170 35 L210 20 L250 50 L275 90 L300 130 L360 145 L410 135 L445 155 L470 170 L455 210 L415 220 L370 210 L350 240 L340 280 L310 320 L270 380 L230 460 L210 520 L200 480 L185 430 L160 360 L140 310 L110 260 L90 230 L110 190 L125 150 L140 100 Z"
                  fill="#0b1322"
                  stroke="#1e3a6a"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="transition-colors duration-500"
                />

                {/* Sub-continental connecting arcs */}
                <path
                  d="M190 180 Q 280 200 410 220"
                  stroke="rgba(245, 158, 11, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <path
                  d="M190 180 Q 200 320 215 430"
                  stroke="rgba(59, 130, 246, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <path
                  d="M370 285 Q 300 360 215 430"
                  stroke="rgba(16, 185, 129, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>

              {/* Interactive Pins */}
              {dojoPins.map((pin) => {
                const isSelected = activeDojoId === pin.id;
                return (
                  <button
                    key={pin.id}
                    onClick={() => setActiveDojoId(pin.id)}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 focus:outline-none z-20 ${
                      isSelected ? "scale-125 z-30" : "hover:scale-110"
                    }`}
                    title={`${pin.name} - ${pin.state}`}
                  >
                    {/* Pulsing ring when active */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-amber-400/40 animate-ping pointer-events-none"></span>
                    )}

                    <div
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-lg backdrop-blur-md transition-colors ${
                        isSelected
                          ? "bg-amber-500 border-white text-slate-950 font-black"
                          : "bg-slate-900/90 border-amber-500/60 text-amber-300 group-hover:bg-amber-500/20"
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Pin Label Tooltip */}
                    <span
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap shadow-md pointer-events-none transition-all ${
                        isSelected
                          ? "bg-amber-400 text-slate-950 font-extrabold"
                          : "bg-slate-900/90 text-slate-300 border border-slate-700 opacity-90 group-hover:opacity-100"
                      }`}
                    >
                      {pin.state}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick selector buttons below map */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800">
              {dojoPins.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveDojoId(p.id)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeDojoId === p.id
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      : "bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800/80"
                  }`}
                >
                  <p className="font-bold truncate">{p.state}</p>
                  <p className="text-[10px] opacity-75">{p.name.split(" ")[0]}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Active Dojo Inspector Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified WCMAA India Branch
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {activeBranch.name}
              </h3>
              <p className="text-xs text-amber-300 font-semibold mt-1">
                {activeBranch.city}, {activeBranch.state}
              </p>

              <div className="mt-5 space-y-3.5 text-xs text-slate-300 border-t border-b border-slate-800 py-4">
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Chief Instructor</span>
                    <strong className="text-white">{activeBranch.chiefInstructor}</strong>
                    <p className="text-[10px] text-slate-400">{activeBranch.instructorGrade}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Training Address</span>
                    <p className="text-slate-200">{activeBranch.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Schedule & Timings</span>
                    <p className="text-slate-200">{activeBranch.trainingDays}</p>
                    <p className="text-slate-400 text-[11px]">{activeBranch.timing}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Official Contact Desk</span>
                    <a
                      href={`tel:${activeBranch.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      {activeBranch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getRoutePath("#branches")}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs hover:from-amber-400 hover:to-amber-500 shadow-md transition-all"
                >
                  EXPLORE DOJO DIRECTORY
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${activeBranch.phone.replace(/[^0-9]/g, "")}?text=Hello%20WCMAA%20India,%20I%20am%20enquiring%20about%20Wing%20Chun%20training%20at%20${encodeURIComponent(activeBranch.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all"
                >
                  ENQUIRE VIA WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
