import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/utils/stateProvider/useStateValue";

const NavItem = ({ item }) => {
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  const handleNavigation = (departmentTitle, subDepartmentTitle) => {
    // Construct URL based on department and subDepartment
    departmentTitle = departmentTitle.toLowerCase().replace(/ /g, "-").replace("&", "and").replace(",", "-");
    subDepartmentTitle = subDepartmentTitle.toLowerCase().replace(/ /g, "-").replace("&", "and").replace(",", "-");
    let url = `/shop/${departmentTitle}/${subDepartmentTitle}`;
    navigate(url);
  };

  return (
    <div className="relative h-20 pt-3 group z-49 ">
      <div
        className={`cursor-pointer inline-flex items-center group-hover:border-b-4 space-x-2 pb-3
      border-transparent z-49 text-[#black]`}
      >
        <span onClick={() => handleNavigation(item.title)}>{item.title}</span>
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
                      bg-white
                      text-black
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
                onClick={() => handleNavigation(item.title, childItem.title)}
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
