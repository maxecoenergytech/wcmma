import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import { MapPin, Phone, Mail, Award, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 relative overflow-hidden">
      {/* Indian National Tricolor Accent Ribbon */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#FF671F] via-[#FFFFFF] to-[#046A38] opacity-80" aria-hidden="true" />

      {/* Subtle India Green Ambient Ground Glow */}
      <div className="absolute -bottom-10 right-1/4 w-96 h-64 bg-[#046A38]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Top Banner inside Footer */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-base font-extrabold text-white">
                Wing Chun Martial Arts Association India
              </h3>
              <p className="text-xs text-amber-400 font-semibold mt-0.5">
                35 Years of Wing Chun Heritage in India | 1991–2026
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Traditional Wing Chun Training • Academy Network • Instructor Development • Grading • Events
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Registration: {ASSOCIATION_INFO.registrationNo}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Association Bio & Emblem */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={getAssetPath("/assets/wcmaai_logo_sm.webp")}
                alt="WCMAA India Logo"
                width={48}
                height={48}
                loading="lazy"
                className="w-12 h-12 rounded-full bg-white p-0.5 object-contain"
              />
              <div>
                <h4 className="font-extrabold text-white text-sm">WCMAA INDIA</h4>
                <p className="text-[11px] text-amber-400 font-serif">詠春拳</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Wing Chun Martial Arts Association India — an organization focused on traditional Wing Chun training, instructor development, academy affiliation, grading, and martial arts education.
            </p>
            <div className="text-[11px] text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-300">Registration:</strong> {ASSOCIATION_INFO.registrationNo}
              </p>
              <p className="text-[10px] text-slate-500">
                (Registered under the applicable society/association registration framework in Assam)
              </p>
              <p>
                <strong className="text-slate-300">International Charter:</strong> {ASSOCIATION_INFO.singaporeAffiliation}
              </p>
              <p>
                <strong className="text-slate-300">Technical Association:</strong> The World Kuoshu Federation (TWKSF)
              </p>
            </div>
            <div className="pt-1">
              <a
                href={ASSOCIATION_INFO.contacts.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1877F2]/10 border border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all text-xs font-bold group"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Official Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={getRoutePath("/")} className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href={getRoutePath("#about")} className="hover:text-amber-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href={getRoutePath("#syllabus")} className="hover:text-amber-400 transition-colors">
                  Wing Chun
                </a>
              </li>
              <li>
                <a href={getRoutePath("#syllabus")} className="hover:text-amber-400 transition-colors">
                  Syllabus
                </a>
              </li>
              <li>
                <a href={getRoutePath("#branches")} className="hover:text-amber-400 transition-colors">
                  Dojo Directory
                </a>
              </li>
              <li>
                <a href={getRoutePath("#leadership")} className="hover:text-amber-400 transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href={getRoutePath("#hall-of-fame")} className="hover:text-amber-400 transition-colors text-amber-300 font-semibold">
                  Hall of Fame (Black Belts)
                </a>
              </li>
              <li>
                <a href={getRoutePath("/locations/assam/")} className="hover:text-amber-400 transition-colors text-amber-300">
                  Assam & Northeast Hub
                </a>
              </li>
              <li>
                <a href={getRoutePath("/dojos/guwahati-national-hq/")} className="hover:text-amber-400 transition-colors">
                  Guwahati National HQ
                </a>
              </li>
              <li>
                <a href={getRoutePath("/dojos/guwahati-beltola/")} className="hover:text-amber-400 transition-colors">
                  Beltola Ground (Guwahati)
                </a>
              </li>
              <li>
                <a href={getRoutePath("/programs/youth/")} className="hover:text-emerald-400 transition-colors">
                  Youth Program (10–17)
                </a>
              </li>
              <li>
                <a href={getRoutePath("/programs/adults/")} className="hover:text-blue-400 transition-colors">
                  Adult Training (18–40)
                </a>
              </li>
              <li>
                <a href={getRoutePath("/partnerships/schools-colleges/")} className="hover:text-purple-300 transition-colors">
                  School & College Workshops
                </a>
              </li>
              <li>
                <a href={getRoutePath("/affiliation/")} className="hover:text-amber-400 transition-colors text-amber-300 font-semibold">
                  Affiliations
                </a>
              </li>
              <li>
                <a href={getRoutePath("#event")} className="hover:text-amber-400 transition-colors text-amber-300">
                  Events
                </a>
              </li>
              <li>
                <a href={getRoutePath("#verify")} className="hover:text-emerald-400 transition-colors text-emerald-300">
                  Verify
                </a>
              </li>
              <li>
                <a href={getRoutePath("#join")} className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Governance Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={getRoutePath("/privacy")} className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={getRoutePath("/terms")} className="hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href={getRoutePath("/disclaimer")} className="hover:text-amber-400 transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href={getRoutePath("/copyright")} className="hover:text-amber-400 transition-colors">
                  Copyright & Intellectual Property
                </a>
              </li>
              <li>
                <a href={getRoutePath("/legal")} className="hover:text-amber-400 transition-colors text-amber-300 font-medium">
                  Legal & Organizational Information →
                </a>
              </li>
            </ul>

            <div className="pt-4 space-y-2 text-xs">
              <h5 className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">
                Official Secretariats
              </h5>
              <div>
                <p className="text-slate-300 font-semibold">Registered HQ:</p>
                <p className="text-slate-400 text-[11px]">{ASSOCIATION_INFO.contacts.hqAddress}</p>
              </div>
              <div>
                <p className="text-slate-300 font-semibold">Training Grounds:</p>
                <p className="text-slate-400 text-[11px]">{ASSOCIATION_INFO.contacts.trainingGround}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & General Secretary Desk */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Contact Information
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-[11px] text-amber-400 uppercase font-bold block">
                  General Secretary Desk
                </span>
                <p className="text-white font-bold">{ASSOCIATION_INFO.contacts.generalSecretary}</p>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <a
                    href={`tel:${ASSOCIATION_INFO.contacts.primaryPhone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-amber-300 font-medium"
                  >
                    {ASSOCIATION_INFO.contacts.primaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <a
                    href="tel:+919085296178"
                    className="hover:text-slate-200"
                  >
                    +91 90852 96178
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${ASSOCIATION_INFO.contacts.email}`}
                  className="hover:text-blue-300 truncate"
                >
                  {ASSOCIATION_INFO.contacts.email}
                </a>
              </div>

              <div className="pt-2">
                <p className="text-[11px] text-slate-400">
                  <strong className="text-slate-300">Administrative Office:</strong>
                  <br />
                  {ASSOCIATION_INFO.contacts.residenceOffice}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Anti-Fraud Notice */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-3">
          <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Security & Anti-Fraud Notice:</strong> WCMAA India does not collect online payments, UPI transfers, donations, registration fees, OTPs, PINs, passwords, or banking credentials through this website. All interactions are strictly informational and conducted through official secretariat communication channels. Beware of fraudulent requests or unauthorized impersonation.
          </p>
        </div>

        {/* Bottom Bar per Prompt Item 14 */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © 1991–2026 Wing Chun Martial Arts Association India. All Rights Reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p className="text-slate-400">
              Developed by{" "}
              <span className="text-amber-400 font-semibold tracking-wide">
                maxecoenergy&tech
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">
              Last Updated: October 2026
            </span>
            <span className="text-slate-700">•</span>
            <a
              href="#"
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
