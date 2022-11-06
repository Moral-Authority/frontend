import React, { useState } from "react";
import Header from "../components/Header";
import MainHeading from "../components/ProductPageSections/MainHeading";
import MainImages from "../components/ProductPageSections/MainImages";
import ProductDescription from "../components/ProductPageSections/ProductDescription";
import ProductInfo from "../components/ProductPageSections/ProductInfo";

const Product = () => {
  const TABS = {
    DESCRIPTION: "description",
    DELIVERY: "delivery",
  };
  const [activeTab, setactiveTab] = useState(TABS.DESCRIPTION);
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      {/* Main */}
      <MainHeading />
      {/* Content Section */}
      <section className="h-full flex w-full px-36 py-10">
        {/* Left Section */}
        <MainImages />
        {/* Right Section */}
        <ProductInfo />
      </section>
      <section className="h-full flex flex-col space-y-10 w-full px-36">
        {/* Description Nav */}
        <div className="text-[#697383]/50 flex w-full space-x-5 border-b pb-4">
          <p
            onClick={() => setactiveTab(TABS.DESCRIPTION)}
            className={`cursor-pointer ${
              activeTab === TABS.DESCRIPTION
                ? "text-black underline underline-offset-[16px]"
                : ""
            }`}
          >
            Product Description
          </p>
          <p
            onClick={() => setactiveTab(TABS.DELIVERY)}
            className={`cursor-pointer ${
              activeTab === TABS.DELIVERY
                ? "text-black underline underline-offset-[16px]"
                : ""
            }`}
          >
            Delivery Information
          </p>
        </div>
        {activeTab === TABS.DESCRIPTION && <ProductDescription />}
      </section>
      {/* Related Products */}
      <section></section>
    </div>
  );
};

export default Product;
