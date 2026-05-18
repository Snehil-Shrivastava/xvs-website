import AboutGrid from "@/components/AboutGrid";
import AboutPage from "@/pages/AboutPage";

const About = () => {
  return (
    <div>
      <div className="h-screen absolute inset-x-0">
        <AboutGrid />
      </div>
      <AboutPage />
    </div>
  );
};

export default About;
