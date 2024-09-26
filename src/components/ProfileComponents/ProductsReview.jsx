import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductReviewsCompanyView from "../Products/ProductReviewsCompanyView";

const ProductsReview = () => {
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
        <p className="text-center">Product Reviews</p>
      </div>
      <div className="w-full h-full">
        <div className="flex flex-col space-y-5">
          <ProductReviewsCompanyView approved={true} />
          <ProductReviewsCompanyView approved={true} />
        </div>
      </div>
    </div>
  );
};

export default ProductsReview;
