import React, { useState } from "react"; // Add useState here
import ProfilePicture from "images/profilePicture.png";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/24/solid";
import { useMutation } from "@apollo/client";
import { TOGGLE_USER_FAV } from "../../graphql/Mutations";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarFilled } from "@heroicons/react/24/solid";

const ProductInfo = ({ _id, product, productDepartment }) => {
  const [{ user, favorites }, dispatch] = useStateValue();
  const isFavorite = favorites.has(_id);
  console.log("PRODUCT INFO Product Department: ", productDepartment);
  const [toggleUserFav] = useMutation(TOGGLE_USER_FAV, {
    variables: {
      input: {
        userId: user?.id,
        productId: _id,
        ProductDepartment: productDepartment, 
      },
    },
    onCompleted: () => {
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
      toggleUserFav();
    } else {
      console.log("User is not logged in");
    }
  };

  const [rating, setrating] = useState(0);

  return (
    <div className="w-full md:w-1/2 flex flex-col px-5 md:px-10 items-start">
      <section className="flex flex-col min-w-full">
        <p className="text-lg text-[#8F8E63]">{product.Company.name}</p>
        <p className="text-[#4F536C] mt-1 pb-3 mt-3">{product.Title}</p>
        <div className="flex space-x-2 border-b  pb-3">
                {Array(5)
                  .fill(0)
                  .map((item, index) =>
                    index + 1 <= rating ? (
                      <StarFilled
                        key={index}
                        onClick={() => setrating(index + 1)}
                        className="h-5 w-5 text-[#FFB33E]"
                      />
                    ) : (
                      <StarIcon
                        key={index}
                        onClick={() => setrating(index + 1)}
                        className="h-5 w-5"
                      />
                    )
                  )}
              </div>
        <div className="flex flex-col-reverse md:flex-col">
        <div className="flex flex-col w-full space-y-5 ml-6 pt-5">
        </div>
          <p className="text-[#758BAE] leading-loose text-sm mt-5 min-w-full">
            {product.Description} DESCRIPTION LOREM IPSUM  DESCRIPTION LOREM IPSUM  DESCRIPTION LOREM IPSUM  
            DESCRIPTION LOREM IPSUM  DESCRIPTION LOREM IPSUM  
            DESCRIPTION LOREM IPSUM  DESCRIPTION LOREM IPSUM  
            DESCRIPTION LOREM IPSUM  DESCRIPTION LOREM IPSUM  
          </p>
          <div className="flex justify-between mt-3 items-center border-b pb-3">
            <p className="text-[#5F646F] leading-5">
            <p className="text-[#5F646F] text-xl font-semibold leading-5">
              ${product.PurchaseInfo[0].Price}
            </p>
            </p>
            <div className="flex space-x-1 items-center">
            <a href={product.PurchaseInfo[0].Link} target="_blank" rel="noopener noreferrer">
              <button className="text-white px-6 py-3 bg-[#8F8E63]">
                Buy From Brand
              </button>
            </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-4 space-y-5">
        <div className="flex md:flex-col space-x-0 space-y-0">
          <div className="flex space-x-4">
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

        <div className="flex space-x-4 items-center">
          <div className="flex space-x-1 items-center">
            <div className="rounded-full w-10 h-10 bg-[#FBF7EC]">
              {/* <img src={ProfilePicture} alt="emilia" className="w-full h-full" /> */}
            </div>
            <p className="text-xs text-[#D6AD60] underline underline-offset-4">
              <Link to="/profile">Black Owned</Link>
            </p>
            <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
          </div>
          <div className="flex space-x-1 items-center">
            <div className="rounded-full w-10 h-10 bg-[#FBF7EC]">
              {/* <img src={ProfilePicture} alt="emilia" className="w-full h-full" /> */}
            </div>
            <p className="text-xs text-[#D6AD60] underline underline-offset-4">
              <Link to="/profile">Women Owned</Link>
            </p>
            <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
          </div>
          <div className="flex space-x-1 items-center">
            <div className="rounded-full w-10 h-10 bg-[#FBF7EC]">
              {/* <img src={ProfilePicture} alt="emilia" className="w-full h-full" /> */}
            </div>
            <p className="text-xs text-[#D6AD60] underline underline-offset-4">
              <Link to="/profile">Bcorp Certified</Link>
            </p>
            <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
