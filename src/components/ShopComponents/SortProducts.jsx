// SortProducts.jsx
import React from "react";

const SortProducts = ({ sortOption, setSortOption, products, setSortedProducts }) => {
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    // Sorting logic
    const sortedProducts = [...products];
    if (option === "Price (Low to High)") {
      sortedProducts.sort((a, b) => a.PurchaseInfo[0].Price - b.PurchaseInfo[0].Price);
    } else if (option === "Price (High to Low)") {
      sortedProducts.sort((a, b) => b.PurchaseInfo[0].Price - a.PurchaseInfo[0].Price);
    }
    setSortedProducts(sortedProducts);
  };

  return (
    <select
      className="text-[#798086] px-4 py-2 bg-white border border-[#EDEFF6]"
      value={sortOption}
      onChange={handleSortChange}
    >
      <option value="Price (Low to High)">Price (Low to High)</option>
      <option value="Price (High to Low)">Price (High to Low)</option>
    </select>
  );
};

export default SortProducts;
