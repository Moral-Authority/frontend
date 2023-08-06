import React from "react";

const MainSection = () => {
  return (
    <main
      className="w-full bg-mainSmall lg:bg-ourMission h-[70vh]
         bg-no-repeat bg-cover lg:h-screen lg:bg-cover"
    >
      <div
        className="w-full h-full flex flex-col items-start
        bg-gradient-to-r from-black/70 to-transparent justify-center text-left pl-6 sm:pl-16 lg:pl-28 "
      >
        <div>
          <h1 className="text-[#D6AD60] text-base tracking-[0.25em] uppercase">
            OUR MISSION
          </h1>
        </div>
        <div className="text-white text-2xl sm:text-3xl lg:text-5xl font-semibold sm:font-bold leading-snug">
          <p className="">
            One platform<span className="text-[#D6AD60]">.</span> One Resource
            <span className="text-[#D6AD60]">.</span>
          </p>
          <p>
          24/7 Impact<span className="text-[#D6AD60]">.</span>
          </p>
        </div>
        <div className="w-3/4 sm:w-1/2 text-white/80 leading-loose mt-5">
          <p className="public-resource">
            A public resource empowering you to conveniently access products and services exclusively from businesses committed to
            positive social, political and enviromental impacts.
          </p>
        </div>
        <div className="flex items-center space-x-10 mt-16 text-white">
          <button className="w-[159px] btn-started capitalize h-[52px] text-black font-[500] bg-[#D6AD60]">
            Get Started
          </button>
          <button className="w-[159px] btn-started-special capitalize h-[52px] text-black font-[500] bg-[#D6AD60]">
            Learn More
          </button>
          {/*  TODO Learn more can be implemented when we have blog pages for SEO */}
          {/* <p className="items-center flex capitalize">
            Learn More <span className="text-xl ml-2">&gt;</span>{" "}
          </p> */}
        </div>
      </div>
    </main>
  );
};

export default MainSection;
