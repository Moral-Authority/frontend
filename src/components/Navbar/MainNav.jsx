import React, { useState } from "react";
import { HeartIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import NavItems from "./NavItems";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useStateValue, actionTypes } from "@/utils/stateProvider/useStateValue"; // Ensure actionTypes is imported here
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "images/MoralAuthorityLogo.png";
import Search from './Search';  // Import the new SearchComponent
 
const MainNav = ({ userLoggedIn }) => {
  const [{ userProfile }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div>
      <header className="w-full flex h-20 bg-red border justify-between text-center items-center px-2.5 md:px-5 xl:px-5">
        <Link to="/">
          <h1 className="text-2xl lg:text-3xl" style={{ fontSize: '130%' }}>
            <img
              className="h-auto max-h-[60px] sm:max-h-[60px] md:max-h-[60px] lg:max-h-[80px] w-auto"
              src={Logo}
              alt="Logo"
            />
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex sm:flex xs:flex w-full z-50">
          <Search />  {/* Use the Search component here */}
        </div>

        {/* User Profile Checks */}
        {userProfile ? (
          <nav className="hidden lg:flex m:flex sm:flex">
            <ul className="flex items-center space-x-5">
              {/* Show favorites if user is logged in */}
              <li>
                <Link to="/profile">
                  <div className="h-10 w-10 rounded-full">
                    <HeartIcon className="h-10 w-10 text-[#1a1a0a]" />
                  </div>
                </Link>
              </li>
              <li>
                {/* Profile icon navigates to profile if logged in */}
                <Link to="/profile">
                  <div className="h-10 w-10 rounded-full">
                    <UserCircleIcon className="h-10 w-10" />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="hidden lg:flex">
            {/* If not logged in, show Signup and Login buttons */}
            <ul className="flex space-x-5">
              <li>
                <Link to="/create-account">
                  <button className="h-[46px] text-base w-[128px] bg-[#1a1a0a] text-white text-center rounded-lg">
                    Signup
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button className="h-[46px] w-[128px] text-base bg-white text-black border border-black text-center rounded-lg">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {/* Bars Icon Menu for Smaller Screens */}
        <nav className="flex sm:hidden m:hidden lg:hidden space-x-3">
          {userProfile && (
            <Link to="/profile">
              <div className="h-8 w-8 space-x-3 rounded-full">
                <HeartIcon className="h-8 w-8 text-[#1a1a0a]" />
              </div>
            </Link>
          )}
        <Bars3Icon
          className="h-8 w-8"
          onClick={() => dispatch({ type: 'CHANGE_NAV_MENU' })}
        />

        </nav>
      </header>

      {/* NavItems for Categories */}
      <div className="hidden justify-center space-x-5 w-full h-14 bg-[#ffffff] text-black 
      m:flex lg:flex xs:flex sm:flex text-sm sm:text-base md:text-lg lg:text-xl border border-gray-300">
        <NavItems />
      </div>
    </div>
  );
};

export default MainNav;
