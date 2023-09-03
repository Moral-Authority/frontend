import React from "react";
import ProfilePicture from "images/profilePicture.png";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CameraIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { graphql, useLazyLoadQuery } from "react-relay";

const fetchUserQuery = graphql`
  query LeftProfileQuery($userId: String!) {
    user(_id: $userId) {
      _id
      firstName
      lastName
      email
    }
  }
`;

const LeftProfile = () => {
  const navigate = useNavigate();
  const data = useLazyLoadQuery(fetchUserQuery, { userId: 1 });
  location;
  return (
    <div className="sm:basis-1/4 flex flex-col space-y-5 bg-white self-start">
      <div className="bg-[#D6AD60]/20 relative flex justify-center">
        <img src={ProfilePicture} className="w-full h-full" alt="" />
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
        <p className="text-lg">
          {data?.user.firstName} {data?.user.lastName}
        </p>
        <p className="text-[#798086] text-sm">
          Associate with{" "}
          <span className="text-[#1B93FA] cursor-pointer">Company</span>
        </p>
        <p className="text-[#D6AD60] text-sm">
          <FontAwesomeIcon icon={faMedal} className="rotate-180" size="lg" />
          <span className="ml-1">Verified contributor</span>
        </p>
      </div>
      <div className="py-5 flex flex-col space-y-4 px-4">
        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <UserIcon className="h-6 w-6" />
            <span className="pl-2">emilia_alexandra</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm">
            edit
          </button>
        </div>

        <div className="flex justify-between ">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <EnvelopeIcon className="h-6 w-6" />
            <span className="pl-2">{data?.user.email}</span>
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
      <button className="bg-white sm:text-sm lg:text-base border-2 mx-8 border-black px-6 py-3 lg:px-8 lg:py-4">
        Apply for verification
      </button>
      <Link to="add-product" className="lg:hidden mx-8 ">
        <button className="sm:text-sm lg:text-base text-black bg-[#D6AD60] w-full px-6 py-3 lg:px-8 lg:py-4 ">
          Add a product
        </button>
      </Link>
      <p className="hidden lg:block text-center text-[#FA5353] underline underline-offset-4">
        unsubscribe
      </p>
    </div>
  );
};

export default LeftProfile;
