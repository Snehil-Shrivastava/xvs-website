import Image from "next/image";
import aboutxVSlogo from "@/public/svg/about-xvs-logo.svg";
import AboutText from "@/sections/AboutText";
import AboutProcess from "@/sections/AboutProcess";
import AboutClients from "@/sections/AboutClients";
import AboutMembers from "@/sections/AboutMembers";
import AboutCareer from "@/sections/AboutCareer";

const AboutPage = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center relative z-1 pointer-events-none">
        <header className="flex flex-col items-center gap-20">
          <h1 className="text-[120px]/[130px] font-calSans text-brand-cream text-center">
            <span>Inspiration to</span>
            <br />
            <span>interpreting reality</span>
          </h1>
          {/* <span className="relative">
            <Image src={bigLamda} alt="" width={420} className="relative z-1" />
            <Image
              src={smallLamda}
              alt=""
              width={220}
              className="absolute left-12 top-20 z-0"
            />
          </span> */}
        </header>
      </div>
      <div className="h-screen">
        <AboutText />
      </div>
      <div className="h-screen">
        <AboutProcess />
      </div>
      <div className="h-[120vh]">
        <AboutClients />
      </div>
      <div className="h-[205vh]">
        <AboutMembers />
      </div>
      <div className="h-screen">
        <AboutCareer />
      </div>
    </>
  );
};

export default AboutPage;
