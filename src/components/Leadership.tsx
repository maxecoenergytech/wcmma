import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath } from "@/utils/paths";
import { Shield, Award, Globe, Users, CheckCircle } from "lucide-react";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            National Executive Council & Lineage Guardians
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & Traditional Lineage
          </h2>
          <p className="text-slate-400 text-base">
            Guided by senior martial masters with decades of dedicated practice, preserving authentic Ip Man lineage principles and fostering national discipline across India.
          </p>
        </div>

        {/* Master Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Sifu Amar Singh Deori */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="w-full sm:w-48 h-64 sm:h-auto rounded-xl overflow-hidden shrink-0 relative bg-slate-950 border border-slate-700">
              <img
                src={getAssetPath("/assets/grandmaster_portrait.jpg")}
                alt="Sifu Amar Singh Deori"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                Founder
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Founder President & Chief Instructor
                </span>
                <h3 className="text-2xl font-black text-white">Sifu Amar Singh Deori</h3>
                <p className="text-xs font-medium text-slate-400">
                  Wing Chun Martial Arts Association, India
                </p>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Pioneer of Wing Chun Kung Fu education in North East India. Serving as the National Chief Instructor and authorized signing authority on all official WCMAAI grading passports and national certificates under WCMAA Singapore accreditation.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2 text-xs text-slate-400 font-medium">
                <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-300">
                  ✓ Regn. WCMAA Singapore
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-300">
                  ✓ Master Examiner
                </span>
              </div>
            </div>
          </div>

          {/* Sifu Sankar Dutta */}
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
            <div className="w-full sm:w-48 h-64 sm:h-auto rounded-xl overflow-hidden shrink-0 relative bg-slate-950 border border-slate-700">
              <img
                src={getAssetPath("/assets/sifu_sankar_dutta_portrait.jpg")}
                alt="Sifu Sankar Dutta - General Secretary"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                General Secretary
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  General Secretary, WCMAA India
                </span>
                <h3 className="text-2xl font-black text-white">Sifu Sankar Dutta</h3>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-blue-400">
                    • Joint Secy. Gen. KUOSHU Federation, India
                  </p>
                  <p className="text-xs font-semibold text-blue-400">
                    • Vice President Assam Kungfu Federation
                  </p>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Specialist in the 116 movements of the Wooden Dummy (Muk Yan Jong) and traditional weapon forms. Oversees national camps, tournament judging, and grassroot youth self-defense initiatives across India.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2 text-xs text-slate-400 font-medium">
                <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-300">
                  ✓ Wooden Dummy Specialist
                </span>
                <span className="bg-slate-800 px-2.5 py-1 rounded text-slate-300">
                  ✓ National Referee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Association Seminar & Practitioner Family Photo */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <img
                src={getAssetPath("/assets/association_team.jpg")}
                alt="Wing Chun Martial Arts Association India Team & Students"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Users className="w-4 h-4" />
                Brotherhood of Martial Artists
              </div>
              <h3 className="text-2xl font-bold text-white">
                "One Family • One Lineage • One Vision"
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The association brings together practitioners of all ages and walks of life—cultivating physical resilience, mental calmness, tactical self-preservation, and respect for the traditional art of Wing Chun.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Standardized curriculum and belt progression.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Direct line of transmission from verified masters.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  National self-defense seminars for men, women & children.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliation Badges Banner */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Official Alliances & International Accreditation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ASSOCIATION_INFO.affiliations.map((affil, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="text-xs font-semibold text-amber-400 mb-1">{affil.badge}</div>
                <div className="text-sm font-bold text-white mb-2">{affil.name}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{affil.detail}</p>
                {affil.website && (
                  <p className="text-[11px] text-blue-400 mt-2 font-mono">{affil.website}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
