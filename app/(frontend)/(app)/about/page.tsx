import AboutGrid from "@/components/AboutGrid";
import AboutPage from "@/page/AboutPage";

const About = () => {
  return (
    <div>
      <div className="h-screen max-md:h-150 md:max-lg:h-180 absolute inset-x-0">
        <AboutGrid />
      </div>
      <AboutPage />
    </div>
  );
};

export default About;
