# WCMAA India — Developer Guide & Reference Manual

A practical technical handbook for developers, maintainers, and contributors working on the **Wing Chun Martial Arts Association India** web portal.

---

## 1. Quick Start & Prerequisites

### Required Environment
- **Node.js**: `v20.x` or higher (LTS recommended)
- **npm**: `v10.x` or higher
- **OS**: Windows, macOS, or Linux

### Setup Commands
```bash
# 1. Clone the repository
git clone https://github.com/maxecoenergytech/wcmma.git
cd wcmma

# 2. Install dependencies (clean install matching package-lock)
npm ci

# 3. Start local development server (Turbopack)
npm run dev

# 4. Compile & build production static export
npm run build
```

The dev server will run at: `http://localhost:3000` (or `http://localhost:3000/wcmma` depending on `basePath`).

---

## 2. Available NPM Scripts

Defined in `package.json`:
| Script | Command | Purpose |
|---|---|---|
| `npm run dev` | `next dev` | Starts local Turbopack development server with HMR. |
| `npm run build` | `next build` | Runs full TypeScript check and exports static HTML to `/out`. |
| `npm run start` | `next start` | Runs Next.js production server (not used for static exports). |
| `npm run deploy`| `npx wrangler deploy` | Cloudflare deployment utility command. |

---

## 3. Core Architectural Rules

### Rule A: Path Resolution (Never hardcode absolute `/...` paths)
Because this application is deployed both to a root custom domain (`https://www.wcmaaindia.com/`) and a GitHub Pages subpath (`https://maxecoenergytech.github.io/wcmma/`), **always use the path helper utilities**:

```typescript
import { getAssetPath, getRoutePath } from "@/utils/paths";

// For static images, videos, downloads in /public:
<img src={getAssetPath("/assets/example.webp")} alt="Example" />

// For page links, anchor jumps, and routes:
<a href={getRoutePath("#syllabus")}>Syllabus</a>
<a href={getRoutePath("/affiliation/")}>Affiliation</a>
```

### Rule B: Static Decoupling (`output: "export"`)
- The app exports strictly static HTML (`out/` directory).
- **Do not use** Node-only server runtime APIs (e.g., `fs`, `process.env` evaluated dynamically at runtime, or dynamic route handlers `api/` that require a Node server).
- Client-side data is read from `src/data/*.json` and `src/data/*.ts`.

### Rule C: Site Presentation Modes (`src/config/siteMode.json`)
The portal presentation is controlled centrally by `src/config/siteMode.json`:
```json
{
  "siteMode": "premium",
  "lastUpdated": "2026-11-05",
  "version": "2.4.0",
  "description": "Set siteMode to 'maintenance', 'simple', or 'premium'"
}
```
- `"premium"`: Video hero background, 3D WebGL wooden dummy, interactive vector map, rich animations.
- `"simple"`: Lightweight fallback without 3D canvas or background video (optimized for slow mobile connections).
- `"maintenance"`: Instant branded emergency / maintenance splash screen intercepting all traffic.

---

## 4. Key Directory & Code Map

```
wcmma/
├── public/                       # Static public assets
│   ├── assets/                   # WebP images, logos, portraits
│   │   └── hall_of_fame/         # Certified Black Belt portraits
│   └── CNAME.custom_domain_backup# Stored CNAME for www.wcmaaindia.com
├── src/
│   ├── app/                      # Next.js App Router (18 routes)
│   │   ├── layout.tsx            # Root layout, global SEO Schema, Security guard
│   │   ├── page.tsx              # Home router switching layouts via siteMode.json
│   │   ├── globals.css           # Global Tailwind & martial art custom styles
│   │   ├── affiliation/          # Academy Affiliation page
│   │   ├── dojos/                # Individual dojo location pages
│   │   ├── programs/             # Youth and Adult training programs
│   │   ├── legal/                # Disclosures, constitution, registration
│   │   └── privacy, terms...     # Legal subroutes
│   ├── components/               # React UI Components
│   │   ├── premium/              # PremiumLayout.tsx
│   │   ├── simple/               # SimpleLayout.tsx, SimpleHero.tsx
│   │   ├── Hero.tsx              # Video hero component with WebP fallback
│   │   ├── WoodenDummyCanvas.tsx # Three.js WebGL 3D interactive dummy
│   │   ├── HallOfFame.tsx        # Black Belt directory & filter engine
│   │   ├── MembershipApplication.tsx # Admission form + WhatsApp generator
│   │   ├── VerificationPortal.tsx    # Certificate ID search verification
│   │   ├── SecurityProtection.tsx    # Right-click & devtools protection
│   │   └── Navbar.tsx, Footer.tsx...
│   ├── config/
│   │   └── siteMode.json         # Master layout switch
│   ├── data/                     # Content repositories & Single Source of Truth
│   │   ├── associationData.ts    # Official association info, contacts, stats
│   │   ├── hallOfFame.json       # Black belt holders roster
│   │   ├── dojos.json            # National branches & schedules
│   │   ├── credentials.json      # Certificate verification records
│   │   ├── instructors.json      # Founding Sifus & senior master profiles
│   │   └── site.json             # Metadata & official contact strings
│   └── utils/
│       └── paths.ts              # getAssetPath() & getRoutePath() resolver
├── .github/workflows/deploy.yml  # GitHub Actions automated build & export pipeline
├── next.config.mjs               # Next.js configuration (basePath, export mode)
├── package.json                  # Dependencies & scripts
└── tailwind.config.ts            # Tailwind color palette & responsive typography
```

