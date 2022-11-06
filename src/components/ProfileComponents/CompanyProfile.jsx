import React from "react";
import Controller from "images/controller.png";
import {
  CameraIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChevronLeftIcon,
  BuildingOffice2Icon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Award from "images/award.png";
const CompanyProfile = () => {
  const navigate = useNavigate();
  location;
  return (
    <div className="sm:basis-1/4 flex flex-col space-y-5 bg-white self-start">
      <div className=" relative flex justify-center">
        <img src={Controller} className="w-full h-full" alt="" />
        <div
          onClick={() => navigate(-1)}
          className="absolute sm:hidden justify-self-start top-10 left-5"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </div>
        <button className="bg-white/80 px-8 py-4 bottom-4 absolute flex space-x-2">
          <CameraIcon className="h-6 w-6 " />
          <span>Change profile picture</span>
        </button>
      </div>
      <div className="flex flex-col space-y-2 items-center border-b-2 border-b-[#EDEFF6]/50 pb-4">
        <p className="text-lg">Game CenterX</p>
        <p className="text-[#1B93FA] text-sm">
          <a target={"_blank"} href="www.gamecenterx">
            www.gamecenterx.com
          </a>
        </p>
      </div>
      <div className="py-5 flex flex-col space-y-4 px-4">
        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <BuildingOffice2Icon className="h-6 w-6" />
            <span className="pl-2">Game centerx</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm">
            edit
          </button>
        </div>

        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <EnvelopeIcon className="h-6 w-6" />
            <span className="pl-2">mailexample@gmail.com</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm ">
            edit
          </button>
        </div>

        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <PhoneIcon className="h-6 w-6" />
            <span className="pl-2">+94 568 254 242</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm">
            edit
          </button>
        </div>
      </div>
      <div className="border-t py-5 flex flex-col space-y-4 px-4">
        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-center">
            <img src={Award} className="h-10 w-10" />
            <span className="pl-2">Comptia Certification</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm">
            Verify
          </button>
        </div>
        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-center">
            <img src={Award} className="h-10 w-10" />
            <span className="pl-2">A+ Certification</span>
          </p>
          <button className="text-[#34BF42] text-sm sm:text-xs lg:text-sm">
            Verified
          </button>
        </div>
        <p className="flex text-center items-center justify-center space-x-2">
          <span className="decoration-black underline">Gaming Category</span>
          <PencilSquareIcon className="h-6 w-6" />
        </p>
      </div>
    </div>
  );
};

export default CompanyProfile;
