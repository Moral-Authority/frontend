import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "../Products/Product";

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
      <div className="w-full flex justify-end">
        <Link to={"/profile/add-product"}>
          <button className="px-6 py-3 bg-[#D6AD60] text-black">
            + Add a product
          </button>
        </Link>
      </div>
      <Product approved={true} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
      <Product approved={false} favorite={false} />
    </div>
  );
};

export default AddedProducts;
