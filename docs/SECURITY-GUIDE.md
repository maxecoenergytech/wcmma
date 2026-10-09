# WCMAA India — Website Security & Anti-Fraud Guide

> **Official Security and Anti-Fraud Policy**  
> Wing Chun Martial Arts Association India (WCMAA India)

---

## 1. Strict Permanent No-Payment Policy

WCMAA India maintains a **zero-financial-transaction policy** across all web pages and presentation modes:

* **No Payment Collection:** The website does **not** process, collect, or accept any online monetary payments.
* **No UPI IDs or QR Codes:** No UPI handles, QR codes, or digital wallet links may ever appear on the website.
* **No Bank Account Information:** No bank account numbers, IFSC codes, or donation requests are published for online collection.
* **No Registration Fees:** Membership applications, dojo queries, and event notices are strictly informational.
* **Completed Event Guard:** The 35th Foundation Anniversary Seminar (6 September 2026) is completed and displays **COMPLETED** with zero payment or UTR entry fields.

---

## 2. Anti-Scam & Fraud Safeguards

To protect students, parents, and martial arts practitioners across India from online fraud:

1. **Official Security Notice:**  
   Every page displays the verified disclaimer:
   > *"Security & Anti-Fraud Notice: WCMAA India does not collect online payments, UPI transfers, donations, registration fees, OTPs, PINs, passwords, or banking credentials through this website. All interactions are strictly informational and conducted through official secretariat communication channels. Beware of fraudulent requests or unauthorized impersonation."*

2. **Official Communication Channels Only:**
   * **General Secretary Phone:** `+91 78969 62207`
   * **Secondary Helpline:** `+91 90852 96178`
   * **Official Email:** `duttasankar88@gmail.com`
   * **Official Facebook:** [https://www.facebook.com/wingchunkungfuindiaofficial](https://www.facebook.com/wingchunkungfuindiaofficial)

---

## 3. Practitioner Privacy in Credential Lookups

The Certificate Verification Portal (`src/components/VerificationPortal.tsx`) enforces strict data minimization:

* **Displayed Data:** Credential ID, Practitioner Name/Initials, Rank/Grade, Status (`VALID` / `EXPIRED`), Issue Year, and Branch.
* **Hidden Data:** Full dates of birth, personal addresses, phone numbers, and blood groups are **never** returned in public search queries.
* **Demo Flags:** Sample search queries are explicitly labeled with `DEMO RECORD — NOT AN OFFICIAL CREDENTIAL`.

---

## 4. Zero Secrets Policy in Codebase

* No API keys, passwords, database credentials, SMTP passwords, or private access tokens exist in any public or repository file.
* The entire platform runs as a static export, eliminating server-side attack vectors (SQL injection, database breach, server daemon exploits).

---

## 5. What to Do If Fraud or Impersonation Is Detected

If anyone encounters an unauthorized entity claiming to represent WCMAA India and requesting payment or bank details:
1. Do not transfer funds or share financial details.
2. Immediately report the incident to the Secretariat via WhatsApp or phone: `+91 78969 62207`.

---

## 6. Content Protection & Anti-Scraping Compliance

To prevent scammers, impostors, and malicious scrapers from duplicating the website, certificates, emblems, or leadership records:

* **Right-Click Disabled:** Right-clicking anywhere on the website is blocked and triggers a Security Compliance warning.
* **Developer Tools & Inspection Shortcuts Blocked:**
  - `F12` (Developer Tools)
  - `Ctrl + U` / `Cmd + U` (View Page Source)
  - `Ctrl + Shift + I` / `Cmd + Option + I` (Inspect Elements)
  - `Ctrl + Shift + J` / `Cmd + Option + J` (Developer Console)
  - `Ctrl + Shift + C` / `Cmd + Option + C` (Element Picker)
  - `Ctrl + S` / `Cmd + S` (Save Page as HTML)
* **Emblem & Image Drag Protection:** Logos, trademarks, photos, and canvas elements cannot be dragged or copied via mobile long-press menus (`user-drag: none`, `-webkit-touch-callout: none`).
* **HTTP Security Headers (`public/_headers`):**
  - `X-Frame-Options: SAMEORIGIN` (prevents clickjacking and fraudulent iframe embedding).
  - `X-Content-Type-Options: nosniff` (prevents MIME-type sniffing attacks).
  - `Permissions-Policy: payment=(), camera=(), microphone=(), geolocation=()` (strictly disables browser payment APIs and unauthorized hardware access).
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (enforces encrypted HTTPS everywhere).

