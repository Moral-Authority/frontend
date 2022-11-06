import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";

const ProductLink = ({ title, link, className }) => {
  return (
    <NavLink
      className={({
        isActive,
      }) => `flex outline-none justify-between sm:block sm:text-xs lg:text-base sm:text-center
      ${
        isActive ? "text-black sm:border-b-2 pb-2 border-b-black" : "text-base"
      } ${className}`}
      to={link}
    >
      <span>{title}</span>
      <span>
        <ChevronRightIcon className="h-6 w-6 sm:hidden" />
      </span>
    </NavLink>
  );
};

export default ProductLink;
