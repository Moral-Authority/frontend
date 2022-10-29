import React from "react";
import asba from "images/asba_22-23.png";
import GPECC from "images/GPECC-logo-1021-sq-BLK.png";
import Human_Rights from "images/Human_Rights.png";
import Molly_Tommy from "images/Molly_Tommy_Logo_Color.png";
import "./FourthSection.css"
// import MyLife from "images/myLife.png";
const FourthSection = () => {
  return (
    <div className="w-full flex flex-col space-y-10 items-center justify-center bg-white h-[50vh]">
      <section className="flex items-center space-x-5">
        <div className="w-[60px] border-2 border-[#D6AD60]"></div>
        <h1 className=" text-4xl capitalize font-bold">Our Affiliations</h1>
      </section>
      <section className="flex justify-evenly w-full">
        <img className="w-[114px] h-[114px] text-gray-500 affiliations_mobile" src={asba} alt="" />
        <img className="w-[114px] h-[114px] text-gray-500 affiliations_mobile" src={GPECC} alt="" />
        <img className="w-[144px] h-[104px] text-gray-500 affiliations_mobile" src={Human_Rights} alt="" />
        <img className="w-[144px] h-[94px] text-gray-500 affiliations_mobile" src={Molly_Tommy} alt="" />
        {/* <img className="w-[74px] h-[74px] text-gray-500" src={MyLife} alt="" /> */}
      </section>
    </div>
  );
};

export default FourthSection;
