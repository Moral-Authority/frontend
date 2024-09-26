import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Header from "../components/Header.jsx";
import MainHeading from "../components/ProductPageSections/MainHeading.jsx";
import MainImages from "../components/ProductPageSections/MainImages.jsx";
import ProductDescription from "../components/ProductPageSections/ProductDescription.jsx";
import ProductInfo from "../components/ProductPageSections/ProductInfo.jsx";
import RelatedProducts from "../components/ProductPageSections/RelatedProducts.jsx";
import { GET_PRODUCT_BY_ID } from "../graphql/Queries.js"; 

const ProductPage = () => {
  const { id, department, subDepartment } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id, department }, 
  });

  const TABS = {
    DESCRIPTION: "description",
    REVIEWS: "reviews",
  };
 
  const [activeTab, setActiveTab] = useState(TABS.DESCRIPTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.getProductByID;

  // Assuming we would have product.reviews or a similar field
  const hasReviews = product.reviews && product.reviews.length > 0;

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <div className="md:block">
        <Header />
      </div>

      {/* Main */}
      <div className="hidden md:block">
        <MainHeading title={product.Title} company={product.Company.name} /> 
      </div>
      {/* Content Section */}
      <section className="h-full flex flex-col md:flex-row w-full space-y-10 md:space-y-0 md:px-20 lg:px-36 md:py-10">
        {/* Left Section */}
        <MainImages imageLinks={product.ImageLinks} />
        {/* Right Section */}
        <ProductInfo  _id={id} 
            product={product}
            purchaseInfo={product.PurchaseInfo}
            productDepartment={department}/>
      </section>

      {/* Section for large screens (Desktop) */}
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
            Product Details
          </p>
          <p
            onClick={() => setActiveTab(TABS.REVIEWS)}
            className={`cursor-pointer ${
              activeTab === TABS.REVIEWS
                ? "text-black underline underline-offset-[16px]"
                : ""
            }`}
          >
            Reviews
          </p>
        </div>
        {activeTab === TABS.DESCRIPTION && <ProductDescription />}
        {activeTab === TABS.REVIEWS && (
          <div className="text-[#697383]">
            {hasReviews ? (
              <p>Reviews will be displayed here...</p>
            ) : (
              <p>No Reviews Yet!</p>
            )}
          </div>
        )}
      </section>

      {/* Section for small screens (Mobile) */}
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
          <p className="text-[#000000]/80">Reviews</p>
          <div className="text-[#697383]">
            <p className="text-sm leading-loose pt-5">
              No Reviews Yet!
              {/* <span className="text-black cursor-pointer">See more</span> */}
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="h-full flex flex-col space-y-10 w-full px-5 overflow-x-scroll md:overflow-x-hidden md:px-20 lg:px-36 py-16">
        <RelatedProducts title={product.Title} department={department} subDepartment={subDepartment}/>
      </section>
    </div>
  );
};

export default ProductPage;
