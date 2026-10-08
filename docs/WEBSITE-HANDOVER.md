# WCMAA India — Future Developer Handover & Portability Guide

> **Official Handover Documentation for Any Future Web Developer**  
> This website is 100% portable, free of proprietary vendor lock-in, and independent of Antigravity or any proprietary tools.

---

## 1. Project Overview & Credentials

* **Website Owner:** Wing Chun Martial Arts Association India (WCMAA India)
* **Live Website URL:** [https://maxecoenergytech.github.io/wcmma/](https://maxecoenergytech.github.io/wcmma/)
* **Git Repository:** [https://github.com/maxecoenergytech/wcmma.git](https://github.com/maxecoenergytech/wcmma.git) (Branch: `main`)
* **Hosting Platform:** GitHub Pages (Static hosting)
* **Custom Domain:** Ready for custom domain (e.g. `indiawingchun.com` or `wcmaa.in`). Add a `CNAME` file to `public/` when ready.
* **Technology Stack:**
  * **Framework:** Next.js 16 (Static Export mode: `output: 'export'`)
  * **UI Library:** React 19
  * **Styling:** Tailwind CSS 4 (via `@tailwindcss/postcss`)
  * **Icons:** Lucide React (`lucide-react`)
  * **Language:** TypeScript
  * **Target Output:** Static HTML5 / Modern CSS / Vanilla JavaScript bundle in `./out`

---

## 2. Directory Architecture & Key Files

| File / Folder Path | Type | Purpose |
| :--- | :--- | :--- |
| `src/data/associationData.ts` | Data File | **Most Important File:** Centralized registry for phone numbers, addresses, dojos, verified members, syllabi, leadership bios, and affiliations. |
| `src/app/page.tsx` | Page | Main homepage assembling the 14 federation sections sequentially. |
| `src/app/layout.tsx` | Layout | Root HTML template containing SEO meta tags, OpenGraph, Twitter Cards, and Schema.org JSON-LD. |
| `src/app/affiliation/page.tsx` | Page | Dedicated National Dojo Affiliation Program (NDAP) portal. |
| `src/app/legal/page.tsx` | Page | Comprehensive Legal & Governance portal (Org details, Privacy, Terms, Disclaimer, Copyright). |
| `src/app/privacy/page.tsx` | Route | Direct link to Privacy Policy. |
| `src/app/terms/page.tsx` | Route | Direct link to Terms & Conditions. |
| `src/app/disclaimer/page.tsx` | Route | Direct link to Martial Arts Health & Training Disclaimer. |
| `src/app/copyright/page.tsx` | Route | Direct link to Copyright & IP statement. |
| `src/components/Navbar.tsx` | Component | Responsive header with desktop navigation, mobile drawer, and call/social actions. |
| `src/components/Hero.tsx` | Component | Above-the-fold full-screen hero with 3D WebGL Muk Yan Jong canvas, mouse parallax, and primary action buttons. |
| `src/components/WoodenDummyCanvas.tsx` | 3D Component | WebGL Three.js canvas rendering a procedural Wing Chun Wooden Dummy (Muk Yan Jong) with lighting and atmospheric dust particles. |
| `src/components/WoodenDummySection.tsx` | Component | Dedicated 116 Muk Yan Jong apparatus feature highlighting structure and technique. |
| `src/components/IndiaDojoMap.tsx` | Component | Interactive vector map of India with verified branch pins and inspector card. |
| `src/components/TrustBar.tsx` | Component | 5-pillar credentials strip and registration badge. |
| `src/components/AboutSection.tsx` | Component | Association history, mission, and expandable overview modal. |
| `src/components/WhyTrainSection.tsx` | Component | 6 core martial discipline cards with 3D hover effects. |
| `src/components/TrainingPathway.tsx` | Component | "The Art of Wing Chun" 5 interactive cards with full modal syllabus viewer. |
| `src/components/Leadership.tsx` | Component | Master profiles of Sifu Amar Singh Deori and Sifu Sankar Dutta with action Chi Sau drills. |
| `src/components/BranchLocator.tsx` | Component | Filterable Dojo Directory with location search and "Verify Dojo" reporting modal. |
| `src/components/StudentsParentsSection.tsx` | Component | Audience guides for Beginners, Adults, Children, and Women. |
| `src/components/AffiliationShowcase.tsx` | Component | Academy owner CTA, franchise comparison table, and Affiliation Terms modal. |
| `src/components/VerificationPortal.tsx` | Component | Member credential lookup engine with privacy protection and DEMO notice. |
| `src/components/FoundationEvent.tsx` | Component | 35th Anniversary Event Recap gallery and historical event archive table. |
| `src/components/HeritageTimeline.tsx` | Component | Visual historical progression from 1991 to 2026. |
| `src/components/GallerySection.tsx` | Component | Category-filtered photo gallery with full-screen lightbox preview. |
| `src/components/FinalCta.tsx` | Component | Closing action banner with Join Dojo, Affiliate, and Contact buttons. |
| `src/components/MembershipApplication.tsx` | Component | In-page application form for students and dojos. |
| `src/components/Footer.tsx` | Component | Standardized legal footer with quick links, legal links, registration number, and copyright. |
| `src/components/FloatingWhatsApp.tsx` | Component | Desktop & mobile floating WhatsApp desk with 3 pre-filled pathways. |
| `src/components/MobileActionDock.tsx` | Component | Fixed bottom dock for quick phone calls and WhatsApp chats on mobile phones. |
| `public/assets/` | Assets | Optimized WebP & JPG photos, certificates, logos, and avatars. |
| `public/robots.txt` | SEO | Search engine bot crawling instructions. |
| `public/sitemap.xml` | SEO | XML sitemap listing all 9 static routes. |
| `next.config.mjs` | Config | Sets static output (`output: 'export'`), subfolder base path (`basePath: '/wcmma'`), and unoptimized images for GitHub Pages. |
| `.github/workflows/deploy.yml` | CI/CD | GitHub Actions workflow automatically publishing pushes on `main` to GitHub Pages. |
| `push_to_github.bat` | Script | Convenient Windows batch script for automated Git commit & push. |

---

## 3. Guarantees: Zero Proprietary Lock-In

1. **No Antigravity Dependency:**
   * This website contains zero proprietary plugins, zero custom sidecars, and zero hidden environment configs.
   * Any computer with standard Node.js (v18+) and Git can clone, build, and deploy this project.

2. **No Proprietary Database Server Required:**
   * The credential verification and dojo directory are statically loaded from `src/data/associationData.ts`.
   * There are no recurring server hosting costs (AWS RDS, MongoDB Atlas, or Firebase) to maintain.

3. **Subfolder Portability Helper:**
   * GitHub Pages hosts projects on subpaths (e.g. `https://<user>.github.io/wcmma/`).
   * The file `src/utils/paths.ts` provides `getAssetPath()` and `getRoutePath()`. If the website is ever moved to a root domain (e.g. `https://indiawingchun.com/`), simply set `basePath: ''` in `next.config.mjs` and remove the subpath in `paths.ts`.

---

## 4. How to Set Up Your Local Development Environment

```bash
# 1. Clone repository
git clone https://github.com/maxecoenergytech/wcmma.git
cd wcmma

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Server will start on http://localhost:3000

# 4. Build and verify static generation
npm run build
# Compiled files will be created in the ./out folder
```

---

## 5. Security & Privacy Safeguards

* **No Secrets Committed:** No API keys, passwords, or database credentials exist in this repository.
* **Static Execution:** Zero backend vulnerabilities (no SQL injection, no server-side execution attacks).
* **Privacy Compliant:** Verification data masks private citizen details (DOB and blood groups omitted).

---

## 6. 3D WebGL Architecture (Three.js)

The cinematic hero utilizes standard open-source **Three.js** to render a traditional Wing Chun Wooden Dummy (**Muk Yan Jong**):

* **Source File:** `src/components/WoodenDummyCanvas.tsx`
* **Zero 3D File Bloat:** Rather than downloading heavy 50MB 3D files over mobile networks, the wooden dummy is procedurally generated using mathematical geometries (cylinders, spheres, and rectangular timber beams) with aged teak wood materials (`MeshStandardMaterial`).
* **Performance Protections:**
  * **Device Pixel Ratio Cap:** Capped at `Math.min(window.devicePixelRatio, 2)` to protect mobile GPUs.
  * **Viewport Auto-Pause:** An `IntersectionObserver` automatically stops the `requestAnimationFrame` loop whenever the user scrolls down past the hero.
  * **Reduced Motion Detection:** If the visitor's device requests reduced motion (`prefers-reduced-motion: reduce`), the canvas renders a clean, static, non-animating martial arts scene.
  * **Fallback:** If WebGL is unavailable or disabled, a stylized fallback card is automatically presented without throwing any JavaScript errors.

* **Privacy in Credential Lookups:** Member search results display only Credential ID, Name/Initials, Rank, Status, Issue Year, and Branch. Sensitive dates of birth and blood groups are never exposed to public search results.
* **Test Records Labeled:** Sample lookups are flagged with `DEMO RECORD — NOT AN OFFICIAL CREDENTIAL`.
