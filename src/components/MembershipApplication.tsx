"use client";

import React, { useState } from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { UserCheck, Building, CheckCircle2, Send, PhoneCall, Mail } from "lucide-react";

export default function MembershipApplication() {
  const [tab, setTab] = useState<"individual" | "academy">("individual");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "Assam",
    experience: "None (Beginner)",
    academyName: "",
    studentsCount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-20 bg-[#070e1b] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            Admissions & National Affiliations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Join the WCMAA India Family
          </h2>
          <p className="text-slate-400 text-base">
            Whether you are a beginner seeking authentic self-defense or a martial school director seeking national federation affiliation, apply below.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl mt-4">
            <button
              onClick={() => {
                setTab("individual");
                setSubmitted(false);
              }}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                tab === "individual"
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <UserCheck className="w-4 h-4" />
              Student Enrollment
            </button>
            <button
              onClick={() => {
                setTab("academy");
                setSubmitted(false);
              }}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                tab === "academy"
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building className="w-4 h-4" />
              Academy Affiliation
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-black text-white">Application Received</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your {tab === "individual" ? "student membership" : "academy affiliation"} request has been queued at the WCMAA India National Secretariat in Guwahati.
              </p>
              <p className="text-xs text-amber-400 font-mono">
                Our General Secretary's desk will reach out on {formData.phone || "your phone"} within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs underline text-slate-400 hover:text-white pt-2 block mx-auto"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    {tab === "individual" ? "Applicant Full Name *" : "Chief Instructor / Sifu Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Contact Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    City & State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Guwahati, Assam"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {tab === "individual" ? (
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Prior Martial Arts Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option>None (Complete Beginner - Ready to Learn)</option>
                    <option>Basic Self-Defense / Fitness</option>
                    <option>Wing Chun Practitioner (Other Lineage)</option>
                    <option>Karate / Taekwondo / Wushu Background</option>
                    <option>Boxing / Kickboxing / MMA</option>
                  </select>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Academy / School Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tiger Kung Fu Academy"
                      value={formData.academyName}
                      onChange={(e) => setFormData({ ...formData, academyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Active Students Count
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 25-50 students"
                      value={formData.studentsCount}
                      onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {tab === "individual" ? "Submit Student Enrollment" : "Submit School Affiliation Request"}
                </button>
              </div>
            </form>
          )}

          {/* Direct helpline bar */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              General Secretary Desk: +91 78969 62207
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              duttasankar88@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
