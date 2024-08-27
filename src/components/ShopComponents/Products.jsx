import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../graphql/Queries';
import Product from "./Product";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import navItems from "@/utils/testAPIs/navItems.json";

const Products = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const [, dispatch] = useStateValue();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex space-y-10 flex-col h-full w-full xl:w-3/4">
      <section className="flex items-center justify-between border-b pb-4 border-[#E7EAF5] xl:border-[#EDEFF6]/60">
        <h1 className="text-xl sm:text-2xl">Home Goods</h1>
        <select
          id=""
          className="text-[#798086] px-4 py-2 bg-white border border-[#EDEFF6]"
        >
          <option value="Price (Low to High)">Price (Low to High)</option>
          <option value="Price (High to Low)">Price (High to Low)</option>
        </select>
      </section>

      <section className="flex flex-col w-full space-y-5 xl:hidden">
        <div className="flex space-x-2 w-full overflow-x-scroll items-center justify-between overflow-y-hidden">
          {navItems.navItems.map((item, index) => (
            <Link key={index} to={item.navLink} className="">
              <button className="bg-black !border-none !text-white text-xs w-[145px] h-[44px] px-4 py-1">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
        <div
          className="flex space-x-2 text-[#798086] cursor-pointer"
          onClick={() =>
            dispatch({
              type: "SHOP_FILTERS_TOGGLE",
            })
          }
        >
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
          <p className="select-none">Filters</p>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-2 xl:gap-x-2 xl:gap-y-8 place-items-center">
        {data.getAllProducts.map((product) => (
          <Product
            key={product._id}
            title={product.Title}
            _id={product._id} // Pass the product ID
          />
        ))}
      </section>
    </div>
  );
};

export default Products;
