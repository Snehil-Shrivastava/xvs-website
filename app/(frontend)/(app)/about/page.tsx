import AboutGrid from "@/components/AboutGrid";
import SchemaMarkup from "@/components/SchemaMarkup";
import AboutPage from "@/page/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | xVS Creations",
  description:
    "Learn about xVS Creations — a global creative agency specializing in branding strategy, logo design, UI/UX design, motion graphics, website development, and digital marketing solutions since 2014. Trusted by diverse brands across industries.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About xVS Creations",
  url: "https://xvscreations.com/about",
  description: "Learn about xVS Creations, our team and design philosophy.",
};

const About = () => {
  return (
    <div>
      <SchemaMarkup schema={schema} />
      <div className="h-screen max-md:h-150 md:max-lg:h-180 absolute inset-x-0">
        <AboutGrid />
      </div>
      <AboutPage />
    </div>
  );
};

export default About;
