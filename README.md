# Wing Chun Martial Arts Association India (WCMAA India)

> **Official National Portal**  
> **Live Website:** [https://maxecoenergytech.github.io/wcmma/](https://maxecoenergytech.github.io/wcmma/)  
> **Repository:** [https://github.com/maxecoenergytech/wcmma.git](https://github.com/maxecoenergytech/wcmma.git)  
> **Heritage:** 35 Years of Wing Chun Heritage in India (1991–2026)  
> **Registration:** KAM/240/W/08 of 2005–2006 (Assam)  

---

## 1. About This Website

This repository contains the official website for the **Wing Chun Martial Arts Association India (WCMAA India)**. It is built using modern, open, and portable web technologies (Next.js, React, Tailwind CSS, TypeScript) and is statically exported to standard HTML, CSS, JavaScript, and WebP images.

The website is hosted on **GitHub Pages**, meaning:
* **No hosting fees** — 100% free hosting provided by GitHub Pages.
* **No database servers to crash** — It runs as high-speed static web pages.
* **No proprietary lock-in** — Any competent web developer can download, edit, and maintain this project on any computer.

---

## 2. Quick Links for the Website Owner & Future Developers

For complete step-by-step guides, open the [`docs/`](./docs/) folder:

| Document | Who It's For | Description |
| :--- | :--- | :--- |
| [**OWNER-GUIDE.md**](./docs/OWNER-GUIDE.md) | **Website Owner** | Simple English guide: *"If I want to change something, what do I tell my developer?"* |
| [**VERSION-SWITCHING-GUIDE.md**](./docs/VERSION-SWITCHING-GUIDE.md) | **Owner / Dev** | How to switch between the **Simple (Lightweight)** and **Premium (3D Cinematic)** versions with 1 click. |
| [**WEBSITE-HANDOVER.md**](./docs/WEBSITE-HANDOVER.md) | **New Developers** | Complete technical handover explaining the architecture, portability, and structure. |
| [**CONTENT-UPDATE-GUIDE.md**](./docs/CONTENT-UPDATE-GUIDE.md) | **Developers** | Step-by-step guide to updating phone numbers, dojos, instructors, events, and credentials. |
| [**DEPLOYMENT-GUIDE.md**](./docs/DEPLOYMENT-GUIDE.md) | **Developers** | How to test locally, build, and publish changes to GitHub Pages. |
| [**IMAGE-GUIDE.md**](./docs/IMAGE-GUIDE.md) | **Developers / Owner** | Image sizes, WebP formats, naming rules, and how to replace photos. |
| [**SECURITY-GUIDE.md**](./docs/SECURITY-GUIDE.md) | **Everyone** | Official anti-scam policy, strict no-payment rule, and privacy safeguards. |
| [**BACKUP-AND-ROLLBACK-GUIDE.md**](./docs/BACKUP-AND-ROLLBACK-GUIDE.md) | **Owner / Dev** | Complete offline backup instructions and 30-second version rollback procedures. |
| [**CHANGELOG.md**](./docs/CHANGELOG.md) | **Developers** | Record of all website updates, version history, and compliance adjustments. |

---

## 3. Project Directory Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated deployment workflow to GitHub Pages
├── docs/                        # Complete handover & update documentation
│   ├── OWNER-GUIDE.md
│   ├── WEBSITE-HANDOVER.md
│   ├── CONTENT-UPDATE-GUIDE.md
│   ├── DEPLOYMENT-GUIDE.md
│   ├── BACKUP-GUIDE.md
│   ├── IMAGE-GUIDE.md
│   └── CHANGELOG.md
├── public/                      # Static assets served directly
│   ├── assets/                  # WebP & JPG photos, emblems, logos
│   ├── robots.txt               # Search engine crawler instructions
│   └── sitemap.xml              # Search engine sitemap
├── src/
│   ├── app/                     # Website routes & pages
│   │   ├── page.tsx             # Homepage (14 distinct federation sections)
│   │   ├── layout.tsx           # Global HTML header, SEO metadata & Schema.org JSON-LD
│   │   ├── affiliation/         # Dedicated Academy Affiliation portal
│   │   ├── legal/               # Complete Legal & Governance portal
│   │   ├── privacy/             # Privacy Policy route
│   │   ├── terms/               # Terms & Conditions route
│   │   ├── disclaimer/          # Martial arts health & training disclaimer
│   │   └── copyright/           # Copyright & intellectual property terms
│   ├── components/              # Reusable UI sections and widgets
│   │   ├── Navbar.tsx           # Top navigation bar & mobile drawer
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── TrustBar.tsx         # 5 credentials & registration badge
│   │   ├── AboutSection.tsx     # Association background & overview
│   │   ├── WhyTrainSection.tsx  # 6 core training pillars
│   │   ├── TrainingPathway.tsx  # 5-step curriculum progression & syllabus
│   │   ├── Leadership.tsx       # Sifu Amar Singh Deori & Sifu Sankar Dutta profiles
│   │   ├── BranchLocator.tsx    # Searchable Dojo Directory with WhatsApp inquiry
│   │   ├── StudentsParentsSection.tsx # Training pathways for beginners, adults, kids, women
│   │   ├── AffiliationShowcase.tsx    # Academy affiliation overview & terms modal
│   │   ├── VerificationPortal.tsx     # Credential verification search engine
│   │   ├── FoundationEvent.tsx  # 35th Anniversary Event Recap & Historical Archive
│   │   ├── HeritageTimeline.tsx # 35-year historical timeline (1991–2026)
│   │   ├── GallerySection.tsx   # Category-filtered photo gallery with zoom lightbox
│   │   ├── FinalCta.tsx         # Bottom action buttons
│   │   ├── MembershipApplication.tsx # Online admission & dojo contact form
│   │   ├── Footer.tsx           # Standardized legal footer with links
│   │   ├── FloatingWhatsApp.tsx # Floating multi-option WhatsApp help desk
│   │   └── MobileActionDock.tsx # Quick bottom call/chat dock for smartphones
│   ├── data/
│   │   └── associationData.ts   # Central data file (contacts, dojos, members, syllabus)
│   └── utils/
│       └── paths.ts             # Path helper for GitHub Pages subfolder compatibility
├── next.config.mjs              # Next.js static export configuration
├── package.json                 # Project dependencies and npm scripts
├── push_to_github.bat           # 1-click Windows script to push updates to GitHub
└── README.md                    # This document
```

---

## 4. How to Run the Website Locally (For Any Developer)

Requirements: Node.js (v18 or higher) and Git.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maxecoenergytech/wcmma.git
   cd wcmma
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
4. **Build and test static export:**
   ```bash
   npm run build
   ```
   The compiled website is placed in the `./out` folder.

---

## 5. One-Click Publishing (For Windows Users)

Double-click the `push_to_github.bat` file in the project root folder. It will:
1. Stage all your changed files.
2. Prompt you for a short description of your changes.
3. Commit and push directly to GitHub (`origin main`).
4. GitHub Actions will automatically rebuild and publish the website to GitHub Pages in ~1 minute.

---

## 6. Website Governance & Ownership

* **Owner:** Wing Chun Martial Arts Association India (WCMAA India)
* **General Secretary Desk:** Sifu Sankar Dutta (+91 78969 62207 / duttasankar88@gmail.com)
* **Registered HQ:** Bathoupuri, ISBT Lokhra, Guwahati - 781035, Assam, India
* **Development & Technical Architecture:** maxecoenergy&tech
* **License / Copyright:** © 1991–2026 Wing Chun Martial Arts Association India. All Rights Reserved.
