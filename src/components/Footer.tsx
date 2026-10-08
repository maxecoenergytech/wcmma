import React from "react";
import { ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath, getRoutePath } from "@/utils/paths";
import { MapPin, Phone, Mail, Award, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Banner inside Footer */}
      <div className="bg-slate-900 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-sm font-extrabold text-amber-400">
                "{ASSOCIATION_INFO.taglines.primary}"
              </p>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                {ASSOCIATION_INFO.taglines.secondary}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Celebrating 35 Years of Dedicated Martial Heritage</span>
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
              Wing Chun Martial Arts Association India. Dedicated to preserving authentic traditional Wing Chun Kung Fu, wooden dummy mechanics, and practical self-defense.
            </p>
            <div className="text-[11px] text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-300">Govt. Regn:</strong> {ASSOCIATION_INFO.registrationNo}
              </p>
              <p>
                <strong className="text-slate-300">International:</strong> {ASSOCIATION_INFO.singaporeAffiliation}
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
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Official Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={getRoutePath("#about")} className="hover:text-amber-400 transition-colors">
                  About Association & Lineage
                </a>
              </li>
              <li>
                <a href={getRoutePath("#leadership")} className="hover:text-amber-400 transition-colors">
                  Executive Sifus & Committee
                </a>
              </li>
              <li>
                <a href={getRoutePath("#syllabus")} className="hover:text-amber-400 transition-colors">
                  Syllabus & Forms Breakdown
                </a>
              </li>
              <li>
                <a href={getRoutePath("#branches")} className="hover:text-amber-400 transition-colors">
                  All-India Dojo Locator
                </a>
              </li>
              <li>
                <a href={getRoutePath("#event")} className="hover:text-amber-400 transition-colors">
                  35th Foundation Day Seminar
                </a>
              </li>
              <li>
                <a href={getRoutePath("/affiliation")} className="hover:text-amber-400 transition-colors text-amber-300 font-semibold">
                  Dojo Affiliation & Sifu Accreditation
                </a>
              </li>
              <li>
                <a href={getRoutePath("#verify")} className="hover:text-emerald-400 transition-colors text-emerald-300">
                  Verify Membership Card
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Addresses */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Official Centers
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-slate-300 font-bold">National Headquarters:</p>
                <p className="text-slate-400">{ASSOCIATION_INFO.contacts.hqAddress}</p>
              </div>
              <div>
                <p className="text-slate-300 font-bold">Training Ground:</p>
                <p className="text-slate-400">{ASSOCIATION_INFO.contacts.trainingGround}</p>
              </div>
              <div>
                <p className="text-slate-300 font-bold">Secretariat & Office:</p>
                <p className="text-slate-400">{ASSOCIATION_INFO.contacts.residenceOffice}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Leadership Helpline */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              Contact & Helplines
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-300 font-bold">General Secretary Desk:</p>
              {ASSOCIATION_INFO.contacts.phones.map((phone, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="hover:text-amber-300">
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${ASSOCIATION_INFO.contacts.email}`} className="hover:text-blue-300">
                  {ASSOCIATION_INFO.contacts.email}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <svg className="w-3.5 h-3.5 text-[#1877F2] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a
                  href={ASSOCIATION_INFO.contacts.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1877F2] transition-colors truncate"
                >
                  Facebook Community
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Wing Chun Martial Arts Association India. All Rights Reserved.
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
            <a
              href={ASSOCIATION_INFO.contacts.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all"
              aria-label="Visit Facebook Page"
              title="Official Facebook Page"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <span className="text-amber-400 font-semibold">
              {ASSOCIATION_INFO.taglines.motto}
            </span>
            <a
              href="#"
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
