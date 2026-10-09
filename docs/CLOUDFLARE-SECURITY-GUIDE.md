# WCMAA India — Cloudflare Edge Security & WAF Guide
**Domain:** `www.wcmaaindia.com` | `wcmaaindia.com`  
**Classification:** Edge CDN, SSL & Traffic Protection  

---

## 1. Verified Architecture Overview

* **DNS & CDN Layer:** Cloudflare (Anycast edge caching, DDoS mitigation, SSL termination).
* **Storage & Compute Layer:** GitHub Pages (`maxecoenergytech.github.io`).
* **Origin URL Protection:** Direct requests to `maxecoenergytech.github.io/wcmma/` automatically return `HTTP 301` to `https://www.wcmaaindia.com/`, routing all incoming traffic through Cloudflare edge inspection.

---

## 2. SSL/TLS Encryption Hardening

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/) ➔ select **`wcmaaindia.com`**.
2. Navigate to **SSL/TLS** ➔ **Overview**:
   * Set encryption mode to **Full** (or **Full (strict)**).
   * ⚠️ *Never use "Flexible"* — Flexible transmits data between Cloudflare and GitHub unencrypted and can trigger redirect loops.
3. Navigate to **SSL/TLS** ➔ **Edge Certificates**:
   * **Always Use HTTPS:** Turn **ON**.
   * **Automatic HTTPS Rewrites:** Turn **ON**.
   * **Minimum TLS Version:** Select **TLS 1.2** (deprecates outdated, insecure SSL v3, TLS 1.0, and TLS 1.1).
   * **Opportunistic Encryption:** Turn **ON**.
   * **TLS 1.3:** Turn **ON**.

---

## 3. Web Application Firewall (WAF) Configuration

1. In the left menu, go to **Security** ➔ **WAF**.
2. **Managed Rules (Free Tier):**
   * Enable the **Cloudflare Free Managed Ruleset**.
   * This automatically filters common web attacks (SQL injection probes, cross-site scripting, path traversal attempts).
3. **Custom Security Rule: Block Obsolete HTTP Methods**:
   * Since this is a static informational website, only `GET`, `HEAD`, and `OPTIONS` are necessary.
   * Click **Create rule**:
     * **Name:** `Block Suspicious Request Methods`
     * **Expression:** `(http.request.method in {"POST" "PUT" "DELETE" "PATCH"} and not http.request.uri.path contains "/api/")`
     * **Action:** `Block` or `Managed Challenge`
     * *Note: Test before deploying if external webhook services are added in the future.*

---

## 4. Bot Fight Mode Evaluation

1. Go to **Security** ➔ **Bots**.
2. Look at **Bot Fight Mode**:
   * **What it does:** Challenges requests identified as malicious automated scraping bots, vulnerability scanners, and credential stuffers.
   * **Compatibility note:** Cloudflare automatically permits verified search engine crawlers (Googlebot, Bingbot, Applebot, Baidu).
   * **Recommendation:** Turn **ON** to prevent malicious bots from scraping student rosters or certificates.

---

## 5. Security Headers Deployed at the Edge

The repository includes a [`public/_headers`](../public/_headers) file that Cloudflare automatically serves on every page:

| Security Header | Setting | Purpose |
| :--- | :--- | :--- |
| `X-Frame-Options` | `SAMEORIGIN` | Blocks scammers from embedding the website in fake iframes (Anti-Clickjacking) |
| `X-Content-Type-Options` | `nosniff` | Prevents browsers from guessing file MIME types maliciously |
| `Permissions-Policy` | `payment=(), camera=(), microphone=(), geolocation=()` | Strict anti-fraud protocol: disables browser payment APIs |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Forces all browsers to use HTTPS for a minimum of 1 year |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Protects visitor referral paths |

---

## 6. What Cloudflare Does NOT Protect (Owner Reality Check)

* **Physical Security:** Cloudflare does not protect against someone calling your official phone and attempting social engineering.
* **External Accounts:** Cloudflare does not protect unauthorized changes to your HostingRaja registrar or GitHub account credentials.
* **Content Viewing:** While right-click is disabled on the page, any browser that renders HTML can technically receive public web data. Security relies on authentic verification registries and watermark notices.
