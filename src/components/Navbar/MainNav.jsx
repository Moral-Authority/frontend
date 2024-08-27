import React from "react";
import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavItems from "./NavItems";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { Link } from "react-router-dom";
import ProfilePicture from "images/profilePicture.png";
import Controller from "images/controller.png";
import Logo from "images/MoralAuthorityLogo.png";

const MainNav = ({ userLoggedIn }) => {
  const [{ userProfile }, dispatch] = useStateValue();
  return (
    <div>
      <header
        className="w-full flex h-20 bg-white border justify-between text-center items-center px-10
   md:px-20 xl:px-32"
      >
        <Link to="/">
          <h1 className="text-2xl lg:text-3xl font-bold">
            <img className="w-[] h-[80px]" src={Logo} alt="" />
          </h1>
        </Link>
        <div className="hidden lg:inline-flex py-1 space-x-2 items-center border-b border-b-black">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <input
            type="search"
            className="placeholder:text-black focus:border-none focus:outline-none"
            placeholder="Search"
            id="site-search"
            name="q"
          />
        </div>
        {userLoggedIn ? (
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-5 ">
              <li>
              <Link to={userProfile ? "/profile" : "#"}>
                <div className="h-14 w-14 rounded-full">
                  <UserCircleIcon className="h-14 w-14" />
                </div>
              </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="hidden lg:flex">
            <ul className="flex space-x-5 ">
              <li>
                <Link to="/create-account">
                  <button className="h-[46px] text-base w-[128px] bg-black text-white text-center rounded-sm">
                    Signup
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/login">
                  <button
                    className="h-[46px] w-[128px] text-base bg-white text-black border border-black
             text-center rounded-sm"
                  >
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <nav className="flex lg:hidden">
          <Bars3Icon
            className="h-8 w-8"
            onClick={() =>
              dispatch({
                type: "CHANGE_NAV_MENU",
              })
            }
          />
        </nav>
      </header>
      <div className="hidden lg:flex justify-center space-x-5 w-full h-14 bg-black text-white ">
        <NavItems />
      </div>
    </div>
  );
};

export default MainNav;
