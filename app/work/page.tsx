import StarryBackground from "@/components/StarryBackground";
import WorkPage from "@/pages/WorkPage";

const Work = () => {
  return (
    <div>
      <div className="h-screen absolute inset-x-0 z-0">
        <StarryBackground
          starCount={150}
          minSpeed={0.002}
          maxSpeed={0.004}
          wanderDistance={150} // Moves a lot further across the screen
        />
      </div>
      <WorkPage />
    </div>
  );
};

export default Work;
