"use client";

import React, { useState, useEffect } from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import { Menu, X, ShieldCheck, Award, Phone, Compass, MapPin } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-2xl"
          : "bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/40"
      }`}
    >
      {/* Top Federation Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 text-[10px] sm:text-xs font-bold py-1.5 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-sm">
        <Award className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate sm:overflow-visible">
          Celebrating 35 Years of Wing Chun in India • Regn. {ASSOCIATION_INFO.registrationNo} • Affiliated with WCMAA Singapore & TWKSF
        </span>
      </div>

      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="hidden xl:flex items-center space-x-5 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a href={getRoutePath("/")} className="hover:text-amber-400 transition-colors">
              HOME
            </a>
            <a href={getRoutePath("#about")} className="hover:text-amber-400 transition-colors">
              ABOUT
            </a>
            <a href={getRoutePath("#syllabus")} className="hover:text-amber-400 transition-colors">
              WING CHUN
            </a>
            <a href={getRoutePath("#syllabus")} className="hover:text-amber-400 transition-colors">
              SYLLABUS
            </a>
            <a href={getRoutePath("#branches")} className="hover:text-amber-400 transition-colors">
              DOJO DIRECTORY
            </a>
            <a href={getRoutePath("#leadership")} className="hover:text-amber-400 transition-colors">
              INSTRUCTORS
            </a>
            <a href={getRoutePath("/affiliation")} className="hover:text-amber-400 transition-colors text-amber-300">
              AFFILIATIONS
            </a>
            <a href={getRoutePath("#event")} className="hover:text-amber-400 transition-colors text-amber-300">
              EVENTS
            </a>
            <a href={getRoutePath("#verify")} className="hover:text-emerald-400 transition-colors">
              VERIFY
            </a>
            <a href={getRoutePath("#join")} className="hover:text-amber-400 transition-colors">
              CONTACT
            </a>
          </div>

          {/* Quick CTAs on Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={ASSOCIATION_INFO.contacts.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
              title="Official Facebook Page"
              aria-label="Official Facebook Page"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={`tel:${ASSOCIATION_INFO.contacts.primaryPhone.replace(/[^0-9+]/g, "")}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
              title="Call National Secretariat"
              aria-label="Call National Secretariat"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={getRoutePath("#verify")}
              className="px-3 py-2 text-xs uppercase tracking-wider font-bold rounded-lg border border-amber-500/60 text-amber-400 hover:bg-amber-500/10 transition-colors"
            >
              VERIFY ID
            </a>
            <a
              href={getRoutePath("#branches")}
              className="px-4 py-2 text-xs uppercase tracking-wider font-black rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              FIND A DOJO
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={ASSOCIATION_INFO.contacts.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-[#1877F2]"
              aria-label="Official Facebook Page"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={`tel:${ASSOCIATION_INFO.contacts.primaryPhone.replace(/[^0-9+]/g, "")}`}
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
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2.5 animate-fadeIn shadow-2xl">
          <a
            href={getRoutePath("/")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            HOME
          </a>
          <a
            href={getRoutePath("#about")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            ABOUT WCMAA INDIA
          </a>
          <a
            href={getRoutePath("#syllabus")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            WING CHUN & SYLLABUS
          </a>
          <a
            href={getRoutePath("#branches")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            DOJO DIRECTORY (ALL-INDIA)
          </a>
          <a
            href={getRoutePath("#leadership")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            INSTRUCTORS & LEADERSHIP
          </a>
          <a
            href={getRoutePath("/affiliation")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-amber-300 hover:bg-slate-800"
          >
            ACADEMY AFFILIATION
          </a>
          <a
            href={getRoutePath("#event")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-amber-400 hover:bg-slate-800"
          >
            EVENTS & 35TH ANNIVERSARY
          </a>
          <a
            href={getRoutePath("#verify")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-emerald-400 hover:bg-slate-800 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            VERIFY CREDENTIAL
          </a>
          <a
            href={getRoutePath("#join")}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            CONTACT US
          </a>
          <div className="pt-2">
            <a
              href={getRoutePath("#branches")}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 font-black text-slate-950 text-xs uppercase tracking-wider shadow"
            >
              FIND A DOJO
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
