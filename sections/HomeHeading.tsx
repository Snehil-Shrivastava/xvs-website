import Image from "next/image";
import spinngLambda from "@/public/gifs/spinning-lambda.webp";

const HomeHeading = () => {
  return (
    <h1 className="text-[20rem]/[20.5rem] inline-block relative z-5 pointer-events-none font-calSans text-brand-orange-light">
      <span>e</span>
      <span className="relative">
        <Image
          src={spinngLambda}
          alt=""
          className="inline-block 2240p:w-67.5 2xl:-top-11 2xl:-left-2.5 relative"
          priority={true}
        />
      </span>
      <span>perience</span>
    </h1>
  );
};

export default HomeHeading;
