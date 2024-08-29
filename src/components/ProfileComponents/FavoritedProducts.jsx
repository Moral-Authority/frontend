import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_FAVORITES_QUERY } from '../../graphql/Queries.js';
import ProductCard from "../Products/Product";

const FavoritedProducts = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_FAVORITES_QUERY, {
    variables: { id: userId }, // Ensure it matches the query variable
  });

  if (loading) return <p>Loading favorites...</p>;
  if (error) {
    console.error("GraphQL query error:", error);
    console.error("Network error:", error.networkError?.result?.errors);
    return <p>Error loading favorites: {error.message}</p>;
  }

  console.log("DATA:", data); // This should now log the correct data

  return (
    <div>
      <h2>Your Favorite Products</h2>
      {data.getAllUserFavs.length > 0 ? (
        data.getAllUserFavs.map((fav) => (
          <div key={fav.id}>
            <ProductCard 
              productId={fav.product._id} 
              title={fav.product.Title} 
              favorite={true} 
              userId={userId} 
            />
          </div>
        ))
      ) : (
        <p>No favorite products yet.</p>
      )}
    </div>
  );
};

export default FavoritedProducts;
