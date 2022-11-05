import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarFilled } from "@heroicons/react/24/solid";
import UsFlag from "images/us-flag.png";

const CommentCard = ({
  rating,
  profilePicture,
  name,
  time,
  comment,
  country,
}) => {
  return (
    <div className="w-full flex">
      <div className="w-16 h-16">
        <img
          src={profilePicture}
          alt="user-image"
          className="rounded-full w-full h-full object-cover border"
        />
      </div>
      <div className="flex px-5 flex-col justify-center spcace-y-1 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <p className="">{name}</p>
            <p className="flex space-x-1">
              {Array(5)
                .fill(0)
                .map((item, index) =>
                  index + 1 <= rating ? (
                    <StarFilled
                      key={index}
                      className={`h-5 w-5 text-[#FFB33E]`}
                    />
                  ) : (
                    <StarIcon key={index} className={`h-5 w-5`} />
                  )
                )}
            </p>
            <p className="text-[#FFB33E]">{rating}</p>
          </div>
          <p className="text-[#6B6D72]/60 text-sm justify-self-end">{time}</p>
        </div>
        <div className="flex space-x-2 items-center">
          <img src={UsFlag} alt="us-flag" className="h-8 w-8" />
          <p className="text-[#6B6D72] text-xs">{country}</p>
        </div>
        <p className="text-[#6B6D72] text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
