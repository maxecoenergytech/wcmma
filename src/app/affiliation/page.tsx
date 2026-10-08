"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ASSOCIATION_INFO } from "@/data/associationData";
import {
  ShieldCheck,
  Award,
  Globe2,
  Users2,
  CheckCircle2,
  FileCheck2,
  BookOpen,
  Sparkles,
  Building2,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Send,
  HelpCircle,
  Clock,
  Briefcase,
  ChevronRight,
  Shield,
  Layers,
} from "lucide-react";

export default function AffiliationPage() {
  const [formData, setFormData] = useState({
    sifuName: "",
    phone: "",
    email: "",
    academyName: "",
    city: "",
    state: "Assam",
    martialBackground: "Karate / Taekwondo Black Belt",
    yearsTeaching: "3-5 years",
    activeStudents: "25-50 students",
    preferredPathway: "Master visits our Academy",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      {/* Page Header Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a192f] to-slate-950 py-16 md:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4 text-amber-400" />
            Official Federation Prospectus • National Dojo Affiliation (NDAP)
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Affiliate Your Academy With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              WCMAA India
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Expand your existing martial arts dojo with authentic, internationally chartered <strong>Ip Man Wing Chun Kung Fu</strong>. 
            Enjoy complete pedagogical training, authorized belt examinations, and official state/national recognition under Government Registration <strong>KAM/240/W/08</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 text-xs text-slate-300">
            <span className="bg-slate-900/90 px-3.5 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Regn. No. KAM/240/W/08 OF 2005-2006
            </span>
            <span className="bg-slate-900/90 px-3.5 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-amber-400" />
              Charter: WCMAA Singapore
            </span>
            <span className="bg-slate-900/90 px-3.5 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-400" />
              Affiliated: The World Kuoshu Federation (TWKSF)
            </span>
          </div>
        </div>
      </section>

      {/* 6 Core Affiliation Benefits */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Institutional Growth & Prestige
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Why Karate, Taekwondo & Martial Arts Schools Affiliate With Us
            </h2>
            <p className="text-slate-400 text-sm">
              We empower instructors to retain senior students, offer world-class close-quarter self-defense, and operate under an esteemed national umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Prestigious National & International Accreditation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Issue authorized WCMAA India belt grading certificates and student passports backed by the Singapore Mother Chapter and The World Kuoshu Federation.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Full-Spectrum Combat Syllabus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Step-by-step master curriculum: Siu Nim Tao, Chum Kiu, Biu Jee, full 116 Wooden Dummy movements, Butterfly Swords, Long Dragon Pole, and Chi Sau sticking hands.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Online Public Verification Registry</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your academy and certified instructors will be featured on the official national portal with a verifiable serial number and anti-counterfeit verification seal.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Territorial Considerations</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Territorial considerations may apply according to the academy affiliation policy, supporting regional training coordination in your city or zone.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Annual Instructor Upgrade Camps</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Attend periodic instructor-only technical development camps led by Chief Instructor Amar Singh Deori and General Secretary Sifu Sankar Dutta.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Student Fee Retention</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No monthly royalty — subject to the applicable WCMAA India affiliation terms. Academies retain student fees according to the applicable affiliation agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Disciplinary Curriculum Modules */}
      <section className="py-20 bg-[#070e1b] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Curriculum Overview
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              The 5 Modules Taught to Affiliated Instructors
            </h2>
            <p className="text-slate-400 text-sm">
              Our training blends traditional Wing Chun purity with practical defense against modern urban threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400">MODULE 01</div>
              <h3 className="text-lg font-bold text-white">Empty-Hand Combat & Centerline Dynamics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Detailed training in Siu Nim Tao, Chum Kiu, Biu Jee, chain punching mechanics, Tan/Bong/Fook structures, and tactile reflex drills (Chi Sau & Lat Sau).
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400">MODULE 02</div>
              <h3 className="text-lg font-bold text-white">Muk Yan Jong (Wooden Dummy 116)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specialized training in the 116 wooden dummy movements directly under Sifu Sankar Dutta. Teaches angle cutting, limb conditioning, and balance disruption.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400">MODULE 03</div>
              <h3 className="text-lg font-bold text-white">Tactical Weapon & Blunt Impact Defense</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Defense against real-world street weapons: short stick/baton counters, edged blade/knife evasion, disarms, and Wing Chun butterfly sword / pole fundamentals.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400">MODULE 04</div>
              <h3 className="text-lg font-bold text-white">Anti-Grappling & Ground Recovery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                How to prevent takedowns using the rooted Yee Jee Kim Yeung Ma stance, escape clinch pressure, and rapidly regain standing posture in street self-defense scenarios.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400">MODULE 05</div>
              <h3 className="text-lg font-bold text-white">Traditional Qigong & Tendon Power</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Soft internal strength, meditative breathing, kinetic alignment, and joint recovery practices to maintain lifelong martial longevity and mental focus.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400">MODULE 06</div>
              <h3 className="text-lg font-bold text-white">Dojo Pedagogy & Class Architecture</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Learn how to structure beginner, intermediate, and advanced classes, evaluate student belt examinations, and operate safe sparring protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Eligibility Criteria */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 sm:p-10 shadow-2xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Prerequisites & Eligibility
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Who Can Apply to Become an Accredited Sifu?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                To maintain the technical integrity of the Ip Man lineage in India, candidates must satisfy at least one of the following qualifications:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Existing Black Belt / Martial Arts Instructor
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-7">
                  Holds a verified Black Belt or equivalent Dan rank in Karate, Taekwondo, Wushu, Kung Fu, Judo, Kickboxing, or MMA, with proven teaching background.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Active Martial Arts Academy Director
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-7">
                  Currently running or instructing at a registered martial arts dojo/club for a minimum of 2-3 years, seeking official Wing Chun certification.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Practicing Wing Chun Student (Senior Grade)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-7">
                  Dedicated Wing Chun practitioners of any recognized lineage who have completed empty-hand forms and wish to formalize accreditation under WCMAA India.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Legal Standing & Minimum Age
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-7">
                  Candidate must be at least 18 years of age, possess a clean criminal record, and sign the association’s code of ethical conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-[#070e1b] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              National Registration Desk
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Official Affiliation & Sifu Application Form
            </h2>
            <p className="text-slate-400 text-sm">
              Submit your academy's credentials below. Our General Secretariat will review your dossier and initiate the technical review process.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl border-2 border-amber-500/30 p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-black text-white">
                  Affiliation Dossier Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>Sifu {formData.sifuName}</strong>. Your application for <strong>{formData.academyName}</strong> ({formData.city}, {formData.state}) has been logged in the WCMAA India National Records.
                </p>
                <div className="p-4 bg-slate-950 rounded-xl max-w-md mx-auto text-xs text-left font-mono space-y-1 text-amber-300 border border-slate-800">
                  <p>Applicant: {formData.sifuName}</p>
                  <p>Academy: {formData.academyName}</p>
                  <p>Preferred Pathway: {formData.preferredPathway}</p>
                  <p>Desk Officer: General Secretary Sifu Sankar Dutta</p>
                  <p>Secretariat Phone: +91 78969 62207 / 90852 96178</p>
                </div>
                <p className="text-xs text-slate-400">
                  We will contact you via WhatsApp / Phone to schedule your preliminary technical interview.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs underline text-amber-400 hover:text-white"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Chief Instructor / Sifu Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sifu Ramesh Kumar"
                      value={formData.sifuName}
                      onChange={(e) => setFormData({ ...formData, sifuName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="instructor@academy.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Academy / Club / Dojo Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dragon Martial Arts Academy"
                      value={formData.academyName}
                      onChange={(e) => setFormData({ ...formData, academyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      City & District *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Pune, Delhi, Guwahati"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maharashtra, Assam, West Bengal"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Current Martial Rank / Art
                    </label>
                    <select
                      value={formData.martialBackground}
                      onChange={(e) => setFormData({ ...formData, martialBackground: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>Karate (Black Belt / Dan)</option>
                      <option>Taekwondo (Black Belt)</option>
                      <option>Wing Chun (Practitioner / Sifu)</option>
                      <option>Wushu / Kung Fu</option>
                      <option>Kickboxing / Muay Thai / MMA</option>
                      <option>Judo / BJJ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Teaching Experience
                    </label>
                    <select
                      value={formData.yearsTeaching}
                      onChange={(e) => setFormData({ ...formData, yearsTeaching: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>1 - 2 years</option>
                      <option>3 - 5 years</option>
                      <option>6 - 10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Active Students Count
                    </label>
                    <select
                      value={formData.activeStudents}
                      onChange={(e) => setFormData({ ...formData, activeStudents: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>10 - 25 students</option>
                      <option>25 - 50 students</option>
                      <option>50 - 100 students</option>
                      <option>100+ students</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Preferred Training Pathway
                  </label>
                  <select
                    value={formData.preferredPathway}
                    onChange={(e) => setFormData({ ...formData, preferredPathway: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>Pathway 1: Attend HQ Intensive Residency (Guwahati Secretariat)</option>
                    <option>Pathway 2: National Masters Visit Our Academy for Weekend Seminar</option>
                    <option>Pathway 3: Attend Annual National Foundation Day Seminar (6th Sept)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Additional Notes / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your martial arts background, dojo location, and specific goals with Wing Chun..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Official Affiliation Application
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
              <span>Direct Inquiries: <strong>+91 78969 62207</strong> / <strong>+91 90852 96178</strong></span>
              <span>•</span>
              <span>Email: <strong>duttasankar88@gmail.com</strong></span>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16 lg:pb-0">
        <Footer />
      </div>
      <FloatingWhatsApp />
      <MobileActionDock />
    </main>
  );
}
