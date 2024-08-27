import React from "react";

const MainHeading = ({ title }) => {
  return (
    <section className="flex flex-col text-[#798086] items-center justify-center bg-[#FBF7EC] py-10 space-y-4">
      <p className="text-[#D6AD60]">Product Category</p>
      <p className="text-3xl text-[#4F536C]">{title}</p> {/* Display the title */}
    </section>
  );
};

export default MainHeading;
