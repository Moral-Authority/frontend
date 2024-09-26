import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { TOGGLE_USER_FAV } from '../../graphql/Mutations';
import { useStateValue } from "../../utils/stateProvider/useStateValue";

const Product = ({ title, _id, company, imageLinks, purchaseInfo, productDepartment, productSubDepartment }) => {
  const [{ user, favorites }, dispatch] = useStateValue();
  const isFavorite = favorites.has(_id);

  const [toggleUserFav] = useMutation(TOGGLE_USER_FAV, {
    variables: {
      input: {
        userId: user?.id,
        productId: _id,
        ProductDepartment: productDepartment,
          // Pass the department here
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

  return (
<div className="w-64 md:w-60 sm:w-56 h-90 lg:h-90 xl:h-90 relative flex flex-col border-1 border-white overflow-hidden shadow-lg hover:shadow-xl rounded-lg">
  <div className="flex z-20 justify-between absolute top-1 sm:top-4 lg:top-8 w-11/12 -ml-1 lg:-ml-2">
    <div className="!text-white text-xs sm:text-sm !border-none py-1 px-4 z-" style={{ backgroundColor: '#0C0F18', border: '2px solid #0C0F18', color: '#B4B5B5' }}>
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

  {/* Image Section */}
  <div className="w-full z-0 relative h-full group bg-white items-center flex justify-center rounded-lg">
    <img src={imageLinks[0]} className="w-full h-full object-contain" alt={title} />
    <Link
      className="text-white absolute w-11/12 hidden group-hover:block bottom-5 bg-[#8F8E63] h-12"
      to={`/product/${productDepartment}/${productSubDepartment}/${_id}`}
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

  {/* Info Section */}
  <div className="flex flex-col bg-white px-2 sm:px-5">
    <p className="text-xs sm:text-sm py-2 sm:py-2 px-3 sm:px-5 truncate">{title}</p>

    {/* Company Name and Price in the Same Row */}
    <div className="flex justify-between items-center px-3 sm:px-5 py-1">
      <p className="text-xs sm:text-s text-[#8F8E63]">{company.name}</p>
      <p className="text-sm sm:text-lg text-black font-medium">${purchaseInfo[0].Price}</p>
    </div>
  </div>
</div>
  );
};

export default Product;
