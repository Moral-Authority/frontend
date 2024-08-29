import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ProductLinks from "../components/Products/ProductLinks";
import UserProfile from "../components/ProfileComponents/UserProfile";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import CompanyProfile from "../components/ProfileComponents/CompanyProfile";

const Profile = () => {
  const [{ userProfile }] = useStateValue();
  return (
    <div className="min-h-screen flex flex-col bg-white sm:bg-[#F6FBFF] w-full">
      <div className="sm:block">
        <Header userLoggedIn={true} />
      </div>
      <div
        className="flex relative flex-col sm:flex-row h-full space-y-0 sm:space-x-2 lg:space-x-5 lg:py-10
      items-center lg:justify-center"
      >
        {/* {userProfile ? <CompanyProfile /> : <UserProfile />} */}
        {userProfile ? <UserProfile /> : <UserProfile />}
        <div className="w-96 sm:basis-3/4 lg:basis-3/5 bg-white flex flex-col sm:space-y-4 self-start px-10 py-4">
          <ProductLinks />
          <div className="hidden sm:block">
            <Outlet />
          </div>
        </div>
        <div className="sm:hidden absolute bg-white min-h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
