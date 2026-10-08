# WCMAA India — Complete Backup & Disaster Recovery Guide

> **How to Create a 100% Offline, Independent Backup**  
> Anyone can take this backup and restore the entire website on any computer.

---

## 1. What Needs to Be Backed Up?

A complete backup contains:
1. **Source Code:** All React components, pages, CSS styles, and TypeScript files in `src/`.
2. **Media Assets:** All WebP and JPG photos, logos, and certificates in `public/assets/`.
3. **Data Files:** Central association records in `src/data/associationData.ts`.
4. **Configuration Files:** `package.json`, `next.config.mjs`, `tsconfig.json`, and `.github/workflows/deploy.yml`.
5. **Documentation:** All handover guides in `docs/` and `README.md`.
6. **Git Version History:** The hidden `.git` folder containing all previous commit history.

---

## 2. Method 1: Instant ZIP Backup from GitHub (Easiest for Website Owner)

1. Open your repository in a web browser:  
   [https://github.com/maxecoenergytech/wcmma](https://github.com/maxecoenergytech/wcmma)
2. Click the green **`<> Code`** button.
3. Click **`Download ZIP`**.
4. A file named `wcmma-main.zip` will download to your computer.
5. Save this ZIP file onto a USB flash drive or Google Drive folder labeled:  
   `WCMAA_Website_Backup_YYYY_MM_DD.zip`

---

## 3. Method 2: Complete Local Folder Backup (Windows)

If you have the project directory on your computer:

1. Close any running terminal or development servers.
2. Open Windows File Explorer and navigate to `D:\Projects\`.
3. Right-click on the folder **`Wing Chun Martial Arts Association India`**.
4. Select **Send to > Compressed (zipped) folder** (or use 7-Zip).
5. Copy the resulting `.zip` file onto:
   * A USB Flash Drive kept at the Association Secretariat.
   * A secure cloud backup (Google Drive, Dropbox, or OneDrive).

---

## 4. Method 3: Complete Git Clone Backup (For Developers)

To clone a full offline copy with complete version history:
```bash
git clone --mirror https://github.com/maxecoenergytech/wcmma.git wcmma-backup.git
```
This preserves every commit, tag, and branch ever made.

---

## 5. How to Restore the Website from a Backup

If a computer crashes or you hire a new developer:
1. Extract the backup ZIP file to a new folder on the new computer.
2. Install Node.js (v18 or higher) from [nodejs.org](https://nodejs.org).
3. Open a terminal inside the extracted folder.
4. Run:
   ```bash
   npm install
   npm run build
   ```
5. Your website is completely restored and ready to run or deploy!
