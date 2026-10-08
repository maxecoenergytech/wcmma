import React from "react";
import { Award, Layers, BookOpen, GraduationCap, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WhyTrainSection() {
  const pillars = [
    {
      icon: Award,
      title: "35+ YEARS HERITAGE",
      description: "A continuing Wing Chun tradition in India since 1991.",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    },
    {
      icon: Layers,
      title: "STRUCTURED TRAINING",
      description: "A progressive training pathway for students and instructors.",
      accent: "text-blue-400",
      border: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    },
    {
      icon: BookOpen,
      title: "TRADITIONAL CURRICULUM",
      description: "Training across core Wing Chun forms, techniques and equipment.",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    },
    {
      icon: GraduationCap,
      title: "INSTRUCTOR DEVELOPMENT",
      description: "Supporting structured instructor development.",
      accent: "text-purple-400",
      border: "hover:border-purple-500/50 hover:shadow-purple-500/10",
    },
    {
      icon: Globe2,
      title: "DOJO NETWORK",
      description: "Connecting practitioners and training centres across India.",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    },
    {
      icon: ShieldCheck,
      title: "DISCIPLINE & CHARACTER",
      description: "Martial training focused on discipline, respect and responsible practice.",
      accent: "text-red-400",
      border: "hover:border-red-500/50 hover:shadow-red-500/10",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Core Association Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            WHY WCMAA INDIA
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The foundation of authentic Wing Chun training in India—fostering disciplined practice, certified instruction, and structured martial-arts education.
          </p>
        </div>

        {/* 6 Premium Cards Grid with 3D Hover Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${pillar.border} group`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${pillar.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white tracking-wide group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Standardized Discipline</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
