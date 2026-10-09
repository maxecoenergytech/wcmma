import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School & College Martial Arts Workshops | WCMAA India",
  description:
    "Institutional martial arts demonstrations, youth self-defense workshops, and sports physical education collaborations for schools and colleges across Assam and Northeast India.",
  keywords: [
    "school martial arts workshop Assam",
    "self defense seminar college Guwahati",
    "institutional sports partnership Assam",
    "anti bullying school program Guwahati",
    "WCMAA India school demonstrations",
  ],
  alternates: {
    canonical: "https://www.wcmaaindia.com/partnerships/schools-colleges/",
  },
  openGraph: {
    title: "School & College Martial Arts Workshops | WCMAA India",
    description:
      "Structured self-defense demonstrations and martial arts education workshops for educational institutions across Assam.",
    url: "https://www.wcmaaindia.com/partnerships/schools-colleges/",
    siteName: "Wing Chun Martial Arts Association India",
    locale: "en_IN",
    type: "website",
  },
};

export default function InstitutionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
