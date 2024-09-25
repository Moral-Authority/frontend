import { FunnelIcon } from "@heroicons/react/24/outline"; // Use a filter icon from Heroicons
import { useStateValue } from "@/utils/stateProvider/useStateValue"; // Access the global state

const SortProducts = ({ sortOption, setSortOption, products, setSortedProducts }) => {
  const [{ shopFiltersToggle }, dispatch] = useStateValue(); // Get the current toggle state and dispatch function

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

  // Dispatch to toggle the filters on mobile view
  const toggleFilters = () => {
    dispatch({ type: "TOGGLE_SHOP_FILTERS" });
  };

  return (
    <div className="flex items-center px-4 justify-between w-full">
      {/* Mobile Filter Button */}
      <button
        className="xl:hidden p-2 border border-gray-300 rounded-lg"
        onClick={toggleFilters}
      >
        <FunnelIcon className="h-6 w-6 text-gray-600" />
      </button>

      {/* Sort Products Dropdown */}
      <select
        className="text-[#798086] px-4 py-2 bg-white border border-[#EDEFF6 ml-auto rounded-md"
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="Price (Low to High)">Price (Low to High)</option>
        <option value="Price (High to Low)">Price (High to Low)</option>
      </select>
    </div>
  );
};

export default SortProducts;
