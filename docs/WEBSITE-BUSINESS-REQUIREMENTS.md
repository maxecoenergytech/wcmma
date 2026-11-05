# WCMAA India — Website Business Requirements & Implementation Plan

| | |
|---|---|
| **Document** | Business Requirements & Implementation Plan (BRP) |
| **Version** | 1.0 — November 2026 |
| **Prepared by** | Website Consultant / Business Analyst (via repository audit of v2.5.0-pre) |
| **Prepared for** | Wing Chun Martial Arts Association India (Sifu Sankar Dutta, General Secretary) |
| **Platform baseline** | Next.js static export → GitHub Pages origin → Cloudflare edge (basePath `/wcmma` transparent at edge) |
| **Standing directive** | The initial release is a **fully static website**. Any dynamic functionality requires an approved requirement (Section 6). |
| **Status** | DRAFT — awaiting owner decisions (Section 12) |

---

## 1. Purpose & Scope

This document defines the business requirements, information architecture, content structure and phased implementation plan for the WCMAA India website (v3.0 roadmap). It is grounded in a full audit of the existing codebase (18 routes, master data file `src/data/associationData.ts`, operational docs) and its verified quality baseline (Lighthouse 100/100/100, zero console errors, E2E-tested verification portal).

**Audit-established facts used throughout this document**

- Association: founded **1991** — 35th Foundation Year (1991–2026); registered society in Assam; registration number **pending owner verification** (`2677/91` vs `KAM/240/W/08 of 2005–2006`).
- Charters: **WCMAA Singapore** (International Charter since 1991), **TWKSF — World Kuoshu Federation** (technical association), **KUOSHU Federation of India** (national), **Assam Kungfu Federation** (state).
- Leadership: **Sifu Amar Singh Deori** (Founder President & Chief Instructor), **Sifu Sankar Dutta** (Founder & General Secretary; Joint Secy. Gen. KUOSHU Federation of India; Vice President Assam Kungfu Federation).
- Locations: National HQ (Bathoupuri, ISBT Lokhra, Guwahati‑781035); North East Academy Training Ground (Bhetapara, Beltola); Bamunimaidam branch/residence office (H.No. 9, Bhaskar Nagar, Guwahati‑781021).
- Contacts: +91 78969 62207 (primary/WhatsApp helpline), +91 90852 96178, wingchun91@gmail.com, facebook.com/wingchunkungfuindiaofficial.
- Program data: 7-item traditional syllabus (Siu Nim Tao → wooden dummy 116 → weapons), adult & youth programs, credential verification registry (4 records incl. 1 demo; privacy rule in force: no DOB/blood group, initial-based names).

---

## 2. Executive Summary

The website's technology is already excellent for an association of this size: free, fast, secure, offline-reviewable, and quality-gated. The gap is **content operations**: news, events, announcements and achievements are currently hard-coded in React components, so only a developer can publish.

**Core recommendation:** stay static-first; introduce a **data-driven content layer** (validated JSON/Markdown collections) and gate every dynamic-feature candidate behind an explicit approval (Section 6). Target state: the owner keeps the site truthful with a 15-minute update workflow at ₹0/month operating cost.

---

## 3. Business Context & Success Criteria

| # | Strategic goal | Web success signal (KPI) |
|---|---|---|
| G1 | Anti-fraud credibility (verifiable 35-year lineage) | Verification-portal lookups; unambiguous impersonation defense |
| G2 | Recruitment funnel — students + academies | WhatsApp/call leads; application & affiliation inquiries |
| G3 | Institutional transparency | Federations/partners verify governance in ≤2 clicks |
| G4 | Community continuity | Annual event archive; published news/announcement cadence |
| G5 | Non-technical owner operation | Owner can publish content without a developer; monthly cost ≈ 0 |

### 3.1 Stakeholders & personas

