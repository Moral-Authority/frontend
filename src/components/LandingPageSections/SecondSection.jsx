import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import ToriSav from "images/sav&tori.png";
const SecondSection = () => {
  return (
    <div className="h-[70vh] lg:h-screen flex items-center bg-white px-4 py-8 sm:px-8 sm:py-12 lg:py-12 lg:px-36">
      <div className="hidden lg:flex items-center ">
        <img className="w-[459px] h-[493px]" src={ToriSav} alt="" />
        <div className="w-[356px] h-[480px] -ml-8 bg-[#F3F3F3]"></div>
      </div>
      <div className="flex space-y-10 flex-1 w-full lg:-ml-40 flex-col items-start justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-[60px] border-[2px] border-[#D6AD60]"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize">
            Message From the Founders
          </h1>
        </div>
        <div className="text-[#5F646F] leading-[35px]">
          <p>
            <span>
              This project is dedicated to the disparity of our most valuable
              resource, Time.
            </span>
            <br></br>
            <span>
              With lower income individuals and minorities being the most
              affected and least equiped to participate in decisions made by
              corporations and politicians the need for better resources is
              clear.
            </span>
            <br></br>
            <span>
              We have seen statistically in our most recent elections that the
              people of our country are active, engaged and motivated. Yet not
              everyone has the time or resources to influence the corporate
              world they way we do so every four years with our vote.
            </span>
            <br></br>
            <span>
              We're building JustCorpz as a public resource, for individuals to
              easily find companies and products which match their values. As
              JustCorpz grows we see it becoming a source of trusted information
              empowering individuals to have impact with their purchases.
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <SocialIcon
            url="https://www.instagram.com/howstrongiam.llc/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
            bgColor="black"
            style={{ width: "30px", height: "30px" }}
          />
          <SocialIcon
            url="https://www.linkedin.com/company/hsia-justcorpz/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
            bgColor="black"
            style={{ width: "30px", height: "30px" }}
          />
          <SocialIcon
            url="https://www.tiktok.com/@howstrongiam?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className=""
            bgColor="black"
            style={{ width: "30px", height: "30px" }}
          />
          {/* <SocialIcon
            url="https://youtube.com"
            className=""
            bgColor="black"
            style={{ width: "30px", height: "30px" }}
          /> */}
        </div>
        {/* <div className="text-[#5F646F] flex items-center space-x-2"> */}
        {/* <CurrencyDollarIcon className="w-6 h-6" /> */}
        {/* <p>Payments Accepted</p> */}
        {/* </div> */}
        <div className="flex space-x-5">
          <button className="text-white bg-black w-[158px] h-[46px] text-center">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=K9DZSE7JC8R5Q"
              target="_blank"
            >
              Support Us
            </a>
          </button>

          {/* <button className="text-black border border-black bg-white w-[158px] h-[46px] text-center">
            More About Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
