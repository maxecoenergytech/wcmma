import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  Activity,
  Heart,
  CheckCircle2,
  Award,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Adult Wing Chun Training (Ages 18–40) | WCMAA India",
  description:
    "Traditional Wing Chun Kung Fu training for adults and working professionals in Guwahati, Assam. Functional biomechanics, stress reduction, reflex coordination, and self-defense.",
  keywords: [
    "adult martial arts Guwahati",
    "Wing Chun training for adults",
    "fitness martial arts Assam",
    "learn kung fu Guwahati",
    "wooden dummy classes Assam",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/programs/adults/",
  },
  openGraph: {
    title: "Adult Wing Chun Training (Ages 18–40) | WCMAA India",
    description:
      "Traditional Wing Chun Kung Fu training for adults in Guwahati, Assam. Functional biomechanics, stress relief, and practical self-defense.",
    url: "https://www.wcmaaindia.com/programs/adults/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function AdultsProgramPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-950 text-slate-100">
        <div className="bg-slate-900/60 border-b border-slate-800 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
            <a href={getRoutePath("/")} className="hover:text-amber-400">Home</a>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Adult Martial Arts & Biomechanics (Ages 18–40)</span>
          </div>
        </div>

        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5" />
                Functional Biomechanics • Mindful Conditioning
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Adult Wing Chun Kung Fu Training (Ages 18–40)
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Designed for college students, working professionals, and lifelong martial artists. Wing Chun does not depend on muscular bulk or gymnastic acrobatics—it relies on geometric angles, skeletal alignment, and relaxed reflex speed.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={getRoutePath("#branches")}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                >
                  View Adult Batch Timings
                </a>
                <a
                  href="tel:+917896962207"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
                >
                  Call Admissions: +91 78969 62207
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">Posture & Spinal Health</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reverse the negative physical effects of prolonged desk sitting. The Yee Jee Kim Yeung Ma stance strengthens hip flexors, stabilizes the lumbar spine, and reinforces upright ergonomics.
              </p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">Tactile Reflex Sensitivity (Chi Sau)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Learn to react to touch and pressure rather than relying on visual reaction time alone. Sticking-hands drills allow you to deflect incoming force effortlessly and maintain positional advantage.
              </p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">Wooden Dummy (Muk Yan Jong)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Master the classic 116 movements of the Wooden Dummy under Senior Master Sifu Sankar Dutta. Develop bone conditioning, precise angle deflection, and coordinated whole-body footwork.
              </p>
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
