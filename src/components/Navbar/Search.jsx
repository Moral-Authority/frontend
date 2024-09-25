import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { SEARCH_PRODUCTS } from '../../graphql/Queries';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProducts, { loading, error, data }] = useLazyQuery(SEARCH_PRODUCTS);
 
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

console.log(data)
  return (
    <div className="w-full flex justify-center">
      {/* Search Input */}
      <div className="flex items-center rounded-xl border border-gray-300 py-1 w-1/2 space-x-2">
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
    <div className="absolute left-0 top-20 bg-white shadow-lg w-full z-50 max-h-[500px] overflow-y-auto">
      {loading && <p className="p-2">Loading...</p>}
      {error && <p className="p-2">Error: {error.message}</p>}
      {data && data.search.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 w-full max-w-3xl mx-auto">
            {data.search.map((product) => (
            <Link
                key={product._id}
                className="w-full"
                to={`/product/${product.Department}/${product.subDepartment}/${product._id}`}
            >
                <div className="flex w-full max-w-[220px] border-2 p-1 space-x-2 border-[#EDEFF6]">
                <div className="bg-[#F6FBFF] w-1/3 flex justify-center items-center">
                    <img
                    className="w-full h-full object-contain"
                    src={product.ImageLinks[0]}  // Add fallback for missing images
                    alt={product.Title}
                    />
                </div>
                <div className="flex flex-col justify-between w-2/3">
                    <p className="text-sm text-[#D6AD60]"style={{ fontSize: '90%' }}>{product.Title}</p>
                    <p className="text-[#5F646F] text-base">${product.PurchaseInfo[0].Price}</p>  
                </div>
                </div>
            </Link>
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
