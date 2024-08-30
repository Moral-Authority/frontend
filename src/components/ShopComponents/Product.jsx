import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Chair from "images/chair.png"; // Assuming the image stays the same for now
import { useMutation } from '@apollo/client';
import { TOGGLE_USER_FAV } from '../../graphql/Mutations';
import { useStateValue } from "../../utils/stateProvider/useStateValue"; // Adjust the path as needed

const Product = ({ title, _id, company, imageLinks, purchaseInfo }) => {
  const [{ user, favorites }, dispatch] = useStateValue(); // Get the user and favorites state
  // Check if this product is a favorite
  const isFavorite = favorites.has(_id);
  console.log("imageLinks:", imageLinks);
  console.log("purchaseInfo:", purchaseInfo);
  console.log("imagelink", imageLinks[0]);
  console.log("purchase", purchaseInfo[0].Price);
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
      toggleUserFav();
    } else {
      console.log("User is not logged in");
    }
  };

  return (
    <div className="w-44 lg:w-56 xl:w-64 h-64 lg:h-80 xl:h-96 p-1 lg:p-2 relative flex flex-col border-2 border-[#EDEFF6]">
      <div className="flex z-20 justify-between absolute top-5 lg:top-8 w-11/12 -ml-1 lg:-ml-2">
        <div className="!text-white text-sm bg-black !border-none py-1 px-4 z-10">
          New
        </div>
        {user && (
          isFavorite ? (
            <HeartFilled
              onClick={handleToggleFavorite}
              className="h-6 text-red-500 w-6 cursor-pointer"
            />
          ) : (
            <HeartIcon
              onClick={handleToggleFavorite}
              className="h-6 w-6 cursor-pointer"
            />
          )
        )}
      </div>
      <div className="w-full z-0 relative h-3/4 group bg-[#F6FBFF] items-center flex justify-center">
        <img src={Chair} className="w-full h-full object-contain" alt={title} />
        <Link
          className="text-black absolute w-11/12 hidden group-hover:block bottom-5 bg-[#D6AD60] h-12"
          to={`/product/${_id}`} // Use the product ID in the URL
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
            className="w-full h-full"
          >
            View Product
          </motion.button>
        </Link>
      </div>
      <div className="flex flex-col pb-5">
        <p className="text-xs text-[#D6AD60]">{company.name}</p> {/* Display company name */}
        <p className="text-sm sm:text-base">{title}</p>
        <p className="text-gray-600 font-medium">{purchaseInfo[0].Price}</p> {/* Keeping price static for now */}
      </div>
    </div>
  );
};

export default Product;
