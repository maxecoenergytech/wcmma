# WCMAA India — Backup & Rollback Guide

> **Non-Technical Guide for Website Owners**  
> How to create safe offline backups, switch versions, and rollback changes in seconds.

---

## 1. The 30-Second Version Switch & Rollback

You have two complete presentation versions of the website. Switching between them or rolling back takes less than 30 seconds:

### Want to roll back to the SIMPLE (Clean/Fast) version?
1. Double-click `switch_to_simple.bat`.
2. Wait for it to show `SUCCESS`.
3. Double-click `push_to_github.bat` to publish it live to GitHub Pages.

### Want to switch to the PREMIUM (3D/Cinematic) version?
1. Double-click `switch_to_premium.bat`.
2. Wait for it to show `SUCCESS`.
3. Double-click `push_to_github.bat` to publish it live to GitHub Pages.

---

## 2. Permanent Git Stability Checkpoints

The repository maintains permanent Git milestone tags representing working states:

| Git Tag Name | What It Represents | How to Restore |
| :--- | :--- | :--- |
| `production-stable` | The currently verified live production version. | `git checkout production-stable` |
| `simple-stable` | Verified milestone of the Simple (lightweight) version. | `git checkout simple-stable` |
| `premium-stable` | Verified milestone of the Premium (3D cinematic) version. | `git checkout premium-stable` |
| `pre-dual-version-architecture-2026` | Safe backup created before introducing dual-version architecture. | `git checkout pre-dual-version-architecture-2026` |

---

## 3. How to Create an Offline Backup (Safe Storage)

We recommend downloading an offline copy once a month or before major updates:

### Method A: Download ZIP from GitHub (Easiest)
1. Go to [https://github.com/maxecoenergytech/wcmma](https://github.com/maxecoenergytech/wcmma).
2. Click the green **Code** button at the top right.
3. Select **Download ZIP**.
4. Save the ZIP file to a USB pendrive, external hard drive, or Google Drive.

### Method B: Full Git Clone on Any Computer
To clone the entire project with all historical versions onto a new laptop:
```bash
git clone https://github.com/maxecoenergytech/wcmma.git
```

---

## 4. Emergency Disaster Recovery (Total Reversion)

If a developer makes a mistake and you want to completely revert everything back to the safe checkpoint:

1. Open your command terminal in the website folder.
2. Run:
   ```bash
   git reset --hard pre-dual-version-architecture-2026
   git push origin main --force
   ```
3. Within 1 minute, GitHub Pages will automatically restore the original working website.
