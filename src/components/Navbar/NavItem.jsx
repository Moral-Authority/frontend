import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <div className="relative h-20 pt-3 group z-20 ">
      <div
        className={`cursor-pointer inline-flex items-center group-hover:border-b-4 space-x-2 pb-3
     border-b-[#D6AD60] `}
      >
        <Link to={item.navLink}>{item.title}</Link>

        <ChevronUpIcon className="pl-1 h-5 w-5 text-[#D6AD60] group-hover:rotate-180 transition-all will-change-transform delay-300 duration-300" />
      </div>
      <ul className="absolute top-10 hidden text-sm mt-5 w-[200px] text-center group-hover:flex flex-col space-y-5 p-5 bg-black text-white">
        {item?.children?.items.map((childItem, index) => (
          <li
            key={index}
            className={
              "border-b cursor-pointer last:border-none border-b-white pb-4"
            }
          >
            <Link to={childItem.navLink}>{childItem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItem;
