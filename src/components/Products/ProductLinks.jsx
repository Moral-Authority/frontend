import React from "react";
import ProductLink from "./ProductLink";
import { useStateValue } from "@/utils/stateProvider/useStateValue";

const ProductLinks = () => {
  const [{ userProfile, user }] = useStateValue();

  // Assuming userProfile is an indicator of a logged-in user and user.isCompany indicates a company
  const isCompany = user && user.isCompany;

  return (
    <div
      className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 justify-evenly pb-1 text-black
     sm:text-[#798086] sm:border-b-2 border-b-[#EDEFF6]/50"
    >
      {userProfile && (
        <>
          <ProductLink title={"Saved Products"} link="favorited" />
          <ProductLink title={"Product Reviews"} link="products-reviews" />
        </>
      )}
      {isCompany && (
        <>
          <ProductLink
            title={"Add a Product"}
            className="hidden sm:block"
            link="add-product"
          />
          <ProductLink title={"Added Products"} link="added" />
        </>
      )}
    </div>
  );
};

export default ProductLinks;
