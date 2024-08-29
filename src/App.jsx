import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MobileNav from "./components/Navbar/MobileNav";
import { useStateValue } from "./utils/stateProvider/useStateValue";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_FAVORITES_QUERY } from "./graphql/Queries.js";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import FavoritedProducts from "./components/ProfileComponents/FavoritedProducts";
import ProductsReview from "./components/ProfileComponents/ProductsReview";
import Product from "./pages/Product";
import PrivacyPolicy from "./pages/privacyPolicy";

export const App = () => {
  const [{ navMenu, user }, dispatch] = useStateValue();

  const { data, error, loading } = useQuery(GET_FAVORITES_QUERY, {
    variables: { id: user?.id },
    skip: !user?.id,
  });

  useEffect(() => {
    if (data?.getAllUserFavs) {
      const favorites = data.getAllUserFavs.map((fav) => fav.product._id);
      dispatch({
        type: "SET_FAVORITES",
        favorites,
      });
    }

    if (error) {
      console.error("Error loading favorites:", error);
    }
  }, [data, error, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading app: {error.message}</p>;

  return (
    <Router>
      <AnimatePresence>
        {navMenu ? (
          <MobileNav key="mobileNav" />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/create-account" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/product/:id" element={<Product />} /> 
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {user && (
                <Route path="/profile" element={<Profile />}>
                  <Route index element={<FavoritedProducts userId={user?.id} />} />
                  <Route path="favorited" element={<FavoritedProducts userId={user?.id} />} />
                  <Route path="products-reviews" element={<ProductsReview />} />
                </Route>
              )}
            </Routes>
          </>
        )}
      </AnimatePresence>
    </Router>
  );
};
