// import RepeatingLambdaBg from "@/components/RepeatingLambdaBg";
import RepeatingLambdaBg from "@/components/RepeatingLambdaBg/RepeatingLambda";
import SchemaMarkup from "@/components/SchemaMarkup";
import SplashScreenManager from "@/components/SplashScreenManager";
import HomePage from "@/page/HomePage";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "xVS Creations",
    url: "https://xvscreations.com",
    logo: "https://xvscreations.com/svg/xvs-logo-svg.svg",
    description:
      "Design agency crafting unforgettable branding, UI/UX, motion graphics & web experiences.",
    video: {
      "@type": "VideoObject",
      "@id": "",
      name: "xVS Creations Showreel",
      description:
        "xVS Creations is a design studio that helps with branding, marketing, and advertising. This video contains a glimpse of some of the work done in the past in graphic design, motion graphics, websites and apps, 3D modelling, and video editing.",
      thumbnailUrl: "https://xvscreations.com/images/Showreel-Thumbnail.webp",
      uploadDate: "2026-06-23T12:00:00+00:00",
      duration: "PT1M7S",
      contentUrl: "https://xvscreations.com/videos/showreel-final-for-web.mp4",
    },
    sameAs: [
      "https://www.instagram.com/xvscreations",
      "https://www.linkedin.com/company/xvs-creations",
      "https://www.behance.net/xVSCreations",
      "https://www.dribbble.com/xvscreations",
      "https://www.facebook.com/xVSCreations",
      "https://x.com/xvscreations",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@xvscreations.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "xVS Creations",
    url: "https://xvscreations.com",
  },
];

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <SplashScreenManager>
        {/* <RepeatingLambdaBg /> */}
        <RepeatingLambdaBg />
        <HomePage />
      </SplashScreenManager>
    </>
  );
}
