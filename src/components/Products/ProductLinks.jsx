import React from "react";
import ProductLink from "./ProductLink";

const ProductLinks = () => {
  return (
    <div
      className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 justify-between pb-1 text-black
     sm:text-[#798086] sm:border-b-2 border-b-[#EDEFF6]/50"
    >
      <ProductLink
        title={"Add a Product"}
        className="hidden sm:block"
        link="add-product"
      />
      <ProductLink title={"Added Products"} link="added" />
      <ProductLink title={"Favorited Products"} link="favorited" />
      <ProductLink title={"Product Reviews"} link="products-reviews" />
    </div>
  );
};

export default ProductLinks;
