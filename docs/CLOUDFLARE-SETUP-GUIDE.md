# WCMAA INDIA — CLOUDFLARE SETUP & DOMAIN CONFIGURATION GUIDE
**Official Domain:** `www.wcmaaindia.com`  
**Apex Domain:** `wcmaaindia.com`  
**Target Repository:** `maxecoenergytech/wcmma`  
**Hosting Target:** GitHub Pages / Cloudflare Pages  

---

## 1. Summary of Changes Already Completed in the Project

The codebase has already been prepared to work on `www.wcmaaindia.com`:

1. **Root Domain Routing**:
   - `next.config.mjs` and `src/utils/paths.ts` have been configured for the root domain (`/`), so all CSS, JS, images, forms, and pages load directly without `/wcmma` subpaths.
2. **CNAME File**:
   - Created `public/CNAME` containing `www.wcmaaindia.com`.
3. **SEO & Structured Metadata**:
   - Canonical URL, OpenGraph tags, Twitter cards, and Schema.org JSON-LD are set to `https://www.wcmaaindia.com/`.
4. **Sitemap & Robots**:
   - `public/sitemap.xml` and `public/robots.txt` now reference `https://www.wcmaaindia.com/`.

---

## 2. Option A: Cloudflare DNS + GitHub Pages (Recommended)

In this setup, your website files remain hosted on GitHub Pages for free, and Cloudflare provides **DNS management, fast global CDN caching, DDoS protection, and SSL/TLS encryption**.

### Step 1: Add Domain to Cloudflare
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Click **Add a Site** and enter `wcmaaindia.com`.
3. Select the **Free** plan.
4. Cloudflare will scan for existing DNS records. Click **Continue**.
5. Update your domain registrar nameservers (GoDaddy, Namecheap, Hostinger, BigRock, etc.) to the two Cloudflare nameservers provided (e.g., `ashley.ns.cloudflare.com` and `peyton.ns.cloudflare.com`).

---

### Step 2: Configure Cloudflare DNS Records
In your Cloudflare Dashboard, go to **DNS** -> **Records** and add the following:

#### Record 1: WWW Subdomain (Primary)
* **Type:** `CNAME`
* **Name:** `www`
* **Target:** `maxecoenergytech.github.io`
* **Proxy status:** **Proxied** (Orange Cloud)  
  *(Note: During initial GitHub Pages custom domain verification, you can temporarily set this to "DNS only / Grey Cloud" for 5 minutes if GitHub requires direct verification, then switch to Proxied).*
* **TTL:** `Auto`

#### Record 2: Apex / Root Domain (`wcmaaindia.com`)
You can use either of the following two standard methods:

**Method 1 (Cloudflare CNAME Flattening - Simplest):**
* **Type:** `CNAME`
* **Name:** `@` (or `wcmaaindia.com`)
* **Target:** `www.wcmaaindia.com`
* **Proxy status:** **Proxied** (Orange Cloud)

**Method 2 (GitHub's Official IPv4 Anycast Addresses):**
Create four `A` records for `@`:
1. `A` | `@` | `185.199.108.153` | Proxied
2. `A` | `@` | `185.199.109.153` | Proxied
3. `A` | `@` | `185.199.110.153` | Proxied
4. `A` | `@` | `185.199.111.153` | Proxied

---

### Step 3: Cloudflare SSL/TLS Settings (CRITICAL)

To prevent an infinite redirect loop (`ERR_TOO_MANY_REDIRECTS`), configure your Cloudflare SSL settings:

1. In the Cloudflare sidebar, click **SSL/TLS**.
2. Under **Overview**, set the encryption mode to:
   * **Full** (or **Full (strict)**).
   * ⚠️ **DO NOT USE "Flexible"** (Flexible causes redirect loops between Cloudflare and GitHub Pages).
3. Under **Edge Certificates**:
   * Turn **Always Use HTTPS** to **ON**.
   * Turn **Automatic HTTPS Rewrites** to **ON**.
   * Minimum TLS Version: **TLS 1.2**.

---

### Step 4: Apex to WWW Redirect Rule (So `wcmaaindia.com` redirects to `www.wcmaaindia.com`)

To ensure visitors typing `wcmaaindia.com` automatically land on `www.wcmaaindia.com`:

1. In Cloudflare, go to **Rules** -> **Redirect Rules**.
2. Click **Create rule**.
3. **Rule name:** `Redirect Apex to WWW`.
4. **When incoming requests match:**
   * Select **Custom filter expression**.
   * Field: `Hostname`
   * Operator: `equals`
   * Value: `wcmaaindia.com`
5. **Then redirect to:**
   * Type: **Dynamic**
   * Expression: `concat("https://www.wcmaaindia.com", http.request.uri.path)`
   * Status code: **301 (Permanent Redirect)**
   * Preserve query string: **Checked (Yes)**
6. Click **Deploy**.

---

### Step 5: Verify GitHub Pages Custom Domain

1. Open your repository: [https://github.com/maxecoenergytech/wcmma/settings/pages](https://github.com/maxecoenergytech/wcmma/settings/pages)
2. Under **Custom domain**, verify that `www.wcmaaindia.com` is entered.
3. Once Cloudflare DNS propagates (usually 2–15 minutes):
   * GitHub will display: `DNS check successful`.
   * Check the box: **Enforce HTTPS**.

---

## 3. Option B: Cloudflare Pages Direct Hosting (Alternative)

If you prefer hosting directly on Cloudflare Pages instead of GitHub Pages:

1. In Cloudflare Dashboard, navigate to **Workers & Pages** -> **Create Application** -> **Pages**.
2. Click **Connect to Git** and authenticate with your GitHub account.
3. Select repository: `maxecoenergytech/wcmma`.
4. Configure Build Settings:
   * **Framework preset:** `None` or `Next.js (Static Export)`
   * **Build command:** `npm run build`
   * **Build output directory:** `out`
   * **Root directory:** `/`
5. Click **Save and Deploy**.
6. Under your project settings in Cloudflare Pages:
   * Go to **Custom domains**.
   * Click **Set up a domain**.
   * Enter `www.wcmaaindia.com` and follow the 1-click DNS binding.
   * Add `wcmaaindia.com` as an apex domain (Cloudflare handles redirection automatically).

---

## 4. Verification Checklist

After DNS propagation:

| Check | Expected Result |
| :--- | :--- |
| `https://www.wcmaaindia.com/` | Loads homepage with 3D dummy, fixed navbar & full styling |
| `http://www.wcmaaindia.com/` | Automatically redirects to `https://` |
| `https://wcmaaindia.com/` | Automatically 301 redirects to `https://www.wcmaaindia.com/` |
| Internal Links (`/affiliation`, `/legal`) | Load without `/wcmma` prefix |
| Top fixed navigation | Stays pinned to the top on desktop |
| Credential verification modal | Functions smoothly without network errors |
| WhatsApp & Call links | Open directly |
