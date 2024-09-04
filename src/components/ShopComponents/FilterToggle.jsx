import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const FilterToggle = ({ label }) => {
  return (
    <div className="flex items-center space-x-2">
      <PlayIcon className="text-[#D9D9D9] w-4 h-4" />
      <span>{label}</span>
    </div>
  );
};

export default FilterToggle;
