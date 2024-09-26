import React from "react";

const MainHeading = ({ title, company }) => {
  return (
    <section className="flex flex-col text-[#798086] items-center justify-center bg-[#F2F2EB] py-10 space-y-4">
      <p className="text-[#8F8E63]">{company}</p>
      <p className="text-3xl text-[#4F536C]">{title}</p> {/* Display the title */}
    </section>
  );
};

export default MainHeading;