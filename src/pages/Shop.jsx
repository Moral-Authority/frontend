import React, { useEffect } from "react";
import Header from "../components/Header";
import Filters from "../components/ShopComponents/Filters";
import Products from "../components/ShopComponents/Products";
import ProductCycleFilter from "../components/ShopComponents/FilterProductCycle"; 
import {
 useStateValue,
 actionTypes,
} from "@/utils/stateProvider/useStateValue";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom"; // Import useParams to extract URL params

const Shop = () => {
 const [{ shopFiltersToggle, filteredProducts }, dispatch] = useStateValue();
 const location = useLocation();
 const { department, subDepartment } = useParams(); // Get department and subDepartment from URL


 // Set initial filters based on department and sub-department titles when the page loads
 useEffect(() => {
  dispatch({
   type: actionTypes.SET_FILTERS,
   filters: { department: department, subDepartment: subDepartment },
  });
 }, [department, subDepartment, dispatch]);

 return (
  <div className='min-h-screen relative'>

   <div
    className={`w-full ${
     shopFiltersToggle ? "" : "opacity-100 blur-none"
    } h-full flex flex-col`}>
    <Header />


    <div className='flex-1 flex flex-col h-full bg-white'>
    {/* <ProductCycleFilter />  */}
     <section className='px-4 relative py-2 sm:px-9 sm:py-8 xl:py-12 flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-10'>
      <Filters
       department={department}
       subDepartment={subDepartment}
      />

      <Products
       department={department}
       subDepartment={subDepartment}
       filteredProducts={filteredProducts} 
      />
     </section>
    </div>
   </div>
  </div>
 );
};

export default Shop;
