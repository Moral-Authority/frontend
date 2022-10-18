import {
  ArrowUpTrayIcon,
  CameraIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-5 py-10 sm:py-0 w-screen px-4 sm:px-0 sm:w-full">
      <div className="sm:hidden relative flex pb-4 border-b justify-center">
        <div
          onClick={() => navigate(-1)}
          className="absolute sm:hidden justify-self-start left-1"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </div>
        <p className="text-center">Add Products</p>
      </div>

      <div>
        <form className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-1">
            <label className="text-[#777D88]">Product Photos</label>

            <div className="flex items-center  h-36 justify-center space-x-20 border border-[#E3E7F4] px-4 py-2 ">
              <div className="flex space-x-2">
                <CameraIcon className="h-6 w-6 text-[#798086]" />
                <label htmlFor="proofOfMembership" className="text-[#798086]">
                  Upload product photos
                </label>
              </div>
              <label htmlFor="proofOfMembership">
                <ArrowUpTrayIcon className="h-6 w-6 text-[#798086]" />
              </label>
            </div>
            <input
              type="file"
              id="proofOfMembership"
              accept="image/*"
              className="hidden border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
              placeholder="Upload photo here"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[#777D88]">Product name</label>
            <input
              type="url"
              className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
              placeholder="Enter product name"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[#777D88]">Product description</label>
            <textarea
              rows={5}
              type="url"
              className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
              placeholder="Enter product description"
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 w-full">
            <div className="flex flex-col sm:w-1/2 space-y-1">
              <label className="text-[#777D88]">Department</label>
              <select
                className="border focus:outline-none border-[#E3E7F4] px-4 py-2 bg-white text-[#798086]
        "
              >
                <option value="Select department">Select department</option>
                <option value="Home Goods">Home Goods</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>

            <div className="flex flex-col sm:w-1/2 space-y-1">
              <label className="text-[#777D88]">Sub category</label>
              <select
                className="border focus:outline-none border-[#E3E7F4] px-4 py-2 bg-white text-[#798086]
        "
              >
                <option value="Select a sub category">
                  Select a sub category
                </option>
                <option value="Mobile">Mobile</option>
                <option value="Gaming">Gaming</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 w-full">
            <div className="flex flex-col sm:w-1/2 space-y-1">
              <label className="text-[#777D88]">Type</label>
              <select
                className="border focus:outline-none border-[#E3E7F4] px-4 py-2 bg-white text-[#798086]
        "
              >
                <option value="Select type">Select type</option>
                <option value="Type1">Type1</option>
                <option value="Type2">Type2</option>
              </select>
            </div>

            <div className="flex flex-col sm:w-1/2 space-y-1">
              <label className="text-[#777D88]">Style</label>
              <select
                className="border focus:outline-none border-[#E3E7F4] px-4 py-2 bg-white text-[#798086]
        "
              >
                <option value="Select a sub category">Select style</option>
                <option value="Style1">Style1</option>
                <option value="Style2">Style2</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 w-full">
            <div className="flex flex-col space-y-1 sm:w-1/2">
              <label className="text-[#777D88]">Price</label>
              <input
                type="url"
                className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
                placeholder="Enter product price"
              />
            </div>
            <div className="flex flex-col space-y-1 sm:w-1/2">
              <label className="text-[#777D88]">Website link</label>
              <input
                type="url"
                className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
                placeholder="Amazon, ebay, etc."
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[#777D88]">Product link</label>
            <input
              type="url"
              className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
              placeholder="Enter product link"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[#777D88]">Product company</label>
            <input
              type="url"
              className="border border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
              placeholder="Enter product company name"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[#777D88]">Certifications</label>
            <div className="flex">
              <input
                type="url"
                className="border w-4/5 border-[#E3E7F4] px-4 py-2 placeholder:text-[#777D88]/30 focus:outline-none outline-none"
                placeholder="Certification"
              />
              <button className="bg-black w-1/5 text-white peer-first:h-full px-4 py-2">
                Add
              </button>
            </div>
          </div>
          <div className="flex">
            <button className="bg-[#D6AD60] w-1/2 text-white px-8 py-2">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
