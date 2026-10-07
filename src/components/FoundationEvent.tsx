"use client";

import React, { useState } from "react";
import { UPCOMING_EVENT, ASSOCIATION_INFO } from "@/data/associationData";
import { Calendar, MapPin, Clock, QrCode, CheckCircle2, Ticket, ArrowRight, Sparkles } from "lucide-react";

export default function FoundationEvent() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    academy: "",
    rank: "Beginner / White Belt",
    utrNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="event" className="py-20 bg-gradient-to-b from-[#070e1b] via-slate-950 to-[#070e1b] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Historic Milestone Event
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            35th Foundation Day Celebration
          </h2>
          <p className="text-amber-400 font-bold text-base sm:text-lg">
            "{ASSOCIATION_INFO.taglines.primary}"
          </p>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
            {ASSOCIATION_INFO.taglines.secondary}
          </p>
        </div>

        {/* Main Event Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Poster & Event Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Event Poster image */}
              <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg">
                <img
                  src="/assets/event_35th_foundation.jpg"
                  alt="35th Foundation of Day Wing Chun Martial Arts Association India"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Event Metadata Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium">Date</span>
                    <p className="text-xs font-bold text-white">6th Sept 2026</p>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium">Venue</span>
                    <p className="text-xs font-bold text-white">Bamunimaidam Bihu Mancha</p>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium">Time</span>
                    <p className="text-xs font-bold text-white">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Seminar Highlights List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-400">
                  National Seminar Highlights
                </h4>
                <div className="space-y-2">
                  {UPCOMING_EVENT.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Registration Form with UPI Payment Details */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl border-2 border-amber-500/40 p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-amber-400" />
                    Seminar Delegate Pass
                  </h3>
                  <p className="text-xs text-slate-400">
                    Direct registration for students, Sifus & martial enthusiasts
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Registration Fee</span>
                  <span className="text-lg font-black text-amber-400">₹1,500</span>
                </div>
              </div>

              {submitted ? (
                <div className="bg-emerald-950/50 border border-emerald-500/50 rounded-xl p-6 text-center space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-black text-white">
                    Registration Submitted!
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your entry for the 35th Foundation Seminar has been recorded. Our coordination desk will verify your transaction reference and send your official delegate kit pass via WhatsApp / Email.
                  </p>
                  <div className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-amber-300 text-left space-y-1">
                    <p>Delegate: {formData.fullName}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Payment Ref: {formData.utrNumber || "Verified via desk"}</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs underline text-slate-400 hover:text-white"
                  >
                    Register another practitioner
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sujan Biswas"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Phone (WhatsApp) *
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
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Current Rank / Grade
                      </label>
                      <select
                        value={formData.rank}
                        onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-amber-500"
                      >
                        <option>Beginner / White Sash</option>
                        <option>Yellow / Orange Belt</option>
                        <option>Green / Blue Belt</option>
                        <option>Brown Belt</option>
                        <option>Black Belt I - III</option>
                        <option>Instructor / Sifu</option>
                        <option>Guest / Martial Arts Practitioner</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Club / Academy Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. North East Academy"
                        value={formData.academy}
                        onChange={(e) => setFormData({ ...formData, academy: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* UPI QR & Payment Info Box */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <QrCode className="w-4 h-4" />
                      UPI Payment Instructions (India)
                    </div>
                    <p className="text-xs text-slate-300">
                      Transfer <strong>₹1,500</strong> to the official association desk:
                    </p>
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-xs font-mono space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-400">UPI ID:</span>
                        <span className="text-amber-300 font-bold">{UPCOMING_EVENT.upiPayment.upiId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Beneficiary:</span>
                        <span className="text-slate-200">{UPCOMING_EVENT.upiPayment.beneficiary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Helpline:</span>
                        <span className="text-slate-200">+91 78969 62207 / 90852 96178</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Transaction UTR / Ref Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 423871928371 or GooglePay Ref"
                        value={formData.utrNumber}
                        onChange={(e) => setFormData({ ...formData, utrNumber: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    Confirm Seminar Registration
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
