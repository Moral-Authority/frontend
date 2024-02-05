import React from "react";
import ThirdMain from "images/thirdMain.png";
import ThirdMainMobile from "images/thirdMainMobile.png";
const ThirdSection = () => {
  return (
    <div className="min-h-screen text-white px-8 py-9 sm:px-12 sm:py-14 lg:py-14 lg:px-36 w-full bg-black">
      <section className="flex w-full items-center space-x-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize font-semibold lg:font-bold">
         How It Works:
        </h1>
        <div className="w-[80px] lg:w-[60px] border-2 border-[#D6AD60]"></div>
      </section>
      <section className="flex flex-col 2xl:flex-row w-full 2xl:space-x-10">
        <div className="w-full 2xl:w-1/2 ">
          <div className="mt-10 sm:mt-14 flex flex-col space-y-5 sm:space-y-10">
            <section>
              <ul className="flex flex-col space-y-5 sm:space-y-10 text-[#E1E1E1]/90 list-disc">
                <li className="homepage-bg-black-points">
                  Discover: Explore our curated database of companies and products that prioritize ethical standards.
                </li>
                <li className="homepage-bg-black-points">
                Support: Choose to buy from businesses that align with your values, promoting fair and responsible practices.
                </li>
                <li className="homepage-bg-black-points">
                Influence: Use your voice and purchasing power to advocate for positive change in corporate behaviors and policies.
                </li>
              </ul>
            </section>
          </div>
          <div className="flex space-x-5 mt-10 sm:mt-14">
            <button className="w-[158px] h-[46px] text-black bottom-btn capitalize bg-[#D6AD60]">
              Sign Up
            </button>
            <button className="w-[158px] h-[46px] text-black bottom-btn capitalize bg-[#D6AD60]">
              Learn More
            </button>

            {/*  TODO Learn more can be implemented when we have blog pages for SEO */}
            {/* <button className="w-[158px] h-[46px] text-[#D6AD60] capitalize bg-black border border-[#D6AD60]">
              Learn More
            </button>{" "} */}
          </div>
        </div>
        <div className="flex w-full 2xl:w-1/2">
          <img
            src={ThirdMain}
            className="hidden 2xl:block w-full h-full"
            alt=""
          />
          <img
            src={ThirdMainMobile}
            className="2xl:hidden block w-full h-full"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default ThirdSection;
