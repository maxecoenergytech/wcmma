import React from "react";
import { Award, Layers, BookOpen, GraduationCap, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function WhyTrainSection() {
  const pillars = [
    {
      icon: Award,
      title: "35+ Years of Heritage",
      description: "Promoting Wing Chun training and development in India since 1991.",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50",
    },
    {
      icon: Layers,
      title: "Structured Training",
      description: "Progressive training from foundational concepts to advanced Wing Chun practice.",
      accent: "text-blue-400",
      border: "hover:border-blue-500/50",
    },
    {
      icon: BookOpen,
      title: "Traditional Curriculum",
      description: "Forms, footwork, partner training, Chi Sau, Wooden Dummy and traditional training methods.",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
    },
    {
      icon: GraduationCap,
      title: "Instructor Development",
      description: "Supporting structured instructor training and continuing development.",
      accent: "text-purple-400",
      border: "hover:border-purple-500/50",
    },
    {
      icon: Globe2,
      title: "National Network",
      description: "Connecting recognized training academies and practitioners.",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50",
    },
    {
      icon: ShieldCheck,
      title: "Discipline & Character",
      description: "Promoting discipline, respect, confidence and continuous personal development.",
      accent: "text-red-400",
      border: "hover:border-red-500/50",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Core Federation Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Train with WCMAA India?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The national standard for traditional Wing Chun Kung Fu education, fostering authentic transmission, certified dojos, and lifetime martial discipline.
          </p>
        </div>

        {/* 6 Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 ${pillar.border} group`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className={`w-6 h-6 ${pillar.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>National Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
