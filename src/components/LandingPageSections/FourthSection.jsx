import React from "react";
import ExFm from "images/exfm.png";
import Gaia from "images/gaia.png";
import Eyeem from "images/eyeem.png";
import Tuenti from "images/tuenti.png";
import MyLife from "images/myLife.png";
const FourthSection = () => {
  return (
    <div className="w-full flex flex-col space-y-10 items-center justify-center bg-white h-[50vh]">
      <section className="flex items-center space-x-5">
        <div className="w-[60px] border-2 border-[#D6AD60]"></div>
        <h1 className=" text-4xl capitalize font-bold">Our Affiliations</h1>
      </section>
      <section className="flex justify-evenly w-full">
        <img className="w-[74px] h-[74px] text-gray-500" src={ExFm} alt="" />
        <img className="w-[74px] h-[74px] text-gray-500" src={Gaia} alt="" />
        <img className="w-[74px] h-[74px] text-gray-500" src={Eyeem} alt="" />
        <img className="w-[74px] h-[74px] text-gray-500" src={Tuenti} alt="" />
        <img className="w-[74px] h-[74px] text-gray-500" src={MyLife} alt="" />
      </section>
    </div>
  );
};

export default FourthSection;
