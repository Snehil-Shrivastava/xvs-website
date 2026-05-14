const HomeReel = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <video preload="none" className="w-3/5 max-w-350" loop muted>
        <source src="/videos/showreel.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeReel;