---

## 5. How-To Common Development Recipes

### Recipe 1: Updating Association Contact Details
1. Open `src/data/associationData.ts`.
2. Edit `ASSOCIATION_INFO.contacts`:
   - `primaryPhone`: `"+91 78969 62207"`
   - `email`: `"wingchun91@gmail.com"`
   - `generalSecretary`: `"Sifu Sankar Dutta"`
   - `hqAddress`: Bathoupuri Borjhar HQ address.
3. Update `src/data/site.json` to keep Schema.org metadata synchronized.

### Recipe 2: Adding a New Black Belt to Hall of Fame
1. Prepare a portrait photo (recommended ratio 3:4 or 4:5, compressed WebP format).
2. Save image to `public/assets/hall_of_fame/<name>.webp`.
3. Open `src/data/hallOfFame.json` and append a new record:
   ```json
   {
     "id": "hof-unique-id",
     "name": "Sifu Full Name",
     "rank": "Black Belt",
     "appointment": "Chapter President / Regional Head",
     "districtState": "City, State",
     "credentialId": "20XX",
     "specialization": "Forms / Sparring / Weapons",
     "image": "/assets/hall_of_fame/filename.webp",
     "achievements": [
       "Certified under WCMAA Singapore charter",
       "Achievement point 2"
     ]
   }
   ```
4. Run `npm run build` to verify that the static compilation passes cleanly.

### Recipe 3: Adding or Editing a Training Dojo
1. Open `src/data/dojos.json`.
2. Add or modify the dojo object with its city, coordinates, schedule timings, instructor name, and phone.
3. If creating a dedicated detail page, add `src/app/dojos/<dojo-slug>/page.tsx`.

### Recipe 4: Adding Images to Association Gallery
1. Save high-resolution images as `.webp` inside `public/assets/`.
2. Open `src/components/GallerySection.tsx`.
3. Add entry to `galleryItems`:
   ```typescript
   {
     src: getAssetPath("/assets/your_image.webp"),
     title: "Descriptive Action Title",
     category: "Weapons & Forms", // or "Training & Chi Sau", "Academy Camps", "Leadership", "Milestones"
     aspect: "aspect-[4/5]",
     description: "Historical or technical explanation of the martial technique."
   }
   ```

### Recipe 5: Switching to Custom Domain vs. GitHub Pages
- **To serve from custom domain (`www.wcmaaindia.com`)**:
  - In `next.config.mjs`: set `basePath = ""` (empty string).
  - In `src/utils/paths.ts`: ensure fallback `base = ""`.
  - In `public/`: rename `CNAME.custom_domain_backup` to `CNAME` with content `www.wcmaaindia.com`.
- **To serve from GitHub Pages subpath (`maxecoenergytech.github.io/wcmma/`)**:
  - Keep `basePath = "/wcmma"`.
  - Ensure `public/CNAME` is removed or named `.backup`.

---

## 6. Testing, QA & Verification Checklist

Before pushing commits to the repository:
1. **Type Checking & Build**:
   ```bash
   npm run build
   ```
   Must exit with code 0 and compile all 18 routes into the `/out` directory.
2. **Subpath Asset Resolution**:
   Check `out/index.html` to confirm that all assets are prefixed correctly:
   - Images: `/wcmma/assets/...` (or `/assets/...` on root domain).
   - Scripts: `/wcmma/_next/static/...`.
3. **Responsive Check**:
   Test on Desktop (1440px), Tablet (768px), and Mobile (375px). Ensure the `MobileActionDock` appears on small viewports and does not cover content.
4. **WhatsApp Integration**:
   Click enrollment submit and test the generated WhatsApp URL to ensure the phone number (`+917896962207`) and encoded applicant text are populated properly.

---

## 7. Safety, Security & Rollback Protocol

- **Payment Security Policy**: WCMAA India does not collect digital fees, credit cards, or online UPI transactions. Keep security banners and anti-fraud alerts active in `Footer.tsx` and `MembershipApplication.tsx`.
- **Safety Gate**: Never push unverified changes directly to `main` without testing `npm run build` locally first.
- **Rollback Points**: In case of regression, restore from existing Git backup tags:
  - `git checkout site-active-pre-maintenance-2026`
  - `git checkout hall-of-fame-enrollment-backup-2026`
