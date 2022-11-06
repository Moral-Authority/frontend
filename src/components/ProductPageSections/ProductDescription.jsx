import React from "react";

const ProductDescription = () => {
  return (
    <div className="w-full flex justify-between space-x-24 items-center">
      <section className="items-start flex flex-col w-1/2 space-y-3">
        <p className="text-[#697383]">Product Details</p>
        <p className="leading-loose text-sm text-[#758BAE]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{" "}
        </p>
      </section>
      <section className="items-start flex flex-col w-1/2 space-y-3">
        <p className="text-[#697383]">Product Features</p>
        <p className="leading-loose text-sm text-[#758BAE]">
          <ul className="flex flex-col space-y-2 text-sm">
            <li className="flex space-x-3 items-center">
              <div className="h-2 w-2 bg-[#D6DDEB]"></div>
              <span>Lorem Ipsum is simply dummy text of the printing </span>
            </li>
            <li className="flex space-x-2 items-center">
              <div className="h-2 w-2 bg-[#D6DDEB]"></div>
              <span>Industry's standard dummy text ever since the 1500s, </span>
            </li>
            <li className="flex space-x-2 items-center">
              <div className="h-2 w-2 bg-[#D6DDEB]"></div>
              <span>the printing and typesetting industry. Lorem Ipsum </span>
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default ProductDescription;
