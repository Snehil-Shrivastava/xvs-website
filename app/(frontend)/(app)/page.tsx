// import RepeatingLambdaBg from "@/components/RepeatingLambdaBg";
import RepeatingLambdaBg from "@/components/RepeatingLambdaBg/RepeatingLambda";
import SplashScreenManager from "@/components/SplashScreenManager";
import HomePage from "@/page/HomePage";

export default function Home() {
  return (
    <SplashScreenManager>
      {/* <RepeatingLambdaBg /> */}
      <RepeatingLambdaBg />
      <HomePage />
    </SplashScreenManager>
  );
}
