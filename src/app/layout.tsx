import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wing Chun Martial Arts Association India | Official Federation Portal",
  description:
    "Official website of Wing Chun Martial Arts Association India (WCMAAI) - Regn No. KAM/240/W/08. Affiliated with WCMAA Singapore & The World Kuoshu Federation (TWKSF). Strength Through Discipline, Honor Through Tradition.",
  icons: {
    icon: "/assets/wcmaai_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
