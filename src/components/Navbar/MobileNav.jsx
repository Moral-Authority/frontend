import React from "react";
import {
  BellIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import navItems from "@/utils/testAPIs/navItems.json";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const MobileNav = () => {
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{
        x: -screen.width,
      }}
      animate={{
        x: 0,
      }}
      exit={{ x: -screen.width }}
      transition={{
        duration: 0.5,
      }}
      className="min-h-screen lg:hidden z-50 bg-[#1E1E1E] flex space-y-10 justify-start flex-col px-8 py-10 text-white"
    >
      <div className="flex justify-between">
        <div className="flex h-full">
          <BellIcon className="h-8 w-8" />
          <div
            className=" -ml-4 -mt-1 rounded-full w-5 h-5 flex items-center
          justify-center text-center bg-[#D6AD60] text-white text-xs"
          >
            3
          </div>
        </div>
        <div
          onClick={() =>
            dispatch({
              type: "CHANGE_NAV_MENU",
            })
          }
        >
          <Bars3Icon className="h-8 w-8" />
        </div>
      </div>

      <div className="flex justify-center space-x-5 items-center">
        <Link to="/create-account">
          <button className="w-[150px] bg-[#D6AD60] text-black h-[50px] text-center text-base">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="w-[150px] h-[50px] border border-[#D6AD60] text-[#D6AD60] text-center text-base">
            Login
          </button>
        </Link>
      </div>

      <div className="flex py-1 w-full space-x-2 items-center border-b border-b-white">
        <MagnifyingGlassIcon className="text-white  border-white h-6 w-6" />
        <input
          type="search"
          className="placeholder:text-white w-3/4  bg-transparent focus:border-none focus:outline-none"
          placeholder="Search"
          id="site-search"
          name="q"
        />
      </div>

      <div className="flex flex-col space-y-8">
        <p className="text-white text-xl">Categories</p>
        <ul className="text-sm flex flex-col text-white/70 space-y-4 pl-10">
          {navItems?.navItems?.map((item, index) => (
            <p
              onClick={() => {
                dispatch({
                  type: "CHANGE_NAV_MENU",
                });
                navigate(item.navLink);
              }}
              key={index}
            >
              {item.title}
            </p>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-white text-xl">My Profile</p>
      </div>
    </motion.div>
  );
};

export default MobileNav;