| Persona | Job to be done | Key pages |
|---|---|---|
| Prospective student | Judge legitimacy fast → find nearest dojo → ask about fees/timing | Home, Dojos, Programs, Contact |
| Parent of a minor | Safety, discipline, instructor trust, consent | Programs/Youth, Leadership, Governance |
| Academy owner (B2B) | Affiliation economics (no royalty), standards, process | Affiliation, Governance, Membership |
| Existing member | Verify certificate; track gradings/events | Verify portal, Events, Achievements |
| Federation / partner / media | Due diligence on registration & charters | Governance, About, Affiliations |
| Fraudster (adversarial) | Harvest badges/images to fake affiliation | (mitigations: verification guidance, watermark policy) |
| Site owner | Update content; announce; respond to leads | + admin workflow |
| Future developer | Maintain without archaeology | docs/, CHANGELOG, content schemas |

---

## 4. Requirements Analysis — 11 Content Domains

MoSCoW priorities for the initial static release. "Current" = verified in codebase v2.5.0-pre.

| # | Domain | Requirement statement | Current state | Gap | Priority | Verdict |
|---|---|---|---|---|---|---|
| 1 | Association identity | Consistent name/logo/taglines/tricolor identity; favicon; OG images | Strong brand kit in use; 3 addresses, 2 phones, Facebook | OG/social-card set review | Must | Static |
| 2 | About | Story, mission/vision/values, timeline, lineage | AboutSection + HeritageTimeline (1991→2026) | Dedicated `/about` depth | Must | Static |
| 3 | Governance | Registration, constitution/bylaws, office bearers, policies (admissions, refunds, child protection, grievance) | Legal registry page; registration number **unconfirmed (R1)** | Dedicated `/governance` | **Must** (R1-dependent) | Static |
| 4 | Sports activities | Programs, syllabus, schedules, fees | Program routes + 7-form syllabus data + dojo timings | Master schedule; fee transparency decision; "All-India" claim scoping | Must | Static |
| 5 | Events | Annual calendar incl. Foundation Day seminar series; archive | One completed event, hard-coded | `events` collection + `/events/[slug]`; WhatsApp/UPI registration hand-off | Must | **Static** |
| 6 | News | Newsroom: results, gradings, federation notices | Absent | `news` collection + `/news/[slug]` | Must | **Static** |
| 7 | Gallery | Curated, captioned, credited albums | GallerySection with lightboxes; hero video on third-party CDN | Album metadata, credits, **minor-consent register** | Must | Static |
| 8 | Achievements | Hall of Fame, competition results, grading statistics | Hall of Fame added; 3 verified registry records | `achievements` collection | Should | Static |
| 9 | Membership information | Categories, benefits, fees, rules, renewal, waiver | Application form (individual + academy) — **no data stored** (WhatsApp hand-over) | `/membership` content page; fee-policy decision | Must | Static |
| 10 | Contact | Canonical contacts, per-dojo cards, response expectation | Footer + locator + 3 dojo pages + floating desk | Consolidated `/contact`; office hours; response SLA | Must | Static |
| 11 | Announcements | Banner notices (closures, seminar alerts) | VisitorNoticeBanner hard-coded | `announcements.json` + auto-expiry | Should | **Static** |

---

## 5. Proposed Sitemap (Initial Static Release)

Canonical URLs at domain root (`wcmaaindia.com` via Cloudflare; `/wcmma` basePath is origin-internal).

```
/                        Home (premium composition; announcement-aware)
├─ about                 NEW — story, mission, heritage, lineage
├─ governance            NEW — registry, bylaws, office bearers, policies
├─ programs/adults       KEEP · /programs/youth        KEEP
├─ syllabus              Promotion decision: homepage section OR dedicated page
├─ dojos/guwahati-national-hq · -bamunimaidam · -beltola   KEEP (template)
├─ affiliation           KEEP · /partnerships/schools-colleges  KEEP (linked)
├─ membership            NEW — categories, benefits, fees, rules
├─ events/[slug]         NEW (first item: 35th Foundation Day archive moves in)
├─ news/[slug]           NEW (announcements cross-posted by tag)
├─ gallery               NEW (existing GallerySection promoted)
├─ achievements          NEW — Hall of Fame + competition results
├─ verification          KEEP as homepage section; dedicated route only if usage warrants
├─ contact               NEW — consolidated
├─ legal · privacy · terms · copyright · disclaimer   KEEP (shared LegalPage)
└─ preview/premium · preview/simple   KEEP (owner QA; noindex)
```

