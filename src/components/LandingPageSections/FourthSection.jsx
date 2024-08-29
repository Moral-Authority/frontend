import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../graphql/Queries';
import Product from "../ShopComponents/Product";
import { useStateValue } from "../../utils/stateProvider/useStateValue"; // Import your state provider
import './fourthSection.css';

const FourthSection = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const [{ user, favorites }] = useStateValue(); // Access user and favorites from the global state

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Get the first 4 products to display
  const productsToDisplay = data.getAllProducts.slice(0, 4);

  return (
    <div className="fourth-section-container">
      <div className="title-container">
        <div className="section-divider"></div>
        <h6 className="section-title">Newest Products</h6>
      </div>
      <section className="section-items">
        {productsToDisplay.map((product) => (
          <Product
            key={product._id}
            title={product.Title}
            _id={product._id} // Pass the product ID
            user={user} // Pass user state
            isFavorite={favorites.has(product._id)} // Check if the product is in favorites
          />
        ))}
      </section>
    </div>
  );
};

export default FourthSection;
