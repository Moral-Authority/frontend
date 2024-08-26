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
// import { graphql, useLazyLoadQuery } from "react-relay";

// Commenting out the query and data fetching code
// const fetchUserQuery = graphql`
//   query LeftProfileQuery($userId: String!) {
//     user(_id: $userId) {
//       _id
//       firstName
//       lastName
//       email
//     }
//   }
// `;

const LeftProfile = () => {
  const navigate = useNavigate();
  // const { data, error } = useLazyLoadQuery(fetchUserQuery, { userId: "1" });

  // if (error) {
  //   console.error("Error fetching user data:", error);
  //   return <div>Error loading profile</div>;
  // }

  return (
    <div className="sm:basis-1/4 flex flex-col space-y-5 bg-white self-start">
      <div className="bg-[#D6AD60]/20 relative flex justify-center">
      </div>
      {/* <div className="flex flex-col space-y-2 items-center border-b-2 border-b-[#EDEFF6]/50 pb-4">
        <p className="text-[#798086] text-sm">
          Associate with{" "}
          <span className="text-[#1B93FA] cursor-pointer">Company</span>
        </p>
      </div> */}

      
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
            <span className="pl-2">+94 568 254 242</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm ">
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftProfile;
