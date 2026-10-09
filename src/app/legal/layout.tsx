import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Legal Registry & Governance | Wing Chun Martial Arts Association India",
  description:
    "Official legal registry, constitution, society registration details, and institutional governance guidelines of Wing Chun Martial Arts Association India (Regn. No. KAM/240/W/08).",
  alternates: {
    canonical: "https://www.wcmaaindia.com/legal/",
  },
  openGraph: {
    title: "Official Legal Registry & Governance | WCMAA India",
    description:
      "Official legal registry, constitution, and governance charter of Wing Chun Martial Arts Association India.",
    url: "https://www.wcmaaindia.com/legal/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
