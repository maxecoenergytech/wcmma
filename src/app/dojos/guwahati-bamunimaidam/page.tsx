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
  Navigation,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bamunimaidam Wing Chun Dojo & Secretariat Guwahati | WCMAA India",
  description:
    "Official administrative center and evening Wing Chun training dojo at Bhaskar Nagar, Bamunimaidam, Guwahati. Secretariat consultations and student admissions.",
  keywords: [
    "Wing Chun Bamunimaidam",
    "martial arts Bamunimaidam Guwahati",
    "kung fu training Bhaskar Nagar",
    "WCMAA India secretariat Guwahati",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/dojos/guwahati-bamunimaidam/",
  },
  openGraph: {
    title: "Bamunimaidam Wing Chun Dojo & Secretariat Guwahati | WCMAA India",
    description:
      "Official administrative center and evening training dojo at Bhaskar Nagar, Bamunimaidam, Guwahati.",
    url: "https://www.wcmaaindia.com/dojos/guwahati-bamunimaidam/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function GuwahatiBamunimaidamPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "WCMAA India Bamunimaidam Dojo & Secretariat",
    "description":
      "Administrative office and evening Wing Chun dojo in Bamunimaidam, Guwahati, Assam.",
    "url": "https://www.wcmaaindia.com/dojos/guwahati-bamunimaidam/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H.No. 9, Bhaskar Nagar, Bamunimaidam",
      "addressLocality": "Guwahati",
      "addressRegion": "Assam",
      "postalCode": "781021",
      "addressCountry": "IN",
    },
    "telephone": "+91-78969-62207",
    "openingHours": ["Mo-Su 17:00-20:00"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />

      <main className="flex-1 bg-slate-950 text-slate-100">
        <div className="bg-slate-900/60 border-b border-slate-800 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
            <a href={getRoutePath("/")} className="hover:text-amber-400">Home</a>
            <span>/</span>
            <a href={getRoutePath("#branches")} className="hover:text-amber-400">Dojos</a>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Bamunimaidam (Guwahati)</span>
          </div>
        </div>

        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                Bhaskar Nagar, Bamunimaidam, Guwahati – 781021
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Bamunimaidam Wing Chun Dojo & Secretariat (Guwahati)
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Central administrative Secretariat and evening Wing Chun training center. Open for student applications, certification verifications, and structured martial-arts evening batches.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+917896962207"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Secretariat: +91 78969 62207
                </a>
                <a
                  href="https://wa.me/917896962207?text=Hello%20WCMAA%20India,%20I%20am%20enquiring%20about%20admissions%20at%20Bamunimaidam%20Dojo,%20Guwahati"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-2"
                >
                  WhatsApp Admissions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-amber-400" />
                  Evening Batch Timings & Secretariat Hours
                </h2>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-amber-400 font-bold uppercase block">Evening Sessions</span>
                  <p className="text-lg font-black text-white mt-1">5:00 PM – 8:00 PM</p>
                  <p className="text-xs text-slate-400 mt-1">Daily evening practice batches and technical reviews</p>
                </div>
              </div>

              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Navigation className="w-5 h-5 text-amber-400" />
                  Address & Landmarks
                </h2>
                <p className="font-semibold text-white text-sm">
                  H.No. 9, Bhaskar Nagar, Bamunimaidam, Guwahati – 781021, Assam, India
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Located near the historic Bamunimaidam Bihu Mancha and Industrial Estate, easily accessible from Chandmari, Noonmati, and Zoo Road.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/90 rounded-2xl border border-amber-500/30 p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  Secretariat Verification Desk
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For formal certificate physical verification or dojo affiliation inquiries, students and academy heads can visit the Secretariat during official evening consultation hours.
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
