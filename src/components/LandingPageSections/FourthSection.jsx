import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT } from '../../graphql/Queries.js';
import Product from "../ShopComponents/Product";
import { useStateValue } from "../../utils/stateProvider/useStateValue"; // Import your state provider
import './fourthSection.css';

const FourthSection = () => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS_BY_SUB_DEPARTMENT, {
    variables: { department: "Home & Garden", subDepartment: "Cleaning Supplies" },
  });
  
  const [{ user, favorites }] = useStateValue(); // Access user and favorites from the global state

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Check if there are any products
  const productsToDisplay = data?.getAllProductsBySubDepartment?.slice(0, 4) || [];
  console.log("productsToDisplay:",productsToDisplay);
  return (
    <div className="fourth-section-container">
      <div className="title-container">
        <div className="section-divider"></div>
        <h6 className="section-title">Newest Products</h6>
      </div>
      <section className="section-items">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            <Product
              key={product._id}
              title={product.Title}
              _id={product._id} // Pass the product ID
              user={user} // Pass user state
              isFavorite={favorites.has(product._id)} // Check if the product is in favorites
              company={product.Company} 
              purchaseInfo={product.PurchaseInfo}
              imageLinks={product.ImageLinks}
              productDepartment={"Home & Garden"} // Pass the department
            />
          ))
        ) : (
          <p>No newly added products</p>
        )}
      </section>
    </div>
  );
};

export default FourthSection;
