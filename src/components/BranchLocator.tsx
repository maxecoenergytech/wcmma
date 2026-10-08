"use client";

import React, { useState } from "react";
import { BRANCHES, BranchRecord, ASSOCIATION_INFO } from "@/data/associationData";
import {
  MapPin,
  Phone,
  Clock,
  User,
  Shield,
  Search,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  X,
  HelpCircle,
  Calendar,
} from "lucide-react";

export default function BranchLocator() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [reportModalDojo, setReportModalDojo] = useState<BranchRecord | null>(null);

  const regions = ["All", "Guwahati", "Delhi", "Kolkata", "Assam", "West Bengal", "Karnataka"];

  const filteredBranches = BRANCHES.filter((b) => {
    const matchesSearch =
      b.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.chiefInstructor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === "All" ||
      b.city.toLowerCase().includes(selectedRegion.toLowerCase()) ||
      b.state.toLowerCase().includes(selectedRegion.toLowerCase());

    return matchesSearch && matchesRegion;
  });

  return (
    <section id="branches" className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            National Training Directory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Find a Wing Chun Academy Near You
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Train under certified instructors adhering to the official syllabus and association safety guidelines. Locate an authorized WCMAA India academy or regional training center.
          </p>

          {/* Search Input */}
          <div className="max-w-md mx-auto pt-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by city, dojo, or instructor name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/90 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 shadow-inner"
              />
            </div>
          </div>

          {/* Quick Filter Chips */}
          <div className="flex items-center justify-start sm:justify-center gap-2 pt-3 overflow-x-auto pb-1 scrollbar-none max-w-full">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  selectedRegion === reg
                    ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => {
            const rawPhone = branch.phone.replace(/[^0-9]/g, "");
            const whatsappUrl = `https://wa.me/91${rawPhone.slice(-10)}?text=${encodeURIComponent(
              `Hello Sifu, I would like to inquire about Wing Chun training at ${branch.name} in ${branch.city}.`
            )}`;

            return (
              <div
                key={branch.id}
                className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 hover:bg-slate-900 transition-all shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-950 text-blue-400 border border-blue-800/80">
                      {branch.city}, {branch.state}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-extrabold uppercase flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                      <Shield className="w-3 h-3 text-emerald-400" />
                      {branch.activeStatus}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                      {branch.name}
                    </h3>
                    {/* Clear Verified Status Label */}
                    <div className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{branch.affiliationStatus}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-300 pt-1">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{branch.address}</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <User className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span>Instructor: <strong className="text-white">{branch.chiefInstructor}</strong></span>
                        <span className="block text-[11px] text-slate-400">{branch.instructorGrade}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>Days: <strong className="text-slate-200">{branch.trainingDays}</strong></span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-slate-400 font-medium">{branch.timing}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold transition-colors"
                        title="Call Instructor"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-800/60 hover:bg-emerald-900 text-emerald-400 text-xs font-bold transition-colors"
                        title="WhatsApp Inquiry"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setReportModalDojo(branch)}
                      className="text-[11px] text-slate-400 hover:text-amber-400 transition-colors underline"
                    >
                      Verify / Report Info
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBranches.length === 0 && (
          <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
            <p className="text-slate-400 text-sm">
              No dojos found matching "{searchTerm}". Looking to start a recognized branch in your city?
            </p>
            <a
              href="#join"
              className="inline-block mt-3 px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg uppercase tracking-wider"
            >
              Apply for Branch Affiliation
            </a>
          </div>
        )}
      </div>

      {/* Verify / Report Incorrect Information Modal */}
      {reportModalDojo && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setReportModalDojo(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setReportModalDojo(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Directory Verification Desk
              </span>
              <h3 className="text-lg font-black text-white">
                Verify Dojo / Report Information
              </h3>
              <p className="text-xs text-slate-400">
                Inquiring about <strong>{reportModalDojo.name}</strong> ({reportModalDojo.city}, {reportModalDojo.state})
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <p>
                <strong>Affiliation Status:</strong> {reportModalDojo.affiliationStatus}
              </p>
              <p>
                <strong>Chief Instructor:</strong> {reportModalDojo.chiefInstructor}
              </p>
              <p className="text-slate-400">
                If you suspect inaccurate schedule timings, obsolete phone numbers, or unverified dojos misusing the WCMAA India identity, please contact the General Secretariat directly:
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`https://wa.me/917896962207?text=${encodeURIComponent(
                  `Hello General Secretary Desk, I am inquiring about directory verification for: ${reportModalDojo.name} (${reportModalDojo.city}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                Contact Secretariat via WhatsApp (+91 78969 62207)
              </a>

              <a
                href={`mailto:duttasankar88@gmail.com?subject=${encodeURIComponent(
                  `Dojo Directory Inquiry: ${reportModalDojo.name}`
                )}`}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2"
              >
                Email Secretariat: duttasankar88@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
