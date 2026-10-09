import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Wing Chun Martial Arts Association India",
  description:
    "Official terms and conditions of website use, dojo discipline standards, and training participation guidelines for WCMAA India.",
  alternates: {
    canonical: "https://www.wcmaaindia.com/terms/",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
