import React from "react";
import SimpleLayout from "@/components/simple/SimpleLayout";

export const metadata = {
  title: "Simple Version Preview | WCMAA India",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SimplePreviewPage() {
  return (
    <>
      {/* Non-intrusive preview banner for owner/developer */}
      <div className="bg-amber-600 text-slate-950 text-xs font-black py-2 px-4 text-center tracking-wide sticky top-0 z-[60] shadow-md flex items-center justify-center gap-2">
        <span>PREVIEW MODE: SIMPLE VERSION (CLEAN & LIGHTWEIGHT)</span>
        <span className="opacity-75 font-normal">• Not exposed to regular visitors</span>
      </div>
      <SimpleLayout />
    </>
  );
}
