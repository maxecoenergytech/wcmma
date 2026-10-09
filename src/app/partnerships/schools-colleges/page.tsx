"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  Building2,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Users,
  Award,
} from "lucide-react";

export default function InstitutionalPartnershipsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-950 text-slate-100">
        <div className="bg-slate-900/60 border-b border-slate-800 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
            <a href={getRoutePath("/")} className="hover:text-amber-400">Home</a>
            <span>/</span>
            <span className="text-amber-400 font-semibold">School & College Partnerships</span>
          </div>
        </div>

        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                Educational & Community Sports Outreach
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                School & College Martial Arts Workshops
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Empowering educational institutions across Assam and Northeast India with non-violent martial arts demonstrations, physical literacy modules, anti-bullying awareness, and certified self-defense workshops for students and faculty.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#institutional-form"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                >
                  Submit Institutional Request
                </a>
                <a
                  href="tel:+917896962207"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
                >
                  Direct Secretariat Call: +91 78969 62207
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <Building2 className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">School Sports Camps</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Multi-day or single-day physical education camps teaching children motor coordination, discipline, and non-aggressive conflict avoidance.
              </p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">College Self-Defense Seminars</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Practical, leverage-based situational awareness and close-quarters evasion for young adults, especially tailored for campus safety.
              </p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <Award className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Faculty & Staff Wellness</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ergonomic posture correction, stress release breathwork, and martial biomechanics for teachers and administrative staff.
              </p>
            </div>
          </div>

          {/* Institutional Request Form */}
          <div id="institutional-form" className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-10 max-w-3xl mx-auto space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-black text-white">Request an Institutional Demonstration or Workshop</h2>
              <p className="text-xs text-slate-400">
                Official communication only. WCMAA India never charges online fees or requests banking credentials.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-2">
                <p className="font-bold text-emerald-400 text-sm">Institutional Inquiry Received</p>
                <p className="text-xs text-slate-300">
                  The General Secretariat will review your request and connect with your administrative office.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Institution Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Guwahati High School / City College"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">City / District *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kamrup Metro, Assam"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Coordinator / Principal Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Official Contact Person"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Official Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Phone Number"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-slate-300 font-semibold mb-1">Workshop Scope or Proposed Dates</label>
                  <textarea
                    rows={3}
                    placeholder="Brief details about proposed batch size, students' age group, or event purpose..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Official Inquiry
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <MobileActionDock />
      <FloatingWhatsApp />
    </>
  );
}
