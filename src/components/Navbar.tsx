"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { Menu, X, ShieldCheck, Phone, Award } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      {/* Top Federation Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-xs font-semibold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Award className="w-3.5 h-3.5" />
        <span>
          Celebrating 35 Years of Wing Chun in India • Regn. No. {ASSOCIATION_INFO.registrationNo} • Affiliated with WCMAA Singapore & TWKSF
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Association Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 bg-white rounded-full p-1 ring-2 ring-amber-500/80 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/wcmaai_logo.png"
                alt="Wing Chun Martial Arts Association India Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  WCMAA INDIA
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                  詠春拳
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
                Wing Chun Martial Arts Association India
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-200">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About & Lineage
            </a>
            <a href="#leadership" className="hover:text-amber-400 transition-colors">
              Leadership
            </a>
            <a href="#syllabus" className="hover:text-amber-400 transition-colors">
              Syllabus
            </a>
            <a href="#branches" className="hover:text-amber-400 transition-colors">
              Branches & Sifus
            </a>
            <a href="#event" className="hover:text-amber-400 transition-colors text-amber-300 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              35th Anniversary
            </a>
            <a href="/affiliation" className="hover:text-amber-400 transition-colors font-semibold text-amber-300">
              Affiliation
            </a>
            <a href="#verify" className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verify Card
            </a>
          </div>

          {/* Quick CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#verify"
              className="px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg border border-amber-500/60 text-amber-400 hover:bg-amber-500/10 transition-colors"
            >
              Verify ID
            </a>
            <a
              href="#join"
              className="px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-md transition-all"
            >
              Join / Affiliate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            About & Lineage
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Leadership & Sifus
          </a>
          <a
            href="#syllabus"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Curriculum & Syllabus
          </a>
          <a
            href="#branches"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Branch Locator
          </a>
          <a
            href="#event"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-amber-400 hover:bg-slate-800"
          >
            35th Foundation Anniversary
          </a>
          <a
            href="/affiliation"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-amber-400 hover:bg-slate-800"
          >
            Dojo Affiliation & Sifu Certification
          </a>
          <a
            href="#verify"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-emerald-400 hover:bg-slate-800 flex items-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            Verify Credential & ID Card
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg bg-amber-500 font-bold text-slate-950 text-sm"
            >
              Apply for Membership / Affiliation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
