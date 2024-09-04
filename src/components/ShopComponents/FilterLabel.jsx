import React from "react";


const FilterLabel = ({ label }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-[#D9D9D9] w-4 h-4" />
      <span>{label}</span>
    </div>
  );
};

export default FilterLabel;
