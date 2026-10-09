import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wing Chun Martial Arts Association India",
  description:
    "Official privacy policy and data protection framework of Wing Chun Martial Arts Association India. Transparent contact handling and zero data selling.",
  alternates: {
    canonical: "https://www.wcmaaindia.com/privacy/",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
