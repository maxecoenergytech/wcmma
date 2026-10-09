"use client";

import React, { useState } from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getRoutePath } from "@/utils/paths";
import {
  UserCheck,
  Building,
  CheckCircle2,
  Send,
  PhoneCall,
  Mail,
  Users,
  Calendar,
  ShieldCheck,
  FileText,
  AlertCircle,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export default function MembershipApplication() {
  const [tab, setTab] = useState<"individual" | "academy">("individual");
  const [submitted, setSubmitted] = useState(false);
  const [agreedToRules, setAgreedToRules] = useState(false);

  // Student Enrollment State
  const [formData, setFormData] = useState({
    name: "",
    gender: "Male",
    dob: "",
    phone: "",
    email: "",
    address: "",
    city: "Guwahati",
    state: "Assam",
    trainingType: "Group Training (GT)",
    dojoCenter: "Guwahati National HQ — Bathoupuri Dojo, Borjhar",
    emergencyName: "",
    emergencyPhone: "",
    experience: "None (Complete Beginner - Ready to Learn)",
    medicalHistory: "None / Fit for physical training",
  });

  // Academy Affiliation State
  const [academyData, setAcademyData] = useState({
    chiefInstructor: "",
    academyName: "",
    phone: "",
    email: "",
    city: "",
    state: "Assam",
    studentsCount: "10-25 Students",
    currentStyle: "Wing Chun / Traditional Kung Fu",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // WhatsApp formatted string generator
  const getStudentWhatsAppUrl = () => {
    const text = `*WCMAA INDIA STUDENT ENROLLMENT APPLICATION*
---------------------------------------
*Applicant Name:* ${formData.name || "N/A"}
*Gender:* ${formData.gender}
*Date of Birth:* ${formData.dob || "N/A"}
*Phone (WhatsApp):* ${formData.phone || "N/A"}
*Email:* ${formData.email || "N/A"}
*Address / City:* ${formData.address ? formData.address + ", " : ""}${formData.city}, ${formData.state}
*Training Mode:* ${formData.trainingType}
*Preferred Dojo:* ${formData.dojoCenter}
*Emergency Contact:* ${formData.emergencyName || "N/A"} (${formData.emergencyPhone || "N/A"})
*Prior Experience:* ${formData.experience}
*Medical History:* ${formData.medicalHistory}
*Declaration:* Applicant agreed to WCMAA India code of conduct & disciplinary standards.
---------------------------------------
Submitted via official portal: https://www.wcmaaindia.com/#join`;
    return `https://wa.me/917896962207?text=${encodeURIComponent(text)}`;
  };

  const getAcademyWhatsAppUrl = () => {
    const text = `*WCMAA INDIA ACADEMY AFFILIATION REQUEST*
---------------------------------------
*Chief Instructor / Sifu:* ${academyData.chiefInstructor || "N/A"}
*Academy Name:* ${academyData.academyName || "N/A"}
*Phone (WhatsApp):* ${academyData.phone || "N/A"}
*Email:* ${academyData.email || "N/A"}
*Location:* ${academyData.city}, ${academyData.state}
*Active Students:* ${academyData.studentsCount}
*Current Style:* ${academyData.currentStyle}
*Notes/Message:* ${academyData.message || "Requesting official affiliation charter guidelines."}
---------------------------------------
Submitted via official portal: https://www.wcmaaindia.com/#join`;
    return `https://wa.me/917896962207?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="join" className="py-20 bg-[#070e1b] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            Admissions & National Affiliations
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            YOUR JOURNEY STARTS HERE.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            Whether you are discovering Wing Chun for the first time, developing your martial skills, or seeking official academy affiliation under the 35-year national lineage, submit your enrollment below.
          </p>

          {/* 3 Prominent Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={getRoutePath("#branches")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-xs hover:bg-amber-400 shadow-md transition-all"
            >
              <Users className="w-4 h-4 text-slate-950" />
              FIND A DOJO
            </a>
            <a
              href={getRoutePath("/affiliation")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all"
            >
              <Building className="w-4 h-4 text-amber-400" />
              AFFILIATE YOUR ACADEMY
            </a>
            <a
              href={`tel:${ASSOCIATION_INFO.contacts.primaryPhone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              CONTACT WCMAA INDIA
            </a>
          </div>

          {/* Toggle Tab */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl mt-6 shadow-inner">
            <button
              onClick={() => {
                setTab("individual");
                setSubmitted(false);
              }}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                tab === "individual"
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <UserCheck className="w-4 h-4" />
              Student Enrollment Form
            </button>
            <button
              onClick={() => {
                setTab("academy");
                setSubmitted(false);
              }}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                tab === "academy"
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building className="w-4 h-4" />
              Academy Affiliation Form
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                  WCMAA INDIA ADMISSION DESK
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Application Queued Successfully
                </h3>
              </div>

              <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{tab === "individual" ? formData.name : academyData.chiefInstructor}</strong>. Your {tab === "individual" ? "student enrollment application" : "academy affiliation charter inquiry"} has been logged at the National Secretariat in Guwahati, Assam.
              </p>

              {/* Direct WhatsApp Action for Instant Delivery */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 max-w-lg mx-auto text-left space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">Fast-Track Processing via WhatsApp:</strong> You can forward your pre-formatted application directly to General Secretary <strong>Sifu Sankar Dutta</strong> for immediate review and schedule assignment.
                  </div>
                </div>

                <a
                  href={tab === "individual" ? getStudentWhatsAppUrl() : getAcademyWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  Forward Application on WhatsApp (+91 78969 62207)
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs underline text-slate-400 hover:text-white"
                >
                  Submit another enrollment or modify details
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Individual Student Enrollment Form */}
              {tab === "individual" && (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                  {/* Section Title */}
                  <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-black text-white flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-amber-400" />
                        Official Student Enrollment Form
                      </h3>
                      <p className="text-xs text-slate-400">
                        All-India Wing Chun Martial Arts Association (Affiliated to WCMAA Singapore & TWKSF)
                      </p>
                    </div>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold">
                      Session 2026
                    </span>
                  </div>

                  {/* 1. Personal Information */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>1. Applicant Personal Details</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Applicant Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Gender / Sex *
                        </label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1 flex items-center justify-between">
                          <span>Date of Birth *</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                        <span className="text-[10px] text-slate-500 block mt-1">Minors &lt;18 require guardian consent</span>
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

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Residential Address (Street / Area)
                        </label>
                        <input
                          type="text"
                          placeholder="House No, Street, Landmark"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
                          placeholder="Guwahati, Assam"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2. Training Preference & Dojo Center */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>2. Training Mode & Preferred Dojo Center</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Training Mode / Program *
                        </label>
                        <select
                          value={formData.trainingType}
                          onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                        >
                          <option value="Group Training (GT)">Group Training (GT) — Regular Batch</option>
                          <option value="Personal Training (PT)">Personal Training (PT) — 1-on-1 Sifu Instruction</option>
                          <option value="Foundation 3-Month Course">Foundation 3-Month Certificate Course</option>
                          <option value="Weekend Masterclass / Seminar">Weekend Masterclass / Intensive Seminar</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Preferred Dojo Center *
                        </label>
                        <select
                          value={formData.dojoCenter}
                          onChange={(e) => setFormData({ ...formData, dojoCenter: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
                        >
                          <option value="Guwahati National HQ — Bathoupuri Dojo, Borjhar">
                            Guwahati National HQ — Bathoupuri Dojo, Borjhar
                          </option>
                          <option value="Beltola Ground Northeast Academy, Guwahati">
                            Beltola Ground Northeast Academy, Guwahati
                          </option>
                          <option value="Bamunimaidam Training Dojo, Guwahati">
                            Bamunimaidam Training Dojo, Guwahati
                          </option>
                          <option value="Kolkata Eastern Zonal Chapter, West Bengal">
                            Kolkata Eastern Zonal Chapter, West Bengal
                          </option>
                          <option value="Delhi NCR Northern Regional Center">
                            Delhi NCR Northern Regional Center
                          </option>
                          <option value="Bengaluru Southern Academy, Karnataka">
                            Bengaluru Southern Academy, Karnataka
                          </option>
                          <option value="Barak Valley Zonal Center, Silchar">
                            Barak Valley Zonal Center, Silchar
                          </option>
                          <option value="Barpeta District Training Chapter">
                            Barpeta District Training Chapter
                          </option>
                          <option value="Agartala, Tripura State Training Center">
                            Agartala, Tripura State Training Center
                          </option>
                          <option value="Distance Learning / Online Foundation">
                            Distance Learning / Online Foundation Curriculum
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* 3. Emergency Contact & Health */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>3. Emergency Contact & Health Declaration</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Emergency Contact Person Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Parent / Spouse / Guardian Name"
                          value={formData.emergencyName}
                          onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Emergency Contact Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.emergencyPhone}
                          onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Prior Martial Arts Background
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                        >
                          <option value="None (Complete Beginner - Ready to Learn)">None (Complete Beginner - Ready to Learn)</option>
                          <option value="Basic Self-Defense / Fitness">Basic Self-Defense / Fitness</option>
                          <option value="Wing Chun Practitioner (Other Lineage)">Wing Chun Practitioner (Other Lineage)</option>
                          <option value="Karate / Taekwondo / Wushu Background">Karate / Taekwondo / Wushu Background</option>
                          <option value="Boxing / Kickboxing / MMA">Boxing / Kickboxing / MMA</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                          Medical History / Physical Limitations
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. None / Asthma / Past knee surgery"
                          value={formData.medicalHistory}
                          onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Required Physical Documents Callout */}
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                    <FileText className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-amber-300">Mandatory Physical Verification at First Session:</strong>
                      <span className="block mt-0.5 text-slate-400">
                        Please bring <strong>2 passport-size photographs</strong> and <strong>1 Government photo ID copy</strong> (Aadhaar / Voter ID / Passport) when reporting to the dojo for in-person authentication and sash registration.
                      </span>
                    </div>
                  </div>

                  {/* Code of Conduct Agreement Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="conductAgree"
                      required
                      checked={agreedToRules}
                      onChange={(e) => setAgreedToRules(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500 bg-slate-950"
                    />
                    <label htmlFor="conductAgree" className="text-xs text-slate-300 leading-relaxed cursor-pointer select-none">
                      I declare that all information supplied is authentic. I agree to abide by the disciplinary standards, martial code of honor, and training safety guidelines of the <strong>Wing Chun Martial Arts Association India</strong>.
                    </label>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      disabled={!agreedToRules}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Student Enrollment
                    </button>

                    <a
                      href={getStudentWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs tracking-wide border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Direct WhatsApp Enrollment
                    </a>
                  </div>
                </form>
              )}

              {/* Academy Affiliation Form */}
              {tab === "academy" && (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                  <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-black text-white flex items-center gap-2">
                        <Building className="w-5 h-5 text-amber-400" />
                        Academy & Instructor Affiliation Form
                      </h3>
                      <p className="text-xs text-slate-400">
                        Join the national federation network with official charter and international recognition.
                      </p>
                    </div>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold">
                      National Charter
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Chief Instructor / Sifu Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sifu Amit Sen"
                        value={academyData.chiefInstructor}
                        onChange={(e) => setAcademyData({ ...academyData, chiefInstructor: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Academy / School Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Northeast Martial Arts Academy"
                        value={academyData.academyName}
                        onChange={(e) => setAcademyData({ ...academyData, academyName: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Contact Phone (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={academyData.phone}
                        onChange={(e) => setAcademyData({ ...academyData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="academy@domain.com"
                        value={academyData.email}
                        onChange={(e) => setAcademyData({ ...academyData, email: e.target.value })}
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
                        placeholder="e.g. Siliguri, West Bengal"
                        value={academyData.city}
                        onChange={(e) => setAcademyData({ ...academyData, city: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Active Students Count
                      </label>
                      <select
                        value={academyData.studentsCount}
                        onChange={(e) => setAcademyData({ ...academyData, studentsCount: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="1-15 Students">1 - 15 Students</option>
                        <option value="15-30 Students">15 - 30 Students</option>
                        <option value="30-60 Students">30 - 60 Students</option>
                        <option value="60-100+ Students">60 - 100+ Students</option>
                        <option value="New Startup Dojo">New Startup Dojo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Current Martial Arts Style / Lineage
                      </label>
                      <input
                        type="text"
                        placeholder="Wing Chun / Kung Fu / Mixed Striking"
                        value={academyData.currentStyle}
                        onChange={(e) => setAcademyData({ ...academyData, currentStyle: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Affiliation Objectives / Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your dojo, current certifications, and expectations from WCMAA India affiliation..."
                      value={academyData.message}
                      onChange={(e) => setAcademyData({ ...academyData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Affiliation Charter Request
                    </button>

                    <a
                      href={getAcademyWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs tracking-wide border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Direct WhatsApp Inquiry
                    </a>
                  </div>
                </form>
              )}
            </>
          )}

          {/* Direct helpline bar */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              General Secretary Desk: +91 78969 62207
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              wingchun91@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
