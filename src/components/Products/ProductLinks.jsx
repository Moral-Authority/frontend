import React from "react";
import ProductLink from "./ProductLink";
import { useStateValue } from "@/utils/stateProvider/useStateValue";


const ProductLinks = () => {
  const [{ userProfile, user }] = useStateValue();

  // Assuming userProfile is an indicator of a logged-in user and user.isCompany indicates a company
  const isCompany = user && user.isCompany;

  return (
    <div
      className="flex flex-row justify-around pb-1"
      style={{
        color: "#000",
        borderBottom: "2px solid #EDEFF6",
        justifyContent: "space-between",
        padding: "0 10px",
        ...(window.innerWidth >= 720 && {
          color: "#798086",
        }),
      }}
    >
      {userProfile && (
        <>
          <ProductLink title={"Saved Products"} link="/profile/saved" />
          <ProductLink title={"Product Reviews"} link="/profile/reviews" />
        </>
      )}
      {isCompany && (
        <>
          <ProductLink
            title={"Add a Product"}
            className="hidden sm:block"
            link="/add-product"
          />
          <ProductLink title={"Added Products"} link="/added" />
        </>
      )}
    </div>
  );
};

export default ProductLinks;