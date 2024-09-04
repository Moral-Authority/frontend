import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Filters from "../components/ShopComponents/Filters";
import Products from "../components/ShopComponents/Products";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const [{ shopFiltersToggle }] = useStateValue();
  const location = useLocation();
  const departmentTitle = location.state?.departmentTitle || "Home & Garden";
  const subDepartmentTitle = location.state?.subDepartmentTitle || "Cleaning Supplies";

  // Debug logs
  console.log("Department Title:", departmentTitle);
  console.log("SubDepartment Title:", subDepartmentTitle);

  return (
    <div className="min-h-screen relative">
      <div
        className={`${
          shopFiltersToggle ? "block" : "hidden"
        } absolute w-full px-4 flex xl:items-center justify-center top-0 bottom-0 py-20 xl:py-4 m:hidden xl:hidden`}
      >
        <Filters department={departmentTitle} subDepartment={subDepartmentTitle} />
      </div>
      <div
        className={`w-full ${
          shopFiltersToggle
            ? "opacity-20 blur-sm pointer-events-none"
            : "opacity-100 blur-none"
        } h-full flex flex-col`}
      >
        <Header />
        <div className="flex-1 flex flex-col h-full bg-white">
          <section className="flex text-[#798086] items-center justify-center bg-white h-20">
             {departmentTitle} &gt; {subDepartmentTitle}
          </section>
          <section className="px-4 relative py-2 sm:px-9 sm:py-8 xl:py-12 flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-10">
            {!shopFiltersToggle && (
              <Filters department={departmentTitle} subDepartment={subDepartmentTitle} />
            )}
            <Products department={departmentTitle} subDepartment={subDepartmentTitle} />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
