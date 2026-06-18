import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Heart } from "lucide-react";
import PulsingDots from "@/components/PulsingDots";

const ContactPage = () => {
  return (
    <div
      className="flex flex-col items-center w-full h-full justify-center relative font-poppins"
      style={{
        backgroundImage: `url(/svg/contact-bg-map.svg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div
        className="absolute inset-0 z-2 pointer-events-none bg-background"
        style={{
          maskImage:
            "radial-gradient(1200px, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      />
      <PulsingDots />
      <div className="bg-white/20 w-20 h-20 rounded-full absolute -top-10 left-1/2 -translate-x-1/2 shadow-[0_0_250px_250px_rgba(255,255,255,0.2)] pointer-events-none z-15" />
      <div className="w-9/10 1920p:w-4/5 max-lg:mx-auto max-w-450 relative">
        <div className="absolute inset-0 bg-neutral-50/70 backdrop-blur-xs contact-clip-container" />
        <div className="bg-background/10 backdrop-blur-md relative z-5 contact-clip-content flex flex-col md:max-lg:gap-5 lg:max-xl:gap-10 2xl:gap-10 justify-center md:max-xl:py-10 m-px 2xl:pt-10 1920p:pt-12">
          <SectionHeading
            className="max-sm:text-[3.7rem] sm:max-md:text-[5rem] md:max-lg:text-8xl lg:max-xl:text-[140px]/[160px] xl:max-1440p:text-[150px] 1440p:max-2xl:text-[170px] 2xl:text-[12rem]/[13rem] 1920p:text-[14rem]/[15rem]"
            headingText="connect"
            buttonText="contact"
            buttonIcon={
              <Heart
                stroke="none"
                fill="#f79839"
                className="scale-80 max-sm:w-4 sm:max-lg:w-5"
              />
            }
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
