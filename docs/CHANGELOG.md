# WCMAA India — Website Changelog

> **Version & Maintenance History**  
> All future developers should document significant architectural, content, and legal updates here.

---

## [Version 2.4.1] — November 2026

### Full Audit & Self-Test Fixes (QA / Accessibility / Security)
* **Full audit executed** (Nov 3, 2026): production build gate (18/18 routes, 0 TS errors), 7-page runtime browser test (0 failed requests), credential verification portal end-to-end test (PASS), Lighthouse SEO 100 / Best Practices 100.
* **Removed invalid security `<meta>` tags** (`X-Frame-Options`, `X-Content-Type-Options`) from `src/app/layout.tsx` — these are HTTP-only headers; browsers ignore them in `<meta>` form and logged a console error on every page. Delivery now documented for the Cloudflare edge ("Security Headers Deployed at the Edge" §5.1 in the Cloudflare Security Guide).
* **Accessibility pass (Lighthouse 82 → target 95+):**
  * All 21 admission/affiliation form labels programmatically linked to their controls (`htmlFor`/`id`) in `MembershipApplication.tsx` (fixes `label`, `select-name` audits).
  * Heading order fixed: TrustBar card labels demoted to `<p>`, VerificationPortal governance cards `h5` → `h3`.
  * Accessible names now contain the visible label text on the floating WhatsApp button and mobile "Join / Apply" dock (fixes `label-content-name-mismatch`).
  * Color contrast fixed: `text-slate-500` micro-text raised to `text-slate-400` (footer registration note, membership consent note, floating desk helpline) and the footer "Official Facebook Page" badge text switched from raw `#1877F2` to accessible `blue-400` at 12px.
  * Touch targets enlarged: footer telephone `tel:` links given `inline-block py-2 px-1` hit areas (fixes `target-size`).


### Safe Premium 3D Landing Page Redesign
* **Procedural 3D Muk Yan Jong (Three.js):** Created `src/components/WoodenDummyCanvas.tsx` rendering a realistic 3D Wing Chun wooden dummy with aged teak wood textures, cinematic key/rim spotlights, warm golden ambient bounce, and drifting atmospheric golden dust particles.
* **Subtle Desktop Mouse Parallax:** Implemented smooth mouse parallax on desktop that gracefully shifts perspective without fast rotation or distracting animations.
* **Mobile & Reduced Motion Safeguards:** The 3D canvas automatically caps pixel density at 2x, pauses rendering via `IntersectionObserver` when scrolled out of view, and honors `prefers-reduced-motion` by displaying a tranquil static scene.
* **Interactive India Dojo Map:** Created `src/components/IndiaDojoMap.tsx` with an aesthetic vector map of India highlighting verified training hubs (Guwahati HQ, New Delhi, Kolkata, and Bengaluru) with tap/click inspection.
* **Dedicated Wooden Dummy Section:** Created `src/components/WoodenDummySection.tsx` ("Train The Structure. Develop The Skill.") showcasing the 116 classical movements and linking directly to the syllabus.
* **Upgraded Hero & Navigation:** Full-screen 100vh hero layout with transparent-to-frosted glass navbar transition, "FIND A DOJO" CTA, and exact brand typography ("35 Years of Wing Chun Heritage").
* **Enhanced Section Styling:** Updated "The Art of Wing Chun" 5 interactive cards and "Why WCMAA India" 6 pillar cards with subtle 3D hover depth effects.
* **Cinematic Final Call to Action:** Updated `src/components/FinalCta.tsx` with wooden hall ambiance and the motto "Discipline Is The Foundation. Strength Through Discipline • Honor Through Tradition."

---

## [Version 2.2.0] — October 2026

### Milestone & Event Status
* **35th Anniversary Event Updated to Completed:** Replaced all *"Upcoming Milestone"* tags with **`35th Anniversary Celebration — Event Completed`** (conducted on 6 September 2026 at Bamunimaidam Bihu Mancha, Guwahati, Assam).
* **Payment & Registration Deprecation:** Completely removed active seminar registration forms, live countdown timers, UPI QR payment boxes, ₹1,500 fees, and UTR transaction input fields to prevent accidental registrations for a completed session.
* **Event Recap Gallery Added:** Added a curated 4-photo archival gallery showcasing the group camp assembly, masterclass Chi Sau practice, instructor delegation, and the 35th anniversary emblem.
* **Historical Archive:** Created an "Events & Activities" historical ledger documenting past events and upcoming training camps.

### Legal Governance & Compliance
* **Defensible Legal Phrasing:** Replaced sweeping phrases (*"national governing body"*, *"government recognized federation"*) with legally accurate terminology: *"National martial arts association dedicated to the promotion and structured teaching of traditional Wing Chun Kung Fu in India."*
* **Registration Reference Formatted:** Registration displayed as `KAM/240/W/08 of 2005–2006` with explicit legal basis: *"Registered under the applicable society/association registration framework in Assam."*
* **International Affiliations Distinguished:** Distinctly categorized relationships with WCMAA Singapore (*International Charter*), The World Kuoshu Federation (*Technical Association*), KUOSHU Federation of India (*National Association Partner*), and Assam Kungfu Federation (*State Association Affiliate*).
* **Dedicated Legal Portal:** Created comprehensive routes for [Privacy Policy](/privacy), [Terms & Conditions](/terms), [Martial Arts Health Disclaimer](/disclaimer), [Copyright & IP](/copyright), and the central [Legal Information Hub](/legal).

### Credential Verification & Privacy
* **Privacy Hardening:** Removed full dates of birth and personal blood groups from public search results to protect practitioner privacy.
* **Standardized Specification:** Verification output formatted to display Credential ID, Name/Initials, Rank, Status, Issue Year, and Issuing Organization.
* **DEMO Labeling:** Test sample queries clearly flagged with `DEMO RECORD — NOT AN OFFICIAL CREDENTIAL`.
* **Dual Status Accessibility:** Added simultaneous text and visual indicators for both `VALID` and `INVALID` lookups.

### Dojo Directory
* **Standardized Dojo Cards:** Displaying Academy Name, City, State, Chief Instructor, Grade, Address, Timings, Training Days, and Active Status.
* **Verification Label:** Marked verified branches with `Officially Listed WCMAA India Training Centre`.
* **Verification / Reporting Action:** Added an interactive "Verify Dojo / Report Incorrect Information" modal with direct WhatsApp and email reporting to the Secretariat.

### SEO & Technical Standards
* **SEO Meta Description:** Updated to: *"Wing Chun Martial Arts Association India promotes structured traditional Wing Chun training, instructor development, academy affiliation, grading, seminars and martial arts education across India."*
* **Schema.org Structured Data:** Embedded valid JSON-LD graph for `SportsOrganization`, `WebSite`, `SportsActivityLocation`, `Person` (Sifu Amar Singh Deori and Sifu Sankar Dutta), and `BreadcrumbList`.
* **Sitemap & Robots:** Updated `public/sitemap.xml` with all 9 static routes and verified `public/robots.txt`.

---

## [Version 2.1.0] — September 2026
* Initial Next.js 16 elevation with Turbopack and static export mode.
* Configured automated deployment via GitHub Actions to GitHub Pages.
* Integrated mobile action dock and floating WhatsApp desk.

---

## [Version 2.0.0] — August 2026
* Re-architected portal with Tailwind CSS and responsive design.
* Added 14-section federation homepage structure.
