"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ASSOCIATION_INFO } from "@/data/associationData";
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Copyright,
  Building,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<
    "org" | "privacy" | "terms" | "disclaimer" | "copyright"
  >("org");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#050a12] via-[#091526] to-[#040810] py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Official Governance & Documentation
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Legal & Organizational Information
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Official registration details, privacy practices, terms of website use, disclaimer, and intellectual property statements of Wing Chun Martial Arts Association India.
          </p>
          <p className="text-xs text-amber-300 font-mono">
            Website information last reviewed: October 2026
          </p>
        </div>
      </section>

      {/* Tabs Bar */}
      <section className="bg-slate-900 border-b border-slate-800 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveTab("org")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "org"
                  ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              Organizational Details
            </button>

            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "privacy"
                  ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              Privacy Policy
            </button>

            <button
              onClick={() => setActiveTab("terms")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "terms"
                  ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Terms & Conditions
            </button>

            <button
              onClick={() => setActiveTab("disclaimer")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "disclaimer"
                  ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Disclaimer
            </button>

            <button
              onClick={() => setActiveTab("copyright")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === "copyright"
                  ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                  : "bg-slate-950 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              <Copyright className="w-3.5 h-3.5" />
              Copyright & IP
            </button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 sm:py-16 flex-grow bg-[#050a12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* TAB 1: ORGANIZATIONAL DETAILS */}
          {activeTab === "org" && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Legal Registry & Office Bearers
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Legal & Organizational Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-medium block">Organization Name:</span>
                  <strong className="text-white text-base">
                    Wing Chun Martial Arts Association India
                  </strong>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-medium block">Registration Number:</span>
                  <strong className="text-amber-400 font-mono text-base">
                    KAM/240/W/08 of 2005–2006
                  </strong>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-medium block">Legal Framework:</span>
                  <span className="text-slate-200">
                    Registered under the applicable society/association registration framework in Assam.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-medium block">Founding & Milestone:</span>
                  <span className="text-slate-200">
                    Established in 1991 (35 Years of Martial Arts Heritage | 1991–2026).
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <h3 className="font-bold text-white text-base">Office Bearers & Key Appointments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="text-xs text-amber-400 font-bold uppercase">Founder & General Secretary</p>
                    <p className="text-base font-black text-white mt-1">Sifu Sankar Dutta</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Founder of WCMAA India. Joint Secy. Gen. KUOSHU Federation India; Vice President Assam Kungfu Federation. Secretariat Head.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="text-xs text-blue-400 font-bold uppercase">Chief Instructor</p>
                    <p className="text-base font-black text-white mt-1">Sifu Amar Singh Deori</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Pioneer of Wing Chun Kung Fu training in Northeast India since 1991. Authorized examiner for national gradings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <h3 className="font-bold text-white text-base">Official Addresses & Secretariats</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Registered Headquarters:</strong>
                      <span>Bathoupuri, ISBT Lokhra, Guwahati - 781035, Assam, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Official Training Ground:</strong>
                      <span>North East Academy Playground, Bhetapara, Beltola, Guwahati, Assam</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Administrative Secretariat:</strong>
                      <span>H.No. 9, Bhaskar Nagar, Bamunimaidam, Guwahati - 781021, Assam</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <h3 className="font-bold text-white text-base">Official Communication Channels</h3>
                <div className="flex flex-wrap gap-4 text-slate-300">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>General Secretary Desk: <strong>+91 78969 62207</strong></span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Office: <strong>+91 90852 96178</strong></span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Email: <strong>duttasankar88@gmail.com</strong></span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === "privacy" && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Data Governance
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Privacy Policy
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-white text-base">1. Information We Collect</h3>
                <p>
                  Wing Chun Martial Arts Association India collects only information necessary for martial arts inquiries, academy affiliation reviews, seminar records, and credential verification. This may include:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
                  <li><strong>Enquiry & Contact Information:</strong> Name, phone number, WhatsApp contact, email address, city, state, and martial arts background submitted voluntarily via contact forms.</li>
                  <li><strong>Academy Affiliation Data:</strong> Dojo name, head instructor credentials, facility location, and experience details submitted for technical affiliation reviews.</li>
                  <li><strong>Verification Data:</strong> Official credential identification numbers (e.g., membership or certificate numbers) processed strictly for record validation.</li>
                </ul>

                <h3 className="font-bold text-white text-base pt-2">2. How Information is Used</h3>
                <p>
                  Collected data is used solely to respond to student inquiries, process academy affiliation requests, provide training calendar updates, and verify membership certificates. We do not sell, rent, or monetize personal information to third-party commercial marketing entities.
                </p>

                <h3 className="font-bold text-white text-base pt-2">3. WhatsApp & Direct Communication</h3>
                <p>
                  When you initiate contact through WhatsApp or direct telephone calls, your telephone number and message history are handled directly between you and the General Secretary Desk under WhatsApp's respective end-to-end encryption protocols.
                </p>

                <h3 className="font-bold text-white text-base pt-2">4. Credential Verification Privacy</h3>
                <p>
                  Our public verification portal displays minimal credential validation information (Credential ID, initials/name, rank, validity status, and issue year). Sensitive private details such as full dates of birth and personal residential addresses are not disclosed in public search results.
                </p>

                <h3 className="font-bold text-white text-base pt-2">5. Cookies & Analytics</h3>
                <p>
                  This website is statically hosted on GitHub Pages and does not utilize intrusive third-party advertising cookies or profiling trackers. Standard web server access logs (IP address, user agent) may be automatically processed by the hosting provider for security and network integrity.
                </p>

                <h3 className="font-bold text-white text-base pt-2">6. User Rights & Contact</h3>
                <p>
                  Practitioners and visitors may request review, correction, or deletion of their submitted contact information by writing to the General Secretary at <strong>duttasankar88@gmail.com</strong> or calling <strong>+91 78969 62207</strong>.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: TERMS & CONDITIONS */}
          {activeTab === "terms" && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Site Terms of Use
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Terms & Conditions
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-white text-base">1. Acceptance of Terms</h3>
                <p>
                  By accessing and browsing the official website of Wing Chun Martial Arts Association India (WCMAA India), you acknowledge and agree to these terms, all applicable laws, and regulatory frameworks in India.
                </p>

                <h3 className="font-bold text-white text-base pt-2">2. Website Usage & Educational Purpose</h3>
                <p>
                  The text, syllabus breakdowns, historical timeline, and media on this website are provided for informational and educational purposes. Browsing the website does not constitute official certification, rank conferral, or formal instructor appointment.
                </p>

                <h3 className="font-bold text-white text-base pt-2">3. Academy Affiliation Terms</h3>
                <p>
                  Dojo and academy affiliations are subject to mutual review, adherence to the standardized WCMAA India curriculum, and formal technical evaluation by Chief Instructor Amar Singh Deori and the Executive Committee. Affiliation benefits, royalty structures, and territorial considerations are governed by specific affiliation agreements executed directly with the association.
                </p>

                <h3 className="font-bold text-white text-base pt-2">4. Credential Verification Registry</h3>
                <p>
                  The online verification portal reflects association records. In the event of a technical discrepancy or missing archive record, the physical certificate bearing the official seal and authorized signature of Founder & General Secretary Sifu Sankar Dutta or Chief Instructor Sifu Amar Singh Deori shall be verified manually by the Secretariat.
                </p>

                <h3 className="font-bold text-white text-base pt-2">5. Limitation of Liability</h3>
                <p>
                  WCMAA India and its officers shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website, nor from training practices undertaken without direct qualified instructor supervision.
                </p>

                <h3 className="font-bold text-white text-base pt-2">6. Changes to Information</h3>
                <p>
                  Information, class timings, contact numbers, and guidelines may be updated periodically without prior notice to reflect operational adjustments across affiliated branches.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: DISCLAIMER */}
          {activeTab === "disclaimer" && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Physical Training & Health Notice
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Martial Arts Disclaimer
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Martial arts and combat sports involve physical exertion, tactile sensitivity drills, and body conditioning. Always train under the qualified supervision of a certified instructor.
                  </p>
                </div>

                <h3 className="font-bold text-white text-base">1. Physical Activity & Health Advisory</h3>
                <p>
                  Wing Chun Kung Fu training involves physical movement, stances, stepping, and contact drills such as Chi Sau. Prospective students and practitioners with pre-existing medical conditions, cardiovascular concerns, joint issues, or spinal ailments should consult a licensed healthcare professional before commencing rigorous martial training.
                </p>

                <h3 className="font-bold text-white text-base pt-2">2. Individual Results Vary</h3>
                <p>
                  Proficiency, physical conditioning, reflex development, and belt progression in Wing Chun depend heavily on individual dedication, regular attendance, personal biomechanics, and consistent instruction. WCMAA India makes no unconditional guarantees of outcome, tournament victory, or defensive encounters.
                </p>

                <h3 className="font-bold text-white text-base pt-2">3. Non-Violent Philosophy</h3>
                <p>
                  The techniques taught within the WCMAA India curriculum are intended strictly for self-defense, physical fitness, character cultivation, and traditional martial arts education. The association strictly prohibits the aggressive or unlawful misuse of martial skills.
                </p>

                <h3 className="font-bold text-white text-base pt-2">4. Independent Dojos & Regional Centers</h3>
                <p>
                  While affiliated dojos follow the standardized syllabus and grading standards of WCMAA India, individual academies operate under local administrative responsibility. Students are advised to observe dojo safety rules and adhere to local safety guidelines.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: COPYRIGHT & IP */}
          {activeTab === "copyright" && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Intellectual Property Notice
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Copyright & Intellectual Property
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 font-mono text-xs sm:text-sm">
                  © 1991–2026 Wing Chun Martial Arts Association India. All Rights Reserved.
                </div>

                <h3 className="font-bold text-white text-base">1. Proprietary Association Assets</h3>
                <p>
                  All content published on this website—including but not limited to the WCMAA India name, organizational emblem, logos, photographs from the association archives, video documentation, training syllabi descriptions, course outlines, and custom website design—is the intellectual property of Wing Chun Martial Arts Association India.
                </p>

                <h3 className="font-bold text-white text-base pt-2">2. Restrictions on Reproduction</h3>
                <p>
                  No part of this website, including photographs of leadership (Sifu Amar Singh Deori, Sifu Sankar Dutta), event posters, or curriculum frameworks, may be reproduced, redistributed, scraped, mirrored, or utilized for commercial purposes without prior written authorization from the General Secretariat.
                </p>

                <h3 className="font-bold text-white text-base pt-2">3. Website Engineering Attribution</h3>
                <p>
                  This portal was engineered and optimized by <strong>maxecoenergy&tech</strong> on behalf of Wing Chun Martial Arts Association India.
                </p>

                <h3 className="font-bold text-white text-base pt-2">4. Inquiries Regarding Media Use</h3>
                <p>
                  Journalists, academic researchers, and affiliated martial schools requesting permission to use official photographs or historical archival material may contact:
                  <br />
                  <strong>General Secretary Desk:</strong> +91 78969 62207 | duttasankar88@gmail.com
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="pb-16 lg:pb-0">
        <Footer />
      </div>
      <FloatingWhatsApp />
      <MobileActionDock />
    </main>
  );
}
