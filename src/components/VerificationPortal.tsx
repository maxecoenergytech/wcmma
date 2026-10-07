"use client";

import React, { useState } from "react";
import { VERIFIED_MEMBERS, MemberRecord } from "@/data/associationData";
import { getAssetPath } from "@/utils/paths";
import { ShieldCheck, Search, CheckCircle2, AlertCircle, Award, Calendar, Droplet, User, Hash, FileCheck } from "lucide-react";

export default function VerificationPortal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<MemberRecord | null>(null);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanQuery = searchQuery.trim();
    if (!cleanQuery) return;

    setSearched(true);
    const found = VERIFIED_MEMBERS.find(
      (m) =>
        m.membershipNo.toLowerCase() === cleanQuery.toLowerCase() ||
        m.name.toLowerCase().includes(cleanQuery.toLowerCase())
    );
    setResult(found || null);
  };

  const handleQuickLookup = (no: string) => {
    setSearchQuery(no);
    setSearched(true);
    const found = VERIFIED_MEMBERS.find((m) => m.membershipNo === no);
    setResult(found || null);
  };

  return (
    <section id="verify" className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            National Accreditation & Security Registry
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official Credential & Member Verification
          </h2>
          <p className="text-slate-400 text-base">
            Authenticate genuine Wing Chun practitioner credentials, instructor licenses, and belt gradings issued under Government Registration <strong>KAM/240/W/08</strong> and <strong>WCMAA Singapore</strong>.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Membership No. (e.g. 2060) or Practitioner Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
            >
              <FileCheck className="w-4 h-4" />
              Verify Now
            </button>
          </form>

          {/* Quick Click Samples */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span>Try sample numbers:</span>
            {VERIFIED_MEMBERS.map((m) => (
              <button
                key={m.membershipNo}
                type="button"
                onClick={() => handleQuickLookup(m.membershipNo)}
                className="underline hover:text-amber-400 font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
              >
                #{m.membershipNo} ({m.name.split(" ")[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Area */}
        {searched && (
          <div className="max-w-3xl mx-auto mb-14 animate-fadeIn">
            {result ? (
              <div className="space-y-6">
                {/* Official Verification Notice */}
                <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl flex items-center gap-3 text-emerald-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      Verified Official National Member
                    </h4>
                    <p className="text-xs text-emerald-300/90">
                      Record matches official WCMAAI National Archives under authority of Founder President Amar Singh Deori.
                    </p>
                  </div>
                </div>

                {/* Digital Replica of the Physical Membership Card */}
                <div className="relative bg-slate-900 border-2 border-amber-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-100">
                  {/* Watermark in background */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                    <img
                      src={getAssetPath("/assets/wcmaai_logo.png")}
                      alt="Watermark"
                      className="w-80 h-80 object-contain"
                    />
                  </div>

                  {/* Card Header matching physical card */}
                  <div className="border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <img
                          src={getAssetPath("/assets/wcmaai_logo.png")}
                          alt="WCMAA Logo"
                          className="w-12 h-12 object-contain bg-white rounded-full p-0.5"
                        />
                        <div>
                          <p className="text-[11px] font-mono tracking-widest text-amber-400 font-bold uppercase">
                            MEMBERSHIP CARD
                          </p>
                          <h3 className="text-base sm:text-lg font-black text-white tracking-wide">
                            WING CHUN MARTIAL ARTS ASSOCIATION INDIA
                          </h3>
                          <p className="text-xs font-bold text-red-500 tracking-wider">
                            WING CHUN KUNG-FU
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-[11px] font-mono text-slate-400">
                        <p>HQ: BATHOUPURI ISBT LOKHRA, GUWAHATI-35</p>
                        <p className="text-amber-300">REGN. NO. KAM/240/W/08 OF 2005-2006</p>
                        <p className="text-emerald-400 font-semibold">REGN. WCMAA SINGAPORE</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                    {/* Left: Cardholder Photo Placeholder / Avatar */}
                    <div className="flex flex-col items-center sm:items-start space-y-2">
                      <div className="w-32 h-40 bg-slate-800 rounded-lg border-2 border-slate-700 flex flex-col items-center justify-center p-2 text-center shadow-inner relative overflow-hidden">
                        <User className="w-16 h-16 text-slate-600 mb-1" />
                        <span className="text-[10px] text-slate-400 font-mono">
                          CERTIFIED HOLDER
                        </span>
                        <div className="absolute bottom-1 bg-emerald-600/90 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                          STATUS: {result.status}
                        </div>
                      </div>
                    </div>

                    {/* Middle: Member Credentials */}
                    <div className="sm:col-span-2 space-y-3 text-xs sm:text-sm font-sans">
                      <div className="grid grid-cols-3 border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400 font-medium">NAME:</span>
                        <span className="col-span-2 font-bold text-white text-base">
                          {result.name}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400 font-medium">RANK:</span>
                        <span className="col-span-2 font-extrabold text-amber-400">
                          {result.rank}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400 font-medium">MEMBERSHIP NO.:</span>
                        <span className="col-span-2 font-mono font-bold text-white">
                          {result.membershipNo}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400 font-medium">DOB:</span>
                        <span className="col-span-2 text-slate-200">{result.dob}</span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400 font-medium">BLOOD GROUP:</span>
                        <span className="col-span-2 font-bold text-red-400">{result.bloodGroup}</span>
                      </div>
                      <div className="grid grid-cols-3 border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400 font-medium">VALIDITY:</span>
                        <span className="col-span-2 text-slate-200">
                          {result.issueDate} to <strong className="text-white">{result.validUpto}</strong>
                        </span>
                      </div>
                      <div className="grid grid-cols-3">
                        <span className="text-slate-400 font-medium">BRANCH / DOJO:</span>
                        <span className="col-span-2 text-slate-200">{result.branch}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Signature & Motto */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-[11px] text-slate-500 font-mono">AUTHORIZED SIGNATORY</p>
                      <p className="font-serif italic text-amber-300 text-sm font-semibold">
                        Amar Singh Deori
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Founder President & Chief Instructor, WCMAA India
                      </p>
                    </div>

                    <div className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-bold text-amber-400 uppercase tracking-widest text-center">
                      LEARN WING CHUN KUNG FU FOR SELF DEFENSE
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-950/30 border border-red-500/40 p-6 rounded-xl flex items-start gap-3 text-red-300">
                <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base text-white">Record Not Found</h4>
                  <p className="text-xs text-red-200/90 mt-1 leading-relaxed">
                    No active membership record was found for "{searchQuery}". Please verify that the membership number is entered correctly, or contact the association administrative office at <strong>duttasankar88@gmail.com</strong> or call <strong>+91 78969 62207</strong> for manual verification.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Association Authenticity Guarantee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-sm text-white">Govt. Recognized Charter</h5>
              <p className="text-xs text-slate-400 mt-1">
                Registered under Societies Registration Act: Regn. No. KAM/240/W/08 of 2005-2006.
              </p>
            </div>
          </div>
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-sm text-white">International Lineage Seal</h5>
              <p className="text-xs text-slate-400 mt-1">
                Affiliated with WCMAA Singapore & The World Kuoshu Federation (TWKSF).
              </p>
            </div>
          </div>
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-sm text-white">Tamper-Proof Grading</h5>
              <p className="text-xs text-slate-400 mt-1">
                Centralized registry safeguarding genuine practitioners against counterfeit dojos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