**Route disposition:** all 18 current routes survive. 11 kept as-is; 3 content-upgraded; 4 folded under the new IA; 8 new routes added (≈26 routes at release). Maintenance mode (`siteMode.json`) remains available for emergency take-down.

---

## 6. Static vs Dynamic — Decision Gate

Directive honored: initial release fully static. Each candidate below requires an **approved requirement** before any dynamic build:

| Candidate | Static solution that exists | Trigger that justifies dynamic | Compliance if approved |
|---|---|---|---|
| Application form storage | Forms compose a WhatsApp message; no PII leaves the device | WhatsApp hand-over demonstrably loses leads; owner requests records | India **DPDP Act 2023**: consent notice, purpose limitation, retention/deletion policy, minimization |
| Verification portal API | Build-time records; client-side search (scales to hundreds) | Registry > ~500 records + privacy review | Keep Grade/Name-initial/Branch/Validity only — never DOB, blood group, phone (existing standard) |
| Owner CMS | JSON edit + git deploy; admin runbook | Owner cannot operate the runbook even with training | File-based CMS (e.g., Decap/Tina) over the same repo |
| Event registration | WhatsApp "Register" CTA with field list | Paid events needing capacity control/receipts | UPI + manual confirmation first; payments platform only under association-owned accounts |
| Analytics | None | Funnel evidence needed | Recommend **Cloudflare Web Analytics** — cookie-free, free, edge-native |
| Video hosting | Third-party CDN with graceful failover already in place | Provider discontinuation | Cloudflare R2 with cache keys baked at build |

---

## 7. Page Requirements

Acceptance per page: build-clean, Lighthouse-clean, mobile-first, contact CTA within one interaction.

| Page | Purpose & primary CTA | Required sections / data | Content owner | Acceptance criteria |
|---|---|---|---|---|
| Home | Verify → Explore → Join | Hero, trust bar, announcement banner (JSON), about summary, pathway, pillars, dojo locator, leadership, Hall of Fame teaser, audience sections, affiliations, verify portal, event teaser, gallery teaser, form, footer | S. Dutta | Banner renders from data; zero hard-coded dates; Lighthouse 100s |
| About | Contextualize 35 years | Story, mission/vision/values, heritage timeline, lineage & charters essay, FAQ | S. Dutta | Reads standalone; all images alt-texted |
| Governance | Institutional due diligence | Registration block (**post-R1**), 4 charter cards, constitution/bylaws downloads, office bearers, policy documents, resolutions/AGM summaries | Owner + Secy. | Every claim links to a document |
| Programs (adults/youth) | Choose program → contact dojo | Overview, outcomes, grading ladder, schedule table, fees (per decision), safety/parent guidance | Dojo leads | Schedule matches branch data at build |
| Dojo template ×3 | Local conversion | Timings, directions/map, instructor, WhatsApp/call CTAs | Branch leads | Contacts validated against branch data; `verificationDate` refreshed |
| Affiliation (+ schools/colleges) | Academy B2B inquiry | Value props (fee retention, curriculum), charters, process, terms doc, form | S. Dutta | NDAP terms available as PDF |
| Membership | Understand before applying | Categories (student/annual/academy), benefits, fee table (per decision), rules digest, waiver, renewal/transfer | Secy. | Fee table single source of truth; form links here |
| Events index + template | Register / revisit archive | Status chips, date/venue/instructors, highlights, gallery link, recap (Foundation Day moved here) | S. Dutta | Rendered from `events` collection |
| News index + template | Freshness signal | Tags (Result/Grading/Notice/Announcement), dated posts, optional images | Secy. | Template renders from MD; tag filters |
| Gallery | Visual credibility | Album grid by year/event, captions, credits, consent flag enforced | S. Dutta | No minor's image without consent-on-file |
| Achievements | Institutional pride | Hall of Fame cards, results table, citations | Secy. | Every row: year/event/position/name |
| Contact | One-stop resolution | 3 official addresses, phone/email, per-dojo cards, WhatsApp, office hours, response expectation, map | S. Dutta | All channels canonical; no personal numbers beyond approved policy |
| Legal family | Registry & policies | Shared LegalPage + child-protection & grievance policies added | Owner | DPDP-aligned privacy policy when any dynamic phase lands |

