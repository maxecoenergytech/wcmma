# WCMAA India — Incident Response & Anti-Fraud Action Guide
**Organization:** Wing Chun Martial Arts Association India  
**Applicability:** Secretariat, Executive Committee & Web Administrators  
**Emergency Contact:** General Secretary Desk (`+91 78969 62207` | `duttasankar88@gmail.com`)  

---

## 1. Incident Classification

| Scenario | Severity | Immediate Risk |
| :--- | :--- | :--- |
| **Impersonation / Fake Dojo / Fake Certificate** | **High** | Scammers soliciting unauthorized fees or fake gradings |
| **Fake Social Media Account / WhatsApp Group** | **High** | Fraudulent event registrations or online payment requests |
| **Compromised GitHub Account / Unauthorized Commit** | **Critical** | Malicious changes pushed to production website |
| **Domain Hijack / DNS Tampering** | **Critical** | Traffic redirected away from official website |
| **Defacement / False Information Published** | **High** | Association reputation or misleading legal claims |

---

## 2. Playbook: Fake Account or Impersonator Detected

If someone discovers an unauthorized page, Instagram handle, WhatsApp group, or dojo claiming official WCMAA India status:

1. **Evidence Collection:**
   * Take immediate full-screen screenshots showing dates, phone numbers, UPI IDs, and URLs.
   * Document the exact names and claims being made.
2. **Secretariat Verification:**
   * Check official records in [src/data/dojos.json](../src/data/dojos.json) and [src/data/instructors.json](../src/data/instructors.json).
   * Confirm whether the person holds a valid physical certificate signed by Founder President Amar Singh Deori.
3. **Public Advisory:**
   * Post an official advisory on the verified Facebook page ([facebook.com/wingchunkungfuindiaofficial](https://www.facebook.com/wingchunkungfuindiaofficial)).
   * Remind practitioners: *"WCMAA India never collects online UPI transfers, and all official affiliations are verified centrally."*
4. **Legal / Platform Reporting:**
   * File an impersonation / trademark violation report directly on Meta / WhatsApp / Google.
   * For financial fraud attempts, report to the National Cyber Crime Reporting Portal ([cybercrime.gov.in](https://cybercrime.gov.in)).

---

## 3. Playbook: Compromised GitHub Account / Malicious Commit

If unauthorized commits appear on the repository:

1. **Step 1: Emergency Rollback (Takes 30 seconds)**
   * Open terminal in the project directory:
     ```bash
     # Revert working branch to verified backup tag
     git reset --hard pre-security-hardening-2026
     git push -f origin main
     ```
   * GitHub Pages will automatically redeploy the verified backup within 60 seconds.
2. **Step 2: Revoke All Personal Access Tokens (PATs)**
   * Go to GitHub ➔ **Settings** ➔ **Developer settings** ➔ **Personal access tokens**.
   * Click **Revoke** on all active tokens.
3. **Step 3: Change Password & Reset 2FA**
   * Change account password immediately.
   * Regenerate 2FA recovery codes.
4. **Step 4: Audit Collaborators**
   * Go to repository **Settings** ➔ **Collaborators** and remove any unrecognized accounts.

---

## 5. Playbook: Domain or DNS Tampering

If `www.wcmaaindia.com` does not load or redirects to an external site:

1. Log into [HostingRaja](https://hostingraja.in/) and verify Nameservers are still pointing to Cloudflare.
2. Log into [Cloudflare](https://dash.cloudflare.com/) and audit **Audit Log** under the account profile to see who made recent DNS changes.
3. Verify DNS record for `www` points to `maxecoenergytech.github.io`.
4. Restore DNS records using [docs/CLOUDFLARE-SETUP-GUIDE.md](./CLOUDFLARE-SETUP-GUIDE.md).

---

## 6. Official Escalation Contacts

* **General Secretary:** Sifu Sankar Dutta (+91 78969 62207)
* **Secondary Helpline:** +91 90852 96178
* **Administrative Email:** `duttasankar88@gmail.com`
* **Official Headquarters:** Bathoupuri, ISBT Lokhra, Guwahati - 781035, Assam, India
