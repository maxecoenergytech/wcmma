import React from "react";
import Navbar from "@/components/Navbar";
import SimpleHero from "@/components/simple/SimpleHero";
import TrustBar from "@/components/TrustBar";
import HeritageTimeline from "@/components/HeritageTimeline";
import AboutSection from "@/components/AboutSection";
import TrainingPathway from "@/components/TrainingPathway";
import WhyTrainSection from "@/components/WhyTrainSection";
import BranchLocator from "@/components/BranchLocator";
import Leadership from "@/components/Leadership";
import StudentsParentsSection from "@/components/StudentsParentsSection";
import AffiliationShowcase from "@/components/AffiliationShowcase";
import VerificationPortal from "@/components/VerificationPortal";
import FoundationEvent from "@/components/FoundationEvent";
import GallerySection from "@/components/GallerySection";
import MembershipApplication from "@/components/MembershipApplication";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionDock from "@/components/MobileActionDock";

export default function SimpleLayout() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Standard Header & Navigation */}
      <Navbar />

      {/* 2. Simple Hero (Clean, fast, traditional, zero 3D overhead) */}
      <SimpleHero />

      {/* 3. Official Trust Bar */}
      <TrustBar />

      {/* 4. 35 Years Heritage Timeline (1991 to 2026) */}
      <HeritageTimeline />

      {/* 5. About WCMAA India */}
      <AboutSection />

      {/* 6. The Art of Wing Chun */}
      <TrainingPathway />

      {/* 7. Why WCMAA India (6 Core Pillars) */}
      <WhyTrainSection />

      {/* 8. National Dojo Directory */}
      <BranchLocator />

      {/* 9. Leadership & Master Profiles */}
      <Leadership />

      {/* 10. Students & Parents (Who Can Train) */}
      <StudentsParentsSection />

      {/* 11. Affiliations & Charters */}
      <AffiliationShowcase />

      {/* 12. Credential Verification Portal */}
      <VerificationPortal />

      {/* 13. 35th Foundation Seminar (Completed Event Recap) */}
      <FoundationEvent />

      {/* 14. Photographic Gallery */}
      <GallerySection />

      {/* 15. Your Journey Starts Here (Enrolment & Affiliation Form) */}
      <MembershipApplication />

      {/* 16. Footer */}
      <div className="pb-16 lg:pb-0">
        <Footer />
      </div>

      {/* 17. Floating WhatsApp Desk */}
      <FloatingWhatsApp />

      {/* 18. Mobile Action Dock */}
      <MobileActionDock />
    </main>
  );
}
