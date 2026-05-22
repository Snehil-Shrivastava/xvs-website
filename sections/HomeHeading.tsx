import Image from "next/image";
import spinngLambda from "@/public/gifs/spinning-lambda.webp";

const HomeHeading = () => {
  return (
    <div className="flex flex-col">
      <p className="text-center font-extralight tracking-wide text-[37.5px]">
        Creating Unforgettable Design
      </p>
      <h1 className="text-[20rem]/[20.5rem] inline-block relative z-5 pointer-events-none font-calSans text-brand-orange-light">
        <span>e</span>
        <span className="relative inline-block">
          <Image
            id="main-logo"
            src={spinngLambda}
            alt=""
            className="inline-block 2240p:w-67.5 2xl:-top-11 2xl:-left-2.5 relative"
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
