import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { SEARCH_PRODUCTS } from '../../graphql/Queries';
import ProductCard from "../Products/ProductCard.jsx";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProducts, { loading, error, data }] = useLazyQuery(SEARCH_PRODUCTS);  // Added `data` here

  const handleSearch = () => {
    if (searchTerm.trim()) {
      searchProducts({ variables: { input: searchTerm } });
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full">
      {/* Search Input */}
      <div className="flex items-center border-b border-gray-300 py-1 w-full space-x-2">
        <MagnifyingGlassIcon className="h-6 w-6" onClick={handleSearch} />
        <input
          type="search"
          className="w-full placeholder:text-black focus:outline-none"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Search Results Dropdown */}
      {searchTerm && (
        <div className="absolute left-0 top-10 bg-white shadow-lg w-screen z-50 max-h-[500px] overflow-y-auto">
          {loading && <p className="p-2">Loading...</p>}
          {error && <p className="p-2">Error: {error.message}</p>}
          {data && data.search.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {data.search.map((product) => (
                <ProductCard 
                  key={product._id}
                  productId={product._id} 
                  title={product.Title} 
                  imageLinks={product.ImageLinks}
                  price={product.PurchaseInfo[0].Price}
                  favorite={false} 
                  userId={0} 
                  productDepartment={product.Department}
                />
              ))}
            </div>
          ) : (
            <p className="p-2">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
