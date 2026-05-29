import AboutText from "@/sections/AboutText";
import AboutProcess from "@/sections/AboutProcess";
import AboutClients from "@/sections/AboutClients";
import AboutMembers from "@/sections/AboutMembers";
import AboutCareer from "@/sections/AboutCareer";

const AboutPage = () => {
  return (
    <>
      <div className="h-screen max-md:h-150 md:max-lg:h-180 flex items-center justify-center relative z-1 pointer-events-none">
        <header className="flex flex-col items-center gap-20">
          <h1 className="text-[120px]/[130px] max-sm:text-4xl sm:max-md:text-6xl md:max-lg:text-7xl lg:max-xl:text-8xl font-calSans text-brand-cream text-center">
            <span>Inspiration to</span>
            <br />
            <span>interpreting reality</span>
          </h1>
        </header>
      </div>
      <div className="h-screen max-sm:h-150 sm:max-lg:h-220">
        <AboutText />
      </div>
      <div className="h-screen max-sm:min-h-150 max-lg:h-auto">
        <AboutProcess />
      </div>
      <div className="h-[120vh] max-lg:h-auto">
        <AboutClients />
      </div>
      <div className="h-[205vh] max-xl:h-auto">
        <AboutMembers />
      </div>
      <div className="h-screen max-sm:min-h-150 sm:max-md:min-h-220 max-lg:h-auto">
        <AboutCareer />
      </div>
    </>
  );
};

export default AboutPage;
