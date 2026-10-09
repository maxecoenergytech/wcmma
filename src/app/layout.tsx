import type { Metadata, Viewport } from "next";
import { getAssetPath } from "@/utils/paths";
import SecurityProtection from "@/components/SecurityProtection";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060b13",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wcmaaindia.com/"),
  title: "Wing Chun Martial Arts Association India | Traditional Wing Chun Training",
  description:
    "Wing Chun Martial Arts Association India promotes structured traditional Wing Chun training, instructor development, academy affiliation, grading, seminars and martial arts education across India.",
  keywords: [
    "Wing Chun India",
    "Wing Chun Kung Fu India",
    "Wing Chun training",
    "Wing Chun academy",
    "Wing Chun classes",
    "Wing Chun instructor",
    "Wing Chun martial arts",
    "Wing Chun Assam",
    "Wing Chun Guwahati",
    "Wing Chun training India",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/",
  },
  openGraph: {
    title: "Wing Chun Martial Arts Association India | Traditional Wing Chun Training",
    description:
      "Wing Chun Martial Arts Association India promotes structured traditional Wing Chun training, instructor development, academy affiliation, grading, seminars and martial arts education across India. 35 Years of Heritage (1991–2026).",
    url: "https://www.wcmaaindia.com/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/event_35th_foundation.webp",
        width: 1200,
        height: 630,
        alt: "Wing Chun Martial Arts Association India - 35 Years of Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wing Chun Martial Arts Association India | Traditional Wing Chun Training",
    description:
      "Wing Chun Martial Arts Association India promotes structured traditional Wing Chun training, instructor development, academy affiliation, grading, seminars and martial arts education across India.",
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
        "@id": "https://www.wcmaaindia.com/#organization",
        "name": "Wing Chun Martial Arts Association India",
        "alternateName": "WCMAA India",
        "foundingDate": "1991",
        "url": "https://www.wcmaaindia.com/",
        "logo": "https://www.wcmaaindia.com/assets/wcmaai_logo.webp",
        "description":
          "National martial arts association dedicated to the promotion and structured teaching of traditional Wing Chun Kung Fu in India.",
        "identifier": "KAM/240/W/08 of 2005–2006",
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
        "@type": "WebSite",
        "@id": "https://www.wcmaaindia.com/#website",
        "url": "https://www.wcmaaindia.com/",
        "name": "Wing Chun Martial Arts Association India",
        "publisher": { "@id": "https://www.wcmaaindia.com/#organization" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "SportsActivityLocation",
        "@id": "https://www.wcmaaindia.com/#training-ground",
        "name": "North East Academy Wing Chun Training Ground",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "North East Academy Playground, Bhetapara, Beltola",
          "addressLocality": "Guwahati",
          "addressRegion": "Assam",
          "postalCode": "781028",
          "addressCountry": "IN"
        },
        "telephone": "+91-78969-62207"
      },
      {
        "@type": "Person",
        "@id": "https://www.wcmaaindia.com/#founder",
        "name": "Sifu Sankar Dutta",
        "jobTitle": "Founder & General Secretary",
        "worksFor": { "@id": "https://www.wcmaaindia.com/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://www.wcmaaindia.com/#chief-instructor",
        "name": "Sifu Amar Singh Deori",
        "jobTitle": "Chief Instructor",
        "worksFor": { "@id": "https://www.wcmaaindia.com/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.wcmaaindia.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.wcmaaindia.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Affiliation",
            "item": "https://www.wcmaaindia.com/affiliation/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Legal & Governance",
            "item": "https://www.wcmaaindia.com/legal/"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        {/* Anti-Scraping, Anti-Inspection & Right-Click Security Guard */}
        <SecurityProtection />
        {children}
      </body>
    </html>
  );
}
