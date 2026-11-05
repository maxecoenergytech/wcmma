# WCMAA India — Phase 1 Content Schemas (Implementation Contract)

| | |
|---|---|
| **Document** | Phase 1 — Content Foundation: schema contract for the data-driven content layer |
| **Version** | 1.0 — November 2026 |
| **Scope** | P1 only. **No visual/UX change.** UI components adapt to read from `src/content/*` instead of `associationData.ts`. |
| **QA gate** | Every data file is validated at build time. Invalid content ⇒ build failure (never a broken page). |
| **Reference** | `docs/WEBSITE-BUSINESS-REQUIREMENTS.md` §8; existing types in `src/data/associationData.ts` |

---

## 1. Principles

1. **Presentation/CMS separation** — UI components render data; all facts live in `src/content/`.
2. **Build-time validation** — a validation script (dev-dependency, e.g. `zod`) runs inside `prebuild`; malformed content stops the build with a precise file/field/row error message.
3. **Privacy by schema** — fields that must never exist in the public registry (DOB, blood group, personal phone) are **not permitted types** anywhere in the `members` collection, and `gallery` images require consent flags.
4. **Expiry-aware announcements** — a banner older than `expiresOn` is filtered out at build (stale notices cannot ship).
5. **Source-map parity** — every `associationData.ts` export maps to exactly one JSON/MD artifact (§6 migration map) so migration is mechanical and reviewable.

## 2. Directory layout (Phase 1 deliverable)

```
src/content/
├─ site.json                 # identity, contacts, taglines, stats
├─ affiliations.json
├─ leadership.json
├─ syllabus.json
├─ branches.json
├─ members.json              # verification registry (privacy-constrained)
├─ achievements.json
├─ gallery.json
└─ announcements.json
```
News/Events/Governance Markdown collections arrive in Phase 2 (`src/content/news/*.md`, `src/content/events/*.md`); their front-matter contracts are pre-specified in §5 so file conventions settle once.

Validation tooling: `scripts/validate-content.mjs` (devDependency-free option: hand-rolled checks — see §7) wired as `prebuild` in `package.json`.

---

## 3. Collection schemas — retained types (migrate in Phase 1)

### 3.1 site.json — mirrors `ASSOCIATION_INFO`

| Field | Type | Req | Notes |
|---|---|---|---|
| name / shortName / chineseName | string | ✅ | `chineseName` non-empty for display use |
| established | int ≥1991 | ✅ |
| foundationYearMilestone | string | ✅ |
| registrationNo | string (non-empty) | ✅ | **Holds site-wide value; R1 pending — see §8** |
| legalRegistrationText | string | ✅ | Wording owner-approved |
| taglines.{primary,secondary,motto} | string | ✅ |
| contacts.{generalSecretary, phones[2], primaryPhone, email, facebook, hqAddress, trainingGround, residenceOffice} | string | ✅ | `email` must parse as email; `phones` exactly 2 published numbers |
| stats.{practitionerNote, dojoNote, heritageYears, lastReviewed} | string | ✅ | `lastReviewed` = `YYYY-MM` — bump at every content pass |

### 3.2 affiliations.json — mirrors `AffiliationRecord`

| Field | Type | Req |
|---|---|---|
| name | string | ✅ |
| relationship | enum: `International Charter \| Technical Association \| National Association \| State Affiliate` | ✅ |
| since | string `YYYY` (optional) | — |
| purpose | string ≥10 chars | ✅ |
| website | URL (optional; empty allowed) | — |
| badge | string | ✅ |

### 3.3 leadership.json — mirrors existing two records

| Field | Type | Req |
|---|---|---|
| name / role / affiliation | string | ✅ |
| honoraryTitles | string[] (optional) | — |
| experience / bio | string ≥10 chars | ✅ |
| image | repo asset path `/assets/*.webp` that **exists on disk** | ✅ |

### 3.4 syllabus.json — mirrors `SyllabusItem[]` (7 records today)

| Field | Type | Req |
|---|---|---|
| name / chinese | string | ✅ |
| type | enum: `Empty Hand Form \| Wooden Dummy \| Weapon \| Partner Training` | ✅ |
| level | string | ✅ |
| description | string ≥10 chars | ✅ |
| keyConcepts | string[] (1–6) | ✅ |

