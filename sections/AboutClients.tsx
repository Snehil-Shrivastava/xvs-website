import ClientTestimonials from "@/components/ClientTestimonials";
import LogoMarquee from "@/components/LogoMarquee";
import SectionHeading from "@/components/SectionHeading";
import { HomeClientLogos } from "@/lib/data";
import { Heart } from "lucide-react";
import Image from "next/image";

const AboutClients = () => {
  const clientLogos = HomeClientLogos;

  const midpoint = Math.ceil(clientLogos.length / 2);
  const row1Logos = clientLogos.slice(0, midpoint);
  const row2Logos = clientLogos.slice(midpoint);

  return (
    <div
      id="client-testimonial"
      className="flex flex-col items-center gap-10 max-md:w-9/10 max-md:mx-auto max-md:pb-40"
    >
      <SectionHeading
        headingText="Clients"
        buttonText="Reviews"
        buttonIcon={
          <Heart
            stroke="none"
            fill="#f79839"
            className="scale-80 max-sm:w-4 sm:max-md:w-5"
          />
        }
        desc="Hear from visionaries and experts"
      />
      <div className="max-w-450 max-md:max-w-full mx-auto bg-[#d9d3c7] content-clip-both">
        <div className="grid grid-cols-5 border-b border-b-black/10 py-15 select-none gap-y-12 gap-x-5.5 max-sm:gap-0 max-md:hidden">
          {clientLogos.map((clientLogo, index) => (
            <div
              key={index}
              className="text-center client-logo flex justify-center items-center h-14 grayscale-100 hover:grayscale-0 min-w-25"
            >
              <Image
                src={clientLogo.src}
                alt={clientLogo.src}
                width={160}
                height={80}
                className={`${clientLogo.imgClass}`}
              />
            </div>
          ))}
        </div>
        <div className="border-b border-b-black/10 py-8">
          <LogoMarquee logos={row1Logos} />
          <LogoMarquee logos={row2Logos} />
        </div>
        <div className="text-black">
          <ClientTestimonials />
        </div>
      </div>
    </div>
  );
};

export default AboutClients;
