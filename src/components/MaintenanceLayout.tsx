"use client";

import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath } from "@/utils/paths";
import {
  Wrench,
  Clock,
  PhoneCall,
  Mail,
  MessageCircle,
  MapPin,
  ShieldAlert,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function MaintenanceLayout() {
  const whatsappUrl = `https://wa.me/917896962207?text=${encodeURIComponent(
    "Namaste Sifu. I am visiting the WCMAA India website and am inquiring regarding admissions / certifications / affiliation during the scheduled maintenance period."
  )}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950 relative overflow-hidden font-sans">
      {/* Top Federation Announcement Ribbon */}
      <div>
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-[11px] sm:text-xs font-bold py-1.5 px-3 text-center tracking-wide flex items-center justify-center gap-2 shadow-sm">
          <Award className="w-3.5 h-3.5 shrink-0" />
          <span>
            Wing Chun Martial Arts Association India • Regn. {ASSOCIATION_INFO.registrationNo} • 35 Years of Heritage (1991–2026)
          </span>
        </div>
        {/* Indian National Tricolor Accent */}
        <div
          className="h-[2.5px] w-full bg-gradient-to-r from-[#FF671F] via-[#FFFFFF] to-[#046A38] opacity-90"
          aria-hidden="true"
        />
      </div>

      {/* Ambient Martial Atmosphere Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#046A38]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Main Maintenance Card Container */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="max-w-2xl w-full mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md text-center space-y-6">
          {/* Association Crest & Emblems */}
          <div className="flex items-center justify-center gap-3">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full p-1.5 ring-4 ring-amber-500/50 shadow-xl mx-auto">
              <img
                src={getAssetPath("/assets/wcmaai_logo_sm.webp")}
                alt="Wing Chun Martial Arts Association India Crest"
                width={96}
                height={96}
                className="w-full h-full object-contain rounded-full"
                loading="eager"
              />
            </div>
          </div>

          {/* Titles & Heritage Badge */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Scheduled Maintenance Notice</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              PORTAL TEMPORARILY OFFLINE
            </h1>

            <p className="text-amber-400 font-serif text-sm sm:text-base font-semibold">
              詠春拳 • Wing Chun Martial Arts Association India
            </p>
          </div>

          {/* Descriptive Notice */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Our official web portal is undergoing scheduled maintenance, technical upgrades, and system synchronization. Public services and online directory viewing will resume shortly.
          </p>

          {/* Direct Communication Channels */}
          <div className="pt-2 border-t border-slate-800 space-y-4">
            <div className="text-left bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  National Secretariat Direct Desk
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">General Secretary:</span>
                  <strong className="text-white">Sifu Sankar Dutta</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Official Helpline:</span>
                  <a
                    href="tel:+917896962207"
                    className="text-amber-400 hover:text-amber-300 font-mono font-bold"
                  >
                    +91 78969 62207
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Alternate Phone:</span>
                  <a
                    href="tel:+919085296178"
                    className="text-slate-300 hover:text-white font-mono"
                  >
                    +91 90852 96178
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Official Email:</span>
                  <a
                    href="mailto:wingchun91@gmail.com"
                    className="text-blue-400 hover:text-blue-300 font-mono truncate max-w-[220px]"
                  >
                    wingchun91@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                Contact via WhatsApp
              </a>

              <a
                href="tel:+917896962207"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                Call General Secretary
              </a>
            </div>
          </div>

          {/* Security & Authenticity Notice */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400 text-left flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-slate-300">Security Notice:</strong> WCMAA India does not collect payments, banking details, or registration fees online. For all legitimate admissions, grading verification, and affiliations, communicate exclusively through the official secretariat desk above.
            </div>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="border-t border-slate-800 bg-slate-950 py-4 px-4 text-center text-[11px] text-slate-500">
        <p>
          © 1991–2026 Wing Chun Martial Arts Association India • Regn. {ASSOCIATION_INFO.registrationNo} • All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
