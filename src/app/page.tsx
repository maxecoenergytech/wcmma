import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HeritageTimeline from "@/components/HeritageTimeline";
import AboutSection from "@/components/AboutSection";
import TrainingPathway from "@/components/TrainingPathway";
import WoodenDummySection from "@/components/WoodenDummySection";
import WhyTrainSection from "@/components/WhyTrainSection";
import IndiaDojoMap from "@/components/IndiaDojoMap";
import BranchLocator from "@/components/BranchLocator";
import Leadership from "@/components/Leadership";
import StudentsParentsSection from "@/components/StudentsParentsSection";
import AffiliationShowcase from "@/components/AffiliationShowcase";
import VerificationPortal from "@/components/VerificationPortal";
import FoundationEvent from "@/components/FoundationEvent";
import GallerySection from "@/components/GallerySection";
import MembershipApplication from "@/components/MembershipApplication";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionDock from "@/components/MobileActionDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Header & Navigation (Transparent over hero, frosted glass on scroll) */}
      <Navbar />

      {/* 2. Hero Section (Full-screen 3D WebGL Muk Yan Jong with subtle mouse parallax) */}
      <Hero />

      {/* 3. Trust Bar (Registration & Credentials) */}
      <TrustBar />

      {/* 4. Section: 35 Years Heritage Timeline (1991 to 2026) */}
      <HeritageTimeline />

      {/* 5. Section: About WCMAA India */}
      <AboutSection />

      {/* 6. Section: The Art of Wing Chun (5 Interactive Cards) */}
      <TrainingPathway />

      {/* 7. Section: Wooden Dummy Apparatus (Train The Structure. Develop The Skill.) */}
      <WoodenDummySection />

      {/* 8. Section: Why WCMAA India? (6 Premium Pillars) */}
      <WhyTrainSection />

      {/* 9. Section: India Dojo Network (Interactive Vector Map) */}
      <IndiaDojoMap />

      {/* 10. Section: Find a Dojo (Filterable Directory & Contact) */}
      <BranchLocator />

      {/* 11. Section: Executive Leadership & Verified Profiles */}
      <Leadership />

      {/* 12. Section: Students & Parents (Who Can Train) */}
      <StudentsParentsSection />

      {/* 13. Section: Affiliations & Associations */}
      <AffiliationShowcase />

      {/* 14. Section: Official Credential Verification */}
      <VerificationPortal />

      {/* 15. Section: Events & 35th Foundation Seminar (Completed Event Recap) */}
      <FoundationEvent />

      {/* 16. Section: Photographic Archive Gallery */}
      <GallerySection />

      {/* 17. Section: Your Journey Starts Here (Membership & Affiliation Forms) */}
      <MembershipApplication />

      {/* 18. Section: Final Cinematic Call to Action (Discipline Is The Foundation) */}
      <FinalCta />

      {/* 19. Footer */}
      <div className="pb-16 lg:pb-0">
        <Footer />
      </div>

      {/* 20. Floating WhatsApp Desk */}
      <FloatingWhatsApp />

      {/* 21. Mobile Action Dock */}
      <MobileActionDock />
    </main>
  );
}
