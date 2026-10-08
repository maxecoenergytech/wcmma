import React from "react";
import { Award, Calendar, Flag, ShieldCheck, Globe, Star } from "lucide-react";

export default function HeritageTimeline() {
  const milestones = [
    {
      year: "1991",
      title: "Foundational Transmission in India",
      description:
        "Sifu Amar Singh Deori and Sifu Sankar Dutta establish the foundational Wing Chun training ground in Guwahati, initiating authentic martial transmission in Northeast India.",
      badge: "Inception",
      accent: "text-amber-400",
      border: "border-amber-500",
    },
    {
      year: "Development Years",
      title: "Growth of Academy Network & Student Camps",
      description:
        "Regular open-air training sessions begin at North East Academy grounds in Beltola and Bamunimaidam. Progressive batches of students are trained in traditional empty-hand forms, Chi Sau drills, and Wooden Dummy techniques.",
      badge: "Grassroots Growth",
      accent: "text-blue-400",
      border: "border-blue-500",
    },
    {
      year: "2005–2006",
      title: "Government Registration & International Charter",
      description:
        "The association is registered under the applicable society/association registration framework in Assam (Regn. No. KAM/240/W/08 of 2005–2006) and chartered internationally with WCMAA Singapore.",
      badge: "Legal Registration",
      accent: "text-emerald-400",
      border: "border-emerald-500",
    },
    {
      year: "National Development",
      title: "Pan-India Expansion & TWKSF Kuoshu Alignment",
      description:
        "Expansion of recognized dojos across states including West Bengal, Delhi NCR, and Karnataka. Association leadership joins the Joint Secretariat of KUOSHU Federation of India and affiliates with The World Kuoshu Federation (TWKSF) for international refereeing and tournaments.",
      badge: "National Presence",
      accent: "text-purple-400",
      border: "border-purple-500",
    },
    {
      year: "2026",
      title: "35th Anniversary Milestone Commemoration",
      description:
        "WCMAA India successfully commemorated its 35th Foundation Day on 6 September 2026 in Guwahati, Assam, bringing together instructors, practitioners, students and members of the Wing Chun community.",
      badge: "Event Completed",
      accent: "text-amber-400",
      border: "border-amber-400",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#050a12] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            35 Years of Living Martial History
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Heritage & Historical Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The 35-year journey of Wing Chun Martial Arts Association India—from its grassroots inception in 1991 to a recognized national martial-arts federation.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin Indicator */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-4 ${item.border} group-hover:scale-125 transition-transform shadow`}
              />

              {/* Year Label for Desktop */}
              <div className="md:absolute md:-left-44 md:top-1 md:w-32 md:text-right mb-2 md:mb-0">
                <span className={`text-base sm:text-lg font-black font-mono ${item.accent}`}>
                  {item.year}
                </span>
              </div>

              {/* Content Card */}
              <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl hover:border-slate-700 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                    {item.badge}
                  </span>
                  <span className="md:hidden text-xs font-bold text-amber-400 font-mono">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
