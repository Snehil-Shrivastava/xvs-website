import Image from "next/image";
import spinngLambda from "@/public/gifs/spinning-lambda.webp";

const HomeHeading = () => {
  return (
    <div className="flex flex-col">
      <p className="text-center font-poppins font-extralight tracking-wide text-[37.5px] max-sm:text-sm sm:max-md:text-base md:max-lg:text-xl lg:max-xl:text-2xl xl:max-1440p:text-3xl">
        Creating Unforgettable Design
      </p>
      <h1 className="text-[20rem]/[20.5rem] max-sm:text-[4.5rem]/[4.5rem] sm:max-md:text-[7.5rem]/[7rem] md:max-lg:text-[8rem]/[7.5rem] lg:max-xl:text-[12rem]/[11.5rem] xl:max-1440p:text-[14rem]/[13rem] inline-block relative z-5 pointer-events-none font-calSans text-brand-orange-light max-sm:flex">
        <span>e</span>
        <span className="relative inline-block">
          <Image
            id="main-logo"
            src={spinngLambda}
            alt=""
            className="inline-block 2240p:w-67.5 max-sm:w-12 sm:max-md:w-20 md:max-lg:w-22 lg:max-xl:w-35 xl:max-1440p:w-40 2xl:-top-11 max-sm:-top-0.5 sm:max-md:-top-1.5 md:max-lg:-top-2 lg:max-xl:-top-3.5 xl:max-1440p:-top-4 2xl:-left-2.5 max-sm:-left-0.5 sm:max-md:-left-1 md:max-lg:-left-1.5 lg:max-xl:-left-4 xl:max-1440p:-left-4.5 relative"
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
