import React from "react";
import { useQuery } from '@apollo/client';
import { GET_USER_QUERY } from '../../graphql/Queries.js'; // Adjust the path to where you store your queries
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/utils/stateProvider/useStateValue"; // Adjust the path to where your useStateValue is located

const UserProfile = () => {
  const navigate = useNavigate();
  
  // Get the user from global state
  const [{ user }] = useStateValue();
  console.log("user obj state", user);
  const userId = user?.id; // Use 'id' based on your state
  console.log("user id in state", userId);

  // If no user is logged in, redirect to login page
  if (!userId) {
    navigate("/login");
    return null;
  }

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: { id: userId }, // Ensure the variable name matches the GraphQL query definition
  });

  console.log("user request return data obj", data);
  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error loading profile: {error.message}</p>;

  const { email, phone } = data.user;

  return (
    <div className="sm:basis-1/4 flex flex-col space-y-5 bg-white self-start">
      <div className="bg-[#D6AD60]/20 relative flex justify-center"></div>

      <div className="py-5 flex flex-col space-y-4 px-4">
        <div className="flex justify-between">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <EnvelopeIcon className="h-6 w-6" />
            <span className="pl-2">{email}</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm">
            update
          </button>
        </div>

        <div className="flex justify-between">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <PhoneIcon className="h-6 w-6" />
            <span className="pl-2">{phone}</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm">
            update
          </button>
        </div>
        <div className="flex justify-between">
          <p className="text-sm sm:text-xs lg:text-sm text-[#798086] flex items-end">
            <PhoneIcon className="h-6 w-6" />
            <span className="pl-2">{phone}</span>
          </p>
          <button className="text-[#1B93FA] text-sm sm:text-xs lg:text-sm">
            update password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
