import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  MapPin,
  Award,
  Shield,
  BookOpen,
  Users,
  Building,
  CheckCircle2,
  ChevronRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wing Chun Martial Arts Training in Assam & Northeast India | WCMAA India",
  description:
    "Discover authentic traditional Wing Chun Kung Fu training, affiliated dojos, and martial arts education across Assam and Northeast India. 35 years heritage (1991–2026).",
  keywords: [
    "Wing Chun Assam",
    "martial arts training Assam",
    "kung fu classes Northeast India",
    "Wing Chun Guwahati",
    "martial arts association Assam",
    "Assam Kungfu Federation affiliate",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/locations/assam/",
  },
  openGraph: {
    title: "Wing Chun Martial Arts Training in Assam & Northeast India | WCMAA India",
    description:
      "Discover authentic traditional Wing Chun Kung Fu training across Assam and Northeast India with WCMAA India.",
    url: "https://www.wcmaaindia.com/locations/assam/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function AssamLocationPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-950 text-slate-100">
        <div className="bg-slate-900/60 border-b border-slate-800 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
            <a href={getRoutePath("/")} className="hover:text-amber-400">Home</a>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Assam & Northeast Training Hub</span>
          </div>
        </div>

        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                Regional Martial Heritage • Assam & Northeast India
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Traditional Wing Chun Martial Arts in Assam
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Since 1991, <strong>Wing Chun Martial Arts Association India</strong> has championed structured, traditional Wing Chun Kung Fu pedagogy throughout the state of Assam and the Northeast region. Registered under Registration No. KAM/240/W/08 and affiliated with the <strong>Assam Kungfu Federation</strong> and <strong>The World Kuoshu Federation (TWKSF)</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Verified Dojos in Assam */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Official Training Centers in Assam
            </h2>
            <p className="text-slate-400 text-sm">
              All listed centers operate under certified instructors and adhere to official association safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] text-amber-400 font-black uppercase tracking-wider">National Headquarters</span>
                <h3 className="text-lg font-bold text-white">National Headquarters Dojo</h3>
                <p className="text-xs text-slate-400">Bathoupuri, ISBT Lokhra, Guwahati – 781035</p>
                <p className="text-xs text-slate-300 pt-2">Morning & evening batches. Headed by Founder President & Chief Instructor Sifu Amar Singh Deori.</p>
              </div>
              <a
                href={getRoutePath("/dojos/guwahati-national-hq/")}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 pt-2 border-t border-slate-800"
              >
                <span>View Dojo Schedule & Directions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] text-blue-400 font-black uppercase tracking-wider">Historical Training Ground</span>
                <h3 className="text-lg font-bold text-white">North East Academy Ground</h3>
                <p className="text-xs text-slate-400">Bhetapara, Beltola, Guwahati – 781028</p>
                <p className="text-xs text-slate-300 pt-2">Open-air training ground and Sunday special masterclasses with Founder Sifu Sankar Dutta.</p>
              </div>
              <a
                href={getRoutePath("/dojos/guwahati-beltola/")}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 pt-2 border-t border-slate-800"
              >
                <span>View Beltola Ground Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] text-emerald-400 font-black uppercase tracking-wider">Administrative Secretariat</span>
                <h3 className="text-lg font-bold text-white">Bamunimaidam Dojo</h3>
                <p className="text-xs text-slate-400">Bhaskar Nagar, Bamunimaidam, Guwahati – 781021</p>
                <p className="text-xs text-slate-300 pt-2">Evening practice batches, registry verification, and official secretariat inquiries.</p>
              </div>
              <a
                href={getRoutePath("/dojos/guwahati-bamunimaidam/")}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 pt-2 border-t border-slate-800"
              >
                <span>View Bamunimaidam Dojo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Regional Expansion & Affiliation Callout */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 rounded-2xl border border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl font-bold text-white">Expanding Wing Chun Across Assam & the Northeast</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Are you a martial arts instructor or club owner in Dibrugarh, Silchar, Jorhat, Tezpur, or other Northeast districts seeking recognized Wing Chun affiliation?
              </p>
            </div>
            <a
              href={getRoutePath("/affiliation/")}
              className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors shrink-0"
            >
              Affiliate Your Academy
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileActionDock />
      <FloatingWhatsApp />
    </>
  );
}
