# WCMAA India — Deployment & Publishing Guide

> **How to Deploy Updates to GitHub Pages**  
> Written for developers and non-technical website maintainers.

---

## 1. How Deployment Works on GitHub Pages

This website is automatically deployed using **GitHub Actions**.

Whenever you save changes and push them to the `main` branch of `https://github.com/maxecoenergytech/wcmma.git`:
1. GitHub detects the new commit.
2. An automated build robot runs on GitHub (`.github/workflows/deploy.yml`).
3. It installs dependencies, runs `npm run build`, and copies the static website `./out` folder to the live hosting server.
4. Your live website at [https://maxecoenergytech.github.io/wcmma/](https://maxecoenergytech.github.io/wcmma/) updates automatically within **60 to 90 seconds**.

---

## 2. Standard 5-Step Deployment Process

### Step 1: Open Terminal in Project Folder
Open PowerShell or your terminal in the website project directory:
```bash
cd "D:\Projects\Wing Chun Martial Arts Association India"
```

### Step 2: Test Locally Before Publishing
Always make sure your changes compile without errors:
```bash
npm run build
```
If the command finishes with `✓ Compiled successfully` and `Generating static pages (9/9)`, your code is valid!

### Step 3: Stage Changed Files
```bash
git add .
```

### Step 4: Commit with a Clear Message
Write a short, descriptive message explaining what you changed:
```bash
git commit -m "Add new dojo in Pune and update contact numbers"
```
*(Avoid vague commit messages like "updates" or "fix".)*

### Step 5: Push to GitHub
```bash
git push origin main
```

---

## 3. Quick One-Click Script for Windows (`push_to_github.bat`)

If you are using Windows, we have provided an automated script:
1. Double-click `push_to_github.bat` in the project root folder.
2. Type a short description when prompted (e.g. *"Updated phone number"*).
3. The script will automatically add, commit, and push your changes to GitHub!

---

## 4. How to Check Deployment Status on GitHub

1. Open your browser and go to:  
   [https://github.com/maxecoenergytech/wcmma/actions](https://github.com/maxecoenergytech/wcmma/actions)
2. You will see the latest workflow run named **"Deploy Next.js to GitHub Pages"**.
3. A **yellow spinning icon** means the deployment is currently building.
4. A **green checkmark** means the website is live!
5. A **red cross** means a build error occurred. Click on the run to see which file had an issue.

---

## 5. Verifying the Live Website

Once the green checkmark appears:
1. Open [https://maxecoenergytech.github.io/wcmma/](https://maxecoenergytech.github.io/wcmma/).
2. Perform a hard refresh to bypass browser caching:
   * **Windows / Chrome / Edge:** Press `Ctrl + F5`
   * **Mac / Safari / Chrome:** Press `Cmd + Shift + R`
   * **Mobile phones:** Clear browser cache in settings or open in an incognito/private tab.

---

## 6. GitHub Pages Settings (For Repository Administrators)

If you ever need to reconfigure repository settings:
1. Go to your repository: [https://github.com/maxecoenergytech/wcmma/settings/pages](https://github.com/maxecoenergytech/wcmma/settings/pages)
2. Under **Build and deployment > Source**, select:
   * **`GitHub Actions`** (Do NOT choose "Deploy from a branch").
3. Under **Custom domain**, you can enter your own domain (e.g. `indiawingchun.com`) when ready.
4. Check **Enforce HTTPS** to keep visitor traffic encrypted.