### 3.5 branches.json — `BranchRecord` **+ new governance field**

| Field | Type | Req | Notes |
|---|---|---|---|
| id | string `^[a-z0-9-]+$` (unique) | ✅ | Also used by dojo pages |
| name / city / state / address / chiefInstructor / instructorGrade / timing / trainingDays | string | ✅ |
| phone | string | ✅ | Must be one of the `site.contacts.phones` values or an explicitly approved branch number |
| activeStatus | enum: `Active \| Seasonal` | ✅ |
| affiliationStatus | string | ✅ |
| **verificationDate** | string `YYYY-MM-DD` | ✅ | **New.** Owner-verified date for timings/contacts; dojo pages may surface "Last verified" for trust |

### 3.6 members.json — `MemberRecord[]` (verification registry)

| Field | Type | Req | Privacy rule |
|---|---|---|---|
| membershipNo | string unique | ✅ | Public search key |
| name | string (initial-form, per current practice) | ✅ | No full DOB, blood group, phone, address — schema **forbids** such fields |
| rank / issueYear / validUpto / branch / instructor | string | ✅ | `issueYear`/`validUpto` = `YYYY` |
| status | enum: `VALID \| EXPIRED \| SUSPENDED` | ✅ | Suspended records stay publishable (public integrity signal) |
| isDemo | boolean | ✅ | Demo records render with the existing "DEMO RECORD" badge only |

### 3.7 achievements.json — **new collection**

| Field | Type | Req |
|---|---|---|
| type | enum: `HallOfFame \| CompetitionResult \| GradingMilestone` | ✅ |
| name | string | ✅ |
| rankOrPosition | string | ✅ |
| year | `YYYY` | ✅ |
| event | string (required when type ≠ HallOfFame) | cond. |
| citation | string (optional) | — |
| image | repo asset path (optional) | — |

### 3.8 gallery.json — **new collection** (consent-enforced)