---

## 8. Content Structure (Content Model)

The site already contains a de-facto content model in TypeScript (`MemberRecord`, `BranchRecord`, `SyllabusItem`, `AffiliationRecord`). Phase 1 extends this into **structured, validated data files** so that UI is presentation-only and owner updates are data edits. Full field-level schemas: see `docs/PHASE1-CONTENT-SCHEMAS.md`.

| Collection | Purpose | Source today | Storage at release |
|---|---|---|---|
| `announcements` | Banner notices with auto-expiry | Hard-coded banner | `src/content/announcements.json` |
| `news` | Newsroom posts | — | `src/content/news/*.md` |
| `events` | Annual calendar + archive | Hard-coded Foundation event | `src/content/events/*.md` |
| `achievements` | Hall of Fame + results | Partial | `src/content/achievements.json` |
| `gallery` | Albums, captions, credits, consent | In-component arrays | `src/content/gallery.json` |
| `branches` | Dojo directory | `associationData.ts` | Migrate (add `verificationDate`) |
| `members` | Verification registry (privacy rule kept) | `associationData.ts` | Migrate |
| `syllabus` · `affiliations` · `leadership` · `programs` · `site` | Identity & standards data | `associationData.ts` | Migrate |
| `governanceDocs` | Policy/bylaw/minutes index | — | Markdown index + `/public/docs/*.pdf` |

**Authoring rules**

- JSON for list data; one Markdown file per event/news post (portable, diffable).
- Every data file **validated at build time** — a malformed content commit fails the build rather than shipping a broken page.
- Images: WebP, ≤200 KB, ≤1600 px, meaningful `alt` mandatory; EXIF/GPS stripped.
- Privacy standards (established, now explicit policy): initial-based names in the public registry; no DOB/blood group/phones in registry; no minors' images without a consent register entry; no personal numbers in public content beyond approved contact policy.
- Content SLAs: announcements ≤24 h; news ≤1 week of the event; events from the rolling annual calendar; `site.stats.lastReviewed` bumped at each pass.

**Content operations workflow (owner-able):** owner fills a worksheet (`docs/CONTENT-WORKSHEETS.md`) → data-file commit by volunteer/agent → build gate auto-checks → CI deploys in ~1 minute. Announcement banners self-expire via `expiresOn`, so stale notices cannot ship.

---

## 9. Implementation Plan

| Phase | Scope | Deliverables | Effort | Duration | Exit gate |
|---|---|---|---|---|---|
| **P0 — Decisions & content readiness** (parallel, no code) | Approve this BRP; resolve Section 12 questions; verify registration number; image-consent register; fee-policy decision | Signed-off decision log; worksheets started | Owner ~4–6 h | 1–2 weeks | All ★ decisions green |
| **P1 — Content foundation** (no visual change) | Content layer build-out; banner JSON-ization; typed data → validated JSON | Schemas + validation; CHANGELOG `v2.6.0`; zero-diff visual regression | Dev/agent 1.5–2 days | 1 week | Build 18/18 unchanged; Lighthouse 100s; portal E2E passes |
| **P2 — New IA** | 8 new routes; nav/footer mapping; 404 polish; sitemap.xml/robots | New IA live in preview; CHANGELOG `v3.0.0` | Dev/agent 4–5 days | 2–3 weeks | New-route audit; mobile walkthrough |
| **P3 — Content population & hardening** | Populate events/news/achievements/gallery; OG cards; favicon set; optional Cloudflare Web Analytics | Public-ready content at SLA; OWNER-GUIDE update | Owner + dev | 1–2 weeks | Content completeness checklist |
| **P4 — Release & stabilization** | Deploy in low-traffic window using the existing workflow (push to `origin main` on explicit owner approval); smoke test; rollback drill | Published v3.0 | Dev/agent 0.5 d | — | Zero console errors; portal E2E PASS |

