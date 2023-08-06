import React from "react";
import ThirdMain from "images/thirdMain.png";
import ThirdMainMobile from "images/thirdMainMobile.png";
const ThirdSection = () => {
  return (
    <div className="min-h-screen lg:h-screen text-white px-8 py-9 sm:px-12 sm:py-14 lg:py-14 lg:px-36 w-full bg-black">
      <section className="flex w-full items-center space-x-5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize font-semibold lg:font-bold">
          How we achieve this
        </h1>
        <div className="w-[154px] lg:w-[60px] border-2 border-[#D6AD60]"></div>
        <h1 className="text-1xl sm:text-3xl lg:text-4xl capitalize font-semibold lg:font-bold">
          Mission
        </h1>
      </section>
      <section className="flex flex-col lg:flex-row w-full lg:space-x-10">
        <div className="w-full lg:w-1/2 ">
          <div className="mt-10 sm:mt-14 flex flex-col space-y-5 sm:space-y-10">
            <section>
              <ul className="flex flex-col space-y-5 sm:space-y-10 text-[#E1E1E1]/90 list-disc">
                <li>
                  Moral Authority is an eCommerce platform that allows consumers
                  to shop ethically with the same convenience as Amazon.
                </li>
                <li>
                  Consumers that are looking for services or local
                  brick-and-mortar stores could identify and locate them through
                  the app utilizing location services.
                </li>
                <li>
                  Businesses will be screened and verified through our system
                  prior to being featured. Badges will be awarded to businesses
                  based on verified social or environmental endorsements.
                </li>
              </ul>
            </section>
          </div>
          <div className="flex space-x-5 mt-10 sm:mt-14">
            <button className="w-[158px] h-[46px] text-black capitalize bg-[#D6AD60]">
              Sign Up
            </button>
            <button className="w-[158px] h-[46px] bg-black text-black capitalize bg-[#D6AD60]">
              Learn More
            </button>

            {/*  TODO Learn more can be implemented when we have blog pages for SEO */}
            {/* <button className="w-[158px] h-[46px] text-[#D6AD60] capitalize bg-black border border-[#D6AD60]">
              Learn More
            </button>{" "} */}
          </div>
        </div>
        <div className="flex w-full lg:w-1/2">
          <img
            src={ThirdMain}
            className="hidden lg:block w-full h-full"
            alt=""
          />
          <img
            src={ThirdMainMobile}
            className="lg:hidden block w-full h-full"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default ThirdSection;
