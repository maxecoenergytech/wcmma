import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import WhyTrainSection from "@/components/WhyTrainSection";
import TrainingPathway from "@/components/TrainingPathway";
import Leadership from "@/components/Leadership";
import BranchLocator from "@/components/BranchLocator";
import StudentsParentsSection from "@/components/StudentsParentsSection";
import AffiliationShowcase from "@/components/AffiliationShowcase";
import VerificationPortal from "@/components/VerificationPortal";
import FoundationEvent from "@/components/FoundationEvent";
import HeritageTimeline from "@/components/HeritageTimeline";
import GallerySection from "@/components/GallerySection";
import FinalCta from "@/components/FinalCta";
import MembershipApplication from "@/components/MembershipApplication";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionDock from "@/components/MobileActionDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Section 1: Hero Section */}
      <Hero />

      {/* 3. Section 2: Trust Bar */}
      <TrustBar />

      {/* 4. Section 3: About WCMAA India */}
      <AboutSection />

      {/* 5. Section 4: Why Train with WCMAA India? (6 Cards) */}
      <WhyTrainSection />

      {/* 6. Section 5: Wing Chun Training Pathway */}
      <TrainingPathway />

      {/* 7. Section 6: Leadership & Authentic Masters Practice */}
      <Leadership />

      {/* 8. Section 7: Find a Dojo (Dojo Directory) */}
      <BranchLocator />

      {/* 9. Section 8: Students and Parents (Who Can Train) */}
      <StudentsParentsSection />

      {/* 10. Section 9: Academy Affiliation */}
      <AffiliationShowcase />

      {/* 11. Section 10: Official Credential Verification */}
      <VerificationPortal />

      {/* 12. Section 11: Events & 35th Foundation Seminar */}
      <FoundationEvent />

      {/* 13. Section 12: 35 Years of Heritage Timeline */}
      <HeritageTimeline />

      {/* 14. Section 13: Image Gallery */}
      <GallerySection />

      {/* 15. Section 14: Final Call to Action */}
      <FinalCta />

      {/* 16. In-Page Membership & Affiliation Application */}
      <MembershipApplication />

      {/* 17. Footer */}
      <div className="pb-16 lg:pb-0">
        <Footer />
      </div>

      {/* 18. Floating WhatsApp Desk */}
      <FloatingWhatsApp />

      {/* 19. Mobile Action Dock */}
      <MobileActionDock />
    </main>
  );
}
