import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartEmpty } from "@heroicons/react/24/outline";
import { useMutation } from "@apollo/client";
import { TOGGLE_USER_FAV } from "../../graphql/Mutations";
import { useStateValue } from "../../utils/stateProvider/useStateValue";

const ProductCard = ({ productId, title, productDepartment, price, imageLinks }) => {
  const [{ user, favorites }, dispatch] = useStateValue();
  const isFavorite = favorites.has(productId);
  
  const [toggleUserFav] = useMutation(TOGGLE_USER_FAV, {
    variables: {
      input: {
        userId: user?.id,
        productId: productId,
        ProductDepartment: productDepartment,  
      },
    },
    onCompleted: () => {
      dispatch({
        type: "TOGGLE_FAVORITE",
        productId: productId,
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

  return (
    <div className="w-full h-[170px] flex border-2 p-2 space-x-2 border-[#EDEFF6]">
      <div className="bg-[#F6FBFF] flex w-3/4 lg:w-1/2 justify-center items-center">
        <img className="lg:w-full lg:h-full" src={imageLinks[0]} alt={title} />
      </div>
      <div className="flex pr-4 w-full pt-4 justify-between">
        <div className="flex flex-col space-y-2">
          <p className="text-xs lg:text-sm text-[#D6AD60]">Home and Goods</p>
          <p className="text-sm lg:text-base">{title}</p>
          <p className="text-[#5F646F] text-sm lg:text-base">{price}</p>
                    {/* <p className="text-[#798086] flex-col lg:flex-row flex w-full text-xs lg:text-sm">
            Approved Status:{" "}
            <span
              className={`px-2 lg:ml-1 py-1 mt-1 lg:mt-0 text-center ${
                approved
                  ? "text-[#34BF42] bg-[#2BDE1C]/10"
                  : "bg-[#FF0000]/5 text-[#FF7575]"
              }`}
            >
              {approved ? "Approved" : "Not approved"}
            </span>
          </p> */}
        </div>
        
        <div>
          <p className="text-[#798086] sm:text-xs lg:text-sm flex lg:space-x-2">
            <span className="hidden lg:block">
              {isFavorite ? "Remove from favorite" : "Add to favorite"}
            </span>
            {isFavorite ? (
              <HeartIcon
                onClick={handleToggleFavorite}
                className="text-[#FA5353] w-5 h-5 cursor-pointer"
              />
            ) : (
              <HeartEmpty
                onClick={handleToggleFavorite}
                className="w-5 h-5 cursor-pointer"
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
