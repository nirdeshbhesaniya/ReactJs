import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex flex-col sm:flex-row justify-center my-10 space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 text-sm sm:text-base rounded-md w-full sm:w-auto text-center"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-6 text-sm sm:text-base rounded-md border w-full sm:w-auto text-center"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 justify-center lg:space-x-4 space-y-4 lg:space-y-0">
        <video
          autoPlay
          loop
          muted
          controls
          className="rounded-lg w-full lg:w-1/2 max-w-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          controls
          className="rounded-lg w-full lg:w-1/2 max-w-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
