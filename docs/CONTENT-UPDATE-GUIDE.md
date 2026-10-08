# WCMAA India — Content Update Guide

> **Step-by-Step Instructions for Developers & Content Managers**  
> This guide shows exactly which file, section, and line to edit for every common update.

---

## Table of Contents
1. [Updating Phone Numbers](#1-updating-phone-numbers)
2. [Updating Official Email](#2-updating-official-email)
3. [Updating Addresses & Headquarter Locations](#3-updating-addresses--headquarter-locations)
4. [Adding or Updating a Dojo (Branch Locator)](#4-adding-or-updating-a-dojo-branch-locator)
5. [Adding or Updating Member Verification Records](#5-adding-or-updating-member-verification-records)
6. [Updating Executive Leadership Profiles](#6-updating-executive-leadership-profiles)
7. [Updating Events & Seminars (Completed vs Upcoming)](#7-updating-events--seminars-completed-vs-upcoming)
8. [Adding or Replacing Photos in the Gallery](#8-adding-or-replacing-photos-in-the-gallery)
9. [Updating International Affiliations](#9-updating-international-affiliations)
10. [Updating Footer, Registration Number & Copyright Year](#10-updating-footer-registration-number--copyright-year)

---

### 1. Updating Phone Numbers
* **File:** `src/data/associationData.ts`
* **Section:** `ASSOCIATION_INFO.contacts`
* **What to change:** The `phones` array and `primaryPhone` field.
* **Example:**
  ```typescript
  // In src/data/associationData.ts:
  contacts: {
    generalSecretary: "Sifu Sankar Dutta",
    phones: ["+91 78969 62207", "+91 90852 96178"], // Add or change numbers here
    primaryPhone: "+91 78969 62207",
    // ...
  }
  ```
  *Note:* All components, the floating WhatsApp desk, and the mobile action dock automatically read these phone numbers.

---

### 2. Updating Official Email
* **File:** `src/data/associationData.ts`
* **Section:** `ASSOCIATION_INFO.contacts.email`
* **Example:**
  ```typescript
  // In src/data/associationData.ts:
  email: "duttasankar88@gmail.com", // Change to new email
  ```

---

### 3. Updating Addresses & Headquarter Locations
* **File:** `src/data/associationData.ts`
* **Section:** `ASSOCIATION_INFO.contacts`
* **Example:**
  ```typescript
  // In src/data/associationData.ts:
  hqAddress: "Bathoupuri, ISBT Lokhra, Guwahati - 781035, Assam, India",
  trainingGround: "North East Academy Playground, Bhetapara, Beltola, Guwahati, Assam",
  residenceOffice: "H.No. 9, Bhaskar Nagar, Bamunimaidam, Guwahati - 781021, Assam",
  ```

---

### 4. Adding or Updating a Dojo (Branch Locator)
* **File:** `src/data/associationData.ts`
* **Section:** `BRANCHES` array
* **Fields required:**
  * `id`: Unique lowercase ID (e.g. `mumbai-wingchun`)
  * `name`: Full academy name
  * `city`: City name
  * `state`: State name
  * `address`: Specific location / address
  * `chiefInstructor`: Name of head instructor
  * `instructorGrade`: Instructor qualification / title
  * `phone`: Instructor contact phone
  * `timing`: Class hours
  * `trainingDays`: Days classes are held
  * `activeStatus`: `"Active"` or `"Seasonal"`
  * `affiliationStatus`: `"Officially Listed WCMAA India Training Centre"`
* **Example:**
  ```typescript
  // In src/data/associationData.ts:
  export const BRANCHES: BranchRecord[] = [
    // Existing dojos...
    {
      id: "pune-dojo",
      name: "WCMAA Pune Training Centre",
      city: "Pune",
      state: "Maharashtra",
      address: "Kothrud Sports Complex, Pune - 411038",
      chiefInstructor: "Sifu Rohan Deshmukh",
      instructorGrade: "Senior Certified Instructor",
      phone: "+91 98230 00000",
      timing: "6:30 AM - 8:30 AM & 5:00 PM - 7:00 PM",
      trainingDays: "Tue, Thu, Sat",
      activeStatus: "Active",
      affiliationStatus: "Officially Listed WCMAA India Training Centre",
    },
  ];
  ```

---

### 5. Adding or Updating Member Verification Records
* **File:** `src/data/associationData.ts`
* **Section:** `VERIFIED_MEMBERS` array
* **Privacy Guideline:** Do NOT publish full dates of birth or blood groups. Use initials or first names for member privacy.
* **Fields required:**
  * `membershipNo`: Certificate or membership number (e.g. `"2099"`)
  * `name`: Name or initial (e.g. `"Rahul S."`)
  * `rank`: Rank conferred (e.g. `"Black Belt I"`)
  * `issueYear`: Year issued (e.g. `"2026"`)
  * `validUpto`: Expiration year (e.g. `"2031"`)
  * `branch`: Training academy
  * `status`: `"VALID"`, `"EXPIRED"`, or `"SUSPENDED"`
  * `instructor`: Examining master
  * `isDemo`: `false` for genuine members, `true` for sample records
* **Example:**
  ```typescript
  // In src/data/associationData.ts:
  export const VERIFIED_MEMBERS: MemberRecord[] = [
    {
      membershipNo: "2099",
      name: "Rahul S.",
      rank: "Black Belt I",
      issueYear: "2026",
      validUpto: "2031",
      branch: "Guwahati Central (HQ)",
      status: "VALID",
      instructor: "Amar Singh Deori (Chief Instructor)",
      isDemo: false,
    },
  ];
  ```

---

### 6. Updating Executive Leadership Profiles
* **File:** `src/data/associationData.ts`
* **Section:** `ASSOCIATION_INFO.leadership`
* **What to change:** Bio, honorary titles, and photo paths.
* **Example:**
  ```typescript
  // In src/data/associationData.ts:
  leadership: [
    {
      name: "Sifu Amar Singh Deori",
      role: "Founder President & Chief Instructor",
      affiliation: "WCMAA, India",
      experience: "Practicing and teaching Wing Chun in Northeast India since 1991",
      bio: "Pioneer of traditional Wing Chun Kung Fu education in Northeast India...",
      image: getAssetPath("/assets/grandmaster_portrait.webp"),
    },
  ]
  ```

---

### 7. Updating Events & Seminars (Completed vs Upcoming)
* **File 1:** `src/data/associationData.ts` (`COMPLETED_EVENT` and `UPCOMING_EVENT`)
* **File 2:** `src/components/FoundationEvent.tsx`
* **Important Rule:** When an event is finished, never leave active payment or registration buttons on the website.
* **How to update the historical table:**
  In `src/components/FoundationEvent.tsx`, find the `<tbody>` inside the "Events & Activities Historical Archive" section and add a new `<tr>` row.

---

### 8. Adding or Replacing Photos in the Gallery
1. **Save your new photo** in the `public/assets/` directory (e.g. `public/assets/annual_grading_2026.webp`).
2. **Open `src/components/GallerySection.tsx`**.
3. Add a new item to the `galleryItems` array:
   ```typescript
   {
     src: getAssetPath("/assets/annual_grading_2026.webp"),
     title: "Annual Belt Grading Session",
     category: "Academy Camps", // Options: "Training & Chi Sau", "Academy Camps", "Leadership", "Milestones"
     aspect: "aspect-[3/2]",
     description: "Instructors evaluating senior sash candidates on centerline mechanics and form execution.",
   },
   ```

---

### 9. Updating International Affiliations
* **File:** `src/data/associationData.ts`
* **Section:** `ASSOCIATION_INFO.affiliations`
* **Guideline:** Strictly specify the exact relationship type: `"International Charter"`, `"Technical Association"`, `"National Association"`, or `"State Affiliate"`.
* **Example:**
  ```typescript
  {
    name: "The World Kuoshu Federation (TWKSF)",
    relationship: "Technical Association",
    badge: "Global Technical Association",
    website: "https://www.twksf.org",
    purpose: "International association dedicated to traditional Chinese martial arts and refereeing standards.",
  }
  ```

---

### 10. Updating Footer, Registration Number & Copyright Year
* **File 1 (Data):** `src/data/associationData.ts` (`registrationNo: "KAM/240/W/08 of 2005–2006"`)
* **File 2 (Component):** `src/components/Footer.tsx`
* **What to change:**
  * Copyright notice: `© 1991–2026 Wing Chun Martial Arts Association India. All Rights Reserved.`
  * Last updated notice: `Last Updated: October 2026`
