"use client";

import React, { useState } from "react";
import { MessageSquare, X, ChevronRight, Send } from "lucide-react";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const whatsappNumber = "917896962207"; // Official General Secretary helpline from associationData

  const options = [
    {
      title: "Join Training",
      subtitle: "Inquire about dojo locations & class timings",
      message: "Hello WCMAA India, I am interested in joining Wing Chun training classes. Please share details regarding the nearest dojo and admission.",
    },
    {
      title: "Academy Affiliation",
      subtitle: "Affiliate your existing martial arts academy",
      message: "Hello WCMAA India Secretariat, I run a martial arts school and would like to inquire about the National Dojo Affiliation Program (NDAP).",
    },
    {
      title: "General Enquiry",
      subtitle: "Certifications, seminars & credentials",
      message: "Hello WCMAA India, I have a general enquiry regarding upcoming seminars, certifications, or association activities.",
    },
  ];

  const handleSelect = (msg: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40">
      {/* Popover Options Card */}
      {open && (
        <div className="mb-3 w-80 bg-slate-900 border-2 border-emerald-500/50 rounded-2xl p-4 shadow-2xl animate-fadeIn space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <MessageSquare className="w-4 h-4 fill-current text-white" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white">WCMAA India Desk</h4>
                <p className="text-[10px] text-emerald-400 font-semibold">Online • Official WhatsApp</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
              aria-label="Close WhatsApp Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300">
            How can the national secretariat assist you today?
          </p>

          <div className="space-y-1.5">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(opt.message)}
                className="w-full text-left p-2.5 rounded-xl bg-slate-950 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <strong className="block text-xs text-white group-hover:text-emerald-400 transition-colors">
                    {opt.title}
                  </strong>
                  <span className="text-[10px] text-slate-400">{opt.subtitle}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>

          <div className="pt-1 text-center">
            <span className="text-[10px] text-slate-500">Helpline: +91 78969 62207</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-emerald-900/50 border border-emerald-400/40"
        aria-label="Contact WCMAA India on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.564 5.719 5.873-1.543c1.68 1.028 3.659 1.624 5.783 1.624 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp Desk</span>
      </button>
    </div>
  );
}
