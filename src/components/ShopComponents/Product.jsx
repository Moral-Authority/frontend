import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Chair from "images/chair.png";

const Product = ({ index }) => {
  const [liked, setliked] = useState(false);
  return (
    <div className="w-[174px] lg:w-[261px] products-box relative p-1 lg:p-2 flex flex-col h-[234px] lg:h-[355px] border-2 border-[#EDEFF6]">
      <div className="flex z-20 justify-between absolute top-5 lg:top-8 w-11/12 -ml-1 lg:-ml-2">
        <div className="text-white text-sm bg-black py-1 px-4">New</div>
        {liked ? (
          <HeartFilled
            onClick={() => setliked(!liked)}
            className="h-6 text-red-500 w-6 cursor-pointer"
          />
        ) : (
          <HeartIcon
            onClick={() => setliked(!liked)}
            className="h-6 w-6 cursor-pointer"
          />
        )}
      </div>
      <div
        key={index}
        className="w-full z-0 relative h-3/4 group bg-[#F6FBFF] items-center flex justify-center"
      >
        <img src={Chair} className="chair" alt="" />
        <Link
          className="text-black absolute w-11/12 hidden group-hover:block bottom-5 bg-[#D6AD60] h-12"
          key={index}
          to="/product"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            className="w-full h-full"
          >
            View Product
          </motion.button>
        </Link>
      </div>
      <div className="flex flex-col p-2">
        <p className="text-xs text-[#D6AD60]">Home and Goods</p>
        <p className="text-sm sm:text-base">Luxary Modern Chair</p>
        <p className="text-[#5F646F] font-semibold text-xs sm:text-sm">$350</p>
      </div>
    </div>
  );
};

export default Product;
