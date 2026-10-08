import React from "react";
import PremiumLayout from "@/components/premium/PremiumLayout";

export const metadata = {
  title: "Premium Version Preview | WCMAA India",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PremiumPreviewPage() {
  return (
    <>
      {/* Non-intrusive preview banner for owner/developer */}
      <div className="bg-gradient-to-r from-red-800 via-amber-600 to-red-800 text-white text-xs font-black py-2 px-4 text-center tracking-wide sticky top-0 z-[60] shadow-md flex items-center justify-center gap-2">
        <span>PREVIEW MODE: PREMIUM VERSION (CINEMATIC 3D)</span>
        <span className="opacity-75 font-normal">• Not exposed to regular visitors</span>
      </div>
      <PremiumLayout />
    </>
  );
}
