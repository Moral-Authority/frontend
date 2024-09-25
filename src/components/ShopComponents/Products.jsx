import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT } from "@/graphql/Queries";
import Product from "./Product";
import Pagination from "./Pagination";
import SortProducts from "./SortProducts";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { useParams } from "react-router-dom";

const Products = () => {
  const [{ filteredProducts}] = useStateValue();
  const { department, subDepartment, searchTerm } = useParams(); 
  const [sortOption, setSortOption] = useState("Price (Low to High)");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  let products = [];

    // Always call useQuery, but only use its data if no search term
    const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT, {
      variables: { department, subDepartment },
      skip: !!searchTerm && filteredProducts.length > 0,  // Skip if using search results
    });
  

  // Use filtered products if the search term is present, otherwise use query data
  if (searchTerm && filteredProducts.length > 0) {
    products = filteredProducts;
  } else if (data && data.getAllProductsBySubDepartment && data.getAllProductsBySubDepartment.length > 0) {
    products = data.getAllProductsBySubDepartment;
  }

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products. Please try again later.</p>;

  // If no products are found
  if (products.length === 0) {
    return searchTerm ? <p>No products found.</p> : <p>Coming soon!</p>;
  }

  // If no products are found
  if (products.length === 0) {
    return searchTerm ? <p>No products found.</p> : <p>Coming soon!</p>;
  }

  // Update sorted products when products or sort option change
  useEffect(() => {
    const sortProducts = (option, productsToSort) => {
      const sorted = [...productsToSort];
      if (option === "Price (Low to High)") {
        sorted.sort((a, b) => a.PurchaseInfo[0].Price - b.PurchaseInfo[0].Price);
      } else if (option === "Price (High to Low)") {
        sorted.sort((a, b) => b.PurchaseInfo[0].Price - a.PurchaseInfo[0].Price);
      }
      return sorted;
    };

    const sorted = sortProducts(sortOption, products);
    setSortedProducts(sorted);
  }, [sortOption, products]);

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
    <div className="flex bg-red space-y-5 flex-col border-b pb-10 h-full w-full xl:w-3/4">
      
      {/* Sort Options */}
      <section className="flex xl:flex items-center justify-between pt-0 border-[#E7EAF5] xl:border-[#EDEFF6]/60 xl:pr-10 lg:pr-10 md:pr-10">
        <SortProducts
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-x-2 xl:gap-y-8 place-items-center">
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
