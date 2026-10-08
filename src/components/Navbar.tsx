"use client";

import React, { useState } from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import { Menu, X, ShieldCheck, Award, Phone, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-2xl">
      {/* Top Federation Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-[10px] sm:text-xs font-bold py-1.5 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-sm">
        <Award className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate sm:overflow-visible">
          Celebrating 35 Years of Wing Chun in India • Regn. {ASSOCIATION_INFO.registrationNo} • Affiliated with WCMAA Singapore & TWKSF
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Association Name */}
          <a href={getRoutePath("/")} className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full p-1 ring-2 ring-amber-500/80 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src={getAssetPath("/assets/wcmaai_logo_sm.webp")}
                alt="Wing Chun Martial Arts Association India Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain rounded-full"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-base sm:text-xl text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  WCMAA INDIA
                </span>
                <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                  詠春拳
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-tight sm:tracking-wide">
                Wing Chun Martial Arts Association India
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-semibold text-slate-200">
            <a href={getRoutePath("#about")} className="hover:text-amber-400 transition-colors">
              About & Lineage
            </a>
            <a href={getRoutePath("#leadership")} className="hover:text-amber-400 transition-colors">
              Leadership
            </a>
            <a href={getRoutePath("#syllabus")} className="hover:text-amber-400 transition-colors">
              Syllabus
            </a>
            <a href={getRoutePath("#branches")} className="hover:text-amber-400 transition-colors">
              Dojos
            </a>
            <a href={getRoutePath("#event")} className="hover:text-amber-400 transition-colors text-amber-300 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              35th Anniversary
            </a>
            <a href={getRoutePath("/affiliation")} className="hover:text-amber-400 transition-colors text-amber-300 font-bold">
              Affiliation
            </a>
            <a href={getRoutePath("#verify")} className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verify Card
            </a>
          </div>

          {/* Quick CTAs on Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+917896962207"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
              title="Call National Desk"
              aria-label="Call National Secretariat"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={getRoutePath("#verify")}
              className="px-3 py-2 text-xs uppercase tracking-wider font-bold rounded-lg border border-amber-500/60 text-amber-400 hover:bg-amber-500/10 transition-colors"
            >
              Verify ID
            </a>
            <a
              href={getRoutePath("#join")}
              className="px-3.5 py-2 text-xs uppercase tracking-wider font-extrabold rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-md transition-all hover:scale-[1.02]"
            >
              Join / Affiliate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+917896962207"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-amber-400"
              aria-label="Call Secretariat"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2.5 animate-fadeIn">
          <a
            href={getRoutePath("#about")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            About Association & Lineage
          </a>
          <a
            href={getRoutePath("#leadership")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Leadership (Sifu Amar Singh & Sifu Sankar Dutta)
          </a>
          <a
            href={getRoutePath("#syllabus")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Curriculum & Forms (Siu Nim Tao, Dummy, Weapons)
          </a>
          <a
            href={getRoutePath("#branches")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            All-India Training Grounds & Dojos
          </a>
          <a
            href={getRoutePath("#event")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-amber-400 hover:bg-slate-800"
          >
            35th Foundation Anniversary (6th Sept)
          </a>
          <a
            href={getRoutePath("/affiliation")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-amber-300 hover:bg-slate-800"
          >
            Dojo Affiliation & Sifu Certification (NDAP)
          </a>
          <a
            href={getRoutePath("#verify")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-emerald-400 hover:bg-slate-800 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            Verify Credential & ID Card
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={getRoutePath("#join")}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg bg-amber-500 font-extrabold text-slate-950 text-xs uppercase tracking-wider"
            >
              Apply for Membership / Affiliation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
