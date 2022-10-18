import React from "react";
import navItems from "@/utils/testAPIs/navItems.json";
import NavItem from "./NavItem";

const NavItems = () => {
  return (
    <>
      {navItems?.navItems?.map((item, index) => (
        <NavItem item={item} key={index} />
      ))}
    </>
  );
};

export default NavItems;
