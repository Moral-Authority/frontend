import React, { useEffect } from "react";
import Header from "../components/Header";
import Filters from "../components/ShopComponents/Filters";
import Products from "../components/ShopComponents/Products";
import {
 useStateValue,
 actionTypes,
} from "@/utils/stateProvider/useStateValue";
import { useLocation } from "react-router-dom";

const Shop = () => {
 const [{ shopFiltersToggle, filteredProducts }, dispatch] = useStateValue();
 const location = useLocation();
 const departmentTitle = location.state?.departmentTitle || "Home & Garden";
 const subDepartmentTitle =
  location.state?.subDepartmentTitle || "Cleaning Supplies";

 // Set initial filters based on department and sub-department titles when the page loads
 useEffect(() => {
  dispatch({
   type: actionTypes.SET_FILTERS,
   filters: { department: departmentTitle, subDepartment: subDepartmentTitle },
  });
 }, [departmentTitle, subDepartmentTitle, dispatch]);

 return (
  <div className='min-h-screen relative'>
   {/* Main Content (Products + Header) */}
   <div
    className={`w-full ${
     shopFiltersToggle ? "" : "opacity-100 blur-none"
    } h-full flex flex-col`}>
    {/* opacity-20 blur-sm pointer-events-none */}
    <Header />

    {/* Breadcrumb and Filter/Product Sections */}
    <div className='flex-1 flex flex-col h-full bg-white'>
     <section className='flex text-[#798086] items-center justify-center bg-white h-20'>
      {departmentTitle} &gt; {subDepartmentTitle}
     </section>
     <section className='px-4 relative py-2 sm:px-9 sm:py-8 xl:py-12 flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-10'>
      {/* Desktop Filters (Visible when not toggled on mobile) */}
      {/* {!shopFiltersToggle && (
       <Filters
        department={departmentTitle}
        subDepartment={subDepartmentTitle}
       />
      )} */}
      <Filters
       department={departmentTitle}
       subDepartment={subDepartmentTitle}
      />

      {/* Products Section (Shows filtered or default products) */}
      <Products
       department={departmentTitle}
       subDepartment={subDepartmentTitle}
       filteredProducts={filteredProducts} // Pass the filtered products from state
      />
     </section>
    </div>
   </div>
  </div>
 );
};

export default Shop;
