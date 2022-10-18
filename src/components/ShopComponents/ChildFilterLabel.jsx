import React from "react";

const ChildFilterLabel = ({ label }) => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="w-[5px] h-[5px] bg-[#D9D9D9]"></div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default ChildFilterLabel;
