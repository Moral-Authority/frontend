import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT } from '@/graphql/Queries';
import Product from './Product';
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { useLocation } from "react-router-dom";
import navItems from "@/utils/testAPIs/navItems.json"; 
import { Link } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const Products = () => {
  const location = useLocation();
  const departmentTitle = location.state?.departmentTitle || "Home & Garden";
  const subDepartmentTitle = location.state?.subDepartmentTitle || "Cleaning Supplies"; // Default value if none is provided

  // Log the departmentTitle to verify it's correct
  useEffect(() => {
    console.log("Department Title sent to query:", departmentTitle);
    console.log("Sub-Department Title sent to query:", subDepartmentTitle);
  }, [departmentTitle, subDepartmentTitle]);

  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT, {
    variables: { department: departmentTitle, subDepartment: subDepartmentTitle },  // Pass both department and sub-department
  });

  const products = data?.getAllProductsBySubDepartment || [];

  const [, dispatch] = useStateValue();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (products.length === 0) {
    return <p>Coming soon!</p>;
  }

  return (
    <div className="flex space-y-5 flex-col border-b h-full w-full xl:w-3/4">
      <section className="flex flex-col w-full space-y-5 sm:hidden md:hidden lg:hidden xl:hidden">
        <div className="flex space-x-2 w-full overflow-x-scroll items-center justify-between overflow-y-hidden">
          {navItems.navItems.map((item, index) => (
            <Link key={index} to={item.navLink} className="">
              <button className="bg-black !border-none !text-white text-xs w-[145px] h-[44px] px-4 py-1">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex xl:hidden items-center justify-between pt-0 border-[#E7EAF5] xl:border-[#EDEFF6]/60">
        <div
          className="flex space-x-2 space-y-0 text-[#798086] px-4 cursor-pointer"
          onClick={() =>
            dispatch({
              type: "SHOP_FILTERS_TOGGLE",
            })
          }
        >
          <AdjustmentsHorizontalIcon className="h-10 w-10" />
          <p className="select-none text-xl py-2">Filters</p>
        </div>
        <select
          id=""
          className="text-[#798086] px-4 py-2 bg-white border border-[#EDEFF6]"
        >
          <option value="Price (Low to High)">Price (Low to High)</option>
          <option value="Price (High to Low)">Price (High to Low)</option>
        </select>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-2 xl:gap-x-2 xl:gap-y-8 place-items-center">
        {products.map((product) => (
          <Product
            key={product._id}
            title={product.Title}
            _id={product._id} 
            company={product.Company} 
            purchaseInfo={product.PurchaseInfo}
            imageLinks={product.ImageLinks}
            productDepartment={departmentTitle}
            productSubDepartment={subDepartmentTitle}  // Pass sub-department to the Product component
          />
        ))}
      </section>
    </div>
  );
};

export default Products;