**Release criteria (P4):** all routes build clean (0 TS errors) · Lighthouse A11y/BP/SEO 100/100/100 · zero console errors/failed requests across the 7-page test · verify-portal E2E (ID `2060` → VALID) · announcement renders & expires from JSON · no PII in shipped bundles · docs/CHANGELOG updated · rollback path = `git revert` + maintenance-mode toggle.

**RACI:** Owner = decision-maker & content source. General Secretary = news/events content owner. Developer/agent = build & QA. Consultant = specification, review gates, acceptance tests.

---

## 10. Risks & Mitigations

| # | Risk | Mitigation |
|---|---|---|
| R1 | Registration-number discrepancy (`2677/91` vs `KAM/240/W/08 of 2005–2006`) undermines the site's core credibility promise | **Blocker for the Governance page** — verify against the original certificate before P2 |
| R2 | Content staleness after launch enthusiasm fades | Owner-able runbook; JSON expiry fields; SLA table; quarterly review reminder |
| R3 | Minors' images published without consent | Consent register enforced as a gallery schema field; no flag → not published |
| R4 | WhatsApp funnel is personal-number dependent | Document number ownership; publish only owner-approved numbers |
| R5 | Bus factor — single maintainer | Extend existing docs/CHANGELOG discipline with an OWNER-GUIDE content manual |
| R6 | External CDN video dependency | Existing graceful fallback retained; R2 migration trigger-based backlog |
| R7 | DPDP Act exposure if dynamic collection is ever approved | Hard gate in Section 6; consent + retention policy first |
| R8 | Domain/DNS renewal errors (Cloudflare + GitHub Pages chain) | Renewal calendar in OWNER-GUIDE; chain already documented in CLOUDFLARE-SECURITY-GUIDE |
| R9 | Impersonation scams misusing site assets | Watermarking policy for badge exports; "verify only via this portal" public guidance |

---

## 11. Immediate Next Steps (30 days)

1. **Owner:** answer the ★ decisions in Section 12 (≈30 minutes; unblocks everything).
2. **Agent/consultant:** on approval, execute Phase 1 (schemas in `docs/PHASE1-CONTENT-SCHEMAS.md` are the contract).
3. **Publications discipline:** build → test → owner approval → push (production deploy trigger preserved).

## 12. Owner Decision Log

| # | ★ = P0 blocker | Question | Status |
|---|---|---|---|
| 1 | ★ | Confirm official registration number (provide certificate scan for Governance) | OPEN |
| 2 | ★ | Approve proposed sitemap (Section 5) & page specs (Section 7) | OPEN |
| 3 | ★ | Fee schedule: public tables, or "enquire via WhatsApp"? | OPEN |
| 4 | ★ | Image/media consent status for children & student photos | OPEN |
| 5 | "All-India network" claim: list actual chapters, or scope to "Assam HQ + forming chapters"? | OPEN |
| 6 | 2027 event calendar draft (seeds the `events` collection) | OPEN |
| 7 | Constitution/bylaws/minutes available as PDFs for `/governance`? | OPEN |
| 8 | Ownership & continuity of wingchun91@gmail.com and both published phone numbers | OPEN |
| 9 | Analytics: approve Cloudflare Web Analytics (cookie-free), or none | OPEN |
| 10 | Keep SyllabusExplorer as homepage section, or promote to `/syllabus` | OPEN |

**Approval**

| Role | Name | Signature | Date |
|---|---|---|---|
| General Secretary (content owner) | Sifu Sankar Dutta | ____________________ | ____ |
| Founder President | Sifu Amar Singh Deori | ____________________ | ____ |
