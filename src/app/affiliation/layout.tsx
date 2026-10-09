import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dojo & Academy Affiliation | Wing Chun Martial Arts Association India",
  description:
    "Affiliate your martial arts academy with WCMAA India. Standardized Wing Chun Kung Fu curriculum, instructor development, national grading recognition, and international lineage charter.",
  keywords: [
    "Wing Chun affiliation India",
    "martial arts academy affiliation Assam",
    "Wing Chun instructor certification India",
    "kung fu club affiliation Guwahati",
    "WCMAA India membership",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/affiliation/",
  },
  openGraph: {
    title: "Dojo & Academy Affiliation | Wing Chun Martial Arts Association India",
    description:
      "Affiliate your martial arts academy with WCMAA India. Standardized Wing Chun curriculum, instructor development, and national grading recognition.",
    url: "https://www.wcmaaindia.com/affiliation/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function AffiliationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
