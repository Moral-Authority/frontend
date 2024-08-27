import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import ProfilePicture from "images/profilePicture.png";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:basis-1/4 flex flex-col space-y-5 bg-white self-start">
      <div className="bg-[#D6AD60]/20 relative flex justify-center">
        {/* You can add an image or profile section here if needed */}
      </div>
      
      <div className="py-5 flex flex-col space-y-4 px-4">
        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <EnvelopeIcon className="h-6 w-6" />
            <span className="pl-2">emilia.alexandra@example.com</span> {/* Placeholder email */}
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm ">
            update
          </button>
        </div>

        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <PhoneIcon className="h-6 w-6" />
            <span className="pl-2">+94 568 254 242</span> {/* Placeholder phone number */}
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm ">
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
