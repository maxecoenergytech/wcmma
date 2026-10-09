"use client";

import React, { useState } from "react";
import { getAssetPath } from "@/utils/paths";
import { Camera, ZoomIn, X, Sparkles, Filter } from "lucide-react";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalImg, setActiveModalImg] = useState<{
    src: string;
    title: string;
    category: string;
    description: string;
  } | null>(null);

  const categories = ["All", "Training & Chi Sau", "Academy Camps", "Leadership", "Milestones"];

  const galleryItems = [
    {
      src: getAssetPath("/assets/sifu_chisau_practice.webp"),
      title: "Dynamic Chi Sau Movement Practice",
      category: "Training & Chi Sau",
      aspect: "aspect-[3/2]",
      description:
        "Sifu Amar Singh Deori and Sifu Sankar Dutta demonstrating tactile sensitivity, centerline deflection, and fluid sticking-hands drills in open-air training.",
    },
    {
      src: getAssetPath("/assets/association_camp_group.webp"),
      title: "All-India Martial Arts Brotherhood & Training Camp",
      category: "Academy Camps",
      aspect: "aspect-[3/2]",
      description:
        "The complete martial-arts family gathered at North East Academy training ground with Sifu Amar Singh Deori and Sifu Sankar Dutta.",
    },
    {
      src: getAssetPath("/assets/event_35th_foundation.webp"),
      title: "35th Foundation Anniversary Celebration Poster",
      category: "Milestones",
      aspect: "aspect-[3/2]",
      description:
        "Official national seminar delegate announcement celebrating 35 years (1991–2026) of Wing Chun in India at Bamunimaidam Bihu Mancha.",
    },
    {
      src: getAssetPath("/assets/association_team.webp"),
      title: "Executive Technical Council & Disciples",
      category: "Academy Camps",
      aspect: "aspect-[4/3]",
      description:
        "Senior instructors and certified black-sash practitioners united under the banner 'One Family • One Lineage • One Vision'.",
    },
    {
      src: getAssetPath("/assets/sifu_sankar_dutta_portrait.webp"),
      title: "Sifu Sankar Dutta — General Secretary",
      category: "Leadership",
      aspect: "aspect-[3/4]",
      description:
        "General Secretary, Wooden Dummy (116) master, and Joint Secy. Gen. of KUOSHU Federation of India.",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#070e1b] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            Authentic Photo Archive
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Association Image Gallery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Authentic visual documentation of our training camps, Chi Sau sparring drills, martial brotherhood, and milestone celebrations.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 pt-4 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-slate-950 font-black shadow-md scale-105"
                    : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalImg(item)}
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className={`w-full overflow-hidden relative bg-slate-950 ${item.aspect}`}>
                <img
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute top-3 left-3 bg-slate-900/90 text-[10px] font-bold text-amber-300 px-2.5 py-0.5 rounded-full border border-slate-700">
                  {item.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white p-2 rounded-lg border border-slate-700 opacity-80 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-slate-950 max-h-[70vh] flex items-center justify-center p-2">
              <img
                src={activeModalImg.src}
                alt={activeModalImg.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="p-5 sm:p-6 space-y-1.5 border-t border-slate-800">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                {activeModalImg.category}
              </span>
              <h4 className="text-lg font-black text-white">{activeModalImg.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {activeModalImg.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
