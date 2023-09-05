import React from "react";
import Product from "../ShopComponents/Product";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-[#4F536C] text-xl">Related Products</h1>
      <div className="grid grid-cols-4 gap-x-48 xl:gap-x-10 overflow-x-scroll">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <Product key={index} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
