import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarFilled } from "@heroicons/react/24/solid";

const CommentCardUserProfileView = ({
  rating,
  profilePicture,
  name,
  time,
  comment,
  country,
}) => {
  return (
    <div className="w-full flex">
      <div className="w-12 h-12 sm:w-16 sm:h-16">
        <br></br>
        Product 
        <br></br>
        Image
      </div>
      <div className="flex px-5 flex-col justify-center space-y-1 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center pt-4 space-x-1 md:space-x-3">
            <p className="text-sm md:text-base text-[#FFB33E]">Product Title</p>
            <p className="hidden md:flex space-x-1">
              {Array(5)
                .fill(0)
                .map((item, index) =>
                  index + 1 <= rating ? (
                    <StarFilled
                      key={index}
                      className={`h-3 w-3 md:h-5 md:w-5 text-[#FFB33E]`}
                    />
                  ) : (
                    <StarIcon key={index} className={`h-3 w-3 md:h-5 md:w-5`} />
                  )
                )}
            </p>
          </div>
          <p className="text-[#6B6D72]/60 text-xs md:text-sm justify-self-end hidden md:flex">
            Date
          </p>
          <p className="flex md:hidden items-center space-x-2">
            <StarFilled className="w-4 h-4 text-[#FFB33E]" />
            <span className="text-sm text-[#FFB33E]">rating</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#6B6D72]/60 text-xs md:text-sm justify-self-end flex md:hidden">
            Date
          </p>
        </div>
        <p className="text-[#6B6D72] text-xs md:text-sm">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum loremIpsum</p>
      </div>
    </div>
  );
};

export default CommentCardUserProfileView;
