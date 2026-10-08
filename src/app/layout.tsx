import type { Metadata, Viewport } from "next";
import { getAssetPath } from "@/utils/paths";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060b13",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maxecoenergytech.github.io/wcmma/"),
  title: "Wing Chun Martial Arts Association India | Traditional Wing Chun Training",
  description:
    "Wing Chun Martial Arts Association India – promoting traditional Wing Chun training, academy affiliation, instructor development, grading and martial-arts programs across India.",
  alternates: {
    canonical: "https://maxecoenergytech.github.io/wcmma/",
  },
  openGraph: {
    title: "Wing Chun Martial Arts Association India | Traditional Wing Chun Training",
    description:
      "Promoting traditional Wing Chun training, academy affiliation, instructor development, grading and martial-arts programs across India. 35 Years of Heritage (1991–2026).",
    url: "https://maxecoenergytech.github.io/wcmma/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/event_35th_foundation.webp",
        width: 1200,
        height: 630,
        alt: "Wing Chun Martial Arts Association India - 35th Foundation Anniversary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wing Chun Martial Arts Association India",
    description:
      "Promoting traditional Wing Chun training, academy affiliation, instructor development, grading and martial-arts programs across India.",
    images: ["/assets/event_35th_foundation.webp"],
  },
  icons: {
    icon: getAssetPath("/assets/wcmaai_logo_sm.webp"),
    apple: getAssetPath("/assets/wcmaai_logo_sm.webp"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsOrganization",
        "@id": "https://maxecoenergytech.github.io/wcmma/#organization",
        "name": "Wing Chun Martial Arts Association India",
        "alternateName": "WCMAA India",
        "foundingDate": "1991",
        "url": "https://maxecoenergytech.github.io/wcmma/",
        "logo": "https://maxecoenergytech.github.io/wcmma/assets/wcmaai_logo.webp",
        "description": "National federation governing traditional Wing Chun Kung Fu training, academy affiliations, belt grading, and instructor accreditation in India.",
        "identifier": "KAM/240/W/08 of 2005-2006",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bathoupuri, ISBT Lokhra",
          "addressLocality": "Guwahati",
          "addressRegion": "Assam",
          "postalCode": "781035",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-78969-62207",
          "contactType": "General Secretariat",
          "email": "duttasankar88@gmail.com",
          "availableLanguage": ["English", "Hindi", "Assamese"]
        },
        "sameAs": [
          "https://www.facebook.com/wingchunkungfuindiaofficial",
          "https://www.twksf.org"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://maxecoenergytech.github.io/wcmma/#founder",
        "name": "Sifu Amar Singh Deori",
        "jobTitle": "Founder President & Chief Instructor",
        "worksFor": { "@id": "https://maxecoenergytech.github.io/wcmma/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://maxecoenergytech.github.io/wcmma/#general-secretary",
        "name": "Sifu Sankar Dutta",
        "jobTitle": "General Secretary",
        "worksFor": { "@id": "https://maxecoenergytech.github.io/wcmma/#organization" }
      },
      {
        "@type": "Event",
        "@id": "https://maxecoenergytech.github.io/wcmma/#35th-seminar",
        "name": "35th Foundation Day Celebration & National Kung Fu Seminar",
        "startDate": "2026-09-06T09:00:00+05:30",
        "endDate": "2026-09-06T18:00:00+05:30",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Bamunimaidam Bihu Mancha Auditorium",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bamunimaidam",
            "addressLocality": "Guwahati",
            "addressRegion": "Assam",
            "postalCode": "781021",
            "addressCountry": "IN"
          }
        },
        "organizer": { "@id": "https://maxecoenergytech.github.io/wcmma/#organization" },
        "description": "National Wing Chun milestone seminar featuring masterclasses, grading examinations, and commemorative 35-year awards."
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
