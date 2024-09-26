import React, { useState } from "react"; // Add useState here
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
          <div className="flex space-x-2 border-b pb-3">
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
            <div className="flex flex-col w-full space-y-5 ml-6 pt-5"></div>
            <p className="text-[#758BAE] leading-loose text-sm mt-4 mb-4 min-w-full">
              {product.Description}
            </p>
            <div className="flex flex-col md:flex-row justify-between mt-5 items-center border-b pb-3 space-y-3 md:space-y-4">
              <p className="text-[#5F646F] text-xl font-sm leading-5">
                ${product.PurchaseInfo[0].Price}
              </p>
              <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-2 md:flex-row items-center">
                <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                  <button className="text-white px-6 py-3 bg-[#8F8E63]">
                    Buy From Amazon
                  </button>
                </a>
                <a href={product.PurchaseInfo[0].BrandLink} target="_blank" rel="noopener noreferrer">
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
          <div className="flex" style={{ marginTop: '50%' }}>
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

        <div className="flex items-center" style={{ marginTop: '50%' }}>
          <div className="flex space-x-1 items-center">
            <div className="rounded-full w-10 h-10 bg-[#FBF7EC]">
              {/* <img IMAGE PLACE HOLDER" /> */}
            </div>
            <p className="text-xs text-[#D6AD60] underline underline-offset-4">
              <Link to="/profile">Black Owned</Link>
            </p>
            <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
          </div>
          <div className="flex space-x-1 items-center">
            <div className="rounded-full w-10 h-10 bg-[#FBF7EC]">
              {/* <img IMAGE PLACE HOLDER" /> */}
            </div>
            <p className="text-xs text-[#D6AD60] underline underline-offset-4">
              <Link to="/profile">Women Owned</Link>
            </p>
            <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
          </div>
          <div className="flex space-x-1 items-center">
            <div className="rounded-full w-10 h-10 bg-[#FBF7EC]">
              {/* <img IMAGE PLACE HOLDER" /> */}
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
