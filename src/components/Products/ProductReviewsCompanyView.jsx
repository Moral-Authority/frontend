import React from "react";
import CommentCard from "./CommentCard";

const ProductReviewsCompanyView = ({ approved }) => {
  return (
    <div className="w-full h-full flex flex-col border-2 p-2 border-[#EDEFF6]">
      <div className="flex space-x-2">
        <div className="bg-[#F6FBFF] flex w-3/4 lg:w-1/2 justify-center items-center">
          <img className=" lg:w-full lg:h-full" src="" alt="" />
        </div>
        <div className="flex pr-4 w-full pt-4 justify-between">
          <div className="flex  flex-col space-y-2">
            <p className="text-xs lg:text-sm text-[#D6AD60]">Home and Goods</p>
            <p className="text-sm lg:text-base">Luxary Modern Chair</p>
            <p className="text-[#5F646F] text-sm lg:text-base">$350</p>
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
        </div>
      </div>
      <div className="border-t m-4 py-5 flex flex-col space-y-10">
        <CommentCard
          rating={5}
          profilePicture={"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"}
          name={"Brandon Tailor"}
          comment={"I love this product. Highly recommended!"}
          country={"United States"}
          time={"2 weeks ago"}
        />
        <CommentCard
          rating={5}
          profilePicture={"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"}
          name={"Bella Nappi"}
          comment={"I love this product. Highly recommended!"}
          country={"United States"}
          time={"2 weeks ago"}
        />
      </div>
    </div>
  );
};

export default ProductReviewsCompanyView;
