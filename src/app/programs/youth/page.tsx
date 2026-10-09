import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  Shield,
  Heart,
  CheckCircle2,
  Users,
  Award,
  HelpCircle,
  AlertCircle,
  FileCheck2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Youth Wing Chun Training (Ages 10–17) & Safeguarding | WCMAA India",
  description:
    "Age-appropriate Wing Chun martial arts education for children and teenagers in Guwahati, Assam. Emphasizing motor skills, respectful etiquette, anti-bullying confidence, and guardian safeguarding.",
  keywords: [
    "Wing Chun for kids Guwahati",
    "youth martial arts Assam",
    "teen martial arts classes Guwahati",
    "safe martial arts for children",
    "anti bullying kung fu Guwahati",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/programs/youth/",
  },
  openGraph: {
    title: "Youth Wing Chun Training (Ages 10–17) & Safeguarding | WCMAA India",
    description:
      "Age-appropriate Wing Chun martial arts education for minors in Guwahati, Assam with strict parental consent and safeguarding guidelines.",
    url: "https://www.wcmaaindia.com/programs/youth/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function YouthProgramPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-950 text-slate-100">
        <div className="bg-slate-900/60 border-b border-slate-800 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
            <a href={getRoutePath("/")} className="hover:text-amber-400">Home</a>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Youth Training & Safeguarding (Ages 10–17)</span>
          </div>
        </div>

        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                Youth Development & Child Safeguarding Framework
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Youth Wing Chun Martial Arts (Ages 10–17)
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Structured martial arts education designed specifically for school-aged youths. Our curriculum builds physical coordination, mental discipline, respectful etiquette, and calm spatial awareness in a supportive, non-violent environment.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={getRoutePath("#branches")}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                >
                  Locate a Youth Training Dojo
                </a>
                <a
                  href="tel:+917896962207"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
                >
                  Parent Inquiry Desk: +91 78969 62207
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Character & Mutual Respect</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Training begins and concludes with traditional martial etiquette (Bowing and Hand Salutes). Students learn humility, obedience, patience, and mutual respect for peers and seniors.
              </p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Anti-Bullying Confidence</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than encouraging aggressive fights, Wing Chun teaches situational de-escalation, upright posture, confident voice projection, and structural deflection to avoid physical altercations.
              </p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-white">Posture & Motor Biomechanics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Combatting poor spinal habits and excessive screen time through ergonomic centerline stances, core engagement, eye-hand tactile reflexes, and breathing control.
              </p>
            </div>
          </div>

          {/* Parental Safeguarding Policy Box */}
          <div className="bg-slate-900 rounded-2xl border-2 border-emerald-500/30 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <FileCheck2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white">Parental Consent & Safeguarding Standards</h2>
                <p className="text-xs text-slate-400">Strict safety protocols maintained across all affiliated WCMAA India dojos</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Mandatory Guardian Consent
                </p>
                <p className="text-slate-400">
                  No student below 18 years of age is admitted without a signed physical application form and direct consultation with a parent or legal guardian.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Non-Aggressive Contact Rules
                </p>
                <p className="text-slate-400">
                  Youth training is strictly non-injurious. Sparring is non-contact or light-contact tactile sensitivity drills under continuous black-sash supervision.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Privacy & Minor Protection
                </p>
                <p className="text-slate-400">
                  WCMAA India never publicly posts children's personal contact details, residential addresses, or private photos without explicit written parental release.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Zero Payment Scams
                </p>
                <p className="text-slate-400">
                  Parents are warned never to pay online via UPI or third-party links. All association paperwork and enrollment are verified directly at the physical training ground.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileActionDock />
      <FloatingWhatsApp />
    </>
  );
}
