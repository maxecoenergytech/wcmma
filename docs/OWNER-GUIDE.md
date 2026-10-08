# WCMAA India — Website Owner Guide

> **Written specifically for the non-technical website owner.**  
> If you need to make changes to your website, you can share this guide with any local web developer, freelancer, or student.

---

## 1. Quick Cheat Sheet: "What Do I Tell My Developer?"

Whenever you need to update something on the website, simply find what you want to change in the table below and tell your developer the file name listed in the right column:

| I Want to Change... | What to Tell Your Developer | File Name in the Project |
| :--- | :--- | :--- |
| **Phone number or WhatsApp number** | *"Please update the phone numbers in the central association data file."* | `src/data/associationData.ts` (Lines 49–51) |
| **Official email address** | *"Please update the official email in the central data file."* | `src/data/associationData.ts` (Line 52) |
| **Headquarters or office address** | *"Please update the addresses in the central data file."* | `src/data/associationData.ts` (Lines 53–56) |
| **Add a new Dojo / Training Centre** | *"Please add a new dojo to the BRANCHES list in the central data file."* | `src/data/associationData.ts` (`BRANCHES` section) |
| **Update an existing Dojo details** | *"Please update the timing, instructor, or address in the BRANCHES list."* | `src/data/associationData.ts` (`BRANCHES` section) |
| **Update Instructor profiles / bios** | *"Please update the leadership information in the central data file."* | `src/data/associationData.ts` (`leadership` section) |
| **Add a new Event or Seminar** | *"Please update the completed event recap or add an event to the events archive."* | `src/components/FoundationEvent.tsx` and `src/data/associationData.ts` |
| **Add a member to the Certificate Verification Portal** | *"Please add a new record to the VERIFIED_MEMBERS list in the data file."* | `src/data/associationData.ts` (`VERIFIED_MEMBERS` section) |
| **Replace or add a Gallery photo** | *"Please put the new photo in `public/assets/` and update the gallery list."* | `public/assets/` and `src/components/GallerySection.tsx` |
| **Replace the Association Logo** | *"Please replace the logo files in `public/assets/`."* | `public/assets/wcmaai_logo.webp` and `wcmaai_logo_sm.webp` |
| **Update the Footer or Copyright text** | *"Please update the Footer component."* | `src/components/Footer.tsx` |
| **Update Homepage Headlines or Hero text** | *"Please edit the Hero component."* | `src/components/Hero.tsx` |
| **Update Legal & Governance information** | *"Please update the Legal page."* | `src/app/legal/page.tsx` |

---

## 2. Three Golden Rules for the Website Owner

1. **Keep Your GitHub Account Secure:**
   * Your website is hosted on GitHub under `maxecoenergytech`.
   * Never share your GitHub account password over public chat.
   * If you hire a developer, give them "Collaborator" access to the repository rather than giving away your primary account credentials.

2. **Never Keep Secrets in the Website Code:**
   * Never put your personal bank passwords, UPI PINs, or private phone numbers in the public files.
   * All files in this project are public on GitHub.

3. **Always Keep an Offline Copy:**
   * Every month or whenever you make major changes, download a ZIP backup of the project and save it on a USB flash drive or external hard disk.
   * (See [BACKUP-GUIDE.md](./BACKUP-GUIDE.md) for simple instructions).

---

## 3. How Changes Are Published

When your developer makes a change:
1. They save the file on their computer.
2. They run `push_to_github.bat` (or run `git push origin main`).
3. GitHub automatically publishes the new version to [https://maxecoenergytech.github.io/wcmma/](https://maxecoenergytech.github.io/wcmma/) in approximately 60 seconds.
4. Refresh your mobile or computer browser (press `Ctrl + F5` on Windows or `Cmd + Shift + R` on Mac to see the latest version immediately).
