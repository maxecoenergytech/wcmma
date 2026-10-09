"use client";

import React, { useState } from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath } from "@/utils/paths";
import { Shield, Award, Globe, Users, CheckCircle, Sparkles, ExternalLink, ZoomIn, X, Flame } from "lucide-react";

export default function Leadership() {
  const [activeModalImg, setActiveModalImg] = useState<{ src: string; title: string; desc: string } | null>(null);

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-[#050a12] border-b border-slate-800 martial-bg-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            Executive Leadership Council
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Leadership & Traditional Lineage
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Guided by senior martial instructors with decades of dedicated practice, preserving traditional Wing Chun principles and fostering discipline across India.
          </p>
        </div>

        {/* Master Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Sifu Sankar Dutta - Founder & General Secretary */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-2xl border-2 border-slate-800 hover:border-amber-500/50 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-2xl transition-all duration-300 group">
            <div className="w-full sm:w-48 h-64 sm:h-auto rounded-xl overflow-hidden shrink-0 relative bg-slate-950 border border-slate-700 shadow-md">
              <img
                src={getAssetPath("/assets/sifu_sankar_dutta_portrait.webp")}
                alt="Sifu Sankar Dutta - Founder & General Secretary"
                width={280}
                height={350}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                Founder
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4 flex-1">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Founder & General Secretary
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-300 transition-colors">
                  Sifu Sankar Dutta
                </h3>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-blue-400">
                    • Joint Secy. Gen. KUOSHU Federation, India
                  </p>
                  <p className="text-xs font-bold text-blue-400">
                    • Vice President Assam Kungfu Federation
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  Founder of Wing Chun Martial Arts Association India and General Secretary. Specialist in the 116 movements of the Wooden Dummy (Muk Yan Jong) and traditional weapon forms. Oversees curriculum dissemination, national camps, referee development, and youth martial arts programs across India.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px] text-slate-300 font-semibold">
                <span className="bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                  ✓ Founder, WCMAA India
                </span>
                <span className="bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                  ✓ Wooden Dummy (116) Specialist
                </span>
                <span className="bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                  ✓ National Referee
                </span>
                <span className="bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                  ✓ 35+ Years Heritage
                </span>
              </div>
            </div>
          </div>

          {/* Sifu Amar Singh Deori - Chief Instructor */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-2xl border-2 border-slate-800 hover:border-amber-500/50 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-2xl transition-all duration-300 group">
            <div className="w-full sm:w-48 h-56 sm:h-auto rounded-xl overflow-hidden shrink-0 relative bg-slate-950/80 border border-slate-800 shadow-md flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center mb-3">
                <img
                  src={getAssetPath("/assets/wcmaai_logo_sm.webp")}
                  alt="WCMAA India National Insignia"
                  width={64}
                  height={64}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400">
                National Charter
              </span>
              <span className="text-[9px] text-slate-400 font-medium mt-1">
                Chief Instructor Office
              </span>
              <div className="absolute top-2 left-2 bg-gradient-to-r from-slate-800 to-slate-900 text-amber-300 text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow border border-slate-700">
                Chief Instructor
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4 flex-1">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Chief Instructor, WCMAA India
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-300 transition-colors">
                  Sifu Amar Singh Deori
                </h3>
                <p className="text-xs font-semibold text-slate-400">
                  Wing Chun Martial Arts Association, India
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  Sifu Amar Singh Deori is Chief Instructor in Wing Chun Martial Arts Association, India, he is the Pioneer of traditional Wing Chun Kung Fu education in North East India. Serving as National Chief Instructor and authorized examiner on national technical gradings and certificates under the WCMAA Singapore charter.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px] text-slate-300 font-semibold">
                <span className="bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                  ✓ Regn. WCMAA Singapore
                </span>
                <span className="bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                  ✓ Chief Examiner
                </span>
                <span className="bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700">
                  ✓ 35+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Authentic Training Ground & Masters in Action Showcase */}
        <div className="space-y-8 mb-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              Living Martial Heritage • Lineage in Action
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Authentic Training & Dynamic Chi Sau Practice
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Capturing genuine moments of tactile sensitivity drills, joyful movement, and the martial arts brotherhood at our open-air training grounds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Mr. Amar Singh & Mr. Shankar Dutta Playful Movement Practicing Time */}
            <div className="bg-slate-900/90 rounded-2xl border-2 border-amber-500/40 p-6 flex flex-col justify-between shadow-2xl hover:border-amber-400 transition-all duration-300 group">
              <div className="space-y-4">
                <div
                  className="rounded-xl overflow-hidden border border-slate-800 shadow-lg relative bg-slate-950 cursor-pointer aspect-[3/2]"
                  onClick={() =>
                    setActiveModalImg({
                      src: getAssetPath("/assets/sifu_chisau_practice.webp"),
                      title: "Sifu Amar Singh Deori & Sifu Sankar Dutta — Dynamic Chi Sau Movement Practice",
                      desc: "Demonstrating Chi Sau (sticking hands), tactile bridging, and centerline redirection during open-air sparring and movement practice at the training grounds.",
                    })
                  }
                >
                  <img
                    src={getAssetPath("/assets/sifu_chisau_practice.webp")}
                    alt="Mr. Amar Singh and Mr. Shankar Dutta playful movement practicing time - Chi Sau Wing Chun"
                    width={960}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                  
                  {/* Floating Action Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Chi Sau (黐手) Movement
                  </div>

                  {/* Click to zoom prompt */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Senior Instructors in Sensitivity Practice
                  </span>
                  <h4 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors mt-0.5">
                    Sifu Amar Singh & Sifu Sankar Dutta in Dynamic Chi Sau Movement Practice
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Caught during an energetic training session, Founder & General Secretary <strong>Sifu Sankar Dutta</strong> and Chief Instructor <strong>Sifu Amar Singh Deori</strong> engage in spontaneous <strong>Chi Sau (黏手 - Sticking Hands)</strong> drills. Wing Chun practitioners use sensitivity practice to maintain constant bridge contact and redirect force with relaxed structure.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Tactile Sensitivity Drills
                </span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Centerline Deflection Flow
                </span>
              </div>
            </div>

            {/* Card 2: Full Association Training Camp & Practitioner Family */}
            <div className="bg-slate-900/90 rounded-2xl border-2 border-slate-800 p-6 flex flex-col justify-between shadow-2xl hover:border-blue-400 transition-all duration-300 group">
              <div className="space-y-4">
                <div
                  className="rounded-xl overflow-hidden border border-slate-800 shadow-lg relative bg-slate-950 cursor-pointer aspect-[3/2]"
                  onClick={() =>
                    setActiveModalImg({
                      src: getAssetPath("/assets/association_camp_group.webp"),
                      title: "WCMAA India National Training Ground — Students, Disciples & Sifus",
                      desc: "The extended Wing Chun family gathered at North East Academy training ground with Sifu Amar Singh Deori and Sifu Sankar Dutta.",
                    })
                  }
                >
                  <img
                    src={getAssetPath("/assets/association_camp_group.webp")}
                    alt="Wing Chun Martial Arts Association India training camp students and instructors"
                    width={960}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                  {/* Floating Action Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    All-India Martial Family
                  </div>

                  {/* Click to zoom prompt */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-blue-300 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-700 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                    Open-Air Academy Training Grounds
                  </span>
                  <h4 className="text-xl font-black text-white group-hover:text-blue-300 transition-colors mt-0.5">
                    WCMAA India Disciples, Black Sashes & Students
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The association unites practitioners of all age groups and backgrounds under the motto <em>"One Family • One Lineage • One Vision"</em>. From beginner children developing discipline to senior instructors mastering advanced Wooden Dummy and weaponry, this close-knit brotherhood preserves traditional martial heritage in Assam and throughout India.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5 text-blue-300">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  35 Years Unbroken Transmission
                </span>
                <span className="flex items-center gap-1.5 text-blue-300">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Youth & Adult Development
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliation Badges Banner */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Affiliations & Technical Associations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ASSOCIATION_INFO.affiliations.map((affil, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="text-xs font-semibold text-amber-400 mb-1">{affil.badge}</div>
                <div className="text-sm font-bold text-white mb-2">{affil.name}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{affil.purpose}</p>
                {affil.website && (
                  <a
                    href={affil.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-blue-400 hover:text-blue-300 mt-2 font-mono flex items-center gap-1 inline-flex"
                  >
                    <span>{affil.website.replace("https://", "")}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Photo Preview */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="bg-slate-950 aspect-[3/2] w-full overflow-hidden">
              <img
                src={activeModalImg.src}
                alt={activeModalImg.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <h4 className="text-lg font-black text-white">{activeModalImg.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{activeModalImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
