"use client";

import React, { useState } from "react";
import { COMPLETED_EVENT, ASSOCIATION_INFO } from "@/data/associationData";
import { getAssetPath } from "@/utils/paths";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Camera,
  Film,
  Award,
  Users,
  ZoomIn,
  X,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function FoundationEvent() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    caption: string;
    alt: string;
  } | null>(null);

  const eventPhotos = [
    {
      src: getAssetPath("/assets/association_camp_group.webp"),
      alt: "35th Anniversary Seminar Group Photograph - Guwahati, Assam",
      category: "Group Photograph",
      caption: "Group Photo: Instructors, delegates, and practitioners gathered at the 35th commemorative seminar.",
    },
    {
      src: getAssetPath("/assets/sifu_chisau_practice.webp"),
      alt: "Technical Chi Sau Movement Practice - Sifu Amar Singh & Sifu Sankar Dutta",
      category: "Technical Masterclass",
      caption: "Training Highlight: Sifu Amar Singh Deori and Sifu Sankar Dutta demonstrating Chi Sau tactile sensitivity.",
    },
    {
      src: getAssetPath("/assets/association_team.webp"),
      alt: "WCMAA India Senior Instructors and Technical Council",
      category: "Instructor Delegation",
      caption: "Instructors: Senior black-sash practitioners and regional instructors at the foundation assembly.",
    },
    {
      src: getAssetPath("/assets/event_35th_foundation.webp"),
      alt: "35th Foundation Anniversary Commemorative Emblem & Poster",
      category: "Official Emblem",
      caption: "Commemorative Poster: Official insignia celebrating 35 years (1991–2026) of Wing Chun in India.",
    },
  ];

  return (
    <section id="event" className="py-20 bg-gradient-to-b from-[#070e1b] via-slate-950 to-[#070e1b] border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading: Event Completed Status */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            35th Anniversary Celebration — Event Completed
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            35th Foundation Day Celebration & Seminar
          </h2>
          <p className="text-amber-400 font-bold text-base sm:text-lg">
            6 September 2026 • Guwahati, Assam
          </p>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto shadow-lg">
            "WCMAA India successfully commemorated its 35th Foundation Day on 6 September 2026 in Guwahati, Assam, bringing together instructors, practitioners, students and members of the Wing Chun community."
          </div>
        </div>

        {/* Event Recap & Archive Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Event Highlights & Historical Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Event Summary & Details
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                  STATUS: COMPLETED
                </span>
              </div>

              {/* Event Metadata */}
              <div className="space-y-3 text-xs">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Event Date</span>
                    <strong className="text-white text-xs">6 September 2026 (Completed)</strong>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Location & Venue</span>
                    <strong className="text-white text-xs">Bamunimaidam Bihu Mancha Auditorium, Guwahati, Assam</strong>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-3">
                  <Users className="w-4 h-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Chief Instructors</span>
                    <strong className="text-white text-xs">Sifu Amar Singh Deori & Sifu Sankar Dutta</strong>
                  </div>
                </div>
              </div>

              {/* Seminar Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Conducted Seminar Highlights
                </h4>
                <div className="space-y-2.5">
                  {COMPLETED_EVENT.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note on completed registration */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                <strong className="text-slate-300 block mb-0.5">Registration Notice:</strong>
                Delegate registrations for this milestone session closed on 6 September 2026. For enquiries regarding certificates, transcripts, or upcoming calendar events, please contact the General Secretariat.
              </div>
            </div>
          </div>

          {/* Right: EVENT RECAP Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-amber-400" />
                  <h3 className="text-base font-extrabold text-white">
                    Event Recap & Archival Photographs
                  </h3>
                </div>
                <span className="text-xs text-slate-400">WCMAA India Archives</span>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all duration-300 shadow-md flex flex-col"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden bg-slate-900">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        width={400}
                        height={267}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[10px] font-bold text-amber-400 border border-slate-800">
                        {photo.category}
                      </div>
                      <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-900/90 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="p-3 text-xs text-slate-300 leading-snug flex-grow">
                      <p className="line-clamp-2">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Documentation Archive Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400">
                  <Film className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <h4 className="font-bold text-white">Video Proceedings Archive</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Official seminar recordings, Chi Sau demonstrations, and Wooden Dummy breakdown footage from the 35th Foundation celebration are preserved in the association media repository. Instructors and members may request access via the Secretariat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Events & Activities Historical Archive */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                Official Association Records
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Events & Activities Archive
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Last reviewed: October 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[11px] border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 font-bold">Year</th>
                  <th className="py-3 px-4 font-bold">Event & Description</th>
                  <th className="py-3 px-4 font-bold">Date & Location</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                  <th className="py-3 px-4 font-bold text-right">Documentation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr className="hover:bg-slate-900/90 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-amber-400 font-mono">2026</td>
                  <td className="py-3.5 px-4 font-semibold text-white">
                    35th Foundation Day Celebration & Seminar
                    <span className="block text-xs font-normal text-slate-400 mt-0.5">
                      National milestone assembly, Muk Yan Jong masterclass, and belt examinations.
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">
                    6 September 2026
                    <span className="block text-xs text-slate-400">Guwahati, Assam</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 text-[11px] font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="text-xs text-amber-300 font-mono">Photos Archived</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-900/90 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-400 font-mono">Upcoming</td>
                  <td className="py-3.5 px-4 text-slate-300">
                    National Instructor Development & Technical Grading Camp
                    <span className="block text-xs text-slate-400 mt-0.5">
                      Periodic master grading and pedagogical review for affiliated dojos.
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">
                    Schedule to be announced
                    <span className="block text-xs text-slate-500">Guwahati, Assam</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-bold">
                      <Clock className="w-3 h-3" />
                      Under Planning
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <a
                      href={`https://wa.me/917896962207?text=${encodeURIComponent(
                        "Hello Sifu, I would like to inquire about upcoming WCMAA India training camps."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-400 hover:text-amber-300 underline font-medium"
                    >
                      Inquire via Desk
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Event Photos */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full p-4 sm:p-6 shadow-2xl relative space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={800}
                height={533}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>
            <p className="text-sm text-slate-200 font-medium">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
