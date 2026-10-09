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
  Flame,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wing Chun Classes at North East Academy Beltola, Guwahati | WCMAA India",
  description:
    "Traditional Wing Chun Kung Fu training ground at North East Academy, Bhetapara, Beltola, Guwahati. Led by Founder Sifu Sankar Dutta. Weekend and weekday morning batches.",
  keywords: [
    "Wing Chun Beltola",
    "Wing Chun Bhetapara Guwahati",
    "martial arts Beltola Guwahati",
    "North East Academy kung fu",
    "Wing Chun classes Guwahati Assam",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/dojos/guwahati-beltola/",
  },
  openGraph: {
    title: "Wing Chun Classes at North East Academy Beltola, Guwahati | WCMAA India",
    description:
      "Traditional Wing Chun Kung Fu training ground at North East Academy, Bhetapara, Beltola, Guwahati. Led by Founder Sifu Sankar Dutta.",
    url: "https://www.wcmaaindia.com/dojos/guwahati-beltola/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function GuwahatiBeltolaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "North East Academy Wing Chun Training Ground (Beltola)",
    "description":
      "Historic training ground for Wing Chun Martial Arts Association India located at North East Academy in Beltola, Guwahati.",
    "url": "https://www.wcmaaindia.com/dojos/guwahati-beltola/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "North East Academy Playground, Bhetapara, Beltola",
      "addressLocality": "Guwahati",
      "addressRegion": "Assam",
      "postalCode": "781028",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1264",
      "longitude": "91.7925",
    },
    "telephone": "+91-90852-96178",
    "openingHours": ["Tu,Th,Sa 06:00-08:00", "Su 07:00-10:00"],
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
            <span className="text-amber-400 font-semibold">Beltola Dojo (Guwahati)</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                Bhetapara, Beltola, Guwahati – 781028
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Wing Chun Training Ground — North East Academy (Beltola, Guwahati)
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The open-air training ground where generations of Wing Chun practitioners, instructors, and martial-arts disciples have trained since 1991 under <strong>Founder & General Secretary Sifu Sankar Dutta</strong>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+919085296178"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Beltola Desk: +91 90852 96178
                </a>
                <a
                  href="https://wa.me/917896962207?text=Hello%20WCMAA%20India,%20I%20am%20enquiring%20about%20Wing%20Chun%20training%20at%20Beltola%20Training%20Ground,%20Guwahati"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-2"
                >
                  WhatsApp Admissions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Grid */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Batch Timings */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-amber-400" />
                  Class Schedule & Sunday Special Intensives
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs text-amber-400 font-bold uppercase block">Weekday Mornings</span>
                    <p className="text-lg font-black text-white mt-1">6:00 AM – 8:00 AM</p>
                    <p className="text-xs text-slate-400 mt-1">Tuesday, Thursday, Saturday</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs text-amber-400 font-bold uppercase block">Sunday Special Masterclass</span>
                    <p className="text-lg font-black text-white mt-1">7:00 AM – 10:00 AM</p>
                    <p className="text-xs text-slate-400 mt-1">Intensive Chi Sau, Forms & Wooden Dummy</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <p><strong>Training Location:</strong> Open-air martial ground inside North East Academy campus.</p>
                  <p><strong>Programs:</strong> Youth Discipline (10–17 years) | Adult Conditioning & Biomechanics (18+)</p>
                </div>
              </div>

              {/* Transit & Landmarks */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Navigation className="w-5 h-5 text-amber-400" />
                  Address & Neighborhood Guide
                </h2>

                <div className="space-y-2 text-sm text-slate-300">
                  <p className="font-semibold text-white">
                    North East Academy Playground, Bhetapara, Beltola, Guwahati – 781028, Assam
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong>Transit Access:</strong> Well-connected to Beltola Tiniali, Basistha, Six Mile, and VIP Road. Parking is available within the school surroundings for students and parents during morning batch hours.
                  </p>
                </div>
              </div>

              {/* Training Highlights */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Flame className="w-5 h-5 text-amber-400" />
                  Training Ground Heritage & Drills
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The Beltola training ground provides authentic outdoor training conditions emphasizing grounded stance stability (Yee Jee Kim Yeung Ma), explosive short-range power (Jing), and tactile sticking-hands drills (Chi Sau) under the direct supervision of Sifu Sankar Dutta.
                </p>
              </div>
            </div>

            {/* Right Column: Instructor Profile */}
            <div className="space-y-6">
              <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow mb-2">
                  <img
                    src={getAssetPath("/assets/sifu_sankar_dutta_avatar.webp")}
                    alt="Sifu Sankar Dutta - Founder & General Secretary"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider block">
                  Founder & Head Coach
                </span>
                <h3 className="text-lg font-black text-white">Sifu Sankar Dutta</h3>
                <p className="text-xs font-semibold text-slate-400">Founder & General Secretary, WCMAA India</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specialist in the 116 movements of the Wooden Dummy (Muk Yan Jong) and traditional weapon forms. Oversees youth development, referee standards, and regular batches at North East Academy ground.
                </p>
                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2 text-[10px] text-slate-300 font-semibold">
                  <span className="bg-slate-800 px-2.5 py-1 rounded">✓ Founder</span>
                  <span className="bg-slate-800 px-2.5 py-1 rounded">✓ Wooden Dummy 116</span>
                  <span className="bg-slate-800 px-2.5 py-1 rounded">✓ National Referee</span>
                </div>
              </div>

              {/* Safety notice */}
              <div className="bg-slate-900/90 rounded-2xl border border-amber-500/30 p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  Direct In-Person Enrollment
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Prospective students and guardians are encouraged to attend a Sunday morning orientation to observe training before enrolling. All admissions are conducted in-person. Zero online fees are collected.
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
