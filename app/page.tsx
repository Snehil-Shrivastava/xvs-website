"use client";

import RepeatingLambdaBg from "@/components/RepeatingLambdaBg";
import SplashScreenManager from "@/components/SplashScreenManager";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <SplashScreenManager>
      <RepeatingLambdaBg />
      <HomePage />
    </SplashScreenManager>
  );
}
