import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom"; // Import useLocation
// import { GET_USER_REVIEWS } from '../../graphql/Queries.js';
import ProductReviewsUserProfileView from "../Products/ProductReviewsUserProfileView.jsx";

const Reviews = ({ userId }) => {
//   const { loading, error, data, refetch } = useQuery(GET_USER_REVIEWS, {
//     variables: { id: userId },
//   });

//   const location = useLocation();

//   useEffect(() => {
//     // Refetch the query when the route changes
//     refetch();
//   }, [location, refetch]);

//   if (loading) return <p>Loading favorites...</p>;
//   if (error) {
//     console.error("GraphQL query error:", error);
//     console.error("Network error:", error.networkError?.result?.errors);
//     return <p>Error loading favorites: {error.message}</p>;
//   }

  // Add a null check for data.getAllUserFavs
  const reviews = [];
  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((fav) => (
          <div key={fav.id}>
            <ProductReviewsUserProfileView
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
        <p>No Reviews Yet.</p>
      )}
    </div>
  );
};

export default Reviews;
