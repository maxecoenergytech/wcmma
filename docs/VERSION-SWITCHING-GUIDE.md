# WCMAA India — Version Switching Guide

> **Official Owner & Developer Guide for the Dual-Version System**  
> Written for non-technical website owners and future web developers.

---

## 1. Overview: One Website, Two Presentation Modes

The WCMAA India website is built on a **Single Source of Truth** architecture:

* **All content is maintained in ONE place:** [`src/data/associationData.ts`](file:///d:/Projects/Wing%20Chun%20Martial%20Arts%20Association%20India/src/data/associationData.ts)
* When you add a dojo, change a phone number, or add a student certificate record, **both versions update automatically**.
* You have **two complete presentation designs**:

| Mode | Visual Identity | Characteristics | When to Use |
| :--- | :--- | :--- | :--- |
| **SIMPLE** | Traditional Federation | Clean, fast, lightweight, no 3D canvas, sub-second load on 3G/4G, minimal JavaScript. | When you want maximum speed, simplicity, and accessibility on all devices. |
| **PREMIUM** | Cinematic Martial Arts Hall | Procedural 3D Muk Yan Jong (Three.js WebGL), mouse parallax, interactive India map, 3D card tilts, deep crimson/gold lighting. | When you want an international, high-impact, visual showcase for seminars and branding. |

---

## 2. How to Preview Both Versions Locally

Before publishing, you can preview both versions side-by-side on your computer without affecting the live website:

1. Open your terminal in the project folder and run:
   ```bash
   npm run dev
   ```
2. Open your web browser:
   * **To preview the SIMPLE version:**  
     Navigate to: `http://localhost:3000/preview/simple/`
   * **To preview the PREMIUM version:**  
     Navigate to: `http://localhost:3000/preview/premium/`
   * **To see the CURRENT PUBLIC version:**  
     Navigate to: `http://localhost:3000/`

> **Note:** The preview banners at the top of these preview pages are strictly for you and your developer. Normal visitors will never see them on the main homepage.

---

## 3. How to Switch the Published Version (1-Click Method)

In the root folder of the website, two simple Windows scripts have been created:

### To Publish the SIMPLE Version:
1. Double-click [`switch_to_simple.bat`](file:///d:/Projects/Wing%20Chun%20Martial%20Arts%20Association%20India/switch_to_simple.bat).
2. The script automatically updates the setting to `simple` and tests the build.
3. When it displays **SUCCESS**, double-click [`push_to_github.bat`](file:///d:/Projects/Wing%20Chun%20Martial%20Arts%20Association%20India/push_to_github.bat) to publish it live to GitHub Pages.

### To Publish the PREMIUM Version:
1. Double-click [`switch_to_premium.bat`](file:///d:/Projects/Wing%20Chun%20Martial%20Arts%20Association%20India/switch_to_premium.bat).
2. The script automatically updates the setting to `premium` and tests the build.
3. When it displays **SUCCESS**, double-click [`push_to_github.bat`](file:///d:/Projects/Wing%20Chun%20Martial%20Arts%20Association%20India/push_to_github.bat) to publish it live to GitHub Pages.

---

## 4. Manual Method for Developers

If a future developer prefers using the code editor directly:

1. Open [`src/config/siteMode.json`](file:///d:/Projects/Wing%20Chun%20Martial%20Arts%20Association%20India/src/config/siteMode.json).
2. Change `"siteMode"`:
   ```json
   {
     "siteMode": "simple"
   }
   ```
   *(or `"siteMode": "premium"`)*
3. Save the file.
4. Run:
   ```bash
   npm run build
   git add .
   git commit -m "Switch production to simple version"
   git push origin main
   ```

---

## 5. Instant Rollback Instructions

You can switch back and forth between Simple and Premium in less than 30 seconds at any time:

* To return from Premium to Simple: Run `switch_to_simple.bat` -> `push_to_github.bat`.
* To return from Simple to Premium: Run `switch_to_premium.bat` -> `push_to_github.bat`.

In Git, standard stability snapshots have also been tagged:
* `simple-stable`
* `premium-stable`
* `production-stable`

---

## 6. Shared Security Rules (NEVER CHANGE)

Regardless of which version is active, the following rules are strictly enforced:

1. **NO PAYMENTS:** Neither version may ever include payment links, UPI QR codes, registration fee charges, or bank account inputs.
2. **COMPLETED EVENT STATUS:** The 35th Foundation Seminar (6 September 2026) is completed. It must never show countdown timers, registration buttons, or payment forms.
3. **NO VISITOR SWITCH BUTTON:** Visitors must never see a toggle or switch button on the live public site.
