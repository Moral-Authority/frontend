import React from "react";
import Controller from "images/chair.png";
import Award from "images/chair.png";
import {
  CameraIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChevronLeftIcon,
  BuildingOffice2Icon,
  PencilSquareIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

// Functional Component: LogoSection
const LogoSection = ({ navigate }) => (
  <div className="relative flex justify-center">
    <img src={Controller} className="w-full h-full" alt="Company Logo" />
    <div
      onClick={() => navigate(-1)}
      className="absolute sm:hidden justify-self-start top-10 left-5"
    >
      <ChevronLeftIcon className="h-8 w-8" />
    </div>
    <button className="bg-white/80 px-8 py-4 bottom-4 absolute flex space-x-2">
      <CameraIcon className="h-6 w-6" />
      <span>Update Logo</span>
    </button>
  </div>
);

// Functional Component: ContactInfo
const ContactInfo = ({ icon: Icon, label }) => (
  <div className="flex items-center">
    <Icon className="h-6 w-6" />
    <span className="pl-2 text-sm sm:text-xs lg:text-sm text-[#798086]">{label}</span>
  </div>
);

// Functional Component: SocialLinks
const SocialLinks = ({ url, label }) => (
  <div className="flex items-center">
    <GlobeAltIcon className="h-6 w-6" />
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="pl-2 text-[#1B93FA] text-sm sm:text-xs lg:text-sm"
    >
      {label}
    </a>
  </div>
);

// Main Component: CompanyProfile
const CompanyProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:basis-1/4 flex flex-col space-y-4 bg-white self-start">
      <LogoSection navigate={navigate} />
      <div className="flex flex-col space-y-2 items-center border-b-2 border-b-[#EDEFF6]/50 pb-4">
        <p className="text-lg">Company Name</p>
      </div>

      <div className="py-5 flex flex-col space-y-2 px-4">
        <SocialLinks url="http://www.companyURL.com" label="www.companyURL.com" />
        <SocialLinks url="http://www.instagramURL.com" label="www.instagramURL.com" />
        <SocialLinks url="http://www.twitterURL.com" label="www.twitterURL.com" />
      </div>

      {/* <div className="flex px-2" style={{ marginTop: '50%' }}>
          <SocialIcon
            url="https://facebook.com"
            bgColor="#697383"
            style={{ height: "28px", width: "28px" }}
          />
          <SocialIcon
            url="https://twitter.com"
            bgColor="#697383"
            style={{ height: "28px", width: "28px" }}
          />
          <SocialIcon
            url="https://instagram.com"
            bgColor="#697383"
            style={{ height: "28px", width: "28px" }}
          />
          <SocialIcon
            url="https://youtube.com"
            bgColor="#697383"
            style={{ height: "28px", width: "28px" }}
          />
        </div> */}

      {/* The divider line is retained here */}
      <div className="border-t py-5 flex flex-col space-y-4 px-4">
        <ContactInfo icon={BuildingOffice2Icon} label="Contact Name" />
        <ContactInfo icon={EnvelopeIcon} label="mainContactEmail@gmail.com" />
        <ContactInfo icon={PhoneIcon} label="+94 568 254 242" />
        <div className="flex items-start">
          <MapPinIcon className="h-6 w-6 inline-block" />
          <div className="pl-2 text-sm sm:text-xs lg:text-sm text-[#798086]">
            <p>Contact Address</p>
            <p>Address Line 1</p>
            <p>Address Line 2</p>
            <p>Address City, State, Zip</p>
            <p>Country</p>
          </div>
        </div>
      </div>

      <div className="border-t py-5 flex flex-col space-y-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Award} className="h-10 w-10" alt="Award" />
            <span className="pl-2 text-sm sm:text-xs lg:text-sm text-[#798086]">Company Certifications</span>
          </div>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm">
            contact us to edit certifications
          </button>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <span className="decoration-black underline">Edit Profile</span>
          <PencilSquareIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
