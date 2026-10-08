"use client";

import React, { useState } from "react";
import { VERIFIED_MEMBERS, MemberRecord, ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath } from "@/utils/paths";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  Award,
  FileCheck,
  Printer,
  Sparkles,
  User,
  Building,
  Info,
} from "lucide-react";

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="verify" className="py-16 sm:py-24 bg-[#050a12] border-b border-slate-800 martial-bg-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Registry Verification
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Official Credential Verification
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Verify a WCMAA India membership or certificate using the official credential number.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Enter Certificate / Membership ID (e.g. 2060)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm tracking-wider uppercase shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <FileCheck className="w-4 h-4 text-slate-950" />
              <span>VERIFY</span>
            </button>
          </form>

          {/* Test / Sample Queries Strip with DEMO label */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="text-[11px] text-slate-400 font-medium">Sample Queries:</span>
            <button
              type="button"
              onClick={() => handleQuickLookup("2060")}
              className="underline hover:text-amber-400 font-mono text-slate-300 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 transition-colors text-[11px]"
            >
              #2060 (Active Credential)
            </button>
            <button
              type="button"
              onClick={() => handleQuickLookup("DEMO-101")}
              className="underline hover:text-amber-400 font-mono text-amber-300 bg-slate-900 px-2.5 py-1 rounded-md border border-amber-500/30 transition-colors text-[11px]"
            >
              #DEMO-101 (Demo Sample)
            </button>
          </div>
        </div>

        {/* Search Results Area */}
        {searched && (
          <div className="max-w-2xl mx-auto mb-14 animate-fadeIn">
            {result ? (
              <div className="space-y-4">
                {/* Demo record warning if applicable */}
                {result.isDemo && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-2 shadow">
                    <Info className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>DEMO RECORD — NOT AN OFFICIAL CREDENTIAL</span>
                  </div>
                )}

                {/* Professional Privacy-Conscious Result Card */}
                <div className="bg-slate-900/95 border-2 border-emerald-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
                  {/* Status Banner */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm sm:text-base font-black text-white">
                            Credential Verified
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-extrabold uppercase">
                            STATUS: {result.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          WCMAA India Official Central Records
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handlePrint}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                      title="Print or Save Verification Record"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print</span>
                    </button>
                  </div>

                  {/* Clean Specification List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 font-medium block">Credential ID:</span>
                      <strong className="text-white font-mono text-base">
                        WCMAA-{result.membershipNo}
                      </strong>
                    </div>

                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 font-medium block">Status:</span>
                      <strong className="text-emerald-400 font-extrabold text-base flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {result.status}
                      </strong>
                    </div>

                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 font-medium block">Name / Initials:</span>
                      <strong className="text-white text-sm">
                        {result.name}
                      </strong>
                    </div>

                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 font-medium block">Grade / Rank:</span>
                      <strong className="text-amber-400 text-sm">
                        {result.rank}
                      </strong>
                    </div>

                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 font-medium block">Issue Year:</span>
                      <strong className="text-slate-200 text-sm font-mono">
                        {result.issueYear} (Valid thru {result.validUpto})
                      </strong>
                    </div>

                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 font-medium block">Issuing Organization:</span>
                      <strong className="text-slate-200 text-xs">
                        {ASSOCIATION_INFO.name}
                      </strong>
                    </div>
                  </div>

                  {/* Issuer & Branch Footer */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
                    <div>
                      <span>Registered Branch: <strong>{result.branch}</strong></span>
                    </div>
                    <div>
                      <span>Examining Instructor: <strong>{result.instructor}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-950/40 border-2 border-red-500/40 p-6 rounded-2xl flex items-start gap-3.5 text-red-300 shadow-xl">
                <AlertCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-extrabold text-base text-white">Record Not Found</h4>
                    <span className="px-2 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800 text-[10px] font-bold">
                      INVALID / UNVERIFIED
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed">
                    No active membership record was found for "{searchQuery}". Please verify that the membership number is entered correctly, or contact the association administrative office at <strong>duttasankar88@gmail.com</strong> or call <strong>+91 78969 62207</strong> for manual assistance.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Association Authenticity Standards Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex items-start gap-3.5 shadow-lg">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-sm text-white">Government Registration</h5>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Registered under the applicable society framework in Assam: KAM/240/W/08 of 2005–2006.
              </p>
            </div>
          </div>
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex items-start gap-3.5 shadow-lg">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-sm text-white">International Charter</h5>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Chartered with WCMAA Singapore and aligned with The World Kuoshu Federation (TWKSF).
              </p>
            </div>
          </div>
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex items-start gap-3.5 shadow-lg">
            <FileCheck className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
            <div>
              <h5 className="font-bold text-sm text-white">Standardized Examinations</h5>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Structured technical grading maintaining curriculum integrity across affiliated academies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
