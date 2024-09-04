import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom"; // Import useLocation
import { GET_FAVORITES_QUERY } from '../../graphql/Queries.js';
import ProductCard from "../Products/ProductCard.jsx";

const FavoritedProducts = ({ userId }) => {
  const { loading, error, data, refetch } = useQuery(GET_FAVORITES_QUERY, {
    variables: { id: userId },
  });

  const location = useLocation();

  useEffect(() => {
    // Refetch the query when the route changes
    refetch();
  }, [location, refetch]);

  if (loading) return <p>Loading favorites...</p>;
  if (error) {
    console.error("GraphQL query error:", error);
    console.error("Network error:", error.networkError?.result?.errors);
    return <p>Error loading favorites: {error.message}</p>;
  }

  // Add a null check for data.getAllUserFavs
  const favorites = data?.getAllUserFavs || [];
  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map((fav) => (
          <div key={fav.id}>
            <ProductCard 
              productId={fav.product._id} 
              title={fav.product.Title} 
              imageLinks={fav.product.ImageLinks}
              price={fav.product.PurchaseInfo[0].Price}
              favorite={true} 
              userId={userId} 
              productDepartment={fav.product.Department}
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
