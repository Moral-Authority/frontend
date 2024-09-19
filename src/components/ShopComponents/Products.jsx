import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT } from "@/graphql/Queries";
import Product from "./Product";
import { useStateValue, actionTypes } from "@/utils/stateProvider/useStateValue";
import { useLocation } from "react-router-dom";
import navItems from "@/utils/testAPIs/navItems.json";
import { Link } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const Products = () => {
  const [{ filteredProducts, filtered }, dispatch] = useStateValue();
  const location = useLocation();
  const departmentTitle = location.state?.departmentTitle || "Home & Garden";
  const subDepartmentTitle =
    location.state?.subDepartmentTitle || "Cleaning Supplies";

  const [sortOption, setSortOption] = useState("Price (Low to High)");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Define how many products per page

  // Fetch products by sub-department from the API
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT, {
    variables: { department: departmentTitle, subDepartment: subDepartmentTitle },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error loading products. Please try again later.</p>;

  // Determine which products to display (filtered or fetched)
  let products = [];
  if (filtered) {
    products = filteredProducts && filteredProducts.length > 0 ? filteredProducts : [];
  } else if (data?.getAllProductsBySubDepartment?.length > 0) {
    products = data.getAllProductsBySubDepartment;
  }

  if (products.length === 0) {
    return filtered ? <p>No products found.</p> : <p>Coming soon!</p>;
  }

  // Sorting logic
  const sortProducts = (option) => {
    const sortedProducts = [...products];
    if (option === "Price (Low to High)") {
      sortedProducts.sort((a, b) => a.PurchaseInfo[0].Price - b.PurchaseInfo[0].Price);
    } else if (option === "Price (High to Low)") {
      sortedProducts.sort((a, b) => b.PurchaseInfo[0].Price - a.PurchaseInfo[0].Price);
    }
    return sortedProducts;
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = sortProducts(sortOption);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Render pagination buttons with arrow navigation
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 border ${i === currentPage ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 border bg-white text-black"
        >
          &lt; Prev
        </button>
        {pages}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border bg-white text-black"
        >
          Next &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="flex space-y-5 flex-col border-b pb-10 h-full w-full xl:w-3/4">
      {/* Mobile Navigation */}
      <section className="flex flex-col w-full space-y-5 sm:hidden md:hidden lg:hidden xl:hidden">
        <div className="flex space-x-2 w-full overflow-x-scroll items-center justify-between overflow-y-hidden">
          {navItems?.navItems.map((item, index) => (
            <Link key={index} to={item.navLink} className="">
              <button className="bg-black !border-none !text-white text-xs w-[145px] h-[44px] px-4 py-1">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* Filter and Sort Options for Mobile */}
      <section className="flex xl:hidden items-center justify-between pt-0 border-[#E7EAF5] xl:border-[#EDEFF6]/60">
        <div
          className="flex space-x-2 space-y-0 text-[#798086] px-4 cursor-pointer"
          onClick={() => dispatch({ type: actionTypes.TOGGLE_SHOP_FILTERS })}
        >
          <AdjustmentsHorizontalIcon className="h-10 w-10" />
          <p className="select-none text-xl py-2">Filters</p>
        </div>
        <select
          id=""
          className="text-[#798086] px-4 py-2 bg-white border border-[#EDEFF6]"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="Price (Low to High)">Price (Low to High)</option>
          <option value="Price (High to Low)">Price (High to Low)</option>
        </select>
      </section>

      {/* Filter and Sort Options for Desktop */}
      <section className="hidden xl:flex items-center justify-between pt-0 border-[#E7EAF5] xl:border-[#EDEFF6]/60">
        <div className="flex space-x-2 space-y-0 text-[#798086] px-4 cursor-pointer">
        </div>
        <select
          id=""
          className="text-[#798086] px-4 py-2 bg-white border border-[#EDEFF6]"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="Price (Low to High)">Price (Low to High)</option>
          <option value="Price (High to Low)">Price (High to Low)</option>
        </select>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-5 xl:gap-x-2 xl:gap-y-8 place-items-center">
        {currentProducts.map((product) => (
          <Product
            key={product._id}
            title={product.Title}
            _id={product._id}
            company={product.Company}
            purchaseInfo={product.PurchaseInfo}
            imageLinks={product.ImageLinks}
            productDepartment={departmentTitle}
            productSubDepartment={subDepartmentTitle}
          />
        ))}
      </section>

      {/* Pagination Controls */}
      <section className="flex justify-center space-x-2 mt-5">
        {renderPagination()}
      </section>
    </div>
  );
};

export default Products;
