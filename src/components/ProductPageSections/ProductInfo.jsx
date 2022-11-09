import React, { useState } from "react";
import ProfilePicture from "images/profilePicture.png";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import Award from "images/award.png";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const [liked, setliked] = useState(false);

  return (
    <div className="w-full md:w-1/2 flex flex-col px-5 md:px-10 items-start">
      {/* Upper Section */}
      <section className="flex flex-col pb-3">
        <p className="text-sm text-[#D6AD60]">Home Interior Design</p>
        <p className="text-[#4F536C] mt-1">
          Luxurious Home Interor Design Chairs
        </p>
        <div className="flex flex-col-reverse md:flex-col">
          <p className="text-[#758BAE] leading-loose text-sm mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
          <div className="flex justify-between mt-3 items-center border-b pb-3">
            <p className="text-[#5F646F] text-xl font-semibold leading-5">
              $350
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
                <Link to="/profile">emilia_alexandra</Link>
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
                onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
              >
                -
              </button>
              <input
                min={0}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                type="number"
                className="outline-none focus:border-none focus:outline-none border-none w-1/6
                  flex-1 text-center appearance-none text-[#697383]"
              />
              <button
                className="text-[#DBE1EA] text-xl"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="px-12 py-3 bg-[#D6AD60]">Buy Now</button>
            <button
              onClick={() => setliked(!liked)}
              className="px-4 py-2 hidden md:block border"
            >
              {liked ? (
                <HeartFilled className="h-6 w-6 text-red-500" />
              ) : (
                <HeartIcon className="h-6 w-6 text-[#DBE1EA]" />
              )}
            </button>
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
          <SocialIcon
            url="https://youtube.com"
            bgColor="#697383"
            style={{ height: "28px", width: "28px" }}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
