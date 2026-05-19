import PlanetHorizon from "@/components/PlanetHorizon";

const WorkPageHeading = () => {
  return (
    <>
      <h1 className="font-semibold text-[180px] relative top-[25%] text-center select-none z-5">
        {"SHOWCASE".split("").map((letter, index) => (
          <span
            key={index}
            className={`${
              index === 0
                ? ""
                : "max-sm:ml-3 sm:max-md:ml-4.5 md:max-lg:ml-7 lg:max-xl:ml-10.5 xl:max-1440p:ml-13 1440p:max-2xl:ml-13 2xl:ml-15.5 2240p:ml-18"
            }`}
          >
            {letter}
          </span>
        ))}
      </h1>
      <PlanetHorizon />
    </>
  );
};

export default WorkPageHeading;
