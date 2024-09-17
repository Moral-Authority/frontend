import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/utils/stateProvider/useStateValue";

const NavItem = ({ item }) => {
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  const handleNavigation = (navLink, departmentTitle, subDepartmentTitle = null) => {
    if (navLink === "/shop") {
      // Navigate to the shop page with both department and subDepartment titles
      navigate(navLink, { state: { departmentTitle, subDepartmentTitle } });
      // dispatch({ type: "SHOP_FILTERS_TOGGLE" }); // Toggle the filter menu if needed
    } else {
      navigate(navLink); // For non-shop links, just navigate directly
    }
  };

  return (
    <div className="relative h-20 pt-3 group z-50 ">
      <div
        className={`cursor-pointer inline-flex items-center group-hover:border-b-4 space-x-2 pb-3
      border-transparent z-50 text-[#f2f2eb]`}
      >
        <span onClick={() => handleNavigation(item.navLink, item.title)}>{item.title}</span>
      </div>
      {item.children && (
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
                      bg-[#2C3A46]
                      text-[#f2f2eb]
                      rounded-md
                      z-50 !important">
          {item.children.items.map((childItem, index) => (
            <li
              key={index}
              className={
                "border-b cursor-pointer last:border-none border-transparent pb-4"
              }
            >
              <span
                onClick={() => handleNavigation(childItem.navLink, item.title, childItem.title)}
              >
                {childItem.title}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
