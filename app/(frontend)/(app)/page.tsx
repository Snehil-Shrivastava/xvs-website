import RepeatingLambdaBg from "@/components/RepeatingLambdaBg";
import SplashScreenManager from "@/components/SplashScreenManager";
import HomePage from "@/page/HomePage";

export default function Home() {
  return (
    <SplashScreenManager>
      <RepeatingLambdaBg />
      <HomePage />
    </SplashScreenManager>
  );
}
