import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  const [displayChildren, setdisplayChildren] = useState(false);
  return (
    <div className="relative h-full">
      <li
        className={`cursor-pointer inline-flex h-full items-center hover:border-b-4
     border-b-[#D6AD60] active:border-b-4  ${
       displayChildren ? "border-b-4" : ""
     }`}
        onClick={() =>
          setdisplayChildren(item?.children?.length > 0 && !displayChildren)
        }
      >
        <Link to={item.navLink}>{item.title}</Link>
        {item?.children?.length > 0 ? (
          displayChildren ? (
            <ChevronUpIcon className="pl-1 h-5 w-5 text-[#D6AD60] transition-all will-change-transform delay-300 duration-300" />
          ) : (
            <ChevronDownIcon className="pl-1 h-5 w-5 text-white transition-all delay-300 duration-300 will-change-transform" />
          )
        ) : (
          ""
        )}
      </li>
      {displayChildren && (
        <ul className="absolute z-20 top-16 text-sm w-[200px] text-center flex flex-col space-y-5 p-5 bg-black text-white">
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
      )}
    </div>
  );
};

export default NavItem;
