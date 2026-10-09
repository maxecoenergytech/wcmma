import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Disclaimer | Wing Chun Martial Arts Association India",
  description:
    "Official training, physical fitness, and health disclaimer of Wing Chun Martial Arts Association India. Safety principles and certified instructor supervision.",
  alternates: {
    canonical: "https://www.wcmaaindia.com/disclaimer/",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