| Field | Type | Req | Notes |
|---|---|---|---|
| album | `{ event, year }` | ✅ | Year = `YYYY` |
| images[] | array of: `{ src, alt, credit?, consentOnFile }` | ✅ each | `alt` ≥3 chars; `src` must exist in `public/assets`; `consentOnFile` boolean |
| **Validation rule** | — | — | If any image shows an identifiable minor and `consentOnFile=false` ⇒ build failure (### owner-consent gate R3) |

### 3.9 announcements.json — **new collection** (replaces hard-coded `VisitorNoticeBanner` content)

```json
{
  "announcements": [
    {
      "id": "ay-2026-11-open",
      "headline": "Admissions open — Guwahati dojos",
      "detail": "New batches enrolling at National HQ, Beltola & Bamunimaidam. Call +91 78969 62207.",
      "cta": { "text": "Apply Now", "href": "#membership" },
      "priority": "normal",
      "publishedOn": "2026-11-05",
      "expiresOn": "2026-12-31"
    }
  ]
}
```

| Field | Type | Req | Notes |
|---|---|---|---|
| id | string unique | ✅ | `^[a-z0-9-]+$` |
| headline | string ≤70 chars | ✅ | Fits the existing banner |
| detail | string ≤140 chars | ✅ |
| cta | `{ text, href }` (optional) | — | `href` must be an in-page anchor or existing route |
| priority | enum: `normal \| important` | ✅ | `important` ⇒ pinned styling |
| publishedOn / expiresOn | `YYYY-MM-DD`, `expiresOn ≥ publishedOn` | ✅ | **Build filter:** keep only where `expiresOn ≥ today` (build date) |

---

## 4. Rendering contract (P1 wiring notes)

- `VisitorNoticeBanner` reads the **top-priority non-expired** announcement; renders nothing when empty (removes today's hard-coded notice).
- `BranchLocator`, dojo pages, `SyllabusExplorer`, `AffiliationShowcase`, `Leadership`, `VerificationPortal`, `HallOfFame`, `AboutSection`, `Hero`, `Navbar`, `Footer` swap `associationData` imports for `src/content` reads (typed via a small `src/data/content.ts` module that loads + types the JSON at build).
- `associationData.ts` becomes a thin re-export (kept for one release for any stragglers), then deleted in Phase 2.

## 5. Pre-specified front-matter (Phase 2 markdown conventions)

**news post** (`src/content/news/2026-11-05-slug.md`)
```yaml
---
title: "Northeast Zonal Grading Results"
date: 2026-11-05
tag: result          # result | grading | notice | announcement
excerpt: "One-line summary for the index page."   # ≤160 chars
image: "/assets/…"   # optional
---
Body in Markdown. 
```

**event** (`src/content/events/2026-09-06-35th-foundation-day.md`)
```yaml
---
title: "35th Foundation Day Celebration & Seminar"
date: 2026-09-06
endDate: null
status: completed    # upcoming | completed | cancelled
venue: "Bamunimaidam Bihu Mancha Auditorium, Guwahati, Assam"
instructors: ["Sifu Amar Singh Deori", "Sifu Sankar Dutta"]
summary: "≤290-char card text"
highlights: ["…", "…"]   # 3–8 bullets
galleryAlbum: "35th-foundation-2026"   # optional key into gallery.json
---
Long-form recap body (optional).
```

---

## 6. Migration map (mechanical, reviewable)

| `associationData.ts` export | Destination |
|---|---|
| `ASSOCIATION_INFO` | `site.json` |
| `ASSOCIATION_INFO.affiliations` | `affiliations.json` |
| `ASSOCIATION_INFO.leadership` | `leadership.json` |
| `SYLLABUS_DATA` | `syllabus.json` |
| `VERIFIED_MEMBERS` | `members.json` |
| `BRANCHES` | `branches.json` (**+ `verificationDate` per branch — owner supplies**) |
| Hard-coded `VisitorNoticeBanner` copy | `announcements.json` |
| Hard-coded gallery arrays (`GallerySection`, `Leadership` cards) | `gallery.json` (**consent column supplied by owner**) |
| — (new) | `achievements.json` (seeded from Hall of Fame page content) |

## 7. Validation implementation (acceptance tested)

`scripts/validate-content.mjs` must produce error lines in the form:
`CONTENT ERROR [branches.json] gh-hq: verificationDate is required (YYYY-MM-DD)`.

Required checks (minimum):
1. JSON parse + schema conformance per §3 (types, enums, regexes, uniqueness).
2. Cross-file references: `branches[].phone ∈ site.contacts.phones ∪ approved list`; `event.galleryAlbum ∈ gallery.albums`; `announcement.cta.href` resolves.
3. Asset existence: every `image`/`src` path resolves under `public/`.
4. Announcement expiry vs build date.
5. **Forbidden-field guard:** members records containing keys `dob|bloodGroup|phone|address|email` ⇒ hard error.
6. Gallery consent rule per §3.8.
7. Exit code 1 on any error; wired via `"prebuild": "node scripts/validate-content.mjs"`.

No new runtime dependencies enter the site bundle — validation is dev-time only.

## 8. Known data decision pending (R1)

`site.registrationNo` currently carries `KAM/240/W/08 of 2005–2006` (site-wide consistent), while `BLUEPRINT.md` claims `2677/91`. **The governance page and this schema treat R1 as an owner decision; P1 migrates the value as-is and the build fails any inconsistency between docs and data only if both are present.** Do not "resolve" by editing facts without the owner's certificate.

## 9. Phase 1 acceptance tests

1. `npm run build` — 18/18 routes, 0 TS errors, validation script runs first.
2. **Zero visual change** — side-by-side walk of homepage/premium & simple: identical content everywhere (announcement banner equals today's copy until the owner supplies a JSON notice).
3. Validation failure drill — introduce a deliberate schema violation in a branch copy of the data; confirm build fails with a precise error; revert.
4. Announcement expiry drill — set `expiresOn` in the past; confirm banner hides; revert.
5. Lighthouse (home) — A11y/BP/SEO remain **100/100/100**; portal E2E (ID `2060` → VALID) passes.
6. `docs/CHANGELOG.md` → `[Version 2.6.0] — November 2026: content foundation` entry added at commit time.
