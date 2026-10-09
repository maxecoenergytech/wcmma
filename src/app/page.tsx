import React from "react";
import siteConfig from "@/config/siteMode.json";
import SimpleLayout from "@/components/simple/SimpleLayout";
import PremiumLayout from "@/components/premium/PremiumLayout";
import MaintenanceLayout from "@/components/MaintenanceLayout";

export default function Home() {
  if (siteConfig.siteMode === "maintenance") {
    return <MaintenanceLayout />;
  }

  return siteConfig.siteMode === "simple" ? <SimpleLayout /> : <PremiumLayout />;
}
