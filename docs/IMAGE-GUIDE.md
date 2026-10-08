# WCMAA India — Image & Media Management Guide

> **Guidelines for Adding, Optimizing, and Managing Photographs**  
> Fast page speeds depend on well-compressed, properly formatted images.

---

## 1. Where Are Images Stored?

All website photographs, logos, emblems, and certificate graphics are stored in:
```text
public/assets/
```

When referencing an image in the code, use the path helper:
```typescript
import { getAssetPath } from "@/utils/paths";

<img src={getAssetPath("/assets/your_image_name.webp")} alt="Descriptive text..." />
```

---

## 2. Recommended Formats & Sizes

| Image Type | Recommended Format | Recommended Dimensions | Max File Size | Example File Name |
| :--- | :--- | :--- | :--- | :--- |
| **Hero & Banner Images** | `.webp` | 1200 × 630 px | < 120 KB | `event_35th_foundation.webp` |
| **Action & Training Photos** | `.webp` | 960 × 640 px | < 90 KB | `sifu_chisau_practice.webp` |
| **Group / Camp Photos** | `.webp` | 960 × 640 px | < 100 KB | `association_camp_group.webp` |
| **Instructor Portraits** | `.webp` | 600 × 750 px | < 70 KB | `grandmaster_portrait.webp` |
| **Small Avatars** | `.webp` | 120 × 120 px | < 10 KB | `sifu_sankar_dutta_avatar.webp` |
| **Logos & Emblems** | `.webp` or `.png` | 240 × 240 px | < 25 KB | `wcmaai_logo_sm.webp` |

---

## 3. Recommended Tools for Optimization

Never upload raw, uncompressed 10MB photos straight from a DSLR camera or smartphone. Always compress them first:
* **Free Online Converter:** [Squoosh.app](https://squoosh.app) (by Google) or [TinyPNG](https://tinypng.com).
* Choose **WebP format** with **Quality 75%–82%**.
* Resize image width to no larger than 1200px.

---

## 4. File Naming Rules

Always use lowercase letters with hyphens or underscores. Never use spaces or special characters:
* **Good:** `sifu-amar-singh-chisau-practice.webp`
* **Good:** `wcmaa-guwahati-annual-camp-2026.webp`
* **Avoid:** `IMG_20260906_142352_final (1).jpg`

---

## 5. Accessibility & Meaningful ALT Text

Every `<img>` tag must include descriptive `alt` text explaining what is happening in the photo:
* **Good:** `alt="Sifu Amar Singh Deori and Sifu Sankar Dutta practicing Chi Sau sensitivity drills"`
* **Good:** `alt="Group photograph of instructors and students at the 35th Foundation Seminar in Guwahati"`
* **Bad:** `alt="photo"` or `alt="image1"`
