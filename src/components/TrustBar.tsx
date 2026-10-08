import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { Award, Users, BookOpen, GraduationCap, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: Award,
      title: "35+ Years Heritage",
      subtitle: "Established in 1991",
      accent: "text-amber-400",
    },
    {
      icon: Users,
      title: "National Training Network",
      subtitle: "Recognized Academies & Dojos",
      accent: "text-blue-400",
    },
    {
      icon: BookOpen,
      title: "Structured Curriculum",
      subtitle: "Authentic Ip Man Forms",
      accent: "text-emerald-400",
    },
    {
      icon: GraduationCap,
      title: "Instructor Development",
      subtitle: "Accredited Sifus & Dan Grading",
      accent: "text-purple-400",
    },
    {
      icon: Building2,
      title: "Academy Affiliation",
      subtitle: "Non-Franchise Federation Charter",
      accent: "text-amber-400",
    },
  ];

  return (
    <section aria-label="Federation Credentials" className="bg-[#040810] border-b border-slate-800 py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5 Core Trust Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center shrink-0 border border-slate-800">
                  <Icon className={`w-5 h-5 ${item.accent}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal & Accreditation Verification Strip */}
        <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Govt. Registration: <strong className="text-white font-mono">{ASSOCIATION_INFO.registrationNo}</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>International Charter: <strong className="text-white font-medium">{ASSOCIATION_INFO.singaporeAffiliation}</strong></span>
            </span>
            <span className="hidden md:inline text-slate-700">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Affiliated: <strong className="text-white font-medium">The World Kuoshu Federation (TWKSF)</strong></span>
            </span>
          </div>
          <span className="text-[11px] text-amber-400/90 font-medium tracking-wide">
            Official All-India Federation
          </span>
        </div>
      </div>
    </section>
  );
}
