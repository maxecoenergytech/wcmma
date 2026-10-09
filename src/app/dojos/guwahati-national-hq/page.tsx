import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Shield,
  Award,
  Calendar,
  CheckCircle2,
  Navigation,
  ArrowRight,
  Compass,
  AlertCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wing Chun Training at National Headquarters Lokhra, Guwahati | WCMAA India",
  description:
    "Join authentic Wing Chun Kung Fu training at WCMAA India National Headquarters, Bathoupuri, ISBT Lokhra, Guwahati. Morning and evening batches led by certified instructors.",
  keywords: [
    "Wing Chun Guwahati",
    "Wing Chun Lokhra",
    "martial arts classes Guwahati",
    "kung fu training Lokhra Guwahati",
    "WCMAA India headquarters",
    "Wing Chun training Assam",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/dojos/guwahati-national-hq/",
  },
  openGraph: {
    title: "Wing Chun Training at National Headquarters Lokhra, Guwahati | WCMAA India",
    description:
      "Join authentic Wing Chun Kung Fu training at WCMAA India National Headquarters, Bathoupuri, ISBT Lokhra, Guwahati.",
    url: "https://www.wcmaaindia.com/dojos/guwahati-national-hq/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function GuwahatiHqPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "WCMAA India National Headquarters Dojo",
    "description":
      "Official national headquarters training centre for Wing Chun Martial Arts Association India in Guwahati, Assam.",
    "url": "https://www.wcmaaindia.com/dojos/guwahati-national-hq/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bathoupuri, ISBT Lokhra",
      "addressLocality": "Guwahati",
      "addressRegion": "Assam",
      "postalCode": "781035",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1158",
      "longitude": "91.7086",
    },
    "telephone": "+91-78969-62207",
    "openingHours": ["Mo,We,Fr 06:00-08:30", "Mo,We,Fr 17:00-19:30"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />

      <main className="flex-1 bg-slate-950 text-slate-100">
        {/* Breadcrumb Bar */}
        <div className="bg-slate-900/60 border-b border-slate-800 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
            <a href={getRoutePath("/")} className="hover:text-amber-400">Home</a>
            <span>/</span>
            <a href={getRoutePath("#branches")} className="hover:text-amber-400">Dojos</a>
            <span>/</span>
            <span className="text-amber-400 font-semibold">National HQ (Guwahati)</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                Guwahati, Kamrup Metropolitan District, Assam
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Wing Chun Training at National Headquarters (Lokhra, Guwahati)
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The central administrative headquarters and foundational training ground of <strong>Wing Chun Martial Arts Association India</strong>. Open for beginner to advanced practitioners, youth batches, and instructor grade development.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+917896962207"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Dojo Desk: +91 78969 62207
                </a>
                <a
                  href="https://wa.me/917896962207?text=Hello%20WCMAA%20India,%20I%20am%20enquiring%20about%20Wing%20Chun%20classes%20at%20National%20HQ%20Lokhra,%20Guwahati"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-2"
                >
                  WhatsApp Admissions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dojo Operational Details Grid */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Details & Syllabus */}
            <div className="lg:col-span-2 space-y-8">
              {/* Training Schedule & Center Specs */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-amber-400" />
                  Training Schedule & Operational Hours
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs text-amber-400 font-bold uppercase block">Morning Session</span>
                    <p className="text-lg font-black text-white mt-1">6:00 AM – 8:30 AM</p>
                    <p className="text-xs text-slate-400 mt-1">Foundations, Stance Mechanics & Form Repetitions</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs text-amber-400 font-bold uppercase block">Evening Session</span>
                    <p className="text-lg font-black text-white mt-1">5:00 PM – 7:30 PM</p>
                    <p className="text-xs text-slate-400 mt-1">Chi Sau Drills, Wooden Dummy & Youth Batches</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <p><strong>Training Days:</strong> Monday, Wednesday, Friday (Regular Batches)</p>
                  <p><strong>Age Groups:</strong> Cadets (10–17 years) with Guardian Consent | Adults (18+ years)</p>
                  <p><strong>Skill Levels:</strong> Pure Beginners, Intermediate Grade, Instructor Candidates</p>
                </div>
              </div>

              {/* Location & Directions */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Navigation className="w-5 h-5 text-amber-400" />
                  Location, Address & Transit Guide
                </h2>

                <div className="space-y-2 text-sm text-slate-300">
                  <p className="font-semibold text-white">
                    Bathoupuri, ISBT Lokhra, Guwahati – 781035, Assam, India
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong>Nearby Landmarks:</strong> Located conveniently off the Lokhra Road near the Inter-State Bus Terminus (ISBT) Guwahati. Accessible via public city buses, auto-rickshaws, and ride-hailing services connecting Khanapara, Paltan Bazaar, and Jalukbari.
                  </p>
                </div>
              </div>

              {/* Curriculum Taught at HQ */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-amber-400" />
                  Structured Wing Chun Curriculum at this Center
                </h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Siu Nim Tao (Little Idea Empty-Hand Form)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Chum Kiu (Seeking the Bridge & Turning Mechanics)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Chi Sau (Tactile Sticking-Hands Sensitivity)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Muk Yan Jong (116 Wooden Dummy Mechanics)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Col: Leadership Card & Safety Policy */}
            <div className="space-y-6">
              {/* Lead Coach Card */}
              <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
                <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                  Instructional Supervision
                </span>
                <h3 className="text-lg font-black text-white">Sifu Amar Singh Deori</h3>
                <p className="text-xs font-semibold text-slate-400">Chief Instructor, WCMAA India</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pioneer of traditional Wing Chun Kung Fu education in North East India. Serving as National Chief Instructor and authorized examiner on national technical gradings and certificates under the WCMAA Singapore charter.
                </p>
                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2 text-[10px] text-slate-300 font-semibold">
                  <span className="bg-slate-800 px-2.5 py-1 rounded">✓ Chief Examiner</span>
                  <span className="bg-slate-800 px-2.5 py-1 rounded">✓ 35+ Yrs Experience</span>
                </div>
              </div>

              {/* Safety & Anti-Scam Notice */}
              <div className="bg-slate-900/90 rounded-2xl border border-amber-500/30 p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  Official Admissions Notice
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Zero Online Payments:</strong> WCMAA India does not collect admission fees, donations, or registrations via UPI QR codes or payment links on this website. All admissions are processed through verified in-person orientation at the dojo.
                </p>
              </div>

              {/* Explore other dojos */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs space-y-3">
                <h4 className="font-bold text-white uppercase tracking-wider">Other Guwahati Training Centers</h4>
                <div className="space-y-2">
                  <a
                    href={getRoutePath("/dojos/guwahati-beltola/")}
                    className="block p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-colors"
                  >
                    <p className="font-bold text-white">North East Academy Ground</p>
                    <p className="text-slate-400 text-[11px]">Bhetapara, Beltola, Guwahati</p>
                  </a>
                  <a
                    href={getRoutePath("/dojos/guwahati-bamunimaidam/")}
                    className="block p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-colors"
                  >
                    <p className="font-bold text-white">Bamunimaidam Dojo</p>
                    <p className="text-slate-400 text-[11px]">Bhaskar Nagar, Guwahati</p>
                  </a>
                </div>
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
