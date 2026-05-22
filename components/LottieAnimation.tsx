"use client";

import Lottie from "lottie-react";

const LottieAnimation = ({
  animation,
  className,
}: {
  animation: unknown;
  className?: string;
}) => {
  return (
    <Lottie
      animationData={animation}
      loop={true}
      autoplay={true}
      className={className && className}
    />
  );
};

export default LottieAnimation;
