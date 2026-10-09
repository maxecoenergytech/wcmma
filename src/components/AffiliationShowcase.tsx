"use client";

import React, { useState } from "react";
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
  FileText,
  X,
} from "lucide-react";

export default function AffiliationShowcase() {
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <section id="affiliation" className="py-20 bg-gradient-to-b from-slate-950 via-[#0b172a] to-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-amber-400" />
            National Dojo Affiliation Program
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Are You a Martial Arts Academy Owner?
          </h2>
          <p className="text-amber-300 text-base sm:text-lg font-bold">
            Bring your academy into the WCMAA India network.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Elevate your martial arts school under WCMAA India's 35-year heritage framework (1991–2026). 
            Enjoy structured Wing Chun training, instructor development, standardized grading programs, and international technical association under <strong>WCMAA Singapore</strong> and <strong>TWKSF</strong>.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">35 Years of Association Heritage</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Registered under applicable framework in Assam (KAM/240/W/08 of 2005–2006) and chartered with WCMAA Singapore. Protect your students with verifiable credentials.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-amber-400 mt-4 block">✓ Verifiable Belt Credentials</span>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Comprehensive Pedagogy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Structured empty-hand forms (Siu Nim Tao to Biu Jee), 116 Wooden Dummy movements, weapons mechanics, and traditional Chi Sau sensitivity practice.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-blue-400 mt-4 block">✓ Standardized Course Manuals</span>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Territorial Considerations</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Territorial considerations may apply according to the academy affiliation policy, supporting regional training coordination in your city or zone.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-400 mt-4 block">✓ Directory Listing & Recognition</span>
          </div>

          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-colors shadow-lg">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Student Fee Retention</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No monthly royalty — subject to the applicable WCMAA India affiliation terms. Academies retain student fees according to the applicable affiliation agreement.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-purple-400 mt-4 block">✓ Transparent Affiliation Terms</span>
          </div>
        </div>

        {/* Comparison: Commercial Franchise vs WCMAA India Association Model */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl mb-16 overflow-hidden">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Association Distinction
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Why Instructors Align with the WCMAA India Network
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3 font-bold uppercase">Features & Standards</th>
                  <th className="pb-3 font-bold uppercase text-amber-400">WCMAA India Association</th>
                  <th className="pb-3 font-bold uppercase text-slate-400">Commercial Franchise Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-3.5 font-medium">Registration & Heritage</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    35-Year Heritage (Regn. KAM/240/W/08)
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    Short-lived commercial entities
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">International Affiliations</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    WCMAA Singapore & TWKSF World Kuoshu
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    Unverified internal certificates
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Monthly Royalties & Fee Retention</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    No monthly royalty per affiliation agreement
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    15% - 30% monthly revenue deductions
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Wooden Dummy (116) & Weapons Curriculum</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Structured transmission under Senior Instructors
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    Fragmented or incomplete modules
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Central Credential Registry</td>
                  <td className="py-3.5 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Online Credential Verification System
                  </td>
                  <td className="py-3.5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    No verifiable online database
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
            <h4 className="text-lg font-bold text-white">Guwahati Residency Camp</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Travel to National Headquarters in Guwahati for an intensive technical immersion with Founder President Sifu Amar Singh Deori and Founder & General Secretary Sifu Sankar Dutta.
            </p>
          </div>

          <div className="bg-slate-900/70 rounded-2xl border border-slate-800 p-6 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Pathway 2</span>
            <h4 className="text-lg font-bold text-white">Dojo Seminar Hosting</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Host a weekend technical accreditation seminar at your academy. National Senior Instructors travel to evaluate and guide your students.
            </p>
          </div>

          <div className="bg-slate-900/70 rounded-2xl border border-slate-800 p-6 space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Pathway 3</span>
            <h4 className="text-lg font-bold text-white">National Milestone Camps</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Participate in periodic National Assemblies and grading seminars (including the 35th Foundation session and upcoming technical camps).
            </p>
          </div>
        </div>

        {/* CTA Banner with Terms Modal Trigger */}
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-blue-500/10 rounded-2xl border border-amber-500/30 p-8 text-center space-y-4">
          <h3 className="text-2xl font-black text-white">
            Bring Your Academy Into the WCMAA India Network
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Benefit from structured syllabus manuals, instructor development workshops, authorized examinations, and directory listing under clear affiliation terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/affiliation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>APPLY FOR ACADEMY AFFILIATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setShowTermsModal(true)}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>View Academy Affiliation Terms</span>
            </button>
          </div>
        </div>
      </div>

      {/* Academy Affiliation Terms Modal */}
      {showTermsModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowTermsModal(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              aria-label="Close affiliation terms dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Official Framework
              </span>
              <h3 className="text-xl font-black text-white mt-0.5">
                WCMAA India Academy Affiliation Terms
              </h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
              <p>
                <strong>1. Non-Franchise Relationship:</strong> Affiliation with WCMAA India constitutes technical alignment and syllabus adherence. Affiliated academies retain institutional identity while adopting the standardized Wing Chun curriculum.
              </p>
              <p>
                <strong>2. Fee Structure & Royalties:</strong> No ongoing monthly royalty is extracted from student regular tuition fees, subject to the specific terms set out in the signed affiliation agreement. Examination fees and official certificate issuance are coordinated centrally with the Secretariat.
              </p>
              <p>
                <strong>3. Territorial Policy:</strong> Territorial considerations may apply according to local dojo density and the association's regional development guidelines to avoid student conflict.
              </p>
              <p>
                <strong>4. Instructor Grading:</strong> Head instructors must complete standardized technical orientation sessions or grading evaluations supervised by Founder President Sifu Amar Singh Deori and Founder & General Secretary Sifu Sankar Dutta.
              </p>
              <p>
                <strong>5. Inquiries & Written Draft:</strong> For a formal memorandum of understanding or specific queries regarding academy affiliation, please contact the General Secretary Desk at <strong>+91 78969 62207</strong> or email <strong>wingchun91@gmail.com</strong>.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowTermsModal(false)}
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
              >
                Close Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
