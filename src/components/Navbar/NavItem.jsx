import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <div className="relative h-20 pt-3 group z-20 ">
      <div
        className={`cursor-pointer inline-flex items-center group-hover:border-b-4 space-x-2 pb-3
      border-transparent text-[#f2f2eb]`}
      >
        <Link to={item.navLink}>{item.title}</Link>
      </div>
      <ul className="absolute 
                    top-10 
                    mt-[0.6rem] 
                    hidden 
                    text-sm 
                    w-[150px] 
                    text-center 
                    group-hover:flex 
                    flex-col 
                    space-y-5
                    p-[.8rem] 
                    bg-[#1a1a0a]
                    text-[#f2f2eb]
                    rounded-md">
                {item?.children?.items.map((childItem, index) => (
          <li
            key={index}
            className={
              "border-b cursor-pointer last:border-none border-transparent pb-4"
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
