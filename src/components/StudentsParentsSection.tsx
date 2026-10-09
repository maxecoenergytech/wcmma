import React from "react";
import { getRoutePath } from "@/utils/paths";
import { UserPlus, UserCheck, Heart, Shield, CheckCircle2 } from "lucide-react";

export default function StudentsParentsSection() {
  const groups = [
    {
      title: "For Beginners",
      subtitle: "No Prior Martial Arts Background Required",
      description:
        "Every master starts as a beginner. Our certified instructors guide new students through basic centerline balance, relaxed stance habits, and fundamental deflection drills in a disciplined, safe, and supportive dojo atmosphere.",
      highlights: [
        "Foundational stance & balance mechanics",
        "Step-by-step empty-hand form instruction",
        "Supportive, structured learning environment",
        "Gradual progression at your personal pace",
      ],
      badge: "Open Enrollment",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50",
    },
    {
      title: "For Adults",
      subtitle: "Martial Arts, Fitness & Self-Development",
      description:
        "Develop functional biomechanics, core stability, reflex coordination, and mental focus. Wing Chun teaches principles of economy of motion and structural relaxation that serve practitioners throughout their personal and professional lives.",
      highlights: [
        "Cardiovascular endurance & core stability",
        "Stress reduction through mindful breathwork",
        "Reflex sharpness & tactile spatial awareness",
        "Lifelong physical conditioning & discipline",
      ],
      badge: "Adult Programs",
      accent: "text-blue-400",
      border: "hover:border-blue-500/50",
    },
    {
      title: "For Children",
      subtitle: "Age-Appropriate Discipline & Confidence",
      description:
        "Age-appropriate classes designed to build healthy physical activity, motor coordination, respect for teachers and peers, confidence, and concentration. We emphasize character-building and mutual respect over aggressive competition.",
      highlights: [
        "Motor skills, balance & agility development",
        "Discipline, respectful etiquette & focus",
        "Anti-bullying mindset & healthy confidence",
        "Active, healthy physical conditioning",
      ],
      badge: "Youth Cadre",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
    },
    {
      title: "For Women",
      subtitle: "Practical Principles, Awareness & Confidence",
      description:
        "Wing Chun was traditionally developed on principles of leverage, structural deflection, and redirecting incoming force rather than relying on brute size or muscle weight. Training emphasizes calm awareness, swift movement, and practical spatial control.",
      highlights: [
        "Leverage & structural angle efficiency",
        "Close-range situational awareness",
        "Evasion footwork & tactical redirection",
        "Empowerment through calm confidence",
      ],
      badge: "Specialized Training",
      accent: "text-purple-400",
      border: "hover:border-purple-500/50",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            Inclusive Martial Education
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Who Can Train with WCMAA India?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our national programs are tailored to provide structured, safe, and progressive martial-arts education for practitioners of all ages and stages of life.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className={`bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 ${group.border} group`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                    {group.badge}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${group.accent}`}>
                    {group.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {group.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {group.description}
                </p>

                <div className="pt-2 space-y-2">
                  {group.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Classes available at all accredited branches</span>
                <a
                  href={
                    group.title === "For Children"
                      ? getRoutePath("/programs/youth/")
                      : group.title === "For Adults"
                      ? getRoutePath("/programs/adults/")
                      : getRoutePath("#branches")
                  }
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  {group.title === "For Children"
                    ? "Youth Program & Safety →"
                    : group.title === "For Adults"
                    ? "Adult Program Details →"
                    : "Find Nearest Dojo →"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
