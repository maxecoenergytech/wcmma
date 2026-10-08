"use client";

import React from "react";
import { Phone, MessageSquare, ShieldCheck, UserPlus } from "lucide-react";
import { getRoutePath } from "@/utils/paths";

export default function MobileActionDock() {
  const whatsappUrl = `https://wa.me/917896962207?text=${encodeURIComponent(
    "Hello WCMAA India Secretariat, I would like to inquire about Wing Chun training, affiliation, and upcoming seminar registration."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800/90 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-2 text-center">
        {/* Quick Call */}
        <a
          href="tel:+917896962207"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-900 border border-slate-800 active:scale-95 transition-all text-slate-300 hover:text-amber-400"
          aria-label="Call Secretariat"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-900 border border-slate-800 active:scale-95 transition-all text-slate-300 hover:text-emerald-400"
          aria-label="WhatsApp Secretariat"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Verify ID */}
        <a
          href={getRoutePath("#verify")}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-900 border border-slate-800 active:scale-95 transition-all text-slate-300 hover:text-blue-400"
          aria-label="Verify ID Card"
        >
          <ShieldCheck className="w-4 h-4 text-blue-400 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Verify ID</span>
        </a>

        {/* Join / Affiliate */}
        <a
          href={getRoutePath("#join")}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 active:scale-95 transition-all text-slate-950 font-black shadow"
          aria-label="Join or Affiliate"
        >
          <UserPlus className="w-4 h-4 text-slate-950 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight">Join / Apply</span>
        </a>
      </div>
    </div>
  );
}
