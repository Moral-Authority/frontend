import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import Product from "../ShopComponents/Product";
import { useStateValue } from "@/utils/stateProvider/useStateValue";
import { SEARCH_PRODUCTS, GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT } from "../../graphql/Queries";

const RelatedProducts = ({ title, department, subDepartment }) => {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [{ user, favorites }] = useStateValue(); // Assuming user and favorites are in global state
  console.log("Title:", title);
  console.log("Department:", department);
  console.log("SubDepartment:", subDepartment);
  
  // First query to search products by a specific input (e.g., "cleanser")
  const { data: searchData, loading: searchLoading, error: searchError } = useQuery(SEARCH_PRODUCTS, {
    variables: { input: title },
  });

  // Second query to fetch products if the first query returns 1 or fewer results
  const { data: subDepartmentData, loading: subDepartmentLoading, error: subDepartmentError } = useQuery(GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT, {
    variables: { department: department, subDepartment: subDepartment },
    skip: searchData?.search.length > 1, // Skip this query if the first query returns more than one result
  });

  useEffect(() => {
    // If the first query returns more than 1 result, use those results
    if (searchData?.search.length > 1) {
      setProductsToDisplay(searchData.search.slice(0, 10));
    }
    // Otherwise, use the second query results if available
    else if (subDepartmentData?.getAllProductsBySubDepartment.length > 0) {
      setProductsToDisplay(subDepartmentData.getAllProductsBySubDepartment.slice(0, 10));
    }
  }, [searchData, subDepartmentData]);

  if (searchLoading || subDepartmentLoading) return <p>Loading...</p>;
  if (searchError || subDepartmentError) return <p>Error: {searchError?.message || subDepartmentError?.message}</p>;

  return (
    <div className="related-products">
      {productsToDisplay.length === 0 ? (
        <p>No related products found.</p>
      ) : (
        productsToDisplay.map((product) => (
          <Product
            key={product._id}
            title={product.Title}
            _id={product._id}
            user={user}
            isFavorite={favorites?.has(product._id)}
            company={product.Company}
            purchaseInfo={product.PurchaseInfo}
            imageLinks={product.ImageLinks}
            productDepartment={department}
          />
        ))
      )}
    </div>
  );
};

export default RelatedProducts;
