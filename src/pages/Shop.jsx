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
 const { department, subDepartment } = useParams(); 
 console.log("department", department, subDepartment)

  // Reset filters when the Shop component mounts
  useEffect(() => {
    // Clear the filtered products and reset filters when navigating back to the shop
    dispatch({
      type: actionTypes.SET_FILTERED_PRODUCTS,
      filteredProducts: [], // Clear filtered products
    });

    // Optionally reset other filter-related state here if needed
    dispatch({
      type: actionTypes.SET_FILTERS,
      filters: { department, subDepartment }, // Set initial department/sub-department filters
    });
  }, [department, subDepartment, dispatch]);

 return (
  <div className='min-h-screen relative'>

   <div
    className={`w-full ${
     shopFiltersToggle ? "" : "opacity-100 blur-none"
    } h-full flex flex-col`}>
    <Header />


    <div className='flex-1 flex flex-col h-full' style={{background: "#f5f5f7"}}>
    {/* <ProductCycleFilter />  */}
     <section className='px-4 relative py-2 sm:px-9 sm:py-8 xl:py-12 flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-10'>
      <Filters
       department={department}
       subDepartment={subDepartment}
      />

      <Products
       filteredProducts={filteredProducts} 
      />
     </section>
    </div>
   </div>
  </div>
 );
};

export default Shop;
