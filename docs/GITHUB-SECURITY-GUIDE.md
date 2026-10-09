# WCMAA India — GitHub Repository Security Guide
**Organization:** Wing Chun Martial Arts Association India  
**Repository:** `https://github.com/maxecoenergytech/wcmma.git`  
**Classification:** Operational Security & Governance  

---

## 1. Two-Factor Authentication (2FA) Mandatory Setup

All repository owners and contributors must enable hardware or authenticator app 2FA:

1. Log into GitHub and go to **Settings** ➔ **Password and authentication**.
2. Click **Enable two-factor authentication**.
3. Use a verified TOTP app (Google Authenticator, Microsoft Authenticator, or 1Password).
4. **CRITICAL:** Download and print your **16 Recovery Codes**. Store them offline in a physical, secure location (such as the Secretariat administrative safe).

---

## 2. Production Branch Protection Rulesets (`main`)

To prevent accidental overwrites, unreviewed changes, or malicious force pushes:

1. In the repository, navigate to **Settings** ➔ **Branches**.
2. Click **Add branch protection rule** (or **Add ruleset**).
3. **Branch name pattern:** `main`
4. Enable the following controls:
   * ☑️ **Require a pull request before merging** (Require at least 1 approval).
   * ☑️ **Require status checks to pass before merging** (Select your GitHub Actions build workflow).
   * ☑️ **Require conversation resolution before merging**.
   * ☑️ **Do not allow bypassing the above settings**.
   * ☑️ **Restrict who can push to matching branches**.
   * ☑️ **Block force pushes** (Prevent `git push --force`).
   * ☑️ **Block branch deletions**.
5. Click **Save changes**.

---

## 3. Secret Scanning & Push Protection

GitHub provides automated scanning to prevent credentials from ever being committed:

1. Go to **Settings** ➔ **Code security and analysis**.
2. Scroll to **Secret scanning** ➔ click **Enable**.
3. Under Secret scanning, turn on **Push protection**.
   * *What this does:* If a developer accidentally attempts to commit a password, private key, or access token, GitHub will immediately reject the push before it ever reaches the repository.

---

## 4. Dependabot Automated Security Updates

This repository contains [`.github/dependabot.yml`](../.github/dependabot.yml), which automatically scans:
* **npm packages:** Weekly scans every Monday at 06:00 IST.
* **GitHub Actions workflows:** Weekly checks for action updates.

When a security vulnerability is identified in an open-source library, Dependabot automatically opens a Pull Request with the security patch.

To review alerts:
* Go to the **Security** tab ➔ **Dependabot alerts**.

---

## 5. Collaborator Access & Least Privilege

* **Owner Account:** `maxecoenergytech` (Administrator).
* **Developer Accounts:** Should be granted **Write** or **Triage** access only, never Admin, unless authorized by the Secretariat.
* **Periodic Audit:** Every 90 days, review **Settings** ➔ **Collaborators** and remove any former developers or unused automated bots.
* **Personal Access Tokens (PAT):**
  * Use **Fine-grained Personal Access Tokens** with expiration dates (maximum 90 days).
  * Never commit tokens to code.
  * Use [push_to_github.bat](../push_to_github.bat) which prompts for the token interactively in memory and never writes it to disk.
