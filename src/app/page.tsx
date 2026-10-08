import React from "react";
import siteConfig from "@/config/siteMode.json";
import SimpleLayout from "@/components/simple/SimpleLayout";
import PremiumLayout from "@/components/premium/PremiumLayout";

export default function Home() {
  const isSimpleMode = siteConfig.siteMode === "simple";

  return isSimpleMode ? <SimpleLayout /> : <PremiumLayout />;
}
