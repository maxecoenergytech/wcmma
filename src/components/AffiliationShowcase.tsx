"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Globe2,
  Users2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
  Sparkles,
  Building2,
  GraduationCap,
  MapPin,
} from "lucide-react";

export default function AffiliationShowcase() {
  return (
    <section id="affiliation" className="py-20 bg-gradient-to-b from-slate-950 via-[#0b172a] to-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-amber-400" />
            National Dojo Affiliation & Sifu Accreditation Program (NDAP)
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Empower Your Academy with Official Federation Affiliation
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Elevate your martial arts school under India's 35-year government-registered federation. 
            Bridge traditional Ip Man Wing Chun, comprehensive weapon defense, and international accreditation under <strong>WCMAA Singapore</strong> and <strong>TWKSF</strong>.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">35-Year Federation Authority</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Registered under Govt. of Assam (KAM/240/W/08) and chartered with WCMAA Singapore. Protect your students from counterfeit diplomas.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-amber-400 mt-4 block">✓ Anti-Counterfeit Belt Passports</span>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Comprehensive Pedagogy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Structured empty-hand forms (Siu Nim Tao to Biu Jee), full 116 Wooden Dummy movements, stick & knife defenses, and internal Qigong breathwork.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-blue-400 mt-4 block">✓ Standardized Course Manuals</span>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">District Representation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive exclusive territorial recognition as the accredited WCMAAI Technical Instructor or District Branch in your city/zone.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-400 mt-4 block">✓ Official Directory Listing</span>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Zero Monthly Royalties</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Unlike commercial franchises charging monthly percentage royalties, WCMAAI operates on a transparent, non-profit federation charter.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-purple-400 mt-4 block">✓ 100% Student Fee Retention</span>
          </div>
        </div>

        {/* Comparison: Commercial Franchise vs WCMAA India Federation Charter */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl mb-16 overflow-hidden">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Clear Federation Advantage
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Why Instructors Choose WCMAAI Over Commercial Franchises
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3 font-bold uppercase">Features & Standards</th>
                  <th className="pb-3 font-bold uppercase text-amber-400">WCMAA India (Official Federation)</th>
                  <th className="pb-3 font-bold uppercase text-slate-400">Typical Commercial Academies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-3.5 font-medium">Govt. Legal Registration & Heritage</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    35-Year Trust (Regn. KAM/240/W/08)
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    Private commercial LLC / unregistered
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">International Accreditation</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    WCMAA Singapore & TWKSF World Kuoshu
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    Proprietary private internal certificate
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Monthly Royalties & Franchise Tax</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ZERO Monthly Royalties (100% yours)
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    15% - 30% monthly revenue cut
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Complete Wooden Dummy (116) & Weapons</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Full transmission with Sifu Sankar Dutta
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    Limited basic forms only
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Digital Verification & Anti-Counterfeit Registry</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Instant Public QR/ID Serial Database
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    No public verification portal
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Instructor Certification Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900/70 rounded-2xl border border-slate-800 p-6 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Pathway 1</span>
            <h4 className="text-lg font-bold text-white">HQ Intensive Residency</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Travel to National Headquarters in Guwahati for an intensive 5-to-7-day boot camp with Chief Instructors Amar Singh Deori and Sankar Dutta.
            </p>
          </div>

          <div className="bg-slate-900/70 rounded-2xl border border-slate-800 p-6 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Pathway 2</span>
            <h4 className="text-lg font-bold text-white">Master Visits Your City</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Host a weekend technical accreditation seminar at your own dojo. Our National Master Instructors travel to your academy to train and evaluate you and your senior students.
            </p>
          </div>

          <div className="bg-slate-900/70 rounded-2xl border border-slate-800 p-6 space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Pathway 3</span>
            <h4 className="text-lg font-bold text-white">National Foundation Camps</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Attend the annual National Foundation Seminars (such as the upcoming 35th Foundation Camp in Guwahati) for belt examinations and instructor credentialing.
            </p>
          </div>
        </div>

        {/* CTA Banner to Full Affiliation Page */}
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-blue-500/10 rounded-2xl border border-amber-500/30 p-8 text-center space-y-4">
          <h3 className="text-2xl font-black text-white">
            Ready to Affiliate Your Academy with WCMAA India?
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Review the complete technical syllabus breakdown, instructor eligibility requirements, and submit your official affiliation dossier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/affiliation"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              Explore Full Affiliation Prospectus & Apply
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
