import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Notice & IP Policy | Wing Chun Martial Arts Association India",
  description:
    "Official copyright statement and intellectual property guidelines of Wing Chun Martial Arts Association India. Protecting curriculum, training media, and heritage archives.",
  alternates: {
    canonical: "https://www.wcmaaindia.com/copyright/",
  },
};

export default function CopyrightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
