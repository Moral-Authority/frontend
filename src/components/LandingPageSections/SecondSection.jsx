import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import ToriSav from "images/sav&tori.png";
const SecondSection = () => {
  return (
    <div className="h-auto lg:h-screen flex items-center bg-white px-4 py-8 sm:px-8 sm:py-12 lg:py-12 lg:px-36">
      <div className="hidden lg:flex items-center ">
        {/* <img className="w-[459px] h-[493px]" src={ToriSav} alt="" /> */}
        <div className="w-[356px] h-[480px] -ml-8 bg-[#F3F3F3]"></div>
      </div>
      <div className="">
        <div className="flex items-center space-x-4">
          <div className="w-[60px] border-[2px] border-[#D6AD60]"></div>
          {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize">
            Message From the Founders
          </h1> */}
        </div>
        <div className="">
          <p className="text-xl my-10">
            Lower income individuals and minorities are the most affected and
            least equiped to participate in decisions made by corporations and
            politicians. The need for better resources is clear and immediate.
          </p>
          <p className="text-xl my-10">
            Moral Authority is as a public resource, where people can easily
            find companies and products aligned with their values. As Moral
            Authority grows we see it becoming a source of trusted information
            empowering individuals to have impact with their purchases 24/7
            instead of every four years.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <SocialIcon
            url="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-icon"
            bgColor="black"
            style={{ width: "30px", height: "30px" }}
          />
          <SocialIcon
            url=""
            target="_blank"
            rel="noopener noreferrer"
            className="homepage-icon"
            bgColor="black"
            style={{ width: "30px", height: "30px" }}
          />
          <SocialIcon
            url="https://youtube.com"
            className="homepage-icon"
            bgColor="black"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div className="flex space-x-5">
          {/* <button className="text-black border border-black bg-white w-[158px] h-[46px] text-center">
            More About Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
