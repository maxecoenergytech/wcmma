import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import SyllabusExplorer from "@/components/SyllabusExplorer";
import VerificationPortal from "@/components/VerificationPortal";
import FoundationEvent from "@/components/FoundationEvent";
import BranchLocator from "@/components/BranchLocator";
import MembershipApplication from "@/components/MembershipApplication";
import AffiliationShowcase from "@/components/AffiliationShowcase";
import Footer from "@/components/Footer";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath } from "@/utils/paths";
import { ShieldCheck, Award, HeartHandshake, BookOpen, Target, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <Hero />

      {/* About & Heritage Section */}
      <section id="about" className="py-20 bg-[#070e1b] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                35 Years of Dedicated Martial Transmission
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Authentic Wing Chun Kung Fu in India Since 1991
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Founded under the leadership of <strong>Sifu Amar Singh Deori</strong> and <strong>Sifu Sankar Dutta</strong>, the <strong>Wing Chun Martial Arts Association India (WCMAAI)</strong> has spearheaded the instruction of traditional Wing Chun for three and a half decades.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Registered under the Government of Assam (`Regn. No. KAM/240/W/08 of 2005-2006`) and affiliated internationally with <strong>WCMAA Singapore</strong>, the association serves as India's premier gateway for traditional Chinese martial arts, self-defense empowerment, referee certification, and martial excellence under <strong>The World Kuoshu Federation (TWKSF)</strong>.
              </p>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <Target className="w-6 h-6 text-amber-400 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Practical Self Defense</h4>
                  <p className="text-xs text-slate-400">
                    Direct, devastating close-quarter defense developed by Grandmaster Ng Mui and refined by Ip Man.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Authentic Lineage</h4>
                  <p className="text-xs text-slate-400">
                    Unbroken traditional lineage recognized by international bodies in Singapore and Taiwan.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <HeartHandshake className="w-6 h-6 text-blue-400 mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">One Family</h4>
                  <p className="text-xs text-slate-400">
                    A respectful fraternity united by discipline, physical conditioning, and mutual honor.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card / Stat Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <img
                    src={getAssetPath("/assets/wcmaai_logo.png")}
                    alt="Emblem"
                    className="w-12 h-12 rounded-full bg-white p-1"
                  />
                  <div>
                    <h3 className="font-extrabold text-white text-base">Association Heritage</h3>
                    <p className="text-xs text-amber-400 font-mono">ESTABLISHED 1991</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Official State & Central Registration</strong>
                      <span>Regn. No: KAM/240/W/08 of 2005-2006</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">International Accreditation</strong>
                      <span>Affiliated with WCMAA Singapore</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Global Federation Recognition</strong>
                      <span>The World Kuoshu Federation (TWKSF)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">National Kuoshu Body</strong>
                      <span>KUOSHU Federation of India</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">
                    National Slogan
                  </p>
                  <p className="text-sm font-black text-amber-400">
                    "{ASSOCIATION_INFO.taglines.motto}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Leadership />
      <SyllabusExplorer />
      <AffiliationShowcase />
      <VerificationPortal />
      <FoundationEvent />
      <BranchLocator />
      <MembershipApplication />
      <Footer />
    </main>
  );
}
