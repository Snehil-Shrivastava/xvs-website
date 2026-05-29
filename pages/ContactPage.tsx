import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Heart } from "lucide-react";
import PulsingDots from "@/components/PulsingDots";

const ContactPage = () => {
  return (
    <div
      className="flex flex-col items-center h-full justify-center relative max-lg:w-9/10 max-lg:mx-auto font-poppins"
      style={{
        backgroundImage: `url(/svg/contact-bg-map.svg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-background"
        style={{
          maskImage:
            "radial-gradient(1200px, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      />
      <PulsingDots />
      <div className="bg-white/20 w-20 h-20 rounded-full absolute -top-10 left-1/2 -translate-x-1/2 shadow-[0_0_250px_250px_rgba(255,255,255,0.2)] pointer-events-none z-15" />
      <div className="w-450 max-lg:w-full max-w-450 relative">
        <div className="absolute inset-0 bg-neutral-600/20 backdrop-blur-md contact-clip-container" />
        <div className="bg-background/20 backdrop-blur-md relative z-5 contact-clip-content flex flex-col md:max-lg:gap-5 justify-center md:max-lg:py-10">
          <SectionHeading
            className="max-sm:text-[3.7rem] sm:max-md:text-[5rem] md:max-lg:text-8xl"
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
