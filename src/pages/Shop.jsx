import React, { useEffect } from "react";
import Header from "../components/Header";
import Filters from "../components/ShopComponents/Filters";
import Products from "../components/ShopComponents/Products";
import ProductCycleFilter from "../components/ShopComponents/FilterProductCycle"; 
import {
 useStateValue,
 actionTypes,
} from "@/utils/stateProvider/useStateValue";
import { useParams } from "react-router-dom"; // Import useParams to extract URL params

const Shop = () => {
  const [{ shopFiltersToggle, filteredProducts }, dispatch] = useStateValue();
  const { department, subDepartment } = useParams(); // Get department and subDepartment from URL

  // Set initial filters based on department and sub-department titles when the page loads
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_FILTERS,
      filters: { department, subDepartment },
    });
  }, [department, subDepartment, dispatch]);

  return (
    <div className='min-h-screen relative'>
      {/* Main Content (Products + Header) */}
      <div
        className={`w-full ${
          shopFiltersToggle ? "" : "opacity-100 blur-none"
        } h-full flex flex-col`}>
        <Header />

        {/* Breadcrumb and Filter/Product Sections */}
        <div className='flex-1 flex flex-col h-full bg-white'>
        {/* <ProductCycleFilter />  */}
          <section className='px-4 relative py-2 sm:px-9 sm:py-8 xl:py-12 flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-10'>
            <Filters
              department={department}
              subDepartment={subDepartment}
            />

            {/* Products Section (Shows filtered or default products) */}
            <Products
              department={department}
              subDepartment={subDepartment}
              filteredProducts={filteredProducts} // Pass the filtered products from state
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shop;
