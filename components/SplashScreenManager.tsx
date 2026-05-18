"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function SplashScreenManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown === "true") {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("splashShown", "true");
  };

  return (
    <>
      {children}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
    </>
  );
}
