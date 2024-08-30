import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Header from "../components/Header";
import MainHeading from "../components/ProductPageSections/MainHeading";
import MainImages from "../components/ProductPageSections/MainImages";
import ProductDescription from "../components/ProductPageSections/ProductDescription";
import ProductInfo from "../components/ProductPageSections/ProductInfo";
import RelatedProducts from "../components/ProductPageSections/RelatedProducts";
import { GET_PRODUCT_BY_ID } from "../graphql/Queries.js"; // Import the query

const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id }, // Ensure the ID is passed as a string
  });
  
  const TABS = {
    DESCRIPTION: "description",
    DELIVERY: "delivery",
  };
  const [activeTab, setActiveTab] = useState(TABS.DESCRIPTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.getProductByID;

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <div className="md:block">
        <Header />
      </div>

      {/* Main */}
      <div className="hidden md:block">
        <MainHeading title={product.Title} /> 
      </div>
      {/* Content Section */}
      <section className="h-full flex flex-col md:flex-row w-full space-y-10 md:space-y-0 md:px-20 lg:px-36 md:py-10">
        {/* Left Section */}
        <MainImages />
        {/* Right Section */}
        <ProductInfo title={product.Title} _id={id}/>
      </section>
      {/* Section for large screens */}
      <section className="h-full hidden md:flex flex-col space-y-10 w-full md:px-20 lg:px-36">
        {/* Description Nav */}
        <div className="text-[#697383]/50 flex w-full space-x-5 border-b pb-4">
          <p
            onClick={() => setActiveTab(TABS.DESCRIPTION)}
            className={`cursor-pointer ${
              activeTab === TABS.DESCRIPTION
                ? "text-black underline underline-offset-[16px]"
                : ""
            }`}
          >
            Product Description
          </p>
          <p
            onClick={() => setActiveTab(TABS.DELIVERY)}
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
      {/* Section for small screens */}
      <section className="w-full pt-5 flex md:hidden flex-col space-y-5 px-5">
        <div className="flex flex-col space-y-5">
          <p className="text-[#000000]/80">Product Description</p>
          <div className="text-[#697383]">
            <p>Product Details</p>
            <p className="text-sm leading-loose pt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500...
              <span className="text-black cursor-pointer">See more</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="text-[#000000]/80">Delivery Information</p>
          <div className="text-[#697383]">
            <p className="text-sm leading-loose pt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500...
              <span className="text-black cursor-pointer">See more</span>
            </p>
          </div>
        </div>
      </section>
      {/* Related Products */}
      <section
        className="h-full flex flex-col space-y-10 w-full px-5 overflow-x-scroll
      md:overflow-x-hidden md:px-20 lg:px-36 py-16"
      >
        <RelatedProducts />
      </section>
    </div>
  );
};

export default Product;
