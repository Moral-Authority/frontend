import React from "react";

const MainImages = ({ imageLinks }) => {
  console.log("IMAGE LINKS",imageLinks);
  return (
    <div className="w-full md:w-1/2 flex flex-col space-y-2">
      {/* Main Image */}
      <section className="bg-[#F6FBFF]">
        <img src={imageLinks[0]} className="w-full h-full object-cover" alt="product" />
      </section>
      {/* <section className="flex justify-evenly space-x-2">
        <div className="w-1/3 bg-[#F6FBFF]">
          <img src={Chair} alt="product" className="w-full" />
        </div>
        <div className="w-1/3 bg-[#F6FBFF]">
          <img src={ChairFront} alt="product" className="w-full" />
        </div>
        <div className="w-1/3 bg-[#F6FBFF]">
          <img src={ChairSide} alt="product" className="w-full" />
        </div>
      </section> */}
    </div>
  );
};

export default MainImages;
