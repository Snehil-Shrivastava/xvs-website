"use client";

import ClientTestimonials from "@/components/ClientTestimonials";
import LogoMarquee from "@/components/LogoMarquee";
import SectionHeading from "@/components/SectionHeading";
import { HomeClientLogos } from "@/lib/data";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shuffleArray(array: any) {
  const newArr = [...array];

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

const AboutClients = () => {
  const clientLogos = HomeClientLogos;
  const [randomizedLogos, setRandomizedLogos] = useState(clientLogos);

  useEffect(() => {
    const trulyRandomLogos = shuffleArray(clientLogos);
    setRandomizedLogos(trulyRandomLogos);
  }, [clientLogos]);

  return (
    <div
      id="client-testimonial"
      className="flex flex-col items-center gap-10 max-sm:w-9/10 max-sm:mx-auto max-sm:pb-40"
    >
      <SectionHeading
        headingText="Clients"
        buttonText="Reviews"
        buttonIcon={
          <Heart stroke="none" fill="#f79839" className="scale-80 max-sm:w-4" />
        }
        desc="Hear from visionaries and experts"
      />
      <div className="max-w-450 max-sm:max-w-full mx-auto bg-[#d9d3c7] content-clip-both">
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
          <LogoMarquee logos={clientLogos} />
          <LogoMarquee logos={randomizedLogos} />
        </div>
        <div className="text-black">
          <ClientTestimonials />
        </div>
      </div>
    </div>
  );
};

export default AboutClients;
