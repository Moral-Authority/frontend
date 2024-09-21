import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT } from "@/graphql/Queries";
import Product from "./Product";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { useParams } from "react-router-dom"; 
import Pagination from "./Pagination"; // Import Pagination component

const Products = () => {
  const [{ filteredProducts, filtered }, dispatch] = useStateValue();
  const { department, subDepartment, searchTerm } = useParams(); 
  const [sortOption, setSortOption] = useState("Price (Low to High)");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  let products = [];

  // Fetch products based on search term or department/subDepartment
  if (searchTerm) {
    products = filteredProducts && filteredProducts.length > 0 ? filteredProducts : [];
  } else {
    const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT, {
      variables: { department, subDepartment },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products. Please try again later.</p>;

    if (data && data.getAllProductsBySubDepartment.length > 0) {
      products = data.getAllProductsBySubDepartment;
    }
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

  return (
    <div className="flex space-y-5 flex-col border-b pb-10 h-full w-full xl:w-3/4">
      {/* Filter and Sort Options for Desktop */}
      <section className="flex xl:flex items-center justify-between pt-0 border-[#E7EAF5] xl:border-[#EDEFF6]/60">
        <select
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
            productDepartment={department}
            productSubDepartment={subDepartment}
          />
        ))}
      </section>

      {/* Pagination Controls */}
      <section className="flex justify-center space-x-2 mt-5">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </section>
    </div>
  );
};

export default Products;
