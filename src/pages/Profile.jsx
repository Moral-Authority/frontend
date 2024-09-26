import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ProductLinks from "../components/Products/ProductLinks";
import UserProfile from "../components/ProfileComponents/UserProfile";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import CompanyProfile from "../components/ProfileComponents/CompanyProfile";

const Profile = () => {
  const [{ userProfile }] = useStateValue();
  const location = useLocation(); // Track the current route
  
  return (
    <div
      className="min-h-screen flex flex-col w-full"
      style={{ backgroundColor: "#f2f2eb" }}
    >
      <div style={{ display: "block" }}>
        <Header userLoggedIn={true} />
      </div>
      <div
        className="flex flex-col items-center lg:justify-center h-full space-y-4"
        style={{
          padding: "20px 20px 20px 20px",
        }}
      >
        {/* Profile and Product Links Section */}
        <div
          className="flex flex-col w-full lg:max-w-screen-lg space-y-4"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          {/* Profile Section */}
          <div
            className="flex flex-col items-start p-4"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              minWidth: "350px",
              width: "100%",
              ...(window.innerWidth >= 720 && {
                width: "66%",
                padding: "16px", // Preserving some padding even at wider widths
                backgroundColor: "#ffffff", // Preserving background color
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Preserving shadow
              }),
            }}
          >
            {userProfile ? <UserProfile /> : <UserProfile />}
          </div>
          {/* Product Links and Outlet Section */}
          <div
            className="flex flex-col p-4"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              minWidth: "350px",
              width: "100%",
              ...(window.innerWidth >= 720 && {
                width: "66%",
                padding: "16px", // Preserving some padding even at wider widths
                backgroundColor: "#ffffff", // Preserving background color
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Preserving shadow
              }),
            }}
          >
            <ProductLinks />
            <div style={{ display: "block" }}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
