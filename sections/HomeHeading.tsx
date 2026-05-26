import Image from "next/image";
import spinngLambda from "@/public/gifs/spinning-lambda.webp";

const HomeHeading = () => {
  return (
    <div className="flex flex-col">
      <p className="text-center font-poppins font-extralight tracking-wide text-[37.5px] max-sm:text-sm sm:max-md:text-base">
        Creating Unforgettable Design
      </p>
      <h1 className="text-[20rem]/[20.5rem] max-sm:text-[4.5rem]/[4.5rem] sm:max-md:text-[7.5rem]/[7rem] inline-block relative z-5 pointer-events-none font-calSans text-brand-orange-light max-sm:flex">
        <span>e</span>
        <span className="relative inline-block">
          <Image
            id="main-logo"
            src={spinngLambda}
            alt=""
            className="inline-block 2240p:w-67.5 max-sm:w-12 sm:max-md:w-20 2xl:-top-11 max-sm:-top-0.5 sm:max-md:-top-1.5 2xl:-left-2.5 max-sm:-left-0.5 sm:max-md:-left-1 relative"
            priority={true}
            unoptimized
          />
        </span>
        <span>perience</span>
      </h1>
    </div>
  );
};

export default HomeHeading;
