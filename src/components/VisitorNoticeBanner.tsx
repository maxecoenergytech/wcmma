"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getRoutePath } from "@/utils/paths";
import {
  X,
  Compass,
  MapPin,
  Users,
  GraduationCap,
  Shield,
  ArrowRight,
  Phone,
} from "lucide-react";

type BannerType = "welcome" | "dojo" | "training" | "institutional" | null;

export default function VisitorNoticeBanner() {
  const [activeBanner, setActiveBanner] = useState<BannerType>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if banners have been globally dismissed for this session
    try {
      const dismissed = sessionStorage.getItem("wcmaai_visitor_banner_dismissed");
      if (dismissed === "true") {
        return;
      }
    } catch {
      // Storage access gracefully handled if cookies/storage blocked
    }

    // Determine banner type based on current route
    let type: BannerType = "welcome";

    if (
      pathname.includes("/partnerships/") ||
      pathname.includes("/affiliation")
    ) {
      type = "institutional";
    } else if (
      pathname.includes("/programs/") ||
      pathname.includes("/syllabus")
    ) {
      type = "training";
    } else if (
      pathname.includes("/dojos/") ||
      pathname.includes("/locations/")
    ) {
      type = "dojo";
    } else {
      type = "welcome";
    }

    // Delay trigger: 6 seconds or upon 25% scroll threshold
    let triggered = false;

    const triggerBanner = () => {
      if (!triggered) {
        triggered = true;
        setActiveBanner(type);
        // Small delay for smooth entry
        setTimeout(() => setIsVisible(true), 100);
      }
    };

    const timer = setTimeout(triggerBanner, 6000);

    const handleScroll = () => {
      if (window.scrollY > 350) {
        triggerBanner();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Escape key listener for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismissBanner();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pathname]);

  const dismissBanner = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveBanner(null);
    }, 300);

    try {
      sessionStorage.setItem("wcmaai_visitor_banner_dismissed", "true");
    } catch {
      // Ignored if storage disabled
    }
  };

  if (!activeBanner) return null;

  return (
    <aside
      aria-label="Visitor Announcement"
      role="region"
      className={`fixed z-50 transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      } bottom-20 sm:bottom-6 right-3 sm:right-6 left-3 sm:left-auto sm:max-w-md w-auto`}
    >
      <div className="relative rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-2xl overflow-hidden text-slate-100">
        {/* Indian National Tricolor Heritage Ribbon */}
        <div
          className="h-[2.5px] w-full bg-gradient-to-r from-[#FF671F] via-[#FFFFFF] to-[#046A38]"
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          onClick={dismissBanner}
          aria-label="Close notification"
          className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-5 sm:p-6 space-y-3.5 pr-10">
          {/* BANNER A: Welcome */}
          {activeBanner === "welcome" && (
            <>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Compass className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Welcome to WCMAA India
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  Discover the Art of Traditional Wing Chun
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Explore our heritage, training pathway, instructor network and affiliated dojos.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <a
                  href={getRoutePath("#syllabus")}
                  onClick={dismissBanner}
                  className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>Explore Wing Chun</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={getRoutePath("#leadership")}
                  onClick={dismissBanner}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-colors"
                >
                  Meet Our Instructors
                </a>
              </div>
            </>
          )}

          {/* BANNER B: Find a Dojo */}
          {activeBanner === "dojo" && (
            <>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  Training Centers
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  Find Your Wing Chun Training Centre
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Explore our dojo directory to discover listed training locations and connect with the appropriate representative.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <a
                  href={getRoutePath("#branches")}
                  onClick={dismissBanner}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>Explore Dojo Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </>
          )}

          {/* BANNER C: Youth & Adult Training */}
          {activeBanner === "training" && (
            <>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Users className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Training Opportunities
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  Start Your Wing Chun Journey
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Discover training opportunities focused on discipline, confidence, technique and personal development.
                </p>
                <div className="mt-2 p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-[10px] text-slate-400 flex items-start gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    For minors (ages 10–17), a parent or legal guardian should be involved in enquiries and enrolment.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <a
                  href={getRoutePath("/programs/youth/")}
                  onClick={dismissBanner}
                  className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>Explore Training</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:+917896962207"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>Contact Secretariat</span>
                </a>
              </div>
            </>
          )}

          {/* BANNER D: Institutional Partnerships */}
          {activeBanner === "institutional" && (
            <>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300">
                  Institutional Outreach
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  Wing Chun Programmes for Schools, Colleges & Sports Clubs
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  Learn about potential martial arts training programmes and affiliation enquiries for eligible institutions.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <a
                  href={getRoutePath("/partnerships/schools-colleges/")}
                  onClick={dismissBanner}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>Explore Partnerships</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
