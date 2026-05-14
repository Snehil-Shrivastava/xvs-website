"use client";

import Lottie from "lottie-react";
import lottieAnimation from "@/public/lottie-animation/data.json";
import RepeatingLambdaBg from "@/components/RepeatingLambdaBg";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    // <div>
    //   <div>
    //     <Lottie
    //       animationData={lottieAnimation}
    //       loop={true}
    //       autoplay={true}
    //       className="w-37.5 sm:max-md:w-30"
    //     />
    //   </div>
    //   <div>
    //     <iframe
    //       src="/lottie-animation/data.html"
    //       width="100%"
    //       height="500px"
    //       style={{ border: "none" }}
    //     />
    //   </div>
    // </div>

    <>
      <RepeatingLambdaBg />
      <HomePage />
    </>
  );
}
