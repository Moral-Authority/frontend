import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../Products/Product";

const AddedProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-5 py-10 sm:py-0 w-screen px-4 sm:px-0 sm:w-full">
      <div className="sm:hidden relative flex pb-4 border-b justify-center">
        <div
          onClick={() => navigate(-1)}
          className="absolute sm:hidden justify-self-start left-1"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </div>
        <p className="text-center">Added Products</p>
      </div>
      <div className="w-full flex justify-center sm:justify-end">
        <Link to={"/profile/add-product"} className="w-full sm:w-fit">
          <button className="px-4 py-2 lg:px-6 lg:py-3 bg-[#D6AD60] text-black w-full">
            <span className="hidden sm:inline">+</span> Add a product
          </button>
        </Link>
      </div>
      <ProductCard approved={true} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
      <ProductCard approved={false} favorite={false} />
    </div>
  );
};

export default AddedProducts;
