import React, { useState } from "react";
import ProfilePicture from "images/profilePicture.png";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import Award from "images/award.png";
import { useMutation } from "@apollo/client";
import { TOGGLE_USER_FAV } from "../../graphql/Mutations";
import { useStateValue } from "@/utils/stateProvider/useStateValue";

const ProductInfo = ({ title, _id }) => {
  const [{ user, favorites }, dispatch] = useStateValue();
    // const [{ userProfile }] = useStateValue();

  // Check if this product is a favorite
  const isFavorite = favorites.has(_id);

  const [toggleUserFav] = useMutation(TOGGLE_USER_FAV, {
    variables: {
      request: {
        userId: user?.id,
        productId: _id,
      },
    },
    onCompleted: () => {
      // Toggle favorite status in the global state
      dispatch({
        type: "TOGGLE_FAVORITE",
        productId: _id,
      });
    },
    onError: (error) => {
      console.error("Error toggling favorite:", error);
    },
  });

  const handleToggleFavorite = () => {
    if (user) {
      console.log("Toggling favorite with userId:", user.id, "and productId:", _id);
      toggleUserFav();
    } else {
      console.log("User is not logged in");
    }
  };  

  return (
    
    <div className="w-full md:w-1/2 flex flex-col px-5 md:px-10 items-start">
      {/* Upper Section */}
      <section className="flex flex-col pb-3">
        <p className="text-sm text-[#D6AD60]">Company Name</p>
        <p className="text-[#4F536C] mt-1">{title}</p>
        <div className="flex flex-col-reverse md:flex-col">
          <p className="text-[#758BAE] leading-loose text-sm mt-5">
            Product Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quae blanditiis ipsa ducimus perspiciatis pariatur, voluptatum ab, quas facere sequi quod adipisci laborum expedita eaque voluptatibus velit omnis quidem dolorem.
          </p>
          <div className="flex justify-between mt-3 items-center border-b pb-3">
            <p className="text-[#5F646F] text-xl font-semibold leading-5">
              $Price
            </p>
            <div className="flex space-x-1 items-center">
              <div className="rounded-full w-10 h-10 bg-[#FBF7EC]">
                <img
                  src={ProfilePicture}
                  alt="emilia"
                  className="w-full h-full"
                />
              </div>
              <p className="text-xs text-[#D6AD60] underline underline-offset-4">
                <Link to="/profile">Bcorp Certified</Link>
              </p>
              <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
            </div>
          </div>
        </div>
      </section>
      {/* Lower Section */}
      <section className="flex flex-col py-4 space-y-5">
        <div className="flex md:flex-col space-x-5 md:space-x-0 md:space-y-5">
          <div className="flex md:space-x-5 items-center">
            <label className="text-[#697383] text-sm hidden md:block">
              Quantity:
            </label>
            <div className="py-3 md:py-1 px-2 border w-20 flex justify-between items-center">
              <button
                className="text-[#DBE1EA] text-xl"
              >
                -
              </button>
              <input
                min={0}
                type="number"
                className="outline-none focus:border-none focus:outline-none border-none w-1/6
                  flex-1 text-center appearance-none text-[#697383]"
              />
              <button
                className="text-[#DBE1EA] text-xl"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="px-12 py-3 bg-[#D6AD60]">Buy Now</button>
            {user && (
              <button
                onClick={handleToggleFavorite}
                className="px-4 py-2 hidden md:block border"
              >
                {isFavorite ? (
                  <HeartFilled className="h-6 w-6 text-red-500" />
                ) : (
                  <HeartIcon className="h-6 w-6 text-[#DBE1EA]" />
                )}
              </button>
            )}
          </div>
        </div>
        <p className="md:hidden pt-5 underline underline-offset-4 text-[#000000]/80">
          Certificates
        </p>
        <div className="flex space-x-2 items-center text-[#697383] text-sm">
          <div className=" h-10 w-10">
            <img
              src={Award}
              alt="award"
              className="w-full h-full object-cover"
            />
          </div>
          <p>black owned</p>
        </div>
        <div className="flex space-x-4 items-center text-[#697383] text-sm">
          <div className=" h-10 w-10">
            <img
              src={Award}
              alt="award"
              className="w-full h-full object-cover"
            />
          </div>
          <p>women owned</p>
        </div>
        <div className="flex space-x-4 px-2">
          <SocialIcon
            url="https://facebook.com"
            bgColor="#697383"
            style={{ height: "28px", width: "28px" }}
          />
          <SocialIcon
            url="https://twitter.com"
            bgColor="#697383"
            style={{ height: "28px", width: "28px" }}
          />
          <SocialIcon
            url="https://instagram.com"
            bgColor="#697383"
            style={{ height: "28px", width: "28px" }}
          />
          <img src="https://res.cloudinary.com/dxm6doeqd/image/upload/e_background_removal/c_crop,w_90,h_90,ar_1:1,f_png,e_improve,e_sharpen/v1675104249/logos-certifications/r6ynnwqatym7h6gmjjp6.png" 
          alt="certified gluten free" className="h-20 w-20 object-cover" />
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
